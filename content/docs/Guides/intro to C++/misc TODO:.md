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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXIXZ3L%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCslVE6kPqDi7WjsTabfVLAsVx4c51zbphHyOS%2FfaJk4AIgcGWJRReQYHRl8%2FkNrBlbosnUv2HnuXzGGxoVV4Fi3g8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Y04XTxlJGBUOSYircA27z%2BY3tss9fDd7vtVCjEn67R69wW7TusxCk5m79dwzjxIvGvt7DunVmIaMWmPmBwLsa2O%2FRuMpPZCQ8JNDEL0%2B6H2US%2BwFYtLQDnxoHN8zyDQXGXXilLt0xk%2FqUx%2F6DATljNHR86ep%2FBnXA04VALC9zRS4K4SZpWAG8kfjLF6gGqPPyZEhiWl2fiM%2FsUo5K0lGNbx72dUmr%2B3m0xiMi1a%2BpdzjKI8oDeHxBkCL0NVbOr50IPG89k13bYzJlFkLaPlf1M1X6KYORgZRGeIqN3Fc7vjeV4OS0rJs%2FRVHYqFe%2Buu65LPlNKOBFyCt5lyK4bpIYxHKNMHxfoyJaIN8FIHpzBQMAKduozHR0%2F3iz5gb2EzeiY8irfPeS9QT8ywf1oB2EZ0edHcp%2Fbcc9g0owAA4Xqpu9Edwi3AVqQByI7e%2Fv5hOptUWspcDWmSYsH9sQdH%2FPFKDp339Mi4Kytjb95HHajAPSP2cuYXDGbGGnO1%2FJnw%2BdM80JS4vcQW6tnrmMYTKJmEZedZHoE%2FWxHCK40wOrpPsiRhY9aeXRU7AUd8m1XqgbmY%2BXJTRioeDG9eONUEzFFth5OOUUECgPaswbusWg8n1zuLyVJq2Ze9jVxFtFK8qKab%2F71uP4H6GGMO2S98MGOqUBCv2aIb%2Bha4FMLm0gjafw62zuFKUOiswCBdmHVVBJ801AC7fdzCUPwwyvqY%2BiYt7qWCCVct75Jn8q%2BBaqe9JXLRWQOJsSxsq39rYPySUsUjgR1B9%2F86SwFK4QOiG1mgj8aPLOORBFSk98fpxMsJo1naluAP6WQpNiVkioeaiLAwbLjTnCXv6WP1NBZuDRQVVYRBbqwiq60d83RSvqZIyw5siHKFMR&X-Amz-Signature=f20d577b80dbab871f6da5a53f7e92aa46a02e7c74c2c99e3225e5e737d8d09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXIXZ3L%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCslVE6kPqDi7WjsTabfVLAsVx4c51zbphHyOS%2FfaJk4AIgcGWJRReQYHRl8%2FkNrBlbosnUv2HnuXzGGxoVV4Fi3g8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Y04XTxlJGBUOSYircA27z%2BY3tss9fDd7vtVCjEn67R69wW7TusxCk5m79dwzjxIvGvt7DunVmIaMWmPmBwLsa2O%2FRuMpPZCQ8JNDEL0%2B6H2US%2BwFYtLQDnxoHN8zyDQXGXXilLt0xk%2FqUx%2F6DATljNHR86ep%2FBnXA04VALC9zRS4K4SZpWAG8kfjLF6gGqPPyZEhiWl2fiM%2FsUo5K0lGNbx72dUmr%2B3m0xiMi1a%2BpdzjKI8oDeHxBkCL0NVbOr50IPG89k13bYzJlFkLaPlf1M1X6KYORgZRGeIqN3Fc7vjeV4OS0rJs%2FRVHYqFe%2Buu65LPlNKOBFyCt5lyK4bpIYxHKNMHxfoyJaIN8FIHpzBQMAKduozHR0%2F3iz5gb2EzeiY8irfPeS9QT8ywf1oB2EZ0edHcp%2Fbcc9g0owAA4Xqpu9Edwi3AVqQByI7e%2Fv5hOptUWspcDWmSYsH9sQdH%2FPFKDp339Mi4Kytjb95HHajAPSP2cuYXDGbGGnO1%2FJnw%2BdM80JS4vcQW6tnrmMYTKJmEZedZHoE%2FWxHCK40wOrpPsiRhY9aeXRU7AUd8m1XqgbmY%2BXJTRioeDG9eONUEzFFth5OOUUECgPaswbusWg8n1zuLyVJq2Ze9jVxFtFK8qKab%2F71uP4H6GGMO2S98MGOqUBCv2aIb%2Bha4FMLm0gjafw62zuFKUOiswCBdmHVVBJ801AC7fdzCUPwwyvqY%2BiYt7qWCCVct75Jn8q%2BBaqe9JXLRWQOJsSxsq39rYPySUsUjgR1B9%2F86SwFK4QOiG1mgj8aPLOORBFSk98fpxMsJo1naluAP6WQpNiVkioeaiLAwbLjTnCXv6WP1NBZuDRQVVYRBbqwiq60d83RSvqZIyw5siHKFMR&X-Amz-Signature=cefafd182763501db28c2743f483b3cd4fb6c8b3b851538c1682bea48da26d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
