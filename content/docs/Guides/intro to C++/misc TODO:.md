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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUQ4HBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrhryWfJZQ0xkm5vX%2FwMfYmbpKi8mA%2BJ6yiSnMie0CVAiALucn5KLJoUG6nia3QwlMOEyWiQ3ryObJt0xKW6FCsxyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiynbH1ICnpxS2l%2BOKtwDQmGAmliVb%2FMb%2BJLxcnVBn3Nn6A4O5M1CpkW%2B%2BBPyis2xzh5SkvoOr0JAi56Rfn20rnUcZMIaAUGQ9PyA88MtxHfImRVnU3qyX%2BjdSTuQ0gwN%2Fde33hwtCj0q32ijx6YNKa1cVX6SfNYr6IA7IGXYCN9T0jvDGTOfVyp428hh5oThoiFtQ8EuG3ovuYosLB1aYzP8%2BdG02F5jqdqf5%2FgRzREU0jT2%2BQ5q36txqz1qYztRVYUAKA2jOMsOvk6S41ODLT5mhpMYoN4Gb1kbadJMm3uoNrSB5tJEFA%2B1MRJJoPOPm3VTXByhmes5i86uIMHDgFxWdr8GJiyUXIkqAYYSUavyZNJazMolgT8Cz9MS%2Be1s5JxMlS2ujfVbAOy3t3p7vM6ut2Xd0d3%2FS%2Fgia7yNEym9bD6D%2FrOYIJV7OoM7auZwbBf8ji9nvcMFu8DkFVzwem6DPU8s%2BCOV2IwSXNwH1sjMlXGmtAxfFX0gwu5FG4T9UEoKNMYabWREeCzwnipR%2BzT7qQrYao81WgHaLZ4NKr4Wb60eT5QxSu8pecWvsAPJTKsKg4bO6m9yvgTxLz%2BKFCcAAtHa%2FRCKbg%2BltbMD0wtALWTaN1Pqo5aTEmio0DqMQOiW2xvCZpfFBfgwo7LjwQY6pgHKTPVViBgza6ZvsknDz5XaerIR3q6D4bd3fOUHmXy5COs9bWyE6vs1O2kyHNSIXZ1wzPfCd6d90xShRlBxulXcV94hTXV3A7YvNn0zhxdmB1PF%2BmZYXjB7T%2Bo29S%2FysFTaautC63%2Bltgj19MjTA55QjK4Lk1e3gfMHqkRWkSMF4iKkkDQKteZlq9JtB3pnCU5ip54zEFTgTkqvHGQidkZjSx1uTvwN&X-Amz-Signature=d72de8e4f2f5ac32155690e4ad8b29a3c078a5918eaf2c7e2102c0a7c2db2a06&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUQ4HBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrhryWfJZQ0xkm5vX%2FwMfYmbpKi8mA%2BJ6yiSnMie0CVAiALucn5KLJoUG6nia3QwlMOEyWiQ3ryObJt0xKW6FCsxyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiynbH1ICnpxS2l%2BOKtwDQmGAmliVb%2FMb%2BJLxcnVBn3Nn6A4O5M1CpkW%2B%2BBPyis2xzh5SkvoOr0JAi56Rfn20rnUcZMIaAUGQ9PyA88MtxHfImRVnU3qyX%2BjdSTuQ0gwN%2Fde33hwtCj0q32ijx6YNKa1cVX6SfNYr6IA7IGXYCN9T0jvDGTOfVyp428hh5oThoiFtQ8EuG3ovuYosLB1aYzP8%2BdG02F5jqdqf5%2FgRzREU0jT2%2BQ5q36txqz1qYztRVYUAKA2jOMsOvk6S41ODLT5mhpMYoN4Gb1kbadJMm3uoNrSB5tJEFA%2B1MRJJoPOPm3VTXByhmes5i86uIMHDgFxWdr8GJiyUXIkqAYYSUavyZNJazMolgT8Cz9MS%2Be1s5JxMlS2ujfVbAOy3t3p7vM6ut2Xd0d3%2FS%2Fgia7yNEym9bD6D%2FrOYIJV7OoM7auZwbBf8ji9nvcMFu8DkFVzwem6DPU8s%2BCOV2IwSXNwH1sjMlXGmtAxfFX0gwu5FG4T9UEoKNMYabWREeCzwnipR%2BzT7qQrYao81WgHaLZ4NKr4Wb60eT5QxSu8pecWvsAPJTKsKg4bO6m9yvgTxLz%2BKFCcAAtHa%2FRCKbg%2BltbMD0wtALWTaN1Pqo5aTEmio0DqMQOiW2xvCZpfFBfgwo7LjwQY6pgHKTPVViBgza6ZvsknDz5XaerIR3q6D4bd3fOUHmXy5COs9bWyE6vs1O2kyHNSIXZ1wzPfCd6d90xShRlBxulXcV94hTXV3A7YvNn0zhxdmB1PF%2BmZYXjB7T%2Bo29S%2FysFTaautC63%2Bltgj19MjTA55QjK4Lk1e3gfMHqkRWkSMF4iKkkDQKteZlq9JtB3pnCU5ip54zEFTgTkqvHGQidkZjSx1uTvwN&X-Amz-Signature=26a29cb17d764b3243a36e446aab3a19a0b6f5fc15843a25a6af88d4d85bdf39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
