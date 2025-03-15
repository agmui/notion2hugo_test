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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWCR5FCZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuk69%2BW70nsOJmFJe0r5r1IvVzpWN%2Fb61YO0kbTgPAFAiEA7rf0dJfUHgyqgjWOmPEbiv1Dx7ihfu%2B7n7tfwLhskpkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIMh62HYjrya1zdjpyrcA%2BPUX2X4ewmwzaE7L6wkdMm69e3Pv1o2ls6UMu%2FN8N6RRlhzBIhLA4b9rzJkM%2FLkuOEsgJo%2F68Ne3rMB8%2BXuj610CLlu5V7UWc4mcEhejW6mw3GzUmOQSbOnU0KooTiPhYyH5BCCbiyry8rHFFjPuihpPmxPqHIbWYIMgYNhN3ZiZFc7PyMkpmb5SV5zUx9hl1nsp19H%2Fqd1QUPTYyCMzKGyG%2B%2FcH%2FHU2Z%2Flz7LiW6sd8dn%2B59N76HmaglASBhYfkC6IEMlW%2BdrDyPpTWMRJMEvuAJNRz7WEI22BYOxLYDlsaTPPETA9wBGabtsx9Fy5vkj6cJ93oWqyoZKXQrZZezzO4ElxHS6M%2FPxbJBNZmw%2Fg0vfgN0mkNBl6Nuy2JnvCLU4NEEslsEQoYrUuZVMy5Z%2FRNVtl3F5jwBpbOtAD9J07rhm40uRLsugeZDt2ywIdI687KG%2FD83jECxvJ5VstKH5D9fCnqZMlloeCSf1gXUsyTvXMRyhPw5BIiisnNY5Wao2JDIv8VETrTuQVeadxT1ksl8droq%2B5i3uuUfYxyh6hOJ93tZdWckHtxzWZ2FRqraeWYyvDBXTUVjDWC1Dm%2FSkAya6ZfoMzzo0KBlNI66y%2BDvNIAAC3tKLQvpp%2BMMnr1r4GOqUBI2o071TQ9BK%2FGUn7AJEGUUi4mOo08XYTDims8uDOlklCgajLtyYF2P%2FclA5zgAQ4m9kq8rJ3n%2Bm9lWIq8v9FC3z%2BaCJ3WXaHC40msV7NOGgyFO3bIbsBB4DfVeQ9hvAZH6m3L%2Fwd7If0E%2Bxw%2FnqpWH1E1j4f%2FpR0pow6DsjhOrBAEIcxdusTAYsGzAAG7ek3J2I04uO9i%2BOq8%2B%2B%2FDInRaAFuYj4D&X-Amz-Signature=68e541f33de2c577585fef93897cd00d2a9bc6adbdd806b2ceabbfc76fc26e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWCR5FCZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuk69%2BW70nsOJmFJe0r5r1IvVzpWN%2Fb61YO0kbTgPAFAiEA7rf0dJfUHgyqgjWOmPEbiv1Dx7ihfu%2B7n7tfwLhskpkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIMh62HYjrya1zdjpyrcA%2BPUX2X4ewmwzaE7L6wkdMm69e3Pv1o2ls6UMu%2FN8N6RRlhzBIhLA4b9rzJkM%2FLkuOEsgJo%2F68Ne3rMB8%2BXuj610CLlu5V7UWc4mcEhejW6mw3GzUmOQSbOnU0KooTiPhYyH5BCCbiyry8rHFFjPuihpPmxPqHIbWYIMgYNhN3ZiZFc7PyMkpmb5SV5zUx9hl1nsp19H%2Fqd1QUPTYyCMzKGyG%2B%2FcH%2FHU2Z%2Flz7LiW6sd8dn%2B59N76HmaglASBhYfkC6IEMlW%2BdrDyPpTWMRJMEvuAJNRz7WEI22BYOxLYDlsaTPPETA9wBGabtsx9Fy5vkj6cJ93oWqyoZKXQrZZezzO4ElxHS6M%2FPxbJBNZmw%2Fg0vfgN0mkNBl6Nuy2JnvCLU4NEEslsEQoYrUuZVMy5Z%2FRNVtl3F5jwBpbOtAD9J07rhm40uRLsugeZDt2ywIdI687KG%2FD83jECxvJ5VstKH5D9fCnqZMlloeCSf1gXUsyTvXMRyhPw5BIiisnNY5Wao2JDIv8VETrTuQVeadxT1ksl8droq%2B5i3uuUfYxyh6hOJ93tZdWckHtxzWZ2FRqraeWYyvDBXTUVjDWC1Dm%2FSkAya6ZfoMzzo0KBlNI66y%2BDvNIAAC3tKLQvpp%2BMMnr1r4GOqUBI2o071TQ9BK%2FGUn7AJEGUUi4mOo08XYTDims8uDOlklCgajLtyYF2P%2FclA5zgAQ4m9kq8rJ3n%2Bm9lWIq8v9FC3z%2BaCJ3WXaHC40msV7NOGgyFO3bIbsBB4DfVeQ9hvAZH6m3L%2Fwd7If0E%2Bxw%2FnqpWH1E1j4f%2FpR0pow6DsjhOrBAEIcxdusTAYsGzAAG7ek3J2I04uO9i%2BOq8%2B%2B%2FDInRaAFuYj4D&X-Amz-Signature=fb69a3d01b9337ce7f99631799814ab0f51f2adf82a38f425f3263681f92978e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
