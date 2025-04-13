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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKKJ2UKS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAG0792bSyQG1Y%2F74OwlSdj5tELV%2BzMtRUssr7diwLgCAiBLxBUdJARFoX%2FVs%2FEijDAyT3gHDC1cm2dxYedDz%2BLLmSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy68HPKnxXcJkLFKJKtwD6OV5mQZ2oHbwSCKP5RQ5eZqyEgTWLWWXwTbA7D6fIGZ5IjC80V6d01cEwHE%2F20ARtQ%2F042VlizcaVEnzGCajiRSXZMybOKKGDt8RXMMwe5FWE2%2BLmrk25cEfEU%2BQ%2BzZHNnIGuh8aYF2CM33ORyeZyELeEXEShhfBWZ%2B%2FGvLiOb%2BGyZir12vzTC9fXN4SyybAdWUAupRAuB1QA8fzQ0Oa7gYElh0S4ur7gNsvx%2Fzr%2F8NKr0t7AqX6vZGSqTruOMda6ox3oHdhX0JmtUT1veSPD7fJ1KJ8DYcu8tGuTzXjlA7CrXky7xZVR10acmJf0YJq9avSnQ7l3U19rAK%2Bkh3c7ygWYqBC%2FhH1NSykm92IFoK7FjSNF9MZXOZWOsynPO9sCmYq1ccinFJA1nYe2%2BZ1O7MF%2BNo5SEH%2FZdkK83PIy04vEACzdT69J2rjotTOGJEb%2FOZhZXegDwEi1zbWwuK%2Bmi8Djd5WXREPeL4xowzQpd0mRxEpiOE9m3iQCAp5G2CVal9XJu2L9cGaxJdWXxjsoLk006cwng93paL%2B75ssL%2BFxTcsM6XXio7gZ4C10VaqCkO4P%2F0MEv3xEU3cnR7GvVlPmHuDrhssksAUlMO7h2WBo8xW9z0ABOJglWSsw5ojuvwY6pgHHbvLsuWpmtn%2Fq9z4C8CJHGd9ZB4D1Ofx7YMhbp87N19SWDyoE6ucRrywd7guSoyn%2FkgUdq3Jomu0EYZ0Ve7N%2FmSpS46hAxSHof5PCzLdW2gXDEfWwcJEM7fsnqGBXiItWxQjN%2FRmmq%2B9qoQRagHsEqNTyNweY6d%2Fj59CPUkjCSm%2FKgVBSAoCnCynlA5e4GbV9Bj6mR4nTxtS3IR%2B%2FTDa9UIbZJZj4&X-Amz-Signature=dd2968db0819e1ab6fdb362cb692eb2b6ee4a4610eb743e6112a2982f382d6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKKJ2UKS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAG0792bSyQG1Y%2F74OwlSdj5tELV%2BzMtRUssr7diwLgCAiBLxBUdJARFoX%2FVs%2FEijDAyT3gHDC1cm2dxYedDz%2BLLmSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy68HPKnxXcJkLFKJKtwD6OV5mQZ2oHbwSCKP5RQ5eZqyEgTWLWWXwTbA7D6fIGZ5IjC80V6d01cEwHE%2F20ARtQ%2F042VlizcaVEnzGCajiRSXZMybOKKGDt8RXMMwe5FWE2%2BLmrk25cEfEU%2BQ%2BzZHNnIGuh8aYF2CM33ORyeZyELeEXEShhfBWZ%2B%2FGvLiOb%2BGyZir12vzTC9fXN4SyybAdWUAupRAuB1QA8fzQ0Oa7gYElh0S4ur7gNsvx%2Fzr%2F8NKr0t7AqX6vZGSqTruOMda6ox3oHdhX0JmtUT1veSPD7fJ1KJ8DYcu8tGuTzXjlA7CrXky7xZVR10acmJf0YJq9avSnQ7l3U19rAK%2Bkh3c7ygWYqBC%2FhH1NSykm92IFoK7FjSNF9MZXOZWOsynPO9sCmYq1ccinFJA1nYe2%2BZ1O7MF%2BNo5SEH%2FZdkK83PIy04vEACzdT69J2rjotTOGJEb%2FOZhZXegDwEi1zbWwuK%2Bmi8Djd5WXREPeL4xowzQpd0mRxEpiOE9m3iQCAp5G2CVal9XJu2L9cGaxJdWXxjsoLk006cwng93paL%2B75ssL%2BFxTcsM6XXio7gZ4C10VaqCkO4P%2F0MEv3xEU3cnR7GvVlPmHuDrhssksAUlMO7h2WBo8xW9z0ABOJglWSsw5ojuvwY6pgHHbvLsuWpmtn%2Fq9z4C8CJHGd9ZB4D1Ofx7YMhbp87N19SWDyoE6ucRrywd7guSoyn%2FkgUdq3Jomu0EYZ0Ve7N%2FmSpS46hAxSHof5PCzLdW2gXDEfWwcJEM7fsnqGBXiItWxQjN%2FRmmq%2B9qoQRagHsEqNTyNweY6d%2Fj59CPUkjCSm%2FKgVBSAoCnCynlA5e4GbV9Bj6mR4nTxtS3IR%2B%2FTDa9UIbZJZj4&X-Amz-Signature=59a7348d20edf685416fb958dfec8320c7ee3d4312817abad6dbc0721698a15f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
