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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKX2IJU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFYjxzh707m9TO0FH3xPYybZE%2FW5wEP9TlG6xTjghwXwIhAN%2FOyR9SWuiEYQtcI%2F69uQS7t7MovPG3fy6yQ1FiFAafKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaRQkIddb2ADwHJOoq3ANbR5aBqBvWr7nSVENNRE5ssjZFTDCe5NSG7DVcmwUrx%2BMax%2FeUf8SXWyc8nw5%2BVsIeXEmDZlTC%2BaDN9SFrFFI81pHO77ftKHro%2Bragm3RX%2FzqiIP%2Fz%2FmOIgrwsokfs0PnY6Ap3hGwMWm098vujYUytyWWiJVMxzPUuZm8qgZml5%2FfLCiJk7ulJJqMGpjDi8XbSfKU7iNZ310U3oIsjwWQMOL6RQxmGT1LX5tzyxtnvKYVG8%2F4XGh55ul4jQH2ctswFQCzwVyIzZp%2BntT%2F9zt6WCZz3G0t2MqhLbunOzHHcoTcN3hJjr5bEThv3cS1avfciUQcjyGvygOlkHgM1rt1i8l5bQVHGyAYQo9PSyZ2tAzrzL3sT2AYM3FKLD%2FHp6zSs%2F7rx1KNqq5t0TWZVcbfiv0JFsSEffRbWKHVpyWnc556e%2BUuoTD5F1abmMHAtIzsPb16AjWCBQ69yvB2a0OALaQ1Y4XGtSMrlRgxJSOrD%2FfR7u9MZpOmQetUGjlhgsZQ3iBDseKYB2XHYv7h0N2KHt1V9vZ19KEyGuI7nRChNjPhBsprSBi03QXoXCfz%2FOqphbhIiijvrkvgHeK17t6YY0Zw8M%2F4X9XzJpDWj18U2y%2BHllltux%2B0GrFqK%2BTCH8PjABjqkAZe9hUBiW40gNEHeWpIW43t8Nf3ZufYQoj1KXnSEURgSaHR2UX%2B5kyo7Lr9CaBSlDz5g7NrN97xNtbWrT4gesSC0mhssw8qUqfLgaIgssL2sv9ieU1qHP5wFAY4yIA985fP5aRRQx8jmWg5SuClh7aBdHbGxMZYQQgaygASFFVGWu12ADkKHmRiDLlUWoCHvuRqolbN2%2BuJoBmgoFwS9s1X9Dk2o&X-Amz-Signature=b8f6a2e16aaa6317ca7db5ba50ac0c9378d720db37ff153293f2a17cb116fee6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKX2IJU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFYjxzh707m9TO0FH3xPYybZE%2FW5wEP9TlG6xTjghwXwIhAN%2FOyR9SWuiEYQtcI%2F69uQS7t7MovPG3fy6yQ1FiFAafKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaRQkIddb2ADwHJOoq3ANbR5aBqBvWr7nSVENNRE5ssjZFTDCe5NSG7DVcmwUrx%2BMax%2FeUf8SXWyc8nw5%2BVsIeXEmDZlTC%2BaDN9SFrFFI81pHO77ftKHro%2Bragm3RX%2FzqiIP%2Fz%2FmOIgrwsokfs0PnY6Ap3hGwMWm098vujYUytyWWiJVMxzPUuZm8qgZml5%2FfLCiJk7ulJJqMGpjDi8XbSfKU7iNZ310U3oIsjwWQMOL6RQxmGT1LX5tzyxtnvKYVG8%2F4XGh55ul4jQH2ctswFQCzwVyIzZp%2BntT%2F9zt6WCZz3G0t2MqhLbunOzHHcoTcN3hJjr5bEThv3cS1avfciUQcjyGvygOlkHgM1rt1i8l5bQVHGyAYQo9PSyZ2tAzrzL3sT2AYM3FKLD%2FHp6zSs%2F7rx1KNqq5t0TWZVcbfiv0JFsSEffRbWKHVpyWnc556e%2BUuoTD5F1abmMHAtIzsPb16AjWCBQ69yvB2a0OALaQ1Y4XGtSMrlRgxJSOrD%2FfR7u9MZpOmQetUGjlhgsZQ3iBDseKYB2XHYv7h0N2KHt1V9vZ19KEyGuI7nRChNjPhBsprSBi03QXoXCfz%2FOqphbhIiijvrkvgHeK17t6YY0Zw8M%2F4X9XzJpDWj18U2y%2BHllltux%2B0GrFqK%2BTCH8PjABjqkAZe9hUBiW40gNEHeWpIW43t8Nf3ZufYQoj1KXnSEURgSaHR2UX%2B5kyo7Lr9CaBSlDz5g7NrN97xNtbWrT4gesSC0mhssw8qUqfLgaIgssL2sv9ieU1qHP5wFAY4yIA985fP5aRRQx8jmWg5SuClh7aBdHbGxMZYQQgaygASFFVGWu12ADkKHmRiDLlUWoCHvuRqolbN2%2BuJoBmgoFwS9s1X9Dk2o&X-Amz-Signature=1624c49d8c0a7232701b2b26d718191aacfe8d28a00786f0d3040b03bdb6991f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
