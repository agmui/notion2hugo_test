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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQ5KWPY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGaGGUvmGf0vHJUBfSAIv5GT61c%2F5Rwi60pyFrxNsgvRAiEAi7NZmsMBoebfaT7L5zgiWWZkNubGd12tTt5JFtbRs28qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl04vknrO3bjnbLCircA6iAXgrRwl9ieRgZXXAYmuq2QiXD7yS50rtZ38FC8QmS%2FLgaURACi8Vm3sSOza8A%2BvcrD5pJ1oyMfrZ5ZC0cFE8%2B5E3iMVlpCXaxTEblocv7UDlECfOQtJeIITOIfUHL7k1Qb%2FbblVGHnHlIs%2FYOd1tME04%2BHbxh2DOOwWrX2mOUnT9E%2FwG%2BfPFv5Ss0QY6SSGZtgV68OJHzTEpvfhE%2Fc1hmC%2BcTcVHEMA6%2FkeqiSANb2S3PXteeOJAonxLaZ7h0DUzJaSjyNptfHfdRsY7Ud4j3fJSrZ%2FK4OQSRWzer7IEqYOjFzzUuMWdHAv2dWumb6KMTqgdPTe9uGw9yh%2B7RNjSqTt%2FCbuGn4hgHSnhJhiNZoobQXTkMxMsf5hoamX5EHElVx4iDD%2FXkBdZZL4JBC1mGFV7SI7w%2BJfENdtvseFYv55PfqWw%2BgwIQIK8cX%2Fj6wzRqmo6KYpYZZC9c%2BNkOvlfA2UxkPmj%2FTs35fRWcv9%2FG0yqKbSyrD%2Fp9RF3NMbGDGwP7kr%2FU9QTVnRWng0z3RZoRYBQ%2BTwlPR3YdymOe%2BeQ9osA9de5wwO7Y3dzlRp79HMZDFYQ830nc1Q37N9kfRzuvcOMpOeznSOTdUDJQizhCI%2BQg7RKfGfXvGfrhMMSP9cEGOqUBjlOv2d8obbzIhcwaPy%2BcPWDugjalyPH6MOKWZQBr2IPOdx91qcw0gmT%2BWKLHojpys0VIY7eVVkPKBTe0PUi%2FENnfqAAxJmzNCTxN3PCJooAtFvnhQOdXrSHqS5keedGkhAAEw1Q9yWb3KTN3aB2mp1uFd4rGekaXESG6Bzri2ojkQodcjNVfJn2By0D0eQ10ZTqhSMOJsA0sSAr8bhfuSpsJkHL4&X-Amz-Signature=b6f5b712a186a069c6aba4e4ffd90638a1318ac1ea6bbb3e1aae3a54ca9e81e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQ5KWPY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGaGGUvmGf0vHJUBfSAIv5GT61c%2F5Rwi60pyFrxNsgvRAiEAi7NZmsMBoebfaT7L5zgiWWZkNubGd12tTt5JFtbRs28qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl04vknrO3bjnbLCircA6iAXgrRwl9ieRgZXXAYmuq2QiXD7yS50rtZ38FC8QmS%2FLgaURACi8Vm3sSOza8A%2BvcrD5pJ1oyMfrZ5ZC0cFE8%2B5E3iMVlpCXaxTEblocv7UDlECfOQtJeIITOIfUHL7k1Qb%2FbblVGHnHlIs%2FYOd1tME04%2BHbxh2DOOwWrX2mOUnT9E%2FwG%2BfPFv5Ss0QY6SSGZtgV68OJHzTEpvfhE%2Fc1hmC%2BcTcVHEMA6%2FkeqiSANb2S3PXteeOJAonxLaZ7h0DUzJaSjyNptfHfdRsY7Ud4j3fJSrZ%2FK4OQSRWzer7IEqYOjFzzUuMWdHAv2dWumb6KMTqgdPTe9uGw9yh%2B7RNjSqTt%2FCbuGn4hgHSnhJhiNZoobQXTkMxMsf5hoamX5EHElVx4iDD%2FXkBdZZL4JBC1mGFV7SI7w%2BJfENdtvseFYv55PfqWw%2BgwIQIK8cX%2Fj6wzRqmo6KYpYZZC9c%2BNkOvlfA2UxkPmj%2FTs35fRWcv9%2FG0yqKbSyrD%2Fp9RF3NMbGDGwP7kr%2FU9QTVnRWng0z3RZoRYBQ%2BTwlPR3YdymOe%2BeQ9osA9de5wwO7Y3dzlRp79HMZDFYQ830nc1Q37N9kfRzuvcOMpOeznSOTdUDJQizhCI%2BQg7RKfGfXvGfrhMMSP9cEGOqUBjlOv2d8obbzIhcwaPy%2BcPWDugjalyPH6MOKWZQBr2IPOdx91qcw0gmT%2BWKLHojpys0VIY7eVVkPKBTe0PUi%2FENnfqAAxJmzNCTxN3PCJooAtFvnhQOdXrSHqS5keedGkhAAEw1Q9yWb3KTN3aB2mp1uFd4rGekaXESG6Bzri2ojkQodcjNVfJn2By0D0eQ10ZTqhSMOJsA0sSAr8bhfuSpsJkHL4&X-Amz-Signature=54f5c38cd5fb8eda56cda7e1e2c73b147d64ee6d330ab6d01a22d13808135863&X-Amz-SignedHeaders=host&x-id=GetObject)

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
