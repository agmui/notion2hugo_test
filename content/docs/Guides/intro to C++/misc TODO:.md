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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWNTT5L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq8GBZTvF%2FRIieKefk37LH763uFPZI6vE2wWc3JmngzQIhAO8h6kVity1VX7IbYbmhMocp%2F95UoWGZWjDQ0jkeWXB4Kv8DCCcQABoMNjM3NDIzMTgzODA1IgywFED8LuVB6eP9ezMq3AOmfFj8VZzoPtrbLVlxbR1euQNxeIuPe4YIZEHiobYsZl1ehuEMs938rhktuEC%2Fos7aUlv17SgfkbqVvaNAoxBh77Y2mRs9V770ZqH87c2l8MGyhAIZWd06nQSc6%2BB2rxS8BGyOs6sEdsgxq7g90wPw8BTtfgfzX%2FfF6Qy2WMEU1tKdSJHj%2FTOko8kcz8%2F%2FqDCTLzFo1v%2FbO0WWCdzNHXaM72Dx2OEngoNUIAFIEurwT3wRk%2BUdlvcHKnEzFvSUfGXmu%2FWLcW%2FdWkJ9w%2FZ23z3UUr7oggm0BuDDcx58cX9fxvaIjw%2FKD4KGEkbF1JCDVcY67isVAIKUfWhDAbb1NXT7Hq6RL4xMMnYhYBFd8MdWPrwyGpBB3m1QY9blKU34aQoNYggBdw3uTnKgYi0gyp1lAg4BDpBEpDxwcCfNViBSRi%2FDhfMPL2OY%2BSp45j25uidbAGlOTjFVmaRjgAQWb7cumyoivFBsH%2BmjfATY%2BJ9YYnIChmn6Ih88PzNvQ%2B6zijA9RIlzjvdF7Wt%2F%2FZQXTZ3WQZb%2BSUAjqgJDxgHGGgxc0OqYhamknbh7AG6EfPxM1%2FT%2BtDIlFkMU2oT6iherCd4Y0pBi38IyMENItGYN3IbE6JLwX%2FF6jyoOuf2pgjDH0PDEBjqkAVgClbcOPM6FkIILiltZxTh1zKLd1l7iiSKZhcyHn51N6P7cAp6sFNsdlVvHm3T0d59BLJjZ48lubkNfS2laKQOSveQUl7r9gIVTlTGiuln1j8psTeOHWJVambTSlxOSzy%2BcHlcYoBoOf3iVTbR9USE4fA2CbONiKRM%2FHoH59%2F7F22LJ%2BBbVWpKl%2BiL1O9Fe5oNE3JBzPYPha8rg7X%2FWbPPLFXRh&X-Amz-Signature=5a6340c2a799d25f2c956e76b1d8ca84258fc07f9210075b9ae4df6cd9c3deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWNTT5L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq8GBZTvF%2FRIieKefk37LH763uFPZI6vE2wWc3JmngzQIhAO8h6kVity1VX7IbYbmhMocp%2F95UoWGZWjDQ0jkeWXB4Kv8DCCcQABoMNjM3NDIzMTgzODA1IgywFED8LuVB6eP9ezMq3AOmfFj8VZzoPtrbLVlxbR1euQNxeIuPe4YIZEHiobYsZl1ehuEMs938rhktuEC%2Fos7aUlv17SgfkbqVvaNAoxBh77Y2mRs9V770ZqH87c2l8MGyhAIZWd06nQSc6%2BB2rxS8BGyOs6sEdsgxq7g90wPw8BTtfgfzX%2FfF6Qy2WMEU1tKdSJHj%2FTOko8kcz8%2F%2FqDCTLzFo1v%2FbO0WWCdzNHXaM72Dx2OEngoNUIAFIEurwT3wRk%2BUdlvcHKnEzFvSUfGXmu%2FWLcW%2FdWkJ9w%2FZ23z3UUr7oggm0BuDDcx58cX9fxvaIjw%2FKD4KGEkbF1JCDVcY67isVAIKUfWhDAbb1NXT7Hq6RL4xMMnYhYBFd8MdWPrwyGpBB3m1QY9blKU34aQoNYggBdw3uTnKgYi0gyp1lAg4BDpBEpDxwcCfNViBSRi%2FDhfMPL2OY%2BSp45j25uidbAGlOTjFVmaRjgAQWb7cumyoivFBsH%2BmjfATY%2BJ9YYnIChmn6Ih88PzNvQ%2B6zijA9RIlzjvdF7Wt%2F%2FZQXTZ3WQZb%2BSUAjqgJDxgHGGgxc0OqYhamknbh7AG6EfPxM1%2FT%2BtDIlFkMU2oT6iherCd4Y0pBi38IyMENItGYN3IbE6JLwX%2FF6jyoOuf2pgjDH0PDEBjqkAVgClbcOPM6FkIILiltZxTh1zKLd1l7iiSKZhcyHn51N6P7cAp6sFNsdlVvHm3T0d59BLJjZ48lubkNfS2laKQOSveQUl7r9gIVTlTGiuln1j8psTeOHWJVambTSlxOSzy%2BcHlcYoBoOf3iVTbR9USE4fA2CbONiKRM%2FHoH59%2F7F22LJ%2BBbVWpKl%2BiL1O9Fe5oNE3JBzPYPha8rg7X%2FWbPPLFXRh&X-Amz-Signature=4b64bc6096c50936239c4357eaf44fcc19b5090259cf19c5498befcaa1328f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
