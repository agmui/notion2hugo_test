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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DEDFKJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE1Wb9cRH0K17gxfWy6s5VZat5GOlvPaQfITdYMNlPgZAiEApxAMkmkErSVWzWv%2BDbEhueB5uPq6cNDDiUuf3CVCFwsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe77Dl9DE24BSVTqircAypo78PaLFKBnHp8dfhjvCjqD%2FzPIrr%2FFn7OcPlPnEm%2BvUmRNZR2dnx5kFMdQIXMDXa2XNwd%2FVh2ZfXyQMm6FuSX7eMyUyXoZi7L%2FvgWvHXoWPUy%2FLksquCMSpJCZ%2B%2F0CGByuIvD2I7%2BPZTlyNozo1PsEb4WdT1OUNiHYrQpM8OLuyfIywALSUips%2FU7KTgWyW3D14kGBKFloPLJ2YYGSwNoLF7KS4N9MFkhNN%2FkDRgy53c451%2Bke8bHUIlQDNPVyvl2GuwwQlokS0Di9yqkzaxbOa9E4VTmNIVIMxuQs6xQR9Nfs5AsOj1DzfORbtJnF8lhh7KXMMu4LDycWWywJpAMLB6bVHdTgX7pSB8Ruoo7Vd89K%2Foyta50vzqHpoMpiwcWHz5Re2tgqAQ1d%2BQ2kdZGsWQb%2FNrFiTJh8tda6IypyivjajrxCIsALw6h0sVRaeo5HfFRHlVjg8tPkJRAGHXeOm6ZXr5%2BiRA3w6%2B3kb%2FD1kQWFcXJXssmpcl310e%2BQgw4Vu27IImIplzT8Itj2MV%2F2uJdigvbIfV%2BUw74tAV8d0boIYslSZBMuxRrbtYss%2FJ7%2BKADXJLJ591kxHKXS1KxOlaB%2FFestyMqCXpvj3yeHBuoF%2FYIKscXea2qMMu0ocQGOqUBhgh9kq3DCduJqeqqkquYTdu2Yt56%2FoBzKMRkgnE2IbhxjcHbWPjoYNyKaI3V9eLxGt0kTwnFCzb5mEQ6lzIKgqH0YuX0OfRZ7ULDogPNm18GT2scGKBP0fTrEfw2%2BVOc9SHvNUAnCGEZd7OaEk6PBmjqKi5MDqII01v%2BtEvAcV5YrDAHU2%2F%2FoMqoh2W39y1fnqNpmLTKr9tqj3BILITeqk%2BnHuNK&X-Amz-Signature=c281566b64987927c5d9612a4475a7fe586be4da15a1eeb428f3a40590f98a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DEDFKJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE1Wb9cRH0K17gxfWy6s5VZat5GOlvPaQfITdYMNlPgZAiEApxAMkmkErSVWzWv%2BDbEhueB5uPq6cNDDiUuf3CVCFwsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe77Dl9DE24BSVTqircAypo78PaLFKBnHp8dfhjvCjqD%2FzPIrr%2FFn7OcPlPnEm%2BvUmRNZR2dnx5kFMdQIXMDXa2XNwd%2FVh2ZfXyQMm6FuSX7eMyUyXoZi7L%2FvgWvHXoWPUy%2FLksquCMSpJCZ%2B%2F0CGByuIvD2I7%2BPZTlyNozo1PsEb4WdT1OUNiHYrQpM8OLuyfIywALSUips%2FU7KTgWyW3D14kGBKFloPLJ2YYGSwNoLF7KS4N9MFkhNN%2FkDRgy53c451%2Bke8bHUIlQDNPVyvl2GuwwQlokS0Di9yqkzaxbOa9E4VTmNIVIMxuQs6xQR9Nfs5AsOj1DzfORbtJnF8lhh7KXMMu4LDycWWywJpAMLB6bVHdTgX7pSB8Ruoo7Vd89K%2Foyta50vzqHpoMpiwcWHz5Re2tgqAQ1d%2BQ2kdZGsWQb%2FNrFiTJh8tda6IypyivjajrxCIsALw6h0sVRaeo5HfFRHlVjg8tPkJRAGHXeOm6ZXr5%2BiRA3w6%2B3kb%2FD1kQWFcXJXssmpcl310e%2BQgw4Vu27IImIplzT8Itj2MV%2F2uJdigvbIfV%2BUw74tAV8d0boIYslSZBMuxRrbtYss%2FJ7%2BKADXJLJ591kxHKXS1KxOlaB%2FFestyMqCXpvj3yeHBuoF%2FYIKscXea2qMMu0ocQGOqUBhgh9kq3DCduJqeqqkquYTdu2Yt56%2FoBzKMRkgnE2IbhxjcHbWPjoYNyKaI3V9eLxGt0kTwnFCzb5mEQ6lzIKgqH0YuX0OfRZ7ULDogPNm18GT2scGKBP0fTrEfw2%2BVOc9SHvNUAnCGEZd7OaEk6PBmjqKi5MDqII01v%2BtEvAcV5YrDAHU2%2F%2FoMqoh2W39y1fnqNpmLTKr9tqj3BILITeqk%2BnHuNK&X-Amz-Signature=0207880811e636579c5ded71e4ad0e025f42ce23aff7f70b54dbecae250d1286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
