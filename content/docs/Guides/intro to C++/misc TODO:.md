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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZGROQU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCBXSzkwftBMHRFARN49t2t0wwBFWAzcSP5dxNMu6H2rwIhANXsDBai%2BCJSuYGNtSDPGemcvVJ18mMBAD%2BtWekuMs2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq55OuwTAnrtzlAnoq3AMnO4p0JcfJH%2FUqR0%2BVjmXEWGBOjwSHjDYOPprhIYo4riMMUb0Ya6iE8UVcVTgvCTL7cdc8qTn2BHBVF1kE1MiOdzfZAa2uK3%2F3hRemdUe8Y%2BFa67NvsZnA%2B7Z9%2FmnRQVscaRjRbLMJaXz3CLmJcQs%2BV5DRJ0kp77Tsx6%2BC43AAgISVmJXfdk5eDAPBWDYefKJOWryQuzY2kyCpf5oIzNQ67yeYGMGhAj5hqu2JqfiYu5oWvDsaPGWWnm%2BtFx%2BllLObf3%2FoJDQMiaDyg9mbM38HvOrXbs%2BCRQntw%2FxKNwT1Rl4lpgREVUQ56QhVpVi8eHAdvVY4rwHS%2B6kvg2DwNF4rxgqFHPBzS1J%2B1AnCA3eVTTg2VuxKgPdYUpLSNT%2FXmDFOtpcb94xdg%2FXqJgJMvrntCFQqRPWuSJWHf%2BEQNvOhASMhR97v94KfP1txpLAt0C5%2BLQYN0Fvaf7QxMDmDgTc%2F8AHp1mTnLisRyt44veRk2jmRZlA8GRV1AEXoj5mO3TM1R9ioc2tgjOy7UXc6UwBknVmx%2BqowSV2gs%2FfxyTwgSC8YTdl%2FVEOH%2BhovCTHxgU56MTKhMKuUsNGqCV7Q4KN2PVUkWD8FPe7DMCQ4yJTMXTKrEaa%2BFAG0PvO20TCpgKfABjqkARF3Mtq%2B%2FOTbOJEXO92PXPtABDTHh93C73dE3RqcuX98E%2Fx%2FFzRJxIf%2BclNDxMd7qrWPoddCYdOmtD%2F2SVz4NxDoPK%2BVrOYOV97jP99Cwtcrej201Ya%2B2LrDBzjt%2FTT1I1F3X%2BwQZS91C0VPF8ZiPaaBSxd%2BDvzSWoAcL%2B%2Fu8pC9U8I18htCv31%2BfPKT3YY6Pl6JAM%2BGwwKf7XoF9Qr%2FPOhSUhqX&X-Amz-Signature=cc89bfb91fc3effdbf84f307a498694ea1d9b11ae806c9215ed23c15f00a24fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZGROQU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCBXSzkwftBMHRFARN49t2t0wwBFWAzcSP5dxNMu6H2rwIhANXsDBai%2BCJSuYGNtSDPGemcvVJ18mMBAD%2BtWekuMs2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq55OuwTAnrtzlAnoq3AMnO4p0JcfJH%2FUqR0%2BVjmXEWGBOjwSHjDYOPprhIYo4riMMUb0Ya6iE8UVcVTgvCTL7cdc8qTn2BHBVF1kE1MiOdzfZAa2uK3%2F3hRemdUe8Y%2BFa67NvsZnA%2B7Z9%2FmnRQVscaRjRbLMJaXz3CLmJcQs%2BV5DRJ0kp77Tsx6%2BC43AAgISVmJXfdk5eDAPBWDYefKJOWryQuzY2kyCpf5oIzNQ67yeYGMGhAj5hqu2JqfiYu5oWvDsaPGWWnm%2BtFx%2BllLObf3%2FoJDQMiaDyg9mbM38HvOrXbs%2BCRQntw%2FxKNwT1Rl4lpgREVUQ56QhVpVi8eHAdvVY4rwHS%2B6kvg2DwNF4rxgqFHPBzS1J%2B1AnCA3eVTTg2VuxKgPdYUpLSNT%2FXmDFOtpcb94xdg%2FXqJgJMvrntCFQqRPWuSJWHf%2BEQNvOhASMhR97v94KfP1txpLAt0C5%2BLQYN0Fvaf7QxMDmDgTc%2F8AHp1mTnLisRyt44veRk2jmRZlA8GRV1AEXoj5mO3TM1R9ioc2tgjOy7UXc6UwBknVmx%2BqowSV2gs%2FfxyTwgSC8YTdl%2FVEOH%2BhovCTHxgU56MTKhMKuUsNGqCV7Q4KN2PVUkWD8FPe7DMCQ4yJTMXTKrEaa%2BFAG0PvO20TCpgKfABjqkARF3Mtq%2B%2FOTbOJEXO92PXPtABDTHh93C73dE3RqcuX98E%2Fx%2FFzRJxIf%2BclNDxMd7qrWPoddCYdOmtD%2F2SVz4NxDoPK%2BVrOYOV97jP99Cwtcrej201Ya%2B2LrDBzjt%2FTT1I1F3X%2BwQZS91C0VPF8ZiPaaBSxd%2BDvzSWoAcL%2B%2Fu8pC9U8I18htCv31%2BfPKT3YY6Pl6JAM%2BGwwKf7XoF9Qr%2FPOhSUhqX&X-Amz-Signature=9e2778350749d7e6e1b2e3f55e368205a60cf2c5ad4509b23803b5212927c5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
