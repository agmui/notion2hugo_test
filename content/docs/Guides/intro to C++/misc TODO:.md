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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HPC5RL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD80kXgaB7M%2F%2F%2BDLQOt2nH0NQGrfP3ZiQc98igFe24xrQIhAPtca0GVfDoAyPGgiqGUqOtccLio69eTo%2Bay1gRohgmQKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMOYrcPVIAqcZb%2BgEq3AOBa0UyYZya3HRmitmIy%2BItOZKx9rCdkRfK7rJMjH%2B8OWxKNYkgSc4Tq%2FQu9PDW98wiPpNh%2F3ReJF9wmCkFGc7XzheEENYA0EDwkEGViYUvkPRloDOBOUYks9ukbjTgHQ8WrTxUBE9LZ8qjKKcHjipe96B4WgZFveSYMiKgpSlzsisU5GeC0IEfzdFgMFuJEviaU5GguCYBDH0omcrxs7uKgGCjnF3cdWCdY2aXCH5LaDWmwtrMhA5NY6FW53IJPZVlS5BapMZsD2mep4dQzhKx8Erw%2Br94cz%2Ffq3t7Zt59lU9Rltb3yUSVbyDTrxqpw3KSRc%2F2VsYMI9OgKCqjJ1GHGdZBGuvo4i1nsa9O6H3a7d3qLorsaV2R4AtVd9SdoIgxf931GzqWGoyhtAr%2F9HzRfXTFrNQ%2FMItdwmLtLNG87Ii3f83lFmvInDWhR6IjMJRR4e9s67ABhP4WrPSOgrBj8GDR886bbMn17qArkKmEYCPOU6rXs28EC1gVYQZaZXPfb%2FvFHA%2BJKB0bIo7oyo%2Fo19hbSsCoZxd%2BKnJDz9pjAcLgtC3sSy3mxouXj7IkfY6IOfxHp%2BD70dHQ2YV9TlSkNPTYXElt0K4Qoa%2FsRB7l2fgR4tDa4T5GIlF%2BRDDd8OW%2FBjqkAWIEzFH%2BoMdlsHfJzW9TeQCbAgRBgnpeEIsrlMlzvBGOT7ChLxswN8qDXGcket53NeksDLy0Y80QqSEoiPoA3pmbcexGkPS5ZxHoA4ubY4CHdYkWxG%2BWPGHrxQUgnUJX8EO90NLtF2N%2B4NrpSOthVvBDT%2B5LI7WvF12qxIMysiSWN2UJ2bqE2i%2F7dgWu97VUkSD7y8QdNQiVCBjouBXtp3WUbfe0&X-Amz-Signature=7593b1d6f4127ed655a6dddfde9a94b2e2c2152418addbd34cbc83dd6ec93b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HPC5RL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD80kXgaB7M%2F%2F%2BDLQOt2nH0NQGrfP3ZiQc98igFe24xrQIhAPtca0GVfDoAyPGgiqGUqOtccLio69eTo%2Bay1gRohgmQKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMOYrcPVIAqcZb%2BgEq3AOBa0UyYZya3HRmitmIy%2BItOZKx9rCdkRfK7rJMjH%2B8OWxKNYkgSc4Tq%2FQu9PDW98wiPpNh%2F3ReJF9wmCkFGc7XzheEENYA0EDwkEGViYUvkPRloDOBOUYks9ukbjTgHQ8WrTxUBE9LZ8qjKKcHjipe96B4WgZFveSYMiKgpSlzsisU5GeC0IEfzdFgMFuJEviaU5GguCYBDH0omcrxs7uKgGCjnF3cdWCdY2aXCH5LaDWmwtrMhA5NY6FW53IJPZVlS5BapMZsD2mep4dQzhKx8Erw%2Br94cz%2Ffq3t7Zt59lU9Rltb3yUSVbyDTrxqpw3KSRc%2F2VsYMI9OgKCqjJ1GHGdZBGuvo4i1nsa9O6H3a7d3qLorsaV2R4AtVd9SdoIgxf931GzqWGoyhtAr%2F9HzRfXTFrNQ%2FMItdwmLtLNG87Ii3f83lFmvInDWhR6IjMJRR4e9s67ABhP4WrPSOgrBj8GDR886bbMn17qArkKmEYCPOU6rXs28EC1gVYQZaZXPfb%2FvFHA%2BJKB0bIo7oyo%2Fo19hbSsCoZxd%2BKnJDz9pjAcLgtC3sSy3mxouXj7IkfY6IOfxHp%2BD70dHQ2YV9TlSkNPTYXElt0K4Qoa%2FsRB7l2fgR4tDa4T5GIlF%2BRDDd8OW%2FBjqkAWIEzFH%2BoMdlsHfJzW9TeQCbAgRBgnpeEIsrlMlzvBGOT7ChLxswN8qDXGcket53NeksDLy0Y80QqSEoiPoA3pmbcexGkPS5ZxHoA4ubY4CHdYkWxG%2BWPGHrxQUgnUJX8EO90NLtF2N%2B4NrpSOthVvBDT%2B5LI7WvF12qxIMysiSWN2UJ2bqE2i%2F7dgWu97VUkSD7y8QdNQiVCBjouBXtp3WUbfe0&X-Amz-Signature=2981c17801b5d651ff468f6febfd47be9e4745b359ea6ce0ab2f2e24db2fecbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
