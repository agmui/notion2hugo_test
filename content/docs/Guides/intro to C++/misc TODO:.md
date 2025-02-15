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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNUPA4W%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCihm%2BjpmuyzerW8hgAqV5hyIYJDL0YN5Lio%2Fw7kWmFvgIhAKQrjhFcGNfdAsHdAfbWSvqadIq5rxqNkuvXqkBOEi6kKv8DCD8QABoMNjM3NDIzMTgzODA1IgyPAFrpiiD8VFVyDG0q3APwkq6pdPOFtsk5mLRRCpIeHCNfAfUYM17kTq1wGJQXf%2B%2B0QPqG9Vfo364hhV7OCti3fb8cGgHjRM3TQRuWq0jxTO%2F4mWBCdQQuhR58bFY%2FgRWrs%2BEuJcqe36%2F5dxpbb9XjugOOrEc3%2BTXOyzPTBIQORE1LyLRbscvvM4SlWo836Cmoh%2B7%2FLpUi3gvynWZDZNLHhFVWzsw9jYmU3fgUvh7h%2FYOeRs0%2Bo0KOQEJEewnLAOLYlAplcFQn3TlH3wldjqAmZOdIzziVV4Nr5dHAlu8JVESWHdQrmg5RVQaezf1LCtWSEDxdQ6zL7s4VhOtvMCnkJAmrpSp0gS64abPxkZ4TCVPqNY4%2BKgshAu6u0Gn9xkRG6QIsvKnKcYPj8fEoVbh6KaTlwhPj%2BexNNmN7VW1M4wqc65hyfIGyAPc3h44gC%2BK4T7s1IeYX1JWpb3rHErsL9IcwRqJh6KQ8y8zNzEPYCUIttnMNzfIji1JIAAn9EBnePUyQlG%2BLjWPD7MqnDZ%2B1T4A3kiMEhdYBvDfTdmuhHeEgXBbOMt0tmATR%2Fy6nNwM6eL0ix0mF0bEA5HpngY%2BxqKw6uOP9RIdYP6hKoIZwS1AS4cpLjhVDEuGVTgvsDWWHdb70ylrCZHM9dTDezMC9BjqkAf4wppPuqg0KXIzked%2BI1YOqbQkDNusiSt1bhez2IOztgL5Zk4XuMI0ZKRUZsrsDc8i6OPPznMwvx%2B0X%2BCS8LPWDnMz%2F%2FEXSEL9j%2BpgwWJd7ywCrpT8UaoTOPpX9lCoRvWEFsyEDKfsztB5vYbmvca2m%2BTzKt9MZVAMw7CVlVlfwhyFiUjbCAsxz2sIzeu729os34fFJbe25eun0TxSAYHts06gZ&X-Amz-Signature=0b3c92fcd6a322b7eb3c0662f691e34b5de8839b3fc3ab20dca6e2a20c65f3da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNUPA4W%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCihm%2BjpmuyzerW8hgAqV5hyIYJDL0YN5Lio%2Fw7kWmFvgIhAKQrjhFcGNfdAsHdAfbWSvqadIq5rxqNkuvXqkBOEi6kKv8DCD8QABoMNjM3NDIzMTgzODA1IgyPAFrpiiD8VFVyDG0q3APwkq6pdPOFtsk5mLRRCpIeHCNfAfUYM17kTq1wGJQXf%2B%2B0QPqG9Vfo364hhV7OCti3fb8cGgHjRM3TQRuWq0jxTO%2F4mWBCdQQuhR58bFY%2FgRWrs%2BEuJcqe36%2F5dxpbb9XjugOOrEc3%2BTXOyzPTBIQORE1LyLRbscvvM4SlWo836Cmoh%2B7%2FLpUi3gvynWZDZNLHhFVWzsw9jYmU3fgUvh7h%2FYOeRs0%2Bo0KOQEJEewnLAOLYlAplcFQn3TlH3wldjqAmZOdIzziVV4Nr5dHAlu8JVESWHdQrmg5RVQaezf1LCtWSEDxdQ6zL7s4VhOtvMCnkJAmrpSp0gS64abPxkZ4TCVPqNY4%2BKgshAu6u0Gn9xkRG6QIsvKnKcYPj8fEoVbh6KaTlwhPj%2BexNNmN7VW1M4wqc65hyfIGyAPc3h44gC%2BK4T7s1IeYX1JWpb3rHErsL9IcwRqJh6KQ8y8zNzEPYCUIttnMNzfIji1JIAAn9EBnePUyQlG%2BLjWPD7MqnDZ%2B1T4A3kiMEhdYBvDfTdmuhHeEgXBbOMt0tmATR%2Fy6nNwM6eL0ix0mF0bEA5HpngY%2BxqKw6uOP9RIdYP6hKoIZwS1AS4cpLjhVDEuGVTgvsDWWHdb70ylrCZHM9dTDezMC9BjqkAf4wppPuqg0KXIzked%2BI1YOqbQkDNusiSt1bhez2IOztgL5Zk4XuMI0ZKRUZsrsDc8i6OPPznMwvx%2B0X%2BCS8LPWDnMz%2F%2FEXSEL9j%2BpgwWJd7ywCrpT8UaoTOPpX9lCoRvWEFsyEDKfsztB5vYbmvca2m%2BTzKt9MZVAMw7CVlVlfwhyFiUjbCAsxz2sIzeu729os34fFJbe25eun0TxSAYHts06gZ&X-Amz-Signature=3a38e7cfc78ef7adaa5dc013b352fa6457e482874c44d7af63ff39452c8c635d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
