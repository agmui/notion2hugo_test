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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66HWIY3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBQ8%2Bre8VSqkZv9lWXHzMKGE0EtF8m5WdTi3JoGzsDRaAiAnBy2Jy%2B3TPYUquFoJkRjDl8TgF%2FeeG87UEbIgxRxPyyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMJWhif2LVRtthe0hjKtwDTiG8SAbBDxZInLhWC4XMuixvpLDtdv10WyO8jOEdLOrmhEcL%2Bo63zwQyJ8MmhosF%2BxUMlXdBSUDsOKzkEYqrIZZV9JGFPZOdbp12ZTc%2Fo%2FwyvaYR7XQzRM3oSbGsB9gFK%2Fs0nOczS%2B3BJ5GlgcWso7QeMPyeCawuq3EJXy48EcVIvULU56QP%2F2d3N5iQT9WTpIWEnbhmGA4Xi2q4Gr0CN0XGm%2FLny3XwU0qrY7La707tMD0vwvhSVqAmvV0CfX%2BLK0mDwoJ1N3lnRpnWSyjyMaGIZGJE1BiftmQMNFWtO3HZDbmmG8j%2B2NHvLL7FSwT0oDn35nDpnSubDSL4h2AWOZuoLVPCDCvuuDXlVdUhOZYNhYS%2FQKbZH2EVafIe2qEh%2BLcgvv8auEtGghZVtkCz0G4QjHUOer0Rg0Oxr%2FNvZGOvrikT%2FGxTxMf7xHv9qNW1MApeucfrJwisvC3AUZwGAqmZ2AuJMOlYAvL2OX9crgLZ6jlVFjs7eRrZInozhB0JDAZ6lLdFM5PGuQt1K1BouCxykT1ezfc%2BGL928ZZbocxMhbJqXkBALmn9AYIGrJvQi5R%2FvIr71c%2BkkHIRDsScmw6uYhNlAlX6%2BJJ%2B05nCkH8eeZaC%2Bg94CxIiJ78w6OGQvQY6pgEAZvkOOSCDiDA6kcETWWuY3adHBvanss%2FYFWrWG7GzuJuYzMLIxNX%2BOQ0hWQvEMK7d0R2ZrIRsizMSi%2BqWAJ621mZAECCT6W3fXQIgsN9bRirhyVXszmLwpD2spqvKnCDj9f7Gj6gtlBTHNF3ihCRl47EN4AbMsQVyNpSY55i672m8DZ3oSwjIRsi%2B8EEMOr5hMJrzvpCbqMlMp3Krg5eM2K%2FOcVAk&X-Amz-Signature=089fc10a23a41ea715682c905f96e7544c8d1cf6d1a12b8aad631ffa075088b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66HWIY3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBQ8%2Bre8VSqkZv9lWXHzMKGE0EtF8m5WdTi3JoGzsDRaAiAnBy2Jy%2B3TPYUquFoJkRjDl8TgF%2FeeG87UEbIgxRxPyyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMJWhif2LVRtthe0hjKtwDTiG8SAbBDxZInLhWC4XMuixvpLDtdv10WyO8jOEdLOrmhEcL%2Bo63zwQyJ8MmhosF%2BxUMlXdBSUDsOKzkEYqrIZZV9JGFPZOdbp12ZTc%2Fo%2FwyvaYR7XQzRM3oSbGsB9gFK%2Fs0nOczS%2B3BJ5GlgcWso7QeMPyeCawuq3EJXy48EcVIvULU56QP%2F2d3N5iQT9WTpIWEnbhmGA4Xi2q4Gr0CN0XGm%2FLny3XwU0qrY7La707tMD0vwvhSVqAmvV0CfX%2BLK0mDwoJ1N3lnRpnWSyjyMaGIZGJE1BiftmQMNFWtO3HZDbmmG8j%2B2NHvLL7FSwT0oDn35nDpnSubDSL4h2AWOZuoLVPCDCvuuDXlVdUhOZYNhYS%2FQKbZH2EVafIe2qEh%2BLcgvv8auEtGghZVtkCz0G4QjHUOer0Rg0Oxr%2FNvZGOvrikT%2FGxTxMf7xHv9qNW1MApeucfrJwisvC3AUZwGAqmZ2AuJMOlYAvL2OX9crgLZ6jlVFjs7eRrZInozhB0JDAZ6lLdFM5PGuQt1K1BouCxykT1ezfc%2BGL928ZZbocxMhbJqXkBALmn9AYIGrJvQi5R%2FvIr71c%2BkkHIRDsScmw6uYhNlAlX6%2BJJ%2B05nCkH8eeZaC%2Bg94CxIiJ78w6OGQvQY6pgEAZvkOOSCDiDA6kcETWWuY3adHBvanss%2FYFWrWG7GzuJuYzMLIxNX%2BOQ0hWQvEMK7d0R2ZrIRsizMSi%2BqWAJ621mZAECCT6W3fXQIgsN9bRirhyVXszmLwpD2spqvKnCDj9f7Gj6gtlBTHNF3ihCRl47EN4AbMsQVyNpSY55i672m8DZ3oSwjIRsi%2B8EEMOr5hMJrzvpCbqMlMp3Krg5eM2K%2FOcVAk&X-Amz-Signature=4ca72f69ccbfd5e46d1b4a057352456106c01327e17e6cab87a491777b507609&X-Amz-SignedHeaders=host&x-id=GetObject)

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
