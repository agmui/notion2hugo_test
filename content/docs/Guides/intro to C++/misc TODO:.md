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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWJCHK2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWjeWq3Ty9woScRoICwhrXAyJiKh%2B5fBzSwKs4lq5cwIgIxWCcM9wkeYpYemdo61ypFCA7fSrlkLL%2BewlOnoHFOIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbpVRCOqPI6HB2DDyrcA8MM1D7BE92GGccQsjV2qtrBUQNuIx%2BgTeAYAotOSPa9jiYAnOkk8K4owmQWcdBXNgFU7UNlFA7dIxclZPESmUIqE%2FI5d23jehUS03hfSTGtmFrDD%2Blgcj8jaPh5sC4aIUgDL5WGXM%2FtCEvG%2FCzyGgBaZIeKbRcadCjwcTZXyVJcwUoSGebb8N5T4Xhe6ivaHTYbjLKViJNpmQqFAbs7dj5Suw%2Fdh25hy%2FENanQw1m3FcXBgqwSIDVUe4rmnTKeMGWnUeuRUg7wu%2FdgHwamA1YTGRYbI7AsRQB16XgfYe3S%2BbTzarht5gQyOiFGDj5GvPZWbvrFvK7drEY2AFi0VY0vT9U3ulyoWm4mEef6yiNOn2WZvwOQOHqw49yxuNnnhrzkPcl2pvAGqTq1P6XAjvFr2invvmiKg%2FbWIuTr5qzRfmJ5zL3g8FuQA4%2BYFU7vw0Hpd4GBK5AHydhNC847BqbhSkOHqH5mW5YleR12R7CdXJdao9giF0cfnO086v4uod%2Baek%2FWz2fhY0PXy31Nq2CPnSaLASmPPKDgfuYctoWTL2mXodDJVrNhAjYgxAaeSjgbwainpOhejLmPrQ2tIhLOHnmokXGDBCZoHccnuji0qGODAcljwAxOhh14sMM2jw8AGOqUBXwrjadLkg7fWcTOaFyz6TbM2r0jZLt%2FXpuwgzJqm05Yviw9zjnHPT%2BVQNjDEb%2FfCO6i8p2uYfUYjYcU1WRncjsCjvGF6xsbJ0s2VHHwTY5kNaS0IP5IGYY6F91o%2Bf8cMlItBGzV87Wj%2FOSEtKFR5P%2FTYVHNJYXRJyuubFlCRtzvahPv%2FmX9fy0%2BnTJSsqVzMeCUjh2RPTQQm9NRFimcRx8arym%2Bk&X-Amz-Signature=b4a82cfd8542e6bf4f2ce209ee7626ff3ec368c159e5de57ca4baef0bc181289&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWJCHK2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWjeWq3Ty9woScRoICwhrXAyJiKh%2B5fBzSwKs4lq5cwIgIxWCcM9wkeYpYemdo61ypFCA7fSrlkLL%2BewlOnoHFOIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbpVRCOqPI6HB2DDyrcA8MM1D7BE92GGccQsjV2qtrBUQNuIx%2BgTeAYAotOSPa9jiYAnOkk8K4owmQWcdBXNgFU7UNlFA7dIxclZPESmUIqE%2FI5d23jehUS03hfSTGtmFrDD%2Blgcj8jaPh5sC4aIUgDL5WGXM%2FtCEvG%2FCzyGgBaZIeKbRcadCjwcTZXyVJcwUoSGebb8N5T4Xhe6ivaHTYbjLKViJNpmQqFAbs7dj5Suw%2Fdh25hy%2FENanQw1m3FcXBgqwSIDVUe4rmnTKeMGWnUeuRUg7wu%2FdgHwamA1YTGRYbI7AsRQB16XgfYe3S%2BbTzarht5gQyOiFGDj5GvPZWbvrFvK7drEY2AFi0VY0vT9U3ulyoWm4mEef6yiNOn2WZvwOQOHqw49yxuNnnhrzkPcl2pvAGqTq1P6XAjvFr2invvmiKg%2FbWIuTr5qzRfmJ5zL3g8FuQA4%2BYFU7vw0Hpd4GBK5AHydhNC847BqbhSkOHqH5mW5YleR12R7CdXJdao9giF0cfnO086v4uod%2Baek%2FWz2fhY0PXy31Nq2CPnSaLASmPPKDgfuYctoWTL2mXodDJVrNhAjYgxAaeSjgbwainpOhejLmPrQ2tIhLOHnmokXGDBCZoHccnuji0qGODAcljwAxOhh14sMM2jw8AGOqUBXwrjadLkg7fWcTOaFyz6TbM2r0jZLt%2FXpuwgzJqm05Yviw9zjnHPT%2BVQNjDEb%2FfCO6i8p2uYfUYjYcU1WRncjsCjvGF6xsbJ0s2VHHwTY5kNaS0IP5IGYY6F91o%2Bf8cMlItBGzV87Wj%2FOSEtKFR5P%2FTYVHNJYXRJyuubFlCRtzvahPv%2FmX9fy0%2BnTJSsqVzMeCUjh2RPTQQm9NRFimcRx8arym%2Bk&X-Amz-Signature=c4cbb5f87fe304ee3ec42181e1b1a84d37e43b47d269b88dd234180c03402f20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
