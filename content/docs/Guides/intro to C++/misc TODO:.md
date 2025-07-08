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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJ6PVZE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDydTg2aUsQzotuX%2BYqcW10BsMCez6qgdzQeDwI0GmpHQIgCUFZiLPw%2FoOu9%2FCA9CcoWvHabIRiaJrnsRlwyq%2FvZTMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQdWc6z6oqOGBJw6yrcAwloLbLvNwksqWaN2pUBCLPDsvdLbynnF21pzqkkTmfJdl0C2MSAukKvYeroloUhsqbXGRWVOSD9s0utz41R465IP6ZIOsmdwX0QYTIiCtM7nKxknD6xo9tGwwDGkoymBsQs%2Bj8DOsQKx2pHAuR%2F2NtEplENbKzuawDarqTzoYm6Zu3p8lzGsa0Tk9DZlUtFsoXPd%2F5bJoajXAmtcUMRVt2JIjpVw18Gaxyn%2BcdSbgS71Q5Fe0qPj5EeHISk26MtpHgEGLhI%2Bg1eTP7ai5pzpTBGX6L0fj3Mfi17BxCVenjp6hpuecdUzV%2BEAvevhQZVLjfXaeNK2Z8lPrD54SbuxKkYNhMj%2FaOCJbV6tXYXxzG%2B0KMKITa0ePiAJhuAWJKv4H3JPHk67037Wn6XFHcHlTF944cIgI%2BaAakv09UOzmbJjH1YYhz5O6hVPWsyBE%2BPC2TyhjHxzrNlGSEQV4f66cHFGHmVg%2Fpv4gBOcUxAyjvJRCXDaWNkF%2Fsu7YnsxCPJsmXhjEn3j3T2Hmlx3u8es69N%2Ft8Tbd7JrAleNBcKyjZxTLGizSypqX3AytAhzDi2%2BIAPmH7ayfYhutJ%2BVwjY1u1FthsD1XoH7wSD%2FDp4iMlyibKOyuvrnlDrrsQ3MJ2Vs8MGOqUBrsfNIJ1ukttXCsjZJ9NHl0pN4haeLFwQIh2y98V%2BU0ghZfkL7rZ5ZaQRLJNHdceCCHbaAdNcUVMxibjAIhAtmlRz7%2FzCkNjYaA%2BhDyzj%2FgnD%2FUafpe3TXqVO%2Bg9k4ZAgzIj6mWpyxRGkxLQ6Vrr09eJFef3mNUFwupDYKgwz2fliSLHFK3BXmMl8D9wsmdDGuMJQ4BqX1vxaYbC5qA3hRRmRd79Q&X-Amz-Signature=b65e9b4d0d379ec7519c2ab601fc02b3468e44a92062b630653f7367b378efa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJ6PVZE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDydTg2aUsQzotuX%2BYqcW10BsMCez6qgdzQeDwI0GmpHQIgCUFZiLPw%2FoOu9%2FCA9CcoWvHabIRiaJrnsRlwyq%2FvZTMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQdWc6z6oqOGBJw6yrcAwloLbLvNwksqWaN2pUBCLPDsvdLbynnF21pzqkkTmfJdl0C2MSAukKvYeroloUhsqbXGRWVOSD9s0utz41R465IP6ZIOsmdwX0QYTIiCtM7nKxknD6xo9tGwwDGkoymBsQs%2Bj8DOsQKx2pHAuR%2F2NtEplENbKzuawDarqTzoYm6Zu3p8lzGsa0Tk9DZlUtFsoXPd%2F5bJoajXAmtcUMRVt2JIjpVw18Gaxyn%2BcdSbgS71Q5Fe0qPj5EeHISk26MtpHgEGLhI%2Bg1eTP7ai5pzpTBGX6L0fj3Mfi17BxCVenjp6hpuecdUzV%2BEAvevhQZVLjfXaeNK2Z8lPrD54SbuxKkYNhMj%2FaOCJbV6tXYXxzG%2B0KMKITa0ePiAJhuAWJKv4H3JPHk67037Wn6XFHcHlTF944cIgI%2BaAakv09UOzmbJjH1YYhz5O6hVPWsyBE%2BPC2TyhjHxzrNlGSEQV4f66cHFGHmVg%2Fpv4gBOcUxAyjvJRCXDaWNkF%2Fsu7YnsxCPJsmXhjEn3j3T2Hmlx3u8es69N%2Ft8Tbd7JrAleNBcKyjZxTLGizSypqX3AytAhzDi2%2BIAPmH7ayfYhutJ%2BVwjY1u1FthsD1XoH7wSD%2FDp4iMlyibKOyuvrnlDrrsQ3MJ2Vs8MGOqUBrsfNIJ1ukttXCsjZJ9NHl0pN4haeLFwQIh2y98V%2BU0ghZfkL7rZ5ZaQRLJNHdceCCHbaAdNcUVMxibjAIhAtmlRz7%2FzCkNjYaA%2BhDyzj%2FgnD%2FUafpe3TXqVO%2Bg9k4ZAgzIj6mWpyxRGkxLQ6Vrr09eJFef3mNUFwupDYKgwz2fliSLHFK3BXmMl8D9wsmdDGuMJQ4BqX1vxaYbC5qA3hRRmRd79Q&X-Amz-Signature=2fc0d917edf68bb89fd821cf83ae372791355b4999aa648198d4d2316d7d435d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
