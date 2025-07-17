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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5MN73J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFklAQyrZA84qvlRf9dK5PMPZXvP6kTAbU%2F5R60UnTI9AiEAtdXHIsh%2FCw0vtI2VSNVASdSI5OwthgofJY7%2BqdicvFcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIVrTeREIpvvwcv12SrcA8Pff9J%2BODn3T%2FQuZR9WkZjRBayx06MacVmkdy0QwA0sheeldxfcxZHKazZU4fR3WO7RudPdoxVGLmD64zUM%2BONpgG%2FrHVUhx80I2hFaF6q1BENRSvaHzm5BH3dqtMiuvOqzcOwumACr32bTg8MN2cutGcHBMr5HFolIMOVNFX3Bv3TkZntfQp52uFmlu%2F3jFNg%2BRqd80u5Wb8%2Fy4%2Bhmubln0n%2FREF3CTSVMdqRSYSdwDaD%2BKUaTHZjRxoPdFt%2FV83TmeGnU30yaSGk4hZRVqTiGnFY7amjM9efl788okvBmkem3m8AF6YcWAuVwQUUkq%2FzxCCRnJ0hHciAMIP9PUL9VM0vCTU3JIx4gD0QkdzQ%2B6wkmbzwY6eNsdh62v2YQylBvK3j64UKPg9HP%2Fb3alCbqpqcbL80qnMr4hb291wdrJPPYqe3JXaQoFt9n6p7gfadsfevPdQPrMknh5%2FoLJQJBKGublI52GBLLNABpt0MnshPfVFmMnp2xZyPye4ixYNOaEOh1uAattfaxhiU9VDgKv%2FMB3Bflqh33zVRr4VjeJQnSfH7P4%2BVwCNwRqRAeHzVynRXxxoVs%2FIMxLc3N3pHhNb5TZMTS8ByNqbZ9oO9j6hb2%2FjoO1BhOvVe2MPnm5MMGOqUBD7dOJkTQOISC9NF8GFJOmEPPc3awmvDhL8GBmUEY%2FVQuzrSsrCJFw02edI8VT8Vb%2BR3Xoe462vYAC8x4XB6ShvtYwiotw%2BOAvzMifPh5FHQz5jkC%2FN5Y0aa8Fc0n44pLWTtOGzhryOTyhP17TzWCXyY1ci6A5uY40bXp7qWh7tFQ6OEB5uEs56dV9xMF9Jig4022rAg7PUzGqchm5E1FaRV%2FrXbt&X-Amz-Signature=9b008cc3015351fb52982aba39c29d7f5b209a1251fe1bdf2eb70c52e1ff1757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5MN73J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFklAQyrZA84qvlRf9dK5PMPZXvP6kTAbU%2F5R60UnTI9AiEAtdXHIsh%2FCw0vtI2VSNVASdSI5OwthgofJY7%2BqdicvFcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIVrTeREIpvvwcv12SrcA8Pff9J%2BODn3T%2FQuZR9WkZjRBayx06MacVmkdy0QwA0sheeldxfcxZHKazZU4fR3WO7RudPdoxVGLmD64zUM%2BONpgG%2FrHVUhx80I2hFaF6q1BENRSvaHzm5BH3dqtMiuvOqzcOwumACr32bTg8MN2cutGcHBMr5HFolIMOVNFX3Bv3TkZntfQp52uFmlu%2F3jFNg%2BRqd80u5Wb8%2Fy4%2Bhmubln0n%2FREF3CTSVMdqRSYSdwDaD%2BKUaTHZjRxoPdFt%2FV83TmeGnU30yaSGk4hZRVqTiGnFY7amjM9efl788okvBmkem3m8AF6YcWAuVwQUUkq%2FzxCCRnJ0hHciAMIP9PUL9VM0vCTU3JIx4gD0QkdzQ%2B6wkmbzwY6eNsdh62v2YQylBvK3j64UKPg9HP%2Fb3alCbqpqcbL80qnMr4hb291wdrJPPYqe3JXaQoFt9n6p7gfadsfevPdQPrMknh5%2FoLJQJBKGublI52GBLLNABpt0MnshPfVFmMnp2xZyPye4ixYNOaEOh1uAattfaxhiU9VDgKv%2FMB3Bflqh33zVRr4VjeJQnSfH7P4%2BVwCNwRqRAeHzVynRXxxoVs%2FIMxLc3N3pHhNb5TZMTS8ByNqbZ9oO9j6hb2%2FjoO1BhOvVe2MPnm5MMGOqUBD7dOJkTQOISC9NF8GFJOmEPPc3awmvDhL8GBmUEY%2FVQuzrSsrCJFw02edI8VT8Vb%2BR3Xoe462vYAC8x4XB6ShvtYwiotw%2BOAvzMifPh5FHQz5jkC%2FN5Y0aa8Fc0n44pLWTtOGzhryOTyhP17TzWCXyY1ci6A5uY40bXp7qWh7tFQ6OEB5uEs56dV9xMF9Jig4022rAg7PUzGqchm5E1FaRV%2FrXbt&X-Amz-Signature=54e2ee22cb8ae1b14f5b02a0536c59eb130d55d09e1d5cdb1d2551eb6e7001bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
