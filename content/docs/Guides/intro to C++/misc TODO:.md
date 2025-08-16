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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INTSJZW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGqzpxZ0iqWx3a7mcBIh%2F05HhSEHyBl8A7E0yLUrFgxCAiBpJSm%2BA0dBqQC2ty67wNqGDxP0VSbMdYts0xF0pMf7Dir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMq5%2F8feh2Ew2vHoJcKtwD30aAQ2FuwK6WqbMfa%2FS4oHwi%2FL0Su2i4Ein0hwoYH0FY6X6hDC5nHk1fhwNXuJKOIFlo8Rbnr5mrnCc8f5MpEgaluYWPWs%2Bb3r32nRA418UF3urbR2qDkOTspI2gQwfJNRnbU%2FaIeB8st6cQlleIcDUa568HKQvKZ8KUHO8nNUGs7ArSqg3ZusHL%2BnAq1lU681F%2BBGJa%2FK1ZSQEUa73GMsq%2BRrN0MQJKvemuqPXc6AxbRB0nyZbogn27WWuMiUA0%2BmwXJXFGP4WrUFyK2xoMILYRe5Bu%2BnmP%2BgkJbvz%2BSxOC%2FmjiA6buW3zk6le8jhCBNesUwyKvmS8BHZidxRAX2m1TiREDdlYXG9uxpRpnASksoBQGroVP4w98ZGciJMmWlGtNFnn2HS%2FEX7IrmG7MmX6bBpIXIeTWEJs8EH8qVFe0kU0U63L5oq1WqFX5n4QlqWpI1WguvoFMSfgpEx8zAlN1nQ4x%2FZf9HLu%2F5niL23DVtgZHt%2BlclQ%2FUhGxEMKw4oL3HAmzaeN3%2F3rIr5rvnxBxofyRAGQckQ%2Fl9PodtMA8rdYzGrdVD6VSV3knL9veXclqgfve5Vya5nhGwgefg%2BykQ9HLSBImDY%2FkkW8uYmCuaSzBlBOHS84mWGM4w19j%2BxAY6pgHw%2BJHvIM5%2Brl24BY02eJ4gl0e%2F4xM6XSGqfHl9M1bOamva0ms1Ery6ppsA9SLXef2qRVKWWLHLRcIEcLITy6EAwGV5b0eRBN3yqF5%2BP0zz6e238b7ajbnlKvZTPcRt0X6Q4IpoOxIosoLZdYng5eN6TTDHBBCCjkHljvNu4DWKp6TGZwVzYWAkvy6AzUjweZXs80%2Fikn9OYNFmDufuCsweGmLrOw%2Fo&X-Amz-Signature=848a837aa93a8388280e3f82df4196250a57eeadda21c38d8face76b1d044eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INTSJZW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGqzpxZ0iqWx3a7mcBIh%2F05HhSEHyBl8A7E0yLUrFgxCAiBpJSm%2BA0dBqQC2ty67wNqGDxP0VSbMdYts0xF0pMf7Dir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMq5%2F8feh2Ew2vHoJcKtwD30aAQ2FuwK6WqbMfa%2FS4oHwi%2FL0Su2i4Ein0hwoYH0FY6X6hDC5nHk1fhwNXuJKOIFlo8Rbnr5mrnCc8f5MpEgaluYWPWs%2Bb3r32nRA418UF3urbR2qDkOTspI2gQwfJNRnbU%2FaIeB8st6cQlleIcDUa568HKQvKZ8KUHO8nNUGs7ArSqg3ZusHL%2BnAq1lU681F%2BBGJa%2FK1ZSQEUa73GMsq%2BRrN0MQJKvemuqPXc6AxbRB0nyZbogn27WWuMiUA0%2BmwXJXFGP4WrUFyK2xoMILYRe5Bu%2BnmP%2BgkJbvz%2BSxOC%2FmjiA6buW3zk6le8jhCBNesUwyKvmS8BHZidxRAX2m1TiREDdlYXG9uxpRpnASksoBQGroVP4w98ZGciJMmWlGtNFnn2HS%2FEX7IrmG7MmX6bBpIXIeTWEJs8EH8qVFe0kU0U63L5oq1WqFX5n4QlqWpI1WguvoFMSfgpEx8zAlN1nQ4x%2FZf9HLu%2F5niL23DVtgZHt%2BlclQ%2FUhGxEMKw4oL3HAmzaeN3%2F3rIr5rvnxBxofyRAGQckQ%2Fl9PodtMA8rdYzGrdVD6VSV3knL9veXclqgfve5Vya5nhGwgefg%2BykQ9HLSBImDY%2FkkW8uYmCuaSzBlBOHS84mWGM4w19j%2BxAY6pgHw%2BJHvIM5%2Brl24BY02eJ4gl0e%2F4xM6XSGqfHl9M1bOamva0ms1Ery6ppsA9SLXef2qRVKWWLHLRcIEcLITy6EAwGV5b0eRBN3yqF5%2BP0zz6e238b7ajbnlKvZTPcRt0X6Q4IpoOxIosoLZdYng5eN6TTDHBBCCjkHljvNu4DWKp6TGZwVzYWAkvy6AzUjweZXs80%2Fikn9OYNFmDufuCsweGmLrOw%2Fo&X-Amz-Signature=2bf6e16414af04b34588beefb5b1718c8e8754c723945940791c84243981b8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
