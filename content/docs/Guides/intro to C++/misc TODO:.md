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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQ5ILMN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID11tj9r6Y0UhDxwkV%2BSLBXf1E7q%2FNZ5ybiVHleofbHjAiBYD07wQI6YPBedR4oX4b26RMonts4OllaNUdOIOggQ6CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CnSzVxs0XtkAnwrKtwDN7Fpbwtjn%2B62kNG6%2F3fVrI3V%2BaPiU%2FKDJGuC2hQh3EKlkWQuk321Gt0jzsnhkY9%2FZbiqT8eknUzAP5lON5y1LlcBFdIObf0MDRHQHULA8Q2ji2uL1cX%2BrlsI%2FPI9oSN2Y9LN9GXi8BMC5Im9QY3ydJtAK3RTV3Zbh%2Bf2n4G3nZh%2B5En9ga6r8dbzHpVAbY6CJk0sgCf14eDMIQP7YMvXdVogXRtj9IUjGN905z9X0HCuPV6xnowPRYik9e73DYBFrYaGLD5Ij7qdj4rHgoeC1BtMxF5ooXJkXIbOP3KJ0yqgHa4xjPihbEcinjp4XDRJRzG%2FIJ6%2B571juYzcME6gU%2FRZwCGuMM6pXwA0DwCRgL1Fg85yHjUuQd1nF%2FGRLkvUUoqvHm5WZNxWjUd%2Bieke7CQS4xZ2jfmtY2ds%2BY2uc0GCgPouScsKkORV9qRHS5dgzYBFn7L9OPmpWFMLTomprUd%2BcsljaU9yGyfeBf5cxV5iAvTcfHTS2vd9tDJ5DltEJ%2BVDb81j4d7DjEky%2BRz1CeuBsY%2F3QM0Qhwjo5QNIpFpqBr5SpvBBtnGIuO6D4wRSq%2FfcZTgMesD5Tgh50%2B%2FP29LfnMhS6phC6iEh4bERgRDu1KiVsQcvhUhFxqkwiK%2BcvgY6pgHH7XhL80r8IxX4xaI72MRBh8GpwCrDbbV8Y%2BskIzC8321sLoj0ZIQ8PJEoaLUYyyUvxYtjSpX7%2F8B3W2aqlbUCETtrduexfV%2F8Zoz%2F2LHb8jSD%2FK%2BUKDqGE2%2FAH%2Fx8f36hdBzRo6eyzzI%2FhXJRcGFI9ES%2BvlzGhyxH%2FbfJzo5K5miqDx7v0gn0V4JiMkmWM43nT5HCbZaCi%2Bj3vFofiPbkBWKPYWiC&X-Amz-Signature=763f8c9161b136d51a3b5f26a5b6bb6a00f0e0e8b6a856cfe12df7eb5c1898bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQ5ILMN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID11tj9r6Y0UhDxwkV%2BSLBXf1E7q%2FNZ5ybiVHleofbHjAiBYD07wQI6YPBedR4oX4b26RMonts4OllaNUdOIOggQ6CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CnSzVxs0XtkAnwrKtwDN7Fpbwtjn%2B62kNG6%2F3fVrI3V%2BaPiU%2FKDJGuC2hQh3EKlkWQuk321Gt0jzsnhkY9%2FZbiqT8eknUzAP5lON5y1LlcBFdIObf0MDRHQHULA8Q2ji2uL1cX%2BrlsI%2FPI9oSN2Y9LN9GXi8BMC5Im9QY3ydJtAK3RTV3Zbh%2Bf2n4G3nZh%2B5En9ga6r8dbzHpVAbY6CJk0sgCf14eDMIQP7YMvXdVogXRtj9IUjGN905z9X0HCuPV6xnowPRYik9e73DYBFrYaGLD5Ij7qdj4rHgoeC1BtMxF5ooXJkXIbOP3KJ0yqgHa4xjPihbEcinjp4XDRJRzG%2FIJ6%2B571juYzcME6gU%2FRZwCGuMM6pXwA0DwCRgL1Fg85yHjUuQd1nF%2FGRLkvUUoqvHm5WZNxWjUd%2Bieke7CQS4xZ2jfmtY2ds%2BY2uc0GCgPouScsKkORV9qRHS5dgzYBFn7L9OPmpWFMLTomprUd%2BcsljaU9yGyfeBf5cxV5iAvTcfHTS2vd9tDJ5DltEJ%2BVDb81j4d7DjEky%2BRz1CeuBsY%2F3QM0Qhwjo5QNIpFpqBr5SpvBBtnGIuO6D4wRSq%2FfcZTgMesD5Tgh50%2B%2FP29LfnMhS6phC6iEh4bERgRDu1KiVsQcvhUhFxqkwiK%2BcvgY6pgHH7XhL80r8IxX4xaI72MRBh8GpwCrDbbV8Y%2BskIzC8321sLoj0ZIQ8PJEoaLUYyyUvxYtjSpX7%2F8B3W2aqlbUCETtrduexfV%2F8Zoz%2F2LHb8jSD%2FK%2BUKDqGE2%2FAH%2Fx8f36hdBzRo6eyzzI%2FhXJRcGFI9ES%2BvlzGhyxH%2FbfJzo5K5miqDx7v0gn0V4JiMkmWM43nT5HCbZaCi%2Bj3vFofiPbkBWKPYWiC&X-Amz-Signature=c6d1244d6c6b7b8c152665c21b7f58031b3c3de1c23811e6f3aa65af2ec400a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
