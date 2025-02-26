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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKMHVB4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBQxzbV0A5%2Fl0NTWq%2BOZRTBdkCePwxWNwbMzkgF5qISdAiAVUNKSq02SVPRL2WnY%2B%2BKsh0qXLyKh%2F4IT%2B4VOnAwCTir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhc7uui2Olhnj%2FYz6KtwDZpiEvSQbHAfUnpXVHAp8L0ERbT0Iq1e8AlZfHULt7iIWqAXX8AfJp3P%2F8HE2j1lJFLbXTjvcVC7%2BBNlypmHmxjmvXh1UcdZK%2Fl%2B46aTm2Fqncs7B11wAsQ7HbZJEs%2Bgrnyqup%2FK5LZwAq6%2FLQayTijbN9QgbaObs8EJxdceI2uIj%2FDYpcu37XFgj1bGCa67OBksviG0xeyBV2V1iWpKpwIglhq9Ik15J%2BPBG%2BAC%2B5fx2ZNYw7x42wF4%2FBkJvseC8S7u3vHmRGxVozdTZ%2FOSTCwvue0374%2FrFbyXj0IAcZgIxOojO98yymdBvSjqtdhppRwRWsUc20ZCMlIc9FHvvCLx1%2FqYiWbiCiD5xEsVqpR2E85B%2BefTABzuVbo%2BkjDDxzK3IcfwoqRteTlOd7d4U1zX0zEvbl09TbwD250c%2BcoTvmoeQ4Feu0RMAUOL52aLizpoMsvgxjdjdcfMbUkgogKxFCe8hx6fec9GCl%2BaehsrWXe0DtlMFpfrro6NZLoF4sMfmDA8Dy0KIoZfhVyCp3R7aPUUB2jpR50fa0Sxz8lB5%2F%2BjxBypC4cObc9mAMfN68sNwFRDEjNuT3OrJgFTLrSVyPtlFavnj1jWC2mQKqbsCMif5gK8hwG%2BOTsIw5of8vQY6pgEMUX%2Bh2cfhQozP3rAJRkEuTHQiSrHCoUK6YARoSEdnMGeF8uDI2xt%2BBTusUcS9lPZyi6tyJf2yEE0tOHgEHtHmuJtboU82I1R2rA1qZ8qYcDX94vR8A315hElKbN5IT%2BvRUA2bfNfyt3g1TjTRsfwIYh1rCwIL8f0ZmdBM9YZScfQcy40meE07ZJklg4GoeiKkIECGxNTdGmekbtsmFqizYoQ3VpK3&X-Amz-Signature=ec4f0dada6dd2920479b2360251b599ac5392fa0a974d3764fd908443edf7f50&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKMHVB4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBQxzbV0A5%2Fl0NTWq%2BOZRTBdkCePwxWNwbMzkgF5qISdAiAVUNKSq02SVPRL2WnY%2B%2BKsh0qXLyKh%2F4IT%2B4VOnAwCTir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhc7uui2Olhnj%2FYz6KtwDZpiEvSQbHAfUnpXVHAp8L0ERbT0Iq1e8AlZfHULt7iIWqAXX8AfJp3P%2F8HE2j1lJFLbXTjvcVC7%2BBNlypmHmxjmvXh1UcdZK%2Fl%2B46aTm2Fqncs7B11wAsQ7HbZJEs%2Bgrnyqup%2FK5LZwAq6%2FLQayTijbN9QgbaObs8EJxdceI2uIj%2FDYpcu37XFgj1bGCa67OBksviG0xeyBV2V1iWpKpwIglhq9Ik15J%2BPBG%2BAC%2B5fx2ZNYw7x42wF4%2FBkJvseC8S7u3vHmRGxVozdTZ%2FOSTCwvue0374%2FrFbyXj0IAcZgIxOojO98yymdBvSjqtdhppRwRWsUc20ZCMlIc9FHvvCLx1%2FqYiWbiCiD5xEsVqpR2E85B%2BefTABzuVbo%2BkjDDxzK3IcfwoqRteTlOd7d4U1zX0zEvbl09TbwD250c%2BcoTvmoeQ4Feu0RMAUOL52aLizpoMsvgxjdjdcfMbUkgogKxFCe8hx6fec9GCl%2BaehsrWXe0DtlMFpfrro6NZLoF4sMfmDA8Dy0KIoZfhVyCp3R7aPUUB2jpR50fa0Sxz8lB5%2F%2BjxBypC4cObc9mAMfN68sNwFRDEjNuT3OrJgFTLrSVyPtlFavnj1jWC2mQKqbsCMif5gK8hwG%2BOTsIw5of8vQY6pgEMUX%2Bh2cfhQozP3rAJRkEuTHQiSrHCoUK6YARoSEdnMGeF8uDI2xt%2BBTusUcS9lPZyi6tyJf2yEE0tOHgEHtHmuJtboU82I1R2rA1qZ8qYcDX94vR8A315hElKbN5IT%2BvRUA2bfNfyt3g1TjTRsfwIYh1rCwIL8f0ZmdBM9YZScfQcy40meE07ZJklg4GoeiKkIECGxNTdGmekbtsmFqizYoQ3VpK3&X-Amz-Signature=739b24d98926c0e701a88cc672e0e6b97f47f55fdafca955cf304afe1b21ff95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
