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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDNAK7W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErH1PUingzXAQ9ZDIANuS6gTxwxfQcvBRvUITLydz%2FtAiB%2BHN8S81nGGmE9T69AG%2F3IuWSl2m0yPKqPZRmIMDlvJCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmp0ff6C%2BIM%2FleZiGKtwD5C2I6tAiSU%2FOIGk5iT3er9r%2BXFTU%2Fo9xVDXyMyVnZ99dBiQI95lAAIeuBg0DG5jK5uV%2BlBgx8Jx6ZEYt5mmKmbbNxmwKcGfKdWAY1ScE75kDurE0eGLxoE%2BlsijUDlukQ%2F5qEs6BuegWSY4nWx2nV8BUw3udt24qjfDZ2yibWQIAxykt8N9cyzbdOpBwhc6SXId%2FVig9N8jj0e0AXpH5%2FEQyISgMypKV8PWRaDRntSMdPUotRGRmJ0tQIsR08VL%2FFIhMRE8B9vH5QWeeDFuLAg%2BZSS3jLuqDUAMt9Maw3V0SX6WUBCooYRb2kWSI1NTaq0XK4vboMX8zJNk9a3H2HS9EgiW7iDncNIvAwtRgr4Ijh0e1n%2FAOS6A27jZLVP8Dm8C9e1W%2FG6sljWHsFa7MRNsbjdarMFIQwBcYV4qaK1UJFTA1JtKQGNaPBYXGFLowgG0Maa5ar%2FfSkMyTLm6Cw7yYG3qBqZCdnlRPeNzRIGB62vM2ulHYOlSVQqXaKvHLZ8tjCMqhD4T73BhY23jY8y2KdbTSlnxemb%2BaPU%2Bwt3uQTpYydfoOxSFp%2BkbB2h2LvyJ4ooerCrVluYE3R%2BtuVb33WB4tWupKABIDDjYIssslsfUpgd0XhY5NCVcw2cn0wAY6pgEo2gVLbhKFfH2nD1V%2FokGRgpQXTm%2FGjnaiZlRRHOjVyBGrMzpgOlL6hFZj80rauIQ1Z5VAS1hOCkIzUV3rKZqTbIC3UANIOppHH1So8iMjVmiRQMFflcx6r%2B18WRKmAU516lKQzDUX6ISbgKufNUbgkq08oggotd7IiqsnvwW%2BNuhJOjjop1a13kp52xxdSVkLh5wk7k3NKvPFGaYDEAEF1aIotL4e&X-Amz-Signature=0fdc227ce8f1ff01f88de2e0b0499bb9d94766065b0432b06f8cf88cdd152ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDNAK7W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErH1PUingzXAQ9ZDIANuS6gTxwxfQcvBRvUITLydz%2FtAiB%2BHN8S81nGGmE9T69AG%2F3IuWSl2m0yPKqPZRmIMDlvJCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmp0ff6C%2BIM%2FleZiGKtwD5C2I6tAiSU%2FOIGk5iT3er9r%2BXFTU%2Fo9xVDXyMyVnZ99dBiQI95lAAIeuBg0DG5jK5uV%2BlBgx8Jx6ZEYt5mmKmbbNxmwKcGfKdWAY1ScE75kDurE0eGLxoE%2BlsijUDlukQ%2F5qEs6BuegWSY4nWx2nV8BUw3udt24qjfDZ2yibWQIAxykt8N9cyzbdOpBwhc6SXId%2FVig9N8jj0e0AXpH5%2FEQyISgMypKV8PWRaDRntSMdPUotRGRmJ0tQIsR08VL%2FFIhMRE8B9vH5QWeeDFuLAg%2BZSS3jLuqDUAMt9Maw3V0SX6WUBCooYRb2kWSI1NTaq0XK4vboMX8zJNk9a3H2HS9EgiW7iDncNIvAwtRgr4Ijh0e1n%2FAOS6A27jZLVP8Dm8C9e1W%2FG6sljWHsFa7MRNsbjdarMFIQwBcYV4qaK1UJFTA1JtKQGNaPBYXGFLowgG0Maa5ar%2FfSkMyTLm6Cw7yYG3qBqZCdnlRPeNzRIGB62vM2ulHYOlSVQqXaKvHLZ8tjCMqhD4T73BhY23jY8y2KdbTSlnxemb%2BaPU%2Bwt3uQTpYydfoOxSFp%2BkbB2h2LvyJ4ooerCrVluYE3R%2BtuVb33WB4tWupKABIDDjYIssslsfUpgd0XhY5NCVcw2cn0wAY6pgEo2gVLbhKFfH2nD1V%2FokGRgpQXTm%2FGjnaiZlRRHOjVyBGrMzpgOlL6hFZj80rauIQ1Z5VAS1hOCkIzUV3rKZqTbIC3UANIOppHH1So8iMjVmiRQMFflcx6r%2B18WRKmAU516lKQzDUX6ISbgKufNUbgkq08oggotd7IiqsnvwW%2BNuhJOjjop1a13kp52xxdSVkLh5wk7k3NKvPFGaYDEAEF1aIotL4e&X-Amz-Signature=c04af7ae8252fecc6e02c19cf1cdb904f50eb2c270a18fba7d3b264c8b9fdc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
