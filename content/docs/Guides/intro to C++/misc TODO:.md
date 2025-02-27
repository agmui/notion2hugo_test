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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OHIDIO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHiHTEWHamxY5zKmRTT6L3as%2Bi0lhCAjrw0NAnxyxLDwAiEAkqr8tg5Ume7mc%2FglQRZTrqbrRQNBjE%2F%2FMaa%2BCeoiyi8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLeilDa3WIAtvYPG%2FSrcA6pz%2FCfNlc3ktT0Fc0VvzaZqIXWlxJS9trCN0GWZ2h1MiLGyuPWiCOOex4ZDrGbcN34OB3N9XbRlju%2BVbM031adSwrzyduSxUS3BVD5jOUmcB1dyBvREgglyFHuBLmNliWgcgugi6kEaXf4Ekd0H8PlCHZI3GnhKWd%2BnxMJrOclG70lKiafFXUk8dJ63NsSPQ93R442KbO%2F%2FDa5Gi9mflbuhggVsea%2FTCvZTXKdqXyw9o9jWVqkgemmGH4uYMyt8YeP%2FDSW53NScO18eoMvCuawzrb2Rc9tGMGmIURjdMHAKkd74h3fz0L9MIE7lzkwTyuw88jMQ19TTqaHpq4CcV9vmSAhuOPGwWRv73Oyd8cqB5LjW5DcxLos3S%2BsLSjEvVDhZRsxpcjuFlgBlUr47LHHmdC6A4tcCfrosp0K869Hx16dps7ui0rmLqKMYLa%2BD%2FDP1bzNuJuz%2FQ%2BbTYsJUvvbl4rvpW%2Fs8e1eJ1UY75PFPLn11Fx9g607ByETrd74bw5FtDgkmN0q9pVWbccCxJ1SFtpjesy%2BbhJj34pxz1K6H2vc9ux3v3qXPc3DP6XFPgENxFBp99cmepnEogi4Ju2nzKz3EclBV0DJZjMmLWZ9IwJnhpkMN1%2FCzSqRVMPCLgL4GOqUBoTewIGyX%2F5CqVWmzmdaiIxwC1rutKmG9qh1AaSpueC%2F1X2o8LLRe79ZfHcOk3BNDL55Okos%2FeHyZIgXnpxabciaKUFBvh2vmv8l4D76kliFaj%2FFUQCNZ5Og%2FpaoXq%2B2vv0TlrOYXOXGnUza8yyW6gCSostc%2FxbHycGqKOvZFHdvOamNzAw%2BRzJ7cuZLE3%2FPo84EclumHg1tvj4GMK4uMR%2BEZ%2Ba3o&X-Amz-Signature=2c75bc936c12a9a93928eff1e795dead27e4afb6ffa5883476d1f8a491dd4b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OHIDIO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHiHTEWHamxY5zKmRTT6L3as%2Bi0lhCAjrw0NAnxyxLDwAiEAkqr8tg5Ume7mc%2FglQRZTrqbrRQNBjE%2F%2FMaa%2BCeoiyi8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLeilDa3WIAtvYPG%2FSrcA6pz%2FCfNlc3ktT0Fc0VvzaZqIXWlxJS9trCN0GWZ2h1MiLGyuPWiCOOex4ZDrGbcN34OB3N9XbRlju%2BVbM031adSwrzyduSxUS3BVD5jOUmcB1dyBvREgglyFHuBLmNliWgcgugi6kEaXf4Ekd0H8PlCHZI3GnhKWd%2BnxMJrOclG70lKiafFXUk8dJ63NsSPQ93R442KbO%2F%2FDa5Gi9mflbuhggVsea%2FTCvZTXKdqXyw9o9jWVqkgemmGH4uYMyt8YeP%2FDSW53NScO18eoMvCuawzrb2Rc9tGMGmIURjdMHAKkd74h3fz0L9MIE7lzkwTyuw88jMQ19TTqaHpq4CcV9vmSAhuOPGwWRv73Oyd8cqB5LjW5DcxLos3S%2BsLSjEvVDhZRsxpcjuFlgBlUr47LHHmdC6A4tcCfrosp0K869Hx16dps7ui0rmLqKMYLa%2BD%2FDP1bzNuJuz%2FQ%2BbTYsJUvvbl4rvpW%2Fs8e1eJ1UY75PFPLn11Fx9g607ByETrd74bw5FtDgkmN0q9pVWbccCxJ1SFtpjesy%2BbhJj34pxz1K6H2vc9ux3v3qXPc3DP6XFPgENxFBp99cmepnEogi4Ju2nzKz3EclBV0DJZjMmLWZ9IwJnhpkMN1%2FCzSqRVMPCLgL4GOqUBoTewIGyX%2F5CqVWmzmdaiIxwC1rutKmG9qh1AaSpueC%2F1X2o8LLRe79ZfHcOk3BNDL55Okos%2FeHyZIgXnpxabciaKUFBvh2vmv8l4D76kliFaj%2FFUQCNZ5Og%2FpaoXq%2B2vv0TlrOYXOXGnUza8yyW6gCSostc%2FxbHycGqKOvZFHdvOamNzAw%2BRzJ7cuZLE3%2FPo84EclumHg1tvj4GMK4uMR%2BEZ%2Ba3o&X-Amz-Signature=98a8b4aef48d9911e2b7e738fb622a6ee2030b8a9f46b8b7a8545edba3c08e21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
