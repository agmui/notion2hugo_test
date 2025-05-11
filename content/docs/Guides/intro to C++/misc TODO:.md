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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7S7ICO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQC85Po335P%2B6eiWZMz15fJwQhwGLQt8KAK68ZG6JWzPOQIgICczH4inKBROuYFO1pgrdalA%2F3GfmTGDDN4KZjdA5jIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdenaR8ckGSXiPqsSrcAyf2l%2FRGVNLwfs57GAszI1EDwdpRrLgfAjZ3u5NoRBzZuIBiCatfb3GPHSomx3ZFqw29ZUd4clvRxfHS4pBI3uY27V3nVtNHTeJNi8ygkt2iNUGo%2F8FTY9lDYOU6jCPZ2t3uj7O2OcMOdRsWlr6YucEwpEYk%2BD2%2FndO6xaSoX%2BbKinuL%2FWr4XZ6N%2FJGQZjcZIIB%2BrPnIwC2qADOqUL7o5M2AxKJehH0mxmpU6aiDaDzPh9OQYnTmO%2BgC6DAKNYVy83NvQpa581djN0ds%2FVT67QcZjVlptEMBuLJGOn95oPbyVtI5oBYJ%2BLkcXoOGriPs4NhrdQKo%2FOD8Vl98cyxFte44Wz2t5Os5dgE04qzWrl1T5VBqUhgqn8HhDJpbxH05Ej5EiO%2B6iPzH6Kv0MiVTE3drla88O2bCvUnV8wYH1JVcC1xc1Gtk6G%2BfaLx8%2Bn0C1QNiKdJsJ3x%2Fp92lXgq8KM36cD49NjAhJgA822FLRR3oSgcyv%2BFUrv6zxy%2F%2FiTRhLAGq5VxNGpHWUNC4IrMgbhkndyryftGeNUnQVtFM2SyUk7NyX3ICWCnMBDzLwXUdLRuctwna60mPtAGo1FJbuubAvt01tHt8Q0YSPYtcaza1qTCtiFJlxhtVwTgdMKXXgsEGOqUB3xdAUdYspe1sslW48g%2FaVIDw70Tsyi7S81ST9t6c8NGCAMFTD3lLrAhXdwhtJuSMnO1W3rEysn14aShB7C504NIulJA0YBWBUYDVi0uAGA0%2FHfoWFFRsHGiBi%2FI7tFa8dg1jLYWhKprYcuC9%2Fe%2Bt4YqqU1CU4GsYVrijaPfMeV%2Bz7KlKtB82K8kE9%2BgfpBJHp5t17Ewahgg0IgHITvkoqs1yTOJ5&X-Amz-Signature=2d8cd40be128e7b8869de75c19c7ada7b3d6afb5ab51f7f65fa70158d9af9ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7S7ICO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQC85Po335P%2B6eiWZMz15fJwQhwGLQt8KAK68ZG6JWzPOQIgICczH4inKBROuYFO1pgrdalA%2F3GfmTGDDN4KZjdA5jIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdenaR8ckGSXiPqsSrcAyf2l%2FRGVNLwfs57GAszI1EDwdpRrLgfAjZ3u5NoRBzZuIBiCatfb3GPHSomx3ZFqw29ZUd4clvRxfHS4pBI3uY27V3nVtNHTeJNi8ygkt2iNUGo%2F8FTY9lDYOU6jCPZ2t3uj7O2OcMOdRsWlr6YucEwpEYk%2BD2%2FndO6xaSoX%2BbKinuL%2FWr4XZ6N%2FJGQZjcZIIB%2BrPnIwC2qADOqUL7o5M2AxKJehH0mxmpU6aiDaDzPh9OQYnTmO%2BgC6DAKNYVy83NvQpa581djN0ds%2FVT67QcZjVlptEMBuLJGOn95oPbyVtI5oBYJ%2BLkcXoOGriPs4NhrdQKo%2FOD8Vl98cyxFte44Wz2t5Os5dgE04qzWrl1T5VBqUhgqn8HhDJpbxH05Ej5EiO%2B6iPzH6Kv0MiVTE3drla88O2bCvUnV8wYH1JVcC1xc1Gtk6G%2BfaLx8%2Bn0C1QNiKdJsJ3x%2Fp92lXgq8KM36cD49NjAhJgA822FLRR3oSgcyv%2BFUrv6zxy%2F%2FiTRhLAGq5VxNGpHWUNC4IrMgbhkndyryftGeNUnQVtFM2SyUk7NyX3ICWCnMBDzLwXUdLRuctwna60mPtAGo1FJbuubAvt01tHt8Q0YSPYtcaza1qTCtiFJlxhtVwTgdMKXXgsEGOqUB3xdAUdYspe1sslW48g%2FaVIDw70Tsyi7S81ST9t6c8NGCAMFTD3lLrAhXdwhtJuSMnO1W3rEysn14aShB7C504NIulJA0YBWBUYDVi0uAGA0%2FHfoWFFRsHGiBi%2FI7tFa8dg1jLYWhKprYcuC9%2Fe%2Bt4YqqU1CU4GsYVrijaPfMeV%2Bz7KlKtB82K8kE9%2BgfpBJHp5t17Ewahgg0IgHITvkoqs1yTOJ5&X-Amz-Signature=a659ac6e7185823fe5e90fe8b292a5415def4a33aee46bd59a83e15cd0465e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
