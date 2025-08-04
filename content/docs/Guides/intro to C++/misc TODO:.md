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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFN4YIL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCeyy6qAPo31wc0v1w25iBxoJvzcttnDzYJ7Tu7cUpvmwIga1lVkNrILah2kIOCMYYxsuI4N7c7SMn1GOOnVLIIlagq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLd%2Be2htwNd4lTOMHyrcA6f46MSMhX1IQmF5zZZBQDdouOl9GLwHiSyQeCvKya%2BOjdiPm981ugXgvpCwr9H4VTwQuODIAhgnQptCTUlCi9y8XjQ8S4%2B9Y0mYhhJ%2BmtGEpCYClbmGskSzh2e2H2tn6bC1q4oNZ4mpQFpW8cm09mRmLwns8vZ1ayGYHGrY341EoG1HlkBiHLWNUbi1HPXqG1yrslpplhSQRSuTuV9vrPtDHghw9FJ5Afffx1pE2%2FDFeXKheUoHXS%2Fm5x0dOOV%2B031XQERI775EkwD886rd9%2B4TosZOyxQq4irZP9AuALZBnsBiMNVSW8W0sDurnLJ1AWwOCIDCPMVkDysSRBkl1XXOaejxGpNosK33LWB0d7dbSAPWi45eFYOfMzaxME7vmEfaurhjNIuGg1vKYYQJ46n2ojkP88LWjoYZyM5koBNeuduX1U%2Fi1JCXiWyngBu%2FPWyLT0CMn5FoZLkoCdCNko5qGVxIrFkiDtcU3AsNB%2BpGaRrrSRtfWWE2589w2QgVMJD5vE6Udkr4dIPVh%2FXPQGR%2B8tf%2B%2Bpa9JVLOMQ8qwU09UNyLV1XwzpqiJxdIl41s8d%2BwwPWK%2BWxXnqiTlXN1CQlj%2BF%2BsL7uV1PVnFy19mlogwmc5aspmHUIk2qzCMJvPw8QGOqUBd6V7RU85hDg%2FVkW6GpZ7bO2SG3vAaYN8wcblgFd%2B8KpwcIEbpjOJgK0g5WqyeZ7%2FnSEIDfZ9kZLV9PsfUJ6H916kVRcjvNee0BceI9UIQKTWIE%2FMyVKlG65dhZ%2F11tNZ3U0gaZBRycp1jBn40pQavtZ%2BQ4gy1pnclQcLo6eHjHqV51oGo54jcVRGD%2FzAZmwSBeGcydMRPrWRpuKo2f3chgVFgTxW&X-Amz-Signature=16a6cc75da04db29f126350943d7766b02e6ad06e506fada52068cd50b9d29cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFN4YIL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCeyy6qAPo31wc0v1w25iBxoJvzcttnDzYJ7Tu7cUpvmwIga1lVkNrILah2kIOCMYYxsuI4N7c7SMn1GOOnVLIIlagq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLd%2Be2htwNd4lTOMHyrcA6f46MSMhX1IQmF5zZZBQDdouOl9GLwHiSyQeCvKya%2BOjdiPm981ugXgvpCwr9H4VTwQuODIAhgnQptCTUlCi9y8XjQ8S4%2B9Y0mYhhJ%2BmtGEpCYClbmGskSzh2e2H2tn6bC1q4oNZ4mpQFpW8cm09mRmLwns8vZ1ayGYHGrY341EoG1HlkBiHLWNUbi1HPXqG1yrslpplhSQRSuTuV9vrPtDHghw9FJ5Afffx1pE2%2FDFeXKheUoHXS%2Fm5x0dOOV%2B031XQERI775EkwD886rd9%2B4TosZOyxQq4irZP9AuALZBnsBiMNVSW8W0sDurnLJ1AWwOCIDCPMVkDysSRBkl1XXOaejxGpNosK33LWB0d7dbSAPWi45eFYOfMzaxME7vmEfaurhjNIuGg1vKYYQJ46n2ojkP88LWjoYZyM5koBNeuduX1U%2Fi1JCXiWyngBu%2FPWyLT0CMn5FoZLkoCdCNko5qGVxIrFkiDtcU3AsNB%2BpGaRrrSRtfWWE2589w2QgVMJD5vE6Udkr4dIPVh%2FXPQGR%2B8tf%2B%2Bpa9JVLOMQ8qwU09UNyLV1XwzpqiJxdIl41s8d%2BwwPWK%2BWxXnqiTlXN1CQlj%2BF%2BsL7uV1PVnFy19mlogwmc5aspmHUIk2qzCMJvPw8QGOqUBd6V7RU85hDg%2FVkW6GpZ7bO2SG3vAaYN8wcblgFd%2B8KpwcIEbpjOJgK0g5WqyeZ7%2FnSEIDfZ9kZLV9PsfUJ6H916kVRcjvNee0BceI9UIQKTWIE%2FMyVKlG65dhZ%2F11tNZ3U0gaZBRycp1jBn40pQavtZ%2BQ4gy1pnclQcLo6eHjHqV51oGo54jcVRGD%2FzAZmwSBeGcydMRPrWRpuKo2f3chgVFgTxW&X-Amz-Signature=550b177024fa1d4da5139cc5583e467088951d013a1d46f316c271b354db50d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
