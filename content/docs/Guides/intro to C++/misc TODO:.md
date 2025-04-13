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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775PACXY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID4arXlklx6UxQSI%2F3Q9Jhh4wBNI1X6T%2B1hHJsDrnksgAiEAlTn4vh9Cdp%2BiirPEbzwrXIlIa6nGZtgIl6Ui5%2B7%2BEqsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmbAkn%2Bpj8JmeY5XCrcAx4Dz5A5H%2BiJgnsfOZzEHtuP3ISupkfFfUuOsdT6gRtuLbDlRDI7Zr4ieYgr1PihQW%2Bfo2eki2BUn4HW4oJbn6RSDRl8H8t7qNbQBuxO9h0gSD5EejSo0yG7eCPKLKzRCdntZNuUSrRGs6oPQTajpnSqDfWy89X2pVoLu%2B9a5x%2FFO%2FCf%2B0bMNE2nzXyRVtkS62fC3GvQFvtsxUeTP18yMcP8i5cmPA1vlLZGAS9WlemXTbRCU7bS883Qy1TRzcKumdApY2j9t7HRoNCtRlBlG%2BUf6KOMlZBye2ITU9FuOzpbbCvsASDqNDONi6y%2Bcy7q%2F5k5zvefWPO4762MH65O5zbB1jBcPXGpQaC0JjfP7GQtWeNN6vlESwcvHZqTS72rfPg2zIpzYJS1pmhXnql2VKny%2FuTsB2eUiZlXWxO6qxagP4Uzh9IFjL%2F%2BAUIySZYLuxJhMp7L3TiXp%2FLs08SNnHJL7%2FJyyWrP8NFGDqa2KYxRiupITatGGtE0STUNyzhJf6t5tX6IPd%2BY7ulaBjcrKsDsicgZB%2BIjMeoQQcgKcURSi4zaWh1OzIodtIPkg7IZAEaFcu5V62M9AjzDjL7HIXuWiV5uBoy10oDtTixKt7WM%2BDz57RMEecJufULlMMq97r8GOqUBI3iJwGPg3iJK7LTU0J5inX5U1uOypiarkwRJO33%2F9mUOPKMMUq95p%2FQuHHh0LtjvBoVc55cTyXbLzBi8DmpXsPZUsyPGALYt35FkS1dLN%2FzP0BeiWk4oDWNJBsv0%2FZ6CCPncfPukV9yxAcGguyhLkyEuTQRnyWJEu1EkRkAM4W7o3GmMN55mKlFw4ok%2BdGOHuOeRD7lnSTQYChPcCPC%2FwfV2FIaR&X-Amz-Signature=0d5eb3e1e55990cadfcf5569c0f4febcc366071f5d915238bc1f4bc7525f4ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775PACXY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID4arXlklx6UxQSI%2F3Q9Jhh4wBNI1X6T%2B1hHJsDrnksgAiEAlTn4vh9Cdp%2BiirPEbzwrXIlIa6nGZtgIl6Ui5%2B7%2BEqsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmbAkn%2Bpj8JmeY5XCrcAx4Dz5A5H%2BiJgnsfOZzEHtuP3ISupkfFfUuOsdT6gRtuLbDlRDI7Zr4ieYgr1PihQW%2Bfo2eki2BUn4HW4oJbn6RSDRl8H8t7qNbQBuxO9h0gSD5EejSo0yG7eCPKLKzRCdntZNuUSrRGs6oPQTajpnSqDfWy89X2pVoLu%2B9a5x%2FFO%2FCf%2B0bMNE2nzXyRVtkS62fC3GvQFvtsxUeTP18yMcP8i5cmPA1vlLZGAS9WlemXTbRCU7bS883Qy1TRzcKumdApY2j9t7HRoNCtRlBlG%2BUf6KOMlZBye2ITU9FuOzpbbCvsASDqNDONi6y%2Bcy7q%2F5k5zvefWPO4762MH65O5zbB1jBcPXGpQaC0JjfP7GQtWeNN6vlESwcvHZqTS72rfPg2zIpzYJS1pmhXnql2VKny%2FuTsB2eUiZlXWxO6qxagP4Uzh9IFjL%2F%2BAUIySZYLuxJhMp7L3TiXp%2FLs08SNnHJL7%2FJyyWrP8NFGDqa2KYxRiupITatGGtE0STUNyzhJf6t5tX6IPd%2BY7ulaBjcrKsDsicgZB%2BIjMeoQQcgKcURSi4zaWh1OzIodtIPkg7IZAEaFcu5V62M9AjzDjL7HIXuWiV5uBoy10oDtTixKt7WM%2BDz57RMEecJufULlMMq97r8GOqUBI3iJwGPg3iJK7LTU0J5inX5U1uOypiarkwRJO33%2F9mUOPKMMUq95p%2FQuHHh0LtjvBoVc55cTyXbLzBi8DmpXsPZUsyPGALYt35FkS1dLN%2FzP0BeiWk4oDWNJBsv0%2FZ6CCPncfPukV9yxAcGguyhLkyEuTQRnyWJEu1EkRkAM4W7o3GmMN55mKlFw4ok%2BdGOHuOeRD7lnSTQYChPcCPC%2FwfV2FIaR&X-Amz-Signature=82949b48c1eb70d8548be154c7c27e0d0b6d3c935ef859a934035b348de306e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
