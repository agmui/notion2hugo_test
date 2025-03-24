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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJOJU33%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtU0n6OgJUsZnAJcykS9oo5Y6qAj4pBFMvYy%2FDWqY4AiEAjbbYnUfo1bfaBMo7KT0MFE%2Fmzc%2FQqd%2FaCYVAToRPvb4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLliuH%2B8ETc%2BqUCfaCrcA7jLK51x9E135JhURAm2vT1isPg05CsR46ZLLE7Fqr8iY8%2BmTeoyPLsL8Lhe4iol2naDPIoNR9qy8l%2BBojSWQO8uR4z4scOKWCqdXP%2FvTqpA4Nv6muSvYZn2jmwYMBryH1e2jiU%2FaPRIfyQK%2Bqfk%2F4%2Fl5IzZG7TCKxeYxyhUyShpvbCyt3b4%2BVzxW0toKpd0XRw7Vg4h%2F%2FUt4u%2BbMPHAzWqs%2BwwzVAeBuJ%2BDILDsTqKh8twZoMNyQCgFyKU1maiC1C3LCs%2BCjZR3qPRgeJr%2BVtGQIpEZuL8%2Fi4ESHvoooEmuHLypWKUb3ZRzzZGmOddGLvGCGtY7c11DxtIwtlLLy%2FO3uGXYt0%2BTkDU59YvrUWMaAvSYIcBr2Is6GoQYCSjwcMR4xheMGLm%2BwwGWroQMIb4ZNyduwmCElkddVIG7LjRUaaqhXnqew21XwDy6im1WIQBWZaf5%2Fxv7mdFUsbhZ%2F3lv%2FLGd8pHo%2FNoABBVN9YmKOHuYuyL70gr2Q8WJg%2F9exZTL5urFe3AAuMRktkEmU%2Fhdi5PsRqSdBXQ8cmG9CneS8%2FR3%2BH7oYPjefWsqCF2pUdkMwR3%2FAbZEmfjQrYlMtC6YfiYIwc%2BzTmfqz4Z%2BOobc1qPoQwE%2FJIWOzsO5MLPEhL8GOqUB1Pe4UzOVe0Ada%2BXvGcZDNK45H8EMIO%2BY%2BsJWlX2gxuFTxjfiWZS7J6W6VchOwQTRclJQvBVrydAxAgc23Plf3x9S%2BYBSxk2WeRdZ7iI2gJSNo8M5Y2iWme4mZDswzZTtBXuYoiMcTmXKaGKdasqnKFdptluyEe4ZzQ0A2qBDp4OJJoBw0RfTtfJZCKiPQtm2cPI25GeBTWUzzK2JclFkU4yM4%2BFG&X-Amz-Signature=fbd91641d09ffde987de3c0e990fb6bfc9b6cd88e871243daafb4cf4fed49656&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJOJU33%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtU0n6OgJUsZnAJcykS9oo5Y6qAj4pBFMvYy%2FDWqY4AiEAjbbYnUfo1bfaBMo7KT0MFE%2Fmzc%2FQqd%2FaCYVAToRPvb4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLliuH%2B8ETc%2BqUCfaCrcA7jLK51x9E135JhURAm2vT1isPg05CsR46ZLLE7Fqr8iY8%2BmTeoyPLsL8Lhe4iol2naDPIoNR9qy8l%2BBojSWQO8uR4z4scOKWCqdXP%2FvTqpA4Nv6muSvYZn2jmwYMBryH1e2jiU%2FaPRIfyQK%2Bqfk%2F4%2Fl5IzZG7TCKxeYxyhUyShpvbCyt3b4%2BVzxW0toKpd0XRw7Vg4h%2F%2FUt4u%2BbMPHAzWqs%2BwwzVAeBuJ%2BDILDsTqKh8twZoMNyQCgFyKU1maiC1C3LCs%2BCjZR3qPRgeJr%2BVtGQIpEZuL8%2Fi4ESHvoooEmuHLypWKUb3ZRzzZGmOddGLvGCGtY7c11DxtIwtlLLy%2FO3uGXYt0%2BTkDU59YvrUWMaAvSYIcBr2Is6GoQYCSjwcMR4xheMGLm%2BwwGWroQMIb4ZNyduwmCElkddVIG7LjRUaaqhXnqew21XwDy6im1WIQBWZaf5%2Fxv7mdFUsbhZ%2F3lv%2FLGd8pHo%2FNoABBVN9YmKOHuYuyL70gr2Q8WJg%2F9exZTL5urFe3AAuMRktkEmU%2Fhdi5PsRqSdBXQ8cmG9CneS8%2FR3%2BH7oYPjefWsqCF2pUdkMwR3%2FAbZEmfjQrYlMtC6YfiYIwc%2BzTmfqz4Z%2BOobc1qPoQwE%2FJIWOzsO5MLPEhL8GOqUB1Pe4UzOVe0Ada%2BXvGcZDNK45H8EMIO%2BY%2BsJWlX2gxuFTxjfiWZS7J6W6VchOwQTRclJQvBVrydAxAgc23Plf3x9S%2BYBSxk2WeRdZ7iI2gJSNo8M5Y2iWme4mZDswzZTtBXuYoiMcTmXKaGKdasqnKFdptluyEe4ZzQ0A2qBDp4OJJoBw0RfTtfJZCKiPQtm2cPI25GeBTWUzzK2JclFkU4yM4%2BFG&X-Amz-Signature=66e307d8151d88a3797847b749e2bad538c07bf0822ff521d2c55d0833f1f602&X-Amz-SignedHeaders=host&x-id=GetObject)

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
