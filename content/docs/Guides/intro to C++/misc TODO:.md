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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHCKE2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEbKnkCLbAgLu1L7VfBN%2BRWqrWTR3%2BREjNfe2IMXT77sAiABq8La%2BNeOd%2BRBjnBGV9zM5iSgTw%2FzKdOMBaBNFid9IyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLJIbapqwfTCPRTFSKtwDfI48%2BbUx2h1UQCBXsUCLhRsCWqZ89OKCYOhFGKB%2Bt%2BIY6hs8%2BGpXjDHrc9yRW%2FS8oA356mr7RaUMePSBVm8InrNRkmg09KWWbFppMT0%2BWNn9rYSdVWr80RpO8va0zyPLbZ3JiOzdCyYZTIYkPo3CfBHpLN53NaAjWfwDIPiPT%2BDLG0LEPXKPBWJ1UWj5Beo1ZXqY0sZ8pyJjKDVsmvezDeoCz70K3w4jUs8ODQ0fGD6g36y4%2Fb%2B62O8giueCqi4bACml%2BlFvnbfVjuHHYmwz6J0QDhRope43sY1ID0LSxW7FzTmdqN%2FjbnnIFNlZTG%2BynBeXjvMP8MZjk9nXcGGMkyDS78Onlvoj2E0Q9qgNk%2BXvwsrLMpKgVgMrsJyP%2B%2FtrD9Vz39jliS6VUxJoJ0ElLy7DyYPzuYCAC5ckR4aVY5CNhdbXqMb5tnjikwPxYC7SQf9mjStVrHulwdFCl2JD4r38U1EfjXeKpIKlHA0wefw%2FM9IWiUiM0yWU5NbqhMK3dH8PToAtCK1VlPz4AwN5W%2BSVNyxAy4ZtuNOw15gyYZ51IeuCuIyj1j0QZ1qpiBXHybrW%2BQH%2BBVMYEgLNewwnShKyot83SM57RQT%2BaRACWwUNnDbqveGU%2FliSed8w0aGkwAY6pgEaLnIA0ApXsMsbzkiXEktGK0xygSWx%2B8qV%2B5zoVXP8g5Rfiu96KEqmwItj%2FJh5UDlrQwPLTYl8MPUwXfF0raLUSSjmpV3B6Afs1w6RAbRenFUgTHBJKwzppTmjHQRL7UFgaheJsiRfR2221hcaHRF5HGphKBA4%2FKh%2B9%2FCEZ658Tokazd7R98u9R0m1ugpWWZuyxGzqn93zu2whId5Cba9UTeHwaHZS&X-Amz-Signature=a3f87ed0daab14c3870cf3ebb65ef950ec49bcfa50d7acebde34e27724e4d685&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHCKE2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEbKnkCLbAgLu1L7VfBN%2BRWqrWTR3%2BREjNfe2IMXT77sAiABq8La%2BNeOd%2BRBjnBGV9zM5iSgTw%2FzKdOMBaBNFid9IyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLJIbapqwfTCPRTFSKtwDfI48%2BbUx2h1UQCBXsUCLhRsCWqZ89OKCYOhFGKB%2Bt%2BIY6hs8%2BGpXjDHrc9yRW%2FS8oA356mr7RaUMePSBVm8InrNRkmg09KWWbFppMT0%2BWNn9rYSdVWr80RpO8va0zyPLbZ3JiOzdCyYZTIYkPo3CfBHpLN53NaAjWfwDIPiPT%2BDLG0LEPXKPBWJ1UWj5Beo1ZXqY0sZ8pyJjKDVsmvezDeoCz70K3w4jUs8ODQ0fGD6g36y4%2Fb%2B62O8giueCqi4bACml%2BlFvnbfVjuHHYmwz6J0QDhRope43sY1ID0LSxW7FzTmdqN%2FjbnnIFNlZTG%2BynBeXjvMP8MZjk9nXcGGMkyDS78Onlvoj2E0Q9qgNk%2BXvwsrLMpKgVgMrsJyP%2B%2FtrD9Vz39jliS6VUxJoJ0ElLy7DyYPzuYCAC5ckR4aVY5CNhdbXqMb5tnjikwPxYC7SQf9mjStVrHulwdFCl2JD4r38U1EfjXeKpIKlHA0wefw%2FM9IWiUiM0yWU5NbqhMK3dH8PToAtCK1VlPz4AwN5W%2BSVNyxAy4ZtuNOw15gyYZ51IeuCuIyj1j0QZ1qpiBXHybrW%2BQH%2BBVMYEgLNewwnShKyot83SM57RQT%2BaRACWwUNnDbqveGU%2FliSed8w0aGkwAY6pgEaLnIA0ApXsMsbzkiXEktGK0xygSWx%2B8qV%2B5zoVXP8g5Rfiu96KEqmwItj%2FJh5UDlrQwPLTYl8MPUwXfF0raLUSSjmpV3B6Afs1w6RAbRenFUgTHBJKwzppTmjHQRL7UFgaheJsiRfR2221hcaHRF5HGphKBA4%2FKh%2B9%2FCEZ658Tokazd7R98u9R0m1ugpWWZuyxGzqn93zu2whId5Cba9UTeHwaHZS&X-Amz-Signature=52e2bcf1cee04c05fa15ba83bdc6b249d33a583881f5a2de63630b1c1209ad8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
