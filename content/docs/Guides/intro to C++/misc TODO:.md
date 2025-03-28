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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTQZF665%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvJSrQE6boOKZ2FyIVkEcd7oe0Fq%2B%2FxcdVo0KSWCs5WAiBJwUDmAWOt0lQ%2FGlhwkBO4gUy4Paz8yJR1Ah5EEUlBhyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4Th9pMsBGVz9X9k3KtwDnuJgundbox2rPrNvOnMhiUtrEuqMx0Uz47y%2ByTfhcxHmT%2B2qHpKEF74WVccpZol4pSy1rNOD90x%2FDPNLYxTVipHoz7P0Iui%2Fq8Pbguzu%2Bwi8Tr3DhULSdpH6gTvQDODyJCqjKIibCUx4PHNpEp5QJs1fU3eSwiyeCOJ34G5wjYdGn9Dv%2BpuSASy8dNxlg3x60AZqzGr6vSrg7yqAavlxughVIl0OTPafEBiGCyCezpVwnl%2BQm%2FRRZzNu3zb2xWEyW%2B6fTg5un%2FFAOtbV44Hmw3KB5XTIEW%2FesmOMBO3AYD%2FkYhmvvLvVKJZ8aaoSxTj%2FYIosHA%2FxvHZFsE5xi6cHVYtYZzMXeOjARaVEB82GI4TXxqxPrlYznId4JLbrwTIHICCi9QJ39iitYXuSwABHnhx%2B9dk0QA3VbEsKLyHe8JIVR7CD%2Boo6M2sw4OQ2AJzi%2BBqc3S9Em4Xz3LFsZpM%2FlNxablZdlfMcOwC51PLJng6OsPUFYIvqBa2UpFadMI0C1lUGsAD5cf%2FvoGq1nQJu%2BJa3tubgSQxgxVpW4s2FpYf6Xdg8nSEfpURSTtQOvtO15zPx9EqnURA5yAknPSRO2xBDxldJo9d1vF7Oh1E%2BjzR4f7w6JUL9GlH3pjgwlombvwY6pgFoTv8Jzx5y9hW43O450N37%2BjFXIbK%2Br%2F%2BZTIdki2daqTZvFePcgpfdCMmjXfNlEWQRIf8cmgUyu%2F%2BgFaG7Phd6J7hAc5x4svR%2BErByi7QnI88c3KaO2llSt2WsCVXfP0mch0rIQTZaLXPtcjn0hClgpTBRBNj0pM3Zthz43%2F3%2Fp6JbMpbPz8DSkxEl3K8wVB6%2BGXlmxnM6Iyj6%2FbqJUCcrYRjOlkKO&X-Amz-Signature=419438dacce6b045d66f42f2d852da95bab56f87b8a474bc2b334d6e3a276a45&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTQZF665%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvJSrQE6boOKZ2FyIVkEcd7oe0Fq%2B%2FxcdVo0KSWCs5WAiBJwUDmAWOt0lQ%2FGlhwkBO4gUy4Paz8yJR1Ah5EEUlBhyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4Th9pMsBGVz9X9k3KtwDnuJgundbox2rPrNvOnMhiUtrEuqMx0Uz47y%2ByTfhcxHmT%2B2qHpKEF74WVccpZol4pSy1rNOD90x%2FDPNLYxTVipHoz7P0Iui%2Fq8Pbguzu%2Bwi8Tr3DhULSdpH6gTvQDODyJCqjKIibCUx4PHNpEp5QJs1fU3eSwiyeCOJ34G5wjYdGn9Dv%2BpuSASy8dNxlg3x60AZqzGr6vSrg7yqAavlxughVIl0OTPafEBiGCyCezpVwnl%2BQm%2FRRZzNu3zb2xWEyW%2B6fTg5un%2FFAOtbV44Hmw3KB5XTIEW%2FesmOMBO3AYD%2FkYhmvvLvVKJZ8aaoSxTj%2FYIosHA%2FxvHZFsE5xi6cHVYtYZzMXeOjARaVEB82GI4TXxqxPrlYznId4JLbrwTIHICCi9QJ39iitYXuSwABHnhx%2B9dk0QA3VbEsKLyHe8JIVR7CD%2Boo6M2sw4OQ2AJzi%2BBqc3S9Em4Xz3LFsZpM%2FlNxablZdlfMcOwC51PLJng6OsPUFYIvqBa2UpFadMI0C1lUGsAD5cf%2FvoGq1nQJu%2BJa3tubgSQxgxVpW4s2FpYf6Xdg8nSEfpURSTtQOvtO15zPx9EqnURA5yAknPSRO2xBDxldJo9d1vF7Oh1E%2BjzR4f7w6JUL9GlH3pjgwlombvwY6pgFoTv8Jzx5y9hW43O450N37%2BjFXIbK%2Br%2F%2BZTIdki2daqTZvFePcgpfdCMmjXfNlEWQRIf8cmgUyu%2F%2BgFaG7Phd6J7hAc5x4svR%2BErByi7QnI88c3KaO2llSt2WsCVXfP0mch0rIQTZaLXPtcjn0hClgpTBRBNj0pM3Zthz43%2F3%2Fp6JbMpbPz8DSkxEl3K8wVB6%2BGXlmxnM6Iyj6%2FbqJUCcrYRjOlkKO&X-Amz-Signature=2f9382cb6844f47930ccf0807fbbb350f67127eb616e910dcb95b299ff9cb626&X-Amz-SignedHeaders=host&x-id=GetObject)

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
