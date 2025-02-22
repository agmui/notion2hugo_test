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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUBQMYR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc1XK87VCO7lIV9k9HLREpNuAYuWTV%2FuANvuTB7VW3MgIhAOMPi2VDyPIXdUm4z00Bo1c45IzZ36JBdIn1zEuV5tYqKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw96uC3rI3ZhZgWxkIq3AMdxMQnIkSFbTDxq4YYqPqiZhcPasouzkCEg4xCGZ5nXVWtjMedrW3UjnT0uNcyPb%2F5Uq34t6CNjVgkJ%2FEEYBAJSv8tiv%2F8BJj9zxQokBhwuA85YTfifGrMjXYVN210zKD61pQMJNZdVgJzBEO%2FSdogbRTUsgUQJxpfoLSSHo1CZ6Rd14w0JkRfI0QA11s81P8%2FK5mg%2BbeEV1ghEkmQZ2K6B8dkUXvd86aUysLveMU1qEGiYHuMg2rE%2FaQlu3Vug4U5OU8iGVkjo0oPIvUiMUleBK8kQAmbVPOr7%2FXi9QocgaFvXr5Tqr6GEHO4zmQi%2Bw0%2F3RfT4DnC8AmtR2xEmusKjxlKaq4umKA%2Fm7r8uTwJpW8jJc2Cipmx%2BZsDjth%2FAdYsI%2FzL%2B8J4mbJJsuA3Yd8T18WyXxqYp1mAM3JmK9Zo9HhOZZtQ%2FNyRRhTIDaOtJSlr9ccUxcj2%2FxcI6dJ6vTdEMXf9IRwGowvIFolsOEdNjKA%2BhHp6Sd%2BY543C9kkbZ5PIMOdjzMRIgh4ttfTN4E5m1kQtbsaBhi05alcll6aJjXP5xN6BuUiVs2V9%2Bp2TzN0UtSQATFai0kt3p7MLn0XDuqv1f6mN4nefwBeoEMi5paSOi2faNUkrpHSq%2BzCli%2BW9BjqkAa2qxYuFBCVRn8PoNevIDhrxowViuNq8THkQgVSQiF9zMNijrwB3q9NEGt99GFtwsEfP0KLHPeBcbZZbO%2FNGPfYEr5AmeMtNDH6%2BMe1rZ04rbYHwKUPFQztn8tbJ%2Bb8AhvUT7m6GnyRH%2F%2FnkeuE0SCNOQ2zh7qAEOLQUP9ByxoNndv6U4nprr6VNTjq3IEBblCup8VzCpjwRWoajrJN8eZyM2uyD&X-Amz-Signature=42f37451109603cf76611ce2aa21cb7d590010fb33fea73f0637a866ab077a30&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUBQMYR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc1XK87VCO7lIV9k9HLREpNuAYuWTV%2FuANvuTB7VW3MgIhAOMPi2VDyPIXdUm4z00Bo1c45IzZ36JBdIn1zEuV5tYqKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw96uC3rI3ZhZgWxkIq3AMdxMQnIkSFbTDxq4YYqPqiZhcPasouzkCEg4xCGZ5nXVWtjMedrW3UjnT0uNcyPb%2F5Uq34t6CNjVgkJ%2FEEYBAJSv8tiv%2F8BJj9zxQokBhwuA85YTfifGrMjXYVN210zKD61pQMJNZdVgJzBEO%2FSdogbRTUsgUQJxpfoLSSHo1CZ6Rd14w0JkRfI0QA11s81P8%2FK5mg%2BbeEV1ghEkmQZ2K6B8dkUXvd86aUysLveMU1qEGiYHuMg2rE%2FaQlu3Vug4U5OU8iGVkjo0oPIvUiMUleBK8kQAmbVPOr7%2FXi9QocgaFvXr5Tqr6GEHO4zmQi%2Bw0%2F3RfT4DnC8AmtR2xEmusKjxlKaq4umKA%2Fm7r8uTwJpW8jJc2Cipmx%2BZsDjth%2FAdYsI%2FzL%2B8J4mbJJsuA3Yd8T18WyXxqYp1mAM3JmK9Zo9HhOZZtQ%2FNyRRhTIDaOtJSlr9ccUxcj2%2FxcI6dJ6vTdEMXf9IRwGowvIFolsOEdNjKA%2BhHp6Sd%2BY543C9kkbZ5PIMOdjzMRIgh4ttfTN4E5m1kQtbsaBhi05alcll6aJjXP5xN6BuUiVs2V9%2Bp2TzN0UtSQATFai0kt3p7MLn0XDuqv1f6mN4nefwBeoEMi5paSOi2faNUkrpHSq%2BzCli%2BW9BjqkAa2qxYuFBCVRn8PoNevIDhrxowViuNq8THkQgVSQiF9zMNijrwB3q9NEGt99GFtwsEfP0KLHPeBcbZZbO%2FNGPfYEr5AmeMtNDH6%2BMe1rZ04rbYHwKUPFQztn8tbJ%2Bb8AhvUT7m6GnyRH%2F%2FnkeuE0SCNOQ2zh7qAEOLQUP9ByxoNndv6U4nprr6VNTjq3IEBblCup8VzCpjwRWoajrJN8eZyM2uyD&X-Amz-Signature=8bc1b7d59d69821640b1c8c0204bdd3c2af6c8bb398f0978c5d71814d8397a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
