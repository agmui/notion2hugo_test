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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3PKG6J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDd4luOv6p1AKRjgqJH4Fqk2T4qPKt4UfblTsGU444%2FgIhAMjiCGXq0n0YFUcNSZ0CU97kf4SRu7V6Wa839%2FArXndNKv8DCFcQABoMNjM3NDIzMTgzODA1Igwg17akrQPUVkK9iBwq3AOsjI3sCS9%2FZX8of1tkSD%2Bfu9d8UaDml2KeXaXc5IDTkFeKe5lXSd1dtoq8Wbn0F7%2BXhaQHKoiF1IvOZUpxvrk28ButjVWxExS8wvQzRKjZurOBiUphuKH0y3QZLnCat%2B7rskP85d0Rzywgp0Dcl6VT49dIbykiBcG3MMtMHPn8PWmhJ0yudiMKltG5jchdVV5g9bxmEbxGLi1iXJ2xpAUflWjp985xSrlSrkiuXbsMsWsnRZvQuKvn0TBODMc2XoFtK2Y98bB3vO%2FArTq1YcmoCOjhoNshQG5CHP%2F6W5ulLHuM2olWaG0Lw54UYbBkH5ky%2FI%2BRp6MCzDqLpbnU9LnL4WncCHkmfg4vHc4BldZgKz78ihgY4dQizxYVgAG%2F4CB2Ox5BTA62CFFXFaRX9ExvzPsG0E6x%2BMjww2SU%2BFYclvi1uzm5hb9n9WCu2%2FgPPb%2FVRuaaXaIikhRm%2F%2BJPiQPNC1ioR%2BXD2gQqpZL0959vGR1KyK41VjPY8VWaeAPDxf1TB21X4tD6xslbIDNkMtV0JiG%2FVyELKeUebepl6uAMhIK0sdKh1vRlDCUXwuhmtY7TqPDEUiUcAigfuwWtaN%2FfAU7SOCXBXjEqVoPTaD69k%2FOWnDs5Qe2Do0im0jCn0c2%2FBjqkAdBu5V3iOsywQTgiha1S6vraYRcj4eKKEqey%2F%2BZGrJ4mqy2QJ0SYG6awKQM34knkOTHunH%2BAhJVW5gYczWBrHOGGe4KG5EwObTMLZOeWPNvhL03NzXQzUBmO6rrDYXzuH4tWp5R1%2Brix1nBd3S6OiTk2laPOX9htNPpsuy7yVYX2B7UuM%2FbwbPvNtCWHRJl7mI6GTuJJfWZqbuNg4o%2FlEyNMx0XO&X-Amz-Signature=2796c1e55282b39a7087b4d48328071c6be91f53d240f8fb07096fa8b2894055&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3PKG6J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDd4luOv6p1AKRjgqJH4Fqk2T4qPKt4UfblTsGU444%2FgIhAMjiCGXq0n0YFUcNSZ0CU97kf4SRu7V6Wa839%2FArXndNKv8DCFcQABoMNjM3NDIzMTgzODA1Igwg17akrQPUVkK9iBwq3AOsjI3sCS9%2FZX8of1tkSD%2Bfu9d8UaDml2KeXaXc5IDTkFeKe5lXSd1dtoq8Wbn0F7%2BXhaQHKoiF1IvOZUpxvrk28ButjVWxExS8wvQzRKjZurOBiUphuKH0y3QZLnCat%2B7rskP85d0Rzywgp0Dcl6VT49dIbykiBcG3MMtMHPn8PWmhJ0yudiMKltG5jchdVV5g9bxmEbxGLi1iXJ2xpAUflWjp985xSrlSrkiuXbsMsWsnRZvQuKvn0TBODMc2XoFtK2Y98bB3vO%2FArTq1YcmoCOjhoNshQG5CHP%2F6W5ulLHuM2olWaG0Lw54UYbBkH5ky%2FI%2BRp6MCzDqLpbnU9LnL4WncCHkmfg4vHc4BldZgKz78ihgY4dQizxYVgAG%2F4CB2Ox5BTA62CFFXFaRX9ExvzPsG0E6x%2BMjww2SU%2BFYclvi1uzm5hb9n9WCu2%2FgPPb%2FVRuaaXaIikhRm%2F%2BJPiQPNC1ioR%2BXD2gQqpZL0959vGR1KyK41VjPY8VWaeAPDxf1TB21X4tD6xslbIDNkMtV0JiG%2FVyELKeUebepl6uAMhIK0sdKh1vRlDCUXwuhmtY7TqPDEUiUcAigfuwWtaN%2FfAU7SOCXBXjEqVoPTaD69k%2FOWnDs5Qe2Do0im0jCn0c2%2FBjqkAdBu5V3iOsywQTgiha1S6vraYRcj4eKKEqey%2F%2BZGrJ4mqy2QJ0SYG6awKQM34knkOTHunH%2BAhJVW5gYczWBrHOGGe4KG5EwObTMLZOeWPNvhL03NzXQzUBmO6rrDYXzuH4tWp5R1%2Brix1nBd3S6OiTk2laPOX9htNPpsuy7yVYX2B7UuM%2FbwbPvNtCWHRJl7mI6GTuJJfWZqbuNg4o%2FlEyNMx0XO&X-Amz-Signature=5014270581bc42b5d4a04280e8317c0ae8412863f5482606fd22f26989a51114&X-Amz-SignedHeaders=host&x-id=GetObject)

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
