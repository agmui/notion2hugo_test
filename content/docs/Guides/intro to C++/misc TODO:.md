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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTWVD6U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyriFcRxjK3rWpNQsUOTyeR0Lv459JHLdpL9VdHte3bQIge7yV9Kjxyif%2FnOPCnE%2FbQx8bNTJDeVU4OZQLnV%2BU1VIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9ADfyt6b%2BBzvuoECrcA%2BvcfQCZk8OdA4%2Bv42PdrqMcwjE%2F4pI7xHATIdRMlhrJ4z8dfNBtnuR%2BWPzhQLF3WY1Ruo2wib7X6MEEOzyXJJqV9PMFoiMBpv6CO9lox%2BZakDOZ8psCfyBRprulXxa3DlvIa2iEGDK3nW6%2BpLfxaDlyMLX7Vah4ZmjdvyWKeCbsURfQvChoFQXCXz%2BW1JkENnXfUuhiBeGsWWo1C3hSr34AVUrc3SFpqH09cSG%2B%2Fq0I%2F7wy%2BnTITgDmaqI16t292H%2BX6ACVeo9auZXXYQhnTTudCfMnCh86yacdIW4tqTEysFcUUY%2FBmM2PppX1SVPfPuRfIyUhnPY0L9FYD6a0why%2FT2002X2mipDTb%2BH3MENd3d4cf%2FQVKOfF4u%2F%2BXtllezRewHf6LjOX3DheO2Ev03BiV9wykHiyw1qWvOq8i8TsE2iTxqBC83t8ZXN7Tw2rJp07DLJNSjI8Xr7pEi2TVsqwQSp%2F4XUNiFfml%2FXrsAXbp2E00zYQUkmmv2IZz%2BUWsikzAiCZfOb82%2Bs2t9yvVaGX0PWnmyMvaz%2BMhdkji9GjYeGZT1fxgoOii%2BW7bc4vvkqILz2osdX%2F1xhIwcvFjn3n4W39zNB07m4lBvshEosI2TtG65qka5C48ZjBMMGcpb0GOqUB20foAAwdZXv2%2F%2BYZ3Vah4lsqT7JtIp71bt9tite4BOpeHd00t7iY4ZvZRsPW8dGFyC%2FVtUQ%2F4raKyv0VUjcNz2N3djeW9PI8ZBY2vKga3ejhnOINZjzbL9zxrW8twlckZpHhOhMG%2FExpIpeH9N0cwTocBN94Vv%2FO%2FFildyhhydiCRoJZ6ybb8xP9%2BQVD%2B2884G0hCfLo4ehf3fWOx487rtc8NUgE&X-Amz-Signature=c5cab87552821f1cd1e133e8ab479eb9234061656b492aea6118c6ccbe656ced&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTWVD6U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyriFcRxjK3rWpNQsUOTyeR0Lv459JHLdpL9VdHte3bQIge7yV9Kjxyif%2FnOPCnE%2FbQx8bNTJDeVU4OZQLnV%2BU1VIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9ADfyt6b%2BBzvuoECrcA%2BvcfQCZk8OdA4%2Bv42PdrqMcwjE%2F4pI7xHATIdRMlhrJ4z8dfNBtnuR%2BWPzhQLF3WY1Ruo2wib7X6MEEOzyXJJqV9PMFoiMBpv6CO9lox%2BZakDOZ8psCfyBRprulXxa3DlvIa2iEGDK3nW6%2BpLfxaDlyMLX7Vah4ZmjdvyWKeCbsURfQvChoFQXCXz%2BW1JkENnXfUuhiBeGsWWo1C3hSr34AVUrc3SFpqH09cSG%2B%2Fq0I%2F7wy%2BnTITgDmaqI16t292H%2BX6ACVeo9auZXXYQhnTTudCfMnCh86yacdIW4tqTEysFcUUY%2FBmM2PppX1SVPfPuRfIyUhnPY0L9FYD6a0why%2FT2002X2mipDTb%2BH3MENd3d4cf%2FQVKOfF4u%2F%2BXtllezRewHf6LjOX3DheO2Ev03BiV9wykHiyw1qWvOq8i8TsE2iTxqBC83t8ZXN7Tw2rJp07DLJNSjI8Xr7pEi2TVsqwQSp%2F4XUNiFfml%2FXrsAXbp2E00zYQUkmmv2IZz%2BUWsikzAiCZfOb82%2Bs2t9yvVaGX0PWnmyMvaz%2BMhdkji9GjYeGZT1fxgoOii%2BW7bc4vvkqILz2osdX%2F1xhIwcvFjn3n4W39zNB07m4lBvshEosI2TtG65qka5C48ZjBMMGcpb0GOqUB20foAAwdZXv2%2F%2BYZ3Vah4lsqT7JtIp71bt9tite4BOpeHd00t7iY4ZvZRsPW8dGFyC%2FVtUQ%2F4raKyv0VUjcNz2N3djeW9PI8ZBY2vKga3ejhnOINZjzbL9zxrW8twlckZpHhOhMG%2FExpIpeH9N0cwTocBN94Vv%2FO%2FFildyhhydiCRoJZ6ybb8xP9%2BQVD%2B2884G0hCfLo4ehf3fWOx487rtc8NUgE&X-Amz-Signature=901a783bd27ef2dac200b9c9869a39b986c2c2f447aebf8228d1f63ead821b00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
