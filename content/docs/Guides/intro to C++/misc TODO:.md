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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PBWRJK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRm6SmAa63SmY5TRxqu3Lumb7Fjq8GDiz5OcPIReje4wIhAI9Po29GGfJeNzKpo7YK1DwZ7wxx3U%2FBjv3hZqKtvbKnKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9tKfLXGHQPFutQq0q3AOfh%2FOVfJCEg%2FZmO5ZyX8pfkNg0dYtK6ioFxhuS6NkJqqYtust%2FQtEyQwvXbesK16P1M4vyN3wAxStRSQRr%2FkdtU%2BCsUkAwBgAMHkeS%2B9j8D30liRqHVVY3yNqQNGyW38E56Nqxm9akPqAvlwGfpcg2o73YdKHI0imnbpM%2BIvz8%2FiWmIZu2fTrHWr%2FL%2BRbJN3Q1J%2FjW04xz8vLgDDSfphBNpRccJht0xag8jQ%2BjjoPw2Ig%2Bu9AQ0zExdvKgKQOW%2Fo22ezV1zziUTtnjGqabZ5WGJQ9T0vXscEUCevQNpF0pKnGW4T3YXmQJqIYv9iG6sr4oXdkKsO%2FrhkPnj7cSoMfnzLQhGwyZd4wcHmFLhsCtP6MhCryTBdWit2xC26YkWCVZV6352s8C1GQc4rGxNthv6q0DDsZud8zGuDPqXqjcVt319DaE%2FkABAmo8XywT6V5TDBq4kUixcWrJ7YxZG7mKscSpo9p24pczPIJfpd%2F6t0gY3KFs687PaQRAmGYOSukFjENorhoigosvscLijR5qUYcrgsZqP%2FTuvFkO%2FCka%2F%2FrEyqgcLqjfKlcP0P68Kjf29kLrJdSBtqSN2X29ulgSVT%2Bw5uPIZcAoExi9gQjuv5KqcnJUUbQWEh6DYDCXzonDBjqkAbFhj4XGqgoefePcGhOdZuhcoZzJdx5mu321%2BEPlnvR%2FBbGPyS3xH66iAUfw12iNWkaeOfV%2BaoyJACY6g%2BhFeDtJ8r%2FMNnS%2BGTUfVE3vyTWGRdlSLHKDtT4U9CSQx7FykHP%2BRoCOGjCJlDT4QMGDiSPv2d62J8VV558H5TVaOKQuGyMNFRM1U2vYLBP6lu9%2BecD%2BnImy4RfxTX17v6jyMvyPVegm&X-Amz-Signature=6140da340567e1cb78b056eb8304c656e37df56d03848a674756aa687d1aec55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PBWRJK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRm6SmAa63SmY5TRxqu3Lumb7Fjq8GDiz5OcPIReje4wIhAI9Po29GGfJeNzKpo7YK1DwZ7wxx3U%2FBjv3hZqKtvbKnKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9tKfLXGHQPFutQq0q3AOfh%2FOVfJCEg%2FZmO5ZyX8pfkNg0dYtK6ioFxhuS6NkJqqYtust%2FQtEyQwvXbesK16P1M4vyN3wAxStRSQRr%2FkdtU%2BCsUkAwBgAMHkeS%2B9j8D30liRqHVVY3yNqQNGyW38E56Nqxm9akPqAvlwGfpcg2o73YdKHI0imnbpM%2BIvz8%2FiWmIZu2fTrHWr%2FL%2BRbJN3Q1J%2FjW04xz8vLgDDSfphBNpRccJht0xag8jQ%2BjjoPw2Ig%2Bu9AQ0zExdvKgKQOW%2Fo22ezV1zziUTtnjGqabZ5WGJQ9T0vXscEUCevQNpF0pKnGW4T3YXmQJqIYv9iG6sr4oXdkKsO%2FrhkPnj7cSoMfnzLQhGwyZd4wcHmFLhsCtP6MhCryTBdWit2xC26YkWCVZV6352s8C1GQc4rGxNthv6q0DDsZud8zGuDPqXqjcVt319DaE%2FkABAmo8XywT6V5TDBq4kUixcWrJ7YxZG7mKscSpo9p24pczPIJfpd%2F6t0gY3KFs687PaQRAmGYOSukFjENorhoigosvscLijR5qUYcrgsZqP%2FTuvFkO%2FCka%2F%2FrEyqgcLqjfKlcP0P68Kjf29kLrJdSBtqSN2X29ulgSVT%2Bw5uPIZcAoExi9gQjuv5KqcnJUUbQWEh6DYDCXzonDBjqkAbFhj4XGqgoefePcGhOdZuhcoZzJdx5mu321%2BEPlnvR%2FBbGPyS3xH66iAUfw12iNWkaeOfV%2BaoyJACY6g%2BhFeDtJ8r%2FMNnS%2BGTUfVE3vyTWGRdlSLHKDtT4U9CSQx7FykHP%2BRoCOGjCJlDT4QMGDiSPv2d62J8VV558H5TVaOKQuGyMNFRM1U2vYLBP6lu9%2BecD%2BnImy4RfxTX17v6jyMvyPVegm&X-Amz-Signature=b9a11b8d329af48cf6f41172f85607d6213f1798747d103befa49b4d65421c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
