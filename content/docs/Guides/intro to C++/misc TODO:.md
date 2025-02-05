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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RB27EW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBHQ7FmvnQwwsq5gxRmgzLy5xTnmxRfJCd943qEd8ckCAiEAsYd%2BvNamRpphlrlbCjVijN%2BjhHYOQ5iQPoIR%2F1BoGWUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCG2lEpg6R%2BoSpvBcyrcA%2B1bj4HAUFcmPZhU%2BFDvAfNEKfmu8MLnA82hHvbzVmK5oaf0jZpDDZKUZ%2F2ggQpVia0X0cOUJcEQGOpjG%2FYw9Q4falYYwUw3oRmM22%2FlD9aN7Lg%2BuUyqyz8hTI7PlIXYeKuGf6mJWWoThbnuXUcRuhZwKKQCe5RzYeG3NvKiNDHb5qtWqBdMwO5DujJgJqfVJ73h4sRAlfV3mvA4l5xaN%2Fuov5OvmRrT54DNTrtk0Wkl5a0uIrU588LUq%2BtblgUaSqZjlofww990aBieDMfm6ItWEPN8h71RUMYxRQ3fs302knsyBgTsOP%2B32GBAtK189iolFq6DC2JnvVFSOSfDy6BK%2BuGjJfNL4A6xc1an7Mb%2FSMq4m3BirjzP0qH9p%2BLzKldgRKWCzWfQ1Xpi7Imrofe1ssR7XshxrSt7kf8BZE80tyo8jmnkfDXfUVJczXq%2Bmctmhjvs1Pco9XJ0yXzg0g%2BVdNTqcyx76vBC1h5j0qBYN1xcAqCcwzFbm4OnKB1GZEqmQsQVWLmOff50owDNCIulineJfEAf24FZQqBS5lrk8HHWkfm%2F1Dz6OA6M59Dp3rSXFpkfFNwcm%2BRVtlPyHb02jpfrXRBuB0aqbtQOU%2BkMuEYtW%2FnszCQ4j%2BpFMPCejr0GOqUBDQ0ysrR%2BzJAF2YPyxW4FAE9uaoQ5GAMh0Z4FoRbWhGNsVnwbJum7DSMM8nmin50u8jp3WJ54xyQiRRkUeYPxS%2FCyE5B45ng9BTKThq%2FesDsy8%2BT6mQrJk%2F6mBy3YLNk26BLqTt0WhP0rB22HS0tggl0JCubQbrg5hP4ATF4OYpkgCf3GDPivTod92BpKp59RybeFK6RAlpEKUjekkrAnPqjuBlSw&X-Amz-Signature=fe15850194c0b3fb11a6d0b7d8107f01c14b05c2352719d681badbab3773788c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RB27EW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBHQ7FmvnQwwsq5gxRmgzLy5xTnmxRfJCd943qEd8ckCAiEAsYd%2BvNamRpphlrlbCjVijN%2BjhHYOQ5iQPoIR%2F1BoGWUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCG2lEpg6R%2BoSpvBcyrcA%2B1bj4HAUFcmPZhU%2BFDvAfNEKfmu8MLnA82hHvbzVmK5oaf0jZpDDZKUZ%2F2ggQpVia0X0cOUJcEQGOpjG%2FYw9Q4falYYwUw3oRmM22%2FlD9aN7Lg%2BuUyqyz8hTI7PlIXYeKuGf6mJWWoThbnuXUcRuhZwKKQCe5RzYeG3NvKiNDHb5qtWqBdMwO5DujJgJqfVJ73h4sRAlfV3mvA4l5xaN%2Fuov5OvmRrT54DNTrtk0Wkl5a0uIrU588LUq%2BtblgUaSqZjlofww990aBieDMfm6ItWEPN8h71RUMYxRQ3fs302knsyBgTsOP%2B32GBAtK189iolFq6DC2JnvVFSOSfDy6BK%2BuGjJfNL4A6xc1an7Mb%2FSMq4m3BirjzP0qH9p%2BLzKldgRKWCzWfQ1Xpi7Imrofe1ssR7XshxrSt7kf8BZE80tyo8jmnkfDXfUVJczXq%2Bmctmhjvs1Pco9XJ0yXzg0g%2BVdNTqcyx76vBC1h5j0qBYN1xcAqCcwzFbm4OnKB1GZEqmQsQVWLmOff50owDNCIulineJfEAf24FZQqBS5lrk8HHWkfm%2F1Dz6OA6M59Dp3rSXFpkfFNwcm%2BRVtlPyHb02jpfrXRBuB0aqbtQOU%2BkMuEYtW%2FnszCQ4j%2BpFMPCejr0GOqUBDQ0ysrR%2BzJAF2YPyxW4FAE9uaoQ5GAMh0Z4FoRbWhGNsVnwbJum7DSMM8nmin50u8jp3WJ54xyQiRRkUeYPxS%2FCyE5B45ng9BTKThq%2FesDsy8%2BT6mQrJk%2F6mBy3YLNk26BLqTt0WhP0rB22HS0tggl0JCubQbrg5hP4ATF4OYpkgCf3GDPivTod92BpKp59RybeFK6RAlpEKUjekkrAnPqjuBlSw&X-Amz-Signature=8262dafe1c58821e282842e64c7c07cb51d2ffdaa0662c11b53415d42f5f2998&X-Amz-SignedHeaders=host&x-id=GetObject)

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
