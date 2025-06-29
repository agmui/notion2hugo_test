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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTZKHON%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMhq4JculV1%2FtmZ0wb9sDNRw7gODbbmFTjb4PiufAPBAiEA%2FRPlOQ9WKbiH1SYRWHF2sQNVwdtZnNpH%2Bkk5YmvWzxEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcJKUjMukopGgp0ICrcA4UDa%2B2QoQefi1uqZSdSVZmVsJ1tiluRtDwh1HlHmV%2Fd5DUeYLE0PpJPFupbjIXcs1Owedl8FFZQ55KpTV6ZbgxCg%2FRTEghKoorL7kcMggUQ9uCvkX6jlN91bSfSg46DA0wT2gHTI1Kz79MCeFPKFPZSQ32AW01TIsDoDvfGyNnn%2BnosSAOddvwRnN8cNTZSeNdo1yYF25Rco5YxB6oBqcdLU5HQL2H%2BxafRe6MHIdq1ryQEyz0vuUvhrDkMvyqPC4s2QLkGzzrb63u7XD3LUwSUq5i0%2Bgyh7VI2W0df2poIFJZMGmbjlCPLC3WSZjojUgxqvmZys42s1JvfEiEBwDrxMQloD%2BvpcDIbDOJfML%2BTlzg%2Fl7hrWNFIf67Vdxk63XtHm4HjRIYPtG%2F4cvmuRT4UhCZ70GCwkwagrQijy4GJtVCuQ0iILKOOlPX1pbcKOjo0hS1hnvYS%2FVf2XXzFDF1sadvGCVi%2B0sTOQB3ebIowKJACZ2X8Fktub9bh%2BZe%2Fe2R1U05wtQBOAgyeMCYI5JuHqokjoTeOe19Qsz5qbmYhCnoVSGaAS61zuUoZDfzIEl9UBFLhZKvEuOwIQFvi%2FQXyfZAExiBZJJmrOCRRrPVUdwY7%2FuAkXzBvNNGLMLj6hcMGOqUBcpTxC8Gj5yNGapq8bPK3bBSw9i5RchMHKBY5wrA1Ud9fRczJjui6gJNameXmOeBjLJ0ZNXOHV%2Bo0FlkGC7slfEAeB%2FVzImFA7KBBV46iYsKEUnLsOAc4PS%2B2j305EqMoGngPN2hdT5PbwuXDGvS7oTGreJlf0cnyw5xYWOIKngs44XwbAsUC5H5R2HYU3Q7DXNkp0xGI%2FNdiNR9xnaXNPWXmlTYY&X-Amz-Signature=4c959014bdbc99222921bc24992ecf605f28012cc854816fdc61d5a06dcc5ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTZKHON%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMhq4JculV1%2FtmZ0wb9sDNRw7gODbbmFTjb4PiufAPBAiEA%2FRPlOQ9WKbiH1SYRWHF2sQNVwdtZnNpH%2Bkk5YmvWzxEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcJKUjMukopGgp0ICrcA4UDa%2B2QoQefi1uqZSdSVZmVsJ1tiluRtDwh1HlHmV%2Fd5DUeYLE0PpJPFupbjIXcs1Owedl8FFZQ55KpTV6ZbgxCg%2FRTEghKoorL7kcMggUQ9uCvkX6jlN91bSfSg46DA0wT2gHTI1Kz79MCeFPKFPZSQ32AW01TIsDoDvfGyNnn%2BnosSAOddvwRnN8cNTZSeNdo1yYF25Rco5YxB6oBqcdLU5HQL2H%2BxafRe6MHIdq1ryQEyz0vuUvhrDkMvyqPC4s2QLkGzzrb63u7XD3LUwSUq5i0%2Bgyh7VI2W0df2poIFJZMGmbjlCPLC3WSZjojUgxqvmZys42s1JvfEiEBwDrxMQloD%2BvpcDIbDOJfML%2BTlzg%2Fl7hrWNFIf67Vdxk63XtHm4HjRIYPtG%2F4cvmuRT4UhCZ70GCwkwagrQijy4GJtVCuQ0iILKOOlPX1pbcKOjo0hS1hnvYS%2FVf2XXzFDF1sadvGCVi%2B0sTOQB3ebIowKJACZ2X8Fktub9bh%2BZe%2Fe2R1U05wtQBOAgyeMCYI5JuHqokjoTeOe19Qsz5qbmYhCnoVSGaAS61zuUoZDfzIEl9UBFLhZKvEuOwIQFvi%2FQXyfZAExiBZJJmrOCRRrPVUdwY7%2FuAkXzBvNNGLMLj6hcMGOqUBcpTxC8Gj5yNGapq8bPK3bBSw9i5RchMHKBY5wrA1Ud9fRczJjui6gJNameXmOeBjLJ0ZNXOHV%2Bo0FlkGC7slfEAeB%2FVzImFA7KBBV46iYsKEUnLsOAc4PS%2B2j305EqMoGngPN2hdT5PbwuXDGvS7oTGreJlf0cnyw5xYWOIKngs44XwbAsUC5H5R2HYU3Q7DXNkp0xGI%2FNdiNR9xnaXNPWXmlTYY&X-Amz-Signature=8b9e8a09c193708204eb4e45b9562e3ecf66e7f4c3ff51681be30e305accc4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
