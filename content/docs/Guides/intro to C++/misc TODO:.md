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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOC7UOX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDYlOdYBAPuK37ppWjb5O%2BanlbaRS84KgcTM%2BbqUdjfvAiEAlUWetbC3J9i2h%2Fw8shLZb5xlfV5sDi3SYjbOFBs66s0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNI8OqXD9qhSRKDnBSrcA9MHOW4F8TeSoG2nlXr%2Fi%2FuuFwopSOi53mv%2FEBU11Pz26MB7Ni5FbcsPX1zMsgDNlibZo10tSTxlZHcxguOuvbsSnRJAMEPyQYAFTcRv9W0sIMBu9sVJixPPP8J%2BScGDuyEhThOZwLU1DK1Z0RyXTFuuHPkcPCSBKWshSkvqAw0uvxFIg5m0RC12q3T2sbUFAgldelkqA734iGrL17znA5cBrwNpz21BkYrB4w34MCk105sNwUI%2F7qzB5D2BJr6nWz5kdXLSvnVxNYynOXZu80trYpX3prNg6X9Ae%2FZ2nSOXpWQubtpM0aKo3XidPCJbMD9SbFcmXyDua1AMLGovd59CsT1n6UcLjE%2FcDC0qudwsXeIu16WmZHYcCghX3c22fL3SUM%2Bp%2FadB2%2FR2skdXBPmoeE%2BIH1Q7blhxtcA1gyI8l4D75juIBI3spOTJX9PTHCaxPS4dQkY7iL5yBalztpxmD43AusLr9%2B%2BKosVUQuyKTJRiOoXRHOs6jyMJKJqFN0GFwhgVCVpmat%2FgEhBkn8J4y5oScD1kEQ42CBU9ObUJpGClKkSw2KZK8%2Fp9zgSUdgMeR3GuuPrpXBMgayz0rL6kBhytzE0yzwpiRp9kXVtMIixSFuEcOYmVnQlAMJGDiL0GOqUBGXnXGeS%2FO86hBKicKlY%2FmBLslqlAOirTKIv69apaTZt7p3c22oHmNxssvVrghlM5%2F5CSIuxbyjW5e69QVxqz7XA6pwhurG9EcokrOW%2FHYjtLr8%2B%2FtiTDfmbjAPFJgrYHDQ2EEFddoeLaKVK%2BTzUpyIPj2qU0oq4n9wXxkuUua8AEYcha8Co7ZItga1pJQX%2BLcFFrqjRfk%2Fj7zCc55vMGqaJXs1X8&X-Amz-Signature=40fbe664f6fd1d5e7f1958918872f957e4667ca321464f78e12d50a691f4a0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOC7UOX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDYlOdYBAPuK37ppWjb5O%2BanlbaRS84KgcTM%2BbqUdjfvAiEAlUWetbC3J9i2h%2Fw8shLZb5xlfV5sDi3SYjbOFBs66s0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNI8OqXD9qhSRKDnBSrcA9MHOW4F8TeSoG2nlXr%2Fi%2FuuFwopSOi53mv%2FEBU11Pz26MB7Ni5FbcsPX1zMsgDNlibZo10tSTxlZHcxguOuvbsSnRJAMEPyQYAFTcRv9W0sIMBu9sVJixPPP8J%2BScGDuyEhThOZwLU1DK1Z0RyXTFuuHPkcPCSBKWshSkvqAw0uvxFIg5m0RC12q3T2sbUFAgldelkqA734iGrL17znA5cBrwNpz21BkYrB4w34MCk105sNwUI%2F7qzB5D2BJr6nWz5kdXLSvnVxNYynOXZu80trYpX3prNg6X9Ae%2FZ2nSOXpWQubtpM0aKo3XidPCJbMD9SbFcmXyDua1AMLGovd59CsT1n6UcLjE%2FcDC0qudwsXeIu16WmZHYcCghX3c22fL3SUM%2Bp%2FadB2%2FR2skdXBPmoeE%2BIH1Q7blhxtcA1gyI8l4D75juIBI3spOTJX9PTHCaxPS4dQkY7iL5yBalztpxmD43AusLr9%2B%2BKosVUQuyKTJRiOoXRHOs6jyMJKJqFN0GFwhgVCVpmat%2FgEhBkn8J4y5oScD1kEQ42CBU9ObUJpGClKkSw2KZK8%2Fp9zgSUdgMeR3GuuPrpXBMgayz0rL6kBhytzE0yzwpiRp9kXVtMIixSFuEcOYmVnQlAMJGDiL0GOqUBGXnXGeS%2FO86hBKicKlY%2FmBLslqlAOirTKIv69apaTZt7p3c22oHmNxssvVrghlM5%2F5CSIuxbyjW5e69QVxqz7XA6pwhurG9EcokrOW%2FHYjtLr8%2B%2FtiTDfmbjAPFJgrYHDQ2EEFddoeLaKVK%2BTzUpyIPj2qU0oq4n9wXxkuUua8AEYcha8Co7ZItga1pJQX%2BLcFFrqjRfk%2Fj7zCc55vMGqaJXs1X8&X-Amz-Signature=2482f0628d158b91551351ece4f3d75e386fcc940b55fd3849b0edfcff939cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
