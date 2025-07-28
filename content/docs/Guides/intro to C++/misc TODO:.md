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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XXSKWQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQChIDXjiGxsOL5P8FZjPd9Rw3oeT8TajuVQeC8w39zvlQIgbRw%2FoH3PmkKw9YHwN6kerjJGiOgzU9YSlD6ZxxD7yZQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiOMdUSB7Hlda%2FNJircAxLqfD649CaSb%2BMU%2BUrzGElFNo8hyAeQG4%2FTU%2B%2BTSXq3g18PWRQV%2Fpmyedtu1mA1IaSCKWchgwcGBMH%2FYXG98ZBHGkA73bZO2RgitntLU0gCtjDBClI%2BycAMp3MpxbLg9yH8ZHoflleoKE9sCOk0QgaZgKrW%2BAvJOfVK%2BVkh5n35APy3XqBW3iYgbXoP2vF8eV8b%2FMB0wGG6cXCu4ubhZk8EGiX22uLwgY5ecE23BgKuLs2Dpt2cARTRfMfE4RBEzxZO3kFILi3clTVQ8huvcrsp2bE8JKg%2Bf11Pe5cSwYs83LZDh2R%2Bxg%2FMVHsvFB9DmxdN6LBGPRVO2SUgwWgd6xTV1nqqbP36JKoeEX1yQnF0yykwIsUcDP097%2F6gh5dwZ5eP9qyFWUAnS78wohY7w1LOUS01b0xojh9ubChSV1TXgq0NBKwb95XwvcagwW7E5OIuJJZopFZb4jxGvTDzyDwBZ7qUWTMSb3t5ATFmcasji2brlDSQAWY%2FCJZGcmgEFGAEkTeL4drmv%2BfALhMBjzibPbZ169nGdX%2BM%2BCDE7yJ5S3E%2Bwbfce%2Br0zZHHE9zMlKjWfau0Xnqd6pKARslci4GGSWNeqWxjADuYu21DK%2FCpZ8%2BWhxl%2FKurkVG1JMID8ncQGOqUBBFtxvXj7JkJYyb7GMc%2BOs8L%2F3ogog6bv7MVBCq%2F2J6CDH2PVmJuonRDSoh8Rfopymy44JL8MZOCsC4oUhRHS9K2Lq9d5bTIrqoRIk3fCbuyuo%2Fl4%2Ffxm6uhqFkMSP8E%2FTeRZfXsIhmhm6D4Hf%2FfMPIKo5KyHdGVh3g70itA6GASjNZePlnz34BoeKsYI51jz0Bs5WDK1Ff6UaySQtqB8pTz1yMG2&X-Amz-Signature=15eaf7544766237ac5a816243fcad20c9236e06c7b252ec7a764c98ab70e40ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XXSKWQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQChIDXjiGxsOL5P8FZjPd9Rw3oeT8TajuVQeC8w39zvlQIgbRw%2FoH3PmkKw9YHwN6kerjJGiOgzU9YSlD6ZxxD7yZQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiOMdUSB7Hlda%2FNJircAxLqfD649CaSb%2BMU%2BUrzGElFNo8hyAeQG4%2FTU%2B%2BTSXq3g18PWRQV%2Fpmyedtu1mA1IaSCKWchgwcGBMH%2FYXG98ZBHGkA73bZO2RgitntLU0gCtjDBClI%2BycAMp3MpxbLg9yH8ZHoflleoKE9sCOk0QgaZgKrW%2BAvJOfVK%2BVkh5n35APy3XqBW3iYgbXoP2vF8eV8b%2FMB0wGG6cXCu4ubhZk8EGiX22uLwgY5ecE23BgKuLs2Dpt2cARTRfMfE4RBEzxZO3kFILi3clTVQ8huvcrsp2bE8JKg%2Bf11Pe5cSwYs83LZDh2R%2Bxg%2FMVHsvFB9DmxdN6LBGPRVO2SUgwWgd6xTV1nqqbP36JKoeEX1yQnF0yykwIsUcDP097%2F6gh5dwZ5eP9qyFWUAnS78wohY7w1LOUS01b0xojh9ubChSV1TXgq0NBKwb95XwvcagwW7E5OIuJJZopFZb4jxGvTDzyDwBZ7qUWTMSb3t5ATFmcasji2brlDSQAWY%2FCJZGcmgEFGAEkTeL4drmv%2BfALhMBjzibPbZ169nGdX%2BM%2BCDE7yJ5S3E%2Bwbfce%2Br0zZHHE9zMlKjWfau0Xnqd6pKARslci4GGSWNeqWxjADuYu21DK%2FCpZ8%2BWhxl%2FKurkVG1JMID8ncQGOqUBBFtxvXj7JkJYyb7GMc%2BOs8L%2F3ogog6bv7MVBCq%2F2J6CDH2PVmJuonRDSoh8Rfopymy44JL8MZOCsC4oUhRHS9K2Lq9d5bTIrqoRIk3fCbuyuo%2Fl4%2Ffxm6uhqFkMSP8E%2FTeRZfXsIhmhm6D4Hf%2FfMPIKo5KyHdGVh3g70itA6GASjNZePlnz34BoeKsYI51jz0Bs5WDK1Ff6UaySQtqB8pTz1yMG2&X-Amz-Signature=34c9a346357098c006751a5c59a348412c59c68ca2107826e2732378ea8b1fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
