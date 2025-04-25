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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXC3GGCQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqwwhYhTivnKcm9uab2l%2FDlqvBNAHix%2Bt0uSaLUJYIeAIhAOBT2JFvJe80d8HkHhVPbhlZ0i7JQXiQ2EQkX1VS6YraKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS2W5BegMfWbJae78q3AOmkmeMVJQegIut309h9fhqUys1ww6Vj%2FZKZclfOJFkpgUKtYd1l1tTlAfwqY1pJlAnJ2lYcWbtlnaLyHV%2Fk3yVtIUyVtrxkCLI7QTzRwkf7yHf%2F9SZAOHm8Skaa%2BdIT8WAA%2Bq%2FGLxZUuXzsi5NqR8wEWIwqInOxsFc9S4bpFxDh1CqE%2F8rRTdWBKcIebYTtYe6e1TIXhI13Spjw2v8M0T0pMEB6dSBaPCtnuw9hwxovTBG1%2Fml1d%2FEVI%2F61yV6j185f%2Fh9aw5UHii7SpS2coUTQDX5hr72t9VjLNsF9AxplrwuTmnqGrb2s2I7CxN3BwhPgpTj0A48pJADqxR%2FjR%2FcQ0lnKG0ZWkp0MrqMrIC0IXQOKSBd8qM4%2F4iwSNriPe6Yn6pl0CDL0SJ0JUrieIvS83tHe6Y%2FrlaEjxsALtzf3KSQABnQ1CaM9XiyzeAAPB3svfDXuplzJ8YWQCpxvv01lDKqSwEMUcYLqXXAFkmSB10xToPlIZ1s2jQL5OPIQEgEkQC7yFwaQETnD2uQPiPijlSlf0g3ZpvKMUu8sZK9VjmR%2F0q6yNfuQMHHBaeHBdfqj3a058uwMN3Zj4o9uYOYMznvf%2BSLp0g%2B08aEMiyGsW09%2Fsw17PKxOvr3%2FDCn6K7ABjqkAeYWJLFhaX1Dfbzm8XEGPCgdRlwHDt9%2FqajW%2FUpwXBt3P8i%2BFIooJp1E9zM%2BlcDnhE4M6TLfqnxE%2FMdf9w1qqup7ogDfzo%2F4S%2FbjuM7QKUm9C16gh%2B85N8znpSdsFHEgsNYh%2B5lyCQAuHYXJrPI5pG1zly4URPX5l7WbfO4zvqs6d7CL4g5OWFIxhvASoiXoBZ3%2FZ5Orc48Mgyy%2B0%2Fo1le8EcqiS&X-Amz-Signature=43ee6f885631cf5b585c44196f3e34c8bbf8d9f1a6d3df331146297012ce7663&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXC3GGCQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqwwhYhTivnKcm9uab2l%2FDlqvBNAHix%2Bt0uSaLUJYIeAIhAOBT2JFvJe80d8HkHhVPbhlZ0i7JQXiQ2EQkX1VS6YraKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS2W5BegMfWbJae78q3AOmkmeMVJQegIut309h9fhqUys1ww6Vj%2FZKZclfOJFkpgUKtYd1l1tTlAfwqY1pJlAnJ2lYcWbtlnaLyHV%2Fk3yVtIUyVtrxkCLI7QTzRwkf7yHf%2F9SZAOHm8Skaa%2BdIT8WAA%2Bq%2FGLxZUuXzsi5NqR8wEWIwqInOxsFc9S4bpFxDh1CqE%2F8rRTdWBKcIebYTtYe6e1TIXhI13Spjw2v8M0T0pMEB6dSBaPCtnuw9hwxovTBG1%2Fml1d%2FEVI%2F61yV6j185f%2Fh9aw5UHii7SpS2coUTQDX5hr72t9VjLNsF9AxplrwuTmnqGrb2s2I7CxN3BwhPgpTj0A48pJADqxR%2FjR%2FcQ0lnKG0ZWkp0MrqMrIC0IXQOKSBd8qM4%2F4iwSNriPe6Yn6pl0CDL0SJ0JUrieIvS83tHe6Y%2FrlaEjxsALtzf3KSQABnQ1CaM9XiyzeAAPB3svfDXuplzJ8YWQCpxvv01lDKqSwEMUcYLqXXAFkmSB10xToPlIZ1s2jQL5OPIQEgEkQC7yFwaQETnD2uQPiPijlSlf0g3ZpvKMUu8sZK9VjmR%2F0q6yNfuQMHHBaeHBdfqj3a058uwMN3Zj4o9uYOYMznvf%2BSLp0g%2B08aEMiyGsW09%2Fsw17PKxOvr3%2FDCn6K7ABjqkAeYWJLFhaX1Dfbzm8XEGPCgdRlwHDt9%2FqajW%2FUpwXBt3P8i%2BFIooJp1E9zM%2BlcDnhE4M6TLfqnxE%2FMdf9w1qqup7ogDfzo%2F4S%2FbjuM7QKUm9C16gh%2B85N8znpSdsFHEgsNYh%2B5lyCQAuHYXJrPI5pG1zly4URPX5l7WbfO4zvqs6d7CL4g5OWFIxhvASoiXoBZ3%2FZ5Orc48Mgyy%2B0%2Fo1le8EcqiS&X-Amz-Signature=883ca3722be75fef876283728123b1a5c129e8ef1b751549163820bcc6e9f9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
