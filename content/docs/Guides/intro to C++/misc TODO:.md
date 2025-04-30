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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHB3TEO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDBzTdZXKi46VxDtKW2ekKb%2BLGtq8CFV0Zx5AzFbFnSoAIhAPz4lO2ImACeWNswms6DeqLjv11%2FXuw4LjPBGxl9OqXoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoPAOH%2FzMy0b52tycq3ANP6sTDqGdkwwqyZRmh%2BCd471T%2FoIR1S4qFpmq1xN9tG3ECNGHQzjSauJLe1nJK%2BF61U5DacKjTc15fuIyagIDuTAHNoK3vLuG5r0%2BACVEhCMPEeT8%2BG0Ha7wSZONKcMYMUl55YMkyZxcMy5fejteWR2784rEXrQsumFb2KItaeK2qiXNTiRUdeVxrE23WaAtcI634C6ot6QPAAq5cNb%2B6E%2BF5Utblx2wBun9Ehru2MhugUnbYV22gS3JVVw1XPlHeruNGvt6g2fcaimPB%2BXR7rQTuKq1iDVrmYDe7OwYdwardr2CUQ2xCPIPHoWSh4wupK2nD2d9y0CFMxb2eeIcikJTfetPXfb4NitygcLbwN0neG4CT7ApZx2lCrHqSpCNYo8Bb8h1xdczr6%2B9dZdEhNAdcj%2F9gwCzun9W%2BVSvfohtMrssOrIFaAFP1xHbA5nz2%2Febc6CUDfioh6Xqe2ZXBJXmXFYBDlSvpw3Z6%2BZ5cI0erfUOwKAbQCnNliWh4hVieOd1%2B6NSIzqtiHPQV0VcV6vxd4ICImnPiVeiIEquYlwoqrjO0afOGsdfQ%2BpvcObzEQvWBtOPZRtxKXzyV%2BIje4V1P3iWonqZBCIT7goaS%2FDfc4aM4bZq2WXSUP6jC%2BlsfABjqkAaJmVXiw8bJCxNtgGdqkK8uAGqcrK%2B2g%2FGAT%2BkAoRYRVsk26xgChwM2nYXYwfoj%2Fhe1LN5M5%2FT1QfFe2ayxURrAxmS52sqj6q6qV9op8cjh%2FX%2B5%2Fl2p07%2BhgXmzTzCs53Gf6CDHe8xQP0z%2BuK00sFNu3DdvYMMKR3klaHZyVGhu4%2BDVhygVPeQD3b0%2FeZUnd89WEttClR6RLEtGASHNeQIkB1D8g&X-Amz-Signature=8950b376c3fdca00ed91d7a9a4dfab3db03023951dc95b33f3d0e76bf808ef47&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHB3TEO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDBzTdZXKi46VxDtKW2ekKb%2BLGtq8CFV0Zx5AzFbFnSoAIhAPz4lO2ImACeWNswms6DeqLjv11%2FXuw4LjPBGxl9OqXoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoPAOH%2FzMy0b52tycq3ANP6sTDqGdkwwqyZRmh%2BCd471T%2FoIR1S4qFpmq1xN9tG3ECNGHQzjSauJLe1nJK%2BF61U5DacKjTc15fuIyagIDuTAHNoK3vLuG5r0%2BACVEhCMPEeT8%2BG0Ha7wSZONKcMYMUl55YMkyZxcMy5fejteWR2784rEXrQsumFb2KItaeK2qiXNTiRUdeVxrE23WaAtcI634C6ot6QPAAq5cNb%2B6E%2BF5Utblx2wBun9Ehru2MhugUnbYV22gS3JVVw1XPlHeruNGvt6g2fcaimPB%2BXR7rQTuKq1iDVrmYDe7OwYdwardr2CUQ2xCPIPHoWSh4wupK2nD2d9y0CFMxb2eeIcikJTfetPXfb4NitygcLbwN0neG4CT7ApZx2lCrHqSpCNYo8Bb8h1xdczr6%2B9dZdEhNAdcj%2F9gwCzun9W%2BVSvfohtMrssOrIFaAFP1xHbA5nz2%2Febc6CUDfioh6Xqe2ZXBJXmXFYBDlSvpw3Z6%2BZ5cI0erfUOwKAbQCnNliWh4hVieOd1%2B6NSIzqtiHPQV0VcV6vxd4ICImnPiVeiIEquYlwoqrjO0afOGsdfQ%2BpvcObzEQvWBtOPZRtxKXzyV%2BIje4V1P3iWonqZBCIT7goaS%2FDfc4aM4bZq2WXSUP6jC%2BlsfABjqkAaJmVXiw8bJCxNtgGdqkK8uAGqcrK%2B2g%2FGAT%2BkAoRYRVsk26xgChwM2nYXYwfoj%2Fhe1LN5M5%2FT1QfFe2ayxURrAxmS52sqj6q6qV9op8cjh%2FX%2B5%2Fl2p07%2BhgXmzTzCs53Gf6CDHe8xQP0z%2BuK00sFNu3DdvYMMKR3klaHZyVGhu4%2BDVhygVPeQD3b0%2FeZUnd89WEttClR6RLEtGASHNeQIkB1D8g&X-Amz-Signature=eaf12dad01f5bcd1070a633bf30e319745997f82420bb8d31bac73cd6387925c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
