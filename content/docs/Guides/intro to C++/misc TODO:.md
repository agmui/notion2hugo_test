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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMNWXWA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBbbDpdbcIKiO6cMopHBKD%2B7j7PJICU2y4d7botP2XVxAiEA7TUvU4bX1vZVFMygTSSSPMHZJUdyt2YpOKgYDs65UKwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEo1UeuTJWLbjOTDgircA0%2BYiSdCBvEXzYpP4GVDAk0kCWs0monO2nbJAU09UTUw%2BBdXDUb3%2B7%2BbUh6gvjFdg8L8CDSM816Fg%2Bvmz7DSdyxbKWQDCXVm2Pw%2Bru8q2YDQDuXFGo7mscuvvMoX9pcNG0CFbgSPlK9JHjVNAh52WHnfC2jDaqNZbFHX1afb8jog%2FRgLGMNTUFjToZpZi7NMdGKexI4D6pS%2BlYuL27XgdBOkQX6fsDWpl7WyBMLnG04rmn89FvZmslkbC7WFHc3lHP4a%2B1f1ykMXajdj9wmJOdfBwhkLcWacll7eB5fl9BixAkDGMfem4omMIN%2BSJDdjAV%2BFyHiEoSHajalPVMBppdVn%2F1n%2BhZua5SfoZ%2BJQlsmcp1F7%2BixOZHAHVzYEQzaWa3jzxyv8614hzgL3WdI2tw4ppg%2FAVpVzHXOKAAadXakLGVbFIORXOEP3LvSQ2uAZZs68v5X6CuoMlChAcJd%2Fm1OISJ%2BTU4xVH3Ae1SzF%2Bjp6fRg63TyiUpVmbCtyNhyvsEC6h2dbm2YagH20m5KNCbmg%2BPKPwaHXsjmkk2bevkYjxDdyKXs2nzsSfi3mZ1RljMuaoVLK46GglWRnqFzsGKktlAs%2FVoBCUCl59tikSaMFWkGtesBdn3f%2B7EyCMIGxickGOqUBorcjr0DSnbtJQg6aWKaheBT0EsTTCqiSmWf4t%2BAFrjuVevfUNGlwa79Re8RL2pp%2B7Q1OTFK7CVUqWK5%2BzztOQy27Lz%2BVpRgPnr1F9gKIo0d5xSoap4Lp1rFSANzsv4TOgwXdcvBHNY9QfiLck8zs49k3v0EPFVP48ecaRvCB5CBxWrL0oiZ4UJQDRY2dKVQi2tJ%2BNT0saw0oZFjuyS90SPaiWNgD&X-Amz-Signature=5dd6a4cf9e81f0a0476b0fd6dc4b5f75883a7e46aeb4eea96188d5028d969c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMNWXWA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBbbDpdbcIKiO6cMopHBKD%2B7j7PJICU2y4d7botP2XVxAiEA7TUvU4bX1vZVFMygTSSSPMHZJUdyt2YpOKgYDs65UKwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEo1UeuTJWLbjOTDgircA0%2BYiSdCBvEXzYpP4GVDAk0kCWs0monO2nbJAU09UTUw%2BBdXDUb3%2B7%2BbUh6gvjFdg8L8CDSM816Fg%2Bvmz7DSdyxbKWQDCXVm2Pw%2Bru8q2YDQDuXFGo7mscuvvMoX9pcNG0CFbgSPlK9JHjVNAh52WHnfC2jDaqNZbFHX1afb8jog%2FRgLGMNTUFjToZpZi7NMdGKexI4D6pS%2BlYuL27XgdBOkQX6fsDWpl7WyBMLnG04rmn89FvZmslkbC7WFHc3lHP4a%2B1f1ykMXajdj9wmJOdfBwhkLcWacll7eB5fl9BixAkDGMfem4omMIN%2BSJDdjAV%2BFyHiEoSHajalPVMBppdVn%2F1n%2BhZua5SfoZ%2BJQlsmcp1F7%2BixOZHAHVzYEQzaWa3jzxyv8614hzgL3WdI2tw4ppg%2FAVpVzHXOKAAadXakLGVbFIORXOEP3LvSQ2uAZZs68v5X6CuoMlChAcJd%2Fm1OISJ%2BTU4xVH3Ae1SzF%2Bjp6fRg63TyiUpVmbCtyNhyvsEC6h2dbm2YagH20m5KNCbmg%2BPKPwaHXsjmkk2bevkYjxDdyKXs2nzsSfi3mZ1RljMuaoVLK46GglWRnqFzsGKktlAs%2FVoBCUCl59tikSaMFWkGtesBdn3f%2B7EyCMIGxickGOqUBorcjr0DSnbtJQg6aWKaheBT0EsTTCqiSmWf4t%2BAFrjuVevfUNGlwa79Re8RL2pp%2B7Q1OTFK7CVUqWK5%2BzztOQy27Lz%2BVpRgPnr1F9gKIo0d5xSoap4Lp1rFSANzsv4TOgwXdcvBHNY9QfiLck8zs49k3v0EPFVP48ecaRvCB5CBxWrL0oiZ4UJQDRY2dKVQi2tJ%2BNT0saw0oZFjuyS90SPaiWNgD&X-Amz-Signature=3e4482d3c1c201b7b121d0ca743f9c704e1e78e9f6860de9c588d4bf19b2622c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
