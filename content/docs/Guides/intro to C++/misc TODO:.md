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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5KU2IM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDar0ymKNtT%2BJjC3d1YQw0Cn7BQ6P%2BipF%2F7rt3ps%2BrVxgIhALjfPcAuFzlZO2FRglR3pAsTEbzgYzOOV%2FW6APxpkmezKv8DCEoQABoMNjM3NDIzMTgzODA1Igy1EHvtnKoMMzjWzfYq3AOs55%2F9wxdC11nsEH5uxHj97EJZLaS2bWd1Y4lJtWh9tGipXkckmR94Y597DZCKJiF%2Br49WhYJE48qKRVs0DwBwOCeEBOhpAXRDTZinrb%2BjuY5eOCz75MjmwcDlW8YvXBPoH%2FRJwktO06jaK9LGHC%2FCPcFnKG9bxzlBfO%2FeLoqWardwdZjeGphoyyVXIf1SCCbQDQPlbdpQ%2FMniCOQsVbjZVnfwmzBn7zR5WjTqjRFCUdcXnUqS%2FkUrF0FZ38hx7e%2BUYaWNRFXvfmfAIW9bfe0mESRVEUuxXKlnqc8N8iRwYC%2Br2GIr0%2FFvaJrEjaj7kBJFS2sm4zuwWE7P1hK6Tt42pd5dKaANc9ie4eBW%2FemfSIOO5CybGfDsDYrtsh%2B30S8DsuCBQQXZ1R8EMPnUybQyxEvV4QcPFmPZA4PtlvAylgUiC11%2BKBiZEzIk4IrnJ6klMss4Y%2BbdO2JSIpzYttuoY%2FjuYQgZY8D%2FHdXYFzeKTpujcgL616pC0KU7fPJ0BSwMWrXsg6hOtpYQSstAwkoQyNpfjc%2BkksjIMsdNl3gXWzK9Rguc1khY%2FDGt2xc7y9TRQrOK%2Fvvf%2FuRffgCjBfAeJ0SnooCbeDPv9ic8NyxWCh7bnVb3rpI15a9lmDDyhdrDBjqkAf8sT%2F0%2FgLytRrclwDXteX4AwvAGCilQsHAYVzF8YhlVdQlgZTcVfJiU5xwlr45%2Fmm6D0Iq%2B%2BxHEh31ehO0r4VKSBIROqMKRw%2BSocs7hcKPazpshxoHIQ2HL4jFxUdYKL3cQLzBY7Bv2C22ibGCxleZjARmVg8MYH6DeIHNK%2F9HXGeu8a3dym98zPCBB%2FfCzURvAIMVSLo2OnRCKHAXQEQrww0be&X-Amz-Signature=2c4c7ea1d6f4ab6ea667f3347306dc2534f54436172287d38c7a012bf36a2211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5KU2IM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDar0ymKNtT%2BJjC3d1YQw0Cn7BQ6P%2BipF%2F7rt3ps%2BrVxgIhALjfPcAuFzlZO2FRglR3pAsTEbzgYzOOV%2FW6APxpkmezKv8DCEoQABoMNjM3NDIzMTgzODA1Igy1EHvtnKoMMzjWzfYq3AOs55%2F9wxdC11nsEH5uxHj97EJZLaS2bWd1Y4lJtWh9tGipXkckmR94Y597DZCKJiF%2Br49WhYJE48qKRVs0DwBwOCeEBOhpAXRDTZinrb%2BjuY5eOCz75MjmwcDlW8YvXBPoH%2FRJwktO06jaK9LGHC%2FCPcFnKG9bxzlBfO%2FeLoqWardwdZjeGphoyyVXIf1SCCbQDQPlbdpQ%2FMniCOQsVbjZVnfwmzBn7zR5WjTqjRFCUdcXnUqS%2FkUrF0FZ38hx7e%2BUYaWNRFXvfmfAIW9bfe0mESRVEUuxXKlnqc8N8iRwYC%2Br2GIr0%2FFvaJrEjaj7kBJFS2sm4zuwWE7P1hK6Tt42pd5dKaANc9ie4eBW%2FemfSIOO5CybGfDsDYrtsh%2B30S8DsuCBQQXZ1R8EMPnUybQyxEvV4QcPFmPZA4PtlvAylgUiC11%2BKBiZEzIk4IrnJ6klMss4Y%2BbdO2JSIpzYttuoY%2FjuYQgZY8D%2FHdXYFzeKTpujcgL616pC0KU7fPJ0BSwMWrXsg6hOtpYQSstAwkoQyNpfjc%2BkksjIMsdNl3gXWzK9Rguc1khY%2FDGt2xc7y9TRQrOK%2Fvvf%2FuRffgCjBfAeJ0SnooCbeDPv9ic8NyxWCh7bnVb3rpI15a9lmDDyhdrDBjqkAf8sT%2F0%2FgLytRrclwDXteX4AwvAGCilQsHAYVzF8YhlVdQlgZTcVfJiU5xwlr45%2Fmm6D0Iq%2B%2BxHEh31ehO0r4VKSBIROqMKRw%2BSocs7hcKPazpshxoHIQ2HL4jFxUdYKL3cQLzBY7Bv2C22ibGCxleZjARmVg8MYH6DeIHNK%2F9HXGeu8a3dym98zPCBB%2FfCzURvAIMVSLo2OnRCKHAXQEQrww0be&X-Amz-Signature=bed2d076bc7f8319c9d1acba1c8d77c9261e81eb4e4acd96b2e122b77cef6153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
