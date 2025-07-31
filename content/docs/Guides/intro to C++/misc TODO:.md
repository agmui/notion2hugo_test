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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC72T6YJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4tKOWDk%2FVvs2q2g19ERO5E0g4tFmNqAYrg3OQFiPyQIgCpbTK1BMIZXcytt%2FvTzA2DNGoVsLEyPX%2BYI7wLlDZiAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIv%2FTsyT6T3cYCjNSrcA8CLJId5kN9rVYTIBO5wDp4YtRzgh218%2B05SWLq3NcdEG4Hgc88%2FFBUSXO2vra7Jr3ZZHk7%2FwREwO6rna8B5ZoIhWGp5c7pJtAMC4sPAYdxARd4JRfTeY4cOG%2BlTIVAMrbSLMxclxarFS2H6WPrYMjz%2Bx2M4TkM3nOEkymGgZRHFgQ4pdNiIPcHa6tX2edFeBe%2Fi3VbCMLPZfkRXTzJqaYGi4e419%2FcDeABS3t1nceszM58kdNwc1Cn2LnlblrLr8weVXgAD3u03J0hPqk%2BpgFUagq91otyAmJyWjjFMh2TyNE1XYk93s3h1ofVGDlzzPoZIPPbjqp%2Fmei1br%2FPT%2BaZDdhPNrIGPmRu49YV9C8LbJr9Qk90cEOj3b1cgBAXTJ9pTKI6se4yukmiDut8AVzBVz35iLzrQEkmgZu1JZn8Tv2zLA2jyvpkpNKqus26PxASWl3Pi2H71SJpHa0Bu9ObdHS5BmgEXV8B4Ki9jCdJNLTca0ZOQrXaf3eSxOasMd0uRduNjIzbxMCsG5%2B7r%2BPzXK7vklOQrmPldA7o5axKr5%2B%2F4e3RNE1lWfprvPT2XWiBskIQOUi6V9KxhUjLe4w6qfq4mXYIvqaNu764GNpYpCrRNbEfvJD%2FP9LqBMIObrMQGOqUBaFL9vg0x1KeSHS71CLcr5wJgg0tidW34fZt%2FbMs4pnz8XEw5EWSlAIpkzlYSE%2BGUr9WyRuYKPqScd14MxfbSd6f5LGSQ9iWmKZjlN5H%2BpT7oI5PCh%2FIqwIXCl4uQUJCiE42sA3neX2CJoS2Agklxwr%2BUUEVTyJsV9%2Bru3jx2K8k3xPJuRDnN37e%2FT7Lq20%2BNA%2B3wRNbYmPtvi9QH1qCfINJeO%2B8V&X-Amz-Signature=884c577da14732c87c2591a8c4fbb1bdea8fc6ea5a9d2d4b60fb6e1713b2a913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC72T6YJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4tKOWDk%2FVvs2q2g19ERO5E0g4tFmNqAYrg3OQFiPyQIgCpbTK1BMIZXcytt%2FvTzA2DNGoVsLEyPX%2BYI7wLlDZiAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIv%2FTsyT6T3cYCjNSrcA8CLJId5kN9rVYTIBO5wDp4YtRzgh218%2B05SWLq3NcdEG4Hgc88%2FFBUSXO2vra7Jr3ZZHk7%2FwREwO6rna8B5ZoIhWGp5c7pJtAMC4sPAYdxARd4JRfTeY4cOG%2BlTIVAMrbSLMxclxarFS2H6WPrYMjz%2Bx2M4TkM3nOEkymGgZRHFgQ4pdNiIPcHa6tX2edFeBe%2Fi3VbCMLPZfkRXTzJqaYGi4e419%2FcDeABS3t1nceszM58kdNwc1Cn2LnlblrLr8weVXgAD3u03J0hPqk%2BpgFUagq91otyAmJyWjjFMh2TyNE1XYk93s3h1ofVGDlzzPoZIPPbjqp%2Fmei1br%2FPT%2BaZDdhPNrIGPmRu49YV9C8LbJr9Qk90cEOj3b1cgBAXTJ9pTKI6se4yukmiDut8AVzBVz35iLzrQEkmgZu1JZn8Tv2zLA2jyvpkpNKqus26PxASWl3Pi2H71SJpHa0Bu9ObdHS5BmgEXV8B4Ki9jCdJNLTca0ZOQrXaf3eSxOasMd0uRduNjIzbxMCsG5%2B7r%2BPzXK7vklOQrmPldA7o5axKr5%2B%2F4e3RNE1lWfprvPT2XWiBskIQOUi6V9KxhUjLe4w6qfq4mXYIvqaNu764GNpYpCrRNbEfvJD%2FP9LqBMIObrMQGOqUBaFL9vg0x1KeSHS71CLcr5wJgg0tidW34fZt%2FbMs4pnz8XEw5EWSlAIpkzlYSE%2BGUr9WyRuYKPqScd14MxfbSd6f5LGSQ9iWmKZjlN5H%2BpT7oI5PCh%2FIqwIXCl4uQUJCiE42sA3neX2CJoS2Agklxwr%2BUUEVTyJsV9%2Bru3jx2K8k3xPJuRDnN37e%2FT7Lq20%2BNA%2B3wRNbYmPtvi9QH1qCfINJeO%2B8V&X-Amz-Signature=701881b2d5a7aa830e3674a7e914564eda134d70c83f6707cbf56b7b06820787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
