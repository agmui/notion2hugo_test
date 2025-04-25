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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSJLZ2I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbW%2F5Dn18NeDX5LoFU5NVgodAvG9UouXDeuYF6LNOOvAiByzty7P1xA1m24IvxCbCWo6V7jp1SW2oTiQH0zS1aKoSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMVbwxPrOfb7YD%2FeSQKtwDSDzqBrztZlciWmUIjfh6PdWnYn0dpsIe%2BTUelAWLM1aKP2iSoU8VwIkW5rnfLKdoh%2FvspIpR2Wb9ivkSw3R75ctCstweQSKkC%2Bj8cZYHru1SMcfVhMJVdLTDiWlRvtZsh%2FdnZ59Alfh4vQz2pAcGcM9%2BgLds2umkZDKORPMSdso9cwk8wgxn5tHW9tkjTIkutAflFoqAmC7FbEM6iY46tqKuqIBPhrs7GVhoBQB%2F5NdHhfaG8cH%2Fij4z8RPzVt8qCVRYW%2BNQaiHHCgskj6Q3u4FI5D6CItChtLcAjjLR5gUcPaTY5Crgj4Ll28EuwSxrvyrtSisC2oe7QKRlkaaa%2B4HsPnjci7Ffm0cBcWPFwmggfbMf7AHvVeh8gA3Ogu356puyUCBxo%2BNXaHF7DPmACYTRIYIGgUCZHelFEnZ4OWpU5XEmOtbyS7gbAqSJK6B%2BShCm6%2FAfqtrAL1k%2F0RsPMY4O5hM37%2FfIRICQtaVvmNplYxTH4IZ9%2BaDw3lxxRPU8lYmuP1H7wD9Q2DLHLGDSiTUn012zaz%2BMD1J0e1Ac9Bc49Q5NNZcLoQERhmTMHOY5dRq5sBEh7sUtIA7DEErJqh7ylYg6JGWFPZ3wLLgusXPf4J%2ByvksojL7fSXAwsMitwAY6pgGlTm8BFMNKJkpwyEEhZkSKzsj9T8EdZtyhloEgUVkYpTo9Ym8kU6MDckBzxW5tUGH0n%2Fq5ENmFBwdzsmg353IxSQfpqAzIIryDKHkjrmOHqUgmkQ%2B%2BmOYXLcTFg0IYDmWSmDce4j4x1bWIjTX6VJo%2Fsr4DzJOCFsasHQp%2BPWDM5I%2BoHXu7X1NL8bgJBHVHY%2Fs%2FrP%2FyLVknd3Ej3EWun6qkDyyJ16G8&X-Amz-Signature=454ff4955afa6d3acc88b73b98de7438485515271b4f2bb38f507bbad97b8042&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSJLZ2I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbW%2F5Dn18NeDX5LoFU5NVgodAvG9UouXDeuYF6LNOOvAiByzty7P1xA1m24IvxCbCWo6V7jp1SW2oTiQH0zS1aKoSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMVbwxPrOfb7YD%2FeSQKtwDSDzqBrztZlciWmUIjfh6PdWnYn0dpsIe%2BTUelAWLM1aKP2iSoU8VwIkW5rnfLKdoh%2FvspIpR2Wb9ivkSw3R75ctCstweQSKkC%2Bj8cZYHru1SMcfVhMJVdLTDiWlRvtZsh%2FdnZ59Alfh4vQz2pAcGcM9%2BgLds2umkZDKORPMSdso9cwk8wgxn5tHW9tkjTIkutAflFoqAmC7FbEM6iY46tqKuqIBPhrs7GVhoBQB%2F5NdHhfaG8cH%2Fij4z8RPzVt8qCVRYW%2BNQaiHHCgskj6Q3u4FI5D6CItChtLcAjjLR5gUcPaTY5Crgj4Ll28EuwSxrvyrtSisC2oe7QKRlkaaa%2B4HsPnjci7Ffm0cBcWPFwmggfbMf7AHvVeh8gA3Ogu356puyUCBxo%2BNXaHF7DPmACYTRIYIGgUCZHelFEnZ4OWpU5XEmOtbyS7gbAqSJK6B%2BShCm6%2FAfqtrAL1k%2F0RsPMY4O5hM37%2FfIRICQtaVvmNplYxTH4IZ9%2BaDw3lxxRPU8lYmuP1H7wD9Q2DLHLGDSiTUn012zaz%2BMD1J0e1Ac9Bc49Q5NNZcLoQERhmTMHOY5dRq5sBEh7sUtIA7DEErJqh7ylYg6JGWFPZ3wLLgusXPf4J%2ByvksojL7fSXAwsMitwAY6pgGlTm8BFMNKJkpwyEEhZkSKzsj9T8EdZtyhloEgUVkYpTo9Ym8kU6MDckBzxW5tUGH0n%2Fq5ENmFBwdzsmg353IxSQfpqAzIIryDKHkjrmOHqUgmkQ%2B%2BmOYXLcTFg0IYDmWSmDce4j4x1bWIjTX6VJo%2Fsr4DzJOCFsasHQp%2BPWDM5I%2BoHXu7X1NL8bgJBHVHY%2Fs%2FrP%2FyLVknd3Ej3EWun6qkDyyJ16G8&X-Amz-Signature=b311572bae41621b8b735c77e4948f400f48d64e9a6c1cbb3f54b2061f705b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
