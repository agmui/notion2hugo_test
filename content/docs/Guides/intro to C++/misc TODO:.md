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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WEWQUF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCoGpou4eLUooCnMiZCLX6%2FHclYYNTq94EpcA8YzaEmawIhAMKsZgP0G5zULpTJNuN5510uE1ThEV4O3RGJ8HPGRqSZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSjSgkQmQlorAGUh4q3AOeQke6tNDRDPYpb7qL94FztMujhINqEztxw2OH2rUeVes9uYCiwUVIDtLVSgVR9FzVh5NXMd4m9PFSJ0evYb%2F5EJQbkNK1qoJ4lz77mdqKzYFTtvUUPGMHskwhcmIBnR0PBvbr9GZsMoFOhTlJT5OqmRtNzMou6EMAudUpybVCISRaM3fujuNIf8M31d3mbVWpTzS%2FXvBjhbCN%2BgV3dXhAF4%2BSx0CFxcRditvS5I0MGG3SeNYdH6u%2B5DHliSj0AZ3Wwkepsyj9iZTS4F653OD1cwCXZ5EQ2XWzBW6kWSZWAbn6KX2j41gPo2UsjffTuAonBTA8kFc1tu6NzvgIn9rhpQ7RAI0Hb6Wbwb3RzVDIrTJ2e1JX%2F36hnUkTVZmLrBs%2BAj7295GvWBjlmFlR3y2KeZJt6pnmJUyGgMwnEGTdxM0H3a37HgZublDwQb05tYO4jwdG7aHOKCIdZIl%2FYJdcC98%2BdoSS1NqDllXpGjlNPm%2BnfXGUAKc1kRQhWl88gTVG1Uu4ywnOO8vPn7OAp4AuVD0d5O3SDlY9YlHCPEoDahS3knMZjaMM8JjH30P1NL%2FNsNrmmZ840mEkI0D8%2FLGLyS7OGawm18tW2Ue0o%2BEzCU7EQFBxOUr%2FI4nb7TCC%2FfbBBjqkAfixXRrv%2F4pf8ifwU6TX4PAgYB5cFKYQIlhpXvZDitHHRTNX8V1y3ZQ4dh7MnOP1Ckz7EZvPktAGGjvMs8TMlUjBPSoLIiDO0yywh5nacwC8llTEqDSE0sbs2im%2BWZ181ooL9EjOY11625CBbC%2B8%2Bz4EL%2BjKJ3YnG9m1Rl9vAjpLdGhmtkSYQLVgrdJFym6TRSqAE37enMoyT3EljRkSDCc8w4Ip&X-Amz-Signature=473c71cb93b02ea01e3d1636aca231c6acc1b0236c36862f1781321d263fcb48&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WEWQUF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCoGpou4eLUooCnMiZCLX6%2FHclYYNTq94EpcA8YzaEmawIhAMKsZgP0G5zULpTJNuN5510uE1ThEV4O3RGJ8HPGRqSZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSjSgkQmQlorAGUh4q3AOeQke6tNDRDPYpb7qL94FztMujhINqEztxw2OH2rUeVes9uYCiwUVIDtLVSgVR9FzVh5NXMd4m9PFSJ0evYb%2F5EJQbkNK1qoJ4lz77mdqKzYFTtvUUPGMHskwhcmIBnR0PBvbr9GZsMoFOhTlJT5OqmRtNzMou6EMAudUpybVCISRaM3fujuNIf8M31d3mbVWpTzS%2FXvBjhbCN%2BgV3dXhAF4%2BSx0CFxcRditvS5I0MGG3SeNYdH6u%2B5DHliSj0AZ3Wwkepsyj9iZTS4F653OD1cwCXZ5EQ2XWzBW6kWSZWAbn6KX2j41gPo2UsjffTuAonBTA8kFc1tu6NzvgIn9rhpQ7RAI0Hb6Wbwb3RzVDIrTJ2e1JX%2F36hnUkTVZmLrBs%2BAj7295GvWBjlmFlR3y2KeZJt6pnmJUyGgMwnEGTdxM0H3a37HgZublDwQb05tYO4jwdG7aHOKCIdZIl%2FYJdcC98%2BdoSS1NqDllXpGjlNPm%2BnfXGUAKc1kRQhWl88gTVG1Uu4ywnOO8vPn7OAp4AuVD0d5O3SDlY9YlHCPEoDahS3knMZjaMM8JjH30P1NL%2FNsNrmmZ840mEkI0D8%2FLGLyS7OGawm18tW2Ue0o%2BEzCU7EQFBxOUr%2FI4nb7TCC%2FfbBBjqkAfixXRrv%2F4pf8ifwU6TX4PAgYB5cFKYQIlhpXvZDitHHRTNX8V1y3ZQ4dh7MnOP1Ckz7EZvPktAGGjvMs8TMlUjBPSoLIiDO0yywh5nacwC8llTEqDSE0sbs2im%2BWZ181ooL9EjOY11625CBbC%2B8%2Bz4EL%2BjKJ3YnG9m1Rl9vAjpLdGhmtkSYQLVgrdJFym6TRSqAE37enMoyT3EljRkSDCc8w4Ip&X-Amz-Signature=e4b5b121566ca1fd45c43c5f99d97f7c7b1963761372df8231cb2ad6d0327bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
