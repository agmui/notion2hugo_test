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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXBAUDI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkm2YQamnstLKSeuiQs1Y%2BXfyB0VUxvOhcHJr7sDzpgAIgbTMFQ3RSTyE6W0g96t3QZ65PjnI4WZtWx90FgcXXfVQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG4gswfwzcFRw77zrCrcA8iWNmv4P1as0741X1sU19UYznOte5iB0gKViTZVQUBjFWy5rp8%2Bww4ILwG5VEq0kblDdwpr1FdXbKYfDya94nQo%2Bl8f75hkz8yebSzqP%2B%2FL26MfabmfOX2cZokGc%2FiFxAloiHx08Hf9yifoQkeTZsjcC92%2Fxc56tH8UNI73z761ltYOgMkqTb7GM9fCH4vRWL9Hvj3c9Lr%2BKNRvApFAbeiuXF3yGVqPitip8aGadbpk8D3i6dSMzp%2Fdeoe%2B9cY5dGR2vWAr7gBSXt4tn%2F1UBPkGd558PARfDcC%2BpMDhvUMUtkRXYALD53PDxLX4VBdniDZjgibf3lJadMFMm%2BTlb3zPDISFX%2Bw9Hu5jkGKq7RM80sCokDu2mEcJRquuNkRIIKrQBprwapAe%2BUd2t13zaeEIA4osv01rv5cQQJl7QfCDLDq%2B3t5iDDQgehTqlhtevv%2BBpF1OV0H07NA4maQrXCQW%2FBWP6%2FY%2FLyOlEVjMuTK39Rap6iHfEDQxfzzkRkJrt0HagaUbs6Eq%2FYkBsC3BtcpZITUC0kZHdhFpoO0ktS9vsHz3d2KHtWpOTv7rpxM7drrOT5arhh0oQWGXb8X1x1zVkvzUKO3BOB0PII1Qtog0RqVxv0e3Gy5G0Y1SMP2qo8MGOqUB5PnU9nYH6WZ9uudDrMU8X%2FkADcO3o1jghANoH%2FASQYKOctTOUhi46aKRBBeKxwYraDC%2FIF%2Bxr2%2FsAM8rZLieOcojArCQ%2ByDhPMPumi5XpevBvYZJs9lHcAhb%2Fat7y4KbNvwc6V8Awi5%2FKQbGMObLNuaSE%2BpU%2FJt3Mjyt%2B%2FvE9H2uc2u3lfxbLM0NCjCe1hiVvVcIY2G4tF0N7m6ZZOsP7z3a2yGD&X-Amz-Signature=56bc0496606a22f25b20a73048f1ca79deeb6a20cbd7e07e0d1e4168c8f92c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXBAUDI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkm2YQamnstLKSeuiQs1Y%2BXfyB0VUxvOhcHJr7sDzpgAIgbTMFQ3RSTyE6W0g96t3QZ65PjnI4WZtWx90FgcXXfVQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG4gswfwzcFRw77zrCrcA8iWNmv4P1as0741X1sU19UYznOte5iB0gKViTZVQUBjFWy5rp8%2Bww4ILwG5VEq0kblDdwpr1FdXbKYfDya94nQo%2Bl8f75hkz8yebSzqP%2B%2FL26MfabmfOX2cZokGc%2FiFxAloiHx08Hf9yifoQkeTZsjcC92%2Fxc56tH8UNI73z761ltYOgMkqTb7GM9fCH4vRWL9Hvj3c9Lr%2BKNRvApFAbeiuXF3yGVqPitip8aGadbpk8D3i6dSMzp%2Fdeoe%2B9cY5dGR2vWAr7gBSXt4tn%2F1UBPkGd558PARfDcC%2BpMDhvUMUtkRXYALD53PDxLX4VBdniDZjgibf3lJadMFMm%2BTlb3zPDISFX%2Bw9Hu5jkGKq7RM80sCokDu2mEcJRquuNkRIIKrQBprwapAe%2BUd2t13zaeEIA4osv01rv5cQQJl7QfCDLDq%2B3t5iDDQgehTqlhtevv%2BBpF1OV0H07NA4maQrXCQW%2FBWP6%2FY%2FLyOlEVjMuTK39Rap6iHfEDQxfzzkRkJrt0HagaUbs6Eq%2FYkBsC3BtcpZITUC0kZHdhFpoO0ktS9vsHz3d2KHtWpOTv7rpxM7drrOT5arhh0oQWGXb8X1x1zVkvzUKO3BOB0PII1Qtog0RqVxv0e3Gy5G0Y1SMP2qo8MGOqUB5PnU9nYH6WZ9uudDrMU8X%2FkADcO3o1jghANoH%2FASQYKOctTOUhi46aKRBBeKxwYraDC%2FIF%2Bxr2%2FsAM8rZLieOcojArCQ%2ByDhPMPumi5XpevBvYZJs9lHcAhb%2Fat7y4KbNvwc6V8Awi5%2FKQbGMObLNuaSE%2BpU%2FJt3Mjyt%2B%2FvE9H2uc2u3lfxbLM0NCjCe1hiVvVcIY2G4tF0N7m6ZZOsP7z3a2yGD&X-Amz-Signature=0319fec38b89bbb6f1729dd2b9d0254a5fb8be114168f8dbb137f98bab31b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
