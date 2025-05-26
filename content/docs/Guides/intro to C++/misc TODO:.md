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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOFB7OY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDekruvXGmmKD9%2FRl%2BX1RBFy02mM1kSq1N04ldrLlmJfAIgER15aXath5ok9oXlTOx9QhXGuQ9Hejx2LrsdwEhlgvIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIQ1%2BbO7TDInv4eCYyrcA%2FeHRjITexmKy0EOw7Ag69KUJTEGdYDMqkVHHAhgRdgQdKbz%2FcdASCBDI4sBjP64%2F4XTFsLwFRgjrE%2BqQDkFxXcGonVAg2uG%2BkE0g3xV%2FNyQgNIozr0CyBN94IQ5JB2AlsN1Tfz4FXIkosy6ONDfh9wJjcXdAh%2BFrRibxhp98FU%2FWJEMyt9kA09o5OWcsmzx8TpL6SzrmYG13sGfIIaECclqdZQsE54GOF8MvI6NuYt%2BvoQKj1XHUR4haGX2O2hQJO7%2FNNnRTnkX3OLvImL0XJxAvdNwLYOQcBexjdON6urYZ784t5E0RS%2BhxZce6GB%2BCxuCOx2jbf0XdAsHRf91QnW3eMpDZjqveHTJz8VSa3u6VeAf0ZI2IDxZJOxPnyJ5W0EknkhQWrbHDHICDI254aBOcWaf6tZlWS0l9eIAgcYZoLIpbIJ%2B0MAm%2BFTf5LxDcrh%2F3E395j1BNV3N%2Bwg9cEeLZQlk0XYak3FAK%2F7lV48v1qvvBqqGVsA5MDRit9TrS0mCIvHq6fMorhqdzG6kHlmuCeJ6GuxCvjXrBQ5W8Gor31FwkNrjQGiKvm01%2F44hd0QudQ6ptll18jXyGZYv7xkorKts%2BP1RtTc8uMgX9yutKRZNRF9mGdsQf0duMNSq0cEGOqUBf0tqdgcUDsIZeKOrHusXjJt8yJZN%2B8jgRXI770LG0XLrzwD4vOYKM6pSjr6pGWITcf6wnVjTuXNeY%2BnVJFZc6XgYTrgK9%2F%2F6uIg7tNz7baftWzt35%2FJvMoBZnU1ChUPUp801BDkoyfwEM%2FBaBIDHwLzpwmhaRmMf88FyKudsOZbXWWwk%2Bo%2F8juk17uuRjY30kUxSTlaHLDPZpoTD4IbteT5f9vqj&X-Amz-Signature=7c37024e4e6b39c3fd3e2285a4409631d4a9ccd979f0daf003ac1083f6396db5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOFB7OY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDekruvXGmmKD9%2FRl%2BX1RBFy02mM1kSq1N04ldrLlmJfAIgER15aXath5ok9oXlTOx9QhXGuQ9Hejx2LrsdwEhlgvIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIQ1%2BbO7TDInv4eCYyrcA%2FeHRjITexmKy0EOw7Ag69KUJTEGdYDMqkVHHAhgRdgQdKbz%2FcdASCBDI4sBjP64%2F4XTFsLwFRgjrE%2BqQDkFxXcGonVAg2uG%2BkE0g3xV%2FNyQgNIozr0CyBN94IQ5JB2AlsN1Tfz4FXIkosy6ONDfh9wJjcXdAh%2BFrRibxhp98FU%2FWJEMyt9kA09o5OWcsmzx8TpL6SzrmYG13sGfIIaECclqdZQsE54GOF8MvI6NuYt%2BvoQKj1XHUR4haGX2O2hQJO7%2FNNnRTnkX3OLvImL0XJxAvdNwLYOQcBexjdON6urYZ784t5E0RS%2BhxZce6GB%2BCxuCOx2jbf0XdAsHRf91QnW3eMpDZjqveHTJz8VSa3u6VeAf0ZI2IDxZJOxPnyJ5W0EknkhQWrbHDHICDI254aBOcWaf6tZlWS0l9eIAgcYZoLIpbIJ%2B0MAm%2BFTf5LxDcrh%2F3E395j1BNV3N%2Bwg9cEeLZQlk0XYak3FAK%2F7lV48v1qvvBqqGVsA5MDRit9TrS0mCIvHq6fMorhqdzG6kHlmuCeJ6GuxCvjXrBQ5W8Gor31FwkNrjQGiKvm01%2F44hd0QudQ6ptll18jXyGZYv7xkorKts%2BP1RtTc8uMgX9yutKRZNRF9mGdsQf0duMNSq0cEGOqUBf0tqdgcUDsIZeKOrHusXjJt8yJZN%2B8jgRXI770LG0XLrzwD4vOYKM6pSjr6pGWITcf6wnVjTuXNeY%2BnVJFZc6XgYTrgK9%2F%2F6uIg7tNz7baftWzt35%2FJvMoBZnU1ChUPUp801BDkoyfwEM%2FBaBIDHwLzpwmhaRmMf88FyKudsOZbXWWwk%2Bo%2F8juk17uuRjY30kUxSTlaHLDPZpoTD4IbteT5f9vqj&X-Amz-Signature=c5cd6fa93058d838f96f304ffa09f527cb620826954bb6906a3906ac4c77391b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
