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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKZFDN5%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6bN0u4Uuet4bKa8JpHF2gbBnqBjcaeAIx%2BBqXOyL88AiEAoxDHj83pix5zGosRX8HUR6pAwTFNdKMTwxfaQgs%2Bl40qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkLBq8wO7mzaHFinSrcAxmDR8AGAOCCHnxELc2D8RNyznBjiwn5lv5jGe0S0TSJH3OYjFD0RaiAMeCB%2F5ESWcEex6Nbu1WA1S63ZCLI0t7TYytDS6GPBzjh5jnFf2ZOmJLvm2njBQAhPC7MbIEdEKLy3f54%2BTQeTLYaA0UTojpySgwEmqmTA4%2BMw%2FO%2Fk%2F%2B2wXPQM72Dikx08VhXNbZDEQKZjSEPSk27e0ktC2aGJcWXB9mUVlAsd21zMJzvtrg0fMJdg7s5CqOySxekTQ5QkYW0a4gR4fhMCMf8ClKanpzr8VpIgQ6vR5OzKOXU8dwjAHEh2DoQUQoZ%2FkcU7zzQqAcy0iVobWTPDA9fHGiVxSUFFnQ6RvdTf%2FuyYoyejZdC4G5h2jSUQQlGGMpN%2BRDxnUPUE6JMWquEwP%2BzdIvkqe2xnTdhlFuERf5DkdqksLo312nxmsz%2Bit8lfMOjER87WbhFnC82NTf9gghIA8BBl1YmaiEG7XbWB%2FD1bdQ7ZsAaqRouE5mq8OiiWbAyN2iYbBftRhVUK3OiJZsRs3qhI8Iz9R3NKY0184JAQuW0qFiZeHZav3x3GUDeh1w6L60ct93jl4%2BpsDuLmaYK8LPvBER2Goyd%2Fc5Z3mfe1eU5WYGmajhxmjq3tXFA3YtdMJjh09QGOqUBTYBHALC%2BMBwuJ7OWWBHtkshB8dmEAaQg52roN85FCjUbBl6jpqFOu%2F%2FUFvkIZTcuPEYI49Twvfg4PN49%2BHRlTqrcfjVleoIGFQuGkuKdMq0TaleWpUW5sdmMJoCYBCh9zI%2ForQgKnDnwPFim%2FmTcm5jRezGm0nHWjtArKNVY3R46aPOk50%2B7hmhCDtuwBqRc7pefwj1aGOai6Gm8sIrm6ubLHfm8&X-Amz-Signature=de6289ae32dd6da904c4b645dabea1d6aaef3cefa35493aa82e7cdf18fed577f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKZFDN5%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6bN0u4Uuet4bKa8JpHF2gbBnqBjcaeAIx%2BBqXOyL88AiEAoxDHj83pix5zGosRX8HUR6pAwTFNdKMTwxfaQgs%2Bl40qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkLBq8wO7mzaHFinSrcAxmDR8AGAOCCHnxELc2D8RNyznBjiwn5lv5jGe0S0TSJH3OYjFD0RaiAMeCB%2F5ESWcEex6Nbu1WA1S63ZCLI0t7TYytDS6GPBzjh5jnFf2ZOmJLvm2njBQAhPC7MbIEdEKLy3f54%2BTQeTLYaA0UTojpySgwEmqmTA4%2BMw%2FO%2Fk%2F%2B2wXPQM72Dikx08VhXNbZDEQKZjSEPSk27e0ktC2aGJcWXB9mUVlAsd21zMJzvtrg0fMJdg7s5CqOySxekTQ5QkYW0a4gR4fhMCMf8ClKanpzr8VpIgQ6vR5OzKOXU8dwjAHEh2DoQUQoZ%2FkcU7zzQqAcy0iVobWTPDA9fHGiVxSUFFnQ6RvdTf%2FuyYoyejZdC4G5h2jSUQQlGGMpN%2BRDxnUPUE6JMWquEwP%2BzdIvkqe2xnTdhlFuERf5DkdqksLo312nxmsz%2Bit8lfMOjER87WbhFnC82NTf9gghIA8BBl1YmaiEG7XbWB%2FD1bdQ7ZsAaqRouE5mq8OiiWbAyN2iYbBftRhVUK3OiJZsRs3qhI8Iz9R3NKY0184JAQuW0qFiZeHZav3x3GUDeh1w6L60ct93jl4%2BpsDuLmaYK8LPvBER2Goyd%2Fc5Z3mfe1eU5WYGmajhxmjq3tXFA3YtdMJjh09QGOqUBTYBHALC%2BMBwuJ7OWWBHtkshB8dmEAaQg52roN85FCjUbBl6jpqFOu%2F%2FUFvkIZTcuPEYI49Twvfg4PN49%2BHRlTqrcfjVleoIGFQuGkuKdMq0TaleWpUW5sdmMJoCYBCh9zI%2ForQgKnDnwPFim%2FmTcm5jRezGm0nHWjtArKNVY3R46aPOk50%2B7hmhCDtuwBqRc7pefwj1aGOai6Gm8sIrm6ubLHfm8&X-Amz-Signature=be485ee8c9526e93114fff43471fd3ce13f91a36a1f4da14a7964024bc3cf4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
