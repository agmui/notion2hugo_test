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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXFSOCB%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyxV9H4RlRoN55GYJBm9bW5L9ykNpk%2BUiMm5dX9Yv4MwIhAOww7sFxadhTaAKCf73wUgzcYG%2BG1oMwro5kdFP7hvQdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwyqGAcGym8gTNzLKoq3AOsiz17x0BYqayvZmoLUFOdhZDuj9P5gsGI%2FmvI74sqm%2FEkBihQ9cjm63eultj5WZRCUggO8ADFOw7Xbbbx%2FP9cpza7lPAh%2BrE5V3fBeJ4CAr8RqUtqIp5MNRP1YThng5GuOnjvmGhFxtJwRcEK6kBW2p8t8e27zADysdEzB4vTi5rexZcOZVIn2YpZl99uwml%2BKOUwX2DwpVsJ8sIQa2YWaZLwzoMbvtPaD5lOOZ2S7Hjbar7JDOfT1Y2RgctCFLkOOv5AJ1EjVlI%2BFNq0R5xxv81Eo8Md7Vb3QTPh0rydiss5daNlLRxTjWZWmke%2BX7vpVCXCiivtOogh7xoYTZ4qiM32Fgwi5lnp9obSWkw4AzWqmevHNfQWtoiemSg%2Bc4tWtmVK7aLVl1U8TjBzp2m7hg%2FCtuz8qVaxPoMW4sSfzdxWotQbsixq%2BHDr3CpZAe4JIZgpCZ6yrEIWxXIvQMPlBkvDHxD0ySTIdTYi6pk65s69A9Po1A2lMaHHPZ3JEOwDXcu9CuWfQ5XCn4vDCq6wgS1MAIuYUEXNZM1k1WU%2F0eS%2By9gg9HIOFyglCh5QZoE5tyUthdQKGDWYGnckOReBBe3bTd4Lggta60Tpvc02O4BnVRIZBqtiHEPAgjDH8OXHBjqkAW3NuoS0SvEtfOQNLs%2BLPsc0DZgPox%2BzdzkfAH463VqcelTKybU9TCrVF0nPu%2BRMQNVUIG9YC3LzfwT%2FXBxspTm7VzUCjeS5qrWCsShmwrANSWHR7gPaR1kZkQhV3tbKh3hNYut3wRBnPw0NoZIYMRfn4%2B%2B89gDrIFsblX1LEQBm%2FRR89gI7U42ZqtN86hASgwhq0EXwoA0VDu%2B5uQZL1Y3hI6zC&X-Amz-Signature=d555a9419404182907f00d0e1c6be74aa5f370b312623132b2b180f564ae769b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXFSOCB%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyxV9H4RlRoN55GYJBm9bW5L9ykNpk%2BUiMm5dX9Yv4MwIhAOww7sFxadhTaAKCf73wUgzcYG%2BG1oMwro5kdFP7hvQdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwyqGAcGym8gTNzLKoq3AOsiz17x0BYqayvZmoLUFOdhZDuj9P5gsGI%2FmvI74sqm%2FEkBihQ9cjm63eultj5WZRCUggO8ADFOw7Xbbbx%2FP9cpza7lPAh%2BrE5V3fBeJ4CAr8RqUtqIp5MNRP1YThng5GuOnjvmGhFxtJwRcEK6kBW2p8t8e27zADysdEzB4vTi5rexZcOZVIn2YpZl99uwml%2BKOUwX2DwpVsJ8sIQa2YWaZLwzoMbvtPaD5lOOZ2S7Hjbar7JDOfT1Y2RgctCFLkOOv5AJ1EjVlI%2BFNq0R5xxv81Eo8Md7Vb3QTPh0rydiss5daNlLRxTjWZWmke%2BX7vpVCXCiivtOogh7xoYTZ4qiM32Fgwi5lnp9obSWkw4AzWqmevHNfQWtoiemSg%2Bc4tWtmVK7aLVl1U8TjBzp2m7hg%2FCtuz8qVaxPoMW4sSfzdxWotQbsixq%2BHDr3CpZAe4JIZgpCZ6yrEIWxXIvQMPlBkvDHxD0ySTIdTYi6pk65s69A9Po1A2lMaHHPZ3JEOwDXcu9CuWfQ5XCn4vDCq6wgS1MAIuYUEXNZM1k1WU%2F0eS%2By9gg9HIOFyglCh5QZoE5tyUthdQKGDWYGnckOReBBe3bTd4Lggta60Tpvc02O4BnVRIZBqtiHEPAgjDH8OXHBjqkAW3NuoS0SvEtfOQNLs%2BLPsc0DZgPox%2BzdzkfAH463VqcelTKybU9TCrVF0nPu%2BRMQNVUIG9YC3LzfwT%2FXBxspTm7VzUCjeS5qrWCsShmwrANSWHR7gPaR1kZkQhV3tbKh3hNYut3wRBnPw0NoZIYMRfn4%2B%2B89gDrIFsblX1LEQBm%2FRR89gI7U42ZqtN86hASgwhq0EXwoA0VDu%2B5uQZL1Y3hI6zC&X-Amz-Signature=38494ea059434ee565af8705ef223b557bc9777e8fc32122a169eec1bde5e939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
