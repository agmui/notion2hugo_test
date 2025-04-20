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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX6MFUP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGnbCl8IA3%2FORYPeiiLz90XLBXL456vvwX74DJPu6jtGAiAaBU4Ke0gsGuQgb5EJUHifmcMB7BTBk%2F%2F3nj%2FC0JmYUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyuU3Lo3iFSnUFB2KtwDD3MbPKxiWWGBoKXT%2BVLwvI3vHHjVO%2B30WSHAE5i1nqcjA%2BmqX7VboB1u%2FDL%2BdQey95lRrgQ3mvyG7eE43mgoBUu4wzoPM7R6Zb8OVaReQsxCa5Ns2c9HLRlXwgcg0yNAKQUiY0VSS1nl183VYW8NLj7JhULaHjh%2Fe7jpON%2FwP3LAmIkjCCikJUGPKmkcAlPpP2vPZYdRMLoYwNf7dwuIZ00ScMzQEN%2FGNzXQJgiEGpX3dXyeRZ224QstZeWYWtIeR8JCv3qO%2BpzwmZiFo6Pz%2FPySTLJtCdcE9wtRmSsiPGugEr8ZHXm%2Fw8ggq85uOHSaaLSQFrMOsZCXCIApa3hINRu0LAHlmKa0Y9JRQJe5sFN9sJFj%2BpNgoJcaQoA%2FKBBNy5lME6J3YalBCkM4ey%2FJQKKmZeaQwnnCZBCc%2F06GSfQxVZvHqgtXDiVvD1FcIKHPBUyls1cv09W55Akx5L7RV6JxnQB%2Be3GHBolCOhVo6WHjNqCaL37H5xmorG8KqXIjL3sBukQrgy4SFeluWvK9VdXOpfrsIxKP1WbiwUQs8Q1i4jrsZlKVgO2glgBLZF7jInokqRyzDJzEUlTWeWXXFjEAyCCFpfHdKbm66TSl4%2B4pjjwpGJ2h1V3Dvy8w%2FaOSwAY6pgEkFtiX9EQDWQmW9IDlnHLNtYjgoQt3aRuSgp61DxxvgzvOn%2Fsvt0Wlay%2BYMizSLyS%2BRTsVHkUGORl9VdpWnYSyALI4RdxOQLDGsL6GG3ylfdhoQYxlYfBBusipPylx4tUJ7g4wtqKGjv3%2FiusYFNm%2Fid3t3UXHyuhQDgZtz5vJ2uu8HmmtB2JtIhWUEqW5Xs4Hq8IUsfvmsi7Z%2FFVpGxr9vvLn8cGI&X-Amz-Signature=7c4ba2d9c6c72a9c494eddec534026b4bf0157d688b40c898d9758694810ff10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX6MFUP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGnbCl8IA3%2FORYPeiiLz90XLBXL456vvwX74DJPu6jtGAiAaBU4Ke0gsGuQgb5EJUHifmcMB7BTBk%2F%2F3nj%2FC0JmYUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyuU3Lo3iFSnUFB2KtwDD3MbPKxiWWGBoKXT%2BVLwvI3vHHjVO%2B30WSHAE5i1nqcjA%2BmqX7VboB1u%2FDL%2BdQey95lRrgQ3mvyG7eE43mgoBUu4wzoPM7R6Zb8OVaReQsxCa5Ns2c9HLRlXwgcg0yNAKQUiY0VSS1nl183VYW8NLj7JhULaHjh%2Fe7jpON%2FwP3LAmIkjCCikJUGPKmkcAlPpP2vPZYdRMLoYwNf7dwuIZ00ScMzQEN%2FGNzXQJgiEGpX3dXyeRZ224QstZeWYWtIeR8JCv3qO%2BpzwmZiFo6Pz%2FPySTLJtCdcE9wtRmSsiPGugEr8ZHXm%2Fw8ggq85uOHSaaLSQFrMOsZCXCIApa3hINRu0LAHlmKa0Y9JRQJe5sFN9sJFj%2BpNgoJcaQoA%2FKBBNy5lME6J3YalBCkM4ey%2FJQKKmZeaQwnnCZBCc%2F06GSfQxVZvHqgtXDiVvD1FcIKHPBUyls1cv09W55Akx5L7RV6JxnQB%2Be3GHBolCOhVo6WHjNqCaL37H5xmorG8KqXIjL3sBukQrgy4SFeluWvK9VdXOpfrsIxKP1WbiwUQs8Q1i4jrsZlKVgO2glgBLZF7jInokqRyzDJzEUlTWeWXXFjEAyCCFpfHdKbm66TSl4%2B4pjjwpGJ2h1V3Dvy8w%2FaOSwAY6pgEkFtiX9EQDWQmW9IDlnHLNtYjgoQt3aRuSgp61DxxvgzvOn%2Fsvt0Wlay%2BYMizSLyS%2BRTsVHkUGORl9VdpWnYSyALI4RdxOQLDGsL6GG3ylfdhoQYxlYfBBusipPylx4tUJ7g4wtqKGjv3%2FiusYFNm%2Fid3t3UXHyuhQDgZtz5vJ2uu8HmmtB2JtIhWUEqW5Xs4Hq8IUsfvmsi7Z%2FFVpGxr9vvLn8cGI&X-Amz-Signature=0eb8e3bbda3064f47f5ff87d339d96c771b7d76dde46b8d546cc6be8fb97cd2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
