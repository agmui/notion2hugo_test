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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SKTRKK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDaJFsIjR8Msbva5%2BUfwyLlv%2BzupYk4eUgxD1TdYSMdLgIgT2VtCSX%2FGKPyVWD2ntP8vZNKQoE79slnnp7lBysIm4wq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNHEmBI42mk0yVeWPCrcAz9pbsV%2B1NsFL1tJ3vK%2BB3Kj6VKHMNIow5FKeBBbSam0jDillk6KWps3YFMo3z9DMz1H9d0LKNH8c5gXCuu2%2BFX2%2BL9fduGnngdLReUtvPBZQymbxvClKNmV9g5avZWfleb%2BaEcQV82ETAGrvJuIheUXqqMNAPaVFp3kIR8p03yBQmolAr1EonrNPa%2BvNcSC72YILVqIE1huhX3sG0H6EpF7R%2Bzrdjjvh%2F0inp89jYZPfDSrPH2cS1f1osMi5t2u6nnM2LkLe8ZGitUJARNp4Fr43VcDS4anduSYEBd7kOcUX7YBui%2FJDteBfDWYVy0mWo5Xe0ZJlXRZjKC1CwO2YEdjNlL5rU9jJQduXp4i0lo%2FopP7%2B3Jutzju3IfDZrGcNRgyVZOOcfmXlBiql2XL87Tr7v%2FIsT5YOBl37pbENv3aiTNvloIs%2BXnxEIJ4CNMzhkWbzPa6ge7StTdCIZ1DH7v0J0jVNm2RqI52WKAwOeJkfgxQ4lvTT5Uro1TWsiqNtpjH0%2BEgsZP%2FNQYdwH108O%2BgHsph71AbCH2mMtuXvO%2Bv5ljVn9psJXBYEaNwLCxU8Sh27WgfW7P49vHynhaAbhycKlYVYab3XF7DxllaTSlSxKanepeGoFEclC64MPzhncMGOqUBGCd6jJe3AFdiCmlcyWpvqjUGRhlM29lTOSvvPv4xOwDzcW9JERDSJLBk79nlxPnrY8nON2wddF8EpYPxy9v66zlgp%2B41Yx8BR08Mt4J7jbWWstipKmmtdX60EG4h92IoSP8FO3U02J1%2B1VoXc2MA8aW5TBaOVr9XbndUa%2BIO%2B9fDRIZZ%2B%2B26okvTNqM7lFZBqCaqLVGyf%2FoOwC%2BdLSTrRw%2By97oU&X-Amz-Signature=78b98786fd5509155ba26c90ae0bdf7c088ca626668146f7b7cdf3f433bb5cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SKTRKK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDaJFsIjR8Msbva5%2BUfwyLlv%2BzupYk4eUgxD1TdYSMdLgIgT2VtCSX%2FGKPyVWD2ntP8vZNKQoE79slnnp7lBysIm4wq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNHEmBI42mk0yVeWPCrcAz9pbsV%2B1NsFL1tJ3vK%2BB3Kj6VKHMNIow5FKeBBbSam0jDillk6KWps3YFMo3z9DMz1H9d0LKNH8c5gXCuu2%2BFX2%2BL9fduGnngdLReUtvPBZQymbxvClKNmV9g5avZWfleb%2BaEcQV82ETAGrvJuIheUXqqMNAPaVFp3kIR8p03yBQmolAr1EonrNPa%2BvNcSC72YILVqIE1huhX3sG0H6EpF7R%2Bzrdjjvh%2F0inp89jYZPfDSrPH2cS1f1osMi5t2u6nnM2LkLe8ZGitUJARNp4Fr43VcDS4anduSYEBd7kOcUX7YBui%2FJDteBfDWYVy0mWo5Xe0ZJlXRZjKC1CwO2YEdjNlL5rU9jJQduXp4i0lo%2FopP7%2B3Jutzju3IfDZrGcNRgyVZOOcfmXlBiql2XL87Tr7v%2FIsT5YOBl37pbENv3aiTNvloIs%2BXnxEIJ4CNMzhkWbzPa6ge7StTdCIZ1DH7v0J0jVNm2RqI52WKAwOeJkfgxQ4lvTT5Uro1TWsiqNtpjH0%2BEgsZP%2FNQYdwH108O%2BgHsph71AbCH2mMtuXvO%2Bv5ljVn9psJXBYEaNwLCxU8Sh27WgfW7P49vHynhaAbhycKlYVYab3XF7DxllaTSlSxKanepeGoFEclC64MPzhncMGOqUBGCd6jJe3AFdiCmlcyWpvqjUGRhlM29lTOSvvPv4xOwDzcW9JERDSJLBk79nlxPnrY8nON2wddF8EpYPxy9v66zlgp%2B41Yx8BR08Mt4J7jbWWstipKmmtdX60EG4h92IoSP8FO3U02J1%2B1VoXc2MA8aW5TBaOVr9XbndUa%2BIO%2B9fDRIZZ%2B%2B26okvTNqM7lFZBqCaqLVGyf%2FoOwC%2BdLSTrRw%2By97oU&X-Amz-Signature=163741f4873adb6804ca705bae05860aacbc894093c39381253d94910e67c7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
