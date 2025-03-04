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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIRIYFN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcRlhsPTlPis11SKguGA7LnD0YYtSz1vi9XVJhp%2BeLIAiEA%2FiJBoMjY4wSDncCChiXb32CDIsuWViEX5zAfn8s6WRAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCysSTnyJk8jQL9UvCrcA0xCQN9UfNwGuhgS2pUSqCPujP%2F6Gt%2FCsTBqw9YR2aT2%2BWSeQoav2igTap1prGMZp0yMic2pgIJtDO1i4Imu82gU1%2Fgy11E5yJpxhJNIMan%2BUJI0rJ1wFxL8e%2F9aANc%2F5pnbbdskDVwgw%2BwIVNw2HhDmVrlZ22NSIk95gQ0eSMFWMhN2f58MXh6wYXxUz21klpZ1N8UxKnueACVFtRpVsmhPh8vZinosBGlBwMP9uBdfjj07sZ6Uc3%2FRTlSVaff9T%2BvHHpf9Zc8DmY6l91eaekaZ2EfwrJto4OIWL7nCrIJYiqyrpzo1SYJOr65SEFBmpYVov0OLBjBFSVb9RsprUb11WnZSbAs2ZlQ9I1yCP%2BbDsYs3bBl1TEnC9xA9OXMIweXBrQMdJB3yYTbtRBfreMv30GEDV%2FVpzZ8gxErVT%2F10VliBYSPndLcQNMN2nUKsWbsRCZlpRdz6SNIydSNZnNveUFS8KQnQ%2FIk9TQAkWWUNzFvNMNLexHufLJD8dHR%2FBqZA86jcoU%2BdclWsB0doW9s4B8cXSbV5D%2BT3oNoJOfezxzHC5A7iJxz9CwFZyoEshJRfrDziJOhUvDGY5nC65LdIDlyXtnP6B%2F9OdYn3Y66ZvcDNdnvFJ%2BCdCNQ3MIGanb4GOqUBSdQrOqlMHLrIP2BOAP1XnYeyIkn0Htj3%2BIWsFLL4mcbPTQJgqJyjkU7imDsF6dSVYurSUAReXoqPpWSyNAXoE4R%2BrztdxH%2BViR9IiCIE2mIfhU2Dx4%2BrqsKUO8CeEucjhcuLbdAKnBIsWQHB6Sf0rdiqQgXxIZpYOFZlpTMzA8k5d%2FxKAEJaVwGCy6Y3ubsgL%2FPT43fuJWk292HrD0Ee2m1Jrzgy&X-Amz-Signature=5684b7d31505b52976501b364db2d9424213c6e8fdcea1efa662da78d8e894d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIRIYFN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcRlhsPTlPis11SKguGA7LnD0YYtSz1vi9XVJhp%2BeLIAiEA%2FiJBoMjY4wSDncCChiXb32CDIsuWViEX5zAfn8s6WRAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCysSTnyJk8jQL9UvCrcA0xCQN9UfNwGuhgS2pUSqCPujP%2F6Gt%2FCsTBqw9YR2aT2%2BWSeQoav2igTap1prGMZp0yMic2pgIJtDO1i4Imu82gU1%2Fgy11E5yJpxhJNIMan%2BUJI0rJ1wFxL8e%2F9aANc%2F5pnbbdskDVwgw%2BwIVNw2HhDmVrlZ22NSIk95gQ0eSMFWMhN2f58MXh6wYXxUz21klpZ1N8UxKnueACVFtRpVsmhPh8vZinosBGlBwMP9uBdfjj07sZ6Uc3%2FRTlSVaff9T%2BvHHpf9Zc8DmY6l91eaekaZ2EfwrJto4OIWL7nCrIJYiqyrpzo1SYJOr65SEFBmpYVov0OLBjBFSVb9RsprUb11WnZSbAs2ZlQ9I1yCP%2BbDsYs3bBl1TEnC9xA9OXMIweXBrQMdJB3yYTbtRBfreMv30GEDV%2FVpzZ8gxErVT%2F10VliBYSPndLcQNMN2nUKsWbsRCZlpRdz6SNIydSNZnNveUFS8KQnQ%2FIk9TQAkWWUNzFvNMNLexHufLJD8dHR%2FBqZA86jcoU%2BdclWsB0doW9s4B8cXSbV5D%2BT3oNoJOfezxzHC5A7iJxz9CwFZyoEshJRfrDziJOhUvDGY5nC65LdIDlyXtnP6B%2F9OdYn3Y66ZvcDNdnvFJ%2BCdCNQ3MIGanb4GOqUBSdQrOqlMHLrIP2BOAP1XnYeyIkn0Htj3%2BIWsFLL4mcbPTQJgqJyjkU7imDsF6dSVYurSUAReXoqPpWSyNAXoE4R%2BrztdxH%2BViR9IiCIE2mIfhU2Dx4%2BrqsKUO8CeEucjhcuLbdAKnBIsWQHB6Sf0rdiqQgXxIZpYOFZlpTMzA8k5d%2FxKAEJaVwGCy6Y3ubsgL%2FPT43fuJWk292HrD0Ee2m1Jrzgy&X-Amz-Signature=1f2401948b6ac6e58bf8c4a99c93ccca8b4aa8b41cd26de09f579990b8895598&X-Amz-SignedHeaders=host&x-id=GetObject)

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
