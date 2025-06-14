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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RAG5JX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICQD%2B3QwRSiRP5DN1KUXMZQpwSG31vmdEu0IfSAv6NHxAiA4gTWzj2%2FP0UNoyYsirZ8JqbTl5jbiwa44bh0GUMguzir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGgwCy%2B2pCFzNASagKtwDJlBFSVnBd4EtoRJooXCFPi7VOq%2B128lQbLURox2nlLOr623wZThQEh2U2jMkHZHsAOvRpV0vmcP2HTLka0SqVJZwlxzFFCF2OCMWeiptbNGVpDbJrXBXtY7S3XW24ONpwkiCfIGoBsH0kCWISLgRWXIYK0E5F9Yce371QsZOOCtmRPJLrsa5DcP5YfruWbPWKXekZ8rF7VVN8ryVm1LTeQ%2BsDMGT9ZKQ%2ByaVQxJisITegxk6BK4tOzJAVptbICFpujuwhwVk2vrwh62Zuc9GeUxzLyTOo6kd%2BEqFiZGVh4ULvO0BVS3SkBQVFg52IzmdhAq3aeXY4%2FYinKkEX6cv6s5BNKl35xCRZ4c3xm%2B7PC8yVwrVwAOo%2F5QO7Tx3yBxgMWnpUPQ6qM2xvho3ZnbGQydtxk0cqfXTuk9oaLtjbpQQkYPtzLNBP2IoJBgxxOi%2ByK%2FC%2B%2F3mT2EryL8gXJRuBngigkv7QwmuUorIrWDXxV3PK4RDrL5q5t5ZbnUxUlKo%2FeJ9bqJ%2Fhdex%2FI1JbGgByt8SShVeiiOI%2Fx2PR4%2FUUgE%2BcL1VuG2ug2o%2B343jhleYHynTqVMwC2HzreLUuIxe8OnSlArRs2UI7pcqD%2F%2F3WFlf%2Bl9swS6ECiONE2cw%2Bbu0wgY6pgFN9lrAE793aXGOEnjgyhEVi4xEzg8PSvNNdQjUuzUEThJrnlmKUEBNc12zqOX4Lg6JFbc5jrmZ8fXvwSEM%2Bt7bv7UKzRktqouF78h14ChKxIDjYbTP2M8TZDFBkPcNtBPTqJbU1vQ7900jT7So4%2FtqcfFx1ynVaSS7vGFQDIRWgng3lkHRV63fxjeb8%2BpsGXVyOShMUBxYA1vFnJDwfGW3Td0DMAzr&X-Amz-Signature=b5ad5351564b2397251080c96167510f41d1e8cdac6875d51e622e5fe9ce5bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RAG5JX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICQD%2B3QwRSiRP5DN1KUXMZQpwSG31vmdEu0IfSAv6NHxAiA4gTWzj2%2FP0UNoyYsirZ8JqbTl5jbiwa44bh0GUMguzir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGgwCy%2B2pCFzNASagKtwDJlBFSVnBd4EtoRJooXCFPi7VOq%2B128lQbLURox2nlLOr623wZThQEh2U2jMkHZHsAOvRpV0vmcP2HTLka0SqVJZwlxzFFCF2OCMWeiptbNGVpDbJrXBXtY7S3XW24ONpwkiCfIGoBsH0kCWISLgRWXIYK0E5F9Yce371QsZOOCtmRPJLrsa5DcP5YfruWbPWKXekZ8rF7VVN8ryVm1LTeQ%2BsDMGT9ZKQ%2ByaVQxJisITegxk6BK4tOzJAVptbICFpujuwhwVk2vrwh62Zuc9GeUxzLyTOo6kd%2BEqFiZGVh4ULvO0BVS3SkBQVFg52IzmdhAq3aeXY4%2FYinKkEX6cv6s5BNKl35xCRZ4c3xm%2B7PC8yVwrVwAOo%2F5QO7Tx3yBxgMWnpUPQ6qM2xvho3ZnbGQydtxk0cqfXTuk9oaLtjbpQQkYPtzLNBP2IoJBgxxOi%2ByK%2FC%2B%2F3mT2EryL8gXJRuBngigkv7QwmuUorIrWDXxV3PK4RDrL5q5t5ZbnUxUlKo%2FeJ9bqJ%2Fhdex%2FI1JbGgByt8SShVeiiOI%2Fx2PR4%2FUUgE%2BcL1VuG2ug2o%2B343jhleYHynTqVMwC2HzreLUuIxe8OnSlArRs2UI7pcqD%2F%2F3WFlf%2Bl9swS6ECiONE2cw%2Bbu0wgY6pgFN9lrAE793aXGOEnjgyhEVi4xEzg8PSvNNdQjUuzUEThJrnlmKUEBNc12zqOX4Lg6JFbc5jrmZ8fXvwSEM%2Bt7bv7UKzRktqouF78h14ChKxIDjYbTP2M8TZDFBkPcNtBPTqJbU1vQ7900jT7So4%2FtqcfFx1ynVaSS7vGFQDIRWgng3lkHRV63fxjeb8%2BpsGXVyOShMUBxYA1vFnJDwfGW3Td0DMAzr&X-Amz-Signature=d4240f00520e1acae5e179074d513bc4a66659b36c6f32fb80ac8b4e984be989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
