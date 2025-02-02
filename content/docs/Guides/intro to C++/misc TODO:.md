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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXHSWXG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFFqaQL2fzgjXi1GKStqgMJj8VUcyTfXdNakJ2icN57QIgbKW7zlnq8b5mf9PRtV9TxkvhMsKXLO%2FF3LeJ7IOi0FUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbY4RcudodXaK4%2BlyrcAz8ESdp8rg04RZnTScXY3754p25uf7AJ3w%2BopFOhAkQJfJjpuY7u0rM8atbbP8xcmY17o81B5%2B%2F1o1PHziJEenFaAZGjINgD0QEue%2FO49q%2BaDnqSwTdDGlUT4SMmIO1WUs1Hl6yyaZlmmOXBJkSUdI9ChFxik%2Ff%2FGb1EB2QiIUOWp0%2F0NKar5iOpqIb4Igst0ifswp4JeQKImV1Me7QyVcGOuBpT3GkhGgeCysIVgV5a095jVhwl2xNupKARaIDcVZCXswdjQcVxLpaEPhzkeTMaeLxiMuyVAaUVhY397c77EaCKeYSqq1DFn%2BTumSyhqH8cGF75N4y6h422TcRRBaAD7Qmss%2BY08fqmv%2FwX0QiQJwhzLTjG5ZYvyCT3RAMxnKeRplkq43jTxfflCagbLW5nzErVQee2z%2F9MsRr73bhYKZEAbxv7Ow4oUb48l9hfv0PE5LvOTa8YzT6oPxt3tadZjH5gfZN2V8zGqDz2Bk1wvrjS959kgiv6a14LP8wg7wBvhkfUCH58bYD1tTaTmGR8FE8ybgS19lOVqCHj7kMv5vbAeDYHDf0cNDj5N33OL7l87u5kVnUPCB65tF%2BMn%2BSoDVFr67e6JOR694ZmnmvbxJaZCbcR%2B5q5ZdpoMP%2Fi%2B7wGOqUBjW%2F%2Byw8U%2B4IKyiCx5Z5DrDzYiAbRbtQIT9EnrIvlDDcjQGw17BZ3y13IvJyNMF4O1c6LqcyAXGucwHk0XDZbGDQDwytGG6iQp9TVsWsCSfD%2Fa%2FFkMJq6QOeNs28QtMQYzBc2354yiaB8XlQpnccwYlcMg7OMDFjdzquE9JIvgjLXZ0UMXhTzap7Pc14uKtxfhQlWO57ecRD%2FGx4RvpQO2%2BlJPIHY&X-Amz-Signature=cf5c0c4ba6ad90782685781603e9555bccd12976693b28f1cf308e939b55bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXHSWXG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFFqaQL2fzgjXi1GKStqgMJj8VUcyTfXdNakJ2icN57QIgbKW7zlnq8b5mf9PRtV9TxkvhMsKXLO%2FF3LeJ7IOi0FUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbY4RcudodXaK4%2BlyrcAz8ESdp8rg04RZnTScXY3754p25uf7AJ3w%2BopFOhAkQJfJjpuY7u0rM8atbbP8xcmY17o81B5%2B%2F1o1PHziJEenFaAZGjINgD0QEue%2FO49q%2BaDnqSwTdDGlUT4SMmIO1WUs1Hl6yyaZlmmOXBJkSUdI9ChFxik%2Ff%2FGb1EB2QiIUOWp0%2F0NKar5iOpqIb4Igst0ifswp4JeQKImV1Me7QyVcGOuBpT3GkhGgeCysIVgV5a095jVhwl2xNupKARaIDcVZCXswdjQcVxLpaEPhzkeTMaeLxiMuyVAaUVhY397c77EaCKeYSqq1DFn%2BTumSyhqH8cGF75N4y6h422TcRRBaAD7Qmss%2BY08fqmv%2FwX0QiQJwhzLTjG5ZYvyCT3RAMxnKeRplkq43jTxfflCagbLW5nzErVQee2z%2F9MsRr73bhYKZEAbxv7Ow4oUb48l9hfv0PE5LvOTa8YzT6oPxt3tadZjH5gfZN2V8zGqDz2Bk1wvrjS959kgiv6a14LP8wg7wBvhkfUCH58bYD1tTaTmGR8FE8ybgS19lOVqCHj7kMv5vbAeDYHDf0cNDj5N33OL7l87u5kVnUPCB65tF%2BMn%2BSoDVFr67e6JOR694ZmnmvbxJaZCbcR%2B5q5ZdpoMP%2Fi%2B7wGOqUBjW%2F%2Byw8U%2B4IKyiCx5Z5DrDzYiAbRbtQIT9EnrIvlDDcjQGw17BZ3y13IvJyNMF4O1c6LqcyAXGucwHk0XDZbGDQDwytGG6iQp9TVsWsCSfD%2Fa%2FFkMJq6QOeNs28QtMQYzBc2354yiaB8XlQpnccwYlcMg7OMDFjdzquE9JIvgjLXZ0UMXhTzap7Pc14uKtxfhQlWO57ecRD%2FGx4RvpQO2%2BlJPIHY&X-Amz-Signature=cfcdb655ce9de50c14574ac9025d04653b5261448b4ee68d56737eaa6b882aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
