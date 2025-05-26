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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M522J6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIE2yYLd%2FkfgLKD1Xz1XEP5pT5cZPueP8JtFpPN9FDgoRAiBRsDfWCGbiU3WT82wh6yW55Q%2B0US5a%2BeCIrruq%2FGq9Nyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdVz9VRx%2B%2BaBfva3SKtwDRs7RUZc9fnd0WqGchwx1sGQ0lREF3Fc8SfVnar%2BW4zlIHFr9O2GMb6hvetEyQdTWRS13i7aMllAx3SkxS6f8yJLadmYSsRkj6vYdl%2FRsJOEfc4GEmXvTTpx4huvaoiHxB5CNDvH0JlkFrDRqccS8hrwCV5Z5Ch0miOgVW31sAfIBpvIVdpjgy9IYI9NQV%2BZfh62mrHGr%2FX46WqYuKcfZ4bUb%2FvZx3bGhYnIiutbLIRRYKV%2FWphm7XDE8CeTA7RyehaITnY8Dex0R1cYCLPmnX%2B8gphnEVFpM60zQ9cvGO%2FFBXuXkRBoUmalEY5xAwf4vTZzjJOdVcvSKCtdVvWJN6cp4aAxEMYeG6jVhHvGP6Tw8ZlAnPtRh9FUJe8Eh2dgT7XzrYyHQUAIDANXxr7acB01tc3blo%2BMMm2jaUs0N2OEdeZCeZuP64T5mu28eXr4uUTG8UQolqi4OUk9wqp4j0RsduRC6lGae2%2BQ4UXnpva8jP0NdeAiG5tCf51lTW1b4LND2l5NO9SSG%2Fj6ZO3J3gd39zLxD3%2FiXNbyhc0urBr%2BRrtWMtSd9GCl%2F%2FlNTIp24ubNZyzu8ZZs9nb5v%2FvdAU%2B8Gm6tFsg2T49xqvSPJrmc44Lse8duRx3X8xAgwk%2BbRwQY6pgFYGUpqTt%2Bjo3yXU1koDW2EivUn6DzXSHyWL7ciQ1eDRIGzmwqSDzsqx%2BJlF%2BcSd6pEvfixZXt2eOBCHdpAmsQGFnysagaY76NhNhAGkzIGsEIe%2BTt0IZv1kMEKPiuszxWRnYsuYNoMUs9tlP3tLwP9uem3TA3raGDF9AMU0uS4ZQOL2%2BD3mW43gQ8EMEiYAFXSQTJltIuANVUCpszkOl%2FjrzuA7KfD&X-Amz-Signature=52e5890045b63cf1128d1b170cb1a58f1b10be26265a42fe973345621905527d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M522J6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIE2yYLd%2FkfgLKD1Xz1XEP5pT5cZPueP8JtFpPN9FDgoRAiBRsDfWCGbiU3WT82wh6yW55Q%2B0US5a%2BeCIrruq%2FGq9Nyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdVz9VRx%2B%2BaBfva3SKtwDRs7RUZc9fnd0WqGchwx1sGQ0lREF3Fc8SfVnar%2BW4zlIHFr9O2GMb6hvetEyQdTWRS13i7aMllAx3SkxS6f8yJLadmYSsRkj6vYdl%2FRsJOEfc4GEmXvTTpx4huvaoiHxB5CNDvH0JlkFrDRqccS8hrwCV5Z5Ch0miOgVW31sAfIBpvIVdpjgy9IYI9NQV%2BZfh62mrHGr%2FX46WqYuKcfZ4bUb%2FvZx3bGhYnIiutbLIRRYKV%2FWphm7XDE8CeTA7RyehaITnY8Dex0R1cYCLPmnX%2B8gphnEVFpM60zQ9cvGO%2FFBXuXkRBoUmalEY5xAwf4vTZzjJOdVcvSKCtdVvWJN6cp4aAxEMYeG6jVhHvGP6Tw8ZlAnPtRh9FUJe8Eh2dgT7XzrYyHQUAIDANXxr7acB01tc3blo%2BMMm2jaUs0N2OEdeZCeZuP64T5mu28eXr4uUTG8UQolqi4OUk9wqp4j0RsduRC6lGae2%2BQ4UXnpva8jP0NdeAiG5tCf51lTW1b4LND2l5NO9SSG%2Fj6ZO3J3gd39zLxD3%2FiXNbyhc0urBr%2BRrtWMtSd9GCl%2F%2FlNTIp24ubNZyzu8ZZs9nb5v%2FvdAU%2B8Gm6tFsg2T49xqvSPJrmc44Lse8duRx3X8xAgwk%2BbRwQY6pgFYGUpqTt%2Bjo3yXU1koDW2EivUn6DzXSHyWL7ciQ1eDRIGzmwqSDzsqx%2BJlF%2BcSd6pEvfixZXt2eOBCHdpAmsQGFnysagaY76NhNhAGkzIGsEIe%2BTt0IZv1kMEKPiuszxWRnYsuYNoMUs9tlP3tLwP9uem3TA3raGDF9AMU0uS4ZQOL2%2BD3mW43gQ8EMEiYAFXSQTJltIuANVUCpszkOl%2FjrzuA7KfD&X-Amz-Signature=7623427276b2c7d991866d1587599acecc55855843541424e39ccef8695b8023&X-Amz-SignedHeaders=host&x-id=GetObject)

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
