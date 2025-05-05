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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEN6TO6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICJyOhamsC3fODoH8u1%2BUJlnrPv7aVJl%2BdiDJWeh96GSAiEA67omixV2ZRFRcZbNzTMPkokSlOvmZoW%2Fl%2BR%2FNuY8yCIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDDVpzWbSM1cn%2Fc8lyrcA5cYb1k9CcpX%2BnkPoVBjqLWEfW31vbxUWfPIB4jslg3JKDALP0WN339oCCJAJwfVz24nCsNIo6BAXyHF1kIuYJFI6PSGwv%2Bitu4%2B0cDh6jfyYN9KwUNu%2BofodCkv9uD0zPPh4da8aksFUdqmBiSqBLrhL9uMZJp5RUcthETCJOJQcmxBu41j94U5lN3TxtGzASZPka18FnYJeNEHFAypQnPHxnTAr80DEY8qleNKniPJ2yjy31zTTzUIq8BOVWyk%2BSnOnqPcyiWjlYlGILoWJ7CYmq4cD4Uy2JTeMQtSs%2Fv39OmI8hAIKGYj474ZBybZ6Lgb0MoGANIzkE1pEKmYPWaXPME9kcwSbK%2BzLj7knbft07BwPYizGdbO88AfVDrv2YOA9XLvzkN1QBpjsz5UTfHq4jlC%2BW0ng%2BLm7WA8SwXc2CVHWfEBl94XJTtO2y5Sf1LMpvUDa1otY6ylbkZoxzpjrXdeEDkiamelZFhvOpuAHPLRcBdz6%2FtkLT7AReUeMkDCkd2mlQN%2FkrJVBMLgTjlQSpEUhNnEc22QpOF0Od7O1No1s8uJvBmPm2YMTkVjHA0v%2Bx8ESIuJOupTpDBSLk11kmcKtnPN8pJbzhw1t2%2FnV%2F%2FgUbPLmLYKT%2BNEMJnA4MAGOqUBtvlu83RAAbJ4q3H2jGVIUmDllswtdJv4r8edvUb08rM5iguZFh%2Fzq442DvZ2mjlTx3YAB4%2F2cXnvGsnEILdqYWdNq7V2%2Fa0Ac0G9FFAY32GlVGOL5WWwHxdU4r%2FQTJz5FUC66FYNNFJzq4v1eUCSmZjld4Wx6DvTMo8gnmJxr%2F9aFLmcqd9pZ8dcORez%2FlR4ldvD0LJZhiiHdUp%2BwKP%2FC7WADdml&X-Amz-Signature=80ef8159320e7864fc65a8654745346343044966aa854558f024ce34a6b68b45&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEN6TO6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICJyOhamsC3fODoH8u1%2BUJlnrPv7aVJl%2BdiDJWeh96GSAiEA67omixV2ZRFRcZbNzTMPkokSlOvmZoW%2Fl%2BR%2FNuY8yCIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDDVpzWbSM1cn%2Fc8lyrcA5cYb1k9CcpX%2BnkPoVBjqLWEfW31vbxUWfPIB4jslg3JKDALP0WN339oCCJAJwfVz24nCsNIo6BAXyHF1kIuYJFI6PSGwv%2Bitu4%2B0cDh6jfyYN9KwUNu%2BofodCkv9uD0zPPh4da8aksFUdqmBiSqBLrhL9uMZJp5RUcthETCJOJQcmxBu41j94U5lN3TxtGzASZPka18FnYJeNEHFAypQnPHxnTAr80DEY8qleNKniPJ2yjy31zTTzUIq8BOVWyk%2BSnOnqPcyiWjlYlGILoWJ7CYmq4cD4Uy2JTeMQtSs%2Fv39OmI8hAIKGYj474ZBybZ6Lgb0MoGANIzkE1pEKmYPWaXPME9kcwSbK%2BzLj7knbft07BwPYizGdbO88AfVDrv2YOA9XLvzkN1QBpjsz5UTfHq4jlC%2BW0ng%2BLm7WA8SwXc2CVHWfEBl94XJTtO2y5Sf1LMpvUDa1otY6ylbkZoxzpjrXdeEDkiamelZFhvOpuAHPLRcBdz6%2FtkLT7AReUeMkDCkd2mlQN%2FkrJVBMLgTjlQSpEUhNnEc22QpOF0Od7O1No1s8uJvBmPm2YMTkVjHA0v%2Bx8ESIuJOupTpDBSLk11kmcKtnPN8pJbzhw1t2%2FnV%2F%2FgUbPLmLYKT%2BNEMJnA4MAGOqUBtvlu83RAAbJ4q3H2jGVIUmDllswtdJv4r8edvUb08rM5iguZFh%2Fzq442DvZ2mjlTx3YAB4%2F2cXnvGsnEILdqYWdNq7V2%2Fa0Ac0G9FFAY32GlVGOL5WWwHxdU4r%2FQTJz5FUC66FYNNFJzq4v1eUCSmZjld4Wx6DvTMo8gnmJxr%2F9aFLmcqd9pZ8dcORez%2FlR4ldvD0LJZhiiHdUp%2BwKP%2FC7WADdml&X-Amz-Signature=e574c19bd1edfe2025d3ea424925d71df3f18a0532f1508df9ee94c40bd8d1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
