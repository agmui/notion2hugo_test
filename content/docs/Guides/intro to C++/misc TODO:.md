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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3FKK5M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIH2sgFkRZzdVaWoSz4X72YuDIFNqcnRqFzxUgLH4sSw9AiBagEG3sMOafbkM6cAFbF2a8hEXY09ZNWNb4%2BU10%2BdENyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkk1acC1Xvr%2FvBNdKtwDaOGsXZNtVOXmUYn7yZuiCg4AuV%2Bm%2Bo1rOEwSaHoh4qy%2BgqSrc13tE1OWVvBMYq2Idc754oDTc2dOSCH4TcI1%2Fo98QQxuUqXNL8%2Fx%2F3mEAOs3%2Fg1VCd5vrptdGA7e%2F8LzBHl2Qa2aD6lO6p0zos4wmLwy9mj50V1csoyV412%2FtkyVuGq%2FUkeKU%2FOZLZ5gKr4II1bpHJNWGSGMTlCQWylEaMA%2Bqa02bRPk%2FP%2Bj4pcViTSKtXDVUDIBvYyilI0PNbI9uSjzPigyfbFnSTdjkjlad8ViNEiZKtYkoSMRERNfIykzkjeBgyZHwnEkbIOowN7HjQ6vtM1xdbbjYTvZYswB0hsbAKBGBS6HyG%2BLPubq%2F9u4mwXzZlKZtqTlLQ2dYg3FOEDeyT7etwhk%2FFuShAo5q%2Flq%2BMb19hTHbfnGnFghUUqz8nCTInWauZMl81Sk8j2Bf4fvoVFkOxgWrkAVAAE74gYFejTClJZr%2FutON00vJ327%2FrZZcPhwaLAD4IBJJvzzvd8czo%2FEbR4TfaZARrcTmbMDbhFTSoo3Ix9NfjS9ZR4nfjA%2BlhXpH1ZBySNdX%2FJWCCwcsq3HD%2FX9w3abBOt55U7I7fRy5l%2Fzs%2B86R8mf8pxEaB%2BAOr6NPA6gZUUwhuitzQY6pgGhA8sDA0nrWDOF90TrlHJkJ%2BOeqcjfBPy5l2n7ngbysrPI%2FI9I%2BXofSROzSlGypF2UX%2BkUN164Vf38ZNsyZHD8g2C00QlrT2mdajUVgJADXT27UIWdIP7ijv9xPUXOShAivSdnRyzF8RLt1AVvpk8%2BYSirocGcu%2B89RBKt4OJo0yFzhdDd%2B2fD80lh2dbbYc6fcnZIGxMVML%2BPP%2F7OS4CikuHFfdS8&X-Amz-Signature=f570a9676ce3570e808aef564d66db3dd89b9367716125e4f44094ab285eac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3FKK5M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIH2sgFkRZzdVaWoSz4X72YuDIFNqcnRqFzxUgLH4sSw9AiBagEG3sMOafbkM6cAFbF2a8hEXY09ZNWNb4%2BU10%2BdENyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkk1acC1Xvr%2FvBNdKtwDaOGsXZNtVOXmUYn7yZuiCg4AuV%2Bm%2Bo1rOEwSaHoh4qy%2BgqSrc13tE1OWVvBMYq2Idc754oDTc2dOSCH4TcI1%2Fo98QQxuUqXNL8%2Fx%2F3mEAOs3%2Fg1VCd5vrptdGA7e%2F8LzBHl2Qa2aD6lO6p0zos4wmLwy9mj50V1csoyV412%2FtkyVuGq%2FUkeKU%2FOZLZ5gKr4II1bpHJNWGSGMTlCQWylEaMA%2Bqa02bRPk%2FP%2Bj4pcViTSKtXDVUDIBvYyilI0PNbI9uSjzPigyfbFnSTdjkjlad8ViNEiZKtYkoSMRERNfIykzkjeBgyZHwnEkbIOowN7HjQ6vtM1xdbbjYTvZYswB0hsbAKBGBS6HyG%2BLPubq%2F9u4mwXzZlKZtqTlLQ2dYg3FOEDeyT7etwhk%2FFuShAo5q%2Flq%2BMb19hTHbfnGnFghUUqz8nCTInWauZMl81Sk8j2Bf4fvoVFkOxgWrkAVAAE74gYFejTClJZr%2FutON00vJ327%2FrZZcPhwaLAD4IBJJvzzvd8czo%2FEbR4TfaZARrcTmbMDbhFTSoo3Ix9NfjS9ZR4nfjA%2BlhXpH1ZBySNdX%2FJWCCwcsq3HD%2FX9w3abBOt55U7I7fRy5l%2Fzs%2B86R8mf8pxEaB%2BAOr6NPA6gZUUwhuitzQY6pgGhA8sDA0nrWDOF90TrlHJkJ%2BOeqcjfBPy5l2n7ngbysrPI%2FI9I%2BXofSROzSlGypF2UX%2BkUN164Vf38ZNsyZHD8g2C00QlrT2mdajUVgJADXT27UIWdIP7ijv9xPUXOShAivSdnRyzF8RLt1AVvpk8%2BYSirocGcu%2B89RBKt4OJo0yFzhdDd%2B2fD80lh2dbbYc6fcnZIGxMVML%2BPP%2F7OS4CikuHFfdS8&X-Amz-Signature=c551b41a37fcce691570802673bc553c85078d19cbb0555d53745807470dfc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
