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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4X477X%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkAFppPjrFFAC%2FK9Jh2JojL8DxWSd3VJTJPWD27BH0QAiANxPixifI8H4ugia28UMQWqP6US%2FmZCeVGwxvHuUGv1SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAU48EsRT6xszk3AkKtwDh5t36Gc9hY%2BeU65iNnro3q0TymBMIJCJD2Lt%2BNkYy103jRTPMeV2VA%2FYj5ocjiZDRtijmVT3nfpJ%2FrzqEYNdEY2gxVCygbA8pKxpPEh%2BZ49uhYt3BM4bZzHEgUw2BhACvcUs6WrzxbJhflRPHc1soPS22PXGrMom27%2BY4FB5My0vSRnDdr66wokZg4UvwZpPiaXpO8W7FpQkqsDeReo%2BYVSUNm2Fu92pj57GSIS1HMREVzVaoNYuRK5EpHUz%2Bg45mpH4ZP8lM%2FuAvXpNEzOPa2%2BOmjLddg0OG53zV8%2BNmC9BWszSpxe52tftB2UxZJEmHQb3KIUlGnfU%2BtoQtZKYECH2FJPR8JXACAC8Dsf8EGDZzdiCKtrrZs%2BIjRb%2FNx9xvzNeYrJZwIWmFkOe67W0pgnyDC1biB%2BgiXrDR9sT%2FKUnCXmtRYwh7QpS4wUf5GIjIhevlnpMAQPpDeVGIz4vMt4d7S%2FuqUnGCTRTIpQBeTXS8kNMwLluQEVJ8f%2FCYQF55%2FwOWPvDIHJMvND4AYSqb3pD2OdpGkLwbR6i3fwbaYfE2mpl%2F91dgI650CrAWQIlhACBCKH89znORu%2BpJEOCxv0VQ6O9OXbwWxaVOgbkg6m8egKy2N0Dzn%2BGA4wwqeP0wAY6pgGrCmgsJ376OIQq8X1Efgk3yIgjQKPJa4cjucZw03Ad5fua7eOgktY3Lj53koKx42HN5hYWw9g1FQJtDibaFI7jy5ebTWEYOfpEz5lsQzwNEHHVp3l46QZMdMsOqS7xFL%2FsRMrocXWZaJzXElbwteEGOmwf%2FAfgfcf%2BKSOvIzH9pxoyLyzDQTAxxczq%2FjtwVr6Vz1LgspX0BGTqvUVmVsfUa6VwmAOp&X-Amz-Signature=8104aef34fecb15ef709cfb4a49154d672b3107e5f185b9c323193f6635b5bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4X477X%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkAFppPjrFFAC%2FK9Jh2JojL8DxWSd3VJTJPWD27BH0QAiANxPixifI8H4ugia28UMQWqP6US%2FmZCeVGwxvHuUGv1SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAU48EsRT6xszk3AkKtwDh5t36Gc9hY%2BeU65iNnro3q0TymBMIJCJD2Lt%2BNkYy103jRTPMeV2VA%2FYj5ocjiZDRtijmVT3nfpJ%2FrzqEYNdEY2gxVCygbA8pKxpPEh%2BZ49uhYt3BM4bZzHEgUw2BhACvcUs6WrzxbJhflRPHc1soPS22PXGrMom27%2BY4FB5My0vSRnDdr66wokZg4UvwZpPiaXpO8W7FpQkqsDeReo%2BYVSUNm2Fu92pj57GSIS1HMREVzVaoNYuRK5EpHUz%2Bg45mpH4ZP8lM%2FuAvXpNEzOPa2%2BOmjLddg0OG53zV8%2BNmC9BWszSpxe52tftB2UxZJEmHQb3KIUlGnfU%2BtoQtZKYECH2FJPR8JXACAC8Dsf8EGDZzdiCKtrrZs%2BIjRb%2FNx9xvzNeYrJZwIWmFkOe67W0pgnyDC1biB%2BgiXrDR9sT%2FKUnCXmtRYwh7QpS4wUf5GIjIhevlnpMAQPpDeVGIz4vMt4d7S%2FuqUnGCTRTIpQBeTXS8kNMwLluQEVJ8f%2FCYQF55%2FwOWPvDIHJMvND4AYSqb3pD2OdpGkLwbR6i3fwbaYfE2mpl%2F91dgI650CrAWQIlhACBCKH89znORu%2BpJEOCxv0VQ6O9OXbwWxaVOgbkg6m8egKy2N0Dzn%2BGA4wwqeP0wAY6pgGrCmgsJ376OIQq8X1Efgk3yIgjQKPJa4cjucZw03Ad5fua7eOgktY3Lj53koKx42HN5hYWw9g1FQJtDibaFI7jy5ebTWEYOfpEz5lsQzwNEHHVp3l46QZMdMsOqS7xFL%2FsRMrocXWZaJzXElbwteEGOmwf%2FAfgfcf%2BKSOvIzH9pxoyLyzDQTAxxczq%2FjtwVr6Vz1LgspX0BGTqvUVmVsfUa6VwmAOp&X-Amz-Signature=e18e5b3fdefb65f8d067f19c1cd2707ae70588b186f71e0b0509a08a5fd2aef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
