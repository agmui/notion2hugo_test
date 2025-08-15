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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJ6AKLX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICgRlAve9s%2BI8cA3D37f6ebwH%2BTEbys8WJ6TbBsZOZT1AiEA7gk4Pxx3cwXYmcckB0Tx%2Fzhll3F1JQ%2F9aKx0yRJVthUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFXYHW4JhrSrt38c6yrcA15Pa1YM%2FFby0wiy9RoQ4u72ApjuRO96nO08yJz%2B1NAbT9IBbSlksEg45YOemmC3u2dR8F5M51PsrdBjZDUxi927t2w8QifKgTkhrEu37IVe3cslnspxSD2MXt0FwvaX0Zg4dHC1HB9ZpI6HoSOCOi9W8EjhBuOvZyq6DnXxTrwBX3ECqjacyIABRMpcdwr4vJ85p0Gpwsj7soDYQAX%2FyPW0fHr912%2BZhgNsq%2FD9tpnSs4odO0IZemPj8nA5AFv97ycYgJovjj0TMFu5%2BPnY%2FtCgBbRVXz6l%2FIUNOLxwHy0t9GkK2cIH%2FJYp4d4f0S%2BFsyKQ9PsIEZPwtHisJA6j%2FB1ZCKu%2BmNj2r5nMoaOCrMuGtHQ6SGcfF%2FILcqZ1M1X6UVBJ9WsEGkBe9%2FnrF6IUCudS7KK0PKJ0C3Y%2Fexf4pUGgDMfLMILqWPOGfjkDEDPTaKPSoBQDgEc6sP1EEFU%2F3xiK50hGEt1WneTLd%2FAw5Yh8PkAUG%2FCmMRlHvw6pBWowNE2Q5JKEooNSPDhn19Z3vgSZjNjO7qxfVL8Hn6SeBHs4%2BB7SLsTjOuU4qVTO8zDUXnS5aRHZMOarlZUG1m0P0RpvXEdpGrm0FyUFrqDizTRYgjh4Wg5EXpOP6sMbMNzb%2FcQGOqUBfkCH2D7jR6tLdQubTOxBNsByfwn%2FfMgUs5KHV9vV2wdXva8zPwDUG2ebCB6zCS2qVaEy81zXv7ABEFKbC06Xwbw2hGdLz6Hh5XhMIz%2FQoiKC%2FTHTcYzOPWmgKtxNz6E7MzidhzrKy1wbybTyPMgvJlWsWrA%2B4udnRopSPdt3d09W7PwPpNE6HT6pOOpiQGSrPafjZL8XvdiXESIPkf9pHTR2XWNQ&X-Amz-Signature=0568985cdbd32c2619394233c587afd3d04366f9fc26b11fb6f81047bd4ef8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJ6AKLX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICgRlAve9s%2BI8cA3D37f6ebwH%2BTEbys8WJ6TbBsZOZT1AiEA7gk4Pxx3cwXYmcckB0Tx%2Fzhll3F1JQ%2F9aKx0yRJVthUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFXYHW4JhrSrt38c6yrcA15Pa1YM%2FFby0wiy9RoQ4u72ApjuRO96nO08yJz%2B1NAbT9IBbSlksEg45YOemmC3u2dR8F5M51PsrdBjZDUxi927t2w8QifKgTkhrEu37IVe3cslnspxSD2MXt0FwvaX0Zg4dHC1HB9ZpI6HoSOCOi9W8EjhBuOvZyq6DnXxTrwBX3ECqjacyIABRMpcdwr4vJ85p0Gpwsj7soDYQAX%2FyPW0fHr912%2BZhgNsq%2FD9tpnSs4odO0IZemPj8nA5AFv97ycYgJovjj0TMFu5%2BPnY%2FtCgBbRVXz6l%2FIUNOLxwHy0t9GkK2cIH%2FJYp4d4f0S%2BFsyKQ9PsIEZPwtHisJA6j%2FB1ZCKu%2BmNj2r5nMoaOCrMuGtHQ6SGcfF%2FILcqZ1M1X6UVBJ9WsEGkBe9%2FnrF6IUCudS7KK0PKJ0C3Y%2Fexf4pUGgDMfLMILqWPOGfjkDEDPTaKPSoBQDgEc6sP1EEFU%2F3xiK50hGEt1WneTLd%2FAw5Yh8PkAUG%2FCmMRlHvw6pBWowNE2Q5JKEooNSPDhn19Z3vgSZjNjO7qxfVL8Hn6SeBHs4%2BB7SLsTjOuU4qVTO8zDUXnS5aRHZMOarlZUG1m0P0RpvXEdpGrm0FyUFrqDizTRYgjh4Wg5EXpOP6sMbMNzb%2FcQGOqUBfkCH2D7jR6tLdQubTOxBNsByfwn%2FfMgUs5KHV9vV2wdXva8zPwDUG2ebCB6zCS2qVaEy81zXv7ABEFKbC06Xwbw2hGdLz6Hh5XhMIz%2FQoiKC%2FTHTcYzOPWmgKtxNz6E7MzidhzrKy1wbybTyPMgvJlWsWrA%2B4udnRopSPdt3d09W7PwPpNE6HT6pOOpiQGSrPafjZL8XvdiXESIPkf9pHTR2XWNQ&X-Amz-Signature=fc9cf535b5d6d82138528bb7e46446aa90291c8d51d1ba128b3c4bed2bf56060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
