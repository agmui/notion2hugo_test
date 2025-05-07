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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW6C33W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BQtlcpB6I%2Fk%2F8pLr%2FOvxr0WqSVx7KSv3bDzkihd%2FjbAiArINWaCpXTTe4yl4B%2BmzifCqVIuAJvUFhH%2BsXnPg%2FpuCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrzJBeGhf3tPIrccDKtwDFk4ctlnaM9BcpqB2EqZm0QQNlF%2FikjPTJq9%2FYFjvdC4a0M1xOoZoPHWOIePOk29YtfqRDpYRaBFmtV5cvFD3xv6lXOQJ5JKsH9fAfbPwFNuIc2k59GdHj%2FC1svzYxxGe0tlCWdgyxLbF7TSL27Dvvt%2Fn64faO5HocZi9d%2Fu%2BEdJx%2BPeGvqjYa7ZyADKhAWEWJ9Yz7JWrotpsFVQz7WqifyZqlDD5aCbeb24EbZDkTJs3uOe%2BLtyFew1ZITdDWyroYfE%2BTrBca6XPp9fPsbTNRApyB7%2F%2FTjKaBJ6FQTWAkJ2TLUIR01jID2uHGXaJNHmaGyNdgl%2BQlip5alKtpVjSNLs6meoajgyT0n6nw9kNMfF0%2Bg7r7OwXB3vXknANvUNphPS4L0zPj%2Bp260tK0vczBw2yDgsJJyp6oLUQufL13qLi9mZq5JlN6FtICmdQJ6EMROXfM%2BTj0ptRcnKTHOYF6o04Bwh3Zc6j%2Fg5SuC2ep%2FZbnDJaMF6J8J8nL6Z6msV0y4mGIY%2BHaMwFf9g320jZYb4N2J3%2BRRqyImGP26wa4ch8w7dHofthWXVZM%2BFDWFKB%2Flp1phd43WZMr0pH22qisZd7DUUzjWZIu9MxsgQ1Eoh1Vm1OTTWZFIdUL1cwirPtwAY6pgGuDhYLy2WnxLPdusi%2Bh3ug0pTfgQrjj%2FmroCBk4cyHhsIK38JKaas71%2F616ee4jqyd0tWMg7Yl3l6iM1JuOnTz9Kd3R8v%2B7F0l%2BcYnXkaYBWoDf5fFz50k%2BgziLZo9R8S%2F08xNRIjUAf6jhSzCgaz%2F2V2FkGOGze2IV3fYCH0yYCwqj8AHFeP%2BZRYgMnGhi6A6nHMCbMxTyoIArtxYpc1wsjTTVh0j&X-Amz-Signature=84d55f26590234bc74a5a31cab6ff629d6e91fe32f7f79199d00f0dd80c0701f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW6C33W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BQtlcpB6I%2Fk%2F8pLr%2FOvxr0WqSVx7KSv3bDzkihd%2FjbAiArINWaCpXTTe4yl4B%2BmzifCqVIuAJvUFhH%2BsXnPg%2FpuCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrzJBeGhf3tPIrccDKtwDFk4ctlnaM9BcpqB2EqZm0QQNlF%2FikjPTJq9%2FYFjvdC4a0M1xOoZoPHWOIePOk29YtfqRDpYRaBFmtV5cvFD3xv6lXOQJ5JKsH9fAfbPwFNuIc2k59GdHj%2FC1svzYxxGe0tlCWdgyxLbF7TSL27Dvvt%2Fn64faO5HocZi9d%2Fu%2BEdJx%2BPeGvqjYa7ZyADKhAWEWJ9Yz7JWrotpsFVQz7WqifyZqlDD5aCbeb24EbZDkTJs3uOe%2BLtyFew1ZITdDWyroYfE%2BTrBca6XPp9fPsbTNRApyB7%2F%2FTjKaBJ6FQTWAkJ2TLUIR01jID2uHGXaJNHmaGyNdgl%2BQlip5alKtpVjSNLs6meoajgyT0n6nw9kNMfF0%2Bg7r7OwXB3vXknANvUNphPS4L0zPj%2Bp260tK0vczBw2yDgsJJyp6oLUQufL13qLi9mZq5JlN6FtICmdQJ6EMROXfM%2BTj0ptRcnKTHOYF6o04Bwh3Zc6j%2Fg5SuC2ep%2FZbnDJaMF6J8J8nL6Z6msV0y4mGIY%2BHaMwFf9g320jZYb4N2J3%2BRRqyImGP26wa4ch8w7dHofthWXVZM%2BFDWFKB%2Flp1phd43WZMr0pH22qisZd7DUUzjWZIu9MxsgQ1Eoh1Vm1OTTWZFIdUL1cwirPtwAY6pgGuDhYLy2WnxLPdusi%2Bh3ug0pTfgQrjj%2FmroCBk4cyHhsIK38JKaas71%2F616ee4jqyd0tWMg7Yl3l6iM1JuOnTz9Kd3R8v%2B7F0l%2BcYnXkaYBWoDf5fFz50k%2BgziLZo9R8S%2F08xNRIjUAf6jhSzCgaz%2F2V2FkGOGze2IV3fYCH0yYCwqj8AHFeP%2BZRYgMnGhi6A6nHMCbMxTyoIArtxYpc1wsjTTVh0j&X-Amz-Signature=2fb8acfa616deff67be27483ace385965c3812b52418ff0b83d0d5e46ae8564f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
