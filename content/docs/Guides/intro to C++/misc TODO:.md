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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QOZVO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmJxf5IziFw1P8pAaYspxim6ph2E1pnbbQbb4OFv8oWAiBVbuX%2BeFZubXNqzS94mLJMbjAnVKRQIV2%2F%2B34Bfw6nEyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOqScmYzmWAkKjTfPKtwDXpjTbwbpwi6q7CsKRFiCl1bgxJL%2BzlvU9OGsy28seMZzxHVAKo3drwJ%2F4DismOOKgyXih%2BnP8nbCaX%2BpKgSks30J0mEQcKbBEsxrnDIsBMv%2FrRIDLB4YTgAFUA8VG0c22bQh3w2ZqToODY7SNzcqq125e90of6S2c%2FDcgKaMG%2FWRFf3xDzDsIXHoYL6IA5IH6diOSP3PBclij9XSIlGoGov42nR3yX1cWvWWIpSEsJPh5LCzS8%2FncIXpPoqCZtPF%2BzkCFK1nagu4ULlCH6%2BQ4RpGUASRR8kxB6omnH2TE1ksdcEC9CYnUuz%2BustzzKzZJ9AJoo5lefoCaR3s9YTvuP496EmedTC%2BpWjVGicwNPcyNCIHm71owKGzP3NC1LHy4D6G92cTBp%2Fr3TeH8gkG1pxFSQa7dBkv%2Fq39uKBjdeXIQrv5U%2FSRWKsM2P07gbyBKRw82KBv6LN1hGAWFqctO96e4tdPfFELAMB1OLmwVI8GnfkZlg0xqElos6fJDwrr6czThkc%2BKp%2F1b5pqDfmNltQ3BdhwypEoHe1oKMUqQeYSNP5jaClYrW1rGA1fyu1qMhCnAduDbY9kcXpGCBlFq1Je%2BV0u7nIsFwMUxoBQBxmVZtct87k4rCDkr80wlPCnxAY6pgHTk546Hh6KzNmjY4shCIjv77V1uLM9z9tmo88RnMt5%2FzNnziKSLHQON5aDKkSQe58pbQStro8pjxkFqnemLASzkrUDlC1Ozaj2m49k78ngskRg%2FAIQVlyxlxt7k%2BewsiZYDvoyRE72%2BQMC%2F0PIv8jPzSfyTKp1O5I0HPOHZsQh2cKBsm4AAzRHJeuvryBnlrWPVYuZ1DUH4C67Yh5%2F%2BtlKlsJs6Ia5&X-Amz-Signature=4a9d13c5517bc76ab64697154d489467d2eb1065cec466814b812a3b8c7586f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QOZVO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmJxf5IziFw1P8pAaYspxim6ph2E1pnbbQbb4OFv8oWAiBVbuX%2BeFZubXNqzS94mLJMbjAnVKRQIV2%2F%2B34Bfw6nEyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOqScmYzmWAkKjTfPKtwDXpjTbwbpwi6q7CsKRFiCl1bgxJL%2BzlvU9OGsy28seMZzxHVAKo3drwJ%2F4DismOOKgyXih%2BnP8nbCaX%2BpKgSks30J0mEQcKbBEsxrnDIsBMv%2FrRIDLB4YTgAFUA8VG0c22bQh3w2ZqToODY7SNzcqq125e90of6S2c%2FDcgKaMG%2FWRFf3xDzDsIXHoYL6IA5IH6diOSP3PBclij9XSIlGoGov42nR3yX1cWvWWIpSEsJPh5LCzS8%2FncIXpPoqCZtPF%2BzkCFK1nagu4ULlCH6%2BQ4RpGUASRR8kxB6omnH2TE1ksdcEC9CYnUuz%2BustzzKzZJ9AJoo5lefoCaR3s9YTvuP496EmedTC%2BpWjVGicwNPcyNCIHm71owKGzP3NC1LHy4D6G92cTBp%2Fr3TeH8gkG1pxFSQa7dBkv%2Fq39uKBjdeXIQrv5U%2FSRWKsM2P07gbyBKRw82KBv6LN1hGAWFqctO96e4tdPfFELAMB1OLmwVI8GnfkZlg0xqElos6fJDwrr6czThkc%2BKp%2F1b5pqDfmNltQ3BdhwypEoHe1oKMUqQeYSNP5jaClYrW1rGA1fyu1qMhCnAduDbY9kcXpGCBlFq1Je%2BV0u7nIsFwMUxoBQBxmVZtct87k4rCDkr80wlPCnxAY6pgHTk546Hh6KzNmjY4shCIjv77V1uLM9z9tmo88RnMt5%2FzNnziKSLHQON5aDKkSQe58pbQStro8pjxkFqnemLASzkrUDlC1Ozaj2m49k78ngskRg%2FAIQVlyxlxt7k%2BewsiZYDvoyRE72%2BQMC%2F0PIv8jPzSfyTKp1O5I0HPOHZsQh2cKBsm4AAzRHJeuvryBnlrWPVYuZ1DUH4C67Yh5%2F%2BtlKlsJs6Ia5&X-Amz-Signature=7dd2d2bdfefd85304b4274337253161a48d30427286bfd248d6b865923ff81fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
