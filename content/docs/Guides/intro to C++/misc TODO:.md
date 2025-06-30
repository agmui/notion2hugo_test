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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRG2MQG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6jrKKvcrX1CdLxIj%2BfTxGBre8M0ShOx1IlzGLrTX3CAiEAkzGYDbHorvclCIospH6AD7mi6IxaibK0jD619w1U5ngqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgF2QufoXlO%2Be7ncircA6aTAPirn9Js8DYzZhXM0tRilsTFuD0Mi1COJOpC9CruRk%2B%2FiH7oiixOPfZM3zFdhip0tIL6iTBiLBt2Yz5Km9P53OUK1rPbdWwbcNbxkOYMtIFkQhqSPBpDjN7fcaGwYb8k%2BKkQJFZYpN6gJUz%2FE9GmL%2FJ6RVVLSgytc%2FlAUPbZun3AxaiAqWEUdHU6pInzr6HZ39tepPeSHfvgoO7AnXHvVoCE70N86aYcMXJYeuSv88Tc7t8sUfKcqToBlfkJ8QpZYDjsdXrfXDZwQvoLVW5Cjxaw22TM02j%2BfgkMHhXp1ne1hE3hUQIJz0vmTTnsRrika8cn2Zty7WzlwV8UvwcleKfQM%2FncVyqdAUnZOthPGYzy2tdY%2B1kg10IFVEjpVAVlRn1jWQlxoixZQmr2cl%2BmmGW2VS4NXkncutP4zgIGTumIwDzPex%2BZEDCmHA%2BkqL5nFudq4dKB7Yk75UBnNBg1kEXIGw%2BbJRpmM8%2Fu65DnaPdF8AOZDGLNVp%2FevmaskUEsAANs2qgD0k0%2FY5cTTihb8NRNaMrvY4NiUe2ANm7LnmJWwCxvfi8wjxeBZi6pQ52VI81C%2FQ4TGGAJP5nseuYJnKjJGqNBkmNSwKylldeDW7ZR7e%2F7I8tsnlcsMNGmjMMGOqUBeM2bgJpw9P7z3V%2BAjJXNgriec4huBuRrBjxGO2Yr%2BCqM%2F2rbU1e1LI5sneuja2P03IfGwMGVERfG40dhecDZdyfnj1p0mhsP1srgaY0UlDQv5t7Vunh6ACRgCi0WrMpdcjtSjjv3hwpQ0NvKlgGXkI9BalOKjsKzG1MM6QnsuKOhs7I0ULrkenFkWcaykWVfkMAwAbYPHp0tBxscNGafFN6E317Q&X-Amz-Signature=9a96513db31c35c874895cd8b4d61fbb3441df2e82332ea46039c08f96cc8f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRG2MQG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6jrKKvcrX1CdLxIj%2BfTxGBre8M0ShOx1IlzGLrTX3CAiEAkzGYDbHorvclCIospH6AD7mi6IxaibK0jD619w1U5ngqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgF2QufoXlO%2Be7ncircA6aTAPirn9Js8DYzZhXM0tRilsTFuD0Mi1COJOpC9CruRk%2B%2FiH7oiixOPfZM3zFdhip0tIL6iTBiLBt2Yz5Km9P53OUK1rPbdWwbcNbxkOYMtIFkQhqSPBpDjN7fcaGwYb8k%2BKkQJFZYpN6gJUz%2FE9GmL%2FJ6RVVLSgytc%2FlAUPbZun3AxaiAqWEUdHU6pInzr6HZ39tepPeSHfvgoO7AnXHvVoCE70N86aYcMXJYeuSv88Tc7t8sUfKcqToBlfkJ8QpZYDjsdXrfXDZwQvoLVW5Cjxaw22TM02j%2BfgkMHhXp1ne1hE3hUQIJz0vmTTnsRrika8cn2Zty7WzlwV8UvwcleKfQM%2FncVyqdAUnZOthPGYzy2tdY%2B1kg10IFVEjpVAVlRn1jWQlxoixZQmr2cl%2BmmGW2VS4NXkncutP4zgIGTumIwDzPex%2BZEDCmHA%2BkqL5nFudq4dKB7Yk75UBnNBg1kEXIGw%2BbJRpmM8%2Fu65DnaPdF8AOZDGLNVp%2FevmaskUEsAANs2qgD0k0%2FY5cTTihb8NRNaMrvY4NiUe2ANm7LnmJWwCxvfi8wjxeBZi6pQ52VI81C%2FQ4TGGAJP5nseuYJnKjJGqNBkmNSwKylldeDW7ZR7e%2F7I8tsnlcsMNGmjMMGOqUBeM2bgJpw9P7z3V%2BAjJXNgriec4huBuRrBjxGO2Yr%2BCqM%2F2rbU1e1LI5sneuja2P03IfGwMGVERfG40dhecDZdyfnj1p0mhsP1srgaY0UlDQv5t7Vunh6ACRgCi0WrMpdcjtSjjv3hwpQ0NvKlgGXkI9BalOKjsKzG1MM6QnsuKOhs7I0ULrkenFkWcaykWVfkMAwAbYPHp0tBxscNGafFN6E317Q&X-Amz-Signature=4848cff5e372e3d09c76e2bb11d728120a18fa4ad7a9a97080a48424fc1b9d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
