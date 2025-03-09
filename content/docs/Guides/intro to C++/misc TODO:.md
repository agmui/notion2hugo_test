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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W645NYD7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBhxNnitbFQSWivnQP%2BLBHed56O6dXvWi0OlkC5jXDBrAiAqhsCV0%2BQAAWDZ90jLwBTCC4l44nmLm8UiIBiywxBDvSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMuJ7uR3eahiAvLfWaKtwDWS%2FsdSE%2BMXSevcddQoKKLjHc3kHWMGm4TFs4Ch32EeN9CTGOzktZQH8n7qHgfJnT2fcpj%2BxxD03rGuE3Gxv0mQAJLRi91JbNaSNBwGg8eRgmTg%2Fkdj7kajrmC5u%2FIl43GHXpQcU6ladzjXhaaqvaBwVsLhYDviOjRQApn1t6U%2B0qamsmSe%2F0m%2FZqPzf5leC929DivvkDgMmImnaSz%2BKdD%2FtEPW%2BrsmZ%2B3Y8Qj%2Bf%2FMg1ST0I4le%2Ff2mUr6RjgT6Wa%2FJVg8MNo9WthN23HAmelp2c0YxoUVwaStWoCQIXqR6lAJu3EHpfUMD5zEKWJ%2BL4HMjx1un%2FJ05K%2BjVG%2Bca7jZ%2Ff%2BSmTsoeIps7VNEbCQECDoKrMLvI3UxCXSVFFtHwiIxJn4dGVYbrrne1DP7g2ieskFTGfxUAAfECzOxKTrMXw4jWY2cW9Ehf20FvGuMmhwpe%2BGrksvTNyVCHqtAfkz9Y8MNiBkgwxJVwtncWLchIRlGUrRyz%2FTIU5o4ndQoMj1SeZj4SFrjMGkEK0bqySVgKNgK4xInLlsdEUsuCceD6H29x%2BvP1KWVXFJmnThNt2pbVqarunYj5ln5uHpPaObDt8A663agWLwv8watN2BNTSTOP4OkfbNorQX488w3uu0vgY6pgFMPHTeDddeyWBBKySe7Bb0OcxbtdHY95%2BWNrGUghn4LPZxIw3hfM%2Bm8mSPdrZyPo9NtbMH984nrco2uB%2FAAUybg55axUs8XDNu%2F17vqWCisBkSK0jVtxmWFiY1PlGzcqcwFVv3IpWILwfHMJ8kw%2BkPA7hP39RdBC0ZGkWb8lZ5760POppl6ctZL5EOgFLeY5Mmpe6jg0cHq65zwS7bdoj0WXN%2BqpOQ&X-Amz-Signature=c48eba722b39ba34aef48eb4fd7042ef4fdf568a570da8db477edf1eb70ae0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W645NYD7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBhxNnitbFQSWivnQP%2BLBHed56O6dXvWi0OlkC5jXDBrAiAqhsCV0%2BQAAWDZ90jLwBTCC4l44nmLm8UiIBiywxBDvSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMuJ7uR3eahiAvLfWaKtwDWS%2FsdSE%2BMXSevcddQoKKLjHc3kHWMGm4TFs4Ch32EeN9CTGOzktZQH8n7qHgfJnT2fcpj%2BxxD03rGuE3Gxv0mQAJLRi91JbNaSNBwGg8eRgmTg%2Fkdj7kajrmC5u%2FIl43GHXpQcU6ladzjXhaaqvaBwVsLhYDviOjRQApn1t6U%2B0qamsmSe%2F0m%2FZqPzf5leC929DivvkDgMmImnaSz%2BKdD%2FtEPW%2BrsmZ%2B3Y8Qj%2Bf%2FMg1ST0I4le%2Ff2mUr6RjgT6Wa%2FJVg8MNo9WthN23HAmelp2c0YxoUVwaStWoCQIXqR6lAJu3EHpfUMD5zEKWJ%2BL4HMjx1un%2FJ05K%2BjVG%2Bca7jZ%2Ff%2BSmTsoeIps7VNEbCQECDoKrMLvI3UxCXSVFFtHwiIxJn4dGVYbrrne1DP7g2ieskFTGfxUAAfECzOxKTrMXw4jWY2cW9Ehf20FvGuMmhwpe%2BGrksvTNyVCHqtAfkz9Y8MNiBkgwxJVwtncWLchIRlGUrRyz%2FTIU5o4ndQoMj1SeZj4SFrjMGkEK0bqySVgKNgK4xInLlsdEUsuCceD6H29x%2BvP1KWVXFJmnThNt2pbVqarunYj5ln5uHpPaObDt8A663agWLwv8watN2BNTSTOP4OkfbNorQX488w3uu0vgY6pgFMPHTeDddeyWBBKySe7Bb0OcxbtdHY95%2BWNrGUghn4LPZxIw3hfM%2Bm8mSPdrZyPo9NtbMH984nrco2uB%2FAAUybg55axUs8XDNu%2F17vqWCisBkSK0jVtxmWFiY1PlGzcqcwFVv3IpWILwfHMJ8kw%2BkPA7hP39RdBC0ZGkWb8lZ5760POppl6ctZL5EOgFLeY5Mmpe6jg0cHq65zwS7bdoj0WXN%2BqpOQ&X-Amz-Signature=77ab883c75bc0f1ad572735e412f85fb608cf6a714fdc563f61117afae145905&X-Amz-SignedHeaders=host&x-id=GetObject)

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
