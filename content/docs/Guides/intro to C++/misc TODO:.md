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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHFZEXJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE7Gl7Zl0mDeQ6CbUGNBSQaPJbOozuWI1p%2Fn0Gzucg1tAiBhgMzu0Ez7QeCIG9ZgyYBiYcUlaxRFewq3Ne41Fl4qxiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1qa11rEjBYzu7AyRKtwDxLFhFkrxPz4PAyg6AKAn4AWgGVYW4HM27%2Fs9aMKS9jKPejmM%2B1uFCWRyflWqg6zEzmTYG4gUsgQpHTnCluXb6Ujh0pY4UvcUsvDSwyvDMG0%2FgwkHuuaN8NzmrX3LrjHEmBJVXX9P0gTb%2FXhGj0iflPXBBLN9CY%2B8IB95Bx4d6FCjwnHORWKG7Pg%2FmeULEZI9gXV4GZfcdIOqGPhKxdeVTQDCjkJLq7nWXDId7hUyF503zNlCV%2BoZLMncM%2BjML1o1bvDK369xIpo5qm%2FSmqfJKBmSE2VfNtuDXXY%2FZnz80ZJM6cNRRsRKpLqEfgH5mdXA%2FCUmod7lf5xWax82oCIKiOkC23LuBOWlFmty%2FvQyIOfqCrFwvmISqcjv49KGj6QrQhEOBa3zLPwsVP6FgffTG3FeTD5bEA5k0Q5GHVEJZBSMDxuHU7KgrGuZiDJqqklb0vvqSt3kCZLEMkdmoYoIbCk3ES9ny1NK%2FfKI1sv%2FMYPatwS9Sq3TryZdiexNk%2BwNYz2EPaT5mAVm1AVgIShd1t6XN1uDbLDPBLwHW9r4xjgQ%2Bb0%2FJyI9Eigd5sXAOZyKZnomtDDlufyRXfDkKA1MtuTExgRp%2BotBsedYbs32%2BV0RyyGCjoHIEzMAM84wzaPXvwY6pgHlo%2FW8pfDNoYjV0tY6cuKlREWiCmZ7tHpzDSPeHfplHmCKgTa6zgSDnGSxQ5b5%2BccDLy1TqZPDRFrQsdHMOFpRCfjJONKEoGycdG%2B%2FEOdLUzuD3%2B4%2F4jIYd9L4KdkHL%2BLcI3U4dJpw5%2FgBhKMx82V0wze2b2lxLz1Gatk%2FTOb2c%2FnmbY6NP4FsOHz97Vc2oxe%2BXiW%2FdkIPDLR%2FmfOzWCGyx4kjchTv&X-Amz-Signature=03bbd63adfd377784630e5ab345268834bb6bdc620e4d73a3a1f27c51ecda3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHFZEXJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE7Gl7Zl0mDeQ6CbUGNBSQaPJbOozuWI1p%2Fn0Gzucg1tAiBhgMzu0Ez7QeCIG9ZgyYBiYcUlaxRFewq3Ne41Fl4qxiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1qa11rEjBYzu7AyRKtwDxLFhFkrxPz4PAyg6AKAn4AWgGVYW4HM27%2Fs9aMKS9jKPejmM%2B1uFCWRyflWqg6zEzmTYG4gUsgQpHTnCluXb6Ujh0pY4UvcUsvDSwyvDMG0%2FgwkHuuaN8NzmrX3LrjHEmBJVXX9P0gTb%2FXhGj0iflPXBBLN9CY%2B8IB95Bx4d6FCjwnHORWKG7Pg%2FmeULEZI9gXV4GZfcdIOqGPhKxdeVTQDCjkJLq7nWXDId7hUyF503zNlCV%2BoZLMncM%2BjML1o1bvDK369xIpo5qm%2FSmqfJKBmSE2VfNtuDXXY%2FZnz80ZJM6cNRRsRKpLqEfgH5mdXA%2FCUmod7lf5xWax82oCIKiOkC23LuBOWlFmty%2FvQyIOfqCrFwvmISqcjv49KGj6QrQhEOBa3zLPwsVP6FgffTG3FeTD5bEA5k0Q5GHVEJZBSMDxuHU7KgrGuZiDJqqklb0vvqSt3kCZLEMkdmoYoIbCk3ES9ny1NK%2FfKI1sv%2FMYPatwS9Sq3TryZdiexNk%2BwNYz2EPaT5mAVm1AVgIShd1t6XN1uDbLDPBLwHW9r4xjgQ%2Bb0%2FJyI9Eigd5sXAOZyKZnomtDDlufyRXfDkKA1MtuTExgRp%2BotBsedYbs32%2BV0RyyGCjoHIEzMAM84wzaPXvwY6pgHlo%2FW8pfDNoYjV0tY6cuKlREWiCmZ7tHpzDSPeHfplHmCKgTa6zgSDnGSxQ5b5%2BccDLy1TqZPDRFrQsdHMOFpRCfjJONKEoGycdG%2B%2FEOdLUzuD3%2B4%2F4jIYd9L4KdkHL%2BLcI3U4dJpw5%2FgBhKMx82V0wze2b2lxLz1Gatk%2FTOb2c%2FnmbY6NP4FsOHz97Vc2oxe%2BXiW%2FdkIPDLR%2FmfOzWCGyx4kjchTv&X-Amz-Signature=519d73971ff3372633dd659f431712ca21f0ebe72c9e4df7d7df962db62936ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
