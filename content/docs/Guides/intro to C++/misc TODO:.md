---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XV4NKC7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCrb2RKnBRPwYq3vfDtsxeA%2BPuPSK6wElke8Q3lEKVpQIgYeEUEcP1LaB5%2FOV0UbCzSZ1qpQcpSfg5s1HbFGiCbDsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN87tZjNUTbHCfZfCyrcA%2FU1Yw6i3wMAQa2MTSBbc4qurvgkar0CzFlBBufPytvP5TN9yRSQstB9nxdtFf5cPITYYjozPo5W%2BEhjWUMCSxHD6LhWKMvRUyPhlwgTEAYazxMUIx8HbmLU0RDbpqx5uUoxRSiJe4zSOG5KuDRvjVX7AoGViFUocCuOwsAh2sMpPiPK%2FqJ%2BaZZthdKFp8WqWAvCCIPYZnXr6QEBapcGQhM1wf0dqnwrj%2FcsYHHzSOGzvDW0wyC%2Bz%2F5Qf5IlB8ujNVfr%2BF41RELZHgQv7qnpdI7q6qWvoEZHw4nKPt56Rvz6ao8%2B2ECTTEtdj7VNJ4f19OpRc8ai9v683XvEzFW%2B7Zqp0mmsJhYpNqb3clsjkgKqWdfntEfxmLfanScNMaXPGijs6lScSPP%2FDApwKcu4ZD6UnqkPbnhEKX8ihRDUCiC986CspISnK0ZkgLkoefIILREoPteynrSgmpZ19C5rDRyfGofnFCgOaaj3ktzSc7tlEX1iJVFnoj1JSGwWJ1m%2Bf6AkPMmlKQRzSolsidCRMsC2EOl6T7uRJLro1icGFF7E1%2B5NWeOMLs3%2FYhnmskT3kR3sELZbyKvXT19V2%2BsW1qn9WEVx2Yve%2Bmo3R9vw%2BM5p5d0bWDnSyb6xi8%2BwMKakzcMGOqUBcWClwzd4eNFPgX4ZZDgC55kTl%2BaUmtzAYLvXClU8u%2Bd923aAqeBtXKaoC0R7UNdmcZpSQ2fChjlFZ%2FsGPBYxiJku0RRRXkje5lANBdc1D4WCTZCzS1XRaKbPBWFHgxHxMI8bZANTuH6xDDDpqfkcihB4Cvb8ZJc1QzDqzOPUhSBm%2FhoZi519O8pDesSZW9Is3uv0JT5j94Y5SZZ5Ap7KZr5GdBC6&X-Amz-Signature=6ebd9363e410c056fe8cec67a24bdf1c58b2ea7bad357fc3308b48cc97ec85c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XV4NKC7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCrb2RKnBRPwYq3vfDtsxeA%2BPuPSK6wElke8Q3lEKVpQIgYeEUEcP1LaB5%2FOV0UbCzSZ1qpQcpSfg5s1HbFGiCbDsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN87tZjNUTbHCfZfCyrcA%2FU1Yw6i3wMAQa2MTSBbc4qurvgkar0CzFlBBufPytvP5TN9yRSQstB9nxdtFf5cPITYYjozPo5W%2BEhjWUMCSxHD6LhWKMvRUyPhlwgTEAYazxMUIx8HbmLU0RDbpqx5uUoxRSiJe4zSOG5KuDRvjVX7AoGViFUocCuOwsAh2sMpPiPK%2FqJ%2BaZZthdKFp8WqWAvCCIPYZnXr6QEBapcGQhM1wf0dqnwrj%2FcsYHHzSOGzvDW0wyC%2Bz%2F5Qf5IlB8ujNVfr%2BF41RELZHgQv7qnpdI7q6qWvoEZHw4nKPt56Rvz6ao8%2B2ECTTEtdj7VNJ4f19OpRc8ai9v683XvEzFW%2B7Zqp0mmsJhYpNqb3clsjkgKqWdfntEfxmLfanScNMaXPGijs6lScSPP%2FDApwKcu4ZD6UnqkPbnhEKX8ihRDUCiC986CspISnK0ZkgLkoefIILREoPteynrSgmpZ19C5rDRyfGofnFCgOaaj3ktzSc7tlEX1iJVFnoj1JSGwWJ1m%2Bf6AkPMmlKQRzSolsidCRMsC2EOl6T7uRJLro1icGFF7E1%2B5NWeOMLs3%2FYhnmskT3kR3sELZbyKvXT19V2%2BsW1qn9WEVx2Yve%2Bmo3R9vw%2BM5p5d0bWDnSyb6xi8%2BwMKakzcMGOqUBcWClwzd4eNFPgX4ZZDgC55kTl%2BaUmtzAYLvXClU8u%2Bd923aAqeBtXKaoC0R7UNdmcZpSQ2fChjlFZ%2FsGPBYxiJku0RRRXkje5lANBdc1D4WCTZCzS1XRaKbPBWFHgxHxMI8bZANTuH6xDDDpqfkcihB4Cvb8ZJc1QzDqzOPUhSBm%2FhoZi519O8pDesSZW9Is3uv0JT5j94Y5SZZ5Ap7KZr5GdBC6&X-Amz-Signature=e63d4e4fedb9edcbbe9b99c75a3c4873f4fd3664714a191e447be9adf52cfa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
