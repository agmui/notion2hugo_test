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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6HA3KP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAGfkib23s%2FpHsHGaL%2FvtG3H9X88rCB9k0I4f2qJe1bIAiEAvYor%2FXZqzWJou4yp5EmOu5bxB2bwmBA1jOjiDlYW%2B%2BcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHL3CqHLg1S5hCwXCrcAw3FG2BR1pFgF7KY%2FRFQI32vwapEtjf0O6eofnKq6fHiJTq%2B%2FwmECM9w44aWltNOH141561H%2FuNaYk%2B2WOBsWDnnT%2Bzxo69n95XnxXHUtH21N%2FqUOnkIzOOJZkEmvBtxdEmg%2Fgw0A8m0GfHuLrT31hB6s4qAh8XKVDxQ9QStnLZutbAhZw44DOngk8fLM5UR9LFT0K4y%2FkxfxqG%2B21%2B%2F7U0ogFDFjAahzU5qBXwbxvd1lB8YeOSlZ5xsKJxxEjuoKATvo6GWac%2FOLlNzbhCY8%2FwDHZuFuiz7Pd07YqCPrh2tTtB1kvSMMV6udaq%2BYe4zUzaFf%2BPz2NcG%2B7BrE%2BRUM9EMxeyKknymatuGIsL7K42urQYRLM8Es7k50STa%2BIM0osAoVKKBYN9pXFXYWnqdlR%2Bs3W3o%2Fk%2Be0XtWURltjaIf7DTaM7hRFF9wn9Ika2Ri1Tq3vB%2FQo7rUlqI%2FVEijzAGIM%2BL0BHbcnNSHXR%2BI4ug%2BkCRB%2FgDfBlrzKHR86Lc239cYG8nxja%2FTEHRbCJnQV4UXmTrgacFibIzergTgA55pEjm%2Fuf1TPCAvMXUKZQjLLbhA5AeaLd%2FB5cNYijpyPp5jgAEHlAsmnUXIkHPhporL4hFUOJ%2F97HpPgFKPMLbu1cAGOqUBmoAGxPZpvKm94Xv0Hrpr74roG6Clfomo8kwSxHSZGZtLaP5cLNrG5RF6cguR5N6ySWJnSd83GR8yeTlNO48007s1%2F4HzGG5219wm4nF7KvOlEirq5viHTi5v2aPDjRILUj95mm%2F1N1l3UOLLUnugS6m4afb%2Fo3phwXGBOsIbphmSgeSwCQmOO7cJbm2jGRUvap6aK0X2hZpsxOW5XH%2BifmCFJdpZ&X-Amz-Signature=1ef5c4d2a0588fead98a4b2be6a62b271e53e958a9dcebeadbb8c81fc0631ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6HA3KP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAGfkib23s%2FpHsHGaL%2FvtG3H9X88rCB9k0I4f2qJe1bIAiEAvYor%2FXZqzWJou4yp5EmOu5bxB2bwmBA1jOjiDlYW%2B%2BcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHL3CqHLg1S5hCwXCrcAw3FG2BR1pFgF7KY%2FRFQI32vwapEtjf0O6eofnKq6fHiJTq%2B%2FwmECM9w44aWltNOH141561H%2FuNaYk%2B2WOBsWDnnT%2Bzxo69n95XnxXHUtH21N%2FqUOnkIzOOJZkEmvBtxdEmg%2Fgw0A8m0GfHuLrT31hB6s4qAh8XKVDxQ9QStnLZutbAhZw44DOngk8fLM5UR9LFT0K4y%2FkxfxqG%2B21%2B%2F7U0ogFDFjAahzU5qBXwbxvd1lB8YeOSlZ5xsKJxxEjuoKATvo6GWac%2FOLlNzbhCY8%2FwDHZuFuiz7Pd07YqCPrh2tTtB1kvSMMV6udaq%2BYe4zUzaFf%2BPz2NcG%2B7BrE%2BRUM9EMxeyKknymatuGIsL7K42urQYRLM8Es7k50STa%2BIM0osAoVKKBYN9pXFXYWnqdlR%2Bs3W3o%2Fk%2Be0XtWURltjaIf7DTaM7hRFF9wn9Ika2Ri1Tq3vB%2FQo7rUlqI%2FVEijzAGIM%2BL0BHbcnNSHXR%2BI4ug%2BkCRB%2FgDfBlrzKHR86Lc239cYG8nxja%2FTEHRbCJnQV4UXmTrgacFibIzergTgA55pEjm%2Fuf1TPCAvMXUKZQjLLbhA5AeaLd%2FB5cNYijpyPp5jgAEHlAsmnUXIkHPhporL4hFUOJ%2F97HpPgFKPMLbu1cAGOqUBmoAGxPZpvKm94Xv0Hrpr74roG6Clfomo8kwSxHSZGZtLaP5cLNrG5RF6cguR5N6ySWJnSd83GR8yeTlNO48007s1%2F4HzGG5219wm4nF7KvOlEirq5viHTi5v2aPDjRILUj95mm%2F1N1l3UOLLUnugS6m4afb%2Fo3phwXGBOsIbphmSgeSwCQmOO7cJbm2jGRUvap6aK0X2hZpsxOW5XH%2BifmCFJdpZ&X-Amz-Signature=015525e64abe4d36b99bf18b9590dfd59671128d3fdb3dae11c016a1a7e0e4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
