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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62IXEWS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkMMuf5iQJgbYAFFEOxZaYSbV%2FP2BD%2BPRsj6cAFnZioAiBCggdg3tY7FmQs6mDW%2B5dylCr1JTNqwSQPFbBCpPOfLSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMLwauxTptbjE4vTBSKtwDwzgEWmfWEXFdjFEaa5NOWZZ53AJiSSRNlCulIclWxyTcNSYTbV6wRNJ91TncUCZQUCGUoPn%2B0CkD8NSuLt1Rq4PNxH3VpkuchdVwa%2BqJEMm65k%2FYkWDRNAT87jkeCwpjtmBr4uAopuwYCZj%2FVOFnuvwYdaChC2XnbsVfwCPrM7hjcz009wCTYZUN%2B%2FRWyUT%2BeEqcsOeRt4TkREmakGVh3GLBFCUyXMcjPX%2BRcbpEfg6SXHvwGMZ3u62a7FaIcJDrvJc1DbkHdAGP2o%2BmYwNnxzCSVVjj2Rx9%2FhrY5Vp%2BXtFH211vcAmHJqFIdmsxOpOMG6ooY0fdnfbX2Qkn1rTQEcT9FRn0Svncmt0z%2BpsFfKvB8IL3Z8JpL0a%2Bx7FlbPnmvCvdXccbuDuIIzn0mD3RqqbiroqeeKgTkGAvcfOOlCVT8c65ySP%2B6T2OjcVPT3G1fE12ZVE%2B7fRHKPKdI92q15ehTewijcjje%2BEEMGWTkFHE7e96wS2tIt%2FOkmnmwZcc2r25N19OTlvE62Dg9OcBC0avOYi%2FowcfNWO2%2F%2FWWCEhaiSMiRovQhbJ%2Fgmjdy7cB9NkGKtZV0hwpcckWtvF3NtsspZmEbXLioNUh0hOb9nigyBRzoEBKliJIbCQwv8XzxAY6pgGTRoR%2Fix7pg2IAZLRyIIh2h%2FnOkrN9%2FouyaPslawiS9Ze2rN1iQOfBzVUwH7MEoIOA7VP%2BM%2FaySlHRu6QdCQ%2BlKjfW2eZrepw6S5sWRlrcoQ2WcL8cAhbIRdqHhPnfvH5e5OMgILuuC1YbStxrzoFy1JIfpY%2FVAzd31WbRT2z%2BApiq%2B3MVQF2ut6HX8v%2FPBnpE4JWFLT2Ldh9BuC2r7hx5EZ72M3R7&X-Amz-Signature=a9a7293029202f524f6e471dd203ac068cb2d2791b15c2473994855cc2097975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62IXEWS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkMMuf5iQJgbYAFFEOxZaYSbV%2FP2BD%2BPRsj6cAFnZioAiBCggdg3tY7FmQs6mDW%2B5dylCr1JTNqwSQPFbBCpPOfLSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMLwauxTptbjE4vTBSKtwDwzgEWmfWEXFdjFEaa5NOWZZ53AJiSSRNlCulIclWxyTcNSYTbV6wRNJ91TncUCZQUCGUoPn%2B0CkD8NSuLt1Rq4PNxH3VpkuchdVwa%2BqJEMm65k%2FYkWDRNAT87jkeCwpjtmBr4uAopuwYCZj%2FVOFnuvwYdaChC2XnbsVfwCPrM7hjcz009wCTYZUN%2B%2FRWyUT%2BeEqcsOeRt4TkREmakGVh3GLBFCUyXMcjPX%2BRcbpEfg6SXHvwGMZ3u62a7FaIcJDrvJc1DbkHdAGP2o%2BmYwNnxzCSVVjj2Rx9%2FhrY5Vp%2BXtFH211vcAmHJqFIdmsxOpOMG6ooY0fdnfbX2Qkn1rTQEcT9FRn0Svncmt0z%2BpsFfKvB8IL3Z8JpL0a%2Bx7FlbPnmvCvdXccbuDuIIzn0mD3RqqbiroqeeKgTkGAvcfOOlCVT8c65ySP%2B6T2OjcVPT3G1fE12ZVE%2B7fRHKPKdI92q15ehTewijcjje%2BEEMGWTkFHE7e96wS2tIt%2FOkmnmwZcc2r25N19OTlvE62Dg9OcBC0avOYi%2FowcfNWO2%2F%2FWWCEhaiSMiRovQhbJ%2Fgmjdy7cB9NkGKtZV0hwpcckWtvF3NtsspZmEbXLioNUh0hOb9nigyBRzoEBKliJIbCQwv8XzxAY6pgGTRoR%2Fix7pg2IAZLRyIIh2h%2FnOkrN9%2FouyaPslawiS9Ze2rN1iQOfBzVUwH7MEoIOA7VP%2BM%2FaySlHRu6QdCQ%2BlKjfW2eZrepw6S5sWRlrcoQ2WcL8cAhbIRdqHhPnfvH5e5OMgILuuC1YbStxrzoFy1JIfpY%2FVAzd31WbRT2z%2BApiq%2B3MVQF2ut6HX8v%2FPBnpE4JWFLT2Ldh9BuC2r7hx5EZ72M3R7&X-Amz-Signature=b6da99de886cf89a264d71f86c7d9c9af14f47cf0c595e056039a78c0a75ad43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
