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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV34E5II%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCVmnvb8P0kEY6w74rGbmuA1r0%2Bmr8eejzHzcJZFULcXQIgfHPq1PbcJajh6GHERa8oHhZevh3zmbc%2Fvm8A95907moqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPizAxRTfofwxlxj6ircA27lUeZT1dHyZqGHtNGT0AWdmsdkd8e%2F22BZxDRfvm8DwAEQsfHHARtzsApRCJMQ4abih6fxFJyvrUeG%2BWnZyhOtyjLV493Js1OE7yvnZphJrqLCh1LPcmRi%2FqF9UA16PkQwMnLUSmwfSrE0%2FI4EBMRCdAGnlkvynXZZjnEcI1bu2TcDc8%2BbRK14ANdSvbcDWh5lPdx3TexB7JmlzsgCxcyv83dBjOGokhrqbt7k%2Bq822l1t3sxtLAoppxR1xFQEMSpuqUSyVGUjYs5xmyiTsVLVAmG%2FvINfW49xOUqLX7m%2Bi670EEHN6KwHv2dAblw9C0yALqSAWXmvlEKI22ADCNFk6fCBxwvS%2FnrPX22wP6eYYOf5FfDJSdS7xpo1CelpeX51zYYN%2BJ%2BOfI4Ovcqeejhu4Pr6Us9xWH6GLKvBP9Hl6Is9WbcPdwy6UbX%2BojHVFj%2FVQwuqvdKiU%2FXkkVnHwRcyfrvcoI8LSGDw0kkma43J%2B9MgySVdix%2FOHNBPXW%2BWkhxUbR3%2FPZi6jBfBdg%2BOIW27HEW9tTAseAgKhKFXdxQNNHMZ%2BHEVmVtk6E4E%2FCMp4316LDvCYqqiSvoNIvkmFQL9TAw7M8RhCPy7Xvhy7AKdKZd48tWxK0Iz%2BbyRMLbe18AGOqUBr%2FLEsH094NKBbSCESq7dt3FeJ2pJIJ%2BiAmJ9qS5WYvPcqZ8DNHEGksd7%2FjlPYQC2tqA18lI1rvwpovtfMosLWiZWzyk9UMvNvOD2Zx%2Fm9UciPcT3QsTrgJBbvJd0%2FzwiC1ePSFZyVHkoLJZm%2BGCGRCVkdhJ2fJCpCc1ZmEvG5HGrsoucIXvSUQup3vGyRXZxIOYhRcaGdSJG%2Bd%2FE0u%2F69mq21sCl&X-Amz-Signature=25b3ab423695b82e512fb3af4718b2cc519ed09f55646a1f24f4d053703a862f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV34E5II%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCVmnvb8P0kEY6w74rGbmuA1r0%2Bmr8eejzHzcJZFULcXQIgfHPq1PbcJajh6GHERa8oHhZevh3zmbc%2Fvm8A95907moqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPizAxRTfofwxlxj6ircA27lUeZT1dHyZqGHtNGT0AWdmsdkd8e%2F22BZxDRfvm8DwAEQsfHHARtzsApRCJMQ4abih6fxFJyvrUeG%2BWnZyhOtyjLV493Js1OE7yvnZphJrqLCh1LPcmRi%2FqF9UA16PkQwMnLUSmwfSrE0%2FI4EBMRCdAGnlkvynXZZjnEcI1bu2TcDc8%2BbRK14ANdSvbcDWh5lPdx3TexB7JmlzsgCxcyv83dBjOGokhrqbt7k%2Bq822l1t3sxtLAoppxR1xFQEMSpuqUSyVGUjYs5xmyiTsVLVAmG%2FvINfW49xOUqLX7m%2Bi670EEHN6KwHv2dAblw9C0yALqSAWXmvlEKI22ADCNFk6fCBxwvS%2FnrPX22wP6eYYOf5FfDJSdS7xpo1CelpeX51zYYN%2BJ%2BOfI4Ovcqeejhu4Pr6Us9xWH6GLKvBP9Hl6Is9WbcPdwy6UbX%2BojHVFj%2FVQwuqvdKiU%2FXkkVnHwRcyfrvcoI8LSGDw0kkma43J%2B9MgySVdix%2FOHNBPXW%2BWkhxUbR3%2FPZi6jBfBdg%2BOIW27HEW9tTAseAgKhKFXdxQNNHMZ%2BHEVmVtk6E4E%2FCMp4316LDvCYqqiSvoNIvkmFQL9TAw7M8RhCPy7Xvhy7AKdKZd48tWxK0Iz%2BbyRMLbe18AGOqUBr%2FLEsH094NKBbSCESq7dt3FeJ2pJIJ%2BiAmJ9qS5WYvPcqZ8DNHEGksd7%2FjlPYQC2tqA18lI1rvwpovtfMosLWiZWzyk9UMvNvOD2Zx%2Fm9UciPcT3QsTrgJBbvJd0%2FzwiC1ePSFZyVHkoLJZm%2BGCGRCVkdhJ2fJCpCc1ZmEvG5HGrsoucIXvSUQup3vGyRXZxIOYhRcaGdSJG%2Bd%2FE0u%2F69mq21sCl&X-Amz-Signature=0f483695d3fc696b6982b48579ce7c414b236f811078e73f8f8ae5464681fc07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
