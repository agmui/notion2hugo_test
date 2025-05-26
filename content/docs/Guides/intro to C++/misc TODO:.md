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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFL5EQ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGL4UD%2BAPoA0yrbYjmyJbAYfWElpQJio%2FcMjV2Zo35yjAiAMXI%2FR%2F7sUuXcDRVqxZPJGYb5vM1vybfAf6HEkp9qGHyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSbSLEQzUFKuisgBqKtwD7E5utqoTtb%2BhUGyAQVUrgkNb0MJVLP3rsOfn4YLvQbnmvgayTom02%2ByKCS36s1%2BoZ%2FI8PkGZGmXXj46LJVLX0FCpeods9JuUY8cT20%2Bza%2F%2BVD9MUBFpETPX7hCiarC0jd3uu1AWgpfaRBh09rWG%2B4t0gAo%2BWGho69jWuqXpvODXlOhAfLYvGHBxr7l0DRd1aKIbSgrbMPtrjMiWwTiDf2BSMAFPYavFWxX9gK3GuOc%2FKexI8ZabJ6VAkFKVnUopyxtsDrgJCo42e5wzakM9g7p5bSfS76OJRjQ3gSi%2B4Q4YdJdmpzLJw5UsK2uz%2BImot7zR8V3GZfQdVohzUCkv%2FSxyAxytJ5U1ZbBhSy6rb1DdQQ6Cv4N9ckNiDkBtYOia%2FP1Un6zpHXaBW%2B7ZKgxYhfnzTG5qlTlvIxNrn252E%2FtmeQzu%2F2Yjmb5xqTlv7G%2BE96vEULfeooV5UMrb94%2F%2BdTLp3BDV6VMpFwPFwTRjJIpvwSFmv3zpYZ6Ac3GOz%2BOLzKXf6l8ZCvVfVL18COhHnn%2BKTvJBfK70i5ADY4ZOexbyofbkJwrPEXRWwCrscseCoE6WlIpRBDg5NMTCk7uKdwzFnxMExgs7oFEABySMwY6NgxL0WNZkclSrpvYEw6NbQwQY6pgH6KPlNs5hy7PMTRmraTFvZxNeVjMnHcOeTANqgkr7eauKtvP95nVcG75rBO5L7KFK4zYY568aC%2F%2FYCzEhB6saYj4NPBhRczxy62XZKNguYrYlFRWO%2FMBi59LnBC%2F6nA39pZrKxixPQ42CejL8Qc9OxidLEKUu2jHG3xpUCPV%2BF2pWt4vd2kZ9O9c46d2DYxfA2OrHUxUmfX9IyvTASvpeUsd59Zz7M&X-Amz-Signature=e5e310163503eaeda0f513f6108714381d7a31330d73649290d692f00973905a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFL5EQ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGL4UD%2BAPoA0yrbYjmyJbAYfWElpQJio%2FcMjV2Zo35yjAiAMXI%2FR%2F7sUuXcDRVqxZPJGYb5vM1vybfAf6HEkp9qGHyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSbSLEQzUFKuisgBqKtwD7E5utqoTtb%2BhUGyAQVUrgkNb0MJVLP3rsOfn4YLvQbnmvgayTom02%2ByKCS36s1%2BoZ%2FI8PkGZGmXXj46LJVLX0FCpeods9JuUY8cT20%2Bza%2F%2BVD9MUBFpETPX7hCiarC0jd3uu1AWgpfaRBh09rWG%2B4t0gAo%2BWGho69jWuqXpvODXlOhAfLYvGHBxr7l0DRd1aKIbSgrbMPtrjMiWwTiDf2BSMAFPYavFWxX9gK3GuOc%2FKexI8ZabJ6VAkFKVnUopyxtsDrgJCo42e5wzakM9g7p5bSfS76OJRjQ3gSi%2B4Q4YdJdmpzLJw5UsK2uz%2BImot7zR8V3GZfQdVohzUCkv%2FSxyAxytJ5U1ZbBhSy6rb1DdQQ6Cv4N9ckNiDkBtYOia%2FP1Un6zpHXaBW%2B7ZKgxYhfnzTG5qlTlvIxNrn252E%2FtmeQzu%2F2Yjmb5xqTlv7G%2BE96vEULfeooV5UMrb94%2F%2BdTLp3BDV6VMpFwPFwTRjJIpvwSFmv3zpYZ6Ac3GOz%2BOLzKXf6l8ZCvVfVL18COhHnn%2BKTvJBfK70i5ADY4ZOexbyofbkJwrPEXRWwCrscseCoE6WlIpRBDg5NMTCk7uKdwzFnxMExgs7oFEABySMwY6NgxL0WNZkclSrpvYEw6NbQwQY6pgH6KPlNs5hy7PMTRmraTFvZxNeVjMnHcOeTANqgkr7eauKtvP95nVcG75rBO5L7KFK4zYY568aC%2F%2FYCzEhB6saYj4NPBhRczxy62XZKNguYrYlFRWO%2FMBi59LnBC%2F6nA39pZrKxixPQ42CejL8Qc9OxidLEKUu2jHG3xpUCPV%2BF2pWt4vd2kZ9O9c46d2DYxfA2OrHUxUmfX9IyvTASvpeUsd59Zz7M&X-Amz-Signature=c5fad355c4fdd7c2ed18fc7563d74033f7fa48a908fdcd15ebf79681b41b1652&X-Amz-SignedHeaders=host&x-id=GetObject)

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
