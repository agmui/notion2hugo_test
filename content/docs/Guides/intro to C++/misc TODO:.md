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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXSPZK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1xcXsOlUdyO%2B3sWWzJ%2B%2BgpYBsOJrtI%2FymLE8pZn%2BQ%2FQIgJxV6h4AQqWUi7kst1iSunmJuDouG7m%2Fmhj6UjW6haucq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNo%2BuvbVehNUj7DE%2BCrcA%2BLWpff%2FzwVC3i48CmM1cdcp3dBoEb75yJ88dMlE3yPjbjbD0NwAJaq69D%2FkuyS1ir1slMzUjpxRCGjNFj%2B%2BnOJ%2Fj8VK06FIt%2BLVkv46rcn%2F0EPec2VgS60P71WUm9qAwqRWbvbnVicyet%2F3wg8Y7x8fUL2YVKVdZN6scxJvMYCuRwaXvGmiHaLqNcnIQRBtBsVSlvX0xhDX4WADceFKs41dnehQ5DHq1KqYMzEmfRfBtUd5trn6CJ6dJ5mJIVXLwnvng8dHUT8CaF04izqcK7PnOeg3bBC95gQok7qe47Qi9NLQbkEcfvFhl62fy4SG758Bi97oy%2BSEePPdPyg2%2BJcoEFakpxTdKzrDM%2FDqqBZWbD1ryPNMcMwe2giqBrrgB1AE0hunVKgYgjWnTzYunP3weij4nS8pzpZ1T0vG6F9Y6gtjjXZEUtlgCV%2FB1IbiKPQ%2BON65%2FHf4V%2BDHMD2lf7wv23ri00WG5sQMCyZj4S7U3hNNjV7UdcK3dhkN1g7DLzmbfcAIYL9Ec2SF6FwIiVVDKvuRq%2B2Z8IsIKVS7DeEAQgRruBrQcEm%2Fu9CQ%2FG5BtGdW0Je%2BlA2ZPRtpik%2FDzW0CawqtxNpcXDFBhAAKGVDGLBv7Ev94QgimBjYHMN61osEGOqUB2P%2BMVZJ4SlosdETK5BgJqTH5P2og%2Fh6HmSsAN2Mojm2IkyqM97J77KXA7rQvZqOwPNeLHIa3zxZ8k6KRZPlsNCUlg5ufKCpK8NIc3Tb%2Fdycit3HNW%2BLGoa%2Bj%2Fzio6Bql5tpXmyduLatnbCv6TlbkIf%2FDoNzv1GOSUhKk2LtnnbqrH%2FbYdrFnW4%2BagflCxT6Z4JXkX%2BycMbLCBh7rLFplgc9RiX08&X-Amz-Signature=3dec3f4d9824d3c0ca4eae07c3f92dc8f2f3dbd25a8a064418055ed5c2614b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXSPZK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1xcXsOlUdyO%2B3sWWzJ%2B%2BgpYBsOJrtI%2FymLE8pZn%2BQ%2FQIgJxV6h4AQqWUi7kst1iSunmJuDouG7m%2Fmhj6UjW6haucq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNo%2BuvbVehNUj7DE%2BCrcA%2BLWpff%2FzwVC3i48CmM1cdcp3dBoEb75yJ88dMlE3yPjbjbD0NwAJaq69D%2FkuyS1ir1slMzUjpxRCGjNFj%2B%2BnOJ%2Fj8VK06FIt%2BLVkv46rcn%2F0EPec2VgS60P71WUm9qAwqRWbvbnVicyet%2F3wg8Y7x8fUL2YVKVdZN6scxJvMYCuRwaXvGmiHaLqNcnIQRBtBsVSlvX0xhDX4WADceFKs41dnehQ5DHq1KqYMzEmfRfBtUd5trn6CJ6dJ5mJIVXLwnvng8dHUT8CaF04izqcK7PnOeg3bBC95gQok7qe47Qi9NLQbkEcfvFhl62fy4SG758Bi97oy%2BSEePPdPyg2%2BJcoEFakpxTdKzrDM%2FDqqBZWbD1ryPNMcMwe2giqBrrgB1AE0hunVKgYgjWnTzYunP3weij4nS8pzpZ1T0vG6F9Y6gtjjXZEUtlgCV%2FB1IbiKPQ%2BON65%2FHf4V%2BDHMD2lf7wv23ri00WG5sQMCyZj4S7U3hNNjV7UdcK3dhkN1g7DLzmbfcAIYL9Ec2SF6FwIiVVDKvuRq%2B2Z8IsIKVS7DeEAQgRruBrQcEm%2Fu9CQ%2FG5BtGdW0Je%2BlA2ZPRtpik%2FDzW0CawqtxNpcXDFBhAAKGVDGLBv7Ev94QgimBjYHMN61osEGOqUB2P%2BMVZJ4SlosdETK5BgJqTH5P2og%2Fh6HmSsAN2Mojm2IkyqM97J77KXA7rQvZqOwPNeLHIa3zxZ8k6KRZPlsNCUlg5ufKCpK8NIc3Tb%2Fdycit3HNW%2BLGoa%2Bj%2Fzio6Bql5tpXmyduLatnbCv6TlbkIf%2FDoNzv1GOSUhKk2LtnnbqrH%2FbYdrFnW4%2BagflCxT6Z4JXkX%2BycMbLCBh7rLFplgc9RiX08&X-Amz-Signature=2d38dcf0ad2d989655d7a878baeefea65db2b2a240a0bc2d157e498a2fc7c408&X-Amz-SignedHeaders=host&x-id=GetObject)

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
