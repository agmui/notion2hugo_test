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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ODLJH6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCDv4DtCdPYNST7h4Oje2MwfcIr3HAxTOh%2B0mwfRfJSmQIgB1y7QWT3vxfoI%2Fl0M2Ptm9mYmcKr9jdZm%2B%2FnL4TWduwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLs3R8FS9XXU%2F62JcSrcAzJPmG0wksO3RIld60EesPBc6dVqS23xKNPk1p6vK5duzvRBMiNwnrGgSrBj%2B0iiRH7pOfnWJ%2BxuKhceKRvY%2ByKbnp0vn6ATbBvJggXe8eUFxuPPhpbNSlkmmb5wnIJ736WodG2DOf8jhYH1MCaD%2Fy5UXJM3wBLFL9RnEV%2FWhlXDCBV6TiM%2F9yvsgfrPqqxp1m%2BniXoh8SZRQa%2FuWxRctyalLNIqp2fvEgoGvv1Atj2b07NsLSdtlYav8Qkly0Kvh9uMfz92XcGPU%2BqFUjAyxeKD6%2BllFnDem8shbwJywlYGp7wqDhDaLBBRbLG9xJvFdQ4hsc7uYXwW0V0bCLYqRUXJTqcPnH%2BiYjBHArbaqZEXKNgu%2BGu%2B1Dx2LC4ypu2pSpvZ1jJq4bLrOCSF8mlPQCCCjTS3g94y27djN%2Fm5BysXNcPfufjn2xxDd4V9hYst7Oayo7K3Hu8IPle4Xn5iq1he6jldrrZyOUfbaG9gYFrsATQnBtHLqcaKZyln4sQNdtvepm%2BxnpH43P4exANRhg%2FolEhexwfByD60iYsrYpAtPjprK6OgMORYz7RVmt3eAeNCZtG%2FN7ceVNlflOLy5de%2FR9h0aoCbACyZYkQwJ44SVGAu5R9AccCemFCVMPqez8EGOqUBxQJ9tjx1kZAHT7Zo7n%2B5VUnR6u9VP%2B25q60etg4Hblg%2Fk%2FqSZuy6u49W6UdWkjJwZneUhb7Bi6a0qPtHxnb6VAmmT1L%2F9YygVmwLIo8qCzgm7iMFC3fh80cycC6Tk%2FsrtbUsRv650Jbj45%2BtRqZU2tqw94XcYf1awbjTfQnm14nKGwAtOtkUubvfkIL9ZO8S%2FKNPsLPJ8KneNMsjxph4PkLGnoMK&X-Amz-Signature=78065527af04356fcac018dab97d582a340032b9aaa8e5f536b68f54c2207bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ODLJH6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCDv4DtCdPYNST7h4Oje2MwfcIr3HAxTOh%2B0mwfRfJSmQIgB1y7QWT3vxfoI%2Fl0M2Ptm9mYmcKr9jdZm%2B%2FnL4TWduwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLs3R8FS9XXU%2F62JcSrcAzJPmG0wksO3RIld60EesPBc6dVqS23xKNPk1p6vK5duzvRBMiNwnrGgSrBj%2B0iiRH7pOfnWJ%2BxuKhceKRvY%2ByKbnp0vn6ATbBvJggXe8eUFxuPPhpbNSlkmmb5wnIJ736WodG2DOf8jhYH1MCaD%2Fy5UXJM3wBLFL9RnEV%2FWhlXDCBV6TiM%2F9yvsgfrPqqxp1m%2BniXoh8SZRQa%2FuWxRctyalLNIqp2fvEgoGvv1Atj2b07NsLSdtlYav8Qkly0Kvh9uMfz92XcGPU%2BqFUjAyxeKD6%2BllFnDem8shbwJywlYGp7wqDhDaLBBRbLG9xJvFdQ4hsc7uYXwW0V0bCLYqRUXJTqcPnH%2BiYjBHArbaqZEXKNgu%2BGu%2B1Dx2LC4ypu2pSpvZ1jJq4bLrOCSF8mlPQCCCjTS3g94y27djN%2Fm5BysXNcPfufjn2xxDd4V9hYst7Oayo7K3Hu8IPle4Xn5iq1he6jldrrZyOUfbaG9gYFrsATQnBtHLqcaKZyln4sQNdtvepm%2BxnpH43P4exANRhg%2FolEhexwfByD60iYsrYpAtPjprK6OgMORYz7RVmt3eAeNCZtG%2FN7ceVNlflOLy5de%2FR9h0aoCbACyZYkQwJ44SVGAu5R9AccCemFCVMPqez8EGOqUBxQJ9tjx1kZAHT7Zo7n%2B5VUnR6u9VP%2B25q60etg4Hblg%2Fk%2FqSZuy6u49W6UdWkjJwZneUhb7Bi6a0qPtHxnb6VAmmT1L%2F9YygVmwLIo8qCzgm7iMFC3fh80cycC6Tk%2FsrtbUsRv650Jbj45%2BtRqZU2tqw94XcYf1awbjTfQnm14nKGwAtOtkUubvfkIL9ZO8S%2FKNPsLPJ8KneNMsjxph4PkLGnoMK&X-Amz-Signature=f644dcc27e98ee4df13fecee331ee53827f90d964d386d2de4e4373a121933b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
