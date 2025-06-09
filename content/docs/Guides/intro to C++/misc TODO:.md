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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP5ZUKD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoOw%2B1ri3sxttyBCIlq75I9C9AoakX7W%2B0t31ZwIs1wIhALVkI7l16hRUgP6vufUpM3iUVAWPaGoZ%2BC8sgqzsKTXRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFJBD%2BNwYNtnrJM4q3APAWb97W9CFzsC1kbHHXjwKiAVi4Y6a9rQD75DxwV0PBQpFJ3e1GwrEfnqwbq16EpHbW%2FnFL0q3%2BdcjHHZz5XO%2BSKChZarJXuYvw55%2F8SLEK%2FENx3M5czvMPqx2ywYjS8hKI9sUM2s2Db9wv3zKoJ0Uf0smoXeEelkhdl0E%2B5GVGtJhhjB%2B5zrkZHMBXyKSmYkJOgg%2BZSGFB90kbFxvHaw5RJquZgqT6Bdcv0uCQrz33kYlWuqzgdF1qe3EDoQwK05IUwNI1CgZEn2PysapVzytkdf1jK5zTlyCzGhmF3O2wI%2F5LXLqd1hrui0dKYAfeja%2FdBWrNv2AIdfghtAspacwCiHfOqtPySq%2BCQvOlGA6%2BUsIa6ZSO%2Be0utiMg4lv97iMbXHyroUbaA3grT5OeYYPNpqC5oGHoIslg1fIn9ZcjRAhQPe3bYlr9qSOxwz5Q6yiQJtPwM61Nxxwviax07GxVNAsvQ%2FJtoOtZgh4jcw%2F6oRidhSotGeGnHS0vh5KrtVzu%2FwbUkRlQw9z5h8ZfwE1N29htNsWMC9T2NOMyAnes9HzbYN6q4j8lGLY8u%2Frq%2F%2Fqy8jk4MbVk51CXb31BLQ%2BLkqyEZdMKhFOuK63cd%2BeBrvOlSd8APF1TV0UaTD93ZnCBjqkAaBWxGtrikJnNUu6CEPpfRUzHv6WIdpr3L8xNUezJo383aw%2FLkzUZaKcqJC9iWK9%2FNLRVIg1U4bAoCrf%2BI%2B0dZgKeGT8FhmIT3LxKot8HadAAZVBa5t6n4dyKxDIQDA6QZirRWPAc7vY0pqBsP%2BEH2UaaznstcALGgQui1KVIREd8%2BmsDzl4vIEKlsWlVJ1CG3ocmWUHnY29zojS9djRbUcnRzue&X-Amz-Signature=7b02dc35e60bd3863deabe8b82d5f0146bf727778e31d27b34ace0cb23e41446&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP5ZUKD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoOw%2B1ri3sxttyBCIlq75I9C9AoakX7W%2B0t31ZwIs1wIhALVkI7l16hRUgP6vufUpM3iUVAWPaGoZ%2BC8sgqzsKTXRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFJBD%2BNwYNtnrJM4q3APAWb97W9CFzsC1kbHHXjwKiAVi4Y6a9rQD75DxwV0PBQpFJ3e1GwrEfnqwbq16EpHbW%2FnFL0q3%2BdcjHHZz5XO%2BSKChZarJXuYvw55%2F8SLEK%2FENx3M5czvMPqx2ywYjS8hKI9sUM2s2Db9wv3zKoJ0Uf0smoXeEelkhdl0E%2B5GVGtJhhjB%2B5zrkZHMBXyKSmYkJOgg%2BZSGFB90kbFxvHaw5RJquZgqT6Bdcv0uCQrz33kYlWuqzgdF1qe3EDoQwK05IUwNI1CgZEn2PysapVzytkdf1jK5zTlyCzGhmF3O2wI%2F5LXLqd1hrui0dKYAfeja%2FdBWrNv2AIdfghtAspacwCiHfOqtPySq%2BCQvOlGA6%2BUsIa6ZSO%2Be0utiMg4lv97iMbXHyroUbaA3grT5OeYYPNpqC5oGHoIslg1fIn9ZcjRAhQPe3bYlr9qSOxwz5Q6yiQJtPwM61Nxxwviax07GxVNAsvQ%2FJtoOtZgh4jcw%2F6oRidhSotGeGnHS0vh5KrtVzu%2FwbUkRlQw9z5h8ZfwE1N29htNsWMC9T2NOMyAnes9HzbYN6q4j8lGLY8u%2Frq%2F%2Fqy8jk4MbVk51CXb31BLQ%2BLkqyEZdMKhFOuK63cd%2BeBrvOlSd8APF1TV0UaTD93ZnCBjqkAaBWxGtrikJnNUu6CEPpfRUzHv6WIdpr3L8xNUezJo383aw%2FLkzUZaKcqJC9iWK9%2FNLRVIg1U4bAoCrf%2BI%2B0dZgKeGT8FhmIT3LxKot8HadAAZVBa5t6n4dyKxDIQDA6QZirRWPAc7vY0pqBsP%2BEH2UaaznstcALGgQui1KVIREd8%2BmsDzl4vIEKlsWlVJ1CG3ocmWUHnY29zojS9djRbUcnRzue&X-Amz-Signature=92798e4393bdc9aa8f120feae2365450d75f0f38e3eadcc77c023ada89820f61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
