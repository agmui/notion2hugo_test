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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST56K2HD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCFA%2Bf1FygNS0diousY6xEV%2BaBLoSDtEAyzmVq7TkcCgIhANNum7jlUTMklPyZJBxAu9MwMw1mYVcW%2FBkaR8%2BwTc7iKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCIol1ZYAKVbLOZx0q3ANJNUrYgJQK6f0owO1z7c4rnToqV6TCGUYGGCmOILVi9PTam3x%2Bql3GvgePI84cBKtiVfysijDZKUDfHSVyij%2FWDtFrSySWrbz4KPSkW0GrQap6nYlfMla9KIgFyoe5OKTS%2FQ6q0S8JZYQRBns1%2FORJWIDdNMP%2FotXj5nuvCo5Ehd9rM1TZJACnKBm23zqoS6CYNzUziHVU8zixbEuaoIRSmKIEOB6DRNyBZCeWNlVSjmSkcOH5zOJpfmXQxLZnZ0zAOCuaPMWzBZGbj4Jz3gcUBbFl8DFBYdtytgzVbuyEn1FUZZkRsmrYSmo99HOn390lIytPWCCCmhFvrm2DDlWYYKHsQLVf%2Fz%2FiHsoWWTzDnDIUkJA4k27viU0poO%2B%2FryuX148BKCg%2BzwnEnTWhcL3Kpxccz11tUNo5ooGXJsF5q57ZMV2Jdvn56ehYUDFfSPmThftbxrI1TPMWFwil3iAAIu3qMJS7UFlUMy%2Bb%2F6KFey6AsT4rDWffx4UfLZIKpq%2F0%2BfWRqd4DdG%2BbC6wj1gCwH7spy%2FlWowfj19FnK1WZZARTVZ6B4P7BqEJFe3HjPCuJnPlecpD3G6rwM7vEjiGfTr5kzVPcfmQtf%2BdGscAh0GK5nH7VusRHplsKeTDju4jDBjqkARtXzIuSnmVllvVO6r2mGUA4%2Fj38MoVeoLqf12Wl1mQClIyeKdVTBKKeXNGKuj4zBOm56WAs7%2Fc9xSiHLLBXqPU1xYJ06x1DXTFhMmbYwZRG6z3aT9yraVnKfha72CjOrUAJi7ASruuU7mkdqy38YP97V%2F7CmLbx4PLSETFRQJ5ladH%2FoApDWrgJXPAkE2LfjFBAYe9%2BO55RsZ1yiu0%2F%2BhYZacmR&X-Amz-Signature=f5761007f918d89bd4282e372f0af3011cd3170953dce5b63dd3ee764ff4835e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST56K2HD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCFA%2Bf1FygNS0diousY6xEV%2BaBLoSDtEAyzmVq7TkcCgIhANNum7jlUTMklPyZJBxAu9MwMw1mYVcW%2FBkaR8%2BwTc7iKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCIol1ZYAKVbLOZx0q3ANJNUrYgJQK6f0owO1z7c4rnToqV6TCGUYGGCmOILVi9PTam3x%2Bql3GvgePI84cBKtiVfysijDZKUDfHSVyij%2FWDtFrSySWrbz4KPSkW0GrQap6nYlfMla9KIgFyoe5OKTS%2FQ6q0S8JZYQRBns1%2FORJWIDdNMP%2FotXj5nuvCo5Ehd9rM1TZJACnKBm23zqoS6CYNzUziHVU8zixbEuaoIRSmKIEOB6DRNyBZCeWNlVSjmSkcOH5zOJpfmXQxLZnZ0zAOCuaPMWzBZGbj4Jz3gcUBbFl8DFBYdtytgzVbuyEn1FUZZkRsmrYSmo99HOn390lIytPWCCCmhFvrm2DDlWYYKHsQLVf%2Fz%2FiHsoWWTzDnDIUkJA4k27viU0poO%2B%2FryuX148BKCg%2BzwnEnTWhcL3Kpxccz11tUNo5ooGXJsF5q57ZMV2Jdvn56ehYUDFfSPmThftbxrI1TPMWFwil3iAAIu3qMJS7UFlUMy%2Bb%2F6KFey6AsT4rDWffx4UfLZIKpq%2F0%2BfWRqd4DdG%2BbC6wj1gCwH7spy%2FlWowfj19FnK1WZZARTVZ6B4P7BqEJFe3HjPCuJnPlecpD3G6rwM7vEjiGfTr5kzVPcfmQtf%2BdGscAh0GK5nH7VusRHplsKeTDju4jDBjqkARtXzIuSnmVllvVO6r2mGUA4%2Fj38MoVeoLqf12Wl1mQClIyeKdVTBKKeXNGKuj4zBOm56WAs7%2Fc9xSiHLLBXqPU1xYJ06x1DXTFhMmbYwZRG6z3aT9yraVnKfha72CjOrUAJi7ASruuU7mkdqy38YP97V%2F7CmLbx4PLSETFRQJ5ladH%2FoApDWrgJXPAkE2LfjFBAYe9%2BO55RsZ1yiu0%2F%2BhYZacmR&X-Amz-Signature=971ea4e74be59998d242b1e3726d2290e98b1b570843db6888a9e349f180b05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
