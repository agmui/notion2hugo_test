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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZBJHFJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdxpMppxqEB40sUZDWNPlDFilXiQClncpEPn7HvKyiuAIgNilejwkqzMegshM07tslp42kvGSvcRAectztbKjxSu4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJjMxub1YznZOIZLZyrcA%2FHmd0P%2Fw%2FHcXCzF%2FUT5f9CU9MXsK1PR3vMVrAMlhH35QveTBrH4JWXuvLGpVREnUqg8NNuGgUaZeUrA%2BKxYeWHnd1b41mgy7ap1DvclVtwYwBrHqBo3QS51QxkHatd%2FDwv4%2FPyQIv%2FrKqIJlMCsnT35yq6XgrspA6TZZFLUVUWTqOK6RlvTNZYEUkb%2FTmPXkXU0m2xAAWGXNln%2FP23Eo0knALXunatkbws9G0rFvMMisMR8wHovsTrWUjzGP%2FaywlYlN9UYQyI7OPuRliXDExir331%2B%2FwZUpbp1JvSlEzpZ7IfxAT1%2BJNgvhJEOXOgAtpKCrmpKJ8ovvZ3hDd64EPXgsJaqa3LyRVMHihHsu7fYPgW687BLrDPrqoLbWHBagvKmtzdKJpLzQTlICELFGbV3Y0U%2BNS%2B0viZ5tkBS%2Fjkh9%2BjWhDb3QoxiQXy%2FKKXMu9Ap00inBlmAg3yrn7dB4DtnZ9e5MIKal9u5Yro6ZWVOaU%2FGNXCyIJ5byIrnekMzikmmpXNSF8VAN6B0sN2a772528UQQutQ714Wo8%2Bl4H%2BdN3Rf5imnRn0U2a8BHgVimWrYyvh0V%2F2OWXjuslwV8YfHiVA3N87opMeJwbBDirJ1gpgMpb91pwinKcbVMLSsub0GOqUBdGcXKRIfQ0%2FHKkTdn6wPZ%2BJvjGM2VIhhSp1bs80mgWhiv1DCQkShSBOxzHT4Qky%2BIt2C0%2B%2FOlRC6QIR2qrvDKHLPqe1cEbJSahrWUavA5lfzIR2klBJdNilkDY7yI0PdCmJ40cUM%2FcpESyD29CJSEol3AONHekNyQYA5xalio3EAFRdJVohPIh2UokhoOA1PqGQbhjoV9XqFwfixMMAumGrm0qJT&X-Amz-Signature=5a0e182a7a3f9bf1f6bbd9c590d5448dd70842864f502830fb910831800eff27&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZBJHFJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdxpMppxqEB40sUZDWNPlDFilXiQClncpEPn7HvKyiuAIgNilejwkqzMegshM07tslp42kvGSvcRAectztbKjxSu4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJjMxub1YznZOIZLZyrcA%2FHmd0P%2Fw%2FHcXCzF%2FUT5f9CU9MXsK1PR3vMVrAMlhH35QveTBrH4JWXuvLGpVREnUqg8NNuGgUaZeUrA%2BKxYeWHnd1b41mgy7ap1DvclVtwYwBrHqBo3QS51QxkHatd%2FDwv4%2FPyQIv%2FrKqIJlMCsnT35yq6XgrspA6TZZFLUVUWTqOK6RlvTNZYEUkb%2FTmPXkXU0m2xAAWGXNln%2FP23Eo0knALXunatkbws9G0rFvMMisMR8wHovsTrWUjzGP%2FaywlYlN9UYQyI7OPuRliXDExir331%2B%2FwZUpbp1JvSlEzpZ7IfxAT1%2BJNgvhJEOXOgAtpKCrmpKJ8ovvZ3hDd64EPXgsJaqa3LyRVMHihHsu7fYPgW687BLrDPrqoLbWHBagvKmtzdKJpLzQTlICELFGbV3Y0U%2BNS%2B0viZ5tkBS%2Fjkh9%2BjWhDb3QoxiQXy%2FKKXMu9Ap00inBlmAg3yrn7dB4DtnZ9e5MIKal9u5Yro6ZWVOaU%2FGNXCyIJ5byIrnekMzikmmpXNSF8VAN6B0sN2a772528UQQutQ714Wo8%2Bl4H%2BdN3Rf5imnRn0U2a8BHgVimWrYyvh0V%2F2OWXjuslwV8YfHiVA3N87opMeJwbBDirJ1gpgMpb91pwinKcbVMLSsub0GOqUBdGcXKRIfQ0%2FHKkTdn6wPZ%2BJvjGM2VIhhSp1bs80mgWhiv1DCQkShSBOxzHT4Qky%2BIt2C0%2B%2FOlRC6QIR2qrvDKHLPqe1cEbJSahrWUavA5lfzIR2klBJdNilkDY7yI0PdCmJ40cUM%2FcpESyD29CJSEol3AONHekNyQYA5xalio3EAFRdJVohPIh2UokhoOA1PqGQbhjoV9XqFwfixMMAumGrm0qJT&X-Amz-Signature=58e6838dfe4eae9afcecfa7bba3431ac642e88d3b016f6a283c5b758fb489083&X-Amz-SignedHeaders=host&x-id=GetObject)

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
