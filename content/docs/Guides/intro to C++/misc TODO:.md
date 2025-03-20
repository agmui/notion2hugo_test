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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFJVCNG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC9plRaJPYg9qfI7AhS2oXFgU8s%2FNMQAKEJIgWrWeQZMgIhAKHnWC4AQTFBhwj%2F%2FZZrLN6%2BPvKWIe5mIeGS7b3BxDFwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0jgf8sRq6ZH7jbZ8q3APT%2FeEbLwxugd6pvxoRrgpUMbXb5KNSsB5LrvSoQZiZLIqOzYciPGtD4UqLMFvO%2B9YLvXuMVx%2BRyUloaOdPv37YlN8NezDTPfBopI5lcXpIHY4mFyWahmyb5RKGPCFbSoWQ7Yoy9IxfBNZtV%2Bn0i64DyzZ1DjmgADoIsUiNcyqsckcH2tlAWKFgbC2XRZ%2B3pt9XpNO5ahc6vgw%2FKuaIB9Gkd1e4IxfmIBtiWKfWmb84pcUwoW7ygvZxFFODKyi8SJwoIvqLiL456sz4HCVAIrgJQZcvnkQM74yCs66LRKzGfQFu4ipibwtTdCJV4QSpz4z%2BhuV1HtqGOWpEGexGXcodeoUfWsa6FJMMOkCRC9FU9Q0aeSUT8LYfkdWqfMLIIfIrMJYGm9bNWE3XhfhhN39g6oHOU8Mo3x5tRWQPZnaLu68kTCX5kptJMSu6h8AzZtHcjOh0iTMwcKbeCmvBzpo60U4HUh%2BylpDN4BVMB7ChORwe7LhyQQq13sEaTH8hfvvzcil2yuCzAUOi8m7tlMZl7Odq4HP2SM2Kg%2Bw6gHulmqFe8kE1Tez%2BgWoNN%2B9rWrKR9BZo%2FZI3G3%2BBGVnxSHTbG%2FASt3L62zCv5gqHza4g5Id%2FOkJndPYh4SO1uzDBpu6%2BBjqkAeot8UX3THlz7PEev5vhSYURrQI7OlACfJzxr6w4ADgkJ7Z%2Fb4RhEwP4vOOVLkXa%2B5i%2Bt3tOWKLhnuCL3bzA19UJJMteuW81lsoWLBirvmlb4c%2BHhf8cH9dluEddFau8XZ5GL9%2BoQ0OkuszSuACNV9uXwcGinkLGLg72FZOeyfD3%2FoKqm%2Ba%2FUWfPl7JLE3kJ4Fnyj2nZ%2BBkMvX2lwI%2BCLBx4Umh6&X-Amz-Signature=f65a095a730f7d837b21337538912e3b7a3951c1d8f0d6cf57d8bcf6ac6bcfa0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFJVCNG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC9plRaJPYg9qfI7AhS2oXFgU8s%2FNMQAKEJIgWrWeQZMgIhAKHnWC4AQTFBhwj%2F%2FZZrLN6%2BPvKWIe5mIeGS7b3BxDFwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0jgf8sRq6ZH7jbZ8q3APT%2FeEbLwxugd6pvxoRrgpUMbXb5KNSsB5LrvSoQZiZLIqOzYciPGtD4UqLMFvO%2B9YLvXuMVx%2BRyUloaOdPv37YlN8NezDTPfBopI5lcXpIHY4mFyWahmyb5RKGPCFbSoWQ7Yoy9IxfBNZtV%2Bn0i64DyzZ1DjmgADoIsUiNcyqsckcH2tlAWKFgbC2XRZ%2B3pt9XpNO5ahc6vgw%2FKuaIB9Gkd1e4IxfmIBtiWKfWmb84pcUwoW7ygvZxFFODKyi8SJwoIvqLiL456sz4HCVAIrgJQZcvnkQM74yCs66LRKzGfQFu4ipibwtTdCJV4QSpz4z%2BhuV1HtqGOWpEGexGXcodeoUfWsa6FJMMOkCRC9FU9Q0aeSUT8LYfkdWqfMLIIfIrMJYGm9bNWE3XhfhhN39g6oHOU8Mo3x5tRWQPZnaLu68kTCX5kptJMSu6h8AzZtHcjOh0iTMwcKbeCmvBzpo60U4HUh%2BylpDN4BVMB7ChORwe7LhyQQq13sEaTH8hfvvzcil2yuCzAUOi8m7tlMZl7Odq4HP2SM2Kg%2Bw6gHulmqFe8kE1Tez%2BgWoNN%2B9rWrKR9BZo%2FZI3G3%2BBGVnxSHTbG%2FASt3L62zCv5gqHza4g5Id%2FOkJndPYh4SO1uzDBpu6%2BBjqkAeot8UX3THlz7PEev5vhSYURrQI7OlACfJzxr6w4ADgkJ7Z%2Fb4RhEwP4vOOVLkXa%2B5i%2Bt3tOWKLhnuCL3bzA19UJJMteuW81lsoWLBirvmlb4c%2BHhf8cH9dluEddFau8XZ5GL9%2BoQ0OkuszSuACNV9uXwcGinkLGLg72FZOeyfD3%2FoKqm%2Ba%2FUWfPl7JLE3kJ4Fnyj2nZ%2BBkMvX2lwI%2BCLBx4Umh6&X-Amz-Signature=0325919d2adae61b39d491b96a70cdf9c424e6de6f846917f03e445dc3ddf018&X-Amz-SignedHeaders=host&x-id=GetObject)

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
