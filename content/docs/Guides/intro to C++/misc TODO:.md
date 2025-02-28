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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZN2T5HN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD3AvKfYhOSs%2FMHxUnwxC7fyUD2niziJh%2FxyR6L5dxGjgIgN2ZvGuKtxlyUjMtxroI8aLydZffYwk7Sh0e5dkE5magqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2l0PpEmnOi5ywC0SrcAyfDRpH1Gv8L5ufkXZEIABxMhr73sxX6YrefyELzu%2BOrgqsXTnZS8Eb3r6XRtzy18u7phlo%2F4kvKzTjT57bFekfruGZgh1IDsEyottH6PDyw2T%2FMKyZT6Tubzg5hBIkRuqmfADFbET%2B1l5AhIvvzd2H8qeRnabEB0cp9fokYQ3gugf6B7i2AGH1VYOXhJdKUC5GmkNvjAh7LKZY%2BlHpAUnGM7el9zC10SLC97NNe4XfAgcHSTjMfrHSCbM2Jvi17hL7%2Byh0YRTzEgu1LlOTHI4935gsIovRx2HS9kjXN7%2BuSueDjAEAukCNUuPlN5lIGmm8LpdU4jeEnvUJU46WCWE2r6nGh49Z6JNDEzgUH6w9SVHXtfCj9SrGTZ9f7CoetUfAyMswYTfSLccivZ5TymfOopq28Qj6hT4NLpvmrFNezyD1UkGSsnR089yGTg8BhNrQBJNLDhu42QryBwIkHSl54ppfaSzDc2Mn3IbbOTaEXA%2BWIxLt81zNGX2H0i%2Fh8BbYoXMaJFGNdwj1bAqahk12m0XgOPpn%2Bo4O6X3JA35ihj9SkFpz11xCJ%2FgiULgEECiPPhC%2FtzBo18gHycQb0OxoocEKa9zrWxgA6EKN%2FFR3fBdxxbMFme4Ge0fxrMLOLiL4GOqUBxdQaN93aDc5Qkl2hlm%2FdjTQ9cbIxpW0QOFtA%2B5XF85bPV0eeytbafFJQBaNPKLzzzvCn%2BQ5onHi36q3hRZNQVosacI907xIamr4Rn3qtgUispytxGiZq5nqaUYuR%2FafCG%2BicMULk9a0rgJMTzb7hn6OCdqSN9EFHiVLMChEviVatJPlFNuDH946KBRcNnhi%2FkEKIYBDv0p4Nemv16FO%2BEkXPWU4b&X-Amz-Signature=1e2ccf1032e4c42e15c95a17dccd38185f80040f9dbc067c8913edaf3d712628&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZN2T5HN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD3AvKfYhOSs%2FMHxUnwxC7fyUD2niziJh%2FxyR6L5dxGjgIgN2ZvGuKtxlyUjMtxroI8aLydZffYwk7Sh0e5dkE5magqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2l0PpEmnOi5ywC0SrcAyfDRpH1Gv8L5ufkXZEIABxMhr73sxX6YrefyELzu%2BOrgqsXTnZS8Eb3r6XRtzy18u7phlo%2F4kvKzTjT57bFekfruGZgh1IDsEyottH6PDyw2T%2FMKyZT6Tubzg5hBIkRuqmfADFbET%2B1l5AhIvvzd2H8qeRnabEB0cp9fokYQ3gugf6B7i2AGH1VYOXhJdKUC5GmkNvjAh7LKZY%2BlHpAUnGM7el9zC10SLC97NNe4XfAgcHSTjMfrHSCbM2Jvi17hL7%2Byh0YRTzEgu1LlOTHI4935gsIovRx2HS9kjXN7%2BuSueDjAEAukCNUuPlN5lIGmm8LpdU4jeEnvUJU46WCWE2r6nGh49Z6JNDEzgUH6w9SVHXtfCj9SrGTZ9f7CoetUfAyMswYTfSLccivZ5TymfOopq28Qj6hT4NLpvmrFNezyD1UkGSsnR089yGTg8BhNrQBJNLDhu42QryBwIkHSl54ppfaSzDc2Mn3IbbOTaEXA%2BWIxLt81zNGX2H0i%2Fh8BbYoXMaJFGNdwj1bAqahk12m0XgOPpn%2Bo4O6X3JA35ihj9SkFpz11xCJ%2FgiULgEECiPPhC%2FtzBo18gHycQb0OxoocEKa9zrWxgA6EKN%2FFR3fBdxxbMFme4Ge0fxrMLOLiL4GOqUBxdQaN93aDc5Qkl2hlm%2FdjTQ9cbIxpW0QOFtA%2B5XF85bPV0eeytbafFJQBaNPKLzzzvCn%2BQ5onHi36q3hRZNQVosacI907xIamr4Rn3qtgUispytxGiZq5nqaUYuR%2FafCG%2BicMULk9a0rgJMTzb7hn6OCdqSN9EFHiVLMChEviVatJPlFNuDH946KBRcNnhi%2FkEKIYBDv0p4Nemv16FO%2BEkXPWU4b&X-Amz-Signature=6134b6b8738a93902bc116a61ef978294694c9ea81858dcf575c72464b5686f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
