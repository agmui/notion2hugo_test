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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZUKTTR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQkaFO2jXdhVnlHfAbORqcmwVXsiPIbJornaxJK%2FMKQIhAOgBrBdkuPvdlJ4fqRAohcM%2BcLd2J6H3Hoyw0QpUnPBOKv8DCCAQABoMNjM3NDIzMTgzODA1Igw1qQb0ajFqGwChL4Eq3AOBgSDO8URGltwTC2wXxouvoBpgNDRDZJiJT%2B7jai6egSnXb29%2Fb%2FS5CTITty9Q7Ad12%2FAu2pIp7GQoZ%2BxXpZN9iN%2Fs45Qc3IQ6FvwMmC64RSgO%2BWoO8CNg9jmXyCFgDIE2L3ESvdG4TnnToBgFe8TVM1cNWyarJFR9jkNj6wXQIzPjWxNZvIizJNRUQYc5rD8zOoRH9qgjs%2F8FssdMDCatdqBCVqOqvyw2%2B2fbZ2Dv5zISC1a0KTAxQcg%2BLbZ5iPw5VZRhbh0L9o2ZonGnUQFC%2FZZb3Mu4Wnrs3bkePhjAFmJ%2BF9cpzsTKQolNf4dezrQ%2Fnj5I1kMto5ZYHH2zUZzK4UZxhJGtbbbhJXxVJMJbOFvigbAZbKWPUlTiSEArv%2FlV4zweSrGOvXc60vPxyVPH8juKw%2B4wQ5H6mhElclS9ooyQSWsziMYoc0S1QCH2CG4cSzofOorpejHIHuL2xR%2Bz%2FQWTzZxuoDGnx%2F8ig8sQA7CWfwq0tUOkCLsP7L5F7VHSMfEJgoLO%2FXgpVYE5tosXUBsqe%2FauXvA6Nb%2FAOuMjJsLOUcuPRRSCN2Wp%2FEHvLnz4mJG%2FK2S8JpDabVj92Gdt6T28HAlD1MRRMoyGep7VfZUOdDk%2BmEVuRdYURTDem%2Fa%2FBjqkAY8fcbESXgBMQb3RTzXiL6lsDmyrO%2BAIYZwlRILiiP1Vr%2FXVUub64qlwoiSaMNqTdKNjIJEPCXfJpjCWQkYxXZB9E%2FUoMWh%2FQVSQ8NWItHBQ1u6eFrUd7z2i%2FBeyxk1pK3Si9uozin7eH%2FE%2FnzEwlFUo9ii2O5BHqwMTopvsRfpo%2FdumPlqbj11I%2FwcD%2BOJaVpPh7CdefiLWHdRFSYIpvRr9HwWS&X-Amz-Signature=12cb1f94ec574f63e22d09e7b0fa5357b2a1dc90d0211c69be614e85f87b7d91&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZUKTTR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQkaFO2jXdhVnlHfAbORqcmwVXsiPIbJornaxJK%2FMKQIhAOgBrBdkuPvdlJ4fqRAohcM%2BcLd2J6H3Hoyw0QpUnPBOKv8DCCAQABoMNjM3NDIzMTgzODA1Igw1qQb0ajFqGwChL4Eq3AOBgSDO8URGltwTC2wXxouvoBpgNDRDZJiJT%2B7jai6egSnXb29%2Fb%2FS5CTITty9Q7Ad12%2FAu2pIp7GQoZ%2BxXpZN9iN%2Fs45Qc3IQ6FvwMmC64RSgO%2BWoO8CNg9jmXyCFgDIE2L3ESvdG4TnnToBgFe8TVM1cNWyarJFR9jkNj6wXQIzPjWxNZvIizJNRUQYc5rD8zOoRH9qgjs%2F8FssdMDCatdqBCVqOqvyw2%2B2fbZ2Dv5zISC1a0KTAxQcg%2BLbZ5iPw5VZRhbh0L9o2ZonGnUQFC%2FZZb3Mu4Wnrs3bkePhjAFmJ%2BF9cpzsTKQolNf4dezrQ%2Fnj5I1kMto5ZYHH2zUZzK4UZxhJGtbbbhJXxVJMJbOFvigbAZbKWPUlTiSEArv%2FlV4zweSrGOvXc60vPxyVPH8juKw%2B4wQ5H6mhElclS9ooyQSWsziMYoc0S1QCH2CG4cSzofOorpejHIHuL2xR%2Bz%2FQWTzZxuoDGnx%2F8ig8sQA7CWfwq0tUOkCLsP7L5F7VHSMfEJgoLO%2FXgpVYE5tosXUBsqe%2FauXvA6Nb%2FAOuMjJsLOUcuPRRSCN2Wp%2FEHvLnz4mJG%2FK2S8JpDabVj92Gdt6T28HAlD1MRRMoyGep7VfZUOdDk%2BmEVuRdYURTDem%2Fa%2FBjqkAY8fcbESXgBMQb3RTzXiL6lsDmyrO%2BAIYZwlRILiiP1Vr%2FXVUub64qlwoiSaMNqTdKNjIJEPCXfJpjCWQkYxXZB9E%2FUoMWh%2FQVSQ8NWItHBQ1u6eFrUd7z2i%2FBeyxk1pK3Si9uozin7eH%2FE%2FnzEwlFUo9ii2O5BHqwMTopvsRfpo%2FdumPlqbj11I%2FwcD%2BOJaVpPh7CdefiLWHdRFSYIpvRr9HwWS&X-Amz-Signature=f2efdd9360773689ff20bd494aa3753aab70af78bfecc463862297dd0ee54270&X-Amz-SignedHeaders=host&x-id=GetObject)

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
