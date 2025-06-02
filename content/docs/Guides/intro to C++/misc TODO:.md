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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLNFVSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDQOoYCGJw74ggcafFZESanUk3UsNrglf3wJ8NdfG3OmQIgbDwwQaeQ7KSRDHIZqi6968we3%2BzMfmIwoTlam6RCpRcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAczp8KGrfT3Z%2B%2FaGCrcA1LvxsHrKnpbl2HpZWjqosheVTDx98jn2%2FLDr%2BVjqA%2FfkoFHRKCfopMcCdVXL5yCUka33wE%2BaJyHNMoC8a0wtOio%2FFvV166W9pW7lOAM2kYvpjSYIgZfIbfjlUwI69H9jXKfdg3S7bmUwFEYrRWZMY37GVkXxIcToMt6TyJHJv%2FEldWR8pMCDjeNpB5j%2FhDCF%2FOzbpnWaOj2IRib%2F5dzXrnKWADywXq9lOZnQMGP3poLI6myZnTvCpFkuwIcANSy5s09EzCclWTj61924BFCmqBNSp5l7KgJmBWQ2b7EoDphpFpdEoUGMpTs7qQ0x9%2BgNIUcOl516o%2FU%2BFYdwj1e%2FD51M%2FOPHTxxwS%2FkmaT0dwjnK2%2F%2BEZUOfMDwZ%2Bm8BWqjIMOB1SbMOcypVHsMaOjiNpm6BnHyMhZV5jeeLGLtKVU2Z4ncjved24kQZamdw4S5MnjS%2FN8%2BGGIwAeueQfGcSH%2FkCo5DOz8V4iWIqDQOMQk7No9A9c83eQy%2FIStaFC2T%2BICt2u7%2FS8U5Y7%2FnnkFBKyQAmIOUli0rSisTzuWsGWt0tR%2B7zfXttPisv9q%2FjpR3Wr4LKna0oeeqvTT9Z51GZ7SwpRAQBtVqjltlHHztwvvJ1%2Fs73wjfDLbjzqCOMNj588EGOqUBSV2YIu8iACnSkwfLoFNc6kpio255FlIL9LaETH3QafS3r6MJnk8UjSlZYq4Qv%2FWjMPHtagCnndXQm35pTBcEHNZZq5fFs2Ur8p9azziWLIjP5wyk4rfXeGSHlgVmaPzN%2FDscLwTBXr7AR8ipTjX8GQEfZVAHHeOgsBdssNLspOO9mu4EDOMws%2Byh4%2BCIHsN6vnSQeDwCQiMb8Pi2WfrBn7C%2Bz7oG&X-Amz-Signature=71cf47a08ca536f0bc13d7913002b56d7b13de3c05ec6448e8eef94132fb341c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLNFVSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDQOoYCGJw74ggcafFZESanUk3UsNrglf3wJ8NdfG3OmQIgbDwwQaeQ7KSRDHIZqi6968we3%2BzMfmIwoTlam6RCpRcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAczp8KGrfT3Z%2B%2FaGCrcA1LvxsHrKnpbl2HpZWjqosheVTDx98jn2%2FLDr%2BVjqA%2FfkoFHRKCfopMcCdVXL5yCUka33wE%2BaJyHNMoC8a0wtOio%2FFvV166W9pW7lOAM2kYvpjSYIgZfIbfjlUwI69H9jXKfdg3S7bmUwFEYrRWZMY37GVkXxIcToMt6TyJHJv%2FEldWR8pMCDjeNpB5j%2FhDCF%2FOzbpnWaOj2IRib%2F5dzXrnKWADywXq9lOZnQMGP3poLI6myZnTvCpFkuwIcANSy5s09EzCclWTj61924BFCmqBNSp5l7KgJmBWQ2b7EoDphpFpdEoUGMpTs7qQ0x9%2BgNIUcOl516o%2FU%2BFYdwj1e%2FD51M%2FOPHTxxwS%2FkmaT0dwjnK2%2F%2BEZUOfMDwZ%2Bm8BWqjIMOB1SbMOcypVHsMaOjiNpm6BnHyMhZV5jeeLGLtKVU2Z4ncjved24kQZamdw4S5MnjS%2FN8%2BGGIwAeueQfGcSH%2FkCo5DOz8V4iWIqDQOMQk7No9A9c83eQy%2FIStaFC2T%2BICt2u7%2FS8U5Y7%2FnnkFBKyQAmIOUli0rSisTzuWsGWt0tR%2B7zfXttPisv9q%2FjpR3Wr4LKna0oeeqvTT9Z51GZ7SwpRAQBtVqjltlHHztwvvJ1%2Fs73wjfDLbjzqCOMNj588EGOqUBSV2YIu8iACnSkwfLoFNc6kpio255FlIL9LaETH3QafS3r6MJnk8UjSlZYq4Qv%2FWjMPHtagCnndXQm35pTBcEHNZZq5fFs2Ur8p9azziWLIjP5wyk4rfXeGSHlgVmaPzN%2FDscLwTBXr7AR8ipTjX8GQEfZVAHHeOgsBdssNLspOO9mu4EDOMws%2Byh4%2BCIHsN6vnSQeDwCQiMb8Pi2WfrBn7C%2Bz7oG&X-Amz-Signature=0615fdf2d645ec94cc3e3428fc5d6a372af226aa57498a39b90f2e11d01df6de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
