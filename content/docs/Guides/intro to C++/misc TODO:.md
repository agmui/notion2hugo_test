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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFBEBNI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0P91gt6aWtjp0sVQvyvCyyuxasZczJ8H1BlHZ7v7D5AiEAgxa0gB3UxMxulLL4LTacb%2Bt%2FLOW0KDWftg8RIBC13c4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeMnJ%2FOLU6lDcnT8CrcA3fsQwWbp4b61XAEDNHu%2Fqp80LYoIBHZs%2FCtnkTHac2U3VJT1lIBZE6loDdaYVKZ3mml3X4PXh71pwJXQWQ%2F7rj1Y2643V92Z6rRlyzu5EasJXkTCqpf7J0rRBx9%2FmwSbH4DNZB36O7%2BXVs9jJAvaf%2BeR%2FQzsSv3O9Sl1r2rCM9gxixlYHYIvsg0DUNCIxEaH62CBersNuS1l5V%2FhIVRNCQvluFYioLcsLjzO6JPfPtdIYQoQ%2BzYvLFSEXCMhq1Q1Lf2MzQ%2BR0%2BGi5gQY%2Fph2uYcWdvH9weSdmSQe%2Fbg8Es9jhBHV%2BOuBhol9QVMWShYGKYBfgVRfYenHqFu6lm1stHSqmG2xZi0ByVy8Lw2uH6%2B7C%2F7VwFYoHyN7kympHamNuZI9zBa%2FaA9F5bOLl7nK0Bdlmyc7gF1RMuB66v7cqDRjOx4Dq%2FeFibPL8sYN9%2Bj9xFeQ7%2FslPaodh6pqsDQrsr6CwLRnuRdGzzPIVfpax0h%2FvNyavDaMdYgm%2BaqFV56%2BHH%2BMMfFzptTVThlGQxo4cKdV9EMAN6TCdAtdIkJJkIAIqpkkxAbPCfRUWQ3rCp8RB68%2FWvZBtajrV6MLOMR7PrE9pHCpauNpR5%2BWjuTnHvPmhr%2FQJAvLpVVJYgcMMzj%2B7wGOqUB4D3cZNJTSz0e%2B%2FQ2tJvJ2Ex3%2B8SiaPxomvBMsXl7wUOtKRaWWLQCF4zseDgvL5%2BbsTQUHIwIyvMGUC6VVi%2BWVx%2FAD7tLueqFb%2B3IWqhueKDCW4ricEdnXAathzcJU4xm8qbKsXm6LRpQQfNL%2F1CXoQxsNYr5k587lAykKw2XyuBLXtoyFd3Tjxg0s3AmMw5TXo8bM51msIXDLa5CZT0AZ8p4M73Q&X-Amz-Signature=5f5173ee5ba89489ad363a4e368e10a00f4b3d1878f33b29c6b1438dfad7a57c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFBEBNI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0P91gt6aWtjp0sVQvyvCyyuxasZczJ8H1BlHZ7v7D5AiEAgxa0gB3UxMxulLL4LTacb%2Bt%2FLOW0KDWftg8RIBC13c4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeMnJ%2FOLU6lDcnT8CrcA3fsQwWbp4b61XAEDNHu%2Fqp80LYoIBHZs%2FCtnkTHac2U3VJT1lIBZE6loDdaYVKZ3mml3X4PXh71pwJXQWQ%2F7rj1Y2643V92Z6rRlyzu5EasJXkTCqpf7J0rRBx9%2FmwSbH4DNZB36O7%2BXVs9jJAvaf%2BeR%2FQzsSv3O9Sl1r2rCM9gxixlYHYIvsg0DUNCIxEaH62CBersNuS1l5V%2FhIVRNCQvluFYioLcsLjzO6JPfPtdIYQoQ%2BzYvLFSEXCMhq1Q1Lf2MzQ%2BR0%2BGi5gQY%2Fph2uYcWdvH9weSdmSQe%2Fbg8Es9jhBHV%2BOuBhol9QVMWShYGKYBfgVRfYenHqFu6lm1stHSqmG2xZi0ByVy8Lw2uH6%2B7C%2F7VwFYoHyN7kympHamNuZI9zBa%2FaA9F5bOLl7nK0Bdlmyc7gF1RMuB66v7cqDRjOx4Dq%2FeFibPL8sYN9%2Bj9xFeQ7%2FslPaodh6pqsDQrsr6CwLRnuRdGzzPIVfpax0h%2FvNyavDaMdYgm%2BaqFV56%2BHH%2BMMfFzptTVThlGQxo4cKdV9EMAN6TCdAtdIkJJkIAIqpkkxAbPCfRUWQ3rCp8RB68%2FWvZBtajrV6MLOMR7PrE9pHCpauNpR5%2BWjuTnHvPmhr%2FQJAvLpVVJYgcMMzj%2B7wGOqUB4D3cZNJTSz0e%2B%2FQ2tJvJ2Ex3%2B8SiaPxomvBMsXl7wUOtKRaWWLQCF4zseDgvL5%2BbsTQUHIwIyvMGUC6VVi%2BWVx%2FAD7tLueqFb%2B3IWqhueKDCW4ricEdnXAathzcJU4xm8qbKsXm6LRpQQfNL%2F1CXoQxsNYr5k587lAykKw2XyuBLXtoyFd3Tjxg0s3AmMw5TXo8bM51msIXDLa5CZT0AZ8p4M73Q&X-Amz-Signature=5308589b6107e691bf01f950aa90c324bcc5f28030928fca913bb3d39778b389&X-Amz-SignedHeaders=host&x-id=GetObject)

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
