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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UY6TYY5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAyPGwQTV%2FKT%2BJc%2BNXfhsC8CVScjwBk3CObJW0gKw8AIhAL9DIsfbXqS4Z5U40ZDUO7hKEFna1jSIhPYYn1aC%2F9geKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4wCqgZRZzY27R8Kcq3APBjG6hQ6ObdrQUVxrM8BLPbI1gJsJ2H82Xk9MX%2BAyqyC8MR9uNCM1dFhPVndWUexX8bR5uuwHNB%2FR1kyK%2BBLqdBnzlmtFaP7fr0y7Msr%2Bqe5%2FMV0dOHeReefzF71bDQnf7cgav%2BX8XwQ0sDuhGpvuLBRKKNuCfAn7lXUajPRE3DoadGkT4yE1QlRiitbU%2BEaoVi8ZHBr374uS2F24Ggc3Q2DGeS5V9bEhJJJJ31O8lBCKrZg94cYz9A59U3BjLQuokAhK%2FNiQDVfrL%2F95kwe7F43i6dlIe90IpZx8M07mPjH96dprhjkHbfzgkF%2FYq%2FcJ8MRHByvAWg2ubvjAM9y5uA7rmSZpA5oqVqn65PYT0Hx8Pva%2FLLAyCvTP%2FiHJ5fFp%2FweUu8zoN4XYsU9m%2B%2Bfa%2BB7svm5E7beHBTeRWSuM0E1BKjWjNY3IKjEiXPa956QuuA1ZjECBcps3ApZGTxCSag3hMrbLjw59gXdeuVpe7qkXBou9uQDu%2Bn02bUZGtbwVQxwYad57sFb4n7bF%2FLuS6RourYEz0ZyAnqJk4V5uyeD8994vHCBRk3Xk212fbSYBMhAfCHlkb36tQ9sl5ojwHPbg2z6Z4%2BnmqVVc6FIA9yLheeD9XOtt%2BluEu1zDMweC9BjqkAb7xVAG7WOp2z3uS29eP0RsLBbmtybsRDI7zqC4ClpN9XYscZ2gliyb4YCIQ4j3A90D9sL7sR7I2fOCwRdxCmkuXre84RDLZp84EHcBgiunigVZI4XlJGPsq1J%2BSnLOSkwB46XVYOdN9ifvwj%2FsfDmjxLSx8uXBRUX2U1JcG5xeNaLQstaqgGO%2BkufOyL6iLfmwaNFP7dRvV0zwbeWbsqazPuy49&X-Amz-Signature=0169cd710e002055f29b2d40d5b71515b3bec44cec09e51df558c6a1fe54b1de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UY6TYY5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAyPGwQTV%2FKT%2BJc%2BNXfhsC8CVScjwBk3CObJW0gKw8AIhAL9DIsfbXqS4Z5U40ZDUO7hKEFna1jSIhPYYn1aC%2F9geKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4wCqgZRZzY27R8Kcq3APBjG6hQ6ObdrQUVxrM8BLPbI1gJsJ2H82Xk9MX%2BAyqyC8MR9uNCM1dFhPVndWUexX8bR5uuwHNB%2FR1kyK%2BBLqdBnzlmtFaP7fr0y7Msr%2Bqe5%2FMV0dOHeReefzF71bDQnf7cgav%2BX8XwQ0sDuhGpvuLBRKKNuCfAn7lXUajPRE3DoadGkT4yE1QlRiitbU%2BEaoVi8ZHBr374uS2F24Ggc3Q2DGeS5V9bEhJJJJ31O8lBCKrZg94cYz9A59U3BjLQuokAhK%2FNiQDVfrL%2F95kwe7F43i6dlIe90IpZx8M07mPjH96dprhjkHbfzgkF%2FYq%2FcJ8MRHByvAWg2ubvjAM9y5uA7rmSZpA5oqVqn65PYT0Hx8Pva%2FLLAyCvTP%2FiHJ5fFp%2FweUu8zoN4XYsU9m%2B%2Bfa%2BB7svm5E7beHBTeRWSuM0E1BKjWjNY3IKjEiXPa956QuuA1ZjECBcps3ApZGTxCSag3hMrbLjw59gXdeuVpe7qkXBou9uQDu%2Bn02bUZGtbwVQxwYad57sFb4n7bF%2FLuS6RourYEz0ZyAnqJk4V5uyeD8994vHCBRk3Xk212fbSYBMhAfCHlkb36tQ9sl5ojwHPbg2z6Z4%2BnmqVVc6FIA9yLheeD9XOtt%2BluEu1zDMweC9BjqkAb7xVAG7WOp2z3uS29eP0RsLBbmtybsRDI7zqC4ClpN9XYscZ2gliyb4YCIQ4j3A90D9sL7sR7I2fOCwRdxCmkuXre84RDLZp84EHcBgiunigVZI4XlJGPsq1J%2BSnLOSkwB46XVYOdN9ifvwj%2FsfDmjxLSx8uXBRUX2U1JcG5xeNaLQstaqgGO%2BkufOyL6iLfmwaNFP7dRvV0zwbeWbsqazPuy49&X-Amz-Signature=8c80987ed8b9e2b8c69dc5919b065780a4ed28153421104075b0df4dc96c6f95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
