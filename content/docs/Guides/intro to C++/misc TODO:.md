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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKKO5C5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGhlX5L3uq%2BPgBoPeQnnbc6OWDdy6nDHQQ0Ba75w%2B1GrAiEAzQ5pP%2BG0hSZWLI94fMZIuBKyu3uGY28K7VrLOopDjjQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWH1S8MuyY0V6Q3tyrcA17lkihBUnkSXyAj1p1hTSgFBfIyHz8e%2BVWH%2Be3K5Wuz8Itz2E38y0Of6rKeT0KgoeohnzIIURRzXpdEyEuj4UauKPtiYYq1LNq0Tmx4LYjk0OJ07lcv5mn85gUd9k5pJ6u4aq7srcoewtb8oes5ch28qhKze87XCXoST8YfI4cMtwXti1D26FVTOi0c10%2F2s4FBJ2jvQDPzT99SrGaCX1HoITP5tYTt1Hyi3wS5U6FRcOOrmMVdbIhQubeJf781NiNv4Wiuy2n2kz34tHG3cwIZHkjSHYqwpP6jrMSyxY7L1AbaTZ%2FtJzsmLIg0zRmk%2FaCHi28lRhp83aQykNaKVCGPcA5cGkRP%2FRN8CUBEzCugarOJpibrQNzseTHav%2B912hoGfmseBZuf1nAH72sCDC%2BpPSgRvp3yrN27OEdIbW7K%2BWOxniPezxfHQ3zqAhQuaZTdoAe13I6EYoC%2F0xDqZKNH0yrBtfx8WwUf7EWC4OsMenfuql0v%2FcijjFOdaTrtCAN7O0zaJE%2FoTmkuUTn%2F%2F490E4IzCtpQVG0fu%2F0t16Ptr%2FP9mYW%2B1tcrmf2HqNOxy1Px1Fmsd7Z8MUhd1ctuCjHXVUxcnimv4ubNxxzJ3SW3e0JbF8D4eGej3vnHMMLTh8EGOqUBjJ9p83WTni0AIHlcBHBi%2B2Lfrba3ObKKIe%2FMJcIKLj%2Bi9epcqNRksizI4oRcy0VdOoLACz7dCUX3F5fMBA0jVtRdagTDnTdriNvmC%2FnbFgN2cmktUDXVuXlJijTDzgkJz2dz7hoBvmMYnPY3AlJJPTlNZAShPXL2sFhuG7ki8imiOSxyaOMhrcJqkX0RuXM9oCyZWk9YgR60mTdY5YtcLKGmE9hx&X-Amz-Signature=1f15e41f00eec0475b8db282443c280c704192113a85e74090a422acad046ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKKO5C5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGhlX5L3uq%2BPgBoPeQnnbc6OWDdy6nDHQQ0Ba75w%2B1GrAiEAzQ5pP%2BG0hSZWLI94fMZIuBKyu3uGY28K7VrLOopDjjQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWH1S8MuyY0V6Q3tyrcA17lkihBUnkSXyAj1p1hTSgFBfIyHz8e%2BVWH%2Be3K5Wuz8Itz2E38y0Of6rKeT0KgoeohnzIIURRzXpdEyEuj4UauKPtiYYq1LNq0Tmx4LYjk0OJ07lcv5mn85gUd9k5pJ6u4aq7srcoewtb8oes5ch28qhKze87XCXoST8YfI4cMtwXti1D26FVTOi0c10%2F2s4FBJ2jvQDPzT99SrGaCX1HoITP5tYTt1Hyi3wS5U6FRcOOrmMVdbIhQubeJf781NiNv4Wiuy2n2kz34tHG3cwIZHkjSHYqwpP6jrMSyxY7L1AbaTZ%2FtJzsmLIg0zRmk%2FaCHi28lRhp83aQykNaKVCGPcA5cGkRP%2FRN8CUBEzCugarOJpibrQNzseTHav%2B912hoGfmseBZuf1nAH72sCDC%2BpPSgRvp3yrN27OEdIbW7K%2BWOxniPezxfHQ3zqAhQuaZTdoAe13I6EYoC%2F0xDqZKNH0yrBtfx8WwUf7EWC4OsMenfuql0v%2FcijjFOdaTrtCAN7O0zaJE%2FoTmkuUTn%2F%2F490E4IzCtpQVG0fu%2F0t16Ptr%2FP9mYW%2B1tcrmf2HqNOxy1Px1Fmsd7Z8MUhd1ctuCjHXVUxcnimv4ubNxxzJ3SW3e0JbF8D4eGej3vnHMMLTh8EGOqUBjJ9p83WTni0AIHlcBHBi%2B2Lfrba3ObKKIe%2FMJcIKLj%2Bi9epcqNRksizI4oRcy0VdOoLACz7dCUX3F5fMBA0jVtRdagTDnTdriNvmC%2FnbFgN2cmktUDXVuXlJijTDzgkJz2dz7hoBvmMYnPY3AlJJPTlNZAShPXL2sFhuG7ki8imiOSxyaOMhrcJqkX0RuXM9oCyZWk9YgR60mTdY5YtcLKGmE9hx&X-Amz-Signature=1c5dce652e770194cef4d9e47a6e094c5dc5a1f435a476e8ed203c2810df7028&X-Amz-SignedHeaders=host&x-id=GetObject)

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
