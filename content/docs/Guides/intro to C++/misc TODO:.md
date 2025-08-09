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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFR3K4O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBbG%2BS7Q9joivXtLqKP8kVrz8cOdiot5nGHKLhiQw7LJAiACWR%2BSng6YwZGr7GE59g6Zz2j9SDyhzO4R%2BGETh7cQSiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnlPPeM4CbeIAn34KtwDQLk6Kh8Y1VHT1KBB2MHibTzkvR8fTDhSVcQHlSRRj1VEfSl0a416ITaqRLfyzP%2BG5Ee76P3bABAuwv4EJeS6wJ2fp6Lw09opyWZUPaaqzF6NPqeTFMVunWHmnAD%2FVcUEDSuZWODqi1Eg6rU6RIS8rzan7E6GN7PxS7u6DlrdeQfWaWI8IZxyTcB2tChnaHL8VYIwBiQkT1dKam7Rv7zY8OYx0hrhcq9XLOuM6u2mRyGq2p%2FlzcpBO2Fu8IEms2Gx75jE%2FMlGYojRx3y9e2GEKVR1KrwphKmiCghDbobkkvNH4wTvTJzp2sHceo3vaumd%2FsW78n%2FVn52mslJnBoc3z0T5bfycKUABiLoWFNhel3xgmMm%2FU%2FN3YQ4tU6Iq%2BaC8y8cGN6vW21i6Ip6mBZuG%2BjvvjCelym18MgvH73AVi%2BmbsxfGlBN0cXidhaGx6DRJoD87%2FDI%2BwgLWZs46q%2FfR50Koo4G9AiWQ2hywPYBJLgGImidcNsjNCyLgAZZncybWgHEXikutqHf2fiE3kdJov3PpyHYfirSvxRJHjTLQqRcVhC8QIUus61MdKRvXZFOggrG%2B%2BgjseqWra2snbKS6Skby0MN3qbV7Z6l1x8ojvuoJPCyQqfaZYuHqM8kwrcTbxAY6pgHRux6BW0tfRtzDA7XxERH4%2FlEbP98bjQfyYUcgfKioJvccdhdAJXLyuY6ABDgKRG1a5hu33rKEos4OKcq%2FTmKrGD%2FCOqV4ZxDl%2F2TYqpqjoTTZgcd%2FkrKI0Ag5h%2Fh0%2FmAXKTImMoOE5QuAuvoBmLGnx2xg6XYxGJUg74jSG5odIK%2FMmanKNgcTcoc1toHgNPpoZZGE0%2FUhjbPeIt1PTks0k7M7eoDZ&X-Amz-Signature=89ce08939411b19e862f1fc215544660cab54ea6544edd5200574109adf4b10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFR3K4O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBbG%2BS7Q9joivXtLqKP8kVrz8cOdiot5nGHKLhiQw7LJAiACWR%2BSng6YwZGr7GE59g6Zz2j9SDyhzO4R%2BGETh7cQSiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnlPPeM4CbeIAn34KtwDQLk6Kh8Y1VHT1KBB2MHibTzkvR8fTDhSVcQHlSRRj1VEfSl0a416ITaqRLfyzP%2BG5Ee76P3bABAuwv4EJeS6wJ2fp6Lw09opyWZUPaaqzF6NPqeTFMVunWHmnAD%2FVcUEDSuZWODqi1Eg6rU6RIS8rzan7E6GN7PxS7u6DlrdeQfWaWI8IZxyTcB2tChnaHL8VYIwBiQkT1dKam7Rv7zY8OYx0hrhcq9XLOuM6u2mRyGq2p%2FlzcpBO2Fu8IEms2Gx75jE%2FMlGYojRx3y9e2GEKVR1KrwphKmiCghDbobkkvNH4wTvTJzp2sHceo3vaumd%2FsW78n%2FVn52mslJnBoc3z0T5bfycKUABiLoWFNhel3xgmMm%2FU%2FN3YQ4tU6Iq%2BaC8y8cGN6vW21i6Ip6mBZuG%2BjvvjCelym18MgvH73AVi%2BmbsxfGlBN0cXidhaGx6DRJoD87%2FDI%2BwgLWZs46q%2FfR50Koo4G9AiWQ2hywPYBJLgGImidcNsjNCyLgAZZncybWgHEXikutqHf2fiE3kdJov3PpyHYfirSvxRJHjTLQqRcVhC8QIUus61MdKRvXZFOggrG%2B%2BgjseqWra2snbKS6Skby0MN3qbV7Z6l1x8ojvuoJPCyQqfaZYuHqM8kwrcTbxAY6pgHRux6BW0tfRtzDA7XxERH4%2FlEbP98bjQfyYUcgfKioJvccdhdAJXLyuY6ABDgKRG1a5hu33rKEos4OKcq%2FTmKrGD%2FCOqV4ZxDl%2F2TYqpqjoTTZgcd%2FkrKI0Ag5h%2Fh0%2FmAXKTImMoOE5QuAuvoBmLGnx2xg6XYxGJUg74jSG5odIK%2FMmanKNgcTcoc1toHgNPpoZZGE0%2FUhjbPeIt1PTks0k7M7eoDZ&X-Amz-Signature=33f9706baf98b995f044d04b70387fc2c21646286ce9c315a1b57bb15fd16dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
