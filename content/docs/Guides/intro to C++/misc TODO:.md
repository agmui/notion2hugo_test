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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXYJRJE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvL1SKQnBwcXz2W%2BJyiAil3xUmmNjairINtB%2B1zvTONQIhAIhatf8kSSU%2FdaK8fpVwPNSbW7kBKurQnrQrP8ZoZuVcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN123cOvyTpolYNgAq3APh9ggDZxyMCWgJovzdVOPIAfnlk%2FzHoed%2FLwRtRSLL1FIuFAR1IyeREsgJQCngT%2BJFJaSq49z5P1A4knpw7SnXvQ3X%2F4WUI5WWB36s%2BOJfJUZTl43wF%2Bh8j%2BnKviVkaXK6sXc1marb7nfmtvS9VTzKAeoIsv72WVd0iYEYzycQWcq3xWp7cqjLaexrSkGlOk9cmQYLCP%2Fpv%2FVuIkeHJN0limPwTBDELVmwTiTZW7yXaBlkddIKLHFSI986UZvx%2BlPD%2FV741MimfMkL6QzL0SRaUvUSpA7LDh88bDbQgGncdsY7GdxbvhNndnAXOpHcH1jrHu9JPp59IhcU47A10d%2FJNpG1edNmPbJMHM1PYrwCNwJewq85yTAsyukFk8mnNc%2FOuKiKk9MadpLVD81Dm0F8eXSTtnKhqoQv7i76pa%2FFjdEPnDYs%2FERlZM3PGYDQL42rf3mJpYzjhPeJx3aXZClPtce6aNwLs%2BXsErKgLJ2HLH13j0Ecfcbo79ePeMZ4jwnBvouWO1sU2n6vACtGFXYMEo4sz6eGMOPOIFvH8vB1xXoHb21GfMjsvIcGHnplJJXuh4lBCvCydJ2msrsv2pouqR%2Bq58JLJXuMKbEhtsajcSbZSmVwV1sU4I3jMDCb%2F52%2BBjqkAXSlxrJ6rrk%2Fco8%2Flb2uQbhNntbmdk3b5WMqihkJnqY5aGux6Jd2TyD9zknB8iUYkvFWQUGlWUJGBBWpqHn8Jfil%2BMpCbduk59uCbC0HIjZ7PCS1a67OPNMBRE4sbJYKMip2199JYFvEbWosu9vsYGto8muw0%2FQ7LPOq0Y15%2BFHr%2B9EKnctihRWZySlaLVC4PxSujsjCbjEjK41TuDXtJl56KSAU&X-Amz-Signature=f7502835fc0780a677f1d50f18aafd420247b44cd9d3f7a8ab0e6a5b29468666&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXYJRJE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvL1SKQnBwcXz2W%2BJyiAil3xUmmNjairINtB%2B1zvTONQIhAIhatf8kSSU%2FdaK8fpVwPNSbW7kBKurQnrQrP8ZoZuVcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN123cOvyTpolYNgAq3APh9ggDZxyMCWgJovzdVOPIAfnlk%2FzHoed%2FLwRtRSLL1FIuFAR1IyeREsgJQCngT%2BJFJaSq49z5P1A4knpw7SnXvQ3X%2F4WUI5WWB36s%2BOJfJUZTl43wF%2Bh8j%2BnKviVkaXK6sXc1marb7nfmtvS9VTzKAeoIsv72WVd0iYEYzycQWcq3xWp7cqjLaexrSkGlOk9cmQYLCP%2Fpv%2FVuIkeHJN0limPwTBDELVmwTiTZW7yXaBlkddIKLHFSI986UZvx%2BlPD%2FV741MimfMkL6QzL0SRaUvUSpA7LDh88bDbQgGncdsY7GdxbvhNndnAXOpHcH1jrHu9JPp59IhcU47A10d%2FJNpG1edNmPbJMHM1PYrwCNwJewq85yTAsyukFk8mnNc%2FOuKiKk9MadpLVD81Dm0F8eXSTtnKhqoQv7i76pa%2FFjdEPnDYs%2FERlZM3PGYDQL42rf3mJpYzjhPeJx3aXZClPtce6aNwLs%2BXsErKgLJ2HLH13j0Ecfcbo79ePeMZ4jwnBvouWO1sU2n6vACtGFXYMEo4sz6eGMOPOIFvH8vB1xXoHb21GfMjsvIcGHnplJJXuh4lBCvCydJ2msrsv2pouqR%2Bq58JLJXuMKbEhtsajcSbZSmVwV1sU4I3jMDCb%2F52%2BBjqkAXSlxrJ6rrk%2Fco8%2Flb2uQbhNntbmdk3b5WMqihkJnqY5aGux6Jd2TyD9zknB8iUYkvFWQUGlWUJGBBWpqHn8Jfil%2BMpCbduk59uCbC0HIjZ7PCS1a67OPNMBRE4sbJYKMip2199JYFvEbWosu9vsYGto8muw0%2FQ7LPOq0Y15%2BFHr%2B9EKnctihRWZySlaLVC4PxSujsjCbjEjK41TuDXtJl56KSAU&X-Amz-Signature=f256e0f5664aace75c4b7c4d9243e8a4489405dd43eaead4fff8fc509679bdda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
