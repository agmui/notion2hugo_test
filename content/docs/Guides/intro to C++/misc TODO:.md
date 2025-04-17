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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFZ6O4J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU8Z5J1JrPdThPFzDlJg7Uzejk0RABlAP9mXQ7eP0yIAiEA7D9GNInqPExLcidrzfSSeWx9Ng50coV%2FJsJF9rMmayAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvgwow1IGRhkUMgDCrcAwW3p2OB4Bm8LetTmNVda5dh6YjIJ3keUOdFFWEwerkLiH649dktJtQy0bGqxPuEKGu0mWPUxAISTiyvCFMRoTSELE1RkrZ7Sw6ajQmcPqlWV5LusHgN8ugMxV5CBSV2mjgnmWYjlPt%2BVrKwA72qUhgsVB32rZa%2BC%2FaAlQ9y%2ByX%2BCE9jQEVxgDgfGPKFbIk6Z8k7ovu2cbWKi1%2B1bC08Pmn%2BkP1ugfqaEMBWrQ9flGouAUIVivuD9ohPNnsQ01IfZPcKdliL6JKG%2FjyWz2O1QeRXV04wtrwosEJVKBBKpundR7qn4Bss6HGqPOVf3q%2Frzj1wbF%2B4Fitm%2FG9YR7OHQn%2FUXYNam3QP0VUKGDSCurNouVqQpNwFORz0LFFu71v%2BCvbGF7jOgh8a0MwKfbRKWq9ibuyHtAPBF4%2F6nsxAR0lpZ1mU7f1ow8Y18neNBRUVmHnNIkXRN4I%2BFejQKfkMGPizhQoe4h9FSQJa%2BjHi%2FvSqFMZkqxx5hQ4epVl5rHG6YOmMwLwJ4%2FQZw2MDmAZqmlPWXg2WK2krnnOVdwi4XpXuk4fAh2F%2BcacxZgOeoJT2mQbBun0gaCMAeyY0yW%2FWVi6ta9k0PQQgUQ3zyEXb3m3Y6IZJa3ySZWWzhGalMM%2FQhcAGOqUBGkWMynV05EOSbU8ravFymaxBQDutTGK64v%2FyEoSlDnCwxsBq6ACzO628BkfPYzL5OZAfLwWmIAlyZOniJLIGTn%2BmDeRzB1LyzgXeoC9UsemVnFhPKubOqBo5gRPGlwScAXmAhamNuXeHE%2FYy5Ic2SKaMwFYGvORakmhXthaqEWnUKdiIi%2FUGQVE0F3rmKEm9XHJXDKI%2FWQsEbtch04kc0mYpl5ho&X-Amz-Signature=af21f10e6b5b5252c8ba9c78375db122f2080d9fae02b4da36099955eb60836d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFZ6O4J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU8Z5J1JrPdThPFzDlJg7Uzejk0RABlAP9mXQ7eP0yIAiEA7D9GNInqPExLcidrzfSSeWx9Ng50coV%2FJsJF9rMmayAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvgwow1IGRhkUMgDCrcAwW3p2OB4Bm8LetTmNVda5dh6YjIJ3keUOdFFWEwerkLiH649dktJtQy0bGqxPuEKGu0mWPUxAISTiyvCFMRoTSELE1RkrZ7Sw6ajQmcPqlWV5LusHgN8ugMxV5CBSV2mjgnmWYjlPt%2BVrKwA72qUhgsVB32rZa%2BC%2FaAlQ9y%2ByX%2BCE9jQEVxgDgfGPKFbIk6Z8k7ovu2cbWKi1%2B1bC08Pmn%2BkP1ugfqaEMBWrQ9flGouAUIVivuD9ohPNnsQ01IfZPcKdliL6JKG%2FjyWz2O1QeRXV04wtrwosEJVKBBKpundR7qn4Bss6HGqPOVf3q%2Frzj1wbF%2B4Fitm%2FG9YR7OHQn%2FUXYNam3QP0VUKGDSCurNouVqQpNwFORz0LFFu71v%2BCvbGF7jOgh8a0MwKfbRKWq9ibuyHtAPBF4%2F6nsxAR0lpZ1mU7f1ow8Y18neNBRUVmHnNIkXRN4I%2BFejQKfkMGPizhQoe4h9FSQJa%2BjHi%2FvSqFMZkqxx5hQ4epVl5rHG6YOmMwLwJ4%2FQZw2MDmAZqmlPWXg2WK2krnnOVdwi4XpXuk4fAh2F%2BcacxZgOeoJT2mQbBun0gaCMAeyY0yW%2FWVi6ta9k0PQQgUQ3zyEXb3m3Y6IZJa3ySZWWzhGalMM%2FQhcAGOqUBGkWMynV05EOSbU8ravFymaxBQDutTGK64v%2FyEoSlDnCwxsBq6ACzO628BkfPYzL5OZAfLwWmIAlyZOniJLIGTn%2BmDeRzB1LyzgXeoC9UsemVnFhPKubOqBo5gRPGlwScAXmAhamNuXeHE%2FYy5Ic2SKaMwFYGvORakmhXthaqEWnUKdiIi%2FUGQVE0F3rmKEm9XHJXDKI%2FWQsEbtch04kc0mYpl5ho&X-Amz-Signature=5c6023ae19e8dd922c34918650182977eb3c86f3edc14043468b16f768666d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
