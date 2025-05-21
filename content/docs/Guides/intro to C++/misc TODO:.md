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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMU55QML%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAoQQ9mYe3q0r86Roix2TJ1qPqvFDRF63vm3uDnWfDVLAiEA0G3xJg27oi6Ff07xePagR%2Bl89rzQ%2FWkJU1o0GKi7lIkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEneMLTvMLoWdQ8iqyrcAyAJsi8ZoWS31%2B5qZkzErSVf4t%2B9kEROpRKgRb8%2BtTBx5Vs3Q1c61NBzff%2FMzH7vPMGr9P0Z8r%2FPWQ18VfCzQEs4SN%2BBVVkghucXBV9C9nywYfYTlZTKM%2FPzCDOPr1XHgPVgvSzYRFwEC6C3SvoMW9uJZcXDlj4xYxO9Ae3OuUwFLnoDxuo3eviWxb7Ryk8c8Gy3VxmMqqWBu6BQG2M8FnOluOSyVmFbQB3hjW%2BnO51eNJRahddYQixx2GdCBNVBkbT9DfSRkK8hg7w1SoIMFs1YTdgENOKyyntnetbDiWEuoGCAufgV4N6E4iJLcDpwSGnpPfSfOg925GZpI%2BVwmj6O8bRLjUmpgz67uOVjI3Es%2F7G9Be5HQkq5yeVQwP03JQFV14lyE26Ugg1UQIrxqxjFypNMG4gv4JiiDrCCC%2FBERj6FKxQguEkSAaRx%2FkdLweYhnXsI0To%2BdBfz%2B%2Fq%2F88twjUbaUfbtRRB2oOEXurF1pVtvJN2w8b0eO5Q5fWQ1MUOmXZE8QTa1PJoY8x7rUgK%2BfUhOGQ7%2FzgbseQicKQ9eXcf5iCey5CY8zHPELDRmCkwKanhnP6wHjAeleMJK3Xf76mqj8paT%2BWjEoLZu5Zf1VOBW1czpiU1MtebOMPjyt8EGOqUBfLiBCICcz06NPmv15hI4KDg%2FLIRAsw3rVXXw6bEGe8TKPY66PPlAoduA1FyMutp290t0Tg5%2B9H9e3tAPCNfBwby%2BqIagO8c%2BIBQtQWMlsatwZmRWz0cwBRwPVeuKyBdh1Vb7By%2FSZMyYuPaseiU6N%2F2Olvfq8hJS2RTdXhwb8KnvUdqY8yB4UDDpMme3YMokFik5Ijqr7x51FMvoqI3sGmSd9qAT&X-Amz-Signature=a8e7575283f291843cef8d32fec64c3bb859e90243cb6565e01f1b5c5c6a4c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMU55QML%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAoQQ9mYe3q0r86Roix2TJ1qPqvFDRF63vm3uDnWfDVLAiEA0G3xJg27oi6Ff07xePagR%2Bl89rzQ%2FWkJU1o0GKi7lIkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEneMLTvMLoWdQ8iqyrcAyAJsi8ZoWS31%2B5qZkzErSVf4t%2B9kEROpRKgRb8%2BtTBx5Vs3Q1c61NBzff%2FMzH7vPMGr9P0Z8r%2FPWQ18VfCzQEs4SN%2BBVVkghucXBV9C9nywYfYTlZTKM%2FPzCDOPr1XHgPVgvSzYRFwEC6C3SvoMW9uJZcXDlj4xYxO9Ae3OuUwFLnoDxuo3eviWxb7Ryk8c8Gy3VxmMqqWBu6BQG2M8FnOluOSyVmFbQB3hjW%2BnO51eNJRahddYQixx2GdCBNVBkbT9DfSRkK8hg7w1SoIMFs1YTdgENOKyyntnetbDiWEuoGCAufgV4N6E4iJLcDpwSGnpPfSfOg925GZpI%2BVwmj6O8bRLjUmpgz67uOVjI3Es%2F7G9Be5HQkq5yeVQwP03JQFV14lyE26Ugg1UQIrxqxjFypNMG4gv4JiiDrCCC%2FBERj6FKxQguEkSAaRx%2FkdLweYhnXsI0To%2BdBfz%2B%2Fq%2F88twjUbaUfbtRRB2oOEXurF1pVtvJN2w8b0eO5Q5fWQ1MUOmXZE8QTa1PJoY8x7rUgK%2BfUhOGQ7%2FzgbseQicKQ9eXcf5iCey5CY8zHPELDRmCkwKanhnP6wHjAeleMJK3Xf76mqj8paT%2BWjEoLZu5Zf1VOBW1czpiU1MtebOMPjyt8EGOqUBfLiBCICcz06NPmv15hI4KDg%2FLIRAsw3rVXXw6bEGe8TKPY66PPlAoduA1FyMutp290t0Tg5%2B9H9e3tAPCNfBwby%2BqIagO8c%2BIBQtQWMlsatwZmRWz0cwBRwPVeuKyBdh1Vb7By%2FSZMyYuPaseiU6N%2F2Olvfq8hJS2RTdXhwb8KnvUdqY8yB4UDDpMme3YMokFik5Ijqr7x51FMvoqI3sGmSd9qAT&X-Amz-Signature=e7bda293c5d28f9f17c4552145434ad2d2eee1e6e9bcd512e4b30d8d3d484d28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
