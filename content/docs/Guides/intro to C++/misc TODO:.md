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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2ZZSPI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGQHMKLpxl3py9WVmEBuNt7Ph52ORbJ5Qyv9ArXiSSjaAiAZL7re8fN3%2FUyTqv3CtsA7sA0MBk%2F4Ig5Vl0pzr1PUFCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMU0QLt46LArRFo4wnKtwDzhGu3tFeX9JP7MdBrehtyudkkNbBomh7gLh%2Fh367k99N2yueITX39o%2Fsk%2BPUtlSIIxA6xYWBJ0ClXWc7QZK0JD%2BVBKAZvkvnq1YdDWXEIo%2FgLTnSvpLeM71sTTkWqOxytNXp1A1RmsLNWGDWLz1RWxdFjuBxxsUrOjT3qleqZaGLkN0vb5As47E1OgNJsFDdFm4WcMQEf8Ct3EWInQMiIKmbBltWTwtDd2EoKvEPg8EMDYI4ZyxslXETgXbzSraTzh91LaO3W%2FHNlHTTDz06zbSCRxFIjZVgCGc4tBTsP%2Fmd1OYYIA0nRBkrcFOmeFzT7yHBwT355K7OWsWZyNJhPrr7Ldz%2FjDrhx69K%2FewOxgOSxlrndSE0WEfNpMm2G8M6JzyxvnyqSmkV47E3jyMjZJT8BaXwM%2B6vKXXVJXV3EPLu0g2H3h6sCDOlHk%2BI%2BzxUN8PSDU2HUTwn6xypO7OigJkmnJqfnv9xw%2BltiNM%2F%2BS9hDQzVSvUUCUXCH10DeFeoS6s4zj%2Bce2%2F7%2FAMAmXqP%2BNeSbkQ2ARO1NU9CT7AD6cS04lDEq6BdNfCBF0BehBWdrZ0FmcaYE9q72BKWX77%2FITj94jFdizb5R68%2BmZht3fDhOnBMKykkXjyHovgw8MnkwgY6pgF6yVq6dvnN0cOLoAxmtOoPgAbGmtfPmiwrrJTIYqkMyhaVgV6ByE3slqD0OMUpp4yrP3MNP49MD5DbjIf8iC%2FlFFVgGlca8wkFeigyIgHxIkNwjEGf%2FEHiYhZYuwAl9sNhihx4ak8fT0e6bhfGbR3lmMU46tStOy0f46FspX0yQ3UvLSe9HLUGfaw8tOMtXt7NOvi6Wwkz6gJDVSDJxfF2wc0BlKq0&X-Amz-Signature=39681c0a30f276b4f08084886e485af7d15398fcd9fb7351d9bb296386b5aa14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2ZZSPI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGQHMKLpxl3py9WVmEBuNt7Ph52ORbJ5Qyv9ArXiSSjaAiAZL7re8fN3%2FUyTqv3CtsA7sA0MBk%2F4Ig5Vl0pzr1PUFCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMU0QLt46LArRFo4wnKtwDzhGu3tFeX9JP7MdBrehtyudkkNbBomh7gLh%2Fh367k99N2yueITX39o%2Fsk%2BPUtlSIIxA6xYWBJ0ClXWc7QZK0JD%2BVBKAZvkvnq1YdDWXEIo%2FgLTnSvpLeM71sTTkWqOxytNXp1A1RmsLNWGDWLz1RWxdFjuBxxsUrOjT3qleqZaGLkN0vb5As47E1OgNJsFDdFm4WcMQEf8Ct3EWInQMiIKmbBltWTwtDd2EoKvEPg8EMDYI4ZyxslXETgXbzSraTzh91LaO3W%2FHNlHTTDz06zbSCRxFIjZVgCGc4tBTsP%2Fmd1OYYIA0nRBkrcFOmeFzT7yHBwT355K7OWsWZyNJhPrr7Ldz%2FjDrhx69K%2FewOxgOSxlrndSE0WEfNpMm2G8M6JzyxvnyqSmkV47E3jyMjZJT8BaXwM%2B6vKXXVJXV3EPLu0g2H3h6sCDOlHk%2BI%2BzxUN8PSDU2HUTwn6xypO7OigJkmnJqfnv9xw%2BltiNM%2F%2BS9hDQzVSvUUCUXCH10DeFeoS6s4zj%2Bce2%2F7%2FAMAmXqP%2BNeSbkQ2ARO1NU9CT7AD6cS04lDEq6BdNfCBF0BehBWdrZ0FmcaYE9q72BKWX77%2FITj94jFdizb5R68%2BmZht3fDhOnBMKykkXjyHovgw8MnkwgY6pgF6yVq6dvnN0cOLoAxmtOoPgAbGmtfPmiwrrJTIYqkMyhaVgV6ByE3slqD0OMUpp4yrP3MNP49MD5DbjIf8iC%2FlFFVgGlca8wkFeigyIgHxIkNwjEGf%2FEHiYhZYuwAl9sNhihx4ak8fT0e6bhfGbR3lmMU46tStOy0f46FspX0yQ3UvLSe9HLUGfaw8tOMtXt7NOvi6Wwkz6gJDVSDJxfF2wc0BlKq0&X-Amz-Signature=c37c62899df9a44a1058735581daf78c929cc25abd8610200f25de9659ae8a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
