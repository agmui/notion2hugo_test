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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNPZDRN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2AeKji1ALz1jxfJVpLXNMAc3LXwgpDNY1gQ9vbYXjgIgGphJz69JDQR1%2BKIRmVqSoXKZYh9XtUa2V2ysANrklsEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtTJDQp6XUiXfwkUSrcAxOJ6nlrn6qUTDrKEVv2oU%2FExWOvF%2Fm4vHQvuomJuz%2FmY1NGj1COO22sn5uulXs7JLZkfbjABdWcIfO%2FWlijpBgV0sLejudyDxmRnyAsl1si%2F8eRdrRHun7bn%2F7asw1Hn9Z4hXpJG%2F3f0VZ37B2KvlUKi%2B%2FXU0164VICSf2a4KRy6BSeRb12OZ%2FNMrV5S8S5arqBOIBL4WvHHac8FbdM4EZDWRNBwB84pNvYWVCn7Vco1BU2kxwWRO0gG0wYx31Mt8o1yB9KiK6NDwmEXt5eureg5IpAI7FdFCW4elH3caBxsnr4gIY%2BkFsOovTRJB8dR6Gj8Ur85bIyMMMrr%2BkTP4S%2FBY176dn%2BPSSQsL94wZyCrLtqlr94FT0iVZlKfcT7EjcKZBeHIHBpwEmI9UQbOWjKbB%2Fp7J3KC2fVAV7iL%2B8byc43iMypIB1yqZI8huHldkCVTJOhX8EJKh81OGDNLGaC10ZQ4EtRMjYR1wd0MIDjNOSkn7UuAbBAcB7dQJ7xkywRykfn32nL6V0L8Wv6b9loXCknfkby50b6z%2FFmT%2BnUhtbdKbla0bKBsAscL%2B0W5ojDrstS7SKogJB7ADR6ZJkzDK1aciJBJsh5f26Xj9K3ueH%2F%2FgRHdvG%2BNsRJMK76kL4GOqUBPgwlUa9GtSW4eJIR%2Fha05YCe%2FsAKTeYCPaSyqMO3sr75ne%2B03CL3oXG8jJpTNHIzWMMGYdklDnp7EgmJl2kPLlVxXAYJJIJODlSIXgKNmIeDaqSILExVAD0VuBG8yeqxvoIu0Ss1TbJ72tIZLxms8554OzfYSaT5DwoiCQYXAHWUp5aQ6iRTYemZPX%2FuniaRm7P9B6YWptUYIVJewzz4fd6e1Bxe&X-Amz-Signature=fc5e0fd172a9555e0636d620af0c68fa37b6b3fce76a0ef5d3df3ba8512e43dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNPZDRN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2AeKji1ALz1jxfJVpLXNMAc3LXwgpDNY1gQ9vbYXjgIgGphJz69JDQR1%2BKIRmVqSoXKZYh9XtUa2V2ysANrklsEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtTJDQp6XUiXfwkUSrcAxOJ6nlrn6qUTDrKEVv2oU%2FExWOvF%2Fm4vHQvuomJuz%2FmY1NGj1COO22sn5uulXs7JLZkfbjABdWcIfO%2FWlijpBgV0sLejudyDxmRnyAsl1si%2F8eRdrRHun7bn%2F7asw1Hn9Z4hXpJG%2F3f0VZ37B2KvlUKi%2B%2FXU0164VICSf2a4KRy6BSeRb12OZ%2FNMrV5S8S5arqBOIBL4WvHHac8FbdM4EZDWRNBwB84pNvYWVCn7Vco1BU2kxwWRO0gG0wYx31Mt8o1yB9KiK6NDwmEXt5eureg5IpAI7FdFCW4elH3caBxsnr4gIY%2BkFsOovTRJB8dR6Gj8Ur85bIyMMMrr%2BkTP4S%2FBY176dn%2BPSSQsL94wZyCrLtqlr94FT0iVZlKfcT7EjcKZBeHIHBpwEmI9UQbOWjKbB%2Fp7J3KC2fVAV7iL%2B8byc43iMypIB1yqZI8huHldkCVTJOhX8EJKh81OGDNLGaC10ZQ4EtRMjYR1wd0MIDjNOSkn7UuAbBAcB7dQJ7xkywRykfn32nL6V0L8Wv6b9loXCknfkby50b6z%2FFmT%2BnUhtbdKbla0bKBsAscL%2B0W5ojDrstS7SKogJB7ADR6ZJkzDK1aciJBJsh5f26Xj9K3ueH%2F%2FgRHdvG%2BNsRJMK76kL4GOqUBPgwlUa9GtSW4eJIR%2Fha05YCe%2FsAKTeYCPaSyqMO3sr75ne%2B03CL3oXG8jJpTNHIzWMMGYdklDnp7EgmJl2kPLlVxXAYJJIJODlSIXgKNmIeDaqSILExVAD0VuBG8yeqxvoIu0Ss1TbJ72tIZLxms8554OzfYSaT5DwoiCQYXAHWUp5aQ6iRTYemZPX%2FuniaRm7P9B6YWptUYIVJewzz4fd6e1Bxe&X-Amz-Signature=7f53d710faa062ae096452e2cb7b3a0a0c88f495a1e2f701bb006a04e4dd280a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
