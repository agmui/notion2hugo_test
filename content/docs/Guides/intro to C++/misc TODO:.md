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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCPA4MP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1FiULDnnOqnKz2Hwn3qJagfDN70oWw8hoSNvUnAIRYAiBouUnl2a%2BXACYvc63ZSMTBffbqZL%2Fc4vbPhSHoa2go0CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKGIeIaHdbofCIBdKtwDxt6twQF8KUmZ%2FEhJZPTgTne4F%2BfE3GaUwyJI8Djn9iE0BAQ2ivEc4y9D1aTbC09HIUCAFDjSNmKZffqHM4xFjbiKfLOuH1tgF0A5PVRJQRggLSCKsQ95um%2BT676tMhOGEM8rocRrg7x3epH9D3ZVeweA94KibHzgP3zN0XlrmOPcMFB9B4wxlwwDrBtgy8WQb0Mtn3%2F1z3YsnB%2B6xiIjFqDgeHKvYr4eid6k%2F5fdlHLFqcBSbV0ekz7eFcBeezcOjdU4iCf5SkkFMzZA5op98%2FfYqQkO8qG%2FtfuyRaOqShbXdh0hgvfrfT3%2BTBok5jIZx9xuKlfr94UEOKKB7mxMFQ4UGtA%2BujpIY144lGL1xLQCEiDZ6sLqTSP3ZeB8u%2B2bi0QArsWjuWBG9gj26v4NDEhOjAHR9O2L8OjiIMOJQFY7jmg16mDmw3%2FCz%2Fr0fRmUitfQVtHPRtrZ6dA1SR%2FlOFY7zxC2yq77Pu7wVMA56f4HwQHdstUW7WvJb3IMbghYziQD0k4lJm0l0v25IdvdG8AERQ3PfUOqlJ36LzYX48oQBD37xBYioMrL3yavYNDg%2FrGbdJxVqC7IYiIVLvZ9T%2BD0lwDzc8kJAJOugob6UvS8FbOB%2FPdyJBOAtUUwmqmfvgY6pgFc5ISgC5VcxC3yOuXPIfg95PuPK2D38rjwS5sqiqlWONT5QOq6pje5I4J7oqqfaKcDFe3%2BfOpZeUe2zz7TZkGmg4ogXgMazDEJSDjpEYNYweV7BBgfr99lmKAbhrw7mkvGm6vGAnE0F919kmVRUcYnZYb9NgdeJ0TOHWh9XN%2Fgz1Mojc6JJnZG8J7Uj9KVSnnr4ot8wrfBsiPN9aUfeYJzA87sXoKZ&X-Amz-Signature=99bee0da4c585894bc492e28d16adba84be6ac55696f11195b3733f01de26780&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCPA4MP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1FiULDnnOqnKz2Hwn3qJagfDN70oWw8hoSNvUnAIRYAiBouUnl2a%2BXACYvc63ZSMTBffbqZL%2Fc4vbPhSHoa2go0CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKGIeIaHdbofCIBdKtwDxt6twQF8KUmZ%2FEhJZPTgTne4F%2BfE3GaUwyJI8Djn9iE0BAQ2ivEc4y9D1aTbC09HIUCAFDjSNmKZffqHM4xFjbiKfLOuH1tgF0A5PVRJQRggLSCKsQ95um%2BT676tMhOGEM8rocRrg7x3epH9D3ZVeweA94KibHzgP3zN0XlrmOPcMFB9B4wxlwwDrBtgy8WQb0Mtn3%2F1z3YsnB%2B6xiIjFqDgeHKvYr4eid6k%2F5fdlHLFqcBSbV0ekz7eFcBeezcOjdU4iCf5SkkFMzZA5op98%2FfYqQkO8qG%2FtfuyRaOqShbXdh0hgvfrfT3%2BTBok5jIZx9xuKlfr94UEOKKB7mxMFQ4UGtA%2BujpIY144lGL1xLQCEiDZ6sLqTSP3ZeB8u%2B2bi0QArsWjuWBG9gj26v4NDEhOjAHR9O2L8OjiIMOJQFY7jmg16mDmw3%2FCz%2Fr0fRmUitfQVtHPRtrZ6dA1SR%2FlOFY7zxC2yq77Pu7wVMA56f4HwQHdstUW7WvJb3IMbghYziQD0k4lJm0l0v25IdvdG8AERQ3PfUOqlJ36LzYX48oQBD37xBYioMrL3yavYNDg%2FrGbdJxVqC7IYiIVLvZ9T%2BD0lwDzc8kJAJOugob6UvS8FbOB%2FPdyJBOAtUUwmqmfvgY6pgFc5ISgC5VcxC3yOuXPIfg95PuPK2D38rjwS5sqiqlWONT5QOq6pje5I4J7oqqfaKcDFe3%2BfOpZeUe2zz7TZkGmg4ogXgMazDEJSDjpEYNYweV7BBgfr99lmKAbhrw7mkvGm6vGAnE0F919kmVRUcYnZYb9NgdeJ0TOHWh9XN%2Fgz1Mojc6JJnZG8J7Uj9KVSnnr4ot8wrfBsiPN9aUfeYJzA87sXoKZ&X-Amz-Signature=f965282c4a394c62c85c74d58b6fb0a8ff8bc454e04300abe40e38978f755301&X-Amz-SignedHeaders=host&x-id=GetObject)

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
