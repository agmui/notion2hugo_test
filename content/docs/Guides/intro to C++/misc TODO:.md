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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DK332Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4uGVBvioPu0UmtWOf5zdr02oc5HNiidRbL%2Bf42UgqBAiAkjjH9ZpnMC%2FH6i6AR%2FRK5grIrCMZQmnSYvmzFsbFq4yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmh1vlGAuLdyyraAyKtwDUGibp0lZOF3VhFckWkEsIHv5ce2MNg%2BAnxh7ZPRNjfSN3P7q%2BPCbzFPgKgJAfz1DcsdBMMW%2B%2BNxp9xsZCFqh1lBandgLVFvdDTk%2BB0Qen0Eg4f1QS4G7OCcN4o1sfDUhYgA8yqsq0UDV4%2BOkHMj%2Fp6fyoXvCi9iVhsAA4LDy8H85sL%2F7CALiGt8r%2BHi0B%2Bqfw4QQMj%2BJBFRyXibDEveFoMDxPvEXOnazavT53lcPxkY2N4ewCIL3MH%2F8NxX4KnRtZGV0%2BSzV69xcnSeUoytv2CLyzSoXTrLOCDValBh%2FzYgHBEebvilZQYVBjwpXKXQWeG8yhj776uxawaeSrSsjUylbpIg1l8%2BRbth7%2FctUgqinSU7VguH1st9K7Z%2BZDCXM1JErr03e4I8UrTXTNOSCGtRI3urDNcmYgx%2FQGqffl7I56N%2Bdy17sFO2hASaOhNPeRhZrghislaseJ3VAOw3NP7mjUjjsinkU9VVwmTOuo6E%2FjQIeAalVrLWmGaaz6JCK6fXUfLfre1%2BUaqmz8cfsqPEeSVVJInKLfBvXjqZMFkXQzu%2BuQslSJ9hunQe9W%2B0Y%2Fftttjo0fuWQQMrAybFlsaJ%2FxVydBhGjc7micSk2YnEXYsJxE73rJsAHNG0w592WvwY6pgF6eAcFR1PMFJX0iODgVf0FoVhAfIZcIeIBmGtd8BJ2XProw1t9fVVkDY1E9wJP6H9hQfuNqXbg5H28wVE%2FbiZLOAGymVQIr1b8IlSe0V2qfIRavEw6s7231XqhUlx0Ee1G4hxR45kEF%2FMiVGnKci7CmV5rMekiiiKdAyFx4Ykn%2FtKIBAiaM8k0zTV75JHu6dr1QVt%2BslpcJAxO2uHPM21vHKLWUC8r&X-Amz-Signature=e3bc211a01cd9fe23c4ab7b0ad0d1e6f02b9e34d128c16b2e85d1e301c9ccf19&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DK332Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4uGVBvioPu0UmtWOf5zdr02oc5HNiidRbL%2Bf42UgqBAiAkjjH9ZpnMC%2FH6i6AR%2FRK5grIrCMZQmnSYvmzFsbFq4yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmh1vlGAuLdyyraAyKtwDUGibp0lZOF3VhFckWkEsIHv5ce2MNg%2BAnxh7ZPRNjfSN3P7q%2BPCbzFPgKgJAfz1DcsdBMMW%2B%2BNxp9xsZCFqh1lBandgLVFvdDTk%2BB0Qen0Eg4f1QS4G7OCcN4o1sfDUhYgA8yqsq0UDV4%2BOkHMj%2Fp6fyoXvCi9iVhsAA4LDy8H85sL%2F7CALiGt8r%2BHi0B%2Bqfw4QQMj%2BJBFRyXibDEveFoMDxPvEXOnazavT53lcPxkY2N4ewCIL3MH%2F8NxX4KnRtZGV0%2BSzV69xcnSeUoytv2CLyzSoXTrLOCDValBh%2FzYgHBEebvilZQYVBjwpXKXQWeG8yhj776uxawaeSrSsjUylbpIg1l8%2BRbth7%2FctUgqinSU7VguH1st9K7Z%2BZDCXM1JErr03e4I8UrTXTNOSCGtRI3urDNcmYgx%2FQGqffl7I56N%2Bdy17sFO2hASaOhNPeRhZrghislaseJ3VAOw3NP7mjUjjsinkU9VVwmTOuo6E%2FjQIeAalVrLWmGaaz6JCK6fXUfLfre1%2BUaqmz8cfsqPEeSVVJInKLfBvXjqZMFkXQzu%2BuQslSJ9hunQe9W%2B0Y%2Fftttjo0fuWQQMrAybFlsaJ%2FxVydBhGjc7micSk2YnEXYsJxE73rJsAHNG0w592WvwY6pgF6eAcFR1PMFJX0iODgVf0FoVhAfIZcIeIBmGtd8BJ2XProw1t9fVVkDY1E9wJP6H9hQfuNqXbg5H28wVE%2FbiZLOAGymVQIr1b8IlSe0V2qfIRavEw6s7231XqhUlx0Ee1G4hxR45kEF%2FMiVGnKci7CmV5rMekiiiKdAyFx4Ykn%2FtKIBAiaM8k0zTV75JHu6dr1QVt%2BslpcJAxO2uHPM21vHKLWUC8r&X-Amz-Signature=5b911757b47c757f5459ab08a10cbea719beea6d24b3bbe8d4f9173d5a5133f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
