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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNNQXCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWJBTiM4rFFQpAltyMvDslHc9BhBSdiWioeoGzQ1NYpAiAa3Qii%2FGL5LY7m57ak80%2BRkz6iRuaKsKKahdmDPVov6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMB3cVNaAJlFJJOPLhKtwDQ8Ta4WVchxuu%2BYyapRT7raLq85IoWq3GfpVVtqA7f8p25Mx4dzFIB30%2BRiEBxJ%2FXhnjQDESbsZP95WkkSJ4SAAIEMB%2B15Q4yTZ%2BkV6eBejzS%2BmzQo1cU2rtdahahkaVSDLpPx7A9i%2BWACVt%2BeZ26fZTdom5gg%2FJK25O8hBmj6xuM1x31gn9WoxXs0Qu9EpOB8mDARUSe6t2qobq62gPEi0lYp8HsFfTG26r9urCVF2XxfpXbPgogdNgBPGPJIoFhERmmb6DSFIgtlD%2BvNlRQiin4v9X1gEzbPe8vRenIsctWE18p41SEAGlyMsgbaKsnBOVBwUE3YwOJDnfD0P16PgoObE6WR5trTtUUVU%2BQN93u%2FLIN6adDFMiIfDkE7vXTWwjb18pYa5CuHw9yvRJAwyNMXNhi7RE0X%2B10%2F%2FT8Ch79rORIRN46%2BuMrOMuXAX95QXeEznur4kVzxuxdhy8VnudcDE7hKOi7%2B7XkswF3GkTAf48GevTm2zTIIElG4oRM%2FOIExBcAKxV2isBDHjlK65Rph2VbKXmsQ6aXAxqkQWkYa1dj%2FggyMcRYXYz2QoMxLl2VP2MEsjLn9pP%2FZW0XmKBiikxcBE7eqcpC0KHooZ2PnWbGW7g7W4WU67gwsbu4wAY6pgHbieykRnXxlh3cecSuI8JrCqym8Gk8fzKetaLaiYZSKnLXKZLThMUWQ%2B%2BdzUn5DX9vsC6k7QHeHhwrnMGINDw5dalulUlJjK4QDOOh6IzouPV6iTxRwiJxNq0B81hZKTY6a1xYD85dkWpzZ7lOo8ssL3EZeW6zQ1R9%2BVDZV45jcVNENLjMK%2FcMrtE019i29dO6%2BwO8Nh3RO1nawyb%2F76RcRJfyG4zU&X-Amz-Signature=48af3338bff4d84d1d1089c5c45c40aabd44083c7dc07fd3993fed345433dec6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNNQXCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWJBTiM4rFFQpAltyMvDslHc9BhBSdiWioeoGzQ1NYpAiAa3Qii%2FGL5LY7m57ak80%2BRkz6iRuaKsKKahdmDPVov6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMB3cVNaAJlFJJOPLhKtwDQ8Ta4WVchxuu%2BYyapRT7raLq85IoWq3GfpVVtqA7f8p25Mx4dzFIB30%2BRiEBxJ%2FXhnjQDESbsZP95WkkSJ4SAAIEMB%2B15Q4yTZ%2BkV6eBejzS%2BmzQo1cU2rtdahahkaVSDLpPx7A9i%2BWACVt%2BeZ26fZTdom5gg%2FJK25O8hBmj6xuM1x31gn9WoxXs0Qu9EpOB8mDARUSe6t2qobq62gPEi0lYp8HsFfTG26r9urCVF2XxfpXbPgogdNgBPGPJIoFhERmmb6DSFIgtlD%2BvNlRQiin4v9X1gEzbPe8vRenIsctWE18p41SEAGlyMsgbaKsnBOVBwUE3YwOJDnfD0P16PgoObE6WR5trTtUUVU%2BQN93u%2FLIN6adDFMiIfDkE7vXTWwjb18pYa5CuHw9yvRJAwyNMXNhi7RE0X%2B10%2F%2FT8Ch79rORIRN46%2BuMrOMuXAX95QXeEznur4kVzxuxdhy8VnudcDE7hKOi7%2B7XkswF3GkTAf48GevTm2zTIIElG4oRM%2FOIExBcAKxV2isBDHjlK65Rph2VbKXmsQ6aXAxqkQWkYa1dj%2FggyMcRYXYz2QoMxLl2VP2MEsjLn9pP%2FZW0XmKBiikxcBE7eqcpC0KHooZ2PnWbGW7g7W4WU67gwsbu4wAY6pgHbieykRnXxlh3cecSuI8JrCqym8Gk8fzKetaLaiYZSKnLXKZLThMUWQ%2B%2BdzUn5DX9vsC6k7QHeHhwrnMGINDw5dalulUlJjK4QDOOh6IzouPV6iTxRwiJxNq0B81hZKTY6a1xYD85dkWpzZ7lOo8ssL3EZeW6zQ1R9%2BVDZV45jcVNENLjMK%2FcMrtE019i29dO6%2BwO8Nh3RO1nawyb%2F76RcRJfyG4zU&X-Amz-Signature=3e4581034e997d8edc5b92e1b9db240fc7b3728b44f70a04cc954460bc8c7e54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
