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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTS7UDP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBNWvBeahE%2B4SD1H3OFaAlEydRmTS9GAbDcfCWBT1KAIganZ0fROVPnSknYcjwQmFjx1641e%2FWRmqOgJO53t5FnsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq9%2BWNeRq7%2FPxPCLSrcA%2Blj1NbfWzyuYBXiTkSeDrHvamDvhiN%2Bn0dxNsJ3cu86%2Fob8fM1czoP%2FPTAV%2FujgVtrw76ruqY%2BYRo63GG1RSwTJ4eWTsDPQS%2BIcha70yVB0RGz0Dm9HKPThTsPv%2F4dZGzp0zSuLRLpN1XTJ%2F4FwEWslCZFlYID4Arfo6ziBD1O3KutOV%2FXKOuHnDFeV7P4E4QcQ64D%2BhEA4Ba5dEBfkHIfNCjaTSaQPKYfRR0tZdHoC0cv2cRCrimcWbUs3cpvP%2B0JjJV2ql8dJ2dA9GF2xTrS8iLw954ZXP6WbjlDSG1w%2B0QkcDvA%2FYbjv%2BXrF70%2FPAdE19wRRs9rJWyvEozalBK081H3vUPPTk%2F%2BTp342%2BsoK4iJV%2BaXA0NGiTtXquuyTy8Ivz6kPoNbIpq2jT%2BRJ2U0ASmXF8WXURzKbqAmR74Nq%2FpqTKPTMNDdPLO3kBwJbYgRrIyde7WVtLASkaot3S3Dbc9FIMbiKCkDDdsi9k1i%2FWzs%2FKmziSfKEbxAW76Z4fYOlz2C1Kf34wxcvBqqsHH4790sZRuTSbiOvbT8Z7GZuzTmD87jAASq98qDWyLSXn36NPBd4OCY8RmW6GO088vj6i2c%2F%2F7Hg5m%2BYhrWQvumRipwvQp%2BrU6GRSWhGMNHR8LwGOqUBk9hdSujfOQd0tDqqZj6H0Xtfrxho0rZ6LfD5CqTmzyChmN3xaga%2BFUwZDhlCQ%2B%2BzfEajoSHbnUYZ5xZA%2BXBuFm%2FkKyCOO7hgYeJ%2BKUePQXgjrVb2%2Fx2Jd7Csw4iaybGoR8GWXChRR96ejrN25aDlMLy2UqxlcTZ%2FdyasJZAUBu1qvjiYfQmG5t42FcHkFoAdywWFyBz4NysBmlSdZFQuuyB1o4of&X-Amz-Signature=32d8d071cedc8582a9a66486d5bd2cfbfd42a5984128d4c1bf937367495f047b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTS7UDP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBNWvBeahE%2B4SD1H3OFaAlEydRmTS9GAbDcfCWBT1KAIganZ0fROVPnSknYcjwQmFjx1641e%2FWRmqOgJO53t5FnsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq9%2BWNeRq7%2FPxPCLSrcA%2Blj1NbfWzyuYBXiTkSeDrHvamDvhiN%2Bn0dxNsJ3cu86%2Fob8fM1czoP%2FPTAV%2FujgVtrw76ruqY%2BYRo63GG1RSwTJ4eWTsDPQS%2BIcha70yVB0RGz0Dm9HKPThTsPv%2F4dZGzp0zSuLRLpN1XTJ%2F4FwEWslCZFlYID4Arfo6ziBD1O3KutOV%2FXKOuHnDFeV7P4E4QcQ64D%2BhEA4Ba5dEBfkHIfNCjaTSaQPKYfRR0tZdHoC0cv2cRCrimcWbUs3cpvP%2B0JjJV2ql8dJ2dA9GF2xTrS8iLw954ZXP6WbjlDSG1w%2B0QkcDvA%2FYbjv%2BXrF70%2FPAdE19wRRs9rJWyvEozalBK081H3vUPPTk%2F%2BTp342%2BsoK4iJV%2BaXA0NGiTtXquuyTy8Ivz6kPoNbIpq2jT%2BRJ2U0ASmXF8WXURzKbqAmR74Nq%2FpqTKPTMNDdPLO3kBwJbYgRrIyde7WVtLASkaot3S3Dbc9FIMbiKCkDDdsi9k1i%2FWzs%2FKmziSfKEbxAW76Z4fYOlz2C1Kf34wxcvBqqsHH4790sZRuTSbiOvbT8Z7GZuzTmD87jAASq98qDWyLSXn36NPBd4OCY8RmW6GO088vj6i2c%2F%2F7Hg5m%2BYhrWQvumRipwvQp%2BrU6GRSWhGMNHR8LwGOqUBk9hdSujfOQd0tDqqZj6H0Xtfrxho0rZ6LfD5CqTmzyChmN3xaga%2BFUwZDhlCQ%2B%2BzfEajoSHbnUYZ5xZA%2BXBuFm%2FkKyCOO7hgYeJ%2BKUePQXgjrVb2%2Fx2Jd7Csw4iaybGoR8GWXChRR96ejrN25aDlMLy2UqxlcTZ%2FdyasJZAUBu1qvjiYfQmG5t42FcHkFoAdywWFyBz4NysBmlSdZFQuuyB1o4of&X-Amz-Signature=3810b3c59a562160158e7ced6b41a3a8d1bd900401f738adfb493fcd5d281f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
