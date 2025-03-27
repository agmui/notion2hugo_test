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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZNILV6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcFULuaBmy3k%2BcqTEF41HsWlfpaN8bKXoiUWUgcKPc1AiBA1x5MVba1lnlIPGiezf1oEI8HgxGHzeU1fm9PIq6uuCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMxhj3u6uScFRf%2F1MkKtwDM9hoJF50s%2F9BWMw7Crc7azM7lpxBeabQayeUDbnLf9mOGv%2FKGCeGmB2OmVxJlYWFigpUvdpiw4gRgkKf%2BFMIMh%2BHKLS80ZKNAUHwrKujItlUNI3kpezS7caGvNE4oGg1ZJ%2B58Ysw6JU6W3N3Dz9T7QO3Lmf47Soc0CqQXj088FoqdgmuJCaNAEF3Yz5tQgAKoHmt9t5Nx%2B%2FmlZG2ryIdDRZ%2F5OKw9J2KK1nMD3HGkZHuy%2F4zzratvojLJMiuL77dZFKglGiEQioFKwsokdnpissFWdQ3AEMCvLOKH5EPOH3y%2FSEiodMiiRqqETEtAfa4df8A2rS7YxUjBNzkIe82ovfcOLQERYcn7NWZ731ENlST3YOV%2BLIp9OIcdUox8lRKDbYgnyk8%2BisQpu%2FfoFGbfAc5EVxYr%2Fni%2FzA3SsbJ6x%2FUpjYOkfePW5%2FyC1TtsMdQKH9%2FaxY%2BbDwJizK3ExkvpMZKlOQUHacTkiVK2u2I%2BCSzBNvM6Z5JqymRDKBVTgzp0n23KWtsXNOnmHuUl5CIDrr7Mb89I1myZruDDZe4XtZ75M28uUyvtvTYV6YtvcxNZIwOvdU88jbeFqiCaLSKUtjbVX%2F9j5ptdzlV%2BNCal7MDt2%2FlcUzF2MMtZngwwtyWvwY6pgEBfnh0cXALnzkiSRRDWdvYWIfjKE8g77uEHQr2769PjMlf8CqReIkTT33EvqnFRpLUy%2FbILYENwA%2FYawCVQt1d16UB0hwWgQF%2F3qxNASUd%2BlD7rpxlHnl8mkfy60GyDNf%2FNs1icZXKHyiUgTFx2EjEUKAdK8lqQx%2BCx4HQ0RdpDsSaet6eWHnOf5jTaqbB31qGlzLE7enND1thc4YB9szqO6DzGXTv&X-Amz-Signature=801a34f71f1fd1f449788e0c00370e09cc3ea9e30bc0b8f0968955110ed547fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZNILV6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcFULuaBmy3k%2BcqTEF41HsWlfpaN8bKXoiUWUgcKPc1AiBA1x5MVba1lnlIPGiezf1oEI8HgxGHzeU1fm9PIq6uuCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMxhj3u6uScFRf%2F1MkKtwDM9hoJF50s%2F9BWMw7Crc7azM7lpxBeabQayeUDbnLf9mOGv%2FKGCeGmB2OmVxJlYWFigpUvdpiw4gRgkKf%2BFMIMh%2BHKLS80ZKNAUHwrKujItlUNI3kpezS7caGvNE4oGg1ZJ%2B58Ysw6JU6W3N3Dz9T7QO3Lmf47Soc0CqQXj088FoqdgmuJCaNAEF3Yz5tQgAKoHmt9t5Nx%2B%2FmlZG2ryIdDRZ%2F5OKw9J2KK1nMD3HGkZHuy%2F4zzratvojLJMiuL77dZFKglGiEQioFKwsokdnpissFWdQ3AEMCvLOKH5EPOH3y%2FSEiodMiiRqqETEtAfa4df8A2rS7YxUjBNzkIe82ovfcOLQERYcn7NWZ731ENlST3YOV%2BLIp9OIcdUox8lRKDbYgnyk8%2BisQpu%2FfoFGbfAc5EVxYr%2Fni%2FzA3SsbJ6x%2FUpjYOkfePW5%2FyC1TtsMdQKH9%2FaxY%2BbDwJizK3ExkvpMZKlOQUHacTkiVK2u2I%2BCSzBNvM6Z5JqymRDKBVTgzp0n23KWtsXNOnmHuUl5CIDrr7Mb89I1myZruDDZe4XtZ75M28uUyvtvTYV6YtvcxNZIwOvdU88jbeFqiCaLSKUtjbVX%2F9j5ptdzlV%2BNCal7MDt2%2FlcUzF2MMtZngwwtyWvwY6pgEBfnh0cXALnzkiSRRDWdvYWIfjKE8g77uEHQr2769PjMlf8CqReIkTT33EvqnFRpLUy%2FbILYENwA%2FYawCVQt1d16UB0hwWgQF%2F3qxNASUd%2BlD7rpxlHnl8mkfy60GyDNf%2FNs1icZXKHyiUgTFx2EjEUKAdK8lqQx%2BCx4HQ0RdpDsSaet6eWHnOf5jTaqbB31qGlzLE7enND1thc4YB9szqO6DzGXTv&X-Amz-Signature=05fe75bd4c119ab3caea14d82a149c6239260de9bca09d68786d47157b8954e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
