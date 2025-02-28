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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJMJTB3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEnvWrpAC8%2FZYZAt2EDgjiXNAcEjL6x3MVrfRN0g2OIZAiA9J9s4xXGX2nUkYilZ8B5TNhIzaHHM1wwjXSmDfoUExiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKveRBFBwwEjVOLb%2BKtwDh7WglNflaMRhnCClAkMkCHm7GmAz8zCkeR7dm8Bwq49%2BZL6T6g8IxaxYtZ%2BMoysoVhXdHQ%2BnFQJID2K%2BqsIzXujP5YtRQB85BIVwIkBsH%2BpKBIDpIv96nq6UKdICeH0Z3R%2FPIvicLfmv7D9M%2BxYGs7Q%2FGSrOMdUiL5TNVE9J66XuPLPD%2F0zgkPtFT06z9Hj8MYOySr3HYeGnPJ3GtuQt%2FgCrAEFaLbUR9HCB93djQaZX3SEA1kHwEV080UNOpildMI2tqi6l0im%2FHgBjeWesX%2BblRUE%2BKLBCHlDsNYEgLLBK8d%2B2FW%2F4kjNWEaNBO06ZZ7kWHvwJ126SfqLd9uGmxhOMCQ4BCEd7QScIhobRXm7XcIkG5xKWYHHYLaQhu0zaTokvOLIsbwF%2BLQj5T1xwPq%2BVQjUjGdbxjoGNK4NR3jHuJhzUXbhCJTn9CIiWhxiIF9NxGgq9LpEXAT85U2xMwD%2BaqgyF%2Fg7Q3abe0h7CpVb5YO%2BvDOz88QME7wYDmLFbs5qYEckbYXjSIvo5xaMHOcsErUwH9G3QyfRETYFqVNkfAS6R52WD%2FnouIQV3HKx86wanL4XI38DBUb8GNZVUvAKHPII0v%2FfHv%2Bbs5X0ZJPmBhD5aLO8yXvCn768wnvOEvgY6pgFnpQ5hkC1t9PSSsDwozemFZH0hXU0ywgD4sVw9ktEGBaALxOS8ORi9HAFk4CwjpXq42euyrz6C%2FJX6ZZQ9E9Me8d9A7LaR35oGmVM58%2BfJGm%2BPxk3KApDoQbH0TUEdaFoeBTp0%2BX%2BWpQ7wkjweS%2FYEWvwURRrwLVKKVaijh%2BmgsOofHstch6dxO4kL9fDr8Dm%2BicHvg2V5mirIWp80bDHfRHhDWAmz&X-Amz-Signature=581ec5aab3d93136c68e3257fd8ffbe34b78966681829ccb4e03be05c5948881&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJMJTB3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEnvWrpAC8%2FZYZAt2EDgjiXNAcEjL6x3MVrfRN0g2OIZAiA9J9s4xXGX2nUkYilZ8B5TNhIzaHHM1wwjXSmDfoUExiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKveRBFBwwEjVOLb%2BKtwDh7WglNflaMRhnCClAkMkCHm7GmAz8zCkeR7dm8Bwq49%2BZL6T6g8IxaxYtZ%2BMoysoVhXdHQ%2BnFQJID2K%2BqsIzXujP5YtRQB85BIVwIkBsH%2BpKBIDpIv96nq6UKdICeH0Z3R%2FPIvicLfmv7D9M%2BxYGs7Q%2FGSrOMdUiL5TNVE9J66XuPLPD%2F0zgkPtFT06z9Hj8MYOySr3HYeGnPJ3GtuQt%2FgCrAEFaLbUR9HCB93djQaZX3SEA1kHwEV080UNOpildMI2tqi6l0im%2FHgBjeWesX%2BblRUE%2BKLBCHlDsNYEgLLBK8d%2B2FW%2F4kjNWEaNBO06ZZ7kWHvwJ126SfqLd9uGmxhOMCQ4BCEd7QScIhobRXm7XcIkG5xKWYHHYLaQhu0zaTokvOLIsbwF%2BLQj5T1xwPq%2BVQjUjGdbxjoGNK4NR3jHuJhzUXbhCJTn9CIiWhxiIF9NxGgq9LpEXAT85U2xMwD%2BaqgyF%2Fg7Q3abe0h7CpVb5YO%2BvDOz88QME7wYDmLFbs5qYEckbYXjSIvo5xaMHOcsErUwH9G3QyfRETYFqVNkfAS6R52WD%2FnouIQV3HKx86wanL4XI38DBUb8GNZVUvAKHPII0v%2FfHv%2Bbs5X0ZJPmBhD5aLO8yXvCn768wnvOEvgY6pgFnpQ5hkC1t9PSSsDwozemFZH0hXU0ywgD4sVw9ktEGBaALxOS8ORi9HAFk4CwjpXq42euyrz6C%2FJX6ZZQ9E9Me8d9A7LaR35oGmVM58%2BfJGm%2BPxk3KApDoQbH0TUEdaFoeBTp0%2BX%2BWpQ7wkjweS%2FYEWvwURRrwLVKKVaijh%2BmgsOofHstch6dxO4kL9fDr8Dm%2BicHvg2V5mirIWp80bDHfRHhDWAmz&X-Amz-Signature=77f36049e32c2b30ec9f0864a9f4a44c4b7321ca990c6bf10326a07b965394fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
