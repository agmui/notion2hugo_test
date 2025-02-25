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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62DNZMK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIF3PThmHE3C%2B0EAo0biR5phLVgnVENzaM%2F8o2LIUiOD%2BAiEAm7RzLiz%2BXqnghA2DLNoOhp0gFt%2FAlC4BhBkgl%2FVIihgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNCgkd1srKHJyR4ejircA6vmBmaDg74vad%2FY%2FtcTBGUztb7DZs%2FaR2l4zIDG6Jd%2BVhJBzk5oprUxtbT6lEE610ZoMBQJrHfbrVBc93ZYErQFPPaUfoNSmtoSi6P1B00V04KStuyY8WVLMMlEMMXgxJ7F6usp65fL3KH29OCw59bxNOWvwdw6CuhbR3JPhVDiu0tRQldslFiHEQloShdvoacEbWuYk9KPTTgssXpHop7ICaoUFtENYD0PVZeMeHYQW40YSU6Xku2gdjcbE%2F8PbXK3nRc%2BAYj8JOEnQtvm0WSDtItMD4ipvYnmO5Hu%2BiZUMNcSb%2FS8aNv0sL0NUcMdCxFt1he7KdC9xhbEqT80yGCBspYP%2FgibIo8iILk9sq4HKjp5Br11KvXmV20TfK2IXHLpKkE3xFOPImwRxYi%2BD69ejzsHiSluwTOzpAeq352IHaM625oXOHi9XUSc41zFaZqj%2BwwoA%2BOm%2F6ohA3TTwNyT%2BMzzGlGWfLeORCgvqg3%2FkbeydhMVNEwP9JKY3Umt4zCkkreCN0dz75Xa1i6OclYz%2F2knD44o%2FHRi3F67qfSjRMUm0r6KQu%2BGD5kHet4LsnhcRAWG%2B%2FBvaT%2BzuREWNutfVAdqlLxLUSNSepK3EzWRDbB%2FhxjVEqkroySvMISN%2BL0GOqUBPhiK6Oz1Qt8K%2FI9mWeaK7XwNn1vUBxxir%2FuOsREK2JNCNUIL3A5TUXL085g5UMqhVtpCugDLlPha6n8BRE%2FcvhXjgjiVk2xCeGn4PqEl17OGoNAiqrAGTDQxqYz4xP%2FYMWT8tNByzET2%2Bs8TEuBGj%2BP6RrOjVNJ8vS5G0d0P8fqYxrbGmpHewsttJVjUhorr2astX4F4ZNuTfwZCML7AhQcb4epw&X-Amz-Signature=e142318ca73f476026a4404aec5ba3706901abd5d6f262c34d5037aec2697077&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62DNZMK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIF3PThmHE3C%2B0EAo0biR5phLVgnVENzaM%2F8o2LIUiOD%2BAiEAm7RzLiz%2BXqnghA2DLNoOhp0gFt%2FAlC4BhBkgl%2FVIihgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNCgkd1srKHJyR4ejircA6vmBmaDg74vad%2FY%2FtcTBGUztb7DZs%2FaR2l4zIDG6Jd%2BVhJBzk5oprUxtbT6lEE610ZoMBQJrHfbrVBc93ZYErQFPPaUfoNSmtoSi6P1B00V04KStuyY8WVLMMlEMMXgxJ7F6usp65fL3KH29OCw59bxNOWvwdw6CuhbR3JPhVDiu0tRQldslFiHEQloShdvoacEbWuYk9KPTTgssXpHop7ICaoUFtENYD0PVZeMeHYQW40YSU6Xku2gdjcbE%2F8PbXK3nRc%2BAYj8JOEnQtvm0WSDtItMD4ipvYnmO5Hu%2BiZUMNcSb%2FS8aNv0sL0NUcMdCxFt1he7KdC9xhbEqT80yGCBspYP%2FgibIo8iILk9sq4HKjp5Br11KvXmV20TfK2IXHLpKkE3xFOPImwRxYi%2BD69ejzsHiSluwTOzpAeq352IHaM625oXOHi9XUSc41zFaZqj%2BwwoA%2BOm%2F6ohA3TTwNyT%2BMzzGlGWfLeORCgvqg3%2FkbeydhMVNEwP9JKY3Umt4zCkkreCN0dz75Xa1i6OclYz%2F2knD44o%2FHRi3F67qfSjRMUm0r6KQu%2BGD5kHet4LsnhcRAWG%2B%2FBvaT%2BzuREWNutfVAdqlLxLUSNSepK3EzWRDbB%2FhxjVEqkroySvMISN%2BL0GOqUBPhiK6Oz1Qt8K%2FI9mWeaK7XwNn1vUBxxir%2FuOsREK2JNCNUIL3A5TUXL085g5UMqhVtpCugDLlPha6n8BRE%2FcvhXjgjiVk2xCeGn4PqEl17OGoNAiqrAGTDQxqYz4xP%2FYMWT8tNByzET2%2Bs8TEuBGj%2BP6RrOjVNJ8vS5G0d0P8fqYxrbGmpHewsttJVjUhorr2astX4F4ZNuTfwZCML7AhQcb4epw&X-Amz-Signature=6382b0637e2f30405d1a4adede64cb734e6a73503d8f6449c4c8bf78e88961e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
