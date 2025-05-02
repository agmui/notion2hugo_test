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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DD2A76%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCQvMSyATbDlwyVjEEEJz3vuxWOzNhkGzGKlU6B6aTShgIgCszpTDQZblIREozRlg4CO9XhgfX7fpnywis1us%2FoFwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi%2F%2Fk56Ba2Au%2FFSwSrcA5kYQbghoKOcMDyA8KRNSP3XoSGdmKc8ac9JWfhalxCdWglE979XTC4oR9SxPLtJHt6A%2B7U5uWEfP1mxfvX%2FR9kX1Z37DlNQVPcz8zKRB6bqMSsJvSbs2zoyV3WnBfCmE3B1pgLVrzljCRDovDBUuOxOsZGC%2BKstfbkrrneho%2BiueYnQO4KvqddchKUqHxDiNDwIBDsNmQ%2FNe1hvQssXbs2rk6kXS%2B%2BhRiOeYS%2FDFh2Cdm8XpaAKqMru%2BcL9pJzNDztrYrVL52OTEasZ6TUAUSXdhT50ps2JpXMX%2FTdYMPnMA8uqLQ12tKh1EWjvmK5YZhu7ygwAyqrDc5bkTfROXoFiFgauUa5vIYscLfrPEB9HpHoNoJN6jRQgAmImps3dihB8Q36V1X66Ba%2FAikIy4S278mjWhlDTmw1MSTkettvyqfiA4Xevg%2Fj2tLfQAWrGXNoArIuIXvf4AdBo%2Ff0rUSwDBqqZAUywmJ8rUssNvNJN6CJKLROwD4TpJtQT4u1d9NszxnMUUOxKAejbYkfhc1YxqR8dyseClTC%2F6gWERwvOA88S%2FMCZ%2FEZ5xygVWdzFuxmUDMTSHqy%2FWZfeePu8RLq5mW%2FBl9jurI6OCJZGZYowEBH%2FkwsRe7pVjdlxMIrl08AGOqUBnRMQZ3RGTzcPT2rjoCNWRtvQG%2F7yfVZdzgNZ5u9yPmXEhts%2FmOcAEbeMYkmUlr3BD%2B1njVw8pRWNEUNgQGcEbtS48z89YG%2BE%2BLbhPjwxjFQsP5pjosWjEJHft8W3cIgvdfC82YCIFWV2wnqyLjGDgVDEPEEagq3c03idHlaBSZCdV9%2FHTkcxoNNVHID2Hg%2BAMcCiwLH3IZ4cksXPUDGK37AXMdL3&X-Amz-Signature=f2c54af4592238aa96b844601023610ff45333af8a93b4b4041ac69ff17b930d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DD2A76%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCQvMSyATbDlwyVjEEEJz3vuxWOzNhkGzGKlU6B6aTShgIgCszpTDQZblIREozRlg4CO9XhgfX7fpnywis1us%2FoFwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi%2F%2Fk56Ba2Au%2FFSwSrcA5kYQbghoKOcMDyA8KRNSP3XoSGdmKc8ac9JWfhalxCdWglE979XTC4oR9SxPLtJHt6A%2B7U5uWEfP1mxfvX%2FR9kX1Z37DlNQVPcz8zKRB6bqMSsJvSbs2zoyV3WnBfCmE3B1pgLVrzljCRDovDBUuOxOsZGC%2BKstfbkrrneho%2BiueYnQO4KvqddchKUqHxDiNDwIBDsNmQ%2FNe1hvQssXbs2rk6kXS%2B%2BhRiOeYS%2FDFh2Cdm8XpaAKqMru%2BcL9pJzNDztrYrVL52OTEasZ6TUAUSXdhT50ps2JpXMX%2FTdYMPnMA8uqLQ12tKh1EWjvmK5YZhu7ygwAyqrDc5bkTfROXoFiFgauUa5vIYscLfrPEB9HpHoNoJN6jRQgAmImps3dihB8Q36V1X66Ba%2FAikIy4S278mjWhlDTmw1MSTkettvyqfiA4Xevg%2Fj2tLfQAWrGXNoArIuIXvf4AdBo%2Ff0rUSwDBqqZAUywmJ8rUssNvNJN6CJKLROwD4TpJtQT4u1d9NszxnMUUOxKAejbYkfhc1YxqR8dyseClTC%2F6gWERwvOA88S%2FMCZ%2FEZ5xygVWdzFuxmUDMTSHqy%2FWZfeePu8RLq5mW%2FBl9jurI6OCJZGZYowEBH%2FkwsRe7pVjdlxMIrl08AGOqUBnRMQZ3RGTzcPT2rjoCNWRtvQG%2F7yfVZdzgNZ5u9yPmXEhts%2FmOcAEbeMYkmUlr3BD%2B1njVw8pRWNEUNgQGcEbtS48z89YG%2BE%2BLbhPjwxjFQsP5pjosWjEJHft8W3cIgvdfC82YCIFWV2wnqyLjGDgVDEPEEagq3c03idHlaBSZCdV9%2FHTkcxoNNVHID2Hg%2BAMcCiwLH3IZ4cksXPUDGK37AXMdL3&X-Amz-Signature=170bf84db0072ad06836188f3ae32928d8e3b44529b60654123dc5d97cedfbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
