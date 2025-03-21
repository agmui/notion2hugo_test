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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FT5VCK7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD5NjARY59uOT8TAyUcHRMOEbBsaIQ1Q%2BHE0ZDFW36uNwIhANj0yvAWX3I5jNU8hJ5pez9F74OHjF4txLjfoCknsrEdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw17waf4BARwPJMvscq3AOZnwRKoiW3vE57S2ODnODqOBy4MvCmJv3lMnluLQWs2PGKN4zPIyqLiuvmA58DaFp17pM05k2LBMZAW4UFrUxn17rPcK7kcETckSTy1bVJc4PmyQAnIIwjKi3DWVgbf7Tgecu0XVz02Yqctbj1KJuiU%2FQrBRRmNXK1vdo2cF9UlKHZ3Fc9Y9%2FmwuHnnWCtOwzrsWXgsTkspdRHdUG1gjsZiZLzsD7dQn9mKhpq3q%2Fta5xlVDPXsD%2Fu2P0MmvUMYxI11w96n%2FwxaKxuZJQ2Y26dZjAG6f3UzFMO7u7Ij8cwrztCwmWZYHqs0H23VIgvbSRw7xzrHJSAv3upalWdpslGygzFuXD4OzRBujlxBkPyEdwZ3S7EOGzVqNXPZWOJ96h%2Bkj8mOIxbomF%2BQctPs%2FKPY89LauB%2BNtkY62kFEqeZmlBGLi9f2KnaxwgP0rR1GTox9ccj6bN2dIkI6NG%2FcjhCzwrvIJR7UmawLqXDsd%2BFFjKN8tDNkS9hIBgXyJgdMYRwsXwcy2y8h3%2FBKl3O3kveCt5WcrIeoIFxpzt%2Bx7nehWASQI6Rd%2FJs3jcDlFCHw3xlKWv1tMoTaKfru6u1YhLBY2arddEsafZ8hQGedwd6xqXpSKgLNzOkMFXS%2BDC%2F3Pa%2BBjqkAU3EB%2FuwgZpa6z56%2FJ%2BRiilSaXOLPwj9FdzalI0WgQuyHQokTw2sE%2BrFSZyDMaZyEm7X7%2BlWPz2oVWyR4opPfTQdcNFGt98U%2BYj%2Bm8r2hGU3jCGhj2cCsv9TV2jn1f89G1raYjkXS0pqYHE7DbGann9W3ErlV1BNq0itae3ZtT%2BANb%2FaFEkfdwVM68e4zdLyk34Ulpb7G3%2FzFZ1sIa6g5RvE2s9W&X-Amz-Signature=05242022b74d215d0d9b53648e409c64bc1f832a74610173503b90598892ed76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FT5VCK7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD5NjARY59uOT8TAyUcHRMOEbBsaIQ1Q%2BHE0ZDFW36uNwIhANj0yvAWX3I5jNU8hJ5pez9F74OHjF4txLjfoCknsrEdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw17waf4BARwPJMvscq3AOZnwRKoiW3vE57S2ODnODqOBy4MvCmJv3lMnluLQWs2PGKN4zPIyqLiuvmA58DaFp17pM05k2LBMZAW4UFrUxn17rPcK7kcETckSTy1bVJc4PmyQAnIIwjKi3DWVgbf7Tgecu0XVz02Yqctbj1KJuiU%2FQrBRRmNXK1vdo2cF9UlKHZ3Fc9Y9%2FmwuHnnWCtOwzrsWXgsTkspdRHdUG1gjsZiZLzsD7dQn9mKhpq3q%2Fta5xlVDPXsD%2Fu2P0MmvUMYxI11w96n%2FwxaKxuZJQ2Y26dZjAG6f3UzFMO7u7Ij8cwrztCwmWZYHqs0H23VIgvbSRw7xzrHJSAv3upalWdpslGygzFuXD4OzRBujlxBkPyEdwZ3S7EOGzVqNXPZWOJ96h%2Bkj8mOIxbomF%2BQctPs%2FKPY89LauB%2BNtkY62kFEqeZmlBGLi9f2KnaxwgP0rR1GTox9ccj6bN2dIkI6NG%2FcjhCzwrvIJR7UmawLqXDsd%2BFFjKN8tDNkS9hIBgXyJgdMYRwsXwcy2y8h3%2FBKl3O3kveCt5WcrIeoIFxpzt%2Bx7nehWASQI6Rd%2FJs3jcDlFCHw3xlKWv1tMoTaKfru6u1YhLBY2arddEsafZ8hQGedwd6xqXpSKgLNzOkMFXS%2BDC%2F3Pa%2BBjqkAU3EB%2FuwgZpa6z56%2FJ%2BRiilSaXOLPwj9FdzalI0WgQuyHQokTw2sE%2BrFSZyDMaZyEm7X7%2BlWPz2oVWyR4opPfTQdcNFGt98U%2BYj%2Bm8r2hGU3jCGhj2cCsv9TV2jn1f89G1raYjkXS0pqYHE7DbGann9W3ErlV1BNq0itae3ZtT%2BANb%2FaFEkfdwVM68e4zdLyk34Ulpb7G3%2FzFZ1sIa6g5RvE2s9W&X-Amz-Signature=06f81c1b4766d665a109d44fa1c4e463be037bd0f72e307853abb7c76e2c2e94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
