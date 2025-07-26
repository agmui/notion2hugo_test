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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5LKSNZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzAwCxByblV%2FIpezi%2B%2FNBszEolFTDgs%2BWlO%2BM5ZTtXNwIgWOgefxiUOlWaF0F8CbYUVouuyAiovEEYmEkVNTfrTboq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDD044CEOSfMzblNtMCrcA51H1evJ2wUD%2FzmWOOYM2b22sYWPeNIUwoxcBCvq%2F2IUr3eCZu6Rfi7UuVK%2Fv1bu5wKhZ9D5vyrsupxQkQSTKKcCnag8B%2F7cknMu8XC4s9gqK2h2YpsOPUTLI%2B1GUQWZhhXnO0oVU70KfvufP9AOxU2GLAHMLtin5Mtwu41DPbVjK%2BwsGGki%2Bpl2XBLxmRws3uXNNjVlNzr3bgoZt2BvH3Rn5tWdDKcme5Beka9gljAKxkGrm3WJGqx%2Fa8tRpkAFbKBw%2FT%2BGHaiOy2yPTOWoNFKr0lnw33Jv3C2jA6tK3lyNytKtUFJDtkVsu4Cxx6P7Il1DOLdH03w%2BYPMB8rJh16AgHkff0OWkNQy2AOdmKbI0yDNTN8V%2BAdT3%2BWRj39tewWRhTCdhoySqjvKrAhg%2B4jCAQL5Es8KfhdLtYyaCCeYKPH%2BOE7pUYDmHTyEDAjcFgEkEOGix%2BK0nkV%2BQ2IpIKb1wr%2FD7L23U5yFulRTHYjPL5OBtNAB2m%2F35elnmPGU54KqT6ktpfrk7zEyU15KJqu%2FN75qkwfG%2FbxSK0BEP8DYOpFTNjSBuRvhXOf3FwUKRbWxcfYKYvW74lF9kJZAHAjfdMlFzyXvAy1VS%2B4hKl5YZkVVREtvQcD%2BqK1cPMJSrksQGOqUBs1Z5VFFqgy4ZTteyJ9o%2F%2FoKHywbOC7ucKHXu2wjpgYQHp0DRt6S9kPcIEA9p6cd%2FSDaENfNUhUeiJf9SC8W45lmfh3D6CAlzy8f0iCs5t3q%2FUnZ7O%2Fgmveoei3t9v8C4HMmTt4pSCqgL%2BKVE6dvNMkX2wCLtcPcUCVZ%2BI4Zn5W3i%2Bwkfdh9EGSexXd793ajQtV7z4EkWsEPOupm%2FObQlDY0wABB9&X-Amz-Signature=37aba2ed53b039be27f7b771be7a2c37f52701f8fd94ef04a6cf649e8173878a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5LKSNZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzAwCxByblV%2FIpezi%2B%2FNBszEolFTDgs%2BWlO%2BM5ZTtXNwIgWOgefxiUOlWaF0F8CbYUVouuyAiovEEYmEkVNTfrTboq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDD044CEOSfMzblNtMCrcA51H1evJ2wUD%2FzmWOOYM2b22sYWPeNIUwoxcBCvq%2F2IUr3eCZu6Rfi7UuVK%2Fv1bu5wKhZ9D5vyrsupxQkQSTKKcCnag8B%2F7cknMu8XC4s9gqK2h2YpsOPUTLI%2B1GUQWZhhXnO0oVU70KfvufP9AOxU2GLAHMLtin5Mtwu41DPbVjK%2BwsGGki%2Bpl2XBLxmRws3uXNNjVlNzr3bgoZt2BvH3Rn5tWdDKcme5Beka9gljAKxkGrm3WJGqx%2Fa8tRpkAFbKBw%2FT%2BGHaiOy2yPTOWoNFKr0lnw33Jv3C2jA6tK3lyNytKtUFJDtkVsu4Cxx6P7Il1DOLdH03w%2BYPMB8rJh16AgHkff0OWkNQy2AOdmKbI0yDNTN8V%2BAdT3%2BWRj39tewWRhTCdhoySqjvKrAhg%2B4jCAQL5Es8KfhdLtYyaCCeYKPH%2BOE7pUYDmHTyEDAjcFgEkEOGix%2BK0nkV%2BQ2IpIKb1wr%2FD7L23U5yFulRTHYjPL5OBtNAB2m%2F35elnmPGU54KqT6ktpfrk7zEyU15KJqu%2FN75qkwfG%2FbxSK0BEP8DYOpFTNjSBuRvhXOf3FwUKRbWxcfYKYvW74lF9kJZAHAjfdMlFzyXvAy1VS%2B4hKl5YZkVVREtvQcD%2BqK1cPMJSrksQGOqUBs1Z5VFFqgy4ZTteyJ9o%2F%2FoKHywbOC7ucKHXu2wjpgYQHp0DRt6S9kPcIEA9p6cd%2FSDaENfNUhUeiJf9SC8W45lmfh3D6CAlzy8f0iCs5t3q%2FUnZ7O%2Fgmveoei3t9v8C4HMmTt4pSCqgL%2BKVE6dvNMkX2wCLtcPcUCVZ%2BI4Zn5W3i%2Bwkfdh9EGSexXd793ajQtV7z4EkWsEPOupm%2FObQlDY0wABB9&X-Amz-Signature=c8da045bae36901653451469775710a447ccc8680c16fef638b93b50ecf904dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
