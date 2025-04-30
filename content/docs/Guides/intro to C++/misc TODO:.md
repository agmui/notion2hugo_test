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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HUL6FNV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFdYYsgFD53JdwXrLdFxY2ny4Md1yDuFbEfDKKKcqAtdAiEAoRiirdUJi%2FBv8VaUiy7Wf%2Bo7HK9nRIhif44C8G5J68AqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwwqLrdiyk19cZdpyrcAwl%2FUc1kiR1N%2BzbYaCv%2F4L7hFH7LVWfjfuV1cxQywzTxELvw8nkHEy0BOlJJHQAgkR33xwrDERiL5PuBr%2B1n%2BKk5MBfy64D7S5m0uFF%2FxoTsA7HnfEEkBUConFAFrqj0cQFui1blJDNd9mSCUi%2Fa0PtptJo3QlQjPtDbQEOxeg4z7ehuwFuGsm2HdJSLGYKbnl8R1m%2Fn%2F%2FSDOrmouzfqH4uQWzCyZg5hzN6CEjDFJgGdtdrnGh2%2F7RK0VwHf%2B5iSvf0jrBw82pYNEUcuV2N%2BCQ9YroTpNOy3khMW38bjp9dKbT%2F4bMwtbqXOAwDT20YN%2BvV64c0VTb3RwolQqsLFCMThEKgkXSJLojFV6hyTpTTZQmMo0glC%2FQ%2BF87Gt9g5lLfV2T3nqv0F07hEAHtdxLmDf0xE7QrzR1lw4Eyx0IgQw2hwxPgd8WsrAwXnCscITEnlBwKyBUWcjHKZe6ljChSyOsYIbg3QtEaqLfa202Ak2rWadyMbLj%2FSO43fQoCLj59S5xTdNgWdONaZeX9cCMVwOJeGU%2FnUGh%2BNbst0nCD5Mxo2C26CDibwp8Fb90f3QJCF%2B5P9GmbjwrCMzXmFhpV%2FBHaoIZNxBlTiBTUhxbKELubEiwwc9g7K%2ByIRuMOnbxsAGOqUBQ12f4nkEeMRj4p7%2Bc37TBV%2FNDKhUYLACcsYgGkAu40v4Igf4xREuHftNSfD3KhFx%2BRPW2N83ZUedBBdQ0k%2F2lJDcFQGELoqwIwSzde%2BfFAEOIUdJVN66hzisJCi0jhQB4uDj%2FdPKFlCMc1LxW3qWLxABHDXQDkTyQZ3Efdk%2Bf4NvtVLpMqPxUQqZsOAZeZ3UUhkUjuEEUM7XN1QPKm%2B6vNM40EFp&X-Amz-Signature=e89ffb1dad9b51feed1772fc4198c84385ecddba942a78629ed53eb4fe597a81&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HUL6FNV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFdYYsgFD53JdwXrLdFxY2ny4Md1yDuFbEfDKKKcqAtdAiEAoRiirdUJi%2FBv8VaUiy7Wf%2Bo7HK9nRIhif44C8G5J68AqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwwqLrdiyk19cZdpyrcAwl%2FUc1kiR1N%2BzbYaCv%2F4L7hFH7LVWfjfuV1cxQywzTxELvw8nkHEy0BOlJJHQAgkR33xwrDERiL5PuBr%2B1n%2BKk5MBfy64D7S5m0uFF%2FxoTsA7HnfEEkBUConFAFrqj0cQFui1blJDNd9mSCUi%2Fa0PtptJo3QlQjPtDbQEOxeg4z7ehuwFuGsm2HdJSLGYKbnl8R1m%2Fn%2F%2FSDOrmouzfqH4uQWzCyZg5hzN6CEjDFJgGdtdrnGh2%2F7RK0VwHf%2B5iSvf0jrBw82pYNEUcuV2N%2BCQ9YroTpNOy3khMW38bjp9dKbT%2F4bMwtbqXOAwDT20YN%2BvV64c0VTb3RwolQqsLFCMThEKgkXSJLojFV6hyTpTTZQmMo0glC%2FQ%2BF87Gt9g5lLfV2T3nqv0F07hEAHtdxLmDf0xE7QrzR1lw4Eyx0IgQw2hwxPgd8WsrAwXnCscITEnlBwKyBUWcjHKZe6ljChSyOsYIbg3QtEaqLfa202Ak2rWadyMbLj%2FSO43fQoCLj59S5xTdNgWdONaZeX9cCMVwOJeGU%2FnUGh%2BNbst0nCD5Mxo2C26CDibwp8Fb90f3QJCF%2B5P9GmbjwrCMzXmFhpV%2FBHaoIZNxBlTiBTUhxbKELubEiwwc9g7K%2ByIRuMOnbxsAGOqUBQ12f4nkEeMRj4p7%2Bc37TBV%2FNDKhUYLACcsYgGkAu40v4Igf4xREuHftNSfD3KhFx%2BRPW2N83ZUedBBdQ0k%2F2lJDcFQGELoqwIwSzde%2BfFAEOIUdJVN66hzisJCi0jhQB4uDj%2FdPKFlCMc1LxW3qWLxABHDXQDkTyQZ3Efdk%2Bf4NvtVLpMqPxUQqZsOAZeZ3UUhkUjuEEUM7XN1QPKm%2B6vNM40EFp&X-Amz-Signature=4c48ecf3decc6876c585688a683da1a194e54da757ec9def3f03f517b8610648&X-Amz-SignedHeaders=host&x-id=GetObject)

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
