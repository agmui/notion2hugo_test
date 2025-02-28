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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKNI6BX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDtv61b%2Fn0XKRONJ5DnMxfTFruLM60bH%2FzF%2B9MoDUnT%2FQIgB41TeHtMJUNpGx8AnpgFb4uOid%2FWYY0sKtlrFKshaFsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiycY67uuU1r0C9SrcA35ijYAB8pZkDJuh4okih20bIz9MFZKAM66HB7Vcnx2bDt3oj6nhSGc1Hekh5tvk5qesrYZF7tZ8JF0eOQE5sKdlPVOUpnihvSVzrkuwQ%2BP81diyhHPl%2FXJoE05ukz12fybbag2mGaQLM1WvIrgJFQWAuhbPYnWbAHBv%2BXDm1g8FsQeXrgyCfGmdVooD9KvGYSqDfzElEj8TV5vBLuIoFU6QFGmS%2FbKwUb6WvwECBaMMwGVSoKjUIjkVM7y4dYrydUfSbRNYhH2RjpffmTqNvZ7q8qRXc2UFRlMXev3Cq9Dfh6CvnRPbhFmkPymS8olwE7klPaqO6zynDbhuiMzedOLGbZhI6RLDT12Y%2BJ3x6Ja9A6z5ib%2B3zb06Npt5UVt5dYMpfuhP26mF2n0VaeI%2FBr5Sehu4UH1uhZWffWtIT6949vbj%2BegK01304vrWuhducS%2FUMRMENNCZgUwve51EhqzLzki9LRUsVvC7X8jiJwY4Fpx5s7%2BcKTOCiLODt3c%2ByQT3QE%2B7qtUq7CFhfIf5Q2b03aEOVaqiwCg%2FG%2BW5IGn0%2FJMi1C4QUz52TkxaMH8vCeibV%2FKswGlZ7Vqm%2FMD1Z7z8jvon%2BlCah3a58k8qBhmgLe1w1AmBEBRDoj6sMJfShL4GOqUBVmBc%2FCqku2MXY7Dbx00abRht%2BI%2B5h4iGe3fvspgy%2F2nGE0P0s90qZSVSsb33u3D%2BeHsYflLtB80XpV7Rsf%2F83nmJ14n8x%2BBaeES00rWq9fLPTTTkhtFM2HHLu%2FqiXlrn%2FS5DslFlc8CUVpJmB81FRy%2Be4fMb4Wq17%2Fruv4vf%2FFIeT6A5MMD4gIgzSu86MLGdeylPScJ6qr0rBmJGinnKIlZGpCn5&X-Amz-Signature=5accaefc7ee3fbdd53d8cf281434057d364da8a908ff2daba8d8fc5796981bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKNI6BX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDtv61b%2Fn0XKRONJ5DnMxfTFruLM60bH%2FzF%2B9MoDUnT%2FQIgB41TeHtMJUNpGx8AnpgFb4uOid%2FWYY0sKtlrFKshaFsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiycY67uuU1r0C9SrcA35ijYAB8pZkDJuh4okih20bIz9MFZKAM66HB7Vcnx2bDt3oj6nhSGc1Hekh5tvk5qesrYZF7tZ8JF0eOQE5sKdlPVOUpnihvSVzrkuwQ%2BP81diyhHPl%2FXJoE05ukz12fybbag2mGaQLM1WvIrgJFQWAuhbPYnWbAHBv%2BXDm1g8FsQeXrgyCfGmdVooD9KvGYSqDfzElEj8TV5vBLuIoFU6QFGmS%2FbKwUb6WvwECBaMMwGVSoKjUIjkVM7y4dYrydUfSbRNYhH2RjpffmTqNvZ7q8qRXc2UFRlMXev3Cq9Dfh6CvnRPbhFmkPymS8olwE7klPaqO6zynDbhuiMzedOLGbZhI6RLDT12Y%2BJ3x6Ja9A6z5ib%2B3zb06Npt5UVt5dYMpfuhP26mF2n0VaeI%2FBr5Sehu4UH1uhZWffWtIT6949vbj%2BegK01304vrWuhducS%2FUMRMENNCZgUwve51EhqzLzki9LRUsVvC7X8jiJwY4Fpx5s7%2BcKTOCiLODt3c%2ByQT3QE%2B7qtUq7CFhfIf5Q2b03aEOVaqiwCg%2FG%2BW5IGn0%2FJMi1C4QUz52TkxaMH8vCeibV%2FKswGlZ7Vqm%2FMD1Z7z8jvon%2BlCah3a58k8qBhmgLe1w1AmBEBRDoj6sMJfShL4GOqUBVmBc%2FCqku2MXY7Dbx00abRht%2BI%2B5h4iGe3fvspgy%2F2nGE0P0s90qZSVSsb33u3D%2BeHsYflLtB80XpV7Rsf%2F83nmJ14n8x%2BBaeES00rWq9fLPTTTkhtFM2HHLu%2FqiXlrn%2FS5DslFlc8CUVpJmB81FRy%2Be4fMb4Wq17%2Fruv4vf%2FFIeT6A5MMD4gIgzSu86MLGdeylPScJ6qr0rBmJGinnKIlZGpCn5&X-Amz-Signature=18cd4b5d7911d7d737e27744e31200db7486902c83697d217fa0c983ed7fe40d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
