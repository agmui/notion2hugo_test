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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO5ACRY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgyv%2BwVji%2FoOVHZPTCXpNhn1gR0sx2IK7DmDhc9nxIyAiA5ugYQBQtFszFheOaepN4idfUTPxZ9uaBhjIljcd8F4iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw7dIBr1zbzhKLqSDKtwDZYI%2BO5TmpmdV4bIs6jA%2BC8W70NN57fBKjnP0REjomva5DWmBwCBabizPTxbx%2B6py5pdQtqHA%2FersECM2qVb7eDRP3aHT6thDxFNWVCot9EHlJP5janylkThlDHpcMP6HEwnFqQUhqk0Y%2Fq1spDPHbOJauVeSUaq9eta6%2Fi6FyRIZdWWB3bzp%2FGd%2FHDQASVLpPt1mI8dKELx%2BEc0Y56BObvme8t%2FBws%2FcheIAsxnzUR8HWCRWDNzssbTSeqvgbSaDVeG%2FqeAJICpNg5K%2BND6nyLmLwl0vGzqgtAx7NYc05jDsdK9InuVCPYGb4neEw9xPW2K94ds5cWASSHvMf6DCB8GQrEAIOfKpAyX1GUhWVOWyX2vv4WE6htWpZOOTwKoqHoCXPGXKzO9fFlRoSJqqBn%2FOd%2BsDX%2B5WRo2SN8yG%2FuC8lVojY1kYq%2Bazp2YpU1tg57I6f4Uv1ogc2Dpff%2Bq8fc6p9W8zWO%2BHWYxKot%2F%2BPmlo3XuLxw10%2FB%2FL2FRy7PyUMcONDJDukxNKdBcXYF24iMpStLdXCNKe5LOuKWvKGVAKBepcH5mPBwwt3h3nXb3opntz2hMzZFsurRqfQ9%2Fb917eYjgz4ocNR9j6P5Fy9rBVhJvjBSysgT7y0s4w082LwAY6pgGdZVQsr8prsCkCQhC8emEwhV4MME3O7o1H0sejmClgwd4MbarYxcGS%2BRBY5iYyT6lhQqgx3Grv6wJA0KbQKkyDHxFRhxPaThie%2FYTjGnfuZQ6PD87TLwJKrL3c2rVNnwjmc9nBAnOsuZ3p55k25i5LnPW%2FoWJo83VTBjWd0gGSGx5ibL018TRfGtAH3xDNcPQKXGHanpC6nSk3OEe5A12x%2BlDAp%2BEW&X-Amz-Signature=78b252fd02ab525aa2032348e7faecf2083c13ced88fed10c205b38d820a3d28&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO5ACRY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgyv%2BwVji%2FoOVHZPTCXpNhn1gR0sx2IK7DmDhc9nxIyAiA5ugYQBQtFszFheOaepN4idfUTPxZ9uaBhjIljcd8F4iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw7dIBr1zbzhKLqSDKtwDZYI%2BO5TmpmdV4bIs6jA%2BC8W70NN57fBKjnP0REjomva5DWmBwCBabizPTxbx%2B6py5pdQtqHA%2FersECM2qVb7eDRP3aHT6thDxFNWVCot9EHlJP5janylkThlDHpcMP6HEwnFqQUhqk0Y%2Fq1spDPHbOJauVeSUaq9eta6%2Fi6FyRIZdWWB3bzp%2FGd%2FHDQASVLpPt1mI8dKELx%2BEc0Y56BObvme8t%2FBws%2FcheIAsxnzUR8HWCRWDNzssbTSeqvgbSaDVeG%2FqeAJICpNg5K%2BND6nyLmLwl0vGzqgtAx7NYc05jDsdK9InuVCPYGb4neEw9xPW2K94ds5cWASSHvMf6DCB8GQrEAIOfKpAyX1GUhWVOWyX2vv4WE6htWpZOOTwKoqHoCXPGXKzO9fFlRoSJqqBn%2FOd%2BsDX%2B5WRo2SN8yG%2FuC8lVojY1kYq%2Bazp2YpU1tg57I6f4Uv1ogc2Dpff%2Bq8fc6p9W8zWO%2BHWYxKot%2F%2BPmlo3XuLxw10%2FB%2FL2FRy7PyUMcONDJDukxNKdBcXYF24iMpStLdXCNKe5LOuKWvKGVAKBepcH5mPBwwt3h3nXb3opntz2hMzZFsurRqfQ9%2Fb917eYjgz4ocNR9j6P5Fy9rBVhJvjBSysgT7y0s4w082LwAY6pgGdZVQsr8prsCkCQhC8emEwhV4MME3O7o1H0sejmClgwd4MbarYxcGS%2BRBY5iYyT6lhQqgx3Grv6wJA0KbQKkyDHxFRhxPaThie%2FYTjGnfuZQ6PD87TLwJKrL3c2rVNnwjmc9nBAnOsuZ3p55k25i5LnPW%2FoWJo83VTBjWd0gGSGx5ibL018TRfGtAH3xDNcPQKXGHanpC6nSk3OEe5A12x%2BlDAp%2BEW&X-Amz-Signature=a1f69667263e534686be0fae3e90f037527d054ccca85dc40080f8c39a9bf924&X-Amz-SignedHeaders=host&x-id=GetObject)

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
