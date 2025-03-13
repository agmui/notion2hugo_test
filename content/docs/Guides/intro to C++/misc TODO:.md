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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LPQCYD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FSYm3KAuZz%2BovAasspmxhPQY9ibn5nAAklrvh3z%2BccAiBtbBE2x9xRemj152UHCHmBTjGM%2B9%2FM69CuKkdrO1eYRSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqn7r8R9bOOZerGfBKtwDYktf094PjdHH1roaFKCmG%2FHkMe1CxCLPTN%2FDjNwt97Vur3yfoybQhmsydzCSUJzyBpuipwa3zp7RqRpFadiVe%2BJJbMFi8IChFWARMfduaai5ExZMMq8AkLGDOpQCxutyUv3%2FmFE6AXGGErWHAupJ0fujzlAfS0H51cW0smYO%2BAeoMp78KvZk62x30BM2PXxnntRM6yLhTRseoM6i1ZlwINLOloGQZXllnHfJobiZPYo4YpIznCFHbBFZ421yhW6n7%2B6y2eMYoX56z9VfSNa7yBXxEjLczIfrizmcB1iVOwMzKhYNIINXNkMrloxHqluAvA1UJdRABjjM8QK%2BcG5BCSasPy3NB7rnl2ipZ3XXP5PcUF%2BypXg7SvoZDH5K%2FQBOLDaUBIv2KDRdXPkWa16YsQpmzAe0wdkjPsBVb1xksqp7yCMkpYlk03cuougOINp12AZ4oA8zDrz3AITEOaB3MatREHctaVvnx7d6pBBpSg6F0j9Ujw0OOawYyX8278nlXs%2F3hUs4JDyrFqMnSr3TswQ8W0fHo5o53XUOt15mvDahwdNQ5wemafSF%2BL3A2YpcyS5K8gz4dYwc2rT9280ihyVVslunX%2BeZouurrJLH0Pj5tz3cFNNWm6%2BL%2BlUwyp7JvgY6pgGuQIeF1WxQbi30AVhNGiwrRxfbN1j5L9Rg3rRkoVH9p9gGYTh%2FOwMH%2FCZbZpNaAKkFqbDv76%2BNeum6CLrKEHwo9PeQAaqKG2RcokfE9j7fjo9BIBB%2FLKGWUamGC1pYntUbcY7yk5WINs9cyiiI52KmTpfI3r9zO1FAhYk2pLgxo44AtWjrFldkvLtk0Chjwc0decJadKbcC%2BcvzFmQ9LgO14N%2Bb1sr&X-Amz-Signature=7a5bc771dc5c9d0a1c9d8ee6a8b05b338638619ae663bced42845dc92e67007f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LPQCYD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FSYm3KAuZz%2BovAasspmxhPQY9ibn5nAAklrvh3z%2BccAiBtbBE2x9xRemj152UHCHmBTjGM%2B9%2FM69CuKkdrO1eYRSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqn7r8R9bOOZerGfBKtwDYktf094PjdHH1roaFKCmG%2FHkMe1CxCLPTN%2FDjNwt97Vur3yfoybQhmsydzCSUJzyBpuipwa3zp7RqRpFadiVe%2BJJbMFi8IChFWARMfduaai5ExZMMq8AkLGDOpQCxutyUv3%2FmFE6AXGGErWHAupJ0fujzlAfS0H51cW0smYO%2BAeoMp78KvZk62x30BM2PXxnntRM6yLhTRseoM6i1ZlwINLOloGQZXllnHfJobiZPYo4YpIznCFHbBFZ421yhW6n7%2B6y2eMYoX56z9VfSNa7yBXxEjLczIfrizmcB1iVOwMzKhYNIINXNkMrloxHqluAvA1UJdRABjjM8QK%2BcG5BCSasPy3NB7rnl2ipZ3XXP5PcUF%2BypXg7SvoZDH5K%2FQBOLDaUBIv2KDRdXPkWa16YsQpmzAe0wdkjPsBVb1xksqp7yCMkpYlk03cuougOINp12AZ4oA8zDrz3AITEOaB3MatREHctaVvnx7d6pBBpSg6F0j9Ujw0OOawYyX8278nlXs%2F3hUs4JDyrFqMnSr3TswQ8W0fHo5o53XUOt15mvDahwdNQ5wemafSF%2BL3A2YpcyS5K8gz4dYwc2rT9280ihyVVslunX%2BeZouurrJLH0Pj5tz3cFNNWm6%2BL%2BlUwyp7JvgY6pgGuQIeF1WxQbi30AVhNGiwrRxfbN1j5L9Rg3rRkoVH9p9gGYTh%2FOwMH%2FCZbZpNaAKkFqbDv76%2BNeum6CLrKEHwo9PeQAaqKG2RcokfE9j7fjo9BIBB%2FLKGWUamGC1pYntUbcY7yk5WINs9cyiiI52KmTpfI3r9zO1FAhYk2pLgxo44AtWjrFldkvLtk0Chjwc0decJadKbcC%2BcvzFmQ9LgO14N%2Bb1sr&X-Amz-Signature=dae039ce9dcb1f9e9ecdc436a92f7c424e6a78126df761a348e0cf29bea53ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
