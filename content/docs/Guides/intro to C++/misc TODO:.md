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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDSCFK3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvc9Fi%2FbvZgpQGYlMThS4%2Bbw9n%2BF7gf5V9MYNcW2WpTAiB0yG18%2FPJyjEt2oReYdhPYFAElO%2FaNOrwBh6T40Jptsir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMXzDwxMkRZw48M7TFKtwDnOLc59Fu5XDtj9ZtpGiTTnEJOCvffDtbnqP6ACml3nUnfoIQCn2pOLQb0lcehEx4gDGBv2ipO0uDfrIBf9%2Fv04Oh1A1FTmPVC1XoR9HTiCxjx96sH8yBz91hCLE8Y32kGcR66Xoba4wr0cparxAZW7qlnGPDMbRrldtKv4aVIJ1cvT8YGakjnO6XOx8DffMrC5qw%2BJy7pkqvpeBA5FZe%2F%2BnEaRX2LzVLxOLZJFFZ2nWp96j8OwYpHE1DKCbaLN8rmZZwx3lTHSsvUqjnLUnhgI9kw5sWmLXEVK1hNjIs3ZMvLL8%2B%2FM9Lf34IlYA2QGul%2FAjWIQy2l%2FBf4zBi9H3ZSbU85hEQfXMFZY4vmsBNAVhX1lsPiY%2FAfc0h3Ruo49ZVyNE3QYVRFO883h%2BhqGwvsNGUTwY1JRYYoxlaSj09ldguld2iADyzzsC5f2%2BHy6eu6GLYLU3J9VLGIrDU79359qw6qDwiCKU9I9t8JWOAxyIXnaDJWWPr6bHH46kHsOSh0Yd1nROsV6KXdYX%2Bp0xvEsTi81VVjkG0z9fj5MV0eWX5R%2FLjHwmpPbx%2FNYkQhEIX5%2Fa%2FV5nDA0B1XVUo%2FRfghodc9eRONiG6hJAolXbU4s3B11UrhwGMJmUDTFkwjKP6xAY6pgE%2B%2Fwgiu%2Fnd5aZ06kJe7BrcJYZAcECaDvqRYBAt%2F04Zm4WyBmscXUnf7teEE2ro11RUFdkH%2FZGKIaHPAJ%2FKGUIuiueurFdeRmRARr5iNs0kcuZkgys7EbxBek%2BudqWUdZ4ikvKc%2B5%2BIP%2BYdhooAiJ8hCFFZR6g08i88aY%2FrozOKKR01k15zCs%2Bh2vnDpmlF0mwDyOH7%2BLYj9WFAOep%2FxeHPNySE8Xrq&X-Amz-Signature=a5dbc0304edc2c67b3a02741c0ab5aca54a6b618e9d776403820178880a60f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDSCFK3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvc9Fi%2FbvZgpQGYlMThS4%2Bbw9n%2BF7gf5V9MYNcW2WpTAiB0yG18%2FPJyjEt2oReYdhPYFAElO%2FaNOrwBh6T40Jptsir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMXzDwxMkRZw48M7TFKtwDnOLc59Fu5XDtj9ZtpGiTTnEJOCvffDtbnqP6ACml3nUnfoIQCn2pOLQb0lcehEx4gDGBv2ipO0uDfrIBf9%2Fv04Oh1A1FTmPVC1XoR9HTiCxjx96sH8yBz91hCLE8Y32kGcR66Xoba4wr0cparxAZW7qlnGPDMbRrldtKv4aVIJ1cvT8YGakjnO6XOx8DffMrC5qw%2BJy7pkqvpeBA5FZe%2F%2BnEaRX2LzVLxOLZJFFZ2nWp96j8OwYpHE1DKCbaLN8rmZZwx3lTHSsvUqjnLUnhgI9kw5sWmLXEVK1hNjIs3ZMvLL8%2B%2FM9Lf34IlYA2QGul%2FAjWIQy2l%2FBf4zBi9H3ZSbU85hEQfXMFZY4vmsBNAVhX1lsPiY%2FAfc0h3Ruo49ZVyNE3QYVRFO883h%2BhqGwvsNGUTwY1JRYYoxlaSj09ldguld2iADyzzsC5f2%2BHy6eu6GLYLU3J9VLGIrDU79359qw6qDwiCKU9I9t8JWOAxyIXnaDJWWPr6bHH46kHsOSh0Yd1nROsV6KXdYX%2Bp0xvEsTi81VVjkG0z9fj5MV0eWX5R%2FLjHwmpPbx%2FNYkQhEIX5%2Fa%2FV5nDA0B1XVUo%2FRfghodc9eRONiG6hJAolXbU4s3B11UrhwGMJmUDTFkwjKP6xAY6pgE%2B%2Fwgiu%2Fnd5aZ06kJe7BrcJYZAcECaDvqRYBAt%2F04Zm4WyBmscXUnf7teEE2ro11RUFdkH%2FZGKIaHPAJ%2FKGUIuiueurFdeRmRARr5iNs0kcuZkgys7EbxBek%2BudqWUdZ4ikvKc%2B5%2BIP%2BYdhooAiJ8hCFFZR6g08i88aY%2FrozOKKR01k15zCs%2Bh2vnDpmlF0mwDyOH7%2BLYj9WFAOep%2FxeHPNySE8Xrq&X-Amz-Signature=3bac4889e206952d49819b9d11bd85f1b2e672de28e0d74bebf54761dbef01ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
