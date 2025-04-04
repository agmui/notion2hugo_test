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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36TPHT7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqIx5ecVduwVft0TcnM6%2Fdpm7T2jg%2FKcN8iozuHa9g0wIhAPEy%2Bn6tG90Z66bLHYfgE5w7SNuOTtb%2FFuiDF3H0RU00KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhRv6UpT2JOvjpecq3ANzWqTF3PvmTfu65ghM2fULNIaakKzmy4yp6mSvTJ1hZqkrGwO7U1TOOrHysFGNHrhRoVlhOyNbDeX9FVZCdyLuGIstySin%2BDeDFXTa9hdsaOaRQn2zPQ5bo82ErCmuxGnkUG4VW1hptUCi%2BcPC3NZDeMWdkpJARj9BvRv3HyEop3FtlzqK%2FKlIFqy1f7d3BEA9uC%2FIwIZCgHnSz7LzBVp%2BatqAjaSvBCMVltsT9dU5PQ3zvCAdb%2BfPwpCsOR%2FvOIbZOJjg%2FfapHd153eR%2BPTAl5llr5caMl8sKUuCLuR5WgLLIYw3r73eGnWYlS8pxWeFrqyMw4BcOdlY1dwkjVbZ6HOh0S0YiuUlOo3PvSc0mBQyqjkAGf7rVr0arb0UYE%2Fk3lTqWvTCHmCuXgHezV%2B%2FTbkz9LBhoUkP1K71glZjiGMK%2B9ZhBxS4%2FBAOcnH84dy%2FEQlonpuhnuCs%2BcTAuTK8tcOLC7%2FATZ3%2FgmUOR78%2BjGJ6%2FYr3jJhhjjey6%2BUFfyF00OUPF3ipoUX0Yc10ttWyOWhaet3kKxkr3AzP9AB3NQAtINt78kra6ddhbL09HFoEQ5IHMWSsZj%2FCKu2m0h4zsl3mbFXOjJJXwMA%2BITVXXTypyZ8WIG8FTDKnQdzCW6by%2FBjqkAYfZXLjXB1Ju0upxp%2BOz7rw%2BypT%2FSg3cjamTSMCvdtzD2u%2B4e4V8dQqv4kM4tDc6gSJWLqe5zK38cYLP7EELxyos8c%2BkgTGy1QjpDUdwHpLAnduDczeX%2BEz554szeffGoydB7AMls1sybuA03e5B8V26n06q1oH8BaBA3NN3kK68cGEK%2Bpkqjugeg79fG9NbovQzlsf2lJkixhvkC%2F5oWGXYK8Qg&X-Amz-Signature=58bef2fe68fe2f062b3ef08252b55b48c2bb2b301e3728fcd19b164e58f56755&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36TPHT7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqIx5ecVduwVft0TcnM6%2Fdpm7T2jg%2FKcN8iozuHa9g0wIhAPEy%2Bn6tG90Z66bLHYfgE5w7SNuOTtb%2FFuiDF3H0RU00KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhRv6UpT2JOvjpecq3ANzWqTF3PvmTfu65ghM2fULNIaakKzmy4yp6mSvTJ1hZqkrGwO7U1TOOrHysFGNHrhRoVlhOyNbDeX9FVZCdyLuGIstySin%2BDeDFXTa9hdsaOaRQn2zPQ5bo82ErCmuxGnkUG4VW1hptUCi%2BcPC3NZDeMWdkpJARj9BvRv3HyEop3FtlzqK%2FKlIFqy1f7d3BEA9uC%2FIwIZCgHnSz7LzBVp%2BatqAjaSvBCMVltsT9dU5PQ3zvCAdb%2BfPwpCsOR%2FvOIbZOJjg%2FfapHd153eR%2BPTAl5llr5caMl8sKUuCLuR5WgLLIYw3r73eGnWYlS8pxWeFrqyMw4BcOdlY1dwkjVbZ6HOh0S0YiuUlOo3PvSc0mBQyqjkAGf7rVr0arb0UYE%2Fk3lTqWvTCHmCuXgHezV%2B%2FTbkz9LBhoUkP1K71glZjiGMK%2B9ZhBxS4%2FBAOcnH84dy%2FEQlonpuhnuCs%2BcTAuTK8tcOLC7%2FATZ3%2FgmUOR78%2BjGJ6%2FYr3jJhhjjey6%2BUFfyF00OUPF3ipoUX0Yc10ttWyOWhaet3kKxkr3AzP9AB3NQAtINt78kra6ddhbL09HFoEQ5IHMWSsZj%2FCKu2m0h4zsl3mbFXOjJJXwMA%2BITVXXTypyZ8WIG8FTDKnQdzCW6by%2FBjqkAYfZXLjXB1Ju0upxp%2BOz7rw%2BypT%2FSg3cjamTSMCvdtzD2u%2B4e4V8dQqv4kM4tDc6gSJWLqe5zK38cYLP7EELxyos8c%2BkgTGy1QjpDUdwHpLAnduDczeX%2BEz554szeffGoydB7AMls1sybuA03e5B8V26n06q1oH8BaBA3NN3kK68cGEK%2Bpkqjugeg79fG9NbovQzlsf2lJkixhvkC%2F5oWGXYK8Qg&X-Amz-Signature=2654ede69e9a6b94a78ffe2657386dba526c6c1b29fc6342ad6f312001acba5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
