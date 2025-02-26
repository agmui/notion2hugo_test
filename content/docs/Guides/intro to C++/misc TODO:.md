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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3XGCVU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCmFyh3J0dYFDFXbxE8HRmkcj235unAQKcvx6zIpBowXQIhAK5c%2FoDlogfrGG%2BOdAdgiZNhblqvVAmTELWKbZbXHT5xKv8DCGgQABoMNjM3NDIzMTgzODA1IgyO%2B1gyyQwLF9ccTYIq3AM40N79Sg2JosqMD3wOBEkOE3X8xis%2Bym9uAsTREnfRJmw4sI6VJT5V2dnc66ESA%2FS8WaAaFhJ9z72s7n0kKj6lUTyiJiGfOESfMQ2vCo%2BnLqk2YtnssaOdd5%2FEVov229fYWtmyYy7T9j9WaBCtsFrzAf%2BJ6BkAG9HWHCs0O8fONb1MGGligQOBcX0ldK83oYVuUHsECLBqCS%2FDZ%2Bu559Nn4CfJVSuc2mYg58dBCfnZobofcOZqFMlsr%2FDWxg0hhx9oYa%2FnEnckc1J7E6VdrdufsDXFpHjVR%2BG%2BYXruADd3MwNxckzcYWPshQ6bFkC5w84A7xvZ9B0pRBKxIZANxPa50ZpJ3zkVIDluQqtFkn2FJjw6Q4ss6GVG3NzJKS5R2Yqj151SJt5KSvFlU4Mj7wc5l7R1BkD3RpDaDDE%2FiDCIfawC%2FkKSz1P6ZTtDV5efyA8cqRY6QpNm8C9w6ouPHjtRwYqP2nW3gjGUX9woEIeAFevY6UrzSHDpqIes65wIXbU6VKWmzE2eM5LATL5uIscp%2FWhV3qEs%2F4xd%2FYpjgD9yObTeGYV03DiIfSemiGupjEdGa8ycvgh08biCyRxCHb6Vn6n%2Fy56Lt%2BA37io3XjY1cGQcdRT%2FvtMQ9ROWsDC6u%2F69BjqkAbUy1dR%2FwshYnsZjzCNnWpjRJjdHgHQatIIcA0sXA8dqgm1dUEngueXEMlbAWmXoaoIZSk6dgzvm7QiewIGQldZ2TWNxvDmsJvyCpGBDHO9xHYIvjDunr9Yh5hPkX8jlQnuAy6Kp5Rye%2F6vFclaYvetJlTZabUmFw0uWaIpRX0dqXLDiWBRL%2BG3ZJyKbSNRLAvfH9ih40GZKDDhi0eDWWwuZVL8e&X-Amz-Signature=d6c7570bfc04b89291d669a2a4c50e91754e4e25735a05a14ad4e14aa18c1684&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3XGCVU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCmFyh3J0dYFDFXbxE8HRmkcj235unAQKcvx6zIpBowXQIhAK5c%2FoDlogfrGG%2BOdAdgiZNhblqvVAmTELWKbZbXHT5xKv8DCGgQABoMNjM3NDIzMTgzODA1IgyO%2B1gyyQwLF9ccTYIq3AM40N79Sg2JosqMD3wOBEkOE3X8xis%2Bym9uAsTREnfRJmw4sI6VJT5V2dnc66ESA%2FS8WaAaFhJ9z72s7n0kKj6lUTyiJiGfOESfMQ2vCo%2BnLqk2YtnssaOdd5%2FEVov229fYWtmyYy7T9j9WaBCtsFrzAf%2BJ6BkAG9HWHCs0O8fONb1MGGligQOBcX0ldK83oYVuUHsECLBqCS%2FDZ%2Bu559Nn4CfJVSuc2mYg58dBCfnZobofcOZqFMlsr%2FDWxg0hhx9oYa%2FnEnckc1J7E6VdrdufsDXFpHjVR%2BG%2BYXruADd3MwNxckzcYWPshQ6bFkC5w84A7xvZ9B0pRBKxIZANxPa50ZpJ3zkVIDluQqtFkn2FJjw6Q4ss6GVG3NzJKS5R2Yqj151SJt5KSvFlU4Mj7wc5l7R1BkD3RpDaDDE%2FiDCIfawC%2FkKSz1P6ZTtDV5efyA8cqRY6QpNm8C9w6ouPHjtRwYqP2nW3gjGUX9woEIeAFevY6UrzSHDpqIes65wIXbU6VKWmzE2eM5LATL5uIscp%2FWhV3qEs%2F4xd%2FYpjgD9yObTeGYV03DiIfSemiGupjEdGa8ycvgh08biCyRxCHb6Vn6n%2Fy56Lt%2BA37io3XjY1cGQcdRT%2FvtMQ9ROWsDC6u%2F69BjqkAbUy1dR%2FwshYnsZjzCNnWpjRJjdHgHQatIIcA0sXA8dqgm1dUEngueXEMlbAWmXoaoIZSk6dgzvm7QiewIGQldZ2TWNxvDmsJvyCpGBDHO9xHYIvjDunr9Yh5hPkX8jlQnuAy6Kp5Rye%2F6vFclaYvetJlTZabUmFw0uWaIpRX0dqXLDiWBRL%2BG3ZJyKbSNRLAvfH9ih40GZKDDhi0eDWWwuZVL8e&X-Amz-Signature=1d02c550ebc8919013eab84a093a255d45d77d4722fb60790f2a0cb990edafd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
