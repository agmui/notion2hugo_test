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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNXSPO6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPJQGRAJjWXrO63OFT9D7tyrNIgSIO3Pg1o2uoevhmpwIhALyPwfmY33f2omWrXRslyPiKOdmhRJ2cz077OShD5NrtKv8DCCEQABoMNjM3NDIzMTgzODA1IgyXoXejQnfcPbDb9wwq3ANaC05IbbpI2ysubA3V2KXF9mFPGo2ohktAVAlvMCJgz7xaKeNqFF2XpUcDnfExDqFNPV%2FYAFb6Q3vlFeJ1W2%2Fw2LXgXVNKxZNecMSZQijF%2Fbdb8vb1Xv2iitnCMbLO8B%2BVMQ6SOr2w3W1cSNDRkU3vwZmcae5aDhImiypbNqDTjE8vCQ7qqIpoCiPft0NEyhrD5WCkDqYfX7UeLASreHUXmQqkaHsFveZNdxCvZ1JjRDiQmSgaxPnFsWQG4rLKWdOQj1XTqgO%2ByuLbcHt2%2BcRr1SUGhSo4al8r6gM7pzf2oXx2KyjdlfA5NUbs3XkRE9F8MGyKr4jF%2Fn9dp6pyINa1%2Bqh3hQkMgfB9i4CDtNHNCzBoWD0wgJB0hrxh4ad42ERtT4q8MaQspDf4M0MOusyLDyVqWVuAnwg83srWTDifUkOJrOKMOmdPf6yC3j13ogYYd1noHou0sB9oWttLEouItHxhwcK0lBajO1zmhsFJ9O4VTuSfRmTPovSibNZOMSYO1m%2FFHKM18YMr9%2FeT%2BSVGaA0KGEShuyNDsuwNNbels9sDQgn%2B%2FZPxLxPed7IjaP%2BsMZ7zFhRVsmHY1XxxuU3ccEBVGHyx%2BEpgRwkoDlgD8AxxYvQ%2BTC%2Bc9%2Fq6hzCc1%2BfCBjqkAcx7%2Bp5nShzPDT2md0RmVQagT8z2pftHI7Uv9poCPdMYgfo0fccL%2Bges9hGT3IxumrFSO2EvhZDnW1TBMAoMv71%2FFkK1kcAfsYSP8Om19uekBIbmWv7d8emO39zWRdFBvC760qCmUDp%2BeSpmImkFEelaRZSFsheFaNcVpN9BKo0kqGPZ7FkvUJGQN6bvtzPSrRcAoSFWrgQ4tnKs8sW0bv%2BwniPS&X-Amz-Signature=e9d926f48eece8a7386b42fa9f4800ff8c3e2309114bb4b65084dc020bff40ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNXSPO6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPJQGRAJjWXrO63OFT9D7tyrNIgSIO3Pg1o2uoevhmpwIhALyPwfmY33f2omWrXRslyPiKOdmhRJ2cz077OShD5NrtKv8DCCEQABoMNjM3NDIzMTgzODA1IgyXoXejQnfcPbDb9wwq3ANaC05IbbpI2ysubA3V2KXF9mFPGo2ohktAVAlvMCJgz7xaKeNqFF2XpUcDnfExDqFNPV%2FYAFb6Q3vlFeJ1W2%2Fw2LXgXVNKxZNecMSZQijF%2Fbdb8vb1Xv2iitnCMbLO8B%2BVMQ6SOr2w3W1cSNDRkU3vwZmcae5aDhImiypbNqDTjE8vCQ7qqIpoCiPft0NEyhrD5WCkDqYfX7UeLASreHUXmQqkaHsFveZNdxCvZ1JjRDiQmSgaxPnFsWQG4rLKWdOQj1XTqgO%2ByuLbcHt2%2BcRr1SUGhSo4al8r6gM7pzf2oXx2KyjdlfA5NUbs3XkRE9F8MGyKr4jF%2Fn9dp6pyINa1%2Bqh3hQkMgfB9i4CDtNHNCzBoWD0wgJB0hrxh4ad42ERtT4q8MaQspDf4M0MOusyLDyVqWVuAnwg83srWTDifUkOJrOKMOmdPf6yC3j13ogYYd1noHou0sB9oWttLEouItHxhwcK0lBajO1zmhsFJ9O4VTuSfRmTPovSibNZOMSYO1m%2FFHKM18YMr9%2FeT%2BSVGaA0KGEShuyNDsuwNNbels9sDQgn%2B%2FZPxLxPed7IjaP%2BsMZ7zFhRVsmHY1XxxuU3ccEBVGHyx%2BEpgRwkoDlgD8AxxYvQ%2BTC%2Bc9%2Fq6hzCc1%2BfCBjqkAcx7%2Bp5nShzPDT2md0RmVQagT8z2pftHI7Uv9poCPdMYgfo0fccL%2Bges9hGT3IxumrFSO2EvhZDnW1TBMAoMv71%2FFkK1kcAfsYSP8Om19uekBIbmWv7d8emO39zWRdFBvC760qCmUDp%2BeSpmImkFEelaRZSFsheFaNcVpN9BKo0kqGPZ7FkvUJGQN6bvtzPSrRcAoSFWrgQ4tnKs8sW0bv%2BwniPS&X-Amz-Signature=3e8ef5d98075a9d8ab2542bb05e83abb516f8d7d34e0d97a782110f7660803c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
