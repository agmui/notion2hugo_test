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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TWWH2A%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F4McMpTCZZ%2F9fIhVLYxjn3EmKDDsxYc5nH2jScM8HRAiA8rxXqZZR9l1chqSv4Hj5jkAidgCTQfgNuKdOjCu0qByr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMQb5ZuHRVhK%2B5zSxqKtwD8jJ3g9ihes6AlDLCfUtWLsGOwgAJwfXD9O9mqK1tN4jfEcxXWGlHZu6kkRXzABn3Kch%2FPoKBhGPggXp8i55t8KuDPduWpAH61rgRsqnd%2FKc3cTzWvV%2F%2BdpQ0xCvUAtgbJUc2EV2svW4PdAZWcc8H4lz%2BRelsdLYbvnUFrobKuazFTK0SG%2B4D7ZAv83ngBesk1OSzO8nMVVwZCX3MzNj%2BF4iKgAv%2BFXQl%2BEnOpljcEmDUnRtlDWldPMe6yHKswpLzdAHV3WJAgxmDDccXwg3CzE0v%2FWI4CSy7gsEhk92AlUOj8DXEwdwEHac2mLhMbZKQbMDytHcs%2B58d0xmqgg1fG%2BlTJ3oupNYg9leUFTEN%2B5NfRt569LAwJTato2rVa0cBmpRWCth66BI8a1CQQsysnij6TQ2Vk6%2F3wMDF7TkBfzD2Ubf3NLeWNym8eUvN9Anygn63zYyGCz%2BVHpOrBZ%2B9qCC%2Bhe86ORfxfsyGKLxTgAhnHvLck0yTnAVT8fk1pJdIAAGFJX2GPGro8XiS2vUDxaobkKsoyrt%2BkDclLcFFesuOQrCGTV77aAa4MbOD0qXlrdkL4kS9ZdEj%2BaecSSpxNwxoUCcJlchAdJZzSLX76JHGaOeihI6Q8N84Tl0w1oq6wAY6pgGvuC1mGlnS7LHcxNYvwAA02PKb4IcJuxI2Gj4Ibqse9W00a5vOpJnCfpa%2BPxdwd5W9y5kcOOrN6BsSLOyXyT6E8b2IluUltimRk49n68ivGY3HNSWKlZlU1ViKvdXo41UkaPHxiwvW7dRUPHJ0qoHDmwHxFnJ%2FiWMm%2BOG5uMbV6AO%2Fp1MRaAbV1htyaAxP9m1DECkn4Ql5ILlHa3BRctalaSZEyEkf&X-Amz-Signature=1c98777c2b168c83313bd2ff88e99d06e258bab8b2304bfb41ae1010ba7be85f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TWWH2A%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F4McMpTCZZ%2F9fIhVLYxjn3EmKDDsxYc5nH2jScM8HRAiA8rxXqZZR9l1chqSv4Hj5jkAidgCTQfgNuKdOjCu0qByr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMQb5ZuHRVhK%2B5zSxqKtwD8jJ3g9ihes6AlDLCfUtWLsGOwgAJwfXD9O9mqK1tN4jfEcxXWGlHZu6kkRXzABn3Kch%2FPoKBhGPggXp8i55t8KuDPduWpAH61rgRsqnd%2FKc3cTzWvV%2F%2BdpQ0xCvUAtgbJUc2EV2svW4PdAZWcc8H4lz%2BRelsdLYbvnUFrobKuazFTK0SG%2B4D7ZAv83ngBesk1OSzO8nMVVwZCX3MzNj%2BF4iKgAv%2BFXQl%2BEnOpljcEmDUnRtlDWldPMe6yHKswpLzdAHV3WJAgxmDDccXwg3CzE0v%2FWI4CSy7gsEhk92AlUOj8DXEwdwEHac2mLhMbZKQbMDytHcs%2B58d0xmqgg1fG%2BlTJ3oupNYg9leUFTEN%2B5NfRt569LAwJTato2rVa0cBmpRWCth66BI8a1CQQsysnij6TQ2Vk6%2F3wMDF7TkBfzD2Ubf3NLeWNym8eUvN9Anygn63zYyGCz%2BVHpOrBZ%2B9qCC%2Bhe86ORfxfsyGKLxTgAhnHvLck0yTnAVT8fk1pJdIAAGFJX2GPGro8XiS2vUDxaobkKsoyrt%2BkDclLcFFesuOQrCGTV77aAa4MbOD0qXlrdkL4kS9ZdEj%2BaecSSpxNwxoUCcJlchAdJZzSLX76JHGaOeihI6Q8N84Tl0w1oq6wAY6pgGvuC1mGlnS7LHcxNYvwAA02PKb4IcJuxI2Gj4Ibqse9W00a5vOpJnCfpa%2BPxdwd5W9y5kcOOrN6BsSLOyXyT6E8b2IluUltimRk49n68ivGY3HNSWKlZlU1ViKvdXo41UkaPHxiwvW7dRUPHJ0qoHDmwHxFnJ%2FiWMm%2BOG5uMbV6AO%2Fp1MRaAbV1htyaAxP9m1DECkn4Ql5ILlHa3BRctalaSZEyEkf&X-Amz-Signature=48f2fafaf33acadb69058eb8e52990d8b1157de70ee2794b5d8a653472d9e418&X-Amz-SignedHeaders=host&x-id=GetObject)

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
