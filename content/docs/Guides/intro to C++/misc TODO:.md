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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NQKP46%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC3sHHQzYEAKVQNexZxMgCW8LOoPf0xm5fO3mZzNm8H%2FQIhANIyMH14QNwlCRIRSFk4jkIxLdE5JfRvJIWrAYhAm5LsKv8DCC0QABoMNjM3NDIzMTgzODA1IgznHwx1ZbWZLuxnss4q3AP%2BwaJ6QNssLZxM%2BsP33LiaV82qdU8SjlTMv60a98lunW5gjFpfiVvu1yIDvSZLEc5Q4qukZz8h5TR2aedxnzm3HkVm%2BFNrcHi%2BxOWjFCUIF%2BUVmt74fF2njUAV481ESk9Yyu07kTedodql3A5WFEUzhTAiwT658PiF2MpWumD5Kpmz729Movot0e4m3c8NRlOplQniB0ZrRue7yYqFvxpDPM5Fy47%2B0sTlPwPow%2FarqxOohvVMubGGMVt3zIcYaoNtnJZGFqwee8W49sfDVdUmFKlBHT3%2BXi7mMaOv1K45Qt01iN1LpkXPSaEa28rdlsdDhdMzLJAWC22yep55MXQr1v%2FpjafG9prmP%2FZ1Re9dkka2scTM28e0Oq1VI9LFRG5BwC0a6RuUE2vmlw68b8xKsN7Dj6T0XYPEzhzLNo8DbhcVNctTjOD79nQXM7vAvcB1GfMBjLA3VkZMWWno8UMt2oC9AQK2aGXVsx1YV%2BGyHApVQ1tuHkN9M21FBwMpxA%2Bz%2Bi26cXxF2VyzJODpaow6xE5bel%2BKWtZ9dZ%2BdYttlbG4ImWljWbVn%2BdhofhLHMvPfTKzRXvA%2BGFjL45ljYDdqmo%2FfvpKpb4ki6%2BhaYhxye2W7i3r849LLcPHb4zDQoJfBBjqkAf03HB4buUxFj3lfc%2Fd%2Fd0NssJIxcurIoAGwoy3ib%2FlNL0szv0l%2FgVUTOJa5YkliKh5hFDs7ezP1lHfyeyIL2Tcnnc5%2Fag%2BmhMSpc69b9a6nUc0ZQAiVh4TsTugc2vtP%2FMQJihjJ8Dg%2B7WeSsIPPV%2FqQODA2K4oz9wkNiselMBZBcq5pVHWc2TRDsuvED%2BrwRYqh3DE%2Bea%2B2mBH1M2uUUVO5gyjJ&X-Amz-Signature=0ae53cc13f6a11b226a1544a6a8b137be6c3b62e76cbb2ba695fa3199ca6228e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NQKP46%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC3sHHQzYEAKVQNexZxMgCW8LOoPf0xm5fO3mZzNm8H%2FQIhANIyMH14QNwlCRIRSFk4jkIxLdE5JfRvJIWrAYhAm5LsKv8DCC0QABoMNjM3NDIzMTgzODA1IgznHwx1ZbWZLuxnss4q3AP%2BwaJ6QNssLZxM%2BsP33LiaV82qdU8SjlTMv60a98lunW5gjFpfiVvu1yIDvSZLEc5Q4qukZz8h5TR2aedxnzm3HkVm%2BFNrcHi%2BxOWjFCUIF%2BUVmt74fF2njUAV481ESk9Yyu07kTedodql3A5WFEUzhTAiwT658PiF2MpWumD5Kpmz729Movot0e4m3c8NRlOplQniB0ZrRue7yYqFvxpDPM5Fy47%2B0sTlPwPow%2FarqxOohvVMubGGMVt3zIcYaoNtnJZGFqwee8W49sfDVdUmFKlBHT3%2BXi7mMaOv1K45Qt01iN1LpkXPSaEa28rdlsdDhdMzLJAWC22yep55MXQr1v%2FpjafG9prmP%2FZ1Re9dkka2scTM28e0Oq1VI9LFRG5BwC0a6RuUE2vmlw68b8xKsN7Dj6T0XYPEzhzLNo8DbhcVNctTjOD79nQXM7vAvcB1GfMBjLA3VkZMWWno8UMt2oC9AQK2aGXVsx1YV%2BGyHApVQ1tuHkN9M21FBwMpxA%2Bz%2Bi26cXxF2VyzJODpaow6xE5bel%2BKWtZ9dZ%2BdYttlbG4ImWljWbVn%2BdhofhLHMvPfTKzRXvA%2BGFjL45ljYDdqmo%2FfvpKpb4ki6%2BhaYhxye2W7i3r849LLcPHb4zDQoJfBBjqkAf03HB4buUxFj3lfc%2Fd%2Fd0NssJIxcurIoAGwoy3ib%2FlNL0szv0l%2FgVUTOJa5YkliKh5hFDs7ezP1lHfyeyIL2Tcnnc5%2Fag%2BmhMSpc69b9a6nUc0ZQAiVh4TsTugc2vtP%2FMQJihjJ8Dg%2B7WeSsIPPV%2FqQODA2K4oz9wkNiselMBZBcq5pVHWc2TRDsuvED%2BrwRYqh3DE%2Bea%2B2mBH1M2uUUVO5gyjJ&X-Amz-Signature=0ea83e7505f520b09e0af043706bc766b83b40552c45d551c1c0cfe38a00a798&X-Amz-SignedHeaders=host&x-id=GetObject)

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
