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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HHJW3E%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLbD8SodzV65%2FIyprU9spMdTWvReTAnMijZHIFee5eoQIgClUgcXB79sh4%2FVMtO2BB%2BJ2z5KY5B3P7BVtzfa5RJpsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIq7fAntCVy0F2QtircAzHFWuUZgKeU9jjJTxDdIQ3ZQwtTjNk2rGHoq2nuav4icFd6YqplF9Yid7jZGI973yjALQ%2FWowSaO4MLOBpvK%2FPE4qgvcvBAvPGwWGq8z1LwxhhtcJmDIISOu2tpFGGo03XuaATAG9qRf9dRdLqslznRunWO9lCb9W6ItueRmOHkpTdjJiJAxigMtqn0xEIxHCzzQovflEnjhf8v1AWshzCDRb9N62QGRG7J4micoMtYsuP6jWmoyryi%2BbY2aAvWyvhFqqYSy%2B0qyKwAyWy0wAeUh8V1y%2BShZ8L68iIrF7BF2X%2FBbvwKn2pDlLvWQzBLUSfM%2FrEmh7hMxlJicCCvRxPIsdyRmYE9aZhHFjxQvXYQ%2FkhYYwxU9MqILqjbuM7KRk64TJUYflX9oBZP121mu0WpiGzqGlqaGHaOQoEv7OmMYKPNZz0ONbRucYYT4A5MICib%2F9eELNo2oQRTGwFzNt%2FBPoSSTwNfxDlnkXQQlnKbLCom5ZNYw8VxH37PWMYaH%2FRxcT165HNvtIW6R62go%2FQlToAbyIvJ71XKF2oxvV34Lz0V6ypwK7mWBDecCaT1IhYiTakUaa1zFhm8mKNpwUpZYR6%2FSgpG0uhAJt8iO26KXQa4ka3%2Fg0%2F3lQ4CMI2ziL8GOqUB2%2FQ905ffgaZBV1zuDALXUa5dwHVT7vH2Nosp4ID8PpDOXeGywmo4ZaN0lGuVqa3%2FhNGtRxEfYLy5OSHWXh90eVNcZqQGCplgZzHEu3NSlqak5HwHHwfBtUrpKyuaHQg39OAuq6mvUtrs9K8%2FNgcDRBBVKiaA2OGRzd8IhCaTdlGZ8VygsKLbvJTNw8C1Am68a0m%2BbVfbnadTWj4l%2FU78lbV6yhpR&X-Amz-Signature=30ed30366033df3ccf72b21d45f2cb4bf3a9cb06962bc308e4eac95570cff000&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HHJW3E%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLbD8SodzV65%2FIyprU9spMdTWvReTAnMijZHIFee5eoQIgClUgcXB79sh4%2FVMtO2BB%2BJ2z5KY5B3P7BVtzfa5RJpsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIq7fAntCVy0F2QtircAzHFWuUZgKeU9jjJTxDdIQ3ZQwtTjNk2rGHoq2nuav4icFd6YqplF9Yid7jZGI973yjALQ%2FWowSaO4MLOBpvK%2FPE4qgvcvBAvPGwWGq8z1LwxhhtcJmDIISOu2tpFGGo03XuaATAG9qRf9dRdLqslznRunWO9lCb9W6ItueRmOHkpTdjJiJAxigMtqn0xEIxHCzzQovflEnjhf8v1AWshzCDRb9N62QGRG7J4micoMtYsuP6jWmoyryi%2BbY2aAvWyvhFqqYSy%2B0qyKwAyWy0wAeUh8V1y%2BShZ8L68iIrF7BF2X%2FBbvwKn2pDlLvWQzBLUSfM%2FrEmh7hMxlJicCCvRxPIsdyRmYE9aZhHFjxQvXYQ%2FkhYYwxU9MqILqjbuM7KRk64TJUYflX9oBZP121mu0WpiGzqGlqaGHaOQoEv7OmMYKPNZz0ONbRucYYT4A5MICib%2F9eELNo2oQRTGwFzNt%2FBPoSSTwNfxDlnkXQQlnKbLCom5ZNYw8VxH37PWMYaH%2FRxcT165HNvtIW6R62go%2FQlToAbyIvJ71XKF2oxvV34Lz0V6ypwK7mWBDecCaT1IhYiTakUaa1zFhm8mKNpwUpZYR6%2FSgpG0uhAJt8iO26KXQa4ka3%2Fg0%2F3lQ4CMI2ziL8GOqUB2%2FQ905ffgaZBV1zuDALXUa5dwHVT7vH2Nosp4ID8PpDOXeGywmo4ZaN0lGuVqa3%2FhNGtRxEfYLy5OSHWXh90eVNcZqQGCplgZzHEu3NSlqak5HwHHwfBtUrpKyuaHQg39OAuq6mvUtrs9K8%2FNgcDRBBVKiaA2OGRzd8IhCaTdlGZ8VygsKLbvJTNw8C1Am68a0m%2BbVfbnadTWj4l%2FU78lbV6yhpR&X-Amz-Signature=e2a2a0b51ac5340d96257fb03ddfb701dfd4575c7688c15184a11c87934cb534&X-Amz-SignedHeaders=host&x-id=GetObject)

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
