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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOG7BMF3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDccvOYF0hSksaT8JddoPKTAi3HVSII2UEugnki8%2F%2FTpAiAEM1bgZMuktI33%2Fy0RtR%2Fj5dbedKIOKxg5LMggeFWEXCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgMaNnvZjXN1cIT%2BKtwDuee%2FE7XVi4Gt3uT838WIn8d%2BXdLdQSRuVCniPBQqdhXUNT12nsmymh2cR0KnpoLD1H%2BqE1mM62qumXqA9rIwqITqxXD%2BUM79eZF7kNDHizDCc4zPzcLUQd4R0ZE%2FhqZlkmWOvaRSKoOYkHVfgF0USeEL2uyHFx2qxbGRdRv1I48%2BxuIfqRVag4a6luf2bxV2XSmOGl8aJMi1Rm3wXc1%2FZ%2Fk%2FneGX8oe0i0sesf12X%2BT1fvJ0Rn3hxiFgU%2FYKn76GQVTGFFslVW7wwUbs2CKXnjJhd7XYS4QsgTS69Tu021jhYsmbflBywY%2FesBZjhsXJHO%2B%2BgUAksOPfa8zwnnIVSD2ZzJbYQaAwN6GnySWbgKx0w1W65ssKrk4V05QoAdtESqO25Tt3GkIO0ho%2FEpxbgm1EDgfnUMZIuIFVZ%2F8NE3zmIjpGt82ERdibm0jvqZK%2Fq8CwcCUftd6k2qm4pXYtrrw0xytaUtAKbcZYgs%2BAHsccbQGgMPpjk00K9zpY222BiUVAq5O4K9mWgTKFj1Nl8%2FcwhjdXuWUcrdyZaUv9fa3SeuFaeYxZ0fMl3Smk1BKPSPXKZqe0WiETWhMdyWSjwyCEt%2BPSYRd2kWkyvGmnX8Y0eSrF3xbVxRytdY0wsZbavwY6pgHeDb6bIfyGZX0Ughh6DDf7faj3k0sFtrNpspfsC6DBDJkkNuywOXXvEdpsmKDuqBiN498F0qfi258PpNyrOAHxm3wS5khUEmeyJUazz6%2B0OHO%2FVOYOVaBaBSPctdyEBymowAKcKA7F9BeqcUGRCxPrnx46qC66lf%2FV49Lr2wNkuuxOm3%2FPAzeaOn9etGHeKCoR1wbThhHocFO7tMBBTJm9rw5dHsST&X-Amz-Signature=5a8d55d79825b136438bddefb81f418d4adefb19931a98869501934d04e28203&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOG7BMF3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDccvOYF0hSksaT8JddoPKTAi3HVSII2UEugnki8%2F%2FTpAiAEM1bgZMuktI33%2Fy0RtR%2Fj5dbedKIOKxg5LMggeFWEXCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgMaNnvZjXN1cIT%2BKtwDuee%2FE7XVi4Gt3uT838WIn8d%2BXdLdQSRuVCniPBQqdhXUNT12nsmymh2cR0KnpoLD1H%2BqE1mM62qumXqA9rIwqITqxXD%2BUM79eZF7kNDHizDCc4zPzcLUQd4R0ZE%2FhqZlkmWOvaRSKoOYkHVfgF0USeEL2uyHFx2qxbGRdRv1I48%2BxuIfqRVag4a6luf2bxV2XSmOGl8aJMi1Rm3wXc1%2FZ%2Fk%2FneGX8oe0i0sesf12X%2BT1fvJ0Rn3hxiFgU%2FYKn76GQVTGFFslVW7wwUbs2CKXnjJhd7XYS4QsgTS69Tu021jhYsmbflBywY%2FesBZjhsXJHO%2B%2BgUAksOPfa8zwnnIVSD2ZzJbYQaAwN6GnySWbgKx0w1W65ssKrk4V05QoAdtESqO25Tt3GkIO0ho%2FEpxbgm1EDgfnUMZIuIFVZ%2F8NE3zmIjpGt82ERdibm0jvqZK%2Fq8CwcCUftd6k2qm4pXYtrrw0xytaUtAKbcZYgs%2BAHsccbQGgMPpjk00K9zpY222BiUVAq5O4K9mWgTKFj1Nl8%2FcwhjdXuWUcrdyZaUv9fa3SeuFaeYxZ0fMl3Smk1BKPSPXKZqe0WiETWhMdyWSjwyCEt%2BPSYRd2kWkyvGmnX8Y0eSrF3xbVxRytdY0wsZbavwY6pgHeDb6bIfyGZX0Ughh6DDf7faj3k0sFtrNpspfsC6DBDJkkNuywOXXvEdpsmKDuqBiN498F0qfi258PpNyrOAHxm3wS5khUEmeyJUazz6%2B0OHO%2FVOYOVaBaBSPctdyEBymowAKcKA7F9BeqcUGRCxPrnx46qC66lf%2FV49Lr2wNkuuxOm3%2FPAzeaOn9etGHeKCoR1wbThhHocFO7tMBBTJm9rw5dHsST&X-Amz-Signature=6c5a937c4b26412410b32475155f8e08a3c3f4e0f6a8b08651d52fa405eab0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
