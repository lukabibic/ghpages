window.BENCHMARK_DATA = {
  "lastUpdate": 1689182684114,
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
          "id": "d4ce2f357f5268d75c44de44cbd85291a68f2b4c",
          "message": "Added index to Segment / SegmentReceipt (#525)\n\n* Added index to Segment / SegmentReceipt",
          "timestamp": "2023-04-21T14:47:46-07:00",
          "tree_id": "a933c1b0be7c9f5b4bc2cfe882f2d3740bb7691f",
          "url": "https://github.com/risc0/risc0/commit/d4ce2f357f5268d75c44de44cbd85291a68f2b4c"
        },
        "date": 1682113900066,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3891587124,
            "range": "± 46591826",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3928302354,
            "range": "± 27822954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 690009291,
            "range": "± 3284188",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 692041062,
            "range": "± 3996077",
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
          "id": "da02f36ee90d0154fe2638c74504c78ba9cf5d13",
          "message": "Improve executor perf (#536)\n\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-04-27T15:12:58-07:00",
          "tree_id": "a5666138c471dd4c57692075f810a3a5bc685317",
          "url": "https://github.com/risc0/risc0/commit/da02f36ee90d0154fe2638c74504c78ba9cf5d13"
        },
        "date": 1682645655734,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 779759853,
            "range": "± 3451242",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 769009041,
            "range": "± 39800070",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 850089895,
            "range": "± 5478814",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3310891645,
            "range": "± 17262675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3267805041,
            "range": "± 17478112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 13288676083,
            "range": "± 67802747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3885721000,
            "range": "± 58717622",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4157161666,
            "range": "± 145533415",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 14500283228,
            "range": "± 392110645",
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
          "id": "756ae90ddb09801b6b22a1d37d9431a99b35121d",
          "message": "API adjustment: executor segment callback (#540)",
          "timestamp": "2023-04-28T15:30:39-07:00",
          "tree_id": "eef748a009ed0426a46088cd77e7501b514474d2",
          "url": "https://github.com/risc0/risc0/commit/756ae90ddb09801b6b22a1d37d9431a99b35121d"
        },
        "date": 1682721786204,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685817187,
            "range": "± 1148866",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 692361104,
            "range": "± 1261718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 750367854,
            "range": "± 1490004",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3679228833,
            "range": "± 43808936",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3667776103,
            "range": "± 42503912",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15003731125,
            "range": "± 93368191",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4422432208,
            "range": "± 64441192",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4477933312,
            "range": "± 49256096",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15822879478,
            "range": "± 153142838",
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
          "id": "75a85a85c9b2dd0382acaa60839eda2183d739f0",
          "message": "Change to RISC-V circuit semantics in advance of recursion predicates\n\nThis commit makes a number of changes to make the RISC-V circuit compliant with it's description in the recursion RFC and fixes some potential sources of bugs.\r\n1) Update the circuit to a new version, which \r\n  a) outputs the the full system exit code, and add a user exit code \r\n  b) Makes the output process atomic (part of halt) by doing it during 2 additional reset cycles\r\n  c) Adds an 'input' global and provides a new system call to access it (replacing the output  call)\r\n2) Make the requires updates to the rust zkvm code\r\n3) Correctly resets the journal commitment on pause\r\n4) Update the riscv tests (adding one instruction to set output, which is not required)",
          "timestamp": "2023-05-01T10:48:51-07:00",
          "tree_id": "3280fda6433d2b3bed5d2c39f226cd0ba002de74",
          "url": "https://github.com/risc0/risc0/commit/75a85a85c9b2dd0382acaa60839eda2183d739f0"
        },
        "date": 1682964674487,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685512229,
            "range": "± 1183843",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691919124,
            "range": "± 1331678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 755450083,
            "range": "± 1150952",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3764590166,
            "range": "± 47704084",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3747143770,
            "range": "± 55964521",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15316688437,
            "range": "± 151623972",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4471956624,
            "range": "± 52766435",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4463409979,
            "range": "± 72730640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16113866416,
            "range": "± 49750917",
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
          "id": "a755c93f43cda2bf6c6087f9c04a5f40389bd32e",
          "message": "serde: add support to serialize and deserialize 32 bit and 64 bit floating point values (#545)\n\n* serde: add support for f32 and f64",
          "timestamp": "2023-05-03T18:11:51Z",
          "tree_id": "2f9e5a66c7741321fb66b1a7310bc7070235b6c1",
          "url": "https://github.com/risc0/risc0/commit/a755c93f43cda2bf6c6087f9c04a5f40389bd32e"
        },
        "date": 1683138531283,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685972270,
            "range": "± 1101025",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 692665687,
            "range": "± 1122679",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 753742520,
            "range": "± 1122069",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3716760416,
            "range": "± 69544759",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3742341166,
            "range": "± 47303418",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15247617999,
            "range": "± 112520828",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4407565229,
            "range": "± 65727253",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4484064666,
            "range": "± 49359473",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16099085562,
            "range": "± 120173747",
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
          "id": "602ac572be192cf86526838cb2fcf3ae4c6983e7",
          "message": "Added libm externs to zkvm guest (#543)\n\n* Added libm extern wrappers directly in to guest module\r\n* added tests for libm to ensure things link correctly\r\n* removed old externc-libm workarounds from examples.",
          "timestamp": "2023-05-03T13:43:30-07:00",
          "tree_id": "fe28594b957ecabaf5f34e34af0a9d9b1737424b",
          "url": "https://github.com/risc0/risc0/commit/602ac572be192cf86526838cb2fcf3ae4c6983e7"
        },
        "date": 1683147375470,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 736538708,
            "range": "± 713877",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 741404333,
            "range": "± 1210038",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 804875562,
            "range": "± 1693886",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3767431166,
            "range": "± 81313369",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3760441853,
            "range": "± 54330976",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15381039375,
            "range": "± 176130604",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4415271229,
            "range": "± 57410325",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4491691125,
            "range": "± 44488097",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16143240041,
            "range": "± 155786286",
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
          "id": "2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4",
          "message": "Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm (#546)\n\n* Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm\r\n\r\n* This allows rust-analyzer to analyze guest code without having to configure it to cross compile for the zkvm target.\r\n* Fixed flaky integration test by remapping absolute pathnames to relative pathnames when compiling the guest\r\n\r\n* Added vscode settings for linkedProjects\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-05-03T21:40:30Z",
          "tree_id": "ec184080d906f6d944c97c8997144346385be4bf",
          "url": "https://github.com/risc0/risc0/commit/2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4"
        },
        "date": 1683151043551,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685375812,
            "range": "± 1190037",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691943166,
            "range": "± 1142794",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 753594458,
            "range": "± 2305589",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3725628458,
            "range": "± 54573541",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3777604437,
            "range": "± 47538449",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15315108499,
            "range": "± 72015411",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4454672166,
            "range": "± 67763103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4514497895,
            "range": "± 45119670",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16242193145,
            "range": "± 144429339",
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
          "id": "a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224",
          "message": "Fix executor by accounting for extra cycles and patch continuations test for CI (#556)",
          "timestamp": "2023-05-10T01:41:13-07:00",
          "tree_id": "873928e6daaf4f6c69b1906cef09eaa3c539b87b",
          "url": "https://github.com/risc0/risc0/commit/a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224"
        },
        "date": 1683708838885,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685880145,
            "range": "± 1592673",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691765583,
            "range": "± 1096606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 754409770,
            "range": "± 871129",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3774413416,
            "range": "± 82211735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3768407228,
            "range": "± 49553095",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15362001583,
            "range": "± 60882618",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4416280416,
            "range": "± 76428988",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4498091124,
            "range": "± 46900595",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16028395374,
            "range": "± 96637109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d83c7fef80d0ebb87bc86567447efee633a24c4e",
          "message": "Use crypto-bigint instead of num-bigint (#547)\n\nUse crypto-bigint instead of num-bigint in the executor and in tests.",
          "timestamp": "2023-05-10T17:57:01Z",
          "tree_id": "49821ec6c2aa51a2632203a6f156ec7a6287fccf",
          "url": "https://github.com/risc0/risc0/commit/d83c7fef80d0ebb87bc86567447efee633a24c4e"
        },
        "date": 1683742211640,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 686673916,
            "range": "± 1732860",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 692048853,
            "range": "± 1913807",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 754984937,
            "range": "± 2097301",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3721787312,
            "range": "± 41511193",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3783957645,
            "range": "± 66619968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15341878750,
            "range": "± 83572884",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4432752728,
            "range": "± 35451899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4506542270,
            "range": "± 56780450",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16050212916,
            "range": "± 120474399",
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
          "id": "364e3a6c952e00dc0452fa66c521a6a723540860",
          "message": "Update to rust 1.69.0 (#553)",
          "timestamp": "2023-05-10T23:16:16Z",
          "tree_id": "14c7fbf2a8f7fea1bd5897d7ff030e850d38a06c",
          "url": "https://github.com/risc0/risc0/commit/364e3a6c952e00dc0452fa66c521a6a723540860"
        },
        "date": 1683761817812,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685004896,
            "range": "± 1130179",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 690039354,
            "range": "± 1112289",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 746330479,
            "range": "± 1258077",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3789576458,
            "range": "± 60990842",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3783939604,
            "range": "± 24771607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15334823145,
            "range": "± 196170240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4455680000,
            "range": "± 49530108",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4516793104,
            "range": "± 37587537",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16110519083,
            "range": "± 104365957",
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
          "id": "33e6a643ea6d3be0d7c9727ee3dc4007618df8bb",
          "message": "Add `FileSegmentRef` (#560)",
          "timestamp": "2023-05-12T20:48:07Z",
          "tree_id": "9e4b8c5461a6ef96c602828e9430607d48899fa5",
          "url": "https://github.com/risc0/risc0/commit/33e6a643ea6d3be0d7c9727ee3dc4007618df8bb"
        },
        "date": 1683925255049,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685667666,
            "range": "± 2083531",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 690662875,
            "range": "± 1340216",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 746614916,
            "range": "± 1925607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3753654562,
            "range": "± 62647826",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3761397250,
            "range": "± 33765514",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15242611604,
            "range": "± 134380127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4417327562,
            "range": "± 65395774",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 4469826958,
            "range": "± 41599044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 16051742417,
            "range": "± 91865032",
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
          "id": "a10b511c7ebe1fc48cb89398380616a87407e5b2",
          "message": "Store memory image as a btree of pages. (#561)\n\nThis gives us significant performance gains in both memory usage and run time.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-12T22:42:50Z",
          "tree_id": "46533952222dc8b66ee7918d12d0816ac891c927",
          "url": "https://github.com/risc0/risc0/commit/a10b511c7ebe1fc48cb89398380616a87407e5b2"
        },
        "date": 1683933361729,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28945829,
            "range": "± 25219",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38500636,
            "range": "± 79950",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 132878036,
            "range": "± 184285",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3741828416,
            "range": "± 54929863",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3726709375,
            "range": "± 35155935",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15303521271,
            "range": "± 112824105",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3723484396,
            "range": "± 68381567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3774611396,
            "range": "± 46184523",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15474992250,
            "range": "± 154888079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7a4b7d78300a4682b01c1aec1da43104ce66ebe",
          "message": "Adding feature flag documentation to crate READMEs (#521)\n\nAdds feature flag documentation to top-level README and to `risc0-circuit-rv32im`, `risc0-zkp`, and `risc0-zkvm` crates\r\n\r\n\r\n\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-14T16:17:23-07:00",
          "tree_id": "ffc573d85abe60ee9f6c6b03019bf9923e340997",
          "url": "https://github.com/risc0/risc0/commit/b7a4b7d78300a4682b01c1aec1da43104ce66ebe"
        },
        "date": 1684106891344,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28191951,
            "range": "± 47337",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37425930,
            "range": "± 61350",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 128900335,
            "range": "± 220044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3647778917,
            "range": "± 72635784",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3721465291,
            "range": "± 64224709",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15188548437,
            "range": "± 119831938",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3711450021,
            "range": "± 84765550",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3760920854,
            "range": "± 73739740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15350291395,
            "range": "± 144720617",
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
          "id": "235e75b2ae25e00f8fd381cfb9e9d45444a811e6",
          "message": "Adjust image_id to be the hash of (merkle_root, pc) (#566)",
          "timestamp": "2023-05-18T09:52:27-07:00",
          "tree_id": "11c26a5527c9ce1addff78aeef1d26334f254513",
          "url": "https://github.com/risc0/risc0/commit/235e75b2ae25e00f8fd381cfb9e9d45444a811e6"
        },
        "date": 1684429378392,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28228660,
            "range": "± 54346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37788628,
            "range": "± 78606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 132366977,
            "range": "± 156272",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3690576791,
            "range": "± 36002026",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3694437187,
            "range": "± 71324902",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15259670229,
            "range": "± 249589438",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3711599291,
            "range": "± 48878945",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3795512104,
            "range": "± 43434542",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15332668542,
            "range": "± 104556794",
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
          "id": "48f1a324876848f9f64baf6cb06808106d36c55b",
          "message": "Fix for #569 (#570)",
          "timestamp": "2023-05-18T21:10:32Z",
          "tree_id": "4a2796e5d6f104a3508019af3a90d7c2a33eab79",
          "url": "https://github.com/risc0/risc0/commit/48f1a324876848f9f64baf6cb06808106d36c55b"
        },
        "date": 1684445714937,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29015799,
            "range": "± 141654",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38521743,
            "range": "± 94312",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 132905708,
            "range": "± 145172",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3688409145,
            "range": "± 69856359",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3737999584,
            "range": "± 52804793",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15226349291,
            "range": "± 75572663",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3709384687,
            "range": "± 54751693",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3754294604,
            "range": "± 52070286",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15442311021,
            "range": "± 90907708",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "873c9f8f1c261fa1f1e61b995d24341cc89df254",
          "message": "Make `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\n\nMake `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-18T22:41:33Z",
          "tree_id": "e1cbbfbc1f571173263d6f9a7a40957d2dc4a414",
          "url": "https://github.com/risc0/risc0/commit/873c9f8f1c261fa1f1e61b995d24341cc89df254"
        },
        "date": 1684450564452,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28413019,
            "range": "± 74149",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37639097,
            "range": "± 155466",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 129146450,
            "range": "± 109901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3672285417,
            "range": "± 65726567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3703885333,
            "range": "± 67104613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15304545625,
            "range": "± 68697598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3732708916,
            "range": "± 68092176",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3757661604,
            "range": "± 56387600",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15345070312,
            "range": "± 94415024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9497776ad378bb13e7cc8efb25ef4a734b745a03",
          "message": "Add error string to opcode decode failure in Executor (#571)\n\n Add error string to opcode decode failure in Executor #571",
          "timestamp": "2023-05-19T00:12:47Z",
          "tree_id": "edb1797459573df1c9c9ffe71aeff5f1ed4ff07d",
          "url": "https://github.com/risc0/risc0/commit/9497776ad378bb13e7cc8efb25ef4a734b745a03"
        },
        "date": 1684455806660,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28196836,
            "range": "± 24411",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37296682,
            "range": "± 72118",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 128304013,
            "range": "± 110123",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3636377729,
            "range": "± 72622927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3739853833,
            "range": "± 54667841",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15254147354,
            "range": "± 93515871",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3747807666,
            "range": "± 49212492",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3758880041,
            "range": "± 62001916",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15392994999,
            "range": "± 177908521",
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
          "id": "71f6571239816f617e5461ae2670067f7083a8f9",
          "message": "Workaround to fix self-hosted runners (#577)",
          "timestamp": "2023-05-20T13:12:42-07:00",
          "tree_id": "e720c8391c641dbdbbcd6de6b202f0621f676308",
          "url": "https://github.com/risc0/risc0/commit/71f6571239816f617e5461ae2670067f7083a8f9"
        },
        "date": 1684614187140,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28243754,
            "range": "± 59481",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37721991,
            "range": "± 94965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 132227736,
            "range": "± 348486",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3664868625,
            "range": "± 85481628",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3716588729,
            "range": "± 39883324",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15231875375,
            "range": "± 112961399",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3756635813,
            "range": "± 56602678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3748412375,
            "range": "± 88509870",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15394011875,
            "range": "± 89816743",
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
          "id": "5750d3237561680d864ea782554839c2aa6cfa85",
          "message": "Improve receipt docs (#576)",
          "timestamp": "2023-05-20T20:39:02Z",
          "tree_id": "1fff671b6441abde3ddef00163962490926003c0",
          "url": "https://github.com/risc0/risc0/commit/5750d3237561680d864ea782554839c2aa6cfa85"
        },
        "date": 1684616042633,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29219895,
            "range": "± 100126",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38423774,
            "range": "± 63928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 134829163,
            "range": "± 309175",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3695884250,
            "range": "± 45228269",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3736645874,
            "range": "± 45952981",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15313748354,
            "range": "± 66672177",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3711400979,
            "range": "± 47328038",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3764087333,
            "range": "± 45627711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15513603500,
            "range": "± 185357072",
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
          "id": "0415638f001e27f2c433080c95f068e20234981c",
          "message": "Minor README updates",
          "timestamp": "2023-05-20T14:26:04-07:00",
          "tree_id": "90a2c2e387347c8bd2431124e8b939f380564567",
          "url": "https://github.com/risc0/risc0/commit/0415638f001e27f2c433080c95f068e20234981c"
        },
        "date": 1684618692303,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28454907,
            "range": "± 91227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37720662,
            "range": "± 85704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 131089201,
            "range": "± 794029",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3715089542,
            "range": "± 74333808",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3730543958,
            "range": "± 36031464",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15320514500,
            "range": "± 75380383",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3743282604,
            "range": "± 60772104",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3759348854,
            "range": "± 59014982",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15456336250,
            "range": "± 93812402",
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
          "id": "624fb55ea4456ef6faa5960399a5de882d5cf0f7",
          "message": "Pin bstr to fix build issue (#580)",
          "timestamp": "2023-05-22T15:13:41-07:00",
          "tree_id": "9aacab4d977950b1651c56f99cf0d424d55a7198",
          "url": "https://github.com/risc0/risc0/commit/624fb55ea4456ef6faa5960399a5de882d5cf0f7"
        },
        "date": 1684794487932,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28236886,
            "range": "± 48789",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37627323,
            "range": "± 84281",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 130415655,
            "range": "± 158565",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3698262416,
            "range": "± 54499865",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3708272958,
            "range": "± 47953675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15162662479,
            "range": "± 122319623",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3711436916,
            "range": "± 45132711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3783946937,
            "range": "± 25906881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15344914937,
            "range": "± 168763815",
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
          "id": "e5221ce381fb9092f6a9c510250945ea8645480a",
          "message": "Simplify guest linker configuration (#559)\n\n* Simplify guest linker configuration\r\n\r\nRemove custom linker script in favor of -Ttext= linkeer arg\r\nStack pointer and .text are now based on values in memory.rs instead of a separate linker script.  .data and .bss follow .text.\r\nWhen using \"std\" on the guest, we no longer need to include #![no_main] or risc0_zkvm::entry!(...); just a standard \"pub fn main\" will do. (Unfortunately we still have to force inclusion of the risc0 zkvm crate with \"use risc0_zkvm as _\" if we don't use anything else from it)\r\n\r\n* Add comments with links to how the linker works\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-22T22:54:29Z",
          "tree_id": "c32b7572eca8689c3735f489fe3434176a70a5a8",
          "url": "https://github.com/risc0/risc0/commit/e5221ce381fb9092f6a9c510250945ea8645480a"
        },
        "date": 1684796948867,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29734538,
            "range": "± 29485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40531932,
            "range": "± 99858",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 147001649,
            "range": "± 232835",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3715568249,
            "range": "± 39596783",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3729861604,
            "range": "± 37843386",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15277634437,
            "range": "± 131359412",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3756415395,
            "range": "± 56248004",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3760384604,
            "range": "± 53088514",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15516994562,
            "range": "± 205410936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d04249433367beda77de4c3af94bafc2dbda8dd",
          "message": "Adding a few Rust doc examples to Executor and ExecutorEnv (#572)\n\n* adding examples to ExecutorEnv and Executor\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/mod.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* updating executor/executor env doc examples after code review\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\n\n---------\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-24T00:37:14Z",
          "tree_id": "b575f8e37b2710cacfee8059d45402ed32db11c1",
          "url": "https://github.com/risc0/risc0/commit/2d04249433367beda77de4c3af94bafc2dbda8dd"
        },
        "date": 1684889322565,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 30002752,
            "range": "± 182331",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40525526,
            "range": "± 109560",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 147101147,
            "range": "± 237184",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3723916521,
            "range": "± 66750354",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3725025541,
            "range": "± 47236548",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15212644562,
            "range": "± 127735746",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3753578333,
            "range": "± 62266436",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3749053020,
            "range": "± 48482366",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15414324229,
            "range": "± 91710480",
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
          "id": "279b7ddd0d6de49200c6b3377fe2b6c42214f0cb",
          "message": "Include release branches for CI (#583)",
          "timestamp": "2023-05-23T19:14:48-07:00",
          "tree_id": "5be3cd7b038850ccbcda4bd6129f41e7edcdbbd9",
          "url": "https://github.com/risc0/risc0/commit/279b7ddd0d6de49200c6b3377fe2b6c42214f0cb"
        },
        "date": 1684895127508,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29019850,
            "range": "± 34965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39448488,
            "range": "± 81506",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 142633007,
            "range": "± 262633",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3686869771,
            "range": "± 62728980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3723832771,
            "range": "± 48809319",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15337079749,
            "range": "± 150596175",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3759526563,
            "range": "± 58974652",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3799099354,
            "range": "± 48909281",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15481861479,
            "range": "± 68756761",
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
          "id": "b150cb7692ff0bdc4328938d4a5e138dbf78352f",
          "message": "add test for session limit overflow (#575)\n\nThese tests check for errors generated by the executor when running the executor past the session_limit.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-24T17:55:08Z",
          "tree_id": "798a772899b2d6a03bc04d29058a3a20892bf7ab",
          "url": "https://github.com/risc0/risc0/commit/b150cb7692ff0bdc4328938d4a5e138dbf78352f"
        },
        "date": 1684951543594,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28932258,
            "range": "± 26755",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39009748,
            "range": "± 65489",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139401679,
            "range": "± 171060",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3662711708,
            "range": "± 74065652",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3739578437,
            "range": "± 71097227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15249943437,
            "range": "± 91023907",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3722327146,
            "range": "± 63574126",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3729061500,
            "range": "± 67779609",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15377425333,
            "range": "± 105429184",
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
          "id": "3a8d4c29cba234d551487feab8b8ae101482e343",
          "message": "Update criterion requirement from 0.4 to 0.5 (#586)\n\nUpdates the requirements on [criterion](https://github.com/bheisler/criterion.rs) to permit the latest version.\r\n- [Changelog](https://github.com/bheisler/criterion.rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/bheisler/criterion.rs/compare/0.4.0...0.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: criterion\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T18:31:23Z",
          "tree_id": "1da6d9009f12986e1d4d9ed81abbeee4717473fc",
          "url": "https://github.com/risc0/risc0/commit/3a8d4c29cba234d551487feab8b8ae101482e343"
        },
        "date": 1685126536845,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28921951,
            "range": "± 46406",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39017897,
            "range": "± 87358",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139723756,
            "range": "± 249953",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3681223708,
            "range": "± 55312779",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3722364979,
            "range": "± 48509677",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15253242979,
            "range": "± 118784889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3773896583,
            "range": "± 69483956",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3799614167,
            "range": "± 43768760",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15409558249,
            "range": "± 98880939",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c529b64006382d06024ca5862297b18a77a895c",
          "message": "Enable feature-gated programmatic access to `methods.rs` contents (#585)\n\n* guest-list feature\r\n\r\n* fix formatting\r\n\r\n* fix linebreak and whitespace\r\n\r\n* extra new lines in output\r\n\r\n* Update risc0/build/src/lib.rs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-29T07:39:56Z",
          "tree_id": "3ac951203b0b02ce7abc342218c82a1b3b6cea49",
          "url": "https://github.com/risc0/risc0/commit/7c529b64006382d06024ca5862297b18a77a895c"
        },
        "date": 1685346727627,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29798648,
            "range": "± 44327",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40544730,
            "range": "± 90007",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 146624923,
            "range": "± 346623",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3737675771,
            "range": "± 58306907",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3723493812,
            "range": "± 48020496",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15163004021,
            "range": "± 76908681",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3733971895,
            "range": "± 77521729",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3783317791,
            "range": "± 48122312",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15461714687,
            "range": "± 81613167",
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
          "id": "3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1",
          "message": "Fix for #594 (#597)",
          "timestamp": "2023-05-31T21:06:26-07:00",
          "tree_id": "8c6e9d94b9141c66c4d6a142d9fa1dd7313f515b",
          "url": "https://github.com/risc0/risc0/commit/3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1"
        },
        "date": 1685593027361,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29174341,
            "range": "± 157010",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39622348,
            "range": "± 119372",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 144480703,
            "range": "± 186461",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3688125645,
            "range": "± 52587472",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3737732604,
            "range": "± 83492521",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15249703188,
            "range": "± 161380503",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3710370750,
            "range": "± 34718109",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3790077541,
            "range": "± 64186679",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15336559625,
            "range": "± 84306072",
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
          "id": "fc33ed9f343eaaf2d52770d0d72713b151c75cc2",
          "message": "Add test vectors and Make rust implementation of IOP match cirgen implementation (#599)",
          "timestamp": "2023-06-05T23:49:05Z",
          "tree_id": "9b783988bfa231e8d75b039e0d2eed0f9d45c720",
          "url": "https://github.com/risc0/risc0/commit/fc33ed9f343eaaf2d52770d0d72713b151c75cc2"
        },
        "date": 1686009581243,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28906647,
            "range": "± 30046",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39078965,
            "range": "± 84891",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139636849,
            "range": "± 184907",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3697867666,
            "range": "± 44109918",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3730683375,
            "range": "± 44994402",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15328142750,
            "range": "± 100449325",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3744930249,
            "range": "± 52049055",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3771160250,
            "range": "± 38846180",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15410081708,
            "range": "± 205267663",
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
          "id": "396be373bf6e2f6e997c8a4ea473fee125107c8f",
          "message": "Rebuild on CUDA related env vars (#605)\n\nTriggers rebuilds for couple more env vars if they change between\r\ninvokes of the kernel build",
          "timestamp": "2023-06-05T17:37:19-07:00",
          "tree_id": "aa37e37deda2f047a3466e363dfe21c0d14ad54e",
          "url": "https://github.com/risc0/risc0/commit/396be373bf6e2f6e997c8a4ea473fee125107c8f"
        },
        "date": 1686012472112,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29137028,
            "range": "± 129170",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39522454,
            "range": "± 216197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 141600796,
            "range": "± 1015545",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3678019166,
            "range": "± 48682079",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3711089562,
            "range": "± 83027900",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15206966042,
            "range": "± 91132397",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3763605521,
            "range": "± 23023694",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3784790000,
            "range": "± 44815060",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15413798604,
            "range": "± 135814000",
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
          "id": "a36264a8961f2c7b9ba730c38be457f48ee3b570",
          "message": "Rename examples/evm -> examples/zkevm-demo (#611)",
          "timestamp": "2023-06-06T16:16:15-07:00",
          "tree_id": "8269e9f92e83cb28e18cccb8d53bfba289573944",
          "url": "https://github.com/risc0/risc0/commit/a36264a8961f2c7b9ba730c38be457f48ee3b570"
        },
        "date": 1686094309782,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29819893,
            "range": "± 212694",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40339085,
            "range": "± 182158",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 145766022,
            "range": "± 176223",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3756113583,
            "range": "± 91418387",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3738110520,
            "range": "± 45255432",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15252074750,
            "range": "± 101544671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3668479583,
            "range": "± 66197744",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3783322417,
            "range": "± 79333109",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15400251729,
            "range": "± 130879496",
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
          "id": "2192af4b426526eb0f88248bbb8eddc7ce5ca2a9",
          "message": "Publish Recursion Verifier (#603)\n\nThis change moves the recursion verifier from the private repository. This is\r\ndone by splitting the `CircuitDef` trait and adding files used by the recursion\r\nverifier.\r\n\r\nThe CircuitDef is a trait that is implemented by rust code generated from the\r\ncircuit for both the verifier and the prover. In order to split off the recursive\r\nverifier, we need to split this trait into two parts: one that is used in both the\r\nprover and the verifier and one that is used only in the prover. The former trait\r\ncalled `CircuitCoreDef` is implemented for the recursive verifier which requires\r\ngenerated rust files from the recursion circuit.",
          "timestamp": "2023-06-07T02:44:31Z",
          "tree_id": "a9fb25c72d15b572c0ace2f471a8394609cd5883",
          "url": "https://github.com/risc0/risc0/commit/2192af4b426526eb0f88248bbb8eddc7ce5ca2a9"
        },
        "date": 1686106703880,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29230650,
            "range": "± 187943",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39489527,
            "range": "± 118345",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 142608399,
            "range": "± 1556627",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3688385250,
            "range": "± 36336255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3718318917,
            "range": "± 78891515",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15228619750,
            "range": "± 129831390",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3702013708,
            "range": "± 70186889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3765860624,
            "range": "± 81323008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15382201896,
            "range": "± 89872495",
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
          "id": "4e85c7e880c6741235a0c8e8bfd1c5562fc5e431",
          "message": "recursion: fix compiler warning in guest (#614)\n\nadd `#[cfg(not(target_os = \"zkvm\"))]` to items that are not needed for guest compilation",
          "timestamp": "2023-06-07T22:02:49Z",
          "tree_id": "63444c4b35dce7e91ae2aab1d90c1abffc7de49e",
          "url": "https://github.com/risc0/risc0/commit/4e85c7e880c6741235a0c8e8bfd1c5562fc5e431"
        },
        "date": 1686176008201,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29054582,
            "range": "± 54250",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39215406,
            "range": "± 103266",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 141099941,
            "range": "± 100979",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3668518916,
            "range": "± 41224857",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3732802625,
            "range": "± 60420605",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15221240270,
            "range": "± 79666038",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3696016646,
            "range": "± 53418805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3707746791,
            "range": "± 67258476",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15399209729,
            "range": "± 159216220",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthias.goergens@gmail.com",
            "name": "Matthias Görgens",
            "username": "matthiasgoergens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c9f8d81334b12e223910414db46bd7187dd848",
          "message": "Fix typo (#613)",
          "timestamp": "2023-06-08T16:43:26Z",
          "tree_id": "70945cedf0cd1456aa98463e8a6cc12af3e2d235",
          "url": "https://github.com/risc0/risc0/commit/72c9f8d81334b12e223910414db46bd7187dd848"
        },
        "date": 1686243233885,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28983234,
            "range": "± 48293",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39315208,
            "range": "± 97198",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 141588336,
            "range": "± 230481",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3703567354,
            "range": "± 42699511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3740575896,
            "range": "± 33916678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15231729166,
            "range": "± 78727288",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3741650708,
            "range": "± 50540956",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3705083978,
            "range": "± 44221296",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15328936729,
            "range": "± 92743121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e84cefc531e0599af6be7c635f4be49284be5a98",
          "message": "expose system state for mocking in tests (#617)",
          "timestamp": "2023-06-08T17:27:57Z",
          "tree_id": "5c87de3b862f6e4c6d37cb2c812a42e4fca1b8d2",
          "url": "https://github.com/risc0/risc0/commit/e84cefc531e0599af6be7c635f4be49284be5a98"
        },
        "date": 1686246172907,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29746209,
            "range": "± 58218",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40085549,
            "range": "± 68102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 143162175,
            "range": "± 227855",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3588619437,
            "range": "± 100666612",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3724681812,
            "range": "± 60796986",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15270406979,
            "range": "± 168986288",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3720824771,
            "range": "± 76413009",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3779672000,
            "range": "± 44145741",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15416770771,
            "range": "± 193268588",
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
          "id": "222c36b7005639e08817083d0e3744a6ef8f7d39",
          "message": "Improve execution performance (#615)",
          "timestamp": "2023-06-08T18:03:59Z",
          "tree_id": "4479b0ea99389e7f399a8d5adf375136770ec3ae",
          "url": "https://github.com/risc0/risc0/commit/222c36b7005639e08817083d0e3744a6ef8f7d39"
        },
        "date": 1686248073017,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28160134,
            "range": "± 18096",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34591342,
            "range": "± 85655",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 98766246,
            "range": "± 202019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3694340250,
            "range": "± 56677003",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3763917562,
            "range": "± 63307401",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15346783333,
            "range": "± 101077206",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3756317312,
            "range": "± 34855453",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3783674916,
            "range": "± 48427180",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15336411708,
            "range": "± 110519491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4e5acea2fbe6393f136d12d02c92d28f4c9a379",
          "message": "Handle alignment errors in deserialization (#600)",
          "timestamp": "2023-06-08T20:49:46Z",
          "tree_id": "37fab60a79a778088586e7a07528e5f63f61ba93",
          "url": "https://github.com/risc0/risc0/commit/a4e5acea2fbe6393f136d12d02c92d28f4c9a379"
        },
        "date": 1686258008014,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28181394,
            "range": "± 164266",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34434436,
            "range": "± 75571",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 97189411,
            "range": "± 224261",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3610288250,
            "range": "± 104696654",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3701835562,
            "range": "± 38310089",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15259145937,
            "range": "± 147834552",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3715843270,
            "range": "± 50267711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3747225583,
            "range": "± 53121260",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15395547833,
            "range": "± 95750650",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "intoverflow@gmail.com",
            "name": "Tim Carstens",
            "username": "intoverflow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "318ae6056faf511bb1bf57bea8187acd30e181ee",
          "message": "Make session_limit optional (#608)",
          "timestamp": "2023-06-09T01:16:25Z",
          "tree_id": "49c2f3f76fd108b7f2fc2ce184fc9885c3a3d717",
          "url": "https://github.com/risc0/risc0/commit/318ae6056faf511bb1bf57bea8187acd30e181ee"
        },
        "date": 1686274011649,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28331875,
            "range": "± 266116",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34429935,
            "range": "± 74352",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 96753724,
            "range": "± 298860",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3681112354,
            "range": "± 59144082",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3685384875,
            "range": "± 66668641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15265038083,
            "range": "± 151554245",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3682519500,
            "range": "± 109448155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3672743958,
            "range": "± 97445006",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15363544312,
            "range": "± 122509910",
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
          "id": "f448fbd730b9aba8fab79ba6fd67549caddb85cf",
          "message": "implement SessionReceipt trait (#616)\n\nThis pull request implements the `SessionReceipt` trait that is implemented by\r\n`SessionRollupReceipt` and `SessionFlatReceipt` (also known as the old\r\n`SessionReceipt`). This is useful because it allows the host code to call verify\r\nand to get the journal contents regardless of the concrete type of session\r\nreceipt. This trait is practical when a developer has a code base that uses\r\nbonsai resulting in a `SessionRollupReceipt` or from a local prover resulting in a\r\n`SessionFlatReceipt`.  Examples have been updated to use this new trait. The main\r\ndifference is to replace existing `receipt.journal` with `receipt.get_journal()`\r\nand `receipt.verify(XXXX_ID)` with `receipt.verify(XXXX_ID.into())`.",
          "timestamp": "2023-06-13T05:05:10Z",
          "tree_id": "b2caadff7b30c021a2ee2931744b0ede22f077cd",
          "url": "https://github.com/risc0/risc0/commit/f448fbd730b9aba8fab79ba6fd67549caddb85cf"
        },
        "date": 1686633580971,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28128196,
            "range": "± 24675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34810034,
            "range": "± 78715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 100468310,
            "range": "± 312482",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3660301416,
            "range": "± 68351683",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3696405000,
            "range": "± 41632049",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15145055166,
            "range": "± 158702121",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3733629812,
            "range": "± 42256029",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3772306396,
            "range": "± 55063771",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15440095646,
            "range": "± 52758847",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cbff2a0b6d781d7cb3e67af935db4234f13f59a",
          "message": "Add ECDSA verification example using bigint acceleration support (#590)\n\nThis PR adds an ECDSA verification example, which shows how to use the patched k256 library to get accelerated signature verification on secp256k1 in the zkVM guest.\r\n\r\nAs a dependency for the k256 patch, it also updates the allocator to support alignments that are larger than a word. (In particular, the constant-time lookup table implementation uses a 1024-byte alignment). risc0/rust#11 is related to this PR. Based on work by @shkoo.\r\n\r\nAs a drive-by change, this PR includes an additional check in the executor that execution did not previously end with ExitCode::Halted, which is a non-resumable state. I added this after running into this error by accident and having a hard time debugging it based on the errors I received.",
          "timestamp": "2023-06-13T22:16:09Z",
          "tree_id": "8d22cdb71a1532c9e515ca5012a2867ea35080fa",
          "url": "https://github.com/risc0/risc0/commit/7cbff2a0b6d781d7cb3e67af935db4234f13f59a"
        },
        "date": 1686695193315,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28275850,
            "range": "± 45721",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34494048,
            "range": "± 84086",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 96052194,
            "range": "± 220455",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3654196646,
            "range": "± 56649002",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3726050229,
            "range": "± 18098537",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15334961083,
            "range": "± 98987515",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3710686187,
            "range": "± 46387722",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3767674583,
            "range": "± 72597013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15399851000,
            "range": "± 108729754",
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
          "id": "78c2d1a9279b33500f52b363debfe7019d2f9b5a",
          "message": "Improve executor performance (#644)",
          "timestamp": "2023-06-20T11:35:04-07:00",
          "tree_id": "a64f3e325dd557eb47112cabfefacd6f169a9c4a",
          "url": "https://github.com/risc0/risc0/commit/78c2d1a9279b33500f52b363debfe7019d2f9b5a"
        },
        "date": 1687286983447,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28416216,
            "range": "± 74378",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28673080,
            "range": "± 76262",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30802401,
            "range": "± 59932",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3723080937,
            "range": "± 68614093",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3737567833,
            "range": "± 59667733",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15210226000,
            "range": "± 109442491",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3755186833,
            "range": "± 46972834",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3762044042,
            "range": "± 62880468",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15264622666,
            "range": "± 131557599",
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
          "id": "6bf7ccb450961df4cb34406af44473a0a5f6808c",
          "message": "Cleanup recursion structs (#632)\n\n* ReceiptMeta: use ExitCode instead of two u8s\r\n\r\nThis is a first step in merging ReceiptMeta and ReceiptMetadata to a single\r\nstruct. The next change will remove ReceiptMeta in favor of ReceiptMetadata\r\n\r\n* rename field in recursion::receipt::SystemState so it matches zkvm::receipt::SystemState\r\n\r\n* recursion: remove duplicate `SystemState` struct\r\n\r\nThis struct was duplicated in the private repo. Since there is no need for\r\ndupilcation, this struct has been removed.\r\n\r\n* Recursion: remove duplicate ReceiptMeta struct\r\n\r\nThis change removes the duplicated ReceiptMetadata struct and instead uses a\r\ncommon ReceiptMetadata struct in `risc0_zkvm::receipt`\r\n\r\n* Move `exit_code` funtions to `risc0_zkvm::receipt`\r\n\r\nThese functions can be useful in `risc0_zkvm::receipt` as well as the recursion\r\nmodule.\r\n\r\n* clean up use declarations\r\n\r\n* Fix documentation\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-06-21T22:48:27Z",
          "tree_id": "8f8461038291162ade9c5cff0f58299f6e27311f",
          "url": "https://github.com/risc0/risc0/commit/6bf7ccb450961df4cb34406af44473a0a5f6808c"
        },
        "date": 1687388332143,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28513138,
            "range": "± 73913",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28598354,
            "range": "± 48648",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30760416,
            "range": "± 132735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3702252396,
            "range": "± 55797615",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3719764541,
            "range": "± 53459417",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15311261291,
            "range": "± 99626754",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3749018417,
            "range": "± 40421246",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3758879167,
            "range": "± 35074092",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15368172208,
            "range": "± 201530254",
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
          "id": "6b4286a4bb329a71e536596e85e6d7e4f191e7f2",
          "message": "Improve executor performance (#651)",
          "timestamp": "2023-06-23T21:41:16Z",
          "tree_id": "e0dc69ead6ea68890af96a1b2a8596cb8c2b78f1",
          "url": "https://github.com/risc0/risc0/commit/6b4286a4bb329a71e536596e85e6d7e4f191e7f2"
        },
        "date": 1687557094792,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2629211,
            "range": "± 123409",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2924219,
            "range": "± 84276",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4905959,
            "range": "± 77423",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3674349354,
            "range": "± 40297576",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3739268521,
            "range": "± 51896761",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15284872875,
            "range": "± 75850142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3685950854,
            "range": "± 72366878",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3762577646,
            "range": "± 41813018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15205354708,
            "range": "± 192133428",
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
          "id": "d79ab62274aebe670b461ab06b8477953182972c",
          "message": "Improve CUDA performance (#653)\n\n* Improve CUDA performance\r\n\r\n* Drop assumption of 256 block size",
          "timestamp": "2023-06-25T16:48:58-04:00",
          "tree_id": "3e33e2e53aad0982355d4ca90b1c71e419e0b3d9",
          "url": "https://github.com/risc0/risc0/commit/d79ab62274aebe670b461ab06b8477953182972c"
        },
        "date": 1687726784852,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2679573,
            "range": "± 68426",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2875311,
            "range": "± 58220",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5115009,
            "range": "± 97882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3670712708,
            "range": "± 48888803",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3701152917,
            "range": "± 52464209",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15204875062,
            "range": "± 98069102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3696227166,
            "range": "± 71615894",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3736711812,
            "range": "± 54637833",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15324145208,
            "range": "± 114841060",
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
          "id": "a39561546dd5b54788b686afd125db687f40e84a",
          "message": "Drop use of unified memory for CUDA (#654)\n\n* Drop use of unified memory for CUDA\r\n\r\n* Toggle for unified memory",
          "timestamp": "2023-06-25T19:51:57-07:00",
          "tree_id": "09e58e6c2630f4c7d714f3538793467099a07804",
          "url": "https://github.com/risc0/risc0/commit/a39561546dd5b54788b686afd125db687f40e84a"
        },
        "date": 1687748535548,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2640482,
            "range": "± 56215",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2897489,
            "range": "± 98985",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5082177,
            "range": "± 130197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3646424729,
            "range": "± 53348588",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3674414749,
            "range": "± 57250772",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15331124729,
            "range": "± 113194637",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3671816292,
            "range": "± 65422220",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3751977250,
            "range": "± 41903871",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15234836875,
            "range": "± 115655542",
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
          "id": "44c67ee83a021686b95722b30b8b1f9b1dc81b7e",
          "message": "Update predicates (#657)",
          "timestamp": "2023-06-28T01:00:51Z",
          "tree_id": "a8f6ca65054794eb7b8932c3668f2430108e4083",
          "url": "https://github.com/risc0/risc0/commit/44c67ee83a021686b95722b30b8b1f9b1dc81b7e"
        },
        "date": 1687914676057,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2734282,
            "range": "± 154498",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2855689,
            "range": "± 47537",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4989440,
            "range": "± 91716",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3659655896,
            "range": "± 63292404",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3726227687,
            "range": "± 39626603",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15239313979,
            "range": "± 143095715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3710189729,
            "range": "± 80379065",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3723291291,
            "range": "± 63317482",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15245496396,
            "range": "± 197467897",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "austinabell8@gmail.com",
            "name": "Austin Abell",
            "username": "austinabell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691d7e03a9b260d0b6208f9b68096ae11bff43ff",
          "message": "chore: remove unused Once type (#660)",
          "timestamp": "2023-06-28T17:24:34Z",
          "tree_id": "8ff89aa5b6155254cb20901c0cd98ecd3e458085",
          "url": "https://github.com/risc0/risc0/commit/691d7e03a9b260d0b6208f9b68096ae11bff43ff"
        },
        "date": 1687973697591,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2699190,
            "range": "± 157939",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2860956,
            "range": "± 60459",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5004716,
            "range": "± 99029",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3696609645,
            "range": "± 40136598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3689239541,
            "range": "± 70259583",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15275800979,
            "range": "± 115327725",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3709603375,
            "range": "± 77497483",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3745244062,
            "range": "± 46109059",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15315087458,
            "range": "± 47373341",
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
          "id": "f3298019d7b4a412c4d4ff956da793fa032f11eb",
          "message": "Update metal to 0.25 (#661)",
          "timestamp": "2023-06-28T21:09:09Z",
          "tree_id": "19c2e29c05142c34067e3ebdcfeca781a88d848b",
          "url": "https://github.com/risc0/risc0/commit/f3298019d7b4a412c4d4ff956da793fa032f11eb"
        },
        "date": 1687987186213,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2717013,
            "range": "± 168413",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 3011502,
            "range": "± 65492",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5179956,
            "range": "± 98363",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3636433979,
            "range": "± 61557007",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3680565729,
            "range": "± 60776873",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15200809541,
            "range": "± 113578520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3647288104,
            "range": "± 42065697",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3709487958,
            "range": "± 56866699",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15227378187,
            "range": "± 100421733",
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
          "id": "3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c",
          "message": "Update num-derive requirement from 0.3 to 0.4 (#663)\n\nUpdates the requirements on [num-derive](https://github.com/rust-num/num-derive) to permit the latest version.\r\n- [Changelog](https://github.com/rust-num/num-derive/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/rust-num/num-derive/compare/num-derive-0.3.0...num-derive-0.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: num-derive\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T10:57:43-07:00",
          "tree_id": "489d6b92cfd5ea9b3cfc8eca582da7a1a241fd75",
          "url": "https://github.com/risc0/risc0/commit/3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c"
        },
        "date": 1688148477486,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2712400,
            "range": "± 99501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2863066,
            "range": "± 74594",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4994765,
            "range": "± 93485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3606272875,
            "range": "± 71330455",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3717293604,
            "range": "± 52489788",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15192343979,
            "range": "± 126121731",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3674594292,
            "range": "± 93998128",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3719098438,
            "range": "± 50412739",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15190742854,
            "range": "± 98616107",
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
          "id": "3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1",
          "message": "Receipt unification (#666)\n\nRefactor zkp and zkvm such that receipt types (SegmentReceipt and RollupReceipt) implements a Receipt trait which allows the SessionReceipt to hold segments or rollups.\r\n\r\nThis allows a receipt to optionally have a hash function name which is stamped at creation time. Later, a verifier can use this information to select the appropriate matching hash function.\r\n\r\nKey changes:\r\n\r\n* Adjust HashFn and Rng to be object-safe traits (which means removing generics in function singatures, and requiring a self receiver).\r\n* Add RngFactory to support creation of Rng\r\n* Adjust HashSuite to be a struct containing a trait-object of HashFn and Rng.\r\n* Adjust the Hal to replace HashSuite generics with the new struct.\r\n* Update prove and verify",
          "timestamp": "2023-07-05T15:41:04-07:00",
          "tree_id": "56da9a95063aad6f1f9984096c41bfd5be1e0e46",
          "url": "https://github.com/risc0/risc0/commit/3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1"
        },
        "date": 1688597736033,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2709851,
            "range": "± 101696",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2849147,
            "range": "± 46474",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4985244,
            "range": "± 50904",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3712274771,
            "range": "± 52563021",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3719675229,
            "range": "± 89136978",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15324642458,
            "range": "± 143765463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3731956791,
            "range": "± 63068351",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3725492312,
            "range": "± 58267659",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15308990374,
            "range": "± 72190236",
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
          "id": "4b3bd429d92c3cfecd4375f80955714f01cf153d",
          "message": "Hash all pages to fix issues with executor (#676)",
          "timestamp": "2023-07-06T20:12:26Z",
          "tree_id": "c86dd3d3649dfb2afd92bd3f4491eadea8de19c0",
          "url": "https://github.com/risc0/risc0/commit/4b3bd429d92c3cfecd4375f80955714f01cf153d"
        },
        "date": 1688674969222,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28392703,
            "range": "± 52743",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28675565,
            "range": "± 84374",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30700112,
            "range": "± 67035",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3665385958,
            "range": "± 58075480",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3715101209,
            "range": "± 53701375",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15329884396,
            "range": "± 147078527",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3754566958,
            "range": "± 45656403",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3703695791,
            "range": "± 50333609",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15262027687,
            "range": "± 133651464",
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
          "id": "b35e1faa37fb4b60cf8dd849cf46b14d1713c881",
          "message": "Fix to hashing only dirty pages (#679)",
          "timestamp": "2023-07-09T21:03:00Z",
          "tree_id": "df9a8cbe44bd01371387cb5883ad6aafe1b87f90",
          "url": "https://github.com/risc0/risc0/commit/b35e1faa37fb4b60cf8dd849cf46b14d1713c881"
        },
        "date": 1688937220448,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2797414,
            "range": "± 204762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2934295,
            "range": "± 111479",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4994576,
            "range": "± 58956",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3662701896,
            "range": "± 52885403",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3732359979,
            "range": "± 43396481",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15240795146,
            "range": "± 152807665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3733879896,
            "range": "± 82107296",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3710530500,
            "range": "± 68331492",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15300371624,
            "range": "± 113647502",
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
          "id": "9487793b3c6da2a4554d725c578a5b8fdbfdc432",
          "message": "zkVM: add remote proving by using the bonsai sdk (#677)\n\n* zkVM: add remote proving through the bonsai sdk\r\n\r\nThis change enables generating proofs remotely by using bonsai using the zkVM API.\r\nIn order to execute, add the following environment variables before running the\r\nhost code: BONSAI_API_KEY, BONSAI_API_URL. A new function `default_executor_from_elf` has been added to\r\ngenerate an executor if these environment variables are set.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-07-10T21:19:28Z",
          "tree_id": "bfcd599647d4efdad9d025e6f9c367808ab5c6de",
          "url": "https://github.com/risc0/risc0/commit/9487793b3c6da2a4554d725c578a5b8fdbfdc432"
        },
        "date": 1689024867640,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2766505,
            "range": "± 110270",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2931296,
            "range": "± 123936",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5165496,
            "range": "± 82567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3672739500,
            "range": "± 74876736",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3697519854,
            "range": "± 36996976",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15254296562,
            "range": "± 105328613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3681113500,
            "range": "± 51932241",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3730412458,
            "range": "± 74828005",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15243425292,
            "range": "± 75681790",
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
          "id": "789f0062ef14f7eeba976e4b62953ec9fd68b85b",
          "message": "Update metadata for bonsai-sdk",
          "timestamp": "2023-07-10T17:51:07-07:00",
          "tree_id": "18d855c9b6256535d1f8a20c5c06d79104786a0e",
          "url": "https://github.com/risc0/risc0/commit/789f0062ef14f7eeba976e4b62953ec9fd68b85b"
        },
        "date": 1689037638340,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2735024,
            "range": "± 121621",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2961308,
            "range": "± 126340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5054391,
            "range": "± 111256",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3711390521,
            "range": "± 50952790",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3722234521,
            "range": "± 79042735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15296700666,
            "range": "± 70524094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3692377833,
            "range": "± 57599427",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3736453375,
            "range": "± 71366298",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15305823229,
            "range": "± 75914367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d8cc276aacaa04219ef57d65c158d4bfdd40c0",
          "message": "Align implementations of image ID and system state struct hash (#689)",
          "timestamp": "2023-07-11T19:39:17-07:00",
          "tree_id": "d8679fbe497baafe5a73c8d31caad925c610e64a",
          "url": "https://github.com/risc0/risc0/commit/a8d8cc276aacaa04219ef57d65c158d4bfdd40c0"
        },
        "date": 1689130202764,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2686967,
            "range": "± 129366",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2899865,
            "range": "± 69871",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4994395,
            "range": "± 60263",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3707277583,
            "range": "± 35298717",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3728908541,
            "range": "± 71511547",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15235720895,
            "range": "± 61662601",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3715483521,
            "range": "± 38509528",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3727235646,
            "range": "± 43393256",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15225599167,
            "range": "± 116205792",
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
          "id": "e96ab3e11f98766b949a34d3f3330062e63438fe",
          "message": "Fix for #681 (#684)\n\nUse thiserror for public Error types.",
          "timestamp": "2023-07-12T03:57:54Z",
          "tree_id": "22661e0975d06920c835f5354496a4af268caf97",
          "url": "https://github.com/risc0/risc0/commit/e96ab3e11f98766b949a34d3f3330062e63438fe"
        },
        "date": 1689134905957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2689234,
            "range": "± 112641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2917813,
            "range": "± 96497",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5022959,
            "range": "± 113995",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3679593583,
            "range": "± 50556931",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3716006437,
            "range": "± 49075041",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15309521729,
            "range": "± 75938962",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3705002229,
            "range": "± 75531934",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3712017416,
            "range": "± 69924740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15334998000,
            "range": "± 159057687",
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
          "id": "6a357a6f1f56f24413a711819ea8e381271f2163",
          "message": "cargo risczero: update README with reference to remote proving (#690)\n\nThe bonsai quick start guide refers to this documentation as one of 4 options\r\nfor using Bonsai. This README does not contain any mention of remote proving\r\nand could be confusing for users who wish to use cargo risczero to generate a\r\ntemplate for remote proving. Add a simple reference to remote proving to\r\nprovide additional clarity.",
          "timestamp": "2023-07-12T17:13:57Z",
          "tree_id": "a8340f0da81b5879901ef523ccc1d04219216a2c",
          "url": "https://github.com/risc0/risc0/commit/6a357a6f1f56f24413a711819ea8e381271f2163"
        },
        "date": 1689182681620,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2705410,
            "range": "± 95463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2911029,
            "range": "± 84749",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4986913,
            "range": "± 53668",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 3705728375,
            "range": "± 56272924",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 3674927541,
            "range": "± 52063912",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 15256668500,
            "range": "± 66597111",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 3696624083,
            "range": "± 31718167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3743864229,
            "range": "± 46391244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 15239637937,
            "range": "± 110590690",
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
          "id": "d4ce2f357f5268d75c44de44cbd85291a68f2b4c",
          "message": "Added index to Segment / SegmentReceipt (#525)\n\n* Added index to Segment / SegmentReceipt",
          "timestamp": "2023-04-21T14:47:46-07:00",
          "tree_id": "a933c1b0be7c9f5b4bc2cfe882f2d3740bb7691f",
          "url": "https://github.com/risc0/risc0/commit/d4ce2f357f5268d75c44de44cbd85291a68f2b4c"
        },
        "date": 1682114574594,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1481576585,
            "range": "± 65601916",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1464703880,
            "range": "± 88961384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 330453897,
            "range": "± 2894870",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 330484282,
            "range": "± 4377642",
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
          "id": "da02f36ee90d0154fe2638c74504c78ba9cf5d13",
          "message": "Improve executor perf (#536)\n\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-04-27T15:12:58-07:00",
          "tree_id": "a5666138c471dd4c57692075f810a3a5bc685317",
          "url": "https://github.com/risc0/risc0/commit/da02f36ee90d0154fe2638c74504c78ba9cf5d13"
        },
        "date": 1682645387717,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 356466846,
            "range": "± 5399616",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 373945676,
            "range": "± 3674214",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 485407253,
            "range": "± 6304804",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1378140210,
            "range": "± 104422010",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1296729503,
            "range": "± 72145799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4382271727,
            "range": "± 365816056",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1648815668,
            "range": "± 115241074",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1610145316,
            "range": "± 139845340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4584056337,
            "range": "± 372905608",
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
          "id": "756ae90ddb09801b6b22a1d37d9431a99b35121d",
          "message": "API adjustment: executor segment callback (#540)",
          "timestamp": "2023-04-28T15:30:39-07:00",
          "tree_id": "eef748a009ed0426a46088cd77e7501b514474d2",
          "url": "https://github.com/risc0/risc0/commit/756ae90ddb09801b6b22a1d37d9431a99b35121d"
        },
        "date": 1682721426854,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 293602379,
            "range": "± 3392349",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 307627739,
            "range": "± 34791186",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 408179565,
            "range": "± 17866980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1423213997,
            "range": "± 44514349",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1448524555,
            "range": "± 62080254",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4464035533,
            "range": "± 472701534",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1740840837,
            "range": "± 42808824",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1788105572,
            "range": "± 79702866",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4655909636,
            "range": "± 79708025",
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
          "id": "75a85a85c9b2dd0382acaa60839eda2183d739f0",
          "message": "Change to RISC-V circuit semantics in advance of recursion predicates\n\nThis commit makes a number of changes to make the RISC-V circuit compliant with it's description in the recursion RFC and fixes some potential sources of bugs.\r\n1) Update the circuit to a new version, which \r\n  a) outputs the the full system exit code, and add a user exit code \r\n  b) Makes the output process atomic (part of halt) by doing it during 2 additional reset cycles\r\n  c) Adds an 'input' global and provides a new system call to access it (replacing the output  call)\r\n2) Make the requires updates to the rust zkvm code\r\n3) Correctly resets the journal commitment on pause\r\n4) Update the riscv tests (adding one instruction to set output, which is not required)",
          "timestamp": "2023-05-01T10:48:51-07:00",
          "tree_id": "3280fda6433d2b3bed5d2c39f226cd0ba002de74",
          "url": "https://github.com/risc0/risc0/commit/75a85a85c9b2dd0382acaa60839eda2183d739f0"
        },
        "date": 1682964469025,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 295932191,
            "range": "± 4063934",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 381736783,
            "range": "± 7444599",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 414315602,
            "range": "± 3361104",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1450157966,
            "range": "± 77559117",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1485311114,
            "range": "± 75321014",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4286177926,
            "range": "± 81395451",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1737960659,
            "range": "± 42595793",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1775179361,
            "range": "± 33567592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4748892397,
            "range": "± 91173226",
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
          "id": "a755c93f43cda2bf6c6087f9c04a5f40389bd32e",
          "message": "serde: add support to serialize and deserialize 32 bit and 64 bit floating point values (#545)\n\n* serde: add support for f32 and f64",
          "timestamp": "2023-05-03T18:11:51Z",
          "tree_id": "2f9e5a66c7741321fb66b1a7310bc7070235b6c1",
          "url": "https://github.com/risc0/risc0/commit/a755c93f43cda2bf6c6087f9c04a5f40389bd32e"
        },
        "date": 1683138496834,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 364801953,
            "range": "± 3975268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 306699775,
            "range": "± 2845840",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 494065122,
            "range": "± 7520120",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1693726852,
            "range": "± 120280100",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1794057004,
            "range": "± 88015420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4842837134,
            "range": "± 311878572",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2095312599,
            "range": "± 174293370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2088821156,
            "range": "± 171885653",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5582930275,
            "range": "± 239444035",
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
          "id": "602ac572be192cf86526838cb2fcf3ae4c6983e7",
          "message": "Added libm externs to zkvm guest (#543)\n\n* Added libm extern wrappers directly in to guest module\r\n* added tests for libm to ensure things link correctly\r\n* removed old externc-libm workarounds from examples.",
          "timestamp": "2023-05-03T13:43:30-07:00",
          "tree_id": "fe28594b957ecabaf5f34e34af0a9d9b1737424b",
          "url": "https://github.com/risc0/risc0/commit/602ac572be192cf86526838cb2fcf3ae4c6983e7"
        },
        "date": 1683147022673,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 295287646,
            "range": "± 1323212",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 304630862,
            "range": "± 3940980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 415100008,
            "range": "± 4203141",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1460362491,
            "range": "± 187173936",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1453093018,
            "range": "± 162514674",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4410496389,
            "range": "± 465503569",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1771098920,
            "range": "± 123363281",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1752638438,
            "range": "± 112496958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4788565292,
            "range": "± 81402421",
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
          "id": "2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4",
          "message": "Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm (#546)\n\n* Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm\r\n\r\n* This allows rust-analyzer to analyze guest code without having to configure it to cross compile for the zkvm target.\r\n* Fixed flaky integration test by remapping absolute pathnames to relative pathnames when compiling the guest\r\n\r\n* Added vscode settings for linkedProjects\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-05-03T21:40:30Z",
          "tree_id": "ec184080d906f6d944c97c8997144346385be4bf",
          "url": "https://github.com/risc0/risc0/commit/2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4"
        },
        "date": 1683150929872,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 289784099,
            "range": "± 3819786",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 363581062,
            "range": "± 5857809",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 471666247,
            "range": "± 6341705",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1555826455,
            "range": "± 114646736",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1563553844,
            "range": "± 126571229",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4804894660,
            "range": "± 368057995",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1756851033,
            "range": "± 55413949",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1878562833,
            "range": "± 151452403",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5255971212,
            "range": "± 318965986",
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
          "id": "a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224",
          "message": "Fix executor by accounting for extra cycles and patch continuations test for CI (#556)",
          "timestamp": "2023-05-10T01:41:13-07:00",
          "tree_id": "873928e6daaf4f6c69b1906cef09eaa3c539b87b",
          "url": "https://github.com/risc0/risc0/commit/a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224"
        },
        "date": 1683708487486,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 303029354,
            "range": "± 3212771",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 319592271,
            "range": "± 9935392",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 423584103,
            "range": "± 3635786",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1471210999,
            "range": "± 193669206",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1613267923,
            "range": "± 213647045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4419642759,
            "range": "± 278171469",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1741074624,
            "range": "± 45364784",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1790448444,
            "range": "± 204375246",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4777722970,
            "range": "± 319901137",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d83c7fef80d0ebb87bc86567447efee633a24c4e",
          "message": "Use crypto-bigint instead of num-bigint (#547)\n\nUse crypto-bigint instead of num-bigint in the executor and in tests.",
          "timestamp": "2023-05-10T17:57:01Z",
          "tree_id": "49821ec6c2aa51a2632203a6f156ec7a6287fccf",
          "url": "https://github.com/risc0/risc0/commit/d83c7fef80d0ebb87bc86567447efee633a24c4e"
        },
        "date": 1683741969225,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 392271445,
            "range": "± 3237094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 409009645,
            "range": "± 6699126",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 516062839,
            "range": "± 12637033",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1800223704,
            "range": "± 76360896",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1808718284,
            "range": "± 129783314",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5093768869,
            "range": "± 259218643",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2264860658,
            "range": "± 94199528",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2155900491,
            "range": "± 198157707",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5352048058,
            "range": "± 359231266",
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
          "id": "364e3a6c952e00dc0452fa66c521a6a723540860",
          "message": "Update to rust 1.69.0 (#553)",
          "timestamp": "2023-05-10T23:16:16Z",
          "tree_id": "14c7fbf2a8f7fea1bd5897d7ff030e850d38a06c",
          "url": "https://github.com/risc0/risc0/commit/364e3a6c952e00dc0452fa66c521a6a723540860"
        },
        "date": 1683761643206,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 363098975,
            "range": "± 5244123",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 375844531,
            "range": "± 2962565",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 468059649,
            "range": "± 4388255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1744760142,
            "range": "± 89892389",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1808384086,
            "range": "± 121091138",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5048984722,
            "range": "± 309897588",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2130539354,
            "range": "± 185140585",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2258108244,
            "range": "± 114195681",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5495727384,
            "range": "± 285437917",
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
          "id": "33e6a643ea6d3be0d7c9727ee3dc4007618df8bb",
          "message": "Add `FileSegmentRef` (#560)",
          "timestamp": "2023-05-12T20:48:07Z",
          "tree_id": "9e4b8c5461a6ef96c602828e9430607d48899fa5",
          "url": "https://github.com/risc0/risc0/commit/33e6a643ea6d3be0d7c9727ee3dc4007618df8bb"
        },
        "date": 1683924971164,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 323267401,
            "range": "± 1221513",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 336492009,
            "range": "± 390890",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 455155674,
            "range": "± 638671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2108477294,
            "range": "± 15428404",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2112618931,
            "range": "± 8890213",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5608185234,
            "range": "± 38461463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2418897001,
            "range": "± 8537053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2455656123,
            "range": "± 4917670",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6081421458,
            "range": "± 44032623",
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
          "id": "a10b511c7ebe1fc48cb89398380616a87407e5b2",
          "message": "Store memory image as a btree of pages. (#561)\n\nThis gives us significant performance gains in both memory usage and run time.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-12T22:42:50Z",
          "tree_id": "46533952222dc8b66ee7918d12d0816ac891c927",
          "url": "https://github.com/risc0/risc0/commit/a10b511c7ebe1fc48cb89398380616a87407e5b2"
        },
        "date": 1683932221243,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 21359404,
            "range": "± 133303",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 41092694,
            "range": "± 199223",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 242447466,
            "range": "± 2612996",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2284160214,
            "range": "± 11157319",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2168595364,
            "range": "± 20927359",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6592768811,
            "range": "± 52987655",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2030348468,
            "range": "± 31109723",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2024076851,
            "range": "± 41975323",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6774429489,
            "range": "± 45455699",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7a4b7d78300a4682b01c1aec1da43104ce66ebe",
          "message": "Adding feature flag documentation to crate READMEs (#521)\n\nAdds feature flag documentation to top-level README and to `risc0-circuit-rv32im`, `risc0-zkp`, and `risc0-zkvm` crates\r\n\r\n\r\n\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-14T16:17:23-07:00",
          "tree_id": "ffc573d85abe60ee9f6c6b03019bf9923e340997",
          "url": "https://github.com/risc0/risc0/commit/b7a4b7d78300a4682b01c1aec1da43104ce66ebe"
        },
        "date": 1684108195077,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 22234338,
            "range": "± 170459",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 42551572,
            "range": "± 189951",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 246232567,
            "range": "± 893907",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1110398517,
            "range": "± 4022440",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1144166569,
            "range": "± 3527614",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4249333977,
            "range": "± 43874563",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1141231789,
            "range": "± 2018612",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1195355428,
            "range": "± 3125620",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4495468398,
            "range": "± 33514743",
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
          "id": "235e75b2ae25e00f8fd381cfb9e9d45444a811e6",
          "message": "Adjust image_id to be the hash of (merkle_root, pc) (#566)",
          "timestamp": "2023-05-18T09:52:27-07:00",
          "tree_id": "11c26a5527c9ce1addff78aeef1d26334f254513",
          "url": "https://github.com/risc0/risc0/commit/235e75b2ae25e00f8fd381cfb9e9d45444a811e6"
        },
        "date": 1684429040564,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16540793,
            "range": "± 635030",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 31055175,
            "range": "± 515531",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 180391793,
            "range": "± 3089983",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1057822087,
            "range": "± 38716047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1071270844,
            "range": "± 41855103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3822706567,
            "range": "± 113695774",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1095663285,
            "range": "± 119790208",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1098828754,
            "range": "± 46349268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3994871626,
            "range": "± 121234113",
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
          "id": "48f1a324876848f9f64baf6cb06808106d36c55b",
          "message": "Fix for #569 (#570)",
          "timestamp": "2023-05-18T21:10:32Z",
          "tree_id": "4a2796e5d6f104a3508019af3a90d7c2a33eab79",
          "url": "https://github.com/risc0/risc0/commit/48f1a324876848f9f64baf6cb06808106d36c55b"
        },
        "date": 1684446132529,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 21199189,
            "range": "± 122740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 41585257,
            "range": "± 168596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 247034949,
            "range": "± 1701181",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1108306956,
            "range": "± 2330746",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1143517596,
            "range": "± 4467186",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4181204047,
            "range": "± 53327356",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1137766947,
            "range": "± 2877306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1189858625,
            "range": "± 3035609",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4467719592,
            "range": "± 37807852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "873c9f8f1c261fa1f1e61b995d24341cc89df254",
          "message": "Make `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\n\nMake `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-18T22:41:33Z",
          "tree_id": "e1cbbfbc1f571173263d6f9a7a40957d2dc4a414",
          "url": "https://github.com/risc0/risc0/commit/873c9f8f1c261fa1f1e61b995d24341cc89df254"
        },
        "date": 1684450054946,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18808902,
            "range": "± 949577",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34225614,
            "range": "± 1401802",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 184325942,
            "range": "± 3728763",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 979862857,
            "range": "± 24435141",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1014953424,
            "range": "± 33282329",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3808903738,
            "range": "± 102411869",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1055003803,
            "range": "± 29540124",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1108666743,
            "range": "± 48890598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4036509789,
            "range": "± 63088196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9497776ad378bb13e7cc8efb25ef4a734b745a03",
          "message": "Add error string to opcode decode failure in Executor (#571)\n\n Add error string to opcode decode failure in Executor #571",
          "timestamp": "2023-05-19T00:12:47Z",
          "tree_id": "edb1797459573df1c9c9ffe71aeff5f1ed4ff07d",
          "url": "https://github.com/risc0/risc0/commit/9497776ad378bb13e7cc8efb25ef4a734b745a03"
        },
        "date": 1684455586410,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18446750,
            "range": "± 972856",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 32285678,
            "range": "± 1031240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 172175753,
            "range": "± 3280068",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1009745419,
            "range": "± 75798081",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1059881556,
            "range": "± 73501579",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3459437379,
            "range": "± 264730815",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1061884333,
            "range": "± 27694391",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1117291641,
            "range": "± 16688434",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4143663024,
            "range": "± 62810681",
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
          "id": "71f6571239816f617e5461ae2670067f7083a8f9",
          "message": "Workaround to fix self-hosted runners (#577)",
          "timestamp": "2023-05-20T13:12:42-07:00",
          "tree_id": "e720c8391c641dbdbbcd6de6b202f0621f676308",
          "url": "https://github.com/risc0/risc0/commit/71f6571239816f617e5461ae2670067f7083a8f9"
        },
        "date": 1684613845278,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16347079,
            "range": "± 488187",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 31208904,
            "range": "± 526777",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 182959416,
            "range": "± 2854456",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 892560622,
            "range": "± 7743805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 929341996,
            "range": "± 15655792",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3456933966,
            "range": "± 39004240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 929996798,
            "range": "± 12184799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 970709626,
            "range": "± 10248974",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3640320541,
            "range": "± 17732839",
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
          "id": "5750d3237561680d864ea782554839c2aa6cfa85",
          "message": "Improve receipt docs (#576)",
          "timestamp": "2023-05-20T20:39:02Z",
          "tree_id": "1fff671b6441abde3ddef00163962490926003c0",
          "url": "https://github.com/risc0/risc0/commit/5750d3237561680d864ea782554839c2aa6cfa85"
        },
        "date": 1684615454817,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16377467,
            "range": "± 566543",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 30796834,
            "range": "± 514719",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 181277485,
            "range": "± 3934488",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 875417176,
            "range": "± 3939108",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 909642196,
            "range": "± 13739190",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3406101015,
            "range": "± 37867352",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 932770291,
            "range": "± 6438501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 939470218,
            "range": "± 16999541",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3592236844,
            "range": "± 30662059",
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
          "id": "0415638f001e27f2c433080c95f068e20234981c",
          "message": "Minor README updates",
          "timestamp": "2023-05-20T14:26:04-07:00",
          "tree_id": "90a2c2e387347c8bd2431124e8b939f380564567",
          "url": "https://github.com/risc0/risc0/commit/0415638f001e27f2c433080c95f068e20234981c"
        },
        "date": 1684618293047,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16192895,
            "range": "± 532802",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 30051765,
            "range": "± 549765",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 173484226,
            "range": "± 3502928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1035961650,
            "range": "± 33404298",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1228560879,
            "range": "± 105851143",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3781128448,
            "range": "± 104702377",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1153376806,
            "range": "± 124699072",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1165417840,
            "range": "± 110147095",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4050158412,
            "range": "± 123149560",
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
          "id": "624fb55ea4456ef6faa5960399a5de882d5cf0f7",
          "message": "Pin bstr to fix build issue (#580)",
          "timestamp": "2023-05-22T15:13:41-07:00",
          "tree_id": "9aacab4d977950b1651c56f99cf0d424d55a7198",
          "url": "https://github.com/risc0/risc0/commit/624fb55ea4456ef6faa5960399a5de882d5cf0f7"
        },
        "date": 1684793933095,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16607651,
            "range": "± 288086",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 30832216,
            "range": "± 547999",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 175183216,
            "range": "± 1924256",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 882796007,
            "range": "± 6414762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 908092264,
            "range": "± 9418453",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3401337180,
            "range": "± 13732414",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 920321116,
            "range": "± 12406015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 965705399,
            "range": "± 10340969",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3607668104,
            "range": "± 43468839",
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
          "id": "e5221ce381fb9092f6a9c510250945ea8645480a",
          "message": "Simplify guest linker configuration (#559)\n\n* Simplify guest linker configuration\r\n\r\nRemove custom linker script in favor of -Ttext= linkeer arg\r\nStack pointer and .text are now based on values in memory.rs instead of a separate linker script.  .data and .bss follow .text.\r\nWhen using \"std\" on the guest, we no longer need to include #![no_main] or risc0_zkvm::entry!(...); just a standard \"pub fn main\" will do. (Unfortunately we still have to force inclusion of the risc0 zkvm crate with \"use risc0_zkvm as _\" if we don't use anything else from it)\r\n\r\n* Add comments with links to how the linker works\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-22T22:54:29Z",
          "tree_id": "c32b7572eca8689c3735f489fe3434176a70a5a8",
          "url": "https://github.com/risc0/risc0/commit/e5221ce381fb9092f6a9c510250945ea8645480a"
        },
        "date": 1684796380323,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17347970,
            "range": "± 421126",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34114340,
            "range": "± 411094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 201414364,
            "range": "± 2838582",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 955280817,
            "range": "± 62571616",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 936637392,
            "range": "± 8851344",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3434161633,
            "range": "± 21668761",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 953435257,
            "range": "± 13492912",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1048500464,
            "range": "± 51518208",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3637290301,
            "range": "± 91577684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d04249433367beda77de4c3af94bafc2dbda8dd",
          "message": "Adding a few Rust doc examples to Executor and ExecutorEnv (#572)\n\n* adding examples to ExecutorEnv and Executor\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/mod.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* updating executor/executor env doc examples after code review\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\n\n---------\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-24T00:37:14Z",
          "tree_id": "b575f8e37b2710cacfee8059d45402ed32db11c1",
          "url": "https://github.com/risc0/risc0/commit/2d04249433367beda77de4c3af94bafc2dbda8dd"
        },
        "date": 1684888946889,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17291150,
            "range": "± 481302",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 33449722,
            "range": "± 906692",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 196912680,
            "range": "± 2398068",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 926463227,
            "range": "± 8623131",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 944012319,
            "range": "± 12868999",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3453314833,
            "range": "± 37974699",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 948287430,
            "range": "± 4506592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 991132744,
            "range": "± 7522163",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3647861236,
            "range": "± 14525952",
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
          "id": "279b7ddd0d6de49200c6b3377fe2b6c42214f0cb",
          "message": "Include release branches for CI (#583)",
          "timestamp": "2023-05-23T19:14:48-07:00",
          "tree_id": "5be3cd7b038850ccbcda4bd6129f41e7edcdbbd9",
          "url": "https://github.com/risc0/risc0/commit/279b7ddd0d6de49200c6b3377fe2b6c42214f0cb"
        },
        "date": 1684894814049,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17710457,
            "range": "± 577208",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 33816765,
            "range": "± 629817",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 192922815,
            "range": "± 2724958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1091514780,
            "range": "± 72819817",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1078899479,
            "range": "± 45427931",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3915274797,
            "range": "± 112769949",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1116196349,
            "range": "± 73460225",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1162319218,
            "range": "± 104529965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3967998152,
            "range": "± 74657125",
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
          "id": "b150cb7692ff0bdc4328938d4a5e138dbf78352f",
          "message": "add test for session limit overflow (#575)\n\nThese tests check for errors generated by the executor when running the executor past the session_limit.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-24T17:55:08Z",
          "tree_id": "798a772899b2d6a03bc04d29058a3a20892bf7ab",
          "url": "https://github.com/risc0/risc0/commit/b150cb7692ff0bdc4328938d4a5e138dbf78352f"
        },
        "date": 1684951275291,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18393641,
            "range": "± 461398",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 35436318,
            "range": "± 454180",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 207789241,
            "range": "± 3507070",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 945635258,
            "range": "± 54638936",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 972051185,
            "range": "± 4793018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3507213895,
            "range": "± 93300362",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 958566644,
            "range": "± 4513001",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1007275259,
            "range": "± 12159746",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3718928644,
            "range": "± 27297147",
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
          "id": "3a8d4c29cba234d551487feab8b8ae101482e343",
          "message": "Update criterion requirement from 0.4 to 0.5 (#586)\n\nUpdates the requirements on [criterion](https://github.com/bheisler/criterion.rs) to permit the latest version.\r\n- [Changelog](https://github.com/bheisler/criterion.rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/bheisler/criterion.rs/compare/0.4.0...0.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: criterion\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T18:31:23Z",
          "tree_id": "1da6d9009f12986e1d4d9ed81abbeee4717473fc",
          "url": "https://github.com/risc0/risc0/commit/3a8d4c29cba234d551487feab8b8ae101482e343"
        },
        "date": 1685127588968,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 22216903,
            "range": "± 132811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 43395889,
            "range": "± 76052",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 257612607,
            "range": "± 792347",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1122174005,
            "range": "± 2871848",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1151176309,
            "range": "± 4104501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4212758866,
            "range": "± 43415706",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1144306031,
            "range": "± 3862408",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1198869256,
            "range": "± 2533368",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4480472440,
            "range": "± 36729881",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c529b64006382d06024ca5862297b18a77a895c",
          "message": "Enable feature-gated programmatic access to `methods.rs` contents (#585)\n\n* guest-list feature\r\n\r\n* fix formatting\r\n\r\n* fix linebreak and whitespace\r\n\r\n* extra new lines in output\r\n\r\n* Update risc0/build/src/lib.rs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-29T07:39:56Z",
          "tree_id": "3ac951203b0b02ce7abc342218c82a1b3b6cea49",
          "url": "https://github.com/risc0/risc0/commit/7c529b64006382d06024ca5862297b18a77a895c"
        },
        "date": 1685346296682,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17448571,
            "range": "± 403618",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 33334177,
            "range": "± 780014",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 197205263,
            "range": "± 2405373",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1012701009,
            "range": "± 49480910",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 942637881,
            "range": "± 8560045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3441401841,
            "range": "± 47686294",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 953173084,
            "range": "± 8089633",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1067008075,
            "range": "± 92370883",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3673748611,
            "range": "± 35926806",
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
          "id": "3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1",
          "message": "Fix for #594 (#597)",
          "timestamp": "2023-05-31T21:06:26-07:00",
          "tree_id": "8c6e9d94b9141c66c4d6a142d9fa1dd7313f515b",
          "url": "https://github.com/risc0/risc0/commit/3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1"
        },
        "date": 1685592686581,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17597188,
            "range": "± 527038",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 32927877,
            "range": "± 772614",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 198109423,
            "range": "± 5841431",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1055386956,
            "range": "± 31264463",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1095528877,
            "range": "± 52390954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3872049173,
            "range": "± 141066023",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1105669972,
            "range": "± 45889470",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1169986991,
            "range": "± 95655233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4487608842,
            "range": "± 196163922",
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
          "id": "fc33ed9f343eaaf2d52770d0d72713b151c75cc2",
          "message": "Add test vectors and Make rust implementation of IOP match cirgen implementation (#599)",
          "timestamp": "2023-06-05T23:49:05Z",
          "tree_id": "9b783988bfa231e8d75b039e0d2eed0f9d45c720",
          "url": "https://github.com/risc0/risc0/commit/fc33ed9f343eaaf2d52770d0d72713b151c75cc2"
        },
        "date": 1686009235167,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18002573,
            "range": "± 613503",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34662869,
            "range": "± 933315",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 203183148,
            "range": "± 1968063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1054668933,
            "range": "± 106636479",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1092487549,
            "range": "± 46243989",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3920850646,
            "range": "± 140387485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1122910407,
            "range": "± 46193237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1139132804,
            "range": "± 43339282",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4110629410,
            "range": "± 230443222",
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
          "id": "396be373bf6e2f6e997c8a4ea473fee125107c8f",
          "message": "Rebuild on CUDA related env vars (#605)\n\nTriggers rebuilds for couple more env vars if they change between\r\ninvokes of the kernel build",
          "timestamp": "2023-06-05T17:37:19-07:00",
          "tree_id": "aa37e37deda2f047a3466e363dfe21c0d14ad54e",
          "url": "https://github.com/risc0/risc0/commit/396be373bf6e2f6e997c8a4ea473fee125107c8f"
        },
        "date": 1686012159218,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18097131,
            "range": "± 520910",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34069441,
            "range": "± 435336",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 201143292,
            "range": "± 1664054",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 980970092,
            "range": "± 41388016",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1078856372,
            "range": "± 40748933",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3947985650,
            "range": "± 117997200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1094203100,
            "range": "± 39146491",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1152859133,
            "range": "± 109162227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4079604445,
            "range": "± 95196599",
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
          "id": "a36264a8961f2c7b9ba730c38be457f48ee3b570",
          "message": "Rename examples/evm -> examples/zkevm-demo (#611)",
          "timestamp": "2023-06-06T16:16:15-07:00",
          "tree_id": "8269e9f92e83cb28e18cccb8d53bfba289573944",
          "url": "https://github.com/risc0/risc0/commit/a36264a8961f2c7b9ba730c38be457f48ee3b570"
        },
        "date": 1686093660151,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17460352,
            "range": "± 335610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 33181303,
            "range": "± 666346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 192989268,
            "range": "± 2516041",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 914015181,
            "range": "± 7340994",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 948725407,
            "range": "± 14539889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3468813442,
            "range": "± 26227465",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 968698750,
            "range": "± 102004852",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 981674436,
            "range": "± 4205100",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3662514889,
            "range": "± 44932930",
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
          "id": "2192af4b426526eb0f88248bbb8eddc7ce5ca2a9",
          "message": "Publish Recursion Verifier (#603)\n\nThis change moves the recursion verifier from the private repository. This is\r\ndone by splitting the `CircuitDef` trait and adding files used by the recursion\r\nverifier.\r\n\r\nThe CircuitDef is a trait that is implemented by rust code generated from the\r\ncircuit for both the verifier and the prover. In order to split off the recursive\r\nverifier, we need to split this trait into two parts: one that is used in both the\r\nprover and the verifier and one that is used only in the prover. The former trait\r\ncalled `CircuitCoreDef` is implemented for the recursive verifier which requires\r\ngenerated rust files from the recursion circuit.",
          "timestamp": "2023-06-07T02:44:31Z",
          "tree_id": "a9fb25c72d15b572c0ace2f471a8394609cd5883",
          "url": "https://github.com/risc0/risc0/commit/2192af4b426526eb0f88248bbb8eddc7ce5ca2a9"
        },
        "date": 1686106177082,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 19298036,
            "range": "± 567059",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37265168,
            "range": "± 573824",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 225061652,
            "range": "± 6002785",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1068537786,
            "range": "± 108403052",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 969989427,
            "range": "± 30709715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3562096552,
            "range": "± 249407935",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 962141287,
            "range": "± 10360868",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1005678472,
            "range": "± 11067732",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3791167384,
            "range": "± 57621719",
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
          "id": "4e85c7e880c6741235a0c8e8bfd1c5562fc5e431",
          "message": "recursion: fix compiler warning in guest (#614)\n\nadd `#[cfg(not(target_os = \"zkvm\"))]` to items that are not needed for guest compilation",
          "timestamp": "2023-06-07T22:02:49Z",
          "tree_id": "63444c4b35dce7e91ae2aab1d90c1abffc7de49e",
          "url": "https://github.com/risc0/risc0/commit/4e85c7e880c6741235a0c8e8bfd1c5562fc5e431"
        },
        "date": 1686175693188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18301610,
            "range": "± 358150",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 35671482,
            "range": "± 962153",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 201043937,
            "range": "± 1497840",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 924173289,
            "range": "± 16524809",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 951692590,
            "range": "± 18044314",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3520202975,
            "range": "± 65162393",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 936371934,
            "range": "± 17308152",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 988481453,
            "range": "± 7880227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3744036108,
            "range": "± 41660474",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthias.goergens@gmail.com",
            "name": "Matthias Görgens",
            "username": "matthiasgoergens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c9f8d81334b12e223910414db46bd7187dd848",
          "message": "Fix typo (#613)",
          "timestamp": "2023-06-08T16:43:26Z",
          "tree_id": "70945cedf0cd1456aa98463e8a6cc12af3e2d235",
          "url": "https://github.com/risc0/risc0/commit/72c9f8d81334b12e223910414db46bd7187dd848"
        },
        "date": 1686242924590,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18144542,
            "range": "± 609245",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34796150,
            "range": "± 953591",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 206153342,
            "range": "± 2759818",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1058113430,
            "range": "± 33378297",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1079521019,
            "range": "± 41487987",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3801919679,
            "range": "± 107038862",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1079073518,
            "range": "± 40869775",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1120849538,
            "range": "± 32356666",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4072779739,
            "range": "± 92520625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e84cefc531e0599af6be7c635f4be49284be5a98",
          "message": "expose system state for mocking in tests (#617)",
          "timestamp": "2023-06-08T17:27:57Z",
          "tree_id": "5c87de3b862f6e4c6d37cb2c812a42e4fca1b8d2",
          "url": "https://github.com/risc0/risc0/commit/e84cefc531e0599af6be7c635f4be49284be5a98"
        },
        "date": 1686245600729,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18431748,
            "range": "± 496461",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 35019187,
            "range": "± 534939",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 210883175,
            "range": "± 4088405",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 898286595,
            "range": "± 5100439",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 938981697,
            "range": "± 10020683",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3478139072,
            "range": "± 38508237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 936286696,
            "range": "± 88926927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 976312851,
            "range": "± 4902430",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3682109791,
            "range": "± 37624426",
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
          "id": "222c36b7005639e08817083d0e3744a6ef8f7d39",
          "message": "Improve execution performance (#615)",
          "timestamp": "2023-06-08T18:03:59Z",
          "tree_id": "4479b0ea99389e7f399a8d5adf375136770ec3ae",
          "url": "https://github.com/risc0/risc0/commit/222c36b7005639e08817083d0e3744a6ef8f7d39"
        },
        "date": 1686247803362,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 20659209,
            "range": "± 562768",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 30796912,
            "range": "± 775512",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139079237,
            "range": "± 2924762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1069282682,
            "range": "± 123037111",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1143076972,
            "range": "± 83388896",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3906877293,
            "range": "± 280457266",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1076621208,
            "range": "± 116617524",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1266619697,
            "range": "± 101010801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4150008901,
            "range": "± 171728874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4e5acea2fbe6393f136d12d02c92d28f4c9a379",
          "message": "Handle alignment errors in deserialization (#600)",
          "timestamp": "2023-06-08T20:49:46Z",
          "tree_id": "37fab60a79a778088586e7a07528e5f63f61ba93",
          "url": "https://github.com/risc0/risc0/commit/a4e5acea2fbe6393f136d12d02c92d28f4c9a379"
        },
        "date": 1686257724129,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16832005,
            "range": "± 402453",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 26856497,
            "range": "± 441885",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 122643791,
            "range": "± 2122026",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1126699364,
            "range": "± 102224882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1189185038,
            "range": "± 88014239",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4048923349,
            "range": "± 218173806",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1301198028,
            "range": "± 62900372",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1171382929,
            "range": "± 92760195",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4154407561,
            "range": "± 388130592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "intoverflow@gmail.com",
            "name": "Tim Carstens",
            "username": "intoverflow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "318ae6056faf511bb1bf57bea8187acd30e181ee",
          "message": "Make session_limit optional (#608)",
          "timestamp": "2023-06-09T01:16:25Z",
          "tree_id": "49c2f3f76fd108b7f2fc2ce184fc9885c3a3d717",
          "url": "https://github.com/risc0/risc0/commit/318ae6056faf511bb1bf57bea8187acd30e181ee"
        },
        "date": 1686273715361,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17211512,
            "range": "± 873301",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 27100514,
            "range": "± 600185",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 123183617,
            "range": "± 3821507",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 930928986,
            "range": "± 7309697",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1057274231,
            "range": "± 23845063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3643401539,
            "range": "± 127444918",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 957130864,
            "range": "± 13499939",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 998276039,
            "range": "± 11727790",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3696065649,
            "range": "± 44302196",
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
          "id": "f448fbd730b9aba8fab79ba6fd67549caddb85cf",
          "message": "implement SessionReceipt trait (#616)\n\nThis pull request implements the `SessionReceipt` trait that is implemented by\r\n`SessionRollupReceipt` and `SessionFlatReceipt` (also known as the old\r\n`SessionReceipt`). This is useful because it allows the host code to call verify\r\nand to get the journal contents regardless of the concrete type of session\r\nreceipt. This trait is practical when a developer has a code base that uses\r\nbonsai resulting in a `SessionRollupReceipt` or from a local prover resulting in a\r\n`SessionFlatReceipt`.  Examples have been updated to use this new trait. The main\r\ndifference is to replace existing `receipt.journal` with `receipt.get_journal()`\r\nand `receipt.verify(XXXX_ID)` with `receipt.verify(XXXX_ID.into())`.",
          "timestamp": "2023-06-13T05:05:10Z",
          "tree_id": "b2caadff7b30c021a2ee2931744b0ede22f077cd",
          "url": "https://github.com/risc0/risc0/commit/f448fbd730b9aba8fab79ba6fd67549caddb85cf"
        },
        "date": 1686633013356,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 18499214,
            "range": "± 470708",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28601731,
            "range": "± 312620",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 126670972,
            "range": "± 2553555",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 891092397,
            "range": "± 8325051",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 909715759,
            "range": "± 5743021",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3443305678,
            "range": "± 22874537",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 918082510,
            "range": "± 9728632",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 943091780,
            "range": "± 8159621",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3556575357,
            "range": "± 40292419",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cbff2a0b6d781d7cb3e67af935db4234f13f59a",
          "message": "Add ECDSA verification example using bigint acceleration support (#590)\n\nThis PR adds an ECDSA verification example, which shows how to use the patched k256 library to get accelerated signature verification on secp256k1 in the zkVM guest.\r\n\r\nAs a dependency for the k256 patch, it also updates the allocator to support alignments that are larger than a word. (In particular, the constant-time lookup table implementation uses a 1024-byte alignment). risc0/rust#11 is related to this PR. Based on work by @shkoo.\r\n\r\nAs a drive-by change, this PR includes an additional check in the executor that execution did not previously end with ExitCode::Halted, which is a non-resumable state. I added this after running into this error by accident and having a hard time debugging it based on the errors I received.",
          "timestamp": "2023-06-13T22:16:09Z",
          "tree_id": "8d22cdb71a1532c9e515ca5012a2867ea35080fa",
          "url": "https://github.com/risc0/risc0/commit/7cbff2a0b6d781d7cb3e67af935db4234f13f59a"
        },
        "date": 1686694889243,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17300885,
            "range": "± 636267",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 26839572,
            "range": "± 553877",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 124781036,
            "range": "± 2642530",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 931477037,
            "range": "± 8191251",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 966704618,
            "range": "± 12271678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3531163134,
            "range": "± 23475596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 950875292,
            "range": "± 12158671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 979150939,
            "range": "± 6604256",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3631795339,
            "range": "± 34008502",
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
          "id": "78c2d1a9279b33500f52b363debfe7019d2f9b5a",
          "message": "Improve executor performance (#644)",
          "timestamp": "2023-06-20T11:35:04-07:00",
          "tree_id": "a64f3e325dd557eb47112cabfefacd6f169a9c4a",
          "url": "https://github.com/risc0/risc0/commit/78c2d1a9279b33500f52b363debfe7019d2f9b5a"
        },
        "date": 1687371869845,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 20520879,
            "range": "± 98857",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 21143667,
            "range": "± 149898",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 25773324,
            "range": "± 131310",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1691623569,
            "range": "± 17226524",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1706393895,
            "range": "± 16584229",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5846355204,
            "range": "± 18839968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1681746584,
            "range": "± 22535818",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1730258965,
            "range": "± 14099063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5862514191,
            "range": "± 62247138",
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
          "id": "6bf7ccb450961df4cb34406af44473a0a5f6808c",
          "message": "Cleanup recursion structs (#632)\n\n* ReceiptMeta: use ExitCode instead of two u8s\r\n\r\nThis is a first step in merging ReceiptMeta and ReceiptMetadata to a single\r\nstruct. The next change will remove ReceiptMeta in favor of ReceiptMetadata\r\n\r\n* rename field in recursion::receipt::SystemState so it matches zkvm::receipt::SystemState\r\n\r\n* recursion: remove duplicate `SystemState` struct\r\n\r\nThis struct was duplicated in the private repo. Since there is no need for\r\ndupilcation, this struct has been removed.\r\n\r\n* Recursion: remove duplicate ReceiptMeta struct\r\n\r\nThis change removes the duplicated ReceiptMetadata struct and instead uses a\r\ncommon ReceiptMetadata struct in `risc0_zkvm::receipt`\r\n\r\n* Move `exit_code` funtions to `risc0_zkvm::receipt`\r\n\r\nThese functions can be useful in `risc0_zkvm::receipt` as well as the recursion\r\nmodule.\r\n\r\n* clean up use declarations\r\n\r\n* Fix documentation\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-06-21T22:48:27Z",
          "tree_id": "8f8461038291162ade9c5cff0f58299f6e27311f",
          "url": "https://github.com/risc0/risc0/commit/6bf7ccb450961df4cb34406af44473a0a5f6808c"
        },
        "date": 1687388077649,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 21720852,
            "range": "± 66526",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 22159170,
            "range": "± 101008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 26866999,
            "range": "± 70638",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1260544168,
            "range": "± 5565179",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1299338691,
            "range": "± 6326261",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5060420664,
            "range": "± 34108927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1275462043,
            "range": "± 2626267",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1325471390,
            "range": "± 4590614",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5096074772,
            "range": "± 27369892",
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
          "id": "6b4286a4bb329a71e536596e85e6d7e4f191e7f2",
          "message": "Improve executor performance (#651)",
          "timestamp": "2023-06-23T21:41:16Z",
          "tree_id": "e0dc69ead6ea68890af96a1b2a8596cb8c2b78f1",
          "url": "https://github.com/risc0/risc0/commit/6b4286a4bb329a71e536596e85e6d7e4f191e7f2"
        },
        "date": 1687615833412,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5199169,
            "range": "± 113446",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5676433,
            "range": "± 117665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10312307,
            "range": "± 131480",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1231939534,
            "range": "± 3333158",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1273153834,
            "range": "± 4243712",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4843371911,
            "range": "± 37570735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1242510495,
            "range": "± 3805268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1281135512,
            "range": "± 4842197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4852568576,
            "range": "± 42284909",
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
          "id": "d79ab62274aebe670b461ab06b8477953182972c",
          "message": "Improve CUDA performance (#653)\n\n* Improve CUDA performance\r\n\r\n* Drop assumption of 256 block size",
          "timestamp": "2023-06-25T16:48:58-04:00",
          "tree_id": "3e33e2e53aad0982355d4ca90b1c71e419e0b3d9",
          "url": "https://github.com/risc0/risc0/commit/d79ab62274aebe670b461ab06b8477953182972c"
        },
        "date": 1687727450368,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5176435,
            "range": "± 102265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5645948,
            "range": "± 95105",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10217942,
            "range": "± 106023",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1095917643,
            "range": "± 3871703",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1131122247,
            "range": "± 3690198",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4300925223,
            "range": "± 35333454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1113647079,
            "range": "± 4308288",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1148434928,
            "range": "± 3416567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4315408081,
            "range": "± 48036537",
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
          "id": "a39561546dd5b54788b686afd125db687f40e84a",
          "message": "Drop use of unified memory for CUDA (#654)\n\n* Drop use of unified memory for CUDA\r\n\r\n* Toggle for unified memory",
          "timestamp": "2023-06-25T19:51:57-07:00",
          "tree_id": "09e58e6c2630f4c7d714f3538793467099a07804",
          "url": "https://github.com/risc0/risc0/commit/a39561546dd5b54788b686afd125db687f40e84a"
        },
        "date": 1687749193635,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5248338,
            "range": "± 104268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5708612,
            "range": "± 75665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10350388,
            "range": "± 95248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 944206640,
            "range": "± 2603803",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 972859366,
            "range": "± 1265448",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3515923409,
            "range": "± 7460980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 945761375,
            "range": "± 3930313",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 980353405,
            "range": "± 2236178",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3529373008,
            "range": "± 7921734",
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
          "id": "44c67ee83a021686b95722b30b8b1f9b1dc81b7e",
          "message": "Update predicates (#657)",
          "timestamp": "2023-06-28T01:00:51Z",
          "tree_id": "a8f6ca65054794eb7b8932c3668f2430108e4083",
          "url": "https://github.com/risc0/risc0/commit/44c67ee83a021686b95722b30b8b1f9b1dc81b7e"
        },
        "date": 1687914565627,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5174775,
            "range": "± 101468",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5653177,
            "range": "± 112473",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10308319,
            "range": "± 129459",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1506480207,
            "range": "± 2034441",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1532944037,
            "range": "± 3084986",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5050256955,
            "range": "± 16544842",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1498284889,
            "range": "± 2030028",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1530698494,
            "range": "± 2264105",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5070320523,
            "range": "± 46069851",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "austinabell8@gmail.com",
            "name": "Austin Abell",
            "username": "austinabell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691d7e03a9b260d0b6208f9b68096ae11bff43ff",
          "message": "chore: remove unused Once type (#660)",
          "timestamp": "2023-06-28T17:24:34Z",
          "tree_id": "8ff89aa5b6155254cb20901c0cd98ecd3e458085",
          "url": "https://github.com/risc0/risc0/commit/691d7e03a9b260d0b6208f9b68096ae11bff43ff"
        },
        "date": 1687973589950,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5192283,
            "range": "± 104495",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5695570,
            "range": "± 98213",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10276977,
            "range": "± 121411",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1609832108,
            "range": "± 106295468",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1780088883,
            "range": "± 59567001",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7949410258,
            "range": "± 294464879",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1670839189,
            "range": "± 23439217",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1717353805,
            "range": "± 76769773",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7693247492,
            "range": "± 194615795",
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
          "id": "3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c",
          "message": "Update num-derive requirement from 0.3 to 0.4 (#663)\n\nUpdates the requirements on [num-derive](https://github.com/rust-num/num-derive) to permit the latest version.\r\n- [Changelog](https://github.com/rust-num/num-derive/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/rust-num/num-derive/compare/num-derive-0.3.0...num-derive-0.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: num-derive\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T10:57:43-07:00",
          "tree_id": "489d6b92cfd5ea9b3cfc8eca582da7a1a241fd75",
          "url": "https://github.com/risc0/risc0/commit/3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c"
        },
        "date": 1688150122895,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5295269,
            "range": "± 114633",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5751749,
            "range": "± 94542",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10408172,
            "range": "± 123443",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 885221953,
            "range": "± 2833818",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 924103315,
            "range": "± 2348136",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3382123581,
            "range": "± 8070410",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 890429160,
            "range": "± 2620361",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 928721485,
            "range": "± 2940420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3394084833,
            "range": "± 5587489",
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
          "id": "3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1",
          "message": "Receipt unification (#666)\n\nRefactor zkp and zkvm such that receipt types (SegmentReceipt and RollupReceipt) implements a Receipt trait which allows the SessionReceipt to hold segments or rollups.\r\n\r\nThis allows a receipt to optionally have a hash function name which is stamped at creation time. Later, a verifier can use this information to select the appropriate matching hash function.\r\n\r\nKey changes:\r\n\r\n* Adjust HashFn and Rng to be object-safe traits (which means removing generics in function singatures, and requiring a self receiver).\r\n* Add RngFactory to support creation of Rng\r\n* Adjust HashSuite to be a struct containing a trait-object of HashFn and Rng.\r\n* Adjust the Hal to replace HashSuite generics with the new struct.\r\n* Update prove and verify",
          "timestamp": "2023-07-05T15:41:04-07:00",
          "tree_id": "56da9a95063aad6f1f9984096c41bfd5be1e0e46",
          "url": "https://github.com/risc0/risc0/commit/3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1"
        },
        "date": 1688599109688,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5215745,
            "range": "± 141674",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5791846,
            "range": "± 161980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10133275,
            "range": "± 122110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 866060809,
            "range": "± 3322875",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 906134703,
            "range": "± 2369628",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3356238720,
            "range": "± 3185099",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 871415955,
            "range": "± 2926446",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 908978068,
            "range": "± 2071221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3366000126,
            "range": "± 6095196",
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
          "id": "4b3bd429d92c3cfecd4375f80955714f01cf153d",
          "message": "Hash all pages to fix issues with executor (#676)",
          "timestamp": "2023-07-06T20:12:26Z",
          "tree_id": "c86dd3d3649dfb2afd92bd3f4491eadea8de19c0",
          "url": "https://github.com/risc0/risc0/commit/4b3bd429d92c3cfecd4375f80955714f01cf153d"
        },
        "date": 1688674931401,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 21330920,
            "range": "± 112756",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 21792387,
            "range": "± 149882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 26273783,
            "range": "± 122641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1338504974,
            "range": "± 6068912",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1369956830,
            "range": "± 30053987",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4541655722,
            "range": "± 56697541",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1349301484,
            "range": "± 17659581",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1388257249,
            "range": "± 21011339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4569596098,
            "range": "± 69685133",
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
          "id": "b35e1faa37fb4b60cf8dd849cf46b14d1713c881",
          "message": "Fix to hashing only dirty pages (#679)",
          "timestamp": "2023-07-09T21:03:00Z",
          "tree_id": "df9a8cbe44bd01371387cb5883ad6aafe1b87f90",
          "url": "https://github.com/risc0/risc0/commit/b35e1faa37fb4b60cf8dd849cf46b14d1713c881"
        },
        "date": 1688938768259,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5261845,
            "range": "± 109255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5650875,
            "range": "± 92437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9975929,
            "range": "± 108755",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 844230918,
            "range": "± 1261821",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 880421119,
            "range": "± 656758",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3333490963,
            "range": "± 3641592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 850967377,
            "range": "± 1606968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 886934288,
            "range": "± 1600316",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3341763005,
            "range": "± 7034243",
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
          "id": "9487793b3c6da2a4554d725c578a5b8fdbfdc432",
          "message": "zkVM: add remote proving by using the bonsai sdk (#677)\n\n* zkVM: add remote proving through the bonsai sdk\r\n\r\nThis change enables generating proofs remotely by using bonsai using the zkVM API.\r\nIn order to execute, add the following environment variables before running the\r\nhost code: BONSAI_API_KEY, BONSAI_API_URL. A new function `default_executor_from_elf` has been added to\r\ngenerate an executor if these environment variables are set.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-07-10T21:19:28Z",
          "tree_id": "bfcd599647d4efdad9d025e6f9c367808ab5c6de",
          "url": "https://github.com/risc0/risc0/commit/9487793b3c6da2a4554d725c578a5b8fdbfdc432"
        },
        "date": 1689025311276,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5194432,
            "range": "± 109037",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5645035,
            "range": "± 86740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10011573,
            "range": "± 109710",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 965012052,
            "range": "± 3040056",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 990223448,
            "range": "± 1618775",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3533886046,
            "range": "± 9511127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 958661393,
            "range": "± 2233057",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 996318812,
            "range": "± 944188",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3506608402,
            "range": "± 5182008",
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
          "id": "789f0062ef14f7eeba976e4b62953ec9fd68b85b",
          "message": "Update metadata for bonsai-sdk",
          "timestamp": "2023-07-10T17:51:07-07:00",
          "tree_id": "18d855c9b6256535d1f8a20c5c06d79104786a0e",
          "url": "https://github.com/risc0/risc0/commit/789f0062ef14f7eeba976e4b62953ec9fd68b85b"
        },
        "date": 1689037417019,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5234922,
            "range": "± 74280",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5711220,
            "range": "± 82323",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10102569,
            "range": "± 141932",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1259822734,
            "range": "± 8420517",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1299027255,
            "range": "± 5968338",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4423421775,
            "range": "± 64321672",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1299853818,
            "range": "± 9380734",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1330356242,
            "range": "± 11282881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4468850094,
            "range": "± 35555798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d8cc276aacaa04219ef57d65c158d4bfdd40c0",
          "message": "Align implementations of image ID and system state struct hash (#689)",
          "timestamp": "2023-07-11T19:39:17-07:00",
          "tree_id": "d8679fbe497baafe5a73c8d31caad925c610e64a",
          "url": "https://github.com/risc0/risc0/commit/a8d8cc276aacaa04219ef57d65c158d4bfdd40c0"
        },
        "date": 1689131821959,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5262988,
            "range": "± 81657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5742389,
            "range": "± 97431",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10273309,
            "range": "± 91435",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 884659783,
            "range": "± 2205604",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 926674890,
            "range": "± 1502133",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3418225764,
            "range": "± 6809904",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 890660998,
            "range": "± 3094203",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 932190954,
            "range": "± 949793",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3425792955,
            "range": "± 6042986",
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
          "id": "e96ab3e11f98766b949a34d3f3330062e63438fe",
          "message": "Fix for #681 (#684)\n\nUse thiserror for public Error types.",
          "timestamp": "2023-07-12T03:57:54Z",
          "tree_id": "22661e0975d06920c835f5354496a4af268caf97",
          "url": "https://github.com/risc0/risc0/commit/e96ab3e11f98766b949a34d3f3330062e63438fe"
        },
        "date": 1689134739700,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5253187,
            "range": "± 71694",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5706955,
            "range": "± 117978",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10092933,
            "range": "± 126980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1644189146,
            "range": "± 18240590",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1655048475,
            "range": "± 135571520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 5780345631,
            "range": "± 163873617",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1846188715,
            "range": "± 169820688",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1681587809,
            "range": "± 5351116",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 5828285840,
            "range": "± 142785671",
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
          "id": "6a357a6f1f56f24413a711819ea8e381271f2163",
          "message": "cargo risczero: update README with reference to remote proving (#690)\n\nThe bonsai quick start guide refers to this documentation as one of 4 options\r\nfor using Bonsai. This README does not contain any mention of remote proving\r\nand could be confusing for users who wish to use cargo risczero to generate a\r\ntemplate for remote proving. Add a simple reference to remote proving to\r\nprovide additional clarity.",
          "timestamp": "2023-07-12T17:13:57Z",
          "tree_id": "a8340f0da81b5879901ef523ccc1d04219216a2c",
          "url": "https://github.com/risc0/risc0/commit/6a357a6f1f56f24413a711819ea8e381271f2163"
        },
        "date": 1689182450593,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 5190683,
            "range": "± 112800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5646001,
            "range": "± 122153",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 10004355,
            "range": "± 93875",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1360258851,
            "range": "± 11665723",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1400529723,
            "range": "± 21747663",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 4796848307,
            "range": "± 13722270",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1383504111,
            "range": "± 29041425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1406296348,
            "range": "± 25684775",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4841266923,
            "range": "± 43565848",
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
        "date": 1682107727240,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6197989035,
            "range": "± 53626447",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6190161632,
            "range": "± 55292187",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1452833350,
            "range": "± 3088890",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1462324064,
            "range": "± 3529213",
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
          "id": "d4ce2f357f5268d75c44de44cbd85291a68f2b4c",
          "message": "Added index to Segment / SegmentReceipt (#525)\n\n* Added index to Segment / SegmentReceipt",
          "timestamp": "2023-04-21T14:47:46-07:00",
          "tree_id": "a933c1b0be7c9f5b4bc2cfe882f2d3740bb7691f",
          "url": "https://github.com/risc0/risc0/commit/d4ce2f357f5268d75c44de44cbd85291a68f2b4c"
        },
        "date": 1682114081069,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6202952737,
            "range": "± 42961856",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 6165384505,
            "range": "± 67460980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1451899534,
            "range": "± 3129152",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1463660259,
            "range": "± 2260347",
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
          "id": "da02f36ee90d0154fe2638c74504c78ba9cf5d13",
          "message": "Improve executor perf (#536)\n\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-04-27T15:12:58-07:00",
          "tree_id": "a5666138c471dd4c57692075f810a3a5bc685317",
          "url": "https://github.com/risc0/risc0/commit/da02f36ee90d0154fe2638c74504c78ba9cf5d13"
        },
        "date": 1682646528845,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1424605416,
            "range": "± 7168901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1434254108,
            "range": "± 6291756",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1587320343,
            "range": "± 2259127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 4852988994,
            "range": "± 48889248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 4881941336,
            "range": "± 61423511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 19423182767,
            "range": "± 86938927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 6255243707,
            "range": "± 38414065",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 6312165101,
            "range": "± 51338877",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 20992477863,
            "range": "± 69142500",
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
          "id": "756ae90ddb09801b6b22a1d37d9431a99b35121d",
          "message": "API adjustment: executor segment callback (#540)",
          "timestamp": "2023-04-28T15:30:39-07:00",
          "tree_id": "eef748a009ed0426a46088cd77e7501b514474d2",
          "url": "https://github.com/risc0/risc0/commit/756ae90ddb09801b6b22a1d37d9431a99b35121d"
        },
        "date": 1682722559805,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1448071450,
            "range": "± 22794248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1448492647,
            "range": "± 3033256",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1593002824,
            "range": "± 15736832",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5671012202,
            "range": "± 70351412",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5706770418,
            "range": "± 30384518",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21529558931,
            "range": "± 135087573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7139967596,
            "range": "± 127619712",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7199146960,
            "range": "± 37016243",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23236433673,
            "range": "± 129301905",
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
          "id": "75a85a85c9b2dd0382acaa60839eda2183d739f0",
          "message": "Change to RISC-V circuit semantics in advance of recursion predicates\n\nThis commit makes a number of changes to make the RISC-V circuit compliant with it's description in the recursion RFC and fixes some potential sources of bugs.\r\n1) Update the circuit to a new version, which \r\n  a) outputs the the full system exit code, and add a user exit code \r\n  b) Makes the output process atomic (part of halt) by doing it during 2 additional reset cycles\r\n  c) Adds an 'input' global and provides a new system call to access it (replacing the output  call)\r\n2) Make the requires updates to the rust zkvm code\r\n3) Correctly resets the journal commitment on pause\r\n4) Update the riscv tests (adding one instruction to set output, which is not required)",
          "timestamp": "2023-05-01T10:48:51-07:00",
          "tree_id": "3280fda6433d2b3bed5d2c39f226cd0ba002de74",
          "url": "https://github.com/risc0/risc0/commit/75a85a85c9b2dd0382acaa60839eda2183d739f0"
        },
        "date": 1682965078499,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1447724862,
            "range": "± 8500550",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1455330504,
            "range": "± 3237767",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1597203366,
            "range": "± 2505602",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5816956358,
            "range": "± 52734668",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5892395825,
            "range": "± 122196536",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22122080932,
            "range": "± 161655379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7224912753,
            "range": "± 129665425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7307243564,
            "range": "± 90699118",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23578955150,
            "range": "± 194080840",
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
          "id": "a755c93f43cda2bf6c6087f9c04a5f40389bd32e",
          "message": "serde: add support to serialize and deserialize 32 bit and 64 bit floating point values (#545)\n\n* serde: add support for f32 and f64",
          "timestamp": "2023-05-03T18:11:51Z",
          "tree_id": "2f9e5a66c7741321fb66b1a7310bc7070235b6c1",
          "url": "https://github.com/risc0/risc0/commit/a755c93f43cda2bf6c6087f9c04a5f40389bd32e"
        },
        "date": 1683139066647,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1431626411,
            "range": "± 4274645",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1450109358,
            "range": "± 6285560",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1604971808,
            "range": "± 1762445",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5739117132,
            "range": "± 127037210",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5774969357,
            "range": "± 50114977",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21930172495,
            "range": "± 128908293",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7185184822,
            "range": "± 75809177",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7240365108,
            "range": "± 69694140",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23510702768,
            "range": "± 126029337",
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
          "id": "602ac572be192cf86526838cb2fcf3ae4c6983e7",
          "message": "Added libm externs to zkvm guest (#543)\n\n* Added libm extern wrappers directly in to guest module\r\n* added tests for libm to ensure things link correctly\r\n* removed old externc-libm workarounds from examples.",
          "timestamp": "2023-05-03T13:43:30-07:00",
          "tree_id": "fe28594b957ecabaf5f34e34af0a9d9b1737424b",
          "url": "https://github.com/risc0/risc0/commit/602ac572be192cf86526838cb2fcf3ae4c6983e7"
        },
        "date": 1683148228629,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1426141965,
            "range": "± 3060865",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1429758897,
            "range": "± 4247402",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1593176282,
            "range": "± 23245385",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5799863821,
            "range": "± 55046971",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5845270417,
            "range": "± 61707321",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22229072629,
            "range": "± 131916689",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7236878536,
            "range": "± 95577497",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7256321460,
            "range": "± 58562225",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23745840183,
            "range": "± 115017209",
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
          "id": "2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4",
          "message": "Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm (#546)\n\n* Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm\r\n\r\n* This allows rust-analyzer to analyze guest code without having to configure it to cross compile for the zkvm target.\r\n* Fixed flaky integration test by remapping absolute pathnames to relative pathnames when compiling the guest\r\n\r\n* Added vscode settings for linkedProjects\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-05-03T21:40:30Z",
          "tree_id": "ec184080d906f6d944c97c8997144346385be4bf",
          "url": "https://github.com/risc0/risc0/commit/2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4"
        },
        "date": 1683151576608,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1437138162,
            "range": "± 5434829",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1442970331,
            "range": "± 12478107",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1582657549,
            "range": "± 19037666",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5817987655,
            "range": "± 58938721",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5866468044,
            "range": "± 58156108",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22126700380,
            "range": "± 79618121",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7227193196,
            "range": "± 41984604",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7309897502,
            "range": "± 77373991",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23695487466,
            "range": "± 104721569",
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
          "id": "a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224",
          "message": "Fix executor by accounting for extra cycles and patch continuations test for CI (#556)",
          "timestamp": "2023-05-10T01:41:13-07:00",
          "tree_id": "873928e6daaf4f6c69b1906cef09eaa3c539b87b",
          "url": "https://github.com/risc0/risc0/commit/a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224"
        },
        "date": 1683709883941,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1435716408,
            "range": "± 4944868",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1443667186,
            "range": "± 3821164",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1588549956,
            "range": "± 27329783",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5829301370,
            "range": "± 94128747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5867420746,
            "range": "± 90649200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22153764766,
            "range": "± 151503928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7275930528,
            "range": "± 59181405",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7326938068,
            "range": "± 97081142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23849186465,
            "range": "± 137937503",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d83c7fef80d0ebb87bc86567447efee633a24c4e",
          "message": "Use crypto-bigint instead of num-bigint (#547)\n\nUse crypto-bigint instead of num-bigint in the executor and in tests.",
          "timestamp": "2023-05-10T17:57:01Z",
          "tree_id": "49821ec6c2aa51a2632203a6f156ec7a6287fccf",
          "url": "https://github.com/risc0/risc0/commit/d83c7fef80d0ebb87bc86567447efee633a24c4e"
        },
        "date": 1683742988451,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1445984974,
            "range": "± 4443251",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1458055072,
            "range": "± 10889821",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1591554674,
            "range": "± 17306860",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5825460592,
            "range": "± 38374116",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5833006851,
            "range": "± 59380129",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22343151674,
            "range": "± 176531447",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7266526950,
            "range": "± 55123702",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7385921140,
            "range": "± 116621308",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23913231406,
            "range": "± 98118720",
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
          "id": "364e3a6c952e00dc0452fa66c521a6a723540860",
          "message": "Update to rust 1.69.0 (#553)",
          "timestamp": "2023-05-10T23:16:16Z",
          "tree_id": "14c7fbf2a8f7fea1bd5897d7ff030e850d38a06c",
          "url": "https://github.com/risc0/risc0/commit/364e3a6c952e00dc0452fa66c521a6a723540860"
        },
        "date": 1683762195535,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1444527464,
            "range": "± 10707450",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1446053135,
            "range": "± 3093874",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1566777222,
            "range": "± 28358374",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5768208701,
            "range": "± 53788883",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5803129249,
            "range": "± 59380319",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21835466355,
            "range": "± 125395432",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7165903332,
            "range": "± 48707526",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7208972837,
            "range": "± 56899460",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23560237356,
            "range": "± 130550388",
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
          "id": "33e6a643ea6d3be0d7c9727ee3dc4007618df8bb",
          "message": "Add `FileSegmentRef` (#560)",
          "timestamp": "2023-05-12T20:48:07Z",
          "tree_id": "9e4b8c5461a6ef96c602828e9430607d48899fa5",
          "url": "https://github.com/risc0/risc0/commit/33e6a643ea6d3be0d7c9727ee3dc4007618df8bb"
        },
        "date": 1683925807104,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 1431225578,
            "range": "± 12402458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 1437451842,
            "range": "± 15299429",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 1561353805,
            "range": "± 2690444",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5812494911,
            "range": "± 49736928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5872069994,
            "range": "± 48560774",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 22137057813,
            "range": "± 109425698",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 7249153526,
            "range": "± 69583020",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 7321288787,
            "range": "± 58474943",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 23792995680,
            "range": "± 52644332",
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
          "id": "a10b511c7ebe1fc48cb89398380616a87407e5b2",
          "message": "Store memory image as a btree of pages. (#561)\n\nThis gives us significant performance gains in both memory usage and run time.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-12T22:42:50Z",
          "tree_id": "46533952222dc8b66ee7918d12d0816ac891c927",
          "url": "https://github.com/risc0/risc0/commit/a10b511c7ebe1fc48cb89398380616a87407e5b2"
        },
        "date": 1683932750920,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55550992,
            "range": "± 1071944",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 77071838,
            "range": "± 481904",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 289395539,
            "range": "± 2263087",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5104706397,
            "range": "± 32519196",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5109523080,
            "range": "± 31759889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21304316501,
            "range": "± 83288171",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5131893881,
            "range": "± 25123481",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5181398672,
            "range": "± 12258671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21576523910,
            "range": "± 134797200",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7a4b7d78300a4682b01c1aec1da43104ce66ebe",
          "message": "Adding feature flag documentation to crate READMEs (#521)\n\nAdds feature flag documentation to top-level README and to `risc0-circuit-rv32im`, `risc0-zkp`, and `risc0-zkvm` crates\r\n\r\n\r\n\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-14T16:17:23-07:00",
          "tree_id": "ffc573d85abe60ee9f6c6b03019bf9923e340997",
          "url": "https://github.com/risc0/risc0/commit/b7a4b7d78300a4682b01c1aec1da43104ce66ebe"
        },
        "date": 1684107685007,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55922686,
            "range": "± 1178494",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 76281415,
            "range": "± 280352",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 283109507,
            "range": "± 1283340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5059488493,
            "range": "± 16591563",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5093737280,
            "range": "± 40371665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 20970743300,
            "range": "± 96147718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5117879618,
            "range": "± 23015935",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5203530823,
            "range": "± 23642035",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21248819592,
            "range": "± 83390422",
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
          "id": "235e75b2ae25e00f8fd381cfb9e9d45444a811e6",
          "message": "Adjust image_id to be the hash of (merkle_root, pc) (#566)",
          "timestamp": "2023-05-18T09:52:27-07:00",
          "tree_id": "11c26a5527c9ce1addff78aeef1d26334f254513",
          "url": "https://github.com/risc0/risc0/commit/235e75b2ae25e00f8fd381cfb9e9d45444a811e6"
        },
        "date": 1684429682320,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55833461,
            "range": "± 1397301",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 77384419,
            "range": "± 287887",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 292051352,
            "range": "± 712222",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5095451623,
            "range": "± 15849642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5139740282,
            "range": "± 19132198",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21373314605,
            "range": "± 151541356",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5138127747,
            "range": "± 46145556",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5204675157,
            "range": "± 15637634",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21531864704,
            "range": "± 144500614",
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
          "id": "48f1a324876848f9f64baf6cb06808106d36c55b",
          "message": "Fix for #569 (#570)",
          "timestamp": "2023-05-18T21:10:32Z",
          "tree_id": "4a2796e5d6f104a3508019af3a90d7c2a33eab79",
          "url": "https://github.com/risc0/risc0/commit/48f1a324876848f9f64baf6cb06808106d36c55b"
        },
        "date": 1684445607491,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55274756,
            "range": "± 735034",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 76315363,
            "range": "± 805188",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 283497193,
            "range": "± 1332514",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5138891503,
            "range": "± 29042773",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5128955569,
            "range": "± 16499811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21204870873,
            "range": "± 136110179",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5162179180,
            "range": "± 18116342",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5231161548,
            "range": "± 13614724",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21468786803,
            "range": "± 118891059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "873c9f8f1c261fa1f1e61b995d24341cc89df254",
          "message": "Make `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\n\nMake `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-18T22:41:33Z",
          "tree_id": "e1cbbfbc1f571173263d6f9a7a40957d2dc4a414",
          "url": "https://github.com/risc0/risc0/commit/873c9f8f1c261fa1f1e61b995d24341cc89df254"
        },
        "date": 1684450580870,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 54711180,
            "range": "± 261266",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 76003066,
            "range": "± 465078",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 281863574,
            "range": "± 1047738",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5072156117,
            "range": "± 19166342",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5104533805,
            "range": "± 18200360",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21076269291,
            "range": "± 68749224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5109163862,
            "range": "± 28922222",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5186965349,
            "range": "± 17658781",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21359727267,
            "range": "± 79785437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9497776ad378bb13e7cc8efb25ef4a734b745a03",
          "message": "Add error string to opcode decode failure in Executor (#571)\n\n Add error string to opcode decode failure in Executor #571",
          "timestamp": "2023-05-19T00:12:47Z",
          "tree_id": "edb1797459573df1c9c9ffe71aeff5f1ed4ff07d",
          "url": "https://github.com/risc0/risc0/commit/9497776ad378bb13e7cc8efb25ef4a734b745a03"
        },
        "date": 1684456077799,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 56392468,
            "range": "± 812052",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 77585710,
            "range": "± 429782",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 293527101,
            "range": "± 1415233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5104530690,
            "range": "± 37968263",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5144726705,
            "range": "± 19458550",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21316832084,
            "range": "± 102639950",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5145262771,
            "range": "± 44214471",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5216271781,
            "range": "± 24915669",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21611159654,
            "range": "± 129752745",
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
          "id": "71f6571239816f617e5461ae2670067f7083a8f9",
          "message": "Workaround to fix self-hosted runners (#577)",
          "timestamp": "2023-05-20T13:12:42-07:00",
          "tree_id": "e720c8391c641dbdbbcd6de6b202f0621f676308",
          "url": "https://github.com/risc0/risc0/commit/71f6571239816f617e5461ae2670067f7083a8f9"
        },
        "date": 1684614951170,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55824558,
            "range": "± 1615051",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 77775025,
            "range": "± 417453",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 284248841,
            "range": "± 1194008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5118026712,
            "range": "± 47839309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5151599486,
            "range": "± 12976388",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21482192460,
            "range": "± 171748740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5179768279,
            "range": "± 26053894",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5222267866,
            "range": "± 29813762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21610096914,
            "range": "± 93873377",
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
          "id": "5750d3237561680d864ea782554839c2aa6cfa85",
          "message": "Improve receipt docs (#576)",
          "timestamp": "2023-05-20T20:39:02Z",
          "tree_id": "1fff671b6441abde3ddef00163962490926003c0",
          "url": "https://github.com/risc0/risc0/commit/5750d3237561680d864ea782554839c2aa6cfa85"
        },
        "date": 1684616051656,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 56010264,
            "range": "± 1610293",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 75517366,
            "range": "± 520112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 281374603,
            "range": "± 1591788",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5088067851,
            "range": "± 34492555",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5129305457,
            "range": "± 21163484",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21339496251,
            "range": "± 121927485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5148406999,
            "range": "± 13255358",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5198106849,
            "range": "± 28177799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21461091210,
            "range": "± 127125396",
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
          "id": "0415638f001e27f2c433080c95f068e20234981c",
          "message": "Minor README updates",
          "timestamp": "2023-05-20T14:26:04-07:00",
          "tree_id": "90a2c2e387347c8bd2431124e8b939f380564567",
          "url": "https://github.com/risc0/risc0/commit/0415638f001e27f2c433080c95f068e20234981c"
        },
        "date": 1684619165251,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55982263,
            "range": "± 213666",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 77211882,
            "range": "± 1522201",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 286927185,
            "range": "± 1087055",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5086342971,
            "range": "± 44591609",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5133526407,
            "range": "± 21370697",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21196450189,
            "range": "± 125445507",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5148192115,
            "range": "± 23480667",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5203357147,
            "range": "± 35982502",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21445222668,
            "range": "± 104923183",
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
          "id": "624fb55ea4456ef6faa5960399a5de882d5cf0f7",
          "message": "Pin bstr to fix build issue (#580)",
          "timestamp": "2023-05-22T15:13:41-07:00",
          "tree_id": "9aacab4d977950b1651c56f99cf0d424d55a7198",
          "url": "https://github.com/risc0/risc0/commit/624fb55ea4456ef6faa5960399a5de882d5cf0f7"
        },
        "date": 1684794531045,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55470325,
            "range": "± 1310143",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 76705248,
            "range": "± 312112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 289061402,
            "range": "± 944307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5066451155,
            "range": "± 22333227",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5104380987,
            "range": "± 30233715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21074094862,
            "range": "± 128357718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5115202147,
            "range": "± 15633505",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5192696914,
            "range": "± 23929013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21313498094,
            "range": "± 121588640",
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
          "id": "e5221ce381fb9092f6a9c510250945ea8645480a",
          "message": "Simplify guest linker configuration (#559)\n\n* Simplify guest linker configuration\r\n\r\nRemove custom linker script in favor of -Ttext= linkeer arg\r\nStack pointer and .text are now based on values in memory.rs instead of a separate linker script.  .data and .bss follow .text.\r\nWhen using \"std\" on the guest, we no longer need to include #![no_main] or risc0_zkvm::entry!(...); just a standard \"pub fn main\" will do. (Unfortunately we still have to force inclusion of the risc0 zkvm crate with \"use risc0_zkvm as _\" if we don't use anything else from it)\r\n\r\n* Add comments with links to how the linker works\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-22T22:54:29Z",
          "tree_id": "c32b7572eca8689c3735f489fe3434176a70a5a8",
          "url": "https://github.com/risc0/risc0/commit/e5221ce381fb9092f6a9c510250945ea8645480a"
        },
        "date": 1684797008912,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57744571,
            "range": "± 1179815",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 79822868,
            "range": "± 744284",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 306598005,
            "range": "± 2814943",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5091020833,
            "range": "± 52833219",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5108699905,
            "range": "± 17981380",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21120888530,
            "range": "± 101513320",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5120415180,
            "range": "± 18090947",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5196415072,
            "range": "± 28519334",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21449377101,
            "range": "± 148565060",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d04249433367beda77de4c3af94bafc2dbda8dd",
          "message": "Adding a few Rust doc examples to Executor and ExecutorEnv (#572)\n\n* adding examples to ExecutorEnv and Executor\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/mod.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* updating executor/executor env doc examples after code review\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\n\n---------\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-24T00:37:14Z",
          "tree_id": "b575f8e37b2710cacfee8059d45402ed32db11c1",
          "url": "https://github.com/risc0/risc0/commit/2d04249433367beda77de4c3af94bafc2dbda8dd"
        },
        "date": 1684889538415,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57328438,
            "range": "± 601155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 79702415,
            "range": "± 432084",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 305120859,
            "range": "± 1587404",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5065235993,
            "range": "± 23201517",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5136400588,
            "range": "± 31561637",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21141649193,
            "range": "± 87253509",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5110603697,
            "range": "± 28290286",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5182553149,
            "range": "± 25377275",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21374396889,
            "range": "± 94660954",
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
          "id": "279b7ddd0d6de49200c6b3377fe2b6c42214f0cb",
          "message": "Include release branches for CI (#583)",
          "timestamp": "2023-05-23T19:14:48-07:00",
          "tree_id": "5be3cd7b038850ccbcda4bd6129f41e7edcdbbd9",
          "url": "https://github.com/risc0/risc0/commit/279b7ddd0d6de49200c6b3377fe2b6c42214f0cb"
        },
        "date": 1684895879124,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57560665,
            "range": "± 1047957",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 80177872,
            "range": "± 297811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 305974212,
            "range": "± 1338069",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5101934928,
            "range": "± 36385274",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5112239139,
            "range": "± 20265602",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21253269305,
            "range": "± 141728528",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5123969049,
            "range": "± 34073616",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5193847777,
            "range": "± 22430977",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21483383386,
            "range": "± 108965482",
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
          "id": "b150cb7692ff0bdc4328938d4a5e138dbf78352f",
          "message": "add test for session limit overflow (#575)\n\nThese tests check for errors generated by the executor when running the executor past the session_limit.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-24T17:55:08Z",
          "tree_id": "798a772899b2d6a03bc04d29058a3a20892bf7ab",
          "url": "https://github.com/risc0/risc0/commit/b150cb7692ff0bdc4328938d4a5e138dbf78352f"
        },
        "date": 1684952118238,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57298856,
            "range": "± 365517",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 80875464,
            "range": "± 1791638",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 309310165,
            "range": "± 1365346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5086841383,
            "range": "± 19599712",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5141623039,
            "range": "± 33230499",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21091949200,
            "range": "± 149551475",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5140221694,
            "range": "± 17436397",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5199750444,
            "range": "± 24045941",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21487498603,
            "range": "± 160696066",
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
          "id": "3a8d4c29cba234d551487feab8b8ae101482e343",
          "message": "Update criterion requirement from 0.4 to 0.5 (#586)\n\nUpdates the requirements on [criterion](https://github.com/bheisler/criterion.rs) to permit the latest version.\r\n- [Changelog](https://github.com/bheisler/criterion.rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/bheisler/criterion.rs/compare/0.4.0...0.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: criterion\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T18:31:23Z",
          "tree_id": "1da6d9009f12986e1d4d9ed81abbeee4717473fc",
          "url": "https://github.com/risc0/risc0/commit/3a8d4c29cba234d551487feab8b8ae101482e343"
        },
        "date": 1685127072506,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 56762366,
            "range": "± 535533",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 79347814,
            "range": "± 2167036",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 304590208,
            "range": "± 1052973",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5080415941,
            "range": "± 49671758",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5123495138,
            "range": "± 45643096",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21176457764,
            "range": "± 140918385",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5129498223,
            "range": "± 17932326",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5198056798,
            "range": "± 13527525",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21421004147,
            "range": "± 167070138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c529b64006382d06024ca5862297b18a77a895c",
          "message": "Enable feature-gated programmatic access to `methods.rs` contents (#585)\n\n* guest-list feature\r\n\r\n* fix formatting\r\n\r\n* fix linebreak and whitespace\r\n\r\n* extra new lines in output\r\n\r\n* Update risc0/build/src/lib.rs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-29T07:39:56Z",
          "tree_id": "3ac951203b0b02ce7abc342218c82a1b3b6cea49",
          "url": "https://github.com/risc0/risc0/commit/7c529b64006382d06024ca5862297b18a77a895c"
        },
        "date": 1685347353951,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57653044,
            "range": "± 704881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 79248327,
            "range": "± 489195",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 306529911,
            "range": "± 2073415",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5090982758,
            "range": "± 21215589",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5108331041,
            "range": "± 33107974",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21013465004,
            "range": "± 89684901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5117258553,
            "range": "± 60787425",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5194534769,
            "range": "± 20114110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21273968963,
            "range": "± 89730698",
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
          "id": "3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1",
          "message": "Fix for #594 (#597)",
          "timestamp": "2023-05-31T21:06:26-07:00",
          "tree_id": "8c6e9d94b9141c66c4d6a142d9fa1dd7313f515b",
          "url": "https://github.com/risc0/risc0/commit/3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1"
        },
        "date": 1685593666312,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 58291642,
            "range": "± 1017135",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 81235615,
            "range": "± 414523",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 317484541,
            "range": "± 1310962",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5048170141,
            "range": "± 38371883",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5100708124,
            "range": "± 30284173",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21032499802,
            "range": "± 91802638",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5098079006,
            "range": "± 32206898",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5151411488,
            "range": "± 23860514",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21306468898,
            "range": "± 88138620",
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
          "id": "fc33ed9f343eaaf2d52770d0d72713b151c75cc2",
          "message": "Add test vectors and Make rust implementation of IOP match cirgen implementation (#599)",
          "timestamp": "2023-06-05T23:49:05Z",
          "tree_id": "9b783988bfa231e8d75b039e0d2eed0f9d45c720",
          "url": "https://github.com/risc0/risc0/commit/fc33ed9f343eaaf2d52770d0d72713b151c75cc2"
        },
        "date": 1686010497073,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57067300,
            "range": "± 372813",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 80365478,
            "range": "± 1639310",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 306359366,
            "range": "± 2066029",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5137940860,
            "range": "± 31502684",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5176064232,
            "range": "± 21389857",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21422971251,
            "range": "± 84888642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5174762685,
            "range": "± 26730238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5242320658,
            "range": "± 20195922",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21541965157,
            "range": "± 148078796",
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
          "id": "396be373bf6e2f6e997c8a4ea473fee125107c8f",
          "message": "Rebuild on CUDA related env vars (#605)\n\nTriggers rebuilds for couple more env vars if they change between\r\ninvokes of the kernel build",
          "timestamp": "2023-06-05T17:37:19-07:00",
          "tree_id": "aa37e37deda2f047a3466e363dfe21c0d14ad54e",
          "url": "https://github.com/risc0/risc0/commit/396be373bf6e2f6e997c8a4ea473fee125107c8f"
        },
        "date": 1686067416929,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 61477966,
            "range": "± 1187248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 84526075,
            "range": "± 422552",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 307934698,
            "range": "± 756990",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5099057665,
            "range": "± 23654063",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5131600666,
            "range": "± 15509309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21188756469,
            "range": "± 123690306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5131380751,
            "range": "± 45063947",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5190749226,
            "range": "± 36004056",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21408748099,
            "range": "± 66471955",
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
          "id": "a36264a8961f2c7b9ba730c38be457f48ee3b570",
          "message": "Rename examples/evm -> examples/zkevm-demo (#611)",
          "timestamp": "2023-06-06T16:16:15-07:00",
          "tree_id": "8269e9f92e83cb28e18cccb8d53bfba289573944",
          "url": "https://github.com/risc0/risc0/commit/a36264a8961f2c7b9ba730c38be457f48ee3b570"
        },
        "date": 1686094794326,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 57736762,
            "range": "± 1372977",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 79233501,
            "range": "± 475312",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 304288784,
            "range": "± 1862914",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5123910764,
            "range": "± 31335112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5157323995,
            "range": "± 18630520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21289215841,
            "range": "± 105662596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5157250920,
            "range": "± 20568540",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5225099624,
            "range": "± 24612272",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21590331339,
            "range": "± 129512160",
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
          "id": "2192af4b426526eb0f88248bbb8eddc7ce5ca2a9",
          "message": "Publish Recursion Verifier (#603)\n\nThis change moves the recursion verifier from the private repository. This is\r\ndone by splitting the `CircuitDef` trait and adding files used by the recursion\r\nverifier.\r\n\r\nThe CircuitDef is a trait that is implemented by rust code generated from the\r\ncircuit for both the verifier and the prover. In order to split off the recursive\r\nverifier, we need to split this trait into two parts: one that is used in both the\r\nprover and the verifier and one that is used only in the prover. The former trait\r\ncalled `CircuitCoreDef` is implemented for the recursive verifier which requires\r\ngenerated rust files from the recursion circuit.",
          "timestamp": "2023-06-07T02:44:31Z",
          "tree_id": "a9fb25c72d15b572c0ace2f471a8394609cd5883",
          "url": "https://github.com/risc0/risc0/commit/2192af4b426526eb0f88248bbb8eddc7ce5ca2a9"
        },
        "date": 1686107319467,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 59478751,
            "range": "± 636246",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 81724233,
            "range": "± 615044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 326644535,
            "range": "± 1365723",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5109667092,
            "range": "± 37912127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5121750148,
            "range": "± 22449230",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21161046786,
            "range": "± 71441008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5140194921,
            "range": "± 21305629",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5214318710,
            "range": "± 33294199",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21398573988,
            "range": "± 82153487",
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
          "id": "222c36b7005639e08817083d0e3744a6ef8f7d39",
          "message": "Improve execution performance (#615)",
          "timestamp": "2023-06-08T18:03:59Z",
          "tree_id": "4479b0ea99389e7f399a8d5adf375136770ec3ae",
          "url": "https://github.com/risc0/risc0/commit/222c36b7005639e08817083d0e3744a6ef8f7d39"
        },
        "date": 1686252955664,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55773236,
            "range": "± 1170477",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 69110698,
            "range": "± 325047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 199057068,
            "range": "± 1299198",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5098222853,
            "range": "± 33626829",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5146388376,
            "range": "± 18497533",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21171841682,
            "range": "± 78488261",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5154965676,
            "range": "± 17321953",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5203081807,
            "range": "± 48190248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21443096887,
            "range": "± 87576058",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4e5acea2fbe6393f136d12d02c92d28f4c9a379",
          "message": "Handle alignment errors in deserialization (#600)",
          "timestamp": "2023-06-08T20:49:46Z",
          "tree_id": "37fab60a79a778088586e7a07528e5f63f61ba93",
          "url": "https://github.com/risc0/risc0/commit/a4e5acea2fbe6393f136d12d02c92d28f4c9a379"
        },
        "date": 1686258859639,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 56258485,
            "range": "± 1238522",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 69530498,
            "range": "± 365482",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 205159305,
            "range": "± 1679601",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5087498748,
            "range": "± 26880202",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5137606830,
            "range": "± 36704583",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21031366574,
            "range": "± 87299573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5136946192,
            "range": "± 19848175",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5202147649,
            "range": "± 16938080",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21392604604,
            "range": "± 141299188",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "intoverflow@gmail.com",
            "name": "Tim Carstens",
            "username": "intoverflow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "318ae6056faf511bb1bf57bea8187acd30e181ee",
          "message": "Make session_limit optional (#608)",
          "timestamp": "2023-06-09T01:16:25Z",
          "tree_id": "49c2f3f76fd108b7f2fc2ce184fc9885c3a3d717",
          "url": "https://github.com/risc0/risc0/commit/318ae6056faf511bb1bf57bea8187acd30e181ee"
        },
        "date": 1686274271408,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55198732,
            "range": "± 544968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 69121218,
            "range": "± 253296",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 206911429,
            "range": "± 1095409",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5115794599,
            "range": "± 19123430",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5161009525,
            "range": "± 21364814",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21165829339,
            "range": "± 125499030",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5164526924,
            "range": "± 22641703",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5216081035,
            "range": "± 43297662",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21399060929,
            "range": "± 126234198",
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
          "id": "f448fbd730b9aba8fab79ba6fd67549caddb85cf",
          "message": "implement SessionReceipt trait (#616)\n\nThis pull request implements the `SessionReceipt` trait that is implemented by\r\n`SessionRollupReceipt` and `SessionFlatReceipt` (also known as the old\r\n`SessionReceipt`). This is useful because it allows the host code to call verify\r\nand to get the journal contents regardless of the concrete type of session\r\nreceipt. This trait is practical when a developer has a code base that uses\r\nbonsai resulting in a `SessionRollupReceipt` or from a local prover resulting in a\r\n`SessionFlatReceipt`.  Examples have been updated to use this new trait. The main\r\ndifference is to replace existing `receipt.journal` with `receipt.get_journal()`\r\nand `receipt.verify(XXXX_ID)` with `receipt.verify(XXXX_ID.into())`.",
          "timestamp": "2023-06-13T05:05:10Z",
          "tree_id": "b2caadff7b30c021a2ee2931744b0ede22f077cd",
          "url": "https://github.com/risc0/risc0/commit/f448fbd730b9aba8fab79ba6fd67549caddb85cf"
        },
        "date": 1686634271807,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 55108282,
            "range": "± 537617",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 67849585,
            "range": "± 572313",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 195141141,
            "range": "± 1682217",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5061610455,
            "range": "± 27567450",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5100423589,
            "range": "± 14673372",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21092655915,
            "range": "± 65847083",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5124146562,
            "range": "± 32308333",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5183152805,
            "range": "± 29993324",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21267090423,
            "range": "± 87092614",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cbff2a0b6d781d7cb3e67af935db4234f13f59a",
          "message": "Add ECDSA verification example using bigint acceleration support (#590)\n\nThis PR adds an ECDSA verification example, which shows how to use the patched k256 library to get accelerated signature verification on secp256k1 in the zkVM guest.\r\n\r\nAs a dependency for the k256 patch, it also updates the allocator to support alignments that are larger than a word. (In particular, the constant-time lookup table implementation uses a 1024-byte alignment). risc0/rust#11 is related to this PR. Based on work by @shkoo.\r\n\r\nAs a drive-by change, this PR includes an additional check in the executor that execution did not previously end with ExitCode::Halted, which is a non-resumable state. I added this after running into this error by accident and having a hard time debugging it based on the errors I received.",
          "timestamp": "2023-06-13T22:16:09Z",
          "tree_id": "8d22cdb71a1532c9e515ca5012a2867ea35080fa",
          "url": "https://github.com/risc0/risc0/commit/7cbff2a0b6d781d7cb3e67af935db4234f13f59a"
        },
        "date": 1686696042758,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 56277286,
            "range": "± 276702",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 69788831,
            "range": "± 993341",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 202458878,
            "range": "± 1275519",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 5078438071,
            "range": "± 25929518",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 5091135891,
            "range": "± 17023149",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 21123030978,
            "range": "± 154010407",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 5135563285,
            "range": "± 28626704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 5177649365,
            "range": "± 20133523",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 21294233720,
            "range": "± 116783600",
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
          "id": "78c2d1a9279b33500f52b363debfe7019d2f9b5a",
          "message": "Improve executor performance (#644)",
          "timestamp": "2023-06-20T11:35:04-07:00",
          "tree_id": "a64f3e325dd557eb47112cabfefacd6f169a9c4a",
          "url": "https://github.com/risc0/risc0/commit/78c2d1a9279b33500f52b363debfe7019d2f9b5a"
        },
        "date": 1687287084199,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17118045,
            "range": "± 168561",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 17509297,
            "range": "± 152132",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 21099533,
            "range": "± 137076",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1686964884,
            "range": "± 78354867",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1719425441,
            "range": "± 5222475",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6367463398,
            "range": "± 278082162",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1725589452,
            "range": "± 30097140",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1753469620,
            "range": "± 196149458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6397840779,
            "range": "± 219017597",
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
          "id": "78c2d1a9279b33500f52b363debfe7019d2f9b5a",
          "message": "Improve executor performance (#644)",
          "timestamp": "2023-06-20T11:35:04-07:00",
          "tree_id": "a64f3e325dd557eb47112cabfefacd6f169a9c4a",
          "url": "https://github.com/risc0/risc0/commit/78c2d1a9279b33500f52b363debfe7019d2f9b5a"
        },
        "date": 1687289860740,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 16988201,
            "range": "± 218795",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 17415007,
            "range": "± 148305",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 21207359,
            "range": "± 141429",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1705048302,
            "range": "± 83582437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1726213820,
            "range": "± 7632577",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6369126915,
            "range": "± 166725599",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1723740693,
            "range": "± 150807330",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1746925897,
            "range": "± 17190133",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6387294001,
            "range": "± 352494177",
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
          "id": "6bf7ccb450961df4cb34406af44473a0a5f6808c",
          "message": "Cleanup recursion structs (#632)\n\n* ReceiptMeta: use ExitCode instead of two u8s\r\n\r\nThis is a first step in merging ReceiptMeta and ReceiptMetadata to a single\r\nstruct. The next change will remove ReceiptMeta in favor of ReceiptMetadata\r\n\r\n* rename field in recursion::receipt::SystemState so it matches zkvm::receipt::SystemState\r\n\r\n* recursion: remove duplicate `SystemState` struct\r\n\r\nThis struct was duplicated in the private repo. Since there is no need for\r\ndupilcation, this struct has been removed.\r\n\r\n* Recursion: remove duplicate ReceiptMeta struct\r\n\r\nThis change removes the duplicated ReceiptMetadata struct and instead uses a\r\ncommon ReceiptMetadata struct in `risc0_zkvm::receipt`\r\n\r\n* Move `exit_code` funtions to `risc0_zkvm::receipt`\r\n\r\nThese functions can be useful in `risc0_zkvm::receipt` as well as the recursion\r\nmodule.\r\n\r\n* clean up use declarations\r\n\r\n* Fix documentation\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-06-21T22:48:27Z",
          "tree_id": "8f8461038291162ade9c5cff0f58299f6e27311f",
          "url": "https://github.com/risc0/risc0/commit/6bf7ccb450961df4cb34406af44473a0a5f6808c"
        },
        "date": 1687388259631,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17896187,
            "range": "± 215612",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 18063629,
            "range": "± 188053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 21756601,
            "range": "± 129623",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2935520090,
            "range": "± 344407194",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2629205289,
            "range": "± 324193692",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7364887573,
            "range": "± 191327345",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2460840126,
            "range": "± 445742356",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2740134774,
            "range": "± 502284675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7414397463,
            "range": "± 475610558",
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
          "id": "6b4286a4bb329a71e536596e85e6d7e4f191e7f2",
          "message": "Improve executor performance (#651)",
          "timestamp": "2023-06-23T21:41:16Z",
          "tree_id": "e0dc69ead6ea68890af96a1b2a8596cb8c2b78f1",
          "url": "https://github.com/risc0/risc0/commit/6b4286a4bb329a71e536596e85e6d7e4f191e7f2"
        },
        "date": 1687556900282,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4827349,
            "range": "± 63135",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5356967,
            "range": "± 138313",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9079460,
            "range": "± 94588",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2002730678,
            "range": "± 255648813",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1918807956,
            "range": "± 182208629",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6906598414,
            "range": "± 370330762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2542456212,
            "range": "± 380459759",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2474394343,
            "range": "± 417733017",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7495701485,
            "range": "± 410621524",
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
          "id": "d79ab62274aebe670b461ab06b8477953182972c",
          "message": "Improve CUDA performance (#653)\n\n* Improve CUDA performance\r\n\r\n* Drop assumption of 256 block size",
          "timestamp": "2023-06-25T16:48:58-04:00",
          "tree_id": "3e33e2e53aad0982355d4ca90b1c71e419e0b3d9",
          "url": "https://github.com/risc0/risc0/commit/d79ab62274aebe670b461ab06b8477953182972c"
        },
        "date": 1687727264537,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4977842,
            "range": "± 230719",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5268172,
            "range": "± 196066",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 11360211,
            "range": "± 1197238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2238966425,
            "range": "± 508411240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2201682510,
            "range": "± 233969276",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6769146534,
            "range": "± 415969304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1667173397,
            "range": "± 30908004",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1689452650,
            "range": "± 56468233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6367519381,
            "range": "± 206002561",
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
          "id": "a39561546dd5b54788b686afd125db687f40e84a",
          "message": "Drop use of unified memory for CUDA (#654)\n\n* Drop use of unified memory for CUDA\r\n\r\n* Toggle for unified memory",
          "timestamp": "2023-06-25T19:51:57-07:00",
          "tree_id": "09e58e6c2630f4c7d714f3538793467099a07804",
          "url": "https://github.com/risc0/risc0/commit/a39561546dd5b54788b686afd125db687f40e84a"
        },
        "date": 1687748480151,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4857001,
            "range": "± 471329",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5444327,
            "range": "± 739500",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9109134,
            "range": "± 391036",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2769417986,
            "range": "± 1179731573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2625953135,
            "range": "± 1586800054",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7668225821,
            "range": "± 1295151368",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 4386548581,
            "range": "± 502121766",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 3652319101,
            "range": "± 668636019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7559502053,
            "range": "± 648540533",
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
          "id": "44c67ee83a021686b95722b30b8b1f9b1dc81b7e",
          "message": "Update predicates (#657)",
          "timestamp": "2023-06-28T01:00:51Z",
          "tree_id": "a8f6ca65054794eb7b8932c3668f2430108e4083",
          "url": "https://github.com/risc0/risc0/commit/44c67ee83a021686b95722b30b8b1f9b1dc81b7e"
        },
        "date": 1687915065404,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4817178,
            "range": "± 151174",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5205991,
            "range": "± 82320",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9027537,
            "range": "± 128600",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1664802958,
            "range": "± 4866422",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1699197697,
            "range": "± 29824716",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6359524868,
            "range": "± 161043998",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1684803075,
            "range": "± 22852851",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1704031475,
            "range": "± 7802152",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6402393530,
            "range": "± 248214095",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "austinabell8@gmail.com",
            "name": "Austin Abell",
            "username": "austinabell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691d7e03a9b260d0b6208f9b68096ae11bff43ff",
          "message": "chore: remove unused Once type (#660)",
          "timestamp": "2023-06-28T17:24:34Z",
          "tree_id": "8ff89aa5b6155254cb20901c0cd98ecd3e458085",
          "url": "https://github.com/risc0/risc0/commit/691d7e03a9b260d0b6208f9b68096ae11bff43ff"
        },
        "date": 1687974105340,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4794496,
            "range": "± 291226",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5177120,
            "range": "± 90949",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 8915116,
            "range": "± 162138",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1648848439,
            "range": "± 89916847",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1671776783,
            "range": "± 102965318",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6312562506,
            "range": "± 270494761",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1661321829,
            "range": "± 8742454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1690352806,
            "range": "± 62799790",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6323511834,
            "range": "± 138068012",
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
          "id": "f3298019d7b4a412c4d4ff956da793fa032f11eb",
          "message": "Update metal to 0.25 (#661)",
          "timestamp": "2023-06-28T21:09:09Z",
          "tree_id": "19c2e29c05142c34067e3ebdcfeca781a88d848b",
          "url": "https://github.com/risc0/risc0/commit/f3298019d7b4a412c4d4ff956da793fa032f11eb"
        },
        "date": 1687987637296,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4753775,
            "range": "± 115629",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5245100,
            "range": "± 61789",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9099343,
            "range": "± 866279",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2536867745,
            "range": "± 681449043",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2169682811,
            "range": "± 357528766",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6857507466,
            "range": "± 236707248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2071728787,
            "range": "± 301747268",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2041607015,
            "range": "± 390194424",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6866080469,
            "range": "± 736240045",
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
          "id": "3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c",
          "message": "Update num-derive requirement from 0.3 to 0.4 (#663)\n\nUpdates the requirements on [num-derive](https://github.com/rust-num/num-derive) to permit the latest version.\r\n- [Changelog](https://github.com/rust-num/num-derive/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/rust-num/num-derive/compare/num-derive-0.3.0...num-derive-0.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: num-derive\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T10:57:43-07:00",
          "tree_id": "489d6b92cfd5ea9b3cfc8eca582da7a1a241fd75",
          "url": "https://github.com/risc0/risc0/commit/3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c"
        },
        "date": 1688148838125,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4727011,
            "range": "± 86292",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5171385,
            "range": "± 92616",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 8863292,
            "range": "± 196109",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1640524838,
            "range": "± 6288484",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1672709429,
            "range": "± 35135013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6315220576,
            "range": "± 172855746",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1661880387,
            "range": "± 78919240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1686384945,
            "range": "± 7829005",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6328826925,
            "range": "± 187755966",
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
          "id": "3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1",
          "message": "Receipt unification (#666)\n\nRefactor zkp and zkvm such that receipt types (SegmentReceipt and RollupReceipt) implements a Receipt trait which allows the SessionReceipt to hold segments or rollups.\r\n\r\nThis allows a receipt to optionally have a hash function name which is stamped at creation time. Later, a verifier can use this information to select the appropriate matching hash function.\r\n\r\nKey changes:\r\n\r\n* Adjust HashFn and Rng to be object-safe traits (which means removing generics in function singatures, and requiring a self receiver).\r\n* Add RngFactory to support creation of Rng\r\n* Adjust HashSuite to be a struct containing a trait-object of HashFn and Rng.\r\n* Adjust the Hal to replace HashSuite generics with the new struct.\r\n* Update prove and verify",
          "timestamp": "2023-07-05T15:41:04-07:00",
          "tree_id": "56da9a95063aad6f1f9984096c41bfd5be1e0e46",
          "url": "https://github.com/risc0/risc0/commit/3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1"
        },
        "date": 1688597915630,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4869421,
            "range": "± 112106",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5183854,
            "range": "± 122870",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 8998162,
            "range": "± 97520",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2013392273,
            "range": "± 271036614",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2079721095,
            "range": "± 194802541",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7337777741,
            "range": "± 528115709",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2407468820,
            "range": "± 333509665",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2655644836,
            "range": "± 308394595",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7648214492,
            "range": "± 592253255",
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
          "id": "4b3bd429d92c3cfecd4375f80955714f01cf153d",
          "message": "Hash all pages to fix issues with executor (#676)",
          "timestamp": "2023-07-06T20:12:26Z",
          "tree_id": "c86dd3d3649dfb2afd92bd3f4491eadea8de19c0",
          "url": "https://github.com/risc0/risc0/commit/4b3bd429d92c3cfecd4375f80955714f01cf153d"
        },
        "date": 1688674795696,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 17070319,
            "range": "± 178919",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 17446794,
            "range": "± 217678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 21157560,
            "range": "± 227125",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2017305363,
            "range": "± 306536767",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2083431680,
            "range": "± 209658008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7682973748,
            "range": "± 574683459",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2479745761,
            "range": "± 522399686",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2466319670,
            "range": "± 259850411",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7888781032,
            "range": "± 671264449",
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
          "id": "b35e1faa37fb4b60cf8dd849cf46b14d1713c881",
          "message": "Fix to hashing only dirty pages (#679)",
          "timestamp": "2023-07-09T21:03:00Z",
          "tree_id": "df9a8cbe44bd01371387cb5883ad6aafe1b87f90",
          "url": "https://github.com/risc0/risc0/commit/b35e1faa37fb4b60cf8dd849cf46b14d1713c881"
        },
        "date": 1688937626308,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4762263,
            "range": "± 146619",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5163348,
            "range": "± 79775",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9004527,
            "range": "± 117560",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 1625383466,
            "range": "± 64324233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1658029748,
            "range": "± 5489772",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6337511307,
            "range": "± 41514697",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1651714651,
            "range": "± 20554306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1670178547,
            "range": "± 65311681",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6376915410,
            "range": "± 99812607",
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
          "id": "9487793b3c6da2a4554d725c578a5b8fdbfdc432",
          "message": "zkVM: add remote proving by using the bonsai sdk (#677)\n\n* zkVM: add remote proving through the bonsai sdk\r\n\r\nThis change enables generating proofs remotely by using bonsai using the zkVM API.\r\nIn order to execute, add the following environment variables before running the\r\nhost code: BONSAI_API_KEY, BONSAI_API_URL. A new function `default_executor_from_elf` has been added to\r\ngenerate an executor if these environment variables are set.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-07-10T21:19:28Z",
          "tree_id": "bfcd599647d4efdad9d025e6f9c367808ab5c6de",
          "url": "https://github.com/risc0/risc0/commit/9487793b3c6da2a4554d725c578a5b8fdbfdc432"
        },
        "date": 1689025195679,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4911083,
            "range": "± 1240017",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5410068,
            "range": "± 266387",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9103456,
            "range": "± 457757",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2143254783,
            "range": "± 223552350",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2232528077,
            "range": "± 342565178",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 6945067524,
            "range": "± 253079311",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2057078766,
            "range": "± 181814623",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2125916211,
            "range": "± 244778514",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 6949977012,
            "range": "± 230669059",
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
          "id": "789f0062ef14f7eeba976e4b62953ec9fd68b85b",
          "message": "Update metadata for bonsai-sdk",
          "timestamp": "2023-07-10T17:51:07-07:00",
          "tree_id": "18d855c9b6256535d1f8a20c5c06d79104786a0e",
          "url": "https://github.com/risc0/risc0/commit/789f0062ef14f7eeba976e4b62953ec9fd68b85b"
        },
        "date": 1689037589207,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4861180,
            "range": "± 121818",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5267762,
            "range": "± 175127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 8873179,
            "range": "± 115237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2650093462,
            "range": "± 497526793",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2677545645,
            "range": "± 623611855",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7681272580,
            "range": "± 626692556",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2573192156,
            "range": "± 255688062",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2469788813,
            "range": "± 458469018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7720843346,
            "range": "± 711793425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d8cc276aacaa04219ef57d65c158d4bfdd40c0",
          "message": "Align implementations of image ID and system state struct hash (#689)",
          "timestamp": "2023-07-11T19:39:17-07:00",
          "tree_id": "d8679fbe497baafe5a73c8d31caad925c610e64a",
          "url": "https://github.com/risc0/risc0/commit/a8d8cc276aacaa04219ef57d65c158d4bfdd40c0"
        },
        "date": 1689130696703,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4781944,
            "range": "± 68893",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5211400,
            "range": "± 142917",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 8947298,
            "range": "± 190076",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2315356731,
            "range": "± 220756722",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 2487557910,
            "range": "± 421336534",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 9056752088,
            "range": "± 448638034",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2381337301,
            "range": "± 1323164864",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2826086215,
            "range": "± 1106168630",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 9425600898,
            "range": "± 201336197",
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
          "id": "e96ab3e11f98766b949a34d3f3330062e63438fe",
          "message": "Fix for #681 (#684)\n\nUse thiserror for public Error types.",
          "timestamp": "2023-07-12T03:57:54Z",
          "tree_id": "22661e0975d06920c835f5354496a4af268caf97",
          "url": "https://github.com/risc0/risc0/commit/e96ab3e11f98766b949a34d3f3330062e63438fe"
        },
        "date": 1689134842371,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 4830398,
            "range": "± 110477",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 5376182,
            "range": "± 190081",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 9050278,
            "range": "± 93698",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 2041105770,
            "range": "± 315023680",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 1919676157,
            "range": "± 305830003",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 7095034491,
            "range": "± 533237437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 2517667780,
            "range": "± 444832532",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 2592097307,
            "range": "± 503478389",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 7673396802,
            "range": "± 551639414",
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
          "id": "d4ce2f357f5268d75c44de44cbd85291a68f2b4c",
          "message": "Added index to Segment / SegmentReceipt (#525)\n\n* Added index to Segment / SegmentReceipt",
          "timestamp": "2023-04-21T14:47:46-07:00",
          "tree_id": "a933c1b0be7c9f5b4bc2cfe882f2d3740bb7691f",
          "url": "https://github.com/risc0/risc0/commit/d4ce2f357f5268d75c44de44cbd85291a68f2b4c"
        },
        "date": 1682114071304,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1482827333,
            "range": "± 8316150",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1492025458,
            "range": "± 4167743",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 691092458,
            "range": "± 1400501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 693634875,
            "range": "± 3371999",
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
          "id": "da02f36ee90d0154fe2638c74504c78ba9cf5d13",
          "message": "Improve executor perf (#536)\n\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-04-27T15:12:58-07:00",
          "tree_id": "a5666138c471dd4c57692075f810a3a5bc685317",
          "url": "https://github.com/risc0/risc0/commit/da02f36ee90d0154fe2638c74504c78ba9cf5d13"
        },
        "date": 1682645315845,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685516333,
            "range": "± 1457493",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691624916,
            "range": "± 1499578",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 753075145,
            "range": "± 1089724",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 794230291,
            "range": "± 8227265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 812745895,
            "range": "± 2300201",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3015354604,
            "range": "± 9259107",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1498319833,
            "range": "± 4564255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1526614416,
            "range": "± 4824839",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3802162791,
            "range": "± 9930425",
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
          "id": "756ae90ddb09801b6b22a1d37d9431a99b35121d",
          "message": "API adjustment: executor segment callback (#540)",
          "timestamp": "2023-04-28T15:30:39-07:00",
          "tree_id": "eef748a009ed0426a46088cd77e7501b514474d2",
          "url": "https://github.com/risc0/risc0/commit/756ae90ddb09801b6b22a1d37d9431a99b35121d"
        },
        "date": 1682721679027,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685693708,
            "range": "± 617283",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691298770,
            "range": "± 1081861",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 751905875,
            "range": "± 1471806",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 893169416,
            "range": "± 6769438",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 910626166,
            "range": "± 3460159",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3349429062,
            "range": "± 7186982",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1609156562,
            "range": "± 5521917",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1633030041,
            "range": "± 6496027",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4090076083,
            "range": "± 17933448",
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
          "id": "75a85a85c9b2dd0382acaa60839eda2183d739f0",
          "message": "Change to RISC-V circuit semantics in advance of recursion predicates\n\nThis commit makes a number of changes to make the RISC-V circuit compliant with it's description in the recursion RFC and fixes some potential sources of bugs.\r\n1) Update the circuit to a new version, which \r\n  a) outputs the the full system exit code, and add a user exit code \r\n  b) Makes the output process atomic (part of halt) by doing it during 2 additional reset cycles\r\n  c) Adds an 'input' global and provides a new system call to access it (replacing the output  call)\r\n2) Make the requires updates to the rust zkvm code\r\n3) Correctly resets the journal commitment on pause\r\n4) Update the riscv tests (adding one instruction to set output, which is not required)",
          "timestamp": "2023-05-01T10:48:51-07:00",
          "tree_id": "3280fda6433d2b3bed5d2c39f226cd0ba002de74",
          "url": "https://github.com/risc0/risc0/commit/75a85a85c9b2dd0382acaa60839eda2183d739f0"
        },
        "date": 1682964480030,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 686016791,
            "range": "± 1228853",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691309479,
            "range": "± 1429820",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 754900895,
            "range": "± 654505",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 910202791,
            "range": "± 3310889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 926480541,
            "range": "± 3974465",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3403089812,
            "range": "± 7944944",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1620307791,
            "range": "± 7042911",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1651994916,
            "range": "± 7633812",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4156822270,
            "range": "± 13022926",
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
          "id": "a755c93f43cda2bf6c6087f9c04a5f40389bd32e",
          "message": "serde: add support to serialize and deserialize 32 bit and 64 bit floating point values (#545)\n\n* serde: add support for f32 and f64",
          "timestamp": "2023-05-03T18:11:51Z",
          "tree_id": "2f9e5a66c7741321fb66b1a7310bc7070235b6c1",
          "url": "https://github.com/risc0/risc0/commit/a755c93f43cda2bf6c6087f9c04a5f40389bd32e"
        },
        "date": 1683138047471,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685667583,
            "range": "± 1540879",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691421770,
            "range": "± 1155351",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 756012604,
            "range": "± 1257855",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 910072687,
            "range": "± 3205565",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 927721791,
            "range": "± 4293309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3391396062,
            "range": "± 8459297",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1628571291,
            "range": "± 5600625",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1650615041,
            "range": "± 4766069",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4145166312,
            "range": "± 13907387",
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
          "id": "602ac572be192cf86526838cb2fcf3ae4c6983e7",
          "message": "Added libm externs to zkvm guest (#543)\n\n* Added libm extern wrappers directly in to guest module\r\n* added tests for libm to ensure things link correctly\r\n* removed old externc-libm workarounds from examples.",
          "timestamp": "2023-05-03T13:43:30-07:00",
          "tree_id": "fe28594b957ecabaf5f34e34af0a9d9b1737424b",
          "url": "https://github.com/risc0/risc0/commit/602ac572be192cf86526838cb2fcf3ae4c6983e7"
        },
        "date": 1683147264997,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 686475437,
            "range": "± 2296867",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 692543749,
            "range": "± 722535",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 754788208,
            "range": "± 1444340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 914540499,
            "range": "± 6427034",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 935916666,
            "range": "± 4618196",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3411764104,
            "range": "± 6392650",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1625092916,
            "range": "± 5172811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1650880437,
            "range": "± 8499444",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4160955500,
            "range": "± 16911217",
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
          "id": "2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4",
          "message": "Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm (#546)\n\n* Always provide risc0_zkvm::guest module for easier analyzing, even when not on target=zkvm\r\n\r\n* This allows rust-analyzer to analyze guest code without having to configure it to cross compile for the zkvm target.\r\n* Fixed flaky integration test by remapping absolute pathnames to relative pathnames when compiling the guest\r\n\r\n* Added vscode settings for linkedProjects\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Parker Thompson <parker@risczero.com>",
          "timestamp": "2023-05-03T21:40:30Z",
          "tree_id": "ec184080d906f6d944c97c8997144346385be4bf",
          "url": "https://github.com/risc0/risc0/commit/2ee4d20a829c8c13fcd409c1c83506dc76e2b2e4"
        },
        "date": 1683151146018,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 704241625,
            "range": "± 1401587",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691301395,
            "range": "± 2788545",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 756507374,
            "range": "± 2006417",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 914066728,
            "range": "± 5296896",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 934112208,
            "range": "± 2422927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3415378708,
            "range": "± 17938158",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1626991020,
            "range": "± 4554702",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1655986145,
            "range": "± 6184816",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4177027499,
            "range": "± 20478732",
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
          "id": "a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224",
          "message": "Fix executor by accounting for extra cycles and patch continuations test for CI (#556)",
          "timestamp": "2023-05-10T01:41:13-07:00",
          "tree_id": "873928e6daaf4f6c69b1906cef09eaa3c539b87b",
          "url": "https://github.com/risc0/risc0/commit/a0f8ce3aa88df84d7a5613b2fa58c16a6a61d224"
        },
        "date": 1683708719564,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685524354,
            "range": "± 1279613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 692553020,
            "range": "± 1760610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 753710875,
            "range": "± 1930049",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 905762499,
            "range": "± 5123110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 926501603,
            "range": "± 4645656",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3399812958,
            "range": "± 10943985",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1626572666,
            "range": "± 8817931",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1645623541,
            "range": "± 11421580",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4153084395,
            "range": "± 14618028",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d83c7fef80d0ebb87bc86567447efee633a24c4e",
          "message": "Use crypto-bigint instead of num-bigint (#547)\n\nUse crypto-bigint instead of num-bigint in the executor and in tests.",
          "timestamp": "2023-05-10T17:57:01Z",
          "tree_id": "49821ec6c2aa51a2632203a6f156ec7a6287fccf",
          "url": "https://github.com/risc0/risc0/commit/d83c7fef80d0ebb87bc86567447efee633a24c4e"
        },
        "date": 1683741828084,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685768125,
            "range": "± 775260",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 691067770,
            "range": "± 1257060",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 753174333,
            "range": "± 1968169",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 904245999,
            "range": "± 4600049",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 927431124,
            "range": "± 5710760",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3389263812,
            "range": "± 15726053",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1622681374,
            "range": "± 9103641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1643437874,
            "range": "± 7019402",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4144671500,
            "range": "± 13331682",
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
          "id": "364e3a6c952e00dc0452fa66c521a6a723540860",
          "message": "Update to rust 1.69.0 (#553)",
          "timestamp": "2023-05-10T23:16:16Z",
          "tree_id": "14c7fbf2a8f7fea1bd5897d7ff030e850d38a06c",
          "url": "https://github.com/risc0/risc0/commit/364e3a6c952e00dc0452fa66c521a6a723540860"
        },
        "date": 1683761055771,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 684632500,
            "range": "± 1550263",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 690222687,
            "range": "± 1732446",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 746278812,
            "range": "± 647149",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 903406541,
            "range": "± 4525889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 914192875,
            "range": "± 4162782",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3374385187,
            "range": "± 7033371",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1611679666,
            "range": "± 5270049",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1629112624,
            "range": "± 5280892",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4118591167,
            "range": "± 12721140",
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
          "id": "33e6a643ea6d3be0d7c9727ee3dc4007618df8bb",
          "message": "Add `FileSegmentRef` (#560)",
          "timestamp": "2023-05-12T20:48:07Z",
          "tree_id": "9e4b8c5461a6ef96c602828e9430607d48899fa5",
          "url": "https://github.com/risc0/risc0/commit/33e6a643ea6d3be0d7c9727ee3dc4007618df8bb"
        },
        "date": 1683924890261,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 685319667,
            "range": "± 1354307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 690861271,
            "range": "± 1254582",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 746696187,
            "range": "± 1316657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 904584979,
            "range": "± 7322788",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 923598645,
            "range": "± 5081304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3390041604,
            "range": "± 9066512",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 1622215458,
            "range": "± 10441852",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 1652506437,
            "range": "± 4941509",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 4136035562,
            "range": "± 14116653",
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
          "id": "a10b511c7ebe1fc48cb89398380616a87407e5b2",
          "message": "Store memory image as a btree of pages. (#561)\n\nThis gives us significant performance gains in both memory usage and run time.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-12T22:42:50Z",
          "tree_id": "46533952222dc8b66ee7918d12d0816ac891c927",
          "url": "https://github.com/risc0/risc0/commit/a10b511c7ebe1fc48cb89398380616a87407e5b2"
        },
        "date": 1683933153584,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29004963,
            "range": "± 28529",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38902297,
            "range": "± 135875",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 135012925,
            "range": "± 243597",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849023479,
            "range": "± 2948248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869886270,
            "range": "± 3389613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3332177604,
            "range": "± 16380928",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 902367479,
            "range": "± 6362180",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 934589312,
            "range": "± 3950648",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3457463812,
            "range": "± 6243121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7a4b7d78300a4682b01c1aec1da43104ce66ebe",
          "message": "Adding feature flag documentation to crate READMEs (#521)\n\nAdds feature flag documentation to top-level README and to `risc0-circuit-rv32im`, `risc0-zkp`, and `risc0-zkvm` crates\r\n\r\n\r\n\r\n---------\r\n\r\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-14T16:17:23-07:00",
          "tree_id": "ffc573d85abe60ee9f6c6b03019bf9923e340997",
          "url": "https://github.com/risc0/risc0/commit/b7a4b7d78300a4682b01c1aec1da43104ce66ebe"
        },
        "date": 1684106755119,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28367540,
            "range": "± 58526",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37314694,
            "range": "± 104243",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 128986738,
            "range": "± 341829",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849779521,
            "range": "± 6806740",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 864913104,
            "range": "± 4960916",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3331632916,
            "range": "± 11433013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 892459937,
            "range": "± 6545001",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931262104,
            "range": "± 4371008",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3455183708,
            "range": "± 15907561",
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
          "id": "235e75b2ae25e00f8fd381cfb9e9d45444a811e6",
          "message": "Adjust image_id to be the hash of (merkle_root, pc) (#566)",
          "timestamp": "2023-05-18T09:52:27-07:00",
          "tree_id": "11c26a5527c9ce1addff78aeef1d26334f254513",
          "url": "https://github.com/risc0/risc0/commit/235e75b2ae25e00f8fd381cfb9e9d45444a811e6"
        },
        "date": 1684429016243,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28180219,
            "range": "± 30552",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37458549,
            "range": "± 121022",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 129190808,
            "range": "± 342243",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 853925875,
            "range": "± 6064863",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870659479,
            "range": "± 5294847",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3345009979,
            "range": "± 9665661",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 904021604,
            "range": "± 5681711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931249042,
            "range": "± 4943438",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3474835917,
            "range": "± 11697974",
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
          "id": "48f1a324876848f9f64baf6cb06808106d36c55b",
          "message": "Fix for #569 (#570)",
          "timestamp": "2023-05-18T21:10:32Z",
          "tree_id": "4a2796e5d6f104a3508019af3a90d7c2a33eab79",
          "url": "https://github.com/risc0/risc0/commit/48f1a324876848f9f64baf6cb06808106d36c55b"
        },
        "date": 1684445636182,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28986761,
            "range": "± 92035",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38378698,
            "range": "± 128929",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 132725068,
            "range": "± 292923",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 854385541,
            "range": "± 3862706",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870590937,
            "range": "± 2666110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3346967917,
            "range": "± 8300772",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 904584104,
            "range": "± 5038214",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 932377563,
            "range": "± 8984048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3495479771,
            "range": "± 19421230",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "873c9f8f1c261fa1f1e61b995d24341cc89df254",
          "message": "Make `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\n\nMake `sys_sha_buffer` available as extern and add RustCrypto sha2 patching example (#567)\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-18T22:41:33Z",
          "tree_id": "e1cbbfbc1f571173263d6f9a7a40957d2dc4a414",
          "url": "https://github.com/risc0/risc0/commit/873c9f8f1c261fa1f1e61b995d24341cc89df254"
        },
        "date": 1684449960932,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28196324,
            "range": "± 21761",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37465943,
            "range": "± 98533",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 129120150,
            "range": "± 220013",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852213646,
            "range": "± 4670458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869851333,
            "range": "± 5638938",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3342254666,
            "range": "± 9530732",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 900875021,
            "range": "± 7736419",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 930535875,
            "range": "± 4642762",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3469032833,
            "range": "± 12979411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9497776ad378bb13e7cc8efb25ef4a734b745a03",
          "message": "Add error string to opcode decode failure in Executor (#571)\n\n Add error string to opcode decode failure in Executor #571",
          "timestamp": "2023-05-19T00:12:47Z",
          "tree_id": "edb1797459573df1c9c9ffe71aeff5f1ed4ff07d",
          "url": "https://github.com/risc0/risc0/commit/9497776ad378bb13e7cc8efb25ef4a734b745a03"
        },
        "date": 1684455681679,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28563361,
            "range": "± 70074",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37782423,
            "range": "± 56305",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 131596649,
            "range": "± 161430",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850780750,
            "range": "± 3590984",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 866684750,
            "range": "± 4813609",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3339609937,
            "range": "± 19534912",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 902316166,
            "range": "± 8704930",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 937644250,
            "range": "± 6549355",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3461518729,
            "range": "± 10008739",
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
          "id": "71f6571239816f617e5461ae2670067f7083a8f9",
          "message": "Workaround to fix self-hosted runners (#577)",
          "timestamp": "2023-05-20T13:12:42-07:00",
          "tree_id": "e720c8391c641dbdbbcd6de6b202f0621f676308",
          "url": "https://github.com/risc0/risc0/commit/71f6571239816f617e5461ae2670067f7083a8f9"
        },
        "date": 1684614074103,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28423923,
            "range": "± 76001",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37576463,
            "range": "± 263260",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 128385185,
            "range": "± 129152",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 851761250,
            "range": "± 5389636",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 868155937,
            "range": "± 4598193",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3343031333,
            "range": "± 15034172",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 908221229,
            "range": "± 7392004",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931577416,
            "range": "± 9847173",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3479662416,
            "range": "± 11878548",
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
          "id": "5750d3237561680d864ea782554839c2aa6cfa85",
          "message": "Improve receipt docs (#576)",
          "timestamp": "2023-05-20T20:39:02Z",
          "tree_id": "1fff671b6441abde3ddef00163962490926003c0",
          "url": "https://github.com/risc0/risc0/commit/5750d3237561680d864ea782554839c2aa6cfa85"
        },
        "date": 1684615792761,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29195118,
            "range": "± 168134",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38283344,
            "range": "± 101987",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 131277569,
            "range": "± 246055",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 847262396,
            "range": "± 3626122",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 866525895,
            "range": "± 5015214",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3349800375,
            "range": "± 26686411",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 907686083,
            "range": "± 6325750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 932704000,
            "range": "± 7824224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3476970708,
            "range": "± 11126354",
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
          "id": "0415638f001e27f2c433080c95f068e20234981c",
          "message": "Minor README updates",
          "timestamp": "2023-05-20T14:26:04-07:00",
          "tree_id": "90a2c2e387347c8bd2431124e8b939f380564567",
          "url": "https://github.com/risc0/risc0/commit/0415638f001e27f2c433080c95f068e20234981c"
        },
        "date": 1684618328147,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28984006,
            "range": "± 32525",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38364448,
            "range": "± 55221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 131270500,
            "range": "± 331371",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 874389687,
            "range": "± 5184583",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 890663896,
            "range": "± 8737390",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3332564354,
            "range": "± 20801942",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 898067667,
            "range": "± 4891189",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 930248708,
            "range": "± 8411789",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3462485479,
            "range": "± 8819316",
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
          "id": "624fb55ea4456ef6faa5960399a5de882d5cf0f7",
          "message": "Pin bstr to fix build issue (#580)",
          "timestamp": "2023-05-22T15:13:41-07:00",
          "tree_id": "9aacab4d977950b1651c56f99cf0d424d55a7198",
          "url": "https://github.com/risc0/risc0/commit/624fb55ea4456ef6faa5960399a5de882d5cf0f7"
        },
        "date": 1684793889375,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28198934,
            "range": "± 37790",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 37499362,
            "range": "± 130687",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 129441788,
            "range": "± 139384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849349291,
            "range": "± 6080960",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870980271,
            "range": "± 5183489",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3348448541,
            "range": "± 7697118",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 900796416,
            "range": "± 3594825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 934843625,
            "range": "± 8838119",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3473353812,
            "range": "± 6073946",
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
          "id": "e5221ce381fb9092f6a9c510250945ea8645480a",
          "message": "Simplify guest linker configuration (#559)\n\n* Simplify guest linker configuration\r\n\r\nRemove custom linker script in favor of -Ttext= linkeer arg\r\nStack pointer and .text are now based on values in memory.rs instead of a separate linker script.  .data and .bss follow .text.\r\nWhen using \"std\" on the guest, we no longer need to include #![no_main] or risc0_zkvm::entry!(...); just a standard \"pub fn main\" will do. (Unfortunately we still have to force inclusion of the risc0 zkvm crate with \"use risc0_zkvm as _\" if we don't use anything else from it)\r\n\r\n* Add comments with links to how the linker works\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-05-22T22:54:29Z",
          "tree_id": "c32b7572eca8689c3735f489fe3434176a70a5a8",
          "url": "https://github.com/risc0/risc0/commit/e5221ce381fb9092f6a9c510250945ea8645480a"
        },
        "date": 1684796434734,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29770612,
            "range": "± 35407",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 40063406,
            "range": "± 104891",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 143089691,
            "range": "± 306391",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 854720687,
            "range": "± 2975673",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 874733896,
            "range": "± 6020676",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3343222937,
            "range": "± 10453919",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 906329229,
            "range": "± 5163716",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 933087687,
            "range": "± 7124600",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3484356229,
            "range": "± 6311029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109624900+3lkn@users.noreply.github.com",
            "name": "3lkn",
            "username": "3lkn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d04249433367beda77de4c3af94bafc2dbda8dd",
          "message": "Adding a few Rust doc examples to Executor and ExecutorEnv (#572)\n\n* adding examples to ExecutorEnv and Executor\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* Update risc0/zkvm/src/exec/mod.rs\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\n\n* updating executor/executor env doc examples after code review\n\n* Update risc0/zkvm/src/exec/env.rs\n\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>\n\n---------\n\nCo-authored-by: Frank Laub <flaub@risc0.com>\nCo-authored-by: Tim Zerrell <tim.zerrell@risczero.com>",
          "timestamp": "2023-05-24T00:37:14Z",
          "tree_id": "b575f8e37b2710cacfee8059d45402ed32db11c1",
          "url": "https://github.com/risc0/risc0/commit/2d04249433367beda77de4c3af94bafc2dbda8dd"
        },
        "date": 1684889139813,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28923505,
            "range": "± 51309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39019159,
            "range": "± 108559",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 140329141,
            "range": "± 98607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850687687,
            "range": "± 3587170",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 868578646,
            "range": "± 3916706",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3322349729,
            "range": "± 11762194",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 899567145,
            "range": "± 6395497",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931009729,
            "range": "± 5892662",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3466818937,
            "range": "± 11707398",
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
          "id": "279b7ddd0d6de49200c6b3377fe2b6c42214f0cb",
          "message": "Include release branches for CI (#583)",
          "timestamp": "2023-05-23T19:14:48-07:00",
          "tree_id": "5be3cd7b038850ccbcda4bd6129f41e7edcdbbd9",
          "url": "https://github.com/risc0/risc0/commit/279b7ddd0d6de49200c6b3377fe2b6c42214f0cb"
        },
        "date": 1684894758637,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28907208,
            "range": "± 60626",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39084688,
            "range": "± 95086",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139501611,
            "range": "± 294143",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848185687,
            "range": "± 4381829",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 873306000,
            "range": "± 3195779",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3355746645,
            "range": "± 7295088",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 908724083,
            "range": "± 5576992",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 933400208,
            "range": "± 4514821",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3484257771,
            "range": "± 10791873",
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
          "id": "b150cb7692ff0bdc4328938d4a5e138dbf78352f",
          "message": "add test for session limit overflow (#575)\n\nThese tests check for errors generated by the executor when running the executor past the session_limit.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-24T17:55:08Z",
          "tree_id": "798a772899b2d6a03bc04d29058a3a20892bf7ab",
          "url": "https://github.com/risc0/risc0/commit/b150cb7692ff0bdc4328938d4a5e138dbf78352f"
        },
        "date": 1684951423582,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28996557,
            "range": "± 58233",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39105320,
            "range": "± 52801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139377556,
            "range": "± 360880",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 851119354,
            "range": "± 4564708",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869784708,
            "range": "± 5843344",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3341996917,
            "range": "± 11984124",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 901142979,
            "range": "± 5479242",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 930650270,
            "range": "± 4594602",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3481357416,
            "range": "± 1479518",
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
          "id": "3a8d4c29cba234d551487feab8b8ae101482e343",
          "message": "Update criterion requirement from 0.4 to 0.5 (#586)\n\nUpdates the requirements on [criterion](https://github.com/bheisler/criterion.rs) to permit the latest version.\r\n- [Changelog](https://github.com/bheisler/criterion.rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/bheisler/criterion.rs/compare/0.4.0...0.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: criterion\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T18:31:23Z",
          "tree_id": "1da6d9009f12986e1d4d9ed81abbeee4717473fc",
          "url": "https://github.com/risc0/risc0/commit/3a8d4c29cba234d551487feab8b8ae101482e343"
        },
        "date": 1685126414020,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28997696,
            "range": "± 35278",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39519826,
            "range": "± 73383",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 142889709,
            "range": "± 240847",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850082375,
            "range": "± 6204396",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871546729,
            "range": "± 2585218",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3334137417,
            "range": "± 11018946",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 906519458,
            "range": "± 5478592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 937580958,
            "range": "± 5036401",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3471479354,
            "range": "± 11521607",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c529b64006382d06024ca5862297b18a77a895c",
          "message": "Enable feature-gated programmatic access to `methods.rs` contents (#585)\n\n* guest-list feature\r\n\r\n* fix formatting\r\n\r\n* fix linebreak and whitespace\r\n\r\n* extra new lines in output\r\n\r\n* Update risc0/build/src/lib.rs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-05-29T07:39:56Z",
          "tree_id": "3ac951203b0b02ce7abc342218c82a1b3b6cea49",
          "url": "https://github.com/risc0/risc0/commit/7c529b64006382d06024ca5862297b18a77a895c"
        },
        "date": 1685346513250,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29084044,
            "range": "± 73238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38941275,
            "range": "± 71484",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 138135882,
            "range": "± 149176",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852357625,
            "range": "± 4693454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871035104,
            "range": "± 3573473",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3347703041,
            "range": "± 6737184",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 904971333,
            "range": "± 7721325",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931242604,
            "range": "± 2980608",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3489286104,
            "range": "± 13992854",
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
          "id": "3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1",
          "message": "Fix for #594 (#597)",
          "timestamp": "2023-05-31T21:06:26-07:00",
          "tree_id": "8c6e9d94b9141c66c4d6a142d9fa1dd7313f515b",
          "url": "https://github.com/risc0/risc0/commit/3ce67c81ae3fcdc87e6301c2f9371aa53747a3c1"
        },
        "date": 1685592667866,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29004529,
            "range": "± 23659",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39473887,
            "range": "± 81672",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 142755968,
            "range": "± 110881",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 855381020,
            "range": "± 4878825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 873579854,
            "range": "± 3510431",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3326435729,
            "range": "± 13591644",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 906667646,
            "range": "± 6580711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 939221083,
            "range": "± 8393348",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3471696917,
            "range": "± 7100049",
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
          "id": "fc33ed9f343eaaf2d52770d0d72713b151c75cc2",
          "message": "Add test vectors and Make rust implementation of IOP match cirgen implementation (#599)",
          "timestamp": "2023-06-05T23:49:05Z",
          "tree_id": "9b783988bfa231e8d75b039e0d2eed0f9d45c720",
          "url": "https://github.com/risc0/risc0/commit/fc33ed9f343eaaf2d52770d0d72713b151c75cc2"
        },
        "date": 1686009219081,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29171953,
            "range": "± 78682",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39315757,
            "range": "± 195850",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 143377631,
            "range": "± 462710",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 856047437,
            "range": "± 3760535",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 876675270,
            "range": "± 5181216",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3344534000,
            "range": "± 7128975",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 906803292,
            "range": "± 5396983",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 937269333,
            "range": "± 5268079",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3499257062,
            "range": "± 15346934",
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
          "id": "396be373bf6e2f6e997c8a4ea473fee125107c8f",
          "message": "Rebuild on CUDA related env vars (#605)\n\nTriggers rebuilds for couple more env vars if they change between\r\ninvokes of the kernel build",
          "timestamp": "2023-06-05T17:37:19-07:00",
          "tree_id": "aa37e37deda2f047a3466e363dfe21c0d14ad54e",
          "url": "https://github.com/risc0/risc0/commit/396be373bf6e2f6e997c8a4ea473fee125107c8f"
        },
        "date": 1686012109194,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29037838,
            "range": "± 165970",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39444246,
            "range": "± 101836",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 143538637,
            "range": "± 215931",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 853286750,
            "range": "± 2866714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 874903187,
            "range": "± 6051150",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3327130270,
            "range": "± 14074598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 900295812,
            "range": "± 4107394",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 931241833,
            "range": "± 3349952",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3473512208,
            "range": "± 8133945",
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
          "id": "a36264a8961f2c7b9ba730c38be457f48ee3b570",
          "message": "Rename examples/evm -> examples/zkevm-demo (#611)",
          "timestamp": "2023-06-06T16:16:15-07:00",
          "tree_id": "8269e9f92e83cb28e18cccb8d53bfba289573944",
          "url": "https://github.com/risc0/risc0/commit/a36264a8961f2c7b9ba730c38be457f48ee3b570"
        },
        "date": 1686093895722,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29014494,
            "range": "± 45939",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39488030,
            "range": "± 100574",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 143603526,
            "range": "± 279112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852539458,
            "range": "± 4052269",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 874814562,
            "range": "± 2962747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3334596250,
            "range": "± 12672026",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 905495000,
            "range": "± 5278539",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 934229312,
            "range": "± 8554176",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3477168104,
            "range": "± 10862306",
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
          "id": "2192af4b426526eb0f88248bbb8eddc7ce5ca2a9",
          "message": "Publish Recursion Verifier (#603)\n\nThis change moves the recursion verifier from the private repository. This is\r\ndone by splitting the `CircuitDef` trait and adding files used by the recursion\r\nverifier.\r\n\r\nThe CircuitDef is a trait that is implemented by rust code generated from the\r\ncircuit for both the verifier and the prover. In order to split off the recursive\r\nverifier, we need to split this trait into two parts: one that is used in both the\r\nprover and the verifier and one that is used only in the prover. The former trait\r\ncalled `CircuitCoreDef` is implemented for the recursive verifier which requires\r\ngenerated rust files from the recursion circuit.",
          "timestamp": "2023-06-07T02:44:31Z",
          "tree_id": "a9fb25c72d15b572c0ace2f471a8394609cd5883",
          "url": "https://github.com/risc0/risc0/commit/2192af4b426526eb0f88248bbb8eddc7ce5ca2a9"
        },
        "date": 1686106404139,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28928770,
            "range": "± 25641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39279972,
            "range": "± 135904",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 141734600,
            "range": "± 1162371",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 855249854,
            "range": "± 5748493",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 873717916,
            "range": "± 3711899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3362493292,
            "range": "± 15842678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 905392520,
            "range": "± 8665310",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 939492187,
            "range": "± 8156149",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3490243854,
            "range": "± 7670376",
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
          "id": "4e85c7e880c6741235a0c8e8bfd1c5562fc5e431",
          "message": "recursion: fix compiler warning in guest (#614)\n\nadd `#[cfg(not(target_os = \"zkvm\"))]` to items that are not needed for guest compilation",
          "timestamp": "2023-06-07T22:02:49Z",
          "tree_id": "63444c4b35dce7e91ae2aab1d90c1abffc7de49e",
          "url": "https://github.com/risc0/risc0/commit/4e85c7e880c6741235a0c8e8bfd1c5562fc5e431"
        },
        "date": 1686175879966,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28891011,
            "range": "± 113242",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39048088,
            "range": "± 60985",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 139571508,
            "range": "± 423346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850230021,
            "range": "± 4631868",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870229270,
            "range": "± 5355241",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3346598500,
            "range": "± 8639306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 908495083,
            "range": "± 5629133",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 935470833,
            "range": "± 3145051",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3485962458,
            "range": "± 8101534",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthias.goergens@gmail.com",
            "name": "Matthias Görgens",
            "username": "matthiasgoergens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c9f8d81334b12e223910414db46bd7187dd848",
          "message": "Fix typo (#613)",
          "timestamp": "2023-06-08T16:43:26Z",
          "tree_id": "70945cedf0cd1456aa98463e8a6cc12af3e2d235",
          "url": "https://github.com/risc0/risc0/commit/72c9f8d81334b12e223910414db46bd7187dd848"
        },
        "date": 1686242884058,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29102352,
            "range": "± 91340",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 38948689,
            "range": "± 90883",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 138770283,
            "range": "± 480675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 854230167,
            "range": "± 3777265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869546500,
            "range": "± 4532290",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3348118979,
            "range": "± 10288942",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 904702125,
            "range": "± 6367409",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 934067958,
            "range": "± 4951681",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3488004125,
            "range": "± 12810142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2418646+hashcashier@users.noreply.github.com",
            "name": "Rami",
            "username": "hashcashier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e84cefc531e0599af6be7c635f4be49284be5a98",
          "message": "expose system state for mocking in tests (#617)",
          "timestamp": "2023-06-08T17:27:57Z",
          "tree_id": "5c87de3b862f6e4c6d37cb2c812a42e4fca1b8d2",
          "url": "https://github.com/risc0/risc0/commit/e84cefc531e0599af6be7c635f4be49284be5a98"
        },
        "date": 1686245547082,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28990037,
            "range": "± 119767",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 39163953,
            "range": "± 245205",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 137986881,
            "range": "± 354573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 854454187,
            "range": "± 5375232",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870048625,
            "range": "± 6223618",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3336530000,
            "range": "± 9952143",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 901751687,
            "range": "± 4732803",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 935678208,
            "range": "± 6486817",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3478384084,
            "range": "± 13288928",
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
          "id": "222c36b7005639e08817083d0e3744a6ef8f7d39",
          "message": "Improve execution performance (#615)",
          "timestamp": "2023-06-08T18:03:59Z",
          "tree_id": "4479b0ea99389e7f399a8d5adf375136770ec3ae",
          "url": "https://github.com/risc0/risc0/commit/222c36b7005639e08817083d0e3744a6ef8f7d39"
        },
        "date": 1686247700490,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28148333,
            "range": "± 59984",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34387999,
            "range": "± 101516",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 97015156,
            "range": "± 398927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852414396,
            "range": "± 3919305",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 872281479,
            "range": "± 4478261",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3350676166,
            "range": "± 12695491",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 904127458,
            "range": "± 8738692",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 928508063,
            "range": "± 6603519",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3435474833,
            "range": "± 13456698",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4e5acea2fbe6393f136d12d02c92d28f4c9a379",
          "message": "Handle alignment errors in deserialization (#600)",
          "timestamp": "2023-06-08T20:49:46Z",
          "tree_id": "37fab60a79a778088586e7a07528e5f63f61ba93",
          "url": "https://github.com/risc0/risc0/commit/a4e5acea2fbe6393f136d12d02c92d28f4c9a379"
        },
        "date": 1686257650033,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28063614,
            "range": "± 33081",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34339390,
            "range": "± 86932",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 96387076,
            "range": "± 291346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849486625,
            "range": "± 5050796",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 867165041,
            "range": "± 4195751",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3347440187,
            "range": "± 9141076",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 907837166,
            "range": "± 3674846",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 927650166,
            "range": "± 6457210",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3444703458,
            "range": "± 10836504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "intoverflow@gmail.com",
            "name": "Tim Carstens",
            "username": "intoverflow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "318ae6056faf511bb1bf57bea8187acd30e181ee",
          "message": "Make session_limit optional (#608)",
          "timestamp": "2023-06-09T01:16:25Z",
          "tree_id": "49c2f3f76fd108b7f2fc2ce184fc9885c3a3d717",
          "url": "https://github.com/risc0/risc0/commit/318ae6056faf511bb1bf57bea8187acd30e181ee"
        },
        "date": 1686273901474,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28306123,
            "range": "± 66727",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 34421130,
            "range": "± 46694",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 97090401,
            "range": "± 238649",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 851775291,
            "range": "± 3644879",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 873139833,
            "range": "± 5154290",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3336441208,
            "range": "± 11773682",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 905532041,
            "range": "± 7381698",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 927383750,
            "range": "± 5917223",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3435562229,
            "range": "± 7990065",
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
          "id": "f448fbd730b9aba8fab79ba6fd67549caddb85cf",
          "message": "implement SessionReceipt trait (#616)\n\nThis pull request implements the `SessionReceipt` trait that is implemented by\r\n`SessionRollupReceipt` and `SessionFlatReceipt` (also known as the old\r\n`SessionReceipt`). This is useful because it allows the host code to call verify\r\nand to get the journal contents regardless of the concrete type of session\r\nreceipt. This trait is practical when a developer has a code base that uses\r\nbonsai resulting in a `SessionRollupReceipt` or from a local prover resulting in a\r\n`SessionFlatReceipt`.  Examples have been updated to use this new trait. The main\r\ndifference is to replace existing `receipt.journal` with `receipt.get_journal()`\r\nand `receipt.verify(XXXX_ID)` with `receipt.verify(XXXX_ID.into())`.",
          "timestamp": "2023-06-13T05:05:10Z",
          "tree_id": "b2caadff7b30c021a2ee2931744b0ede22f077cd",
          "url": "https://github.com/risc0/risc0/commit/f448fbd730b9aba8fab79ba6fd67549caddb85cf"
        },
        "date": 1686633376968,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29036126,
            "range": "± 86731",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 35846918,
            "range": "± 97563",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 104212948,
            "range": "± 167261",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852357167,
            "range": "± 5095950",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871936229,
            "range": "± 3553934",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3352997562,
            "range": "± 10006034",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 903886541,
            "range": "± 5102883",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 929360104,
            "range": "± 6247346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3440344583,
            "range": "± 11757498",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cbff2a0b6d781d7cb3e67af935db4234f13f59a",
          "message": "Add ECDSA verification example using bigint acceleration support (#590)\n\nThis PR adds an ECDSA verification example, which shows how to use the patched k256 library to get accelerated signature verification on secp256k1 in the zkVM guest.\r\n\r\nAs a dependency for the k256 patch, it also updates the allocator to support alignments that are larger than a word. (In particular, the constant-time lookup table implementation uses a 1024-byte alignment). risc0/rust#11 is related to this PR. Based on work by @shkoo.\r\n\r\nAs a drive-by change, this PR includes an additional check in the executor that execution did not previously end with ExitCode::Halted, which is a non-resumable state. I added this after running into this error by accident and having a hard time debugging it based on the errors I received.",
          "timestamp": "2023-06-13T22:16:09Z",
          "tree_id": "8d22cdb71a1532c9e515ca5012a2867ea35080fa",
          "url": "https://github.com/risc0/risc0/commit/7cbff2a0b6d781d7cb3e67af935db4234f13f59a"
        },
        "date": 1686695070239,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 29315555,
            "range": "± 67656",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 35543601,
            "range": "± 90887",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 97259456,
            "range": "± 1024185",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848299812,
            "range": "± 6331025",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870109416,
            "range": "± 3467147",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3337561166,
            "range": "± 17144986",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 906533042,
            "range": "± 8703452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 936917896,
            "range": "± 7639116",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3432343458,
            "range": "± 15614570",
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
          "id": "78c2d1a9279b33500f52b363debfe7019d2f9b5a",
          "message": "Improve executor performance (#644)",
          "timestamp": "2023-06-20T11:35:04-07:00",
          "tree_id": "a64f3e325dd557eb47112cabfefacd6f169a9c4a",
          "url": "https://github.com/risc0/risc0/commit/78c2d1a9279b33500f52b363debfe7019d2f9b5a"
        },
        "date": 1687286371709,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28412397,
            "range": "± 95205",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28673572,
            "range": "± 108231",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30897099,
            "range": "± 190641",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 860837479,
            "range": "± 3577965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 876563728,
            "range": "± 4151813",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3379473479,
            "range": "± 13059671",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 905841313,
            "range": "± 5845780",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 922263187,
            "range": "± 6412930",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3380006500,
            "range": "± 7601011",
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
          "id": "6bf7ccb450961df4cb34406af44473a0a5f6808c",
          "message": "Cleanup recursion structs (#632)\n\n* ReceiptMeta: use ExitCode instead of two u8s\r\n\r\nThis is a first step in merging ReceiptMeta and ReceiptMetadata to a single\r\nstruct. The next change will remove ReceiptMeta in favor of ReceiptMetadata\r\n\r\n* rename field in recursion::receipt::SystemState so it matches zkvm::receipt::SystemState\r\n\r\n* recursion: remove duplicate `SystemState` struct\r\n\r\nThis struct was duplicated in the private repo. Since there is no need for\r\ndupilcation, this struct has been removed.\r\n\r\n* Recursion: remove duplicate ReceiptMeta struct\r\n\r\nThis change removes the duplicated ReceiptMetadata struct and instead uses a\r\ncommon ReceiptMetadata struct in `risc0_zkvm::receipt`\r\n\r\n* Move `exit_code` funtions to `risc0_zkvm::receipt`\r\n\r\nThese functions can be useful in `risc0_zkvm::receipt` as well as the recursion\r\nmodule.\r\n\r\n* clean up use declarations\r\n\r\n* Fix documentation\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-06-21T22:48:27Z",
          "tree_id": "8f8461038291162ade9c5cff0f58299f6e27311f",
          "url": "https://github.com/risc0/risc0/commit/6bf7ccb450961df4cb34406af44473a0a5f6808c"
        },
        "date": 1687387970670,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28198760,
            "range": "± 77399",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28375749,
            "range": "± 49250",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30524372,
            "range": "± 76830",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 853653750,
            "range": "± 6344284",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 875922666,
            "range": "± 4811248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3362955479,
            "range": "± 10280346",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 900417395,
            "range": "± 5205271",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 918241395,
            "range": "± 6064722",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3358259271,
            "range": "± 10238086",
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
          "id": "6b4286a4bb329a71e536596e85e6d7e4f191e7f2",
          "message": "Improve executor performance (#651)",
          "timestamp": "2023-06-23T21:41:16Z",
          "tree_id": "e0dc69ead6ea68890af96a1b2a8596cb8c2b78f1",
          "url": "https://github.com/risc0/risc0/commit/6b4286a4bb329a71e536596e85e6d7e4f191e7f2"
        },
        "date": 1687556739376,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2707608,
            "range": "± 37174",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2805730,
            "range": "± 176007",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4981793,
            "range": "± 88038",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 847935208,
            "range": "± 3002168",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869255625,
            "range": "± 4265826",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3387975833,
            "range": "± 11998836",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 870654021,
            "range": "± 7876676",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 887984271,
            "range": "± 8009796",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3365341604,
            "range": "± 6430782",
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
          "id": "d79ab62274aebe670b461ab06b8477953182972c",
          "message": "Improve CUDA performance (#653)\n\n* Improve CUDA performance\r\n\r\n* Drop assumption of 256 block size",
          "timestamp": "2023-06-25T16:48:58-04:00",
          "tree_id": "3e33e2e53aad0982355d4ca90b1c71e419e0b3d9",
          "url": "https://github.com/risc0/risc0/commit/d79ab62274aebe670b461ab06b8477953182972c"
        },
        "date": 1687726660221,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2773313,
            "range": "± 80852",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2905189,
            "range": "± 86110",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5027295,
            "range": "± 72247",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 851521437,
            "range": "± 3303607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871574437,
            "range": "± 3706247",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3356174375,
            "range": "± 6410813",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 872906458,
            "range": "± 6089177",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 892056666,
            "range": "± 4481566",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3329711833,
            "range": "± 12369534",
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
          "id": "a39561546dd5b54788b686afd125db687f40e84a",
          "message": "Drop use of unified memory for CUDA (#654)\n\n* Drop use of unified memory for CUDA\r\n\r\n* Toggle for unified memory",
          "timestamp": "2023-06-25T19:51:57-07:00",
          "tree_id": "09e58e6c2630f4c7d714f3538793467099a07804",
          "url": "https://github.com/risc0/risc0/commit/a39561546dd5b54788b686afd125db687f40e84a"
        },
        "date": 1687748172659,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2774523,
            "range": "± 35315",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2953926,
            "range": "± 26819",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5076671,
            "range": "± 53557",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 852094041,
            "range": "± 4579200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871731771,
            "range": "± 6018965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3353330542,
            "range": "± 9337977",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 873207979,
            "range": "± 5259324",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 895101562,
            "range": "± 6712519",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3333202458,
            "range": "± 7638889",
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
          "id": "44c67ee83a021686b95722b30b8b1f9b1dc81b7e",
          "message": "Update predicates (#657)",
          "timestamp": "2023-06-28T01:00:51Z",
          "tree_id": "a8f6ca65054794eb7b8932c3668f2430108e4083",
          "url": "https://github.com/risc0/risc0/commit/44c67ee83a021686b95722b30b8b1f9b1dc81b7e"
        },
        "date": 1687914320024,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2773385,
            "range": "± 56457",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2898335,
            "range": "± 116596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4986450,
            "range": "± 86770",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850499459,
            "range": "± 5609721",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 867090625,
            "range": "± 2968221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3343678938,
            "range": "± 11742133",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 876015062,
            "range": "± 7857750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 890750916,
            "range": "± 8334648",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3330266229,
            "range": "± 14696462",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "austinabell8@gmail.com",
            "name": "Austin Abell",
            "username": "austinabell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691d7e03a9b260d0b6208f9b68096ae11bff43ff",
          "message": "chore: remove unused Once type (#660)",
          "timestamp": "2023-06-28T17:24:34Z",
          "tree_id": "8ff89aa5b6155254cb20901c0cd98ecd3e458085",
          "url": "https://github.com/risc0/risc0/commit/691d7e03a9b260d0b6208f9b68096ae11bff43ff"
        },
        "date": 1687973569125,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2755956,
            "range": "± 152866",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2866218,
            "range": "± 94314",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4955834,
            "range": "± 119962",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848045000,
            "range": "± 5237032",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 863331916,
            "range": "± 3490380",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3310018770,
            "range": "± 5283074",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 870550979,
            "range": "± 6034485",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 894246520,
            "range": "± 7987042",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3311375979,
            "range": "± 8823499",
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
          "id": "f3298019d7b4a412c4d4ff956da793fa032f11eb",
          "message": "Update metal to 0.25 (#661)",
          "timestamp": "2023-06-28T21:09:09Z",
          "tree_id": "19c2e29c05142c34067e3ebdcfeca781a88d848b",
          "url": "https://github.com/risc0/risc0/commit/f3298019d7b4a412c4d4ff956da793fa032f11eb"
        },
        "date": 1687987063407,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2785019,
            "range": "± 123344",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 3032928,
            "range": "± 28903",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5129157,
            "range": "± 24779",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 845609374,
            "range": "± 5832839",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 865989937,
            "range": "± 4408155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3363369521,
            "range": "± 13001230",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 873469666,
            "range": "± 5153801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 897805521,
            "range": "± 6210161",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3344106729,
            "range": "± 7280740",
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
          "id": "3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c",
          "message": "Update num-derive requirement from 0.3 to 0.4 (#663)\n\nUpdates the requirements on [num-derive](https://github.com/rust-num/num-derive) to permit the latest version.\r\n- [Changelog](https://github.com/rust-num/num-derive/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/rust-num/num-derive/compare/num-derive-0.3.0...num-derive-0.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: num-derive\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T10:57:43-07:00",
          "tree_id": "489d6b92cfd5ea9b3cfc8eca582da7a1a241fd75",
          "url": "https://github.com/risc0/risc0/commit/3a6b0e3c9d18c6e69bfa8235f04e1f92ddcaaf6c"
        },
        "date": 1688148351847,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2715214,
            "range": "± 142575",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2905631,
            "range": "± 55567",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5011990,
            "range": "± 36743",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849330750,
            "range": "± 3961234",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 869204499,
            "range": "± 5002700",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3331229375,
            "range": "± 10851379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 880801812,
            "range": "± 6038090",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 899185521,
            "range": "± 5974635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3333744562,
            "range": "± 6882592",
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
          "id": "3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1",
          "message": "Receipt unification (#666)\n\nRefactor zkp and zkvm such that receipt types (SegmentReceipt and RollupReceipt) implements a Receipt trait which allows the SessionReceipt to hold segments or rollups.\r\n\r\nThis allows a receipt to optionally have a hash function name which is stamped at creation time. Later, a verifier can use this information to select the appropriate matching hash function.\r\n\r\nKey changes:\r\n\r\n* Adjust HashFn and Rng to be object-safe traits (which means removing generics in function singatures, and requiring a self receiver).\r\n* Add RngFactory to support creation of Rng\r\n* Adjust HashSuite to be a struct containing a trait-object of HashFn and Rng.\r\n* Adjust the Hal to replace HashSuite generics with the new struct.\r\n* Update prove and verify",
          "timestamp": "2023-07-05T15:41:04-07:00",
          "tree_id": "56da9a95063aad6f1f9984096c41bfd5be1e0e46",
          "url": "https://github.com/risc0/risc0/commit/3ee4612dcb2fc5dd00dcb8631a4e75ad12abd5a1"
        },
        "date": 1688597137701,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2879138,
            "range": "± 90040",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2878069,
            "range": "± 101334",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5101985,
            "range": "± 111657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850717646,
            "range": "± 4395173",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 873401437,
            "range": "± 4722692",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3352099771,
            "range": "± 12078899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 872269104,
            "range": "± 2875073",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 889646750,
            "range": "± 7021446",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3342245458,
            "range": "± 7417911",
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
          "id": "4b3bd429d92c3cfecd4375f80955714f01cf153d",
          "message": "Hash all pages to fix issues with executor (#676)",
          "timestamp": "2023-07-06T20:12:26Z",
          "tree_id": "c86dd3d3649dfb2afd92bd3f4491eadea8de19c0",
          "url": "https://github.com/risc0/risc0/commit/4b3bd429d92c3cfecd4375f80955714f01cf153d"
        },
        "date": 1688674614979,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 28468345,
            "range": "± 98875",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 28672773,
            "range": "± 91714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 30709014,
            "range": "± 230142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848488979,
            "range": "± 6786517",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 866906542,
            "range": "± 4251776",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3363601687,
            "range": "± 11340248",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 899046770,
            "range": "± 3942140",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 916825229,
            "range": "± 6012793",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3391528145,
            "range": "± 13149448",
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
          "id": "b35e1faa37fb4b60cf8dd849cf46b14d1713c881",
          "message": "Fix to hashing only dirty pages (#679)",
          "timestamp": "2023-07-09T21:03:00Z",
          "tree_id": "df9a8cbe44bd01371387cb5883ad6aafe1b87f90",
          "url": "https://github.com/risc0/risc0/commit/b35e1faa37fb4b60cf8dd849cf46b14d1713c881"
        },
        "date": 1688937083563,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2683213,
            "range": "± 165418",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2939903,
            "range": "± 104572",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5130528,
            "range": "± 79640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 851605375,
            "range": "± 5736369",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 870344271,
            "range": "± 4900249",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3354800083,
            "range": "± 11457774",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 885678895,
            "range": "± 6614026",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 897567042,
            "range": "± 8141393",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3350526583,
            "range": "± 13428461",
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
          "id": "9487793b3c6da2a4554d725c578a5b8fdbfdc432",
          "message": "zkVM: add remote proving by using the bonsai sdk (#677)\n\n* zkVM: add remote proving through the bonsai sdk\r\n\r\nThis change enables generating proofs remotely by using bonsai using the zkVM API.\r\nIn order to execute, add the following environment variables before running the\r\nhost code: BONSAI_API_KEY, BONSAI_API_URL. A new function `default_executor_from_elf` has been added to\r\ngenerate an executor if these environment variables are set.\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-07-10T21:19:28Z",
          "tree_id": "bfcd599647d4efdad9d025e6f9c367808ab5c6de",
          "url": "https://github.com/risc0/risc0/commit/9487793b3c6da2a4554d725c578a5b8fdbfdc432"
        },
        "date": 1689024253945,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2714963,
            "range": "± 91127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2966009,
            "range": "± 87794",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5291337,
            "range": "± 69545",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848588895,
            "range": "± 4638901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 867618729,
            "range": "± 4546257",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3324138896,
            "range": "± 12354370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 873603374,
            "range": "± 8222237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 892840020,
            "range": "± 7249983",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3335706833,
            "range": "± 12664943",
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
          "id": "d69668db97f1fbd998bd2dde794cb42b38d759c9",
          "message": "Revive the dual HAL (#678)",
          "timestamp": "2023-07-11T00:42:50Z",
          "tree_id": "c1fa2d3c4ec4a792749c2cb998d72926cc05b42b",
          "url": "https://github.com/risc0/risc0/commit/d69668db97f1fbd998bd2dde794cb42b38d759c9"
        },
        "date": 1689036447436,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2702524,
            "range": "± 128223",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 3020907,
            "range": "± 165216",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4972836,
            "range": "± 164178",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 849221333,
            "range": "± 5927690",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 868151896,
            "range": "± 2957526",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3345474250,
            "range": "± 9270197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 879600500,
            "range": "± 5957640",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 901585625,
            "range": "± 6894894",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3346568250,
            "range": "± 10779275",
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
          "id": "789f0062ef14f7eeba976e4b62953ec9fd68b85b",
          "message": "Update metadata for bonsai-sdk",
          "timestamp": "2023-07-10T17:51:07-07:00",
          "tree_id": "18d855c9b6256535d1f8a20c5c06d79104786a0e",
          "url": "https://github.com/risc0/risc0/commit/789f0062ef14f7eeba976e4b62953ec9fd68b85b"
        },
        "date": 1689037278172,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2704160,
            "range": "± 96935",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2867525,
            "range": "± 81302",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5220037,
            "range": "± 43199",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 850071208,
            "range": "± 4874015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 871427916,
            "range": "± 5784224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3335614312,
            "range": "± 8032349",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 873255729,
            "range": "± 3715901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 898188417,
            "range": "± 9216745",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3337290604,
            "range": "± 8172655",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "victor@risczero.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d8cc276aacaa04219ef57d65c158d4bfdd40c0",
          "message": "Align implementations of image ID and system state struct hash (#689)",
          "timestamp": "2023-07-11T19:39:17-07:00",
          "tree_id": "d8679fbe497baafe5a73c8d31caad925c610e64a",
          "url": "https://github.com/risc0/risc0/commit/a8d8cc276aacaa04219ef57d65c158d4bfdd40c0"
        },
        "date": 1689130082341,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2776479,
            "range": "± 138002",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 3111556,
            "range": "± 109946",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5151363,
            "range": "± 69815",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 854579229,
            "range": "± 6559777",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 872850646,
            "range": "± 3827383",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3345337625,
            "range": "± 13586887",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 878271062,
            "range": "± 9134343",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 894269458,
            "range": "± 6853097",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3332729562,
            "range": "± 9011058",
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
          "id": "e96ab3e11f98766b949a34d3f3330062e63438fe",
          "message": "Fix for #681 (#684)\n\nUse thiserror for public Error types.",
          "timestamp": "2023-07-12T03:57:54Z",
          "tree_id": "22661e0975d06920c835f5354496a4af268caf97",
          "url": "https://github.com/risc0/risc0/commit/e96ab3e11f98766b949a34d3f3330062e63438fe"
        },
        "date": 1689134555420,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2733643,
            "range": "± 95458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2958329,
            "range": "± 91877",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 5169622,
            "range": "± 151973",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848536854,
            "range": "± 4071079",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 868598833,
            "range": "± 5405402",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3377644833,
            "range": "± 13065458",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 880538666,
            "range": "± 7099901",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 901474229,
            "range": "± 5716694",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3369510875,
            "range": "± 15488124",
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
          "id": "6a357a6f1f56f24413a711819ea8e381271f2163",
          "message": "cargo risczero: update README with reference to remote proving (#690)\n\nThe bonsai quick start guide refers to this documentation as one of 4 options\r\nfor using Bonsai. This README does not contain any mention of remote proving\r\nand could be confusing for users who wish to use cargo risczero to generate a\r\ntemplate for remote proving. Add a simple reference to remote proving to\r\nprovide additional clarity.",
          "timestamp": "2023-07-12T17:13:57Z",
          "tree_id": "a8340f0da81b5879901ef523ccc1d04219216a2c",
          "url": "https://github.com/risc0/risc0/commit/6a357a6f1f56f24413a711819ea8e381271f2163"
        },
        "date": 1689182321750,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/execute",
            "value": 2693517,
            "range": "± 116288",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/execute",
            "value": 2906433,
            "range": "± 131557",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/execute",
            "value": 4974632,
            "range": "± 33666",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/prove",
            "value": 848764396,
            "range": "± 4124927",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/prove",
            "value": 865711979,
            "range": "± 4282405",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/prove",
            "value": 3340925583,
            "range": "± 10584711",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/total",
            "value": 871455375,
            "range": "± 6985529",
            "unit": "ns/iter"
          },
          {
            "name": "fib/1000/total",
            "value": 891585562,
            "range": "± 6786773",
            "unit": "ns/iter"
          },
          {
            "name": "fib/10000/total",
            "value": 3344005687,
            "range": "± 6880782",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}