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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4NGWVT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsyU%2BaFNuw%2FfDrf9l5S%2B2moy4ZyqEvxKvCL2IogckeXgIgMbUKU%2FwBJPfWFglrG7ExOjLjmswSWx8DGpA59aAQU1gqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHcnkgN07J0Xzx85yrcA9o%2Fw4nhOh%2BUCmMJkEaNJYP0%2FD6JazktGUMk6gKwtIs69agx6Rhu5CeP8J1QLQYzI41elwTPBT0v3KTa9FMsfPlR6xZFmP%2BkBHfN5hh1TOr8vwq34zR8sRrkQZ2oRD3LxBbtyGk3Jg9FrT6QVElVtHo99COLjWZAi6HywtaUASajC24heNZdd8A%2BpBP4EAvQhuuT%2BfbAOHM%2Fc%2F9SDdIc4K33joFqFJjcXV06jqWop846zPgvDiWpLfMH3zbe1h19Wv9UiHSPv9q9qyLBqOiPDvKY8Ewz8qYQWWBAYb6vsk1EizXlrJwUy4B5wA%2B3Fgx%2FZQAe7pdNFaC6p7bBbUxZ3Vu6hn8QxNM3vHkJPKNWVTfVA%2FKXA0XE3Mx%2BzwmqebgbooHnqR5%2Fjh9PcLIUnewzv6SgKffn%2BFGgiqgjlA14dGPy1aI8Sr%2BvC2j3uO2OfVHnFopkKjRUCkiyp6Ww57wvJrcmeEhJ4rBYBXRccC1oXbqP7uqGpwJhZv3sO62jMbzGJw6P%2BGJYVGRHQazkyFeiu73i34yE1g3JfYOlBHSPzuIAAopJPpdRdU0W1HGpfejJrASAitkztSyVGtXkYr3pDSn%2Fyw%2FPwY0AsV59AlHiRcQUbxWDqEIxjcvjR0FbMNCLz74GOqUB2BY9MQjsF9GB4zYO2eCDvRZ9qjtdRlNeZyYStAqNIm22e%2FWR8O1KhoktDbvWJv9K7gSCGQakxT1dNFf679c%2B2ROlirJg3PkzlpZuYZ5%2Fq7%2BXG%2BuvxPLkWtMtq0jcyPRbzA01jFSTco6I1v6RBezXyjdeu%2FxNHUNNgKa1FobJM448Wl%2BHCpbcb3ZZ1Rv9%2Bmu9i36h%2BZsv5eNSV9LUK6FB4mCUb4U9&X-Amz-Signature=78fcf6edef48416fc5948c40c45b08de5bd433e9aee197e5add6d1e7a0dbd15f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4NGWVT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsyU%2BaFNuw%2FfDrf9l5S%2B2moy4ZyqEvxKvCL2IogckeXgIgMbUKU%2FwBJPfWFglrG7ExOjLjmswSWx8DGpA59aAQU1gqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHcnkgN07J0Xzx85yrcA9o%2Fw4nhOh%2BUCmMJkEaNJYP0%2FD6JazktGUMk6gKwtIs69agx6Rhu5CeP8J1QLQYzI41elwTPBT0v3KTa9FMsfPlR6xZFmP%2BkBHfN5hh1TOr8vwq34zR8sRrkQZ2oRD3LxBbtyGk3Jg9FrT6QVElVtHo99COLjWZAi6HywtaUASajC24heNZdd8A%2BpBP4EAvQhuuT%2BfbAOHM%2Fc%2F9SDdIc4K33joFqFJjcXV06jqWop846zPgvDiWpLfMH3zbe1h19Wv9UiHSPv9q9qyLBqOiPDvKY8Ewz8qYQWWBAYb6vsk1EizXlrJwUy4B5wA%2B3Fgx%2FZQAe7pdNFaC6p7bBbUxZ3Vu6hn8QxNM3vHkJPKNWVTfVA%2FKXA0XE3Mx%2BzwmqebgbooHnqR5%2Fjh9PcLIUnewzv6SgKffn%2BFGgiqgjlA14dGPy1aI8Sr%2BvC2j3uO2OfVHnFopkKjRUCkiyp6Ww57wvJrcmeEhJ4rBYBXRccC1oXbqP7uqGpwJhZv3sO62jMbzGJw6P%2BGJYVGRHQazkyFeiu73i34yE1g3JfYOlBHSPzuIAAopJPpdRdU0W1HGpfejJrASAitkztSyVGtXkYr3pDSn%2Fyw%2FPwY0AsV59AlHiRcQUbxWDqEIxjcvjR0FbMNCLz74GOqUB2BY9MQjsF9GB4zYO2eCDvRZ9qjtdRlNeZyYStAqNIm22e%2FWR8O1KhoktDbvWJv9K7gSCGQakxT1dNFf679c%2B2ROlirJg3PkzlpZuYZ5%2Fq7%2BXG%2BuvxPLkWtMtq0jcyPRbzA01jFSTco6I1v6RBezXyjdeu%2FxNHUNNgKa1FobJM448Wl%2BHCpbcb3ZZ1Rv9%2Bmu9i36h%2BZsv5eNSV9LUK6FB4mCUb4U9&X-Amz-Signature=8e3f5f6edaec8a4de6e953e4f5097235bf8561ca45df876a0dbb86fe7b1684e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
