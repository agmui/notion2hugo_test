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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHD6SCHW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9RT2gT23M8IORACf2EggTRIm%2Fqc6tt9syQhEHc%2FzFXAiEAkOdnOq03AUTdOD5xvfhZ0RqmMFYF55zrT2iYITyomiYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGF2bWvTxv0TM1ASOSrcA%2BEMLwTSJHMpYjmZpvpwg6oF7BM0NmH51bIH8B%2FhNtlP8BqMDKKsKMeH3qUcl7I0k6%2Fgvbyi1sfYr9FShDcennCUbSXd82V7pVgnZqHlBw7EzJFS29yO38ssiY2L5ln6UC6nH%2BvXRKlfv%2FNx5nq%2BrJQuTJh5mMyqFdFUeSqyh%2Fn9dYejBtHElh4Nbl1HEQ9B8gLK7I%2FX0mcis0B1gqsn9h2Q8bO0LsU53fYx1jItiw97u%2FF892oAUOrFGPequM%2BGwrV3zmnyOL%2BvISGjDjBjHiQ%2FNdF8OklgyUo8o0JAOflgzI0keDpDRFS7wm9F32wp%2BcFSFaa0pBs%2BgMWWYwzXx%2FqjrJkjevILtQvSnrtq6g4Oz6o8Lb9wMCGxQlCl71EkTRgn7bE52lK2WRvBdcsITO0DufifEigdohkdZ1oD0xcsNzkGq4YP4wEIvnPMe5TY7fNT4rhfej6LCu1w4QE0oNoDkPSog0KWUpV%2B0Q95ckOREIt6rUNSu7RaeK0YoWDyrJYIxr7pOmNNoP%2B3uLI%2BzXdMJYTbFIv4aGsgXGB8%2B5nTF7ZByO6QNayi5S5Mm4%2FroIEqoCmtngzGHRyoIM9gF3XnO5TGuL78OqxZuBWOBIMfK5WK5qQmgmVXijXsML7Y1L8GOqUBdcHhrFZrmxsarko%2B7kqmb%2BrnK1CfVQGE6hibWWbGIKBHNb1qQTGFZi62t36MdYgzX5xgfXkTI5S7sptlDrdYHBTmEa3JmW00vVN74CVz7Zdh6O8BIf2TxAvVq%2FrquHdomfnKCwkoDVVD5hOfwCpMv0KRo5DBF2PsEauu735UJpal9p10oqkSXD1W3cCXGI8mmcBoyfLkKxiWpm6V4IwzRBbwYbNe&X-Amz-Signature=8d150c4b88405bec6bcf4a7a54b514f3f6f19704a20d738470773459d6a569d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHD6SCHW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9RT2gT23M8IORACf2EggTRIm%2Fqc6tt9syQhEHc%2FzFXAiEAkOdnOq03AUTdOD5xvfhZ0RqmMFYF55zrT2iYITyomiYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGF2bWvTxv0TM1ASOSrcA%2BEMLwTSJHMpYjmZpvpwg6oF7BM0NmH51bIH8B%2FhNtlP8BqMDKKsKMeH3qUcl7I0k6%2Fgvbyi1sfYr9FShDcennCUbSXd82V7pVgnZqHlBw7EzJFS29yO38ssiY2L5ln6UC6nH%2BvXRKlfv%2FNx5nq%2BrJQuTJh5mMyqFdFUeSqyh%2Fn9dYejBtHElh4Nbl1HEQ9B8gLK7I%2FX0mcis0B1gqsn9h2Q8bO0LsU53fYx1jItiw97u%2FF892oAUOrFGPequM%2BGwrV3zmnyOL%2BvISGjDjBjHiQ%2FNdF8OklgyUo8o0JAOflgzI0keDpDRFS7wm9F32wp%2BcFSFaa0pBs%2BgMWWYwzXx%2FqjrJkjevILtQvSnrtq6g4Oz6o8Lb9wMCGxQlCl71EkTRgn7bE52lK2WRvBdcsITO0DufifEigdohkdZ1oD0xcsNzkGq4YP4wEIvnPMe5TY7fNT4rhfej6LCu1w4QE0oNoDkPSog0KWUpV%2B0Q95ckOREIt6rUNSu7RaeK0YoWDyrJYIxr7pOmNNoP%2B3uLI%2BzXdMJYTbFIv4aGsgXGB8%2B5nTF7ZByO6QNayi5S5Mm4%2FroIEqoCmtngzGHRyoIM9gF3XnO5TGuL78OqxZuBWOBIMfK5WK5qQmgmVXijXsML7Y1L8GOqUBdcHhrFZrmxsarko%2B7kqmb%2BrnK1CfVQGE6hibWWbGIKBHNb1qQTGFZi62t36MdYgzX5xgfXkTI5S7sptlDrdYHBTmEa3JmW00vVN74CVz7Zdh6O8BIf2TxAvVq%2FrquHdomfnKCwkoDVVD5hOfwCpMv0KRo5DBF2PsEauu735UJpal9p10oqkSXD1W3cCXGI8mmcBoyfLkKxiWpm6V4IwzRBbwYbNe&X-Amz-Signature=d43ba7994928d53f0e319d8aa9f281f8b753fdf5409c77bf10998b95ea056c91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
