---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXMB2OD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDzMEzcMmn18XIRUSkl1Tt5N9Pk6KlamuCV%2BkowfyZMOwIhANAtgQzQ1JrlZ7dW40ZSNG2s8ZS8yz1pXRic2nsBmSKiKv8DCEAQABoMNjM3NDIzMTgzODA1IgwxHK9uQl%2BPFJUjJ4Mq3AOrYkWEBqhRDUBLnqhymQvbzxeRPR9S5fOXYhoTB4qMNY9YZJ%2Byh8RBL3Pi6CcT2Ri2biHkO0gwAdGA%2BzhtLUOve2vXzbThwT943TXKUXrSQD6YiDuJPxBurxVZ%2BdVaBtIYbkLJfqoub9qQxcVP%2FHSZOYb04x9tBui41uXLAz39Hvxi8XckuDFpa9ImfdTKoCfvceHQHsEWDPw7tvKE2U5ouT30v%2BpsHu85B7TDnOk1bDCVqrwAOLy3VgJotjEtGpc7RFyG8uKNV4IYcSv8j7Fw17SATXX6HBTbU%2FFLRV2frqkv%2BsDedQDwV7k3z1YCGVY5aTzmXRVM3zen89zyjzO9d40YRo3Do4sH3CPLwRlkZTEFJ%2FTTwcs9mgauVmUe8NOdE2qwVSk%2BrFFq8snZmomNtvzLF%2BZ8J1InK58LyEHGUvh7jeowsoGg43CdEHjP1x%2Bqh%2FIH4%2BF0Tr8uuYBwGOu5ul1hb9xXW%2FqGqM70VE00GkcWEcn5Y6w4k2YOYrf1RRPuVHkTcDjOQmxTkt7KOOIvXkNq0o6OBq4Z4PVknXrOhu45p52ArDuTnLLFrg68fVltZ%2Bxll%2BgQi%2BEPW%2BmYxRcm3gMkhwZKSnhJ62uSr%2FnVL25WAVfvocmObj3ZejDjl4y9BjqkAQOnyGOzJAUTnKa0ciqeJqpPZtRpOVOnr14W%2BG2jblPeBDgUkJcnBIE5JhUaADFfaA%2BxaVpGuNQWYjvcaVYLl8CLxUvN6AGyl93RcgzmHR8WuQd5xI4KC%2BKwiMxC%2BuKD0b%2FjTwzFaEo5MZHujN7mV3L6CrumVuvqYwIbjPn3WCrh9XlNNQv7uhfyQcAMWNdul3TKy54m4TF0hy5o29czFeRDSae0&X-Amz-Signature=f8d33da45b12319211e91e9b414814bd291ec23be96211a3c2c8352519512dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXMB2OD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDzMEzcMmn18XIRUSkl1Tt5N9Pk6KlamuCV%2BkowfyZMOwIhANAtgQzQ1JrlZ7dW40ZSNG2s8ZS8yz1pXRic2nsBmSKiKv8DCEAQABoMNjM3NDIzMTgzODA1IgwxHK9uQl%2BPFJUjJ4Mq3AOrYkWEBqhRDUBLnqhymQvbzxeRPR9S5fOXYhoTB4qMNY9YZJ%2Byh8RBL3Pi6CcT2Ri2biHkO0gwAdGA%2BzhtLUOve2vXzbThwT943TXKUXrSQD6YiDuJPxBurxVZ%2BdVaBtIYbkLJfqoub9qQxcVP%2FHSZOYb04x9tBui41uXLAz39Hvxi8XckuDFpa9ImfdTKoCfvceHQHsEWDPw7tvKE2U5ouT30v%2BpsHu85B7TDnOk1bDCVqrwAOLy3VgJotjEtGpc7RFyG8uKNV4IYcSv8j7Fw17SATXX6HBTbU%2FFLRV2frqkv%2BsDedQDwV7k3z1YCGVY5aTzmXRVM3zen89zyjzO9d40YRo3Do4sH3CPLwRlkZTEFJ%2FTTwcs9mgauVmUe8NOdE2qwVSk%2BrFFq8snZmomNtvzLF%2BZ8J1InK58LyEHGUvh7jeowsoGg43CdEHjP1x%2Bqh%2FIH4%2BF0Tr8uuYBwGOu5ul1hb9xXW%2FqGqM70VE00GkcWEcn5Y6w4k2YOYrf1RRPuVHkTcDjOQmxTkt7KOOIvXkNq0o6OBq4Z4PVknXrOhu45p52ArDuTnLLFrg68fVltZ%2Bxll%2BgQi%2BEPW%2BmYxRcm3gMkhwZKSnhJ62uSr%2FnVL25WAVfvocmObj3ZejDjl4y9BjqkAQOnyGOzJAUTnKa0ciqeJqpPZtRpOVOnr14W%2BG2jblPeBDgUkJcnBIE5JhUaADFfaA%2BxaVpGuNQWYjvcaVYLl8CLxUvN6AGyl93RcgzmHR8WuQd5xI4KC%2BKwiMxC%2BuKD0b%2FjTwzFaEo5MZHujN7mV3L6CrumVuvqYwIbjPn3WCrh9XlNNQv7uhfyQcAMWNdul3TKy54m4TF0hy5o29czFeRDSae0&X-Amz-Signature=31192612befb0530e7b61b4bc14ab8746ca96959e677289918bfa03f7d403721&X-Amz-SignedHeaders=host&x-id=GetObject)

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
