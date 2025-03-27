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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMZG4VJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAwDPkTMg9cpY%2F%2Bv5TA66xdUP689iUri2ZKfvA%2FGQc0gIgARuie28zzQVi7ij0sAxxl2%2BAY5vQcsx%2F0q4DsbzcMfAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNN13j8Rr8YlZMKJuircAz%2F3P9UO%2BaoE%2BAtzE%2FUOxF9oC%2BROcsaUIYBiaAuH2a3RtvDMiZBF8X9sHlbsxfQH23UR7bQAhzmzg%2F85WM4ejzARzUB%2FnT%2B1GjwQAx0tevMRaPa58%2BpFr%2BueusoxnD51hUkb%2Fn1e4yTKUjOSV%2F4nYi7DQYQCllVmBXglX7x9nnt12EDb6mwJYOMItLUblbu9V6vSBGQjxgJwJS8hO5b2wNK07X5EU0kyuQZTy%2BTrjFac0RD82r9o7vyz8Eb2kQujRpd%2FoY4wKwIeP1XlSHqcpNNovd8jAcCuwcItfuGC63KC%2BY8zP9jJo%2FBBMcFG2jNwBV3kh%2FaOl%2BVZznbEbpXX43R8j9sVoiDAlRqs4M5VR0NQXpeKVB2a%2Bbu5j1epA0Hpe8MUyDibv%2Bev0fZYmXqJ2hritwDOMFR2Wl5%2BVICObWw09iGSAPsDBECLU5Bucdnt4%2FSw46Q2mbZtpTQQk6RAJ4GLHMvR1imBWMppQ0l%2FOceCKrl15ma3wB1YvYtF7RfDgDStPYxFuxjX2Kn9HGHPsdcBVsR9RV2ADLJALf2ge9%2FYUPah%2F27%2FSLRpvnoonnGYsGDtsFV1CDw0aYzWUs4ajz8NWDtuyTcaU7YBUGUijhPbli2tDvizxya4rsyUMO6ilr8GOqUB9Qh4lJR8deXBaWF6uLe9gFJPqNL%2FSCuQUNjVTEluoYpS1DUMt8im4CYdIl9Nq0RItjYNs%2FtnmLsLRBetS62oo%2Fn8NOkhAu4q9i%2BhysyKIB5%2Bc1V3b9%2B8eBFZbx07oMHz%2FHMvbjtpT0nyaOlWSIoWqAdHffs7MsuPiOks5L1K252uB3Lyh5H3iTpaWrLwJTfivkvLNVmCeTmNiExR1E4DcaySgNsR&X-Amz-Signature=987c1fcca90c0484c68c60d316726c6e7b5541fb0c64de66c572f277196528b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMZG4VJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAwDPkTMg9cpY%2F%2Bv5TA66xdUP689iUri2ZKfvA%2FGQc0gIgARuie28zzQVi7ij0sAxxl2%2BAY5vQcsx%2F0q4DsbzcMfAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNN13j8Rr8YlZMKJuircAz%2F3P9UO%2BaoE%2BAtzE%2FUOxF9oC%2BROcsaUIYBiaAuH2a3RtvDMiZBF8X9sHlbsxfQH23UR7bQAhzmzg%2F85WM4ejzARzUB%2FnT%2B1GjwQAx0tevMRaPa58%2BpFr%2BueusoxnD51hUkb%2Fn1e4yTKUjOSV%2F4nYi7DQYQCllVmBXglX7x9nnt12EDb6mwJYOMItLUblbu9V6vSBGQjxgJwJS8hO5b2wNK07X5EU0kyuQZTy%2BTrjFac0RD82r9o7vyz8Eb2kQujRpd%2FoY4wKwIeP1XlSHqcpNNovd8jAcCuwcItfuGC63KC%2BY8zP9jJo%2FBBMcFG2jNwBV3kh%2FaOl%2BVZznbEbpXX43R8j9sVoiDAlRqs4M5VR0NQXpeKVB2a%2Bbu5j1epA0Hpe8MUyDibv%2Bev0fZYmXqJ2hritwDOMFR2Wl5%2BVICObWw09iGSAPsDBECLU5Bucdnt4%2FSw46Q2mbZtpTQQk6RAJ4GLHMvR1imBWMppQ0l%2FOceCKrl15ma3wB1YvYtF7RfDgDStPYxFuxjX2Kn9HGHPsdcBVsR9RV2ADLJALf2ge9%2FYUPah%2F27%2FSLRpvnoonnGYsGDtsFV1CDw0aYzWUs4ajz8NWDtuyTcaU7YBUGUijhPbli2tDvizxya4rsyUMO6ilr8GOqUB9Qh4lJR8deXBaWF6uLe9gFJPqNL%2FSCuQUNjVTEluoYpS1DUMt8im4CYdIl9Nq0RItjYNs%2FtnmLsLRBetS62oo%2Fn8NOkhAu4q9i%2BhysyKIB5%2Bc1V3b9%2B8eBFZbx07oMHz%2FHMvbjtpT0nyaOlWSIoWqAdHffs7MsuPiOks5L1K252uB3Lyh5H3iTpaWrLwJTfivkvLNVmCeTmNiExR1E4DcaySgNsR&X-Amz-Signature=b03893f0c9636c2b68c125c397a2716ad5b9d11be3c174c6d8e6744006eae971&X-Amz-SignedHeaders=host&x-id=GetObject)

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
