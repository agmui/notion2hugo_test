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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6SQQ2X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFzefVuxePt3EI41iDeKCDMpQrbGiKzA4U2kwvqMYViyAiEAs1yYDehgFZGCUzQGrLVivYTwNA0mfl2YQ2Il4rXvX28qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6ocQbiSyefPUzwVyrcA27FpWhIOaLVwPr1FXoeetdOgaK6pwzCksXG0%2BdGhf%2B6n%2Fz1wMQBlSZgzU%2FKWtGhHhtaj58ckqI7zaSfNWhHFXPnUpLbIq%2BcCspUA5B%2B9T4kuliAi%2BDnX8EcXHcPknA6m2E9mFp%2BP9SMiG9QMYCYMirjlu5q%2BiA8GZyZwzC%2BTD%2Bu26i%2FH60ksDSr%2BU2LMNGB0flwkA1XPrLcDY1L3YctMyc3g3jnpVySJVGjoY2N07FMTdSTnHrT2nwxZwgbs%2FpCD6%2FOnUm2Mt1e0dmAaR7%2BcfYGUHxYK5%2FQ8vXh%2FZr3XIYnM7DhvRsM2fkHjF%2FGPCPXSCb0NmaDjlYb8b5JWhsrXXw%2FF9r8UQ%2F%2FFqHZD9sGHGYYFH3jeCJcSumInWdhXxkKzdDXJT3a%2Fl8%2BNpS9%2BFuGKeOFAfIT2Bvb%2F%2FJ%2F3v8Pu6d73XopmpcDyssUW9T3lfcfzFqOr8CJBAMqUfJofubhocxwGJolYaKTZ%2B8u%2FPuGzEGlOXjmCo3zGJHXAbTiMomhHxBCMJYaFSlZ2oqOSfj6dafCAsoxVVqUTRIsjaqBKwU%2FuRwp5ypeH%2FcKZcnsM5JHqzac%2BmCbrHtJ78FOIcOO4VrJHmMV7%2BAmY%2FENmj3JmPQon50myoUp%2F96Vwnh5MLvTpb8GOqUB80JVd1DX6LLKo5zKEr6qT%2FVSa9TEZfeLiHudSFFZkshB%2FVB2VhRWAtXq3rFjZ2aRnJjr5KDa9O4WB0jFA%2FyYupQ2pOwTPxhv3WMgwt52cSzmlkPTte0us7MXc7XLEhYeMMqPaGGP7zq9t8BP%2BKBz9zQr9hoVpK4yrC7NplIb7R9lIckuziiS4b8Y1T8l346BIuaA7WX%2BI%2FraS2pGzxgXs6qrQV3X&X-Amz-Signature=37209b6e3705d742f26354bdc1cae54a5e540dba78952c61bbe544c050ffefd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6SQQ2X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFzefVuxePt3EI41iDeKCDMpQrbGiKzA4U2kwvqMYViyAiEAs1yYDehgFZGCUzQGrLVivYTwNA0mfl2YQ2Il4rXvX28qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6ocQbiSyefPUzwVyrcA27FpWhIOaLVwPr1FXoeetdOgaK6pwzCksXG0%2BdGhf%2B6n%2Fz1wMQBlSZgzU%2FKWtGhHhtaj58ckqI7zaSfNWhHFXPnUpLbIq%2BcCspUA5B%2B9T4kuliAi%2BDnX8EcXHcPknA6m2E9mFp%2BP9SMiG9QMYCYMirjlu5q%2BiA8GZyZwzC%2BTD%2Bu26i%2FH60ksDSr%2BU2LMNGB0flwkA1XPrLcDY1L3YctMyc3g3jnpVySJVGjoY2N07FMTdSTnHrT2nwxZwgbs%2FpCD6%2FOnUm2Mt1e0dmAaR7%2BcfYGUHxYK5%2FQ8vXh%2FZr3XIYnM7DhvRsM2fkHjF%2FGPCPXSCb0NmaDjlYb8b5JWhsrXXw%2FF9r8UQ%2F%2FFqHZD9sGHGYYFH3jeCJcSumInWdhXxkKzdDXJT3a%2Fl8%2BNpS9%2BFuGKeOFAfIT2Bvb%2F%2FJ%2F3v8Pu6d73XopmpcDyssUW9T3lfcfzFqOr8CJBAMqUfJofubhocxwGJolYaKTZ%2B8u%2FPuGzEGlOXjmCo3zGJHXAbTiMomhHxBCMJYaFSlZ2oqOSfj6dafCAsoxVVqUTRIsjaqBKwU%2FuRwp5ypeH%2FcKZcnsM5JHqzac%2BmCbrHtJ78FOIcOO4VrJHmMV7%2BAmY%2FENmj3JmPQon50myoUp%2F96Vwnh5MLvTpb8GOqUB80JVd1DX6LLKo5zKEr6qT%2FVSa9TEZfeLiHudSFFZkshB%2FVB2VhRWAtXq3rFjZ2aRnJjr5KDa9O4WB0jFA%2FyYupQ2pOwTPxhv3WMgwt52cSzmlkPTte0us7MXc7XLEhYeMMqPaGGP7zq9t8BP%2BKBz9zQr9hoVpK4yrC7NplIb7R9lIckuziiS4b8Y1T8l346BIuaA7WX%2BI%2FraS2pGzxgXs6qrQV3X&X-Amz-Signature=1daa4966bdc77cb6335e7694b69faeb9cc6201e4e43a9f428b2d9befe4bf9114&X-Amz-SignedHeaders=host&x-id=GetObject)

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
