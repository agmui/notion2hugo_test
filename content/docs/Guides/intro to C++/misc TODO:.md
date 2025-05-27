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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMKHN2F%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7VxIwe8C6k9n3hiDtLOPyBwpv4wilxm37uoqax852uAiEAncwd4XKgwBQ98j1yBNo3SpuHB3XhPNktQUqPp%2BBYxbsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDGKyro5RFxcc6wuVhyrcAwWYfNqollEPj6RDoDUxDejJw5uFsf9BUJ6SCB%2BzjeSD353HPvMWdke9v4SYpwZqq7AVJBgTY%2B7IlMHYq8KY5%2BvY8Yksce%2FbAUbkU8%2BBja1qMVJ12NA%2BBKHkAFj5zn%2BcrXc1FuwA2JIQIs%2BFdEePppAjV2p5uw%2BPrOulOgV%2F4DKJ2lOaulcQnRQnW%2BibJ2AXx3Dr3cZlmWfJuTe2CVrPiwYCqkYI57ERJ6EjdqO1fZbVkzNj%2FBuLX5rRfBNBeWO8ijuRpYN%2FmEGNG2ERAZgUwnSsghnnef%2BhPPAiFQGxNzVRhp1CNegCsk5PKle%2Bj733ia9zmSexosQmGicYphBJwWoLNnN0ACcKHhibJ5qhVFovfhfdCJlAdNCvT7NCPw%2B7QpQkXHxUgjSCXCXmGg4JoOTdKpsj1ZqU%2FzHqrriaQWbGfEtc2%2FFiHaJS3Ub1C67XNlLbknrOHNpDP5PhyfSy7x%2BLfdyNWlKTg2%2Bz51QimkmqRiPNpGgub2TjbLMZ005BMbCwCV4ilRTPfptCGGmXeoFwJqHAD%2FQt%2BqY5SCN%2F5%2BuPPpjuscGk0MX8FEyVVmNdNjXPDM0z6%2F0MQuQAptzDboFBqA9qoE9A8szIQLCT7F0YJXBmpTy95i%2FM5nHMMKi11cEGOqUB1Vaxl85RuZAPUDJM5z%2F4ZJmDoEqkhNd7IIalTxer4fCPZJgKyttiiBTUKSre8vk4IEstfI6dONoVJleyEsPxKM2t9rA%2BjxmcQqo%2FjP2SxwpPsNQdAJND0v5Y286w5iUqk%2FTk9FDreKmHaHMAsQuZg%2Fn5qvo2qB0xEr1aYqG2vaMTthDx%2B5N1kaAOT%2FFox2hfdy4qmtxNvbfKqsifpcxNWG9o6Dy3&X-Amz-Signature=b2a761ae79223fd25cb4431c8c14f101bc2e19c2ede2a598e386fee5b9a7f168&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMKHN2F%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7VxIwe8C6k9n3hiDtLOPyBwpv4wilxm37uoqax852uAiEAncwd4XKgwBQ98j1yBNo3SpuHB3XhPNktQUqPp%2BBYxbsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDGKyro5RFxcc6wuVhyrcAwWYfNqollEPj6RDoDUxDejJw5uFsf9BUJ6SCB%2BzjeSD353HPvMWdke9v4SYpwZqq7AVJBgTY%2B7IlMHYq8KY5%2BvY8Yksce%2FbAUbkU8%2BBja1qMVJ12NA%2BBKHkAFj5zn%2BcrXc1FuwA2JIQIs%2BFdEePppAjV2p5uw%2BPrOulOgV%2F4DKJ2lOaulcQnRQnW%2BibJ2AXx3Dr3cZlmWfJuTe2CVrPiwYCqkYI57ERJ6EjdqO1fZbVkzNj%2FBuLX5rRfBNBeWO8ijuRpYN%2FmEGNG2ERAZgUwnSsghnnef%2BhPPAiFQGxNzVRhp1CNegCsk5PKle%2Bj733ia9zmSexosQmGicYphBJwWoLNnN0ACcKHhibJ5qhVFovfhfdCJlAdNCvT7NCPw%2B7QpQkXHxUgjSCXCXmGg4JoOTdKpsj1ZqU%2FzHqrriaQWbGfEtc2%2FFiHaJS3Ub1C67XNlLbknrOHNpDP5PhyfSy7x%2BLfdyNWlKTg2%2Bz51QimkmqRiPNpGgub2TjbLMZ005BMbCwCV4ilRTPfptCGGmXeoFwJqHAD%2FQt%2BqY5SCN%2F5%2BuPPpjuscGk0MX8FEyVVmNdNjXPDM0z6%2F0MQuQAptzDboFBqA9qoE9A8szIQLCT7F0YJXBmpTy95i%2FM5nHMMKi11cEGOqUB1Vaxl85RuZAPUDJM5z%2F4ZJmDoEqkhNd7IIalTxer4fCPZJgKyttiiBTUKSre8vk4IEstfI6dONoVJleyEsPxKM2t9rA%2BjxmcQqo%2FjP2SxwpPsNQdAJND0v5Y286w5iUqk%2FTk9FDreKmHaHMAsQuZg%2Fn5qvo2qB0xEr1aYqG2vaMTthDx%2B5N1kaAOT%2FFox2hfdy4qmtxNvbfKqsifpcxNWG9o6Dy3&X-Amz-Signature=912907d681dcf6fa3d56659512b051372dd1b27a63ecc6cf1c254cd699387c08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
