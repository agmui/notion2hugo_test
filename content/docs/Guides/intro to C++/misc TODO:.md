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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTQESON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbIok6lE2b%2F3fWHswkRhL9H0gN24rbVHG1mnIVFZdCXQIhAKBlNlholI61%2Fzp%2BsJ7jsCMzEuvhbRzfWfWpWEzSIM8fKv8DCEsQABoMNjM3NDIzMTgzODA1IgxAjLqywwIhyVRYi6Uq3APi9i2pLCeZ9XW3yGx7EcIF3UiL5wCJ95WZvvpe1alfV1VCJQcHiX6Oo12gp8WAJpscb7%2BDt%2BWvkm6rZB7Toa18iC9UaF4tOm001e84QLnxUPOgOTZIPDkU38vrXWJjLig3ex8CpFbxErKNEwFvNeA6Mz8J%2BiZy8nUP3Ro7fgfz6g%2BdQZ2uc5pm1Q0nNgpfce%2BT2OTrDEn%2FgZsCdprTJRBH1SgBjPIjKjqwBE4ZUMdTogxdPJoiWkzf3l590pHZBOZf2QNsPAr%2BiK%2BMwhkvgtbhDA4HT4St53OkurG7tURnS%2FLneYWF8q6x8DXYwsRP%2Bq4sr4RiTBPFkUKlzxS6hhmA6x3MryMV2FLleNRLXzyrcM6bG%2BQ8fEexI8pVhRCG%2FAkugf85w8nQDqgSBWpgCtYQwG5IfS9k5oJnSMOKJpyZHEqDDXdaMUurcIIm%2FV3H0gY%2F26ag2XvEmOVDyqqHPn4PmrL7bhOOqopXAPhlbDyhLwhY4ivgAOG9jjfDpLhEKS6RbdP8vpgOQOZ6nrrQKPJuN5cza9yiul0TP9T%2FOcaHc35t%2FSt2KUcavl2lRSyyV%2FREuRMIZLaeDs1q8TFde6KK7n9R9Kt30VAtS7WdxPn2uq0fSQ7MgEprrBSWmTC%2B3v%2B%2FBjqkAdxGZm5y%2FlJ5og0pOIlpLztlrNLLVjwfcCRHuIkBOsZt2cAOdDQIfG%2FoP49xr8CI2VUrNdtD%2FrNXzWjzV%2BoE4%2BMmaPBRjRHtRrJE2o1tjdLX1XlszzrN0JZ5A1KqNggjYyKWSjJYe6rCXk9GRp5drI8d3HWoLgIralEodd3FLISF4VQ3MnYS8n0F11nVtl%2FME3LUkvqajHxkcK2Z1E1oLGbGQR7A&X-Amz-Signature=4e90da9246fd4eefe5f51aafe43491d99ff6b0dad6b7912cf926a8b5059ca750&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTQESON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbIok6lE2b%2F3fWHswkRhL9H0gN24rbVHG1mnIVFZdCXQIhAKBlNlholI61%2Fzp%2BsJ7jsCMzEuvhbRzfWfWpWEzSIM8fKv8DCEsQABoMNjM3NDIzMTgzODA1IgxAjLqywwIhyVRYi6Uq3APi9i2pLCeZ9XW3yGx7EcIF3UiL5wCJ95WZvvpe1alfV1VCJQcHiX6Oo12gp8WAJpscb7%2BDt%2BWvkm6rZB7Toa18iC9UaF4tOm001e84QLnxUPOgOTZIPDkU38vrXWJjLig3ex8CpFbxErKNEwFvNeA6Mz8J%2BiZy8nUP3Ro7fgfz6g%2BdQZ2uc5pm1Q0nNgpfce%2BT2OTrDEn%2FgZsCdprTJRBH1SgBjPIjKjqwBE4ZUMdTogxdPJoiWkzf3l590pHZBOZf2QNsPAr%2BiK%2BMwhkvgtbhDA4HT4St53OkurG7tURnS%2FLneYWF8q6x8DXYwsRP%2Bq4sr4RiTBPFkUKlzxS6hhmA6x3MryMV2FLleNRLXzyrcM6bG%2BQ8fEexI8pVhRCG%2FAkugf85w8nQDqgSBWpgCtYQwG5IfS9k5oJnSMOKJpyZHEqDDXdaMUurcIIm%2FV3H0gY%2F26ag2XvEmOVDyqqHPn4PmrL7bhOOqopXAPhlbDyhLwhY4ivgAOG9jjfDpLhEKS6RbdP8vpgOQOZ6nrrQKPJuN5cza9yiul0TP9T%2FOcaHc35t%2FSt2KUcavl2lRSyyV%2FREuRMIZLaeDs1q8TFde6KK7n9R9Kt30VAtS7WdxPn2uq0fSQ7MgEprrBSWmTC%2B3v%2B%2FBjqkAdxGZm5y%2FlJ5og0pOIlpLztlrNLLVjwfcCRHuIkBOsZt2cAOdDQIfG%2FoP49xr8CI2VUrNdtD%2FrNXzWjzV%2BoE4%2BMmaPBRjRHtRrJE2o1tjdLX1XlszzrN0JZ5A1KqNggjYyKWSjJYe6rCXk9GRp5drI8d3HWoLgIralEodd3FLISF4VQ3MnYS8n0F11nVtl%2FME3LUkvqajHxkcK2Z1E1oLGbGQR7A&X-Amz-Signature=c372c8006e29a5c841bc46864a6c046c96e33a68c559c5a9295e9cc5f6cd7969&X-Amz-SignedHeaders=host&x-id=GetObject)

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
