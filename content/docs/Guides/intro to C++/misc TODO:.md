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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMYYSCS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuhoMslLYcIz4WKR7DTBD0WKLKo9NN8Ci9lGwSXbsVGQIgcVzsYxzvr4ciNHBbjeUgC8zK3UaJ8pKAg9cLrppne7YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSqyQWrLF1u7SC4jSrcA6gyDCCfOk42I%2B51iYg3lwJ4RVaE1YXxwM1bjiy2cBJJ%2BNN2R3D6NbNa2f8lI1Anfpa1duCZGnOaH8FXqTk70meL127i%2BJWjLMLXORj9SiQZsKfJfzLGSTMiHISugt3CldcNqzR6qhQcErMzzMvask6jBeiC%2FrOhhghwuAKTCCuBtamAbA%2F%2B15iJh8RjJgvugM8nzg%2Bpcszj4imU3bmBNVJXxvSM1Nf%2F%2Fw%2FB%2Bf%2BQ0AXCIcJG1xdfEYje%2F0DVWpqMJipXr5lD6hKRPWMj2gWL%2BqjICwWuAdQYXZa2pUfkWKR8Bc7Lx6%2FNIWzGt5ZjSc6m%2FcygiQj8GHy%2Bqs39EM%2FpOauEAseOfCapmDtQb%2FTSj6MxzyS02j3MBh4rUjnTFCOx9wD1DqVYpbHPi4ZFFmZoLiohad7IMo9gvMdjftBLcHfssGrNpZBiPR1zc0nZofWM2EgZeDukBh0PxqreCZkMi2VGdLah3gRUp7fHKJsaFmUUz0a97gllB%2FS1p0hIM09punwUn6qJe7yK5f5IJP64dLHE%2FnGG5MrHq8WOTDz3A1Wqx9uRo3tja%2FDdsJRynMg7z9q95AeKtCGeqMgUc%2FmbhInMXPSAn8KWiP2Nm2cJabnxFWvs7JS8%2F%2BqzONkmMJS47sMGOqUBAW3txqkGajjQ5p%2FNJMX2J4i6B9PigvgCpzWApE5lG7d9OiyKk2hqdc6RaTJJCcszYWuW8z3QZ8o4qhc0E9UEV7BucGRifS%2BbXo8eD%2BXMWGkkd4BY6jqEYi%2BOFv2m4UGVJzDXcGm1dnGak0wOxteF10H%2BQlHCXydRQdlzB2%2BCIcwNtZGYbHWF6WAArX3%2BMJFFxSNEUe9%2FaOvBfxcsLFYa%2FRnOZ6nW&X-Amz-Signature=ca278521920dfc290c6a1eb5e74956d1d1b5a67197669c21c49ea72f2df91940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMYYSCS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuhoMslLYcIz4WKR7DTBD0WKLKo9NN8Ci9lGwSXbsVGQIgcVzsYxzvr4ciNHBbjeUgC8zK3UaJ8pKAg9cLrppne7YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSqyQWrLF1u7SC4jSrcA6gyDCCfOk42I%2B51iYg3lwJ4RVaE1YXxwM1bjiy2cBJJ%2BNN2R3D6NbNa2f8lI1Anfpa1duCZGnOaH8FXqTk70meL127i%2BJWjLMLXORj9SiQZsKfJfzLGSTMiHISugt3CldcNqzR6qhQcErMzzMvask6jBeiC%2FrOhhghwuAKTCCuBtamAbA%2F%2B15iJh8RjJgvugM8nzg%2Bpcszj4imU3bmBNVJXxvSM1Nf%2F%2Fw%2FB%2Bf%2BQ0AXCIcJG1xdfEYje%2F0DVWpqMJipXr5lD6hKRPWMj2gWL%2BqjICwWuAdQYXZa2pUfkWKR8Bc7Lx6%2FNIWzGt5ZjSc6m%2FcygiQj8GHy%2Bqs39EM%2FpOauEAseOfCapmDtQb%2FTSj6MxzyS02j3MBh4rUjnTFCOx9wD1DqVYpbHPi4ZFFmZoLiohad7IMo9gvMdjftBLcHfssGrNpZBiPR1zc0nZofWM2EgZeDukBh0PxqreCZkMi2VGdLah3gRUp7fHKJsaFmUUz0a97gllB%2FS1p0hIM09punwUn6qJe7yK5f5IJP64dLHE%2FnGG5MrHq8WOTDz3A1Wqx9uRo3tja%2FDdsJRynMg7z9q95AeKtCGeqMgUc%2FmbhInMXPSAn8KWiP2Nm2cJabnxFWvs7JS8%2F%2BqzONkmMJS47sMGOqUBAW3txqkGajjQ5p%2FNJMX2J4i6B9PigvgCpzWApE5lG7d9OiyKk2hqdc6RaTJJCcszYWuW8z3QZ8o4qhc0E9UEV7BucGRifS%2BbXo8eD%2BXMWGkkd4BY6jqEYi%2BOFv2m4UGVJzDXcGm1dnGak0wOxteF10H%2BQlHCXydRQdlzB2%2BCIcwNtZGYbHWF6WAArX3%2BMJFFxSNEUe9%2FaOvBfxcsLFYa%2FRnOZ6nW&X-Amz-Signature=c564c9fd9f9a1edc36d95a8b5177153039f8bca0aecc7e53562b811b8496c114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
