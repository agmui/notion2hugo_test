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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LOYRL2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAE09urBMLAp%2F%2BU8PMNNYOMQJedsE6ZhY9bOCl24K5KcAiEAgQKyN3Ws%2BtaFr0On6PMsELCkMbywD5cC0nhjjPoqhzEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKt9RzFGe0iUfoi9AyrcAxB6qMT0vyKNGF5M7U11OKTdag1tTTOOqI%2BcZmhrXM3t0YSKYgy0Z8UY5Ui%2BDkJJLA133lI71pVERDoqF6RBfKGm5Pl023Ka96vrsBJbhzNBu2MPfkTdpIvdjwReEqRlJyzHxrbdIt2qoko7aXh427yBFEys7TIffc8%2Fo87poPPADgowJahMyAU7tAVDOp4viZjKeVI2vANB7z10EFpw4CVQ%2Fqc2GrPKTlinNzc%2BjnYW8gP5FrmF8LEMCgLQzSTaNn08WUCowTWB4lajhjjep9tRTCdzGjfUYDSn9J4Q4MQtAvGsqLsenb2HGZfmUC5g%2Bw2ZcSy%2BtBaeh%2FPsyT%2Fs7LvLfybOqv21dCJEvRjfj8R2W2uNuaNnI36Hb6vVOBF4AAnJ2TMSLftXzGklxfx%2B%2BU23cXL5PjDIl9GFfnDkf6hr6%2BTTZXZjPfHE3%2FkbvRhBuYHeIEMpo5rLPt67lSvtH%2BmnyTy77WFF6FzS9HJt7VGlju5v0lIijA8qlN%2FLQJcsPbryAogIONsKr0RYEjw%2BADEelT1EB656bOzTWTYag4WLakw3ngffs3nOl1aVdhtBQl%2FXUo4yPqGjU5dbXpzerOAjYtAvu6zXhbyHQ1hPQFBrxTGQaDMgtaT1%2FcRjMN%2BUzMAGOqUBUg48oE58S%2BaPQj4g%2BFx6yvY5oEC9tyVxtrKjGalBTmQlNK8m52Dj8gq7OHcP2Hb7FJd3cCOpTZzSfA9HhZepZ8MCGuQC2KOYyD65nZq41wnVsXqd0uquWKIkDczAQfvlLoZUvUD7OZaq4C5kjtMyXG9au%2FJZNX4B3CsSIh4pH8xkWxDbiPvcEWgH0G1abSIoqrnZwiqOyWMEl1wg3RJUuC3fIW%2FL&X-Amz-Signature=08ebe65b338a91ef410cb0d1be6406e36bc760d0b0141bd10a510b2de8e2f5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LOYRL2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAE09urBMLAp%2F%2BU8PMNNYOMQJedsE6ZhY9bOCl24K5KcAiEAgQKyN3Ws%2BtaFr0On6PMsELCkMbywD5cC0nhjjPoqhzEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKt9RzFGe0iUfoi9AyrcAxB6qMT0vyKNGF5M7U11OKTdag1tTTOOqI%2BcZmhrXM3t0YSKYgy0Z8UY5Ui%2BDkJJLA133lI71pVERDoqF6RBfKGm5Pl023Ka96vrsBJbhzNBu2MPfkTdpIvdjwReEqRlJyzHxrbdIt2qoko7aXh427yBFEys7TIffc8%2Fo87poPPADgowJahMyAU7tAVDOp4viZjKeVI2vANB7z10EFpw4CVQ%2Fqc2GrPKTlinNzc%2BjnYW8gP5FrmF8LEMCgLQzSTaNn08WUCowTWB4lajhjjep9tRTCdzGjfUYDSn9J4Q4MQtAvGsqLsenb2HGZfmUC5g%2Bw2ZcSy%2BtBaeh%2FPsyT%2Fs7LvLfybOqv21dCJEvRjfj8R2W2uNuaNnI36Hb6vVOBF4AAnJ2TMSLftXzGklxfx%2B%2BU23cXL5PjDIl9GFfnDkf6hr6%2BTTZXZjPfHE3%2FkbvRhBuYHeIEMpo5rLPt67lSvtH%2BmnyTy77WFF6FzS9HJt7VGlju5v0lIijA8qlN%2FLQJcsPbryAogIONsKr0RYEjw%2BADEelT1EB656bOzTWTYag4WLakw3ngffs3nOl1aVdhtBQl%2FXUo4yPqGjU5dbXpzerOAjYtAvu6zXhbyHQ1hPQFBrxTGQaDMgtaT1%2FcRjMN%2BUzMAGOqUBUg48oE58S%2BaPQj4g%2BFx6yvY5oEC9tyVxtrKjGalBTmQlNK8m52Dj8gq7OHcP2Hb7FJd3cCOpTZzSfA9HhZepZ8MCGuQC2KOYyD65nZq41wnVsXqd0uquWKIkDczAQfvlLoZUvUD7OZaq4C5kjtMyXG9au%2FJZNX4B3CsSIh4pH8xkWxDbiPvcEWgH0G1abSIoqrnZwiqOyWMEl1wg3RJUuC3fIW%2FL&X-Amz-Signature=27491329bf9380810da4b6bddc4549fa1d0d87b5a8d13bba526547f4b95f5ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
