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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXBNSBG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICJLQDnZTB%2FG8GoWwZ%2Bgoygq6XGmzRNmOmfgWiyM%2FrGDAiArhGhiAbi2Nonhy2CVjk84YTMf5Tr5x8w09S%2BlF1IYNyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMxMF3OY8jnVxIDQw8KtwDou2wUnLa4l95lYkfat4fuDrW%2FXlOaguSPE4tyrCTzhu8cNF8pwZV125AJQmN8VQ8gVQ2pARIJ2kEln5piMmDAaOy5ESu80V7ZvS%2Fojg1dwT7gkq5JLO96JZ%2FNOEIyBp8ViqXlA%2FoFibMiOzy1Y3VUX2cKjOY8em2Hq337IZZUg5QG5vSlfdB9GkTx4FXe8wDzasjdOPjHPfMCpBsOFpOY5V%2FYrmvyhZU44f7qU9vUlMOqdqNr%2Fzrfb78LTwGRRfV30RJ8Lb%2FWNaQGHeNGsBrLAWC171oXq2yHi9Ie2%2FTm2HEW1gCig4SD4xQFTD7GEz279l%2Fof9IddIy7szkjV9%2BZATLTJpfjLLPhXMBZKr3t85adMQTgepA4MWBBXWGhaf%2BIfFSMXCFOhdjVaoX%2FBJekjv3JSwcytYxzH9rKCAQWvS79Mne6KF7Y0i%2F%2Fgqq3clo2M1qzGOvz075EJ0J%2FAL0iddVvf5VZNEsh%2Bl9rBA6NH4QU7xCjyytDeD6LbIKBkBH8Vuhrk5HKalqF5egJ8Op8CY5ONveoR2FGHFaTgFFhrK1Vky4pgISxht6QSGjGX2xqSSRcTIReOjkNzF5qopATpUs8Xza9A%2BRT%2B8W3h3HgGWUEFOaFUqYrWtzOpwwg62jwwY6pgE8Z726mNSMVLP9vfWhC%2B0TYpOflaZ2l1BDgGRxhUbCqoCYCSG3%2BuJNVDZJGUHccO%2BnyCFpEKVkftzPSBSgtIicEWHI6XlAouJ3FjtZdMywYOkCDeZxsk2VIw%2Bfjpq%2Fp12szhM9cAy5xD%2BZmGDl9MqA5OrlvjDsYQdzb739D5DLJaEKTYqf8qqUKmr6a0WFyfJePG4%2FJkGPGLAfsIaptR3Irx24GOYa&X-Amz-Signature=bcbadf34effec670b9ba21036e0302f50a44bc295ac8ded59ba03479340216da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXBNSBG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICJLQDnZTB%2FG8GoWwZ%2Bgoygq6XGmzRNmOmfgWiyM%2FrGDAiArhGhiAbi2Nonhy2CVjk84YTMf5Tr5x8w09S%2BlF1IYNyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMxMF3OY8jnVxIDQw8KtwDou2wUnLa4l95lYkfat4fuDrW%2FXlOaguSPE4tyrCTzhu8cNF8pwZV125AJQmN8VQ8gVQ2pARIJ2kEln5piMmDAaOy5ESu80V7ZvS%2Fojg1dwT7gkq5JLO96JZ%2FNOEIyBp8ViqXlA%2FoFibMiOzy1Y3VUX2cKjOY8em2Hq337IZZUg5QG5vSlfdB9GkTx4FXe8wDzasjdOPjHPfMCpBsOFpOY5V%2FYrmvyhZU44f7qU9vUlMOqdqNr%2Fzrfb78LTwGRRfV30RJ8Lb%2FWNaQGHeNGsBrLAWC171oXq2yHi9Ie2%2FTm2HEW1gCig4SD4xQFTD7GEz279l%2Fof9IddIy7szkjV9%2BZATLTJpfjLLPhXMBZKr3t85adMQTgepA4MWBBXWGhaf%2BIfFSMXCFOhdjVaoX%2FBJekjv3JSwcytYxzH9rKCAQWvS79Mne6KF7Y0i%2F%2Fgqq3clo2M1qzGOvz075EJ0J%2FAL0iddVvf5VZNEsh%2Bl9rBA6NH4QU7xCjyytDeD6LbIKBkBH8Vuhrk5HKalqF5egJ8Op8CY5ONveoR2FGHFaTgFFhrK1Vky4pgISxht6QSGjGX2xqSSRcTIReOjkNzF5qopATpUs8Xza9A%2BRT%2B8W3h3HgGWUEFOaFUqYrWtzOpwwg62jwwY6pgE8Z726mNSMVLP9vfWhC%2B0TYpOflaZ2l1BDgGRxhUbCqoCYCSG3%2BuJNVDZJGUHccO%2BnyCFpEKVkftzPSBSgtIicEWHI6XlAouJ3FjtZdMywYOkCDeZxsk2VIw%2Bfjpq%2Fp12szhM9cAy5xD%2BZmGDl9MqA5OrlvjDsYQdzb739D5DLJaEKTYqf8qqUKmr6a0WFyfJePG4%2FJkGPGLAfsIaptR3Irx24GOYa&X-Amz-Signature=fab2875bc0218d08902a94ea93661c8eb4cda213da504406a05152ebea26ade1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
