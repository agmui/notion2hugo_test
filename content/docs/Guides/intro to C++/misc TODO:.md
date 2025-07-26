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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ACMX5C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIB%2F52fKv5LvR0j5UrRwvW9tF0ZmxMT04C24QVNeMvL2iAiB0JrKdFTayq%2Bua4BYh3UkWK9Ley4gO7llze%2BwUaa9R5Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM06cDBSC4qbtoIioJKtwDtLTGr66AqeN2s6ZGSrYeznujnZrXodMSkAwdvgbb1UTaVq79U8GlhNIKjIGlAw8XTVk5lxLLYr0OEwwwipV4aStTKI89j9TuOWYZhsT7KjEPqgJ5FhpPY%2F%2BBo4JP288Z4HsLc9usCbJNa9aoe468zVnp48FE9hRyDlI4tNa6LlobxYQFial3UMOvRAmOIEYTouqkmCFRmg7RSj%2BnVwr2HukP3ZbV%2FOVnNhnuGUKJIr0yDCOArLUMWN%2Fvkdv1Oq3caWLF8an8Cp%2F6vVuDHu9ZU69IRA6WIBFmWLREfH58xF27NEVSrt3VYhceDXZR6RYeF9BSShc4ndLcqNTsHlYDQB4FYifoPniwscFa9LkvAFhdLRqYure9RzCizWhyptCRX9kf4yEpo3zK8hs0e8uET6bGir7K3RD9nxPSBt5rFTxSFuAE1io%2FWXdEMSawON0YXiFI9J4ogoiLEzrBxBs6FP%2FOTs9WkV63R5oKcXShKc%2F66tUvlLSxfUG4J2ZsXc1TckvJFDTQSr1i6suM5rnrosG%2Fbu5oRoACTMuH2NXlirfCbA94%2FP0f7vnzdtFV7gxQxYuophyrSVUOcalEXV%2F34ezRcqeHcNAtE7Aa0N201lcN65QEXjTai0Fcg%2BswjPqSxAY6pgGKTdGuGRiKvgbBJyJ3VylNRk1S57M7ixBwOH0eBOK8Srl9eQCAbm4KXS1w9Zr%2BjS2VzHw4xJ17RhCLIeMIAK%2B6FtBsPnbc2Nd%2Ft0ui%2BRWWQq3hhRF0fFt0bvLVg6R4jcd%2BHi5IR%2BOeUVBh%2Bacqx%2FSe4u1ieMb3CnQBettQWYWDhnsBY4olWFW%2FFUlf8pnyuFNctfAnonD03VFXIDaPXuqkKBUjCCOn&X-Amz-Signature=33252dc4d439441562c2010ab7139bda38df48e571fe1729696d35b7ebeb0158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ACMX5C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIB%2F52fKv5LvR0j5UrRwvW9tF0ZmxMT04C24QVNeMvL2iAiB0JrKdFTayq%2Bua4BYh3UkWK9Ley4gO7llze%2BwUaa9R5Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM06cDBSC4qbtoIioJKtwDtLTGr66AqeN2s6ZGSrYeznujnZrXodMSkAwdvgbb1UTaVq79U8GlhNIKjIGlAw8XTVk5lxLLYr0OEwwwipV4aStTKI89j9TuOWYZhsT7KjEPqgJ5FhpPY%2F%2BBo4JP288Z4HsLc9usCbJNa9aoe468zVnp48FE9hRyDlI4tNa6LlobxYQFial3UMOvRAmOIEYTouqkmCFRmg7RSj%2BnVwr2HukP3ZbV%2FOVnNhnuGUKJIr0yDCOArLUMWN%2Fvkdv1Oq3caWLF8an8Cp%2F6vVuDHu9ZU69IRA6WIBFmWLREfH58xF27NEVSrt3VYhceDXZR6RYeF9BSShc4ndLcqNTsHlYDQB4FYifoPniwscFa9LkvAFhdLRqYure9RzCizWhyptCRX9kf4yEpo3zK8hs0e8uET6bGir7K3RD9nxPSBt5rFTxSFuAE1io%2FWXdEMSawON0YXiFI9J4ogoiLEzrBxBs6FP%2FOTs9WkV63R5oKcXShKc%2F66tUvlLSxfUG4J2ZsXc1TckvJFDTQSr1i6suM5rnrosG%2Fbu5oRoACTMuH2NXlirfCbA94%2FP0f7vnzdtFV7gxQxYuophyrSVUOcalEXV%2F34ezRcqeHcNAtE7Aa0N201lcN65QEXjTai0Fcg%2BswjPqSxAY6pgGKTdGuGRiKvgbBJyJ3VylNRk1S57M7ixBwOH0eBOK8Srl9eQCAbm4KXS1w9Zr%2BjS2VzHw4xJ17RhCLIeMIAK%2B6FtBsPnbc2Nd%2Ft0ui%2BRWWQq3hhRF0fFt0bvLVg6R4jcd%2BHi5IR%2BOeUVBh%2Bacqx%2FSe4u1ieMb3CnQBettQWYWDhnsBY4olWFW%2FFUlf8pnyuFNctfAnonD03VFXIDaPXuqkKBUjCCOn&X-Amz-Signature=58bad979d48abbac672d0800b9a1e87a2f1c4d754da392c04d473b9c57f4f3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
