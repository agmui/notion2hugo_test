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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSBEJHP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxJ2N73NlyLLyYTm%2Bw%2BgBnYOks0Q2VE8qXQXK9WU8QaAIhAM%2BOGKdMqCds00jLDNjA2Sem3HtyuPQeBioEv7ZdB7viKv8DCCQQABoMNjM3NDIzMTgzODA1Igyf%2BSlM0d6hNbyP15wq3AMggHM0intvdm5iDX9RUbS6ZKMCJZP0ge3eloUWYhZnPGMJRLCAwCbd8roYFDY5agNFS7XL67tw6faDFOK4Im%2FcT7xiWTLK081HxrgONP2ajdKKagYZZVqvXyy7B1taj3IVo2n%2FBXw3c3t1nglafNyrOZ0L3MniVSA9VjdMe9Gz1ysl9TXT6DOmtmfVohZ5oo92inqL9QAXpx%2B06kdVpz0GC3QWb720NYfOk5OsDYQBiPYAPk3pKyNVM6%2FbnHsSQTITtbKgtmTV9hAIejEXGSotH89M9KXjb05B3DvyzxbTtes5VaRgf6l%2FybckLvAQcL02z63awOpYKW8Pkhd2h5S9C2Wv2gAPqoqYVtFXbKEuMs5O83SaZIxCWpJFe5VwVG9O7DG5XLbzymQexh7tLOlq%2Fo%2BWI9%2BnjsinTl7GlzQuj8uz2AYS7j3iuB%2BL434RdoX6DvSDxFLxsR8alcje9RuPxYV6vpmBFRb4u2oVYVMVdw8UtjSs0Y5Zz1yarSyvG4ciN%2FRi5PXCaqd06t2mpMTa95rbwzMq4TDarmkA5vbykDhRIrJ%2B1f0ak%2F582zNdOpr%2FpQEVUsQrCvs0rgDHCFeGB%2BEe7G1cKSipag8t5Br8QQvVTyGYP8enETo9rjDhorvEBjqkAfkyWcMPCY%2BnlgaUZpoUwWjI4VKbZjLvnTW7LXDn48tfyhcLV3fRdsXyFOCuT8dXBb8u%2FgTgh7ZYCfiePjGsLDRocBU%2BAqW7ZE3I4zt8WkIm3JqyuUB33CnxncNEZvj9yKYiSf%2BaDoYxxOJKUqKgfYblSLxMIzX6ZuH10ZFzRE1plr9KEo5tFowTbHU6dXtclVBo4APKMC20EBCI0eVi7c%2F%2Bwo2K&X-Amz-Signature=b43de9140b847fbe72dbc423c38841b3cfc218f9871d8246322096f8a8f9360a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSBEJHP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxJ2N73NlyLLyYTm%2Bw%2BgBnYOks0Q2VE8qXQXK9WU8QaAIhAM%2BOGKdMqCds00jLDNjA2Sem3HtyuPQeBioEv7ZdB7viKv8DCCQQABoMNjM3NDIzMTgzODA1Igyf%2BSlM0d6hNbyP15wq3AMggHM0intvdm5iDX9RUbS6ZKMCJZP0ge3eloUWYhZnPGMJRLCAwCbd8roYFDY5agNFS7XL67tw6faDFOK4Im%2FcT7xiWTLK081HxrgONP2ajdKKagYZZVqvXyy7B1taj3IVo2n%2FBXw3c3t1nglafNyrOZ0L3MniVSA9VjdMe9Gz1ysl9TXT6DOmtmfVohZ5oo92inqL9QAXpx%2B06kdVpz0GC3QWb720NYfOk5OsDYQBiPYAPk3pKyNVM6%2FbnHsSQTITtbKgtmTV9hAIejEXGSotH89M9KXjb05B3DvyzxbTtes5VaRgf6l%2FybckLvAQcL02z63awOpYKW8Pkhd2h5S9C2Wv2gAPqoqYVtFXbKEuMs5O83SaZIxCWpJFe5VwVG9O7DG5XLbzymQexh7tLOlq%2Fo%2BWI9%2BnjsinTl7GlzQuj8uz2AYS7j3iuB%2BL434RdoX6DvSDxFLxsR8alcje9RuPxYV6vpmBFRb4u2oVYVMVdw8UtjSs0Y5Zz1yarSyvG4ciN%2FRi5PXCaqd06t2mpMTa95rbwzMq4TDarmkA5vbykDhRIrJ%2B1f0ak%2F582zNdOpr%2FpQEVUsQrCvs0rgDHCFeGB%2BEe7G1cKSipag8t5Br8QQvVTyGYP8enETo9rjDhorvEBjqkAfkyWcMPCY%2BnlgaUZpoUwWjI4VKbZjLvnTW7LXDn48tfyhcLV3fRdsXyFOCuT8dXBb8u%2FgTgh7ZYCfiePjGsLDRocBU%2BAqW7ZE3I4zt8WkIm3JqyuUB33CnxncNEZvj9yKYiSf%2BaDoYxxOJKUqKgfYblSLxMIzX6ZuH10ZFzRE1plr9KEo5tFowTbHU6dXtclVBo4APKMC20EBCI0eVi7c%2F%2Bwo2K&X-Amz-Signature=a95433355e5088d3e0c0e3cc4676102cfc411a32193321571040c2bdc0227a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
