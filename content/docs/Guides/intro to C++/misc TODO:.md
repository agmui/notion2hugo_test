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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCC4XCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDllJZ9J255gYG7H%2Fwi9zLEoEF%2F6lucH4%2FL4q4ptXjRuAiEAh8K%2FnyqnHF8pWmJvE2MBQDtQDWCksJtpe5SdcpZbrQYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM9tu7OCKtIFg96VfircA7bTaejfTFj55V6u8HKbPeoE7nWkgcL5QCNUamxVG4PZhF0ZgoadhRWsmMdKNyGf8uy79YCO%2BECxNX7ySafq66015lrCADv1%2BrnhAcf6lmBF9mRbAPrNc4ND3JSoDUuXsV4Zul4RUdE293xxi2F%2BT2CdexMi2E3%2FzXB845EK6HCbQESLsC%2BbEFE7XpfdSs8v9WbFKvdBEidHmxfql63nKJ%2FbtXPN6IBsIpiecCD2j%2Fhey0IWz%2FIr6Pgd9L%2FLO6ILEWrx6ng7n%2FZkKTm3xzg24S%2FeMvy5xxj4ES2dheDJ31cXH6hiRbTZAXT4Deo49ccpfjH4yVZ10qxlnIEcgnEq%2BhPFvVq6X9aQW8OHFVaBv7TwjTrKOX%2F5hTKU5eotYotm0Mt%2BeCjMV8FRqQEOZyta7%2F4WhFRG7SjAD3Kl2ZZibgC1bARCFjT3u%2BCChXskDxMOn9boUilJByCn6b3xABmLaAtJqq%2B%2BshwmzRFLkZSFj2tRG1pzfUyDaen5%2BwWgp%2B3COpNOm%2FsB90odYVHpOCDuwmAFlR0NliTOmuhL7SK%2BhWoWkHgbzxcqk%2Bt%2FWnFjj4TAUa2M7%2FuMFdwCaGGO2j6jER3z0rHj81m55O5rjp1muicHBGtTVsBNEA05j0jdMKr7mMEGOqUBJ101jr9zxd2izpU4IRdeaoOUlu3VwWihXUIp7nZI6LHM7amdgF27f7cLUrNWA5lLolMNomwQrEQ15%2FW%2FFU5ZtdHlspbA%2FMGQoIzlUMCaK8uA2Bl2q6P7Ey1RIAW4weLhMrAzvYpcsGoUL%2FmEvNQdu8H74IiJ4%2FIsnzCjKUbqoBa7mIlY4GdA75DQg8HNKZySWFdrIAZOvi0ZaieeuhCq%2FasihIxl&X-Amz-Signature=ffc7b0d44105bb785b17e590c05b532c6242d310393bc8693804e616a97cc04c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCC4XCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDllJZ9J255gYG7H%2Fwi9zLEoEF%2F6lucH4%2FL4q4ptXjRuAiEAh8K%2FnyqnHF8pWmJvE2MBQDtQDWCksJtpe5SdcpZbrQYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM9tu7OCKtIFg96VfircA7bTaejfTFj55V6u8HKbPeoE7nWkgcL5QCNUamxVG4PZhF0ZgoadhRWsmMdKNyGf8uy79YCO%2BECxNX7ySafq66015lrCADv1%2BrnhAcf6lmBF9mRbAPrNc4ND3JSoDUuXsV4Zul4RUdE293xxi2F%2BT2CdexMi2E3%2FzXB845EK6HCbQESLsC%2BbEFE7XpfdSs8v9WbFKvdBEidHmxfql63nKJ%2FbtXPN6IBsIpiecCD2j%2Fhey0IWz%2FIr6Pgd9L%2FLO6ILEWrx6ng7n%2FZkKTm3xzg24S%2FeMvy5xxj4ES2dheDJ31cXH6hiRbTZAXT4Deo49ccpfjH4yVZ10qxlnIEcgnEq%2BhPFvVq6X9aQW8OHFVaBv7TwjTrKOX%2F5hTKU5eotYotm0Mt%2BeCjMV8FRqQEOZyta7%2F4WhFRG7SjAD3Kl2ZZibgC1bARCFjT3u%2BCChXskDxMOn9boUilJByCn6b3xABmLaAtJqq%2B%2BshwmzRFLkZSFj2tRG1pzfUyDaen5%2BwWgp%2B3COpNOm%2FsB90odYVHpOCDuwmAFlR0NliTOmuhL7SK%2BhWoWkHgbzxcqk%2Bt%2FWnFjj4TAUa2M7%2FuMFdwCaGGO2j6jER3z0rHj81m55O5rjp1muicHBGtTVsBNEA05j0jdMKr7mMEGOqUBJ101jr9zxd2izpU4IRdeaoOUlu3VwWihXUIp7nZI6LHM7amdgF27f7cLUrNWA5lLolMNomwQrEQ15%2FW%2FFU5ZtdHlspbA%2FMGQoIzlUMCaK8uA2Bl2q6P7Ey1RIAW4weLhMrAzvYpcsGoUL%2FmEvNQdu8H74IiJ4%2FIsnzCjKUbqoBa7mIlY4GdA75DQg8HNKZySWFdrIAZOvi0ZaieeuhCq%2FasihIxl&X-Amz-Signature=34434bdd64831915a3a163a57a3072e1a0f7848ff7626be2e594bccf35f3f572&X-Amz-SignedHeaders=host&x-id=GetObject)

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
