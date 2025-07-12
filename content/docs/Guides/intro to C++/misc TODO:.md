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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOT26Y75%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKaILeD6p5n%2BEOg4PZz0uXvw66BgWzimUQCX14ZUCmGAiBdl8vSZq1VU1Zty6ftpxF%2FRXjTG0%2FUdw5I5Wwu2vHwEiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrYHMyvBxB%2B9E%2FPGKtwDU%2FihCZ5sybd0pSCa77C5b40YdxhDGedO07k2CC3PXG9cBGQt%2F4i7ft%2FNiUGLlb%2FLKntBXvtTwnCiC3heeiWyY3w1TH1eB8uOM%2FeGJbQnssyMVQT5ZWs909kh2v5FnscQEtAARY4qYhm%2FJxwhs9rEvoxjY9lImJEErcxbPen6Pq8i%2FaKcHGI2N5Iq6S%2BST%2FTAnK5%2FMrKNjikiXEAIh4mvlVi74zP3jzAU80btxtQ95gv3HfSFTyvGHKKhZchQLWftQmZpMllcZc7uDbkkHpPG%2FPrgJV3%2FuZVIDmGL29IakeH%2FGG%2F%2FBmTdAhLvue4zZu%2BaAw5E%2FK7UQbCAqemeau%2F6q7P4rdG8JSGevhSxOHJ2IbMxjtO5boyv8BgUIyOfnYMWWQBy5vnfQIOUs%2FOsnPV%2Fzga7opgEQNHq8GYcwpToREwDkgS5nzGnOKCAH7%2FsVkbAlZn%2BUnHdm8M38cvdpzgSQdrPwjL6NArgRgs1sDBAyFZfC8T%2B279guj7E0d%2FB%2FX6NGhbz0cB2GbB5PPMMSgPqmKS0xkWf%2BvruO7Nxhs%2Ba1YSXZf%2FXXUe%2BYkQrS4SzSqjczXmjla9zifC67albVb2ZmlvrVxoFVxLQ45uoIvPQppP84yG5DhrQZPOwNF4w84TLwwY6pgHrTGn9WpxwyqdMwHE3FXUHTX9elcFfG28HyZBiYvktI3Mbmo9lLBNfNXXe931KGBU%2F7MyM%2FnW5tRFZkeLGILAzXVDv58TpJa%2Fms7QOCzGZLyMPfdz4NVqx8nKe5rRtosdayzGOtVNJyXf2KGbx8MhI%2FlWZw5Dn0rYiW0Y69AH57DJn0G2e3MHTqtV1ABmlxbg4lYdyqhKVOFbZOK1msEZCaEH3CW5U&X-Amz-Signature=c9df7f9bc09df1403bdf525ac14cb9a416b8781196088f50c64620cc1e6b3876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOT26Y75%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKaILeD6p5n%2BEOg4PZz0uXvw66BgWzimUQCX14ZUCmGAiBdl8vSZq1VU1Zty6ftpxF%2FRXjTG0%2FUdw5I5Wwu2vHwEiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrYHMyvBxB%2B9E%2FPGKtwDU%2FihCZ5sybd0pSCa77C5b40YdxhDGedO07k2CC3PXG9cBGQt%2F4i7ft%2FNiUGLlb%2FLKntBXvtTwnCiC3heeiWyY3w1TH1eB8uOM%2FeGJbQnssyMVQT5ZWs909kh2v5FnscQEtAARY4qYhm%2FJxwhs9rEvoxjY9lImJEErcxbPen6Pq8i%2FaKcHGI2N5Iq6S%2BST%2FTAnK5%2FMrKNjikiXEAIh4mvlVi74zP3jzAU80btxtQ95gv3HfSFTyvGHKKhZchQLWftQmZpMllcZc7uDbkkHpPG%2FPrgJV3%2FuZVIDmGL29IakeH%2FGG%2F%2FBmTdAhLvue4zZu%2BaAw5E%2FK7UQbCAqemeau%2F6q7P4rdG8JSGevhSxOHJ2IbMxjtO5boyv8BgUIyOfnYMWWQBy5vnfQIOUs%2FOsnPV%2Fzga7opgEQNHq8GYcwpToREwDkgS5nzGnOKCAH7%2FsVkbAlZn%2BUnHdm8M38cvdpzgSQdrPwjL6NArgRgs1sDBAyFZfC8T%2B279guj7E0d%2FB%2FX6NGhbz0cB2GbB5PPMMSgPqmKS0xkWf%2BvruO7Nxhs%2Ba1YSXZf%2FXXUe%2BYkQrS4SzSqjczXmjla9zifC67albVb2ZmlvrVxoFVxLQ45uoIvPQppP84yG5DhrQZPOwNF4w84TLwwY6pgHrTGn9WpxwyqdMwHE3FXUHTX9elcFfG28HyZBiYvktI3Mbmo9lLBNfNXXe931KGBU%2F7MyM%2FnW5tRFZkeLGILAzXVDv58TpJa%2Fms7QOCzGZLyMPfdz4NVqx8nKe5rRtosdayzGOtVNJyXf2KGbx8MhI%2FlWZw5Dn0rYiW0Y69AH57DJn0G2e3MHTqtV1ABmlxbg4lYdyqhKVOFbZOK1msEZCaEH3CW5U&X-Amz-Signature=300c2fd9211ca3019800d2ff4e7e847ba3290e58a78a0acdb57890dadc0b72c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
