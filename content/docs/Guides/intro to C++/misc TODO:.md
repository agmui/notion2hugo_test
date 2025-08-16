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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IS26Y2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAOG%2BcoCBnLirNspD%2FhvPZknBg2Xb90i0cbXuKHlE7vtAiEAm%2ByA%2FkadVaLUti3ADOejprsd3a5mvv5Bjj92uXeEe4cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIvjNgsvcXUpNoGJuCrcA7Y9IVuDzPOw%2FnGOqrv70HoX6yjgEbj%2FtG2rC%2Bu0sxcxqMbzGpeVApensxqXrsSHE85VGUH4WC1dgxxO6q93Xoi1VyT7XCbyC9Uw%2F6L9kd1ZvSbXVBU2XsV53qYyzj%2Bnn23zaaKTT%2Bk8%2Bd7ZuwOx%2BDDkBrKaL%2BGPqXx2em9LdCvmQfuH6Uh9CGVJSHzC89DChmQEQLZ0dMdP5MnS5BUGu01nWo6YHC2i8Hu74ZvCranTCY939MKglNyvGiogYW0bScN6DJm4fOTsAtGeBqG7r3ddxCwNp1buSbL%2FSjv19LnVENhYaZQdxxqIC%2FIqu7CO%2FY%2FmUAYS4ozvdphZXAIIPxStSOUr1aJuEDMpuot8bpk8HljeVJJ7rm9o%2FKhAvEL00IE3CVJVbbCNVy%2FddoC0%2FvIOfVXnSWctynsVhyYbOws%2FfP6uD3KehBhdrZJ4RpWEZ2s%2FLz1d%2BxUImSrtAMPjWDuYho416pOtieYi%2BDRybGpqQp97f3zJ4YqUCa8Nr4vkhdJV3uKOQkCnRXuEKehpsSc9cRpyuswY%2FwJcZqs92cujgqCSnW1XZPggfGnwrGbmKA6k7XOdxgQHqrKiFp6oTrwBwe3hoHBpoDOrK4waTNWzIp8YnDOgE33yZx6hMP73gMUGOqUBEfpdfEstJaY1E%2BfLiaWk6oXkt8WcKhQc41w%2FRcDcF8zRLPNYRjFt0wGcA%2FLE1WlkLaFLeZsvi8Bm30LkdGOk%2Bu7B9%2B23xEXhPEH5QKCSyYSCZHC0n%2F0EaQA1bfchFf8qz9NzdnC47iEBtMrA41cBtD8Pkljwo5gd%2B%2FNBVLL6KVCWoFXB4dOt0GBZoszFk9rKKuUUAaxLLX5%2B4PRtKFp6WJbbYDEI&X-Amz-Signature=96f0ea323deef765900a41cd78f002a891e8786749a166800fcb57d8ad0bf001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IS26Y2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAOG%2BcoCBnLirNspD%2FhvPZknBg2Xb90i0cbXuKHlE7vtAiEAm%2ByA%2FkadVaLUti3ADOejprsd3a5mvv5Bjj92uXeEe4cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIvjNgsvcXUpNoGJuCrcA7Y9IVuDzPOw%2FnGOqrv70HoX6yjgEbj%2FtG2rC%2Bu0sxcxqMbzGpeVApensxqXrsSHE85VGUH4WC1dgxxO6q93Xoi1VyT7XCbyC9Uw%2F6L9kd1ZvSbXVBU2XsV53qYyzj%2Bnn23zaaKTT%2Bk8%2Bd7ZuwOx%2BDDkBrKaL%2BGPqXx2em9LdCvmQfuH6Uh9CGVJSHzC89DChmQEQLZ0dMdP5MnS5BUGu01nWo6YHC2i8Hu74ZvCranTCY939MKglNyvGiogYW0bScN6DJm4fOTsAtGeBqG7r3ddxCwNp1buSbL%2FSjv19LnVENhYaZQdxxqIC%2FIqu7CO%2FY%2FmUAYS4ozvdphZXAIIPxStSOUr1aJuEDMpuot8bpk8HljeVJJ7rm9o%2FKhAvEL00IE3CVJVbbCNVy%2FddoC0%2FvIOfVXnSWctynsVhyYbOws%2FfP6uD3KehBhdrZJ4RpWEZ2s%2FLz1d%2BxUImSrtAMPjWDuYho416pOtieYi%2BDRybGpqQp97f3zJ4YqUCa8Nr4vkhdJV3uKOQkCnRXuEKehpsSc9cRpyuswY%2FwJcZqs92cujgqCSnW1XZPggfGnwrGbmKA6k7XOdxgQHqrKiFp6oTrwBwe3hoHBpoDOrK4waTNWzIp8YnDOgE33yZx6hMP73gMUGOqUBEfpdfEstJaY1E%2BfLiaWk6oXkt8WcKhQc41w%2FRcDcF8zRLPNYRjFt0wGcA%2FLE1WlkLaFLeZsvi8Bm30LkdGOk%2Bu7B9%2B23xEXhPEH5QKCSyYSCZHC0n%2F0EaQA1bfchFf8qz9NzdnC47iEBtMrA41cBtD8Pkljwo5gd%2B%2FNBVLL6KVCWoFXB4dOt0GBZoszFk9rKKuUUAaxLLX5%2B4PRtKFp6WJbbYDEI&X-Amz-Signature=f42c4300f2571af883fd3647a2d41f0047669e7fa219c559a797a101b28098ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
