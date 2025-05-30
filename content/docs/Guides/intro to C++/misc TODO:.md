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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG5CLBG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJ7XRfppy6O%2FLAA6mQG7L6wJONHnHCQjr19%2F0D5UxMAiEAjpU%2FDDH%2Fi4aU4WukhLWoiBgIOuFXCnbDEN8P98p99ywqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoT5uYgpE%2BcQV6%2FwircA6drP%2B8jtYkvzMc7F3FDsH8XorFDVftNhZ059MNGRVpGitnp0UBWvj%2BLvlrACmCv%2F8hsnuCzoRp7PM1BZFgWuahfeBxZNjkf1dYxQRq%2F5TLzN%2FxQeMHM36OdHorFrrXXJlpujnDnztgxurClC33Bx8uSnVBXwAHFx3TANnWT7es4hQMv%2Frpf4siEtRhqq%2BgAKm0rCzh%2BVOXQe4Z7%2BtAwA8vIbZ%2BvjAsuut4BU2HY9r%2FenU9q6lV7dr13zv9auxGzLt48K0G28rikR%2BA7ee2zWfrA4r9gfdGboKL4fkyXqgR1lEXeXRsuZrj2GPnf%2BY4yYcwu8Rs8%2Foe5cPPzulwSPwfYnOK0SAysSG1ZTDzxLLkVITECc%2FjUsy5yyC%2BssyL7lMF7%2Bs1LTAfwEt2XABGLt3CkY5E5mF51G9irfBs4Qgmf3V6D6Tj5eGmUOtqryBTxdbFj9iRj3VoyuwHjrRq%2BnnTo58jORCieFErEhIuLa8k7MJ9eONPG7N5%2B4mvxMEpr%2BXXfu0WiSI58naW5jbwnV0LU19XY33ujRf6RlCoFxxOZJz%2FmzITW9PBK1zMJswvsD1DeuNU9IdnnKVWA490i8%2B2DGFUJsBbws6CqkQGcLZNDLMC71JkTz6m6nu1uMP%2F%2B5MEGOqUBpSjKFNgredmZsE4%2FEnKMvQC7Dq8%2Bsx9Bx044cmbiiZPxOoHme3vrlK%2BVjsr0HS8nGnZbC7FRmz2Y1OONTSF9D6axtP4pVrmgpLOuPID6rcuYkGa7QoZCeYkvVgXAZ5H9iul1ruGb4gg67CRSb1wDnJS0K%2Fml4yL3QUTlSlQTt1IwKHFnLdsSpWQCMaTR0AcO8uV7CO0kaRyMK8tGzYb5uexo70cx&X-Amz-Signature=c7a77e4f64c9962e7d618377f2f42ba48f17b71d95a91c30099bd87d4bc30632&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG5CLBG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJ7XRfppy6O%2FLAA6mQG7L6wJONHnHCQjr19%2F0D5UxMAiEAjpU%2FDDH%2Fi4aU4WukhLWoiBgIOuFXCnbDEN8P98p99ywqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoT5uYgpE%2BcQV6%2FwircA6drP%2B8jtYkvzMc7F3FDsH8XorFDVftNhZ059MNGRVpGitnp0UBWvj%2BLvlrACmCv%2F8hsnuCzoRp7PM1BZFgWuahfeBxZNjkf1dYxQRq%2F5TLzN%2FxQeMHM36OdHorFrrXXJlpujnDnztgxurClC33Bx8uSnVBXwAHFx3TANnWT7es4hQMv%2Frpf4siEtRhqq%2BgAKm0rCzh%2BVOXQe4Z7%2BtAwA8vIbZ%2BvjAsuut4BU2HY9r%2FenU9q6lV7dr13zv9auxGzLt48K0G28rikR%2BA7ee2zWfrA4r9gfdGboKL4fkyXqgR1lEXeXRsuZrj2GPnf%2BY4yYcwu8Rs8%2Foe5cPPzulwSPwfYnOK0SAysSG1ZTDzxLLkVITECc%2FjUsy5yyC%2BssyL7lMF7%2Bs1LTAfwEt2XABGLt3CkY5E5mF51G9irfBs4Qgmf3V6D6Tj5eGmUOtqryBTxdbFj9iRj3VoyuwHjrRq%2BnnTo58jORCieFErEhIuLa8k7MJ9eONPG7N5%2B4mvxMEpr%2BXXfu0WiSI58naW5jbwnV0LU19XY33ujRf6RlCoFxxOZJz%2FmzITW9PBK1zMJswvsD1DeuNU9IdnnKVWA490i8%2B2DGFUJsBbws6CqkQGcLZNDLMC71JkTz6m6nu1uMP%2F%2B5MEGOqUBpSjKFNgredmZsE4%2FEnKMvQC7Dq8%2Bsx9Bx044cmbiiZPxOoHme3vrlK%2BVjsr0HS8nGnZbC7FRmz2Y1OONTSF9D6axtP4pVrmgpLOuPID6rcuYkGa7QoZCeYkvVgXAZ5H9iul1ruGb4gg67CRSb1wDnJS0K%2Fml4yL3QUTlSlQTt1IwKHFnLdsSpWQCMaTR0AcO8uV7CO0kaRyMK8tGzYb5uexo70cx&X-Amz-Signature=9cec949b6e5c53eec1e9920f3d29264d5ffb773ccbff84893ec76f5cd800ef8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
