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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIY3X43F%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD3lIF%2BN0%2FsHo8EoSQ6Nlxu5GxPZM7akqAtDRBQuj7%2FjAIge%2Bw0h8GjvZKsQZ8sKQGOHwTRTP%2B%2BRY1GK4mcdn9IzN0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt1tdUanF8%2BJnvQHSrcAyXKfPA2u85gROYlK1P2JmixrpyFCtjrny8FqyOQNAMeXbtRHKGI2WFuWfh8aDXx%2FsdmUNYpu4GAyPuO1ApnGwAZKfOVdGXPjFgl68h%2Fjpn%2FSpTgGU58nV74XHlUu16RmYdilVmM92QIg5MhbLUwn48DBOSyqqEh7x21XFuepPZtGk7eqRoYStSZjyDcG8%2F5%2B7BgFlvzeRzBI%2FYwCZi2ZlM%2Fd7eJjKQiSRLyITnRTiV1SLfbHIlfz3iX%2FXERAY4J7sHJsXm0sPoPFwsKGymFk6ZE31%2BV8f5F40IfN%2F1tus1rmZ83Ilcv%2FStJ%2BGkIxE%2B3%2BtewOcexykQIOyFMoOYr8kaMP8LQIDLAPoIf6One87epz946Iu4HQ3tHJnno7RFcZuv%2BGIMjrf38q2ygk3xrW0FResa7LOiWYG8%2B8cRrnU8tjMW7%2Bb5nnCdIzPAxjGawDOxYpsbMTEWmfZeQooR%2F%2BAjMUPQm610aZhgACoL5bw1mlr4loYqlFH2pcGATYTyucAOe94yBzyD4awKAzcc07DGwqKQjx3r%2BInRKVV58XWShZbYtfG%2BpxW9lD3kcEgVGEe86B%2FVIE2BsPmfFHkaPTa6Y5PFSl5NalV%2FmskIrghnLjBLUIz6C7mwF740bMO6Bh8EGOqUBtmVKG%2F2Cl%2FmRF0JiSL%2FHkjL%2BeyedQxR%2BaQLsU3rB3WpaX0QgTt86%2BQlfUqDLYvU6GBAOfVt%2BOMD68NkOcStHuD9SG%2BQXEM9a8M5JlxwI4AM4rlf988LLx%2FfpligfceG6fvmnE7Y%2FdCDpXD7AMZMqliHBQ%2BQCoDn4GKaG66eBpy2LXaaZ6h9i75ltUxTjjFRxIkmX7V%2BVHWm6P%2FIS3W%2Fs%2B0xjPVZN&X-Amz-Signature=d24879eecbb66cd6cd939f6cd1678e63b5bde8b64b331fd280c806c6db5cffb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIY3X43F%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD3lIF%2BN0%2FsHo8EoSQ6Nlxu5GxPZM7akqAtDRBQuj7%2FjAIge%2Bw0h8GjvZKsQZ8sKQGOHwTRTP%2B%2BRY1GK4mcdn9IzN0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt1tdUanF8%2BJnvQHSrcAyXKfPA2u85gROYlK1P2JmixrpyFCtjrny8FqyOQNAMeXbtRHKGI2WFuWfh8aDXx%2FsdmUNYpu4GAyPuO1ApnGwAZKfOVdGXPjFgl68h%2Fjpn%2FSpTgGU58nV74XHlUu16RmYdilVmM92QIg5MhbLUwn48DBOSyqqEh7x21XFuepPZtGk7eqRoYStSZjyDcG8%2F5%2B7BgFlvzeRzBI%2FYwCZi2ZlM%2Fd7eJjKQiSRLyITnRTiV1SLfbHIlfz3iX%2FXERAY4J7sHJsXm0sPoPFwsKGymFk6ZE31%2BV8f5F40IfN%2F1tus1rmZ83Ilcv%2FStJ%2BGkIxE%2B3%2BtewOcexykQIOyFMoOYr8kaMP8LQIDLAPoIf6One87epz946Iu4HQ3tHJnno7RFcZuv%2BGIMjrf38q2ygk3xrW0FResa7LOiWYG8%2B8cRrnU8tjMW7%2Bb5nnCdIzPAxjGawDOxYpsbMTEWmfZeQooR%2F%2BAjMUPQm610aZhgACoL5bw1mlr4loYqlFH2pcGATYTyucAOe94yBzyD4awKAzcc07DGwqKQjx3r%2BInRKVV58XWShZbYtfG%2BpxW9lD3kcEgVGEe86B%2FVIE2BsPmfFHkaPTa6Y5PFSl5NalV%2FmskIrghnLjBLUIz6C7mwF740bMO6Bh8EGOqUBtmVKG%2F2Cl%2FmRF0JiSL%2FHkjL%2BeyedQxR%2BaQLsU3rB3WpaX0QgTt86%2BQlfUqDLYvU6GBAOfVt%2BOMD68NkOcStHuD9SG%2BQXEM9a8M5JlxwI4AM4rlf988LLx%2FfpligfceG6fvmnE7Y%2FdCDpXD7AMZMqliHBQ%2BQCoDn4GKaG66eBpy2LXaaZ6h9i75ltUxTjjFRxIkmX7V%2BVHWm6P%2FIS3W%2Fs%2B0xjPVZN&X-Amz-Signature=5ce32adbe809b6bb2c4cb2f14f795eb33090c564545d68d3e8e3686429e25856&X-Amz-SignedHeaders=host&x-id=GetObject)

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
