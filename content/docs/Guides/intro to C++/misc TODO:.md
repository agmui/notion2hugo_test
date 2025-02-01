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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLSK2KYZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM2yrKg%2FjMpyvVkbkLW8C3JCvUAG4WACy8wGe%2BT0ni6AiAI%2BiS8gk3EQ98mumuUpwgGj4NSJOGPArKUbIi6q4TKqSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvz%2BeXDwleoUHf%2FSTKtwDr7skJ82YvByw0BbdhrUESpQ%2FJbUNE%2FqDtowZPjWQHN%2FBdT476WTYrehfN7lwx8USgywAFI8F34PGPa5BkoxWSsQdkHRpUBQ0ZmDtcl919yDth0tp7MaPMxt3dyqgKIM5K1hnmd7C8BQO2lPFWYnxwVU1ctXWj7v5MduxNodbFy7aR4il7u6OU2VLLCSX1xHeVYdrn%2BtFKA1WUNAOqOIhIHSa1SZQyXIXzSbjrfKqgc1yz9IX88Xe61LuTvZingTfC2Mb0Mzy4REytpgkntRWAc5gP38J6KX9YrXHaTZPh51g1CxML0pVQg%2F2cIUnB%2FlnXTC4EUXCFB7JQNckTtiLhW%2FrljYyj%2BjW3s8YDWe1IFmxq28RFptw8LGLMhoVH0LGLDIZyRP%2BGiROhgSCPsPPQij5th7TlfOqJLlqRHpN17jwLAtvJQatN7YZVYh6R4iChZtCm23OuG%2BpsrglDHtLt0U588hKp9ufQXJ5MA1kv%2BvEV2OCtWonziVm0JsK0i2NyIomY%2BvZp7aRK3LDZ1kD4QXoS34OFMSiXsgtTKn2bJNFxpM52F0r0wtBDXfXV8TVU5SGdDu7v%2F8BxiuNqIQXI1EbuqXjLtty4BPaoHbXNNEplRyNoLiyIF3KgaEwnqb3vAY6pgFRM0lA1tJrCtI2L3Lujgm%2BjGV31cZ%2B4RHg6asnbtPMwMX0CznmsunNrgtoNr3fP2upOPQVQDoGbEMsc8E6IASbODU%2F9Sr3TNSA3EyNwcRgIAhRbUOeI87UyvQZcDi9rMBxNkHoxPj%2FnWyxcSS33lZ%2FvDmbLJVnW9glsl5vO653vmG0x7Lr6cVXY2ECRy5LMHxZdwoN%2BfjWUrCKk%2BK31tPfuQUMW2QR&X-Amz-Signature=086a5f76f9076d0e237af21adff538e0d566ce090e2ca1115938919aae993d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLSK2KYZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM2yrKg%2FjMpyvVkbkLW8C3JCvUAG4WACy8wGe%2BT0ni6AiAI%2BiS8gk3EQ98mumuUpwgGj4NSJOGPArKUbIi6q4TKqSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvz%2BeXDwleoUHf%2FSTKtwDr7skJ82YvByw0BbdhrUESpQ%2FJbUNE%2FqDtowZPjWQHN%2FBdT476WTYrehfN7lwx8USgywAFI8F34PGPa5BkoxWSsQdkHRpUBQ0ZmDtcl919yDth0tp7MaPMxt3dyqgKIM5K1hnmd7C8BQO2lPFWYnxwVU1ctXWj7v5MduxNodbFy7aR4il7u6OU2VLLCSX1xHeVYdrn%2BtFKA1WUNAOqOIhIHSa1SZQyXIXzSbjrfKqgc1yz9IX88Xe61LuTvZingTfC2Mb0Mzy4REytpgkntRWAc5gP38J6KX9YrXHaTZPh51g1CxML0pVQg%2F2cIUnB%2FlnXTC4EUXCFB7JQNckTtiLhW%2FrljYyj%2BjW3s8YDWe1IFmxq28RFptw8LGLMhoVH0LGLDIZyRP%2BGiROhgSCPsPPQij5th7TlfOqJLlqRHpN17jwLAtvJQatN7YZVYh6R4iChZtCm23OuG%2BpsrglDHtLt0U588hKp9ufQXJ5MA1kv%2BvEV2OCtWonziVm0JsK0i2NyIomY%2BvZp7aRK3LDZ1kD4QXoS34OFMSiXsgtTKn2bJNFxpM52F0r0wtBDXfXV8TVU5SGdDu7v%2F8BxiuNqIQXI1EbuqXjLtty4BPaoHbXNNEplRyNoLiyIF3KgaEwnqb3vAY6pgFRM0lA1tJrCtI2L3Lujgm%2BjGV31cZ%2B4RHg6asnbtPMwMX0CznmsunNrgtoNr3fP2upOPQVQDoGbEMsc8E6IASbODU%2F9Sr3TNSA3EyNwcRgIAhRbUOeI87UyvQZcDi9rMBxNkHoxPj%2FnWyxcSS33lZ%2FvDmbLJVnW9glsl5vO653vmG0x7Lr6cVXY2ECRy5LMHxZdwoN%2BfjWUrCKk%2BK31tPfuQUMW2QR&X-Amz-Signature=ff6cd34245aee13c34b04d79c64427ce6874908aa024ce96a8c8e418f03bc77a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
