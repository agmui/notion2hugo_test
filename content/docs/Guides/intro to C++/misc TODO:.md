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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMP2ODI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDfqQ%2B%2BwMAlQ8xm8%2BaZtYR26vvZqv4zWEWrEozWBzJK%2BQIgBXOsO38pkWtBKh328C2WuREhVazQv%2FxkqsFcnSXatbYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2FfnHHLWBb1bHiK5CrcA%2Fngpa0GVStlbue%2F0piBo%2BosAHb0%2B0CvUD%2FfLg78qEKOSNTv0bor9Mv7InE5fLXF0Ky%2FAPP%2FqyVQ82ZELTRgfvHOERQPjdigGIGc%2FJRUVIeADRJp6YxuOi1twzzkb%2Fy3k7JbTQfJH%2BSY%2Bi1xv7L92cMbjmRnVqlhvtsWRB1aAEEJLwwMHHugpfm5vYMUI83kX2%2FucKjrIrH3Ej9UjaFg5LviLmdWdbH4FlX12NndDug%2F%2BUjV%2BAmZzg1da7JckrQOi7aQtCZM2UhXyiAMOHblmKbow1mdYDKLqm%2FD8rVdewQKwxdQ64%2BD8ZEejUzXkihy7y1e9GohyQKGwJdeFEPNilO%2B%2Bw0qvIArisQLRFBxPkSvoJRTZuJ8NVAhnrvtexggWWRTeXxmVEobG%2FAzS1ja%2BuBFQE4KKYvvm17N4mJREbW6MgGg%2FfSgNwszn9laV1Wt0rT0D7xShvendwhFjbciHdyBGg55xjHpZbI4NW6AYflh%2FwQRq0NKzkVcWggfKcw0GavIwi%2F4lDoiD2mThcA4bvBosJy5iLreF6NBjNiY%2BU6ICvZhzcDUoEfRgDnIynxuOSpTqDim9wcsH3Sf%2BuVjjN4U%2BKEwkpunzcNac2SXbamjt%2BjW07M5qX%2FEtKD1MILg6r4GOqUBrEKc49tckpTfAKIdLxGv2pWRt1zKiUewhMLOQRkHLd%2FiIeh40FbHbmUSBsVH4rQGrbNNzfy5mbVU2jexpY5hLM4xmPtUOgv4nJyoOYDtNfNTuXnBmoTc9aKf0DahXnhJmgzskT2wLl7okOEiGolTW3M6nFvgku0XcyZjjFVfktl0gd2LGhvsMBIKN81nAdAPtSHA9Ds7WQZtPr0TE6Uqq%2BDyyT0o&X-Amz-Signature=231d72934e844ba2bf24d1740bb691f9ab808df86298e597ac1068dfe5fa5f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMP2ODI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDfqQ%2B%2BwMAlQ8xm8%2BaZtYR26vvZqv4zWEWrEozWBzJK%2BQIgBXOsO38pkWtBKh328C2WuREhVazQv%2FxkqsFcnSXatbYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2FfnHHLWBb1bHiK5CrcA%2Fngpa0GVStlbue%2F0piBo%2BosAHb0%2B0CvUD%2FfLg78qEKOSNTv0bor9Mv7InE5fLXF0Ky%2FAPP%2FqyVQ82ZELTRgfvHOERQPjdigGIGc%2FJRUVIeADRJp6YxuOi1twzzkb%2Fy3k7JbTQfJH%2BSY%2Bi1xv7L92cMbjmRnVqlhvtsWRB1aAEEJLwwMHHugpfm5vYMUI83kX2%2FucKjrIrH3Ej9UjaFg5LviLmdWdbH4FlX12NndDug%2F%2BUjV%2BAmZzg1da7JckrQOi7aQtCZM2UhXyiAMOHblmKbow1mdYDKLqm%2FD8rVdewQKwxdQ64%2BD8ZEejUzXkihy7y1e9GohyQKGwJdeFEPNilO%2B%2Bw0qvIArisQLRFBxPkSvoJRTZuJ8NVAhnrvtexggWWRTeXxmVEobG%2FAzS1ja%2BuBFQE4KKYvvm17N4mJREbW6MgGg%2FfSgNwszn9laV1Wt0rT0D7xShvendwhFjbciHdyBGg55xjHpZbI4NW6AYflh%2FwQRq0NKzkVcWggfKcw0GavIwi%2F4lDoiD2mThcA4bvBosJy5iLreF6NBjNiY%2BU6ICvZhzcDUoEfRgDnIynxuOSpTqDim9wcsH3Sf%2BuVjjN4U%2BKEwkpunzcNac2SXbamjt%2BjW07M5qX%2FEtKD1MILg6r4GOqUBrEKc49tckpTfAKIdLxGv2pWRt1zKiUewhMLOQRkHLd%2FiIeh40FbHbmUSBsVH4rQGrbNNzfy5mbVU2jexpY5hLM4xmPtUOgv4nJyoOYDtNfNTuXnBmoTc9aKf0DahXnhJmgzskT2wLl7okOEiGolTW3M6nFvgku0XcyZjjFVfktl0gd2LGhvsMBIKN81nAdAPtSHA9Ds7WQZtPr0TE6Uqq%2BDyyT0o&X-Amz-Signature=7736d53f04359f058a9600fcc558e880ea3fafe03dc65e4ed783eab97782a0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
