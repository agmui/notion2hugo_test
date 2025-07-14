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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCU6OF6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDjIPupBR2AdBa2SdDNbVVeILRDH%2B1EolHx8d1nhG45ZgIgb6J8Lg8FKhF9oZ3swA3TobeVud94Ce6uIVuIBcBob1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGlaCNXQAIZFRzfBYyrcA5aqJAcUKC9KE54U%2FxMGKGVUKmyhNhU4mgmQQsRp1YbZaf%2BItWVAj0sL7On4cIGX%2FHinrO4EXSZbZC3VZ2DMHw6Q%2BJGDOKR42SpsSdi9CDfjxW7Yb7GHiwp9P3bekBNqmf4wcDY8uSyuUcM7mDF4%2FhzlDKFwDLs7CPTM73AdK%2Fdh9LWZvHCPnCkh1uJQt4J0VjJLS81s9bKz%2F%2B33asyLbeGM%2F36tEL70m5gHCpA%2BdxRSG5xrWGXsLhz1nTC4%2F0jIco26jXxKIdoniL1Th34cI89PtJIquaSr14v23%2BTTaqDX1gtavCZwxnLbmMDqjQwwpXKi6nW1iBckxyjwsCfvPefAq8h%2BkMbaO7LNprfEK9Xy5ZcnUrmDMRvlWzKQDAFNlyPw8ILpfDJ68J2D1%2Fkm7F78XqhSdHIMtKqpzfGJSPMrWxDHoF5Zulg2LwxQFf5l%2BiVBX6dF8YjXuu8%2BavyRUlm5HLp3TbhEfvj3Bs60jljBBymyFZp%2BpmF38w0KvtfB%2BxNykcNOKO5YKfJxsDxl2iNa6aAYU2VsjZL5DMzrjeGcHRN0Zo5lWbKwHT9%2B9XwHkSlyT7xL66tfJigNCa9ohoCo9AHjHTRCtoZqzWwR5lDCF7N%2BwTyAPPuu%2B6OlMPWi0cMGOqUB2U3a2GlKsSetzC6HKiuklu7L3S1IWGnXLA3IGCr%2Fc9Xq3Ypu8e2Jy%2BsqDeYzRDY7J3E%2FMnvprONv0P4vOHoXYsLN%2FB0hx4XB8iVYj1Fn3y%2FX1ipbUH26RJ3Df%2B0euak1%2BL42TWphT8WDXLrUEecJRvvTIMsp2tdFd7z1IDxdZseDkBfy0PJAFa2OHArMaRRhIF9yTTOYmNHEQEwLNN%2BMdFDwibsW&X-Amz-Signature=723b36868a41a1f85efd1e2a1130ef6d058c3d5e673f7954253dccbeefe3e9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCU6OF6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDjIPupBR2AdBa2SdDNbVVeILRDH%2B1EolHx8d1nhG45ZgIgb6J8Lg8FKhF9oZ3swA3TobeVud94Ce6uIVuIBcBob1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGlaCNXQAIZFRzfBYyrcA5aqJAcUKC9KE54U%2FxMGKGVUKmyhNhU4mgmQQsRp1YbZaf%2BItWVAj0sL7On4cIGX%2FHinrO4EXSZbZC3VZ2DMHw6Q%2BJGDOKR42SpsSdi9CDfjxW7Yb7GHiwp9P3bekBNqmf4wcDY8uSyuUcM7mDF4%2FhzlDKFwDLs7CPTM73AdK%2Fdh9LWZvHCPnCkh1uJQt4J0VjJLS81s9bKz%2F%2B33asyLbeGM%2F36tEL70m5gHCpA%2BdxRSG5xrWGXsLhz1nTC4%2F0jIco26jXxKIdoniL1Th34cI89PtJIquaSr14v23%2BTTaqDX1gtavCZwxnLbmMDqjQwwpXKi6nW1iBckxyjwsCfvPefAq8h%2BkMbaO7LNprfEK9Xy5ZcnUrmDMRvlWzKQDAFNlyPw8ILpfDJ68J2D1%2Fkm7F78XqhSdHIMtKqpzfGJSPMrWxDHoF5Zulg2LwxQFf5l%2BiVBX6dF8YjXuu8%2BavyRUlm5HLp3TbhEfvj3Bs60jljBBymyFZp%2BpmF38w0KvtfB%2BxNykcNOKO5YKfJxsDxl2iNa6aAYU2VsjZL5DMzrjeGcHRN0Zo5lWbKwHT9%2B9XwHkSlyT7xL66tfJigNCa9ohoCo9AHjHTRCtoZqzWwR5lDCF7N%2BwTyAPPuu%2B6OlMPWi0cMGOqUB2U3a2GlKsSetzC6HKiuklu7L3S1IWGnXLA3IGCr%2Fc9Xq3Ypu8e2Jy%2BsqDeYzRDY7J3E%2FMnvprONv0P4vOHoXYsLN%2FB0hx4XB8iVYj1Fn3y%2FX1ipbUH26RJ3Df%2B0euak1%2BL42TWphT8WDXLrUEecJRvvTIMsp2tdFd7z1IDxdZseDkBfy0PJAFa2OHArMaRRhIF9yTTOYmNHEQEwLNN%2BMdFDwibsW&X-Amz-Signature=b02f9a893a1806800f8e0511cdd0e38253c2d157da6c277abdfb4346732c2690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
