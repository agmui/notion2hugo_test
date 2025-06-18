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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYW5QV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCv7YyqQt1b8KoHOLjWeJJrpSg2h4Cz3JGoO5uOGFajgIhAOwopRiI4c5kvQ%2BMvZNwScB%2Bh8SzbzHDqv6u8dYMDfhdKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gZmlcOVRxxjUYN0q3AO4cS1NiyiWgjkZqbXKMHpmSvkz4IK70eew0QbdQv2SNaNbOTtCWWdiReAnHSY%2FXduMg2XXMMoOepNF1tedTFKcnERWp0342eaPo0xp4oCMrjGr6xXHRiBClRxvLokdz6Ao7KvpRV4h%2FB4j94I0TkBKNwbU4Pd3Qh6CUqVNeR4lsHUmTLNTb2fROh7XlIY584xGFWcstAn%2BBczn12ST0G9id3Ty43aisDp8%2FV67gzbKR3mllPqyojoyuxjM0Mkn7JMVp7zkuTzsMz6saxeXaMXyximVnFWa2vGOpRyCOzxA9BF7Et6IwTTR9aUoHlFuaTcIyoMUNMGIucSsMDqbuNyxNjpIW1gfHzUiGBv7B7cTtzmo1Nv7Zj845Ib%2FUg7rc5rQFe9JL3EC2jpXXqHv4BitqECU%2Bo6FrK78Btr0BXAuV4BB6jP9C0%2F%2FklF18fRdI2%2BCb%2BE3ZDyRkNcPqYW5SI%2FppvdapORWVlrnHZfG%2BhqGcoPpRwnQxq1R7ANKmxM1P%2BfWtMOYRdPPTl7MT%2FLEceTvs4%2FxKY0ztyVwpohf2I2rKxIL0EeAWI1Ks6m%2FGZ%2FwegLsoLN9yy%2FFPvZnKeuifzRaN8AMaSQhngMwYBBnSLdsVTuG9NCWkyKyJJd2TzDroMjCBjqkAVs%2FGcXdDOMxk6Nkgnz4W9CxrLNmYFe%2FJLj205lEknXceUb8byB%2FNq9wCZQKqQkSNOUpF%2Bgl4wevedFIJQfE5%2FmQtWKg3zoOYEgmmnZwHfSoTt%2FMvFta4URC5FlIUtt9jDQYllUj49H8lOMfVUwVo6KrjYt%2FxGP6eBssjdFiZ6EIFtqBriGbm5QrIeHPhVenwsDTnaqxrulUzmsvaRFA4xYs%2BeTc&X-Amz-Signature=2b333bf4768e3ec888b95da16c570b351ac22ca3ce4b2b5224b895f8919feac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYW5QV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCv7YyqQt1b8KoHOLjWeJJrpSg2h4Cz3JGoO5uOGFajgIhAOwopRiI4c5kvQ%2BMvZNwScB%2Bh8SzbzHDqv6u8dYMDfhdKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gZmlcOVRxxjUYN0q3AO4cS1NiyiWgjkZqbXKMHpmSvkz4IK70eew0QbdQv2SNaNbOTtCWWdiReAnHSY%2FXduMg2XXMMoOepNF1tedTFKcnERWp0342eaPo0xp4oCMrjGr6xXHRiBClRxvLokdz6Ao7KvpRV4h%2FB4j94I0TkBKNwbU4Pd3Qh6CUqVNeR4lsHUmTLNTb2fROh7XlIY584xGFWcstAn%2BBczn12ST0G9id3Ty43aisDp8%2FV67gzbKR3mllPqyojoyuxjM0Mkn7JMVp7zkuTzsMz6saxeXaMXyximVnFWa2vGOpRyCOzxA9BF7Et6IwTTR9aUoHlFuaTcIyoMUNMGIucSsMDqbuNyxNjpIW1gfHzUiGBv7B7cTtzmo1Nv7Zj845Ib%2FUg7rc5rQFe9JL3EC2jpXXqHv4BitqECU%2Bo6FrK78Btr0BXAuV4BB6jP9C0%2F%2FklF18fRdI2%2BCb%2BE3ZDyRkNcPqYW5SI%2FppvdapORWVlrnHZfG%2BhqGcoPpRwnQxq1R7ANKmxM1P%2BfWtMOYRdPPTl7MT%2FLEceTvs4%2FxKY0ztyVwpohf2I2rKxIL0EeAWI1Ks6m%2FGZ%2FwegLsoLN9yy%2FFPvZnKeuifzRaN8AMaSQhngMwYBBnSLdsVTuG9NCWkyKyJJd2TzDroMjCBjqkAVs%2FGcXdDOMxk6Nkgnz4W9CxrLNmYFe%2FJLj205lEknXceUb8byB%2FNq9wCZQKqQkSNOUpF%2Bgl4wevedFIJQfE5%2FmQtWKg3zoOYEgmmnZwHfSoTt%2FMvFta4URC5FlIUtt9jDQYllUj49H8lOMfVUwVo6KrjYt%2FxGP6eBssjdFiZ6EIFtqBriGbm5QrIeHPhVenwsDTnaqxrulUzmsvaRFA4xYs%2BeTc&X-Amz-Signature=9f686c418365cff8f41dc0ddfe81efd6b01c6ec2cda43ff30772c3948f2909f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
