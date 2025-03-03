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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27LPCUD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJr7yATE1LHF0NjjbPCAD3PzMb%2B4f5JB8SQXUa%2BubM%2BAiARlZkszZ%2F9k5e7Ze566LyE5F8lTGSyq93MyuQ%2Fe3OHmyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsgtjAMeYJtVwsY0OKtwDeQdqDbnTsaiusR5JVXzVaWli1%2BGdR162oglA41SXvJH2%2BrmR6pPKG8vHPXNa9lWVg56TbXrWfm2Ak5sDb2loj%2F4sJSXmb4En8GuzaKzMJiV8M2bVH81qKo15eVvQLTh2QRSsv6vZTVLVHlBWzlBgA8aJd9JjJ4NYAcSd3ttrgZaEcEpJpJUb8U9jd3%2F8ex8kjLSlY87V8hwhtFHB5JNbH%2BF%2BduJzxnQTqnVHZAl16k5f2%2B%2BL4sQ5FKw13k0Id3rUIRydQdm3i%2F40ZN2Nw7vMm%2FDJq0Mwsv921DKdJ%2FSRI2Aw6qLh4HSBIFn3v9YomsvdV3tnLrO9UR6n8XIwKGzm%2BqqR2GHlwvJ0Py9%2BpBXvPFkHq2HzvZ9Uk0Rfzwklmx1%2B8Sy9PrIMZIMM4KDN08yeP8J7Mi6iPmuOdVMlg2iPt1504QvVZVhnn4gdjw52fR7PMvgaQq226JF56fS7c%2BjeIw5GJzlOJN5bugpEpz9FUP%2FfeFA%2FylK%2BO%2FiYrO%2BO8eiUfFw7Bj%2FZNzCmyNScLmL1MzKScBaJHAWQahWL0w32o0eaukOXPha6urLQgA6dREfYM28NclaXYzT3ed2Y7br2r1%2F%2FFqxcHleE3JviOzI%2BdN1LY645i5y0obXcbUMwxsmTvgY6pgHQEqPYPpBomlvZN7N2hdp8GtwyE0BoiIpcMyYOarX%2FsCPfKlDK%2BSHo%2F5Y96IUrPZF9r1VBl87P9zRDmGeURnxb%2FCl5iKcjijmJ6g%2BvUlyqKzFN4hGtDQmx2pZ8aLyVrj1YNaedN%2FQzNf%2BB4W3jCpPt1nCZnlMHfxO4cqwrRhkhCIx31NKpeobZIJuiRrlZ3luWd6cg2u8wboQDkgJREkfY1v4ip%2BNv&X-Amz-Signature=813b7f8f34848aab915cfe2809f513c4fb728a3bbae2ce0af4c9837aa36ef475&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27LPCUD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJr7yATE1LHF0NjjbPCAD3PzMb%2B4f5JB8SQXUa%2BubM%2BAiARlZkszZ%2F9k5e7Ze566LyE5F8lTGSyq93MyuQ%2Fe3OHmyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsgtjAMeYJtVwsY0OKtwDeQdqDbnTsaiusR5JVXzVaWli1%2BGdR162oglA41SXvJH2%2BrmR6pPKG8vHPXNa9lWVg56TbXrWfm2Ak5sDb2loj%2F4sJSXmb4En8GuzaKzMJiV8M2bVH81qKo15eVvQLTh2QRSsv6vZTVLVHlBWzlBgA8aJd9JjJ4NYAcSd3ttrgZaEcEpJpJUb8U9jd3%2F8ex8kjLSlY87V8hwhtFHB5JNbH%2BF%2BduJzxnQTqnVHZAl16k5f2%2B%2BL4sQ5FKw13k0Id3rUIRydQdm3i%2F40ZN2Nw7vMm%2FDJq0Mwsv921DKdJ%2FSRI2Aw6qLh4HSBIFn3v9YomsvdV3tnLrO9UR6n8XIwKGzm%2BqqR2GHlwvJ0Py9%2BpBXvPFkHq2HzvZ9Uk0Rfzwklmx1%2B8Sy9PrIMZIMM4KDN08yeP8J7Mi6iPmuOdVMlg2iPt1504QvVZVhnn4gdjw52fR7PMvgaQq226JF56fS7c%2BjeIw5GJzlOJN5bugpEpz9FUP%2FfeFA%2FylK%2BO%2FiYrO%2BO8eiUfFw7Bj%2FZNzCmyNScLmL1MzKScBaJHAWQahWL0w32o0eaukOXPha6urLQgA6dREfYM28NclaXYzT3ed2Y7br2r1%2F%2FFqxcHleE3JviOzI%2BdN1LY645i5y0obXcbUMwxsmTvgY6pgHQEqPYPpBomlvZN7N2hdp8GtwyE0BoiIpcMyYOarX%2FsCPfKlDK%2BSHo%2F5Y96IUrPZF9r1VBl87P9zRDmGeURnxb%2FCl5iKcjijmJ6g%2BvUlyqKzFN4hGtDQmx2pZ8aLyVrj1YNaedN%2FQzNf%2BB4W3jCpPt1nCZnlMHfxO4cqwrRhkhCIx31NKpeobZIJuiRrlZ3luWd6cg2u8wboQDkgJREkfY1v4ip%2BNv&X-Amz-Signature=a9586267443d17882f2c1d60e5a20680c07543e33140087dca6400345d0e91c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
