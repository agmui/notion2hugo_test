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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7HLMT4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7M6ApbUCPuuYqphW5W%2BQfUStLfABcUc9msvp42uyG2AiBs7oFbxftmQc2tlKRYrVenfv4oqvgViZq%2BGz5cqCwoOiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmgIC0wW8ls1dkhx1KtwDwkWtjlDnnMbJL07Ut4PzFjpyPV9SvUGYRWrZ2OXnUwCXiMQiT1%2BGr2KEETEu%2FMoAci6nwwYX6ge0DpfZIP0HowU11wTtnjBPX%2Buc9MNCRpit4UeWRDAlMwog9K%2FHuNcpycQ4rPs%2FUlVtU2cOsDKafYvpAUaXdra5bLufj39hXYUVy20cwcd%2FbZsDxxjgzmTSkDUit2Y1rHPKtYZGJfom2UQv9ze5CGd5BxbndeKoQ0mVF6TkEsnjtVdlnuI74aMsWqWaEV6Zy%2BRVdJMQGP4kT2R3dAOYTtIxbMIzaEHUSZUTZsHj7%2FcDbcIRLwT2uLSXRimXW3Yz8Es%2F81Efs3qETnwhrn0tv2qfbbs7gaYU7elYXiO2hCoT%2Fz%2FpYIXGBcqrYxlx2PtX7FzR0KZkE1GiBf9BHtyzh3KsATdVtV0TBBtexun7%2FKHcNGUmC1OrBdMThVwkzKGBf3Pm%2FIL0kSHoiwcxLySzknI9YSLqq7li720CNRcK04DIKH2kaMxIqKd8e3zSdSxi2xngZoSryIbtOukHJhHqNPbXx9mSy%2FOrtEjswdYyUuERab0EYX3fmW%2BHxY8zfBCcwiQZcKmpQPMdB8Wt%2BZ8mpw8%2Fj86tgagE7LNISR%2BiSm80BtyFsoUwk67LwwY6pgHFz1eA%2B4oi%2BS4W0EeVekUsJux0I0OLI%2FViBTTpUcG%2BpxT9BIoO5%2BCgaN2vnH1SaLemA2YyJAmo2FLEBS00t993daTsEiAhhxbb86lq%2FMsNrUKuHhngQxCe4FxsE6Mbt3C6%2Bcmlkx58XvRP1l4zFoUgsbpRreXkSYpx3Lwb%2BDMl0aX6a4S8feIZpAneOaRc3SWIG3Ch3KjFrFmCK34tir42PsFX4UaS&X-Amz-Signature=b2db37d68395ad2b09e4226cbf7ea9c3fb00951014e6b908a69f64acc29ecf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7HLMT4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7M6ApbUCPuuYqphW5W%2BQfUStLfABcUc9msvp42uyG2AiBs7oFbxftmQc2tlKRYrVenfv4oqvgViZq%2BGz5cqCwoOiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmgIC0wW8ls1dkhx1KtwDwkWtjlDnnMbJL07Ut4PzFjpyPV9SvUGYRWrZ2OXnUwCXiMQiT1%2BGr2KEETEu%2FMoAci6nwwYX6ge0DpfZIP0HowU11wTtnjBPX%2Buc9MNCRpit4UeWRDAlMwog9K%2FHuNcpycQ4rPs%2FUlVtU2cOsDKafYvpAUaXdra5bLufj39hXYUVy20cwcd%2FbZsDxxjgzmTSkDUit2Y1rHPKtYZGJfom2UQv9ze5CGd5BxbndeKoQ0mVF6TkEsnjtVdlnuI74aMsWqWaEV6Zy%2BRVdJMQGP4kT2R3dAOYTtIxbMIzaEHUSZUTZsHj7%2FcDbcIRLwT2uLSXRimXW3Yz8Es%2F81Efs3qETnwhrn0tv2qfbbs7gaYU7elYXiO2hCoT%2Fz%2FpYIXGBcqrYxlx2PtX7FzR0KZkE1GiBf9BHtyzh3KsATdVtV0TBBtexun7%2FKHcNGUmC1OrBdMThVwkzKGBf3Pm%2FIL0kSHoiwcxLySzknI9YSLqq7li720CNRcK04DIKH2kaMxIqKd8e3zSdSxi2xngZoSryIbtOukHJhHqNPbXx9mSy%2FOrtEjswdYyUuERab0EYX3fmW%2BHxY8zfBCcwiQZcKmpQPMdB8Wt%2BZ8mpw8%2Fj86tgagE7LNISR%2BiSm80BtyFsoUwk67LwwY6pgHFz1eA%2B4oi%2BS4W0EeVekUsJux0I0OLI%2FViBTTpUcG%2BpxT9BIoO5%2BCgaN2vnH1SaLemA2YyJAmo2FLEBS00t993daTsEiAhhxbb86lq%2FMsNrUKuHhngQxCe4FxsE6Mbt3C6%2Bcmlkx58XvRP1l4zFoUgsbpRreXkSYpx3Lwb%2BDMl0aX6a4S8feIZpAneOaRc3SWIG3Ch3KjFrFmCK34tir42PsFX4UaS&X-Amz-Signature=24868f4ae91415a4b10b60caa6174a4a81f5097ae6e8e0a9531f78ea7e46a62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
