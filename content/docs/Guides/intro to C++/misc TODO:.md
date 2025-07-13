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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53YKIOQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHXvmSyTQIRR5GFVGvn4l9j6ziKvejXKB9aq1UTXGVcuAiB3D3jRXlHxQtAOs%2Fm6zhG%2FwMXzDGua5LeVSKYue%2BBxbyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8%2Bh51ZoXM%2FXIIJ4VKtwDcMa7lGsHmvkJIzeiP5iVlrVfEkUcbihebCKR%2BdWZc8BGD9nhPZEeZpuhS8XYpZAkBrfXVehJNwy%2FtVoz%2FJjYtgRK25IQ9xM5%2B13kV0EBVNky15pAATG7Q9SndV13oFExAaIFSjd05oI7Bsm5D1K02YgMUloXIEcQ8s%2Bx7sSRjarDJuAMTr5ze9SdshGXzJiWqnat0sS%2FgzAU1loCfp%2FU2oLJmsk%2FwRi2on9GT7AUuUNQInOacff0YLJ%2BtmFI9laWpUqAe%2Fe6Q4nVry0%2BgtBE3FpnZTZ4%2Blx8wB7%2BgEQOlGZl5F%2FCHJmOdjJmBrsvh%2FmWoHgfEbt%2FbB%2BeplrSv8%2BbxdR7HZH4nmOg0wDyQ3tfkQ6GnCdx8APrsHa1ybdRm39ZbdDVi0ZIFILb1bpFPLt0uymr6o%2BOOnstN%2Bjo2AiKD6nfQHP8RLIlNdq%2FjX%2BKooEyZliWJFR1cnYHJYd53ANNsmN1vm%2BARaY%2FUwSsaYT2K1z2sEuVjU06iOPOz%2F1GM1mDXV2KkM9uxdESJ15VRuHV0UP0%2FPxXNr%2F1bJECythabjvpNqUdxRvRlzPzZS00wDipjCP19Pmui8eTBZK%2BNwMQ%2Bh48i134bAboSnOael9up4znxytiHQjMRx5a6Okwu%2BbPwwY6pgETyT7G6dN8tXb2gvYWLaOqZQjPdTduNPu%2FPf4DikbGIDmxkLGEwvalj7F7RD%2B5NRzdx1kcfJdPYrJyzZLjOmBCIj3j7LnE5XpBFUm%2FqSA2%2F%2FVzFEgekpYsX0aZt625SbAih5dWUYLTzSr3eVqrgDNHZQEpvcGK21CbaAQpg0RShttY3PaOMp384T61MwJ6V1wFB7qYXcpJQlg%2BzFJC7y%2BTLEUQHbyX&X-Amz-Signature=a39c593ca7f06f9f9e463ad7da474bbb5307bf01461bf9dfb532dd95fbf89d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53YKIOQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHXvmSyTQIRR5GFVGvn4l9j6ziKvejXKB9aq1UTXGVcuAiB3D3jRXlHxQtAOs%2Fm6zhG%2FwMXzDGua5LeVSKYue%2BBxbyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8%2Bh51ZoXM%2FXIIJ4VKtwDcMa7lGsHmvkJIzeiP5iVlrVfEkUcbihebCKR%2BdWZc8BGD9nhPZEeZpuhS8XYpZAkBrfXVehJNwy%2FtVoz%2FJjYtgRK25IQ9xM5%2B13kV0EBVNky15pAATG7Q9SndV13oFExAaIFSjd05oI7Bsm5D1K02YgMUloXIEcQ8s%2Bx7sSRjarDJuAMTr5ze9SdshGXzJiWqnat0sS%2FgzAU1loCfp%2FU2oLJmsk%2FwRi2on9GT7AUuUNQInOacff0YLJ%2BtmFI9laWpUqAe%2Fe6Q4nVry0%2BgtBE3FpnZTZ4%2Blx8wB7%2BgEQOlGZl5F%2FCHJmOdjJmBrsvh%2FmWoHgfEbt%2FbB%2BeplrSv8%2BbxdR7HZH4nmOg0wDyQ3tfkQ6GnCdx8APrsHa1ybdRm39ZbdDVi0ZIFILb1bpFPLt0uymr6o%2BOOnstN%2Bjo2AiKD6nfQHP8RLIlNdq%2FjX%2BKooEyZliWJFR1cnYHJYd53ANNsmN1vm%2BARaY%2FUwSsaYT2K1z2sEuVjU06iOPOz%2F1GM1mDXV2KkM9uxdESJ15VRuHV0UP0%2FPxXNr%2F1bJECythabjvpNqUdxRvRlzPzZS00wDipjCP19Pmui8eTBZK%2BNwMQ%2Bh48i134bAboSnOael9up4znxytiHQjMRx5a6Okwu%2BbPwwY6pgETyT7G6dN8tXb2gvYWLaOqZQjPdTduNPu%2FPf4DikbGIDmxkLGEwvalj7F7RD%2B5NRzdx1kcfJdPYrJyzZLjOmBCIj3j7LnE5XpBFUm%2FqSA2%2F%2FVzFEgekpYsX0aZt625SbAih5dWUYLTzSr3eVqrgDNHZQEpvcGK21CbaAQpg0RShttY3PaOMp384T61MwJ6V1wFB7qYXcpJQlg%2BzFJC7y%2BTLEUQHbyX&X-Amz-Signature=a92241f74ea3268ad4b36b2bddb3f0d1faaac54b909b893b1881584e46a2f599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
