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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU75335R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCYFUy9Zej2B4HAKO7u0FF83DAF4JRLrsUI2TRxqZQKbwIgOEcJq0DHf1ObzXo4BWQnzGQp%2BS4CK7SDtystCcGF7x0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHcX%2BoZdVtEI9HmIoCrcA%2FMBS9Kc3pW7UNZ0pxVo6%2BqAkxI6gf1x7mwMpyTkZpiiT1%2BQl5RArEHsHSt8b%2BxtezI3H5osWg4EY8%2BDXEUNTjKtv%2FeeKB%2FCCN%2BNbPS5ap4ZiBY5NjjcC3MAwkRURVkkgNCrrr0aPj5QSTLCZo3CBSRQM6QMI3tZCO5Ho2xo2qKQkXKLBnDcn4KXke4sF5c1umUw4ggNjPJC%2BHu%2F4IdtY7cW3FCzEE8ZrPtnwHl4M%2BDkvqbIYW%2FqtHNIpsf0%2BieJyUFzu3IxiugUj%2BeM%2FLhbjpN9eiCv4vAorwlQCdEys53Y2gbjHPNFpkJX41k5Uhr%2Bx8aec%2B6%2FWjoUskP2g1PNglvqeZjP1GzO8t3PewlbAL1GdXa65mtnebH9654kuhDVTKxQaepZ7fuYkCcYfheaEQSYLLWN%2Bcnn8mD0CLfx7JVGhaVLg7r6EE87BVxBg9uADY9QquNOnUX08YFFh5OKN6%2B4QdoS5wcTS63EX4l005gBHWe7FKNDLZTKfY2s7z%2FVjkMRf%2BuLaX9vtZf0U4zogUB7Ivw4cCGM7DDXTs5BuLtiDvLHkV722lnX43oK0NtfwpvsUh6iqBohs0tpYInT%2Bp5tnODgjEP6yBYKaUdsi3v39cfBe1hn7TDQvFU5MNuP68IGOqUB6yDkhq9fMyGKniDDjoDwjqfMRpQj%2FD4kT%2BJCMtz%2F4XbTVYxg%2FCR5ub3MpSD2PQ4gwQfHWOL0Zjt4NERaV%2FVob69tbZ5LjW9cfcqbiZCG94atd4laCDTVlgW%2FKCHWkyMwHYZBWzymG%2FTy5WI5UZ%2BSDJNVZUUC7wG3Ve0cMoaPMGyYkv3prJezjCpowP9S6hgHL93vOW2JeY6AjiFZtBMOzfVt6F%2F7&X-Amz-Signature=0bb0a8d61ae90b1ff567edac8033d180a82d571435e78497df9dc396c14b9831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU75335R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCYFUy9Zej2B4HAKO7u0FF83DAF4JRLrsUI2TRxqZQKbwIgOEcJq0DHf1ObzXo4BWQnzGQp%2BS4CK7SDtystCcGF7x0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHcX%2BoZdVtEI9HmIoCrcA%2FMBS9Kc3pW7UNZ0pxVo6%2BqAkxI6gf1x7mwMpyTkZpiiT1%2BQl5RArEHsHSt8b%2BxtezI3H5osWg4EY8%2BDXEUNTjKtv%2FeeKB%2FCCN%2BNbPS5ap4ZiBY5NjjcC3MAwkRURVkkgNCrrr0aPj5QSTLCZo3CBSRQM6QMI3tZCO5Ho2xo2qKQkXKLBnDcn4KXke4sF5c1umUw4ggNjPJC%2BHu%2F4IdtY7cW3FCzEE8ZrPtnwHl4M%2BDkvqbIYW%2FqtHNIpsf0%2BieJyUFzu3IxiugUj%2BeM%2FLhbjpN9eiCv4vAorwlQCdEys53Y2gbjHPNFpkJX41k5Uhr%2Bx8aec%2B6%2FWjoUskP2g1PNglvqeZjP1GzO8t3PewlbAL1GdXa65mtnebH9654kuhDVTKxQaepZ7fuYkCcYfheaEQSYLLWN%2Bcnn8mD0CLfx7JVGhaVLg7r6EE87BVxBg9uADY9QquNOnUX08YFFh5OKN6%2B4QdoS5wcTS63EX4l005gBHWe7FKNDLZTKfY2s7z%2FVjkMRf%2BuLaX9vtZf0U4zogUB7Ivw4cCGM7DDXTs5BuLtiDvLHkV722lnX43oK0NtfwpvsUh6iqBohs0tpYInT%2Bp5tnODgjEP6yBYKaUdsi3v39cfBe1hn7TDQvFU5MNuP68IGOqUB6yDkhq9fMyGKniDDjoDwjqfMRpQj%2FD4kT%2BJCMtz%2F4XbTVYxg%2FCR5ub3MpSD2PQ4gwQfHWOL0Zjt4NERaV%2FVob69tbZ5LjW9cfcqbiZCG94atd4laCDTVlgW%2FKCHWkyMwHYZBWzymG%2FTy5WI5UZ%2BSDJNVZUUC7wG3Ve0cMoaPMGyYkv3prJezjCpowP9S6hgHL93vOW2JeY6AjiFZtBMOzfVt6F%2F7&X-Amz-Signature=ddd02a550acfaecd4e57600685928e595b45227c41b387082261e7a8c29707c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
