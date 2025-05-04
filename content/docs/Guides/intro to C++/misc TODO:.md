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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5S2TD3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHB8ish4aqUNAAP0ALXML93RTWZ9etcfMHLTvDRTA5k%2BAiEAjczw7X1%2B%2FhwG7mwbt4JE%2FyaV8RVNMVjVduX3fIxXpsQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKe63asFz4J8%2FmEXBircA9vof49DaIsHrHTfRzOaVhkyd0bsiiVh7pjwDdrQP7vMKxKTFkWTsdmHwf8dtxX3GZOYisMrCRH7ArVSS65F8yFlBkpRW5ahPp4pu5AfbvTejeradP3UBj4TFKiCWsTy65NNa5NG7rM6id6fmJl5w%2FL3qwHWTTXC%2Buiz90nK8Wr2Rcd51MEMYR1XGXlxDAgzjTxkFr4yUEk29eiVou3VTHNKaKymbd%2B0GM%2BwVEqdNcQ5gIVCArtsIwUt1Gv2hboPNYjrdYjAzi%2BymtvhxlXfJBxPVrksE85IZDB2UlHdU%2FAoUVdtO9v50aS9dR8TQJ9N9%2BFRykMrjqgVDc%2Brcik2Jx%2B6O26eku9Xa1LnW2K2DZGeEvMwCqzW9Njk3%2B6BzPeBOY14tHALN0ZKDgJbQg2JZyAUcH7%2FuCTBXDgDKslekCpGTOo4d1jk0nVr5JEQ1UdK9skNXXtTC7ncAFW5uVM7l3fpbL1%2B0nWhdxuWc6JvZOfbDXQWmQbrLpZmO0nIPYb2Aj6WAlTH4%2BreUklAZp7PflPvcThJr5zqDbd1BAE4uNZnn5GeVGp%2FQbvPNv7vh7c%2FxYP2X3UZKf%2Bm7wtWsxlPeHGaCg6Q00uXt426NN0IZAqVXEca%2Bh%2FzSQMldgTdMPK63sAGOqUBtmTeuh8OO8Qro2keyz8fiyO4ih8Y5J13JK5jy5QIiytmyjVpmZ0p9OBnPhdgmYQTeILqUAv4dXd%2FqGZsDjv8%2F9iGFWvFZRHs8I0j3fayTLSDuq6oqCA4l6u0dfUO3zGii1a3d30KOt3I7Ho0H9f8mq0tcXv7YdFcdxwJq1hwz1LBEeJD%2F5AOQtlE2uLmNufevAEEEbCxld7Uclv2hrhbYjrrR56E&X-Amz-Signature=cab9acf6c8b7ee34991762c32b070ab4f2a17a239e9e36b8961bc7ee04073d49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5S2TD3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHB8ish4aqUNAAP0ALXML93RTWZ9etcfMHLTvDRTA5k%2BAiEAjczw7X1%2B%2FhwG7mwbt4JE%2FyaV8RVNMVjVduX3fIxXpsQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKe63asFz4J8%2FmEXBircA9vof49DaIsHrHTfRzOaVhkyd0bsiiVh7pjwDdrQP7vMKxKTFkWTsdmHwf8dtxX3GZOYisMrCRH7ArVSS65F8yFlBkpRW5ahPp4pu5AfbvTejeradP3UBj4TFKiCWsTy65NNa5NG7rM6id6fmJl5w%2FL3qwHWTTXC%2Buiz90nK8Wr2Rcd51MEMYR1XGXlxDAgzjTxkFr4yUEk29eiVou3VTHNKaKymbd%2B0GM%2BwVEqdNcQ5gIVCArtsIwUt1Gv2hboPNYjrdYjAzi%2BymtvhxlXfJBxPVrksE85IZDB2UlHdU%2FAoUVdtO9v50aS9dR8TQJ9N9%2BFRykMrjqgVDc%2Brcik2Jx%2B6O26eku9Xa1LnW2K2DZGeEvMwCqzW9Njk3%2B6BzPeBOY14tHALN0ZKDgJbQg2JZyAUcH7%2FuCTBXDgDKslekCpGTOo4d1jk0nVr5JEQ1UdK9skNXXtTC7ncAFW5uVM7l3fpbL1%2B0nWhdxuWc6JvZOfbDXQWmQbrLpZmO0nIPYb2Aj6WAlTH4%2BreUklAZp7PflPvcThJr5zqDbd1BAE4uNZnn5GeVGp%2FQbvPNv7vh7c%2FxYP2X3UZKf%2Bm7wtWsxlPeHGaCg6Q00uXt426NN0IZAqVXEca%2Bh%2FzSQMldgTdMPK63sAGOqUBtmTeuh8OO8Qro2keyz8fiyO4ih8Y5J13JK5jy5QIiytmyjVpmZ0p9OBnPhdgmYQTeILqUAv4dXd%2FqGZsDjv8%2F9iGFWvFZRHs8I0j3fayTLSDuq6oqCA4l6u0dfUO3zGii1a3d30KOt3I7Ho0H9f8mq0tcXv7YdFcdxwJq1hwz1LBEeJD%2F5AOQtlE2uLmNufevAEEEbCxld7Uclv2hrhbYjrrR56E&X-Amz-Signature=c7506242258b604a847bac950eb4eb4db05b8e053293d610e7a6a520e22564b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
