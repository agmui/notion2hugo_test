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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVTLF6S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT%2FgW5s69UQoLicsJrsG6ZolbuzaRTEJ2P0lSYkPmt0gIhALv1LPf3crXBpXrldvddl2fze%2BUD5Ls93vUeDggedJDwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLUbhNhLGcS%2FKu%2Bkq3AOe3YUTJUoD24lZkaoktGY4knFQarFpGBsjXJelHoQRc1CVJWi3lsGHnteE6FGkQthPWJa%2BhZIQ%2FO%2FuW4kLcO17l3fJVfvbr5s9Z04Q1KxUPJ03Avb0%2FmzoH3jafBscEbi%2F6UXvu0zecwsJmPrFamWkwi4pT6npsMMB2Aab%2F%2B%2FYlQZHPlt%2F503%2BfqCf4DwIw80nMa4RColcbyalHr6OJSGyf6ovMSBqgVkDYf0kppeoToXmWP4r7OKhsIl5HISqqNW2%2FTiC4PueXOhZo1lvf5KD35F31LQsWZVrS4nL24VtpdPiHXMRd8Etx7wx1XGvcy6Elgw%2FHCzdbuRTPzESAxGtM%2BSqCW4RgawhMSIJ4kA4Psj%2Bz%2BhZoHe%2BVwwJYoItEp2mnq4vKPoIi%2FdChop7EShdS2K7Pig8Uo9RWprqEGxogqh3rXjGut0aoqRRWgsNWOUASwa57xmdCJMa1UvQAxPP0ogQw3%2BGy2IAXWw6HqbsKS1VnDlr25SaF%2BS1Z2tt%2BINQBp4TBurMv%2BssdI4SsHqx6I%2BjJUM5GHf6B58bsV%2BVHy148mWteb0pmt2I%2BVmq%2FozbgwNHk8LTd4UlwjjtDZ%2F0t8DjNbUlyF37vjStG3bWAZ%2FcltAYPEPj%2FgGQXTDOuuPEBjqkAdxWyWI2vIB2dhndbkaKRsne%2ByRw%2F478UpqzIn7ADA2OaKRF2PHSywjXJ50ilxmPgMY97wBQwehYaM3lXcTgBG23IMUcTmTcSaBYycEzsYvxsTv1InD2i0ZaIo6DiaRnf7WHAJdIkbFeTrdSXlN4MkQ9lE9mVuOZM3ja3rAzwGBrFvK%2BMYB1oQ78VIO8mFj9laklYmFMesYbRSUXqZfbtEBXwafx&X-Amz-Signature=3fe50fc7f5993a3d743e3b51bb43e5ad61c34a30b327aa2fa32bda11daa4a692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVTLF6S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT%2FgW5s69UQoLicsJrsG6ZolbuzaRTEJ2P0lSYkPmt0gIhALv1LPf3crXBpXrldvddl2fze%2BUD5Ls93vUeDggedJDwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLUbhNhLGcS%2FKu%2Bkq3AOe3YUTJUoD24lZkaoktGY4knFQarFpGBsjXJelHoQRc1CVJWi3lsGHnteE6FGkQthPWJa%2BhZIQ%2FO%2FuW4kLcO17l3fJVfvbr5s9Z04Q1KxUPJ03Avb0%2FmzoH3jafBscEbi%2F6UXvu0zecwsJmPrFamWkwi4pT6npsMMB2Aab%2F%2B%2FYlQZHPlt%2F503%2BfqCf4DwIw80nMa4RColcbyalHr6OJSGyf6ovMSBqgVkDYf0kppeoToXmWP4r7OKhsIl5HISqqNW2%2FTiC4PueXOhZo1lvf5KD35F31LQsWZVrS4nL24VtpdPiHXMRd8Etx7wx1XGvcy6Elgw%2FHCzdbuRTPzESAxGtM%2BSqCW4RgawhMSIJ4kA4Psj%2Bz%2BhZoHe%2BVwwJYoItEp2mnq4vKPoIi%2FdChop7EShdS2K7Pig8Uo9RWprqEGxogqh3rXjGut0aoqRRWgsNWOUASwa57xmdCJMa1UvQAxPP0ogQw3%2BGy2IAXWw6HqbsKS1VnDlr25SaF%2BS1Z2tt%2BINQBp4TBurMv%2BssdI4SsHqx6I%2BjJUM5GHf6B58bsV%2BVHy148mWteb0pmt2I%2BVmq%2FozbgwNHk8LTd4UlwjjtDZ%2F0t8DjNbUlyF37vjStG3bWAZ%2FcltAYPEPj%2FgGQXTDOuuPEBjqkAdxWyWI2vIB2dhndbkaKRsne%2ByRw%2F478UpqzIn7ADA2OaKRF2PHSywjXJ50ilxmPgMY97wBQwehYaM3lXcTgBG23IMUcTmTcSaBYycEzsYvxsTv1InD2i0ZaIo6DiaRnf7WHAJdIkbFeTrdSXlN4MkQ9lE9mVuOZM3ja3rAzwGBrFvK%2BMYB1oQ78VIO8mFj9laklYmFMesYbRSUXqZfbtEBXwafx&X-Amz-Signature=bc2b62c93539e8eb33f03e3cf6176f13de2dee888595211360e7d23aa36c62d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
