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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLKAAIO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEakpVe%2Bpy0OJt3IWjKAT45tgjDcLYJkXLAUFBlxQl20AiBNBG4z8oDV%2F55O%2Fjf3K0%2BTopOYI0gVcNfw0wLPUs%2BatSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2B0dtk4OS23ewsfbKtwDNdv8sNt67Cuk4z3x%2FH1D6qIIUUa%2BbJGaziMkZGM%2Foc%2FFr6CNONDCm%2F8rg7Q44lUGa3vvVyeelXh0AUuieOX8pRkSGoDc1XAX4OUvs9NW0E08hqKp0ZmAA4sGNqzy1O0VBhe1jVlf2rZZIZGuqJZ9VD7uBtrnQ0TvLXTSiCG6vakYkWHNubjhMjxXg5rjfpLeY1z%2Fb5dF%2BP1SM%2F86ozq22dcVU9esCmZkBF96J4VMplNLP2ND7do0dW2yfTJvNemBdOpceqK2yobgTuUnHY8n7Fjr77Rs1nX0B1fCpXikaHZ%2BIU2hkQGPZllu0LYzGoUMu35C6XqggARwYQThbsbt8dj0v3OXKbbv1EtCOztA7EIuN5jEHLOZ79R8izC8jvsQkm6A938hpHxGk%2BlOWy1ZOfJyJ7sc9ZVBTDTCtzjUcxpYtuJkBaMUsKKfcU41jbFVjeXs1PsihopKNaNlI2qUF5FN1eQGsuWQthRoEeQfUqLIjJlpuiBDFmNoRnxh80Hol0ReM2MboxLKEWJZ15TltQ2Yo4I1RH20WQvXJXXAFFvMw%2B%2Bx%2BVjVTCvbamhsC82aq%2Frtw6CfdJ8A%2BGl0jYZGkUuww%2BSxA%2BwXpbYHWrF5qwANhA38Z7lx62oZGgkwx%2BvHwgY6pgHmyOdQY6QgaoHj5tC3%2B0ShllyRHHQhhxsGCy4%2BZLO6i6yr9vQJJhPMVlmEiqqSdHmgl3ChZpfJNhVBEZRejjSdMIhjA12hq8N5Ezqc5N4IefbSmsPC9A3OJYuSiEFfkyoww32sv3M7xClFxmUAzVjbTM31CsMnNq%2BzYOYjbikmxFXqhwpgAWsL05vdXtIEgltg0Yz6rhcvGAfVVj7TiBjEx5vSOckv&X-Amz-Signature=80384efdb7afae7727450fb34b423d33d176d1e69100d824275e40eadf08a635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLKAAIO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEakpVe%2Bpy0OJt3IWjKAT45tgjDcLYJkXLAUFBlxQl20AiBNBG4z8oDV%2F55O%2Fjf3K0%2BTopOYI0gVcNfw0wLPUs%2BatSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2B0dtk4OS23ewsfbKtwDNdv8sNt67Cuk4z3x%2FH1D6qIIUUa%2BbJGaziMkZGM%2Foc%2FFr6CNONDCm%2F8rg7Q44lUGa3vvVyeelXh0AUuieOX8pRkSGoDc1XAX4OUvs9NW0E08hqKp0ZmAA4sGNqzy1O0VBhe1jVlf2rZZIZGuqJZ9VD7uBtrnQ0TvLXTSiCG6vakYkWHNubjhMjxXg5rjfpLeY1z%2Fb5dF%2BP1SM%2F86ozq22dcVU9esCmZkBF96J4VMplNLP2ND7do0dW2yfTJvNemBdOpceqK2yobgTuUnHY8n7Fjr77Rs1nX0B1fCpXikaHZ%2BIU2hkQGPZllu0LYzGoUMu35C6XqggARwYQThbsbt8dj0v3OXKbbv1EtCOztA7EIuN5jEHLOZ79R8izC8jvsQkm6A938hpHxGk%2BlOWy1ZOfJyJ7sc9ZVBTDTCtzjUcxpYtuJkBaMUsKKfcU41jbFVjeXs1PsihopKNaNlI2qUF5FN1eQGsuWQthRoEeQfUqLIjJlpuiBDFmNoRnxh80Hol0ReM2MboxLKEWJZ15TltQ2Yo4I1RH20WQvXJXXAFFvMw%2B%2Bx%2BVjVTCvbamhsC82aq%2Frtw6CfdJ8A%2BGl0jYZGkUuww%2BSxA%2BwXpbYHWrF5qwANhA38Z7lx62oZGgkwx%2BvHwgY6pgHmyOdQY6QgaoHj5tC3%2B0ShllyRHHQhhxsGCy4%2BZLO6i6yr9vQJJhPMVlmEiqqSdHmgl3ChZpfJNhVBEZRejjSdMIhjA12hq8N5Ezqc5N4IefbSmsPC9A3OJYuSiEFfkyoww32sv3M7xClFxmUAzVjbTM31CsMnNq%2BzYOYjbikmxFXqhwpgAWsL05vdXtIEgltg0Yz6rhcvGAfVVj7TiBjEx5vSOckv&X-Amz-Signature=831df198cec2caf86c408cd948adc496ca40bee130244e403a1678f6f302e6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
