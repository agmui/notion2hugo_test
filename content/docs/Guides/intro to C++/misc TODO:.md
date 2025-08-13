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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVNXKE2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKJbYfr2QWdAlerGVCAxfUBSNkAXPsiCoCi4CEOpaP6AiEAoRyqtEdpfzKYWVvplEWBk5iuHFwxs5gDGcn%2BBSoLN2Yq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOHMhSNO3vd6ai0uACrcAwobcRTNM%2FFxyAJxfXW55xYFqK5exG2zTGjLv79rcUHn8l0xCQ5AUKct3ZPT29IqCMsNNyv%2BXy0VXAU3S2J7XgddPMvahPsa3qQ7HflMsI2K%2F%2FBUQamyluHgx7jUJAKDnhF3SJnfDiSQYDe1mdKugBIE1%2BIOeoPWG1mfOQ1k1n7%2FhwdWs2VcOm%2FjjZFt9VVTCiKZGhMtAWEhTKG5a8K8QQcsl7zf81IAhxMDpOe5H8m2sfUJcr%2FHnFMM5dg4qtK%2B5yui4P%2BWLYZSUjoTjndjG2vQfrkPBg%2FeIjxQ%2FlWibFjaPW9EPhBxtCXHnIzeXxYLsuDy7clBhHD0VTryEb3jZYSRqFPpqcsbzPJ605t8WIJIxCid1RgYxGHdDzOC8Bkyc4p%2FuEs48HPkFPfvURNae376gOV0MJlF%2FF%2BJ673Qv2oBhri9sMDqau%2B75eIs8ocEh4ORKdsJJoYAUrZ9NYo5BLHknwYa6rtXVuquyiRayb2OejqDxpBceerv284XZKNv3itmB%2ByAYT%2BnkhADaS81uJOvMPBFSGFhuaLjW1hIOylAyidNtQaacTJVfoZjBco%2B0hpusf1rP5EsjsGuGf%2BzRd7Eo6nY1DLdJAQQPSu37x7PUqqxOD6CLshVaebKMLKr8MQGOqUB%2FwJyPTUoOTI%2BKcxU45hlAJiyjLgTXNY3au5HRW60NP1lwp35wA2h%2B3zRtysvUrF5XD5yWz3TxHY4VT7x5lBy1fR9PVVs5hctfgQL%2F8qAxcSY2dN1Swf%2FzMelBmgpsJTX3isMFDOCk268116hkmt0bRz6w8pIfEn02jY0AuKT1o21M3s0j3z%2FdcC0cwnFlhny9vXfTnsqfLxhVZhMk5Dh15qGZOjA&X-Amz-Signature=b742c9b4a67873a8f74886132d414c258be94a269def645c203e832237cf5a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVNXKE2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKJbYfr2QWdAlerGVCAxfUBSNkAXPsiCoCi4CEOpaP6AiEAoRyqtEdpfzKYWVvplEWBk5iuHFwxs5gDGcn%2BBSoLN2Yq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOHMhSNO3vd6ai0uACrcAwobcRTNM%2FFxyAJxfXW55xYFqK5exG2zTGjLv79rcUHn8l0xCQ5AUKct3ZPT29IqCMsNNyv%2BXy0VXAU3S2J7XgddPMvahPsa3qQ7HflMsI2K%2F%2FBUQamyluHgx7jUJAKDnhF3SJnfDiSQYDe1mdKugBIE1%2BIOeoPWG1mfOQ1k1n7%2FhwdWs2VcOm%2FjjZFt9VVTCiKZGhMtAWEhTKG5a8K8QQcsl7zf81IAhxMDpOe5H8m2sfUJcr%2FHnFMM5dg4qtK%2B5yui4P%2BWLYZSUjoTjndjG2vQfrkPBg%2FeIjxQ%2FlWibFjaPW9EPhBxtCXHnIzeXxYLsuDy7clBhHD0VTryEb3jZYSRqFPpqcsbzPJ605t8WIJIxCid1RgYxGHdDzOC8Bkyc4p%2FuEs48HPkFPfvURNae376gOV0MJlF%2FF%2BJ673Qv2oBhri9sMDqau%2B75eIs8ocEh4ORKdsJJoYAUrZ9NYo5BLHknwYa6rtXVuquyiRayb2OejqDxpBceerv284XZKNv3itmB%2ByAYT%2BnkhADaS81uJOvMPBFSGFhuaLjW1hIOylAyidNtQaacTJVfoZjBco%2B0hpusf1rP5EsjsGuGf%2BzRd7Eo6nY1DLdJAQQPSu37x7PUqqxOD6CLshVaebKMLKr8MQGOqUB%2FwJyPTUoOTI%2BKcxU45hlAJiyjLgTXNY3au5HRW60NP1lwp35wA2h%2B3zRtysvUrF5XD5yWz3TxHY4VT7x5lBy1fR9PVVs5hctfgQL%2F8qAxcSY2dN1Swf%2FzMelBmgpsJTX3isMFDOCk268116hkmt0bRz6w8pIfEn02jY0AuKT1o21M3s0j3z%2FdcC0cwnFlhny9vXfTnsqfLxhVZhMk5Dh15qGZOjA&X-Amz-Signature=e8a36ac631f30552bd9d187e29d4d04803f55cf53393389ed641bd247827c8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
