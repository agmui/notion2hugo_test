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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCAMWB4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gSeSKR9H8t6spel7vx4ayHLLHLqUEqjehJcR8%2BiFJgIhAKYO01qjL1eJtb%2FioiJpAvY7k1RMqnYGKjSLv2PvsR8lKv8DCHwQABoMNjM3NDIzMTgzODA1Igw5tRFJ7ZL41HgZzncq3AM8ueDtaP4rhJ%2BbnBUDn4lNErilWSaXPWOxNzy8vy9ClyUgswgWQAS3CMtDia2xiKvguQYDQBOIVxXmR%2F9sVrOVv%2B%2FGte2a9%2FLfCJiarwG12n2L48I1LIH9dEo1Tbfj8RhfuF%2FUlM0oB%2BYQpDW0IqFfaDl%2Bfh9%2FeW%2FPiAobcyaQJZ1W4dIFVSTlM2cT6X92APyDQJGxCutsGbh%2F77cAqEKNKQMcJa3ylyYHomclMC4FUmzmkdjI5no3lpccE8CzW6rHgKkyaJfT1Ycu%2FZIyLW4wUdy4GBSOWmdumOWAu0aPwx1n5HG8Y8HGn52INvxz00Fgl1tuQkLbh6FFqJMu%2Blo8HZ8OcOBV0EqINF3HTEXvrHq%2BZgsnWSxdM5ZYBP1ef5%2F%2BmsVKTDtPHl3yWoZmUIR6s94M4oIaMR6tt5czE4%2BeC97pBWbHR2609XaW9Tpjihx7obpK9dv4vgcV1IzS1k0XjjI9NcAcfATEXUA47gICj7fvP528wBECx2roXXra1ZGdIvQ%2FWsjRj%2BfJLP1t3FdfBsx7cWDV5%2Fee%2FYtWbtvIpXT3TjqIiDZT47DRPvEEd5YfnUX8TnLxX7oiEc007kZGTP6mb4lXe3j8HO6tx2YXnQAGUMqf3larFfBKXTC5yvvCBjqkAcpQEzyoVvZRe62oBSWdLK4YTmkEEkqC8o4stkwOaZl%2FyD4G7CI9cuzcl%2BnFYoNrq8vaWJOToezE7Rp8qXk7OHsYLpZ%2FOoNelABYE%2FQ8oiX7eprMrkdmApGLTZ%2FmLSyuul34ne2LR4EphmEzZU2hMBVv41yBDtje2d3Yzg%2BnkDZkdDeuz0X1mKsFt7WAjBmo5256bvD5T9eQoVLk%2BevfRBycRqEH&X-Amz-Signature=51d3db811d3e5d499d56d7569ff15c4bf34b3697cb03eebe0e1cb0ca3cbb1f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCAMWB4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gSeSKR9H8t6spel7vx4ayHLLHLqUEqjehJcR8%2BiFJgIhAKYO01qjL1eJtb%2FioiJpAvY7k1RMqnYGKjSLv2PvsR8lKv8DCHwQABoMNjM3NDIzMTgzODA1Igw5tRFJ7ZL41HgZzncq3AM8ueDtaP4rhJ%2BbnBUDn4lNErilWSaXPWOxNzy8vy9ClyUgswgWQAS3CMtDia2xiKvguQYDQBOIVxXmR%2F9sVrOVv%2B%2FGte2a9%2FLfCJiarwG12n2L48I1LIH9dEo1Tbfj8RhfuF%2FUlM0oB%2BYQpDW0IqFfaDl%2Bfh9%2FeW%2FPiAobcyaQJZ1W4dIFVSTlM2cT6X92APyDQJGxCutsGbh%2F77cAqEKNKQMcJa3ylyYHomclMC4FUmzmkdjI5no3lpccE8CzW6rHgKkyaJfT1Ycu%2FZIyLW4wUdy4GBSOWmdumOWAu0aPwx1n5HG8Y8HGn52INvxz00Fgl1tuQkLbh6FFqJMu%2Blo8HZ8OcOBV0EqINF3HTEXvrHq%2BZgsnWSxdM5ZYBP1ef5%2F%2BmsVKTDtPHl3yWoZmUIR6s94M4oIaMR6tt5czE4%2BeC97pBWbHR2609XaW9Tpjihx7obpK9dv4vgcV1IzS1k0XjjI9NcAcfATEXUA47gICj7fvP528wBECx2roXXra1ZGdIvQ%2FWsjRj%2BfJLP1t3FdfBsx7cWDV5%2Fee%2FYtWbtvIpXT3TjqIiDZT47DRPvEEd5YfnUX8TnLxX7oiEc007kZGTP6mb4lXe3j8HO6tx2YXnQAGUMqf3larFfBKXTC5yvvCBjqkAcpQEzyoVvZRe62oBSWdLK4YTmkEEkqC8o4stkwOaZl%2FyD4G7CI9cuzcl%2BnFYoNrq8vaWJOToezE7Rp8qXk7OHsYLpZ%2FOoNelABYE%2FQ8oiX7eprMrkdmApGLTZ%2FmLSyuul34ne2LR4EphmEzZU2hMBVv41yBDtje2d3Yzg%2BnkDZkdDeuz0X1mKsFt7WAjBmo5256bvD5T9eQoVLk%2BevfRBycRqEH&X-Amz-Signature=e95ec05f57214e2f3c5a7a1d0bba9c92d8ed49e52584e829c1a2dafb10ad84f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
