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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUICKZJN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIACYQJckQB9AkEAk4Lb2PwtDiZhu8dCJssjG%2BW18GlgoAiBR8IYauwZOLc%2FX%2BGmHYLmknz9MKmp0tWLG2OvdZK2scSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLOPv3Vvx2yp8nhYKtwDQzfa%2FNhTkFj%2F8R5%2F%2BqFQU%2B3SmQA9SDRG502Tn8N8Ito6Wgb1aVGcM2PmzUgrh3UaN9JwD1HoB7UO1bL3%2B9ihQuXOYkb0smW76bW7GX8xUgdMMRNyIISa642H%2FCQIqhli5GqCHi29pXALOLJgbE8ROrN6P%2Fi%2BLeI6Q282%2Bv63VS8lvvPhWGSaJRBM%2BWDMWLNKEHPFHQipfz8cHg%2B2xGmOZ0sQFz1rPgwTW3u0ynDsxGDGPAklJM0SPEp%2B%2BCNkT96YY4OvpWgPf%2BVF67i9iZu08EEZSt6RBK621lu7K4CQ3HxCYPc3GATFa29rfvUgzvzaIjYtcchvOvaWSOHCAVcHriAAqL8jOcDC3oZHKwi4cQA27znZ41E%2B28QIuDQdFfxkzlCQGfLWXreXyyKusIKiwNUc0l5KKqiBrm7i1FMem%2BHjhmBI%2BOTpfEJ6u%2Fn0qZbe55f6c8QDnOx5pJ9RKBgwjKoYABkFL%2BDdUdeRFvrYQJ77FqmVLZrXqUsol2y2DTZ%2BJKJo%2BklPN5FdRrJ4SYiVf%2FsC%2F652AR%2BmACsK8dNsBhTO0cciNLCaBiPNGunIv6wNrb33k0d5g938lbGqvjzZWPwg57Trvf5ojH7ZM40hwAn48dBd9OzMhuBzaYAwhofVvQY6pgGWsi2VjYb0mIgFbqTqCbVIwceZ0PGLKZDuiyhlVOTz3UtFTv3f2LXokimnpGqDaqlcRC0vWHbWXjcB%2F%2Fn1JjUldLBh6zrkVwhG7%2Btz61NW09%2FZo4T30ueax0At29grT%2B%2FqwJTYW3GZvXJUNpf10vhKYVYu8B8Jpp6eoGAHRxpBSJ550zQzLD36uRwfUHY65%2BzPeG0es155ouMCRYmm4XkbVvC15zdr&X-Amz-Signature=97ecc83d4980a71b2adddfc7eb4eae1af312d4d638401ca140c680d240cc2d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUICKZJN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIACYQJckQB9AkEAk4Lb2PwtDiZhu8dCJssjG%2BW18GlgoAiBR8IYauwZOLc%2FX%2BGmHYLmknz9MKmp0tWLG2OvdZK2scSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLOPv3Vvx2yp8nhYKtwDQzfa%2FNhTkFj%2F8R5%2F%2BqFQU%2B3SmQA9SDRG502Tn8N8Ito6Wgb1aVGcM2PmzUgrh3UaN9JwD1HoB7UO1bL3%2B9ihQuXOYkb0smW76bW7GX8xUgdMMRNyIISa642H%2FCQIqhli5GqCHi29pXALOLJgbE8ROrN6P%2Fi%2BLeI6Q282%2Bv63VS8lvvPhWGSaJRBM%2BWDMWLNKEHPFHQipfz8cHg%2B2xGmOZ0sQFz1rPgwTW3u0ynDsxGDGPAklJM0SPEp%2B%2BCNkT96YY4OvpWgPf%2BVF67i9iZu08EEZSt6RBK621lu7K4CQ3HxCYPc3GATFa29rfvUgzvzaIjYtcchvOvaWSOHCAVcHriAAqL8jOcDC3oZHKwi4cQA27znZ41E%2B28QIuDQdFfxkzlCQGfLWXreXyyKusIKiwNUc0l5KKqiBrm7i1FMem%2BHjhmBI%2BOTpfEJ6u%2Fn0qZbe55f6c8QDnOx5pJ9RKBgwjKoYABkFL%2BDdUdeRFvrYQJ77FqmVLZrXqUsol2y2DTZ%2BJKJo%2BklPN5FdRrJ4SYiVf%2FsC%2F652AR%2BmACsK8dNsBhTO0cciNLCaBiPNGunIv6wNrb33k0d5g938lbGqvjzZWPwg57Trvf5ojH7ZM40hwAn48dBd9OzMhuBzaYAwhofVvQY6pgGWsi2VjYb0mIgFbqTqCbVIwceZ0PGLKZDuiyhlVOTz3UtFTv3f2LXokimnpGqDaqlcRC0vWHbWXjcB%2F%2Fn1JjUldLBh6zrkVwhG7%2Btz61NW09%2FZo4T30ueax0At29grT%2B%2FqwJTYW3GZvXJUNpf10vhKYVYu8B8Jpp6eoGAHRxpBSJ550zQzLD36uRwfUHY65%2BzPeG0es155ouMCRYmm4XkbVvC15zdr&X-Amz-Signature=cb57ebc3d1789f65f54266cf430f84b7790d37fa08259c7c27f0840da5fad91f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
