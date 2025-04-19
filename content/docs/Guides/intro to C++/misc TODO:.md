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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHU6Z2HP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC%2BJoFK6yllnxeTJgcYC45AidUb%2BzpKF6D6Rn9Y7p1TeQIhANVAzNE8rmj65CbeUyZA0TKXBPzA4%2FWFXpTdGyddyZrjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvO5z%2FmLFDULuPC4Aq3AOOAOQGStM8lfwa9He2fFnGZaiGivwy2Gtz7gUs9RaEQotkCzEoAt3fijFQEsxrL8nCAbbIOmat96UaKcAxC7vXrBgXz0WUYnwcs49naiLbIajReMbIlD1r%2FeQi9V87%2B3salJ47rqhHzp1if0LmFtUwN8pMiZnUr6Y%2BBn2ILd6hjSVPzJZ1l3IqFMB4BLS9haMbrJ%2B3qCquaPzRl8yGDORBTlXZttC%2FH4zPfxvMo4EjBtEQ9%2F8yY70xcbnPPnDziqXB9neHqzi7j0T66pPNEfYg5JyAjdEoFq7pHS748HVPU43FOWyRNBPLL%2F2qGUhxdCkhNf%2BnMHHa%2FFh6PJEQec9AO81FuTMNtcdmlZKahlfKEo7w7P8TcBqKHIzDmyV%2B32kvlLxPpZ7z0vKspl%2BWQsgvsCWNGiuPgAg9r9GNWjr3uFruW67Tm5yMNR1Ri3C5tGK7Ucc2mnSGQcRpLHXpnUzsb3sEh%2BKACMrgw%2F2S17dinAiAsv8OSSudu%2BXY5p7Fo3DmGEwZRe%2BpNGGEBYLEGqjlhc8Cs6%2F5Ip2fg5qoYBAAvHmTVKuLm6fpGxWWPHKncHl7WVDgzZq1NEHnkvTdkwWMZzQb%2F64t%2FZDwJUr%2BYlN%2B8WyTHIO%2FV8kp69mcTDDHgo%2FABjqkAQUQSCypZz1AUx7HzbspHQEq%2B4EPe35ysyq527dz%2Bm%2FB2tdfPjQ1vCjhYmytKYidyQlfMzBU%2FDs0UhqGfYMe3t7Ne3CZFzZBiRvFVMOuOzgfFZxm6c%2B8OBbmLZwuswFWE6DUy%2FrRFxMWiguHN1t2EbVKh3clBfLi7IyZ2bLe3Xvqw9taaIhkDEtTlSJjmTUvNSqxB36acLT6zfDbyIC081SREemJ&X-Amz-Signature=fdee2683145fc650f13327ee6c7712b44fdc281089104b435b82987a4db2a661&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHU6Z2HP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC%2BJoFK6yllnxeTJgcYC45AidUb%2BzpKF6D6Rn9Y7p1TeQIhANVAzNE8rmj65CbeUyZA0TKXBPzA4%2FWFXpTdGyddyZrjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvO5z%2FmLFDULuPC4Aq3AOOAOQGStM8lfwa9He2fFnGZaiGivwy2Gtz7gUs9RaEQotkCzEoAt3fijFQEsxrL8nCAbbIOmat96UaKcAxC7vXrBgXz0WUYnwcs49naiLbIajReMbIlD1r%2FeQi9V87%2B3salJ47rqhHzp1if0LmFtUwN8pMiZnUr6Y%2BBn2ILd6hjSVPzJZ1l3IqFMB4BLS9haMbrJ%2B3qCquaPzRl8yGDORBTlXZttC%2FH4zPfxvMo4EjBtEQ9%2F8yY70xcbnPPnDziqXB9neHqzi7j0T66pPNEfYg5JyAjdEoFq7pHS748HVPU43FOWyRNBPLL%2F2qGUhxdCkhNf%2BnMHHa%2FFh6PJEQec9AO81FuTMNtcdmlZKahlfKEo7w7P8TcBqKHIzDmyV%2B32kvlLxPpZ7z0vKspl%2BWQsgvsCWNGiuPgAg9r9GNWjr3uFruW67Tm5yMNR1Ri3C5tGK7Ucc2mnSGQcRpLHXpnUzsb3sEh%2BKACMrgw%2F2S17dinAiAsv8OSSudu%2BXY5p7Fo3DmGEwZRe%2BpNGGEBYLEGqjlhc8Cs6%2F5Ip2fg5qoYBAAvHmTVKuLm6fpGxWWPHKncHl7WVDgzZq1NEHnkvTdkwWMZzQb%2F64t%2FZDwJUr%2BYlN%2B8WyTHIO%2FV8kp69mcTDDHgo%2FABjqkAQUQSCypZz1AUx7HzbspHQEq%2B4EPe35ysyq527dz%2Bm%2FB2tdfPjQ1vCjhYmytKYidyQlfMzBU%2FDs0UhqGfYMe3t7Ne3CZFzZBiRvFVMOuOzgfFZxm6c%2B8OBbmLZwuswFWE6DUy%2FrRFxMWiguHN1t2EbVKh3clBfLi7IyZ2bLe3Xvqw9taaIhkDEtTlSJjmTUvNSqxB36acLT6zfDbyIC081SREemJ&X-Amz-Signature=98663ef1405770b3a171da5ac4e7eafcab701d7cb26fb503e142cbb54e993001&X-Amz-SignedHeaders=host&x-id=GetObject)

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
