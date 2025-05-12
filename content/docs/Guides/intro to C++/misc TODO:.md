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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AEXRW44%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDrFLtazF10qCijzD8y%2B0TlUZcEW6vbkZGtfmOjNJ9CQAIge%2B37U4%2BxxYTfVIjU3DmEJ6Bg3BX0JFNmTh1gjZgjdZQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi4e%2BPAEIw6pwPvpyrcAzAilRuNwB6Fd0ntY0XgpIY0GMAKiiE2uuQKXl8mSpAemkfO8f%2BPnd8SbqXqz6NFT160gpAhAl%2FW4Foq0y9qQ%2FaSzMZPFxBnIQzbSgrd4LHQlrEorPTCT%2FQridndX9zncn2S%2FtQF%2Fyi7OQ8t4DT0tpVIvymvqCTuku54ieeIK12N%2F%2BqB5hZaOt06aop5srWoqsk0qvGaLAElAfh3JQdWXzftMG81pn3gnEKV2DGZ8Z0w0zj0W9%2FfhainLrycwclM7Y96Bvbe6N3JrMUZZHyhDHP6NC8RiFSZq7ciBn3obQvRV5FXdgPfr169gC20g44GBwUmDa8q5F43xnf4amJS2xjP8LhLGV7HSFP%2Fh711I4oYrPPTHXwfYMt8dQ9IIGsP9%2BPE%2BzPA4uuEPTkxPwADEEjRyx%2BuBcOl0P%2Bh2Zg97AzLBzvICM47ATjg89cTqGwhdDUAJvOfWPkqrgMUTKqx1pFQkSFS9woQhMmvYb8t5FZegiLEPQrBJYGVtScclnT4mttQ3PeSxVkg9FOX9mzHawftvX%2B5lsqfs1Iw3fejte%2BIRf8v5bvKYwpLfDXHYXwFexOsW3R8X7sSxazaZQWzz1dWfa8UT8gjyTSYW5fh6wt%2BfDWuXhkNXuLhaPgzMOfeicEGOqUB%2BYfjFv5sFTSeX6KvcXMDRpixs2Ly6UnZc8EM5h2yeJZlMBROjm7chvbqnISJF9pcriyyLB%2BvOi8Oxy2lW1tVfmrmRo5CGaaDOZxjwnwR1pZFaoV1jYa7xtXz0cf1pXOS78fzl7BS5nri%2Bscd0Iu9d6Wybkm5SwASQ%2FF%2FZRl2oY%2FWlhTTwHxj8mN%2FZ0B9SXShczlborepGPtzx163w0jaHIsowCFf&X-Amz-Signature=28f02ea149b14ad382439d77b1fe77bf02fc737fd0342a395a4a37f1e3c0e0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AEXRW44%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDrFLtazF10qCijzD8y%2B0TlUZcEW6vbkZGtfmOjNJ9CQAIge%2B37U4%2BxxYTfVIjU3DmEJ6Bg3BX0JFNmTh1gjZgjdZQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi4e%2BPAEIw6pwPvpyrcAzAilRuNwB6Fd0ntY0XgpIY0GMAKiiE2uuQKXl8mSpAemkfO8f%2BPnd8SbqXqz6NFT160gpAhAl%2FW4Foq0y9qQ%2FaSzMZPFxBnIQzbSgrd4LHQlrEorPTCT%2FQridndX9zncn2S%2FtQF%2Fyi7OQ8t4DT0tpVIvymvqCTuku54ieeIK12N%2F%2BqB5hZaOt06aop5srWoqsk0qvGaLAElAfh3JQdWXzftMG81pn3gnEKV2DGZ8Z0w0zj0W9%2FfhainLrycwclM7Y96Bvbe6N3JrMUZZHyhDHP6NC8RiFSZq7ciBn3obQvRV5FXdgPfr169gC20g44GBwUmDa8q5F43xnf4amJS2xjP8LhLGV7HSFP%2Fh711I4oYrPPTHXwfYMt8dQ9IIGsP9%2BPE%2BzPA4uuEPTkxPwADEEjRyx%2BuBcOl0P%2Bh2Zg97AzLBzvICM47ATjg89cTqGwhdDUAJvOfWPkqrgMUTKqx1pFQkSFS9woQhMmvYb8t5FZegiLEPQrBJYGVtScclnT4mttQ3PeSxVkg9FOX9mzHawftvX%2B5lsqfs1Iw3fejte%2BIRf8v5bvKYwpLfDXHYXwFexOsW3R8X7sSxazaZQWzz1dWfa8UT8gjyTSYW5fh6wt%2BfDWuXhkNXuLhaPgzMOfeicEGOqUB%2BYfjFv5sFTSeX6KvcXMDRpixs2Ly6UnZc8EM5h2yeJZlMBROjm7chvbqnISJF9pcriyyLB%2BvOi8Oxy2lW1tVfmrmRo5CGaaDOZxjwnwR1pZFaoV1jYa7xtXz0cf1pXOS78fzl7BS5nri%2Bscd0Iu9d6Wybkm5SwASQ%2FF%2FZRl2oY%2FWlhTTwHxj8mN%2FZ0B9SXShczlborepGPtzx163w0jaHIsowCFf&X-Amz-Signature=18c38d735fd72278f24d10f14e37c2edf5da9d3dae54858d05ea424ee0592396&X-Amz-SignedHeaders=host&x-id=GetObject)

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
