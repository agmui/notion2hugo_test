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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGU634D%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGoceqxZ%2BHqZy8ncjdxQ1p8y0PAVPgswy0cbdDKeUJ7hAiALS1%2BII9xgRHHo8%2FnGzKzzwD1Ex38g%2FEwWKQ6HoPuKVir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTYnUKzpLCvwP3%2FYBKtwDlAHBbq1zvCFESn5mvewH7V7tdbdHGrZkpocjPxLORAa98bf%2Fmn1hJbUuT5RuTN2J6t8H8K8nSD5rl9dJZ%2BH%2FJ8OWsFe8x5mHZjJOJnITTFSjNvzZsj65OUfvcQJlnKW%2F8dn8c4z4O7ZElT2%2F4MA1yoX7pACAX%2FbfCiickX5fp2Cfz5M6Hznc6nLsUuBCJL3HxuT5RZj%2FnXJuHKlyEfol6cFQ6%2Bblro6HiP1cgLzAGu3rnSEVdRq%2FRWwzOX4sHforYeSkrAca8j%2FCRwwP9%2Fd4B8MZaSdZDsBvz4mCZ6CxIRCuF0KLIURv%2FQc6pBJt1yuHcC4njbZ2dEcTv0WWSqL%2BkIK1vfX%2Fh0RxbqKpUxscgly2tNTW3fzJZnJaS5HdHjplX8zao3Hu4VT6pfAtAUN5xYMikDKnSVxZS79BiZ%2BqMhQq5HdR4yrdJMO7TPUxhwi%2FyNDVxMF8xJ3w7fKvnR2R%2FY7FIqAwhfz7Mep%2BFuLladcuZXULMhIT7Fe4a0WsjEzm3cHieo%2B7D3eon4XaV%2Be0LTCkXZpG0a9y6%2FJcijepNJgHiaqp4clqiGEsbSoILE3X0qvEuG%2Btf9ZryvISF4jNR1G244lxSdkhsUCZZQOtUbdsSXZEdJ2ROvc3rA4wk%2FrMvQY6pgExjVU2wrTu%2Fg3EYgv9vuOz2UA1NVuujfVv1Q1bnNnBlP2jm2gMgy7HwJca80S5JImVye4ZvuaFa6nLIoTtbSHvOfRP9W7fDXRupCcTaOMjHXvOGga8FueA%2B6ZrBz64%2BAAT8hf%2BP1NI7TMRoswuQtGWcfZQEyzAnFyvHM%2FA%2BMMlzV6WcWLYESpNqizJw%2Bvps8wbVP8bwz2bSXN7tt4%2Bj1k9A%2By32vHw&X-Amz-Signature=cb1d1c972586068bf4988159e02ca39ea6f9bc8026a538a6e5d8b5163fb91e39&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGU634D%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGoceqxZ%2BHqZy8ncjdxQ1p8y0PAVPgswy0cbdDKeUJ7hAiALS1%2BII9xgRHHo8%2FnGzKzzwD1Ex38g%2FEwWKQ6HoPuKVir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTYnUKzpLCvwP3%2FYBKtwDlAHBbq1zvCFESn5mvewH7V7tdbdHGrZkpocjPxLORAa98bf%2Fmn1hJbUuT5RuTN2J6t8H8K8nSD5rl9dJZ%2BH%2FJ8OWsFe8x5mHZjJOJnITTFSjNvzZsj65OUfvcQJlnKW%2F8dn8c4z4O7ZElT2%2F4MA1yoX7pACAX%2FbfCiickX5fp2Cfz5M6Hznc6nLsUuBCJL3HxuT5RZj%2FnXJuHKlyEfol6cFQ6%2Bblro6HiP1cgLzAGu3rnSEVdRq%2FRWwzOX4sHforYeSkrAca8j%2FCRwwP9%2Fd4B8MZaSdZDsBvz4mCZ6CxIRCuF0KLIURv%2FQc6pBJt1yuHcC4njbZ2dEcTv0WWSqL%2BkIK1vfX%2Fh0RxbqKpUxscgly2tNTW3fzJZnJaS5HdHjplX8zao3Hu4VT6pfAtAUN5xYMikDKnSVxZS79BiZ%2BqMhQq5HdR4yrdJMO7TPUxhwi%2FyNDVxMF8xJ3w7fKvnR2R%2FY7FIqAwhfz7Mep%2BFuLladcuZXULMhIT7Fe4a0WsjEzm3cHieo%2B7D3eon4XaV%2Be0LTCkXZpG0a9y6%2FJcijepNJgHiaqp4clqiGEsbSoILE3X0qvEuG%2Btf9ZryvISF4jNR1G244lxSdkhsUCZZQOtUbdsSXZEdJ2ROvc3rA4wk%2FrMvQY6pgExjVU2wrTu%2Fg3EYgv9vuOz2UA1NVuujfVv1Q1bnNnBlP2jm2gMgy7HwJca80S5JImVye4ZvuaFa6nLIoTtbSHvOfRP9W7fDXRupCcTaOMjHXvOGga8FueA%2B6ZrBz64%2BAAT8hf%2BP1NI7TMRoswuQtGWcfZQEyzAnFyvHM%2FA%2BMMlzV6WcWLYESpNqizJw%2Bvps8wbVP8bwz2bSXN7tt4%2Bj1k9A%2By32vHw&X-Amz-Signature=7da5338fe462530f6329e8e856b9c8cbfdb0c84608e3824d529ee7ccbc774257&X-Amz-SignedHeaders=host&x-id=GetObject)

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
