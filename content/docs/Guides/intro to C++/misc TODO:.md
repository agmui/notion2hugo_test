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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZY46OE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCyEVzX5m1bH0fpQjUTJsk62xeGcfe8WOOGgZMU4FYdegIgSV%2FZNcWvd2imJD54kG13MCk5c%2BsCgZrbslSdEvRnXc4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOCP29f1%2FrLGnWNsoyrcA8o66zK9I%2BK38k9f3mYsPbiJor36A%2Buj3LLdgc4qw4mCxC8TpJsXRiFfIm3i2Gd9koJvpkgPYfFEge7epsd3bb9C5ksgmx974QcfFcewceasZNyCDrvg2kXFyM5y%2BNKvoHmzRUwiU%2BD%2Fb89vA4yuquhWeAj2wJMXkZB8UjxenPGBgelmnYZymQdSlEPIMfpBW6GyFAgAb7FVHLD%2Bawq%2BmpBEzJm9uw3FU9uPmGbyY11LQbJUJ8a%2F8r%2FwCuAA%2FO5ACCWU14MEPu%2F%2FNjgncvXXEtzQeVrn3XK7ZlLhca2sO0dRiQ0OPYDo1KJ%2F3Kf8BDXY8OM4H4DXW7CP6KNgnQYMZk2kTMEOvYd09rQYYwahOu0zz9OssagU6%2BoTw5mCYfrjZacG04%2FWGffStYLkWBlxw8cA7z12NbMhuZJ0wCO46zOeKSj7L1ZknlfZ5ZIz8vdKuoVZgBRuBKYhgF8n336z9%2FJ1aAh9N%2BpPVpNMr6v%2F5GLtD6cQBbY9BfUgtpN27N6B1EO8tlTpMBn8PrQxe%2FdOZgDnJqkZNH80RobNnCvisuQtU5HWTRo%2BBuOsazcT4SJ4BPToOXhMHgLF8HoAI244aTMm4BdTK%2FdlDohd4gtskB1Yebfh6OpW3oSl63yYMMSxwL0GOqUBClStCUF9Fmxskyb1EJPbboc7uPZS%2Br1uJMO0nWdrOZ3VJBxxo1%2BHJAB6QG7U7XJPlorN8TvGp%2FrtKd7S6hphiU2tsgqgR3duACVt07AVKyyxBJ9wZQ9edvKCF00lIaAoEOKpNdqBlPRpVMnobJY2MsfLAAmVZnvhiP4Y0XNckzpXs6RET%2B6gEJQRPJ4k4wSk%2BCUO0eSmd1PFEQXmjqgBGzvgpcww&X-Amz-Signature=5087025e7c9c2a1b36e763b12a53605e710737d6475f069ee887d7fc66f0aa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZY46OE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCyEVzX5m1bH0fpQjUTJsk62xeGcfe8WOOGgZMU4FYdegIgSV%2FZNcWvd2imJD54kG13MCk5c%2BsCgZrbslSdEvRnXc4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOCP29f1%2FrLGnWNsoyrcA8o66zK9I%2BK38k9f3mYsPbiJor36A%2Buj3LLdgc4qw4mCxC8TpJsXRiFfIm3i2Gd9koJvpkgPYfFEge7epsd3bb9C5ksgmx974QcfFcewceasZNyCDrvg2kXFyM5y%2BNKvoHmzRUwiU%2BD%2Fb89vA4yuquhWeAj2wJMXkZB8UjxenPGBgelmnYZymQdSlEPIMfpBW6GyFAgAb7FVHLD%2Bawq%2BmpBEzJm9uw3FU9uPmGbyY11LQbJUJ8a%2F8r%2FwCuAA%2FO5ACCWU14MEPu%2F%2FNjgncvXXEtzQeVrn3XK7ZlLhca2sO0dRiQ0OPYDo1KJ%2F3Kf8BDXY8OM4H4DXW7CP6KNgnQYMZk2kTMEOvYd09rQYYwahOu0zz9OssagU6%2BoTw5mCYfrjZacG04%2FWGffStYLkWBlxw8cA7z12NbMhuZJ0wCO46zOeKSj7L1ZknlfZ5ZIz8vdKuoVZgBRuBKYhgF8n336z9%2FJ1aAh9N%2BpPVpNMr6v%2F5GLtD6cQBbY9BfUgtpN27N6B1EO8tlTpMBn8PrQxe%2FdOZgDnJqkZNH80RobNnCvisuQtU5HWTRo%2BBuOsazcT4SJ4BPToOXhMHgLF8HoAI244aTMm4BdTK%2FdlDohd4gtskB1Yebfh6OpW3oSl63yYMMSxwL0GOqUBClStCUF9Fmxskyb1EJPbboc7uPZS%2Br1uJMO0nWdrOZ3VJBxxo1%2BHJAB6QG7U7XJPlorN8TvGp%2FrtKd7S6hphiU2tsgqgR3duACVt07AVKyyxBJ9wZQ9edvKCF00lIaAoEOKpNdqBlPRpVMnobJY2MsfLAAmVZnvhiP4Y0XNckzpXs6RET%2B6gEJQRPJ4k4wSk%2BCUO0eSmd1PFEQXmjqgBGzvgpcww&X-Amz-Signature=7f610ade5a1d899195217fdd64003b2bcd39dfc8e613b260904bd9ebe5f8bdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
