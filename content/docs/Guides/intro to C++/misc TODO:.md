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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZLCGB6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSoZ7AdV8%2BkNz8fAuq1ahlZrcFnG9pOMeBUL%2BbUhBocAiA2JyYhDVqN7OYkswO6B%2FVOMWMXoSaUycYkxH6YDpzsSir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM8ld0%2FBRri%2BPijrNYKtwDu5hvkpuH90vlenEmvWfcOmkcmyeASwWmQ4%2BumtRHH8m9oPzU9fu3xyT7eKTRHM0JCdLiMj25tc%2FGzZpRBePNunwVdEE%2FSumXiWjvjEpeSAP72%2Fn%2B5MCGpop3F9JjhC4mKHyFHWY5ayMR3xDZl7eLyjFPALCXtQbS3Dkm0KX4A4QsyySe8nRmkjAiZWtVRekl9ZRJiYRRhwdhtkTYIC7H1Xb5CzRfz5z%2FNhHEqaCoMAgauMl12mTE%2BmJWIF2Fe4%2B%2FxzMTKEHDDdC06qX3csMWZayle6Kz2tAnyPkdUXkxGxXm3nObXGbF9QU7WvXC02gVceUs0kFwqs1QzouPYy%2BOhbRDHvgEKBgF9WEh4Js4TTnb4NDuHgGr7HCn7U2jIVaPPSvVQtsyiYvjWOWoqrqBH5nlXaYDQUT9waN6yUTjJ%2F9mTzwcDQsDetxGLD441dsdRNsMOvwtKcp%2BrQz8q77BbnYMV6opuL53E%2BtmS1E%2F6UME1RGG9UPFldoBDWVxTME4RIZ0uhfb%2F5BQXKUEbEo13MllYimopOnjA5Aqvle1IJ6sJWSKoGxmkTtmuQvRw5FaPLaVPcKWCWTsOTHdJZzfpicndCg8g2fQDkETTJnDe%2FGrrv7E6RXavt26Logwzr2GwAY6pgFx%2BXyCl7yVky9E9Ae04hbTj4P4tRgMSYSYxFY6WnTLr6pUZLc4IbwEiYH4e3huCJjaBvJYi5JtSUZl5rU7DpaD2F1d8FS%2FnzhZYaFqnALeFSyyR50nFfvqoTayw%2F8LsXt2zT1ZblhElvqkc5C7c%2BQkyzMzupNBEXSa6WK2aITGfm64R3hu5Q1Cv203RA8YEjDJYQj6Q3eN95dGSv4yTxEDPpdYB8NY&X-Amz-Signature=03535e43357e4c416794698e880f114c7f103dcb4821986366ea541ee1a5c114&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZLCGB6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSoZ7AdV8%2BkNz8fAuq1ahlZrcFnG9pOMeBUL%2BbUhBocAiA2JyYhDVqN7OYkswO6B%2FVOMWMXoSaUycYkxH6YDpzsSir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM8ld0%2FBRri%2BPijrNYKtwDu5hvkpuH90vlenEmvWfcOmkcmyeASwWmQ4%2BumtRHH8m9oPzU9fu3xyT7eKTRHM0JCdLiMj25tc%2FGzZpRBePNunwVdEE%2FSumXiWjvjEpeSAP72%2Fn%2B5MCGpop3F9JjhC4mKHyFHWY5ayMR3xDZl7eLyjFPALCXtQbS3Dkm0KX4A4QsyySe8nRmkjAiZWtVRekl9ZRJiYRRhwdhtkTYIC7H1Xb5CzRfz5z%2FNhHEqaCoMAgauMl12mTE%2BmJWIF2Fe4%2B%2FxzMTKEHDDdC06qX3csMWZayle6Kz2tAnyPkdUXkxGxXm3nObXGbF9QU7WvXC02gVceUs0kFwqs1QzouPYy%2BOhbRDHvgEKBgF9WEh4Js4TTnb4NDuHgGr7HCn7U2jIVaPPSvVQtsyiYvjWOWoqrqBH5nlXaYDQUT9waN6yUTjJ%2F9mTzwcDQsDetxGLD441dsdRNsMOvwtKcp%2BrQz8q77BbnYMV6opuL53E%2BtmS1E%2F6UME1RGG9UPFldoBDWVxTME4RIZ0uhfb%2F5BQXKUEbEo13MllYimopOnjA5Aqvle1IJ6sJWSKoGxmkTtmuQvRw5FaPLaVPcKWCWTsOTHdJZzfpicndCg8g2fQDkETTJnDe%2FGrrv7E6RXavt26Logwzr2GwAY6pgFx%2BXyCl7yVky9E9Ae04hbTj4P4tRgMSYSYxFY6WnTLr6pUZLc4IbwEiYH4e3huCJjaBvJYi5JtSUZl5rU7DpaD2F1d8FS%2FnzhZYaFqnALeFSyyR50nFfvqoTayw%2F8LsXt2zT1ZblhElvqkc5C7c%2BQkyzMzupNBEXSa6WK2aITGfm64R3hu5Q1Cv203RA8YEjDJYQj6Q3eN95dGSv4yTxEDPpdYB8NY&X-Amz-Signature=04430503743ac58de2bace9537ec29d2b82f32c34b313a9f2772665d40d52363&X-Amz-SignedHeaders=host&x-id=GetObject)

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
