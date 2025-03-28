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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZFMOUNK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPd%2FHlmohf9hyNHObIGNB%2FfOJJ4FQ0%2BFehFybvHtl6awIhAPtliSnBpqY2LBtOiqy%2FWZoufZwla1w0t5y3k0C1gK3xKv8DCFIQABoMNjM3NDIzMTgzODA1IgzK1FsxYaVqC3VMfkkq3AMbH31ydlxsT7em6gzGhuk6tqyWlx2y6gb9iKjJ7HpKY5n7TB8VXQrGTbj5RcYPF0XO86zQMtFd1%2BXZM8pNdAkPpFSlUWoBEjdwP8BO%2BkQ%2BSfYrzoSm1jZvX06I9zwwNBSVJotm4dJlq4QQmMEQ01JyUsGPjxnTjclSh%2FBO6%2BANCN6Z%2BdzH2ula78Dp1h390X1NLeOgl3i%2Fk9Oo2p3%2FGPJ9pVE0IIciqZ8lQGdxv59nalS2zIqz3Ymt1mTTuzuYjQ1mbrrIX8kcvsVhJ4TGeMvxOzJIpgoMVP1BRgXjfFfrRuapO2bAtId8vke9mj9cg5byNeHry6H%2Bn6QHY6cnOWXSAN%2FneGsocDL6fk8oRAVIqfHZ6p6xx1Gs7zIkVCG%2BFtXRsNBpuK1MMuXlD3oIu2532bJLK8f9e4UdUnbULZCH7w2mWRcG46qmP9BBBiBJR5ZEx%2Fqe9qgRgxpa1a4s4J8ZPe0xg0JZeTler69jKruPzRkSyyK5uJp73UuK0z4hfct1GbDqVBUHLbfo5Y19hvYHwb10%2B1ZnIp2Xl3%2F%2BYuOMip%2FN62m9cCUFPceP4xYXaaIKUSowqSggD6jSO%2BlhNf%2BpLKCLF%2FurO1nAXnqFIcsZ0klUfvmyGbbAgUb4sDCE25e%2FBjqkAYKGqigYF8IRbzk%2BipfAfjbUEm1UxLJ3SiKqIfLeVHTJxYNFgodoH9G5xBq4Be5GE2yr0R7qPMuBCm0nI5czVwN8%2BC0TA4R1v2r2LtLebAaAOTaQFyZddP5HqMBcsJeigLeF%2BxENGlB2QP6Gy7HLfgmssDRwfvX3bef9I6NRGUTazEpPqElc1DNVoAyUnTmNpc6WdlJNyK6T6SM7%2FjQ6hNHMeSDe&X-Amz-Signature=2cf087858d3639c9c509bba92e5f4e0f4b9c9182a6065e7b36fc815622238066&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZFMOUNK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPd%2FHlmohf9hyNHObIGNB%2FfOJJ4FQ0%2BFehFybvHtl6awIhAPtliSnBpqY2LBtOiqy%2FWZoufZwla1w0t5y3k0C1gK3xKv8DCFIQABoMNjM3NDIzMTgzODA1IgzK1FsxYaVqC3VMfkkq3AMbH31ydlxsT7em6gzGhuk6tqyWlx2y6gb9iKjJ7HpKY5n7TB8VXQrGTbj5RcYPF0XO86zQMtFd1%2BXZM8pNdAkPpFSlUWoBEjdwP8BO%2BkQ%2BSfYrzoSm1jZvX06I9zwwNBSVJotm4dJlq4QQmMEQ01JyUsGPjxnTjclSh%2FBO6%2BANCN6Z%2BdzH2ula78Dp1h390X1NLeOgl3i%2Fk9Oo2p3%2FGPJ9pVE0IIciqZ8lQGdxv59nalS2zIqz3Ymt1mTTuzuYjQ1mbrrIX8kcvsVhJ4TGeMvxOzJIpgoMVP1BRgXjfFfrRuapO2bAtId8vke9mj9cg5byNeHry6H%2Bn6QHY6cnOWXSAN%2FneGsocDL6fk8oRAVIqfHZ6p6xx1Gs7zIkVCG%2BFtXRsNBpuK1MMuXlD3oIu2532bJLK8f9e4UdUnbULZCH7w2mWRcG46qmP9BBBiBJR5ZEx%2Fqe9qgRgxpa1a4s4J8ZPe0xg0JZeTler69jKruPzRkSyyK5uJp73UuK0z4hfct1GbDqVBUHLbfo5Y19hvYHwb10%2B1ZnIp2Xl3%2F%2BYuOMip%2FN62m9cCUFPceP4xYXaaIKUSowqSggD6jSO%2BlhNf%2BpLKCLF%2FurO1nAXnqFIcsZ0klUfvmyGbbAgUb4sDCE25e%2FBjqkAYKGqigYF8IRbzk%2BipfAfjbUEm1UxLJ3SiKqIfLeVHTJxYNFgodoH9G5xBq4Be5GE2yr0R7qPMuBCm0nI5czVwN8%2BC0TA4R1v2r2LtLebAaAOTaQFyZddP5HqMBcsJeigLeF%2BxENGlB2QP6Gy7HLfgmssDRwfvX3bef9I6NRGUTazEpPqElc1DNVoAyUnTmNpc6WdlJNyK6T6SM7%2FjQ6hNHMeSDe&X-Amz-Signature=57a41e33feabca6fe60801dc936089ea15882b1dfa7985eaeeddee517d1f0922&X-Amz-SignedHeaders=host&x-id=GetObject)

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
