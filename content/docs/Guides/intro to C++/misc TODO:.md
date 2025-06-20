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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62OULAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8sSwDB51LZnY2dyOjXeSwt7%2F0O8aRitm9xKvgHQesHAiB%2Bg90VcGCwolKcyIl%2BpBBkApZiGbldL0bF5vtkDYkM2CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7NDrr3cmjHHPYcxtKtwDg6WPeE%2BKYfPimx%2Fr1l6nnxDIxi1rl3DIGzamdM0DcLOFrZMKmaeo9z5Hk5J3qG7oNOsAxCWx3WBU3y7IdonPyZla34EryHyTgOYakhh6GugKuTaViSRFsRGyK9cZPdPqc2EGKVWGGfm1v%2FRLrLGKle7jo8soZVTcoavW79yQgO706P60zMqfBBSPZO79mWBBHDZMYeoVHBV3XV6RmirOnTiGflzksh0VBADi9Bd%2BC7v3AVw%2F3z9xPxJQPgjMhrJlo%2FHAxzp9KFZ0BNHb0J1eADkT4AmHUgObp9m5Cwh6B9QPuNrfJMSoLOirF%2FohTjwHGg%2FprKr%2FbdvTiiYL7OQJdwSC%2BSxP7nj4xtzpS6tZX2tz%2BW%2BdKNI%2FffXOL6A46xI%2FV9exobyBa24vkcJ5O%2F%2FymAzYySRk6Mfr0CL5gvN4cAU64Uz%2FyISzIE7dKY3pPfk%2Fy89bxtlAe6hMeAweatjQw5cGGBF5RVP6yVxBeTBa6FTeXw5SNCm%2FhmBp5N9WHlxviiao0QZhEC71FqevcUXAXwk2JHTYVyTidzFy5bpv69nSaqOv8XQ%2FaCUfdTFejMIgbnnSaTt8U71VnHChGYBrrvbCSW3LqvgI%2Fwgt5aAwPa%2FZe8AVUjkyCgti9%2BMwi7PWwgY6pgFf3VwjMXsiOusIrgEGnZbsuMzi4ejfli2x9ayOvKpvA6nLk%2BbUbrawTgxjSq4lqbXu6RSd%2BV5fxQOL%2Fb3po6gfzhUH54t48KatZDshgEYP%2B4B8bhKa2kyJzZwpBQU7tO0qTp2d%2FaNsQwj8p20IFDH%2BMU82CqPq1n4eMZlFO4LNIU1AE1ExvicuDnuu8yVHu9v02Rvzl%2B0njHuf2OX7YlbeZsRo6BpR&X-Amz-Signature=6691ac82aeb0f1910d49ba102a57f2cecee4da7a0d71b0da3ec6b4b4dcbcbfba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62OULAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8sSwDB51LZnY2dyOjXeSwt7%2F0O8aRitm9xKvgHQesHAiB%2Bg90VcGCwolKcyIl%2BpBBkApZiGbldL0bF5vtkDYkM2CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7NDrr3cmjHHPYcxtKtwDg6WPeE%2BKYfPimx%2Fr1l6nnxDIxi1rl3DIGzamdM0DcLOFrZMKmaeo9z5Hk5J3qG7oNOsAxCWx3WBU3y7IdonPyZla34EryHyTgOYakhh6GugKuTaViSRFsRGyK9cZPdPqc2EGKVWGGfm1v%2FRLrLGKle7jo8soZVTcoavW79yQgO706P60zMqfBBSPZO79mWBBHDZMYeoVHBV3XV6RmirOnTiGflzksh0VBADi9Bd%2BC7v3AVw%2F3z9xPxJQPgjMhrJlo%2FHAxzp9KFZ0BNHb0J1eADkT4AmHUgObp9m5Cwh6B9QPuNrfJMSoLOirF%2FohTjwHGg%2FprKr%2FbdvTiiYL7OQJdwSC%2BSxP7nj4xtzpS6tZX2tz%2BW%2BdKNI%2FffXOL6A46xI%2FV9exobyBa24vkcJ5O%2F%2FymAzYySRk6Mfr0CL5gvN4cAU64Uz%2FyISzIE7dKY3pPfk%2Fy89bxtlAe6hMeAweatjQw5cGGBF5RVP6yVxBeTBa6FTeXw5SNCm%2FhmBp5N9WHlxviiao0QZhEC71FqevcUXAXwk2JHTYVyTidzFy5bpv69nSaqOv8XQ%2FaCUfdTFejMIgbnnSaTt8U71VnHChGYBrrvbCSW3LqvgI%2Fwgt5aAwPa%2FZe8AVUjkyCgti9%2BMwi7PWwgY6pgFf3VwjMXsiOusIrgEGnZbsuMzi4ejfli2x9ayOvKpvA6nLk%2BbUbrawTgxjSq4lqbXu6RSd%2BV5fxQOL%2Fb3po6gfzhUH54t48KatZDshgEYP%2B4B8bhKa2kyJzZwpBQU7tO0qTp2d%2FaNsQwj8p20IFDH%2BMU82CqPq1n4eMZlFO4LNIU1AE1ExvicuDnuu8yVHu9v02Rvzl%2B0njHuf2OX7YlbeZsRo6BpR&X-Amz-Signature=4df09509f73b9dc72aa9a5f2fd61ac6bb28b0d0fa3898127e16618cea332c7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
