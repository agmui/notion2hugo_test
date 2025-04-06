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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBBVN6G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCAVzxjWpzX8DGtCW2PIruWDFMiv0hBY%2Fm6tMn4WVVEAiEA6LpBwWJKGwhim%2FCvT5fslWkFB6bCUjVyUFoJ2E%2Bt%2B84q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKoT0bG39vBEywaQmCrcA6rOcLErq%2Fk4ny4TnAq0e0HDSW3asUEMOMgO%2B6J%2BpIL9rTEQ8LhPzsdD98UO2nCLmrwYuSv6TLETRJfrQR8f3QM%2FpgELy9%2B8eX8WkQhRS1sfq0adFm%2B9A22YjR%2FvIBElR3Q00Yiyfs9dHBLa1R1rtHiNEftFaeKU4WdsqVlvF8S47iFfjBV4T%2Fd2hKk0GU84yEYxWEsq8yjasSxugxZonyfA07fLuvILuyBa%2BKUr%2FRrFzwNFjYccLMr764qnUdY%2F1CTwfHlOtRfhHscVVxcu0GLuWPNmYqRO1%2BAXchlbDXR44nzOozlEYJXeWaccGuxI8mGcG1N5i25edy7vWcr1CwkD9Auaoic2vsJtoM3ZVaU91z3fDqFx9%2BTYk5owGuXhbKj9%2F%2Br58vpelfaTdwLB3gy5kRG3KB1hRRXAiU74XXexjFnxehx%2FI5lCX41ao2nHt3XOnHwEKWmTDAI2X1l1%2FZYZTZKE9nrsAbOvICoMuAjvSbOFMN0VtHrbL8osWNzphaKYsYSppCDaTB%2FE8C8dVN5I%2FJf8M1%2BwyA9NRSFTm7fGj258%2F7sZRsx8lAAn94%2Fnz4g7xv4ue5DFYR79vCuOJMg2jfknZUQbklC2N4RwEGKObgVGBaKo2eTjIECiMNS%2FyL8GOqUBBZSboR%2BPLAsRgnJnDknZj8mjjUIs3%2FDV9FfpLPE5cOfsEv4%2B6cnnzZZbXv7PaJK2OU586T4yKVgFsMhCtxiPh%2Frz2mBPLXjWorXr9FyMNkX7DFud2%2BYMLFpuoI%2B8MMXxGH%2Badk6ZNhMXX9%2Ff9z6WafhQBXSkaHh0w6HKSJh2nLsHxakYLOP3VSE%2F23XzlbwOgwDlGc%2Frbmqbq%2FSKZV%2F1IefwGRMg&X-Amz-Signature=7da42541a36f95faafdd33e6c89c2067fa3b2f0e08e29455c79200e456960551&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBBVN6G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCAVzxjWpzX8DGtCW2PIruWDFMiv0hBY%2Fm6tMn4WVVEAiEA6LpBwWJKGwhim%2FCvT5fslWkFB6bCUjVyUFoJ2E%2Bt%2B84q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKoT0bG39vBEywaQmCrcA6rOcLErq%2Fk4ny4TnAq0e0HDSW3asUEMOMgO%2B6J%2BpIL9rTEQ8LhPzsdD98UO2nCLmrwYuSv6TLETRJfrQR8f3QM%2FpgELy9%2B8eX8WkQhRS1sfq0adFm%2B9A22YjR%2FvIBElR3Q00Yiyfs9dHBLa1R1rtHiNEftFaeKU4WdsqVlvF8S47iFfjBV4T%2Fd2hKk0GU84yEYxWEsq8yjasSxugxZonyfA07fLuvILuyBa%2BKUr%2FRrFzwNFjYccLMr764qnUdY%2F1CTwfHlOtRfhHscVVxcu0GLuWPNmYqRO1%2BAXchlbDXR44nzOozlEYJXeWaccGuxI8mGcG1N5i25edy7vWcr1CwkD9Auaoic2vsJtoM3ZVaU91z3fDqFx9%2BTYk5owGuXhbKj9%2F%2Br58vpelfaTdwLB3gy5kRG3KB1hRRXAiU74XXexjFnxehx%2FI5lCX41ao2nHt3XOnHwEKWmTDAI2X1l1%2FZYZTZKE9nrsAbOvICoMuAjvSbOFMN0VtHrbL8osWNzphaKYsYSppCDaTB%2FE8C8dVN5I%2FJf8M1%2BwyA9NRSFTm7fGj258%2F7sZRsx8lAAn94%2Fnz4g7xv4ue5DFYR79vCuOJMg2jfknZUQbklC2N4RwEGKObgVGBaKo2eTjIECiMNS%2FyL8GOqUBBZSboR%2BPLAsRgnJnDknZj8mjjUIs3%2FDV9FfpLPE5cOfsEv4%2B6cnnzZZbXv7PaJK2OU586T4yKVgFsMhCtxiPh%2Frz2mBPLXjWorXr9FyMNkX7DFud2%2BYMLFpuoI%2B8MMXxGH%2Badk6ZNhMXX9%2Ff9z6WafhQBXSkaHh0w6HKSJh2nLsHxakYLOP3VSE%2F23XzlbwOgwDlGc%2Frbmqbq%2FSKZV%2F1IefwGRMg&X-Amz-Signature=80447452813d5a349243923a7668b03d4d75c7735f892d94024785b98c41337c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
