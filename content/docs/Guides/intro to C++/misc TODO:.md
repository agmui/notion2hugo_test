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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RC2SEOP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAgLaHUj5ufqfvmJDV5yCzFtVgbaOG9Iquxcl2WweqgOAiEAy9cG7qrc2SNTloujshA8z%2BF44A4vPS6fPTBl5eicXzEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOyh2iuIzS99200PvyrcAyP0vAKFOtLsQWPZQm1I0y72LyijOTACPN36vHtyp7fhrerxA7TSeN5AvUIDEmgX86h2Np%2Fpve5S8HTOG77pq0Go8ABP3IzRrfNtDjeRQ9wrb2b65q1RS9DdKvfOVwrOxER1FeuU5cwMyWyEi4HgsEpQek9lFlOUHzBRo4Tsd8wQe%2FSFxWiR5vIFmFg9YdpNc12o6%2F62TXUJTPhXzYK6LPFXiCydAjrUnOuqgMoIYb2TVuFpR3Wu9e79ikwWkJquBHKoWWEPBrDYd3j8CEe5GPOT%2BMl5ebrEFM92tpH%2F%2FvueZ6vXS75B2C%2FXA1N4R1of1K%2FZ8CiTP1SYfGb4z8s38ZbGaF5Y076CFkbQM9ry6rfvk97TEHkRnNKFYAKYwORPSOgpT4CHinARFnPsAZRlpjtOFnPTLWmXQAw9ifrvPLefiZ5v%2FBVNZH3u23fiATu%2BTfs8ENQYjGbPEP%2BORo9%2Fires9kBL%2B53k45OYyy3ezg72bf78quWFzgGpYVqxcsFUgTNTXd%2Bkxes85CL1PU5KGsWjZ3YEUDphc3EyHucEZ6ABYvniP2glvQnEWU2V3e198iiqECf0H5H%2FtBvFPGGrVDWevSRdM3xCeHBHUJ4eswxqGz0gAIUiGFgbw8uUMM%2FIyb0GOqUBCa1maIYEshR9GNA742vj5XxSEZhzeRchWpeM7rfyul9NpSSkuLEWwx%2B5Ecmb3SvkrLXmqSKY43vrg%2FDTHQQU6719hIkjO2tgdKewoag6eoWIilXHsOVrwwpNskPHnl35imSE%2FfCNYjsS0zfztmJhVlEphaJ4fU2KkOrHraef%2BzujoWPxdORK%2BnFfjaMmS1w0h5%2FDuYgfENpd2MBjKocLRm269X0J&X-Amz-Signature=77e3b61e771adc3c89a2430b4d3c0596c963aa7d2eec47869a44ba56834b29fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RC2SEOP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAgLaHUj5ufqfvmJDV5yCzFtVgbaOG9Iquxcl2WweqgOAiEAy9cG7qrc2SNTloujshA8z%2BF44A4vPS6fPTBl5eicXzEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOyh2iuIzS99200PvyrcAyP0vAKFOtLsQWPZQm1I0y72LyijOTACPN36vHtyp7fhrerxA7TSeN5AvUIDEmgX86h2Np%2Fpve5S8HTOG77pq0Go8ABP3IzRrfNtDjeRQ9wrb2b65q1RS9DdKvfOVwrOxER1FeuU5cwMyWyEi4HgsEpQek9lFlOUHzBRo4Tsd8wQe%2FSFxWiR5vIFmFg9YdpNc12o6%2F62TXUJTPhXzYK6LPFXiCydAjrUnOuqgMoIYb2TVuFpR3Wu9e79ikwWkJquBHKoWWEPBrDYd3j8CEe5GPOT%2BMl5ebrEFM92tpH%2F%2FvueZ6vXS75B2C%2FXA1N4R1of1K%2FZ8CiTP1SYfGb4z8s38ZbGaF5Y076CFkbQM9ry6rfvk97TEHkRnNKFYAKYwORPSOgpT4CHinARFnPsAZRlpjtOFnPTLWmXQAw9ifrvPLefiZ5v%2FBVNZH3u23fiATu%2BTfs8ENQYjGbPEP%2BORo9%2Fires9kBL%2B53k45OYyy3ezg72bf78quWFzgGpYVqxcsFUgTNTXd%2Bkxes85CL1PU5KGsWjZ3YEUDphc3EyHucEZ6ABYvniP2glvQnEWU2V3e198iiqECf0H5H%2FtBvFPGGrVDWevSRdM3xCeHBHUJ4eswxqGz0gAIUiGFgbw8uUMM%2FIyb0GOqUBCa1maIYEshR9GNA742vj5XxSEZhzeRchWpeM7rfyul9NpSSkuLEWwx%2B5Ecmb3SvkrLXmqSKY43vrg%2FDTHQQU6719hIkjO2tgdKewoag6eoWIilXHsOVrwwpNskPHnl35imSE%2FfCNYjsS0zfztmJhVlEphaJ4fU2KkOrHraef%2BzujoWPxdORK%2BnFfjaMmS1w0h5%2FDuYgfENpd2MBjKocLRm269X0J&X-Amz-Signature=61f0629ba028ff2339ed240409e6dc206010821083d4e20eb359abda8cf6dba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
