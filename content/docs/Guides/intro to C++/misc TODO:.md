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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWQQN5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEr0i6S5hEBDZeuZpogkprR3paL3%2FhEtmeBswo9AdkCgIhAPJ%2BqFthlQ45rBj0Phs7qacIQDActDv6Tmw%2FrwCfgHugKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOk7yiuVS%2BKeQzkxAq3AOF2FjGUFHEC81T%2FbfAPXHHpeLg5rTfrE6UTB8VK8gCNlRbOqFeF9WALc1PzqzvdH0hT3b4D4vVbHX2G%2FtSPdExJdngAp2%2FSa6%2FXk5YBbhEe1v8Qob46pSL1vQuvC4gpZ9PUMEMLQO2l0arLJpdJAWVjL6VdlUB%2FhYumtc9k1aOjpixqfsW6hI8ZMxsp2ydTozwimWFMaKk1%2Fl6TjZ6b7LHddyLs1lvLIkrjE07aTTNv3KeKgscBqxeZCNII3lmS%2BlIpQpTf5W0mNBjQzrGTojNU%2FC%2BLsvdNdP7YRm%2BxGxDP2blIwNmcaxgO0od%2FNbbfvrmnKMYVpPJBOMVoAECbaPbA%2FZLlHDLl0R%2B%2FoKUqICNaL5gMhjlKDZ76lpRF%2B94OlIso480m7o6dzEIElfQ1BYBoTSPCTfsezEeF6mKHfIh5neoQilZBQoqu0rldMIVNpeH5WGx3LzQRgwE3SRGYkgEK7TBSFbMPqyPf%2FYh9zccwA8F7NIxZX4ba%2B9t7JshlCC5pKUMmAKp%2Bc7OMHmrfQSrOxcG2ZWewBokFu1s2XqguMMgSQoFE5bPblRDMJ3f12HIh5B%2BPDhSISNSJK5UWH8SO7WZWCwjmGqSqotxlhbVBJr%2FkVSgEgLlu%2BkiajCRj9PCBjqkAXbshmYNjfFo%2B52o%2Fpl6LArzBdCx6gj8q5sE8TQLA7OColYaBuBqRJuPZj6FTKrRjyDTJsPldlMWwBs4byJx%2BKR2px1HUWzEh0JI%2BSmN3ckEZI%2BNyEzWcKhR5pa4mYE9Xn0pzb9fv2OSXZeNbJhw2SaYNathPPkNg82j2FD3o84nYvvZ088VJu9i%2Bk6G%2BFX1a3Cpkvnmzz1ol2z2C38qPGa8f%2BTR&X-Amz-Signature=e3a7037fb103f94473c4d050b9a2893a51de2dccadeee0c8c2d75e4c2541f063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWQQN5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEr0i6S5hEBDZeuZpogkprR3paL3%2FhEtmeBswo9AdkCgIhAPJ%2BqFthlQ45rBj0Phs7qacIQDActDv6Tmw%2FrwCfgHugKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOk7yiuVS%2BKeQzkxAq3AOF2FjGUFHEC81T%2FbfAPXHHpeLg5rTfrE6UTB8VK8gCNlRbOqFeF9WALc1PzqzvdH0hT3b4D4vVbHX2G%2FtSPdExJdngAp2%2FSa6%2FXk5YBbhEe1v8Qob46pSL1vQuvC4gpZ9PUMEMLQO2l0arLJpdJAWVjL6VdlUB%2FhYumtc9k1aOjpixqfsW6hI8ZMxsp2ydTozwimWFMaKk1%2Fl6TjZ6b7LHddyLs1lvLIkrjE07aTTNv3KeKgscBqxeZCNII3lmS%2BlIpQpTf5W0mNBjQzrGTojNU%2FC%2BLsvdNdP7YRm%2BxGxDP2blIwNmcaxgO0od%2FNbbfvrmnKMYVpPJBOMVoAECbaPbA%2FZLlHDLl0R%2B%2FoKUqICNaL5gMhjlKDZ76lpRF%2B94OlIso480m7o6dzEIElfQ1BYBoTSPCTfsezEeF6mKHfIh5neoQilZBQoqu0rldMIVNpeH5WGx3LzQRgwE3SRGYkgEK7TBSFbMPqyPf%2FYh9zccwA8F7NIxZX4ba%2B9t7JshlCC5pKUMmAKp%2Bc7OMHmrfQSrOxcG2ZWewBokFu1s2XqguMMgSQoFE5bPblRDMJ3f12HIh5B%2BPDhSISNSJK5UWH8SO7WZWCwjmGqSqotxlhbVBJr%2FkVSgEgLlu%2BkiajCRj9PCBjqkAXbshmYNjfFo%2B52o%2Fpl6LArzBdCx6gj8q5sE8TQLA7OColYaBuBqRJuPZj6FTKrRjyDTJsPldlMWwBs4byJx%2BKR2px1HUWzEh0JI%2BSmN3ckEZI%2BNyEzWcKhR5pa4mYE9Xn0pzb9fv2OSXZeNbJhw2SaYNathPPkNg82j2FD3o84nYvvZ088VJu9i%2Bk6G%2BFX1a3Cpkvnmzz1ol2z2C38qPGa8f%2BTR&X-Amz-Signature=9aeefdeb8809d963041bdea145c22e8b0f84f8ceb3ec192b47d2a944c882e145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
