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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLGCCZA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzgccweIVs4SBG6H5NBFbS%2FU%2Be0enjTp3Wd6AvNLIjkAiBnGk5u%2B%2Fc9TNOd7U1Ymv%2F0C9W026edYVXIGh%2FuosET%2ByqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnHDjyVLuKMWlQrlVKtwDNU2D6U3uyLunt4fo%2BClQlr9BckCqvIoxlfxYpchcNrXK4MyLmCWKYoDzl7FIFBkfneGeKf9tolJ%2FAyy%2F0Suli38TPFEOCVx%2Fl3H8f09ROmSJATYLqIc%2FBOjEe7FCOULkE509%2FWBbpMUs6u03Ue7nOcGMGbbvwCr8SH8hJLL9hIREFlUobb%2Fdwwm6SewbM4INXdUSC7hMHiJX46DHflOAQLdvQJ5qZUJ7qiUV5zzutS9Q2ML9cGFofWzo156u2FIjVi16A0PR85AjX%2FOET0yy7AWGfYeRdKodTDL9C7qJPvoFxB0DclDgV55mSyRkEu5gJmHG5D0p4qvPnHfr409RS%2BoOb7SnxecqtYemj3KuYPbMSP6qUqb%2FkxVj1OdkYAoGnl3oAHJZMuAG62c%2Fllz04Oo0gxLeqwpSVIfOmXF3ynW9gBUnaeRfIB6URU03JBZwDj22I6Z4Nysd7s6JrkkWywyNUuaw7aLxo%2FKx1r52LctgV3mndnC2PD0x4a4YNhF35ponmJL%2Fdi2oAuwub%2BWBgriYQr80uiMi41T5a30UCc51rBVDhUoxsK9VTarIKI7l5GXt84RVxdoB%2F4YCC5KFznDZ69raODCJkDuGTilJwNGa52ref9%2BLqhSbLNkwub3ywwY6pgEqkns56XN9gsOvJGB98mHxtbZFyoC5X0mqiS7goV7Uv%2Fmo1tZfR6nmrBsMb9zyLg6CJWbu%2F7ZKmRND%2FQ4vXu841nXA8wR4lEp%2B3k0XeuLRjKmaQn%2Bh8sThtytU0LVFBrU80ONKNAbv42rbQx1iC0YITsCRI%2BJFf3l438pl8esCrFH3g35Pwo1a0ITjADIK0xfYxLRhE%2Fmi7BETv%2B0VoQDNhYCls36C&X-Amz-Signature=086decad33a0efe196f25abc1aee1e2c8d99e02bbf080fe996094dad353bbefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLGCCZA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzgccweIVs4SBG6H5NBFbS%2FU%2Be0enjTp3Wd6AvNLIjkAiBnGk5u%2B%2Fc9TNOd7U1Ymv%2F0C9W026edYVXIGh%2FuosET%2ByqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnHDjyVLuKMWlQrlVKtwDNU2D6U3uyLunt4fo%2BClQlr9BckCqvIoxlfxYpchcNrXK4MyLmCWKYoDzl7FIFBkfneGeKf9tolJ%2FAyy%2F0Suli38TPFEOCVx%2Fl3H8f09ROmSJATYLqIc%2FBOjEe7FCOULkE509%2FWBbpMUs6u03Ue7nOcGMGbbvwCr8SH8hJLL9hIREFlUobb%2Fdwwm6SewbM4INXdUSC7hMHiJX46DHflOAQLdvQJ5qZUJ7qiUV5zzutS9Q2ML9cGFofWzo156u2FIjVi16A0PR85AjX%2FOET0yy7AWGfYeRdKodTDL9C7qJPvoFxB0DclDgV55mSyRkEu5gJmHG5D0p4qvPnHfr409RS%2BoOb7SnxecqtYemj3KuYPbMSP6qUqb%2FkxVj1OdkYAoGnl3oAHJZMuAG62c%2Fllz04Oo0gxLeqwpSVIfOmXF3ynW9gBUnaeRfIB6URU03JBZwDj22I6Z4Nysd7s6JrkkWywyNUuaw7aLxo%2FKx1r52LctgV3mndnC2PD0x4a4YNhF35ponmJL%2Fdi2oAuwub%2BWBgriYQr80uiMi41T5a30UCc51rBVDhUoxsK9VTarIKI7l5GXt84RVxdoB%2F4YCC5KFznDZ69raODCJkDuGTilJwNGa52ref9%2BLqhSbLNkwub3ywwY6pgEqkns56XN9gsOvJGB98mHxtbZFyoC5X0mqiS7goV7Uv%2Fmo1tZfR6nmrBsMb9zyLg6CJWbu%2F7ZKmRND%2FQ4vXu841nXA8wR4lEp%2B3k0XeuLRjKmaQn%2Bh8sThtytU0LVFBrU80ONKNAbv42rbQx1iC0YITsCRI%2BJFf3l438pl8esCrFH3g35Pwo1a0ITjADIK0xfYxLRhE%2Fmi7BETv%2B0VoQDNhYCls36C&X-Amz-Signature=783dd3f65c0249845602830ab623c43770c51d784e44858f9df772d38c6db45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
