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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUVTZ6W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO329iDRvEhaBAkizHpoYfnVcR8xtZWRd03bfcF3FPDAiBe1zGe4Qn5IOOnMBU9p6uZJQXjd6IfgVdy8QdmntYZhyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwog6uoscBZnNQtNQKtwDTKtWNnV48Ce7Pftpv6PFKhD7KZSy%2FZfki3B%2FIUuCT4kOjhK3iNUFBEl3xo4LEzGYcljOhUl%2FxUAHMyu%2FrV0oIWONl9GY%2FoxnMrvXeGKQ0tv5IylW5Qb21XO9pG4v%2B3sosYvV%2Fxshg6FZD%2FXBzQlTyVisTANyclBhAgVSZmnO3UNFbCOlmyMsTttFGW9%2B7afwl16hqOBLiGrvh9SgqWpVRPR0KV%2FJKKyfR9GUx%2FzzzpfUOT2UPcvhlsbmn%2B4h9VK%2F%2FuEkhiiT9aFjr1WTJhqyUNTzbOjynhXy8CzQHI7oYtzVrd9CDzS%2BP%2FlPj4yljpRHykjaROM8HmBiXVQAyfexeJ%2F%2FF8NsTfOPcBAGwHGm3bIBV8eU7iJ9vFyUXANpwCrh7QP6uDhb%2FrX2Lbh%2FF20gTR%2B4U0NSVg3UpuYVRJ%2Bkv5i2khwo8hi1tgV6bKGxnKqD7KkWhOERgfniZlSMw0G5g8cAy7v2OMdvx7RkiOrLEyT7Tx6732VOox3naBeyjY4inyS%2BoAVNsdqgwTNQZdnJSWOMWT5CLBfiuszQQM2ZfRMFnhCGj%2BbvObrfPkULySDQ9GjPW9p4A8UizOBOyh8nnoVCQnphiLOpI4ERXfhRZv%2B07WMkUQGX1Sj9MlMwjJacwgY6pgH20DLBbuWLfNnv%2FVM6xUraNN8tFdKHNi8l549W9QvTPpPWjYrKtybhsHmvVdAXYRDMiROTUvdIEEQPivbwEduPrn3q9HCfVJoNyucVxf4D%2FPXfY02b5WwhAKwqmZEz4eEO%2Ff7HB98h4rWXGEx3vrzWmc0kTIt9ejRHwXdTA6qN3wDLJFVaHSQeykSOYkfhZlD%2FHawXxRP2y6OE2ErQhrxyjZJoGvBq&X-Amz-Signature=13807d2f47f7709c208ecd2fe9e12e407e6b34fb612003f5bdb59c5a02535627&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUVTZ6W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO329iDRvEhaBAkizHpoYfnVcR8xtZWRd03bfcF3FPDAiBe1zGe4Qn5IOOnMBU9p6uZJQXjd6IfgVdy8QdmntYZhyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwog6uoscBZnNQtNQKtwDTKtWNnV48Ce7Pftpv6PFKhD7KZSy%2FZfki3B%2FIUuCT4kOjhK3iNUFBEl3xo4LEzGYcljOhUl%2FxUAHMyu%2FrV0oIWONl9GY%2FoxnMrvXeGKQ0tv5IylW5Qb21XO9pG4v%2B3sosYvV%2Fxshg6FZD%2FXBzQlTyVisTANyclBhAgVSZmnO3UNFbCOlmyMsTttFGW9%2B7afwl16hqOBLiGrvh9SgqWpVRPR0KV%2FJKKyfR9GUx%2FzzzpfUOT2UPcvhlsbmn%2B4h9VK%2F%2FuEkhiiT9aFjr1WTJhqyUNTzbOjynhXy8CzQHI7oYtzVrd9CDzS%2BP%2FlPj4yljpRHykjaROM8HmBiXVQAyfexeJ%2F%2FF8NsTfOPcBAGwHGm3bIBV8eU7iJ9vFyUXANpwCrh7QP6uDhb%2FrX2Lbh%2FF20gTR%2B4U0NSVg3UpuYVRJ%2Bkv5i2khwo8hi1tgV6bKGxnKqD7KkWhOERgfniZlSMw0G5g8cAy7v2OMdvx7RkiOrLEyT7Tx6732VOox3naBeyjY4inyS%2BoAVNsdqgwTNQZdnJSWOMWT5CLBfiuszQQM2ZfRMFnhCGj%2BbvObrfPkULySDQ9GjPW9p4A8UizOBOyh8nnoVCQnphiLOpI4ERXfhRZv%2B07WMkUQGX1Sj9MlMwjJacwgY6pgH20DLBbuWLfNnv%2FVM6xUraNN8tFdKHNi8l549W9QvTPpPWjYrKtybhsHmvVdAXYRDMiROTUvdIEEQPivbwEduPrn3q9HCfVJoNyucVxf4D%2FPXfY02b5WwhAKwqmZEz4eEO%2Ff7HB98h4rWXGEx3vrzWmc0kTIt9ejRHwXdTA6qN3wDLJFVaHSQeykSOYkfhZlD%2FHawXxRP2y6OE2ErQhrxyjZJoGvBq&X-Amz-Signature=3f81485221714b23b8df2d48e7d203cc572bd3fa59c16b6eac22107cc5a8c99a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
