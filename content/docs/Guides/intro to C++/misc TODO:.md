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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3J4H67J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjsG%2FQu6qbKuOYmZhQJ0wBe9VyNT7%2FRu6YJvxSDhU3qAiAsXXew83hT%2BffRWmsJtjlFGDN2cuPODsttiBhlZ2%2FR4iqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfSYbPfNf%2Bnq2rvOIKtwD4432Oewa3c%2Fuwg3XUFyHuAGC0LJYydpRsI0M6LtnjMw%2F2brYMgksHMV8hP6D28qabxQS1VCR2fmG6QG8SCVi3L8l5xWUZc0FFJZ%2BDmq09a%2Btqe0oRGRuscCATo%2FB%2BcEtx5f8WR0b54ZBXqL3KEQUgIZrKOLrzWygRuRC6I6pUw%2B%2FUWYZoP1Ut2%2F2zODcy0iUkZFM2I0Ev7%2F83OPDn8PjnDpfDKPN%2BoiYdDkYah95cp2PXWW8dBgglo1plLQRLtjKK6%2BUtgQ99sVLm72ZfHpNYPo63KVsJG3mFcGDAeDK9NXGl90e6uzesKH2fkxGD2f%2Bw9COXKd5xAZ2gta3t93qvNtf2A%2BsOJUGkxlodsqyIJqQQeEmuBRZoulnQzFa7BmMU18q3WpjE7ALdAga5MSPYEfuXSxLt3x03fcVhTfc%2BCvFzmD7fHhF8nBDlwGJ5114LTFBKeSfmC3OKflKBPSS%2BKv0oU%2Bt%2F%2BoAzzrgkELgwRIy6yqzvWiAJJXOtDRCImAgtjBcMb6kxn67ptuCYLT4%2BkCESICEuBARyCX%2BLDsHp%2BUs6%2Fk15dFI1K8SngDa3A8gqiT7M4f6xmFqSjVKgJWuabYwg8AKA%2FMMrvfnKvTrUFGsvJn5u0Q5e3jERwEw87yWwwY6pgHZwi8y%2FLtz3EYbBGBj%2BjdwEcAStNaG0kuOY%2FfBfKrej25xGI1ivj1k%2BYC2JiaJU1hueTxHXCDanqVG4GISyeKMIvP9wAWjFv1lUpDuJXY71QKKQDHZRR3thhOQpoEl%2BRdp%2FvhotG8sj0o7vXx%2BIavAu5hOiIUgY9krLbYKARO6yBCnt8sC2FKJSrNdOGxqeX9TH8e6pOF8r7wffLR8kDHkwXVeQMVs&X-Amz-Signature=764b995f3775aba759947a4cddcc6e45f84cb900d0b5f3ae4275aa606bc24ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3J4H67J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjsG%2FQu6qbKuOYmZhQJ0wBe9VyNT7%2FRu6YJvxSDhU3qAiAsXXew83hT%2BffRWmsJtjlFGDN2cuPODsttiBhlZ2%2FR4iqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfSYbPfNf%2Bnq2rvOIKtwD4432Oewa3c%2Fuwg3XUFyHuAGC0LJYydpRsI0M6LtnjMw%2F2brYMgksHMV8hP6D28qabxQS1VCR2fmG6QG8SCVi3L8l5xWUZc0FFJZ%2BDmq09a%2Btqe0oRGRuscCATo%2FB%2BcEtx5f8WR0b54ZBXqL3KEQUgIZrKOLrzWygRuRC6I6pUw%2B%2FUWYZoP1Ut2%2F2zODcy0iUkZFM2I0Ev7%2F83OPDn8PjnDpfDKPN%2BoiYdDkYah95cp2PXWW8dBgglo1plLQRLtjKK6%2BUtgQ99sVLm72ZfHpNYPo63KVsJG3mFcGDAeDK9NXGl90e6uzesKH2fkxGD2f%2Bw9COXKd5xAZ2gta3t93qvNtf2A%2BsOJUGkxlodsqyIJqQQeEmuBRZoulnQzFa7BmMU18q3WpjE7ALdAga5MSPYEfuXSxLt3x03fcVhTfc%2BCvFzmD7fHhF8nBDlwGJ5114LTFBKeSfmC3OKflKBPSS%2BKv0oU%2Bt%2F%2BoAzzrgkELgwRIy6yqzvWiAJJXOtDRCImAgtjBcMb6kxn67ptuCYLT4%2BkCESICEuBARyCX%2BLDsHp%2BUs6%2Fk15dFI1K8SngDa3A8gqiT7M4f6xmFqSjVKgJWuabYwg8AKA%2FMMrvfnKvTrUFGsvJn5u0Q5e3jERwEw87yWwwY6pgHZwi8y%2FLtz3EYbBGBj%2BjdwEcAStNaG0kuOY%2FfBfKrej25xGI1ivj1k%2BYC2JiaJU1hueTxHXCDanqVG4GISyeKMIvP9wAWjFv1lUpDuJXY71QKKQDHZRR3thhOQpoEl%2BRdp%2FvhotG8sj0o7vXx%2BIavAu5hOiIUgY9krLbYKARO6yBCnt8sC2FKJSrNdOGxqeX9TH8e6pOF8r7wffLR8kDHkwXVeQMVs&X-Amz-Signature=f13fb7388cc30fc30980a618eaf0b49f64ed8c55ba94763beed2a736a1dab344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
