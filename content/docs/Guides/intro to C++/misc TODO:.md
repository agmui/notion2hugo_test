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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTO6QNE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDJoVPzrvEfyi9VO28Ol%2BCkh6ZiNp5AhS9XB4jKGZV6dAiAj3ZmeMo3JxSo1zgn%2Fb8lAasz%2FVEzQIFK7VP0ii17azSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RqhTAf6Be1l%2FgYSKtwDCt0NEhN%2B%2BUyxKHOz81JQDwnPLwf3LwpXdUjEDk1kHiSjWdsqdFnxbZ%2FZIektEuquZHIj65MgUs7O3ckZ2Igp4d%2FrnljE4P6Bt3pU%2B%2Ba8xoF3O8G0iZUBv7x6mgwOuCSYJSiNgTkoztRT7jOy4QJ3f9uVW3hMRDTPVg7f4pVBskVUQwRHlQ%2FLVEoLYNWd3OeDU4Hi5lRs1cdmkhGo%2F0VGuFvZbdiGR3LVT1vXNnmDhCeRmiGK7aujvQYakU3zbt5QHN%2BoQQFO5tERe82BupoDolH519hveJL8sT5YlNJBw4bjn7tU64rAAZ9RWDl6J3pgXqto%2F24z3TFQZx4cf%2BLBNeCmEcO2dOtR8vZlFivrTOKrp8m4FI3NRdCZ52byzMw5QVCLcD4AW7MPM8ZJxMGpeUzbAm6q3Zzku6NghFVSfyHOir2tBylh5tbZDJZSAMNx7hK1GG%2FPkcuFHzd7thI1VugjdIAeHLw8L1r0JZzFHNy%2BMocSalG%2B2MszTSdwlQrlGMmyrgmetLxH%2FMKupML0B9BoR8sB4QHrQSfKdkw63hhtF4lNz0UkmsYUooR7fjClLPFSvpvWknGECDuAMOAPEv6cpErilwcFGIqEirAbJStYvwW52GhcJ0YV4RUwq52vvwY6pgGp8xi2C6My7irc6LvL2KUEbPH%2F60WHnBBKYsoC5JrO%2FgoTM4m4xG%2Fgtd2fpK3VbLV9TfdBFTxzEtcmdk83yk5N0xgXw78U3sE63xox%2FAgjmAxW7F%2B0HtGefxPUEhvPCarF6eJK%2BNw65xP%2FPOIzRbsVIQGsBEKb1XoPjLWkL47rYW0XjvQQ8Cc6qdvjxihJ8jp27fDgi69jDspLj8mia6I9a8%2FRIO9i&X-Amz-Signature=ab488d4ee9cd3410e635ccbe5b85dcba6f2f32e61fb19afffb3b3b027bcc78bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTO6QNE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDJoVPzrvEfyi9VO28Ol%2BCkh6ZiNp5AhS9XB4jKGZV6dAiAj3ZmeMo3JxSo1zgn%2Fb8lAasz%2FVEzQIFK7VP0ii17azSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RqhTAf6Be1l%2FgYSKtwDCt0NEhN%2B%2BUyxKHOz81JQDwnPLwf3LwpXdUjEDk1kHiSjWdsqdFnxbZ%2FZIektEuquZHIj65MgUs7O3ckZ2Igp4d%2FrnljE4P6Bt3pU%2B%2Ba8xoF3O8G0iZUBv7x6mgwOuCSYJSiNgTkoztRT7jOy4QJ3f9uVW3hMRDTPVg7f4pVBskVUQwRHlQ%2FLVEoLYNWd3OeDU4Hi5lRs1cdmkhGo%2F0VGuFvZbdiGR3LVT1vXNnmDhCeRmiGK7aujvQYakU3zbt5QHN%2BoQQFO5tERe82BupoDolH519hveJL8sT5YlNJBw4bjn7tU64rAAZ9RWDl6J3pgXqto%2F24z3TFQZx4cf%2BLBNeCmEcO2dOtR8vZlFivrTOKrp8m4FI3NRdCZ52byzMw5QVCLcD4AW7MPM8ZJxMGpeUzbAm6q3Zzku6NghFVSfyHOir2tBylh5tbZDJZSAMNx7hK1GG%2FPkcuFHzd7thI1VugjdIAeHLw8L1r0JZzFHNy%2BMocSalG%2B2MszTSdwlQrlGMmyrgmetLxH%2FMKupML0B9BoR8sB4QHrQSfKdkw63hhtF4lNz0UkmsYUooR7fjClLPFSvpvWknGECDuAMOAPEv6cpErilwcFGIqEirAbJStYvwW52GhcJ0YV4RUwq52vvwY6pgGp8xi2C6My7irc6LvL2KUEbPH%2F60WHnBBKYsoC5JrO%2FgoTM4m4xG%2Fgtd2fpK3VbLV9TfdBFTxzEtcmdk83yk5N0xgXw78U3sE63xox%2FAgjmAxW7F%2B0HtGefxPUEhvPCarF6eJK%2BNw65xP%2FPOIzRbsVIQGsBEKb1XoPjLWkL47rYW0XjvQQ8Cc6qdvjxihJ8jp27fDgi69jDspLj8mia6I9a8%2FRIO9i&X-Amz-Signature=be2ea05ce33586738d81f8860beb798fcbba97dbdc9437da469b468964bf81d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
