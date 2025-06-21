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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBL35UI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2V727mempJnKJZqfRlIra1tmRw2%2BkBCJ%2BopokY7Ov3AiEAnzNs1O0eiSjcGeY%2B1NU4Y3YpzxX4AkX7UhISWvj3G2EqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORv2CuGFJwpqMEofSrcA1geS0SxKqXqu2WRznVx3g%2B5zp1tpFeQan0KLeJZ%2FWNqyWtTJtRS6XMsemDAbDhLTB2gTeDi9e0%2F0d%2Bpur8BiG5DlfMkWFqdfiMa%2FwQ26CspUi%2BtipG3s%2BVR5b8zq8mp%2B%2BXpTiOYYDlVDMdJE7sQIY0UWdrBiArel11gc5tY9GvQXX%2BAODoWPI1p4RtEpLWMQypLqJSzos2uS70HR%2FWS9QNkcGjAh6hfzwavsD9J%2FJ2bA7KEPYrBE%2BcFZO5KeSzRCG4p0AjoN8c326uS%2FjVKTY7zkdPyqGWJP6nMLQF9ho4L%2BuoHCyKcXqBuFXwKlLaQc2wjnVqTXn4DaSo4NKLafyCspzERla6f4P13AZcUq3RfKpQNP21Khzm3CuEk%2BsYXN4LPwEz97%2Fy2zvIboG4lwANs%2BZZtA1c5EIrW2QFk8NJe80YXk8Cm6zgDcclub5V8APNAMGewGL2CtyB3f24ekg%2BIJn8DPsr%2B%2F7Hzhc5ZLnY%2BJ8qeMEmV0vj%2FkSEwPGhGnCWZQ1eS5IBt8zKVc%2BVhgIFMeQyxrozycYF%2Fx4zCo3wTIuAKGPjR9aYe9Wqc%2FXTASM3fFOv%2FEtEqzNBT7mqSQhNFIM05P%2BpMrsRpAWtCnvxfzmLDcc7%2BU8jat%2BjtMOOt3MIGOqUB7%2BPQ5ETK%2FC%2BhlZARwvOLPSHHmxOyzQ%2FG1oMAQGz2YhSJCQ484oh3AXLFYr8ixKhOgVJH%2FXh7P5cNW%2BWBV7whY9otMuiq6s8QgGFNUo5NcLYunEvhWDHXAHIutivRkYIuoNMbaPy%2BgFt1Pqqh3Z0v6fSj3bnqXZm5nbEx078m9OYuBTJw%2FrqmKgxPjHLWgkb11STAAnCqGRiUUEOQpZL%2BvMfEL1TP&X-Amz-Signature=a2c3e73e557a85f33c8c5e1bd76801ed6ec35821ff6c560e2cac5dcad221c152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBL35UI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2V727mempJnKJZqfRlIra1tmRw2%2BkBCJ%2BopokY7Ov3AiEAnzNs1O0eiSjcGeY%2B1NU4Y3YpzxX4AkX7UhISWvj3G2EqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORv2CuGFJwpqMEofSrcA1geS0SxKqXqu2WRznVx3g%2B5zp1tpFeQan0KLeJZ%2FWNqyWtTJtRS6XMsemDAbDhLTB2gTeDi9e0%2F0d%2Bpur8BiG5DlfMkWFqdfiMa%2FwQ26CspUi%2BtipG3s%2BVR5b8zq8mp%2B%2BXpTiOYYDlVDMdJE7sQIY0UWdrBiArel11gc5tY9GvQXX%2BAODoWPI1p4RtEpLWMQypLqJSzos2uS70HR%2FWS9QNkcGjAh6hfzwavsD9J%2FJ2bA7KEPYrBE%2BcFZO5KeSzRCG4p0AjoN8c326uS%2FjVKTY7zkdPyqGWJP6nMLQF9ho4L%2BuoHCyKcXqBuFXwKlLaQc2wjnVqTXn4DaSo4NKLafyCspzERla6f4P13AZcUq3RfKpQNP21Khzm3CuEk%2BsYXN4LPwEz97%2Fy2zvIboG4lwANs%2BZZtA1c5EIrW2QFk8NJe80YXk8Cm6zgDcclub5V8APNAMGewGL2CtyB3f24ekg%2BIJn8DPsr%2B%2F7Hzhc5ZLnY%2BJ8qeMEmV0vj%2FkSEwPGhGnCWZQ1eS5IBt8zKVc%2BVhgIFMeQyxrozycYF%2Fx4zCo3wTIuAKGPjR9aYe9Wqc%2FXTASM3fFOv%2FEtEqzNBT7mqSQhNFIM05P%2BpMrsRpAWtCnvxfzmLDcc7%2BU8jat%2BjtMOOt3MIGOqUB7%2BPQ5ETK%2FC%2BhlZARwvOLPSHHmxOyzQ%2FG1oMAQGz2YhSJCQ484oh3AXLFYr8ixKhOgVJH%2FXh7P5cNW%2BWBV7whY9otMuiq6s8QgGFNUo5NcLYunEvhWDHXAHIutivRkYIuoNMbaPy%2BgFt1Pqqh3Z0v6fSj3bnqXZm5nbEx078m9OYuBTJw%2FrqmKgxPjHLWgkb11STAAnCqGRiUUEOQpZL%2BvMfEL1TP&X-Amz-Signature=25f3a0c70133a5c4ff920f3c19958ba039e17cff3b80a6e91289eb67ae1ac93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
