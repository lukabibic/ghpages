window.BENCHMARK_DATA = {
  "lastUpdate": 1682107696823,
  "repoUrl": "https://github.com/risc0/risc0",
  "entries": {
    "macOS-cpu": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677268645890,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4080768397,
            "range": "± 36964337",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4116963037,
            "range": "± 58260103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069260973,
            "range": "± 9987294",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1062913807,
            "range": "± 4770931",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677283424030,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4004992902,
            "range": "± 24430613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4056342101,
            "range": "± 50180922",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1068643689,
            "range": "± 12425307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1075797874,
            "range": "± 11528393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kuba.plaskonka@gmail.com",
            "name": "Kuba Płaskonka",
            "username": "kubaplas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b",
          "message": "Using Blake2b as a hash function (#401)",
          "timestamp": "2023-02-25T11:28:56-08:00",
          "tree_id": "1703efd636c4bcb4944b3702d306432b4842bf20",
          "url": "https://github.com/risc0/risc0/commit/d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b"
        },
        "date": 1677354598445,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4013681209,
            "range": "± 50570361",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4049967478,
            "range": "± 37433892",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1078328273,
            "range": "± 12517729",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1074277482,
            "range": "± 11034495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e552494ff836ab2fe24a597c8e6db095dc87020a",
          "message": "Add \"copy-in\" to rv32 circuit (#390)\n\n* Add \"copy-in\" to rv32 circuit\r\n\r\n* New major cycle type copies in data from the host at 4 words per cycle\r\n* SOFTWARE ecall type now takes:\r\n     a0: destination buffer pointer\r\n     a1: destination size in chunks (words / 4, bytes / 16)\r\n  and can modify a0 and a1 to return data in registers.\r\n  It uses the COPY_IN cycle, and calls the following externs:\r\n    syscall-init: Tells the host to start a syscall\r\n    syscall-body: Gather the next 4 words to transfer from the host to the guest\r\n    syscall-fini: Gather the 2 register outputs from the host\r\n* SYS_IO takes the following additional args:\r\n     a2: source buffer pointer\r\n     a3: source buffer size in bytes\r\n     a4: channel id\r\n  SYS_IO returns arbitrary data from the host in a0 and a1 for data that's small enough to not need a buffer allocated.  (This matches return values in the riscv calling conventions to minimize overhead)\r\n* Removed SYS_COMPUTE_POLY; functionality replaced by SENDRECV_CHANNEL_COMPUTE_POLY via SYS_IO  (Hopefully we can eventually get rid of this)\r\n* Removed SYS_COMMIT; functionality replaced by SENDRECV_CHANNEL_COMMIT via SYS_IO\r\n* Updated guest::env for new SYS_IO API\r\n\r\n* Add test to make sure eval_check doesn't grow unexpectedly\r\n\r\n* Update sendrecv api\r\n\r\n* Change copy-in to be able to copy arbitrary number of words\r\n\r\nIn contrast to only being able to copy multiples of 4 words.\r\n\r\n* Separate send_recv guest API into send_recv_raw and send_recv_slice\r\n\r\nThis seems cleaner and less confusing to me.\r\n\r\n* Update sendrecv api in waldo example\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-02-27T09:26:16-08:00",
          "tree_id": "78f8ebc64a28721478515b7e272c1916ef050867",
          "url": "https://github.com/risc0/risc0/commit/e552494ff836ab2fe24a597c8e6db095dc87020a"
        },
        "date": 1677520143723,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4174493999,
            "range": "± 39255015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4172946354,
            "range": "± 126894304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1087556005,
            "range": "± 24754348",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1065274687,
            "range": "± 14397855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677528925594,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4212826687,
            "range": "± 66726237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4279462113,
            "range": "± 49615495",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069173154,
            "range": "± 5927511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1072754720,
            "range": "± 7408604",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538909511,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4395397223,
            "range": "± 27776414",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4404124642,
            "range": "± 27107440",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1324585579,
            "range": "± 8887954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1324504471,
            "range": "± 6541762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677541720721,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4274387790,
            "range": "± 47270329",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4306901057,
            "range": "± 80406957",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1072488557,
            "range": "± 5649175",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1070901373,
            "range": "± 3589585",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677635250918,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3850701759,
            "range": "± 32647009",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3850991470,
            "range": "± 30198745",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1075193014,
            "range": "± 15648613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1082983756,
            "range": "± 12556455",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677641892662,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3849867439,
            "range": "± 21910047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3883057258,
            "range": "± 30305433",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1089322764,
            "range": "± 8990610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1077353305,
            "range": "± 9298263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677733137808,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3859902326,
            "range": "± 32409020",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3873692431,
            "range": "± 21213050",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1074834408,
            "range": "± 12618801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1076852800,
            "range": "± 11534457",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677785121386,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3937935418,
            "range": "± 50437899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3998015099,
            "range": "± 21384911",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069570573,
            "range": "± 4087631",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1066830199,
            "range": "± 4423864",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865760280,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2103521083,
            "range": "± 9225674",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2096751645,
            "range": "± 20875968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677720458,
            "range": "± 1229825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 678651437,
            "range": "± 848057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888422856,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2094572124,
            "range": "± 29835092",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2094355041,
            "range": "± 9765286",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677628270,
            "range": "± 805555",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 678105166,
            "range": "± 933843",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226370347,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2093771958,
            "range": "± 11305704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2087629791,
            "range": "± 10269102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 676743812,
            "range": "± 1255195",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 677897374,
            "range": "± 515060",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312439667,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2105017166,
            "range": "± 30793605",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2102693541,
            "range": "± 5838811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677110583,
            "range": "± 1114162",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 677964854,
            "range": "± 852547",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324739113,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2158632249,
            "range": "± 15835220",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155642999,
            "range": "± 10111048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777846353,
            "range": "± 1426576",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779701666,
            "range": "± 948038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384051957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2165794145,
            "range": "± 14761687",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2159367312,
            "range": "± 11681167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777574770,
            "range": "± 727580",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778816562,
            "range": "± 1290995",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397640730,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153390500,
            "range": "± 8548339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2172853312,
            "range": "± 15670677",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779862499,
            "range": "± 694763",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780999874,
            "range": "± 1004211",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399942886,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2185220708,
            "range": "± 23338607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2181155604,
            "range": "± 10180747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779467354,
            "range": "± 1228157",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780275375,
            "range": "± 1739426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416519038,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153750978,
            "range": "± 7302648",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2163491083,
            "range": "± 9900921",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779161583,
            "range": "± 1212723",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779984562,
            "range": "± 847022",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678480805061,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2154588541,
            "range": "± 9018316",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155437437,
            "range": "± 4201064",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778037812,
            "range": "± 1066240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779307916,
            "range": "± 1269647",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602153086,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2169348937,
            "range": "± 14880158",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2152600708,
            "range": "± 9022190",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778783208,
            "range": "± 533045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779409749,
            "range": "± 442618",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678602618281,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2174073208,
            "range": "± 18802121",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2171227499,
            "range": "± 19509889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778736749,
            "range": "± 1129255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779117124,
            "range": "± 1280717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821012212,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2160441603,
            "range": "± 26055632",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2162026645,
            "range": "± 25559257",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778882041,
            "range": "± 944370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779967562,
            "range": "± 2452468",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678909830546,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2156687541,
            "range": "± 9855799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155372125,
            "range": "± 20943219",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778438562,
            "range": "± 1417714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778844000,
            "range": "± 1165898",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926568934,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2158331166,
            "range": "± 15441839",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2154986999,
            "range": "± 7835828",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778078104,
            "range": "± 743733",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778957312,
            "range": "± 967663",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071135238,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2154611687,
            "range": "± 13952016",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2169123166,
            "range": "± 14839958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 776805083,
            "range": "± 1352954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 777603208,
            "range": "± 1369690",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076506901,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2163304062,
            "range": "± 8286395",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2168682083,
            "range": "± 8392283",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 776571645,
            "range": "± 1257742",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 777624020,
            "range": "± 708649",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081840864,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2162268187,
            "range": "± 13024852",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2159501041,
            "range": "± 10469501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777628708,
            "range": "± 912186",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778107875,
            "range": "± 766074",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efc329caf24e647cc82fcb2d806190dc1e11695",
          "message": "Split core zkp kernels and rv32im kernel into seperate sys crates (#449)\n\nSplit core zkp kernels and rv32im kernel into seperate sys crates",
          "timestamp": "2023-03-17T15:02:59-07:00",
          "tree_id": "796b860064e1078ed2de6ed22158fd48f29d8526",
          "url": "https://github.com/risc0/risc0/commit/8efc329caf24e647cc82fcb2d806190dc1e11695"
        },
        "date": 1679090776863,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153584895,
            "range": "± 12617888",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2163177270,
            "range": "± 23499172",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 776897833,
            "range": "± 911782",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 777698770,
            "range": "± 542512",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c66bef66717d1fc34a353fc36bdab94bf98f5f8",
          "message": "Support for stdin and getenv in guest (#452)\n\n* Actually export the sys_* ABI symbols without mangling them\r\n* Add sys_getenv to get environment variables\r\n* Add with_env_var to ProverOpts to specify environment variables to include for the guest\r\n* Add --env VARNAME=value option to r0vm to specify environment variables to include\r\n* Plumb through stdin() so that std::io::stdin() works in the guest as expected\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T16:23:58-07:00",
          "tree_id": "c1dba25c3334f75d99d08a46ece76aec4a5da1e2",
          "url": "https://github.com/risc0/risc0/commit/7c66bef66717d1fc34a353fc36bdab94bf98f5f8"
        },
        "date": 1679095626162,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153697145,
            "range": "± 11427446",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2154728458,
            "range": "± 12103905",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778171395,
            "range": "± 675731",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779004729,
            "range": "± 1209515",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81839854+justinFrevert@users.noreply.github.com",
            "name": "justinFrevert",
            "username": "justinFrevert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "285039cf9adf8bb0b4be8b598cae69367d8bbf25",
          "message": "Add no-std fix for WASM/Substrate chains (#438)",
          "timestamp": "2023-03-19T11:27:07-07:00",
          "tree_id": "4b416cf74c8156c1cb9f6171995149277391177d",
          "url": "https://github.com/risc0/risc0/commit/285039cf9adf8bb0b4be8b598cae69367d8bbf25"
        },
        "date": 1679250629900,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2163131000,
            "range": "± 19644061",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2153913208,
            "range": "± 21477959",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777867020,
            "range": "± 717385",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780424104,
            "range": "± 1039574",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0953b45512684376f48d312f399fa2f5bcc50a34",
          "message": "Add support for Cuda Poseidon hal. (#454)",
          "timestamp": "2023-03-19T21:12:36-07:00",
          "tree_id": "339d3df331a2537ff5ed2da3baab1a0368444676",
          "url": "https://github.com/risc0/risc0/commit/0953b45512684376f48d312f399fa2f5bcc50a34"
        },
        "date": 1679285745996,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2158783479,
            "range": "± 9945898",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2160196624,
            "range": "± 19131734",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778336499,
            "range": "± 1533473",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778965478,
            "range": "± 709557",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba",
          "message": "Attempt to fix unzip failures (#450)",
          "timestamp": "2023-03-20T11:39:27-07:00",
          "tree_id": "0790d6b6f1f3bfbd19bda3ee37df33e9ea7f9479",
          "url": "https://github.com/risc0/risc0/commit/b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba"
        },
        "date": 1679337766120,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2165032437,
            "range": "± 10884881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2168609312,
            "range": "± 34359200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779989604,
            "range": "± 820423",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780653354,
            "range": "± 666900",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd9a56521b96ef7df3d6411577930fdf5152b1d",
          "message": "Fix kernel bug.",
          "timestamp": "2023-03-20T22:38:52Z",
          "tree_id": "d339f7373a1fe8a8e6fa682bd61a8816616c045d",
          "url": "https://github.com/risc0/risc0/commit/afd9a56521b96ef7df3d6411577930fdf5152b1d"
        },
        "date": 1679352117366,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2159318645,
            "range": "± 8423028",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2153468729,
            "range": "± 33313886",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777643041,
            "range": "± 588082",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778838666,
            "range": "± 1749057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7b19d57877577a2735e69172ea3e445a2c0c6cb",
          "message": "Adjusted benchmark workflow with PR number (#458)\n\nAdded PR number into artifact for workflow_run to pickup and correctly create a PR comment.",
          "timestamp": "2023-03-20T17:27:18-07:00",
          "tree_id": "4464642f24228823892daedbe0471f41ab367fbe",
          "url": "https://github.com/risc0/risc0/commit/e7b19d57877577a2735e69172ea3e445a2c0c6cb"
        },
        "date": 1679358627680,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2165733124,
            "range": "± 21413717",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2165503645,
            "range": "± 28364102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778010812,
            "range": "± 951044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779183250,
            "range": "± 850772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e717cfed432175f1bbba99964021edbbb3f9653",
          "message": "Reference `rust guest workarounds` tag (#451)",
          "timestamp": "2023-03-21T00:47:23-07:00",
          "tree_id": "80c55594a375a53928d5718f620428b8b543f059",
          "url": "https://github.com/risc0/risc0/commit/6e717cfed432175f1bbba99964021edbbb3f9653"
        },
        "date": 1679385037194,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2162244062,
            "range": "± 10267990",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155289270,
            "range": "± 13013846",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780077520,
            "range": "± 537217",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780869041,
            "range": "± 1458907",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc27559ad8d5f4a35712256ca38b94b394249d6d",
          "message": "Move benchmark comment files to runner.temp (#462)\n\nMoves all benchmark file artifacts to runner.temp to prevent files from being read cross-workflow or cross-job",
          "timestamp": "2023-03-21T14:04:44-07:00",
          "tree_id": "205c43e051ac8c0be7b43603509fe0820cb29be4",
          "url": "https://github.com/risc0/risc0/commit/fc27559ad8d5f4a35712256ca38b94b394249d6d"
        },
        "date": 1679432879478,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2166772478,
            "range": "± 24270531",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2162409083,
            "range": "± 22880451",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779110270,
            "range": "± 710790",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780048062,
            "range": "± 977605",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32602478+rlukata@users.noreply.github.com",
            "name": "Rami Lukata",
            "username": "rlukata"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b023e47d257926d520ce1d28c76ec3d52802fd8",
          "message": "add concurrency to ci (#463)",
          "timestamp": "2023-03-22T18:25:11Z",
          "tree_id": "690292c9180f0d15bf9d5cd297e413968f9094b9",
          "url": "https://github.com/risc0/risc0/commit/6b023e47d257926d520ce1d28c76ec3d52802fd8"
        },
        "date": 1679509706963,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2163283749,
            "range": "± 13904511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2153825854,
            "range": "± 10109710",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778828229,
            "range": "± 578596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779311958,
            "range": "± 1261330",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04645358404df28bce2807906fcbb49b0ac982c8",
          "message": "Continuations, part 1 (#461)\n\nBreaking Changes:\r\n* Drop the `image_id` parameter to the `risc0_zkvm::Prover`. The Prover already computes the image_id from the supplied ELF binary.\r\n* Replace `risc0_zkvm::MemoryImage::root` with `risc0_zkvm::MemoryImage::get_root()`, which computes the root merkle tree entry on-demand.\r\n* Drop `VerificationError::SealJournalLengthMismatch`.\r\n* Rename `VerificationError::JournalSealRootMismatch` to `VerificationError::JournalDigestMismatch`\r\n\r\nUpdates:\r\n* New rv32im circuit which includes continuations support\r\n* Add `env::pause` to the guest environment API\r\n* Add a test for pause/continue\r\n\r\nTODO:\r\n* Implement system initiated splits",
          "timestamp": "2023-03-24T03:08:10Z",
          "tree_id": "5dbd256fb9543e60796ee7db4dfc0346f9295632",
          "url": "https://github.com/risc0/risc0/commit/04645358404df28bce2807906fcbb49b0ac982c8"
        },
        "date": 1679627480082,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1590463520,
            "range": "± 24708236",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1589374937,
            "range": "± 9525882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110423770,
            "range": "± 477726",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112286354,
            "range": "± 463943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16e860e303b2a750cfdff3ff00f83a1c431f2d0",
          "message": "Migrate guest's concept of \"initial input\" to be a more standard \"stdin\". (#468)\n\n* env::read now reads from stdin by default.\r\n* risc0_zkvm::serde now serializes type \"char\" (i.e. single characters that are serialized by themselves) as its 4-byte codepoint rather than a 4-byte length followed by its serialized bytes.  Strings are unchanged.\r\n* Removed risc0_zkvm::env::Env structure, since its last remaining use is gone.\r\n* Renamed Stream{Reader,Writer} to more rusty names\r\n* New \"with_stdin\" options for ProverOpts to specify the standard input to supply to the guest; this accepts anything that implements std::io::Read.\r\n* When \"std\" is enabled, env::{stdin,stdout,stderr} implement std::io::{Read,Write}.\r\n* Deserialized objects are now owned and filled in directly instead of referencing a buffer.  This means that serialized types will need to be owned types, like \"String\" instead of \"&str\".\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-23T21:28:57-07:00",
          "tree_id": "215dd0fb2c8e350d0375f1c1ae1d94461baf28cd",
          "url": "https://github.com/risc0/risc0/commit/e16e860e303b2a750cfdff3ff00f83a1c431f2d0"
        },
        "date": 1679632336409,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1594245416,
            "range": "± 9712792",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1597523354,
            "range": "± 26949738",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110925375,
            "range": "± 702601",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112355145,
            "range": "± 497827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64ec080327be05890ffc41e7b30907be35ca20db",
          "message": "Update directories requirement from 4.0 to 5.0 (#456)\n\nUpdates the requirements on [directories](https://github.com/soc/directories-rs) to permit the latest version.\r\n- [Release notes](https://github.com/soc/directories-rs/releases)\r\n- [Commits](https://github.com/soc/directories-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: directories\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-24T07:22:45Z",
          "tree_id": "8059783cfeae33ed8039fb558069395018cc31ad",
          "url": "https://github.com/risc0/risc0/commit/64ec080327be05890ffc41e7b30907be35ca20db"
        },
        "date": 1679642765889,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1591373791,
            "range": "± 12721194",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1596522375,
            "range": "± 23123479",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110942541,
            "range": "± 363221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112680250,
            "range": "± 339976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287c6b679281dd8cbd540aa0a2d96f8393b2ee96",
          "message": "Add tool for datasheet generation (#473)",
          "timestamp": "2023-03-28T09:42:48-07:00",
          "tree_id": "ab0b57e0dcb56e6b5592e446015d9c038bdd3c2c",
          "url": "https://github.com/risc0/risc0/commit/287c6b679281dd8cbd540aa0a2d96f8393b2ee96"
        },
        "date": 1680021979647,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1609504895,
            "range": "± 11232617",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1598795187,
            "range": "± 7607715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111356374,
            "range": "± 980630",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112966312,
            "range": "± 628638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd1a37e774bf8284d45d7dbb118034174627551c",
          "message": "Added `prod` label to workflows` (#475)",
          "timestamp": "2023-03-28T14:21:30-07:00",
          "tree_id": "bf9d475e21f7beea421325c91234a14a1f74aa5d",
          "url": "https://github.com/risc0/risc0/commit/cd1a37e774bf8284d45d7dbb118034174627551c"
        },
        "date": 1680038683262,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1600056541,
            "range": "± 10400822",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1601304208,
            "range": "± 25199703",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111170500,
            "range": "± 620578",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113346000,
            "range": "± 641939",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06749f637515ff1e00c9818ffd7498b9d2d7965f",
          "message": "cargo-risczero tool (#453)\n\n* Add cargo-risczero tool / crate\r\n\r\n* Added a `new` command to the cargo-risczero tool for generating from templates\r\n\r\n* Imported the risc0-rust-starter template as a cargo-generate template for the new command to pull from\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-28T16:47:19-07:00",
          "tree_id": "bc312aa30810429a133136c814d4008b7c3fdacd",
          "url": "https://github.com/risc0/risc0/commit/06749f637515ff1e00c9818ffd7498b9d2d7965f"
        },
        "date": 1680047437861,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1598527020,
            "range": "± 7538171",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1595793812,
            "range": "± 13708114",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113667333,
            "range": "± 439425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115987979,
            "range": "± 568204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b271b2d6f28d152f1e58934b15bdad67cc8835f",
          "message": "Fixed a typo in `risczero new` template (#477)",
          "timestamp": "2023-03-28T23:00:36-07:00",
          "tree_id": "410d1385f7adc2355af3fb38a1dcced54d231759",
          "url": "https://github.com/risc0/risc0/commit/2b271b2d6f28d152f1e58934b15bdad67cc8835f"
        },
        "date": 1680069839932,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1600356458,
            "range": "± 13413225",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1597610479,
            "range": "± 19348030",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110402624,
            "range": "± 455196",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112314833,
            "range": "± 532996",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efc09afaf27aa5a97621a2b96fa2d9d5595421a9",
          "message": "Fixes for cargo-risczero new (#480)",
          "timestamp": "2023-03-29T13:20:28-07:00",
          "tree_id": "c5e9be81791d0dd6b8c6a39d8b0936cdaa672a7b",
          "url": "https://github.com/risc0/risc0/commit/efc09afaf27aa5a97621a2b96fa2d9d5595421a9"
        },
        "date": 1680121424017,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1595343187,
            "range": "± 6873287",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1594718062,
            "range": "± 31034805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110359312,
            "range": "± 546101",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112112166,
            "range": "± 583053",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2af172d9b3a0b13e1139d880b5bfe3c1f193efc",
          "message": "Update template & examples references (#478)",
          "timestamp": "2023-03-29T21:01:54Z",
          "tree_id": "e534854e319627fb5c9ee32a70f153d91b2ecbfa",
          "url": "https://github.com/risc0/risc0/commit/c2af172d9b3a0b13e1139d880b5bfe3c1f193efc"
        },
        "date": 1680123911358,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1601878020,
            "range": "± 25858697",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1601035020,
            "range": "± 6479358",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111423312,
            "range": "± 474816",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113277145,
            "range": "± 501380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "distinct": true,
          "id": "77205f046f726f948eea0958247b2d8eb054f8cf",
          "message": "Fix crate publish error",
          "timestamp": "2023-03-29T15:28:59-07:00",
          "tree_id": "a9bb243500201b9c0efd01117335002f8e4e6f5a",
          "url": "https://github.com/risc0/risc0/commit/77205f046f726f948eea0958247b2d8eb054f8cf"
        },
        "date": 1680129233457,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1606271687,
            "range": "± 7654051",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1615999250,
            "range": "± 25497521",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 116704229,
            "range": "± 601691",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 117308874,
            "range": "± 595679",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23e362b536a27920d9de79797f7f97c21cf52b53",
          "message": "Update serial_test requirement from 1.0 to 2.0 (#486)\n\nUpdates the requirements on [serial_test](https://github.com/palfrey/serial_test) to permit the latest version.\r\n- [Release notes](https://github.com/palfrey/serial_test/releases)\r\n- [Commits](https://github.com/palfrey/serial_test/compare/v1.0.0...v2.0.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serial_test\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-30T17:58:33Z",
          "tree_id": "5e94c0f5e7fb320e18e88faba8c0e6e8fd2390df",
          "url": "https://github.com/risc0/risc0/commit/23e362b536a27920d9de79797f7f97c21cf52b53"
        },
        "date": 1680199338433,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1600514603,
            "range": "± 8146296",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1602292895,
            "range": "± 18969911",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110576916,
            "range": "± 801993",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112556166,
            "range": "± 504847",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cfe6427921e6dd3eab28fb53fe7ff9973e092bf",
          "message": "Removed Snakecase from risczero new proj name (#487)",
          "timestamp": "2023-03-30T15:50:51-07:00",
          "tree_id": "049694ea85fe9558072ed3856ceca42988c2fd19",
          "url": "https://github.com/risc0/risc0/commit/3cfe6427921e6dd3eab28fb53fe7ff9973e092bf"
        },
        "date": 1680216844720,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1599708624,
            "range": "± 6185842",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1593950333,
            "range": "± 15650639",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110556500,
            "range": "± 438024",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112312124,
            "range": "± 496669",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e49163c66cc4ad3f2fecee8a5adac71647fb21",
          "message": "Align examples with template (#488)",
          "timestamp": "2023-03-31T09:54:34-07:00",
          "tree_id": "d22e55dd3d31c49e37ab43e236009f297a105a93",
          "url": "https://github.com/risc0/risc0/commit/d1e49163c66cc4ad3f2fecee8a5adac71647fb21"
        },
        "date": 1680281867582,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1615630645,
            "range": "± 17496050",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1610323979,
            "range": "± 18329750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111562791,
            "range": "± 897772",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112888666,
            "range": "± 612025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "034fc69c4f490ed4d60d4250cc4f0a672d7a11b1",
          "message": "Added RISC0_CUDA_OPT env var and default to -O1 (#492)\n\n* Default CUDA ptxas optimization levels of -O1 to improve build times but add env var fallback",
          "timestamp": "2023-03-31T15:28:16-07:00",
          "tree_id": "7b28dfc80b404e52bfa96eb6ba735afc5c36f596",
          "url": "https://github.com/risc0/risc0/commit/034fc69c4f490ed4d60d4250cc4f0a672d7a11b1"
        },
        "date": 1680301896412,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1600618312,
            "range": "± 32757203",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1601119604,
            "range": "± 18887349",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110839687,
            "range": "± 429053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112966062,
            "range": "± 783041",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8f18bdb21a288ad2535676f29b54116375de160",
          "message": "Preflight progress (#482)\n\n* Rename Preflight->preflight::ExecState\r\n* Add ExecState::segmentize method to generate execution segments\r\n* Proofs can now be generated off of segments\r\n* All tests pass with RISC0_EXPERIMENTAL_PREFLIGHT=1 except tests::do_random and tests::trace.\r\n\r\nStill todo:\r\n\r\n* Better paging support, including better page fault calculation for page ins, and reserving cycles for pgae outs.\r\n* Verify host-initiated splits work properly once #469 lands.\r\n* Integrate into r0vm so it can both read and write Segments\r\n* Add an A/B test mode to compare preflight output against step_exec to make sure everything executes in the same way, including memory, registers, program counters, and cycle counts.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-01T09:34:51Z",
          "tree_id": "f61706c49a8a49dcba3253964bdd1a365342993b",
          "url": "https://github.com/risc0/risc0/commit/d8f18bdb21a288ad2535676f29b54116375de160"
        },
        "date": 1680341888083,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1603213187,
            "range": "± 29201963",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1596142229,
            "range": "± 10499466",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110252000,
            "range": "± 451260",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112440708,
            "range": "± 575294",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c657ca0747947db4b890751853c2d3358d820f31",
          "message": "Update memory map and drop unused code (#491)",
          "timestamp": "2023-04-04T19:44:32Z",
          "tree_id": "550b25230e92045bfa956af44fc6f400656887e7",
          "url": "https://github.com/risc0/risc0/commit/c657ca0747947db4b890751853c2d3358d820f31"
        },
        "date": 1680637663533,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1598990916,
            "range": "± 7609881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1595552729,
            "range": "± 7032471",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110879499,
            "range": "± 649770",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112569291,
            "range": "± 651697",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b54a0b3b9a9f67da6263b9892c418db0f010a8a1",
          "message": "Moved tempdir for risc0-build into cache_dir (#497)",
          "timestamp": "2023-04-04T23:19:20Z",
          "tree_id": "f9d924e52ddc41a3e6a77e2bf99125dc2022e055",
          "url": "https://github.com/risc0/risc0/commit/b54a0b3b9a9f67da6263b9892c418db0f010a8a1"
        },
        "date": 1680650546897,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1603843499,
            "range": "± 12252079",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1596838083,
            "range": "± 8352182",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 109983979,
            "range": "± 356664",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 111638104,
            "range": "± 664031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96deb8515ec614d36482619122b46584376b20e5",
          "message": "Fixed risc0-build deadlock / double build (#498)",
          "timestamp": "2023-04-05T08:41:16-07:00",
          "tree_id": "a7edb04dd142e08639573ecf30eb4df2f6ee4ed9",
          "url": "https://github.com/risc0/risc0/commit/96deb8515ec614d36482619122b46584376b20e5"
        },
        "date": 1680709491908,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1590121750,
            "range": "± 8749592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1594287374,
            "range": "± 11292768",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110248978,
            "range": "± 693675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112021166,
            "range": "± 654198",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2fcc90a36c3f7613de089840e27db591630acc5",
          "message": "Added RISC0_GUEST_LOGFILE and fixed clippy warns (#499)",
          "timestamp": "2023-04-05T10:32:02-07:00",
          "tree_id": "6378944d4e68645299bb69e7f6184f8a47b2e401",
          "url": "https://github.com/risc0/risc0/commit/d2fcc90a36c3f7613de089840e27db591630acc5"
        },
        "date": 1680716118125,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1588752854,
            "range": "± 9260671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1596826708,
            "range": "± 7960121",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110970875,
            "range": "± 463653",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112621645,
            "range": "± 331954",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b",
          "message": "Continuations, part 2: system initiated splits (#469)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T12:23:08-07:00",
          "tree_id": "06f9928d34afb48230c7fba85d1362d10baecd35",
          "url": "https://github.com/risc0/risc0/commit/39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b"
        },
        "date": 1680722789528,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1592968041,
            "range": "± 5939365",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1600461895,
            "range": "± 12274264",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111299895,
            "range": "± 632579",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113301125,
            "range": "± 568381",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7a20347498624393946e52028e8f0388d5c16d",
          "message": "Use generated layout to determine location of registers in rv32im circuit (#476)\n\n* Refactor layout to minimize duplicate code between risczero/rv32im\r\n* Add a buffer pretty-printer to dump a buffer based on a layout\r\n* rv32im-verify no longer has a brittle dependency on the specific layout of the \"out\" buffer\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T21:48:13Z",
          "tree_id": "5ec200ff06950dba5c00139d0b42e56e5e1c131a",
          "url": "https://github.com/risc0/risc0/commit/0b7a20347498624393946e52028e8f0388d5c16d"
        },
        "date": 1680731487130,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1598265145,
            "range": "± 13782602",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1600378000,
            "range": "± 9101269",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111743416,
            "range": "± 571805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113197000,
            "range": "± 1087456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb",
          "message": "Remove zeroio (#502)\n\nZeroio is no longer as big of a win over risc0_zkvm::serde as it was since our I/O works differently now.  Plus, it was cumbersome to use.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-08T13:08:15-07:00",
          "tree_id": "94d5f58911eb142112da98cd5ff66dc8b0076c4f",
          "url": "https://github.com/risc0/risc0/commit/1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb"
        },
        "date": 1680984706965,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1594514354,
            "range": "± 37223544",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1595572395,
            "range": "± 11233613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110915000,
            "range": "± 1129603",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112951541,
            "range": "± 705937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87adc831b195cd52aac7c49bf9894568baa7d372",
          "message": "Add test and example of using stdio through ProverOpts. (#506)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-10T13:10:58-07:00",
          "tree_id": "d29ab453e3d09b2c0b67af3f894beb3ac7294f2c",
          "url": "https://github.com/risc0/risc0/commit/87adc831b195cd52aac7c49bf9894568baa7d372"
        },
        "date": 1681166160490,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1598977353,
            "range": "± 12382655",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1601796166,
            "range": "± 25808749",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110919166,
            "range": "± 600374",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112646958,
            "range": "± 769905",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b83c08d5da7838d1f3b0717e8d123e0daeea94f7",
          "message": "Add serde derives to MemoryImage (#511)",
          "timestamp": "2023-04-13T10:46:50-07:00",
          "tree_id": "17bf0062987b13b67220bb0be2c0364170b6ce9b",
          "url": "https://github.com/risc0/risc0/commit/b83c08d5da7838d1f3b0717e8d123e0daeea94f7"
        },
        "date": 1681408201434,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1604618791,
            "range": "± 34984304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1593510083,
            "range": "± 7695622",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112976645,
            "range": "± 587848",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114947083,
            "range": "± 622454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26d1a7db3fbbd24469df447e4b7c24646e5df75",
          "message": "Delete github-action-benchmark repo directory (#512)\n\nAttempt to fix bench_trendworkflows.",
          "timestamp": "2023-04-13T18:02:58-07:00",
          "tree_id": "d4d0b796f272a26e9174600803cccc3ff8e56c7d",
          "url": "https://github.com/risc0/risc0/commit/f26d1a7db3fbbd24469df447e4b7c24646e5df75"
        },
        "date": 1681434384151,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1594183937,
            "range": "± 13693594",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1598513208,
            "range": "± 7906658",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110927562,
            "range": "± 392299",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113266499,
            "range": "± 333730",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08b89140bbf1b28f87b62cbc2cdac8e9820af72b",
          "message": "Implementation of new API, part 1 (#503)",
          "timestamp": "2023-04-17T11:35:00-07:00",
          "tree_id": "1f46cbe5852d43fd771be3905002158f88e65216",
          "url": "https://github.com/risc0/risc0/commit/08b89140bbf1b28f87b62cbc2cdac8e9820af72b"
        },
        "date": 1681756695348,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1592742020,
            "range": "± 13410064",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592444083,
            "range": "± 6633117",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111049229,
            "range": "± 1147250",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112968208,
            "range": "± 509234",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b7ee4f09d645810388fec0a751b8d466008913",
          "message": "Document Session and Segment (#509)\n\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <frank@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-17T16:16:12-07:00",
          "tree_id": "69709df9db13736a8aaf4156ee8294734ca21483",
          "url": "https://github.com/risc0/risc0/commit/66b7ee4f09d645810388fec0a751b8d466008913"
        },
        "date": 1681773568517,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1605550416,
            "range": "± 23390207",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1600747812,
            "range": "± 9656399",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112287187,
            "range": "± 345700",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114127937,
            "range": "± 522966",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f",
          "message": "Add additional sanity checking to the ELF parser (#515)\n\n* Add bounds checking for elf parser.",
          "timestamp": "2023-04-18T08:27:20-07:00",
          "tree_id": "c63a2cdbb402d7e57e127349c5303cb322bd7e6b",
          "url": "https://github.com/risc0/risc0/commit/bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f"
        },
        "date": 1681831828242,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1590551999,
            "range": "± 9855636",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1601747353,
            "range": "± 11120640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110893416,
            "range": "± 1081583",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112119937,
            "range": "± 600054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "909214982650666c03159e9bad9d2ee90d5e2a46",
          "message": "Added templ_subdir flag to cargo risczero new (#517)\n\n* Adds additional flags to cargo risczero new for sub directory selection\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-04-18T13:47:26-07:00",
          "tree_id": "0eddae9f17a96b6724120e63f89bbc91caf14e8d",
          "url": "https://github.com/risc0/risc0/commit/909214982650666c03159e9bad9d2ee90d5e2a46"
        },
        "date": 1681851039611,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1591219729,
            "range": "± 5764498",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1597947270,
            "range": "± 14057915",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110465062,
            "range": "± 478063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112549937,
            "range": "± 494939",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e60c27bd5f9c17612a8a5dc65f2baf7f299277e",
          "message": "Implementation of new API, part 2 (#514)",
          "timestamp": "2023-04-18T17:45:57-07:00",
          "tree_id": "df4dc524cd18f68b343346a17f8492e8bb442a29",
          "url": "https://github.com/risc0/risc0/commit/0e60c27bd5f9c17612a8a5dc65f2baf7f299277e"
        },
        "date": 1681865399413,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3890691000,
            "range": "± 40944003",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3930938416,
            "range": "± 33605640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 686525229,
            "range": "± 1086696",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 688963645,
            "range": "± 1756597",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4",
          "message": "Revive profiler, add docs, cleanups (#518)",
          "timestamp": "2023-04-19T09:17:54-07:00",
          "tree_id": "5fa93c08b0b0d0020bd8e7cfcfb6296e9094a930",
          "url": "https://github.com/risc0/risc0/commit/1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4"
        },
        "date": 1681921316661,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3922371979,
            "range": "± 42329715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3935381875,
            "range": "± 46179724",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 686232999,
            "range": "± 1338704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 689662250,
            "range": "± 1550060",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f6d42f1c21a284ae61ba887d2361e91c37eee9",
          "message": "Replace default_hal with default_prover (#520)",
          "timestamp": "2023-04-21T03:15:26Z",
          "tree_id": "c17e010db9118080ef0f70466bdfea7af2b4dfa4",
          "url": "https://github.com/risc0/risc0/commit/27f6d42f1c21a284ae61ba887d2361e91c37eee9"
        },
        "date": 1682047169601,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3904925833,
            "range": "± 46066496",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3927844145,
            "range": "± 47159053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 686601083,
            "range": "± 2267527",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 689108437,
            "range": "± 1234065",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "145d0da79fbb5c67ff21d04d4d7bdc04cceab768",
          "message": "Add Clone derive to Segment (#523)\n\nAdding Clone derive to Segment for use on Bonsai.",
          "timestamp": "2023-04-21T20:01:41Z",
          "tree_id": "b8cdd3dad1a03387fa1f2b2b14227f69854c1f4a",
          "url": "https://github.com/risc0/risc0/commit/145d0da79fbb5c67ff21d04d4d7bdc04cceab768"
        },
        "date": 1682107543463,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3927239812,
            "range": "± 21570533",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3916071520,
            "range": "± 55759784",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 691548854,
            "range": "± 1118457",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 694931229,
            "range": "± 1347840",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Linux-nvidia_rtx_a5000": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677268657858,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849934198,
            "range": "± 8532155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 847133057,
            "range": "± 5965451",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470189269,
            "range": "± 3154242",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 475628833,
            "range": "± 4749081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677282930017,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 850045553,
            "range": "± 5111417",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 847868956,
            "range": "± 10299421",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471366536,
            "range": "± 4776066",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 474798782,
            "range": "± 4781342",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kuba.plaskonka@gmail.com",
            "name": "Kuba Płaskonka",
            "username": "kubaplas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b",
          "message": "Using Blake2b as a hash function (#401)",
          "timestamp": "2023-02-25T11:28:56-08:00",
          "tree_id": "1703efd636c4bcb4944b3702d306432b4842bf20",
          "url": "https://github.com/risc0/risc0/commit/d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b"
        },
        "date": 1677354143430,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 846683882,
            "range": "± 10106094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 852615220,
            "range": "± 7661249",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471512443,
            "range": "± 4726019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 475238093,
            "range": "± 3465319",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e552494ff836ab2fe24a597c8e6db095dc87020a",
          "message": "Add \"copy-in\" to rv32 circuit (#390)\n\n* Add \"copy-in\" to rv32 circuit\r\n\r\n* New major cycle type copies in data from the host at 4 words per cycle\r\n* SOFTWARE ecall type now takes:\r\n     a0: destination buffer pointer\r\n     a1: destination size in chunks (words / 4, bytes / 16)\r\n  and can modify a0 and a1 to return data in registers.\r\n  It uses the COPY_IN cycle, and calls the following externs:\r\n    syscall-init: Tells the host to start a syscall\r\n    syscall-body: Gather the next 4 words to transfer from the host to the guest\r\n    syscall-fini: Gather the 2 register outputs from the host\r\n* SYS_IO takes the following additional args:\r\n     a2: source buffer pointer\r\n     a3: source buffer size in bytes\r\n     a4: channel id\r\n  SYS_IO returns arbitrary data from the host in a0 and a1 for data that's small enough to not need a buffer allocated.  (This matches return values in the riscv calling conventions to minimize overhead)\r\n* Removed SYS_COMPUTE_POLY; functionality replaced by SENDRECV_CHANNEL_COMPUTE_POLY via SYS_IO  (Hopefully we can eventually get rid of this)\r\n* Removed SYS_COMMIT; functionality replaced by SENDRECV_CHANNEL_COMMIT via SYS_IO\r\n* Updated guest::env for new SYS_IO API\r\n\r\n* Add test to make sure eval_check doesn't grow unexpectedly\r\n\r\n* Update sendrecv api\r\n\r\n* Change copy-in to be able to copy arbitrary number of words\r\n\r\nIn contrast to only being able to copy multiples of 4 words.\r\n\r\n* Separate send_recv guest API into send_recv_raw and send_recv_slice\r\n\r\nThis seems cleaner and less confusing to me.\r\n\r\n* Update sendrecv api in waldo example\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-02-27T09:26:16-08:00",
          "tree_id": "78f8ebc64a28721478515b7e272c1916ef050867",
          "url": "https://github.com/risc0/risc0/commit/e552494ff836ab2fe24a597c8e6db095dc87020a"
        },
        "date": 1677519749585,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849715744,
            "range": "± 7635864",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 850366860,
            "range": "± 8183606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470688349,
            "range": "± 4159680",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470685781,
            "range": "± 3581570",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677527331143,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849685361,
            "range": "± 6246800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 858889559,
            "range": "± 7568452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 469658253,
            "range": "± 4157642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 477625676,
            "range": "± 4758843",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538313912,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 847635602,
            "range": "± 9652719",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 853421361,
            "range": "± 7710155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470827316,
            "range": "± 1897735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470902753,
            "range": "± 3267791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677541752857,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848913532,
            "range": "± 9514598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 850582508,
            "range": "± 6196730",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471158171,
            "range": "± 3315530",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 471667268,
            "range": "± 4029937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e703fb127398c84db67335ed63b8d0bfb637f2f",
          "message": "Update logo (#411)",
          "timestamp": "2023-02-28T02:09:24Z",
          "tree_id": "7c4876838b25dbb87891f832d4dc8b471c2aee28",
          "url": "https://github.com/risc0/risc0/commit/9e703fb127398c84db67335ed63b8d0bfb637f2f"
        },
        "date": 1677550653284,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848238475,
            "range": "± 6156546",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 848339464,
            "range": "± 6018347",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 472168859,
            "range": "± 3735570",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 473557021,
            "range": "± 2614798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677630067188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 838929177,
            "range": "± 6393825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 834044303,
            "range": "± 9590523",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 469536002,
            "range": "± 4291134",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470919956,
            "range": "± 3734395",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677640744660,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 870332560,
            "range": "± 9479902",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 869536105,
            "range": "± 11610635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 500117769,
            "range": "± 3061500",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 498851293,
            "range": "± 3561502",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677731983985,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 868014919,
            "range": "± 31679554",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 961620711,
            "range": "± 58972695",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 489600892,
            "range": "± 23251914",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 482260103,
            "range": "± 8560280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677784960449,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 853669091,
            "range": "± 8285825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 846975818,
            "range": "± 10113019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467807449,
            "range": "± 2504244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469052773,
            "range": "± 4743066",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865764485,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848702829,
            "range": "± 10988045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 846461927,
            "range": "± 26167127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 483920864,
            "range": "± 6575718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 482205540,
            "range": "± 6117440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888418176,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 856838239,
            "range": "± 10388796",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 845700664,
            "range": "± 9131164",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 483918798,
            "range": "± 5824123",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 483469225,
            "range": "± 5649837",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226363044,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 971095979,
            "range": "± 33011653",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 964409228,
            "range": "± 28546437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 519236135,
            "range": "± 21177216",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 541163632,
            "range": "± 19007040",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312434729,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 900007271,
            "range": "± 26497367",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 929232069,
            "range": "± 50575573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499269815,
            "range": "± 16596735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 507602784,
            "range": "± 24595101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324725895,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 893436410,
            "range": "± 10300680",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 894900132,
            "range": "± 11745878",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499857182,
            "range": "± 2827114",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 501748740,
            "range": "± 5814885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384043740,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 892780510,
            "range": "± 5302760",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 892973581,
            "range": "± 6659044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499027492,
            "range": "± 2197136",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499579883,
            "range": "± 5493039",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397637029,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 895698173,
            "range": "± 7362482",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 889253255,
            "range": "± 10524238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499520923,
            "range": "± 2742283",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 501868824,
            "range": "± 3529774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399904123,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886240833,
            "range": "± 26353644",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 931724837,
            "range": "± 49322426",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 535707502,
            "range": "± 40237549",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 519368858,
            "range": "± 10333293",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416502374,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 891074745,
            "range": "± 7447543",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893602242,
            "range": "± 9585044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501272655,
            "range": "± 7072715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499809125,
            "range": "± 5414480",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678488938866,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 965613480,
            "range": "± 3943606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 966595090,
            "range": "± 3394997",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 569290481,
            "range": "± 2399160",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 571199875,
            "range": "± 3846303",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678603083021,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886824408,
            "range": "± 10726703",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 884377272,
            "range": "± 5839622",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 498392566,
            "range": "± 3047795",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 498723528,
            "range": "± 3461517",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821004832,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886812998,
            "range": "± 7238689",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 897292492,
            "range": "± 16931678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499907773,
            "range": "± 5822192",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 502564113,
            "range": "± 4340424",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678912001563,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886943180,
            "range": "± 8480018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893289288,
            "range": "± 6809278",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499135988,
            "range": "± 2604548",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499667388,
            "range": "± 2431520",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926559629,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 885035654,
            "range": "± 5783112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893754463,
            "range": "± 8159708",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499516792,
            "range": "± 2913384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500947317,
            "range": "± 3097707",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071147160,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886450658,
            "range": "± 4792394",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 894975305,
            "range": "± 9637197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501974855,
            "range": "± 10535075",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499103366,
            "range": "± 2843361",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679077558700,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 890742694,
            "range": "± 7383265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 896375650,
            "range": "± 5219633",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 502198386,
            "range": "± 6534619",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500197601,
            "range": "± 4245150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081836924,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 887134351,
            "range": "± 6003478",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 889663429,
            "range": "± 6873245",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499960175,
            "range": "± 2872704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 506049393,
            "range": "± 4880824",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efc329caf24e647cc82fcb2d806190dc1e11695",
          "message": "Split core zkp kernels and rv32im kernel into seperate sys crates (#449)\n\nSplit core zkp kernels and rv32im kernel into seperate sys crates",
          "timestamp": "2023-03-17T15:02:59-07:00",
          "tree_id": "796b860064e1078ed2de6ed22158fd48f29d8526",
          "url": "https://github.com/risc0/risc0/commit/8efc329caf24e647cc82fcb2d806190dc1e11695"
        },
        "date": 1679092162435,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 961945140,
            "range": "± 2206555",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 967281489,
            "range": "± 2801614",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 567870762,
            "range": "± 3886714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 570431062,
            "range": "± 3804055",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c66bef66717d1fc34a353fc36bdab94bf98f5f8",
          "message": "Support for stdin and getenv in guest (#452)\n\n* Actually export the sys_* ABI symbols without mangling them\r\n* Add sys_getenv to get environment variables\r\n* Add with_env_var to ProverOpts to specify environment variables to include for the guest\r\n* Add --env VARNAME=value option to r0vm to specify environment variables to include\r\n* Plumb through stdin() so that std::io::stdin() works in the guest as expected\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T16:23:58-07:00",
          "tree_id": "c1dba25c3334f75d99d08a46ece76aec4a5da1e2",
          "url": "https://github.com/risc0/risc0/commit/7c66bef66717d1fc34a353fc36bdab94bf98f5f8"
        },
        "date": 1679096449002,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 962374841,
            "range": "± 4448689",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 962343111,
            "range": "± 5005159",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 563242860,
            "range": "± 77983520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 562829336,
            "range": "± 3747429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81839854+justinFrevert@users.noreply.github.com",
            "name": "justinFrevert",
            "username": "justinFrevert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "285039cf9adf8bb0b4be8b598cae69367d8bbf25",
          "message": "Add no-std fix for WASM/Substrate chains (#438)",
          "timestamp": "2023-03-19T11:27:07-07:00",
          "tree_id": "4b416cf74c8156c1cb9f6171995149277391177d",
          "url": "https://github.com/risc0/risc0/commit/285039cf9adf8bb0b4be8b598cae69367d8bbf25"
        },
        "date": 1679251252077,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 880024780,
            "range": "± 10364751",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 890223704,
            "range": "± 6754339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501615777,
            "range": "± 4006820",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500009266,
            "range": "± 2392364",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba",
          "message": "Attempt to fix unzip failures (#450)",
          "timestamp": "2023-03-20T11:39:27-07:00",
          "tree_id": "0790d6b6f1f3bfbd19bda3ee37df33e9ea7f9479",
          "url": "https://github.com/risc0/risc0/commit/b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba"
        },
        "date": 1679341717742,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 871878417,
            "range": "± 10033927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 869678279,
            "range": "± 5968252",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499038779,
            "range": "± 2182370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 501846484,
            "range": "± 5541501",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd9a56521b96ef7df3d6411577930fdf5152b1d",
          "message": "Fix kernel bug.",
          "timestamp": "2023-03-20T22:38:52Z",
          "tree_id": "d339f7373a1fe8a8e6fa682bd61a8816616c045d",
          "url": "https://github.com/risc0/risc0/commit/afd9a56521b96ef7df3d6411577930fdf5152b1d"
        },
        "date": 1679352127108,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1279853967,
            "range": "± 25710110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1304916461,
            "range": "± 14223390",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 848670149,
            "range": "± 32523351",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 745717271,
            "range": "± 13682747",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7b19d57877577a2735e69172ea3e445a2c0c6cb",
          "message": "Adjusted benchmark workflow with PR number (#458)\n\nAdded PR number into artifact for workflow_run to pickup and correctly create a PR comment.",
          "timestamp": "2023-03-20T17:27:18-07:00",
          "tree_id": "4464642f24228823892daedbe0471f41ab367fbe",
          "url": "https://github.com/risc0/risc0/commit/e7b19d57877577a2735e69172ea3e445a2c0c6cb"
        },
        "date": 1679358638856,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 877263829,
            "range": "± 5903301",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 872903111,
            "range": "± 7812115",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 502950834,
            "range": "± 4635001",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 498038547,
            "range": "± 3278832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0953b45512684376f48d312f399fa2f5bcc50a34",
          "message": "Add support for Cuda Poseidon hal. (#454)",
          "timestamp": "2023-03-19T21:12:36-07:00",
          "tree_id": "339d3df331a2537ff5ed2da3baab1a0368444676",
          "url": "https://github.com/risc0/risc0/commit/0953b45512684376f48d312f399fa2f5bcc50a34"
        },
        "date": 1679376939587,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 874129520,
            "range": "± 11669472",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 876891195,
            "range": "± 8100792",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501075545,
            "range": "± 5959671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 510395506,
            "range": "± 7028444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e717cfed432175f1bbba99964021edbbb3f9653",
          "message": "Reference `rust guest workarounds` tag (#451)",
          "timestamp": "2023-03-21T00:47:23-07:00",
          "tree_id": "80c55594a375a53928d5718f620428b8b543f059",
          "url": "https://github.com/risc0/risc0/commit/6e717cfed432175f1bbba99964021edbbb3f9653"
        },
        "date": 1679385101759,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1131668416,
            "range": "± 12404453",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1131972918,
            "range": "± 12552652",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 668935195,
            "range": "± 8739826",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 629585946,
            "range": "± 8632633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc27559ad8d5f4a35712256ca38b94b394249d6d",
          "message": "Move benchmark comment files to runner.temp (#462)\n\nMoves all benchmark file artifacts to runner.temp to prevent files from being read cross-workflow or cross-job",
          "timestamp": "2023-03-21T14:04:44-07:00",
          "tree_id": "205c43e051ac8c0be7b43603509fe0820cb29be4",
          "url": "https://github.com/risc0/risc0/commit/fc27559ad8d5f4a35712256ca38b94b394249d6d"
        },
        "date": 1679433584396,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 873988868,
            "range": "± 5661808",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 874426245,
            "range": "± 8960928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 500420404,
            "range": "± 5565430",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499385686,
            "range": "± 7041361",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32602478+rlukata@users.noreply.github.com",
            "name": "Rami Lukata",
            "username": "rlukata"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b023e47d257926d520ce1d28c76ec3d52802fd8",
          "message": "add concurrency to ci (#463)",
          "timestamp": "2023-03-22T18:25:11Z",
          "tree_id": "690292c9180f0d15bf9d5cd297e413968f9094b9",
          "url": "https://github.com/risc0/risc0/commit/6b023e47d257926d520ce1d28c76ec3d52802fd8"
        },
        "date": 1679509822353,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 878239035,
            "range": "± 9402452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 866286124,
            "range": "± 9452105",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 502691021,
            "range": "± 4036896",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500057619,
            "range": "± 9071999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04645358404df28bce2807906fcbb49b0ac982c8",
          "message": "Continuations, part 1 (#461)\n\nBreaking Changes:\r\n* Drop the `image_id` parameter to the `risc0_zkvm::Prover`. The Prover already computes the image_id from the supplied ELF binary.\r\n* Replace `risc0_zkvm::MemoryImage::root` with `risc0_zkvm::MemoryImage::get_root()`, which computes the root merkle tree entry on-demand.\r\n* Drop `VerificationError::SealJournalLengthMismatch`.\r\n* Rename `VerificationError::JournalSealRootMismatch` to `VerificationError::JournalDigestMismatch`\r\n\r\nUpdates:\r\n* New rv32im circuit which includes continuations support\r\n* Add `env::pause` to the guest environment API\r\n* Add a test for pause/continue\r\n\r\nTODO:\r\n* Implement system initiated splits",
          "timestamp": "2023-03-24T03:08:10Z",
          "tree_id": "5dbd256fb9543e60796ee7db4dfc0346f9295632",
          "url": "https://github.com/risc0/risc0/commit/04645358404df28bce2807906fcbb49b0ac982c8"
        },
        "date": 1679627484518,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 638059898,
            "range": "± 7216712",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 644195522,
            "range": "± 9587976",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 295638610,
            "range": "± 4334476",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 305664362,
            "range": "± 5912098",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16e860e303b2a750cfdff3ff00f83a1c431f2d0",
          "message": "Migrate guest's concept of \"initial input\" to be a more standard \"stdin\". (#468)\n\n* env::read now reads from stdin by default.\r\n* risc0_zkvm::serde now serializes type \"char\" (i.e. single characters that are serialized by themselves) as its 4-byte codepoint rather than a 4-byte length followed by its serialized bytes.  Strings are unchanged.\r\n* Removed risc0_zkvm::env::Env structure, since its last remaining use is gone.\r\n* Renamed Stream{Reader,Writer} to more rusty names\r\n* New \"with_stdin\" options for ProverOpts to specify the standard input to supply to the guest; this accepts anything that implements std::io::Read.\r\n* When \"std\" is enabled, env::{stdin,stdout,stderr} implement std::io::{Read,Write}.\r\n* Deserialized objects are now owned and filled in directly instead of referencing a buffer.  This means that serialized types will need to be owned types, like \"String\" instead of \"&str\".\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-23T21:28:57-07:00",
          "tree_id": "215dd0fb2c8e350d0375f1c1ae1d94461baf28cd",
          "url": "https://github.com/risc0/risc0/commit/e16e860e303b2a750cfdff3ff00f83a1c431f2d0"
        },
        "date": 1679632345650,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 633167267,
            "range": "± 6678726",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 639465031,
            "range": "± 2919741",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 299426266,
            "range": "± 5345563",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 304349807,
            "range": "± 5020161",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64ec080327be05890ffc41e7b30907be35ca20db",
          "message": "Update directories requirement from 4.0 to 5.0 (#456)\n\nUpdates the requirements on [directories](https://github.com/soc/directories-rs) to permit the latest version.\r\n- [Release notes](https://github.com/soc/directories-rs/releases)\r\n- [Commits](https://github.com/soc/directories-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: directories\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-24T07:22:45Z",
          "tree_id": "8059783cfeae33ed8039fb558069395018cc31ad",
          "url": "https://github.com/risc0/risc0/commit/64ec080327be05890ffc41e7b30907be35ca20db"
        },
        "date": 1679642771214,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 628548339,
            "range": "± 13416414",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 638480932,
            "range": "± 7713986",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 297542641,
            "range": "± 6177797",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 303096662,
            "range": "± 6714507",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd1a37e774bf8284d45d7dbb118034174627551c",
          "message": "Added `prod` label to workflows` (#475)",
          "timestamp": "2023-03-28T14:21:30-07:00",
          "tree_id": "bf9d475e21f7beea421325c91234a14a1f74aa5d",
          "url": "https://github.com/risc0/risc0/commit/cd1a37e774bf8284d45d7dbb118034174627551c"
        },
        "date": 1680038662754,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 642451617,
            "range": "± 6383718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 647460698,
            "range": "± 8238740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 295054189,
            "range": "± 5908079",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 302514253,
            "range": "± 6931886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06749f637515ff1e00c9818ffd7498b9d2d7965f",
          "message": "cargo-risczero tool (#453)\n\n* Add cargo-risczero tool / crate\r\n\r\n* Added a `new` command to the cargo-risczero tool for generating from templates\r\n\r\n* Imported the risc0-rust-starter template as a cargo-generate template for the new command to pull from\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-28T16:47:19-07:00",
          "tree_id": "bc312aa30810429a133136c814d4008b7c3fdacd",
          "url": "https://github.com/risc0/risc0/commit/06749f637515ff1e00c9818ffd7498b9d2d7965f"
        },
        "date": 1680047448041,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 735220796,
            "range": "± 4038103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 738017643,
            "range": "± 3853589",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 387691410,
            "range": "± 1994463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 389277884,
            "range": "± 3952109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b271b2d6f28d152f1e58934b15bdad67cc8835f",
          "message": "Fixed a typo in `risczero new` template (#477)",
          "timestamp": "2023-03-28T23:00:36-07:00",
          "tree_id": "410d1385f7adc2355af3fb38a1dcced54d231759",
          "url": "https://github.com/risc0/risc0/commit/2b271b2d6f28d152f1e58934b15bdad67cc8835f"
        },
        "date": 1680069859250,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 640408600,
            "range": "± 6979132",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 644809113,
            "range": "± 8464107",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 296889682,
            "range": "± 4979383",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 308163084,
            "range": "± 6057874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287c6b679281dd8cbd540aa0a2d96f8393b2ee96",
          "message": "Add tool for datasheet generation (#473)",
          "timestamp": "2023-03-28T09:42:48-07:00",
          "tree_id": "ab0b57e0dcb56e6b5592e446015d9c038bdd3c2c",
          "url": "https://github.com/risc0/risc0/commit/287c6b679281dd8cbd540aa0a2d96f8393b2ee96"
        },
        "date": 1680087729495,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 646898608,
            "range": "± 7394367",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 647228568,
            "range": "± 9136018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 299902364,
            "range": "± 7695530",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 308187180,
            "range": "± 2822807",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efc09afaf27aa5a97621a2b96fa2d9d5595421a9",
          "message": "Fixes for cargo-risczero new (#480)",
          "timestamp": "2023-03-29T13:20:28-07:00",
          "tree_id": "c5e9be81791d0dd6b8c6a39d8b0936cdaa672a7b",
          "url": "https://github.com/risc0/risc0/commit/efc09afaf27aa5a97621a2b96fa2d9d5595421a9"
        },
        "date": 1680121444782,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1076785264,
            "range": "± 112401330",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 991465044,
            "range": "± 6271845",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 547919324,
            "range": "± 5256854",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 509987896,
            "range": "± 17931584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2af172d9b3a0b13e1139d880b5bfe3c1f193efc",
          "message": "Update template & examples references (#478)",
          "timestamp": "2023-03-29T21:01:54Z",
          "tree_id": "e534854e319627fb5c9ee32a70f153d91b2ecbfa",
          "url": "https://github.com/risc0/risc0/commit/c2af172d9b3a0b13e1139d880b5bfe3c1f193efc"
        },
        "date": 1680123920966,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 722375323,
            "range": "± 4625639",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 728715674,
            "range": "± 7614042",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 371936642,
            "range": "± 1645303",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 378617254,
            "range": "± 2121806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "distinct": true,
          "id": "77205f046f726f948eea0958247b2d8eb054f8cf",
          "message": "Fix crate publish error",
          "timestamp": "2023-03-29T15:28:59-07:00",
          "tree_id": "a9bb243500201b9c0efd01117335002f8e4e6f5a",
          "url": "https://github.com/risc0/risc0/commit/77205f046f726f948eea0958247b2d8eb054f8cf"
        },
        "date": 1680129563996,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 840249386,
            "range": "± 16983094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 829919080,
            "range": "± 10574437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 426792232,
            "range": "± 8988107",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 429519403,
            "range": "± 9610757",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23e362b536a27920d9de79797f7f97c21cf52b53",
          "message": "Update serial_test requirement from 1.0 to 2.0 (#486)\n\nUpdates the requirements on [serial_test](https://github.com/palfrey/serial_test) to permit the latest version.\r\n- [Release notes](https://github.com/palfrey/serial_test/releases)\r\n- [Commits](https://github.com/palfrey/serial_test/compare/v1.0.0...v2.0.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serial_test\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-30T17:58:33Z",
          "tree_id": "5e94c0f5e7fb320e18e88faba8c0e6e8fd2390df",
          "url": "https://github.com/risc0/risc0/commit/23e362b536a27920d9de79797f7f97c21cf52b53"
        },
        "date": 1680199318502,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 646229511,
            "range": "± 7075626",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 644875301,
            "range": "± 10716353",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 294364057,
            "range": "± 4797974",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 302729247,
            "range": "± 7465517",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cfe6427921e6dd3eab28fb53fe7ff9973e092bf",
          "message": "Removed Snakecase from risczero new proj name (#487)",
          "timestamp": "2023-03-30T15:50:51-07:00",
          "tree_id": "049694ea85fe9558072ed3856ceca42988c2fd19",
          "url": "https://github.com/risc0/risc0/commit/3cfe6427921e6dd3eab28fb53fe7ff9973e092bf"
        },
        "date": 1680216842802,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 822464882,
            "range": "± 25182877",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 822244998,
            "range": "± 8640071",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 425683169,
            "range": "± 4751996",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 437847187,
            "range": "± 11874298",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e49163c66cc4ad3f2fecee8a5adac71647fb21",
          "message": "Align examples with template (#488)",
          "timestamp": "2023-03-31T09:54:34-07:00",
          "tree_id": "d22e55dd3d31c49e37ab43e236009f297a105a93",
          "url": "https://github.com/risc0/risc0/commit/d1e49163c66cc4ad3f2fecee8a5adac71647fb21"
        },
        "date": 1680282901542,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 637230512,
            "range": "± 8641824",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 644915231,
            "range": "± 4921673",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 295621657,
            "range": "± 5609371",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 305668402,
            "range": "± 3917940",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "034fc69c4f490ed4d60d4250cc4f0a672d7a11b1",
          "message": "Added RISC0_CUDA_OPT env var and default to -O1 (#492)\n\n* Default CUDA ptxas optimization levels of -O1 to improve build times but add env var fallback",
          "timestamp": "2023-03-31T15:28:16-07:00",
          "tree_id": "7b28dfc80b404e52bfa96eb6ba735afc5c36f596",
          "url": "https://github.com/risc0/risc0/commit/034fc69c4f490ed4d60d4250cc4f0a672d7a11b1"
        },
        "date": 1680302439963,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 643331910,
            "range": "± 6184716",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 646511614,
            "range": "± 8859295",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 294192927,
            "range": "± 4808463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 301166992,
            "range": "± 3882214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8f18bdb21a288ad2535676f29b54116375de160",
          "message": "Preflight progress (#482)\n\n* Rename Preflight->preflight::ExecState\r\n* Add ExecState::segmentize method to generate execution segments\r\n* Proofs can now be generated off of segments\r\n* All tests pass with RISC0_EXPERIMENTAL_PREFLIGHT=1 except tests::do_random and tests::trace.\r\n\r\nStill todo:\r\n\r\n* Better paging support, including better page fault calculation for page ins, and reserving cycles for pgae outs.\r\n* Verify host-initiated splits work properly once #469 lands.\r\n* Integrate into r0vm so it can both read and write Segments\r\n* Add an A/B test mode to compare preflight output against step_exec to make sure everything executes in the same way, including memory, registers, program counters, and cycle counts.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-01T09:34:51Z",
          "tree_id": "f61706c49a8a49dcba3253964bdd1a365342993b",
          "url": "https://github.com/risc0/risc0/commit/d8f18bdb21a288ad2535676f29b54116375de160"
        },
        "date": 1680341894141,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 644028666,
            "range": "± 9969372",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 643303605,
            "range": "± 5084533",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 293998193,
            "range": "± 4209685",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 295032852,
            "range": "± 7194584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c657ca0747947db4b890751853c2d3358d820f31",
          "message": "Update memory map and drop unused code (#491)",
          "timestamp": "2023-04-04T19:44:32Z",
          "tree_id": "550b25230e92045bfa956af44fc6f400656887e7",
          "url": "https://github.com/risc0/risc0/commit/c657ca0747947db4b890751853c2d3358d820f31"
        },
        "date": 1680638986462,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 893851476,
            "range": "± 66802420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 981817463,
            "range": "± 2716870",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 604289398,
            "range": "± 2821017",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 605172957,
            "range": "± 2539789",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b54a0b3b9a9f67da6263b9892c418db0f010a8a1",
          "message": "Moved tempdir for risc0-build into cache_dir (#497)",
          "timestamp": "2023-04-04T23:19:20Z",
          "tree_id": "f9d924e52ddc41a3e6a77e2bf99125dc2022e055",
          "url": "https://github.com/risc0/risc0/commit/b54a0b3b9a9f67da6263b9892c418db0f010a8a1"
        },
        "date": 1680650537229,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 722412617,
            "range": "± 12700459",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 729676511,
            "range": "± 21922511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 311254922,
            "range": "± 6145688",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 311933837,
            "range": "± 5204083",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96deb8515ec614d36482619122b46584376b20e5",
          "message": "Fixed risc0-build deadlock / double build (#498)",
          "timestamp": "2023-04-05T08:41:16-07:00",
          "tree_id": "a7edb04dd142e08639573ecf30eb4df2f6ee4ed9",
          "url": "https://github.com/risc0/risc0/commit/96deb8515ec614d36482619122b46584376b20e5"
        },
        "date": 1680709483441,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 851587759,
            "range": "± 39001494",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 871972350,
            "range": "± 47744826",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 336198668,
            "range": "± 11081495",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 336099084,
            "range": "± 8574677",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2fcc90a36c3f7613de089840e27db591630acc5",
          "message": "Added RISC0_GUEST_LOGFILE and fixed clippy warns (#499)",
          "timestamp": "2023-04-05T10:32:02-07:00",
          "tree_id": "6378944d4e68645299bb69e7f6184f8a47b2e401",
          "url": "https://github.com/risc0/risc0/commit/d2fcc90a36c3f7613de089840e27db591630acc5"
        },
        "date": 1680716120477,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 737154250,
            "range": "± 29283340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 805174421,
            "range": "± 71224816",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 343918364,
            "range": "± 9915809",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 343335757,
            "range": "± 10558413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b",
          "message": "Continuations, part 2: system initiated splits (#469)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T12:23:08-07:00",
          "tree_id": "06f9928d34afb48230c7fba85d1362d10baecd35",
          "url": "https://github.com/risc0/risc0/commit/39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b"
        },
        "date": 1680722798071,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 818968223,
            "range": "± 53013288",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 862786277,
            "range": "± 51252958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 343592040,
            "range": "± 13661958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 336289610,
            "range": "± 12700744",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7a20347498624393946e52028e8f0388d5c16d",
          "message": "Use generated layout to determine location of registers in rv32im circuit (#476)\n\n* Refactor layout to minimize duplicate code between risczero/rv32im\r\n* Add a buffer pretty-printer to dump a buffer based on a layout\r\n* rv32im-verify no longer has a brittle dependency on the specific layout of the \"out\" buffer\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T21:48:13Z",
          "tree_id": "5ec200ff06950dba5c00139d0b42e56e5e1c131a",
          "url": "https://github.com/risc0/risc0/commit/0b7a20347498624393946e52028e8f0388d5c16d"
        },
        "date": 1680731481569,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 742424010,
            "range": "± 42996672",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 850262684,
            "range": "± 58369611",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 313421583,
            "range": "± 9575586",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 313199079,
            "range": "± 4469110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb",
          "message": "Remove zeroio (#502)\n\nZeroio is no longer as big of a win over risc0_zkvm::serde as it was since our I/O works differently now.  Plus, it was cumbersome to use.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-08T13:08:15-07:00",
          "tree_id": "94d5f58911eb142112da98cd5ff66dc8b0076c4f",
          "url": "https://github.com/risc0/risc0/commit/1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb"
        },
        "date": 1680984735185,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 743959923,
            "range": "± 19414183",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 757151519,
            "range": "± 46335683",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 340774513,
            "range": "± 12887970",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 346658117,
            "range": "± 19811161",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87adc831b195cd52aac7c49bf9894568baa7d372",
          "message": "Add test and example of using stdio through ProverOpts. (#506)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-10T13:10:58-07:00",
          "tree_id": "d29ab453e3d09b2c0b67af3f894beb3ac7294f2c",
          "url": "https://github.com/risc0/risc0/commit/87adc831b195cd52aac7c49bf9894568baa7d372"
        },
        "date": 1681157826512,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 841464911,
            "range": "± 30594114",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 852325864,
            "range": "± 42776769",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 342842844,
            "range": "± 6028031",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 342486187,
            "range": "± 5701617",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b83c08d5da7838d1f3b0717e8d123e0daeea94f7",
          "message": "Add serde derives to MemoryImage (#511)",
          "timestamp": "2023-04-13T10:46:50-07:00",
          "tree_id": "17bf0062987b13b67220bb0be2c0364170b6ce9b",
          "url": "https://github.com/risc0/risc0/commit/b83c08d5da7838d1f3b0717e8d123e0daeea94f7"
        },
        "date": 1681408248213,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 820598508,
            "range": "± 52221621",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 835704484,
            "range": "± 53212560",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 333147062,
            "range": "± 9692357",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 334528326,
            "range": "± 9256053",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26d1a7db3fbbd24469df447e4b7c24646e5df75",
          "message": "Delete github-action-benchmark repo directory (#512)\n\nAttempt to fix bench_trendworkflows.",
          "timestamp": "2023-04-13T18:02:58-07:00",
          "tree_id": "d4d0b796f272a26e9174600803cccc3ff8e56c7d",
          "url": "https://github.com/risc0/risc0/commit/f26d1a7db3fbbd24469df447e4b7c24646e5df75"
        },
        "date": 1681434426751,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 731237055,
            "range": "± 19103834",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 748033327,
            "range": "± 20171485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 313780825,
            "range": "± 6173000",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 312930605,
            "range": "± 2745452",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08b89140bbf1b28f87b62cbc2cdac8e9820af72b",
          "message": "Implementation of new API, part 1 (#503)",
          "timestamp": "2023-04-17T11:35:00-07:00",
          "tree_id": "1f46cbe5852d43fd771be3905002158f88e65216",
          "url": "https://github.com/risc0/risc0/commit/08b89140bbf1b28f87b62cbc2cdac8e9820af72b"
        },
        "date": 1681756764495,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 795930493,
            "range": "± 38627524",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 815620753,
            "range": "± 61721682",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 337993879,
            "range": "± 8025596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 340821241,
            "range": "± 12856424",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b7ee4f09d645810388fec0a751b8d466008913",
          "message": "Document Session and Segment (#509)\n\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <frank@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-17T16:16:12-07:00",
          "tree_id": "69709df9db13736a8aaf4156ee8294734ca21483",
          "url": "https://github.com/risc0/risc0/commit/66b7ee4f09d645810388fec0a751b8d466008913"
        },
        "date": 1681773606252,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 773506477,
            "range": "± 48226074",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 760698084,
            "range": "± 21805616",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 345448030,
            "range": "± 12052425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 342715234,
            "range": "± 17548593",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f",
          "message": "Add additional sanity checking to the ELF parser (#515)\n\n* Add bounds checking for elf parser.",
          "timestamp": "2023-04-18T08:27:20-07:00",
          "tree_id": "c63a2cdbb402d7e57e127349c5303cb322bd7e6b",
          "url": "https://github.com/risc0/risc0/commit/bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f"
        },
        "date": 1681831919951,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 907586304,
            "range": "± 61026565",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 821422556,
            "range": "± 53478727",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 338787465,
            "range": "± 5603727",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 339151946,
            "range": "± 12030660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "909214982650666c03159e9bad9d2ee90d5e2a46",
          "message": "Added templ_subdir flag to cargo risczero new (#517)\n\n* Adds additional flags to cargo risczero new for sub directory selection\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-04-18T13:47:26-07:00",
          "tree_id": "0eddae9f17a96b6724120e63f89bbc91caf14e8d",
          "url": "https://github.com/risc0/risc0/commit/909214982650666c03159e9bad9d2ee90d5e2a46"
        },
        "date": 1681851100572,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 892714557,
            "range": "± 36669916",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 852346275,
            "range": "± 49798920",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 342222352,
            "range": "± 8545750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 348285376,
            "range": "± 7900066",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e60c27bd5f9c17612a8a5dc65f2baf7f299277e",
          "message": "Implementation of new API, part 2 (#514)",
          "timestamp": "2023-04-18T17:45:57-07:00",
          "tree_id": "df4dc524cd18f68b343346a17f8492e8bb442a29",
          "url": "https://github.com/risc0/risc0/commit/0e60c27bd5f9c17612a8a5dc65f2baf7f299277e"
        },
        "date": 1681869362358,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1670707236,
            "range": "± 121040940",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1576476128,
            "range": "± 93388736",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 386117807,
            "range": "± 6546953",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 390341240,
            "range": "± 6656354",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4",
          "message": "Revive profiler, add docs, cleanups (#518)",
          "timestamp": "2023-04-19T09:17:54-07:00",
          "tree_id": "5fa93c08b0b0d0020bd8e7cfcfb6296e9094a930",
          "url": "https://github.com/risc0/risc0/commit/1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4"
        },
        "date": 1681921367823,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1577204960,
            "range": "± 114908599",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1536067210,
            "range": "± 103902141",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 319911745,
            "range": "± 2409388",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 324415933,
            "range": "± 21507992",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f6d42f1c21a284ae61ba887d2361e91c37eee9",
          "message": "Replace default_hal with default_prover (#520)",
          "timestamp": "2023-04-21T03:15:26Z",
          "tree_id": "c17e010db9118080ef0f70466bdfea7af2b4dfa4",
          "url": "https://github.com/risc0/risc0/commit/27f6d42f1c21a284ae61ba887d2361e91c37eee9"
        },
        "date": 1682047147918,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1683934321,
            "range": "± 95883149",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1749315343,
            "range": "± 100776886",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 400062859,
            "range": "± 1885960",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 406546113,
            "range": "± 8213302",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb72df1284c0cf0a516dd87af193256d1baec81",
          "message": "Poseidon 254 (#524)\n\nThis adds experimental support for a different version of Poseidon which is efficient to use inside SNARKs used on ETH as a step in building a STARK -> SNARK recursion. It is largely untested, but should have no impact on the normal code path.",
          "timestamp": "2023-04-21T12:27:17-07:00",
          "tree_id": "f13644889c441abcd1ea8250924bcf41666be102",
          "url": "https://github.com/risc0/risc0/commit/6fb72df1284c0cf0a516dd87af193256d1baec81"
        },
        "date": 1682105466586,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1739656118,
            "range": "± 121828162",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1817275358,
            "range": "± 86413888",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 406204174,
            "range": "± 3775548",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 408338036,
            "range": "± 3676816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "145d0da79fbb5c67ff21d04d4d7bdc04cceab768",
          "message": "Add Clone derive to Segment (#523)\n\nAdding Clone derive to Segment for use on Bonsai.",
          "timestamp": "2023-04-21T20:01:41Z",
          "tree_id": "b8cdd3dad1a03387fa1f2b2b14227f69854c1f4a",
          "url": "https://github.com/risc0/risc0/commit/145d0da79fbb5c67ff21d04d4d7bdc04cceab768"
        },
        "date": 1682107548776,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1456204147,
            "range": "± 37346564",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1460127734,
            "range": "± 36069706",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 331809582,
            "range": "± 2851931",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 334338308,
            "range": "± 4869142",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Linux-cpu": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677269143981,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4628054936,
            "range": "± 43372102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4620920239,
            "range": "± 30968047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1777712917,
            "range": "± 5870886",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1786271552,
            "range": "± 12836425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677283105099,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4714577439,
            "range": "± 870803224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 9160589113,
            "range": "± 2440873306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 3322153884,
            "range": "± 47394651",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1937212790,
            "range": "± 102655180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e552494ff836ab2fe24a597c8e6db095dc87020a",
          "message": "Add \"copy-in\" to rv32 circuit (#390)\n\n* Add \"copy-in\" to rv32 circuit\r\n\r\n* New major cycle type copies in data from the host at 4 words per cycle\r\n* SOFTWARE ecall type now takes:\r\n     a0: destination buffer pointer\r\n     a1: destination size in chunks (words / 4, bytes / 16)\r\n  and can modify a0 and a1 to return data in registers.\r\n  It uses the COPY_IN cycle, and calls the following externs:\r\n    syscall-init: Tells the host to start a syscall\r\n    syscall-body: Gather the next 4 words to transfer from the host to the guest\r\n    syscall-fini: Gather the 2 register outputs from the host\r\n* SYS_IO takes the following additional args:\r\n     a2: source buffer pointer\r\n     a3: source buffer size in bytes\r\n     a4: channel id\r\n  SYS_IO returns arbitrary data from the host in a0 and a1 for data that's small enough to not need a buffer allocated.  (This matches return values in the riscv calling conventions to minimize overhead)\r\n* Removed SYS_COMPUTE_POLY; functionality replaced by SENDRECV_CHANNEL_COMPUTE_POLY via SYS_IO  (Hopefully we can eventually get rid of this)\r\n* Removed SYS_COMMIT; functionality replaced by SENDRECV_CHANNEL_COMMIT via SYS_IO\r\n* Updated guest::env for new SYS_IO API\r\n\r\n* Add test to make sure eval_check doesn't grow unexpectedly\r\n\r\n* Update sendrecv api\r\n\r\n* Change copy-in to be able to copy arbitrary number of words\r\n\r\nIn contrast to only being able to copy multiples of 4 words.\r\n\r\n* Separate send_recv guest API into send_recv_raw and send_recv_slice\r\n\r\nThis seems cleaner and less confusing to me.\r\n\r\n* Update sendrecv api in waldo example\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-02-27T09:26:16-08:00",
          "tree_id": "78f8ebc64a28721478515b7e272c1916ef050867",
          "url": "https://github.com/risc0/risc0/commit/e552494ff836ab2fe24a597c8e6db095dc87020a"
        },
        "date": 1677519868249,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6492133204,
            "range": "± 2832728048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 7716126717,
            "range": "± 3501390652",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1782113682,
            "range": "± 87743625",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 2072749836,
            "range": "± 482290203",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677537261713,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1029925993,
            "range": "± 5531193",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1031221826,
            "range": "± 4368449",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 337905769,
            "range": "± 2910800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 337546836,
            "range": "± 1853366",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538011295,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2049480733,
            "range": "± 1075497339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1648595601,
            "range": "± 194858597",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 391986837,
            "range": "± 42206559",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 374235576,
            "range": "± 22721806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677540948773,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1808960825,
            "range": "± 307003454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1574023882,
            "range": "± 312976488",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 359376546,
            "range": "± 12971882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 357648097,
            "range": "± 9331355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e703fb127398c84db67335ed63b8d0bfb637f2f",
          "message": "Update logo (#411)",
          "timestamp": "2023-02-28T02:09:24Z",
          "tree_id": "7c4876838b25dbb87891f832d4dc8b471c2aee28",
          "url": "https://github.com/risc0/risc0/commit/9e703fb127398c84db67335ed63b8d0bfb637f2f"
        },
        "date": 1677550556419,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1973989749,
            "range": "± 39254688",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1940984001,
            "range": "± 36893379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 446397180,
            "range": "± 4886753",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446998937,
            "range": "± 5100331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677629833160,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1615764015,
            "range": "± 9793142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1614351548,
            "range": "± 4785335",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 436660352,
            "range": "± 955244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 440150477,
            "range": "± 1253651",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677640735483,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1800718475,
            "range": "± 31045598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1834995874,
            "range": "± 37680957",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 445417021,
            "range": "± 2386092",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 451606126,
            "range": "± 3864291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677732011976,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1806262870,
            "range": "± 17810201",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1821546820,
            "range": "± 35838011",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 447874055,
            "range": "± 7357595",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 443262631,
            "range": "± 7275919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677784979961,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1832788869,
            "range": "± 25506938",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1812553681,
            "range": "± 38653076",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 447440692,
            "range": "± 4877980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446886914,
            "range": "± 5507673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865781249,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1810823464,
            "range": "± 24670596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1810306142,
            "range": "± 44494582",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 443626653,
            "range": "± 3804307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446323626,
            "range": "± 4045051",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888443069,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1819038893,
            "range": "± 37739048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1832794238,
            "range": "± 44103794",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 443795859,
            "range": "± 5420637",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 444366289,
            "range": "± 3093450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226382834,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1590460248,
            "range": "± 18505370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1590632783,
            "range": "± 6048054",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 441619454,
            "range": "± 1867239",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 443067186,
            "range": "± 1024318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312451297,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1580330728,
            "range": "± 5838507",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1582362036,
            "range": "± 9445643",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 431987988,
            "range": "± 1679713",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 434772884,
            "range": "± 2764090",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324745107,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1604163760,
            "range": "± 6740925",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1593302396,
            "range": "± 4017805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 479192595,
            "range": "± 1793016",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 481558533,
            "range": "± 2471962",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384038080,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1595399048,
            "range": "± 8186900",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1588884979,
            "range": "± 6347061",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467675383,
            "range": "± 6560275",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469000342,
            "range": "± 2529586",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397639188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1597643640,
            "range": "± 4644587",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592710456,
            "range": "± 18054369",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467218014,
            "range": "± 1588238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469248176,
            "range": "± 1711201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399918460,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1599079356,
            "range": "± 7221273",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592351607,
            "range": "± 4051493",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 468105869,
            "range": "± 1084833",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 471674395,
            "range": "± 9273312",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416523378,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1605444457,
            "range": "± 9489804",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592092861,
            "range": "± 4237646",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 466506809,
            "range": "± 5949905",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 468240246,
            "range": "± 1534374",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678481338303,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3430658407,
            "range": "± 15512354",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3418766001,
            "range": "± 14604522",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1602405349,
            "range": "± 8037937",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1586837517,
            "range": "± 4739534",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602660190,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3449549696,
            "range": "± 18593127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3429244311,
            "range": "± 9392751",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1588318571,
            "range": "± 6606880",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1604728582,
            "range": "± 7095226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678603140317,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3424822669,
            "range": "± 22039159",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3405660199,
            "range": "± 19314750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1587495263,
            "range": "± 3882747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1591821503,
            "range": "± 8782205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821108693,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3421376120,
            "range": "± 14081313",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3420657291,
            "range": "± 10685593",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1578526983,
            "range": "± 5226247",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1582484033,
            "range": "± 10105272",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678910121936,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3461069900,
            "range": "± 24798167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3444914693,
            "range": "± 14713684",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1601071340,
            "range": "± 12614547",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1604129773,
            "range": "± 5763054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926646033,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3457480689,
            "range": "± 27605135",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3433606262,
            "range": "± 6573508",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1588438716,
            "range": "± 4569042",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1586501954,
            "range": "± 10171888",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071597745,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3438241784,
            "range": "± 14294568",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3440865488,
            "range": "± 13974142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1606314624,
            "range": "± 12701657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1601599324,
            "range": "± 7660720",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076605873,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3390854328,
            "range": "± 22876801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3389661829,
            "range": "± 15374122",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1562824632,
            "range": "± 7299604",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1574009733,
            "range": "± 6006938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081957101,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3391393128,
            "range": "± 16531675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3400528541,
            "range": "± 13482347",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1584576849,
            "range": "± 9542871",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1590164199,
            "range": "± 7725138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efc329caf24e647cc82fcb2d806190dc1e11695",
          "message": "Split core zkp kernels and rv32im kernel into seperate sys crates (#449)\n\nSplit core zkp kernels and rv32im kernel into seperate sys crates",
          "timestamp": "2023-03-17T15:02:59-07:00",
          "tree_id": "796b860064e1078ed2de6ed22158fd48f29d8526",
          "url": "https://github.com/risc0/risc0/commit/8efc329caf24e647cc82fcb2d806190dc1e11695"
        },
        "date": 1679090865617,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3409237832,
            "range": "± 41762613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3399785303,
            "range": "± 9864253",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1570652232,
            "range": "± 6933791",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1577203254,
            "range": "± 4775641",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c66bef66717d1fc34a353fc36bdab94bf98f5f8",
          "message": "Support for stdin and getenv in guest (#452)\n\n* Actually export the sys_* ABI symbols without mangling them\r\n* Add sys_getenv to get environment variables\r\n* Add with_env_var to ProverOpts to specify environment variables to include for the guest\r\n* Add --env VARNAME=value option to r0vm to specify environment variables to include\r\n* Plumb through stdin() so that std::io::stdin() works in the guest as expected\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T16:23:58-07:00",
          "tree_id": "c1dba25c3334f75d99d08a46ece76aec4a5da1e2",
          "url": "https://github.com/risc0/risc0/commit/7c66bef66717d1fc34a353fc36bdab94bf98f5f8"
        },
        "date": 1679095733948,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3396218214,
            "range": "± 17666426",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3400325132,
            "range": "± 18241936",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1594700464,
            "range": "± 4518262",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1596378582,
            "range": "± 5981100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81839854+justinFrevert@users.noreply.github.com",
            "name": "justinFrevert",
            "username": "justinFrevert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "285039cf9adf8bb0b4be8b598cae69367d8bbf25",
          "message": "Add no-std fix for WASM/Substrate chains (#438)",
          "timestamp": "2023-03-19T11:27:07-07:00",
          "tree_id": "4b416cf74c8156c1cb9f6171995149277391177d",
          "url": "https://github.com/risc0/risc0/commit/285039cf9adf8bb0b4be8b598cae69367d8bbf25"
        },
        "date": 1679251155988,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3424739650,
            "range": "± 29678578",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3422288072,
            "range": "± 9850746",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1602706931,
            "range": "± 7149634",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1603651009,
            "range": "± 5912145",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0953b45512684376f48d312f399fa2f5bcc50a34",
          "message": "Add support for Cuda Poseidon hal. (#454)",
          "timestamp": "2023-03-19T21:12:36-07:00",
          "tree_id": "339d3df331a2537ff5ed2da3baab1a0368444676",
          "url": "https://github.com/risc0/risc0/commit/0953b45512684376f48d312f399fa2f5bcc50a34"
        },
        "date": 1679286213661,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3475725366,
            "range": "± 16941546",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3456986240,
            "range": "± 19851233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1615907968,
            "range": "± 6235731",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1612260761,
            "range": "± 6468250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba",
          "message": "Attempt to fix unzip failures (#450)",
          "timestamp": "2023-03-20T11:39:27-07:00",
          "tree_id": "0790d6b6f1f3bfbd19bda3ee37df33e9ea7f9479",
          "url": "https://github.com/risc0/risc0/commit/b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba"
        },
        "date": 1679337877608,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3423006713,
            "range": "± 8701464",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3430805139,
            "range": "± 18813610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1571754978,
            "range": "± 3974948",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1582631890,
            "range": "± 3021560",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd9a56521b96ef7df3d6411577930fdf5152b1d",
          "message": "Fix kernel bug.",
          "timestamp": "2023-03-20T22:38:52Z",
          "tree_id": "d339f7373a1fe8a8e6fa682bd61a8816616c045d",
          "url": "https://github.com/risc0/risc0/commit/afd9a56521b96ef7df3d6411577930fdf5152b1d"
        },
        "date": 1679352217454,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3427708076,
            "range": "± 24721601",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3410111625,
            "range": "± 19431303",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1585848372,
            "range": "± 7553961",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1580338938,
            "range": "± 4702481",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7b19d57877577a2735e69172ea3e445a2c0c6cb",
          "message": "Adjusted benchmark workflow with PR number (#458)\n\nAdded PR number into artifact for workflow_run to pickup and correctly create a PR comment.",
          "timestamp": "2023-03-20T17:27:18-07:00",
          "tree_id": "4464642f24228823892daedbe0471f41ab367fbe",
          "url": "https://github.com/risc0/risc0/commit/e7b19d57877577a2735e69172ea3e445a2c0c6cb"
        },
        "date": 1679358722069,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3423491830,
            "range": "± 20734145",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3422611536,
            "range": "± 12010040",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1604283578,
            "range": "± 4274607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1612377125,
            "range": "± 8364012",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e717cfed432175f1bbba99964021edbbb3f9653",
          "message": "Reference `rust guest workarounds` tag (#451)",
          "timestamp": "2023-03-21T00:47:23-07:00",
          "tree_id": "80c55594a375a53928d5718f620428b8b543f059",
          "url": "https://github.com/risc0/risc0/commit/6e717cfed432175f1bbba99964021edbbb3f9653"
        },
        "date": 1679385492411,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3440535132,
            "range": "± 30393179",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3432453308,
            "range": "± 10110564",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1592165727,
            "range": "± 13676689",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1589280890,
            "range": "± 6116510",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc27559ad8d5f4a35712256ca38b94b394249d6d",
          "message": "Move benchmark comment files to runner.temp (#462)\n\nMoves all benchmark file artifacts to runner.temp to prevent files from being read cross-workflow or cross-job",
          "timestamp": "2023-03-21T14:04:44-07:00",
          "tree_id": "205c43e051ac8c0be7b43603509fe0820cb29be4",
          "url": "https://github.com/risc0/risc0/commit/fc27559ad8d5f4a35712256ca38b94b394249d6d"
        },
        "date": 1679433019100,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3398062069,
            "range": "± 13926458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3412557417,
            "range": "± 21009013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1555733566,
            "range": "± 3816348",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1561762075,
            "range": "± 3338258",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32602478+rlukata@users.noreply.github.com",
            "name": "Rami Lukata",
            "username": "rlukata"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b023e47d257926d520ce1d28c76ec3d52802fd8",
          "message": "add concurrency to ci (#463)",
          "timestamp": "2023-03-22T18:25:11Z",
          "tree_id": "690292c9180f0d15bf9d5cd297e413968f9094b9",
          "url": "https://github.com/risc0/risc0/commit/6b023e47d257926d520ce1d28c76ec3d52802fd8"
        },
        "date": 1679509899517,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3419266370,
            "range": "± 25919626",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3422887734,
            "range": "± 13351103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1590447058,
            "range": "± 6378100",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1588498252,
            "range": "± 4096830",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04645358404df28bce2807906fcbb49b0ac982c8",
          "message": "Continuations, part 1 (#461)\n\nBreaking Changes:\r\n* Drop the `image_id` parameter to the `risc0_zkvm::Prover`. The Prover already computes the image_id from the supplied ELF binary.\r\n* Replace `risc0_zkvm::MemoryImage::root` with `risc0_zkvm::MemoryImage::get_root()`, which computes the root merkle tree entry on-demand.\r\n* Drop `VerificationError::SealJournalLengthMismatch`.\r\n* Rename `VerificationError::JournalSealRootMismatch` to `VerificationError::JournalDigestMismatch`\r\n\r\nUpdates:\r\n* New rv32im circuit which includes continuations support\r\n* Add `env::pause` to the guest environment API\r\n* Add a test for pause/continue\r\n\r\nTODO:\r\n* Implement system initiated splits",
          "timestamp": "2023-03-24T03:08:10Z",
          "tree_id": "5dbd256fb9543e60796ee7db4dfc0346f9295632",
          "url": "https://github.com/risc0/risc0/commit/04645358404df28bce2807906fcbb49b0ac982c8"
        },
        "date": 1679627981317,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2294146472,
            "range": "± 11905729",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2306768691,
            "range": "± 13415671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 336212170,
            "range": "± 2590167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 340900446,
            "range": "± 4120934",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16e860e303b2a750cfdff3ff00f83a1c431f2d0",
          "message": "Migrate guest's concept of \"initial input\" to be a more standard \"stdin\". (#468)\n\n* env::read now reads from stdin by default.\r\n* risc0_zkvm::serde now serializes type \"char\" (i.e. single characters that are serialized by themselves) as its 4-byte codepoint rather than a 4-byte length followed by its serialized bytes.  Strings are unchanged.\r\n* Removed risc0_zkvm::env::Env structure, since its last remaining use is gone.\r\n* Renamed Stream{Reader,Writer} to more rusty names\r\n* New \"with_stdin\" options for ProverOpts to specify the standard input to supply to the guest; this accepts anything that implements std::io::Read.\r\n* When \"std\" is enabled, env::{stdin,stdout,stderr} implement std::io::{Read,Write}.\r\n* Deserialized objects are now owned and filled in directly instead of referencing a buffer.  This means that serialized types will need to be owned types, like \"String\" instead of \"&str\".\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-23T21:28:57-07:00",
          "tree_id": "215dd0fb2c8e350d0375f1c1ae1d94461baf28cd",
          "url": "https://github.com/risc0/risc0/commit/e16e860e303b2a750cfdff3ff00f83a1c431f2d0"
        },
        "date": 1679632463858,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2290166587,
            "range": "± 16357168",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2282616505,
            "range": "± 16618406",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 329535804,
            "range": "± 1210599",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 339024659,
            "range": "± 5021251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64ec080327be05890ffc41e7b30907be35ca20db",
          "message": "Update directories requirement from 4.0 to 5.0 (#456)\n\nUpdates the requirements on [directories](https://github.com/soc/directories-rs) to permit the latest version.\r\n- [Release notes](https://github.com/soc/directories-rs/releases)\r\n- [Commits](https://github.com/soc/directories-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: directories\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-24T07:22:45Z",
          "tree_id": "8059783cfeae33ed8039fb558069395018cc31ad",
          "url": "https://github.com/risc0/risc0/commit/64ec080327be05890ffc41e7b30907be35ca20db"
        },
        "date": 1679643234615,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2325235450,
            "range": "± 14746520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2308120499,
            "range": "± 12028251",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 333768123,
            "range": "± 5769984",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 337947313,
            "range": "± 1764237",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287c6b679281dd8cbd540aa0a2d96f8393b2ee96",
          "message": "Add tool for datasheet generation (#473)",
          "timestamp": "2023-03-28T09:42:48-07:00",
          "tree_id": "ab0b57e0dcb56e6b5592e446015d9c038bdd3c2c",
          "url": "https://github.com/risc0/risc0/commit/287c6b679281dd8cbd540aa0a2d96f8393b2ee96"
        },
        "date": 1680022277832,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2301225652,
            "range": "± 23255827",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2293738020,
            "range": "± 13707091",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 323766707,
            "range": "± 5602061",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 326311494,
            "range": "± 2402714",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd1a37e774bf8284d45d7dbb118034174627551c",
          "message": "Added `prod` label to workflows` (#475)",
          "timestamp": "2023-03-28T14:21:30-07:00",
          "tree_id": "bf9d475e21f7beea421325c91234a14a1f74aa5d",
          "url": "https://github.com/risc0/risc0/commit/cd1a37e774bf8284d45d7dbb118034174627551c"
        },
        "date": 1680038782992,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2300399148,
            "range": "± 15203245",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2301759981,
            "range": "± 16280563",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 341628960,
            "range": "± 6608045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 340614176,
            "range": "± 6808686",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06749f637515ff1e00c9818ffd7498b9d2d7965f",
          "message": "cargo-risczero tool (#453)\n\n* Add cargo-risczero tool / crate\r\n\r\n* Added a `new` command to the cargo-risczero tool for generating from templates\r\n\r\n* Imported the risc0-rust-starter template as a cargo-generate template for the new command to pull from\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-28T16:47:19-07:00",
          "tree_id": "bc312aa30810429a133136c814d4008b7c3fdacd",
          "url": "https://github.com/risc0/risc0/commit/06749f637515ff1e00c9818ffd7498b9d2d7965f"
        },
        "date": 1680047565568,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2321592049,
            "range": "± 23088451",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2323666279,
            "range": "± 14957722",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 330948829,
            "range": "± 6645477",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 340107460,
            "range": "± 7272863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b271b2d6f28d152f1e58934b15bdad67cc8835f",
          "message": "Fixed a typo in `risczero new` template (#477)",
          "timestamp": "2023-03-28T23:00:36-07:00",
          "tree_id": "410d1385f7adc2355af3fb38a1dcced54d231759",
          "url": "https://github.com/risc0/risc0/commit/2b271b2d6f28d152f1e58934b15bdad67cc8835f"
        },
        "date": 1680070316012,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2301403020,
            "range": "± 13395926",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2295404778,
            "range": "± 15946642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 332870211,
            "range": "± 1531200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 339596341,
            "range": "± 4187915",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efc09afaf27aa5a97621a2b96fa2d9d5595421a9",
          "message": "Fixes for cargo-risczero new (#480)",
          "timestamp": "2023-03-29T13:20:28-07:00",
          "tree_id": "c5e9be81791d0dd6b8c6a39d8b0936cdaa672a7b",
          "url": "https://github.com/risc0/risc0/commit/efc09afaf27aa5a97621a2b96fa2d9d5595421a9"
        },
        "date": 1680121526639,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2299991968,
            "range": "± 19090842",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2299770372,
            "range": "± 14402184",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 325779235,
            "range": "± 3248487",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 328509992,
            "range": "± 4828021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2af172d9b3a0b13e1139d880b5bfe3c1f193efc",
          "message": "Update template & examples references (#478)",
          "timestamp": "2023-03-29T21:01:54Z",
          "tree_id": "e534854e319627fb5c9ee32a70f153d91b2ecbfa",
          "url": "https://github.com/risc0/risc0/commit/c2af172d9b3a0b13e1139d880b5bfe3c1f193efc"
        },
        "date": 1680124016112,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2294938126,
            "range": "± 11906569",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2289322098,
            "range": "± 14874896",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 336223312,
            "range": "± 4354727",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 337587080,
            "range": "± 1014997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "distinct": true,
          "id": "77205f046f726f948eea0958247b2d8eb054f8cf",
          "message": "Fix crate publish error",
          "timestamp": "2023-03-29T15:28:59-07:00",
          "tree_id": "a9bb243500201b9c0efd01117335002f8e4e6f5a",
          "url": "https://github.com/risc0/risc0/commit/77205f046f726f948eea0958247b2d8eb054f8cf"
        },
        "date": 1680129320150,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2286187646,
            "range": "± 20929174",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2284616125,
            "range": "± 31358015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 331761121,
            "range": "± 5615783",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 334547304,
            "range": "± 5880724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23e362b536a27920d9de79797f7f97c21cf52b53",
          "message": "Update serial_test requirement from 1.0 to 2.0 (#486)\n\nUpdates the requirements on [serial_test](https://github.com/palfrey/serial_test) to permit the latest version.\r\n- [Release notes](https://github.com/palfrey/serial_test/releases)\r\n- [Commits](https://github.com/palfrey/serial_test/compare/v1.0.0...v2.0.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serial_test\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-30T17:58:33Z",
          "tree_id": "5e94c0f5e7fb320e18e88faba8c0e6e8fd2390df",
          "url": "https://github.com/risc0/risc0/commit/23e362b536a27920d9de79797f7f97c21cf52b53"
        },
        "date": 1680199452948,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2302550678,
            "range": "± 18486660",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2290095932,
            "range": "± 18549892",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 324288461,
            "range": "± 1552204",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 330834936,
            "range": "± 5950419",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cfe6427921e6dd3eab28fb53fe7ff9973e092bf",
          "message": "Removed Snakecase from risczero new proj name (#487)",
          "timestamp": "2023-03-30T15:50:51-07:00",
          "tree_id": "049694ea85fe9558072ed3856ceca42988c2fd19",
          "url": "https://github.com/risc0/risc0/commit/3cfe6427921e6dd3eab28fb53fe7ff9973e092bf"
        },
        "date": 1680216963160,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2296126114,
            "range": "± 12070866",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2298800755,
            "range": "± 15808278",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 330817026,
            "range": "± 5987878",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 335065813,
            "range": "± 6575409",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e49163c66cc4ad3f2fecee8a5adac71647fb21",
          "message": "Align examples with template (#488)",
          "timestamp": "2023-03-31T09:54:34-07:00",
          "tree_id": "d22e55dd3d31c49e37ab43e236009f297a105a93",
          "url": "https://github.com/risc0/risc0/commit/d1e49163c66cc4ad3f2fecee8a5adac71647fb21"
        },
        "date": 1680282358313,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2318879482,
            "range": "± 24284503",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2307490594,
            "range": "± 19236539",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 336149819,
            "range": "± 5597787",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 341360838,
            "range": "± 1147753",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "034fc69c4f490ed4d60d4250cc4f0a672d7a11b1",
          "message": "Added RISC0_CUDA_OPT env var and default to -O1 (#492)\n\n* Default CUDA ptxas optimization levels of -O1 to improve build times but add env var fallback",
          "timestamp": "2023-03-31T15:28:16-07:00",
          "tree_id": "7b28dfc80b404e52bfa96eb6ba735afc5c36f596",
          "url": "https://github.com/risc0/risc0/commit/034fc69c4f490ed4d60d4250cc4f0a672d7a11b1"
        },
        "date": 1680301998437,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2316761327,
            "range": "± 10048573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2327069802,
            "range": "± 9151889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 335637771,
            "range": "± 2519863",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 343679868,
            "range": "± 3502265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8f18bdb21a288ad2535676f29b54116375de160",
          "message": "Preflight progress (#482)\n\n* Rename Preflight->preflight::ExecState\r\n* Add ExecState::segmentize method to generate execution segments\r\n* Proofs can now be generated off of segments\r\n* All tests pass with RISC0_EXPERIMENTAL_PREFLIGHT=1 except tests::do_random and tests::trace.\r\n\r\nStill todo:\r\n\r\n* Better paging support, including better page fault calculation for page ins, and reserving cycles for pgae outs.\r\n* Verify host-initiated splits work properly once #469 lands.\r\n* Integrate into r0vm so it can both read and write Segments\r\n* Add an A/B test mode to compare preflight output against step_exec to make sure everything executes in the same way, including memory, registers, program counters, and cycle counts.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-01T09:34:51Z",
          "tree_id": "f61706c49a8a49dcba3253964bdd1a365342993b",
          "url": "https://github.com/risc0/risc0/commit/d8f18bdb21a288ad2535676f29b54116375de160"
        },
        "date": 1680341995698,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2301888716,
            "range": "± 8384539",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2312024260,
            "range": "± 20482802",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 339026104,
            "range": "± 3974393",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 349436536,
            "range": "± 7069877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c657ca0747947db4b890751853c2d3358d820f31",
          "message": "Update memory map and drop unused code (#491)",
          "timestamp": "2023-04-04T19:44:32Z",
          "tree_id": "550b25230e92045bfa956af44fc6f400656887e7",
          "url": "https://github.com/risc0/risc0/commit/c657ca0747947db4b890751853c2d3358d820f31"
        },
        "date": 1680638247077,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2309458101,
            "range": "± 16634684",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2292634375,
            "range": "± 17054810",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 337837715,
            "range": "± 1554925",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 347852239,
            "range": "± 10440814",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b54a0b3b9a9f67da6263b9892c418db0f010a8a1",
          "message": "Moved tempdir for risc0-build into cache_dir (#497)",
          "timestamp": "2023-04-04T23:19:20Z",
          "tree_id": "f9d924e52ddc41a3e6a77e2bf99125dc2022e055",
          "url": "https://github.com/risc0/risc0/commit/b54a0b3b9a9f67da6263b9892c418db0f010a8a1"
        },
        "date": 1680650643902,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2296494578,
            "range": "± 20442397",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2300737305,
            "range": "± 10256259",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 323268659,
            "range": "± 2073227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 326034431,
            "range": "± 2021199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96deb8515ec614d36482619122b46584376b20e5",
          "message": "Fixed risc0-build deadlock / double build (#498)",
          "timestamp": "2023-04-05T08:41:16-07:00",
          "tree_id": "a7edb04dd142e08639573ecf30eb4df2f6ee4ed9",
          "url": "https://github.com/risc0/risc0/commit/96deb8515ec614d36482619122b46584376b20e5"
        },
        "date": 1680710013481,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2325151313,
            "range": "± 25635420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2321492336,
            "range": "± 14770781",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 320416654,
            "range": "± 1083443",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 325057769,
            "range": "± 1063463",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2fcc90a36c3f7613de089840e27db591630acc5",
          "message": "Added RISC0_GUEST_LOGFILE and fixed clippy warns (#499)",
          "timestamp": "2023-04-05T10:32:02-07:00",
          "tree_id": "6378944d4e68645299bb69e7f6184f8a47b2e401",
          "url": "https://github.com/risc0/risc0/commit/d2fcc90a36c3f7613de089840e27db591630acc5"
        },
        "date": 1680716402581,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2325344328,
            "range": "± 25458425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2323828815,
            "range": "± 12330751",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 318865777,
            "range": "± 5835108",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 334278854,
            "range": "± 2962829",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b",
          "message": "Continuations, part 2: system initiated splits (#469)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T12:23:08-07:00",
          "tree_id": "06f9928d34afb48230c7fba85d1362d10baecd35",
          "url": "https://github.com/risc0/risc0/commit/39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b"
        },
        "date": 1680722875053,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2318787884,
            "range": "± 19866172",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2307823608,
            "range": "± 16666665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 320433643,
            "range": "± 4583760",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 324169645,
            "range": "± 4731466",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7a20347498624393946e52028e8f0388d5c16d",
          "message": "Use generated layout to determine location of registers in rv32im circuit (#476)\n\n* Refactor layout to minimize duplicate code between risczero/rv32im\r\n* Add a buffer pretty-printer to dump a buffer based on a layout\r\n* rv32im-verify no longer has a brittle dependency on the specific layout of the \"out\" buffer\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T21:48:13Z",
          "tree_id": "5ec200ff06950dba5c00139d0b42e56e5e1c131a",
          "url": "https://github.com/risc0/risc0/commit/0b7a20347498624393946e52028e8f0388d5c16d"
        },
        "date": 1680731581817,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2279955505,
            "range": "± 11676195",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2292353363,
            "range": "± 16463228",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 313094764,
            "range": "± 1218078",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 319362515,
            "range": "± 5413621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb",
          "message": "Remove zeroio (#502)\n\nZeroio is no longer as big of a win over risc0_zkvm::serde as it was since our I/O works differently now.  Plus, it was cumbersome to use.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-08T13:08:15-07:00",
          "tree_id": "94d5f58911eb142112da98cd5ff66dc8b0076c4f",
          "url": "https://github.com/risc0/risc0/commit/1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb"
        },
        "date": 1680985176566,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2299861256,
            "range": "± 33986473",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2305300529,
            "range": "± 18098678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 326240099,
            "range": "± 1626126",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 333197082,
            "range": "± 6837660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87adc831b195cd52aac7c49bf9894568baa7d372",
          "message": "Add test and example of using stdio through ProverOpts. (#506)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-10T13:10:58-07:00",
          "tree_id": "d29ab453e3d09b2c0b67af3f894beb3ac7294f2c",
          "url": "https://github.com/risc0/risc0/commit/87adc831b195cd52aac7c49bf9894568baa7d372"
        },
        "date": 1681157799623,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2299637550,
            "range": "± 22349252",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2303605874,
            "range": "± 12126420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 339677163,
            "range": "± 4434147",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 346247976,
            "range": "± 2709675",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b83c08d5da7838d1f3b0717e8d123e0daeea94f7",
          "message": "Add serde derives to MemoryImage (#511)",
          "timestamp": "2023-04-13T10:46:50-07:00",
          "tree_id": "17bf0062987b13b67220bb0be2c0364170b6ce9b",
          "url": "https://github.com/risc0/risc0/commit/b83c08d5da7838d1f3b0717e8d123e0daeea94f7"
        },
        "date": 1681408305956,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2284258506,
            "range": "± 22865602",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2287941751,
            "range": "± 46080406",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 322170919,
            "range": "± 7133363",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 329509998,
            "range": "± 4001589",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26d1a7db3fbbd24469df447e4b7c24646e5df75",
          "message": "Delete github-action-benchmark repo directory (#512)\n\nAttempt to fix bench_trendworkflows.",
          "timestamp": "2023-04-13T18:02:58-07:00",
          "tree_id": "d4d0b796f272a26e9174600803cccc3ff8e56c7d",
          "url": "https://github.com/risc0/risc0/commit/f26d1a7db3fbbd24469df447e4b7c24646e5df75"
        },
        "date": 1681434910474,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2305225645,
            "range": "± 18841906",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2310254959,
            "range": "± 11591837",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 329790163,
            "range": "± 1156800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 340670824,
            "range": "± 3993942",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08b89140bbf1b28f87b62cbc2cdac8e9820af72b",
          "message": "Implementation of new API, part 1 (#503)",
          "timestamp": "2023-04-17T11:35:00-07:00",
          "tree_id": "1f46cbe5852d43fd771be3905002158f88e65216",
          "url": "https://github.com/risc0/risc0/commit/08b89140bbf1b28f87b62cbc2cdac8e9820af72b"
        },
        "date": 1681757220825,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2305829718,
            "range": "± 16153268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2310249059,
            "range": "± 15009021",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 323918628,
            "range": "± 4196900",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 336009003,
            "range": "± 5751751",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b7ee4f09d645810388fec0a751b8d466008913",
          "message": "Document Session and Segment (#509)\n\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <frank@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-17T16:16:12-07:00",
          "tree_id": "69709df9db13736a8aaf4156ee8294734ca21483",
          "url": "https://github.com/risc0/risc0/commit/66b7ee4f09d645810388fec0a751b8d466008913"
        },
        "date": 1681773710168,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2285624354,
            "range": "± 23485884",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2276698646,
            "range": "± 8872135",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 323664057,
            "range": "± 2963536",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 333330901,
            "range": "± 6011790",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f",
          "message": "Add additional sanity checking to the ELF parser (#515)\n\n* Add bounds checking for elf parser.",
          "timestamp": "2023-04-18T08:27:20-07:00",
          "tree_id": "c63a2cdbb402d7e57e127349c5303cb322bd7e6b",
          "url": "https://github.com/risc0/risc0/commit/bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f"
        },
        "date": 1681832365658,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2330884380,
            "range": "± 17984219",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2324989012,
            "range": "± 15780431",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 330758277,
            "range": "± 4276671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 334830330,
            "range": "± 4362125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "909214982650666c03159e9bad9d2ee90d5e2a46",
          "message": "Added templ_subdir flag to cargo risczero new (#517)\n\n* Adds additional flags to cargo risczero new for sub directory selection\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-04-18T13:47:26-07:00",
          "tree_id": "0eddae9f17a96b6724120e63f89bbc91caf14e8d",
          "url": "https://github.com/risc0/risc0/commit/909214982650666c03159e9bad9d2ee90d5e2a46"
        },
        "date": 1681851143405,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2301171843,
            "range": "± 17438246",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2292409535,
            "range": "± 20466035",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 322764020,
            "range": "± 7130407",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 325840234,
            "range": "± 1655080",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e60c27bd5f9c17612a8a5dc65f2baf7f299277e",
          "message": "Implementation of new API, part 2 (#514)",
          "timestamp": "2023-04-18T17:45:57-07:00",
          "tree_id": "df4dc524cd18f68b343346a17f8492e8bb442a29",
          "url": "https://github.com/risc0/risc0/commit/0e60c27bd5f9c17612a8a5dc65f2baf7f299277e"
        },
        "date": 1681865601562,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6259764288,
            "range": "± 62031213",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6244750112,
            "range": "± 52935940",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1410920886,
            "range": "± 13018263",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1417214802,
            "range": "± 4378537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4",
          "message": "Revive profiler, add docs, cleanups (#518)",
          "timestamp": "2023-04-19T09:17:54-07:00",
          "tree_id": "5fa93c08b0b0d0020bd8e7cfcfb6296e9094a930",
          "url": "https://github.com/risc0/risc0/commit/1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4"
        },
        "date": 1681922376101,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6278595211,
            "range": "± 67460491",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6232337047,
            "range": "± 64664042",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1424402891,
            "range": "± 2827721",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1431318810,
            "range": "± 3838914",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f6d42f1c21a284ae61ba887d2361e91c37eee9",
          "message": "Replace default_hal with default_prover (#520)",
          "timestamp": "2023-04-21T03:15:26Z",
          "tree_id": "c17e010db9118080ef0f70466bdfea7af2b4dfa4",
          "url": "https://github.com/risc0/risc0/commit/27f6d42f1c21a284ae61ba887d2361e91c37eee9"
        },
        "date": 1682047789469,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6242751287,
            "range": "± 71118159",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6173000964,
            "range": "± 36272023",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1414654480,
            "range": "± 17941230",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1419886150,
            "range": "± 17769380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb72df1284c0cf0a516dd87af193256d1baec81",
          "message": "Poseidon 254 (#524)\n\nThis adds experimental support for a different version of Poseidon which is efficient to use inside SNARKs used on ETH as a step in building a STARK -> SNARK recursion. It is largely untested, but should have no impact on the normal code path.",
          "timestamp": "2023-04-21T12:27:17-07:00",
          "tree_id": "f13644889c441abcd1ea8250924bcf41666be102",
          "url": "https://github.com/risc0/risc0/commit/6fb72df1284c0cf0a516dd87af193256d1baec81"
        },
        "date": 1682105680769,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6242527564,
            "range": "± 47322345",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6232952400,
            "range": "± 48609933",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1445922455,
            "range": "± 18203952",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1462391294,
            "range": "± 7232018",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "macOS-apple_m2_pro": [
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865810349,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1026727562,
            "range": "± 8352776",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1025539208,
            "range": "± 4130899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 678795270,
            "range": "± 560086",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 679465124,
            "range": "± 677639",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888392792,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1029713166,
            "range": "± 5856854",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1025629833,
            "range": "± 9234965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679204395,
            "range": "± 1662020",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680374916,
            "range": "± 1665965",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226338834,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1026259458,
            "range": "± 10759646",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1026832562,
            "range": "± 5910823",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679019270,
            "range": "± 1121148",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680188895,
            "range": "± 1200412",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312409998,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1024316749,
            "range": "± 4159909",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1026381541,
            "range": "± 5689380",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679249291,
            "range": "± 809528",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680288583,
            "range": "± 468511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324717078,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153322187,
            "range": "± 5883618",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1158878854,
            "range": "± 4943085",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 782208208,
            "range": "± 658971",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782688104,
            "range": "± 774227",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384028973,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150062958,
            "range": "± 5981922",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1149848062,
            "range": "± 6548000",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779453124,
            "range": "± 1100647",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780719208,
            "range": "± 852296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397607263,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150679291,
            "range": "± 5442384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1150125749,
            "range": "± 6023275",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780756895,
            "range": "± 1074704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782257603,
            "range": "± 1147722",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399961491,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150863812,
            "range": "± 6052012",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151539479,
            "range": "± 3191519",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780375833,
            "range": "± 800320",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781555687,
            "range": "± 551960",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678480780957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153579478,
            "range": "± 5376379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1154288020,
            "range": "± 4132309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781538937,
            "range": "± 922709",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782561916,
            "range": "± 2085766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602104080,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1154176312,
            "range": "± 4850980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1153416354,
            "range": "± 5505200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780892541,
            "range": "± 774406",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781807958,
            "range": "± 422148",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678654652653,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1155088520,
            "range": "± 4292439",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1156344062,
            "range": "± 7130117",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781695479,
            "range": "± 812066",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782910937,
            "range": "± 1023991",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678820993000,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1152288479,
            "range": "± 5265828",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151518229,
            "range": "± 3564168",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779994478,
            "range": "± 866420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780646791,
            "range": "± 545942",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678909802424,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1146958500,
            "range": "± 11100207",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152922728,
            "range": "± 5795797",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779752145,
            "range": "± 795976",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781066020,
            "range": "± 1300062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926530935,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1149197374,
            "range": "± 3277279",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1154787708,
            "range": "± 4519573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780348687,
            "range": "± 1561465",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780890645,
            "range": "± 901334",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071118353,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1154189041,
            "range": "± 9053855",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1153209520,
            "range": "± 7516182",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781563458,
            "range": "± 838539",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782087437,
            "range": "± 618089",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076478739,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150004229,
            "range": "± 5877367",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151934145,
            "range": "± 9437850",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780430124,
            "range": "± 891859",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781249249,
            "range": "± 2095519",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081824407,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153476228,
            "range": "± 5502682",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151696604,
            "range": "± 6445452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780914645,
            "range": "± 2246615",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782048666,
            "range": "± 1178697",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efc329caf24e647cc82fcb2d806190dc1e11695",
          "message": "Split core zkp kernels and rv32im kernel into seperate sys crates (#449)\n\nSplit core zkp kernels and rv32im kernel into seperate sys crates",
          "timestamp": "2023-03-17T15:02:59-07:00",
          "tree_id": "796b860064e1078ed2de6ed22158fd48f29d8526",
          "url": "https://github.com/risc0/risc0/commit/8efc329caf24e647cc82fcb2d806190dc1e11695"
        },
        "date": 1679090747723,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1155589520,
            "range": "± 6611704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1156181124,
            "range": "± 5444515",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 782209687,
            "range": "± 734656",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 783075479,
            "range": "± 433351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c66bef66717d1fc34a353fc36bdab94bf98f5f8",
          "message": "Support for stdin and getenv in guest (#452)\n\n* Actually export the sys_* ABI symbols without mangling them\r\n* Add sys_getenv to get environment variables\r\n* Add with_env_var to ProverOpts to specify environment variables to include for the guest\r\n* Add --env VARNAME=value option to r0vm to specify environment variables to include\r\n* Plumb through stdin() so that std::io::stdin() works in the guest as expected\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T16:23:58-07:00",
          "tree_id": "c1dba25c3334f75d99d08a46ece76aec4a5da1e2",
          "url": "https://github.com/risc0/risc0/commit/7c66bef66717d1fc34a353fc36bdab94bf98f5f8"
        },
        "date": 1679095598816,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1148018833,
            "range": "± 4532253",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1155062833,
            "range": "± 6344204",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779244249,
            "range": "± 641851",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780354020,
            "range": "± 1598390",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81839854+justinFrevert@users.noreply.github.com",
            "name": "justinFrevert",
            "username": "justinFrevert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "285039cf9adf8bb0b4be8b598cae69367d8bbf25",
          "message": "Add no-std fix for WASM/Substrate chains (#438)",
          "timestamp": "2023-03-19T11:27:07-07:00",
          "tree_id": "4b416cf74c8156c1cb9f6171995149277391177d",
          "url": "https://github.com/risc0/risc0/commit/285039cf9adf8bb0b4be8b598cae69367d8bbf25"
        },
        "date": 1679250600936,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150397020,
            "range": "± 4844356",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152135604,
            "range": "± 5330368",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779802062,
            "range": "± 1276324",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780619958,
            "range": "± 563563",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0953b45512684376f48d312f399fa2f5bcc50a34",
          "message": "Add support for Cuda Poseidon hal. (#454)",
          "timestamp": "2023-03-19T21:12:36-07:00",
          "tree_id": "339d3df331a2537ff5ed2da3baab1a0368444676",
          "url": "https://github.com/risc0/risc0/commit/0953b45512684376f48d312f399fa2f5bcc50a34"
        },
        "date": 1679285717118,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1148407583,
            "range": "± 7243217",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152945541,
            "range": "± 7148812",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780227895,
            "range": "± 603488",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780524624,
            "range": "± 973743",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba",
          "message": "Attempt to fix unzip failures (#450)",
          "timestamp": "2023-03-20T11:39:27-07:00",
          "tree_id": "0790d6b6f1f3bfbd19bda3ee37df33e9ea7f9479",
          "url": "https://github.com/risc0/risc0/commit/b4a4cb36a0e6e55dfd6f517c09629b081c2b4dba"
        },
        "date": 1679337756470,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150134645,
            "range": "± 8279744",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1150100354,
            "range": "± 11031567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779336645,
            "range": "± 1219027",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779697687,
            "range": "± 1331240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd9a56521b96ef7df3d6411577930fdf5152b1d",
          "message": "Fix kernel bug.",
          "timestamp": "2023-03-20T22:38:52Z",
          "tree_id": "d339f7373a1fe8a8e6fa682bd61a8816616c045d",
          "url": "https://github.com/risc0/risc0/commit/afd9a56521b96ef7df3d6411577930fdf5152b1d"
        },
        "date": 1679352089081,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1147097291,
            "range": "± 9342329",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152430354,
            "range": "± 7086983",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779260083,
            "range": "± 1078405",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779676374,
            "range": "± 1149628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7b19d57877577a2735e69172ea3e445a2c0c6cb",
          "message": "Adjusted benchmark workflow with PR number (#458)\n\nAdded PR number into artifact for workflow_run to pickup and correctly create a PR comment.",
          "timestamp": "2023-03-20T17:27:18-07:00",
          "tree_id": "4464642f24228823892daedbe0471f41ab367fbe",
          "url": "https://github.com/risc0/risc0/commit/e7b19d57877577a2735e69172ea3e445a2c0c6cb"
        },
        "date": 1679358604125,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1148002312,
            "range": "± 7951977",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151177458,
            "range": "± 7070040",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779596770,
            "range": "± 538645",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780906374,
            "range": "± 1109265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e717cfed432175f1bbba99964021edbbb3f9653",
          "message": "Reference `rust guest workarounds` tag (#451)",
          "timestamp": "2023-03-21T00:47:23-07:00",
          "tree_id": "80c55594a375a53928d5718f620428b8b543f059",
          "url": "https://github.com/risc0/risc0/commit/6e717cfed432175f1bbba99964021edbbb3f9653"
        },
        "date": 1679385011322,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1152166374,
            "range": "± 6262909",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151335541,
            "range": "± 8671360",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780087166,
            "range": "± 1118984",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780448145,
            "range": "± 675267",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc27559ad8d5f4a35712256ca38b94b394249d6d",
          "message": "Move benchmark comment files to runner.temp (#462)\n\nMoves all benchmark file artifacts to runner.temp to prevent files from being read cross-workflow or cross-job",
          "timestamp": "2023-03-21T14:04:44-07:00",
          "tree_id": "205c43e051ac8c0be7b43603509fe0820cb29be4",
          "url": "https://github.com/risc0/risc0/commit/fc27559ad8d5f4a35712256ca38b94b394249d6d"
        },
        "date": 1679432851128,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1148237270,
            "range": "± 5343051",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152110041,
            "range": "± 7339235",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781069000,
            "range": "± 740431",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782343458,
            "range": "± 2587260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32602478+rlukata@users.noreply.github.com",
            "name": "Rami Lukata",
            "username": "rlukata"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b023e47d257926d520ce1d28c76ec3d52802fd8",
          "message": "add concurrency to ci (#463)",
          "timestamp": "2023-03-22T18:25:11Z",
          "tree_id": "690292c9180f0d15bf9d5cd297e413968f9094b9",
          "url": "https://github.com/risc0/risc0/commit/6b023e47d257926d520ce1d28c76ec3d52802fd8"
        },
        "date": 1679509675362,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1148087312,
            "range": "± 6968756",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151845083,
            "range": "± 5999719",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779763854,
            "range": "± 512729",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780618437,
            "range": "± 1145639",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04645358404df28bce2807906fcbb49b0ac982c8",
          "message": "Continuations, part 1 (#461)\n\nBreaking Changes:\r\n* Drop the `image_id` parameter to the `risc0_zkvm::Prover`. The Prover already computes the image_id from the supplied ELF binary.\r\n* Replace `risc0_zkvm::MemoryImage::root` with `risc0_zkvm::MemoryImage::get_root()`, which computes the root merkle tree entry on-demand.\r\n* Drop `VerificationError::SealJournalLengthMismatch`.\r\n* Rename `VerificationError::JournalSealRootMismatch` to `VerificationError::JournalDigestMismatch`\r\n\r\nUpdates:\r\n* New rv32im circuit which includes continuations support\r\n* Add `env::pause` to the guest environment API\r\n* Add a test for pause/continue\r\n\r\nTODO:\r\n* Implement system initiated splits",
          "timestamp": "2023-03-24T03:08:10Z",
          "tree_id": "5dbd256fb9543e60796ee7db4dfc0346f9295632",
          "url": "https://github.com/risc0/risc0/commit/04645358404df28bce2807906fcbb49b0ac982c8"
        },
        "date": 1679627459023,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 469063249,
            "range": "± 5915805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464697916,
            "range": "± 5890244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113142291,
            "range": "± 694155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114887853,
            "range": "± 1081811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16e860e303b2a750cfdff3ff00f83a1c431f2d0",
          "message": "Migrate guest's concept of \"initial input\" to be a more standard \"stdin\". (#468)\n\n* env::read now reads from stdin by default.\r\n* risc0_zkvm::serde now serializes type \"char\" (i.e. single characters that are serialized by themselves) as its 4-byte codepoint rather than a 4-byte length followed by its serialized bytes.  Strings are unchanged.\r\n* Removed risc0_zkvm::env::Env structure, since its last remaining use is gone.\r\n* Renamed Stream{Reader,Writer} to more rusty names\r\n* New \"with_stdin\" options for ProverOpts to specify the standard input to supply to the guest; this accepts anything that implements std::io::Read.\r\n* When \"std\" is enabled, env::{stdin,stdout,stderr} implement std::io::{Read,Write}.\r\n* Deserialized objects are now owned and filled in directly instead of referencing a buffer.  This means that serialized types will need to be owned types, like \"String\" instead of \"&str\".\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-23T21:28:57-07:00",
          "tree_id": "215dd0fb2c8e350d0375f1c1ae1d94461baf28cd",
          "url": "https://github.com/risc0/risc0/commit/e16e860e303b2a750cfdff3ff00f83a1c431f2d0"
        },
        "date": 1679632314774,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 463765208,
            "range": "± 4818546",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 469623958,
            "range": "± 7264728",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112651583,
            "range": "± 628083",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114745041,
            "range": "± 697118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64ec080327be05890ffc41e7b30907be35ca20db",
          "message": "Update directories requirement from 4.0 to 5.0 (#456)\n\nUpdates the requirements on [directories](https://github.com/soc/directories-rs) to permit the latest version.\r\n- [Release notes](https://github.com/soc/directories-rs/releases)\r\n- [Commits](https://github.com/soc/directories-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: directories\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-24T07:22:45Z",
          "tree_id": "8059783cfeae33ed8039fb558069395018cc31ad",
          "url": "https://github.com/risc0/risc0/commit/64ec080327be05890ffc41e7b30907be35ca20db"
        },
        "date": 1679642745432,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 463315437,
            "range": "± 5536848",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465129916,
            "range": "± 8200820",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113121791,
            "range": "± 492579",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114868958,
            "range": "± 618657",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287c6b679281dd8cbd540aa0a2d96f8393b2ee96",
          "message": "Add tool for datasheet generation (#473)",
          "timestamp": "2023-03-28T09:42:48-07:00",
          "tree_id": "ab0b57e0dcb56e6b5592e446015d9c038bdd3c2c",
          "url": "https://github.com/risc0/risc0/commit/287c6b679281dd8cbd540aa0a2d96f8393b2ee96"
        },
        "date": 1680021943706,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 459012666,
            "range": "± 6074140",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 463720437,
            "range": "± 6456672",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 110910229,
            "range": "± 425374",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 112723833,
            "range": "± 518030",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd1a37e774bf8284d45d7dbb118034174627551c",
          "message": "Added `prod` label to workflows` (#475)",
          "timestamp": "2023-03-28T14:21:30-07:00",
          "tree_id": "bf9d475e21f7beea421325c91234a14a1f74aa5d",
          "url": "https://github.com/risc0/risc0/commit/cd1a37e774bf8284d45d7dbb118034174627551c"
        },
        "date": 1680039623357,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 460964770,
            "range": "± 4673529",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 462981812,
            "range": "± 5379460",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111913083,
            "range": "± 628197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113767499,
            "range": "± 437276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06749f637515ff1e00c9818ffd7498b9d2d7965f",
          "message": "cargo-risczero tool (#453)\n\n* Add cargo-risczero tool / crate\r\n\r\n* Added a `new` command to the cargo-risczero tool for generating from templates\r\n\r\n* Imported the risc0-rust-starter template as a cargo-generate template for the new command to pull from\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-28T16:47:19-07:00",
          "tree_id": "bc312aa30810429a133136c814d4008b7c3fdacd",
          "url": "https://github.com/risc0/risc0/commit/06749f637515ff1e00c9818ffd7498b9d2d7965f"
        },
        "date": 1680047405899,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 460505312,
            "range": "± 2190257",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 466417854,
            "range": "± 6448725",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112329854,
            "range": "± 550507",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114265166,
            "range": "± 286415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b271b2d6f28d152f1e58934b15bdad67cc8835f",
          "message": "Fixed a typo in `risczero new` template (#477)",
          "timestamp": "2023-03-28T23:00:36-07:00",
          "tree_id": "410d1385f7adc2355af3fb38a1dcced54d231759",
          "url": "https://github.com/risc0/risc0/commit/2b271b2d6f28d152f1e58934b15bdad67cc8835f"
        },
        "date": 1680069823679,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 460724499,
            "range": "± 5487728",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465871187,
            "range": "± 4460781",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112463354,
            "range": "± 479981",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113963541,
            "range": "± 389543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efc09afaf27aa5a97621a2b96fa2d9d5595421a9",
          "message": "Fixes for cargo-risczero new (#480)",
          "timestamp": "2023-03-29T13:20:28-07:00",
          "tree_id": "c5e9be81791d0dd6b8c6a39d8b0936cdaa672a7b",
          "url": "https://github.com/risc0/risc0/commit/efc09afaf27aa5a97621a2b96fa2d9d5595421a9"
        },
        "date": 1680121392452,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 463068354,
            "range": "± 6376686",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464889062,
            "range": "± 3280640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 111972645,
            "range": "± 373837",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113559062,
            "range": "± 592405",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2af172d9b3a0b13e1139d880b5bfe3c1f193efc",
          "message": "Update template & examples references (#478)",
          "timestamp": "2023-03-29T21:01:54Z",
          "tree_id": "e534854e319627fb5c9ee32a70f153d91b2ecbfa",
          "url": "https://github.com/risc0/risc0/commit/c2af172d9b3a0b13e1139d880b5bfe3c1f193efc"
        },
        "date": 1680123878721,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 459970395,
            "range": "± 4413053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 467305541,
            "range": "± 6260857",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112966728,
            "range": "± 738255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114976041,
            "range": "± 390683",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "frank@risczero.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "distinct": true,
          "id": "77205f046f726f948eea0958247b2d8eb054f8cf",
          "message": "Fix crate publish error",
          "timestamp": "2023-03-29T15:28:59-07:00",
          "tree_id": "a9bb243500201b9c0efd01117335002f8e4e6f5a",
          "url": "https://github.com/risc0/risc0/commit/77205f046f726f948eea0958247b2d8eb054f8cf"
        },
        "date": 1680129200074,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 467178937,
            "range": "± 4213200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464531666,
            "range": "± 7808461",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113194687,
            "range": "± 760900",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114653458,
            "range": "± 579610",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cfe6427921e6dd3eab28fb53fe7ff9973e092bf",
          "message": "Removed Snakecase from risczero new proj name (#487)",
          "timestamp": "2023-03-30T15:50:51-07:00",
          "tree_id": "049694ea85fe9558072ed3856ceca42988c2fd19",
          "url": "https://github.com/risc0/risc0/commit/3cfe6427921e6dd3eab28fb53fe7ff9973e092bf"
        },
        "date": 1680216812495,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 461404999,
            "range": "± 4677413",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 466612770,
            "range": "± 5024879",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112044770,
            "range": "± 816938",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113656999,
            "range": "± 892495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e49163c66cc4ad3f2fecee8a5adac71647fb21",
          "message": "Align examples with template (#488)",
          "timestamp": "2023-03-31T09:54:34-07:00",
          "tree_id": "d22e55dd3d31c49e37ab43e236009f297a105a93",
          "url": "https://github.com/risc0/risc0/commit/d1e49163c66cc4ad3f2fecee8a5adac71647fb21"
        },
        "date": 1680281836360,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 461186041,
            "range": "± 5226147",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465359499,
            "range": "± 3853296",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112682000,
            "range": "± 532668",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114334562,
            "range": "± 573068",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "034fc69c4f490ed4d60d4250cc4f0a672d7a11b1",
          "message": "Added RISC0_CUDA_OPT env var and default to -O1 (#492)\n\n* Default CUDA ptxas optimization levels of -O1 to improve build times but add env var fallback",
          "timestamp": "2023-03-31T15:28:16-07:00",
          "tree_id": "7b28dfc80b404e52bfa96eb6ba735afc5c36f596",
          "url": "https://github.com/risc0/risc0/commit/034fc69c4f490ed4d60d4250cc4f0a672d7a11b1"
        },
        "date": 1680301865440,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 460903437,
            "range": "± 5779581",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 467315250,
            "range": "± 7174094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112442291,
            "range": "± 430243",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114533895,
            "range": "± 816633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8f18bdb21a288ad2535676f29b54116375de160",
          "message": "Preflight progress (#482)\n\n* Rename Preflight->preflight::ExecState\r\n* Add ExecState::segmentize method to generate execution segments\r\n* Proofs can now be generated off of segments\r\n* All tests pass with RISC0_EXPERIMENTAL_PREFLIGHT=1 except tests::do_random and tests::trace.\r\n\r\nStill todo:\r\n\r\n* Better paging support, including better page fault calculation for page ins, and reserving cycles for pgae outs.\r\n* Verify host-initiated splits work properly once #469 lands.\r\n* Integrate into r0vm so it can both read and write Segments\r\n* Add an A/B test mode to compare preflight output against step_exec to make sure everything executes in the same way, including memory, registers, program counters, and cycle counts.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-01T09:34:51Z",
          "tree_id": "f61706c49a8a49dcba3253964bdd1a365342993b",
          "url": "https://github.com/risc0/risc0/commit/d8f18bdb21a288ad2535676f29b54116375de160"
        },
        "date": 1680341868357,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 464660791,
            "range": "± 5053332",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 466947478,
            "range": "± 4168474",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112083687,
            "range": "± 380984",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113940020,
            "range": "± 524103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c657ca0747947db4b890751853c2d3358d820f31",
          "message": "Update memory map and drop unused code (#491)",
          "timestamp": "2023-04-04T19:44:32Z",
          "tree_id": "550b25230e92045bfa956af44fc6f400656887e7",
          "url": "https://github.com/risc0/risc0/commit/c657ca0747947db4b890751853c2d3358d820f31"
        },
        "date": 1680637631589,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 461667770,
            "range": "± 4642270",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464998708,
            "range": "± 6654344",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113740645,
            "range": "± 487341",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115567020,
            "range": "± 658586",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b54a0b3b9a9f67da6263b9892c418db0f010a8a1",
          "message": "Moved tempdir for risc0-build into cache_dir (#497)",
          "timestamp": "2023-04-04T23:19:20Z",
          "tree_id": "f9d924e52ddc41a3e6a77e2bf99125dc2022e055",
          "url": "https://github.com/risc0/risc0/commit/b54a0b3b9a9f67da6263b9892c418db0f010a8a1"
        },
        "date": 1680650515620,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 465341770,
            "range": "± 5193724",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464911041,
            "range": "± 4756659",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112251208,
            "range": "± 696454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113671145,
            "range": "± 409437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96deb8515ec614d36482619122b46584376b20e5",
          "message": "Fixed risc0-build deadlock / double build (#498)",
          "timestamp": "2023-04-05T08:41:16-07:00",
          "tree_id": "a7edb04dd142e08639573ecf30eb4df2f6ee4ed9",
          "url": "https://github.com/risc0/risc0/commit/96deb8515ec614d36482619122b46584376b20e5"
        },
        "date": 1680709445536,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 459880291,
            "range": "± 6191535",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 468722374,
            "range": "± 5949094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112369895,
            "range": "± 510948",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114612687,
            "range": "± 494713",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2fcc90a36c3f7613de089840e27db591630acc5",
          "message": "Added RISC0_GUEST_LOGFILE and fixed clippy warns (#499)",
          "timestamp": "2023-04-05T10:32:02-07:00",
          "tree_id": "6378944d4e68645299bb69e7f6184f8a47b2e401",
          "url": "https://github.com/risc0/risc0/commit/d2fcc90a36c3f7613de089840e27db591630acc5"
        },
        "date": 1680716089347,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 464446249,
            "range": "± 2945920",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 462061375,
            "range": "± 2819108",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112010249,
            "range": "± 566419",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 113536749,
            "range": "± 714399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b",
          "message": "Continuations, part 2: system initiated splits (#469)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T12:23:08-07:00",
          "tree_id": "06f9928d34afb48230c7fba85d1362d10baecd35",
          "url": "https://github.com/risc0/risc0/commit/39e22c6b0543a763a4dfa7f76bd00bed4fd8a86b"
        },
        "date": 1680722766367,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 463664166,
            "range": "± 3946657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465105916,
            "range": "± 3020297",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 112650270,
            "range": "± 485233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114867229,
            "range": "± 454555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7a20347498624393946e52028e8f0388d5c16d",
          "message": "Use generated layout to determine location of registers in rv32im circuit (#476)\n\n* Refactor layout to minimize duplicate code between risczero/rv32im\r\n* Add a buffer pretty-printer to dump a buffer based on a layout\r\n* rv32im-verify no longer has a brittle dependency on the specific layout of the \"out\" buffer\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-05T21:48:13Z",
          "tree_id": "5ec200ff06950dba5c00139d0b42e56e5e1c131a",
          "url": "https://github.com/risc0/risc0/commit/0b7a20347498624393946e52028e8f0388d5c16d"
        },
        "date": 1680731455523,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 463365479,
            "range": "± 4125821",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 466570374,
            "range": "± 2595799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113920145,
            "range": "± 562265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115883833,
            "range": "± 507204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb",
          "message": "Remove zeroio (#502)\n\nZeroio is no longer as big of a win over risc0_zkvm::serde as it was since our I/O works differently now.  Plus, it was cumbersome to use.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-08T13:08:15-07:00",
          "tree_id": "94d5f58911eb142112da98cd5ff66dc8b0076c4f",
          "url": "https://github.com/risc0/risc0/commit/1b197c88fdd27050ca3d1efdb0c1f70d9442eeeb"
        },
        "date": 1680984674432,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 466637916,
            "range": "± 6613387",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 470881499,
            "range": "± 5024899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 116375499,
            "range": "± 724271",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 117927333,
            "range": "± 563091",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87adc831b195cd52aac7c49bf9894568baa7d372",
          "message": "Add test and example of using stdio through ProverOpts. (#506)\n\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-04-10T13:10:58-07:00",
          "tree_id": "d29ab453e3d09b2c0b67af3f894beb3ac7294f2c",
          "url": "https://github.com/risc0/risc0/commit/87adc831b195cd52aac7c49bf9894568baa7d372"
        },
        "date": 1681157734256,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 462429895,
            "range": "± 2552046",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465225020,
            "range": "± 4456004",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113364937,
            "range": "± 887556",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115635270,
            "range": "± 729204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26d1a7db3fbbd24469df447e4b7c24646e5df75",
          "message": "Delete github-action-benchmark repo directory (#512)\n\nAttempt to fix bench_trendworkflows.",
          "timestamp": "2023-04-13T18:02:58-07:00",
          "tree_id": "d4d0b796f272a26e9174600803cccc3ff8e56c7d",
          "url": "https://github.com/risc0/risc0/commit/f26d1a7db3fbbd24469df447e4b7c24646e5df75"
        },
        "date": 1681434352142,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 462700541,
            "range": "± 4592380",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 465782728,
            "range": "± 5882635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113835791,
            "range": "± 467320",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115885145,
            "range": "± 561814",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08b89140bbf1b28f87b62cbc2cdac8e9820af72b",
          "message": "Implementation of new API, part 1 (#503)",
          "timestamp": "2023-04-17T11:35:00-07:00",
          "tree_id": "1f46cbe5852d43fd771be3905002158f88e65216",
          "url": "https://github.com/risc0/risc0/commit/08b89140bbf1b28f87b62cbc2cdac8e9820af72b"
        },
        "date": 1681756682206,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 464604937,
            "range": "± 7641670",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 464870624,
            "range": "± 3842221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113424895,
            "range": "± 437962",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114768541,
            "range": "± 637621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b7ee4f09d645810388fec0a751b8d466008913",
          "message": "Document Session and Segment (#509)\n\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <frank@risczero.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-04-17T16:16:12-07:00",
          "tree_id": "69709df9db13736a8aaf4156ee8294734ca21483",
          "url": "https://github.com/risc0/risc0/commit/66b7ee4f09d645810388fec0a751b8d466008913"
        },
        "date": 1681773537593,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 462434208,
            "range": "± 3551285",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 463271478,
            "range": "± 3456164",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113149354,
            "range": "± 423057",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 114868416,
            "range": "± 427664",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f",
          "message": "Add additional sanity checking to the ELF parser (#515)\n\n* Add bounds checking for elf parser.",
          "timestamp": "2023-04-18T08:27:20-07:00",
          "tree_id": "c63a2cdbb402d7e57e127349c5303cb322bd7e6b",
          "url": "https://github.com/risc0/risc0/commit/bdb811ab9a3f43f7cb589bfeb25df9aebef95f6f"
        },
        "date": 1681831803369,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 465277333,
            "range": "± 3565098",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 463470749,
            "range": "± 5546424",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 113521458,
            "range": "± 422218",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115218812,
            "range": "± 399147",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "909214982650666c03159e9bad9d2ee90d5e2a46",
          "message": "Added templ_subdir flag to cargo risczero new (#517)\n\n* Adds additional flags to cargo risczero new for sub directory selection\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-04-18T13:47:26-07:00",
          "tree_id": "0eddae9f17a96b6724120e63f89bbc91caf14e8d",
          "url": "https://github.com/risc0/risc0/commit/909214982650666c03159e9bad9d2ee90d5e2a46"
        },
        "date": 1681851015275,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 464077666,
            "range": "± 3889837",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 471594208,
            "range": "± 4554816",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 114058500,
            "range": "± 468224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 115641020,
            "range": "± 597738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e60c27bd5f9c17612a8a5dc65f2baf7f299277e",
          "message": "Implementation of new API, part 2 (#514)",
          "timestamp": "2023-04-18T17:45:57-07:00",
          "tree_id": "df4dc524cd18f68b343346a17f8492e8bb442a29",
          "url": "https://github.com/risc0/risc0/commit/0e60c27bd5f9c17612a8a5dc65f2baf7f299277e"
        },
        "date": 1681865354392,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1473202854,
            "range": "± 10031905",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1484563145,
            "range": "± 8124033",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 685764041,
            "range": "± 663409",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 687459499,
            "range": "± 1937488",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4",
          "message": "Revive profiler, add docs, cleanups (#518)",
          "timestamp": "2023-04-19T09:17:54-07:00",
          "tree_id": "5fa93c08b0b0d0020bd8e7cfcfb6296e9094a930",
          "url": "https://github.com/risc0/risc0/commit/1f6a2301cbb407b8f468d71f8e4582dab6bb9ef4"
        },
        "date": 1681921270408,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1479427499,
            "range": "± 4504450",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1484493229,
            "range": "± 4521063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 686304812,
            "range": "± 1397271",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 689108187,
            "range": "± 1805089",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f6d42f1c21a284ae61ba887d2361e91c37eee9",
          "message": "Replace default_hal with default_prover (#520)",
          "timestamp": "2023-04-21T03:15:26Z",
          "tree_id": "c17e010db9118080ef0f70466bdfea7af2b4dfa4",
          "url": "https://github.com/risc0/risc0/commit/27f6d42f1c21a284ae61ba887d2361e91c37eee9"
        },
        "date": 1682047129558,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1476183270,
            "range": "± 4959642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1477770812,
            "range": "± 4518570",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 687102583,
            "range": "± 1740114",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 689627416,
            "range": "± 970574",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb72df1284c0cf0a516dd87af193256d1baec81",
          "message": "Poseidon 254 (#524)\n\nThis adds experimental support for a different version of Poseidon which is efficient to use inside SNARKs used on ETH as a step in building a STARK -> SNARK recursion. It is largely untested, but should have no impact on the normal code path.",
          "timestamp": "2023-04-21T12:27:17-07:00",
          "tree_id": "f13644889c441abcd1ea8250924bcf41666be102",
          "url": "https://github.com/risc0/risc0/commit/6fb72df1284c0cf0a516dd87af193256d1baec81"
        },
        "date": 1682105432428,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1478298395,
            "range": "± 4964635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1490050374,
            "range": "± 5839714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 691661375,
            "range": "± 1994573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 693879812,
            "range": "± 2743965",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "millspaugh.andrew@gmail.com",
            "name": "Andrew Millspaugh",
            "username": "spaugh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "145d0da79fbb5c67ff21d04d4d7bdc04cceab768",
          "message": "Add Clone derive to Segment (#523)\n\nAdding Clone derive to Segment for use on Bonsai.",
          "timestamp": "2023-04-21T20:01:41Z",
          "tree_id": "b8cdd3dad1a03387fa1f2b2b14227f69854c1f4a",
          "url": "https://github.com/risc0/risc0/commit/145d0da79fbb5c67ff21d04d4d7bdc04cceab768"
        },
        "date": 1682107695464,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1484231395,
            "range": "± 3249932",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1483266562,
            "range": "± 5832543",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 691049000,
            "range": "± 1773304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 694603416,
            "range": "± 1576019",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}