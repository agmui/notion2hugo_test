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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7QXXU6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3jcVeiE4CVZbpP5QgCxl2juKECKNIpvJFV1Z4QbUpvAiAnrZAczwTJdZHJ3MTAmcHAVuACzXgXZuzAmLM4v7PZAyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMuyyTF6PXCi37prgCKtwDQMr3tOjE98H9XG2T74SeIL47Kw5ZyffrzEbk7vRUDZwB9awcVt5pQNgT8bgXrh0c%2B5qj9MB0kq%2FhFgcNNvZ8eh5d3K0TMgGrNt3wb4GuoC3bPorFXEO%2BQnhKsIjBxReWXhF7oVOe4Fh0JrA%2FuiYcznioP3%2Bc2gTPBc3%2FVkH1USLiWvKHAtYHyaPPJqji%2FEl3iYEJ0CT3bF%2BERTKmFLK0C%2F%2FEgomXMoZ72Vwu0BjnN3wtAq4cBMRphhRuEKrISrEegRqi78Yu7DiISf%2FiqSg1UCRpopGjIhM1GYHl4GGHa0trGzbE0w5HX1hPq%2B8Ma0SONbzMQAgrUisR2%2F%2B2X64kMSWRBtg1Z2RvPX2iFjdfLFULsMohX%2F9Kq2%2Fp4g41JQzSbGSnKYuL9nUOokO%2FTBzeIjUsGTYgGZ6mSbaZhjqU4lXSC%2Fp%2B2AdRZgt509bilFJk7yM9rawslrMwhOrBmSMeiGtqkM%2Bhm454DGtYOvCH78FN1GAthFlB9G1Xr3dmsyjMck0czdL2GR0PzAioWCqTiwoJ9eDTBa1971q0ackci0auDFL82K3Kwi3NvDefYkKgTpOB5WsdmcK2I5J7tcMmJyytZzB8CNGklD8DbrtcNlW%2BY6%2FuJMDoloSdTXUw07TMvwY6pgHUNZiNfETqCCjd6JTo%2Bze6GBXurXt88awkh18%2FdvgrspPp95r9rBUMuMT%2Bu0Ivi9nucrM1iAC%2BaEIIv7%2BxviYPNUnNDqj1JyH9n4qp4LgEV9I1NQuFtVhhy4c5lBt%2FChHofX1%2FFQc8Ssy2Q5YDGux7uaR5sIv4m241wOVTBxo2Md0NKZFn2US4t554J3i4ZpGwe82U%2BT9lKPCd%2F3NR232guQn8YB1Y&X-Amz-Signature=f5e88856b8b46fc1b06be459ba87d37ea670af3dce88750592a65665765e357e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7QXXU6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3jcVeiE4CVZbpP5QgCxl2juKECKNIpvJFV1Z4QbUpvAiAnrZAczwTJdZHJ3MTAmcHAVuACzXgXZuzAmLM4v7PZAyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMuyyTF6PXCi37prgCKtwDQMr3tOjE98H9XG2T74SeIL47Kw5ZyffrzEbk7vRUDZwB9awcVt5pQNgT8bgXrh0c%2B5qj9MB0kq%2FhFgcNNvZ8eh5d3K0TMgGrNt3wb4GuoC3bPorFXEO%2BQnhKsIjBxReWXhF7oVOe4Fh0JrA%2FuiYcznioP3%2Bc2gTPBc3%2FVkH1USLiWvKHAtYHyaPPJqji%2FEl3iYEJ0CT3bF%2BERTKmFLK0C%2F%2FEgomXMoZ72Vwu0BjnN3wtAq4cBMRphhRuEKrISrEegRqi78Yu7DiISf%2FiqSg1UCRpopGjIhM1GYHl4GGHa0trGzbE0w5HX1hPq%2B8Ma0SONbzMQAgrUisR2%2F%2B2X64kMSWRBtg1Z2RvPX2iFjdfLFULsMohX%2F9Kq2%2Fp4g41JQzSbGSnKYuL9nUOokO%2FTBzeIjUsGTYgGZ6mSbaZhjqU4lXSC%2Fp%2B2AdRZgt509bilFJk7yM9rawslrMwhOrBmSMeiGtqkM%2Bhm454DGtYOvCH78FN1GAthFlB9G1Xr3dmsyjMck0czdL2GR0PzAioWCqTiwoJ9eDTBa1971q0ackci0auDFL82K3Kwi3NvDefYkKgTpOB5WsdmcK2I5J7tcMmJyytZzB8CNGklD8DbrtcNlW%2BY6%2FuJMDoloSdTXUw07TMvwY6pgHUNZiNfETqCCjd6JTo%2Bze6GBXurXt88awkh18%2FdvgrspPp95r9rBUMuMT%2Bu0Ivi9nucrM1iAC%2BaEIIv7%2BxviYPNUnNDqj1JyH9n4qp4LgEV9I1NQuFtVhhy4c5lBt%2FChHofX1%2FFQc8Ssy2Q5YDGux7uaR5sIv4m241wOVTBxo2Md0NKZFn2US4t554J3i4ZpGwe82U%2BT9lKPCd%2F3NR232guQn8YB1Y&X-Amz-Signature=745cb267d7ce97ddc4775e2791d5ae58feae8927b44de8c5a0cfa37bc5ee48a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
