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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT7ZBFMW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDPg%2FxTynTNtfpeon5Xhtmtwmb0pHu7f9HrCFYzrEFEPQIge%2FLwVM7muuQB6xWTagN3PbK8N6%2F22ATNwBiEYE2r0XcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWUxHzjzrpZ4E980CrcA%2FgAD1OVbn%2FeCwbSzaPqCtMsB4kRre%2FW2dHjgxcPOi35%2FgMjeVRcgc%2FTR%2F3ri8G1VyU1%2FhM4tuHWssD4cLWNYScaadi07A0OdL3Al614W2Pjh7ig%2Fs%2FuhLCHkpQVlcvkJs%2BoV7rBDqXYaoaeQYtuFwlKaTjh23wxqjXKn%2BAh85wTJfxeBuxiLw5glheh5TGekJm56jKmXz7850ErTsS1qzIN%2Fb0l8phMwtVdiOpbNEqWikZGGq4ZJIJO%2Fqflbmx9FEYCUIUHC%2FhJt7BpbPb8TT26UL1eRUFbsocIH%2F3tEyTSUG4RURN9%2B%2Fpvfe03IcQjERXKI12946xQwsSEuF1OQMHSbIQyXtwPa9X9QuchnTBRRiix%2FXeue3ofmGMD3yiuywj43GPXFvOOGWTP1VIfzsqMpQ8ieg4S1t%2BgSqZE0JC6L4VONHchJdlJZQw3rF%2BS0as0fbtMmjfakvvSQ5%2B%2B%2BgRnirOcxEE07lGkrGHQyYGUqvwYAaCH6LkVB8aYB8LT2yx0jal4hLTwbJIDmY%2BnQugSMoCUwfVXEQ%2FVpUXRKoD881LIIK3uVIsrAIBfpbMrSZGYVfP%2B8E3zPdxlKQtqzPtNSsyXHWqYwMoPdO%2FFwYSLChBe%2FAvPc314peBGMPeH0cAGOqUBFM65%2FpsJufHvarLcxyVf0NOYn9LNuzqQqTX4H5PHoeAelwBdpg65FJ0Ppa5Pf3ElodsxqVAneDjxS4irvTinZHLKQKtZ5UjAagnTn7kX3duzd2mt7oWCiasVQmlh5NmZjmbXTm1Ar10%2FnOhTsvZmeIyTYUYDWmnVFpZkqb3MJEC2dPRnuuuLPK6beFyZCnHaS15QS7SM1tLu3x0rXh7BhyBEx5QH&X-Amz-Signature=da09cc1452acab0b23c40a191fe8c61f818c3d7669c7272920696f2d7f0be9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT7ZBFMW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDPg%2FxTynTNtfpeon5Xhtmtwmb0pHu7f9HrCFYzrEFEPQIge%2FLwVM7muuQB6xWTagN3PbK8N6%2F22ATNwBiEYE2r0XcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWUxHzjzrpZ4E980CrcA%2FgAD1OVbn%2FeCwbSzaPqCtMsB4kRre%2FW2dHjgxcPOi35%2FgMjeVRcgc%2FTR%2F3ri8G1VyU1%2FhM4tuHWssD4cLWNYScaadi07A0OdL3Al614W2Pjh7ig%2Fs%2FuhLCHkpQVlcvkJs%2BoV7rBDqXYaoaeQYtuFwlKaTjh23wxqjXKn%2BAh85wTJfxeBuxiLw5glheh5TGekJm56jKmXz7850ErTsS1qzIN%2Fb0l8phMwtVdiOpbNEqWikZGGq4ZJIJO%2Fqflbmx9FEYCUIUHC%2FhJt7BpbPb8TT26UL1eRUFbsocIH%2F3tEyTSUG4RURN9%2B%2Fpvfe03IcQjERXKI12946xQwsSEuF1OQMHSbIQyXtwPa9X9QuchnTBRRiix%2FXeue3ofmGMD3yiuywj43GPXFvOOGWTP1VIfzsqMpQ8ieg4S1t%2BgSqZE0JC6L4VONHchJdlJZQw3rF%2BS0as0fbtMmjfakvvSQ5%2B%2B%2BgRnirOcxEE07lGkrGHQyYGUqvwYAaCH6LkVB8aYB8LT2yx0jal4hLTwbJIDmY%2BnQugSMoCUwfVXEQ%2FVpUXRKoD881LIIK3uVIsrAIBfpbMrSZGYVfP%2B8E3zPdxlKQtqzPtNSsyXHWqYwMoPdO%2FFwYSLChBe%2FAvPc314peBGMPeH0cAGOqUBFM65%2FpsJufHvarLcxyVf0NOYn9LNuzqQqTX4H5PHoeAelwBdpg65FJ0Ppa5Pf3ElodsxqVAneDjxS4irvTinZHLKQKtZ5UjAagnTn7kX3duzd2mt7oWCiasVQmlh5NmZjmbXTm1Ar10%2FnOhTsvZmeIyTYUYDWmnVFpZkqb3MJEC2dPRnuuuLPK6beFyZCnHaS15QS7SM1tLu3x0rXh7BhyBEx5QH&X-Amz-Signature=645530c2cd54fffafea6d2feb80dabbf3123fd37efb3d036e2c86f8afc8d06b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
