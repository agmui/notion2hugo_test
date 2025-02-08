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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GY7IMTK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCReQMOYFbp%2FiWwLintF9errVS5VmgEovmreOCKT9pKxgIhAN6Ydrlcgdo%2FQcSyK3kJ6lPjAfM%2FK53pcgNrxK%2FLKLhTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXmdnTyKmVCWsrA8q3ANQKwbq9AnFpu3Kh9qhjTJJoMW3NOqxAyiJPO9FZVqlTctYZoJiWj%2FApkIuKlCsUBqv3V7aTt9XpJ9ZstEkQHBtm5vAog7POw9DWlqvIUfbYeM5%2B5K1cSzzzaVZmh5WDAAMuRUIaUFcxwS4SRJfdr3JRQz1WfKVeDZmdZrzwlX7doh6%2B%2FOHgvbXUfTaVRC0frg6yAreYKP8lLkPxT%2BiLDpL7%2BfYrz%2FC2nNgDUngdHN459W61ZR2QdwC%2FniC3cDIpicRkW70klaaBtLxR%2Fk3qXLwtZh8Akuj4Y2oxPU1Q1fMCict0QlIDUQTAZp1C8jicJ1wB746gOLzfAmAQZWqevwZzwl0ryC8CBuZ6B7PUCbBNp3%2FjsmI59SheYD0CyXFFCLHVj1%2Bzw%2BLHRTC32biOti%2F74bqtLN9DgxPeBNKt1Mp5b0%2BLvwQcr%2Fcj2Eqv9r9LEq0n1QjESa1pWmRUrMrjq9ZtecYPkRsfx37lGo2XfXpAkUCSsiIisaDM3nh5oat3j3r52iV92axhUn5kWpkMXfZf5Y9%2BTAs%2F0iqdEn3imFPRpcetVsWvc0Z7dJYHy3HSbsLNyv9dRAMgWkxPrgTaGkCk2UFGWTKY%2BNPZdRXIOuGo98EeyruwGiaYRuawzDUo569BjqkAee%2BldEvbL5yeZdNBmhgTlUbsu33MxZPh8IFKf%2BkDAX1%2BFkDVgZqtSc9M4JBU78euTryu7QhDm0eJEVGw6edI8zUaNgKPudyIKsTVqtFJXc1YMjLwS%2BG%2FClII9ot7TXfpECfMNW9y%2F%2FhiGPMW7OxRfZmO9Z%2BDMjMYcxJxnRFEXN7Oyc2O%2BoGFtHUzkKbFW16uxMoJaeke9kHuzAXwYHheZD%2B1Kbi&X-Amz-Signature=6505adc90eab9fadab5b84bb64a3273c8b811ff2992956b492bf5826670bd44f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GY7IMTK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCReQMOYFbp%2FiWwLintF9errVS5VmgEovmreOCKT9pKxgIhAN6Ydrlcgdo%2FQcSyK3kJ6lPjAfM%2FK53pcgNrxK%2FLKLhTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXmdnTyKmVCWsrA8q3ANQKwbq9AnFpu3Kh9qhjTJJoMW3NOqxAyiJPO9FZVqlTctYZoJiWj%2FApkIuKlCsUBqv3V7aTt9XpJ9ZstEkQHBtm5vAog7POw9DWlqvIUfbYeM5%2B5K1cSzzzaVZmh5WDAAMuRUIaUFcxwS4SRJfdr3JRQz1WfKVeDZmdZrzwlX7doh6%2B%2FOHgvbXUfTaVRC0frg6yAreYKP8lLkPxT%2BiLDpL7%2BfYrz%2FC2nNgDUngdHN459W61ZR2QdwC%2FniC3cDIpicRkW70klaaBtLxR%2Fk3qXLwtZh8Akuj4Y2oxPU1Q1fMCict0QlIDUQTAZp1C8jicJ1wB746gOLzfAmAQZWqevwZzwl0ryC8CBuZ6B7PUCbBNp3%2FjsmI59SheYD0CyXFFCLHVj1%2Bzw%2BLHRTC32biOti%2F74bqtLN9DgxPeBNKt1Mp5b0%2BLvwQcr%2Fcj2Eqv9r9LEq0n1QjESa1pWmRUrMrjq9ZtecYPkRsfx37lGo2XfXpAkUCSsiIisaDM3nh5oat3j3r52iV92axhUn5kWpkMXfZf5Y9%2BTAs%2F0iqdEn3imFPRpcetVsWvc0Z7dJYHy3HSbsLNyv9dRAMgWkxPrgTaGkCk2UFGWTKY%2BNPZdRXIOuGo98EeyruwGiaYRuawzDUo569BjqkAee%2BldEvbL5yeZdNBmhgTlUbsu33MxZPh8IFKf%2BkDAX1%2BFkDVgZqtSc9M4JBU78euTryu7QhDm0eJEVGw6edI8zUaNgKPudyIKsTVqtFJXc1YMjLwS%2BG%2FClII9ot7TXfpECfMNW9y%2F%2FhiGPMW7OxRfZmO9Z%2BDMjMYcxJxnRFEXN7Oyc2O%2BoGFtHUzkKbFW16uxMoJaeke9kHuzAXwYHheZD%2B1Kbi&X-Amz-Signature=c218afa3faca199fe3225e03de02c365b657a1d5c631acc6cccf579251de74e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
