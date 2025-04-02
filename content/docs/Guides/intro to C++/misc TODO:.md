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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7LEAFL%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFmMD7Q1IqjwWo7l%2B%2Fli1kH%2Fl%2FTTqqV5WAkTp%2B6fVBhMAiA4cTJv65A0O2yNW9jaXoTkrlx3RZH5FkvAt1JBtxjYqCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDhxW4I5ktDETbu13KtwD0A%2F3DHPAMEe9mcnZTcJ08UkUlxnIp5oIDgEPT%2Bjl9kGLs2NJd7RQEQvkLXhjmm31K4EKUg6%2BUr8phm1u1%2Ft4uN5skN5%2BrBvHGIzu2fghX9PVMPuMRKr7OKeFYHo1kAgJC9HKbvLRYcNuSMeSBJMPSB5jUOU7bZtM%2FA4L2ehf%2BtecEX4NDz1gDROaaWd9rF03DuhstbWUwhSdYEZsABlV1Da1wod1s8pHS5oEsH3qt6JHkbIybcSShN8UUsZcS2vIFAzB9c4Zm%2FFJ6hWO8kP6e%2B%2FXKsZGQHCbvIub3i22p%2FMj5hu57rddjfnbV%2BWjTiqwjjGkWZyUR8rw65TRI23Y3uYM2KVqj5ShSkE7SNxUl%2Fm9cu9pGG2aB1cZ5l5qCGniQ5mpiwFSguFBEtbb5CE3ZKhBvVPEwwciMAsTbj5KCYAGCiw6K5DCAOqQSOCEgZW6I729N3NpR38DLXa3frtBDsEmbrh%2F4D%2FMmxUOaCiHzdUSdCBtWWVUEi%2BGCQs2IOeV6rsPY9IXwdPCn1ROF1E2ItwLAfgt8qC%2B%2FR7BQkGOYoodJdy1cWAAHgqrOchAqD9CZNpP5Ds0FzV4YAZ7847LfbO3J9R%2BoKBqBNEZVzkyYC9OmtCFugW9jPlx3jYwm9i2vwY6pgGEmVuTDI24rUIsthZzHisbi62JLAkG5DDoYLv2BJjsJshvgiRBGQgiEPzv9jFs3JpEnR0fCRdT4v8BzgDXqf5zZH2SbOVGPIUIvJ0pVq7o6LdUrraEzD1jFU8agw6Hc%2F0o7HQaF4sGeBjaKgtFdq9uKOiS0rl%2FLGYIAdOKr6apCzbznbPUen%2BhZizT9ySH3KphzRij74%2BGVXd%2FQs4KsoZCsFU0%2FbWC&X-Amz-Signature=0363ed8ffede1697c212e5fe3e35595c2522cb96d5408a3905286f8c2d834232&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7LEAFL%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFmMD7Q1IqjwWo7l%2B%2Fli1kH%2Fl%2FTTqqV5WAkTp%2B6fVBhMAiA4cTJv65A0O2yNW9jaXoTkrlx3RZH5FkvAt1JBtxjYqCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDhxW4I5ktDETbu13KtwD0A%2F3DHPAMEe9mcnZTcJ08UkUlxnIp5oIDgEPT%2Bjl9kGLs2NJd7RQEQvkLXhjmm31K4EKUg6%2BUr8phm1u1%2Ft4uN5skN5%2BrBvHGIzu2fghX9PVMPuMRKr7OKeFYHo1kAgJC9HKbvLRYcNuSMeSBJMPSB5jUOU7bZtM%2FA4L2ehf%2BtecEX4NDz1gDROaaWd9rF03DuhstbWUwhSdYEZsABlV1Da1wod1s8pHS5oEsH3qt6JHkbIybcSShN8UUsZcS2vIFAzB9c4Zm%2FFJ6hWO8kP6e%2B%2FXKsZGQHCbvIub3i22p%2FMj5hu57rddjfnbV%2BWjTiqwjjGkWZyUR8rw65TRI23Y3uYM2KVqj5ShSkE7SNxUl%2Fm9cu9pGG2aB1cZ5l5qCGniQ5mpiwFSguFBEtbb5CE3ZKhBvVPEwwciMAsTbj5KCYAGCiw6K5DCAOqQSOCEgZW6I729N3NpR38DLXa3frtBDsEmbrh%2F4D%2FMmxUOaCiHzdUSdCBtWWVUEi%2BGCQs2IOeV6rsPY9IXwdPCn1ROF1E2ItwLAfgt8qC%2B%2FR7BQkGOYoodJdy1cWAAHgqrOchAqD9CZNpP5Ds0FzV4YAZ7847LfbO3J9R%2BoKBqBNEZVzkyYC9OmtCFugW9jPlx3jYwm9i2vwY6pgGEmVuTDI24rUIsthZzHisbi62JLAkG5DDoYLv2BJjsJshvgiRBGQgiEPzv9jFs3JpEnR0fCRdT4v8BzgDXqf5zZH2SbOVGPIUIvJ0pVq7o6LdUrraEzD1jFU8agw6Hc%2F0o7HQaF4sGeBjaKgtFdq9uKOiS0rl%2FLGYIAdOKr6apCzbznbPUen%2BhZizT9ySH3KphzRij74%2BGVXd%2FQs4KsoZCsFU0%2FbWC&X-Amz-Signature=facfea8c6e6fe950e44667713e61e1fd4c0f742f9bcd04634406122800b3fa82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
