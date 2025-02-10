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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAD2BRN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGf1AIZE4FAiv2uhK%2FNSN%2BRHVBrNkpO4gmxQBjN8zHgIhAK072Rr%2FLHseSJPX2IZfZL%2FpzSmWR8p8LU52CFtY0Ns1KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYFjZQET8G%2BlLb8Awq3APcV0S0vxPvfAEVSgjWKowV60k%2FmD3I6IMR1fQ5goSSRbcHtgwKmujGGM3zmWeQPLYX7ko2a4sChRs2QoCSyhZCcptc1USugBIZDOUysnwr0HX4s6UgBenwBpM1ecd83Z7CH6lLA6vi2CxjwpE1wJX2IXp3LUMPgBP7s3IM8%2BFPeFx89EPc6KeL2DPIP1BCXWbf5%2B0BfkM%2BsRXGC65fWIEbGPiqe2sTu5yBRsrkJFspLyM9eglsFnIK2yo%2BZGSvJosVQV%2FvqOhGuyuIEbAkOsOGPNJkVvJg2fi2DjD%2FgndNM9sBkOsDfxM8PFeA8D%2FBmJbGoBcOKyB5HdrvzLLBlV21OzNF59QYxYjMDcALwm96iZiL2zOsmTzecte%2B%2BORvrx7U5KFjGSY%2BlOok%2BxSjrT1ppsLKyJsAWMPkTtCbnBUv%2B2yIa9oCVYOOOQlACdYH9DyU0nOYgPE6sj%2B5R528rKCJSzjPQxQPCieIs8i5x%2B3C6nT5BDCkU%2BLoZNFvVf0%2BIm6A2tTaCcmT0NpA8YBheiKLvhFXTPAxY%2Ft8OKNVf2hpHdbtd0gXUyAitfD5yVwqJ4ZpAbyV%2FSCp%2F1fHsisjgoG19vuw14DPvnT0zNr54xXnGHoQVvqT2vgdkqUkFjCCzam9BjqkAcHWt3ehmPVsb8yn201YgCs1h8IfvipR%2F%2BLZ6LUGY1aMqAqOjxhUSntxKkaoCAgvfLPIfgmEXyWi0fOuV87urnQQEo2gfnjhdx%2BZD8dswKm%2BUCtETYZIuBgN%2BKQqiMrqDDlkE76No92itp6YShA9lkyp45B2LOhYzf1jm4eooyd2oEUhK4Oc4hH4Cpq2DcAbEhafyRJbJCtfIoHMSf3JPBHtudxU&X-Amz-Signature=d5d85f46565434cdc2a74966ec2940485c4a99ea2df0561bd81f0f7f2e3e7a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAD2BRN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGf1AIZE4FAiv2uhK%2FNSN%2BRHVBrNkpO4gmxQBjN8zHgIhAK072Rr%2FLHseSJPX2IZfZL%2FpzSmWR8p8LU52CFtY0Ns1KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYFjZQET8G%2BlLb8Awq3APcV0S0vxPvfAEVSgjWKowV60k%2FmD3I6IMR1fQ5goSSRbcHtgwKmujGGM3zmWeQPLYX7ko2a4sChRs2QoCSyhZCcptc1USugBIZDOUysnwr0HX4s6UgBenwBpM1ecd83Z7CH6lLA6vi2CxjwpE1wJX2IXp3LUMPgBP7s3IM8%2BFPeFx89EPc6KeL2DPIP1BCXWbf5%2B0BfkM%2BsRXGC65fWIEbGPiqe2sTu5yBRsrkJFspLyM9eglsFnIK2yo%2BZGSvJosVQV%2FvqOhGuyuIEbAkOsOGPNJkVvJg2fi2DjD%2FgndNM9sBkOsDfxM8PFeA8D%2FBmJbGoBcOKyB5HdrvzLLBlV21OzNF59QYxYjMDcALwm96iZiL2zOsmTzecte%2B%2BORvrx7U5KFjGSY%2BlOok%2BxSjrT1ppsLKyJsAWMPkTtCbnBUv%2B2yIa9oCVYOOOQlACdYH9DyU0nOYgPE6sj%2B5R528rKCJSzjPQxQPCieIs8i5x%2B3C6nT5BDCkU%2BLoZNFvVf0%2BIm6A2tTaCcmT0NpA8YBheiKLvhFXTPAxY%2Ft8OKNVf2hpHdbtd0gXUyAitfD5yVwqJ4ZpAbyV%2FSCp%2F1fHsisjgoG19vuw14DPvnT0zNr54xXnGHoQVvqT2vgdkqUkFjCCzam9BjqkAcHWt3ehmPVsb8yn201YgCs1h8IfvipR%2F%2BLZ6LUGY1aMqAqOjxhUSntxKkaoCAgvfLPIfgmEXyWi0fOuV87urnQQEo2gfnjhdx%2BZD8dswKm%2BUCtETYZIuBgN%2BKQqiMrqDDlkE76No92itp6YShA9lkyp45B2LOhYzf1jm4eooyd2oEUhK4Oc4hH4Cpq2DcAbEhafyRJbJCtfIoHMSf3JPBHtudxU&X-Amz-Signature=87ae7e206be077aa75b77f1556aa2597e63c57ac9a4a3bf4c681d003e9382e29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
