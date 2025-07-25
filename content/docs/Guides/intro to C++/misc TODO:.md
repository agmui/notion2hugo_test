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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP6IREFH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDyga8%2BZ8FeoLgxyvtSeiMa5Sa0RWYjCrRwFUsFCQYX8QIgTwmOi4f2FjfEmYAOy%2BA9wVA8NFGPx7g%2BmYT9OakP8RAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAPWF99eC1LpZpwy%2FircA1SJliXsi1hH8%2BzizW%2BHx3VNn4KdZTFLftfQebw5Cw%2Fn6ExWajN6YDxLtNt5bDTnjYM9j8C3dJNFKbYLhPzQQDoT%2FCFYqA6TVjKr8wlgHt6USuqvfHFDroSvr8z%2FOQU9JDPdaVfh%2Bf%2BGAVDYr7gGOhTKlhAQzX6FFnBrRXyje49X%2F47aQcGdwAjMRqM1HxlGJ6qUW4UzUAUPVzomINMWL6I1dyyA7SrylSE9OASYWyzVwNzKQDVmHsH93uhyj5QaSA9zVjkWvSuIwsE1fvW6OtmqV2xDnVCaSyVENLyiJ4ukzrlciS7KJ0hVTCcC6NVg9qOIRdO8QYyqEmsHNDztESU8wKj1e77%2F7JAXe9StQ6d3hl0b5V1%2FwF8Yc9mrEbmk5rjwSSw8kiClrKQD8Oi6AF8DByAgwoOy96GXrk1MfIBCLzNz1Jmy2Ppzyxp2XbFxCHsjOA%2B%2B0dE3I5wo17vP59JB84mwI8G3Zm4iw0XGbJd%2BvCCIpusha4QAHWwO2Jhisbmdse6LdG3XeacJMoP6zYe2bLxp7eMcpfYPlCKKPIJ9Hhu7Y6L4k8v%2B2MiblwiZaFdIzX3dY1LikEdjkX4tKOsNoZJVgwNuTgVVRUjehxYX1dHr5qCt7airb%2BdqMJOrj8QGOqUBCnVYnLL9HQbUqUV%2FoeQ0auaQEPZ3WjGAF2MzTzrG%2FlfvTByIMmo4XJL7ZSQrHMw9Mt%2F7hSrqpem2ThSnjibgc1tkaflla2GiSfo2k76JLyX3jHNrTtrXn2awDXnBPbHFLGcQMY8dla0LC%2BCkASoTbV%2FY30iJTLrNvl7GR1NyPysgYx6N1rhNV9RM59dH74DIgdNW%2F4aRJLopgJDpvWtYs6Ey3VxV&X-Amz-Signature=d5cb3a48936f1c1a46ff427e8ca5507c245f462e023ab8f76ee9f19c11153dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP6IREFH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDyga8%2BZ8FeoLgxyvtSeiMa5Sa0RWYjCrRwFUsFCQYX8QIgTwmOi4f2FjfEmYAOy%2BA9wVA8NFGPx7g%2BmYT9OakP8RAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAPWF99eC1LpZpwy%2FircA1SJliXsi1hH8%2BzizW%2BHx3VNn4KdZTFLftfQebw5Cw%2Fn6ExWajN6YDxLtNt5bDTnjYM9j8C3dJNFKbYLhPzQQDoT%2FCFYqA6TVjKr8wlgHt6USuqvfHFDroSvr8z%2FOQU9JDPdaVfh%2Bf%2BGAVDYr7gGOhTKlhAQzX6FFnBrRXyje49X%2F47aQcGdwAjMRqM1HxlGJ6qUW4UzUAUPVzomINMWL6I1dyyA7SrylSE9OASYWyzVwNzKQDVmHsH93uhyj5QaSA9zVjkWvSuIwsE1fvW6OtmqV2xDnVCaSyVENLyiJ4ukzrlciS7KJ0hVTCcC6NVg9qOIRdO8QYyqEmsHNDztESU8wKj1e77%2F7JAXe9StQ6d3hl0b5V1%2FwF8Yc9mrEbmk5rjwSSw8kiClrKQD8Oi6AF8DByAgwoOy96GXrk1MfIBCLzNz1Jmy2Ppzyxp2XbFxCHsjOA%2B%2B0dE3I5wo17vP59JB84mwI8G3Zm4iw0XGbJd%2BvCCIpusha4QAHWwO2Jhisbmdse6LdG3XeacJMoP6zYe2bLxp7eMcpfYPlCKKPIJ9Hhu7Y6L4k8v%2B2MiblwiZaFdIzX3dY1LikEdjkX4tKOsNoZJVgwNuTgVVRUjehxYX1dHr5qCt7airb%2BdqMJOrj8QGOqUBCnVYnLL9HQbUqUV%2FoeQ0auaQEPZ3WjGAF2MzTzrG%2FlfvTByIMmo4XJL7ZSQrHMw9Mt%2F7hSrqpem2ThSnjibgc1tkaflla2GiSfo2k76JLyX3jHNrTtrXn2awDXnBPbHFLGcQMY8dla0LC%2BCkASoTbV%2FY30iJTLrNvl7GR1NyPysgYx6N1rhNV9RM59dH74DIgdNW%2F4aRJLopgJDpvWtYs6Ey3VxV&X-Amz-Signature=117aa450dc479f7e3a291aedb91a1b29e23590e75348eb432727b30e9d4fb9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
