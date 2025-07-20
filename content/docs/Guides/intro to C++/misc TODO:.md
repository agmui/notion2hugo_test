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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOD2WLZD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5DEx56M5dUZAahuvLZUL%2FgARPMnugN5M9x7CPSqUphAiEAodWh5Tp7bWKE0C%2BID3Cr8lcimhw%2BXLxtmdPqpFpm3cQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FU3DA9K6dlgFX3jyrcA6VjO5aZaL9tQHeT1dMPtYiwrILi3C8abMLihecykQ5NHt74PNE%2FenQ7ArsSmTLmdDJBN5YFPnum4jglEqVOV3ck6bDRnbqjtgJSdjuQQfiy8frDNlL2UXKJI3zNVabZEZE%2BLtp8qObO%2FbRBTDv6oT%2BqrRRMIDCR8vR0oVb0usHDiu555vjBIONIgn7pX9UYg96jjWlWkHTuAY9Elt1XCY6AplttIjv%2FbWcYbDH0fTlL84x8yEccm%2FZC%2FWygXkPRjATuzRkxHdApaZONFpMZqVDBg6BgFq%2BbtV%2FOsqEsVaagwCe%2BAhj0dmWQMfk%2BEWTqTEobeFQBDWNp5KV6VoCxe9etju7F5f2K0exxzZuQqjGbe9g3rLl6YLbiCbP%2FhEYxdn%2BnE%2BVBoIE89a6Sk9kidgfVdbZXN1Bgwx3qX364LInazGSgdaQ5ebIMv%2BE%2B1HXdCzXpfFEUE05mODaaAPRBnLkFKF4gx80PwWQ5H9S5uSgPgu%2BBOvnWYHdhqp%2BNgS%2BjtEbZUWTYLON8GLzI%2BesiO%2FhGSateclTv4BycCSF1ofn7YcVSmiAaiuW07adHk4X4NqQPgJUYJvPcbcE4EQSMvJCm%2BmrzCmKwA2PabZlMSw%2FDlSmCef2HJxxvt%2F3aMN6U8cMGOqUB9104117fGI5PLRCr90ssxm%2FOVN1Fil6gK7L8r0slpauW9hKVtFoq27Qf7HVbaUFlECHBrjwcxuUFjaKXlKRQGR1lSlKMPh%2BK0Nl8l%2FVKZWw9xK2ya3nM80nDIRrxwa66nxqMEsLN%2Bb2CqHliCWWVJW81%2F1H8zbyGeOsn1I%2Fke8E2xKijcZA6w%2BsZXWOLiPsBoiRCFs%2Bg6l%2BHBgASTwZ%2FtY0qS%2FRj&X-Amz-Signature=3ffa3235ff4107ad4eb9a0ef4263afaa1065c29d29bdd3df981ecbb5cfe2193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOD2WLZD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5DEx56M5dUZAahuvLZUL%2FgARPMnugN5M9x7CPSqUphAiEAodWh5Tp7bWKE0C%2BID3Cr8lcimhw%2BXLxtmdPqpFpm3cQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FU3DA9K6dlgFX3jyrcA6VjO5aZaL9tQHeT1dMPtYiwrILi3C8abMLihecykQ5NHt74PNE%2FenQ7ArsSmTLmdDJBN5YFPnum4jglEqVOV3ck6bDRnbqjtgJSdjuQQfiy8frDNlL2UXKJI3zNVabZEZE%2BLtp8qObO%2FbRBTDv6oT%2BqrRRMIDCR8vR0oVb0usHDiu555vjBIONIgn7pX9UYg96jjWlWkHTuAY9Elt1XCY6AplttIjv%2FbWcYbDH0fTlL84x8yEccm%2FZC%2FWygXkPRjATuzRkxHdApaZONFpMZqVDBg6BgFq%2BbtV%2FOsqEsVaagwCe%2BAhj0dmWQMfk%2BEWTqTEobeFQBDWNp5KV6VoCxe9etju7F5f2K0exxzZuQqjGbe9g3rLl6YLbiCbP%2FhEYxdn%2BnE%2BVBoIE89a6Sk9kidgfVdbZXN1Bgwx3qX364LInazGSgdaQ5ebIMv%2BE%2B1HXdCzXpfFEUE05mODaaAPRBnLkFKF4gx80PwWQ5H9S5uSgPgu%2BBOvnWYHdhqp%2BNgS%2BjtEbZUWTYLON8GLzI%2BesiO%2FhGSateclTv4BycCSF1ofn7YcVSmiAaiuW07adHk4X4NqQPgJUYJvPcbcE4EQSMvJCm%2BmrzCmKwA2PabZlMSw%2FDlSmCef2HJxxvt%2F3aMN6U8cMGOqUB9104117fGI5PLRCr90ssxm%2FOVN1Fil6gK7L8r0slpauW9hKVtFoq27Qf7HVbaUFlECHBrjwcxuUFjaKXlKRQGR1lSlKMPh%2BK0Nl8l%2FVKZWw9xK2ya3nM80nDIRrxwa66nxqMEsLN%2Bb2CqHliCWWVJW81%2F1H8zbyGeOsn1I%2Fke8E2xKijcZA6w%2BsZXWOLiPsBoiRCFs%2Bg6l%2BHBgASTwZ%2FtY0qS%2FRj&X-Amz-Signature=4aa4e13a1a326533e12c9e32c2d8d89341e140ef2ea94d2eedbed58a7db4ac85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
