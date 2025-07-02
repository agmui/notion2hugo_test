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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSKGWPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnJdOV6EJNnkoflcRkiRuL45DxrUzPBHMkYJ9L7fGbWwIgYLKB55Nan6lTsOzLK6izq7hIUHkpfmDmMqVjTwlrqq8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6e%2FcIOPL%2B%2FO1VgyrcA%2FOF57vNk9InxEW1AeVvD9MJtZfWxKIyDwlZTf4QJLQ2GDdtvntXeopzzunbuSgIhQUzYJEBLk5AtpJbQcNU5s%2FKuoAsYii0pFAhntaQMprc0Vw33scOD0KyKhw8dpjJpfiN4%2BAM438%2FovklwCYRuzQkh%2BVuBI52QvBXU4V6VzEzQaAISF0yYMW32lLTLVEd%2Fnc2Eai%2FdF86HLXbq%2Fe5wEG18MyCGCgVgYnPIspASFzu9mChOhmC8g2XfDXd9VJEFnO%2FbKkHhzL6PJRVVL2lsUnmtxUVMqB%2B2sduGw2O0uOUXpvh%2BxIQ%2FgTKq%2BLtVgwu%2BTmCG95sLU81p9TEzQMk8b13bQSIEMxB464yVwJeQynHQId97HUICRlWbFANXBXnwlvQyhSBMaL%2FDycoaZT42GaN1qkpRk6oHrmN%2F%2FciVMOOhqqUsK%2FD6CESbsZl%2F%2BorECDedEuKvBhuW8FMcyb5Ymcq83GuIIp31GOcZmeYG6lplYqQJZwZRCPgvv8ui3%2FHzscVKm2CxfimncPW3TsIYYPBeuCMkfyN6XIn2h9tVuq%2F83LcTZjNf2yThFsmQbEjlcgdr2MTNNXVPteqhLRVYwQVsEkewkEZNmYfVe%2B55hLU4vIh6UihZwiiBObdMMCTlsMGOqUBXoDW96Kkn74%2BqGssCyGsEV0UjhamzQzYh5cxrwkO8RPLoyh9gfmm4wEtSMbR7EUMR32%2BS454r6RN%2FSq99mb%2BgKC1K8KtDBmP9Jstg%2B0Wm6K2ja4vc%2FNor8A9wN3mT13UrQzJ1ToTalJ%2F0nbjkvA%2FTTgr29klENXixGDlpsQn9QjzP9eMABWVea7CoyR45Ej3tPCU9bLTiWS4zdSPMqJlr8UB8R1S&X-Amz-Signature=99f5adcfc29faedcebcd5ca8e61f1ec50b17a1162f2e93a73c4cc7668c9c98ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSKGWPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnJdOV6EJNnkoflcRkiRuL45DxrUzPBHMkYJ9L7fGbWwIgYLKB55Nan6lTsOzLK6izq7hIUHkpfmDmMqVjTwlrqq8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6e%2FcIOPL%2B%2FO1VgyrcA%2FOF57vNk9InxEW1AeVvD9MJtZfWxKIyDwlZTf4QJLQ2GDdtvntXeopzzunbuSgIhQUzYJEBLk5AtpJbQcNU5s%2FKuoAsYii0pFAhntaQMprc0Vw33scOD0KyKhw8dpjJpfiN4%2BAM438%2FovklwCYRuzQkh%2BVuBI52QvBXU4V6VzEzQaAISF0yYMW32lLTLVEd%2Fnc2Eai%2FdF86HLXbq%2Fe5wEG18MyCGCgVgYnPIspASFzu9mChOhmC8g2XfDXd9VJEFnO%2FbKkHhzL6PJRVVL2lsUnmtxUVMqB%2B2sduGw2O0uOUXpvh%2BxIQ%2FgTKq%2BLtVgwu%2BTmCG95sLU81p9TEzQMk8b13bQSIEMxB464yVwJeQynHQId97HUICRlWbFANXBXnwlvQyhSBMaL%2FDycoaZT42GaN1qkpRk6oHrmN%2F%2FciVMOOhqqUsK%2FD6CESbsZl%2F%2BorECDedEuKvBhuW8FMcyb5Ymcq83GuIIp31GOcZmeYG6lplYqQJZwZRCPgvv8ui3%2FHzscVKm2CxfimncPW3TsIYYPBeuCMkfyN6XIn2h9tVuq%2F83LcTZjNf2yThFsmQbEjlcgdr2MTNNXVPteqhLRVYwQVsEkewkEZNmYfVe%2B55hLU4vIh6UihZwiiBObdMMCTlsMGOqUBXoDW96Kkn74%2BqGssCyGsEV0UjhamzQzYh5cxrwkO8RPLoyh9gfmm4wEtSMbR7EUMR32%2BS454r6RN%2FSq99mb%2BgKC1K8KtDBmP9Jstg%2B0Wm6K2ja4vc%2FNor8A9wN3mT13UrQzJ1ToTalJ%2F0nbjkvA%2FTTgr29klENXixGDlpsQn9QjzP9eMABWVea7CoyR45Ej3tPCU9bLTiWS4zdSPMqJlr8UB8R1S&X-Amz-Signature=33584abbec1ef0ca8d7dac1c80303d9e77d2a795926360e2dd08a0220d5ac6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
