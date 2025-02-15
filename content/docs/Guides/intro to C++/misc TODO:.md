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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJWULFL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDL7CMFrA4Iv3P5cve3r0gBiOMhd8ceAjAvBpwF8wNDYAiEAvwCQjZjvd0W4FuXbdgVeE3GSpKd4Dko8CebUw2eEcv0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBUWzA9z%2BBz49TPI8yrcA8Ay9zpiSzk3bhzxU2KldcBbwUkXmLO3CneUuNbIADj7PlfL%2FaPHAXYNxLMR7ijEBVmH0N7wOUCPaO1yWHtLJSOPwmZJfpSdCBFmSvS9cxeMm3EOHGQGz6AYQX5bWbXTLrnDw3tBFhpuVMx9VlwOqIqjnYPja2KGn7gbpMHslFLD%2FvjP6HdGi3CYz%2F7sL7Lp1lFVqkbJzSpW3ULOMFNAQCVT%2FgcJzoOPuC4nldCUsOR0jyvb%2BuDGLujbaTAX5KCnAIdEqJTwa1yoL%2FkzXojzldmKP0WnMStIwnJripPbEFrG392W3s%2B0K4X4PYMAtXaQTOWHPYF0xfoxxMwFIeuzJF6XMpzWFqmHr3Hguc7TN06Fn6clfWmLqIxxfyLHd6BYHKQLKw39ipYgXXN6ef7ZjNHGkg2QmrAdEJONGxKm77wB1AsllxGSY9308caBH4Dz6lbDpPZ4pZsUAP3t4HE2mNdYLcp1NzNxeaa4SPHPXxPuoT8c5USdt3SaErQgCv7aP0utmCz03yvZTiN9DcLoCmdoLUtIcIYF2eY6SWwx53D5Sini%2FbHK28BD%2Bp0ItAiy3D2BaNx3KomnSTR0291MMnafha825cf%2BFBjr6eNZayuXa7LheybapKQucCapMM2%2Bwb0GOqUBaSdXIkx9MCeDpQSMIEf%2BPBw%2FfyjLcAXdfaPluzFkd5AqJ1ncFLR73xmE5hHHEP0GEYjLXpU1En7Jsc%2BimF%2BqNtPmm5h%2FLxeMRRrOKcsTy7bbAXTxpT78zYGDy%2F7Y2PyWioKuAOZ3JF2V6cpB0oFLDwlGuyAvhAWPk5kpFitrIjdGfv6vcWpxt1%2BThsMyhkDlijqNLRJS%2FWIw3zICNoQ8j%2B9J5tlK&X-Amz-Signature=46512bfad208e6f5e29e831db6c57dd58601740b78578215774b74082c96b483&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJWULFL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDL7CMFrA4Iv3P5cve3r0gBiOMhd8ceAjAvBpwF8wNDYAiEAvwCQjZjvd0W4FuXbdgVeE3GSpKd4Dko8CebUw2eEcv0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBUWzA9z%2BBz49TPI8yrcA8Ay9zpiSzk3bhzxU2KldcBbwUkXmLO3CneUuNbIADj7PlfL%2FaPHAXYNxLMR7ijEBVmH0N7wOUCPaO1yWHtLJSOPwmZJfpSdCBFmSvS9cxeMm3EOHGQGz6AYQX5bWbXTLrnDw3tBFhpuVMx9VlwOqIqjnYPja2KGn7gbpMHslFLD%2FvjP6HdGi3CYz%2F7sL7Lp1lFVqkbJzSpW3ULOMFNAQCVT%2FgcJzoOPuC4nldCUsOR0jyvb%2BuDGLujbaTAX5KCnAIdEqJTwa1yoL%2FkzXojzldmKP0WnMStIwnJripPbEFrG392W3s%2B0K4X4PYMAtXaQTOWHPYF0xfoxxMwFIeuzJF6XMpzWFqmHr3Hguc7TN06Fn6clfWmLqIxxfyLHd6BYHKQLKw39ipYgXXN6ef7ZjNHGkg2QmrAdEJONGxKm77wB1AsllxGSY9308caBH4Dz6lbDpPZ4pZsUAP3t4HE2mNdYLcp1NzNxeaa4SPHPXxPuoT8c5USdt3SaErQgCv7aP0utmCz03yvZTiN9DcLoCmdoLUtIcIYF2eY6SWwx53D5Sini%2FbHK28BD%2Bp0ItAiy3D2BaNx3KomnSTR0291MMnafha825cf%2BFBjr6eNZayuXa7LheybapKQucCapMM2%2Bwb0GOqUBaSdXIkx9MCeDpQSMIEf%2BPBw%2FfyjLcAXdfaPluzFkd5AqJ1ncFLR73xmE5hHHEP0GEYjLXpU1En7Jsc%2BimF%2BqNtPmm5h%2FLxeMRRrOKcsTy7bbAXTxpT78zYGDy%2F7Y2PyWioKuAOZ3JF2V6cpB0oFLDwlGuyAvhAWPk5kpFitrIjdGfv6vcWpxt1%2BThsMyhkDlijqNLRJS%2FWIw3zICNoQ8j%2B9J5tlK&X-Amz-Signature=754bbda92b0037108b7d52b01f79a14031ba85d07ce73b4b58bbbd6a5504932f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
