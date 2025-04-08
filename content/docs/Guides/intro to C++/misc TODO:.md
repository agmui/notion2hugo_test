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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCV6ANW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2F2r1T9P4QfVTzlpchKG%2FmY5ZYhQWLmJINUmxH7DDBgIgBJ0NJFnP6rSa6vmnsktFiccgnn5KH8w6MUeFc3xvpfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPbNYrJsdJ0fdTENIyrcA%2FvH%2BQj3eXpTMwDv8xMu7F25ZOsXkEwUsVj7ZV2u2drLREcNgy1xq3t6tOk%2F%2BxZ1asPH2%2BllTKHlinjjMYQlcS7JpmNm5t7Zz0FnY3dth%2Bq%2BIQbhN79JP%2FY%2BX6oluiQPgnvXmWOu8KnFNmRFwFBmHSGEoUZgwPJbhQ6ma%2FVQ0eNI%2F3M8IzYCWOBXi9bU3pyc3sJD2XVRdHF3wyZov3G2Q5Y%2BESazGgYUKzFAcIBdAnZ9L%2BRCx8NXMxPC%2F3atHqMuJrqmN6hZoI9mxc7XkkDw0lUAv3I2LRF2pGaUVqVFk2Hlkawvu6OR5ks4iQipFc8OHXZiuTId%2B8j9mKPgaJWH1PST4WLkovRJ3JKvaleNMlGbiEsIL5uf8y0BCuPSv9zjVPYHWHuIJSO25Pf5sqHKRWe%2FjxHT7irDf2H%2BYISB27mq1bNAg8L3ScgIQTnchwXvZs2LZ1JAWzMoOihjWndRdf1F7PFruujUByxpGXHK0i7NBO7LFHkxghI4bhGY%2FeZAMO%2Bg%2B20OB7VZBExjUkI02CwKR9GVQT9qT0LGoYYx2qJLdD9bVToJQxletP4U%2FyRFL%2B5oNJ%2FeI0ueynMwiQAo8rKfs1NYBQt5ig5B7keIGGdXjb6rIknfUI5l9w7WMI6i1b8GOqUB9IIJBOFe1klocCZlFSifAOHVC%2Bh%2FQUAFpn9maa5IUL4VIaITUg8h8sehwJtLAVpr9KiYUhHKaZH%2BdpyUT9RdVtUSzdJvZoyHipleMyzLBIqf%2Biuw24YIVuv2mRu2dMO9xflziGd4vaCG7tqcRxJTPvW82u%2BI%2F8PzCRyJtFN4leTTZgveb%2FhH9KMrIsqiQgEO1uai0%2FtOamqJUDV7FDRcPPf8rg3t&X-Amz-Signature=9a8e908b1375a6c4d5bd3858bedbf23ac9a84dc4a0609fe955c2bfbbe5bc72dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCV6ANW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2F2r1T9P4QfVTzlpchKG%2FmY5ZYhQWLmJINUmxH7DDBgIgBJ0NJFnP6rSa6vmnsktFiccgnn5KH8w6MUeFc3xvpfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPbNYrJsdJ0fdTENIyrcA%2FvH%2BQj3eXpTMwDv8xMu7F25ZOsXkEwUsVj7ZV2u2drLREcNgy1xq3t6tOk%2F%2BxZ1asPH2%2BllTKHlinjjMYQlcS7JpmNm5t7Zz0FnY3dth%2Bq%2BIQbhN79JP%2FY%2BX6oluiQPgnvXmWOu8KnFNmRFwFBmHSGEoUZgwPJbhQ6ma%2FVQ0eNI%2F3M8IzYCWOBXi9bU3pyc3sJD2XVRdHF3wyZov3G2Q5Y%2BESazGgYUKzFAcIBdAnZ9L%2BRCx8NXMxPC%2F3atHqMuJrqmN6hZoI9mxc7XkkDw0lUAv3I2LRF2pGaUVqVFk2Hlkawvu6OR5ks4iQipFc8OHXZiuTId%2B8j9mKPgaJWH1PST4WLkovRJ3JKvaleNMlGbiEsIL5uf8y0BCuPSv9zjVPYHWHuIJSO25Pf5sqHKRWe%2FjxHT7irDf2H%2BYISB27mq1bNAg8L3ScgIQTnchwXvZs2LZ1JAWzMoOihjWndRdf1F7PFruujUByxpGXHK0i7NBO7LFHkxghI4bhGY%2FeZAMO%2Bg%2B20OB7VZBExjUkI02CwKR9GVQT9qT0LGoYYx2qJLdD9bVToJQxletP4U%2FyRFL%2B5oNJ%2FeI0ueynMwiQAo8rKfs1NYBQt5ig5B7keIGGdXjb6rIknfUI5l9w7WMI6i1b8GOqUB9IIJBOFe1klocCZlFSifAOHVC%2Bh%2FQUAFpn9maa5IUL4VIaITUg8h8sehwJtLAVpr9KiYUhHKaZH%2BdpyUT9RdVtUSzdJvZoyHipleMyzLBIqf%2Biuw24YIVuv2mRu2dMO9xflziGd4vaCG7tqcRxJTPvW82u%2BI%2F8PzCRyJtFN4leTTZgveb%2FhH9KMrIsqiQgEO1uai0%2FtOamqJUDV7FDRcPPf8rg3t&X-Amz-Signature=bb82ebb128cd28e09ea0152084cd8c9c6491557e7cb7a195f8e3c1e45595b985&X-Amz-SignedHeaders=host&x-id=GetObject)

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
