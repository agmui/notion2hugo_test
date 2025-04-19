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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLPW4IK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUCZIXxberMmj3DSbLORVjC9VPt2LdGOjerslnlrQIVAiEA8K35ZnBEXrTOYM1YGaEWfEv%2FT7TUYHCScP61sAjPzY0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaiGgUN3ztyxTkwBircAwtjYa7un%2B%2BFYgxmkPLKCbgZ43WIOz%2FpMo6TloIT9mCcbhzga8SakN4TEJISRTiBIzNVHbkOR5EYm46eKG6eiQS5qd%2B2pd1JinFb04w6yGm4r5aedxIvHk1u5yXX96C%2FLqWka6mAFf51fbySVxrT93743LFob3c7gqDFLzjvW2rOMUffgX3jn10cfsdDkGWj0vP9OnUxkGkeiHJdCFpUSbQRuYhEQPh4uvbN9JiuSBRFOsVzi0LOOlSAP%2FDBhs1XM5%2FQi8ZnXAHOeL38pt%2F6awc8nllb1PN7Uq3Jl7Qx8gklC3PXuza6w03QBk8AJwqpTFDV%2FpSxLb41TLstVPFF1eyAist8Q3RYlbpu%2FixOPD7mjYW4SuiRHN5q58PALWf6et4oM4%2Bi6AYDsst6KNk2FTGsIIJnIqNTMd0WJxCvGOF7ymuPSMSGuFxLVa%2FynkXy56pB1%2FfUPSBB%2Bk2MuKBQ75O6nJXhghRZtq94eR27SZ0WDyvWjYkGMtV5ZdwMUib9jWLd7eEUFPWw5yAlsxJKZ501CtTLu%2FXt49SxD9FGQ60I7bxPVmKLEh5fpAQEYIq%2FHxyM62lT9oFRc1lgMf7ML0jduRUVP71nuVUssuJEX0PwxYdcTdTPQmFUcLJ%2BMLWGjMAGOqUBRfoT5jnNyu73pSQ%2Ft3NdHVcLFknsVMUOOkcSv8ZUuMqFPLBvR%2FwaOteyVX8ffaqSvp3dJOiRQiSSPpl5aXt5fOHexWecxO4iY3THwWVrZxv3leuhYC8BQSHnoFF7IuSduja2rad65WpPOYjoMxOm0EzXfMlzwz45aN5RNG1jGGdrOTLSs4j%2FqTxVWDtOFF94diz%2BG7L1jW8MkAtjpJWhDdl5LKs7&X-Amz-Signature=ed80edf4b1b15436a919191ed217f29c059c6a4e8341b9617843b89a673b547e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLPW4IK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUCZIXxberMmj3DSbLORVjC9VPt2LdGOjerslnlrQIVAiEA8K35ZnBEXrTOYM1YGaEWfEv%2FT7TUYHCScP61sAjPzY0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaiGgUN3ztyxTkwBircAwtjYa7un%2B%2BFYgxmkPLKCbgZ43WIOz%2FpMo6TloIT9mCcbhzga8SakN4TEJISRTiBIzNVHbkOR5EYm46eKG6eiQS5qd%2B2pd1JinFb04w6yGm4r5aedxIvHk1u5yXX96C%2FLqWka6mAFf51fbySVxrT93743LFob3c7gqDFLzjvW2rOMUffgX3jn10cfsdDkGWj0vP9OnUxkGkeiHJdCFpUSbQRuYhEQPh4uvbN9JiuSBRFOsVzi0LOOlSAP%2FDBhs1XM5%2FQi8ZnXAHOeL38pt%2F6awc8nllb1PN7Uq3Jl7Qx8gklC3PXuza6w03QBk8AJwqpTFDV%2FpSxLb41TLstVPFF1eyAist8Q3RYlbpu%2FixOPD7mjYW4SuiRHN5q58PALWf6et4oM4%2Bi6AYDsst6KNk2FTGsIIJnIqNTMd0WJxCvGOF7ymuPSMSGuFxLVa%2FynkXy56pB1%2FfUPSBB%2Bk2MuKBQ75O6nJXhghRZtq94eR27SZ0WDyvWjYkGMtV5ZdwMUib9jWLd7eEUFPWw5yAlsxJKZ501CtTLu%2FXt49SxD9FGQ60I7bxPVmKLEh5fpAQEYIq%2FHxyM62lT9oFRc1lgMf7ML0jduRUVP71nuVUssuJEX0PwxYdcTdTPQmFUcLJ%2BMLWGjMAGOqUBRfoT5jnNyu73pSQ%2Ft3NdHVcLFknsVMUOOkcSv8ZUuMqFPLBvR%2FwaOteyVX8ffaqSvp3dJOiRQiSSPpl5aXt5fOHexWecxO4iY3THwWVrZxv3leuhYC8BQSHnoFF7IuSduja2rad65WpPOYjoMxOm0EzXfMlzwz45aN5RNG1jGGdrOTLSs4j%2FqTxVWDtOFF94diz%2BG7L1jW8MkAtjpJWhDdl5LKs7&X-Amz-Signature=6398f86c0de659b50c3011efedf08a1e84fe5daad450a18740d69e4fedddb9df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
