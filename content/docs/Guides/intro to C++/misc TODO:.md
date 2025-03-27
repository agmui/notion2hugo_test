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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7WC73N%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV4%2B1XFj7LCVaX6urRMtbPP6vrs8ecX81iwxIbZVyMMAiBqdBFGCVjmireOhpfNu0kPoAa4qMyN1BoMOspHVF9Lwyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM6EIoG2rGkITbuMrqKtwDSlFvxCAl%2FLpuawB2UnJ6mskxrWIv7m5aebG43ebY0T8hyGL9PekyG2FKHki5bIZudlij0Kut9Dj1DOSbZw%2Boc2l1xOH5VuFBrvGxi2eCAgF5eYNhfe2DSIlck%2FU4KuxAXd9nPqhHZPOW2VHmbykqp7EoFAdn36%2BTymjOJPYK%2BBstkMub42YU8gM7tMjtCkBxvRaGzQcenlAJN%2B21Ndi3Iu0hXvMSiJtBBs955Q6yymmBiFXu3aU%2BkJaPj9kWxz1oXguX5OajeAkNsvpgetZCTDmQnwWBK5veTIyfiH5dyMta%2Fzg7NjLgiyx2ql%2FVn6ySsVWYlS80d3Fm90ki4PKsUacgwZ4DnOh1QzBW5bnfCBMw7DRWzCdXTlB1Wx6DtRETk25aCT2VXopCmXdCmvulfemDOsTdlvRDjBItI1i%2B0tHK1He0ON1FoO2205U1l7VodCDx7J2b9UtlJr6ZsVLVd2MBmWH%2FVGZk4mieUOwtNH%2BHUpjWtdI2lykiPjOJOCzfx8HhH7Fo0fi9ykR6euzjLDp4M85EPNtmhQBTFXJWZGSWalrlAxOZV%2FgsUmX7pqcGM8wo7mpNUbs8XZ5LK8%2B6xrzKTyLkS65bF7uEWnB4gfhTPXtliNayXJKZBWMwzoaWvwY6pgFwGl2s1y15IFa2tNED%2F9ddTHJgoYFCu6H%2BAnSp8hgmieMPUjGM%2FTnzjACjcvZFEWP8nii8NRxDyWOyT%2BKvmQ8UUcFBWkRT%2F2dp7jOBVOyb9vxwrDX2e129fpJg4FieFzBoFUN%2FbHctedT1KUHAKtABuqpP7k1kGuXJ5Qb6YSNjK%2Fx09Smz9WQqOmgOxtyqR5nES4BmPmQg%2F7L6Q6GojR99T3L1vLUQ&X-Amz-Signature=c0b7840537dfa2ed7e2830f11fb08937f79d9bf75b7e389f93e5cf44873b8e52&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7WC73N%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV4%2B1XFj7LCVaX6urRMtbPP6vrs8ecX81iwxIbZVyMMAiBqdBFGCVjmireOhpfNu0kPoAa4qMyN1BoMOspHVF9Lwyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM6EIoG2rGkITbuMrqKtwDSlFvxCAl%2FLpuawB2UnJ6mskxrWIv7m5aebG43ebY0T8hyGL9PekyG2FKHki5bIZudlij0Kut9Dj1DOSbZw%2Boc2l1xOH5VuFBrvGxi2eCAgF5eYNhfe2DSIlck%2FU4KuxAXd9nPqhHZPOW2VHmbykqp7EoFAdn36%2BTymjOJPYK%2BBstkMub42YU8gM7tMjtCkBxvRaGzQcenlAJN%2B21Ndi3Iu0hXvMSiJtBBs955Q6yymmBiFXu3aU%2BkJaPj9kWxz1oXguX5OajeAkNsvpgetZCTDmQnwWBK5veTIyfiH5dyMta%2Fzg7NjLgiyx2ql%2FVn6ySsVWYlS80d3Fm90ki4PKsUacgwZ4DnOh1QzBW5bnfCBMw7DRWzCdXTlB1Wx6DtRETk25aCT2VXopCmXdCmvulfemDOsTdlvRDjBItI1i%2B0tHK1He0ON1FoO2205U1l7VodCDx7J2b9UtlJr6ZsVLVd2MBmWH%2FVGZk4mieUOwtNH%2BHUpjWtdI2lykiPjOJOCzfx8HhH7Fo0fi9ykR6euzjLDp4M85EPNtmhQBTFXJWZGSWalrlAxOZV%2FgsUmX7pqcGM8wo7mpNUbs8XZ5LK8%2B6xrzKTyLkS65bF7uEWnB4gfhTPXtliNayXJKZBWMwzoaWvwY6pgFwGl2s1y15IFa2tNED%2F9ddTHJgoYFCu6H%2BAnSp8hgmieMPUjGM%2FTnzjACjcvZFEWP8nii8NRxDyWOyT%2BKvmQ8UUcFBWkRT%2F2dp7jOBVOyb9vxwrDX2e129fpJg4FieFzBoFUN%2FbHctedT1KUHAKtABuqpP7k1kGuXJ5Qb6YSNjK%2Fx09Smz9WQqOmgOxtyqR5nES4BmPmQg%2F7L6Q6GojR99T3L1vLUQ&X-Amz-Signature=1ef8999dd14ef49437f030e6a6e2273d49d75da61444fef00196c6457ad499e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
