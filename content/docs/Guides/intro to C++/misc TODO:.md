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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMF54MEW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcZVWn9r6%2FpXcXtXvxeDTeqpvWMsSUDocuLQYhfCL5lAIgEBwViLnm%2FTGUax1d1Af4m8ATI3yuaOk%2F65GrQmIeMNQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN93iqq8jCzBQOTJircA%2FKbg2i%2Bp5zr%2FSRcdmeGZM3MUahWCEFeNFPGt7%2Bpce42w4Mur9Lf1SYmEM1kLknlh7LuTylkv57sRdeD3Q8ALF%2Fu4k188u8Frzdb6nQX3tpDjw1Z3QdpCj%2FhMnlZaJb70MoLMgRX6c8B9sceRQW%2Fn1YKrApMueebpfywTZIF8diX%2F6BDTt6M9%2BTeaUOg1u9GVJ5SvLnIp2T%2FMt0rThOkR2PqKd2FKsrjuUv6G6X%2FeU3SeMdVZJSqIc3Ty3gFncd8JWIEkDZnhxZAQXpQiIxEGbK7w7JB3pyDOMuVGv91l2d%2BwUAf%2F4MDnoW6NTp953jmZIpwj60dpUMIcOVwtKR4nJIfF8%2FaKBmYJtKhgHsbtol44ntRQ8eXo%2FU4XOLW7z3xDSqS2ztkrIUGW%2BMlTnv55I2ufCesdzq5COC%2F9R6s8t03xsIqjc6X6%2FaQ5595gLZtXs0JncPDzQjDeJXqhlKV1BAJTyW7D6wQSD6rQ1kN%2BQ2mRPl5euB%2BFA3p3V9BjLndjGfFa8pIAUU5tRI1teKWXeQe4V7fFitbxRxx3vTBPk%2FD1w8sFPoGRICmr52MSnUl7rAy9KlPsxlt39PELtDWwPhHDPYg7MQMF8rDtZbZe02EBwZU4coCigwnk2aVMLes98AGOqUBaRV9aMoNU%2Ft9EnH1QeGPijaROtyO%2BqOuFtnTkOAnnqWx2VHbXUwIgz2vk31KkyUwcqPKr6%2F5Rh554Y4uhR%2BF4smnrSvG%2F17fgWLBOCtbPOPzq8cXn7WpaJjIISjJZHpD0g48djwLd3YvFkCdc992WNc8DFOBEfIJi%2FoFI9DPNha%2BDybmRxvonnoz3qL5084OBNexSKj3S0wVXyH1rbIS9Cg8v1bC&X-Amz-Signature=97fecce0c5bc49eb3975ab849f390fe8443f13e2ef8880130d0ab6113acecc65&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMF54MEW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcZVWn9r6%2FpXcXtXvxeDTeqpvWMsSUDocuLQYhfCL5lAIgEBwViLnm%2FTGUax1d1Af4m8ATI3yuaOk%2F65GrQmIeMNQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN93iqq8jCzBQOTJircA%2FKbg2i%2Bp5zr%2FSRcdmeGZM3MUahWCEFeNFPGt7%2Bpce42w4Mur9Lf1SYmEM1kLknlh7LuTylkv57sRdeD3Q8ALF%2Fu4k188u8Frzdb6nQX3tpDjw1Z3QdpCj%2FhMnlZaJb70MoLMgRX6c8B9sceRQW%2Fn1YKrApMueebpfywTZIF8diX%2F6BDTt6M9%2BTeaUOg1u9GVJ5SvLnIp2T%2FMt0rThOkR2PqKd2FKsrjuUv6G6X%2FeU3SeMdVZJSqIc3Ty3gFncd8JWIEkDZnhxZAQXpQiIxEGbK7w7JB3pyDOMuVGv91l2d%2BwUAf%2F4MDnoW6NTp953jmZIpwj60dpUMIcOVwtKR4nJIfF8%2FaKBmYJtKhgHsbtol44ntRQ8eXo%2FU4XOLW7z3xDSqS2ztkrIUGW%2BMlTnv55I2ufCesdzq5COC%2F9R6s8t03xsIqjc6X6%2FaQ5595gLZtXs0JncPDzQjDeJXqhlKV1BAJTyW7D6wQSD6rQ1kN%2BQ2mRPl5euB%2BFA3p3V9BjLndjGfFa8pIAUU5tRI1teKWXeQe4V7fFitbxRxx3vTBPk%2FD1w8sFPoGRICmr52MSnUl7rAy9KlPsxlt39PELtDWwPhHDPYg7MQMF8rDtZbZe02EBwZU4coCigwnk2aVMLes98AGOqUBaRV9aMoNU%2Ft9EnH1QeGPijaROtyO%2BqOuFtnTkOAnnqWx2VHbXUwIgz2vk31KkyUwcqPKr6%2F5Rh554Y4uhR%2BF4smnrSvG%2F17fgWLBOCtbPOPzq8cXn7WpaJjIISjJZHpD0g48djwLd3YvFkCdc992WNc8DFOBEfIJi%2FoFI9DPNha%2BDybmRxvonnoz3qL5084OBNexSKj3S0wVXyH1rbIS9Cg8v1bC&X-Amz-Signature=277e5f196ca362b37190a8129a47363119a4768fa5f27bacb8950a2ae42fd677&X-Amz-SignedHeaders=host&x-id=GetObject)

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
