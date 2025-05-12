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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNSWCTP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFCP1kbrLg71cqLea2CDd%2F7VYfyMIfmlw6CYMNt1F5BGAiBZMW43k25OinUqsxub02Hi2TctZsRAHLv9Fz4y3MkPMiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh3dd0rRwMi2%2BYlQrKtwD2gdfxTcXG34dPO%2FCGJK0%2Fq8LKOIR2sPKzbBtlKYbILnOVYaupNT9gGYdesA%2BvfJ%2B9XnIt%2FQBLhijbKmInc53T10xM3j9DGNr8%2BoOSsVc%2Bms2rkQj7oXqHzKFv3FRdvsv2sXPTMREYAs64aBOcA2PliHSJfTyhz5qGJqAOQw3PWrUmSefc6yPZCIpBH%2FdEVpE53SFS1bguV1lzYlsfGbQ3WX0fDuYQZiv%2FnG8kX4W8Xv9LMsdvL9nHDgMlzCGMQ%2FqPtQw7rtzIlME3Ri1qydBU9xVldcVqsjnESuq0xtdvhT3uQa2sph9h7iGNH8EltstND6OPTahQ%2B4Zb5RwnnSvmmOU1ATeD%2BFXtJf6YYnTKx4Bi411pdqw54AvrERd%2BTFP3VBtkHEbV9kdQ5S0opfd2lijGmGLDOM50e7EpQJz3aVPKcq9HcCM5WJCFKnCgsMtLESQ60Gl0ap8TtMTrugpShYhzYyctJ3KilRbvbZXOcmMtKTDRFoDMN%2FID0UX46oe%2FceBhGZeghFOw9ZSuff7WI%2BkVRM8lwCp94pNI%2FsO9XUMwhGlOLKU4l%2F4J%2Fpzlnuoe0yLxiit3jsBN2b3C5Ah4U%2F%2Fxodr0mj7wXI98PXTb1Bu9DoZJgCq9E%2FHeMQwuJyHwQY6pgESie6%2FfOaKZHIxdUVCc6sEz1P405pHYzIZ4s4QpfODwRP5z1XqU2kZ50PFNnCvmmq8sp%2B%2BKTp07qHODwFRqoF0d0M2SM9YDAkse%2Brro1%2B8dFi%2BMWyJUuQzUmI8aSGB9skO5vx33b5IAlh2yF5Rl54hU4OmhNqXcxXUq2U%2BjLxAc96v6qmp52U35ztXgPcKgqZh5qi%2FoaKHKem7oiTpByoF%2FvAMMB29&X-Amz-Signature=89a9f2ed7607cdcddefef3e41e507c450d07c6102d62e88160b86cb60e3b7db6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNSWCTP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFCP1kbrLg71cqLea2CDd%2F7VYfyMIfmlw6CYMNt1F5BGAiBZMW43k25OinUqsxub02Hi2TctZsRAHLv9Fz4y3MkPMiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh3dd0rRwMi2%2BYlQrKtwD2gdfxTcXG34dPO%2FCGJK0%2Fq8LKOIR2sPKzbBtlKYbILnOVYaupNT9gGYdesA%2BvfJ%2B9XnIt%2FQBLhijbKmInc53T10xM3j9DGNr8%2BoOSsVc%2Bms2rkQj7oXqHzKFv3FRdvsv2sXPTMREYAs64aBOcA2PliHSJfTyhz5qGJqAOQw3PWrUmSefc6yPZCIpBH%2FdEVpE53SFS1bguV1lzYlsfGbQ3WX0fDuYQZiv%2FnG8kX4W8Xv9LMsdvL9nHDgMlzCGMQ%2FqPtQw7rtzIlME3Ri1qydBU9xVldcVqsjnESuq0xtdvhT3uQa2sph9h7iGNH8EltstND6OPTahQ%2B4Zb5RwnnSvmmOU1ATeD%2BFXtJf6YYnTKx4Bi411pdqw54AvrERd%2BTFP3VBtkHEbV9kdQ5S0opfd2lijGmGLDOM50e7EpQJz3aVPKcq9HcCM5WJCFKnCgsMtLESQ60Gl0ap8TtMTrugpShYhzYyctJ3KilRbvbZXOcmMtKTDRFoDMN%2FID0UX46oe%2FceBhGZeghFOw9ZSuff7WI%2BkVRM8lwCp94pNI%2FsO9XUMwhGlOLKU4l%2F4J%2Fpzlnuoe0yLxiit3jsBN2b3C5Ah4U%2F%2Fxodr0mj7wXI98PXTb1Bu9DoZJgCq9E%2FHeMQwuJyHwQY6pgESie6%2FfOaKZHIxdUVCc6sEz1P405pHYzIZ4s4QpfODwRP5z1XqU2kZ50PFNnCvmmq8sp%2B%2BKTp07qHODwFRqoF0d0M2SM9YDAkse%2Brro1%2B8dFi%2BMWyJUuQzUmI8aSGB9skO5vx33b5IAlh2yF5Rl54hU4OmhNqXcxXUq2U%2BjLxAc96v6qmp52U35ztXgPcKgqZh5qi%2FoaKHKem7oiTpByoF%2FvAMMB29&X-Amz-Signature=9a1d3cb13f1101b3174e0b84af41431cd4393b4e22417eefe4c2d5a82af80d59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
