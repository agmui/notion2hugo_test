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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAJH64NM%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDdpILFFEcN7Stl98YQGBOW7M8fFmBBLMGy9xSGNxfxGwIgB%2FDSiZn6WEaBtztaek5Vc9UiOZcxiZ%2BVpegZJan0%2FVsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOCJC%2BDI%2FpRVdiRUZircAzwhZ0gbo70niSDr4rjJ2kpGXfDDPSqaQ6hMiVx6EpAl3hTCbK5ehGvNu3zuX%2B%2Fl%2BgAWtAGlwz1pZdLT0oFhNRm5cqIR0rvsvmKa8Toj%2BA5MCaiP2vpFR8un44bXuxEY%2BiOIoHxsB6to9LdWkeqJ5jtqmtruE%2FpEux%2Bdi1ujQh1YG35dWmacB5FiqYO6rdvE6M0p0yWWYO44in%2Fkt7QYe9v1jl7tx9cjp%2F6UaYDTFvXrotx5aAWeidP5jdLTU1ZeyNyG8pYUoXczJ3KuXV19WiToxkinS576TLJzQXqJJvoYEVegmgP1TJWlA4RQZStHUob%2Fse6ywXlD5U4wZJeZuXkuTv%2BJQCSwYdMDcXHDwjQmlYU0dAPqvODPw%2FsBSgMAyGAh98xA%2BtLhFkMrm14g9mduPGfRALZVZcyUsGV62gAG7Z7DCJmLiMvlvi2xbL8aAkzNphMoj4Ue25xJgKqdY57X4IoDtMjFTD5KOri5UTLgREru8MPnWz3P4vNGotLVG1UeCoki6%2FeUpCM5eWOMiOmVcDGBgLsgjlTIOYU2BFO0p9n1y9vBhNhQK2hgiSp3bMgCtivjNYlC7cIYaNVM2TbqysMUZrjD%2Bl%2B9BNsQyMVhRgTbVAd%2FwRZeEL7UMK37stEGOqUB%2BZfCRJMygglFGqIYA2DqHWutAXfN6dFA4Lsl2TN3kX%2FK0iTMK%2BWemEUVF3%2B6w%2FbFNi719bSvRno3oje8Aw6vAqbyWOjbSem55kqyPTLlJUkOtguBpDlnCE9r4ay95z0R1fHayIzbZFCDhoCfRUmckN%2B3ey8bEAuTaMKoO8vG1ck7JbrqADNVi2SREW3ViE5dRMmyumZc%2BSm7UogIQl%2BFkp8OtGSo&X-Amz-Signature=591ddbe18ad16aa3e36b50a365b09d4ccd89f38e9893b0ffe4263a1e392b6a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAJH64NM%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDdpILFFEcN7Stl98YQGBOW7M8fFmBBLMGy9xSGNxfxGwIgB%2FDSiZn6WEaBtztaek5Vc9UiOZcxiZ%2BVpegZJan0%2FVsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOCJC%2BDI%2FpRVdiRUZircAzwhZ0gbo70niSDr4rjJ2kpGXfDDPSqaQ6hMiVx6EpAl3hTCbK5ehGvNu3zuX%2B%2Fl%2BgAWtAGlwz1pZdLT0oFhNRm5cqIR0rvsvmKa8Toj%2BA5MCaiP2vpFR8un44bXuxEY%2BiOIoHxsB6to9LdWkeqJ5jtqmtruE%2FpEux%2Bdi1ujQh1YG35dWmacB5FiqYO6rdvE6M0p0yWWYO44in%2Fkt7QYe9v1jl7tx9cjp%2F6UaYDTFvXrotx5aAWeidP5jdLTU1ZeyNyG8pYUoXczJ3KuXV19WiToxkinS576TLJzQXqJJvoYEVegmgP1TJWlA4RQZStHUob%2Fse6ywXlD5U4wZJeZuXkuTv%2BJQCSwYdMDcXHDwjQmlYU0dAPqvODPw%2FsBSgMAyGAh98xA%2BtLhFkMrm14g9mduPGfRALZVZcyUsGV62gAG7Z7DCJmLiMvlvi2xbL8aAkzNphMoj4Ue25xJgKqdY57X4IoDtMjFTD5KOri5UTLgREru8MPnWz3P4vNGotLVG1UeCoki6%2FeUpCM5eWOMiOmVcDGBgLsgjlTIOYU2BFO0p9n1y9vBhNhQK2hgiSp3bMgCtivjNYlC7cIYaNVM2TbqysMUZrjD%2Bl%2B9BNsQyMVhRgTbVAd%2FwRZeEL7UMK37stEGOqUB%2BZfCRJMygglFGqIYA2DqHWutAXfN6dFA4Lsl2TN3kX%2FK0iTMK%2BWemEUVF3%2B6w%2FbFNi719bSvRno3oje8Aw6vAqbyWOjbSem55kqyPTLlJUkOtguBpDlnCE9r4ay95z0R1fHayIzbZFCDhoCfRUmckN%2B3ey8bEAuTaMKoO8vG1ck7JbrqADNVi2SREW3ViE5dRMmyumZc%2BSm7UogIQl%2BFkp8OtGSo&X-Amz-Signature=dfb44415d3f298a6e49529026a43003e13ed9f152f263384461525a4b7db1ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
