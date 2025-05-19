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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRXQTLH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD07s7VMdzMDQDlUVGpVJ6kJA5BqP1%2BNPiveZM8Kpn6gwIhAOK56zXSFn1Ws%2F3%2B0HD34F9vmY2%2F5SLclmJlPPAlLpJ%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvG8z9Qi3ILFimoKoq3AOjYm7OaShoHbcgJheH4mE88v3F89QaI%2FXZe0eisJF%2F8%2BL%2FsQ5R1TGAfuPmaPm5CZTCjiPXLeGlwKl%2BnVuFM0omB98hCrFBb1f5yLjR08U%2F3o%2B5qTFv2I1%2BUoWfBo8M2ovSA3Msi3STyuJHMKsymtJwS5dI0NKpG99r8ym7unfAmTSvXya42IqU1ynyunKZTiKkf2d15YjV%2FoUCoDSQisEkOZWcM1Fsx2UZawBiqFn2qmpptptubcjqA6o9yZPrQCtYc5aR0plAidZRhzSUOmJdlSTe34Zbl%2FYf1onJvzarSYRwNwSXbVizPEAjDZ%2FFrvuLrQTIX%2Fjpcvqt9UTKLzwQS%2B6yFj1zTO1nMNL39PSxY4XRWcTm9buPdSAvboEhObhgKwcroeQj0Hse2xEh1eqA6JpHB%2BocXtnFjELxmDxRXJLO8BdiAeZCcB%2F%2BGeWRtjIsT6MezvHFxAJv%2FV%2FpYuIvVfL76Xbfo5OIqoqvanNeSKf0x1WvZvvm3pcoBzOJWxwl23bD9CDoBvC4H3Wd86e3IHriSkw60i3O%2BaU0OsD2uG7HlZGWR%2FcyCqBfv5%2BwTHxNAIl9yij8EJNK1rcFka9RHgrW0t5gvHbkOvOh3SCpZCQsfI7ajnItbR3O7DDn%2FazBBjqkASj46svyVpnrcozvSH7tAU%2BAq0XQpjvfKEwL6jnDbdVzPWKZUl8ThogvBhH76kTV3tjRV9J7evDkOJwEQVQrqZR99kzzU7VF7QvgiEgOnH5UFd0oXQn4PBcEn7rRXH36rh2fg%2BO4qzjRSkx%2ByehVQpHDluKq98r%2FWkVlE%2BMDDkIqCRzlj%2B2MhwLm38JwEelrVrqrFUWs5MJ5AlBRkQ%2BYiI7Zd1OY&X-Amz-Signature=306ee48a27353124e3a6972cca0fe9329151ed4a71734c1f693f0883cad77848&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRXQTLH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD07s7VMdzMDQDlUVGpVJ6kJA5BqP1%2BNPiveZM8Kpn6gwIhAOK56zXSFn1Ws%2F3%2B0HD34F9vmY2%2F5SLclmJlPPAlLpJ%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvG8z9Qi3ILFimoKoq3AOjYm7OaShoHbcgJheH4mE88v3F89QaI%2FXZe0eisJF%2F8%2BL%2FsQ5R1TGAfuPmaPm5CZTCjiPXLeGlwKl%2BnVuFM0omB98hCrFBb1f5yLjR08U%2F3o%2B5qTFv2I1%2BUoWfBo8M2ovSA3Msi3STyuJHMKsymtJwS5dI0NKpG99r8ym7unfAmTSvXya42IqU1ynyunKZTiKkf2d15YjV%2FoUCoDSQisEkOZWcM1Fsx2UZawBiqFn2qmpptptubcjqA6o9yZPrQCtYc5aR0plAidZRhzSUOmJdlSTe34Zbl%2FYf1onJvzarSYRwNwSXbVizPEAjDZ%2FFrvuLrQTIX%2Fjpcvqt9UTKLzwQS%2B6yFj1zTO1nMNL39PSxY4XRWcTm9buPdSAvboEhObhgKwcroeQj0Hse2xEh1eqA6JpHB%2BocXtnFjELxmDxRXJLO8BdiAeZCcB%2F%2BGeWRtjIsT6MezvHFxAJv%2FV%2FpYuIvVfL76Xbfo5OIqoqvanNeSKf0x1WvZvvm3pcoBzOJWxwl23bD9CDoBvC4H3Wd86e3IHriSkw60i3O%2BaU0OsD2uG7HlZGWR%2FcyCqBfv5%2BwTHxNAIl9yij8EJNK1rcFka9RHgrW0t5gvHbkOvOh3SCpZCQsfI7ajnItbR3O7DDn%2FazBBjqkASj46svyVpnrcozvSH7tAU%2BAq0XQpjvfKEwL6jnDbdVzPWKZUl8ThogvBhH76kTV3tjRV9J7evDkOJwEQVQrqZR99kzzU7VF7QvgiEgOnH5UFd0oXQn4PBcEn7rRXH36rh2fg%2BO4qzjRSkx%2ByehVQpHDluKq98r%2FWkVlE%2BMDDkIqCRzlj%2B2MhwLm38JwEelrVrqrFUWs5MJ5AlBRkQ%2BYiI7Zd1OY&X-Amz-Signature=59b5f434f34c90694b3b830afa2a8b3ef8b4bd8328ef12e7dd428d824bc14904&X-Amz-SignedHeaders=host&x-id=GetObject)

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
