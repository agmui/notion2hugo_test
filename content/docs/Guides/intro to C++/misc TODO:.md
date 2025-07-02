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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VUSYJ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3hXhopWkcCoafebfRmCPVgzecuoXs%2FAJHp2LcFQHrVgIgQh%2F%2F1wpsnFEcyunzMPPKDDsI24n3lMCdGIrGPSQ1uugqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvv6C7zuWk99092DCrcA8odPkjeQIS7P9YeOQA4P1nkrswqMs6y7cgMLTJvUP%2B7ivUkprn2L%2Fg2%2FBASpwVH4na%2FuOuB%2Bd65ypbk5l%2FFINMB4A5pjanJqdpJ%2FxlX%2Fm0q7FgzthgGn2rjQR2aiZRdbpa1CKrq%2Bf218PIsxgVj9RXydMo5Mtn3RqpYBCvW8IDtqQ4JWGL2tYLNlTa9D8%2FAR5WXkFqvyhViCBHd9AYUiPknmTFlkMUkSowSBSfmS7CutBir%2FBmGbflhAt9rcgQTQdI6I7CbwI9iWRURzX0hJCBNuOWMj51xdGcWRjrLfSTFOJg5Mpe%2FdKbEu53h6z3Yj5eA%2BxLVqlf%2FCKGAfRZFraaLCluw3Pm%2FxFr9JmTVxz9bWYei2TcylmvujcEHLxYJ%2BfymnyzOtm6IEmcD9dKev2mPSOay6JXWsZe%2FtSwPdGS3N2VbJJb%2Bj2Py%2FWykVQhZJ6DIQYM4Bgr3s8hEMfIex3YAerniP40efVTOptBAd8RFnf%2FWnW0hTlPjif1EOH9OxAAsvRqtRfTSKm%2Fh3d%2F8GD3kNEVyNKGfzMKAy3VhfkB%2BCZ8ACebGHX8r5UKmREvGxTRacphL3AmRN1R3qXGESJSCL2470CO8gBv39FcuFvvRZmACv3TamkZmfZbNMMjaksMGOqUBiWV4TMR%2F%2FvHRmTPhWCgWQez7GvYtEXpUtdbNhMnmBIkDIkfGCYH4ptIRpSgfxkZBlJhtdofMd%2BCWqWzJaY0xO01m7kKWsl2nZ4OR9VHsCcgs6Swd0njMEy4QAneo%2BahyEBySidL7hRUVJdEC7tEt6UFcSyFd7hz5wVMdarU2iCSU7xC2r8%2BRjbpb9nykAiLBN3tmvcd28ds2nxOIj1s4lcjUusTI&X-Amz-Signature=75899762ba60e7e267de2a35baa04a7fcfd3de4d444a584d9941ee9180b0af87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VUSYJ4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3hXhopWkcCoafebfRmCPVgzecuoXs%2FAJHp2LcFQHrVgIgQh%2F%2F1wpsnFEcyunzMPPKDDsI24n3lMCdGIrGPSQ1uugqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvv6C7zuWk99092DCrcA8odPkjeQIS7P9YeOQA4P1nkrswqMs6y7cgMLTJvUP%2B7ivUkprn2L%2Fg2%2FBASpwVH4na%2FuOuB%2Bd65ypbk5l%2FFINMB4A5pjanJqdpJ%2FxlX%2Fm0q7FgzthgGn2rjQR2aiZRdbpa1CKrq%2Bf218PIsxgVj9RXydMo5Mtn3RqpYBCvW8IDtqQ4JWGL2tYLNlTa9D8%2FAR5WXkFqvyhViCBHd9AYUiPknmTFlkMUkSowSBSfmS7CutBir%2FBmGbflhAt9rcgQTQdI6I7CbwI9iWRURzX0hJCBNuOWMj51xdGcWRjrLfSTFOJg5Mpe%2FdKbEu53h6z3Yj5eA%2BxLVqlf%2FCKGAfRZFraaLCluw3Pm%2FxFr9JmTVxz9bWYei2TcylmvujcEHLxYJ%2BfymnyzOtm6IEmcD9dKev2mPSOay6JXWsZe%2FtSwPdGS3N2VbJJb%2Bj2Py%2FWykVQhZJ6DIQYM4Bgr3s8hEMfIex3YAerniP40efVTOptBAd8RFnf%2FWnW0hTlPjif1EOH9OxAAsvRqtRfTSKm%2Fh3d%2F8GD3kNEVyNKGfzMKAy3VhfkB%2BCZ8ACebGHX8r5UKmREvGxTRacphL3AmRN1R3qXGESJSCL2470CO8gBv39FcuFvvRZmACv3TamkZmfZbNMMjaksMGOqUBiWV4TMR%2F%2FvHRmTPhWCgWQez7GvYtEXpUtdbNhMnmBIkDIkfGCYH4ptIRpSgfxkZBlJhtdofMd%2BCWqWzJaY0xO01m7kKWsl2nZ4OR9VHsCcgs6Swd0njMEy4QAneo%2BahyEBySidL7hRUVJdEC7tEt6UFcSyFd7hz5wVMdarU2iCSU7xC2r8%2BRjbpb9nykAiLBN3tmvcd28ds2nxOIj1s4lcjUusTI&X-Amz-Signature=5c1aa954082cfa95f9a941cfb238cc672d9d360932866b12bd9fb3a4e26ab1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
