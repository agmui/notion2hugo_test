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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLKA5PT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu2yh9lgPQJu2dygDP%2BRQEbIXjSE%2Bf5fI34foT5Az3qAiEA1gCUTz7d4dQtaXtispv6QUk11k6mM65CYaPPX46DRwgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA4jqMrDzlUUXvauyrcA9fp%2FQRY2pRthAohNuOykdLFpsC50XZeQ3SmKOWEUhK3q76JhGaEy492d93MSFeTvaR%2B1sP7H6wio4kX4S4AcVweC4HAUFnkjWzosLau39KMvXkWkaTdlDdQBcXO43yJEkyIVQ1cuQDFAxuxbgvl2PeMBzUDZAV2ov0z54Fevwf0ZREvula%2FpN%2Bjmbr9fr1IwVpVQTwcdcgUGJw%2FnvpYyCNlouCf77d46V5xeF2YhQKvbcZhd3ajuNDmVRrUpkR3Kw8znb6O63qOAxaxQrVCcjPB9xez%2BkXr08aOk7Bavugci0y2Wz%2BiCCdthegRzuNAXq%2ByCC%2BU%2F4sG%2BHoVPZkDrxx821b5NpXoHTWu2xm%2FcqyGKZ6asFVX%2FooH8Ivc8qK%2Fq4ZAJWqkZ%2F8udOXAWTyWOLvXg5eWQzBSRx63qadEC2bZUx%2FxIYj7l8fgw3oMjTIONqMCbKuqXdtmJ%2FbsQW%2FteVYY18VkA8L8shEzXOvvwG6kii1y%2By%2FPjPSuzG4W%2BSiAUE%2F0JEjJTinVKpRhxzArZ6Qrg4DA3COnlJLCCqASepvbiqwWcLgncRsxVtsCnl54zt6L8518xu%2BG%2BVM8%2Ba9xBIW7X7kpszEbEIfILdFAqPDP3RwSdxo3YUb6wBjzMPr4lL4GOqUB8Owl2ESHD0oNZTmXKQgelqCDGM3NtIhgLOf%2BEzkaj2z81oJlwlhgCxqa5mkTQ1So%2BQ4yPrIlCnCA3%2BzWsRcTqn7UYv1B61SY1nzhkNvTKxTac6cvPUjtULl5ePQcj8Mx5hMRdgqJ8BbaopPaSFmVW6Mg1B9JKGyxYimU6xKCtbDnEX1rJw5tCOX0hor6%2BGWWJmZNcpG5ZIKkK25vZ9JkrgnU75KM&X-Amz-Signature=93833093801f04457bcbb831fe6459db76e6edb70d4cfedee60876cb1a27a1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLKA5PT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu2yh9lgPQJu2dygDP%2BRQEbIXjSE%2Bf5fI34foT5Az3qAiEA1gCUTz7d4dQtaXtispv6QUk11k6mM65CYaPPX46DRwgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA4jqMrDzlUUXvauyrcA9fp%2FQRY2pRthAohNuOykdLFpsC50XZeQ3SmKOWEUhK3q76JhGaEy492d93MSFeTvaR%2B1sP7H6wio4kX4S4AcVweC4HAUFnkjWzosLau39KMvXkWkaTdlDdQBcXO43yJEkyIVQ1cuQDFAxuxbgvl2PeMBzUDZAV2ov0z54Fevwf0ZREvula%2FpN%2Bjmbr9fr1IwVpVQTwcdcgUGJw%2FnvpYyCNlouCf77d46V5xeF2YhQKvbcZhd3ajuNDmVRrUpkR3Kw8znb6O63qOAxaxQrVCcjPB9xez%2BkXr08aOk7Bavugci0y2Wz%2BiCCdthegRzuNAXq%2ByCC%2BU%2F4sG%2BHoVPZkDrxx821b5NpXoHTWu2xm%2FcqyGKZ6asFVX%2FooH8Ivc8qK%2Fq4ZAJWqkZ%2F8udOXAWTyWOLvXg5eWQzBSRx63qadEC2bZUx%2FxIYj7l8fgw3oMjTIONqMCbKuqXdtmJ%2FbsQW%2FteVYY18VkA8L8shEzXOvvwG6kii1y%2By%2FPjPSuzG4W%2BSiAUE%2F0JEjJTinVKpRhxzArZ6Qrg4DA3COnlJLCCqASepvbiqwWcLgncRsxVtsCnl54zt6L8518xu%2BG%2BVM8%2Ba9xBIW7X7kpszEbEIfILdFAqPDP3RwSdxo3YUb6wBjzMPr4lL4GOqUB8Owl2ESHD0oNZTmXKQgelqCDGM3NtIhgLOf%2BEzkaj2z81oJlwlhgCxqa5mkTQ1So%2BQ4yPrIlCnCA3%2BzWsRcTqn7UYv1B61SY1nzhkNvTKxTac6cvPUjtULl5ePQcj8Mx5hMRdgqJ8BbaopPaSFmVW6Mg1B9JKGyxYimU6xKCtbDnEX1rJw5tCOX0hor6%2BGWWJmZNcpG5ZIKkK25vZ9JkrgnU75KM&X-Amz-Signature=3b44f30758a2da8251fb0dd7134c82084ebfcb9747903bbbff57af9479910290&X-Amz-SignedHeaders=host&x-id=GetObject)

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
