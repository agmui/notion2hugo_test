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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZHZPMN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZFcGdQQeqAY18XpLh%2BMYVVWZlZ5zEyN7XdHzXS4n3iAIgU%2Br63rB%2BjzGXTyLitcQfSyfth9aWa2QEC3Uw3W8lcxYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDG3aXXPCmS%2FQ8p1gJCrcA7sGf2lJXnltR7v%2FfWfOKIwQzTnBwbUIGhhDAQG8JLu25n8NNpM8rLuIYB5QCtxsb%2BmJHyFrmgYYDN5U1MxXbAyjJDo%2FtUYkyg1q6SklbWICTvyQmCHvX4wDDzYq3gKp2Q%2Bdi0E1T1MgpzKbFVE%2FbYZg%2FoqJUD%2Bx31sEiogWDISacumsEUJYVHOVEs3UsBHuEkZKHSzjP77wBHMjmE%2F545A0oxuAhfE%2FELAsOPCb1KU5nu9plzH4QzBCRz8SIO2ewlJ0yAyutkFF40xG98S5QIMCmlrkSCVRrb8ZsJyKnTqtmGvaVf1kjCXf9mqRe0JRVQTuptYkLlDjiq8GIOKfFMFgvy%2BQItZZly%2Bj0Uh1r6ftBm9cM3SJIZR2IwnqjiF%2FAiy7XbP%2BoO8kIMWGw98PPZjBISJ57aZ7AdYWwGSqgg4NpKpQ29twyJ2XjihjssApkCbnLgxZX9X%2BhbZTg7v3GJ6qQerwPZ0pr7pM47lQlnUBW1F1Rjk8VHOodIG5iYXG2LRdVtXO0P1wj%2Fv3asX%2BC7qREAzHeUWkDxpdAXRWiyQ8KQC05z6bRfKxDa4p1O4ttzkDDnfOwImq5IcnpEKw6oaWx30OV%2FpIASXh9Vnprx4OxwXL5OaopgIo1r%2BrMITSmr8GOqUBn5vBnRporOsK9Gw3AR9PN2mgZPasKbslpYINUshSRe52C%2FM%2FdewH9o9awEtKfBKB65kWMWTWI%2BQRU8ujCd%2B7cKekA4mwCQrv5EP13QnPcUvpDdYTTXf5uRg5%2FbCoznqLtBLUlmH2cEOPD53IM1sHrLII5uyr79zbY419Cp5llUnNUjZi%2BexnXtHQ0OC1hJmW9ekMetJCg3rVbKbrq3eMlwmO9RbC&X-Amz-Signature=b305d473db4ddcfa5b0823064f330e4ae43ca969d88ee714cbca93c542c76c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZHZPMN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZFcGdQQeqAY18XpLh%2BMYVVWZlZ5zEyN7XdHzXS4n3iAIgU%2Br63rB%2BjzGXTyLitcQfSyfth9aWa2QEC3Uw3W8lcxYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDG3aXXPCmS%2FQ8p1gJCrcA7sGf2lJXnltR7v%2FfWfOKIwQzTnBwbUIGhhDAQG8JLu25n8NNpM8rLuIYB5QCtxsb%2BmJHyFrmgYYDN5U1MxXbAyjJDo%2FtUYkyg1q6SklbWICTvyQmCHvX4wDDzYq3gKp2Q%2Bdi0E1T1MgpzKbFVE%2FbYZg%2FoqJUD%2Bx31sEiogWDISacumsEUJYVHOVEs3UsBHuEkZKHSzjP77wBHMjmE%2F545A0oxuAhfE%2FELAsOPCb1KU5nu9plzH4QzBCRz8SIO2ewlJ0yAyutkFF40xG98S5QIMCmlrkSCVRrb8ZsJyKnTqtmGvaVf1kjCXf9mqRe0JRVQTuptYkLlDjiq8GIOKfFMFgvy%2BQItZZly%2Bj0Uh1r6ftBm9cM3SJIZR2IwnqjiF%2FAiy7XbP%2BoO8kIMWGw98PPZjBISJ57aZ7AdYWwGSqgg4NpKpQ29twyJ2XjihjssApkCbnLgxZX9X%2BhbZTg7v3GJ6qQerwPZ0pr7pM47lQlnUBW1F1Rjk8VHOodIG5iYXG2LRdVtXO0P1wj%2Fv3asX%2BC7qREAzHeUWkDxpdAXRWiyQ8KQC05z6bRfKxDa4p1O4ttzkDDnfOwImq5IcnpEKw6oaWx30OV%2FpIASXh9Vnprx4OxwXL5OaopgIo1r%2BrMITSmr8GOqUBn5vBnRporOsK9Gw3AR9PN2mgZPasKbslpYINUshSRe52C%2FM%2FdewH9o9awEtKfBKB65kWMWTWI%2BQRU8ujCd%2B7cKekA4mwCQrv5EP13QnPcUvpDdYTTXf5uRg5%2FbCoznqLtBLUlmH2cEOPD53IM1sHrLII5uyr79zbY419Cp5llUnNUjZi%2BexnXtHQ0OC1hJmW9ekMetJCg3rVbKbrq3eMlwmO9RbC&X-Amz-Signature=bcd5d81b92eb681752754cdb19b234741d6531d6b3eb5abfd934cea89fb01928&X-Amz-SignedHeaders=host&x-id=GetObject)

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
