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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGSUIS7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDbc0vyiicEgmOftl0zGsP3rFdfb%2BGZzLrsS89%2BCUEMBQIgMh7snaSIcZ33AE4%2FN6PpLbWypMEiioy9ctqI8V7zaaEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFEeO7hqcSx4DzDyrcA8nVHNSepAlyBPCiumauQzMwMz0xckDL5m%2Fl1Q8EiLCep0nA0ygBvcJywIGew%2Bk50G79Fc7zLddsHRic54MK%2F7x98firfI6TSF2MuPPxxsvS%2FEMHrig1Esta2faDjnRp6uvNkUDnm%2Fb24CD8c4WXl6qhMevFMCHSGg6QKTzhJZg4SjNm%2B7aDUESzSg2QoWg9WUMW5N%2BZ6L5sXo14yRQPeS8Q0EHbBryhDNmV40hCu4K%2FfbUSOAS48kXAhVi0eId63mqQko%2B7hkFmfgPcC8BUZjWr%2FGjE1HabyLgIJTOtoEMrongsnSGBNxGl6otfOIq8aG2BpCqHNEMPwbtRAxmYJ3HsFmsgVBYDc4b8TqFgzMCpLddEOzuf7f3xMtsFvvzU%2FGDA%2FCZWaQTzQ1MSIG9APcPON3b8CgRSLPjSRZJ8VR3Ajxxhnqr7D80WkXuOc4GlQIQ%2F%2BnvuzxeLfHq%2FI5%2B5svLe60xeENf1ta%2BVedtV1%2FDXRNnpXXkzMhskVHQyeGTVDmsWVEjUh876RYQzTG0upmubOU5T3qZRLl91DKdEn9rOaHap5UEfpH%2FcC1q5NevG9b%2FnJrfkkff7%2Fyt1kjEWzYDPws996qePFDnv%2FqaNBKsxu0QyfunI8mRyyQ9HMJ%2Fw9MEGOqUBXEE6fv%2BYpWkOrZR8k6To7TKvRoZDWehS%2Bydsp4V3lcK2uonmvW5nldYgHnoSOK0%2Fwmf6LPS83GlSC%2BekMUttetX98a7pThNV1tPHXXn77muAlPGoLJGvo35HK%2BFhSYiFtVtqQ9FvFkDgBiIfyG6kKTutQ4GxSJ%2FWk1e8TTPl%2BD2SVd6lGhcojGGsn8eG0wBPo8JHza62KTpugEYJdautey8lwyuw&X-Amz-Signature=9ada23aeb407c02d6313e88fde9ba5cbc41aeeaf90274599ef747c19b60664e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGSUIS7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDbc0vyiicEgmOftl0zGsP3rFdfb%2BGZzLrsS89%2BCUEMBQIgMh7snaSIcZ33AE4%2FN6PpLbWypMEiioy9ctqI8V7zaaEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFEeO7hqcSx4DzDyrcA8nVHNSepAlyBPCiumauQzMwMz0xckDL5m%2Fl1Q8EiLCep0nA0ygBvcJywIGew%2Bk50G79Fc7zLddsHRic54MK%2F7x98firfI6TSF2MuPPxxsvS%2FEMHrig1Esta2faDjnRp6uvNkUDnm%2Fb24CD8c4WXl6qhMevFMCHSGg6QKTzhJZg4SjNm%2B7aDUESzSg2QoWg9WUMW5N%2BZ6L5sXo14yRQPeS8Q0EHbBryhDNmV40hCu4K%2FfbUSOAS48kXAhVi0eId63mqQko%2B7hkFmfgPcC8BUZjWr%2FGjE1HabyLgIJTOtoEMrongsnSGBNxGl6otfOIq8aG2BpCqHNEMPwbtRAxmYJ3HsFmsgVBYDc4b8TqFgzMCpLddEOzuf7f3xMtsFvvzU%2FGDA%2FCZWaQTzQ1MSIG9APcPON3b8CgRSLPjSRZJ8VR3Ajxxhnqr7D80WkXuOc4GlQIQ%2F%2BnvuzxeLfHq%2FI5%2B5svLe60xeENf1ta%2BVedtV1%2FDXRNnpXXkzMhskVHQyeGTVDmsWVEjUh876RYQzTG0upmubOU5T3qZRLl91DKdEn9rOaHap5UEfpH%2FcC1q5NevG9b%2FnJrfkkff7%2Fyt1kjEWzYDPws996qePFDnv%2FqaNBKsxu0QyfunI8mRyyQ9HMJ%2Fw9MEGOqUBXEE6fv%2BYpWkOrZR8k6To7TKvRoZDWehS%2Bydsp4V3lcK2uonmvW5nldYgHnoSOK0%2Fwmf6LPS83GlSC%2BekMUttetX98a7pThNV1tPHXXn77muAlPGoLJGvo35HK%2BFhSYiFtVtqQ9FvFkDgBiIfyG6kKTutQ4GxSJ%2FWk1e8TTPl%2BD2SVd6lGhcojGGsn8eG0wBPo8JHza62KTpugEYJdautey8lwyuw&X-Amz-Signature=eb3db596677d27200e91e5fe21f6b808a855ee75163f02f85b2225ee72e9bcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
