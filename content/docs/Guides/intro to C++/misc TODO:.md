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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHQQZ6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DBOT%2FHx97o%2Ff9P7y9fXuAupAMZJ6fHikZ0G4FNI7SgIgfPeRq0FyqZLS3nX724xDUhsWecPv1AVlEA%2FKSMjyR3Iq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNApzF8YKVwnKVWNnSrcA0vn64pE0zLbLcHsI2Yl5%2B5SHH0dvok5BSYY%2FJHX47021AMgrGZ2hdd7F4x49RJEWZ82XAB1m%2B2ohDDwnYcTS7TC%2BJGNZApjDpAtP9TxTLTD87I%2FxLnjT73zbj1oWOywmM43y%2F9N%2BghTkDn1blXDC2JRIHfsjQid1TDKOYABnQ7nkM%2FU87R3HAsHt0aRf8w7r7mVOlugZoox64yJacRrN93l15bPoFIAc7n%2BYP5BO1SLkpQb8ReXVWpMBfZRkXUaL%2BkKth9rDXLNNGjfvga7c52SJ2zkG6ayj%2B6D1nyI%2B2bH1PYKnvzHagceL%2BxLHvu%2BnwOTbzsOMkhXhRaoFG%2F8x7M3qlF7vpX3XL9NYz7UKMEIkIvhANvm7gK7c8gGmga63fVjC8sFqs0GBbABmCSIV5oCvOen8tKeUzr5XrdB%2F7ySidipPF03BBAdq9L5fY2iegZzMT897237ROSwdy%2FFVvXxdeDmbW6cqq38Zp%2FxtusPQSkrgizgSnAzHWcExAqIC1bP8bEwQudp2m%2BYTIF776Vm4Jsig4vTgPWr2aBcBfX5zqnP0IOXaCvCvC1%2Bqo9niGXNde92GrV6s662PUKUCAPU7jaAkxnORs0k9pDwUJ5pYiglwaf7QOPvP3AKMOGRjcIGOqUBG%2B4FBuZhZ3ElkAQx1fcSduEIUG9KfYbTGTQNoV6Xxf9jkEYqffAPEkMoU2Oq%2BTYsI%2F0brloy68VRo%2B%2FOi3XeaSz%2FYG1roW9QqNVKxEmsrOqA6ul4kvGnbwogxG%2FjkbB16xflXAtOZ7nV0DSIPcOjCdQjAXF8gKDWGpe0RO90n90WJULlcmKBAFJyS8Ox1%2B8orPzloB8e%2BUgYui4tE5%2FYlDn6x0V0&X-Amz-Signature=c540c96a9c138a65194cdeb9921568156be94f80340b8d45850d7c67684d732d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHQQZ6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DBOT%2FHx97o%2Ff9P7y9fXuAupAMZJ6fHikZ0G4FNI7SgIgfPeRq0FyqZLS3nX724xDUhsWecPv1AVlEA%2FKSMjyR3Iq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNApzF8YKVwnKVWNnSrcA0vn64pE0zLbLcHsI2Yl5%2B5SHH0dvok5BSYY%2FJHX47021AMgrGZ2hdd7F4x49RJEWZ82XAB1m%2B2ohDDwnYcTS7TC%2BJGNZApjDpAtP9TxTLTD87I%2FxLnjT73zbj1oWOywmM43y%2F9N%2BghTkDn1blXDC2JRIHfsjQid1TDKOYABnQ7nkM%2FU87R3HAsHt0aRf8w7r7mVOlugZoox64yJacRrN93l15bPoFIAc7n%2BYP5BO1SLkpQb8ReXVWpMBfZRkXUaL%2BkKth9rDXLNNGjfvga7c52SJ2zkG6ayj%2B6D1nyI%2B2bH1PYKnvzHagceL%2BxLHvu%2BnwOTbzsOMkhXhRaoFG%2F8x7M3qlF7vpX3XL9NYz7UKMEIkIvhANvm7gK7c8gGmga63fVjC8sFqs0GBbABmCSIV5oCvOen8tKeUzr5XrdB%2F7ySidipPF03BBAdq9L5fY2iegZzMT897237ROSwdy%2FFVvXxdeDmbW6cqq38Zp%2FxtusPQSkrgizgSnAzHWcExAqIC1bP8bEwQudp2m%2BYTIF776Vm4Jsig4vTgPWr2aBcBfX5zqnP0IOXaCvCvC1%2Bqo9niGXNde92GrV6s662PUKUCAPU7jaAkxnORs0k9pDwUJ5pYiglwaf7QOPvP3AKMOGRjcIGOqUBG%2B4FBuZhZ3ElkAQx1fcSduEIUG9KfYbTGTQNoV6Xxf9jkEYqffAPEkMoU2Oq%2BTYsI%2F0brloy68VRo%2B%2FOi3XeaSz%2FYG1roW9QqNVKxEmsrOqA6ul4kvGnbwogxG%2FjkbB16xflXAtOZ7nV0DSIPcOjCdQjAXF8gKDWGpe0RO90n90WJULlcmKBAFJyS8Ox1%2B8orPzloB8e%2BUgYui4tE5%2FYlDn6x0V0&X-Amz-Signature=983fc1222ef881a14730e264174c6698c759e2eb5774f49a86b56892bcc2cfd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
