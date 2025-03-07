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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGNHQYL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAsmp4ABq4mdzd6rZbxAzR%2FG%2BVlJ12T4U6QEZ%2FlCK6AYAiEAkOtAVn8FcdJx7jcxBxVYNF7rhOlypTFcI1a93vusLd0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLcJlyRKXnnzFhXxtyrcA%2FL4a%2FMQqAXW9pwOAIZpSKwQOrZbA3AKKXNpUOVNX5wqRZ4y9Uo0AvRAnTnkRQoZao74Zoa96Iv0ouSKwtOScFr4pxST3bqaKBvhf4JBE1TSv63Nq587nrdNG39yiTx3kIHShXRFwfCLdL51urLdZoBp3h94nCQ9jJ%2F9o1rYJzJNuiUrKGux88lVu12aCLoU9Xedl3Z9V67SOXsVBaozzvANdtSFuz0ap3HRi56UnidnxbDRvEI5AtB3eT61RBy21b7MjOTWpyAMbrLnDUxZtgTI2xMGLoevO%2FXeW8hkGUdXBMfVLjaY%2F%2BdU6u2QZaAJSZBFHlnwoDNqfiPXii4LfICqA6RMPPlRaRdOw1ev%2BNy6OjD6cKTu5Q3ZRSz1deiPya5%2FRCMaI7kseO64I8y6By06XeVePeeikZdwCbqu9suY8b%2Fh4JRnipLDiMHD9JkDJ6yS8a9jq7gLD45v7QcdJkQQ1qN69W9%2B6DZ8eq%2BK5Ll536tcqblgdDCfy6OQ3oVjfSmYBssnR%2BXDiTm2ll%2FpJe4a5IB0nIbxtPPWpEsPPyFOpjiEkN2Y1IOVYiR3q53xnOi7VyDM5HqMiWyYUnD8peVo9A6yOylBIcJclBQpIzN1zwYPZPEAtQk%2FToMGMLW%2Frb4GOqUBYeYiCQt%2FX6%2FzB0HklPRNEX3PnNusfX9DNvVNJDsrQUhFVp1CKiaqL4j%2FwcNh2ofTJDkjx8UVgKut5oWEvAJ%2BE6BzsO4WjwqjFPbYEtVAAqbYx1pQi8iNbVsKCA%2BY%2FPfHMxtxBql6NcKILLeT%2Bx06JegZnOvBYvpTVjMm%2FxZaDVdSMjY7myUC81V9QLK8HqnLMwFv8b5mv4lPh%2Bw%2FrCHHAo%2F4Z%2Bft&X-Amz-Signature=1161c3b0332545e90b207b3864e48d63ba39e8b6ae76114323ad13ec0e211038&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGNHQYL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAsmp4ABq4mdzd6rZbxAzR%2FG%2BVlJ12T4U6QEZ%2FlCK6AYAiEAkOtAVn8FcdJx7jcxBxVYNF7rhOlypTFcI1a93vusLd0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLcJlyRKXnnzFhXxtyrcA%2FL4a%2FMQqAXW9pwOAIZpSKwQOrZbA3AKKXNpUOVNX5wqRZ4y9Uo0AvRAnTnkRQoZao74Zoa96Iv0ouSKwtOScFr4pxST3bqaKBvhf4JBE1TSv63Nq587nrdNG39yiTx3kIHShXRFwfCLdL51urLdZoBp3h94nCQ9jJ%2F9o1rYJzJNuiUrKGux88lVu12aCLoU9Xedl3Z9V67SOXsVBaozzvANdtSFuz0ap3HRi56UnidnxbDRvEI5AtB3eT61RBy21b7MjOTWpyAMbrLnDUxZtgTI2xMGLoevO%2FXeW8hkGUdXBMfVLjaY%2F%2BdU6u2QZaAJSZBFHlnwoDNqfiPXii4LfICqA6RMPPlRaRdOw1ev%2BNy6OjD6cKTu5Q3ZRSz1deiPya5%2FRCMaI7kseO64I8y6By06XeVePeeikZdwCbqu9suY8b%2Fh4JRnipLDiMHD9JkDJ6yS8a9jq7gLD45v7QcdJkQQ1qN69W9%2B6DZ8eq%2BK5Ll536tcqblgdDCfy6OQ3oVjfSmYBssnR%2BXDiTm2ll%2FpJe4a5IB0nIbxtPPWpEsPPyFOpjiEkN2Y1IOVYiR3q53xnOi7VyDM5HqMiWyYUnD8peVo9A6yOylBIcJclBQpIzN1zwYPZPEAtQk%2FToMGMLW%2Frb4GOqUBYeYiCQt%2FX6%2FzB0HklPRNEX3PnNusfX9DNvVNJDsrQUhFVp1CKiaqL4j%2FwcNh2ofTJDkjx8UVgKut5oWEvAJ%2BE6BzsO4WjwqjFPbYEtVAAqbYx1pQi8iNbVsKCA%2BY%2FPfHMxtxBql6NcKILLeT%2Bx06JegZnOvBYvpTVjMm%2FxZaDVdSMjY7myUC81V9QLK8HqnLMwFv8b5mv4lPh%2Bw%2FrCHHAo%2F4Z%2Bft&X-Amz-Signature=654e46e117349ad9e5234476ae0680d94cb88b1d7fff06234308d706acfccceb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
