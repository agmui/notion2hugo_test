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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEWLA42%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJPfZT2U5DwCAvs14aR92fjgEM3i%2BG5qweo%2FenYddQiQIgJaNVyMFU1C%2Bixqwpf1Fmj0q9Tr%2BSQMdox9jEprfjO%2FIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1U6wi98%2FGM0KBXJyrcA9H09PFY9CpvO5Wbxy0wNxeDeTmZWEcgtGgBy0TIjcMq67lV40DHg6W5NmsI8lHpv3BJQEGz%2FYz5elTELTqvQp9ZAys4VvO8x0Cn6NlYm%2BqEw%2FQQHvGhrCzNZuE6%2BTF62VDrNklXCVH3%2Bl6dztE6mtTtSrs5G6vo3lbyfak7T3l9Ae2HZenQzmw%2BH4YeKBcmaFlRQ1274XrZWX1pdi9kZbyYEAgsboSMEHtpkWPkubLdHVL91gcfBHXytp6xktVE4aW9%2F69QFzLxrKczouw2E5RaSlNMFh4vdom7zJcXimrnjP0FRVudAnH7ojuiRGCieps3m%2FGEPCoWvmeA5VLmXZnA9t%2By9HPahXaS%2FMcE7%2BHnHDUB4LOm7ZsBawIT14EI5ydmtKqIbcN9zePP%2BY2uN%2FwywZVAK2gk%2Fdq%2FoQMSBZeShHP8DLyFyOK1iXAmBl8GkNrmETlbliW3dbGbvMekn2OBLxoiJk7hRI5pGMd34VN3BzeTi9FUyZxvjpvzOdwbmqF2qFhxsLYN7GJkUZbPDiHMkCsRL49%2BqP94bvKYgHxNNFHC6DPC6tIzFqVOENqs5pNTva1aRFK1KlgGFjM5j1xBC2l5RK6g0l9ZHXrg%2BFcXUUHAQ9MrZ6CUDwPlMJbxu8MGOqUBJUYvD34fyDtFOILEP6PP4t7wvVRwfn%2FaawAyKwk%2B2BK9vyNhR24YTjJkmJny%2BgEJLzNNBdi%2B5aKT9Oa5WUAorw4A9kDzAnEdO1z6DhK5GbGvmaNzPFIcp3570Zv6Wee8aPyKQXAvcHT9c95RfjryoV6rV2xv3STIAWZUtyrV0XnWNkfX990j3F6snHFkhC042RS1AD63WoLHffdlHdV2vC%2B1ieuj&X-Amz-Signature=29e93002677037c55d1b7fd55799c3ba56d5748dbf57c00c1229d347f6dcbd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEWLA42%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJPfZT2U5DwCAvs14aR92fjgEM3i%2BG5qweo%2FenYddQiQIgJaNVyMFU1C%2Bixqwpf1Fmj0q9Tr%2BSQMdox9jEprfjO%2FIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1U6wi98%2FGM0KBXJyrcA9H09PFY9CpvO5Wbxy0wNxeDeTmZWEcgtGgBy0TIjcMq67lV40DHg6W5NmsI8lHpv3BJQEGz%2FYz5elTELTqvQp9ZAys4VvO8x0Cn6NlYm%2BqEw%2FQQHvGhrCzNZuE6%2BTF62VDrNklXCVH3%2Bl6dztE6mtTtSrs5G6vo3lbyfak7T3l9Ae2HZenQzmw%2BH4YeKBcmaFlRQ1274XrZWX1pdi9kZbyYEAgsboSMEHtpkWPkubLdHVL91gcfBHXytp6xktVE4aW9%2F69QFzLxrKczouw2E5RaSlNMFh4vdom7zJcXimrnjP0FRVudAnH7ojuiRGCieps3m%2FGEPCoWvmeA5VLmXZnA9t%2By9HPahXaS%2FMcE7%2BHnHDUB4LOm7ZsBawIT14EI5ydmtKqIbcN9zePP%2BY2uN%2FwywZVAK2gk%2Fdq%2FoQMSBZeShHP8DLyFyOK1iXAmBl8GkNrmETlbliW3dbGbvMekn2OBLxoiJk7hRI5pGMd34VN3BzeTi9FUyZxvjpvzOdwbmqF2qFhxsLYN7GJkUZbPDiHMkCsRL49%2BqP94bvKYgHxNNFHC6DPC6tIzFqVOENqs5pNTva1aRFK1KlgGFjM5j1xBC2l5RK6g0l9ZHXrg%2BFcXUUHAQ9MrZ6CUDwPlMJbxu8MGOqUBJUYvD34fyDtFOILEP6PP4t7wvVRwfn%2FaawAyKwk%2B2BK9vyNhR24YTjJkmJny%2BgEJLzNNBdi%2B5aKT9Oa5WUAorw4A9kDzAnEdO1z6DhK5GbGvmaNzPFIcp3570Zv6Wee8aPyKQXAvcHT9c95RfjryoV6rV2xv3STIAWZUtyrV0XnWNkfX990j3F6snHFkhC042RS1AD63WoLHffdlHdV2vC%2B1ieuj&X-Amz-Signature=63798e4f01b98a1f969f3a618f3a30950fa35862a0e7df49aacdca90cb57b488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
