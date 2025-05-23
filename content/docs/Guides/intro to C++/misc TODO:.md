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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHJ65ET%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG6cFc%2F91dVv69xQ20F%2FJUTaJxfRwIUS8Qn8RPYz%2FknhAiEA3JjINJfaoBXMix3InfJKgNyAXG2EyhLDvMBSowooQOwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzQcYc5EIhrWPE9mSrcA5SqIax53PpzOS8wQBREZldYAyIxb%2B8aWQ6D4Gqpxudu3SeL94ARjpLI6n%2BvlU9m2Pm4CxwqVhvwzQNBfb8HYX9CnnSmCBDfpuaITMhMSMUOu3seVC2cqeYDleWST%2Bb6DCsA729BM4TrpcQiJlZp4dTTW7Woto3s0GQbMn86gjJ2aeMvfRcOh%2BAcFpu%2BRXYBi0VB3YCxRLsm0ZuFJ0cakczF6NkCsa%2F5DDUPGzDtBPKt1MevMnBF%2FefIXXl1R2wdW77E9rh8OCPtFswcy8jpUivh2%2B24yB0JAwrG7oN9r2jA4cVEJtsFLJl%2FtVfUQuDX7fZjPipQ3q8gJ9SxQ00kCGMuierNesZnQj2hN3FIxsC1IiLOCh3Fv2aAd6OwnspFX%2FRJ%2BSaZswYFmBTTLh4mnh4kOK%2FdPiNaRvBsxa%2FgcMElqPjimkutN2MX17xWPj6GqhFbpzkE2QhL2L3B%2BS8nfTJmEkRcs8oJorAXSGtwZXzIRN5WGknTL08q7qWNvYHOXGsTPKpg%2Bc6jx1Unf5etRgafeWfEAjSzJYOQj3uGmSeCcPsE6YOpap7F66NZ1h%2FAI9DK5mCOltmnH5wWDbFRj6dIadQ3jzlG%2FzS829y%2B7%2B6os9Gh1fQg8cKA0qj6MOaNwsEGOqUBPXeUMBkJE72vLKtI05f%2BKUQe%2BP%2FuhGsOw%2Bsnd%2F%2Bcacr9j%2FSiiKszQv39uIVGzrAL%2BbMBFIqI71V0N55KfkmNsOoZD9OjbRSCzYWrnitIs%2FIKxE21kT7NFPDK5rP51WVhwLgtEDrU8qgByhnrSM%2BHCTLqokxALUslJz4KC0zkGqK9IHkHlDyh6r8WQkgT74Ws0RZALiVvGCCWPshwcgK9rXfEw48D&X-Amz-Signature=d408c42c92f62268acb674fde4875eece94b57fd81857a627c739633fbbb88a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHJ65ET%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG6cFc%2F91dVv69xQ20F%2FJUTaJxfRwIUS8Qn8RPYz%2FknhAiEA3JjINJfaoBXMix3InfJKgNyAXG2EyhLDvMBSowooQOwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzQcYc5EIhrWPE9mSrcA5SqIax53PpzOS8wQBREZldYAyIxb%2B8aWQ6D4Gqpxudu3SeL94ARjpLI6n%2BvlU9m2Pm4CxwqVhvwzQNBfb8HYX9CnnSmCBDfpuaITMhMSMUOu3seVC2cqeYDleWST%2Bb6DCsA729BM4TrpcQiJlZp4dTTW7Woto3s0GQbMn86gjJ2aeMvfRcOh%2BAcFpu%2BRXYBi0VB3YCxRLsm0ZuFJ0cakczF6NkCsa%2F5DDUPGzDtBPKt1MevMnBF%2FefIXXl1R2wdW77E9rh8OCPtFswcy8jpUivh2%2B24yB0JAwrG7oN9r2jA4cVEJtsFLJl%2FtVfUQuDX7fZjPipQ3q8gJ9SxQ00kCGMuierNesZnQj2hN3FIxsC1IiLOCh3Fv2aAd6OwnspFX%2FRJ%2BSaZswYFmBTTLh4mnh4kOK%2FdPiNaRvBsxa%2FgcMElqPjimkutN2MX17xWPj6GqhFbpzkE2QhL2L3B%2BS8nfTJmEkRcs8oJorAXSGtwZXzIRN5WGknTL08q7qWNvYHOXGsTPKpg%2Bc6jx1Unf5etRgafeWfEAjSzJYOQj3uGmSeCcPsE6YOpap7F66NZ1h%2FAI9DK5mCOltmnH5wWDbFRj6dIadQ3jzlG%2FzS829y%2B7%2B6os9Gh1fQg8cKA0qj6MOaNwsEGOqUBPXeUMBkJE72vLKtI05f%2BKUQe%2BP%2FuhGsOw%2Bsnd%2F%2Bcacr9j%2FSiiKszQv39uIVGzrAL%2BbMBFIqI71V0N55KfkmNsOoZD9OjbRSCzYWrnitIs%2FIKxE21kT7NFPDK5rP51WVhwLgtEDrU8qgByhnrSM%2BHCTLqokxALUslJz4KC0zkGqK9IHkHlDyh6r8WQkgT74Ws0RZALiVvGCCWPshwcgK9rXfEw48D&X-Amz-Signature=79f542c5002c208b5dd8cb8f32f2ece0bf917ad613cd059f75255d1d69598be3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
