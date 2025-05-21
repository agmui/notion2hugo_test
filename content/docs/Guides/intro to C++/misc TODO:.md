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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIJQ35Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeG%2BfbvMv55fe3pZAz%2BN9G%2BngXfwO3NKbQT1Fxt56TxAiAkcVtgj64UU4geKhNzSa34Ss2t%2BT5EEDHtlXlt9BurdiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9TChgC31lSULYmOKtwDLCoxl1qGTF5mBzReU7S77nghWfnXPl%2BgFZiWtSe3lmfDZtknFJ3Bs%2B1J7lKw8EXO72fvyiSAQqMUVMiWILQphRaYnM7oFAFYeizaI0kMci1xSdzSCK9wp3KGXYWT3heU9YtGjMzLtGjirzWFcGdWdImrakeeIyuk8q7XrLvxSp72vohNf%2F8YWcyMwk7TvkAwnT3fnCRIu2gHRd55KXzN%2BwzDAWzHLx6BVNYuV3U3R7ajbDlgXOq7fSn2%2BxSMAOoJiho8Tw4CnCwxyDk%2BpLLquqP41YrxoFhc9F%2BoMKVlvODNw%2BlP85WuMoe3JmimqGpGrak8EbAqnX7rGv1fxOnFtUG0SRec%2BaxVkp3vkfzb7cXlEyFSyUttEveXRcDpoqJRJiGvSdO%2FHZq4vjAABgy%2BwyAXs5vrKpuUqfK3AQ3AtUNgnRsDHi88i643Fbldo%2BQNsWY4cwT%2BjP2SwECcCX%2FPFn8Q7%2BlvoCIcJwk%2BAiu8bsie4ya%2Bqv5NZcjTuHoltx8hIXWd%2BHDX4MAL%2Bzcut5JQ4G1iVbSqxSpv1DPi3lcM2Nd8YB%2B7zNp33ZXJGlHSzzWhN6YaUboKQYxS2ogNt81jqkZO2QM%2BzbxzsvIh0Pl%2B4crtAC3kTKsbGCeBlvIwnO21wQY6pgEQAm52E7GdiIDMJMSuDi3oNAQXDRw8nPH0BC5oB9s4vawii%2FDfHbo%2Bmi9gkhZpJ29g1In6%2BYgowXHyYkTN%2FOEaDrKZKVXUco1vjNmQ2NhQXdnPoVx5FsSCkQFlOLgm7vhtlSxTkSeAEoOelGzZabySBo2Cj%2FeTTepsBpjFGumkQStsp3qTC%2FLJHkSdSYZ%2BOtxDrZ%2FTiT%2BuEBsrOWR3cTctU%2BSpk%2F2R&X-Amz-Signature=e64639b0c5aa14e07dd9c74342cf84d3d94415b17f8f5753f7404922efe17a20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIJQ35Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeG%2BfbvMv55fe3pZAz%2BN9G%2BngXfwO3NKbQT1Fxt56TxAiAkcVtgj64UU4geKhNzSa34Ss2t%2BT5EEDHtlXlt9BurdiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9TChgC31lSULYmOKtwDLCoxl1qGTF5mBzReU7S77nghWfnXPl%2BgFZiWtSe3lmfDZtknFJ3Bs%2B1J7lKw8EXO72fvyiSAQqMUVMiWILQphRaYnM7oFAFYeizaI0kMci1xSdzSCK9wp3KGXYWT3heU9YtGjMzLtGjirzWFcGdWdImrakeeIyuk8q7XrLvxSp72vohNf%2F8YWcyMwk7TvkAwnT3fnCRIu2gHRd55KXzN%2BwzDAWzHLx6BVNYuV3U3R7ajbDlgXOq7fSn2%2BxSMAOoJiho8Tw4CnCwxyDk%2BpLLquqP41YrxoFhc9F%2BoMKVlvODNw%2BlP85WuMoe3JmimqGpGrak8EbAqnX7rGv1fxOnFtUG0SRec%2BaxVkp3vkfzb7cXlEyFSyUttEveXRcDpoqJRJiGvSdO%2FHZq4vjAABgy%2BwyAXs5vrKpuUqfK3AQ3AtUNgnRsDHi88i643Fbldo%2BQNsWY4cwT%2BjP2SwECcCX%2FPFn8Q7%2BlvoCIcJwk%2BAiu8bsie4ya%2Bqv5NZcjTuHoltx8hIXWd%2BHDX4MAL%2Bzcut5JQ4G1iVbSqxSpv1DPi3lcM2Nd8YB%2B7zNp33ZXJGlHSzzWhN6YaUboKQYxS2ogNt81jqkZO2QM%2BzbxzsvIh0Pl%2B4crtAC3kTKsbGCeBlvIwnO21wQY6pgEQAm52E7GdiIDMJMSuDi3oNAQXDRw8nPH0BC5oB9s4vawii%2FDfHbo%2Bmi9gkhZpJ29g1In6%2BYgowXHyYkTN%2FOEaDrKZKVXUco1vjNmQ2NhQXdnPoVx5FsSCkQFlOLgm7vhtlSxTkSeAEoOelGzZabySBo2Cj%2FeTTepsBpjFGumkQStsp3qTC%2FLJHkSdSYZ%2BOtxDrZ%2FTiT%2BuEBsrOWR3cTctU%2BSpk%2F2R&X-Amz-Signature=4ce546cd611870e4e7f4c166f37d7a494611d8da01391554e051343eb0bc80a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
