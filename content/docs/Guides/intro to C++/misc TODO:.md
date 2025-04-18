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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7QIYL7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjnegY04%2FXQqvpWdfE8FgXv2czXwJlf6SXUuMqd%2F1XHAiAzgi%2BDDc8m9klb1zLKTQ9gzLlEIyKcQjWS7V%2BrX9zlBCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXFbe6y6651BSo4QEKtwD8QeB06lr7D6Qp0uDIlfZ8UH7Zdijgi6YMBghT%2Bk03WqaHsTzqJy2vK1nKR7sFmG6AI%2FMHQUu50BjjGc8plpWaESgMoGFjubRGo23Qrn2VWGSwlTjs6AZTb9szrOiUG4dFuyyRm6arrV4E66IO7ey%2B9k934kPStu%2F2rUK37Lcbt4A8AM%2FcoyRsGdZWHAGX2gRpoMXXSA1XCeyjTrO6L3tv%2BuS5UKr9ArxfGxJ5qXZwKZF1oTGXTzZxoCIIh%2BfQYvbJ0oAAH9U8Z5t0dfPufVMhL6X7IaO3z2Wo23yXGq%2FowyRg1O8vpNhhQzzRkOSTWDW7CuoM750PPp5%2BQBCz1J%2FuyDEkTDd40u8FVETByhhDBk9Ez29KgzIysLs6KN0Gto7LwGcrj%2BsS9U5%2BCaQElwzDlBBoeU5%2B3Pt7AzHn4W0oXeAC9%2BxCvA5OPnHbswXyfYjAAb0QY5S3GT%2FW6BjRESr8U2KOd%2BDduFJNRH%2FbVXu8YndXRWdA9kqvJPPqdZDp7oz5BZTmh4teJfmeAQgPhJwUnVbo0SzwexFK%2FgK0R6Jy2jhUqVKXhnOBpzmKmQCCDAOu1A7hSIaaySREJm4eQTJR%2BA74kwCUoHpVreXIUUyFPgV6pCj8LtBSnJTy0Mw2ayIwAY6pgEO9uXtcVpTGNIVDhp%2BBt8Na%2BxKSOevFIS0yuIWoW7JkbIAsge96L7MCVmIZxwzi%2B1TutWa5ZtZMOmVuv%2Bv9IIAmBScfP7bIutL1dpdmTFG5VLq5UGzuZOi5pHnjQzcCXTAqkNJ03Mw4TXjLb6TOyvswJwd3KsOzq%2F4IeNzOaMBwmWcSyAU0u5uHouckwWju2eUVzEYbro3lc90sQ7C48j4K3kQudOT&X-Amz-Signature=32f280307a72ae6b85770c43b26a2f9b3f6da2a04cebc72267630ddf89b5a67d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7QIYL7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjnegY04%2FXQqvpWdfE8FgXv2czXwJlf6SXUuMqd%2F1XHAiAzgi%2BDDc8m9klb1zLKTQ9gzLlEIyKcQjWS7V%2BrX9zlBCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXFbe6y6651BSo4QEKtwD8QeB06lr7D6Qp0uDIlfZ8UH7Zdijgi6YMBghT%2Bk03WqaHsTzqJy2vK1nKR7sFmG6AI%2FMHQUu50BjjGc8plpWaESgMoGFjubRGo23Qrn2VWGSwlTjs6AZTb9szrOiUG4dFuyyRm6arrV4E66IO7ey%2B9k934kPStu%2F2rUK37Lcbt4A8AM%2FcoyRsGdZWHAGX2gRpoMXXSA1XCeyjTrO6L3tv%2BuS5UKr9ArxfGxJ5qXZwKZF1oTGXTzZxoCIIh%2BfQYvbJ0oAAH9U8Z5t0dfPufVMhL6X7IaO3z2Wo23yXGq%2FowyRg1O8vpNhhQzzRkOSTWDW7CuoM750PPp5%2BQBCz1J%2FuyDEkTDd40u8FVETByhhDBk9Ez29KgzIysLs6KN0Gto7LwGcrj%2BsS9U5%2BCaQElwzDlBBoeU5%2B3Pt7AzHn4W0oXeAC9%2BxCvA5OPnHbswXyfYjAAb0QY5S3GT%2FW6BjRESr8U2KOd%2BDduFJNRH%2FbVXu8YndXRWdA9kqvJPPqdZDp7oz5BZTmh4teJfmeAQgPhJwUnVbo0SzwexFK%2FgK0R6Jy2jhUqVKXhnOBpzmKmQCCDAOu1A7hSIaaySREJm4eQTJR%2BA74kwCUoHpVreXIUUyFPgV6pCj8LtBSnJTy0Mw2ayIwAY6pgEO9uXtcVpTGNIVDhp%2BBt8Na%2BxKSOevFIS0yuIWoW7JkbIAsge96L7MCVmIZxwzi%2B1TutWa5ZtZMOmVuv%2Bv9IIAmBScfP7bIutL1dpdmTFG5VLq5UGzuZOi5pHnjQzcCXTAqkNJ03Mw4TXjLb6TOyvswJwd3KsOzq%2F4IeNzOaMBwmWcSyAU0u5uHouckwWju2eUVzEYbro3lc90sQ7C48j4K3kQudOT&X-Amz-Signature=319527e0f6a0f37528caacbafa1b02c042b2bda4b600576658cca5eb462a2bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
