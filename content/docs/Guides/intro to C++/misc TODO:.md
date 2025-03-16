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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKDDUC7M%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc4XljAqH9gvZ8Z02HNvC8zkOXiOqXJzaUWdlhhO%2BajAiEA%2B0wc5GWx%2FjDlEsgNqAy2ub47kmbJTTy6%2FUtgVLQUjw4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDc9zB9QMQ%2BgLkG8LircA9xKWKqvlCaTtQc%2F5dQg0jIUNsPQZLXzbxCOFLoPck7giPusFffMbkEBptlFf3tHK2s372ag%2BNF%2FaphTrLhdgc5ejH1hUw%2FNCX3m52wGFRFv8anDJjZgFaE2pXrZLgebXROdZiNyALdmcHVb6d3HcwHbSvh%2FB4aPUFEIRpViUPjlRyHxocGJSJDXbm8K4fvfMQCrsbcQmuTGOtLnvFZD6yReCpG2zZJzMe2%2FYo1ACBD0YmSSk0mn1rvbk5f%2F75XPe2vBs3hYDGwSNug0rVxdQfLAs0lVrCu1AvRqiTz%2BHdIH%2FknDKgqIQVoWEIzIODPxISQqrwPcSmK7xohA3zau%2Fg85YBFz60d2piODRlKcU7vL2zrT6Rlpc1Rsy29SpzMGauxsDnsKAbQqZDZHcMZ86iecrhSSBkCIzevHQHtaUWYsK0ItrjgN2IwdlKDbWsgZt6hBBCaSDIKrMJw%2BiMwWUyA5%2B4X0lYxW5skAxgeEZHy1vllLUOj2jbGf10dNKAOFYJG3tMxU5DnfZFH0CKGXUdgFT0GCDCTVYqb8L6fX96p3wDl8xJVQor%2B7R4aXQ%2F%2FECqgTL7izavFVzLIQeWafN9MYqgbihSIbBgwDC1exlrMd0KByHe0zsjpliEafMMmT2r4GOqUB4DWIMeVVj71Yyiqbnr0xYH0XIUdikoEHQeSJdrLIGSuymoIpeBf8J8WOuemgeWmvf6z%2BU1SSiZi%2F2QmrASdYBIKpcYY7d70Exkkr3Bys8%2FqYHOjSxhhjmGB5Y5f%2BWTT%2BbrBLiYJqO9advaszGqLMu5lX0aT0FXDdOh%2B9Jvm3UZx2NnrPj%2FtkwQnxM%2BIvTe9SO164Mz4vrzdVeGbAXpmr%2F3urzYsF&X-Amz-Signature=4ccd3ad61c09d8ad0df68c97111d407f0480e277d4bd090e9bc0cd2eb41d8f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKDDUC7M%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc4XljAqH9gvZ8Z02HNvC8zkOXiOqXJzaUWdlhhO%2BajAiEA%2B0wc5GWx%2FjDlEsgNqAy2ub47kmbJTTy6%2FUtgVLQUjw4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDc9zB9QMQ%2BgLkG8LircA9xKWKqvlCaTtQc%2F5dQg0jIUNsPQZLXzbxCOFLoPck7giPusFffMbkEBptlFf3tHK2s372ag%2BNF%2FaphTrLhdgc5ejH1hUw%2FNCX3m52wGFRFv8anDJjZgFaE2pXrZLgebXROdZiNyALdmcHVb6d3HcwHbSvh%2FB4aPUFEIRpViUPjlRyHxocGJSJDXbm8K4fvfMQCrsbcQmuTGOtLnvFZD6yReCpG2zZJzMe2%2FYo1ACBD0YmSSk0mn1rvbk5f%2F75XPe2vBs3hYDGwSNug0rVxdQfLAs0lVrCu1AvRqiTz%2BHdIH%2FknDKgqIQVoWEIzIODPxISQqrwPcSmK7xohA3zau%2Fg85YBFz60d2piODRlKcU7vL2zrT6Rlpc1Rsy29SpzMGauxsDnsKAbQqZDZHcMZ86iecrhSSBkCIzevHQHtaUWYsK0ItrjgN2IwdlKDbWsgZt6hBBCaSDIKrMJw%2BiMwWUyA5%2B4X0lYxW5skAxgeEZHy1vllLUOj2jbGf10dNKAOFYJG3tMxU5DnfZFH0CKGXUdgFT0GCDCTVYqb8L6fX96p3wDl8xJVQor%2B7R4aXQ%2F%2FECqgTL7izavFVzLIQeWafN9MYqgbihSIbBgwDC1exlrMd0KByHe0zsjpliEafMMmT2r4GOqUB4DWIMeVVj71Yyiqbnr0xYH0XIUdikoEHQeSJdrLIGSuymoIpeBf8J8WOuemgeWmvf6z%2BU1SSiZi%2F2QmrASdYBIKpcYY7d70Exkkr3Bys8%2FqYHOjSxhhjmGB5Y5f%2BWTT%2BbrBLiYJqO9advaszGqLMu5lX0aT0FXDdOh%2B9Jvm3UZx2NnrPj%2FtkwQnxM%2BIvTe9SO164Mz4vrzdVeGbAXpmr%2F3urzYsF&X-Amz-Signature=fb4f5490daf9d91db6625850beb1efc2196df663716fb973d3163a59a8872784&X-Amz-SignedHeaders=host&x-id=GetObject)

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
