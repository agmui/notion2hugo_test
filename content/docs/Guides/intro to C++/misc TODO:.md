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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQBEBLF4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0buONlEpkC6UBJ%2FzYFYEn6RHlnACb7HycZyNI4YTVVAiEAxqtp4qywfU7ep0bvg9s%2B8tSqeHkXgySyWPo7%2F8vd03wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIZJbht1yiL91Wl9iSrcA%2BGIpK8UAONYAsuxSnJmDHDRPrgNoK0Cq87Y%2FAb72u5fR%2Bf9i3KEgoDZ7qTOnJ%2B%2Ff1oM4osJnpECsWMkks2U2gx8j3ZBAQtWGwcDm7e4pLGCuaP7wMgFc%2FgsFGQYWooYM4fIyhgYv4ToHuKwVjKg8eSkXd8vnbQq6S7ZVc8ho67YKdWYWiYOGhOmZcgDmQRbyG2RQOAa43ZSXeOeHHsy%2FTOIZ2QM3UgB5COVSTChzVYfBLlmZNS8HU8kYboENPWjJA3KlAy0obRd2SZ5Mp3%2BH%2FzEk6fRlRkBIjc%2BZzsSsueUoC6IIEpoqH89Cf0zNv%2FzQHtOq%2FxxO69wvVmlQYm%2FtTS4wa2tLGldAfwOSXhiulznj01WwyXDFa5ozDYUTjrqz59bHSNs8994tll3dhkV3SGVlLqr%2BPkA6kODBZm3GnsM%2FkOBwuu1j6mhyrNGBnYXjlEF14ubezAbZZ4JIe6N3O4aF%2BrhHuoBZg8OkZbdW42aQKuda3L2bYLrcMAFPPkGuOpzepKqTuxp00tRIxTiNojoak1Tkxif0eSEq34f30i4MKn4%2B9D0YAGc2HDWasEW81tfZuqLON%2B8vl42NcaBhkbANGe8eiptChjINRCp6U63tqZ72jLaWwQstfZSMLLdtMAGOqUB0VFd0DhVAz9cN99EzZDe0c3T9Yc8Ows2CoJhEzAP50lhd48Vy%2FbO03jtkATCjfsTb3CbPO2Lnh7Jm45eO9N3kDGoBtg3TrXIZJp1Ltf4y31j6ZZgLvO%2FLgLAUzvHtSRp5%2BXH0G%2BstelOSjr3OtBM6oVxkAN5j%2FmdlE1QoE1o0e6HqWQZ%2BZmNOi6TMYZ58DV9D8a7QcQlE4k7BqWnb1IL49lC3ndy&X-Amz-Signature=c8a346ffcb3fc5c38b0f7c992a171e6a54da9028e0b87a256df0f737d16fa84f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQBEBLF4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0buONlEpkC6UBJ%2FzYFYEn6RHlnACb7HycZyNI4YTVVAiEAxqtp4qywfU7ep0bvg9s%2B8tSqeHkXgySyWPo7%2F8vd03wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIZJbht1yiL91Wl9iSrcA%2BGIpK8UAONYAsuxSnJmDHDRPrgNoK0Cq87Y%2FAb72u5fR%2Bf9i3KEgoDZ7qTOnJ%2B%2Ff1oM4osJnpECsWMkks2U2gx8j3ZBAQtWGwcDm7e4pLGCuaP7wMgFc%2FgsFGQYWooYM4fIyhgYv4ToHuKwVjKg8eSkXd8vnbQq6S7ZVc8ho67YKdWYWiYOGhOmZcgDmQRbyG2RQOAa43ZSXeOeHHsy%2FTOIZ2QM3UgB5COVSTChzVYfBLlmZNS8HU8kYboENPWjJA3KlAy0obRd2SZ5Mp3%2BH%2FzEk6fRlRkBIjc%2BZzsSsueUoC6IIEpoqH89Cf0zNv%2FzQHtOq%2FxxO69wvVmlQYm%2FtTS4wa2tLGldAfwOSXhiulznj01WwyXDFa5ozDYUTjrqz59bHSNs8994tll3dhkV3SGVlLqr%2BPkA6kODBZm3GnsM%2FkOBwuu1j6mhyrNGBnYXjlEF14ubezAbZZ4JIe6N3O4aF%2BrhHuoBZg8OkZbdW42aQKuda3L2bYLrcMAFPPkGuOpzepKqTuxp00tRIxTiNojoak1Tkxif0eSEq34f30i4MKn4%2B9D0YAGc2HDWasEW81tfZuqLON%2B8vl42NcaBhkbANGe8eiptChjINRCp6U63tqZ72jLaWwQstfZSMLLdtMAGOqUB0VFd0DhVAz9cN99EzZDe0c3T9Yc8Ows2CoJhEzAP50lhd48Vy%2FbO03jtkATCjfsTb3CbPO2Lnh7Jm45eO9N3kDGoBtg3TrXIZJp1Ltf4y31j6ZZgLvO%2FLgLAUzvHtSRp5%2BXH0G%2BstelOSjr3OtBM6oVxkAN5j%2FmdlE1QoE1o0e6HqWQZ%2BZmNOi6TMYZ58DV9D8a7QcQlE4k7BqWnb1IL49lC3ndy&X-Amz-Signature=428bd19bbc491fd1fe95810990c8fb5fc28f6580c5a6a863e7f48e48553b1930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
