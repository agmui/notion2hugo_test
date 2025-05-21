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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G4UNSKN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5QBjxWx2rVHPuFAmSWRBnOOvF6K2XSpBZaWOH1V%2FTiAIhAIF0%2BNO9gInVDPATXelnnd72paIGtcXhf0AJBhrDyk%2FWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtFrmV6YAGlag7Dcq3ANVAoofbRHnWxjl%2FA8u0D8Py0Iu4z4thXpr480tA2c1JIskOAby%2BcGo%2F5XgXkk5r57VukVXgrCh425nnITZbFBBSTW3eDwW57xcRrs17MLxSn5coLIWWSyDkmFA9A1fHqcMEC6KnO0Os2sPe6gKuF1VFiLWpXr2k4x408FkylNf0itgi9OUOLYL%2FknMkgMSYbqfhGdFoq65KFnK8LeS5tpwC2f8jpKIVd8KFBAzlAwvwXTQLLPTyBtgjN7tvyQQgaHsnIkCpTveCRQZQAaXlLqz1tfuw1fthWEpsqp8zzM7n8Ke%2FmW9Xjw%2F4L%2F523Y4bWlyLpMgBgnc32gBOXAnkIBaXqMUguYSK7fD52N%2FNzOcWTvdNUFDaEk7lSC0MyPEw9q89t03Tpdc8t35PDWt8G3vgp52AyPLDlfU42wP9JEG7hV%2BSwed1%2FEuDAESHeELW5nxMzfJ5JwZ503D66dPDq51AQJ%2BcdJQG7Y%2Fq2XKHdpOJbNe07hEPQF5gBC4CLdQ9F5GrfmvnzIajG0L8KPAWfE%2BS5PdJVdA6nk4kB2Iz9VOSo83cRG8IUGfIe8F0NljLLsS%2BVkAFHp6XVNnMK1iKjkQlFtdm%2BNlGPq2%2BMPJw824JiXXALmnE9gwqyCuFjC57rbBBjqkARKjWF021dMaicDjz4TgiQ398eVeDknrx9yI%2FxJPvXjaF03deae3GXyeo2uOJ3jgrQcAGUWqWL%2FFGcIDJwtJn3UfcE17EL8tkX5UzOZvV%2FyIW%2BlMvG%2F2awT9Gj4yDpIxhInnpRo6HG3hNifltHYuGryIxWULBzaFvw0bUEjQqbdNg5mhlaLufLrJtZc33vpZvo1lZFKI4YbgWYhkYmqutKcEnnjB&X-Amz-Signature=f6bb89e6961fc8fd8929351b29d030d7cc4b903a54b142f77d7729eeaa72cdcc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G4UNSKN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5QBjxWx2rVHPuFAmSWRBnOOvF6K2XSpBZaWOH1V%2FTiAIhAIF0%2BNO9gInVDPATXelnnd72paIGtcXhf0AJBhrDyk%2FWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtFrmV6YAGlag7Dcq3ANVAoofbRHnWxjl%2FA8u0D8Py0Iu4z4thXpr480tA2c1JIskOAby%2BcGo%2F5XgXkk5r57VukVXgrCh425nnITZbFBBSTW3eDwW57xcRrs17MLxSn5coLIWWSyDkmFA9A1fHqcMEC6KnO0Os2sPe6gKuF1VFiLWpXr2k4x408FkylNf0itgi9OUOLYL%2FknMkgMSYbqfhGdFoq65KFnK8LeS5tpwC2f8jpKIVd8KFBAzlAwvwXTQLLPTyBtgjN7tvyQQgaHsnIkCpTveCRQZQAaXlLqz1tfuw1fthWEpsqp8zzM7n8Ke%2FmW9Xjw%2F4L%2F523Y4bWlyLpMgBgnc32gBOXAnkIBaXqMUguYSK7fD52N%2FNzOcWTvdNUFDaEk7lSC0MyPEw9q89t03Tpdc8t35PDWt8G3vgp52AyPLDlfU42wP9JEG7hV%2BSwed1%2FEuDAESHeELW5nxMzfJ5JwZ503D66dPDq51AQJ%2BcdJQG7Y%2Fq2XKHdpOJbNe07hEPQF5gBC4CLdQ9F5GrfmvnzIajG0L8KPAWfE%2BS5PdJVdA6nk4kB2Iz9VOSo83cRG8IUGfIe8F0NljLLsS%2BVkAFHp6XVNnMK1iKjkQlFtdm%2BNlGPq2%2BMPJw824JiXXALmnE9gwqyCuFjC57rbBBjqkARKjWF021dMaicDjz4TgiQ398eVeDknrx9yI%2FxJPvXjaF03deae3GXyeo2uOJ3jgrQcAGUWqWL%2FFGcIDJwtJn3UfcE17EL8tkX5UzOZvV%2FyIW%2BlMvG%2F2awT9Gj4yDpIxhInnpRo6HG3hNifltHYuGryIxWULBzaFvw0bUEjQqbdNg5mhlaLufLrJtZc33vpZvo1lZFKI4YbgWYhkYmqutKcEnnjB&X-Amz-Signature=f34dada1a0295965780cd6b76659d181aa9020f658a158bb683b24921fefe387&X-Amz-SignedHeaders=host&x-id=GetObject)

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
