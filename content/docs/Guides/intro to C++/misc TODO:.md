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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZTI2V7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfzvdRPZVJ84ihYSRnw7lXf5EbvhE4kNs07JGIjBtCJAiAPwelHbiCu6LpuLri8EWRa8NUK7NnZ82%2FEexh5uMKnkCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4jNAYjPF1sJ%2FwPUKtwDRfjlEzRfEAWhmMZXC6apStDGWkE2kDxpGrrAJKE6LI0JLdwx5IE5Mu2LktlvHxfXcYXXoloUYP6SVtfm1F2wbjDmXXcoUWHQJXAmwBcj0gRabOcpl3ip%2Fije8EBOhi3M%2FkTD15kMvqlnleOeOND8HMMUBa%2FgP81F1kMmWzgAocTR%2BIlinWYsSzVD5eoML4mCCA9ZZTKcFL5L%2B7CWxeK4oj00BIoyrJ5jcC4THZRGySFoYmpqR%2FmvgaRhHHBN18e3%2BFDt3q0Xe%2FslisqXKl2y87OmyXdsfk%2BY%2FSjA%2FllyDU0%2B%2BP5Qs3wAoBe%2BVwSK6NBspSTyWDpknfPG5V5OHFWkJr6titEQlE1RpTeDjunLOhIJAksUGWrnRT9AkH7gpVO71C9btW3JdyRfm8TJStjzZnGCqPB6lA8hA7IBdrMqSL3J35nn1GuvPuSV%2F%2F2JI3Abt6HLCYwA02zQYTzP8QXwF0MFkOvmGQnjEaqH98mokZdlkiuTupA%2BfEckNbs0aitQqbjWJLqeiIj7jiCyujQxoz%2B6K1Pi1ivdTOCGhkzoJsp3214rcVzxtmcGgNIVojjgm%2B5H4imUwCLYsaLOTe%2BXqYyXO5rHqd0taBKwwdMASPjsf0wUGlMXP%2B6utlQwoOTcxAY6pgEN601tE61pAR6AyMmjMXUU8rJcNZfrdcib2vjbIpjMjDQvDnOxrnaChSypfWg61cWCeQy%2FQLkFLz4Jomkt6PPNT1vuS%2Bvx%2Fr0Kwt1JZiKH9nTYCOND2i49t8%2FYMpYtqcLEZU62Ggr5ezRM%2BSm4KsXhG3KK6E%2BwJ52y6ihvaYihQ2sElLptb%2BU8BeXUAXU1WsxUUyCD40uZs2jXYgKNPGOmyc%2BgbZNK&X-Amz-Signature=8c460e6ff9b1f2040567e89271fd198ae62e8ae8dac7391bdc97ff222a37f15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZTI2V7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfzvdRPZVJ84ihYSRnw7lXf5EbvhE4kNs07JGIjBtCJAiAPwelHbiCu6LpuLri8EWRa8NUK7NnZ82%2FEexh5uMKnkCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4jNAYjPF1sJ%2FwPUKtwDRfjlEzRfEAWhmMZXC6apStDGWkE2kDxpGrrAJKE6LI0JLdwx5IE5Mu2LktlvHxfXcYXXoloUYP6SVtfm1F2wbjDmXXcoUWHQJXAmwBcj0gRabOcpl3ip%2Fije8EBOhi3M%2FkTD15kMvqlnleOeOND8HMMUBa%2FgP81F1kMmWzgAocTR%2BIlinWYsSzVD5eoML4mCCA9ZZTKcFL5L%2B7CWxeK4oj00BIoyrJ5jcC4THZRGySFoYmpqR%2FmvgaRhHHBN18e3%2BFDt3q0Xe%2FslisqXKl2y87OmyXdsfk%2BY%2FSjA%2FllyDU0%2B%2BP5Qs3wAoBe%2BVwSK6NBspSTyWDpknfPG5V5OHFWkJr6titEQlE1RpTeDjunLOhIJAksUGWrnRT9AkH7gpVO71C9btW3JdyRfm8TJStjzZnGCqPB6lA8hA7IBdrMqSL3J35nn1GuvPuSV%2F%2F2JI3Abt6HLCYwA02zQYTzP8QXwF0MFkOvmGQnjEaqH98mokZdlkiuTupA%2BfEckNbs0aitQqbjWJLqeiIj7jiCyujQxoz%2B6K1Pi1ivdTOCGhkzoJsp3214rcVzxtmcGgNIVojjgm%2B5H4imUwCLYsaLOTe%2BXqYyXO5rHqd0taBKwwdMASPjsf0wUGlMXP%2B6utlQwoOTcxAY6pgEN601tE61pAR6AyMmjMXUU8rJcNZfrdcib2vjbIpjMjDQvDnOxrnaChSypfWg61cWCeQy%2FQLkFLz4Jomkt6PPNT1vuS%2Bvx%2Fr0Kwt1JZiKH9nTYCOND2i49t8%2FYMpYtqcLEZU62Ggr5ezRM%2BSm4KsXhG3KK6E%2BwJ52y6ihvaYihQ2sElLptb%2BU8BeXUAXU1WsxUUyCD40uZs2jXYgKNPGOmyc%2BgbZNK&X-Amz-Signature=e03886555567128e6c6c031bd7634e91be020e0110c1c3240f31030666683dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
