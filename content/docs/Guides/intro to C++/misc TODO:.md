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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJPRUQV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIExzInu%2BTk1G616vUiT2FGQ%2FRyMF%2BoCLmdDSdZ5KqV34AiEA4cu68L%2FrQziX3kjldVwf1JyswgtLHH7fC0NjVhK0UoEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGjee9FrcXEYcJibXircAylDq2jT7lK2QrxyKdOCNQZ8YdmUa7piacKeuynAFk1vJFt%2BtydHWozMu4ty8LLf6z1o9GmXEwYz%2Ff6vrl4MkNIsKbHVC4PzoT04QxZRPaS1433atuIMuFHHzdicwxZfbXuRo0VNd25cjS3TYrk%2BVieREToIEyBs5orO2ZfHUl1ju6bd3CfGfrzoTaAqpoaasnhHjBOrHbD%2BQTbhFIEXgLf%2Bf6KaDSQy3xwHjSrw%2FxvsG7n9tWDw5ei9SVsdjc0cjWeBPRQNwLi1s3CF6x6NuUea17m2ATDSZvI5A0qnCrrE%2FErnufd5S%2FXCC3ArkuBn3WhHY0NoeCer3zs2Hzu9BaePFgqoH%2B87c4PaFM68J90mxV7ju7UuVlGEQwbTDYb%2BYg1nyc%2BJdZS%2F8y2fKdcOJjJgSq3gYRpmCuSxiMIKmHqDSNSQbmsWPv%2FYUtQnvs%2BDF9SlySqCT4nlQn6TfJq%2BueUg5OHuVFElnRwIsMPZpliSo2a02koPjGOGqboSxP2%2Fi4EnA2OuF%2Fad5EbWSG0A%2BZTO91VyDThz0VJiqvWpTo8FsMhPng4K3rDR2crt8%2Ft4rENoTRmLs8fTDkexOSRXw2jfXekqYyOSx%2FeM2%2F41gHqkL2%2BVbb4pOzG9JkFHMILNx8EGOqUB6CCG%2FrhT%2BGWdUxW5S3CnJH%2BVwVRIi%2FYcrAlHBw2YJCirSec7K7DHrxqsQNkprhsfjsZH6rX9vlTezv%2Brfbhvf2R57mgSov109%2ByxDEwhTSSVvQn3qDNMvQ3D7SxnmYRX1lizVJjHZlF7prN07cVxzZSiNyf3lWc%2FlPr27fMxY%2BtktRVW%2BrJuGAxGuvAWQGmJ2VjDgnWRm1De7ZvyROIuX5RzVWdV&X-Amz-Signature=1c5dc996cbf9e3da5e1b8129a5f6b91e0da109dd7d96896c804b4e615675bba3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJPRUQV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIExzInu%2BTk1G616vUiT2FGQ%2FRyMF%2BoCLmdDSdZ5KqV34AiEA4cu68L%2FrQziX3kjldVwf1JyswgtLHH7fC0NjVhK0UoEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGjee9FrcXEYcJibXircAylDq2jT7lK2QrxyKdOCNQZ8YdmUa7piacKeuynAFk1vJFt%2BtydHWozMu4ty8LLf6z1o9GmXEwYz%2Ff6vrl4MkNIsKbHVC4PzoT04QxZRPaS1433atuIMuFHHzdicwxZfbXuRo0VNd25cjS3TYrk%2BVieREToIEyBs5orO2ZfHUl1ju6bd3CfGfrzoTaAqpoaasnhHjBOrHbD%2BQTbhFIEXgLf%2Bf6KaDSQy3xwHjSrw%2FxvsG7n9tWDw5ei9SVsdjc0cjWeBPRQNwLi1s3CF6x6NuUea17m2ATDSZvI5A0qnCrrE%2FErnufd5S%2FXCC3ArkuBn3WhHY0NoeCer3zs2Hzu9BaePFgqoH%2B87c4PaFM68J90mxV7ju7UuVlGEQwbTDYb%2BYg1nyc%2BJdZS%2F8y2fKdcOJjJgSq3gYRpmCuSxiMIKmHqDSNSQbmsWPv%2FYUtQnvs%2BDF9SlySqCT4nlQn6TfJq%2BueUg5OHuVFElnRwIsMPZpliSo2a02koPjGOGqboSxP2%2Fi4EnA2OuF%2Fad5EbWSG0A%2BZTO91VyDThz0VJiqvWpTo8FsMhPng4K3rDR2crt8%2Ft4rENoTRmLs8fTDkexOSRXw2jfXekqYyOSx%2FeM2%2F41gHqkL2%2BVbb4pOzG9JkFHMILNx8EGOqUB6CCG%2FrhT%2BGWdUxW5S3CnJH%2BVwVRIi%2FYcrAlHBw2YJCirSec7K7DHrxqsQNkprhsfjsZH6rX9vlTezv%2Brfbhvf2R57mgSov109%2ByxDEwhTSSVvQn3qDNMvQ3D7SxnmYRX1lizVJjHZlF7prN07cVxzZSiNyf3lWc%2FlPr27fMxY%2BtktRVW%2BrJuGAxGuvAWQGmJ2VjDgnWRm1De7ZvyROIuX5RzVWdV&X-Amz-Signature=59bff1f9ac3a21b3bfa9fa782585e070adde79d812e8cc811d34b3cf4fbb9f34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
