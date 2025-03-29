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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RH5K4MG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHbwpnLp5Urb2FrEAvIIoZuzA3rhliZbGgY0Nhfk2zK8AiEAsv1RnbsCO1HBFJe%2FPbvC0LTdJs%2BhfCQjd4PAjgZ9BIQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNyMsb5sXm4t2YQPCCrcA1jPiBsF04EU3OcfbdBATLpxf3NE9atAQED5Oxvmw5D7aXgIwpJOsxF0Dq%2Bs1af9ldFGCX6RedwTzCny3VkGYvy%2BcYqpm0FcCNbKOwnmjgwW1TAg4P3U9N6aUMi89BjwIjs3WLwWuh2eRWvEVrW99IUkwJm3vCxlovzIMoZqGjbploU30fere6Hd5gN%2BNGH%2BC%2BQE6Wy3Qo9u8taz6RvQUQ99lRsH%2F7zqktueKxtdEyYDFGE2aXGZ121yiZa4rNu6OagM3QYfiBh3btE0ifR6jX0nkA603Tbz1%2B%2BKg5RCxZFHMUYFd6V78MJhFdQBNaXOy2zQXv8eQ%2BaVXn4Wa%2BojIzObKyapUyTOeRW%2FfqRrKnbQS1HjOhXsBXV1cVVr1r1CjjmWKxNGSUtWQ5TPkfARhIuiKxYmiAwkighwiS5coYKcT1Lsq3%2FbViy2crGCS8f20%2FTsncjN47ZyFCwTyXv50NiKT8jB106OR1Ks5Q9RJ3qVxgDk48tUDG4J5KZmBAeOcdk%2BVxSSDm%2BMelyTR6mItJBh46YsipD9e5yGlPMfY2kJ9e2QEJKvtmgbEs2wYTom5PSbuOgumiKuTMhu75XyJ5daKdcP06C3sDN1T7v95uIYZXDZYq0zvOZboFyvMIDfnL8GOqUBkVMb6QoK1ToUhB372LKDtHIiYE1FjXGMP1hLf9ozHmWpN6jx52ydtKCYj5DVJv8uQFH%2Bu%2B5fII8VyURvj2cH%2B9PRQz3%2FHO6Rxl1WJRVE70WPyC7b44Rc%2B675rY%2BORRBhNWaPOzlYZgxiwpBMbZ%2FiFy1uC0BiTHaaQbtwNzwh%2FYbypz%2FzecO7nYbxl%2FI%2FgAOgfcX%2B2%2Fhv8FNYdS8PGkrRMzDY0gJZ&X-Amz-Signature=3086454dfc96d92b971b7bc4e8996831b99ee349fbcfd4eccfe84448be40aec1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RH5K4MG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHbwpnLp5Urb2FrEAvIIoZuzA3rhliZbGgY0Nhfk2zK8AiEAsv1RnbsCO1HBFJe%2FPbvC0LTdJs%2BhfCQjd4PAjgZ9BIQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNyMsb5sXm4t2YQPCCrcA1jPiBsF04EU3OcfbdBATLpxf3NE9atAQED5Oxvmw5D7aXgIwpJOsxF0Dq%2Bs1af9ldFGCX6RedwTzCny3VkGYvy%2BcYqpm0FcCNbKOwnmjgwW1TAg4P3U9N6aUMi89BjwIjs3WLwWuh2eRWvEVrW99IUkwJm3vCxlovzIMoZqGjbploU30fere6Hd5gN%2BNGH%2BC%2BQE6Wy3Qo9u8taz6RvQUQ99lRsH%2F7zqktueKxtdEyYDFGE2aXGZ121yiZa4rNu6OagM3QYfiBh3btE0ifR6jX0nkA603Tbz1%2B%2BKg5RCxZFHMUYFd6V78MJhFdQBNaXOy2zQXv8eQ%2BaVXn4Wa%2BojIzObKyapUyTOeRW%2FfqRrKnbQS1HjOhXsBXV1cVVr1r1CjjmWKxNGSUtWQ5TPkfARhIuiKxYmiAwkighwiS5coYKcT1Lsq3%2FbViy2crGCS8f20%2FTsncjN47ZyFCwTyXv50NiKT8jB106OR1Ks5Q9RJ3qVxgDk48tUDG4J5KZmBAeOcdk%2BVxSSDm%2BMelyTR6mItJBh46YsipD9e5yGlPMfY2kJ9e2QEJKvtmgbEs2wYTom5PSbuOgumiKuTMhu75XyJ5daKdcP06C3sDN1T7v95uIYZXDZYq0zvOZboFyvMIDfnL8GOqUBkVMb6QoK1ToUhB372LKDtHIiYE1FjXGMP1hLf9ozHmWpN6jx52ydtKCYj5DVJv8uQFH%2Bu%2B5fII8VyURvj2cH%2B9PRQz3%2FHO6Rxl1WJRVE70WPyC7b44Rc%2B675rY%2BORRBhNWaPOzlYZgxiwpBMbZ%2FiFy1uC0BiTHaaQbtwNzwh%2FYbypz%2FzecO7nYbxl%2FI%2FgAOgfcX%2B2%2Fhv8FNYdS8PGkrRMzDY0gJZ&X-Amz-Signature=537cc18b816426c834f4a77728521e27d12ca81d00824c51d0d5196c847b24a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
