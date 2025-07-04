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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLPYHNM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCoD3K0cQuAvDZ8%2B9slMhFyYMaR79ekT0r7QAhiJ0NThgIgLDNe6bSqJRZtRdAxWLmB3ysNGbsgGaGeH51kzcDOsVAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF7Vhk2kec%2BJo4CfqCrcAxZuRlbmkbXPCIL%2FKJwp5UlQVWLAibP50WTXGmQzWbNPSTm6zRoHEuYqabpasenWNyImqe4Co1eVCTew%2BUD6Ep877MX0AA2pNrlcPFZsHy8THQAQSm3jW4YO1tpM4OOsYBhFtLHQY%2Fdsrmj3D6K03dR9fBCr5nuC9xiHwleWy%2F4MkOuIbwlRSqqAZ0ZZ6WzV0ltX7KX%2Btbubh%2Fx%2F4FfS3%2FzJ5jinCQ2tevKCX07S2rRWaexUt%2B0NMMOhv8lBzj2KrLaN5e8dGTFyplbzBfNd7r1avd0bc9k9X1eRFvXB0YunvBW1g0ueNQeQuIlXQD%2B90Z5y47jxTDPjMYzfNQ6LQlkf61QUzxhbc6hfX7xT%2BNE63QcPWvGVfPvGYPAYkNE387cvcAdaOrvDs%2FOPAjTeyFRNf%2FFdtaRoYFa09BLH7ZMBIc3rFW4LaOdBsj59cQ5kEQbK98RKN7cwSDSAAwMD6S7LrFpS00%2BHS1XHLWgeyN%2FeYCFdG165KCsFC%2Frtu1CYICgOHK2eCIBQDHzhKC%2FWRTj6bNleDlhDKt9iRPiSbIzQf%2BC9BcMhyZlf7WtxNprZ9GgB9NjmFQjX9Q%2FqF3Hl3qj9gvU89SA%2BPVae0RzDvi7KvE6nDC6LS9pyvO37MMTooMMGOqUBMVGriMmYSY9NUJ7CcECmkUt%2FDOFqeaMivKiFMewl4w%2BFmEFNg01UJnoAEIC5bCywdGHqay1BL0cVFDlraLBtJKBBXgvTk3xo36AOrIkTk906nBNuR%2BdQEKE6XPP%2Brxg2b0hilND3oCh8AONS4g31PtLWFGvzwDXtkhFWiJ%2BqxzCgr7IPy%2FXEv0WbrucXYr0%2FH6Xe%2FscQ4gKC1akP8uX9anuC7vS%2F&X-Amz-Signature=c2a618a1300426fa628f8ff8dbb4e81aecbbf7b45431c45f4bfb06776ffe43ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLPYHNM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCoD3K0cQuAvDZ8%2B9slMhFyYMaR79ekT0r7QAhiJ0NThgIgLDNe6bSqJRZtRdAxWLmB3ysNGbsgGaGeH51kzcDOsVAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF7Vhk2kec%2BJo4CfqCrcAxZuRlbmkbXPCIL%2FKJwp5UlQVWLAibP50WTXGmQzWbNPSTm6zRoHEuYqabpasenWNyImqe4Co1eVCTew%2BUD6Ep877MX0AA2pNrlcPFZsHy8THQAQSm3jW4YO1tpM4OOsYBhFtLHQY%2Fdsrmj3D6K03dR9fBCr5nuC9xiHwleWy%2F4MkOuIbwlRSqqAZ0ZZ6WzV0ltX7KX%2Btbubh%2Fx%2F4FfS3%2FzJ5jinCQ2tevKCX07S2rRWaexUt%2B0NMMOhv8lBzj2KrLaN5e8dGTFyplbzBfNd7r1avd0bc9k9X1eRFvXB0YunvBW1g0ueNQeQuIlXQD%2B90Z5y47jxTDPjMYzfNQ6LQlkf61QUzxhbc6hfX7xT%2BNE63QcPWvGVfPvGYPAYkNE387cvcAdaOrvDs%2FOPAjTeyFRNf%2FFdtaRoYFa09BLH7ZMBIc3rFW4LaOdBsj59cQ5kEQbK98RKN7cwSDSAAwMD6S7LrFpS00%2BHS1XHLWgeyN%2FeYCFdG165KCsFC%2Frtu1CYICgOHK2eCIBQDHzhKC%2FWRTj6bNleDlhDKt9iRPiSbIzQf%2BC9BcMhyZlf7WtxNprZ9GgB9NjmFQjX9Q%2FqF3Hl3qj9gvU89SA%2BPVae0RzDvi7KvE6nDC6LS9pyvO37MMTooMMGOqUBMVGriMmYSY9NUJ7CcECmkUt%2FDOFqeaMivKiFMewl4w%2BFmEFNg01UJnoAEIC5bCywdGHqay1BL0cVFDlraLBtJKBBXgvTk3xo36AOrIkTk906nBNuR%2BdQEKE6XPP%2Brxg2b0hilND3oCh8AONS4g31PtLWFGvzwDXtkhFWiJ%2BqxzCgr7IPy%2FXEv0WbrucXYr0%2FH6Xe%2FscQ4gKC1akP8uX9anuC7vS%2F&X-Amz-Signature=63aad0240d4762fadb6a3c0b476962673e4450493cd9a91e39ae2b5dfb817cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
