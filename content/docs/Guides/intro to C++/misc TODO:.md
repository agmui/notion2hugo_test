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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LS4F4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpT0KiKXu6lRxxZuumTy2iAXm2TTCP%2FYUbMfuPCi0%2FQgIhAIp6YKU3UVt%2Fpsi7c%2FggibpxTVzQNN8XCH6I1BT734ZwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBL1B9I9rG3gtMql0q3APxAc4awne3VETx9wuAtrZ1l9YcWmC4NndLtxE5mcH94AE%2BqcWGcFmlDPSoyGUxfIZSEjPht14%2ByDGrn09CiPRIpS9jPNPFGXv5QmGvl4wHjaQWpfjIoIaMsVtkbAAJ6mtZGy%2Fw8C2DH%2FrchOanYVjhvRbCl90SseKIIWlxxWpvOisducFLUdjiDUJq0IN9lS5VLi%2BiH5KPeRkGebDqWKIOY2Zq3dIFoLLg%2BV%2Fr0XBBXKVEouOiYWTO2EcdjVeS%2B2cpEElYkuLudMly4oxvIzh%2BYU5iunejxvAb3hzBJ0TdyySSqDgjl226mp5QwRwQL8dVXAXn9pMWX1n9vSlwmgICiVCvqMWlJgo2AlW7k4l5ignXiX8DKRfFJpAX2kvpupAPEAqBgWQoB4aK7fsCqqAc2sYwOVfU41rvW9lK0CehfXEl%2FBNYIu276ssUoA6yO3%2FHugvOd4HI7F6MsGjBU%2FNa3f5AHanpwjoIaMhOPkwtRrT%2FThlJ1P9e%2FqFSKhF%2Bupm4LR5FdGDDH2203AEzKBH4UZC%2FCAE%2FcuMLMeW1uGdRTTt%2FIrDfiVbkgspRCEcJ%2F0zRP8vOH7Qp8yhThKBTmsolfyHcaiwbgAZJYyDddBcNUarY0ijEw5uVMqbLOjCo0rXEBjqkAV2Tl0f4xPz6M%2BvHfJWMFrqc%2Bx3veFSLrLwz%2FeeRDMkbczZ5UImzgInnzOxa1NFfyH87Ds816DCsZBHBWJ4NDIlYFur8FSNdoT9FELxisJAfqPONk0F43sQoOu7X0kzOAwVNOfu%2FsOGK8wA33gYFDbzngOaaKbzrRHfldmCo9ga7tMy1OcFypMG%2FGBh47WKnfZ1yGYLajNjhoIwzcAFhS9naItyv&X-Amz-Signature=7d3661589894fcf35e7b78041ff78ad132ea9932d7667a466ca9667216a5fcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LS4F4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpT0KiKXu6lRxxZuumTy2iAXm2TTCP%2FYUbMfuPCi0%2FQgIhAIp6YKU3UVt%2Fpsi7c%2FggibpxTVzQNN8XCH6I1BT734ZwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBL1B9I9rG3gtMql0q3APxAc4awne3VETx9wuAtrZ1l9YcWmC4NndLtxE5mcH94AE%2BqcWGcFmlDPSoyGUxfIZSEjPht14%2ByDGrn09CiPRIpS9jPNPFGXv5QmGvl4wHjaQWpfjIoIaMsVtkbAAJ6mtZGy%2Fw8C2DH%2FrchOanYVjhvRbCl90SseKIIWlxxWpvOisducFLUdjiDUJq0IN9lS5VLi%2BiH5KPeRkGebDqWKIOY2Zq3dIFoLLg%2BV%2Fr0XBBXKVEouOiYWTO2EcdjVeS%2B2cpEElYkuLudMly4oxvIzh%2BYU5iunejxvAb3hzBJ0TdyySSqDgjl226mp5QwRwQL8dVXAXn9pMWX1n9vSlwmgICiVCvqMWlJgo2AlW7k4l5ignXiX8DKRfFJpAX2kvpupAPEAqBgWQoB4aK7fsCqqAc2sYwOVfU41rvW9lK0CehfXEl%2FBNYIu276ssUoA6yO3%2FHugvOd4HI7F6MsGjBU%2FNa3f5AHanpwjoIaMhOPkwtRrT%2FThlJ1P9e%2FqFSKhF%2Bupm4LR5FdGDDH2203AEzKBH4UZC%2FCAE%2FcuMLMeW1uGdRTTt%2FIrDfiVbkgspRCEcJ%2F0zRP8vOH7Qp8yhThKBTmsolfyHcaiwbgAZJYyDddBcNUarY0ijEw5uVMqbLOjCo0rXEBjqkAV2Tl0f4xPz6M%2BvHfJWMFrqc%2Bx3veFSLrLwz%2FeeRDMkbczZ5UImzgInnzOxa1NFfyH87Ds816DCsZBHBWJ4NDIlYFur8FSNdoT9FELxisJAfqPONk0F43sQoOu7X0kzOAwVNOfu%2FsOGK8wA33gYFDbzngOaaKbzrRHfldmCo9ga7tMy1OcFypMG%2FGBh47WKnfZ1yGYLajNjhoIwzcAFhS9naItyv&X-Amz-Signature=04d2d0e86936677a4cb4c855649d9775612afca3cbe4cfba842cd36af1e72588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
