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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYPPEGMU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCHACoBppsp%2BCVT5LgDWJYEPGQIZCPNb1i1QgGwm3bxJwIgQKUUmPztUoDs8dYpctKG2xbAqIhiYzUPW15pADBRUDUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjpekjCDSg9gk0M6ircA%2Bnoh65c4V5KvVVUwpHiyAbgguDMSbqQ6VSeckSJAjAXWId4SH8n2jby%2BIcBxbkEXHhjjy%2FfsmJz6a%2FI8fT7dlWx0ZgxBd%2FGLPpbTTg6hmt6q8oILt2%2BH%2Fv0tqpOB7Nijm9aaII8DAWQAlNHBc90Z3bvPTpYBgId%2BMX2mr9yIZVCkGxOoa%2F%2FFWS5K7fHS7i2X9jqAMn8qpB1kldhhlXKz5xMUA3h7G6LnBgLCRn%2FSH%2F9p1FcvZVrZBSSTNrjKvx7hg4XkPhdhKguJ6Rrj%2BwU6p6y%2BZkVxQvNCqqahsguWWXt6OGT0Ta0jmlkEG4nu6lovW7WO8NrQUr%2FeQ9QKf2RxWEyOilmjG5nW5i7nscNoFhy6lia6%2BwgPgg0bgcITW0quQQ9UDIXRRNYqi%2Fp3kEXNmb0l5XjuxrnP0026xmlVTBiM4ZCjChONflk7KPbTYvd%2B4lWz1My0Wl3nZ3w3P69LrREqs0SjStv8q4P516QM%2FNoXdIsTE7a4%2F2P%2B6Q2MgSlxJ8jnxbH2Mi%2FuNkmhr9WIHBwh8B076sOHxMemCagOaaeeHTza3%2F5Cn8jkMOSRPUhjQIAzazBEHaoYMb2zzoWCcAv4Medgm7BXn0zjtwDu7cNq0WEiUr%2FqkJQ8GUoMN2M0L0GOqUBQNjBrphWhZQcivRV9KxQGGFYENoRrZ0u6ONOroxmXoxSjg65e1vPUZ0HRKbv8VjwPDbWQKUL5yF%2BQ%2FIEqn97rWVWzTcxS6RHTKPpH%2F%2BREi%2B3XSYQ9ugU5qs5f8eHg5MOK9lnvSHIz%2BP9QVjInmWg7BlKs3l98OoLsS1m6jyovz2husICZHR33ILKUEe1Jb%2BiywG1G4iWU%2FIWYS79q3sUP43jZiBy&X-Amz-Signature=9b46a16531c82ed63e945c0f3f561c316b456e17dfc2245f880526ceee4dbd10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYPPEGMU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCHACoBppsp%2BCVT5LgDWJYEPGQIZCPNb1i1QgGwm3bxJwIgQKUUmPztUoDs8dYpctKG2xbAqIhiYzUPW15pADBRUDUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjpekjCDSg9gk0M6ircA%2Bnoh65c4V5KvVVUwpHiyAbgguDMSbqQ6VSeckSJAjAXWId4SH8n2jby%2BIcBxbkEXHhjjy%2FfsmJz6a%2FI8fT7dlWx0ZgxBd%2FGLPpbTTg6hmt6q8oILt2%2BH%2Fv0tqpOB7Nijm9aaII8DAWQAlNHBc90Z3bvPTpYBgId%2BMX2mr9yIZVCkGxOoa%2F%2FFWS5K7fHS7i2X9jqAMn8qpB1kldhhlXKz5xMUA3h7G6LnBgLCRn%2FSH%2F9p1FcvZVrZBSSTNrjKvx7hg4XkPhdhKguJ6Rrj%2BwU6p6y%2BZkVxQvNCqqahsguWWXt6OGT0Ta0jmlkEG4nu6lovW7WO8NrQUr%2FeQ9QKf2RxWEyOilmjG5nW5i7nscNoFhy6lia6%2BwgPgg0bgcITW0quQQ9UDIXRRNYqi%2Fp3kEXNmb0l5XjuxrnP0026xmlVTBiM4ZCjChONflk7KPbTYvd%2B4lWz1My0Wl3nZ3w3P69LrREqs0SjStv8q4P516QM%2FNoXdIsTE7a4%2F2P%2B6Q2MgSlxJ8jnxbH2Mi%2FuNkmhr9WIHBwh8B076sOHxMemCagOaaeeHTza3%2F5Cn8jkMOSRPUhjQIAzazBEHaoYMb2zzoWCcAv4Medgm7BXn0zjtwDu7cNq0WEiUr%2FqkJQ8GUoMN2M0L0GOqUBQNjBrphWhZQcivRV9KxQGGFYENoRrZ0u6ONOroxmXoxSjg65e1vPUZ0HRKbv8VjwPDbWQKUL5yF%2BQ%2FIEqn97rWVWzTcxS6RHTKPpH%2F%2BREi%2B3XSYQ9ugU5qs5f8eHg5MOK9lnvSHIz%2BP9QVjInmWg7BlKs3l98OoLsS1m6jyovz2husICZHR33ILKUEe1Jb%2BiywG1G4iWU%2FIWYS79q3sUP43jZiBy&X-Amz-Signature=853e7773ee1b1a5f9bcc06910714c3453a8e0db253e5cedfa94f7e7cc836f783&X-Amz-SignedHeaders=host&x-id=GetObject)

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
