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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=4c512d412065a9693110eb7e9b62a38f76378b508f7d52301d0ceedaa921769f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=0d1d127abca12cda88181f483384744195eefc8342afb3e1fbef3b5a5975c695&X-Amz-SignedHeaders=host&x-id=GetObject)

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
