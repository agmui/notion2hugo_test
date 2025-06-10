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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUCQUU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV0k3V8TngXw8tocl92ckdkadF25uXvva7tSJy8RtmgAiEAqhe0%2BxWTRW%2F3%2B8bGEYGBBKrt%2FXMXfG2BbfI%2B5Ttf51cqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcHYcnYYxGA3FRWoircA2leN%2BRVeTB813xN64ew5k%2Fz1RXuHo3LaOgKFSVFLOGJeRwWih7DRWTosDbEXukoKrtYmkC7pkmDbCClXkBZagWLK1VGPlqDJeQk6EJ%2Bglq%2BENEQaN%2FtZzmLCNVhkS4s9G8uwV84cswE1iWIca3uHKy9JVHgm8Yi9p7IoTLnoJI5L1pZUb9MqyYigHEt1d5WigtRcZkYMCC1fRrhTO1Ua3qF5l8uFq8FYCh5n8OK4d%2BuwvkXwucw9SowKyPGu24Bk4F%2BjD7mqE5G0oensWrBPG%2Fi3cf68%2F7z549sRE91%2BDjHzBxE6HQQnCmkXgMLWkQxrYwPYrqZuqJ6RLY2PbsMtV3EP9KOaobqz7nW9yYwzVPqqsL%2Btb2ogRLvfQDMSBEiew%2Fw4i7BaFCQL3RDr24YkY5F6bP%2Fu23Wd5l38DBGPpVMdgMRvOrJ5Ge9h8xqfAArE%2BGlkSHyxIT%2BVvOQwn4SuGNwAO1I7cGqQRMrO1yGneynRd0B8HBEGX8OQPepHZeHKbo8lobTLZm2c%2FpDwCMl%2BXp1rZbIuNyPkoV%2Bwwvd%2F6kh2UmkNlS1n23ytffb15F%2B1RemU4ivE8igUEJKpPAfzaULUC1K9JIRpzUSntYK7Be0eVVocI%2Febd8tlhgqMJvLocIGOqUB0rQRpJm0nSB8oHPzUmM9W%2FilMaK7ymglmN%2FWNk6gIXZuv1jr4zDICKqLxAGM%2BKylnUKH4MCboFBEHD9WIZhaTQpHvHm%2FPFDWEaGpko6vEhhehbe0R%2F4CxSGptmwh9RsBBWvgH23BWzj5qfzz86f7ZCkfpUetpuGlH4bfmyh9UjEV7r4xkKBr9QiD8ZuyITm4%2Fee0aiYSgOxxjI17l2pEts2vzOtk&X-Amz-Signature=6ace66f7bbc29b9b6ed148e8a9788103bec9d4cdce4c556f1f9ba485d4110d20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUCQUU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV0k3V8TngXw8tocl92ckdkadF25uXvva7tSJy8RtmgAiEAqhe0%2BxWTRW%2F3%2B8bGEYGBBKrt%2FXMXfG2BbfI%2B5Ttf51cqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcHYcnYYxGA3FRWoircA2leN%2BRVeTB813xN64ew5k%2Fz1RXuHo3LaOgKFSVFLOGJeRwWih7DRWTosDbEXukoKrtYmkC7pkmDbCClXkBZagWLK1VGPlqDJeQk6EJ%2Bglq%2BENEQaN%2FtZzmLCNVhkS4s9G8uwV84cswE1iWIca3uHKy9JVHgm8Yi9p7IoTLnoJI5L1pZUb9MqyYigHEt1d5WigtRcZkYMCC1fRrhTO1Ua3qF5l8uFq8FYCh5n8OK4d%2BuwvkXwucw9SowKyPGu24Bk4F%2BjD7mqE5G0oensWrBPG%2Fi3cf68%2F7z549sRE91%2BDjHzBxE6HQQnCmkXgMLWkQxrYwPYrqZuqJ6RLY2PbsMtV3EP9KOaobqz7nW9yYwzVPqqsL%2Btb2ogRLvfQDMSBEiew%2Fw4i7BaFCQL3RDr24YkY5F6bP%2Fu23Wd5l38DBGPpVMdgMRvOrJ5Ge9h8xqfAArE%2BGlkSHyxIT%2BVvOQwn4SuGNwAO1I7cGqQRMrO1yGneynRd0B8HBEGX8OQPepHZeHKbo8lobTLZm2c%2FpDwCMl%2BXp1rZbIuNyPkoV%2Bwwvd%2F6kh2UmkNlS1n23ytffb15F%2B1RemU4ivE8igUEJKpPAfzaULUC1K9JIRpzUSntYK7Be0eVVocI%2Febd8tlhgqMJvLocIGOqUB0rQRpJm0nSB8oHPzUmM9W%2FilMaK7ymglmN%2FWNk6gIXZuv1jr4zDICKqLxAGM%2BKylnUKH4MCboFBEHD9WIZhaTQpHvHm%2FPFDWEaGpko6vEhhehbe0R%2F4CxSGptmwh9RsBBWvgH23BWzj5qfzz86f7ZCkfpUetpuGlH4bfmyh9UjEV7r4xkKBr9QiD8ZuyITm4%2Fee0aiYSgOxxjI17l2pEts2vzOtk&X-Amz-Signature=dab0f9d98750cec4f9e769facf5cf463c5854dd8494850a24c6217981320e9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
