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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUK5T37D%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCATNt8oV3aMoRU%2FCspRq10I%2BOPEYn3plQyjxO17hBtcAIhAN6f5aSpf1StjpCfheqgXX0TtwLxg1Ugs2LCsGeAHdAJKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgsQ5kIXys5ZHM52Iq3AOvT7fd55%2BYxmRX%2Fn9oVKvH1THjQHFvaD1YXoasnciuppvO5G5wY1FNTbjeJIeNbiygVqfjqNpKOfqFjYcUTqWnirvFt8L1Qm2xt4ROjKFyiGAI2miwzsof%2FLMcSCrNQonYitUq25rqihOUyhLiY41j3Lk0inCH%2FsbN%2F%2B%2BU6UKaoxQ11YyjAAWSWW8m1FInFPrwD5WyU1PuLSsRPSFXD1pETH0L8XqnfqG7YfCkdXMPheSYoyJz1pK3OvJTlKLeNSdTyB4CRUGDRFucV7BEkiXAVjq7tBHGiptVtRjtzZqB1CGOXWGRVqJcSeyxuSrA58DzujJa6aEszwpvVVFzRmaRtsu4ljba%2F8%2B2v4rpAg5Zg%2BTz22ZNKeB5G93qiHIOW5qVN3qZJ9VdlAQb6dEuOyVVPSHqfo4B%2F2Ne5H4VTnn5Ye08xkxcwMTscV9irgTn3tP110FbRpaG7o%2BRxEPgEwQYvXT4Sah78dQUO6%2FTlwcJL3PdqcaEtjua6F2VtQJIzg%2Bv%2FrFoGcZpB4yUCPlefqH%2FxJXDZWvt6IAPE6Hr2Rx6A2LGAvCEtGga2IPbA2kVQUBF7VA05O%2BOtUVitymWj7IYwOos028gxMFGGh0kk4W6vGnkHI5rsW7HIiTQwDDM0ZDBBjqkAR96HacM5sty2YbSF1Q1Dc7WqIx8HeL23RCFn4n5WbMUDzZWIfftS2NrobTomzXONT6IvK%2F4iivCjuccLPcdhT9q4lpG5hh5RzzKwTWo4r0k8bpWOOq3xYU0rYj3a2CNiikvGGGRv9Ai4eGQXf4JE5wUmXifZ9lwEW6F%2FDlps5q9apZwKJTOUtiSk%2FBu1do580It%2FwA3Cvgzn1YO%2BQ9seW068PsK&X-Amz-Signature=3250cce084cd07921455f358390a6c17ee4052e56ce02c8591e7d714c7895d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUK5T37D%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCATNt8oV3aMoRU%2FCspRq10I%2BOPEYn3plQyjxO17hBtcAIhAN6f5aSpf1StjpCfheqgXX0TtwLxg1Ugs2LCsGeAHdAJKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgsQ5kIXys5ZHM52Iq3AOvT7fd55%2BYxmRX%2Fn9oVKvH1THjQHFvaD1YXoasnciuppvO5G5wY1FNTbjeJIeNbiygVqfjqNpKOfqFjYcUTqWnirvFt8L1Qm2xt4ROjKFyiGAI2miwzsof%2FLMcSCrNQonYitUq25rqihOUyhLiY41j3Lk0inCH%2FsbN%2F%2B%2BU6UKaoxQ11YyjAAWSWW8m1FInFPrwD5WyU1PuLSsRPSFXD1pETH0L8XqnfqG7YfCkdXMPheSYoyJz1pK3OvJTlKLeNSdTyB4CRUGDRFucV7BEkiXAVjq7tBHGiptVtRjtzZqB1CGOXWGRVqJcSeyxuSrA58DzujJa6aEszwpvVVFzRmaRtsu4ljba%2F8%2B2v4rpAg5Zg%2BTz22ZNKeB5G93qiHIOW5qVN3qZJ9VdlAQb6dEuOyVVPSHqfo4B%2F2Ne5H4VTnn5Ye08xkxcwMTscV9irgTn3tP110FbRpaG7o%2BRxEPgEwQYvXT4Sah78dQUO6%2FTlwcJL3PdqcaEtjua6F2VtQJIzg%2Bv%2FrFoGcZpB4yUCPlefqH%2FxJXDZWvt6IAPE6Hr2Rx6A2LGAvCEtGga2IPbA2kVQUBF7VA05O%2BOtUVitymWj7IYwOos028gxMFGGh0kk4W6vGnkHI5rsW7HIiTQwDDM0ZDBBjqkAR96HacM5sty2YbSF1Q1Dc7WqIx8HeL23RCFn4n5WbMUDzZWIfftS2NrobTomzXONT6IvK%2F4iivCjuccLPcdhT9q4lpG5hh5RzzKwTWo4r0k8bpWOOq3xYU0rYj3a2CNiikvGGGRv9Ai4eGQXf4JE5wUmXifZ9lwEW6F%2FDlps5q9apZwKJTOUtiSk%2FBu1do580It%2FwA3Cvgzn1YO%2BQ9seW068PsK&X-Amz-Signature=df81c544ed6827c52a3284d54904585f3d177d8df1913b446d56b0f90268633c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
