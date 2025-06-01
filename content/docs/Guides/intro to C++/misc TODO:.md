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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUETE56L%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD3nYhMK4FRGALJbCysvGZyCAI4KqvHOXnUpfe3ZrgaWwIgb2B724wENAuln4dT%2Fnhqc5BooEIqinxQTzGMfrqddbQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbdWgUPgGmrR1IvJircA67jymcBerfKeVEuE%2Fpm3DeY2kdN7QOYszSXdhVoxzH5OsQ6f4JqyJIvjR3rb%2FbQagqWOEKTWxMdGDoDaEnqiYSQgOqdQRY5VuGYBTL3lygrN2A0yJXx7x0Guhys2lnZcFukmS3Xmgb%2FUPZxi1fEPZwnekXa5Zz%2Fvxrg7aCgV3KT%2Bw7vXnoKh3j7M8%2B11MLC5mHjX%2F51p9%2FZjt9fbJZdLYV95C%2BN0UUyERhxxrpkGOKBusLuN2bitFpT%2FMOBuJhfUYjtNp0KrORegNrIsjVgqP8WBsluOwliVTva9nRj2UWwPpzj%2BeIENdU5j9BdBL3%2Fn%2BA4KfYXwMMpmvLaxhLJ%2FPmyQp5KotFMTfg6Mqsyuw9jh8en2v4OgG7QwhJA3I06K18zVLXwhMVrjbQ8AkomG0AztoaXqZqKGp01NJCMKA9tBbTr23%2FlMlUz5%2FohAiis1qGfGM9fpzs1O9envlqa0QF6n1wYoLj8%2F4HXN3HtnPv5oU4cAjzAUSsIxWPkODmiDmTHJXzgkZ6m2r99%2B%2BCpfaeGt86mw5UwsLKwZqWp9NVJwYFY2UsOyR9qXGhvtSQMsgUqfr4ZkqvnhBWiyf%2BIwpdfUWnAH0x2lR13mkNIAHC5C65sobHcfFMduXx0MNba78EGOqUBpReglsFYiv0QPgq7%2BBgVUn%2FHs3CdREQ65BA95DAhe7EwyDvH2td4Fqklm%2BE51dBS%2BeI3yuhWTwUX6brQI%2FnwpcE2RhtDf%2FQvD6pSOziGD9IdO%2BnO1owiS%2F%2F6P1a1wL3OV94NC%2B%2B2wjj5Qw3SarruP5SIVDV%2FH4UBlBFykKiVfX9zLsEZ7v%2BgzoefoO9YfgbRBRcU1MFyY8fLU47B7ZKoVLU9mLw%2B&X-Amz-Signature=035f4a51d88d33e8135f4b84e28f1e141882924269fd649186e77d904088d8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUETE56L%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD3nYhMK4FRGALJbCysvGZyCAI4KqvHOXnUpfe3ZrgaWwIgb2B724wENAuln4dT%2Fnhqc5BooEIqinxQTzGMfrqddbQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbdWgUPgGmrR1IvJircA67jymcBerfKeVEuE%2Fpm3DeY2kdN7QOYszSXdhVoxzH5OsQ6f4JqyJIvjR3rb%2FbQagqWOEKTWxMdGDoDaEnqiYSQgOqdQRY5VuGYBTL3lygrN2A0yJXx7x0Guhys2lnZcFukmS3Xmgb%2FUPZxi1fEPZwnekXa5Zz%2Fvxrg7aCgV3KT%2Bw7vXnoKh3j7M8%2B11MLC5mHjX%2F51p9%2FZjt9fbJZdLYV95C%2BN0UUyERhxxrpkGOKBusLuN2bitFpT%2FMOBuJhfUYjtNp0KrORegNrIsjVgqP8WBsluOwliVTva9nRj2UWwPpzj%2BeIENdU5j9BdBL3%2Fn%2BA4KfYXwMMpmvLaxhLJ%2FPmyQp5KotFMTfg6Mqsyuw9jh8en2v4OgG7QwhJA3I06K18zVLXwhMVrjbQ8AkomG0AztoaXqZqKGp01NJCMKA9tBbTr23%2FlMlUz5%2FohAiis1qGfGM9fpzs1O9envlqa0QF6n1wYoLj8%2F4HXN3HtnPv5oU4cAjzAUSsIxWPkODmiDmTHJXzgkZ6m2r99%2B%2BCpfaeGt86mw5UwsLKwZqWp9NVJwYFY2UsOyR9qXGhvtSQMsgUqfr4ZkqvnhBWiyf%2BIwpdfUWnAH0x2lR13mkNIAHC5C65sobHcfFMduXx0MNba78EGOqUBpReglsFYiv0QPgq7%2BBgVUn%2FHs3CdREQ65BA95DAhe7EwyDvH2td4Fqklm%2BE51dBS%2BeI3yuhWTwUX6brQI%2FnwpcE2RhtDf%2FQvD6pSOziGD9IdO%2BnO1owiS%2F%2F6P1a1wL3OV94NC%2B%2B2wjj5Qw3SarruP5SIVDV%2FH4UBlBFykKiVfX9zLsEZ7v%2BgzoefoO9YfgbRBRcU1MFyY8fLU47B7ZKoVLU9mLw%2B&X-Amz-Signature=b8860dbb3a6b0d2918d4a137fc925b25c0050d920c8fe73eb39db71276f9fdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
