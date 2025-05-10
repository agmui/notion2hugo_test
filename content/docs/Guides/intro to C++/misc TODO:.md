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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4YUESN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6mG6Yw2CdKclFrOlvagaI2JKywVwjujVEOxmqVHWsSAiBBKdUp6A18e7v9oprsAFUckhocCQbzxIxQ1EzTCalZkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEtmjsaFJ%2BJx3IcVVKtwDS9d1C%2BLGJ4qstTtLUdZefqjeOT4oEZq8WXQA3VvZUeTyA7zmOlMChgPreSYgS8wUjXIKKMrgotm%2BJWMydbeEQwrsA6AfhpwEz%2FO%2BTV3XGu7adasYeI4DhAg4F%2FDVwnovAngLBdBAJFqdlKYVtEnW1Gpqz33GuJX%2BGv%2FYog7uOBSFqQdxVbnMbOVLAPgCJpszpbD5cv7IgkQCbvE4NcSOs%2FX55T%2BtCz%2Bni039fMuUoGWl4AvhnrA55L5g9e29vRcdoWsgfuwD6Wso0vIsuTuiWiiGFfqlnzY2wkgwmglTT1rKhpxoRjnERjLbu0wJCp8ILH9NhkmxXnP7se4yvoZ4i5sUhxyTf%2FlLuDuk7Kkf%2BsUbHXHncWkPY1K1Xt1zGXMOZvL3uUV8Bd40JD%2BLvK6FXwrDiA7NveIi5aiKQXisHyjKmEUskczveAQ%2FLcNYHK9gTXOrrCtFVRMHStRewb%2FgvWMbnrKsxLAo%2BIn2iI%2BIpHkQqguR3RI4sr6RNSMtjLbslIPmEr9nws8YB01oB6YeJZB8Yn3UJ7RJFPkknAWI1RI6f%2Bm9gkP8xou28B5OBk6gFHifkiWDLoFFDArUCMBdOsbrdLlg%2BZiXXB%2FJct%2B0dmLCBHfZI9dRM5AsRlwwgqH7wAY6pgG30Q3U28SAr2A7lnK73VHEMPRM%2BpG0o%2FXphJjo9aEFP1JBJ1tQznfyn3NJhSyO%2B5PE2uAljGSqBX6c%2BpUbRAcVOj6frx1QL2Z3N0uFgj%2B%2BK3ugEE0DKY%2FgmKXM1edKiCBydkH1VIR8ZQvjPrAIBQR3bdBNKDG%2BiFfaYSCQeWHFpGWlg3v3SaGNb%2BeSgoZHpt2egDHcOGyfvAAyU%2FATKNgIsurmonTK&X-Amz-Signature=239ae34cbe12a4beaf0fa25d233b572298f39dfcc45f3416e1ce552fbe871a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4YUESN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6mG6Yw2CdKclFrOlvagaI2JKywVwjujVEOxmqVHWsSAiBBKdUp6A18e7v9oprsAFUckhocCQbzxIxQ1EzTCalZkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEtmjsaFJ%2BJx3IcVVKtwDS9d1C%2BLGJ4qstTtLUdZefqjeOT4oEZq8WXQA3VvZUeTyA7zmOlMChgPreSYgS8wUjXIKKMrgotm%2BJWMydbeEQwrsA6AfhpwEz%2FO%2BTV3XGu7adasYeI4DhAg4F%2FDVwnovAngLBdBAJFqdlKYVtEnW1Gpqz33GuJX%2BGv%2FYog7uOBSFqQdxVbnMbOVLAPgCJpszpbD5cv7IgkQCbvE4NcSOs%2FX55T%2BtCz%2Bni039fMuUoGWl4AvhnrA55L5g9e29vRcdoWsgfuwD6Wso0vIsuTuiWiiGFfqlnzY2wkgwmglTT1rKhpxoRjnERjLbu0wJCp8ILH9NhkmxXnP7se4yvoZ4i5sUhxyTf%2FlLuDuk7Kkf%2BsUbHXHncWkPY1K1Xt1zGXMOZvL3uUV8Bd40JD%2BLvK6FXwrDiA7NveIi5aiKQXisHyjKmEUskczveAQ%2FLcNYHK9gTXOrrCtFVRMHStRewb%2FgvWMbnrKsxLAo%2BIn2iI%2BIpHkQqguR3RI4sr6RNSMtjLbslIPmEr9nws8YB01oB6YeJZB8Yn3UJ7RJFPkknAWI1RI6f%2Bm9gkP8xou28B5OBk6gFHifkiWDLoFFDArUCMBdOsbrdLlg%2BZiXXB%2FJct%2B0dmLCBHfZI9dRM5AsRlwwgqH7wAY6pgG30Q3U28SAr2A7lnK73VHEMPRM%2BpG0o%2FXphJjo9aEFP1JBJ1tQznfyn3NJhSyO%2B5PE2uAljGSqBX6c%2BpUbRAcVOj6frx1QL2Z3N0uFgj%2B%2BK3ugEE0DKY%2FgmKXM1edKiCBydkH1VIR8ZQvjPrAIBQR3bdBNKDG%2BiFfaYSCQeWHFpGWlg3v3SaGNb%2BeSgoZHpt2egDHcOGyfvAAyU%2FATKNgIsurmonTK&X-Amz-Signature=855496416a8facca9a4b0ec8ee8a335aa170e9495eb884301064728651dc5914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
