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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFEPDTY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDItXl0T09QjjiT3HsDaujOUCGtXrCaJaFihpL3SfdSRAIhAIZTckdUPQ9qzWMMymFwq6VWdzT0LDt3u2mb71XXBn3CKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2F5sVGZg8L891h5l4q3ANhV91x0aH6y9YOInjEPyk8Dy6AGEOF0elrTOD%2BOXps5WZq127iMLUx3UqNnGl5ffu2YeTxvBNKtL%2BNTYHYbxY6CDuhaCol2yQpkJPTStAQ3uLrjkmX77sYFAFXsOxhCcVgqdhybVtxtEAECP0SzaEt8b9h9%2BeIE45%2B5V0HPNtNlPvL6arK70x5pJruI791DK5UWJD9W6gi4Vr19lY4EVaaInQebqHc41n0IO4N%2FF9YJFs9s6MIcddXJ13m9Ne1N%2BOk6iRRLaEX%2F%2FwMqiYBNgHZXbKh2B2V5VtkIUniLReWoeJksdokFXjIZ%2FbXLPxQnog8xyTqe1htdqprirTPBa5o6sDJhHvzChgPKglA1Rh4u7UPJ10It%2FeTK%2FE6SENNhVOX%2BuQC%2Bk6ALaSjBqf9pI2nIFELoDAL9sWXrVc0rthw1T4b3pzV2%2BWFtr9gBSurnjkfCs%2B0on0Q47hAhyEKq%2Fs1%2FpNnG%2FmgVJ9VWiw8O3AqRuPY9cNI%2Ffb9%2FV%2FhVVeQJdLeGcUj2MvJtX3QVye8yl2yMghTArJoliyCWqKUS6tG%2BvnWd%2FtvOYSGag0H9jJNUNGK3m2r0Xmiu0wwJsoxyO%2FofoKcSuMC52CG1Z9ExVy5OZJrHCx5d2LytwQnqzC4jJi9BjqkAWiD2QU2%2FDgBaDv6U163eveKCC2N84K%2FaKd93yewZ5jLu40o0%2FbAQ%2FeiCDtkIfcSPIAh13T2xVk9YQ%2FT2mgtT%2FCO7d4fNHWlyGH1Waf06XoUbUpzXhPlEXwnefQCosz4Jlp%2BNokwLc4TAC6d49Puu1cTA72ueIeFE%2BPj%2B1LNhlyEtD7q%2FmzKeq8lXdpuFgh1Zbgm361BllKETWsED01Mc3YCHZ%2BX&X-Amz-Signature=7a042bd0148f166a78ff336e81752abe9c13863581ef16a73e9169187c020431&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFEPDTY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDItXl0T09QjjiT3HsDaujOUCGtXrCaJaFihpL3SfdSRAIhAIZTckdUPQ9qzWMMymFwq6VWdzT0LDt3u2mb71XXBn3CKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2F5sVGZg8L891h5l4q3ANhV91x0aH6y9YOInjEPyk8Dy6AGEOF0elrTOD%2BOXps5WZq127iMLUx3UqNnGl5ffu2YeTxvBNKtL%2BNTYHYbxY6CDuhaCol2yQpkJPTStAQ3uLrjkmX77sYFAFXsOxhCcVgqdhybVtxtEAECP0SzaEt8b9h9%2BeIE45%2B5V0HPNtNlPvL6arK70x5pJruI791DK5UWJD9W6gi4Vr19lY4EVaaInQebqHc41n0IO4N%2FF9YJFs9s6MIcddXJ13m9Ne1N%2BOk6iRRLaEX%2F%2FwMqiYBNgHZXbKh2B2V5VtkIUniLReWoeJksdokFXjIZ%2FbXLPxQnog8xyTqe1htdqprirTPBa5o6sDJhHvzChgPKglA1Rh4u7UPJ10It%2FeTK%2FE6SENNhVOX%2BuQC%2Bk6ALaSjBqf9pI2nIFELoDAL9sWXrVc0rthw1T4b3pzV2%2BWFtr9gBSurnjkfCs%2B0on0Q47hAhyEKq%2Fs1%2FpNnG%2FmgVJ9VWiw8O3AqRuPY9cNI%2Ffb9%2FV%2FhVVeQJdLeGcUj2MvJtX3QVye8yl2yMghTArJoliyCWqKUS6tG%2BvnWd%2FtvOYSGag0H9jJNUNGK3m2r0Xmiu0wwJsoxyO%2FofoKcSuMC52CG1Z9ExVy5OZJrHCx5d2LytwQnqzC4jJi9BjqkAWiD2QU2%2FDgBaDv6U163eveKCC2N84K%2FaKd93yewZ5jLu40o0%2FbAQ%2FeiCDtkIfcSPIAh13T2xVk9YQ%2FT2mgtT%2FCO7d4fNHWlyGH1Waf06XoUbUpzXhPlEXwnefQCosz4Jlp%2BNokwLc4TAC6d49Puu1cTA72ueIeFE%2BPj%2B1LNhlyEtD7q%2FmzKeq8lXdpuFgh1Zbgm361BllKETWsED01Mc3YCHZ%2BX&X-Amz-Signature=65f997c93565377a47f5386dbc134556d5fc4d8ecda0ca9fa6f515ba374b6526&X-Amz-SignedHeaders=host&x-id=GetObject)

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
