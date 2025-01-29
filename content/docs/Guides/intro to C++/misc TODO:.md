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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES63STM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpSs2NQps1pSEV6zOuscFRzbj6NDfQddfaMbkuEOQ%2FqwIgZqYgdc42stC3TjB1%2Fs7%2FfXytRAJ4%2FAID9bVBF0M%2BICMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1%2BTSre42Poh7QNhCrcAxWxvVLOmBYBJ84STiBUns7PFTW%2BB0LGE4%2BLq5D9myr4OSxCagKmEBQxo%2BlMyDtOeX71845ssLHA9G4QzATM4nvW3%2F0crSkD9IL%2FBtJ8FO4cAK%2BHDMQ1Y25PurjlWipD1DRxZVDoxl1m7T2v2T2N4S15nEcj2Z4iOXAgNF8ex0B3rwJnOPFaQ%2F4WB8XZ1m0BZnGOVUqnJKLeQhaY9%2Fj9ZTZIHSDbXDdF%2BecHWFr%2BoJIYdaF8EGvLvH3R3KSTWOqrisUP3W8WEZ3%2Bl0WSyrnLvsRcuxRCD4jnD1j7gJuMq9gs3Q2%2Fb%2FBAb1wIkBo5BXICQxHbMWfnLigQNkn9htDXf%2FkinWul1nmnOauKjKaWzO0xcRfvlMAz%2BdyTIzZ7kIiNXo4FYAIYyKLDFjPOF2K3a29C%2FzeofzSaxaM6yaVhNaDEN%2F9nTBYV57Rm8HtISUSpoGgYyMMRJqFwq4nYcQNoVpndWswWZnCy2lmVwaTmUcFglfuNPaiV3MxQbxNlB98C9W2T4ztqAUnwXO1xlIvDGb24OuEvOmBOqAgKUOGaK%2FeGdhH8xK1%2FldsUA4c8pxz5n91hTuF3nP2pcZqKCkbB9irgclqUyTuy6jPJnG9F3WpxAnlhME1Ub4cWuLIPMKrJ57wGOqUBc7zKjaw24TzdVAj5nmIoPFfstWX%2Br20mG6C5aYwlrAG2IQj3MY2dgCo1NH6cfGclUESjCq%2BYGyhIm9F3PWh86zlMUwEdIe6Jcn24AKsBm10CxK%2FyxK0KfZHhUSehcZNrhWZnioVf3xh94NH5jdCZCBz96p6H%2FxjbAawpCO1DHZO%2FkzdgxR4LpsAvEXq3IKgSMp4a0Il2gQMjvWbzE7xV396bZ5BS&X-Amz-Signature=00f886041234b7e2f6d2e298ed70e5d84c30ed7a84efed928b6e8faa50ff4749&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES63STM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpSs2NQps1pSEV6zOuscFRzbj6NDfQddfaMbkuEOQ%2FqwIgZqYgdc42stC3TjB1%2Fs7%2FfXytRAJ4%2FAID9bVBF0M%2BICMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1%2BTSre42Poh7QNhCrcAxWxvVLOmBYBJ84STiBUns7PFTW%2BB0LGE4%2BLq5D9myr4OSxCagKmEBQxo%2BlMyDtOeX71845ssLHA9G4QzATM4nvW3%2F0crSkD9IL%2FBtJ8FO4cAK%2BHDMQ1Y25PurjlWipD1DRxZVDoxl1m7T2v2T2N4S15nEcj2Z4iOXAgNF8ex0B3rwJnOPFaQ%2F4WB8XZ1m0BZnGOVUqnJKLeQhaY9%2Fj9ZTZIHSDbXDdF%2BecHWFr%2BoJIYdaF8EGvLvH3R3KSTWOqrisUP3W8WEZ3%2Bl0WSyrnLvsRcuxRCD4jnD1j7gJuMq9gs3Q2%2Fb%2FBAb1wIkBo5BXICQxHbMWfnLigQNkn9htDXf%2FkinWul1nmnOauKjKaWzO0xcRfvlMAz%2BdyTIzZ7kIiNXo4FYAIYyKLDFjPOF2K3a29C%2FzeofzSaxaM6yaVhNaDEN%2F9nTBYV57Rm8HtISUSpoGgYyMMRJqFwq4nYcQNoVpndWswWZnCy2lmVwaTmUcFglfuNPaiV3MxQbxNlB98C9W2T4ztqAUnwXO1xlIvDGb24OuEvOmBOqAgKUOGaK%2FeGdhH8xK1%2FldsUA4c8pxz5n91hTuF3nP2pcZqKCkbB9irgclqUyTuy6jPJnG9F3WpxAnlhME1Ub4cWuLIPMKrJ57wGOqUBc7zKjaw24TzdVAj5nmIoPFfstWX%2Br20mG6C5aYwlrAG2IQj3MY2dgCo1NH6cfGclUESjCq%2BYGyhIm9F3PWh86zlMUwEdIe6Jcn24AKsBm10CxK%2FyxK0KfZHhUSehcZNrhWZnioVf3xh94NH5jdCZCBz96p6H%2FxjbAawpCO1DHZO%2FkzdgxR4LpsAvEXq3IKgSMp4a0Il2gQMjvWbzE7xV396bZ5BS&X-Amz-Signature=ba64f522a687b8b113e090b8b4316ecc282353c80c433499650e25fdd6a479f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
