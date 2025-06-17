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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3HG4KG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuTUZG5hhwLr918uZVYVQ1R9QaJg2vOz4gY9bBM%2Bs6eAiBL6YbWsdwk1o3tDzwzQtu8jm3ygkK7tTQ43HaJdj3rEir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTI19IOSuUp0i5EkrKtwDwyQ1o0NbffpZ7uOoZ8CbCTDziq%2FnAs2Bq%2FX%2B7EoUx4f%2BlIEMwrprozmWUwCn4FWKoIKLDlJsBO4dEi4FYwQ7%2Fnz3MhUZto8q6STaIIkh%2FsU%2BOKmZatgnYHA6UBwk%2B%2BCBeP4kT%2BOIPitS3RYRJSY7flCJzdlaj2jm62%2FHIqfOAr5IhZpEP2MA1U%2Bd616UFXjceVRXGcgosfMAgpfv%2FInfF4vFEIpPFmPtvntZnccHQMTaOC0dhAza6Mc3YxpuJgAl6SXSTDWhsXmBMaF0MW%2ByzuxGxpzH%2BX50VHZH%2B0lJxua%2FSYFTYxvn81FfQk%2BTyIDAJ1hwas8fTS%2B3wn6LZZFoiyVdrn34O7%2Fd%2FwnTLNvXDD6Lc9VsZWvdwn549B93qX%2FPpg%2FB80YDP4t2FRNVPUWdiuJ%2FrY%2FDknDutmdwmcVyLXYySuC%2BrcdaJA8%2BKWB7ByPuSa0FM3KyI48xOm%2BDjVu3wGlgQIQB0g6foTiCy3tFah0J9U%2BaTyarbqOelUVJWMKlTSUoLsEZAsjdMCFPbabsS0073WteenByaqsM%2Bs%2F30g3sfPwMLb8u%2FDg37bxUh7yD9JlFt26IWHZ0Cu84beYQFoKTnyYr%2F8AGxysYUuia9RayATJE8G%2FePyvEOdgw44jHwgY6pgGs%2F2l86WH2jJezwM7Hx10eW8TeNQmL3QbT4jEhJfG13cSLba5ByEsdfPwYihIRbWRhrTuffE8l6ya1OSCFYik0Uc6zXpczPDKOPdtkmm9g%2FJxDRdsvJXXwsxNlOplM%2Bw%2BtDLMLAd0ZY6%2FRG3aQcuq6bftwO8tHaJelJemvvXj11%2FzxQxaCvilsTY%2FMQ3Ow71a9saifYfHpaWpnmb1JdPGE1DFeCWt7&X-Amz-Signature=b395315b9d0c6c41c2b224fc2063e551e9d91cef1b93c94ac8cc88015b9b4439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3HG4KG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuTUZG5hhwLr918uZVYVQ1R9QaJg2vOz4gY9bBM%2Bs6eAiBL6YbWsdwk1o3tDzwzQtu8jm3ygkK7tTQ43HaJdj3rEir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTI19IOSuUp0i5EkrKtwDwyQ1o0NbffpZ7uOoZ8CbCTDziq%2FnAs2Bq%2FX%2B7EoUx4f%2BlIEMwrprozmWUwCn4FWKoIKLDlJsBO4dEi4FYwQ7%2Fnz3MhUZto8q6STaIIkh%2FsU%2BOKmZatgnYHA6UBwk%2B%2BCBeP4kT%2BOIPitS3RYRJSY7flCJzdlaj2jm62%2FHIqfOAr5IhZpEP2MA1U%2Bd616UFXjceVRXGcgosfMAgpfv%2FInfF4vFEIpPFmPtvntZnccHQMTaOC0dhAza6Mc3YxpuJgAl6SXSTDWhsXmBMaF0MW%2ByzuxGxpzH%2BX50VHZH%2B0lJxua%2FSYFTYxvn81FfQk%2BTyIDAJ1hwas8fTS%2B3wn6LZZFoiyVdrn34O7%2Fd%2FwnTLNvXDD6Lc9VsZWvdwn549B93qX%2FPpg%2FB80YDP4t2FRNVPUWdiuJ%2FrY%2FDknDutmdwmcVyLXYySuC%2BrcdaJA8%2BKWB7ByPuSa0FM3KyI48xOm%2BDjVu3wGlgQIQB0g6foTiCy3tFah0J9U%2BaTyarbqOelUVJWMKlTSUoLsEZAsjdMCFPbabsS0073WteenByaqsM%2Bs%2F30g3sfPwMLb8u%2FDg37bxUh7yD9JlFt26IWHZ0Cu84beYQFoKTnyYr%2F8AGxysYUuia9RayATJE8G%2FePyvEOdgw44jHwgY6pgGs%2F2l86WH2jJezwM7Hx10eW8TeNQmL3QbT4jEhJfG13cSLba5ByEsdfPwYihIRbWRhrTuffE8l6ya1OSCFYik0Uc6zXpczPDKOPdtkmm9g%2FJxDRdsvJXXwsxNlOplM%2Bw%2BtDLMLAd0ZY6%2FRG3aQcuq6bftwO8tHaJelJemvvXj11%2FzxQxaCvilsTY%2FMQ3Ow71a9saifYfHpaWpnmb1JdPGE1DFeCWt7&X-Amz-Signature=7314e9289bd6452eec7aa658187a5dd31867e15994d202175cc47a5958340876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
