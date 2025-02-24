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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMK4RR5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhOMgQgW9jAyQcfWIF53GeyjSWUuywY0fph2Opw7iEKAiAMJsWBCwSNieZw0vOGOf%2FNXP1e%2FdF9Z0ks1lPQCXv3Lyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFBtScJnsVEz%2FjI5jKtwDY7dPTvmaLqdskoy0iA93aERpMd%2FUySaxSZZBXdxjqjuAnmAEeeddEWP4ry%2BNJAOm9O1J8Kx4%2FTBbLBicQakMGRCB0vILy2DKbxl3%2FGAFtAs067ooqtG0d%2BqOnWSDreFATq0%2BusvmLzkJt4k4EQ2ZxBz07DCyztvQRpFVcqFkyx0EE0OipDqDc0tdfH7tr1HE4X0ycRY7ux6yBviqzBSBJbhUHnJAofNEwqgo5Br93y9z286b9b1J%2BZBoRAu9VQ4CHL9QWPWI6kzcefNfgNXnyrDhbpF8mGCRreKH4HMwzigw9A2GuTY7e0oehAtqeni6NMt4RfG9s0xKseBPkOrS%2Fcph3b9PuNsnhqt4CEPJUnA%2Fpnr01cUjH61XlzloMha4e3lPliXfNbpyeyW6ofRe82hACtoUryJ%2BP%2FAvYv32N7ZLCWlPmZk6KinkT5gbGCGR68Vmyh6WI3s2A6ScdB1rabnnBGnGRBTYnS8eUY7CDcmq4wk0D%2FSCpJ3y8yqoO5Rcq7YpmyxlThJtE1f7TTeb4CCV8cIIJpmZbIYd1ZlOQjFNIwm3L9K5p8DREovPzEJYL5WC2pYpU1wVRtrVTXu4O0%2FDvoiw14dC7MhOeqX60Y6XulWBB06CJ2u%2BSuAwh%2BvwvQY6pgGX6CGf4QU%2FfIC1CfgmeTJLQFimVoMVg%2FV3FuZ4OuZOB%2Fjw6m22M%2BfEwiqeso9n4J0hwaYmST2Kv3jDjtCzile7jFFFY5C%2FXFbjw6f9zXhnpwiLiqOzCDFVQdJTU6sxR6byH3zCYSFbs6Xop8iYNZn8Y103MXltYCcSbeL9MYPV84S%2FceIhj9LiOarQjNjD0byDxhss0JcjQLOAo1sP%2BwXaNlMemIXk&X-Amz-Signature=a394feb82195fdbff908f756c5bc1abaa91d1add10a52ba20446f8515fb91fda&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMK4RR5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhOMgQgW9jAyQcfWIF53GeyjSWUuywY0fph2Opw7iEKAiAMJsWBCwSNieZw0vOGOf%2FNXP1e%2FdF9Z0ks1lPQCXv3Lyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFBtScJnsVEz%2FjI5jKtwDY7dPTvmaLqdskoy0iA93aERpMd%2FUySaxSZZBXdxjqjuAnmAEeeddEWP4ry%2BNJAOm9O1J8Kx4%2FTBbLBicQakMGRCB0vILy2DKbxl3%2FGAFtAs067ooqtG0d%2BqOnWSDreFATq0%2BusvmLzkJt4k4EQ2ZxBz07DCyztvQRpFVcqFkyx0EE0OipDqDc0tdfH7tr1HE4X0ycRY7ux6yBviqzBSBJbhUHnJAofNEwqgo5Br93y9z286b9b1J%2BZBoRAu9VQ4CHL9QWPWI6kzcefNfgNXnyrDhbpF8mGCRreKH4HMwzigw9A2GuTY7e0oehAtqeni6NMt4RfG9s0xKseBPkOrS%2Fcph3b9PuNsnhqt4CEPJUnA%2Fpnr01cUjH61XlzloMha4e3lPliXfNbpyeyW6ofRe82hACtoUryJ%2BP%2FAvYv32N7ZLCWlPmZk6KinkT5gbGCGR68Vmyh6WI3s2A6ScdB1rabnnBGnGRBTYnS8eUY7CDcmq4wk0D%2FSCpJ3y8yqoO5Rcq7YpmyxlThJtE1f7TTeb4CCV8cIIJpmZbIYd1ZlOQjFNIwm3L9K5p8DREovPzEJYL5WC2pYpU1wVRtrVTXu4O0%2FDvoiw14dC7MhOeqX60Y6XulWBB06CJ2u%2BSuAwh%2BvwvQY6pgGX6CGf4QU%2FfIC1CfgmeTJLQFimVoMVg%2FV3FuZ4OuZOB%2Fjw6m22M%2BfEwiqeso9n4J0hwaYmST2Kv3jDjtCzile7jFFFY5C%2FXFbjw6f9zXhnpwiLiqOzCDFVQdJTU6sxR6byH3zCYSFbs6Xop8iYNZn8Y103MXltYCcSbeL9MYPV84S%2FceIhj9LiOarQjNjD0byDxhss0JcjQLOAo1sP%2BwXaNlMemIXk&X-Amz-Signature=ffa2d8d94366423858e6cdc8e4a5f0ed11147934cfcb2a75792187366c81c39a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
