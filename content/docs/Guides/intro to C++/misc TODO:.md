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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PJ2R56%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG5WBRQS0%2FnLxVSrB%2F%2FFLQ7p25%2FR2psd7jeTRJiKrnTKAiEAqquWAFiE2vy16bqrh9mP%2FbXdrC%2F0yCkc1O3woBNUCmgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BI69uw%2FW6VDQ2N9ircA8%2BWSNuP29RHyk4dUHF0LyOQBv%2BSWaF4UE1zXiCt3Pgg6V8xbUcT48HXRGx15OMEWw6LS%2BLQ1cUrSrHt2kbXlKhD2DCx9Y367rfWDwG37yx5GgJOmsr5m3%2B4Lw7SwTES0rozUQSoh4DEd2C%2BEeqz%2BfI1VW8c%2BBenF148inQCW7HruQ2U7S19YsED%2B5LOFkuxoPIUunpxjfyLB6ktCl25yNy%2BZ0e2vxuffljr8wWJIYBDb6K9HaXQTXLr%2F2vh2NfPqfgKBzCyBU68wPDkT8bMX578auJsWd61ifWilqsNT9bCvmkQv90ojQn7EdHU6OcNP5KRSWmIaCS4jbwYJXMhofWpj3obMWV%2Fc%2BXYCiakgT81fBs07kZoyQqCgLpP829o4tqdfOshzn2TBNI%2BHqBVyFTsz1ahua5lyoBD2%2FLq4nosj47uFJf9o1rviW8Rva3HcQXT8nIF4Nnh6JSr%2FW4Igava0AXJjxzG8pa251TVzx%2B0o1%2FwLyvmWfGPJHUzYUgI6Ps914owsVRU%2B6Q1Y8dlGqXISQISuO4yq2RUuL5OjTrFHb%2BuIHhU9%2FB7G8pW6ajleBcZanQCbnoa9aEO8Joi3NNHx1gHBf%2F6FYCZ30LE3SZNa%2FAhxostFN3BSf0eMKqhw8EGOqUBmIObwT84ptduB6PRbdpvWerbVdnUUm6gEDFU50h4bKJD6eyxFTDI2lVRy3X401pngG0zmf%2FJtjv%2FO2OlvyqS7QhNE66kf3gM8fbjxkwnr7xVFz4el8WaxM20uMbwCoRrXK%2F%2FirPfBnPUUx0LYfechdzk%2FmvQHWRKIwWOr%2FClbfPBvI7wp67Le71dBIoc2j5qlnG7voVFvAE5g97l49s0dMO9ATRI&X-Amz-Signature=a2cadb5ca2643562ab91723569be3a9ec93bf37e54d754b3aba24711b5ee18a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PJ2R56%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG5WBRQS0%2FnLxVSrB%2F%2FFLQ7p25%2FR2psd7jeTRJiKrnTKAiEAqquWAFiE2vy16bqrh9mP%2FbXdrC%2F0yCkc1O3woBNUCmgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BI69uw%2FW6VDQ2N9ircA8%2BWSNuP29RHyk4dUHF0LyOQBv%2BSWaF4UE1zXiCt3Pgg6V8xbUcT48HXRGx15OMEWw6LS%2BLQ1cUrSrHt2kbXlKhD2DCx9Y367rfWDwG37yx5GgJOmsr5m3%2B4Lw7SwTES0rozUQSoh4DEd2C%2BEeqz%2BfI1VW8c%2BBenF148inQCW7HruQ2U7S19YsED%2B5LOFkuxoPIUunpxjfyLB6ktCl25yNy%2BZ0e2vxuffljr8wWJIYBDb6K9HaXQTXLr%2F2vh2NfPqfgKBzCyBU68wPDkT8bMX578auJsWd61ifWilqsNT9bCvmkQv90ojQn7EdHU6OcNP5KRSWmIaCS4jbwYJXMhofWpj3obMWV%2Fc%2BXYCiakgT81fBs07kZoyQqCgLpP829o4tqdfOshzn2TBNI%2BHqBVyFTsz1ahua5lyoBD2%2FLq4nosj47uFJf9o1rviW8Rva3HcQXT8nIF4Nnh6JSr%2FW4Igava0AXJjxzG8pa251TVzx%2B0o1%2FwLyvmWfGPJHUzYUgI6Ps914owsVRU%2B6Q1Y8dlGqXISQISuO4yq2RUuL5OjTrFHb%2BuIHhU9%2FB7G8pW6ajleBcZanQCbnoa9aEO8Joi3NNHx1gHBf%2F6FYCZ30LE3SZNa%2FAhxostFN3BSf0eMKqhw8EGOqUBmIObwT84ptduB6PRbdpvWerbVdnUUm6gEDFU50h4bKJD6eyxFTDI2lVRy3X401pngG0zmf%2FJtjv%2FO2OlvyqS7QhNE66kf3gM8fbjxkwnr7xVFz4el8WaxM20uMbwCoRrXK%2F%2FirPfBnPUUx0LYfechdzk%2FmvQHWRKIwWOr%2FClbfPBvI7wp67Le71dBIoc2j5qlnG7voVFvAE5g97l49s0dMO9ATRI&X-Amz-Signature=dae7d3d84550d1472b7715101407a150133d7598c08d7d310a245be00f9f1c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
