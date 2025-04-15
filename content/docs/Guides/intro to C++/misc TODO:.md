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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOYO6KS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX1k1sCUZFxYAxjbsy7RjJp%2FuwRVhoge9GGdgj8ZBZ5AIgepaC7gbY6I2kSO2Nj7nA0Xf7WQnulpblk81wVAk%2BaPwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAZA3qxYmwYqGYF5oyrcAwpvW25S4cXt7Agaw4E2br4u97ro5HIP%2BUNLpL1CNgcFobwB7sOWZfsC6DT%2Fb7Hik6hgFwicABIDd0H%2B0zWkZ63cs5XTHVu3R70X5xuxwIOz63e51w1bGbECugeA32qIdD2jMgtnevxQJmO4Tf6zrxZyeHXu1FlCHP9K9e24OnvAyRbL%2FnyGWtMTVoTwa4QCwdtI3DVvF9G0Nrf6L9vRxgYBvJx%2BpYcTMoEMJh9hkMuXihL7DB3u8cZphONSRNrYmIPASSvvd5Xhncap%2F8s3pwNUQmcHlUXQpnMmIe5wkv1jpULp4feqisSl8cC6LXX%2FNKEE7gUgik%2FtJDMUpb%2BhoHfuwQFTrNS0v4CSsc8b5fNycgq4vqFXw8G3Kfwo9tq9InInHZH1tDPJtuo5hsDKWrKNkAXYkDxUDrUpXlYDyZwsozA1U4i8UIqb9Jd8HACuOa5UIcDFRaIBeoN69iCmzU8Nw1L3LLEAwbhZLIMdWdhTrM0cxEH3D4yuZkyb88hd2tR10OHWvTTb0E2lGhcCqmJdzkxUFYJSHJqP5NYVpiUttEnd2sXvoY0Z%2Fm85kTm8DjtAMxzedNMe%2B1KirPlYOqf8YOIjgqvGwhiXWIhrMLFTi6YwUsHAEyNX4KI%2BMIjW%2Br8GOqUBaQFFgbVKZrVlZ3ilKI0tRA5uwK7dCQ6CAJfSY0mIijbbJSoc5UjyL9qgsKaQyscOqAkvI6AMBBVXhs5qo1B5yG0Y9DGJC8Xd9y1luVBHSEkYmYEB0vgKrQMqHAoF%2BrULow9%2FwKhCFe6MwX5ZDKA%2FV2sO7ob5xq9Q4QiIpR0fD6r7vvi9b4Y6i9mzwq7%2BXkjvUYaYH3fxPFp3Dwp6FlnWXRVLBLze&X-Amz-Signature=84e2c7cbbdcfc23f10b826ecee8db47c9475b066c64593951f93ef933ddce536&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOYO6KS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX1k1sCUZFxYAxjbsy7RjJp%2FuwRVhoge9GGdgj8ZBZ5AIgepaC7gbY6I2kSO2Nj7nA0Xf7WQnulpblk81wVAk%2BaPwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAZA3qxYmwYqGYF5oyrcAwpvW25S4cXt7Agaw4E2br4u97ro5HIP%2BUNLpL1CNgcFobwB7sOWZfsC6DT%2Fb7Hik6hgFwicABIDd0H%2B0zWkZ63cs5XTHVu3R70X5xuxwIOz63e51w1bGbECugeA32qIdD2jMgtnevxQJmO4Tf6zrxZyeHXu1FlCHP9K9e24OnvAyRbL%2FnyGWtMTVoTwa4QCwdtI3DVvF9G0Nrf6L9vRxgYBvJx%2BpYcTMoEMJh9hkMuXihL7DB3u8cZphONSRNrYmIPASSvvd5Xhncap%2F8s3pwNUQmcHlUXQpnMmIe5wkv1jpULp4feqisSl8cC6LXX%2FNKEE7gUgik%2FtJDMUpb%2BhoHfuwQFTrNS0v4CSsc8b5fNycgq4vqFXw8G3Kfwo9tq9InInHZH1tDPJtuo5hsDKWrKNkAXYkDxUDrUpXlYDyZwsozA1U4i8UIqb9Jd8HACuOa5UIcDFRaIBeoN69iCmzU8Nw1L3LLEAwbhZLIMdWdhTrM0cxEH3D4yuZkyb88hd2tR10OHWvTTb0E2lGhcCqmJdzkxUFYJSHJqP5NYVpiUttEnd2sXvoY0Z%2Fm85kTm8DjtAMxzedNMe%2B1KirPlYOqf8YOIjgqvGwhiXWIhrMLFTi6YwUsHAEyNX4KI%2BMIjW%2Br8GOqUBaQFFgbVKZrVlZ3ilKI0tRA5uwK7dCQ6CAJfSY0mIijbbJSoc5UjyL9qgsKaQyscOqAkvI6AMBBVXhs5qo1B5yG0Y9DGJC8Xd9y1luVBHSEkYmYEB0vgKrQMqHAoF%2BrULow9%2FwKhCFe6MwX5ZDKA%2FV2sO7ob5xq9Q4QiIpR0fD6r7vvi9b4Y6i9mzwq7%2BXkjvUYaYH3fxPFp3Dwp6FlnWXRVLBLze&X-Amz-Signature=96e51120678c253d1b5c734bfe79dde1741235f0777b0e22f3e5fcd2ef583d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
