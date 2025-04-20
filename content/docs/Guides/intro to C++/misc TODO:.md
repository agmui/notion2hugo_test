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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDCECI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHyFGB2pIjryBYgzA3kGJSAaCX3VPBxDDtKV0Pg8%2FXxoCIQD3yTX6bzSS4rpvufm55vFFl6ygZypw1Jdz%2F8EcjQHdiCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuqVbcSFo6%2FwauPiKtwDQEKUk871KlOUQI1%2FQTX5Hp3FxR6%2BbR9icNHIkq1vX%2F4uoW7T%2FknxdMXBw1smMkGXdrJOOuU3VsZU%2FKUkW2YvZjphfLsrjV0%2Fo%2B9Utj1mHO35yvSBVYSitNzUHyc8dGZA6u7nMXcYi4JtiLhQSLND9s6hHeZ%2FMxAc7yYo46a10vgANprmLC4Rhzcoyntbr9JxqProylsXx6nRcAjDPZMYEGcpiKBOrqwvKRYWzk3ivwLJ94k6D%2F4K0aLeiJWcBn3n7RfA8YIrJmkFMNQ7FthJHUS0oSkkTAjQ2RHGyY%2FzaifTbgRg6BKf3osgQ7oc6YwX47OPJvgNZx%2Bxbp8K7e1ZKKf6WHt%2Bul52sMFku5pUEf9CyZMPDJWHXPWORfWJiaakmZ1WEpbbx35pH71CuUg6aKffyHAwMZRhgAo4oLssby%2FfuRaa3%2Bc%2Bz6nL%2FjUOkAn003nVeXxI%2BfJHsRfzh2XDZ%2BIGdxbVyeUPbuxcPHn%2Fyy9YcO5UnvZJ3ZXGw262M%2FkvQlBk%2BK4b9ADJHEZ39H%2FC6qsWwdrSb6wIhzSUWfML7IJ71%2B2Bg%2FXEfAK6a%2BHtx3rxgu8%2FFooAYNnkHIOJLJZc1z1B06iohScbDIeInwK4YC3g90L8NBgJ%2FSeqCcAw%2BYGRwAY6pgGTlE%2FuF%2FN5s5XfU64WbwkHDpYLmZMza9CiD%2Bfla60hdajxuB4ihQTnXvKpyl4vI%2F%2BwYH8vteb%2B8Bev%2BP9Fuiup4NrAzXUYzobes%2BBQE7GHOaPLflwJZeM8lg2xBQc1rDynAd4Qkzb9guycY0MwkfjbAiVD6B8gnJlVhTiy%2BFofowIgFUsqq4dZiOYXBtvn2x8e8kOphlqSi%2BAi6vGFGxZQ%2Flvmh4W%2B&X-Amz-Signature=b17f0b29ac5392d00910fb591895d0b22cd22664ff981717c4a2ecc04f0c90b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDCECI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHyFGB2pIjryBYgzA3kGJSAaCX3VPBxDDtKV0Pg8%2FXxoCIQD3yTX6bzSS4rpvufm55vFFl6ygZypw1Jdz%2F8EcjQHdiCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuqVbcSFo6%2FwauPiKtwDQEKUk871KlOUQI1%2FQTX5Hp3FxR6%2BbR9icNHIkq1vX%2F4uoW7T%2FknxdMXBw1smMkGXdrJOOuU3VsZU%2FKUkW2YvZjphfLsrjV0%2Fo%2B9Utj1mHO35yvSBVYSitNzUHyc8dGZA6u7nMXcYi4JtiLhQSLND9s6hHeZ%2FMxAc7yYo46a10vgANprmLC4Rhzcoyntbr9JxqProylsXx6nRcAjDPZMYEGcpiKBOrqwvKRYWzk3ivwLJ94k6D%2F4K0aLeiJWcBn3n7RfA8YIrJmkFMNQ7FthJHUS0oSkkTAjQ2RHGyY%2FzaifTbgRg6BKf3osgQ7oc6YwX47OPJvgNZx%2Bxbp8K7e1ZKKf6WHt%2Bul52sMFku5pUEf9CyZMPDJWHXPWORfWJiaakmZ1WEpbbx35pH71CuUg6aKffyHAwMZRhgAo4oLssby%2FfuRaa3%2Bc%2Bz6nL%2FjUOkAn003nVeXxI%2BfJHsRfzh2XDZ%2BIGdxbVyeUPbuxcPHn%2Fyy9YcO5UnvZJ3ZXGw262M%2FkvQlBk%2BK4b9ADJHEZ39H%2FC6qsWwdrSb6wIhzSUWfML7IJ71%2B2Bg%2FXEfAK6a%2BHtx3rxgu8%2FFooAYNnkHIOJLJZc1z1B06iohScbDIeInwK4YC3g90L8NBgJ%2FSeqCcAw%2BYGRwAY6pgGTlE%2FuF%2FN5s5XfU64WbwkHDpYLmZMza9CiD%2Bfla60hdajxuB4ihQTnXvKpyl4vI%2F%2BwYH8vteb%2B8Bev%2BP9Fuiup4NrAzXUYzobes%2BBQE7GHOaPLflwJZeM8lg2xBQc1rDynAd4Qkzb9guycY0MwkfjbAiVD6B8gnJlVhTiy%2BFofowIgFUsqq4dZiOYXBtvn2x8e8kOphlqSi%2BAi6vGFGxZQ%2Flvmh4W%2B&X-Amz-Signature=41742baea235ec456ca1ca6d63973df12ea753afc4c6df919cad882fcf81c88a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
