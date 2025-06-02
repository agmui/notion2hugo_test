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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32B7VX4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID2zCi1E%2FCTIZckv3D6Z4GbTNvujmJutnUMgWyTmK8hOAiEApVxDkoukseaUJ4RAfBawnxxU1XsZ3eFAgSohcf%2F87kIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi7SPvUMR6XsA%2BU7CrcA7G6zdE%2BHAgyuCrdrTWEQ%2B0W9Xi4A9ZUdjhShqMaoCl69%2Fnc4nzknnnOOf4vUF0vONWLb0DqetpHeEo4K%2BE68AfZ%2FMFg53pFky9Ogws77u%2FFhZRmKbJJjy5kMunQIuWojB%2FMq8trw8W40wzad1UO0ausos8xFIT6TIccAJrDQacj0u3PhaXF00G%2BjtYH5lLeGJba6c7R8FbsSXpdGNkm6%2FeYgMRXAwHMAHvLJGoBRB%2BZigAiqxzvdmPoIFCKIRHbR47F%2F5V1%2BYixZyfVhGriL0CB6Mihfdhk1PgpGE3kJomnUXYNek29B%2FMPlcCOeldIc95%2FhLHdCnW6U778fFarOmVgaz9tgBCdR76TcGPH%2B9%2BY2v7lvEQGof9FNYSn52cplntCPRrhBNeh6comf%2Bv4la5SPp7Pd9Ok7g9mSxNh6EhTj4evlD5Hqu9y9FhjQSIhwQJw4PKFxUIPhTMaPyVIFn7Vb%2FiwRcYfO%2B3fxCanDtRTn9BgkvNl67uKN6pFSHDClrivKkB72o01wYNlzt%2FkCzJAF02uvhaUnh2miNkxFLvtXMws%2FQb4rsfi7vKlpMR9p78rnTw9S5AKDFHZw%2BbvWLEVflD6ZUvFyiynHGiiKOEwkscnpjHslKWOzKlPMMDC9cEGOqUBRo8k0Fo7bLLp5W7xSFS3toTz462QyzCnaHvfrD2z%2BMRc9gDtwN70KPJDgZW82IjYUHc588k5ulW%2FOZp8r38XyGPw7At3A%2BFTE7ARcqwTXczhOj8yhvsTky%2BNNCunAng3Y32q8lt4Tgzp9ru2JG3592M0xtiuD27ZBCo9yyUdPtZnuH4CRq9laT%2FYIKLFUD9RjRyw3SxvzqDKxWT7kBYpNVHIg%2Bhy&X-Amz-Signature=c9ab1eb3e786c7980eaa7266afd80025cd8068e63db3393cad09d1258b063c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32B7VX4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID2zCi1E%2FCTIZckv3D6Z4GbTNvujmJutnUMgWyTmK8hOAiEApVxDkoukseaUJ4RAfBawnxxU1XsZ3eFAgSohcf%2F87kIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi7SPvUMR6XsA%2BU7CrcA7G6zdE%2BHAgyuCrdrTWEQ%2B0W9Xi4A9ZUdjhShqMaoCl69%2Fnc4nzknnnOOf4vUF0vONWLb0DqetpHeEo4K%2BE68AfZ%2FMFg53pFky9Ogws77u%2FFhZRmKbJJjy5kMunQIuWojB%2FMq8trw8W40wzad1UO0ausos8xFIT6TIccAJrDQacj0u3PhaXF00G%2BjtYH5lLeGJba6c7R8FbsSXpdGNkm6%2FeYgMRXAwHMAHvLJGoBRB%2BZigAiqxzvdmPoIFCKIRHbR47F%2F5V1%2BYixZyfVhGriL0CB6Mihfdhk1PgpGE3kJomnUXYNek29B%2FMPlcCOeldIc95%2FhLHdCnW6U778fFarOmVgaz9tgBCdR76TcGPH%2B9%2BY2v7lvEQGof9FNYSn52cplntCPRrhBNeh6comf%2Bv4la5SPp7Pd9Ok7g9mSxNh6EhTj4evlD5Hqu9y9FhjQSIhwQJw4PKFxUIPhTMaPyVIFn7Vb%2FiwRcYfO%2B3fxCanDtRTn9BgkvNl67uKN6pFSHDClrivKkB72o01wYNlzt%2FkCzJAF02uvhaUnh2miNkxFLvtXMws%2FQb4rsfi7vKlpMR9p78rnTw9S5AKDFHZw%2BbvWLEVflD6ZUvFyiynHGiiKOEwkscnpjHslKWOzKlPMMDC9cEGOqUBRo8k0Fo7bLLp5W7xSFS3toTz462QyzCnaHvfrD2z%2BMRc9gDtwN70KPJDgZW82IjYUHc588k5ulW%2FOZp8r38XyGPw7At3A%2BFTE7ARcqwTXczhOj8yhvsTky%2BNNCunAng3Y32q8lt4Tgzp9ru2JG3592M0xtiuD27ZBCo9yyUdPtZnuH4CRq9laT%2FYIKLFUD9RjRyw3SxvzqDKxWT7kBYpNVHIg%2Bhy&X-Amz-Signature=8513d53343de7d87e1d2654a7ef40e5ad88e53dda73ba2fa124d369f088aad60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
