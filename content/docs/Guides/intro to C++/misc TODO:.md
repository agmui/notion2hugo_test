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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2FOQXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFeyUkGRKOKR8RwEslpsh126VEOflPkjvFOwQRoRCpNeAiEA4lMXuUwgjeaxlcFZn8EEjslGb3QEqvlDkvDCE44rmRUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIcXtrBDfTADPpb6FSrcA2Acp9fG0MHi8wdUYJjxqR2o%2BVJYeTvsjcoZCgKlF3VbrBw523LJGFbRHC90wLNh4fUQnLsMzeGG75fg3%2FbxeBi5Ijzg0q4RCQlItOsA59zEmOsEmthjxaqjFSPoIiuhL8gceT2G%2B1d9vMnP9JZbbsTB41xr4%2BMhGHOqyW22NYvUn%2BqkLQZVNlO4c2vlG3RsI9UtAW7xNXPdaNJbag0WVh6R%2F%2B26lD%2BRmEShcDvg%2BKvcudEoIkPPlN%2FGr2zdRlU%2BRfMNeogOZ1qv195tsBGgFM1FrSlGpstZCfZJrl8B7iCLEyiihvqR57WsPaMSDSGgBOC%2BdJbEY51kc8c%2FpmzkeELhN7N%2FKeWRdRYLk%2F%2FU6XejsItDrQUMeYsZQeOMfk1XkmOLrrLVPERHUw8Uv7WvoljXx%2BnjDh%2Bgkg8Ii9WUvMK9LyLQ4CvXL3AbaJ1xIld0I%2BUwXcfXXMNV9NUIUc2jYfRUtHGQf11RV1%2BJZYO3guXxmg3S2P6cUzxeiS0rZSrWuUDEShmdcB0sifT4aYa15h8mzU3uAaCSh21RIUAfNBMOVQMsHktLBajty3Y2QTK6zIjRHuq8g5WbQ%2FrixGec2h2eQYksS4rEbhwpU4Ege8NV%2Bsd1x8J7OgW3%2FaCSMK3pwMQGOqUBaPZz4ntVNTs7drTHGFVSYzVFLr83KL36ifcf%2BBV8DhxtiMvrqx9yWcW0K7ic6ljxilWrWc%2FYtNBLopJyxT3deGRG%2FZ1tiB0TH49SL6WEMyTpUh1Z%2BRuHQXBYd5cGV9dh5SQBgihLv7cDVodXrXgNy24CDPoCuan1x8zSWB66YnYjTKJZnEdTVEei%2B6RwyrGXvqwbF3UbM8%2F%2BCzoUEd1HrGTCn5kF&X-Amz-Signature=824e7eaaea3d7728191c07109f733492fead71d4d60989eb27a7a637857258e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2FOQXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFeyUkGRKOKR8RwEslpsh126VEOflPkjvFOwQRoRCpNeAiEA4lMXuUwgjeaxlcFZn8EEjslGb3QEqvlDkvDCE44rmRUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIcXtrBDfTADPpb6FSrcA2Acp9fG0MHi8wdUYJjxqR2o%2BVJYeTvsjcoZCgKlF3VbrBw523LJGFbRHC90wLNh4fUQnLsMzeGG75fg3%2FbxeBi5Ijzg0q4RCQlItOsA59zEmOsEmthjxaqjFSPoIiuhL8gceT2G%2B1d9vMnP9JZbbsTB41xr4%2BMhGHOqyW22NYvUn%2BqkLQZVNlO4c2vlG3RsI9UtAW7xNXPdaNJbag0WVh6R%2F%2B26lD%2BRmEShcDvg%2BKvcudEoIkPPlN%2FGr2zdRlU%2BRfMNeogOZ1qv195tsBGgFM1FrSlGpstZCfZJrl8B7iCLEyiihvqR57WsPaMSDSGgBOC%2BdJbEY51kc8c%2FpmzkeELhN7N%2FKeWRdRYLk%2F%2FU6XejsItDrQUMeYsZQeOMfk1XkmOLrrLVPERHUw8Uv7WvoljXx%2BnjDh%2Bgkg8Ii9WUvMK9LyLQ4CvXL3AbaJ1xIld0I%2BUwXcfXXMNV9NUIUc2jYfRUtHGQf11RV1%2BJZYO3guXxmg3S2P6cUzxeiS0rZSrWuUDEShmdcB0sifT4aYa15h8mzU3uAaCSh21RIUAfNBMOVQMsHktLBajty3Y2QTK6zIjRHuq8g5WbQ%2FrixGec2h2eQYksS4rEbhwpU4Ege8NV%2Bsd1x8J7OgW3%2FaCSMK3pwMQGOqUBaPZz4ntVNTs7drTHGFVSYzVFLr83KL36ifcf%2BBV8DhxtiMvrqx9yWcW0K7ic6ljxilWrWc%2FYtNBLopJyxT3deGRG%2FZ1tiB0TH49SL6WEMyTpUh1Z%2BRuHQXBYd5cGV9dh5SQBgihLv7cDVodXrXgNy24CDPoCuan1x8zSWB66YnYjTKJZnEdTVEei%2B6RwyrGXvqwbF3UbM8%2F%2BCzoUEd1HrGTCn5kF&X-Amz-Signature=4726695d2d4ad23351b6e0ef03c4e719098cb19513381534e4625a5a1bdf70e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
