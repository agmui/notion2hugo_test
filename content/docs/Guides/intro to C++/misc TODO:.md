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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6Y66FLV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDt%2BAseDFF9nebQ76yCJ2tO4%2FbQ63NQL22VazXQfdzewIhAN2YCgwj15VuBrefWw4btfUphhxv1p99kmYBkG3M4fB7KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0df%2Fcf9S4Brs2lG8q3AP4RGM2v1KQVx0ZXUe3%2FFmtjJbZgjvY7nI7P4%2FpKrElb8wmrxpDQBQm1HGjkRFRYoUi0m1QA8a1iy04B6lg2UNhkjV%2FmNKYT9kV%2FFXGMCunrb2%2B8QoNFUH%2BsDVj0Apkk1c8wWRT%2Bo%2Fsz5IrQMdyAiIDPt287iIWlNuw%2BM9fNuDa3pVbvOTnkl6s6VB5ubdetfrwjhHBLgkau%2FL0TIfmNhWTLk9quD1d00H0UhgumUN%2BNFjKQtZL4uIy8pVL4movlue1kPlxe7xFUMKLRinnB7mYH2F46yumrxcCbX9B1oChd1suiwsv4P0%2FiaO4xBhbSq4Gy132qSntOg30kJsHWPDj4DW8mjjIDFGYQtbsxeOTnpZFZj30EW29vzgQDCBHQIOLCRg90ISOkOLgsqWvVA0pdAJ2%2F8VPXR6rACuTqCwZqhg39ZE3u8XwB0xWFQcJkm1AzNqJA0wyFFWm3JA3zn3IQGdwiSFEt0vqRxpWaDZTPFVUsyJkGL2BLvt67GDBfKXSNycQST2NjLgBgmFhwDtNYkEgGeFhptAfYHG5BHPsYJklzw29h8jufS7t%2FIxIvd5T4e3kPLVZeYNrNO9%2F28RS%2F0%2F%2BMj4SxC9ERSTsZFVeeZUkMhp3x%2BV57fnsuDDD8ubBBjqkAeexufh6iz3380PN9%2Fe%2BU%2BT54XWgj9AdoFZI50nUfgHYrZGmv4gL4y1NSj2iofvQx7OioNyRAwOWBkF2oPvoexuK35UKcpcPv2fZE6yzMhC4euhLO0%2FfRu2VraarQVvqpDRQ4pAZ0sykrVpMMCllAKpBbhBXRmUxRcdLiAhnkD5LUJzDcF%2FCtEwrxvB4zyBASEXJaqqRNdGk%2FaS7pUZw%2BWWdWZpG&X-Amz-Signature=38747d8b8d90c38726ad2cff521dbec04e9a512e3b90943b2471294d22af3123&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6Y66FLV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDt%2BAseDFF9nebQ76yCJ2tO4%2FbQ63NQL22VazXQfdzewIhAN2YCgwj15VuBrefWw4btfUphhxv1p99kmYBkG3M4fB7KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0df%2Fcf9S4Brs2lG8q3AP4RGM2v1KQVx0ZXUe3%2FFmtjJbZgjvY7nI7P4%2FpKrElb8wmrxpDQBQm1HGjkRFRYoUi0m1QA8a1iy04B6lg2UNhkjV%2FmNKYT9kV%2FFXGMCunrb2%2B8QoNFUH%2BsDVj0Apkk1c8wWRT%2Bo%2Fsz5IrQMdyAiIDPt287iIWlNuw%2BM9fNuDa3pVbvOTnkl6s6VB5ubdetfrwjhHBLgkau%2FL0TIfmNhWTLk9quD1d00H0UhgumUN%2BNFjKQtZL4uIy8pVL4movlue1kPlxe7xFUMKLRinnB7mYH2F46yumrxcCbX9B1oChd1suiwsv4P0%2FiaO4xBhbSq4Gy132qSntOg30kJsHWPDj4DW8mjjIDFGYQtbsxeOTnpZFZj30EW29vzgQDCBHQIOLCRg90ISOkOLgsqWvVA0pdAJ2%2F8VPXR6rACuTqCwZqhg39ZE3u8XwB0xWFQcJkm1AzNqJA0wyFFWm3JA3zn3IQGdwiSFEt0vqRxpWaDZTPFVUsyJkGL2BLvt67GDBfKXSNycQST2NjLgBgmFhwDtNYkEgGeFhptAfYHG5BHPsYJklzw29h8jufS7t%2FIxIvd5T4e3kPLVZeYNrNO9%2F28RS%2F0%2F%2BMj4SxC9ERSTsZFVeeZUkMhp3x%2BV57fnsuDDD8ubBBjqkAeexufh6iz3380PN9%2Fe%2BU%2BT54XWgj9AdoFZI50nUfgHYrZGmv4gL4y1NSj2iofvQx7OioNyRAwOWBkF2oPvoexuK35UKcpcPv2fZE6yzMhC4euhLO0%2FfRu2VraarQVvqpDRQ4pAZ0sykrVpMMCllAKpBbhBXRmUxRcdLiAhnkD5LUJzDcF%2FCtEwrxvB4zyBASEXJaqqRNdGk%2FaS7pUZw%2BWWdWZpG&X-Amz-Signature=0907062e470245260993cf840afc1a4b8ebe41277890cb3623329ace7d50065e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
