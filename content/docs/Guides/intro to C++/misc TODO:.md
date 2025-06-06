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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAQLE2O%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDTchxG3LC0ZywMc6prDTfnL4FgpVWrqwORmwoz3RWMUQIgAmzAeFdKRgNgsWK3e%2BWtggM%2BoBZZn%2FrasjsVqn9TbYsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDH%2FYZ4swnfg0IEk5kircA6IJkLkRPOrKRdFf67ZsdvQLnHnMdJDaWftbnkBnZmsr14S2No6Ae73U91%2FWMx7QJKiO%2BgbNQfrh4NWDshE3QG8aZ2u7sp5eC9TDV%2FnRSR6ELjko2Vu1MeEzAzkB42TX%2FWFWzn2dbz%2BF9EZv5%2Fio7ZxtwJd3K%2F0gHgINEalbgFQtJPL7hiCiooFv5DRPBTkvTmgJVoa5XsR54hmLMAITipvumQZzqOW5aLl0gbPXHsARpIFnaymv%2BD9%2Bat42RES8VXQjsmd7qGxNQtRg1DU3s9IzBh1lcvblx5dElOFJmkaZ2qws3CkGpQnVrBRBNwhC%2B9CqjqcdveX%2F0CByzIpNc3Ln2SeDne%2F6mUjc5gP5ApkqA1ABqF59%2B1r60wxkYie3KHxiiH0%2Bn29QrQgt09qhN9k1xTpwoCst39P98KpzWPkofAXPxm9eEJNlH25Kblxr7ab6ymlA0ozZPordyw9B5iVEPPTEK7hcjPhaC9l1wipybF%2BdHwA6swQf6Hx%2FeN9kmpaIb50LpyPzxjgrvgpW324JHgyGpVEP%2FdFz33o04zwl6zowAUpzCoarWdsd8fXw%2FBI4lGGpW%2BFcECsJzQirYDDWy1XrTm0G5K5eaHzhnyRcV8oL3IuB5E5A6VFiMMGeisIGOqUBb9QMOO%2FspMHobtvXjXVzn87qomIaNto4WZEdaOhNi5wnxQFMKYz985V7F8KxrytIdSFnUgiIJhfBWzEhacrMWVo78zrSe9SjnkNdMtEzRNeGmcjzdaWzhnbthcFlqomujWK69b38D7wB0TdosqsPr5vOZbl4oZfIXl6K6mtRQtPXkAZW%2FDIwfmn3%2BNXEboDsCkQdRDWF3lVTnv2IP7DF8Ly5of%2BL&X-Amz-Signature=8804398d0309cd78baffd7628c203a27663a769d736479890fe6cba270765731&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAQLE2O%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDTchxG3LC0ZywMc6prDTfnL4FgpVWrqwORmwoz3RWMUQIgAmzAeFdKRgNgsWK3e%2BWtggM%2BoBZZn%2FrasjsVqn9TbYsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDH%2FYZ4swnfg0IEk5kircA6IJkLkRPOrKRdFf67ZsdvQLnHnMdJDaWftbnkBnZmsr14S2No6Ae73U91%2FWMx7QJKiO%2BgbNQfrh4NWDshE3QG8aZ2u7sp5eC9TDV%2FnRSR6ELjko2Vu1MeEzAzkB42TX%2FWFWzn2dbz%2BF9EZv5%2Fio7ZxtwJd3K%2F0gHgINEalbgFQtJPL7hiCiooFv5DRPBTkvTmgJVoa5XsR54hmLMAITipvumQZzqOW5aLl0gbPXHsARpIFnaymv%2BD9%2Bat42RES8VXQjsmd7qGxNQtRg1DU3s9IzBh1lcvblx5dElOFJmkaZ2qws3CkGpQnVrBRBNwhC%2B9CqjqcdveX%2F0CByzIpNc3Ln2SeDne%2F6mUjc5gP5ApkqA1ABqF59%2B1r60wxkYie3KHxiiH0%2Bn29QrQgt09qhN9k1xTpwoCst39P98KpzWPkofAXPxm9eEJNlH25Kblxr7ab6ymlA0ozZPordyw9B5iVEPPTEK7hcjPhaC9l1wipybF%2BdHwA6swQf6Hx%2FeN9kmpaIb50LpyPzxjgrvgpW324JHgyGpVEP%2FdFz33o04zwl6zowAUpzCoarWdsd8fXw%2FBI4lGGpW%2BFcECsJzQirYDDWy1XrTm0G5K5eaHzhnyRcV8oL3IuB5E5A6VFiMMGeisIGOqUBb9QMOO%2FspMHobtvXjXVzn87qomIaNto4WZEdaOhNi5wnxQFMKYz985V7F8KxrytIdSFnUgiIJhfBWzEhacrMWVo78zrSe9SjnkNdMtEzRNeGmcjzdaWzhnbthcFlqomujWK69b38D7wB0TdosqsPr5vOZbl4oZfIXl6K6mtRQtPXkAZW%2FDIwfmn3%2BNXEboDsCkQdRDWF3lVTnv2IP7DF8Ly5of%2BL&X-Amz-Signature=6fe5df0b5afc1d33fc3fdebb502dc040360653597123d34dc6124d70161f9c83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
