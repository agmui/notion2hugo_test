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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7UXKIX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7cvgsOjO1cHfS0OwnZPdO82T21MJFG%2BJrjEoA0y9zVAiEA17qtlPhwdMfLOzW%2FREM3HlWMLGlhpx0xJYzE9d9vBXgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEu5VJL%2FYsXJTp1HQyrcA2IRJVCtOya1hozRMtFhssSx89gaJV0NeWBV8BTDPciW%2BncMcs1uIq2hlAlzIz%2F%2FVXJl6cUqvShmWsc9z0%2B4nhGdHZrfn8ZE9Y%2FCuHJcU3gLjlNqAnt65Wger%2BlcYmfHmuTDlwtrASQUQsXlbIdTU1CiedowrGhpLHMzQmFvQ007zAY3k%2F9O2qNyTG9uowT2vi5PnSfHQkSwy9VLeZ4lQPC2S51VvTaxouShoEVUtPuukEzZbMhXByPXH%2FYPIVh4FlUtNIrJYHNqHskmOBBKaFqYEocetofliJUUt5XgLHN7ZiOdz48UkSN%2Fq26RqKpaWf%2B0FJPphHDJX%2BldSWBoo3VCK%2BwqDbnphKcyCWb8wQLEagHatPXZ1R%2FC%2BHJO3WvP9cbaUpfAxq41n4SejJXpeTqIbdct44R8huICOaWRFqP%2F7JZb2rAw7uwfFYc60fmzm2hs8sWIBxJwNi%2FVb5ueJXLjTz%2B6vl131Oa7F0HkRcNmOxlO05V1qwKuwqbXO4XFuitEVe8U7M03Tzw6DZRH4t7b84hADJmnWz%2BLRo%2BVc3sowxGCytKyyS8BQRmDmd0AhzpCszkqWWxKKF7ujekChl7JDM233Z99DvgsZyDPdIca5DJBBnxC0%2BOq%2FlV5MM%2BB2L4GOqUBLN7Q39LzQrzshvtEcKdFBJPPDnWokIU1Ukrz1hgxM4ywq3t3p05rKMaiql6UiQZfuh8IjqLM%2B8tfVqtRLQoLuV%2BOSHUiI2ry17YxSkdbz5s0BDQ%2FCkyTXLYOLYYrmaVP5Yr6RH6x12wTWlOe5wr1ktwCTdZXYt2bDQBhaJnMqjBxQqkgRIX4G5dRjEJvHfcjKr5aP3aSOJrkGfnvTrMzTXVif2eb&X-Amz-Signature=fcb43e127136a66d974922d43ac59dd1b0e1f5522bc0c0a5b0140d2514425290&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7UXKIX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7cvgsOjO1cHfS0OwnZPdO82T21MJFG%2BJrjEoA0y9zVAiEA17qtlPhwdMfLOzW%2FREM3HlWMLGlhpx0xJYzE9d9vBXgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEu5VJL%2FYsXJTp1HQyrcA2IRJVCtOya1hozRMtFhssSx89gaJV0NeWBV8BTDPciW%2BncMcs1uIq2hlAlzIz%2F%2FVXJl6cUqvShmWsc9z0%2B4nhGdHZrfn8ZE9Y%2FCuHJcU3gLjlNqAnt65Wger%2BlcYmfHmuTDlwtrASQUQsXlbIdTU1CiedowrGhpLHMzQmFvQ007zAY3k%2F9O2qNyTG9uowT2vi5PnSfHQkSwy9VLeZ4lQPC2S51VvTaxouShoEVUtPuukEzZbMhXByPXH%2FYPIVh4FlUtNIrJYHNqHskmOBBKaFqYEocetofliJUUt5XgLHN7ZiOdz48UkSN%2Fq26RqKpaWf%2B0FJPphHDJX%2BldSWBoo3VCK%2BwqDbnphKcyCWb8wQLEagHatPXZ1R%2FC%2BHJO3WvP9cbaUpfAxq41n4SejJXpeTqIbdct44R8huICOaWRFqP%2F7JZb2rAw7uwfFYc60fmzm2hs8sWIBxJwNi%2FVb5ueJXLjTz%2B6vl131Oa7F0HkRcNmOxlO05V1qwKuwqbXO4XFuitEVe8U7M03Tzw6DZRH4t7b84hADJmnWz%2BLRo%2BVc3sowxGCytKyyS8BQRmDmd0AhzpCszkqWWxKKF7ujekChl7JDM233Z99DvgsZyDPdIca5DJBBnxC0%2BOq%2FlV5MM%2BB2L4GOqUBLN7Q39LzQrzshvtEcKdFBJPPDnWokIU1Ukrz1hgxM4ywq3t3p05rKMaiql6UiQZfuh8IjqLM%2B8tfVqtRLQoLuV%2BOSHUiI2ry17YxSkdbz5s0BDQ%2FCkyTXLYOLYYrmaVP5Yr6RH6x12wTWlOe5wr1ktwCTdZXYt2bDQBhaJnMqjBxQqkgRIX4G5dRjEJvHfcjKr5aP3aSOJrkGfnvTrMzTXVif2eb&X-Amz-Signature=03bdab1aaf33eaf7470a04035cb8bb4b5108a44e4eced48fa1c6068d3bc01044&X-Amz-SignedHeaders=host&x-id=GetObject)

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
