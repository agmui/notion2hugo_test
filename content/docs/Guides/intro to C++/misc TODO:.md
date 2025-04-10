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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FFOG6X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDHK0wPScyH3InPfw5eUd0hnqdny7%2F6ME8R97sEc%2FYJIgIhALxbgwzAfJ9IwqyU%2B8BDwQ9BmiIHzhmKexa8YYvpJbxWKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ZeDubNsMO253Ii8q3APPrfcnntLNOYGiSdaM7S3kEhbf%2FYArX%2FpUYdnvIbZZ%2B4rpxMkGJgKULrRxxGjncqXtLBnaAibjxyeq4LvWGeMgT9TyNZaQ%2FMHdp329J8%2Fu1MbEGYQltVElaNbyD50D493amboFpanTJOmWQGrpPo6oanabQfS4jxEGuzdfsfMoyaxwJBn9n%2FJusg9RplgX%2BQC%2BdOpLrHPJv3OG5ay1iYgJ8VdAO8cr5k%2FEZ5fgtOqN03uSHo5gljAdiM2aMx9v%2FjQrKiohNw85HNKnoU0DY%2B9JeCuWw9QMM5gcSFGrXEczuTwnfgnwP2ZQm31EFTmwHkzF1BEr0SfCPUpAu0UykYinotNUE6mLruoF0C12eH3ipWggFTDIimL1AGCmCw9dJ%2BGKgUeu1TT4fTuwH%2FH2x75oivJnPa%2BwP7j%2BSPocUmAEdRgWl%2BhmxfG399cXz3om4ecDPG7R0bJSGD3r3k2EKlwqnpsiGY5RL4EGznfY0T%2BhjAPq7JtV65FR515P9L3Xlyy5kyHDgnCg%2FKnR5yoinaaH0lgl7Zs%2BhhW886c1Wc1fmrCBKbX%2FvSxma8k4owLHg7U%2B4OOZI70qp0qvowrg%2BZPJucD3qFpxyv6p5Ls%2BGNjKRyGu8iGgt7wgourEUzCjkty%2FBjqkAVVjbval2f1nJG4JErKwyjylLu6omA1OBsuuoGho5Ju%2Fo7SoAD23ql0e57dym%2BnRVTgHAAgXk3bFVlFeACEe7lBOZCfQASzR7SKSGG7cGk5RX1lySYGnosPzyL%2BuUdek5ognQQtqpluxu0AB5LCruja03HHPf%2BC3vdKtGIu8ApHFtu%2FmqWsNa%2BXIhgrgSrqC0zXBQCDUn7k7iupTtnoZAE1uA0Ol&X-Amz-Signature=3f8d12561bc2a8eb1f1b1c8c8cd1e85b64bef68d84e6240efbae5c0b4bc98625&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FFOG6X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDHK0wPScyH3InPfw5eUd0hnqdny7%2F6ME8R97sEc%2FYJIgIhALxbgwzAfJ9IwqyU%2B8BDwQ9BmiIHzhmKexa8YYvpJbxWKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ZeDubNsMO253Ii8q3APPrfcnntLNOYGiSdaM7S3kEhbf%2FYArX%2FpUYdnvIbZZ%2B4rpxMkGJgKULrRxxGjncqXtLBnaAibjxyeq4LvWGeMgT9TyNZaQ%2FMHdp329J8%2Fu1MbEGYQltVElaNbyD50D493amboFpanTJOmWQGrpPo6oanabQfS4jxEGuzdfsfMoyaxwJBn9n%2FJusg9RplgX%2BQC%2BdOpLrHPJv3OG5ay1iYgJ8VdAO8cr5k%2FEZ5fgtOqN03uSHo5gljAdiM2aMx9v%2FjQrKiohNw85HNKnoU0DY%2B9JeCuWw9QMM5gcSFGrXEczuTwnfgnwP2ZQm31EFTmwHkzF1BEr0SfCPUpAu0UykYinotNUE6mLruoF0C12eH3ipWggFTDIimL1AGCmCw9dJ%2BGKgUeu1TT4fTuwH%2FH2x75oivJnPa%2BwP7j%2BSPocUmAEdRgWl%2BhmxfG399cXz3om4ecDPG7R0bJSGD3r3k2EKlwqnpsiGY5RL4EGznfY0T%2BhjAPq7JtV65FR515P9L3Xlyy5kyHDgnCg%2FKnR5yoinaaH0lgl7Zs%2BhhW886c1Wc1fmrCBKbX%2FvSxma8k4owLHg7U%2B4OOZI70qp0qvowrg%2BZPJucD3qFpxyv6p5Ls%2BGNjKRyGu8iGgt7wgourEUzCjkty%2FBjqkAVVjbval2f1nJG4JErKwyjylLu6omA1OBsuuoGho5Ju%2Fo7SoAD23ql0e57dym%2BnRVTgHAAgXk3bFVlFeACEe7lBOZCfQASzR7SKSGG7cGk5RX1lySYGnosPzyL%2BuUdek5ognQQtqpluxu0AB5LCruja03HHPf%2BC3vdKtGIu8ApHFtu%2FmqWsNa%2BXIhgrgSrqC0zXBQCDUn7k7iupTtnoZAE1uA0Ol&X-Amz-Signature=74935c6fec83b75b9c4f13e6787bb2553ded2f7c6de0842acfba7d706ca0a4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
