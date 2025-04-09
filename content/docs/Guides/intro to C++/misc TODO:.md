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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4COGKY7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCN2rqfmtlIn48L5eBI4UjZuD1O%2F1NcEgwLyr3mVJ0EuQIgLLDnFgK%2BscwhtdUeXoduMTIAZBFUye2DDJQwyVfMI4gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8DX3TtUq74hiQLTyrcA%2F1E2la1Hca7F%2B1owMYwognVIHDbmwzUDPmemOgePEClFVrdXHrGwADT%2BtMw1AtP7vvmYOoQPMRbEIfSUTju3xDsRRp8JpYApd76vtjZkYt1IYaOy07%2F7wKIbV9TVekCNUWOjaQ8iPLJUFwxRNekuNM%2FcBp5XWBXeJbShQgK79mPxrxp2PyGrq2RL0CXN9r6B4tGO6LW2oSZPSl9PlALoocy0OawSRMZ87fsbgCNPIWyK6%2B1CuWOq%2BRryuiehMf%2BQTn%2Fjhh4b4%2BN9NxJuQXUnUfwygMomD2wVHbMaQkAAyRJXWoeefbrfk5DHFRKbOT4amkDVSRIqA6Jr10LhrA8kko%2Bt3QNgrt%2FL%2BsqcCCSIIPCfOVar3AbLCZ7zSTHIgP2xztf4snjLFgTakl0Gub2PAONN3sqCKYBA37cxeebV92IC9H4EaMofoKIisxYBcqAtGOUB3mli7heOq9thk1SLA2TAimQsrwIp426HR%2BjV1dRGAEoFR0q1Cc%2FngdRQE1PoI3ufUFmAi9zr72TlKYIChyCSQn5sWfXZUCFkoWenN9g9j9HmEtCk9%2Bka9F4czdTcFD%2BQH0u9vWKlNWuhE%2FE8I5kbOS%2B66%2FPjXfqfpqKr6wOq%2FuXNhdDs5F75ufJMJ%2Fh1r8GOqUBeaQdqxB6AK9vNm4lk3zwjXBKTzIKyIHlAohhDmTx1jH%2FUkSHh4vrwu2BiGFTDGTDUudWyI70incodkn3YQqDBw7YZ2CTutDkppIto9lmrC8au%2FeoTS4G6J1BWxpO5kHdsnW%2B7ECMixEdpz7H0AFp6RV997i8wHZ3wm2nQ4I%2BPFt2abN9kbrmtFV0H5QpRoGqvdADRi9QED3wb7wyCF9Qr4LpHxvw&X-Amz-Signature=90473ee923c18d387716062cbf9abe8350bd4723092259898dfbe9a4cc80cccf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4COGKY7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCN2rqfmtlIn48L5eBI4UjZuD1O%2F1NcEgwLyr3mVJ0EuQIgLLDnFgK%2BscwhtdUeXoduMTIAZBFUye2DDJQwyVfMI4gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8DX3TtUq74hiQLTyrcA%2F1E2la1Hca7F%2B1owMYwognVIHDbmwzUDPmemOgePEClFVrdXHrGwADT%2BtMw1AtP7vvmYOoQPMRbEIfSUTju3xDsRRp8JpYApd76vtjZkYt1IYaOy07%2F7wKIbV9TVekCNUWOjaQ8iPLJUFwxRNekuNM%2FcBp5XWBXeJbShQgK79mPxrxp2PyGrq2RL0CXN9r6B4tGO6LW2oSZPSl9PlALoocy0OawSRMZ87fsbgCNPIWyK6%2B1CuWOq%2BRryuiehMf%2BQTn%2Fjhh4b4%2BN9NxJuQXUnUfwygMomD2wVHbMaQkAAyRJXWoeefbrfk5DHFRKbOT4amkDVSRIqA6Jr10LhrA8kko%2Bt3QNgrt%2FL%2BsqcCCSIIPCfOVar3AbLCZ7zSTHIgP2xztf4snjLFgTakl0Gub2PAONN3sqCKYBA37cxeebV92IC9H4EaMofoKIisxYBcqAtGOUB3mli7heOq9thk1SLA2TAimQsrwIp426HR%2BjV1dRGAEoFR0q1Cc%2FngdRQE1PoI3ufUFmAi9zr72TlKYIChyCSQn5sWfXZUCFkoWenN9g9j9HmEtCk9%2Bka9F4czdTcFD%2BQH0u9vWKlNWuhE%2FE8I5kbOS%2B66%2FPjXfqfpqKr6wOq%2FuXNhdDs5F75ufJMJ%2Fh1r8GOqUBeaQdqxB6AK9vNm4lk3zwjXBKTzIKyIHlAohhDmTx1jH%2FUkSHh4vrwu2BiGFTDGTDUudWyI70incodkn3YQqDBw7YZ2CTutDkppIto9lmrC8au%2FeoTS4G6J1BWxpO5kHdsnW%2B7ECMixEdpz7H0AFp6RV997i8wHZ3wm2nQ4I%2BPFt2abN9kbrmtFV0H5QpRoGqvdADRi9QED3wb7wyCF9Qr4LpHxvw&X-Amz-Signature=d081dd3d1ca4b36068866b4b12b26b615ccecb0fe9e5d25ade07cb7055614dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
