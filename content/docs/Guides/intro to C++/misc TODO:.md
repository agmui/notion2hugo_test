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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5BHLSO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOse6HTk32P%2B2dfvI2Acr98Y2rThgOvM%2BsyDdDElVGOAIgM4A8YKmzDp6oz7mptUGGKF4SPhAXf5c7ZQOn6GutcbcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfnqMVSFdE4fw79tCrcA%2FzzH4V1S271dYVaT2cNECczszSpQ2Sb7cEQT2v9dO4jZvRmqZg3ZMQvQ0%2F2STzLweGwML69CJT5s7hby%2FyAQb6g83j0uri3O5NXRvo2ytRCOe4kalAzL7zprqSotZTA%2F5%2BVI8hKuIo3QVIUtEXBThAlYV6V5uWpCh%2FMnTU4xOIaruefl90w5lp3RYFPz9cY%2FdK4ISC2vPONzBE1Uro185WOjYMKUUPLpDs5xa9a%2Bi9%2FLCWei1gdCMQof9WRrIy5AM97telqVOCz4zGYUGKjW3H7KbHMdzCAFRm3%2B81DGUXyZFXrHSy01c1gLOnCfJUCZ84GA%2FS9lnaeGEanm8qsEoABstEerpkhaFBVp4FKqGc5uB5X7a6ekVovI7k9ZuLjYiOQvVvk8ss3Vl6eYjsQxVhHV5iFFXHWBdfPr9ch%2F9wtAXazO%2BKDdoOH3JA9WUcDiGj2WfZoi1xBOJIzvYu3Gy3PXsaNlgSl6GjU0P%2FgNam%2Bpo5fu0JHWLIBQp%2FFC050F8gt270IC0hoZjfyUwGl%2BVp7eBANjvx5RLjctrvXUq7ln0Vp1XMBW0Zl6P5VMZ7O%2B0gYYCKuBdnWV%2F8JlvydTOl8VS3k8UlGEV18ixLdOaOxRMocuiam4f3OKyxCMJ72q8QGOqUBmQ9D%2BG0iHiaoybkNHi73uOQ54Rh4nKkhPaZyb79V4dfhImLhRXHbOzukgq2pvatOtFVvpKgnFAa5pAUPubfu9f16GVEN1jHXnGVc2%2BnRTlGhsX93ywwR3LCx4A4DMMfCESJMPFWFSaxGRKH7PwLEuUcJRQdJPTAiW7N7zqgJrZoq%2FLco4efaTpHqkE6CkyYb57tHZFhbPJHfLd%2BePN4lRK6f%2BYvU&X-Amz-Signature=f2e53635696e288412a6d8b19bb470b0bdabec4aed0c26a5a3bc7ebf3447a5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5BHLSO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOse6HTk32P%2B2dfvI2Acr98Y2rThgOvM%2BsyDdDElVGOAIgM4A8YKmzDp6oz7mptUGGKF4SPhAXf5c7ZQOn6GutcbcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfnqMVSFdE4fw79tCrcA%2FzzH4V1S271dYVaT2cNECczszSpQ2Sb7cEQT2v9dO4jZvRmqZg3ZMQvQ0%2F2STzLweGwML69CJT5s7hby%2FyAQb6g83j0uri3O5NXRvo2ytRCOe4kalAzL7zprqSotZTA%2F5%2BVI8hKuIo3QVIUtEXBThAlYV6V5uWpCh%2FMnTU4xOIaruefl90w5lp3RYFPz9cY%2FdK4ISC2vPONzBE1Uro185WOjYMKUUPLpDs5xa9a%2Bi9%2FLCWei1gdCMQof9WRrIy5AM97telqVOCz4zGYUGKjW3H7KbHMdzCAFRm3%2B81DGUXyZFXrHSy01c1gLOnCfJUCZ84GA%2FS9lnaeGEanm8qsEoABstEerpkhaFBVp4FKqGc5uB5X7a6ekVovI7k9ZuLjYiOQvVvk8ss3Vl6eYjsQxVhHV5iFFXHWBdfPr9ch%2F9wtAXazO%2BKDdoOH3JA9WUcDiGj2WfZoi1xBOJIzvYu3Gy3PXsaNlgSl6GjU0P%2FgNam%2Bpo5fu0JHWLIBQp%2FFC050F8gt270IC0hoZjfyUwGl%2BVp7eBANjvx5RLjctrvXUq7ln0Vp1XMBW0Zl6P5VMZ7O%2B0gYYCKuBdnWV%2F8JlvydTOl8VS3k8UlGEV18ixLdOaOxRMocuiam4f3OKyxCMJ72q8QGOqUBmQ9D%2BG0iHiaoybkNHi73uOQ54Rh4nKkhPaZyb79V4dfhImLhRXHbOzukgq2pvatOtFVvpKgnFAa5pAUPubfu9f16GVEN1jHXnGVc2%2BnRTlGhsX93ywwR3LCx4A4DMMfCESJMPFWFSaxGRKH7PwLEuUcJRQdJPTAiW7N7zqgJrZoq%2FLco4efaTpHqkE6CkyYb57tHZFhbPJHfLd%2BePN4lRK6f%2BYvU&X-Amz-Signature=0c513c750017d9d1fe047132aa36b9b99ac43c162ab6149c7a8bc51eebca29bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
