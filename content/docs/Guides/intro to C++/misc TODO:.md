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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJBTX5S%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk%2FBA7ChVeR6747arBs92UnfVNfx1N8U7N%2FCPivUVIqAiA0VJ%2BCFzxbKG%2Fvjzvf3JAlid4Vcct4kTJGPOTYdTpgtyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZ384s8d%2B6clU5YvKtwDQkRjZj72yIOdZXY8MU0UQvwxA7nf9p2CGbxsshNry7Z7ZS5ZDRQS14k4yRgS14FrV9NBu575bw1wrTW59CY35MsszMgC0%2Bu2LRq3ttGHA4%2FpTg3GH10GHUiZ1EBvhjEyjBROGM3iz785M5hETNRKbEXJF21YVhkYxe1W62kdTY%2FVqHqvDc4P9aTfoAcN8%2FSttAUxBb%2FHNx4hZNvG9nA73XKFkprIZZ%2B%2BH47XuUgxZYo6T6N5UcAXrteEx9Cjz%2F18clx1h7jTEnYdtOhEuAg25zm1IkBNHhMlWQ15IsQu5uUzDKQ9%2F%2FjYAbxUnhUIBl%2BNbwNyThhf8y0kJgVUjqhCa4I4iIuJnTQpPYxBdUUnqmEEMkiYRM7CU9%2BkFs1RuJxsVF7AKX2OqXSJJuqFZgpalxGYHw1T5oZGcXOIxlopCMoi1ubQwWg4eQCJ8Q6SLCj8tFnYOwg3nMroc5o0QuUzS6GokFPEXyIBJoi%2Fv4CFzUJdzu6eTtCipk4am5EfQ7yiy1a9OLcMjfOmu2Ir%2Fn2y31%2FO304SQKIUaQTyPLkI7pIlyGd%2BPzhpgoOJ9bufZnT013Q3hQqHTmAaCnd%2Bgm94LwEWwZnMarViM5VddVuXcAqsgPN4YrP0qCJMbI0wxYCEwwY6pgG4OeCXUh3k2e%2BjgEFitpIYUbZ3%2F1F6KAc3%2FeqfIEgbTzKMKiFLHFXG1m6z0zGxFjmg9O8y309lsSLU9J%2BOUuNzeALEvhNhK94WAwwqURehDcnhoYvx4Dludp%2BFWzkD3GbkgReBMMPMMG76pdMM7QlzwgVWPbQUKVWBAqH%2FV05rncYvgW6zmCM8KK6dfQBupaRDhJ1n9lWRssBFN7j2%2FQozguFVZagq&X-Amz-Signature=47c8f3d7659348d2b4d216e0471743240b5418422ef6b5b6c1fe24e17619bff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJBTX5S%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk%2FBA7ChVeR6747arBs92UnfVNfx1N8U7N%2FCPivUVIqAiA0VJ%2BCFzxbKG%2Fvjzvf3JAlid4Vcct4kTJGPOTYdTpgtyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZ384s8d%2B6clU5YvKtwDQkRjZj72yIOdZXY8MU0UQvwxA7nf9p2CGbxsshNry7Z7ZS5ZDRQS14k4yRgS14FrV9NBu575bw1wrTW59CY35MsszMgC0%2Bu2LRq3ttGHA4%2FpTg3GH10GHUiZ1EBvhjEyjBROGM3iz785M5hETNRKbEXJF21YVhkYxe1W62kdTY%2FVqHqvDc4P9aTfoAcN8%2FSttAUxBb%2FHNx4hZNvG9nA73XKFkprIZZ%2B%2BH47XuUgxZYo6T6N5UcAXrteEx9Cjz%2F18clx1h7jTEnYdtOhEuAg25zm1IkBNHhMlWQ15IsQu5uUzDKQ9%2F%2FjYAbxUnhUIBl%2BNbwNyThhf8y0kJgVUjqhCa4I4iIuJnTQpPYxBdUUnqmEEMkiYRM7CU9%2BkFs1RuJxsVF7AKX2OqXSJJuqFZgpalxGYHw1T5oZGcXOIxlopCMoi1ubQwWg4eQCJ8Q6SLCj8tFnYOwg3nMroc5o0QuUzS6GokFPEXyIBJoi%2Fv4CFzUJdzu6eTtCipk4am5EfQ7yiy1a9OLcMjfOmu2Ir%2Fn2y31%2FO304SQKIUaQTyPLkI7pIlyGd%2BPzhpgoOJ9bufZnT013Q3hQqHTmAaCnd%2Bgm94LwEWwZnMarViM5VddVuXcAqsgPN4YrP0qCJMbI0wxYCEwwY6pgG4OeCXUh3k2e%2BjgEFitpIYUbZ3%2F1F6KAc3%2FeqfIEgbTzKMKiFLHFXG1m6z0zGxFjmg9O8y309lsSLU9J%2BOUuNzeALEvhNhK94WAwwqURehDcnhoYvx4Dludp%2BFWzkD3GbkgReBMMPMMG76pdMM7QlzwgVWPbQUKVWBAqH%2FV05rncYvgW6zmCM8KK6dfQBupaRDhJ1n9lWRssBFN7j2%2FQozguFVZagq&X-Amz-Signature=275cee7da8a536f47298ecde0173bddb7e5400e2fecc77c7e171fbb7ef49858f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
