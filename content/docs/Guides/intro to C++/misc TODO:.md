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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRPZAAV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDfcWRpoUSb1mfVUSyUiiNV3zLTnP89ylMkcVkpLhogIgYSnBkHzp90FZE5WFKlVPJP0u%2BZIjQxmIn4hx1Z63Xe4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFRPaf7%2BCEgSKdxyDSrcA0TaQEb7BRiqacxLaJvjANsIm54NI6EeqrWLn%2BlvGQt%2BT9jOI7gd2BrwztNZKpn6zbjzAZSDi4WVjU%2BOFlq6wYNPJLm0zW5wN%2B6V6asAQlVC3%2B0318zjgKIErkCQ8cn2FlfVX%2Fb%2FnkvhpNjv1v5OhKTXQcg%2BK4Mvt3rmoT3hzdPOhmIEkEkNwnZH4OLKojxPxU46eIG9bgxhnuvazV0bXHuWREE34uHbehoecYDkiU4bJpBrMmdzHIP44tGG0OLVFFL2pLEvi6HpyIi113t5SXyGLv739UD7%2BNKrKVXM1dCwWUQT1rN6iy%2FTr9O5Hvg2vPphdevjl5XHy1DK0cPDv8bKb3rUIWxd1ajvgM5qE%2Fllh46%2FCRASUMKLfrlY0494LMF%2Bx0SczoLOnqi3vSV9C7%2FQw0edkhzQJCgmbNEa0vhyv6vRNV0phNBnbKxr%2FkGewdtyAfpE2AdRNNlC9bGfFNBfeASlGskCKVshsS4UpQhbnalAgm%2FVV32pdwizi2V0%2Fd%2BCxHMD6j%2FE3bxyoUEN96T%2BvWYUmWOHGCaGh8dNF4LahETu79O4k3tvzncd8GX3EX8CjjEn84Y7A8V5wQgSks2V7HnqeeK9pXAxm1L%2Fvg9xBBjaVjHupCObVPLrMOyW1MEGOqUBNuLNbF7bJxaZQOiLo7YZyK8qlsjz5cvMEZ%2FbItj4uWqF2W%2FcMuxKA5YEglIMbW%2F%2BaxD2UkA1ZKMs71Qsf0U1%2FRtDwzy%2BwFk2i0tZTEFEPcd9egYubGYd1Fsm6etnglYHqD9YVfvbehOyFx3ReFl3KC107cFp5mV0m85EMMd2SGfCf8hZaDcbYAkEz%2BpjFLgEL5J%2FW9S07V2bz8qYPENxp8hpZ8N%2F&X-Amz-Signature=b30becc0e3b2ee9b02d33e7d0556e67cfb3506386b819b4556467d306ccbb0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRPZAAV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDfcWRpoUSb1mfVUSyUiiNV3zLTnP89ylMkcVkpLhogIgYSnBkHzp90FZE5WFKlVPJP0u%2BZIjQxmIn4hx1Z63Xe4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFRPaf7%2BCEgSKdxyDSrcA0TaQEb7BRiqacxLaJvjANsIm54NI6EeqrWLn%2BlvGQt%2BT9jOI7gd2BrwztNZKpn6zbjzAZSDi4WVjU%2BOFlq6wYNPJLm0zW5wN%2B6V6asAQlVC3%2B0318zjgKIErkCQ8cn2FlfVX%2Fb%2FnkvhpNjv1v5OhKTXQcg%2BK4Mvt3rmoT3hzdPOhmIEkEkNwnZH4OLKojxPxU46eIG9bgxhnuvazV0bXHuWREE34uHbehoecYDkiU4bJpBrMmdzHIP44tGG0OLVFFL2pLEvi6HpyIi113t5SXyGLv739UD7%2BNKrKVXM1dCwWUQT1rN6iy%2FTr9O5Hvg2vPphdevjl5XHy1DK0cPDv8bKb3rUIWxd1ajvgM5qE%2Fllh46%2FCRASUMKLfrlY0494LMF%2Bx0SczoLOnqi3vSV9C7%2FQw0edkhzQJCgmbNEa0vhyv6vRNV0phNBnbKxr%2FkGewdtyAfpE2AdRNNlC9bGfFNBfeASlGskCKVshsS4UpQhbnalAgm%2FVV32pdwizi2V0%2Fd%2BCxHMD6j%2FE3bxyoUEN96T%2BvWYUmWOHGCaGh8dNF4LahETu79O4k3tvzncd8GX3EX8CjjEn84Y7A8V5wQgSks2V7HnqeeK9pXAxm1L%2Fvg9xBBjaVjHupCObVPLrMOyW1MEGOqUBNuLNbF7bJxaZQOiLo7YZyK8qlsjz5cvMEZ%2FbItj4uWqF2W%2FcMuxKA5YEglIMbW%2F%2BaxD2UkA1ZKMs71Qsf0U1%2FRtDwzy%2BwFk2i0tZTEFEPcd9egYubGYd1Fsm6etnglYHqD9YVfvbehOyFx3ReFl3KC107cFp5mV0m85EMMd2SGfCf8hZaDcbYAkEz%2BpjFLgEL5J%2FW9S07V2bz8qYPENxp8hpZ8N%2F&X-Amz-Signature=930d0560cd3760db030090dcc0662d3a0823ff4cfb562095e79101b44d68bec2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
