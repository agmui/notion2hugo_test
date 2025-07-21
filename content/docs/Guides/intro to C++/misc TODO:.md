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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVQUM3U%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKLIL3z5%2Bt3BfafRGnRQtsHWYlPX8Mk1v8TRcscLeFMAiA1NLSdjFFvEW1za0Ec5ii9VSLMVhyEP%2BDfIFTEhYOSdiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YdguJ5P2mgyGH2HKtwD1rkwBSWp46PTCf9O5UGUgWy6jrhcXnc6pfeFPliGzDBb5cvfGsxZfmQcLLS1UtMFeqTByiA6TBBFoLVfS0UrkDtjiYH3ttLgjwbtEDKmgavuvUo%2B4QzJgMKcpC2%2BEd%2Boe2pLr4OVqRvDtOgqJN%2B2EUjkjvH2goXx3%2BsSGNStGlfKTQWJMOPYK9XtRsPTfW%2BJ0kQbZ6n%2FuPAPamLKFZpnd3fMFY7LaxeBHUdzyper9WUsY69vnzylYKEh3diftG3M%2FVuKVYk%2F7pPpjEbeJmOVp4bFk7%2BwcIL5eYpNbbOiP7wd8ciZ3V1IzCDL2ayqSx419WIl1nSglGOBEsV%2B3LO2x5p05Jy27SFtigTCLGND%2FuhwFfTQcAi9qgNH0p6Q%2FYwWK7jlbTZsgLXyFeW058oYxNRruMOQOwsmSvuK8lwtJ8NxBq%2BEA4g804jZxTq8%2Bpzq9juLh3MymTGR8rw5586UAT%2BpblfgEXG7hJHzrQj3Q3P4rmtIt84sXKYr7PrtvEddcAk8aFnPKKjdyYRh7hH2MulewiB7E80mwPzval42i%2FkclsQbNDTGrmwdgXB2tRfsX3FyyubyxDYMOXUtoZgpFMrLbMbiJ1ZC5IepYKSzuimJsfQFqxIQOALGIBMw%2BNT4wwY6pgGUTikz0QlkKQo%2Fxq2ZoaE43lnr8tLnlzg6xjO%2BpWpqHZ3%2FWSZ1aDHNXNS4DumhMXcDq79zJHwzVuvxi2xbETDzX0DAD3PA6%2BMg1XvhlzMord9Kiqgfy2o4rff8nYbE7vzDl68ktg2L%2BYqHLeVmRrYZHZ6zLH3kRKdO9EakU2JLE3KiE6D9LytWdKn5qRdc0v6f2kv7jIY91nWcA6P2oHof0tAqvT5q&X-Amz-Signature=164aaa7a62a2e3b70d96b48084f1a5376d9cad2771934b7b27c513bbc53009cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVQUM3U%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKLIL3z5%2Bt3BfafRGnRQtsHWYlPX8Mk1v8TRcscLeFMAiA1NLSdjFFvEW1za0Ec5ii9VSLMVhyEP%2BDfIFTEhYOSdiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YdguJ5P2mgyGH2HKtwD1rkwBSWp46PTCf9O5UGUgWy6jrhcXnc6pfeFPliGzDBb5cvfGsxZfmQcLLS1UtMFeqTByiA6TBBFoLVfS0UrkDtjiYH3ttLgjwbtEDKmgavuvUo%2B4QzJgMKcpC2%2BEd%2Boe2pLr4OVqRvDtOgqJN%2B2EUjkjvH2goXx3%2BsSGNStGlfKTQWJMOPYK9XtRsPTfW%2BJ0kQbZ6n%2FuPAPamLKFZpnd3fMFY7LaxeBHUdzyper9WUsY69vnzylYKEh3diftG3M%2FVuKVYk%2F7pPpjEbeJmOVp4bFk7%2BwcIL5eYpNbbOiP7wd8ciZ3V1IzCDL2ayqSx419WIl1nSglGOBEsV%2B3LO2x5p05Jy27SFtigTCLGND%2FuhwFfTQcAi9qgNH0p6Q%2FYwWK7jlbTZsgLXyFeW058oYxNRruMOQOwsmSvuK8lwtJ8NxBq%2BEA4g804jZxTq8%2Bpzq9juLh3MymTGR8rw5586UAT%2BpblfgEXG7hJHzrQj3Q3P4rmtIt84sXKYr7PrtvEddcAk8aFnPKKjdyYRh7hH2MulewiB7E80mwPzval42i%2FkclsQbNDTGrmwdgXB2tRfsX3FyyubyxDYMOXUtoZgpFMrLbMbiJ1ZC5IepYKSzuimJsfQFqxIQOALGIBMw%2BNT4wwY6pgGUTikz0QlkKQo%2Fxq2ZoaE43lnr8tLnlzg6xjO%2BpWpqHZ3%2FWSZ1aDHNXNS4DumhMXcDq79zJHwzVuvxi2xbETDzX0DAD3PA6%2BMg1XvhlzMord9Kiqgfy2o4rff8nYbE7vzDl68ktg2L%2BYqHLeVmRrYZHZ6zLH3kRKdO9EakU2JLE3KiE6D9LytWdKn5qRdc0v6f2kv7jIY91nWcA6P2oHof0tAqvT5q&X-Amz-Signature=00ad52ef271fdd25418343574289ef695a2412e03fb079dfb848318e19296d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
