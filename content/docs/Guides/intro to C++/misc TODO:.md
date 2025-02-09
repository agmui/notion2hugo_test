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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFRVCK6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBP3fwqSP4X%2BQoTBNBRNn%2Fv6upfCcromZk3XLfSUZVbBAiAdqBCXmqCpewCnVQSAX%2BF4NTAYQf60KAyuONoLC9gyjSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FnPrOzS7lMzO1zzKtwDXae7fjljS1fIs102Ht0tNsOVhWvBFpwRj7vsMVzeOrM5hqGSEX0m2cIR7gKSacNc9xkrm3sLiv0yZuxK4xv5rimwpVywvHswBBxhTofeWOXHMErzh3tXynsAfuapVhZiwxkQUwaDmu9aMEKc2DKp4NRpqPkzA9UIvLUR2igPBUoWj0gO0fS%2FrvlFfXHQ3RY6sHqFXtFJ6BiNrrWGIDL9ugSFF%2B%2FsXi0b50HYLY2%2FO0sG9wS%2FwjNErJl4Tvgu71HdYKzul3XNdbNNqVA%2B8NGOHWc038mQTVQZUGfAxJF2ytmwcx5d7UW%2FjYrT07nEGwYwIaORnkfW556UG2Ke%2BG9b00IjMINZRnFGh%2FKuPTgVyjQQkkK6keQa9tk1Scj4TZDzRLcZ7IieHd6Hc7TyymPeXEqew%2BEhu8O3eSSfJIH24aRSoO8uxJBCUvH5uocaAS7t1E0G%2BtfS7fEtO8H6nS3MOdIKT68VbYjha0MJClLgRwHBmdoZ7DNAeKDk4V9bOsdK3p5DFpkNi6w%2F6pl%2F5IZjbs9n0Hhv5HKy%2FYeInC0CbW8DrvSqWPMdxbiU0LGDFQEFQMyfVZTKGeh4hKg5eGQQF1EwaLAyFq5UHFtC3WpeZvpfZIEnzhJB4sPLzwgwzr6gvQY6pgF7uYCN5VxDv4RHII8KNEmCXGqswZbEA8aqHq4i819irRI410nRoYG2D0LPYy%2BnDRSkxSp0Y2ZocHdygFdHCythd8yYVcwy5ne6dhUObxXQGU8t7A0F1lFVD%2BZlZ9lBeTgUnNfAysOnE97WKv3YoC8ndHYr6rITemcWp1HWyYWKJrAk6RZNF2eC92qEeoiErjG7hctjEn4aWe7Q2Fig7cSBLWKdtBTM&X-Amz-Signature=88c29262c2bae984465d2135525b2414742e4e12c2204d38f4e97af3a596d602&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFRVCK6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBP3fwqSP4X%2BQoTBNBRNn%2Fv6upfCcromZk3XLfSUZVbBAiAdqBCXmqCpewCnVQSAX%2BF4NTAYQf60KAyuONoLC9gyjSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FnPrOzS7lMzO1zzKtwDXae7fjljS1fIs102Ht0tNsOVhWvBFpwRj7vsMVzeOrM5hqGSEX0m2cIR7gKSacNc9xkrm3sLiv0yZuxK4xv5rimwpVywvHswBBxhTofeWOXHMErzh3tXynsAfuapVhZiwxkQUwaDmu9aMEKc2DKp4NRpqPkzA9UIvLUR2igPBUoWj0gO0fS%2FrvlFfXHQ3RY6sHqFXtFJ6BiNrrWGIDL9ugSFF%2B%2FsXi0b50HYLY2%2FO0sG9wS%2FwjNErJl4Tvgu71HdYKzul3XNdbNNqVA%2B8NGOHWc038mQTVQZUGfAxJF2ytmwcx5d7UW%2FjYrT07nEGwYwIaORnkfW556UG2Ke%2BG9b00IjMINZRnFGh%2FKuPTgVyjQQkkK6keQa9tk1Scj4TZDzRLcZ7IieHd6Hc7TyymPeXEqew%2BEhu8O3eSSfJIH24aRSoO8uxJBCUvH5uocaAS7t1E0G%2BtfS7fEtO8H6nS3MOdIKT68VbYjha0MJClLgRwHBmdoZ7DNAeKDk4V9bOsdK3p5DFpkNi6w%2F6pl%2F5IZjbs9n0Hhv5HKy%2FYeInC0CbW8DrvSqWPMdxbiU0LGDFQEFQMyfVZTKGeh4hKg5eGQQF1EwaLAyFq5UHFtC3WpeZvpfZIEnzhJB4sPLzwgwzr6gvQY6pgF7uYCN5VxDv4RHII8KNEmCXGqswZbEA8aqHq4i819irRI410nRoYG2D0LPYy%2BnDRSkxSp0Y2ZocHdygFdHCythd8yYVcwy5ne6dhUObxXQGU8t7A0F1lFVD%2BZlZ9lBeTgUnNfAysOnE97WKv3YoC8ndHYr6rITemcWp1HWyYWKJrAk6RZNF2eC92qEeoiErjG7hctjEn4aWe7Q2Fig7cSBLWKdtBTM&X-Amz-Signature=707fb20333741600500d3c164a6a4909e8df033eb7bb7c8c9415fa1086344a46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
