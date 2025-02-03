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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVMHGGT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD4l0C718%2FgV6Z%2FUFrsshyw8uMhBI%2BZHWwaGEcG2EtkJgIgbHoukvNBbeDwKAcVp0FxlsyGvfPknqhCzNl%2B1PmIZjgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB5ibQAtS8xMpA9TOCrcA2VghK9i3TvNqNlEraG5BRh61K%2B20ClaeRf7IxyMFjjNO6dgwt3fOBp3Q0sahTVmHFPclrggTWYQqCRIjkNaREznrwgmEzLCTMPKR5H5aMeThdgIZjWcC%2FyAT85cq%2FRRoDTOVGi22Rsrv4Z1xW9CbEun4oLEpfyzPb1%2FNVuODLmmc9C1TX%2FXz50gMQE%2BQBvWscI26YnL%2F9bNQFNbq0jd1lPBkRpkigKJsejqQ6imORlHsd%2FXewbfkf5R1UCZ8mmML%2B3GRpqRpLIEjPp%2BXUTOThwdW2qShCt3hUZvEXTCoiD1Es1V9PAUZhTaO80rBLt7A1KItVrRl%2FyJp1fMusR21DrK47byBDqgerc%2BfIE3wBPtYg11znmKvRmXzUQzFxLu6MLtRDw5%2FfquX%2Fs3WsRlv5lEacwJZ9jrNfqZjAne5U0vvZvZmap%2FIm8UWxwsgb60ooHQ%2FYPJnXblo4rZKDfB4OlPG6g30zEbn1Q803DFyfUm1ChlZL2jbyZDD149XaAqvzvTagHEyPgdAm8l%2FThXk6xpwQMp49NwcT03Fa3XTzHnrFunWx1KAcSsV10tnGJ8j4E8oscJRJ%2FiaioWTSURsf0Szub7AtYKRomooD7k4EgtlVfA8n1IrYDDW%2BTbMJ7bhL0GOqUB75EmTj8BQOv7QdP2eztbQIOUCFSzmBp3mGiR9nV8Q6eYtLim4V4f8CA10fCMHZE1dMF24p34HxvUlT8C50ORCDgJbhp9ZO2KeJHXYB0W0SWQUTiGAfFWikchGiTf%2F6lSYNuOKlEjpWNTgnHxxb0Uf%2BQEIS1zHFYV36xO4IHjgLDbKajmkvblXJ2QFvf4gAnzqc1y8bxBuSNtaJGc3knWprSO74Fp&X-Amz-Signature=bd86fe481af3175b60b84fa2a0c763608f74c2d44ffda6fe6db378cce06580e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVMHGGT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD4l0C718%2FgV6Z%2FUFrsshyw8uMhBI%2BZHWwaGEcG2EtkJgIgbHoukvNBbeDwKAcVp0FxlsyGvfPknqhCzNl%2B1PmIZjgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB5ibQAtS8xMpA9TOCrcA2VghK9i3TvNqNlEraG5BRh61K%2B20ClaeRf7IxyMFjjNO6dgwt3fOBp3Q0sahTVmHFPclrggTWYQqCRIjkNaREznrwgmEzLCTMPKR5H5aMeThdgIZjWcC%2FyAT85cq%2FRRoDTOVGi22Rsrv4Z1xW9CbEun4oLEpfyzPb1%2FNVuODLmmc9C1TX%2FXz50gMQE%2BQBvWscI26YnL%2F9bNQFNbq0jd1lPBkRpkigKJsejqQ6imORlHsd%2FXewbfkf5R1UCZ8mmML%2B3GRpqRpLIEjPp%2BXUTOThwdW2qShCt3hUZvEXTCoiD1Es1V9PAUZhTaO80rBLt7A1KItVrRl%2FyJp1fMusR21DrK47byBDqgerc%2BfIE3wBPtYg11znmKvRmXzUQzFxLu6MLtRDw5%2FfquX%2Fs3WsRlv5lEacwJZ9jrNfqZjAne5U0vvZvZmap%2FIm8UWxwsgb60ooHQ%2FYPJnXblo4rZKDfB4OlPG6g30zEbn1Q803DFyfUm1ChlZL2jbyZDD149XaAqvzvTagHEyPgdAm8l%2FThXk6xpwQMp49NwcT03Fa3XTzHnrFunWx1KAcSsV10tnGJ8j4E8oscJRJ%2FiaioWTSURsf0Szub7AtYKRomooD7k4EgtlVfA8n1IrYDDW%2BTbMJ7bhL0GOqUB75EmTj8BQOv7QdP2eztbQIOUCFSzmBp3mGiR9nV8Q6eYtLim4V4f8CA10fCMHZE1dMF24p34HxvUlT8C50ORCDgJbhp9ZO2KeJHXYB0W0SWQUTiGAfFWikchGiTf%2F6lSYNuOKlEjpWNTgnHxxb0Uf%2BQEIS1zHFYV36xO4IHjgLDbKajmkvblXJ2QFvf4gAnzqc1y8bxBuSNtaJGc3knWprSO74Fp&X-Amz-Signature=9e5ae16413f79de7427e0c9f5600d30a20755efd34625f24ece0c972b17edebb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
