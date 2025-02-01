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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCFL4R%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx%2FUVI84l5TSyII3emhJwB8Jqn07UuH5XRA9Thep7rdAiBAIjR0b6Lv45hynmCbXlks5BVg5Wrx8mqF5MjzVpTdviqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC1lJOV%2FzLyAz8zYZKtwDv5EtfHjGkFz%2BM4rqc040dh%2FNmXktWgLYduOc%2Fo1cVg5IsEQaZk7cI%2FqD9yEPqzo496SSvEzZWC3lZsSUf2YlaQxdfPHhpdqxquFKkAPllmOUE%2BLqbRo8zhsFueGD%2FcX42DlW8BzyGf%2FTPV5RTZXKNMAMjq13K8wjhrFn0BPJuDe%2BOhKb%2FB%2BIthrIzfYzsnz2ewLrgWAtan3HRIqSN0nPKAv2j1xyDh3a1vFnWvnaZpNTKMuFX3DS%2F7mv6B8k4sbR0YlkzxhzkqoM55EdlJL%2BdSfgxd03kfFRz2l86fa9gxeC%2FtdYlsbhklXouiIxkPGeRgOGLz8B8ri0YR7%2FxwPOkG1EhoBrCUKVr0EFgmk5YZnyjTh%2FKGr9sapC45Vmuii2kmTEX7fP%2Fw3bQeUqUNuZXpPBXQXaSr%2FYJTx98ZOq3aAmCRiev8kXQxW31WKEwl59By%2FBkxaAJ7NFnCIMJ78kHALrvSAdistJOmTMUTalc49NCKEO89RtjPxNfa9fb68dOaYmzb31g36BoegCE3rOiYXbMpXf8dgcE98rOX%2FFtSX0mvDYF2cccsj%2F1%2B0uIrxqXNuJN2ftuZlNfdvGc6c15nM8Kj4dfVUn8KWXDTTQ2vYiiakxCgj5ny4Dorcwg%2B71vAY6pgGZOBLjalTYc%2BesBQTpobnQFNsZRV%2BVmp%2FHLTedC6HoHev51XLn%2FZnAyM%2B3O03xccjxtYn%2Bl5ROhbH0jIDypj1OnnAZNLpV9aAD6ru1ym7gU6j7tlNfE9ciZTSyB0iIrmn7SXlxEaNiJh7EAjDeotkc4oyj%2BdIyIR1IfIJH51MS6%2BT%2FBSkpjy40ssv0Nctg4Qa2v0PivhqdUoYr8w3H4bVVOIPoaqf4&X-Amz-Signature=5d121de4478c8f9167ae365171aa600c1ce55055ee3a9a1fe686e3f28fcb7490&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCFL4R%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx%2FUVI84l5TSyII3emhJwB8Jqn07UuH5XRA9Thep7rdAiBAIjR0b6Lv45hynmCbXlks5BVg5Wrx8mqF5MjzVpTdviqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC1lJOV%2FzLyAz8zYZKtwDv5EtfHjGkFz%2BM4rqc040dh%2FNmXktWgLYduOc%2Fo1cVg5IsEQaZk7cI%2FqD9yEPqzo496SSvEzZWC3lZsSUf2YlaQxdfPHhpdqxquFKkAPllmOUE%2BLqbRo8zhsFueGD%2FcX42DlW8BzyGf%2FTPV5RTZXKNMAMjq13K8wjhrFn0BPJuDe%2BOhKb%2FB%2BIthrIzfYzsnz2ewLrgWAtan3HRIqSN0nPKAv2j1xyDh3a1vFnWvnaZpNTKMuFX3DS%2F7mv6B8k4sbR0YlkzxhzkqoM55EdlJL%2BdSfgxd03kfFRz2l86fa9gxeC%2FtdYlsbhklXouiIxkPGeRgOGLz8B8ri0YR7%2FxwPOkG1EhoBrCUKVr0EFgmk5YZnyjTh%2FKGr9sapC45Vmuii2kmTEX7fP%2Fw3bQeUqUNuZXpPBXQXaSr%2FYJTx98ZOq3aAmCRiev8kXQxW31WKEwl59By%2FBkxaAJ7NFnCIMJ78kHALrvSAdistJOmTMUTalc49NCKEO89RtjPxNfa9fb68dOaYmzb31g36BoegCE3rOiYXbMpXf8dgcE98rOX%2FFtSX0mvDYF2cccsj%2F1%2B0uIrxqXNuJN2ftuZlNfdvGc6c15nM8Kj4dfVUn8KWXDTTQ2vYiiakxCgj5ny4Dorcwg%2B71vAY6pgGZOBLjalTYc%2BesBQTpobnQFNsZRV%2BVmp%2FHLTedC6HoHev51XLn%2FZnAyM%2B3O03xccjxtYn%2Bl5ROhbH0jIDypj1OnnAZNLpV9aAD6ru1ym7gU6j7tlNfE9ciZTSyB0iIrmn7SXlxEaNiJh7EAjDeotkc4oyj%2BdIyIR1IfIJH51MS6%2BT%2FBSkpjy40ssv0Nctg4Qa2v0PivhqdUoYr8w3H4bVVOIPoaqf4&X-Amz-Signature=1442050c63e0ff90c96ae8013e2fefd1d322f346b5cbe20bd11a6a45c73e6f63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
