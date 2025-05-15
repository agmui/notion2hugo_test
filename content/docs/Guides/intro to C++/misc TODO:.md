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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ5KRJZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDh4re6nyOVZEino1AUNRQyiRKFFNQpnOyuvdi%2FlQzjPQIgC%2FRaN9LlvYTCn9rhjpzrVl%2Bs1ihdGEhllpRQPi%2BS8aIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpQxSrjgePktwV35SrcA8J2fWFW9CMhdrxtG1gT1KVY0%2Fd1lhLT3ERYKVV0YKuKVGmvQrgOMkCe1S5ygU6PpPSqShiI0ykbBPKQOlRFy9zcYErFDEWPrs7UpCAnf9VOyJqCtx8AhgGH%2BR%2B0eksuWPFcuGZTYRNt%2BnaNpYlYmVQG5VMX8jgsJNf6GrFbEombkbB%2FNfdxQFeKby7Nf4Wopqq78OvK8vlDLBXZv%2Bbs2%2BaXJ6qWeenmUAi4gtNfcMOtz%2F8xgk5kdUqa1Zc7p%2B25gfkcJdlxdLAoeDYpYRuYXB9cyy0El3U0qbpQohaDJrb%2BBuUM2muIpj%2FX4jiLcb0ItLBp7gV8tvQ1bMJ1tDOWMjwqLGfWEmAyytJS5Frjdcln%2BeeHi9QwOJ0Uvrg4hPOYWLFghD5DwTX0kPmKEqaFlFnzB8T32KPDxkMbjcRFoZ7AuR65Bh%2FM2mm4HSXmWxMPDyovgWHOQAXvtKO2AnRHjEEIQ8XDmS%2FkfvF3FLgdEZ%2B%2FvwiTIj5U2MjPtnOsF752qyX8R3FTORrNJGVg%2BOu1Gge%2BXNUMjFLvLPlsx7yVXB6eTqfyKYmWj9pC8ExSpwMkFHI2uRfUhxqvZbooEb2KkBAR5SSNvi02AoMHPIrglVXDGJkPrhGCgRO5GhY7MKfJmcEGOqUByl7C7FemZfVFRyUt%2FwiNqIRutWp5PyrGamFvHOnuBYHI3V%2FcUSdKv1vyTM%2BrwmzTtnZXuabuedmHvr43ncy4TTzQ%2BAKyutx7SoGTOcqZ2y9Sl7BwrqysiWHGaHb5sfk62i64G7mgJyKOG8U%2BEFf6je%2FO%2FQm87JbSuN7bJOUydK8AfAEbCCMHuRUPBpyexQp8e2krNicPQQsIhkk5OYgQHyamvkig&X-Amz-Signature=510b71334a99c6c446d08186cec9198b5b0888a9b21db3123eaf99da8a1c5339&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ5KRJZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDh4re6nyOVZEino1AUNRQyiRKFFNQpnOyuvdi%2FlQzjPQIgC%2FRaN9LlvYTCn9rhjpzrVl%2Bs1ihdGEhllpRQPi%2BS8aIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpQxSrjgePktwV35SrcA8J2fWFW9CMhdrxtG1gT1KVY0%2Fd1lhLT3ERYKVV0YKuKVGmvQrgOMkCe1S5ygU6PpPSqShiI0ykbBPKQOlRFy9zcYErFDEWPrs7UpCAnf9VOyJqCtx8AhgGH%2BR%2B0eksuWPFcuGZTYRNt%2BnaNpYlYmVQG5VMX8jgsJNf6GrFbEombkbB%2FNfdxQFeKby7Nf4Wopqq78OvK8vlDLBXZv%2Bbs2%2BaXJ6qWeenmUAi4gtNfcMOtz%2F8xgk5kdUqa1Zc7p%2B25gfkcJdlxdLAoeDYpYRuYXB9cyy0El3U0qbpQohaDJrb%2BBuUM2muIpj%2FX4jiLcb0ItLBp7gV8tvQ1bMJ1tDOWMjwqLGfWEmAyytJS5Frjdcln%2BeeHi9QwOJ0Uvrg4hPOYWLFghD5DwTX0kPmKEqaFlFnzB8T32KPDxkMbjcRFoZ7AuR65Bh%2FM2mm4HSXmWxMPDyovgWHOQAXvtKO2AnRHjEEIQ8XDmS%2FkfvF3FLgdEZ%2B%2FvwiTIj5U2MjPtnOsF752qyX8R3FTORrNJGVg%2BOu1Gge%2BXNUMjFLvLPlsx7yVXB6eTqfyKYmWj9pC8ExSpwMkFHI2uRfUhxqvZbooEb2KkBAR5SSNvi02AoMHPIrglVXDGJkPrhGCgRO5GhY7MKfJmcEGOqUByl7C7FemZfVFRyUt%2FwiNqIRutWp5PyrGamFvHOnuBYHI3V%2FcUSdKv1vyTM%2BrwmzTtnZXuabuedmHvr43ncy4TTzQ%2BAKyutx7SoGTOcqZ2y9Sl7BwrqysiWHGaHb5sfk62i64G7mgJyKOG8U%2BEFf6je%2FO%2FQm87JbSuN7bJOUydK8AfAEbCCMHuRUPBpyexQp8e2krNicPQQsIhkk5OYgQHyamvkig&X-Amz-Signature=2e8d7f292c1fd98757198b95029f3fec37f65e93174653c00fa50186c74183da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
