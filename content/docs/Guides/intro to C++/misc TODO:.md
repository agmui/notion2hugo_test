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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4Z4D32%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBBnUu5GJ2MnpRfUsiU9X1nKqFnaGy%2BeTNzjcacGWLJwIgdirkkqfuPnphNYo54%2FhZPQCsHeTJsvdT208WHA%2FYZMUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWaWDgMbwJQOV4eXyrcAwH8mbAN1nBPfK%2BSr2Wk0aUgOdG6McxxbczyflRCIeLS8%2Bnwz4Z4Wo5zdqg%2BmM3xh04X04Mc1h%2Fcldgo2Jvx9fL4mLortiA7PJR5F9Yk2pvUCeZ5n2didn%2Bszpu%2FV96e5aIeeV7mNIEqk5hFotukG8CIjNl81uRkgSNhexV52v45g62iqLHweNwMcoJE2ZWhYWCjbGmTdDA0F4F0qud5y42kICit65rUyg0wexOiHkKARGT%2B7ET7U4UTKVCPF1DtJzknc1gckVJdDfSPpIruVya2isZUrFiGtXk6ACRCXLPNPoCozc%2F%2FamRBjnzLxX6uorzhbZi8VE5V4zLB991Lu6BVFRSiUU4%2BohTlK%2FGFJ%2Baaj8cgHfu2R77R5tA%2Fdug9kMlR%2FR2ce0nXXrh5gllFNuHV%2ByfMcEBUKJfHUYydPdDVGM491uMCHbw5Zz0XzHgbki%2F4CQBdqAsssxHPLE7ZOjviYbso9M4JZkwxEex2iaakDVe5abgmspcvOM9Sh5Z8Bx58%2FFb851Wfl9sv05dyaONTCedn8NBpo0rLi9z2ZYm6ZR90sL1vDZrDlP86Os2D4Hp314%2B7ZpMJqE2jgfdTv70X6Xr8K8gt3sac2T8gPO7zjhmS02pDuiJM09%2FkMKq06cAGOqUBINeqmesAkzdqxQSe4zCfF%2FJNumJvatuiLuDd6yRaTX1Vo7pWcsVHvzDRj6rKzEAyWIEyXug9w5pmt0%2B06htvdsievaRVMMq6SHMFolQZV8WylgjMfLBjXo6DM5q%2Fm1Hp%2BELOKsBjGTeS81N6CCZRiL3V1xNVIrYlKVT6pEG32AyKlk6pWfLUvoRw41Wg3mzbvZ4d2QrExpVfyLIWEu3qGN8h7Crv&X-Amz-Signature=d48f58cea5bce9a51dd9d2bdabdc815f38f17196d894ae36614bf24f53b7274f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4Z4D32%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBBnUu5GJ2MnpRfUsiU9X1nKqFnaGy%2BeTNzjcacGWLJwIgdirkkqfuPnphNYo54%2FhZPQCsHeTJsvdT208WHA%2FYZMUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWaWDgMbwJQOV4eXyrcAwH8mbAN1nBPfK%2BSr2Wk0aUgOdG6McxxbczyflRCIeLS8%2Bnwz4Z4Wo5zdqg%2BmM3xh04X04Mc1h%2Fcldgo2Jvx9fL4mLortiA7PJR5F9Yk2pvUCeZ5n2didn%2Bszpu%2FV96e5aIeeV7mNIEqk5hFotukG8CIjNl81uRkgSNhexV52v45g62iqLHweNwMcoJE2ZWhYWCjbGmTdDA0F4F0qud5y42kICit65rUyg0wexOiHkKARGT%2B7ET7U4UTKVCPF1DtJzknc1gckVJdDfSPpIruVya2isZUrFiGtXk6ACRCXLPNPoCozc%2F%2FamRBjnzLxX6uorzhbZi8VE5V4zLB991Lu6BVFRSiUU4%2BohTlK%2FGFJ%2Baaj8cgHfu2R77R5tA%2Fdug9kMlR%2FR2ce0nXXrh5gllFNuHV%2ByfMcEBUKJfHUYydPdDVGM491uMCHbw5Zz0XzHgbki%2F4CQBdqAsssxHPLE7ZOjviYbso9M4JZkwxEex2iaakDVe5abgmspcvOM9Sh5Z8Bx58%2FFb851Wfl9sv05dyaONTCedn8NBpo0rLi9z2ZYm6ZR90sL1vDZrDlP86Os2D4Hp314%2B7ZpMJqE2jgfdTv70X6Xr8K8gt3sac2T8gPO7zjhmS02pDuiJM09%2FkMKq06cAGOqUBINeqmesAkzdqxQSe4zCfF%2FJNumJvatuiLuDd6yRaTX1Vo7pWcsVHvzDRj6rKzEAyWIEyXug9w5pmt0%2B06htvdsievaRVMMq6SHMFolQZV8WylgjMfLBjXo6DM5q%2Fm1Hp%2BELOKsBjGTeS81N6CCZRiL3V1xNVIrYlKVT6pEG32AyKlk6pWfLUvoRw41Wg3mzbvZ4d2QrExpVfyLIWEu3qGN8h7Crv&X-Amz-Signature=f13ef503796a2978ea14fa299a220bfdc8eb3287c9f3cf986aa4ddc3820cb0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
