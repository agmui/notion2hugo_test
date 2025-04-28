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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6URODAE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVzjaqs%2Ff6yx4VQLmPW2iLeTITf2U%2FBsGgtQ9y%2BEn9fAiAbGBvLAfZOMz0qBhay15NjpQiTws5gHtv0drNAGkkykCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4u%2B3kqREsGKdY%2Fd2KtwDUIdYlEPKTkW0eTShfak9lmNuMFv3EKoWduiBz%2BY%2BJdwF16q8irBTL%2FePWRHRB%2BBcskWNdwopLMhT0IWQl301YhOODiaYgPxi51ENB3qW5yuSdjUvVuF7RzpbwQkSTwWK0rLhFly1El8MozpDSFnpIw5ZK2o32S3WfA7ke7sy3wcbjorz3DUpW%2BYtS%2FSAtIvQV%2FhMdq2LLYgq1kwe3DKCDy5s7XgxxM%2FGxQVn5fjxcTr0Nkbya%2FjQAG9A6tMi4fpgtjBgIeyG9vxNdHbjIv3%2FvdYjE%2BgVDdkPT6EepWnBQHSeHhmoDQSnI%2Fc8k6FwT%2F0fbFy5u0XkZTRFFDgkliZHglTIw824vwTDjahb9H7cO5Atseur1%2Fx5W%2FV7vSGvNLx2WCIQCErh1TPFEUjjS3vnig%2Fhzxnk0izC1LQkyYp3oXxuSX%2FkzQMLIzSY16y003QS%2FtuXOHax7f2%2Fim%2BDu1%2FDh8ARl%2BNiE0rHFzOMthmwSQd2dHnpYpUgbBq38CIuN19lrMbOIbngfzlN%2FyPWArp2jqV8HkXuDeCiASe6oA4Y2rJ%2FjVjg3wkjOxi%2BVQdmvVh%2B5jzIgZeTkL%2FZSbYGj9tPrDhMFBzyplkLUYd4kWXQS3kLzMEVmsS%2ByHe4yCEwjp6%2BwAY6pgG%2B9Q96leEmFONOROGSPJ1o7tCCLTJ0Zk8YLKAM6Jnf1Qfz96XmDgPT1DXjrKIjjrkSiAIoUnoP2NPRavIr6JwuG8zo0y9RVmSk2tFtB5kn4kXd6GnS7m8L2WRvHAESaTDQL10IkZKSwC87rwbijknH7hs%2BKiUGXGNlPcy%2BSob0smiO8%2Fnd83oPLNcXXvgnnujzUf7uEgSeQq4QHDwzJn6hCi2Ehgd%2B&X-Amz-Signature=44ed92f75a0c6b832ec86ba45babdabd14b087c479f39f52c4222a0297b6eb75&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6URODAE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVzjaqs%2Ff6yx4VQLmPW2iLeTITf2U%2FBsGgtQ9y%2BEn9fAiAbGBvLAfZOMz0qBhay15NjpQiTws5gHtv0drNAGkkykCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4u%2B3kqREsGKdY%2Fd2KtwDUIdYlEPKTkW0eTShfak9lmNuMFv3EKoWduiBz%2BY%2BJdwF16q8irBTL%2FePWRHRB%2BBcskWNdwopLMhT0IWQl301YhOODiaYgPxi51ENB3qW5yuSdjUvVuF7RzpbwQkSTwWK0rLhFly1El8MozpDSFnpIw5ZK2o32S3WfA7ke7sy3wcbjorz3DUpW%2BYtS%2FSAtIvQV%2FhMdq2LLYgq1kwe3DKCDy5s7XgxxM%2FGxQVn5fjxcTr0Nkbya%2FjQAG9A6tMi4fpgtjBgIeyG9vxNdHbjIv3%2FvdYjE%2BgVDdkPT6EepWnBQHSeHhmoDQSnI%2Fc8k6FwT%2F0fbFy5u0XkZTRFFDgkliZHglTIw824vwTDjahb9H7cO5Atseur1%2Fx5W%2FV7vSGvNLx2WCIQCErh1TPFEUjjS3vnig%2Fhzxnk0izC1LQkyYp3oXxuSX%2FkzQMLIzSY16y003QS%2FtuXOHax7f2%2Fim%2BDu1%2FDh8ARl%2BNiE0rHFzOMthmwSQd2dHnpYpUgbBq38CIuN19lrMbOIbngfzlN%2FyPWArp2jqV8HkXuDeCiASe6oA4Y2rJ%2FjVjg3wkjOxi%2BVQdmvVh%2B5jzIgZeTkL%2FZSbYGj9tPrDhMFBzyplkLUYd4kWXQS3kLzMEVmsS%2ByHe4yCEwjp6%2BwAY6pgG%2B9Q96leEmFONOROGSPJ1o7tCCLTJ0Zk8YLKAM6Jnf1Qfz96XmDgPT1DXjrKIjjrkSiAIoUnoP2NPRavIr6JwuG8zo0y9RVmSk2tFtB5kn4kXd6GnS7m8L2WRvHAESaTDQL10IkZKSwC87rwbijknH7hs%2BKiUGXGNlPcy%2BSob0smiO8%2Fnd83oPLNcXXvgnnujzUf7uEgSeQq4QHDwzJn6hCi2Ehgd%2B&X-Amz-Signature=74ad39e938df794787c23ee37a3d8c1fc3ec637ea102f2c3924767fa000e2fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
