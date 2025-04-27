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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664US56OSX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHVhiEq9VBoqsm3M4SJORYncpAzyntQtFccMJmhiYN5gIgSfURc9WfE7NjiiUM6Dw1A52xPT0XfKpFCY0tBRqsu0Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGQPwzUh2ve3u9YGOyrcA%2Baawm%2FD%2BAPcpPbysCGaMp3zhlvK40QVxF5mM31t7%2FYUnCA8p3vr1tOo6uVUM8Iiph2xGeSceXZD7XzRWJKQKwxBbcolx5nlUgPbjWycvCG557Jv8jFxw74c6XKORwdulKOFF%2FmJ2ZKsJ8EJxAx2xj%2BFuNlGdTs%2FnW0MNtscReKPw8w401jC8EQ9dR3oZJWt2yLeGM1qO4Ttt1f6ZiT%2FlrQHfHA37q3VLYGod4sHqPOtliUHnUDJDgqf6XO7n0qErOwQfPvD13axzjoIPxhd1D5opJyfhX4z3M0ZwJUmIzf9rRKLIjpTByiVekrk20daLPUsO%2FPHRs%2BOo4VLyjXCwKtoHesfOe4XliIj3ChvaFWZJ7qO6HQNtTUFaJzqhhWSzK15hTck467%2BdjisX9TlSwz4S0h6n6cGVDE4rh0lt3CEqmn7p6zLaltMBF6xJ4TIjLfmZFEYFJFC4xcADfbGiF3uXNFUPQm%2FqLgtS%2FPobg%2B0uo3jxEOktR75IJh%2FU0bylsW1Jt7BYVhwEvIm61tgmyB1Vhol%2FBeK%2FOMJLf68l4k7aTjOlHsR83H6M58RKmeJbFRUjAQYlBvboell9nGu0FExPjfGCSSdA7VGrtmrh42Bix0i3Y02Wc1b6bA6MK7TtsAGOqUBLg738y1XCGPEFJVO3BJhj7ovR2%2FGyUnLxdBYiT6kwlXebirriAfWOlUPa8%2BUb9%2BrGwT%2BtbGc1b0RNHzowBuJthI0oX3GtyvJNltpzJB%2Fq6vGbz8bkDnOlVGTmCGiCiaVgTlRY4CeGd21lyHf4syytVUgZerZaJ78MzEYYTqmaLxw4xSX4EEorPWX90%2BzaBkh9RAx65xH0h1Yk6K8yHP%2FmMN3rBl%2F&X-Amz-Signature=424a2384df10d00ae17fae4acb43aa35a9b4ccf8a419822591a3305258ecc282&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664US56OSX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHVhiEq9VBoqsm3M4SJORYncpAzyntQtFccMJmhiYN5gIgSfURc9WfE7NjiiUM6Dw1A52xPT0XfKpFCY0tBRqsu0Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGQPwzUh2ve3u9YGOyrcA%2Baawm%2FD%2BAPcpPbysCGaMp3zhlvK40QVxF5mM31t7%2FYUnCA8p3vr1tOo6uVUM8Iiph2xGeSceXZD7XzRWJKQKwxBbcolx5nlUgPbjWycvCG557Jv8jFxw74c6XKORwdulKOFF%2FmJ2ZKsJ8EJxAx2xj%2BFuNlGdTs%2FnW0MNtscReKPw8w401jC8EQ9dR3oZJWt2yLeGM1qO4Ttt1f6ZiT%2FlrQHfHA37q3VLYGod4sHqPOtliUHnUDJDgqf6XO7n0qErOwQfPvD13axzjoIPxhd1D5opJyfhX4z3M0ZwJUmIzf9rRKLIjpTByiVekrk20daLPUsO%2FPHRs%2BOo4VLyjXCwKtoHesfOe4XliIj3ChvaFWZJ7qO6HQNtTUFaJzqhhWSzK15hTck467%2BdjisX9TlSwz4S0h6n6cGVDE4rh0lt3CEqmn7p6zLaltMBF6xJ4TIjLfmZFEYFJFC4xcADfbGiF3uXNFUPQm%2FqLgtS%2FPobg%2B0uo3jxEOktR75IJh%2FU0bylsW1Jt7BYVhwEvIm61tgmyB1Vhol%2FBeK%2FOMJLf68l4k7aTjOlHsR83H6M58RKmeJbFRUjAQYlBvboell9nGu0FExPjfGCSSdA7VGrtmrh42Bix0i3Y02Wc1b6bA6MK7TtsAGOqUBLg738y1XCGPEFJVO3BJhj7ovR2%2FGyUnLxdBYiT6kwlXebirriAfWOlUPa8%2BUb9%2BrGwT%2BtbGc1b0RNHzowBuJthI0oX3GtyvJNltpzJB%2Fq6vGbz8bkDnOlVGTmCGiCiaVgTlRY4CeGd21lyHf4syytVUgZerZaJ78MzEYYTqmaLxw4xSX4EEorPWX90%2BzaBkh9RAx65xH0h1Yk6K8yHP%2FmMN3rBl%2F&X-Amz-Signature=00dc0b8940ef664aa35d5244a20e59f75524187c1907691db6a07ba9c63e884a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
