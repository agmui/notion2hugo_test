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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXI4YG6D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHBo9czSo%2BHsW0ySAj4VDkRAgC2b1ymfRIT4dcTLjWLqAiEAyxWbvu%2BXAn47sotDpeg7Y581ZMqbluDRkjuyLru6OdkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZON46wh04laknzWyrcA6TNSw%2BNbIhqeSL%2BV7Xyy%2BEQg%2FX%2FDQSLswkiltMuyw1J0pYhYqx9YjAXDckmoEvxJ4iCftH2LoT0TSV%2BDXRQasY1nQ08WXvnT6jbIYjisxdJMHMQIEjakUogkTsyoiDM14bV6T%2FcTmqOUdg16UgmIIJh7MpMs9sOfjC%2BP2V%2BI92c7OETjwlc8fEfDtzhMJnfYdC1A0L9gzlT7YgqR7HHoR4Rv4lgXkHaAFbQyx0reqEgYz9WFsf5Nge2IFR9l%2B2sTJnU8lQqaG29vPvHuTGslzVAhdiIYJY0%2Fvr3csg72HV2We7KOYcShgJf9X32oxgzmbPoQmw86yLmJvAMz3jfoGtL7KqDCR5pue1MtGqvyOz2Mlfq3aW5xyXEiHfFQv4Dm7z1seC8j%2FR2wexhiRrkxhyO30UvtgqCYhMAGBbvDUiIgDf3wtvpUwl7zoY0%2F3vDKLmtOhihCWX3mbNp%2B1OYeecRndkufv1CZyOBSpo5Qio8xWX8%2FIoh8aron9E58F3GgFS4W5zxCpYWl9h6aMygOutHXtkuI74EfZAcQkF4kRzJ7g5f8j1Fcyf1oEaAGik2dQpjJnKG%2Bt313GOgdMviP%2FtK69T7HUgDHIO8ypfoN0dH%2B0grFh6%2Fx3Ae%2BjbHMIPX0sAGOqUB8WJeSOjAHcnblBiNkin6Ypaj6HqpeAFEHYZHmAsfBI02pHrlRIFt3IjJe0tNst90LAg5y43RFP%2F%2FPs7sl0VImx866BAFv0UnrpUiQzc4Tj4byRvHc4a7UgaxiERegdHr%2BPpJQ5pIC1sFmsN6Zs%2BrnetrFl%2Bt%2BG%2BXNHkht76vp6LwM91zDiPHjT9xJbJUNH7Cn0j9mor1eMFi6ML%2F0gb0lWgQtHv3&X-Amz-Signature=1511935e4e716bac6c256582ee7b6e61e2430f44c3d658d518560f3ca526bf93&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXI4YG6D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHBo9czSo%2BHsW0ySAj4VDkRAgC2b1ymfRIT4dcTLjWLqAiEAyxWbvu%2BXAn47sotDpeg7Y581ZMqbluDRkjuyLru6OdkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZON46wh04laknzWyrcA6TNSw%2BNbIhqeSL%2BV7Xyy%2BEQg%2FX%2FDQSLswkiltMuyw1J0pYhYqx9YjAXDckmoEvxJ4iCftH2LoT0TSV%2BDXRQasY1nQ08WXvnT6jbIYjisxdJMHMQIEjakUogkTsyoiDM14bV6T%2FcTmqOUdg16UgmIIJh7MpMs9sOfjC%2BP2V%2BI92c7OETjwlc8fEfDtzhMJnfYdC1A0L9gzlT7YgqR7HHoR4Rv4lgXkHaAFbQyx0reqEgYz9WFsf5Nge2IFR9l%2B2sTJnU8lQqaG29vPvHuTGslzVAhdiIYJY0%2Fvr3csg72HV2We7KOYcShgJf9X32oxgzmbPoQmw86yLmJvAMz3jfoGtL7KqDCR5pue1MtGqvyOz2Mlfq3aW5xyXEiHfFQv4Dm7z1seC8j%2FR2wexhiRrkxhyO30UvtgqCYhMAGBbvDUiIgDf3wtvpUwl7zoY0%2F3vDKLmtOhihCWX3mbNp%2B1OYeecRndkufv1CZyOBSpo5Qio8xWX8%2FIoh8aron9E58F3GgFS4W5zxCpYWl9h6aMygOutHXtkuI74EfZAcQkF4kRzJ7g5f8j1Fcyf1oEaAGik2dQpjJnKG%2Bt313GOgdMviP%2FtK69T7HUgDHIO8ypfoN0dH%2B0grFh6%2Fx3Ae%2BjbHMIPX0sAGOqUB8WJeSOjAHcnblBiNkin6Ypaj6HqpeAFEHYZHmAsfBI02pHrlRIFt3IjJe0tNst90LAg5y43RFP%2F%2FPs7sl0VImx866BAFv0UnrpUiQzc4Tj4byRvHc4a7UgaxiERegdHr%2BPpJQ5pIC1sFmsN6Zs%2BrnetrFl%2Bt%2BG%2BXNHkht76vp6LwM91zDiPHjT9xJbJUNH7Cn0j9mor1eMFi6ML%2F0gb0lWgQtHv3&X-Amz-Signature=c66ea07db5ce6d1795605ca4e40549877e0d932aa69cebf77159032f72971ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
