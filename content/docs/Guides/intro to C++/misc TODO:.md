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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=c8c39f0ff19aabbdbeb2f3c2e1a8f4f0a5107e1c0a21e3c927e41d786a035d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=0940e124d40457061a742f0278931f76a7786f8abf480f2f1658dff2c7dd97c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
