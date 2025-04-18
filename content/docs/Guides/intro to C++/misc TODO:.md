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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2UBCAJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUWg0VHuyxS7F2t2swF0XYSCgwiwbT0bbNwhdqka%2BsSwIhAKkkrYfz1BjxTQsxADQ%2F%2BxPpZVE4jXcS9PCNI8LZO72gKv8DCG4QABoMNjM3NDIzMTgzODA1Igwq5Ar7Wcyp6yT4jSkq3AOtFJ4DvGKXKN8MucxeqBOlqJYCZhdmSfVP4JCmwy%2BN9S%2F8ySUMX5s5vIsC5B3hKBcK0i1YEJqtYvMmmFkYzN%2FKCF9MHnD6hEhIRisC3TasyXdycP9Udn4r5b0wwd19DYLj5jyrsAl8VU9u6pM636OL5KKx0lEd2SuzmibV8Wwd9jE4BW%2FjeMT43zt7OvWoeB0FMkL1czhVcQ2lXKXa%2FP01Zl2mcLLjCI1rHnh%2FkNjXsjNqs1z4KUnvFNZ2kDBcS%2BXRmd0AWwT6N15Km%2FnWYFo0TvzqKcvFrJbXRCYkxw8bZjFidUB4Yv8clXSG8m40p4GBMG4jiqfniWrmC%2B71aTcfiMwqSBuM4TbnA4LiPP6HVFVqn97Dya3LgtfDpLLPgKq%2FGXI0272%2FIETocE6B%2FB7GbCMxiYilXXCuwkSceFuh%2BU%2F%2FanHKgNSWQFEi%2BsAzADykRI8IDw8etAdkt%2F5RleCeI0yrkn51LDg%2BDOiVik3cqhsLQQmtQhtq%2FlrzprBStNa69BKyVVkhWAIvz3HAx%2FL48E0l5KnGZqtxQqTXuFFbFrNs5y1jeJgPgMUl2wN2fxm80I1MU9Jr9kR7ZGC87R6a50sDpbt9FGRJzvINowiwA7LX2pC9uhcSzPAcGjDTwofABjqkAXRjV%2BR2pLrqjEMXB3ODxDVvXfkfuEuQoPrFNSavjhuo%2B0Of2vga6tDhpQvdjncanlLfvUURiU5TZMrsfs86bK7cqsVPRAnTQrCz1c3pYuwL4SU2vqUbtLmCKx%2BGYlEQ9nO6Q%2ByJr1b1MJFA5PqQtWGcjHJLQLdMPgi5ajQeCQ9JNxl%2FNnBLNJQ%2BikvCAABiZNs7%2FnWmZRapB5cF2fuTX4U3haMq&X-Amz-Signature=0ade9335401e593efd92be08b17dcec5b984b824e6f39c20743735f99092a0be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2UBCAJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUWg0VHuyxS7F2t2swF0XYSCgwiwbT0bbNwhdqka%2BsSwIhAKkkrYfz1BjxTQsxADQ%2F%2BxPpZVE4jXcS9PCNI8LZO72gKv8DCG4QABoMNjM3NDIzMTgzODA1Igwq5Ar7Wcyp6yT4jSkq3AOtFJ4DvGKXKN8MucxeqBOlqJYCZhdmSfVP4JCmwy%2BN9S%2F8ySUMX5s5vIsC5B3hKBcK0i1YEJqtYvMmmFkYzN%2FKCF9MHnD6hEhIRisC3TasyXdycP9Udn4r5b0wwd19DYLj5jyrsAl8VU9u6pM636OL5KKx0lEd2SuzmibV8Wwd9jE4BW%2FjeMT43zt7OvWoeB0FMkL1czhVcQ2lXKXa%2FP01Zl2mcLLjCI1rHnh%2FkNjXsjNqs1z4KUnvFNZ2kDBcS%2BXRmd0AWwT6N15Km%2FnWYFo0TvzqKcvFrJbXRCYkxw8bZjFidUB4Yv8clXSG8m40p4GBMG4jiqfniWrmC%2B71aTcfiMwqSBuM4TbnA4LiPP6HVFVqn97Dya3LgtfDpLLPgKq%2FGXI0272%2FIETocE6B%2FB7GbCMxiYilXXCuwkSceFuh%2BU%2F%2FanHKgNSWQFEi%2BsAzADykRI8IDw8etAdkt%2F5RleCeI0yrkn51LDg%2BDOiVik3cqhsLQQmtQhtq%2FlrzprBStNa69BKyVVkhWAIvz3HAx%2FL48E0l5KnGZqtxQqTXuFFbFrNs5y1jeJgPgMUl2wN2fxm80I1MU9Jr9kR7ZGC87R6a50sDpbt9FGRJzvINowiwA7LX2pC9uhcSzPAcGjDTwofABjqkAXRjV%2BR2pLrqjEMXB3ODxDVvXfkfuEuQoPrFNSavjhuo%2B0Of2vga6tDhpQvdjncanlLfvUURiU5TZMrsfs86bK7cqsVPRAnTQrCz1c3pYuwL4SU2vqUbtLmCKx%2BGYlEQ9nO6Q%2ByJr1b1MJFA5PqQtWGcjHJLQLdMPgi5ajQeCQ9JNxl%2FNnBLNJQ%2BikvCAABiZNs7%2FnWmZRapB5cF2fuTX4U3haMq&X-Amz-Signature=ee36f89a50ac212c005ea1191eeea619f2cf784732c91220b487a2f8de85b51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
