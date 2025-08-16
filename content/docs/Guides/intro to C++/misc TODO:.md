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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77SYR5A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDfRlOdtapfI32Q1Jd7UTe1bXv33alxo7b%2F%2B3UH4sI6qwIgPNFzRstHi4GkLTeULJMBYg8yIRrf5vTh7c5oAWSdZP8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGHAkgIHqzlpXf7VjircA9YFuvp3zr0qKhnEGop1StIDkN2VKRa8gKgCkV%2BdyI5fzytzOI77w4ylNCLsQVHdFGZ%2FeIuxSFrRgHIadyVU2hAX36Egp42oyU8orjXKc1M%2F6b3ZpjPU0a4iVqDNAgCI%2BQeMllTIY3JEg78ukAUoZ8dM595skfp%2F4h%2B97uNLw443GqXQY5eqePGvtEkXwCYQfMZK%2FGVNZR%2FPH%2Bn3u4FHHiJKWajdhP3a85aaATl%2FEjZzbsGQbKvv5IJnv0yvMl5LBPtvr3OJKXm2kdruLCRSV3wjzSjdH%2FYN4Rkx%2F4Wn7JP8uXQ1%2BTHwzdx8Smzeyj86taJlz5Nx8VFGkktonVCUWjAd4mPUe86wL5ZmFP9CYp%2F9pwDIaU9zKMxHKF0SYmGB82u0sUePi6cUfrVA6XzgoJhV%2BExzgSHOstMUZ%2Ff8UpMFVAsGssj%2Fdq8mlbmSlzzV6dM8BVI0S4cqUPDmuHI4RTEqja2Jo95CmHvV4cJTG%2BeCmOKvUY%2FHf4pTKPN%2BUv5cJPg3VcF5x4pFfW9gEeeUG4cS%2F8fSfcngVTnWOc7kQMOVMUWBX%2Bv7hYC1U721gizcNhzebCh5mInKHuBqnK1zpLtSgki33QR1e2CJZmKUxRhckE0KalR6fQ9gBv4cMOrj%2F8QGOqUBg3AZdNDyJ4Zjq8Jcr2XH9vXlnOPEL3STem2%2BJi%2B59V7zsCY3FvzvSD7j4RPGFko5Rz8cp%2BbqTUd06XBSE4q2N9BNYAwE5K6J60BNF3gUPdRixCh0BPofltPvUEpwXeBvcjVSsOVC%2FrR6lUA%2BTxUjKHh920cXMl35yI7NGwErtD9aOPKAJ0AmRPp3PkAm8o7UzJ7E1NkhZqAL93HurlNkc1Ebg%2B4A&X-Amz-Signature=2580b639ca2436d725ebb42ae1e848bca09e01ce72a73091be2b7c871316c3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77SYR5A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDfRlOdtapfI32Q1Jd7UTe1bXv33alxo7b%2F%2B3UH4sI6qwIgPNFzRstHi4GkLTeULJMBYg8yIRrf5vTh7c5oAWSdZP8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGHAkgIHqzlpXf7VjircA9YFuvp3zr0qKhnEGop1StIDkN2VKRa8gKgCkV%2BdyI5fzytzOI77w4ylNCLsQVHdFGZ%2FeIuxSFrRgHIadyVU2hAX36Egp42oyU8orjXKc1M%2F6b3ZpjPU0a4iVqDNAgCI%2BQeMllTIY3JEg78ukAUoZ8dM595skfp%2F4h%2B97uNLw443GqXQY5eqePGvtEkXwCYQfMZK%2FGVNZR%2FPH%2Bn3u4FHHiJKWajdhP3a85aaATl%2FEjZzbsGQbKvv5IJnv0yvMl5LBPtvr3OJKXm2kdruLCRSV3wjzSjdH%2FYN4Rkx%2F4Wn7JP8uXQ1%2BTHwzdx8Smzeyj86taJlz5Nx8VFGkktonVCUWjAd4mPUe86wL5ZmFP9CYp%2F9pwDIaU9zKMxHKF0SYmGB82u0sUePi6cUfrVA6XzgoJhV%2BExzgSHOstMUZ%2Ff8UpMFVAsGssj%2Fdq8mlbmSlzzV6dM8BVI0S4cqUPDmuHI4RTEqja2Jo95CmHvV4cJTG%2BeCmOKvUY%2FHf4pTKPN%2BUv5cJPg3VcF5x4pFfW9gEeeUG4cS%2F8fSfcngVTnWOc7kQMOVMUWBX%2Bv7hYC1U721gizcNhzebCh5mInKHuBqnK1zpLtSgki33QR1e2CJZmKUxRhckE0KalR6fQ9gBv4cMOrj%2F8QGOqUBg3AZdNDyJ4Zjq8Jcr2XH9vXlnOPEL3STem2%2BJi%2B59V7zsCY3FvzvSD7j4RPGFko5Rz8cp%2BbqTUd06XBSE4q2N9BNYAwE5K6J60BNF3gUPdRixCh0BPofltPvUEpwXeBvcjVSsOVC%2FrR6lUA%2BTxUjKHh920cXMl35yI7NGwErtD9aOPKAJ0AmRPp3PkAm8o7UzJ7E1NkhZqAL93HurlNkc1Ebg%2B4A&X-Amz-Signature=35f799a34149b964c8cfe5bec0ead3ebe328d84e7edc0b85eb4e45b8ba93f965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
