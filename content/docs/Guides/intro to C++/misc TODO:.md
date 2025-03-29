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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562WVYHC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBFvHaWTyOh4xKviKpb9datLuI2VStMYAvDuNxBiuRJmAiEA8eH9LQzTRNp%2BpqNwEaWsjOQt0maa0FAo2hVB%2FSZPsdUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHDCCBRdb8AF9PXqWircAzAWrSIqUptaw5qJUWZCuKEHFt9ID8CJqMHjmPWK007cQNYc8xVlE3%2F0DqZEt%2FuTawhK7lXFQDVV877hQmoktIJUdnjX9mWA86xufFNV6OqiG5f0IxtUVFTkxg9pYeW6n7kdvLnd03Q90ylKpLfK9whirDhygPi7NpOpeTh08Bn8b54cMOGArL2X7UR%2B1Or%2BYEABvLCuRkTJfJlOlQIieX31G5br%2Fkr9LgM4y48CJDwEkUFR5DyliHm0h6R3pUnshRTaiWKLUxmNh%2B9ftylOM3ghkfuZQ%2BMpTOIS9Druq8e%2BbMNZBRGzTE3hzqQfLOb46XVzNhCiex8IT8Fu2V8o6OcdnSLMgGbEgy%2FKP4o1gxBwVVZhpRcZQOtMYCSrVILq4gcZtonfCKTlx6MZvngctt70bEmb7RQwuk2YOf7eqvzrWnyCM%2FKRiXX8rbPgXj7YqzoIldcGlxi4CPWE4w5aP0oveOoTt9cTiEYupxqzHKhGUN1MboKdZJG2nO%2FA09IkoBNN1QOUqT0Hvup4oVLrm9ZLjvf805xUfavzQSAePX1qH2x6%2FyACJ5tQBkNTRm6mN54muNLwlBhy3Dbc7UkSUR1gSyAto796ccu73kOusspnWqBWJkbQFLbU8bpVMN2Kob8GOqUBiW6IeTQtIU05mUFBy%2FV%2FGLl4xU056oNwtjmkIKBWlfOdSlEqGgH5R%2Bg7Z1b8UoyIWyTZSPb7OITXdjPFHcS%2BL9EWCeRWtBvumnv8o6aOg8FnR5TMpLowHbIU4W%2Fcw5bEGoMKCps02D%2BGwVuLIjTPwfMTWgOIvb%2B8NJ4QTMd8U3cuuSmfO2m020wpKpEh2VDsq%2Fu%2FNG38Z%2Ft19L4ynt0PcGrADwn8&X-Amz-Signature=d0b52730f8f0e9a416e5830f774e4349f125ea098032dfa027b53a1873ae37a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562WVYHC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBFvHaWTyOh4xKviKpb9datLuI2VStMYAvDuNxBiuRJmAiEA8eH9LQzTRNp%2BpqNwEaWsjOQt0maa0FAo2hVB%2FSZPsdUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHDCCBRdb8AF9PXqWircAzAWrSIqUptaw5qJUWZCuKEHFt9ID8CJqMHjmPWK007cQNYc8xVlE3%2F0DqZEt%2FuTawhK7lXFQDVV877hQmoktIJUdnjX9mWA86xufFNV6OqiG5f0IxtUVFTkxg9pYeW6n7kdvLnd03Q90ylKpLfK9whirDhygPi7NpOpeTh08Bn8b54cMOGArL2X7UR%2B1Or%2BYEABvLCuRkTJfJlOlQIieX31G5br%2Fkr9LgM4y48CJDwEkUFR5DyliHm0h6R3pUnshRTaiWKLUxmNh%2B9ftylOM3ghkfuZQ%2BMpTOIS9Druq8e%2BbMNZBRGzTE3hzqQfLOb46XVzNhCiex8IT8Fu2V8o6OcdnSLMgGbEgy%2FKP4o1gxBwVVZhpRcZQOtMYCSrVILq4gcZtonfCKTlx6MZvngctt70bEmb7RQwuk2YOf7eqvzrWnyCM%2FKRiXX8rbPgXj7YqzoIldcGlxi4CPWE4w5aP0oveOoTt9cTiEYupxqzHKhGUN1MboKdZJG2nO%2FA09IkoBNN1QOUqT0Hvup4oVLrm9ZLjvf805xUfavzQSAePX1qH2x6%2FyACJ5tQBkNTRm6mN54muNLwlBhy3Dbc7UkSUR1gSyAto796ccu73kOusspnWqBWJkbQFLbU8bpVMN2Kob8GOqUBiW6IeTQtIU05mUFBy%2FV%2FGLl4xU056oNwtjmkIKBWlfOdSlEqGgH5R%2Bg7Z1b8UoyIWyTZSPb7OITXdjPFHcS%2BL9EWCeRWtBvumnv8o6aOg8FnR5TMpLowHbIU4W%2Fcw5bEGoMKCps02D%2BGwVuLIjTPwfMTWgOIvb%2B8NJ4QTMd8U3cuuSmfO2m020wpKpEh2VDsq%2Fu%2FNG38Z%2Ft19L4ynt0PcGrADwn8&X-Amz-Signature=990c932afdd466b2d632e5ff143254655e439c5459b1db832b02b753a8213e76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
