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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPABOMJI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaAPIIxxshVWtRFqJFwRoG%2BkmYJov72un1fZnnTWVuBAiEA7wZ68B65OKvlFg5djQdEHJh1j6MaZNZPWQYzdrqJ%2BB8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDETebm1s4mqz%2BUMf3ircA6PfovApysgJJ6ZYJXMxmJbqx0yTof38OdUiXi0hN8wJTg5D1iYK%2Biru4Rm9cABc6ej75FcqMv%2FbojvlC8q4JjBAD3kD4VH66gKNetev%2BW8QFB%2FDxWRJVTkjx8%2FV8N7mLiaAeNGj7vx5U7w1r%2FgRZaTJJsAAM0nHIg7PKKRxCpJ9n1WdL7qJ0XK16DwfUL%2F8yY4UTpIxCLYMq%2BT9jHf1d7Lfz36Ocis07b065RwFlAQ1Nlv1ketWUmUlkPWYD1ksIJn70N29aZwaYMoOmCvR71KWFagqA4DL6%2B0vNvxoffIM%2FxWi3FPVOlYWj8hQcla1qcIjEK32N%2FtWjHUs4iPLYTx5cphKKAPV3N0GYTcpGqRZkYJvuBlV3Q8HlBqkzEO0NyhOaCXH02zB%2BZb3Hx3FvCDiIY%2BxgFLQQnXloozGe%2BlVNVIRjpb4ZyB5eZ61Z866zZsv8yKSWIZdOTUrHWVtUimH3aOmA3LFkqlnS0DfJmxsCRknDBli%2BxUMqEOXQIJkvsv1AYAiU9Ikq0u6xj3XdU61VlRtUc%2FycSWcyOYFIDd3JaSuCz11L7H2Z0k9Q7yz4YNAKdL%2B4eWMGm1CIcb4EEnKwOYhc%2F3IACqBHAG9Bd7MgDWSX%2B8h5aipujo1MMfvwr8GOqUBq1UfC3%2BvrxMYCXcZJ2Xhxt0Z9E23Zz8dl6OYHuYoVvTz1G9P7evVWjP2TMbTneWa2QJ8gostz7Ah3CxCuHTjLBerr%2FWUE8YE0%2BD%2F2YuJWAC0ZiEJvKuO6eo4%2BINP%2BrWNPNFI52hGrmQp9wUV6tGNBfzbD8Ml7%2Fth9u9D2MGTswq3rfm55aErawV80AKWud4nTqxHrAkcqs9VMkIC6t4rn5XgOzCR&X-Amz-Signature=13dd8f382daa68328ee90d95289e895db8dd49fde1c09373f4eb0eb95d07896f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPABOMJI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaAPIIxxshVWtRFqJFwRoG%2BkmYJov72un1fZnnTWVuBAiEA7wZ68B65OKvlFg5djQdEHJh1j6MaZNZPWQYzdrqJ%2BB8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDETebm1s4mqz%2BUMf3ircA6PfovApysgJJ6ZYJXMxmJbqx0yTof38OdUiXi0hN8wJTg5D1iYK%2Biru4Rm9cABc6ej75FcqMv%2FbojvlC8q4JjBAD3kD4VH66gKNetev%2BW8QFB%2FDxWRJVTkjx8%2FV8N7mLiaAeNGj7vx5U7w1r%2FgRZaTJJsAAM0nHIg7PKKRxCpJ9n1WdL7qJ0XK16DwfUL%2F8yY4UTpIxCLYMq%2BT9jHf1d7Lfz36Ocis07b065RwFlAQ1Nlv1ketWUmUlkPWYD1ksIJn70N29aZwaYMoOmCvR71KWFagqA4DL6%2B0vNvxoffIM%2FxWi3FPVOlYWj8hQcla1qcIjEK32N%2FtWjHUs4iPLYTx5cphKKAPV3N0GYTcpGqRZkYJvuBlV3Q8HlBqkzEO0NyhOaCXH02zB%2BZb3Hx3FvCDiIY%2BxgFLQQnXloozGe%2BlVNVIRjpb4ZyB5eZ61Z866zZsv8yKSWIZdOTUrHWVtUimH3aOmA3LFkqlnS0DfJmxsCRknDBli%2BxUMqEOXQIJkvsv1AYAiU9Ikq0u6xj3XdU61VlRtUc%2FycSWcyOYFIDd3JaSuCz11L7H2Z0k9Q7yz4YNAKdL%2B4eWMGm1CIcb4EEnKwOYhc%2F3IACqBHAG9Bd7MgDWSX%2B8h5aipujo1MMfvwr8GOqUBq1UfC3%2BvrxMYCXcZJ2Xhxt0Z9E23Zz8dl6OYHuYoVvTz1G9P7evVWjP2TMbTneWa2QJ8gostz7Ah3CxCuHTjLBerr%2FWUE8YE0%2BD%2F2YuJWAC0ZiEJvKuO6eo4%2BINP%2BrWNPNFI52hGrmQp9wUV6tGNBfzbD8Ml7%2Fth9u9D2MGTswq3rfm55aErawV80AKWud4nTqxHrAkcqs9VMkIC6t4rn5XgOzCR&X-Amz-Signature=87a401af2eeda9ed46a5e20302ef5e00b32372031cfcab4dc24edd91ab214917&X-Amz-SignedHeaders=host&x-id=GetObject)

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
