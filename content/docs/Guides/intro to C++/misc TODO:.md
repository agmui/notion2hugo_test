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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCQP7PV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAVWl4uWFRKqOTpUR4r8h5NSZbgqlcU70Ke4Et7yVAp8AiEAtr4Qf12CzEBXwq2OKJGbUepUPwH0RGG%2BNDOSe%2FRRT0oqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnokNG5CTd8CoI51ircA761uPiYAA43rTQYurEB57OcDdEQFG4J8HctaK%2F8xgdR0d%2FVNTj7hLuQFtvNsH9FUiA93MVAawsnawJC4cKgLm5qVJORnLnG0r%2BUwycG3UGxz9tmmTR1quPMDOwOTvn50a1hDXcDYPkigcyRFxCf5fwew9dCFikPN7%2FcOyBIpReJ6wXAcleLYPnJhTE5LC3MwQVdunY6HjQwucZDp0up4T4y%2BAPdOh%2B7uUZWIJLgdonPzWD8gX935bH0paDEofSYeq8XrtdO8DzWrzKm7ZvKaZ8Ks5IEoPiu59lnBYj3LP6J3u3gsP%2FwsQLhzSSK7zAbgVlpcYQyZqLhx23apWGwt%2BgFpIrTKWG7tBerHdCwPVJmuEzO3x77MO6y5itBIUZNBRgr2iRGKG6YLaf2B7x4uNuW%2FPDozbWfbgMKHjlv1D1kIH5if0YYiVVMbHEkrjwWA0Uwziw5BFrdFb1F%2Fl%2BbwAoAkFO83ctMvWg3g5IaOw5z4tWpUMfDTrUXBonenswCMyUzZ1oK%2FwNLr%2BRQhpx5qT4XDhWbib3nGit1X25uoUDtorS7V2eznmnSPldvbQdnSK8yt7PJCKReCiyOCKI%2B%2FkL5gaO3IBkvoRkLQiokRy3MGOtYuhRu1QMBMpgGMMmZ9b4GOqUBJWSuq%2FSsWINwk1CUAzU70TnTJDoRlZKq3rBxb3RpQu2i6MpfG270%2BM4Bxw0xmVJluUfWsS4Gm%2Bz1cPGg72DcGRSBCHaNMaN44N7xc5BruC%2F5ZIc3R8A3myho2BOR0P3gD0UlzFDOWgnDOjnGFqZMWyJTLuO%2F8HH9iRAPtGlL0TNX%2BUHHOd%2FlfoLAJcd1ReLH7cG1sq%2FtRGIIvqjExEyLFhhPVsJS&X-Amz-Signature=15a12fad50c55cb99c6291564e02063119fb31328af1874642eb58046ceb9872&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCQP7PV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAVWl4uWFRKqOTpUR4r8h5NSZbgqlcU70Ke4Et7yVAp8AiEAtr4Qf12CzEBXwq2OKJGbUepUPwH0RGG%2BNDOSe%2FRRT0oqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnokNG5CTd8CoI51ircA761uPiYAA43rTQYurEB57OcDdEQFG4J8HctaK%2F8xgdR0d%2FVNTj7hLuQFtvNsH9FUiA93MVAawsnawJC4cKgLm5qVJORnLnG0r%2BUwycG3UGxz9tmmTR1quPMDOwOTvn50a1hDXcDYPkigcyRFxCf5fwew9dCFikPN7%2FcOyBIpReJ6wXAcleLYPnJhTE5LC3MwQVdunY6HjQwucZDp0up4T4y%2BAPdOh%2B7uUZWIJLgdonPzWD8gX935bH0paDEofSYeq8XrtdO8DzWrzKm7ZvKaZ8Ks5IEoPiu59lnBYj3LP6J3u3gsP%2FwsQLhzSSK7zAbgVlpcYQyZqLhx23apWGwt%2BgFpIrTKWG7tBerHdCwPVJmuEzO3x77MO6y5itBIUZNBRgr2iRGKG6YLaf2B7x4uNuW%2FPDozbWfbgMKHjlv1D1kIH5if0YYiVVMbHEkrjwWA0Uwziw5BFrdFb1F%2Fl%2BbwAoAkFO83ctMvWg3g5IaOw5z4tWpUMfDTrUXBonenswCMyUzZ1oK%2FwNLr%2BRQhpx5qT4XDhWbib3nGit1X25uoUDtorS7V2eznmnSPldvbQdnSK8yt7PJCKReCiyOCKI%2B%2FkL5gaO3IBkvoRkLQiokRy3MGOtYuhRu1QMBMpgGMMmZ9b4GOqUBJWSuq%2FSsWINwk1CUAzU70TnTJDoRlZKq3rBxb3RpQu2i6MpfG270%2BM4Bxw0xmVJluUfWsS4Gm%2Bz1cPGg72DcGRSBCHaNMaN44N7xc5BruC%2F5ZIc3R8A3myho2BOR0P3gD0UlzFDOWgnDOjnGFqZMWyJTLuO%2F8HH9iRAPtGlL0TNX%2BUHHOd%2FlfoLAJcd1ReLH7cG1sq%2FtRGIIvqjExEyLFhhPVsJS&X-Amz-Signature=e975206c3530c2ca8f1ccffbb9e59871121894c05667f60babce74f462484628&X-Amz-SignedHeaders=host&x-id=GetObject)

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
