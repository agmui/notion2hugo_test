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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45FSFUP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEhyOANSDPUtuO5BZ%2BSLftTmJddKTKN65TxcQjNN03EXAiAHBjjk2CJomOTVDOXwC2jv6uoq9npIjSf4tsZHWNrNkSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp0h4dtFVSz1u%2B29KtwDXMp22IIUTNqmhG966wm3N6fooYf7w9tRyOOJ6HNFBI9qQXNX0hbftixSVFXfxhZg4IXfnpnevxonjyY%2Bw2iMHXw2%2BN4%2BZBqvgdRkF%2F8iznR0b8kdgi%2FRx3ApwexaeCcqNNpi2LHRyLRiPQZ2Z4IAx2b3%2FZdWJIxLXBfz8Z%2F8luUkHsR0YsqIPEwBDjKPHmsn4eO4V2URT0bY8KYWWsw7JWgDxd9RouX%2Bwg2lL%2Bc54oyYJsRK5n8hlHbdPuAfpMxh00jYnryaI91kL3OnUBWhISKSL1KNlHsCFh0n1JyDx46xd0uOfKeb9jM8%2FfiPz%2BdOEldtbznr26DsYix3FnAgTBeEh7HDgpDWvUYXawbulSF%2F8Iv4EAz24GzRdxE7BtMve4Atzm1vFh8DcngbCv%2Fvdj4GK%2FdzYwR2cNo2A6M0L03UzA%2FOF6RpTF5lAVtPekUGlB%2BoN6iubahZU7roNiQ%2FnhDtRsLx26jWcAkUzUKZ538%2Fv0j5YYqMPyhXn4WYvTCeopp5No2vWamasP1Y1neQ8nkA3CI5XUP1d1kvrfd%2FCv123GxddWGe3MmL8%2FKUxCK5Wf5guTAvkRpJyiqS0lnbx1qJIa50lgt6Wz%2BZmhWgOFrjIx896%2BO2LfY%2F7mQwpp%2BQwAY6pgGctBXXiCKemOh9fm3HV2nlvZ1bkOxLJaOjnRghOQxKZXYAulzTV9%2B%2B3pvbSwcZxt18ZAs0s7mdbUBFaLrEnLSmVGRO%2FZEgwzrgu1w0wgGVoRstHfOeaoFCCSK9rF2nHzWYXtDyRBO0r4djJMweeiZMYO5FD%2F%2BWP9IhK0U2i8vykgxT6NIPdcNARX2xyyA2VKGkXiYiOjtas2yeqIGKRDK5fehkJMBP&X-Amz-Signature=ef18bbe6ec4c6c6f9dfb416b865c65952c0f68efb77fe34e571e33ec64815183&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45FSFUP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEhyOANSDPUtuO5BZ%2BSLftTmJddKTKN65TxcQjNN03EXAiAHBjjk2CJomOTVDOXwC2jv6uoq9npIjSf4tsZHWNrNkSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp0h4dtFVSz1u%2B29KtwDXMp22IIUTNqmhG966wm3N6fooYf7w9tRyOOJ6HNFBI9qQXNX0hbftixSVFXfxhZg4IXfnpnevxonjyY%2Bw2iMHXw2%2BN4%2BZBqvgdRkF%2F8iznR0b8kdgi%2FRx3ApwexaeCcqNNpi2LHRyLRiPQZ2Z4IAx2b3%2FZdWJIxLXBfz8Z%2F8luUkHsR0YsqIPEwBDjKPHmsn4eO4V2URT0bY8KYWWsw7JWgDxd9RouX%2Bwg2lL%2Bc54oyYJsRK5n8hlHbdPuAfpMxh00jYnryaI91kL3OnUBWhISKSL1KNlHsCFh0n1JyDx46xd0uOfKeb9jM8%2FfiPz%2BdOEldtbznr26DsYix3FnAgTBeEh7HDgpDWvUYXawbulSF%2F8Iv4EAz24GzRdxE7BtMve4Atzm1vFh8DcngbCv%2Fvdj4GK%2FdzYwR2cNo2A6M0L03UzA%2FOF6RpTF5lAVtPekUGlB%2BoN6iubahZU7roNiQ%2FnhDtRsLx26jWcAkUzUKZ538%2Fv0j5YYqMPyhXn4WYvTCeopp5No2vWamasP1Y1neQ8nkA3CI5XUP1d1kvrfd%2FCv123GxddWGe3MmL8%2FKUxCK5Wf5guTAvkRpJyiqS0lnbx1qJIa50lgt6Wz%2BZmhWgOFrjIx896%2BO2LfY%2F7mQwpp%2BQwAY6pgGctBXXiCKemOh9fm3HV2nlvZ1bkOxLJaOjnRghOQxKZXYAulzTV9%2B%2B3pvbSwcZxt18ZAs0s7mdbUBFaLrEnLSmVGRO%2FZEgwzrgu1w0wgGVoRstHfOeaoFCCSK9rF2nHzWYXtDyRBO0r4djJMweeiZMYO5FD%2F%2BWP9IhK0U2i8vykgxT6NIPdcNARX2xyyA2VKGkXiYiOjtas2yeqIGKRDK5fehkJMBP&X-Amz-Signature=39613d2cddcf82288aa96f4d736024a1f78814a1520677faadfb27492f342300&X-Amz-SignedHeaders=host&x-id=GetObject)

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
