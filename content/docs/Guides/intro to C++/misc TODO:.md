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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYL4DHZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaq8afGK5NnVbpBbO%2Fpqy47kLnQbPvU6TB0TjxA%2FHVZgIhAOkK%2FlcHYC9bk4ITdflbOMFkzDlDFRxLxmKJTEa0ledmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxKw9GoGA%2BY%2BjLTmNQq3ANbl3z1uo0q2s6hscEhZpXbtKvEuWC6%2F6kiit2Laf4Coz4WS35r8ZxBSkLAC1ozY7fASTWEWE5mx8B77TnKLY0pgvmk1VppoZANiz4WK1kIMbWM4qOHIJSACSZCrHETp%2FW2xWqiXguBqZLCV6Xxvvy4dudpkwzGr5h%2Fc26N%2FybYyd0YkqSL%2B2y3zaqBdcOSPEI%2Fv9RN%2B7QqTnMaRLBX8NkHRbkuLpss8Ojr5%2FEZSA8r38Pv088cFm3hYGSgHTOOUmk8Ja8sUEULf0bLC6NpOOFFLkx6ER%2BJUATHSz1eVigoezkp1LtBzcO7QZzKl2F7U99mgshimDQYX%2FAxvPUe%2F7Z5U%2Byt%2F1bvBgOXF6kYNpE4OsGEsCWiL3gABq2fEbVSf%2BK2uzYlMhy2fPtQ1UgfO20WBnz5IXKPpeXtfr%2BlJV8pUAYHWTtHyhY3gKA8UHGXf7VD865tRfcoQEOcLJC4c4coareGdnuL4mt6kZM%2BuS7kWoSegKDrnjSAe4BQjIQ7GKWPABh3ATIknaM4zKewum1PIHjkXXRKIEg3md3%2Bf7Zg8pzsomWTbVihlhCTBuYgQcnFiGhN%2BTT7oX8FC4%2BcxIMsKfnW%2FmiKSjKAsUTJRp9ZPBTe2Z%2FOSH3KY2I%2ByDCDpdS%2FBjqkAe84M0IMfzCqpfeQjVJZM5lGbldUxMyju%2F6iYw%2BrBqWlaIDs6Z5x52ubPSffQoC2RouKp92wOHHqC6H3ubFAI8iOkXNISAZExGtMWFrAcxbG0c6m9vQ5JTUdjdrAoQHj1dchc4JurnLjsDVDDXBOCN0vlUQ0zmNRLsCNx9Qj6%2B8CqqS5txxKJ%2F0y%2BTjSHzTerlZnQsxIi3Jek1fFfW1PQH%2FPrOsP&X-Amz-Signature=45e650b68c735680af16331f8f82e9ef5f6b82642a3c1f8274891318349792a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYL4DHZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaq8afGK5NnVbpBbO%2Fpqy47kLnQbPvU6TB0TjxA%2FHVZgIhAOkK%2FlcHYC9bk4ITdflbOMFkzDlDFRxLxmKJTEa0ledmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxKw9GoGA%2BY%2BjLTmNQq3ANbl3z1uo0q2s6hscEhZpXbtKvEuWC6%2F6kiit2Laf4Coz4WS35r8ZxBSkLAC1ozY7fASTWEWE5mx8B77TnKLY0pgvmk1VppoZANiz4WK1kIMbWM4qOHIJSACSZCrHETp%2FW2xWqiXguBqZLCV6Xxvvy4dudpkwzGr5h%2Fc26N%2FybYyd0YkqSL%2B2y3zaqBdcOSPEI%2Fv9RN%2B7QqTnMaRLBX8NkHRbkuLpss8Ojr5%2FEZSA8r38Pv088cFm3hYGSgHTOOUmk8Ja8sUEULf0bLC6NpOOFFLkx6ER%2BJUATHSz1eVigoezkp1LtBzcO7QZzKl2F7U99mgshimDQYX%2FAxvPUe%2F7Z5U%2Byt%2F1bvBgOXF6kYNpE4OsGEsCWiL3gABq2fEbVSf%2BK2uzYlMhy2fPtQ1UgfO20WBnz5IXKPpeXtfr%2BlJV8pUAYHWTtHyhY3gKA8UHGXf7VD865tRfcoQEOcLJC4c4coareGdnuL4mt6kZM%2BuS7kWoSegKDrnjSAe4BQjIQ7GKWPABh3ATIknaM4zKewum1PIHjkXXRKIEg3md3%2Bf7Zg8pzsomWTbVihlhCTBuYgQcnFiGhN%2BTT7oX8FC4%2BcxIMsKfnW%2FmiKSjKAsUTJRp9ZPBTe2Z%2FOSH3KY2I%2ByDCDpdS%2FBjqkAe84M0IMfzCqpfeQjVJZM5lGbldUxMyju%2F6iYw%2BrBqWlaIDs6Z5x52ubPSffQoC2RouKp92wOHHqC6H3ubFAI8iOkXNISAZExGtMWFrAcxbG0c6m9vQ5JTUdjdrAoQHj1dchc4JurnLjsDVDDXBOCN0vlUQ0zmNRLsCNx9Qj6%2B8CqqS5txxKJ%2F0y%2BTjSHzTerlZnQsxIi3Jek1fFfW1PQH%2FPrOsP&X-Amz-Signature=08b4dd9fa511bacbcf8de831843996284151d988e9baec6ebb60f5de88bab8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
