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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K67L7US%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjyJYMZoN0TXYogzOgymXBNPhKi40UzgUdbbozfxNLVQIhAPOton%2BfTh9Drf5%2Fks3sakM9FX23YTiG9jKvmYZMBzpWKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykzj9d1ZJHklj3UGoq3AOeEIF1kevJoH0k7WdJt9sGiqNe61WfUmEEsFm4gf6z0KNM5UBWt2%2Bz5rCGjmSiD9FCXHx6k8Aco6g8z58Apnh9DBwZk8MEqpFPJLo5q3E%2F%2FJ79811e%2FZt5f%2Fmw8%2BNwQFHYvnA%2FIPcJcPSp5b184PkpdLX04jPBIN9jzOhr5SY6OMyWzsAQqkSORiQI9ahityY%2BKGlwn4IVoGZGtz98tUfrvc%2B4fem9PdDhh5x%2FUgQHj4H8Kx0aidTeA4Qepf4wKHb7C18g6Es7sVYNlWPF71aomA39Ad%2BfMWs7cIHnJmXaMXcSCa3pKOCU35vpGyve3C1K9Vk1tc1lCNvxl1%2B1H%2BcMe1sXkTNG5HSd2%2BxTR6TWJRp31qrk%2FzMEpQgelDAsEKYVHTrtQc0A5boExraRz7qTlPB6EaEsk3iW39bsXM4izBzLPjiBYNN66rdcX8f1PihR1emXNZMrpuW1ml1RqPWKDhzo6FiLMKvjuherdfbzQ6PpNXDUDhCoQh6bHFUwb1s21PeEIxgF6N6ddIRBrps9RR%2BZAXh%2BOlocWFEnaYGP%2FqKP%2BWmG7oe%2FRyncmEPkyW3lPYCWesjG%2BZgfNCEPogJgv5TNZKsECxgQFytdKVlrVcUuJKGc%2BH54qziT0DDb0ti9BjqkASof7y6tODzV6mz6vLWjotXcSNIqDq2lygVkuAOC%2FygHE5FMtDnRri6TO5OPGcJ84KwZ0nYt5ZtISC1RsPjFcCzREyeLX85pi%2FYpePQ1kNelLzgWmuV%2Bcg3X6KCFLWS2Wf4XZC%2FoM7C2cnrMdGhSTo6f6UkiHIgViTu7J0eNyOd1jB8sGJtTkfrgmoUIPCfqU0JaXwvEZb8mSqm1IFeiTcKui57W&X-Amz-Signature=e172d4205905963cf514c62fe755919777e226d85e0ae2b8e15457ae956d5b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K67L7US%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjyJYMZoN0TXYogzOgymXBNPhKi40UzgUdbbozfxNLVQIhAPOton%2BfTh9Drf5%2Fks3sakM9FX23YTiG9jKvmYZMBzpWKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykzj9d1ZJHklj3UGoq3AOeEIF1kevJoH0k7WdJt9sGiqNe61WfUmEEsFm4gf6z0KNM5UBWt2%2Bz5rCGjmSiD9FCXHx6k8Aco6g8z58Apnh9DBwZk8MEqpFPJLo5q3E%2F%2FJ79811e%2FZt5f%2Fmw8%2BNwQFHYvnA%2FIPcJcPSp5b184PkpdLX04jPBIN9jzOhr5SY6OMyWzsAQqkSORiQI9ahityY%2BKGlwn4IVoGZGtz98tUfrvc%2B4fem9PdDhh5x%2FUgQHj4H8Kx0aidTeA4Qepf4wKHb7C18g6Es7sVYNlWPF71aomA39Ad%2BfMWs7cIHnJmXaMXcSCa3pKOCU35vpGyve3C1K9Vk1tc1lCNvxl1%2B1H%2BcMe1sXkTNG5HSd2%2BxTR6TWJRp31qrk%2FzMEpQgelDAsEKYVHTrtQc0A5boExraRz7qTlPB6EaEsk3iW39bsXM4izBzLPjiBYNN66rdcX8f1PihR1emXNZMrpuW1ml1RqPWKDhzo6FiLMKvjuherdfbzQ6PpNXDUDhCoQh6bHFUwb1s21PeEIxgF6N6ddIRBrps9RR%2BZAXh%2BOlocWFEnaYGP%2FqKP%2BWmG7oe%2FRyncmEPkyW3lPYCWesjG%2BZgfNCEPogJgv5TNZKsECxgQFytdKVlrVcUuJKGc%2BH54qziT0DDb0ti9BjqkASof7y6tODzV6mz6vLWjotXcSNIqDq2lygVkuAOC%2FygHE5FMtDnRri6TO5OPGcJ84KwZ0nYt5ZtISC1RsPjFcCzREyeLX85pi%2FYpePQ1kNelLzgWmuV%2Bcg3X6KCFLWS2Wf4XZC%2FoM7C2cnrMdGhSTo6f6UkiHIgViTu7J0eNyOd1jB8sGJtTkfrgmoUIPCfqU0JaXwvEZb8mSqm1IFeiTcKui57W&X-Amz-Signature=a1e87bcca310f23bc2b22bdd9109ef608e774922b7a554150cec59e710238406&X-Amz-SignedHeaders=host&x-id=GetObject)

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
