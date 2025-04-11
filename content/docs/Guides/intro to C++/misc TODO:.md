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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBJ6GK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIHmvzpy1GcUVOrw9SwXCkc6cZ0pbuxTyeuDjbAdaCUm3AiEAykPHTZmmBcrDSBsHDnR1L6UXgjxPbcRaloGZmuYRVosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSSLFIm%2FN2I9BC5TircA4NKJYzLDuUrTQmy89DrMtYPjE%2FRMdePWZUTAFh0b7%2FMdNvJbJYigDW3Xt5mNAoI%2FDq99Q97pVVOPhaYPXwNOG9XR9BDMWFSfL14%2FTJLydZhFdXonUyabSYqJZjCYHBwJ4qM7Gx9O%2FRGDmrx1DHRiD0%2BzOqXfKh9T4NLpYAmeEECerwW%2BVdD5eUWdBu7%2BiwmXGUwv2L0f6%2F1lymUR54QVycFj59hXvodq8cvuVpw6gPcvOwQeFaoTKXwJgsxRaTS2ZM%2BoG7z6YWYULsvSVOpGe3kY5qQh3%2BR%2Fd2iFtSi3HBTBxd%2BXvDdY7xEfqmOREAgEIVc2PS%2FTBgnwVUJtkQ2gIKY7H9IprmiI8EB0f8kPnnDtotVxuDDzifxosTfli2apgGVzivMEByy8HBxNvFI7RN3CCJYmqepSBbjDDA%2Bz3WkLUxQyPkQYDcdkr45qVRBJnvxIDRHmffYQ9MhbVPTjid9%2FR5G0iQQoD9s0%2FKFx8ypxF69psFuTDs6FCCjF96LMSlgDdo9xS8lt2%2BksMscuLy2nGisIFno5L2QC2e8RqbajfDYLeBEtKAEgfPGTwjFQkGEehJGzOi3QkrKcdJgnMbiakijmfRA67QPtEQQvnxOq%2FPknj2qUNLi4rb%2BMLmk5r8GOqUBZnsfki28RSxUmaspjyJL1d1kQV4khT730huwGOKmG6gAhhHt54rEZEDAA8NXfl2m4f5yuporAitx3D7p7vOvzQsh45DD5u9Izj%2BO%2FtBeBGnsq%2FYY2vCiBNxCwODDKRbpJvpmi5nBPrPHRFL1%2BIPJrOi1Yny3ak8JoXUSv9SoSwHebmNisht2QBn4FU4a%2BPWS%2FXMLIlYwzST08cWb%2FA3PHEhEl9xU&X-Amz-Signature=9199b540b96ab63585cefd7cf4cf464c7096e7bf8cb8e5e05a12aeb6a6916540&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBJ6GK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIHmvzpy1GcUVOrw9SwXCkc6cZ0pbuxTyeuDjbAdaCUm3AiEAykPHTZmmBcrDSBsHDnR1L6UXgjxPbcRaloGZmuYRVosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSSLFIm%2FN2I9BC5TircA4NKJYzLDuUrTQmy89DrMtYPjE%2FRMdePWZUTAFh0b7%2FMdNvJbJYigDW3Xt5mNAoI%2FDq99Q97pVVOPhaYPXwNOG9XR9BDMWFSfL14%2FTJLydZhFdXonUyabSYqJZjCYHBwJ4qM7Gx9O%2FRGDmrx1DHRiD0%2BzOqXfKh9T4NLpYAmeEECerwW%2BVdD5eUWdBu7%2BiwmXGUwv2L0f6%2F1lymUR54QVycFj59hXvodq8cvuVpw6gPcvOwQeFaoTKXwJgsxRaTS2ZM%2BoG7z6YWYULsvSVOpGe3kY5qQh3%2BR%2Fd2iFtSi3HBTBxd%2BXvDdY7xEfqmOREAgEIVc2PS%2FTBgnwVUJtkQ2gIKY7H9IprmiI8EB0f8kPnnDtotVxuDDzifxosTfli2apgGVzivMEByy8HBxNvFI7RN3CCJYmqepSBbjDDA%2Bz3WkLUxQyPkQYDcdkr45qVRBJnvxIDRHmffYQ9MhbVPTjid9%2FR5G0iQQoD9s0%2FKFx8ypxF69psFuTDs6FCCjF96LMSlgDdo9xS8lt2%2BksMscuLy2nGisIFno5L2QC2e8RqbajfDYLeBEtKAEgfPGTwjFQkGEehJGzOi3QkrKcdJgnMbiakijmfRA67QPtEQQvnxOq%2FPknj2qUNLi4rb%2BMLmk5r8GOqUBZnsfki28RSxUmaspjyJL1d1kQV4khT730huwGOKmG6gAhhHt54rEZEDAA8NXfl2m4f5yuporAitx3D7p7vOvzQsh45DD5u9Izj%2BO%2FtBeBGnsq%2FYY2vCiBNxCwODDKRbpJvpmi5nBPrPHRFL1%2BIPJrOi1Yny3ak8JoXUSv9SoSwHebmNisht2QBn4FU4a%2BPWS%2FXMLIlYwzST08cWb%2FA3PHEhEl9xU&X-Amz-Signature=a49924e84bf937dae44a15278e24fd983712da905441c7930e151488eb8606ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
