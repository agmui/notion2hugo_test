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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z677M4LK%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHn1Xu3w%2F89qnLbrCE2sl4aL1D7JHZu0sUJFFUOy8NsOAiEArGg6u2%2BgcAATDHcC%2B%2FijXDoptFwTfPqthjWkv6ptJLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNoT3BZg0kFkNB3FjSrcA9vykIDQ1bECX8eHTNFyWuZi2TwKzKA%2BEhox5gd5k2KGZci15WmEIKp83QdheT%2FbS54fUDRmmvkyfjrJp2g1Vai1DYrl2MWOShifZbopc3d8L3LMnENwmFHoM4e3S1lfHFx3ZdmouU4mT3mzGTe9nq90OmHCxHNRUIMHmoDS2t3NkKE8cwD6nfwurWBPiSp1qbOQKRNKB00JdlsKj4vwp%2Fy%2B3GcJ%2B5Ja%2Bou3YrnB0Oo61u3%2FRdJQA%2FosgWZovg9Z4tnZQP%2BGhCTBT7MP2uTbnzcfcvSXYaSbTykAdrMdDnemRB7vwQO7Fvr8HrNsBK%2FEFo68kT4%2BJ7jb%2BhkvTeC%2FPKG16cdZlzJB%2B1CLiC7ARKDVzM%2FgxXbtRb5%2Bam3CAYB7v4s8ikpHzs7xHuBUms7FxehjXBAJGxbcLgT9gV7ZIEYpCzwn9NRZobiKyfnGm8DezPdHrg8zNu6zWhWRGqmVOICMg1CbVoCYXN%2BNIglKEKrk%2B0X089Ku7se5crCA92yf%2FFcMZvl%2Bvc3lbq96KLVDgVtlIJ%2FwcC20F3qIwbzpWsGg5Zaa88IafLEdOAvY3%2FHYnyS%2BrOPmgo3O54m0elLePyatwOhsh1Y9gRXXc0eBN6oHmePzT554fI3NumhoMP%2Bc9cIGOqUBVQG18ZpadGlaNjPYndgpQIWGsUKBlpYMOmW%2BBl8D%2BrIHCnm6oj5X4KR2d8XmkqQt58y62Owvn0OOMcL%2FdmkqOfFgwYKIlSmaWRGn5B1XNy1OhMm4j%2BHxIk4sPAVu5quAcBE%2BOLBShBbl0fR4cP4jOXDGZ7FxFwQzVVx1LxsQ1HXaEmn6FUQzXomiZI6odtOXlDMsiYuHUJ7fZbJRuW%2FCqH13vsSH&X-Amz-Signature=14f09ed14b31035162a7a5c576aba49cb6099af28cd3f5ef9a0ad781d5f99f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z677M4LK%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHn1Xu3w%2F89qnLbrCE2sl4aL1D7JHZu0sUJFFUOy8NsOAiEArGg6u2%2BgcAATDHcC%2B%2FijXDoptFwTfPqthjWkv6ptJLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNoT3BZg0kFkNB3FjSrcA9vykIDQ1bECX8eHTNFyWuZi2TwKzKA%2BEhox5gd5k2KGZci15WmEIKp83QdheT%2FbS54fUDRmmvkyfjrJp2g1Vai1DYrl2MWOShifZbopc3d8L3LMnENwmFHoM4e3S1lfHFx3ZdmouU4mT3mzGTe9nq90OmHCxHNRUIMHmoDS2t3NkKE8cwD6nfwurWBPiSp1qbOQKRNKB00JdlsKj4vwp%2Fy%2B3GcJ%2B5Ja%2Bou3YrnB0Oo61u3%2FRdJQA%2FosgWZovg9Z4tnZQP%2BGhCTBT7MP2uTbnzcfcvSXYaSbTykAdrMdDnemRB7vwQO7Fvr8HrNsBK%2FEFo68kT4%2BJ7jb%2BhkvTeC%2FPKG16cdZlzJB%2B1CLiC7ARKDVzM%2FgxXbtRb5%2Bam3CAYB7v4s8ikpHzs7xHuBUms7FxehjXBAJGxbcLgT9gV7ZIEYpCzwn9NRZobiKyfnGm8DezPdHrg8zNu6zWhWRGqmVOICMg1CbVoCYXN%2BNIglKEKrk%2B0X089Ku7se5crCA92yf%2FFcMZvl%2Bvc3lbq96KLVDgVtlIJ%2FwcC20F3qIwbzpWsGg5Zaa88IafLEdOAvY3%2FHYnyS%2BrOPmgo3O54m0elLePyatwOhsh1Y9gRXXc0eBN6oHmePzT554fI3NumhoMP%2Bc9cIGOqUBVQG18ZpadGlaNjPYndgpQIWGsUKBlpYMOmW%2BBl8D%2BrIHCnm6oj5X4KR2d8XmkqQt58y62Owvn0OOMcL%2FdmkqOfFgwYKIlSmaWRGn5B1XNy1OhMm4j%2BHxIk4sPAVu5quAcBE%2BOLBShBbl0fR4cP4jOXDGZ7FxFwQzVVx1LxsQ1HXaEmn6FUQzXomiZI6odtOXlDMsiYuHUJ7fZbJRuW%2FCqH13vsSH&X-Amz-Signature=9b9ec6dbb96f8c6c9008584562ec51339317e949a68f262faa0e7ae6f71f08d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
