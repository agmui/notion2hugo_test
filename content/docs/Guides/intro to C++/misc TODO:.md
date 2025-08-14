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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMPRKYZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQChODLhL9bneBbhZN02Ge5SktWG7KRvmHlYEJZ6nUHMdwIhAO%2BbTNZKtWed92%2Bi6D5YTQGLMpFncok7O8pezIO6tu7GKv8DCE4QABoMNjM3NDIzMTgzODA1IgzWC%2BYU%2B7V1X%2BYCC0Qq3AN6P%2FNfQiWzzQ5fea6%2F7UpUm6ZuaehA0Uh2OyEglRRl2EW8NvUmQqDiaXZ26rWhirlS8j17ELdmfr8RLx%2FB9pTv%2Bj7Hhkv964hGKX1okoAYcrQ9roJLz562x8ZzQYjWKTM7Z%2FcGQlcddrEXzzA7LUs6qPe6B4M%2FGRAQ4g7DIyuhRoeNY7mwjkDLIGHrAl8fFzEcAP8%2B4%2FlFZFMGvIbi9ayDV8f3xPH1UgsIC4JcAqLz5OE27yie1jRO4D3QP%2BSwpgWIWtT8vVko4TMeoB8gLmGY1R03eVG0%2BibG8DezwPWO0%2Fvx2dWmuhYIPmI4YdjLHhcfSuo3VA5LgKXq7D1y8DPURXRayCCi%2BqiEwVmcDomZGNHMcLeRi58WYRG6QvFK%2FMFYHxNtLW24ahMnnkNoRXJNrXT%2BHfAdD%2B4lOPpZBqb6aK%2Bl%2FULuYBxfJrPJnBjIYBvux76o6zKF2kdQvRVStrl0c7O4UoHLGtADu9xF2esY64JXBkVqrHeNfgAVzVJ%2FOJS5oI%2FTBREq9eFYNtGqfMd15JBf%2FVoyQjtaOhmHVUFzHynlYx4HlMzvFTCQE3VUO5H%2Bexh36MlXH12osnMTSbZAa0HLx1DERGGfANDjmh4nZSwJ8MzfddKHRfLwejDBjfnEBjqkATnhRpjxdEvNQ0uxN%2FQUkD50n1iCbCZiXZez%2F546ix0J%2FbTKCpUrHyGasxYugnfvnSQxs%2BfAdV8Uz3QD3Jzw07aCF1cmmaJHNOzjxcbA98CJxRtqmDCXyhYaonextzf94eZ%2BHJm4RA%2BlBbHxW0PSF03dCmMlUpjT7ppd9uDM3l5ilyR4Oe%2B2uKgx%2BNSey4TyZop5zVFkCfhxc6BgFBSoZQ3S%2BW7A&X-Amz-Signature=ac379b7281008c902415d5dda4fc36f758a35509fef7174eb4e0db1d9463d306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMPRKYZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQChODLhL9bneBbhZN02Ge5SktWG7KRvmHlYEJZ6nUHMdwIhAO%2BbTNZKtWed92%2Bi6D5YTQGLMpFncok7O8pezIO6tu7GKv8DCE4QABoMNjM3NDIzMTgzODA1IgzWC%2BYU%2B7V1X%2BYCC0Qq3AN6P%2FNfQiWzzQ5fea6%2F7UpUm6ZuaehA0Uh2OyEglRRl2EW8NvUmQqDiaXZ26rWhirlS8j17ELdmfr8RLx%2FB9pTv%2Bj7Hhkv964hGKX1okoAYcrQ9roJLz562x8ZzQYjWKTM7Z%2FcGQlcddrEXzzA7LUs6qPe6B4M%2FGRAQ4g7DIyuhRoeNY7mwjkDLIGHrAl8fFzEcAP8%2B4%2FlFZFMGvIbi9ayDV8f3xPH1UgsIC4JcAqLz5OE27yie1jRO4D3QP%2BSwpgWIWtT8vVko4TMeoB8gLmGY1R03eVG0%2BibG8DezwPWO0%2Fvx2dWmuhYIPmI4YdjLHhcfSuo3VA5LgKXq7D1y8DPURXRayCCi%2BqiEwVmcDomZGNHMcLeRi58WYRG6QvFK%2FMFYHxNtLW24ahMnnkNoRXJNrXT%2BHfAdD%2B4lOPpZBqb6aK%2Bl%2FULuYBxfJrPJnBjIYBvux76o6zKF2kdQvRVStrl0c7O4UoHLGtADu9xF2esY64JXBkVqrHeNfgAVzVJ%2FOJS5oI%2FTBREq9eFYNtGqfMd15JBf%2FVoyQjtaOhmHVUFzHynlYx4HlMzvFTCQE3VUO5H%2Bexh36MlXH12osnMTSbZAa0HLx1DERGGfANDjmh4nZSwJ8MzfddKHRfLwejDBjfnEBjqkATnhRpjxdEvNQ0uxN%2FQUkD50n1iCbCZiXZez%2F546ix0J%2FbTKCpUrHyGasxYugnfvnSQxs%2BfAdV8Uz3QD3Jzw07aCF1cmmaJHNOzjxcbA98CJxRtqmDCXyhYaonextzf94eZ%2BHJm4RA%2BlBbHxW0PSF03dCmMlUpjT7ppd9uDM3l5ilyR4Oe%2B2uKgx%2BNSey4TyZop5zVFkCfhxc6BgFBSoZQ3S%2BW7A&X-Amz-Signature=951f0ce872fcea9242f2dd74c4f90b318bc04987256984705e2c6cc6f4603508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
