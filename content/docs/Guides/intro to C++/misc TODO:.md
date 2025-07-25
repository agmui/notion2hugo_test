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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4NPG45%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDKokIJwW7X8I0hQ6dYYhjrAY3AvjwhnGX%2F7nq19Kf8IAiEA2aeX24Gqa491qPZVMK63PEaI6ie%2FK5ABqEodzPtzp1Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOSayf%2BlXgYwgvL2ICrcA0ijv%2Bhj%2FJXTtn8a3wpIf7sWLf8Bxb85AkyL16V3eIegrGni%2BNPN%2BE9IRiv2qPV0hlWTgqfafe75TJdtMEjsjRQl1%2BgjbzJZ1CLYC9CTJdmp%2FZ77La5l6qQugF7%2F9N4qhPTy%2FThSDhvZmtBdn%2B0K4lpbCqSrGxStegofjwTX%2FC6TLCzbnv8p1MxF4hfhzt0fMdOgLq3qg1zfeAjuE2wXRCA8gnvyPThg35zzhNV1UIb6wEJ7VS2m%2B7nxSylnZPoXsKHAa5dhL77B8Tb3XRdvEOBBs4c7Mg8mf4gKqp05sWpPpTjM8RWaPbzzrqgMR3za2HRxnappBpkYXGOzNTjRNpnBHeJC5%2FaiGuogysRJKTuXMkRv%2FpZpeEkRl3pxoNWoefdMQ%2B19bAUtGuAv16XZr35yOLHTi%2F48BEkgLqZZXVsWIhfyaJLzGbgr5yutguC5rkmp3Xe2WWIWPB7Rddf50nJf%2FeXREOTcfYz2uZKTKANMiE7zzLSZiEq4ZJuaWqhAtmrQ2NaFEanrLpb9%2F1vFgE07qUAeveaSoV6QPEG3dcjwh%2BQL8V52MVvoo1yOx8ZqCWA%2F6Onc2TBwAnxU0qtjCMYXSnXb%2BSYhUPtbOvzy%2FaVnDH%2B0ssKGLJEBcnsrMNiqj8QGOqUB1anzJ6R24ZqlNZzvOqgoJmFtbzVj6%2FohIw2UNU5XnRWGai7%2FQyqnQ2JUbJp06HytBocpuSoJrJt6K%2FpDENUSZ7VL2VgDBv5dqdqp88MMUc2ttAyGEEItQg4Pn4u2il5drdYRmI45ai5tvngwgMUE7s4JM%2FXqbuCpzUsoutN%2BOesn%2F4XxTmvuJiYhByPXA%2BtiX7ZBeDXtusFeCTqOY4fg8CjeDCer&X-Amz-Signature=6fd3a7bcd41fcd99fbb47537d2fffd03f0e46f1c790d0718e1af4440c718077c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4NPG45%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDKokIJwW7X8I0hQ6dYYhjrAY3AvjwhnGX%2F7nq19Kf8IAiEA2aeX24Gqa491qPZVMK63PEaI6ie%2FK5ABqEodzPtzp1Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOSayf%2BlXgYwgvL2ICrcA0ijv%2Bhj%2FJXTtn8a3wpIf7sWLf8Bxb85AkyL16V3eIegrGni%2BNPN%2BE9IRiv2qPV0hlWTgqfafe75TJdtMEjsjRQl1%2BgjbzJZ1CLYC9CTJdmp%2FZ77La5l6qQugF7%2F9N4qhPTy%2FThSDhvZmtBdn%2B0K4lpbCqSrGxStegofjwTX%2FC6TLCzbnv8p1MxF4hfhzt0fMdOgLq3qg1zfeAjuE2wXRCA8gnvyPThg35zzhNV1UIb6wEJ7VS2m%2B7nxSylnZPoXsKHAa5dhL77B8Tb3XRdvEOBBs4c7Mg8mf4gKqp05sWpPpTjM8RWaPbzzrqgMR3za2HRxnappBpkYXGOzNTjRNpnBHeJC5%2FaiGuogysRJKTuXMkRv%2FpZpeEkRl3pxoNWoefdMQ%2B19bAUtGuAv16XZr35yOLHTi%2F48BEkgLqZZXVsWIhfyaJLzGbgr5yutguC5rkmp3Xe2WWIWPB7Rddf50nJf%2FeXREOTcfYz2uZKTKANMiE7zzLSZiEq4ZJuaWqhAtmrQ2NaFEanrLpb9%2F1vFgE07qUAeveaSoV6QPEG3dcjwh%2BQL8V52MVvoo1yOx8ZqCWA%2F6Onc2TBwAnxU0qtjCMYXSnXb%2BSYhUPtbOvzy%2FaVnDH%2B0ssKGLJEBcnsrMNiqj8QGOqUB1anzJ6R24ZqlNZzvOqgoJmFtbzVj6%2FohIw2UNU5XnRWGai7%2FQyqnQ2JUbJp06HytBocpuSoJrJt6K%2FpDENUSZ7VL2VgDBv5dqdqp88MMUc2ttAyGEEItQg4Pn4u2il5drdYRmI45ai5tvngwgMUE7s4JM%2FXqbuCpzUsoutN%2BOesn%2F4XxTmvuJiYhByPXA%2BtiX7ZBeDXtusFeCTqOY4fg8CjeDCer&X-Amz-Signature=9b471f5ccec820aed9e5a38bfd5d3af28cf21300804ea4565cef8ba7396fde89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
