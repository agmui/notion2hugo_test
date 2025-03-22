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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K5UXEX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFgAMfIKVWyzZF8liIvbv3jfNOk29VMLIkhlteYC0eCgAiArFUU7PcXHcv55lGyldIkjMtyZ1nLlDYGKANwlPTzpIiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYAYJDu%2BnNaeaI8jKtwDwKjtzbYmBNNIeCeOBWCBTgAOOwBUpr63QZBzFwehZ6kisNK%2FmYk4uZfIVTn4MoOUDMwwyj%2FTKke%2FOrMUzJp6YGH6F920C2b11aBp1zt5z27CQuFN%2Fk3OyPkr8iH%2BiyNMqjRFupy16hCdrTCpeiA%2FQfh0eZCDcmGIYEf%2FLCR5i0NDMmVGFajrVDCFn3f3Pf%2FltBGlbHPsriutvi4gFxpeKhMwvS%2F7%2BXXjMfHTJLud89ChWLQ5jS9IMMMRpU1bsXPFE6QfcfuwnE7%2BaU%2Fvxf5z3ULEx2Z8WsSDDx3Jbdu3KUZ3JZ5jOsFi0FVhhN7Ohz3KGNw1Ncj59iMg5VFQCCKGzWa5KiCPD1C8Mi8%2F9A2hocSINONKk%2FKNbJVNpZtvYzwRzKfwzeLL4ZxW5hSSIuMfYCnwUMh0m5liCPCSEZ5i0eCwYLF8uIMtveTE0zTdXncWqnBVo4EFZ5AkBsHkKdYi4Zv%2BQDnUHw0e2aTr4B3yV%2F6LNXP8CA%2Bd1%2Blef%2B9uOndaozYJN89zegaW6m1C0%2B092JnHThIziHPgOgzRd1jYLeyjUwRlCM07%2BHbxYTs1YmGd%2Fa66i1Mm0zxmPvH2jCNvEoiPUzyC2bBmf47YeDY4GEe9K%2B9LJf5hIhHDB3swnLb8vgY6pgGVbIu9MT83T%2F0IDre%2BnqPTXWSvnfC5ScPgSNSka5ZNTZmIsxut5NsdWKIHnEcOZeJ9W4KY0%2BaH2Z11lO7w7xkGHa9pIdQGqbyaeCc9X%2BY0kHPFyKuffmDUu7aTbS8ZBJ9v6y5QvERAyjAhpdwTow47dXl3f0bAqYpF%2Fqd06EJUksuKDKz%2BDuxEs2xuuJzoai1s4k%2FE2YffHXM%2FPAXx9JKbgr9sAkbS&X-Amz-Signature=041e6aca47e9ed07c64f9d7408b79e8c1bf02ce18a6f6d12be4686670a74f9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K5UXEX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFgAMfIKVWyzZF8liIvbv3jfNOk29VMLIkhlteYC0eCgAiArFUU7PcXHcv55lGyldIkjMtyZ1nLlDYGKANwlPTzpIiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYAYJDu%2BnNaeaI8jKtwDwKjtzbYmBNNIeCeOBWCBTgAOOwBUpr63QZBzFwehZ6kisNK%2FmYk4uZfIVTn4MoOUDMwwyj%2FTKke%2FOrMUzJp6YGH6F920C2b11aBp1zt5z27CQuFN%2Fk3OyPkr8iH%2BiyNMqjRFupy16hCdrTCpeiA%2FQfh0eZCDcmGIYEf%2FLCR5i0NDMmVGFajrVDCFn3f3Pf%2FltBGlbHPsriutvi4gFxpeKhMwvS%2F7%2BXXjMfHTJLud89ChWLQ5jS9IMMMRpU1bsXPFE6QfcfuwnE7%2BaU%2Fvxf5z3ULEx2Z8WsSDDx3Jbdu3KUZ3JZ5jOsFi0FVhhN7Ohz3KGNw1Ncj59iMg5VFQCCKGzWa5KiCPD1C8Mi8%2F9A2hocSINONKk%2FKNbJVNpZtvYzwRzKfwzeLL4ZxW5hSSIuMfYCnwUMh0m5liCPCSEZ5i0eCwYLF8uIMtveTE0zTdXncWqnBVo4EFZ5AkBsHkKdYi4Zv%2BQDnUHw0e2aTr4B3yV%2F6LNXP8CA%2Bd1%2Blef%2B9uOndaozYJN89zegaW6m1C0%2B092JnHThIziHPgOgzRd1jYLeyjUwRlCM07%2BHbxYTs1YmGd%2Fa66i1Mm0zxmPvH2jCNvEoiPUzyC2bBmf47YeDY4GEe9K%2B9LJf5hIhHDB3swnLb8vgY6pgGVbIu9MT83T%2F0IDre%2BnqPTXWSvnfC5ScPgSNSka5ZNTZmIsxut5NsdWKIHnEcOZeJ9W4KY0%2BaH2Z11lO7w7xkGHa9pIdQGqbyaeCc9X%2BY0kHPFyKuffmDUu7aTbS8ZBJ9v6y5QvERAyjAhpdwTow47dXl3f0bAqYpF%2Fqd06EJUksuKDKz%2BDuxEs2xuuJzoai1s4k%2FE2YffHXM%2FPAXx9JKbgr9sAkbS&X-Amz-Signature=36169b0943205fafe52a3ee5ba722b5c802b934605be5e763aa719b6fda7ab9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
