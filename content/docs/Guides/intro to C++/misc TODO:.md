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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPOVOLW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLfWkfG2c%2BcP75ha0sr3RXg7%2Brs89EPJQhLJGJQOK0CQIgN8T2P36dTSzCqFxlpAuV2QyhfE0V4mJtBZ9rH34nkowqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVe9cuPCP5WFVI92ircA%2F85C%2BrK5NxM3bFnjZIH1iLIusLjd%2Bb4tP%2BFMR23XdDjwYp%2FY5buSEBOOTHuik3iJ69VnBdvxCwzG0tkx1bbumjCoRl68%2BaOgPJn%2FNEyQNtC%2FMeWuSwof6FjGGrLZc54OO3U%2Fj5XdYQeH4DynaB0tjXSXC8N3otJIznTgk2ldlDCC8NNyobyNPEpRPHsWE6lJit%2Fnk8LSSYYjDUdyPUCevgjmQyGS3ZgWvbYDT5wtDXsVC06yOgMWKRrYCWtBTpksnD6vJ6rjPZZamenCMuwgoeK%2F5XkgX7ZU0zUsocAj6lSj%2FYwtpHeI5r0VYwGzBh0ELU5w02WpfuJCr9j5TkrYxqD0zmf0jP9thOuWiXlqgVFfjsXwKv6hR4i1tN63gVwPOuYcJvSGzrdjHw6lbF6%2Bh3hHp%2BgmBfsxJ3wNSPN2BJNPHqnyM15ueMfSZR3mMhtR71Bh0A0E3Ib1JaHiCiYHfnhRRpLTP%2B43BUxFSzCA5pXzcp8VVIOdFO7Tt4PBUDEOM1AqLdOTSwsfNgSJ3q5rWnYKOvy43IuiMhKy%2FNY24cVrRxjXL8GBoVp8EWzxdgx%2BCkjH2IE2cH%2FUnDA1SGevB2ezuPwYmraggcuodSk3tBcV8jQ1k95qHaWUI5qMI7wvr4GOqUBQFtt5w2kSotyPJCar27Ib%2FS4MHX1uau2hNtOtwPq%2FO49naWTJnINjOXx9KeeNnLu7XdvOVjkcGdGTXfLSKeZ5bILYw7Jmpf6%2Fi6V3ihg7dlx%2FVpVbhFGQ52ZVK1rtXj1auxP2p02WCk12ixa9b%2BUcL2VDf%2F8sX9LDhcpxufVbc6zPSP8b%2FawI%2FIafdTX%2BGeN5JDPb1L73vxXKNFY%2BIIci%2FoMluWv&X-Amz-Signature=d13cd9c2b0083c37735715d4317b63d28b671a8955a56e343327fbc190ac8ece&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPOVOLW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLfWkfG2c%2BcP75ha0sr3RXg7%2Brs89EPJQhLJGJQOK0CQIgN8T2P36dTSzCqFxlpAuV2QyhfE0V4mJtBZ9rH34nkowqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVe9cuPCP5WFVI92ircA%2F85C%2BrK5NxM3bFnjZIH1iLIusLjd%2Bb4tP%2BFMR23XdDjwYp%2FY5buSEBOOTHuik3iJ69VnBdvxCwzG0tkx1bbumjCoRl68%2BaOgPJn%2FNEyQNtC%2FMeWuSwof6FjGGrLZc54OO3U%2Fj5XdYQeH4DynaB0tjXSXC8N3otJIznTgk2ldlDCC8NNyobyNPEpRPHsWE6lJit%2Fnk8LSSYYjDUdyPUCevgjmQyGS3ZgWvbYDT5wtDXsVC06yOgMWKRrYCWtBTpksnD6vJ6rjPZZamenCMuwgoeK%2F5XkgX7ZU0zUsocAj6lSj%2FYwtpHeI5r0VYwGzBh0ELU5w02WpfuJCr9j5TkrYxqD0zmf0jP9thOuWiXlqgVFfjsXwKv6hR4i1tN63gVwPOuYcJvSGzrdjHw6lbF6%2Bh3hHp%2BgmBfsxJ3wNSPN2BJNPHqnyM15ueMfSZR3mMhtR71Bh0A0E3Ib1JaHiCiYHfnhRRpLTP%2B43BUxFSzCA5pXzcp8VVIOdFO7Tt4PBUDEOM1AqLdOTSwsfNgSJ3q5rWnYKOvy43IuiMhKy%2FNY24cVrRxjXL8GBoVp8EWzxdgx%2BCkjH2IE2cH%2FUnDA1SGevB2ezuPwYmraggcuodSk3tBcV8jQ1k95qHaWUI5qMI7wvr4GOqUBQFtt5w2kSotyPJCar27Ib%2FS4MHX1uau2hNtOtwPq%2FO49naWTJnINjOXx9KeeNnLu7XdvOVjkcGdGTXfLSKeZ5bILYw7Jmpf6%2Fi6V3ihg7dlx%2FVpVbhFGQ52ZVK1rtXj1auxP2p02WCk12ixa9b%2BUcL2VDf%2F8sX9LDhcpxufVbc6zPSP8b%2FawI%2FIafdTX%2BGeN5JDPb1L73vxXKNFY%2BIIci%2FoMluWv&X-Amz-Signature=d014efaa911c544e584f5e60ba0b8996ef46964261aa0a855f2c3cce1585f5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
