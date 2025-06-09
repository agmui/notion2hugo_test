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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXHCF55%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcfrMH09v3hzi7lHoTR0UlKPUq1MJZYQ22e5qOsQ4vKAiBTeWYHLYIcXlKXvft2sH1NOk04cLXCjHB0DK3IjyH50iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK33H0C6i1nIwVJ6XKtwDwkDfpJWKb9I3tUyJmWGTgrJTrlJVYMSr2WAZ0VLawArp9lT4EG%2BQVutZCuBWW8RmgXjOmQmCEv4ec5cw3ErQ3gqbJ7t%2FbkhPhlITwCMPE%2FngWGVdfAcBtbJrY4gbcDl7zOXT2d9pSiSZRFv0KHBRdw2%2Br2g9HOfOnoUVvXU5SOKYRevSKYIlmFBVpA%2B9j5TpZg%2FtUrSXR6YiTo1LEGcbxsDpoLvlF6eHksK6QYMt0KP9uJvyE6ZHswreez0Xy9z2%2Fq%2FDabgZBawH3RB1pBPehz7wCD7Q0zhWVunuJKArj5EksKOFneXuDMVgswhPLJwtHXibA6fRHTlTggKKq6trOp%2B5D%2F97ljENXvSVDAJLjELe%2B0mQ7ezXyk8F8rv7%2Bm6%2Bw5O1N%2BwlZ%2F6N8DizWP4qqvUdJX9dRIevZ5%2FewvtmQwMp30TXHN%2BmN7RnUKrZHFIWd7ZKiOC%2BxTO9jaENODekWovRh85EFff88JzAGrBnZGTUjGeoVH%2BWSvYjKzmV7t%2FeD4JnYgVsoXkbWBdh0GHZ%2Bq%2Bf1dYDDCV0CFLluXAaxSnDM%2FEwJG1zUBh1FFlToMqlpK8jwC0UoB2Xwh6709gF6EIodywORT1WBrtSedFk8D6mX39HFPzAo%2B573fYw2J2bwgY6pgGVXobEjDLT5Ne%2BO0t6fSq4akRNlHRt01rjMjgOZtgEHOmj%2BSBmKY0zZ7W6fFaO9IYgjEpTkDhal3kkT577Xi8uNRn2XR9zwOGfjsiDRm3TDxJs97bBvQX2gVd%2BYlM%2FqTLtNZvl0%2B1znhS6nuzEbMBgs9MLc7lumLgWuC8NiCByFo52MRq5ZEVP7dr%2FTYfdOSkdF4JHiPEvK4GnUPpQaP%2BlnYU7aXrQ&X-Amz-Signature=0d27bee22f0972c0f667d535211cfc30e5a72008c0e4aa410aaf828dd1da6709&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXHCF55%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcfrMH09v3hzi7lHoTR0UlKPUq1MJZYQ22e5qOsQ4vKAiBTeWYHLYIcXlKXvft2sH1NOk04cLXCjHB0DK3IjyH50iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK33H0C6i1nIwVJ6XKtwDwkDfpJWKb9I3tUyJmWGTgrJTrlJVYMSr2WAZ0VLawArp9lT4EG%2BQVutZCuBWW8RmgXjOmQmCEv4ec5cw3ErQ3gqbJ7t%2FbkhPhlITwCMPE%2FngWGVdfAcBtbJrY4gbcDl7zOXT2d9pSiSZRFv0KHBRdw2%2Br2g9HOfOnoUVvXU5SOKYRevSKYIlmFBVpA%2B9j5TpZg%2FtUrSXR6YiTo1LEGcbxsDpoLvlF6eHksK6QYMt0KP9uJvyE6ZHswreez0Xy9z2%2Fq%2FDabgZBawH3RB1pBPehz7wCD7Q0zhWVunuJKArj5EksKOFneXuDMVgswhPLJwtHXibA6fRHTlTggKKq6trOp%2B5D%2F97ljENXvSVDAJLjELe%2B0mQ7ezXyk8F8rv7%2Bm6%2Bw5O1N%2BwlZ%2F6N8DizWP4qqvUdJX9dRIevZ5%2FewvtmQwMp30TXHN%2BmN7RnUKrZHFIWd7ZKiOC%2BxTO9jaENODekWovRh85EFff88JzAGrBnZGTUjGeoVH%2BWSvYjKzmV7t%2FeD4JnYgVsoXkbWBdh0GHZ%2Bq%2Bf1dYDDCV0CFLluXAaxSnDM%2FEwJG1zUBh1FFlToMqlpK8jwC0UoB2Xwh6709gF6EIodywORT1WBrtSedFk8D6mX39HFPzAo%2B573fYw2J2bwgY6pgGVXobEjDLT5Ne%2BO0t6fSq4akRNlHRt01rjMjgOZtgEHOmj%2BSBmKY0zZ7W6fFaO9IYgjEpTkDhal3kkT577Xi8uNRn2XR9zwOGfjsiDRm3TDxJs97bBvQX2gVd%2BYlM%2FqTLtNZvl0%2B1znhS6nuzEbMBgs9MLc7lumLgWuC8NiCByFo52MRq5ZEVP7dr%2FTYfdOSkdF4JHiPEvK4GnUPpQaP%2BlnYU7aXrQ&X-Amz-Signature=f3efee6e6435cd986219ed14fd4223ed041191d3e5a8a958e7632b4466b4fd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
