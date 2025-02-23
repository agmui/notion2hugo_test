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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF6YDNG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC0Ru9K2yJISbItvrVXypV11lo9vUJSj%2BxYH%2B0ToCMRAiEA0u03LU1vPsVIvcdMu51TyH%2BfiBk3EfneHJiXtir6Db0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BpjLd9STzG787e%2FSrcA0NwpRdEA1vaL9t%2BrfXFor%2Br8rh9NGLawFXJg2fVCAHbiNLOETpJh6ZiJ9t%2BcHJG1OLiVXjsNYAwyKYZ4GgeH1Cwq63dXws6C1f%2BlQCRTMq5rNxHgk%2B5ON7ik1YGd7CDBnCQazKyS0Fl63YM7pOYsKvA86%2Bdbv1cBLiw8jh%2Bke53E8IyMvGGcB0b6nDtzar2up4vQioRLh4KYhAK4hW6%2FWIoBNnPsesadpxskNU3tQY%2FR8hqur5Dpb30FATzOCnrvs%2Br8shSXKbPRk9NaITAoJNV4Yp0%2F%2FpBdoOXxMD9zseyPUJqAOxbFqIK%2FtzBnxF0PaleOVW6rXFRpcp5b04zxf8bOl6Fvj0Fxa86UbDGVH2hXpXNt0xel8WARPoVaoTvvDPwPsZBlHwBNs6eNxP2FdxxQd132x3I%2BUcADz%2FAernyoT%2BdtqXrJiqqZmRb1Z9SNJidKjvl7k2ImXiFEXyXJ1iLHKY%2FRBY5AsKyvdPWuxK12w8ObpyipA0Ysqq5ek7OTy%2BXTC9wYRXbDE3rlvhTsykDei5upOl%2BZaR%2BNF%2BFPRPHS3QChkssR95BKUGC3O4ZjD%2Fejgn2F9AOppPVkCgDojJuYHw31gEqLqLsRdQQHinyW3%2Fd48APoX3ElLc0MPLd6r0GOqUBmld9muPEw1EVnLtpkLdvX%2FTCFi7ityQeKvFFTqQnZlIndFoYTW7bsYBAxB52q%2BDBTctyakVqv7W0omYxE5E4AgU%2FFkFT2Wbc7Zvsy%2FFL08wO7CsgntP43YM4ASsUGW4BF5z1P1LKtsS7AFGoOA279fnrbqknxB7dFtjvcphVjmPj1dpMJYm1QuwL6ohSTe8z1rJ9reEKKGmHe0MBAzmY%2B06U9BYK&X-Amz-Signature=fd0d73d90ddd8eab3b2d17c8e7f0afbdb6069f750ddcf4d45775c3c65c1b0b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF6YDNG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC0Ru9K2yJISbItvrVXypV11lo9vUJSj%2BxYH%2B0ToCMRAiEA0u03LU1vPsVIvcdMu51TyH%2BfiBk3EfneHJiXtir6Db0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BpjLd9STzG787e%2FSrcA0NwpRdEA1vaL9t%2BrfXFor%2Br8rh9NGLawFXJg2fVCAHbiNLOETpJh6ZiJ9t%2BcHJG1OLiVXjsNYAwyKYZ4GgeH1Cwq63dXws6C1f%2BlQCRTMq5rNxHgk%2B5ON7ik1YGd7CDBnCQazKyS0Fl63YM7pOYsKvA86%2Bdbv1cBLiw8jh%2Bke53E8IyMvGGcB0b6nDtzar2up4vQioRLh4KYhAK4hW6%2FWIoBNnPsesadpxskNU3tQY%2FR8hqur5Dpb30FATzOCnrvs%2Br8shSXKbPRk9NaITAoJNV4Yp0%2F%2FpBdoOXxMD9zseyPUJqAOxbFqIK%2FtzBnxF0PaleOVW6rXFRpcp5b04zxf8bOl6Fvj0Fxa86UbDGVH2hXpXNt0xel8WARPoVaoTvvDPwPsZBlHwBNs6eNxP2FdxxQd132x3I%2BUcADz%2FAernyoT%2BdtqXrJiqqZmRb1Z9SNJidKjvl7k2ImXiFEXyXJ1iLHKY%2FRBY5AsKyvdPWuxK12w8ObpyipA0Ysqq5ek7OTy%2BXTC9wYRXbDE3rlvhTsykDei5upOl%2BZaR%2BNF%2BFPRPHS3QChkssR95BKUGC3O4ZjD%2Fejgn2F9AOppPVkCgDojJuYHw31gEqLqLsRdQQHinyW3%2Fd48APoX3ElLc0MPLd6r0GOqUBmld9muPEw1EVnLtpkLdvX%2FTCFi7ityQeKvFFTqQnZlIndFoYTW7bsYBAxB52q%2BDBTctyakVqv7W0omYxE5E4AgU%2FFkFT2Wbc7Zvsy%2FFL08wO7CsgntP43YM4ASsUGW4BF5z1P1LKtsS7AFGoOA279fnrbqknxB7dFtjvcphVjmPj1dpMJYm1QuwL6ohSTe8z1rJ9reEKKGmHe0MBAzmY%2B06U9BYK&X-Amz-Signature=7460b4a55e6d930a60e9f76c91a691757435d07d630d779724e2a93281791f46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
