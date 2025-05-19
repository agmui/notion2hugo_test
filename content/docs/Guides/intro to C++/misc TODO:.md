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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLZ3W7E%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGs77XXuN13tC0lBtZcKrw0eMmB%2FNasV4YxxK%2B44HUQQIhAJUqTtvApsaj0vMpNJfpWWoiRuE4pxHkyOOX8W%2F9ZQ0hKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyHqBpW2L%2BnxWxJYAq3AO8QFRYc5p74mH6kd5wMHIWLy6V43P4XiTBTgElPHP7BkHaqP334eELKukuHwULF3bJWobvixt6Ec8vqsOYx44WdAXcoQVbhIm9deg2X%2FB3QFFBnvacWoXHfKgVXB9UaFkYEa0NtN5piO3nBgKQbgs3NYBLJaezfVpHCrIDWgE8aJryDC6Fkc3SSxA8ANIiCxv7a0oQQC6PZRN7%2BOvz7u0zJN2HCfKmbsr9RrdygL2F%2BgmbAcDLpL5VTu2XFS34UrNwdznuaHgmwNYLBHNBA7CpzBSYCONGn63wTeaV5AIZ0N%2FikdEJv8eB83orZckr3%2BeJnL4xVULMFFQb7bfticPKd%2BNsrzAfqpxcuzxngeAcsq9BcjnBQEjlquqK6q4AU5CFF1IcZuO4EVt%2FDMoQLo9PCEyEWJc4FrwuamcnkLxiBND6fSDiZ0cvi9um0VPUS8nffzjZVkxdTJ8qWPUSm%2F6EbrBNWo62zv62hPmlAXfgsND0ZHJFRXWCldj7InW6Lb4dbbrNi9Ym6%2BtYgWlKgDznWxvcLdVVvuldyYwWIPyEI5UxTsDMEPSmpomV6tTExg1pJ3o9Jr0vqn6aSRJFwD0oCoTcuUGd4NI0qA%2FNb5NSqVxL5tjmaNPeh58sIDCv66nBBjqkAT4qivP0Yy8WYAh6K7w0yZSvKAY%2BgPn2D2Vcd2trPHmOkzVqBPnfEbiYVqZaIm1imc1QHLqtXzaXWHW7PaDqUhjg6TAxlJo3LklO99ydNc%2BFi%2FjlGLSsGH%2BZtt19xSYFq01qwnggQy2%2FQMLBiAs8BnHmT4cJXqfP%2FvKw%2BCbANmxPlCRwtY4UiseObNg8%2FIndn%2BBwaojGOEjIrA20INBjg0qEwxlz&X-Amz-Signature=1ac9bd2072c6a70543545a1a82c960c952a7788ba92105f380b4c22d86278ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLZ3W7E%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGs77XXuN13tC0lBtZcKrw0eMmB%2FNasV4YxxK%2B44HUQQIhAJUqTtvApsaj0vMpNJfpWWoiRuE4pxHkyOOX8W%2F9ZQ0hKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyHqBpW2L%2BnxWxJYAq3AO8QFRYc5p74mH6kd5wMHIWLy6V43P4XiTBTgElPHP7BkHaqP334eELKukuHwULF3bJWobvixt6Ec8vqsOYx44WdAXcoQVbhIm9deg2X%2FB3QFFBnvacWoXHfKgVXB9UaFkYEa0NtN5piO3nBgKQbgs3NYBLJaezfVpHCrIDWgE8aJryDC6Fkc3SSxA8ANIiCxv7a0oQQC6PZRN7%2BOvz7u0zJN2HCfKmbsr9RrdygL2F%2BgmbAcDLpL5VTu2XFS34UrNwdznuaHgmwNYLBHNBA7CpzBSYCONGn63wTeaV5AIZ0N%2FikdEJv8eB83orZckr3%2BeJnL4xVULMFFQb7bfticPKd%2BNsrzAfqpxcuzxngeAcsq9BcjnBQEjlquqK6q4AU5CFF1IcZuO4EVt%2FDMoQLo9PCEyEWJc4FrwuamcnkLxiBND6fSDiZ0cvi9um0VPUS8nffzjZVkxdTJ8qWPUSm%2F6EbrBNWo62zv62hPmlAXfgsND0ZHJFRXWCldj7InW6Lb4dbbrNi9Ym6%2BtYgWlKgDznWxvcLdVVvuldyYwWIPyEI5UxTsDMEPSmpomV6tTExg1pJ3o9Jr0vqn6aSRJFwD0oCoTcuUGd4NI0qA%2FNb5NSqVxL5tjmaNPeh58sIDCv66nBBjqkAT4qivP0Yy8WYAh6K7w0yZSvKAY%2BgPn2D2Vcd2trPHmOkzVqBPnfEbiYVqZaIm1imc1QHLqtXzaXWHW7PaDqUhjg6TAxlJo3LklO99ydNc%2BFi%2FjlGLSsGH%2BZtt19xSYFq01qwnggQy2%2FQMLBiAs8BnHmT4cJXqfP%2FvKw%2BCbANmxPlCRwtY4UiseObNg8%2FIndn%2BBwaojGOEjIrA20INBjg0qEwxlz&X-Amz-Signature=ff55b76d7cb347b13a55a9c5530ff2665fc6aa40d8c666de77b2bd9d07546c36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
