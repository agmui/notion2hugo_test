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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YA4AEX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFAer%2FfhOP17L6aUncXEHTRzs74qllQnBBkqRj7IiBvkAiEApcc%2BZ7%2BDoRqvwB241TJVJyuNRKfd3aqhiSq95inFDScq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB%2BnPX67%2BussnMUrzyrcA9o6LNxDwEKtfNAIN8tvmhPEqUaevhnQF8LXfEkYQTVYner716msas91ggQDXv4Bq99oyBaFisJyZelUzKfWkc0eqbawJWE8mlkSgCs4YVIerCIu76mnJ8AZ8mLZD9UAu4t1wBW%2FY0LiTva82WN9%2B8Dvt5cAIfYXVUXVoltJORYCgvDujr3%2FrQZQnME6COnn8f6FrgK3FzKnwHRidTDiPXSB9LbSdDGEHhQdzoPopROxHwUjFnbEjYEAG3rTgvuoDTJjr%2FU1H5wqFKszQIuPJulandXX8g54RCiuHHYnbvg6OHX4mNLw7Ky4ZMANX9ZDh0%2B%2FZeZmyW1stfR7QOOEL7th4ElRGdXgRUVgKGYypWMKoE8POvc6WDK8TBadU12GWSJpH%2FypgafynBAo8Nq4NbGNGuTmtutDzG%2FPcl%2BMumqIzCFI2QVbVHRY0FwU%2BjvXgr2hV9cKq%2BoRViGhYLugU2AKlZUSLa4EeTf4N99knAWfPLr6LLtaZ3%2Fxd2GD2GcQD9t13gU3xlMnIshazmOBRGiapAEmmUfiz1x%2FX5G%2Fj3WVPyZRDBsjYueIawcq6yKlYGliyRmBhuh1c5GwWUlA8SkgVG%2FU4TWIkQ95OIvMbh0EzEeLTHkFWjL%2F1giBMPetgsIGOqUBcoBdZ%2BnXdmo%2FKa7TO6EVZhMFJ%2BeIbMASLhWweKpz9W8E%2BUm4a54%2FSbyZ3By7roHASOqs0chvQW6Wa9M3oJUXvpMiOmxBxZ3L5JHBQloIvL0OSK%2F6qdLXShNQq7I9NtRf3hiOcqVdbAbREGPrUn3SRk%2BoXh4bzef2oMMX26Prw6GZ6ukyKohBiklEi0NpcNSy2HlKCF0J%2B093P3cHEZHKyhp%2FQZbR&X-Amz-Signature=a12c1c21b013664a8528ae91e37f19a1525f314b12a8b63b5ad47f16a95e9663&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YA4AEX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFAer%2FfhOP17L6aUncXEHTRzs74qllQnBBkqRj7IiBvkAiEApcc%2BZ7%2BDoRqvwB241TJVJyuNRKfd3aqhiSq95inFDScq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB%2BnPX67%2BussnMUrzyrcA9o6LNxDwEKtfNAIN8tvmhPEqUaevhnQF8LXfEkYQTVYner716msas91ggQDXv4Bq99oyBaFisJyZelUzKfWkc0eqbawJWE8mlkSgCs4YVIerCIu76mnJ8AZ8mLZD9UAu4t1wBW%2FY0LiTva82WN9%2B8Dvt5cAIfYXVUXVoltJORYCgvDujr3%2FrQZQnME6COnn8f6FrgK3FzKnwHRidTDiPXSB9LbSdDGEHhQdzoPopROxHwUjFnbEjYEAG3rTgvuoDTJjr%2FU1H5wqFKszQIuPJulandXX8g54RCiuHHYnbvg6OHX4mNLw7Ky4ZMANX9ZDh0%2B%2FZeZmyW1stfR7QOOEL7th4ElRGdXgRUVgKGYypWMKoE8POvc6WDK8TBadU12GWSJpH%2FypgafynBAo8Nq4NbGNGuTmtutDzG%2FPcl%2BMumqIzCFI2QVbVHRY0FwU%2BjvXgr2hV9cKq%2BoRViGhYLugU2AKlZUSLa4EeTf4N99knAWfPLr6LLtaZ3%2Fxd2GD2GcQD9t13gU3xlMnIshazmOBRGiapAEmmUfiz1x%2FX5G%2Fj3WVPyZRDBsjYueIawcq6yKlYGliyRmBhuh1c5GwWUlA8SkgVG%2FU4TWIkQ95OIvMbh0EzEeLTHkFWjL%2F1giBMPetgsIGOqUBcoBdZ%2BnXdmo%2FKa7TO6EVZhMFJ%2BeIbMASLhWweKpz9W8E%2BUm4a54%2FSbyZ3By7roHASOqs0chvQW6Wa9M3oJUXvpMiOmxBxZ3L5JHBQloIvL0OSK%2F6qdLXShNQq7I9NtRf3hiOcqVdbAbREGPrUn3SRk%2BoXh4bzef2oMMX26Prw6GZ6ukyKohBiklEi0NpcNSy2HlKCF0J%2B093P3cHEZHKyhp%2FQZbR&X-Amz-Signature=645ae83a33c6dac3153b7975e27349b1bc0b1b376ce4c61768e795de83b7d453&X-Amz-SignedHeaders=host&x-id=GetObject)

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
