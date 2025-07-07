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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMD7VUJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG6GtwmhpiNHWe91V0fHjBoLh78jQMLSpMJBhlfRC8TzAiAe76qmwZuPrGQeK%2F2IQIKXMLk83VKeef%2FyN6LvDRba2ir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMXfZ6V6ZVxEeid6MtKtwDYEkzrKpGH5qHa9FdK7f1nnJwq9l%2BFZ03B9LwRJRYz6dCLnQcvuJ7sy9iDN7ljaiNoPRbqT6MXIDMsTTyI9g9ug6NbQ2baMoC0JRGcL8TrzyPXt%2Bk8V%2BJr1fwaqF83OW2%2F10x84MrU5KPTy1Q24GDMZUF%2BZGddbRcJnSqbFgHa5h2JSCRqb8WWavCM0qgciK4a%2BRgEpjVqZ6BJ53ahryxjiQt760avWLwcYJfQeo573E5NYxYKeWwIJCg9SoYEo0UXqKTgNlj3C%2BoBZEwoLXd0FHGK2m3gdM0IdPHMgsmnMzbpjT6%2BCdbQlBI%2BNAzTZ4I62v0QdvF57hiMKpG2SMt0pwRrhrLYkAusHr348gUDWFYKdbVThNy8CgZ3i3yyawt5m0mu%2FHu0Q99hQBXq2Ya%2FoZUBwhmzFb5mWFclpjuVcSL8gSQrQ9oSPIRgUWmoskyEOMPqSmpERTOlv%2FKWr8%2B5%2BlrDp5lhZjVxT9dRbicUVHOBO9YWieqJfg%2BpzuByWm%2Bjvl2224Nwcav43jBXZtt275KtRgCEzwo3M4bB8fTRgGsjojkrvRAMIwlIf1dwl63OCW9qPiNVbVduHGE2O81g9yRHvoRc7abYLmanqpBKqB9Az%2BNAZt5Csxo7cAw3%2FmswwY6pgHY%2BKvqaLcIfFEardY8TjvIfWQbkSbFoysGmQyOy8PZM2e9MddDFMB7ZZ29ecEMvE%2Bk4G0IixdIWlXYk23dJpz4I7J7%2Fi2FeuboS0tZB4ZyqvlyxEsZKra6iz2uCc5%2Fl%2B2dxIlpS5PQHqJUvLHPk1zDHORZovY3LArfZZQ1I1wwJBOyNad67566m%2FGnnRgM9zP6sMkGbM6aGCE8keqLMan1yIUEynNc&X-Amz-Signature=e8beca56e9c3bf10d086c02c8b328d556b621a5e076e38f5645b6afeffb1c2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMD7VUJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG6GtwmhpiNHWe91V0fHjBoLh78jQMLSpMJBhlfRC8TzAiAe76qmwZuPrGQeK%2F2IQIKXMLk83VKeef%2FyN6LvDRba2ir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMXfZ6V6ZVxEeid6MtKtwDYEkzrKpGH5qHa9FdK7f1nnJwq9l%2BFZ03B9LwRJRYz6dCLnQcvuJ7sy9iDN7ljaiNoPRbqT6MXIDMsTTyI9g9ug6NbQ2baMoC0JRGcL8TrzyPXt%2Bk8V%2BJr1fwaqF83OW2%2F10x84MrU5KPTy1Q24GDMZUF%2BZGddbRcJnSqbFgHa5h2JSCRqb8WWavCM0qgciK4a%2BRgEpjVqZ6BJ53ahryxjiQt760avWLwcYJfQeo573E5NYxYKeWwIJCg9SoYEo0UXqKTgNlj3C%2BoBZEwoLXd0FHGK2m3gdM0IdPHMgsmnMzbpjT6%2BCdbQlBI%2BNAzTZ4I62v0QdvF57hiMKpG2SMt0pwRrhrLYkAusHr348gUDWFYKdbVThNy8CgZ3i3yyawt5m0mu%2FHu0Q99hQBXq2Ya%2FoZUBwhmzFb5mWFclpjuVcSL8gSQrQ9oSPIRgUWmoskyEOMPqSmpERTOlv%2FKWr8%2B5%2BlrDp5lhZjVxT9dRbicUVHOBO9YWieqJfg%2BpzuByWm%2Bjvl2224Nwcav43jBXZtt275KtRgCEzwo3M4bB8fTRgGsjojkrvRAMIwlIf1dwl63OCW9qPiNVbVduHGE2O81g9yRHvoRc7abYLmanqpBKqB9Az%2BNAZt5Csxo7cAw3%2FmswwY6pgHY%2BKvqaLcIfFEardY8TjvIfWQbkSbFoysGmQyOy8PZM2e9MddDFMB7ZZ29ecEMvE%2Bk4G0IixdIWlXYk23dJpz4I7J7%2Fi2FeuboS0tZB4ZyqvlyxEsZKra6iz2uCc5%2Fl%2B2dxIlpS5PQHqJUvLHPk1zDHORZovY3LArfZZQ1I1wwJBOyNad67566m%2FGnnRgM9zP6sMkGbM6aGCE8keqLMan1yIUEynNc&X-Amz-Signature=0222354a993fba3c499fab622aa2d28136bdd5a2b9d501ccd47ba61cf95c53ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
