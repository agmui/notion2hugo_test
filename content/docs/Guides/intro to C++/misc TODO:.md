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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJRRVQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKcyP9B7zCjPpqgHAEvTwFXfeztUFUxjeJ%2BV7yJAK8UwIhAI%2BmEOLwAocH84HqJGSwDhuI77qimDd%2Fwwv1NmTcLwzkKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h3uC1v%2F5gGNgGMMq3ANZu7SEZcHDrVYqjKLii%2BvE3sxVA9pow1qq%2Bp1b1YIrcbWVFI0vbWCt40VmI7y6C0l3OmLuVQyooSLblBJXN46sNQZ%2Fb0LJfeBFXGAmC9Zp5KEIV5bd5xxSaeQXO%2FVXbW6giiNuAO1AlvNC6Lpuc4yExdNBm2kMxsr5ANLUfi2CYfQJIfErmgD0BTZgka9nAmEObD%2Bh%2BeVe30eYzG%2FjUfvWWIutIIqn5A7GaBg7t9Pm4Lf1AtxsmbujHNFRKMVnTDr8okc6bCkGZsik%2F5qfRyxNns3DRQKOfW9RiM06P5apmTpSm%2F7kfo6DrBwiEdg5IsDb6%2BdfooNNTuySA5Qi2%2BBbm1eRpglklbm6PdnmwZYMs9Nv%2B3CWidm%2FwgHS7pngge1XbcWf1gl8yJ%2Bfw0hC180YUwnn5BL778G0cXwVhWCXNvKcsAGTO%2BR9owE4oUrxwDWAdMdejWcKdLHv9t6eYNrEmYIw1q5m9LXW9D1ZNb9KfLVVcxa3t%2FKk2MY%2FV1NWG5Z%2Br8DmZ2zrf8QLAhPe0QaQm%2B1tuyMNzD8yl5FkGfUWgva6CuefmIF%2B59J2JXaveassC1A%2BNGpRetQCyxIM73iW6IvIgTUoImphSDvRj2nvM8eKaKznSC2zODetMDDC4%2F2%2BBjqkAUjM1OG6NLGQ7NSxdMjbrWhq%2BO1wr8wnjcKg7QTPJr6rg0%2FYCwRseOnhApSrBKk7JIjSpIz6B4EuOkVj8JC5wauRI%2F1MkGV%2BmGKFfOAUfAFJcafx2ZiRX9zeLE2FCXdSiN0DaYJCa1dqqHEQiK%2FHYRnGYSR5S%2BIbFycRxR7cQIQi%2FAsleiCfayDJvDFEeZ%2F%2BrOMM4VYI0TODprNR4esJgCgsZlWO&X-Amz-Signature=9f76444b7a5a095c29fc7fc7193e21966a474f717f6d7e0dd4af6e0335e9f1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJRRVQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKcyP9B7zCjPpqgHAEvTwFXfeztUFUxjeJ%2BV7yJAK8UwIhAI%2BmEOLwAocH84HqJGSwDhuI77qimDd%2Fwwv1NmTcLwzkKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h3uC1v%2F5gGNgGMMq3ANZu7SEZcHDrVYqjKLii%2BvE3sxVA9pow1qq%2Bp1b1YIrcbWVFI0vbWCt40VmI7y6C0l3OmLuVQyooSLblBJXN46sNQZ%2Fb0LJfeBFXGAmC9Zp5KEIV5bd5xxSaeQXO%2FVXbW6giiNuAO1AlvNC6Lpuc4yExdNBm2kMxsr5ANLUfi2CYfQJIfErmgD0BTZgka9nAmEObD%2Bh%2BeVe30eYzG%2FjUfvWWIutIIqn5A7GaBg7t9Pm4Lf1AtxsmbujHNFRKMVnTDr8okc6bCkGZsik%2F5qfRyxNns3DRQKOfW9RiM06P5apmTpSm%2F7kfo6DrBwiEdg5IsDb6%2BdfooNNTuySA5Qi2%2BBbm1eRpglklbm6PdnmwZYMs9Nv%2B3CWidm%2FwgHS7pngge1XbcWf1gl8yJ%2Bfw0hC180YUwnn5BL778G0cXwVhWCXNvKcsAGTO%2BR9owE4oUrxwDWAdMdejWcKdLHv9t6eYNrEmYIw1q5m9LXW9D1ZNb9KfLVVcxa3t%2FKk2MY%2FV1NWG5Z%2Br8DmZ2zrf8QLAhPe0QaQm%2B1tuyMNzD8yl5FkGfUWgva6CuefmIF%2B59J2JXaveassC1A%2BNGpRetQCyxIM73iW6IvIgTUoImphSDvRj2nvM8eKaKznSC2zODetMDDC4%2F2%2BBjqkAUjM1OG6NLGQ7NSxdMjbrWhq%2BO1wr8wnjcKg7QTPJr6rg0%2FYCwRseOnhApSrBKk7JIjSpIz6B4EuOkVj8JC5wauRI%2F1MkGV%2BmGKFfOAUfAFJcafx2ZiRX9zeLE2FCXdSiN0DaYJCa1dqqHEQiK%2FHYRnGYSR5S%2BIbFycRxR7cQIQi%2FAsleiCfayDJvDFEeZ%2F%2BrOMM4VYI0TODprNR4esJgCgsZlWO&X-Amz-Signature=3b53dd3ed94daad5417dd8247faca9e660d7eb180258ee6cdf491f7d1cb6f632&X-Amz-SignedHeaders=host&x-id=GetObject)

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
