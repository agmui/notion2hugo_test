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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS543FXD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEEXrqyIFFWkBAmxU5yPR%2FaBfn2IxvG%2Bcp6Jvriygvh7AiAJMge0mP4GVSP7%2F7q474Jmwz2YTDv3AX5VNMkpdqvH%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0JXusYkajSzVcmpKtwDP5mIg7Y5zfubQeu40hDxk06pRhH8Ulwj5T%2FYMfh3LHM6d1Xvo8cIN5OEDG6F1X8JB4J74x2xpiaOcyYYSYw7%2F%2F6BxBjY4HzqNdP8tVDkg7qk25I1%2Fctf7w1o3zvo5%2BH6z9Ow6%2FsXjG3Ipv%2BklgyFQc%2B7g6bW9XU88xYDG92p5kA5I6fFIZND5swgtOI0vZmU%2FqMn6ZVczPDBTsVwV7VAzMs87gRPt%2BRkRTVK9n8WlfV6PCFTyJuLvZg20YEHSMiODo8LiDvZaTFFMbT7bbxRc8Zn3YFWGyVN0FM0pMogbuziJMGadird0reS4PGsqBzELVpRbB%2BX5oFixuPDuIvazAQNu3QvL21mN9bQNMJ3CSOKMt%2FUFpylKuH%2FG7pm3XKU6kQNViFi413UYcTOaozVnllK1I%2Bu5pMrrGUVkncgOY5ziD%2FpXRh63qjnWsavC5aXjmrB6n52Qq1i6VScZmwpjTY64zUi9zVLMm2fyG9DGXHm%2F%2Bw2XnQofS2OqlkJDsjJ%2F8f99x6Qtm5doyhnAKopandXxYTxuyag%2FJ5vjOk%2Bjux2FF01HKLFwPuyIhxxFPojzYUUEbIm7Up7xMdVkHCuFvEjXN2z8jZjjpW%2BVMmdyhQuXBSS5aIFYG7QwNUw58G%2FwQY6pgH1Gwh9s0pBpUeqb0qisZs5IZutzpWm%2F8BBsIcMfbdQnBIzZnLPG6H5tmB3NxZu17NC8FR2reiWtnzjTbDiZloU%2BnZxBYGKqFPcdW2nPLv%2BZTwEfColDUDTMKmNHkr2aDFjsmODVf7y4%2FrvfuXCgUv2H1aqJho6dRM%2BqY62LrHpjj%2F6J%2BL8I6ZL%2FX2L6ovbhTWX0dQLGpvkDrlDu650Q1R4KmwGsNuD&X-Amz-Signature=f2da3923e9d707c4a7b14201db8e2cecb9c69a62dac5c8c04f4755e086fb9335&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS543FXD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEEXrqyIFFWkBAmxU5yPR%2FaBfn2IxvG%2Bcp6Jvriygvh7AiAJMge0mP4GVSP7%2F7q474Jmwz2YTDv3AX5VNMkpdqvH%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0JXusYkajSzVcmpKtwDP5mIg7Y5zfubQeu40hDxk06pRhH8Ulwj5T%2FYMfh3LHM6d1Xvo8cIN5OEDG6F1X8JB4J74x2xpiaOcyYYSYw7%2F%2F6BxBjY4HzqNdP8tVDkg7qk25I1%2Fctf7w1o3zvo5%2BH6z9Ow6%2FsXjG3Ipv%2BklgyFQc%2B7g6bW9XU88xYDG92p5kA5I6fFIZND5swgtOI0vZmU%2FqMn6ZVczPDBTsVwV7VAzMs87gRPt%2BRkRTVK9n8WlfV6PCFTyJuLvZg20YEHSMiODo8LiDvZaTFFMbT7bbxRc8Zn3YFWGyVN0FM0pMogbuziJMGadird0reS4PGsqBzELVpRbB%2BX5oFixuPDuIvazAQNu3QvL21mN9bQNMJ3CSOKMt%2FUFpylKuH%2FG7pm3XKU6kQNViFi413UYcTOaozVnllK1I%2Bu5pMrrGUVkncgOY5ziD%2FpXRh63qjnWsavC5aXjmrB6n52Qq1i6VScZmwpjTY64zUi9zVLMm2fyG9DGXHm%2F%2Bw2XnQofS2OqlkJDsjJ%2F8f99x6Qtm5doyhnAKopandXxYTxuyag%2FJ5vjOk%2Bjux2FF01HKLFwPuyIhxxFPojzYUUEbIm7Up7xMdVkHCuFvEjXN2z8jZjjpW%2BVMmdyhQuXBSS5aIFYG7QwNUw58G%2FwQY6pgH1Gwh9s0pBpUeqb0qisZs5IZutzpWm%2F8BBsIcMfbdQnBIzZnLPG6H5tmB3NxZu17NC8FR2reiWtnzjTbDiZloU%2BnZxBYGKqFPcdW2nPLv%2BZTwEfColDUDTMKmNHkr2aDFjsmODVf7y4%2FrvfuXCgUv2H1aqJho6dRM%2BqY62LrHpjj%2F6J%2BL8I6ZL%2FX2L6ovbhTWX0dQLGpvkDrlDu650Q1R4KmwGsNuD&X-Amz-Signature=55c2e199b4824d5acd5453624b5bdcbc57b7714e037dbedd5be66f4124fafae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
