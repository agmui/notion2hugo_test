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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=edc319f70b7f0e54c0ab78d5e39d2c4e673efaf3f7d0b42fe25b70fdc96c20f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=3e41d3d99d864ff72b9a1c3c43782af963cec2be5610888626e4d3f4d5a2ace1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
