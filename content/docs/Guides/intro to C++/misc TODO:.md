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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJKJD47%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfjA%2FpHsrWfEXyPGk5WXuEuEseoXRd74qOV%2BdW%2BykWSAiEA5eeLxykK1Uq6dm%2BA%2BDwKvqRkZBs8K1l3miIW4CNSOg0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGI3MURr%2Fw3GwsVDjyrcA24zhfCsGNAmt0A4xaDF1IhWO5fP%2FB%2FuiX8MEiaP%2B1rHtjEEobdKcaFZm27OZAxEgXhdiQnyHbgbkVAno7Ipe%2BDFpcssYhpbOk0thTUDvsYQ0NNBPQeCeRupDPM05cur%2B1cx%2BCvI9VXqA6KRB7mjduzAZ7lCJXoz8afrn0QQv8q2YDwjT41BS5OqBr3LBuWKZmosynU0nvvwYHXAJaxAJ5qWjAwWkUN%2Ftn1HMaGfoNIKSi93qRuhur5x3aWn2Y7%2BPmY910OjOLw6xLCI0K4kjMBARFlm5SfcencM%2FpK%2FL%2BLCUJFdV76xuCxMJe0voYAFu5ViXcP0%2FUg0Ex%2BePdXmvcNEKNIkBk0SV%2FF2usTLwSadhuEmkT5dv%2FRxn39fhkoECKqIkLiH5BxIsDDo6uqDSV%2Br%2FLiDckgcPpPR5tl4zhbA7Ln%2FTyr291V55WqI6yaVXons7Lz5hhzfUCjImsG0VC8CAK8ri0xUkHI3lp07SVwu%2FKpI%2B%2B%2FbZuvgLpwldBLO5aiLxVdpC687zpqIPZSltV8ahMNKD5j92EZVQmowfFT98Pds6lp%2BaapOu%2FXdYNwxKMdIWFq0FY%2Fv%2Fw2c%2F9ILYRqEFg28YQrQAUzUrOgYMqkWeB2LOI4kdXx2%2FD4IMMXQ978GOqUBnmH3shhPecRZxG08rcwsid6CfmCG7PEHTsrH6R%2F3sLzGdRM4piAAjyXAJnIfPsvEjsCKCWWX2Pz8HN%2FyfZ%2FrDVxapMljazCrwODraPtdxb3wfbgV1rsAb4QBHj%2FghjMC3BpouSTFt8hgrJTki8DR14pYa%2BvcaNEEoNDT3wWtetMsQuAnGaI33iEQwMOjUzIZKLqFEQyuaz8vYvxRC3MIFeUbcLgJ&X-Amz-Signature=ea7ca7684e3b744ab8db8a9b90266d1ecfd92ef18eec37eda852573464fb8a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJKJD47%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfjA%2FpHsrWfEXyPGk5WXuEuEseoXRd74qOV%2BdW%2BykWSAiEA5eeLxykK1Uq6dm%2BA%2BDwKvqRkZBs8K1l3miIW4CNSOg0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGI3MURr%2Fw3GwsVDjyrcA24zhfCsGNAmt0A4xaDF1IhWO5fP%2FB%2FuiX8MEiaP%2B1rHtjEEobdKcaFZm27OZAxEgXhdiQnyHbgbkVAno7Ipe%2BDFpcssYhpbOk0thTUDvsYQ0NNBPQeCeRupDPM05cur%2B1cx%2BCvI9VXqA6KRB7mjduzAZ7lCJXoz8afrn0QQv8q2YDwjT41BS5OqBr3LBuWKZmosynU0nvvwYHXAJaxAJ5qWjAwWkUN%2Ftn1HMaGfoNIKSi93qRuhur5x3aWn2Y7%2BPmY910OjOLw6xLCI0K4kjMBARFlm5SfcencM%2FpK%2FL%2BLCUJFdV76xuCxMJe0voYAFu5ViXcP0%2FUg0Ex%2BePdXmvcNEKNIkBk0SV%2FF2usTLwSadhuEmkT5dv%2FRxn39fhkoECKqIkLiH5BxIsDDo6uqDSV%2Br%2FLiDckgcPpPR5tl4zhbA7Ln%2FTyr291V55WqI6yaVXons7Lz5hhzfUCjImsG0VC8CAK8ri0xUkHI3lp07SVwu%2FKpI%2B%2B%2FbZuvgLpwldBLO5aiLxVdpC687zpqIPZSltV8ahMNKD5j92EZVQmowfFT98Pds6lp%2BaapOu%2FXdYNwxKMdIWFq0FY%2Fv%2Fw2c%2F9ILYRqEFg28YQrQAUzUrOgYMqkWeB2LOI4kdXx2%2FD4IMMXQ978GOqUBnmH3shhPecRZxG08rcwsid6CfmCG7PEHTsrH6R%2F3sLzGdRM4piAAjyXAJnIfPsvEjsCKCWWX2Pz8HN%2FyfZ%2FrDVxapMljazCrwODraPtdxb3wfbgV1rsAb4QBHj%2FghjMC3BpouSTFt8hgrJTki8DR14pYa%2BvcaNEEoNDT3wWtetMsQuAnGaI33iEQwMOjUzIZKLqFEQyuaz8vYvxRC3MIFeUbcLgJ&X-Amz-Signature=5cd41d2647068ba71ea6197e38d5e02742c265e65bec7a5007bc6ee6c4313616&X-Amz-SignedHeaders=host&x-id=GetObject)

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
