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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHQFET%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGF%2BQGTlDuX8QY55%2FhR33mK%2B7sobieOMY4QQGxXrFkNqAiEA03hogGDVc%2Fe2Wqs4R5GMR0Qo1cbmjYb67BaKvkddfXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEGd8Q0uo4MY4ZuzHCrcA%2BP7agC1emi%2Fe9654mxwl8Iui5u8aM5rot5Vwrn%2FJe%2B7%2BPahm12Pgio%2BVDhL2Jxd4l2mYQjZ176hZiX0x7mNRL%2FCBeqd8W465%2F78RKUPT1Qzp%2Bw4mCbr%2FLHe4UJyKGui47mpDFjj2a%2BNqIENDJz6%2BWrAFVjFqbVn%2FAks7a3c2ivm3KueSfLrdL3vqmAjuIZVL1eFT6zirCT%2BjcpOZbtaCqgAwFpQwEgxFI9lPywF%2BYu2lp3X6trJG%2ByCiykh8sY8RtpLTkZaNx0%2FeSXtbndXRslVrNBoWInoA1vJ2XNFmjolhaIaSOLA0pVBQ8iMAvi1hQ0KI29ljOmUuTtinQe2v9ZgsM1wppmibs9aUqlvWQnzeidgQbNYoXQQxYnlMDaJI3716%2Frq8UtDmOXxYlYNEX8%2Fjezyzagd2CfdhOuBzpQXqxc%2BUuEfTIwuw5RygFNKMJTCu2thWJ68aSHERrzBKOY7ZaVOU03mOOJaISFan0usmCBDGVfGOH78jup2tj51TltMetCaoR4mYDpY%2B23QnDetnqK%2B2hC7kDIU3mwIDk70ySqHhV3LV4%2FXmhC7JcdNURt8g%2Fe8EimruGl16NpMFBFklXZF8y0Vlxw4e8k%2BwAZmO0xxi4lsMnmNTIdfMM68674GOqUBjM8yzUQSbgiItGmHoAtX6ZuO7xsO8%2FydNNAlraoMWrGJ34iYaEHaJukowMQYB5cFtpih09gJowtyLQLVUtjKZRKhRXqjm2XCAotEe2p%2BXbM6SBl970D27I%2F%2BQ3s9ZuF6LIt%2Fchc5KA6PsfJf8M7vk3qg%2ByWucQEZ5YHjP%2B5H4Dka%2FHOdSUHw%2B%2BeFJi3wK1iQ38DAIWwjUek5grmc6uBhNNLASLgG&X-Amz-Signature=918219cc78d362079d822c66163a64d1c57aeb80744d4eb6c9115098744975eb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHQFET%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGF%2BQGTlDuX8QY55%2FhR33mK%2B7sobieOMY4QQGxXrFkNqAiEA03hogGDVc%2Fe2Wqs4R5GMR0Qo1cbmjYb67BaKvkddfXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEGd8Q0uo4MY4ZuzHCrcA%2BP7agC1emi%2Fe9654mxwl8Iui5u8aM5rot5Vwrn%2FJe%2B7%2BPahm12Pgio%2BVDhL2Jxd4l2mYQjZ176hZiX0x7mNRL%2FCBeqd8W465%2F78RKUPT1Qzp%2Bw4mCbr%2FLHe4UJyKGui47mpDFjj2a%2BNqIENDJz6%2BWrAFVjFqbVn%2FAks7a3c2ivm3KueSfLrdL3vqmAjuIZVL1eFT6zirCT%2BjcpOZbtaCqgAwFpQwEgxFI9lPywF%2BYu2lp3X6trJG%2ByCiykh8sY8RtpLTkZaNx0%2FeSXtbndXRslVrNBoWInoA1vJ2XNFmjolhaIaSOLA0pVBQ8iMAvi1hQ0KI29ljOmUuTtinQe2v9ZgsM1wppmibs9aUqlvWQnzeidgQbNYoXQQxYnlMDaJI3716%2Frq8UtDmOXxYlYNEX8%2Fjezyzagd2CfdhOuBzpQXqxc%2BUuEfTIwuw5RygFNKMJTCu2thWJ68aSHERrzBKOY7ZaVOU03mOOJaISFan0usmCBDGVfGOH78jup2tj51TltMetCaoR4mYDpY%2B23QnDetnqK%2B2hC7kDIU3mwIDk70ySqHhV3LV4%2FXmhC7JcdNURt8g%2Fe8EimruGl16NpMFBFklXZF8y0Vlxw4e8k%2BwAZmO0xxi4lsMnmNTIdfMM68674GOqUBjM8yzUQSbgiItGmHoAtX6ZuO7xsO8%2FydNNAlraoMWrGJ34iYaEHaJukowMQYB5cFtpih09gJowtyLQLVUtjKZRKhRXqjm2XCAotEe2p%2BXbM6SBl970D27I%2F%2BQ3s9ZuF6LIt%2Fchc5KA6PsfJf8M7vk3qg%2ByWucQEZ5YHjP%2B5H4Dka%2FHOdSUHw%2B%2BeFJi3wK1iQ38DAIWwjUek5grmc6uBhNNLASLgG&X-Amz-Signature=7b07656b39c4e3db03a7f666dee14bc68c74394835404d0d7c77fd78ce72775b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
