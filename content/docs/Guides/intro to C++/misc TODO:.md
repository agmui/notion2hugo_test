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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHFRU5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDK%2B4JR0aE1N6b714gVWAtLU7lXZFr%2Flu5B6fOiLIbCBwIgVtgy%2FYmM0jeaXhQAqoOyr2FUvdfxJnEQQecui5F0oVEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEH%2BnQHJwOwDWUCYTCrcA6Hf8lwA1AtEjA%2B457zjk2c90wK00fVU0rR5ev9SjsxWDaMpKRltYcTXh8AKI%2BKUXM63LoAlp7RmVTgshYrJbZYYGd14AnZzpsmc6I7UEIVNS8p2C4WDsuzLPRTJS5XQ1rlnsDoDxn2d1%2BJw4%2BZUGBzSuXxq1aWXxCrj2L7fHIrv20rFXpgE3ERUIQ1%2FLIHvwxpVfvrzdPRPaTU6uHSgUEDiMMVEv2TK%2F79cVnf1yYUl6Z42bXmPk7UL7x%2FTAR1ed8vSyEb1lWkEHyJ6fVxHduxMNhuIduNzOD0PfEkUe4GDGjWgqWS9VGb0fmdr%2FZY36iPtsL3viCO66xk5mvFWnPbIYoo0ewZoWQYjwxl2YLEV1F408O8yqe2Kvc40eiNvb%2FWzkyZ03vI79TcildibRI%2B3mn0EvNXCycxmSiORjr3L2AKE6lbTKvkX5N0WKbJUzn7xxgnqPDd1Z5WG4Re4pfw4enjEERuSlAsl%2FQ8mPfZE%2Fyj6L%2BLgJk3FBvguosHa5D8x66l5qygJ1xhpKAaqSvNYcSUgNsFADSFKYBre5t576yXM%2F3ngjLSBBuJijPaTJJWBtv6pF%2FBCbmQbZL5oK1EYbP%2BxfUFpD%2F0xvM9Ucw7DJxRFcMUSnMP9DwCDMKzHmL0GOqUBwJN0k2lwXF0yqDKQ9qCZH9lXC2D7SLdPmX0vz9lhM2ULOuOZlk1pqBINZ0RGCsArT%2F22F%2F4awIjSkcOTxgZxKh5NIySa4Uvr%2BAh0ptEQFIEblbNiW6CEUbdNcpoQm7fMPLJxTLUEJg6lcpS33plYL5Qyq%2FYchLJFzCIkA0wD%2FUr%2FMsPI1KWbsAHSxZLbFDztf99h8QBg3d%2B3fALvjhoQjCN3z%2FmJ&X-Amz-Signature=8214fe58a7653d68e95a81fd023d922361d3ab79d4eae79420a7a0bf55655216&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHFRU5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDK%2B4JR0aE1N6b714gVWAtLU7lXZFr%2Flu5B6fOiLIbCBwIgVtgy%2FYmM0jeaXhQAqoOyr2FUvdfxJnEQQecui5F0oVEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEH%2BnQHJwOwDWUCYTCrcA6Hf8lwA1AtEjA%2B457zjk2c90wK00fVU0rR5ev9SjsxWDaMpKRltYcTXh8AKI%2BKUXM63LoAlp7RmVTgshYrJbZYYGd14AnZzpsmc6I7UEIVNS8p2C4WDsuzLPRTJS5XQ1rlnsDoDxn2d1%2BJw4%2BZUGBzSuXxq1aWXxCrj2L7fHIrv20rFXpgE3ERUIQ1%2FLIHvwxpVfvrzdPRPaTU6uHSgUEDiMMVEv2TK%2F79cVnf1yYUl6Z42bXmPk7UL7x%2FTAR1ed8vSyEb1lWkEHyJ6fVxHduxMNhuIduNzOD0PfEkUe4GDGjWgqWS9VGb0fmdr%2FZY36iPtsL3viCO66xk5mvFWnPbIYoo0ewZoWQYjwxl2YLEV1F408O8yqe2Kvc40eiNvb%2FWzkyZ03vI79TcildibRI%2B3mn0EvNXCycxmSiORjr3L2AKE6lbTKvkX5N0WKbJUzn7xxgnqPDd1Z5WG4Re4pfw4enjEERuSlAsl%2FQ8mPfZE%2Fyj6L%2BLgJk3FBvguosHa5D8x66l5qygJ1xhpKAaqSvNYcSUgNsFADSFKYBre5t576yXM%2F3ngjLSBBuJijPaTJJWBtv6pF%2FBCbmQbZL5oK1EYbP%2BxfUFpD%2F0xvM9Ucw7DJxRFcMUSnMP9DwCDMKzHmL0GOqUBwJN0k2lwXF0yqDKQ9qCZH9lXC2D7SLdPmX0vz9lhM2ULOuOZlk1pqBINZ0RGCsArT%2F22F%2F4awIjSkcOTxgZxKh5NIySa4Uvr%2BAh0ptEQFIEblbNiW6CEUbdNcpoQm7fMPLJxTLUEJg6lcpS33plYL5Qyq%2FYchLJFzCIkA0wD%2FUr%2FMsPI1KWbsAHSxZLbFDztf99h8QBg3d%2B3fALvjhoQjCN3z%2FmJ&X-Amz-Signature=b2f87d96c8802a2ad93434ccbd520a807f58fe2fb4a2f626f6a3ae45b8ccf686&X-Amz-SignedHeaders=host&x-id=GetObject)

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
