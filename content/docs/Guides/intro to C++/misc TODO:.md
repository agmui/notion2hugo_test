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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMUZVV6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAESuBdl2HN6lcFpr5pSSQwB46knH1cM9NLx7Nry6fyAIhAPLx98NOH6f2QyjC8msF0KGnmtWvzPc%2FKSq0Kn5FpGgMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqw%2Bswg46ZfBpTJDYq3APEp1JsoSjyUZp0UTOkeRBGY6nLiW0xGK1zR0%2B7%2FEwvk67VslM6WlKnWC%2BRwOJk8f3ihFfcKCgAuQnp35pR3XUGXVWyyaaaXnP6mgBygMKIm3hTMWa1Uwtj5XZotmh7oOV3hA%2FZDNpjleK5eM4NVbAkAjbLBOO6PLelLuld6qVHiNfqEnvhm%2FPWm%2BJbNHCmWsqSMGGEj73HuyLk6f%2B6vjafYFOPYJIC6Cq%2FtCBrj8K8E%2F0Mbn1t7%2Ba0QBbBhUVEd4iNTg%2BbFE3P9bjpGVBlyJXdA5DskINyvJh2X2VfhAV04vJLvS2YYZ8FfjmHtFswOJj8Ahue9SCeWj0GRHqqNa2z1RxjJ2593M5oafA8PVh2M7l53aPqywdIRniy6n23XvfxdR9HQDISUDJXLcKw%2Fr51FW%2BcIKMEyslYKpnAZ9ViSczFsTLzwgOSAPXyRLu2XZVcJHNA770n6Rf00u5a%2FLma7s4aV%2BpLiiaxxnFuuopoVHENkBw%2B8FqbC0Ke%2FfE59RoHYrPf6fnYHl%2FjPFdRSiI5vA37aJFYWy56kfVPrTmROQtwGzFZX6zYdXM2nr4Y61x7WXaOUv9cEBJkvyqFiYNkPhtmAwNJLATrPZf%2F%2B%2FX4PBf3wdN1zQ6D5wqPrjDp47LBBjqkAX5T2dDIuVlvtU0q7P9LJE33HYnZWDqKjAtM%2Fg4RtjKRTlo0Rspm%2FTugeSKJbNkXFEYM4nKVvQiZAHTv%2FqXtXcipaW2zLTTmow26luLUbqcZ6eBmTI70753ov0raSlG55hh1cPHyTzpbmEQiVRFMUKOe6peEaG6%2BPmFMjYsMk6z91x6gj0PXEz5lX6et2mpgiQXFaQ4Om2GFXzUfF5cTJr7svCfp&X-Amz-Signature=b2586159e72b209bb3c976c4b0276d9e86ab6a59d3e75b1867a0f67c478a8fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMUZVV6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAESuBdl2HN6lcFpr5pSSQwB46knH1cM9NLx7Nry6fyAIhAPLx98NOH6f2QyjC8msF0KGnmtWvzPc%2FKSq0Kn5FpGgMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqw%2Bswg46ZfBpTJDYq3APEp1JsoSjyUZp0UTOkeRBGY6nLiW0xGK1zR0%2B7%2FEwvk67VslM6WlKnWC%2BRwOJk8f3ihFfcKCgAuQnp35pR3XUGXVWyyaaaXnP6mgBygMKIm3hTMWa1Uwtj5XZotmh7oOV3hA%2FZDNpjleK5eM4NVbAkAjbLBOO6PLelLuld6qVHiNfqEnvhm%2FPWm%2BJbNHCmWsqSMGGEj73HuyLk6f%2B6vjafYFOPYJIC6Cq%2FtCBrj8K8E%2F0Mbn1t7%2Ba0QBbBhUVEd4iNTg%2BbFE3P9bjpGVBlyJXdA5DskINyvJh2X2VfhAV04vJLvS2YYZ8FfjmHtFswOJj8Ahue9SCeWj0GRHqqNa2z1RxjJ2593M5oafA8PVh2M7l53aPqywdIRniy6n23XvfxdR9HQDISUDJXLcKw%2Fr51FW%2BcIKMEyslYKpnAZ9ViSczFsTLzwgOSAPXyRLu2XZVcJHNA770n6Rf00u5a%2FLma7s4aV%2BpLiiaxxnFuuopoVHENkBw%2B8FqbC0Ke%2FfE59RoHYrPf6fnYHl%2FjPFdRSiI5vA37aJFYWy56kfVPrTmROQtwGzFZX6zYdXM2nr4Y61x7WXaOUv9cEBJkvyqFiYNkPhtmAwNJLATrPZf%2F%2B%2FX4PBf3wdN1zQ6D5wqPrjDp47LBBjqkAX5T2dDIuVlvtU0q7P9LJE33HYnZWDqKjAtM%2Fg4RtjKRTlo0Rspm%2FTugeSKJbNkXFEYM4nKVvQiZAHTv%2FqXtXcipaW2zLTTmow26luLUbqcZ6eBmTI70753ov0raSlG55hh1cPHyTzpbmEQiVRFMUKOe6peEaG6%2BPmFMjYsMk6z91x6gj0PXEz5lX6et2mpgiQXFaQ4Om2GFXzUfF5cTJr7svCfp&X-Amz-Signature=c9dd99c12415e9154384c98aa8f3d40411018d57eaebab92a7529682dc6daad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
