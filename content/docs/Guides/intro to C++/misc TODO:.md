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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDCUJLZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf550eQ7lzPhuK31lAlo4DgEtORfZ%2BS9Pib30svUwclAiEA%2F8bP8EYOZ0SVorUZCZoYtQcWZ%2FpJ7aILMr5KQsZCTcYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILKM7W0OVJAEuX%2FyCrcA4P2HzrBH6Q1O2V566fQLDMcQeypRxdJuI5uoO9Sp6x4o3EJakOIR9fjcMFb4lzB9MZNVnWUNZXdiHkpBy2J62EI2Hp8LWj7u6k5mTWCCfXDBi%2BFJ3Kkz6F3zwJ%2F8xh2JIL8NTlgEXqg6CEq%2F%2FmGjDSQ%2FzDS%2BKAkuznC91ftABrZSkvum7U3vDtQbWU03JqXjbceyIHCOTfoKcrTl1UVRxOTlkdPcYoPffzajIHeg7kLqnDn9jG1s0wIft40BOPPenRzN9fab%2FokeeTFcfJ0x%2F%2FHMP6FoXjC9FDq6tbGJfXbtM8LQ%2BkXnEHLrRAHR1ettYPYoZ87txRXdnqlRISEu58OVigOxIUsu%2B5KNBdGmcVXDqfylNVf3rOLYeYHxx7pCjULHLZRnIVqoNqwxvsHPAtkw92orpBFs5RyS3gqZ6gAxildJw949K8tTtPFMN6xcVeWBOxxqTuErSPfoeRgo93Jlgev%2BMEUkj0%2FOXwxagWFHIQTNzDnk%2FJF7fkoRT60F9MGIDls1XyoLYrPai21hW9FRtpwa4dsLMDQ8ZjCORlZNoPs4RWg351jpp3eHvQ9WfrfOkDUQzGFruKA2uxUsekd1R5Mhga7UoXn5%2B97tSmEuUF%2FmuHi0TZT1YVTMO7Zlr4GOqUBdxx8sfdBkncbCHWUja%2F99yyHQwAyWcB4JcaSBuzoAmaGeAYJ22o2GUd4UCsZCqS74Fi4pnxMtnWJTn15kcNXw5zfKQfgm0H44ROLqZzJHF0WFAN0UMLEb2WitZLxTyNzsDIVpwVKOPvakl9%2BhZOVOTE4FGEKklRnepMcDUmBGYqGV5vkoXBOeqMpGJIazmHhvwi3T9a3e8XBj61RdIDUGnHWt%2BaL&X-Amz-Signature=c3b22e9378c83a8886aa26b9483ef88103b97cc426ec2de1fca82be454b03dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDCUJLZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf550eQ7lzPhuK31lAlo4DgEtORfZ%2BS9Pib30svUwclAiEA%2F8bP8EYOZ0SVorUZCZoYtQcWZ%2FpJ7aILMr5KQsZCTcYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILKM7W0OVJAEuX%2FyCrcA4P2HzrBH6Q1O2V566fQLDMcQeypRxdJuI5uoO9Sp6x4o3EJakOIR9fjcMFb4lzB9MZNVnWUNZXdiHkpBy2J62EI2Hp8LWj7u6k5mTWCCfXDBi%2BFJ3Kkz6F3zwJ%2F8xh2JIL8NTlgEXqg6CEq%2F%2FmGjDSQ%2FzDS%2BKAkuznC91ftABrZSkvum7U3vDtQbWU03JqXjbceyIHCOTfoKcrTl1UVRxOTlkdPcYoPffzajIHeg7kLqnDn9jG1s0wIft40BOPPenRzN9fab%2FokeeTFcfJ0x%2F%2FHMP6FoXjC9FDq6tbGJfXbtM8LQ%2BkXnEHLrRAHR1ettYPYoZ87txRXdnqlRISEu58OVigOxIUsu%2B5KNBdGmcVXDqfylNVf3rOLYeYHxx7pCjULHLZRnIVqoNqwxvsHPAtkw92orpBFs5RyS3gqZ6gAxildJw949K8tTtPFMN6xcVeWBOxxqTuErSPfoeRgo93Jlgev%2BMEUkj0%2FOXwxagWFHIQTNzDnk%2FJF7fkoRT60F9MGIDls1XyoLYrPai21hW9FRtpwa4dsLMDQ8ZjCORlZNoPs4RWg351jpp3eHvQ9WfrfOkDUQzGFruKA2uxUsekd1R5Mhga7UoXn5%2B97tSmEuUF%2FmuHi0TZT1YVTMO7Zlr4GOqUBdxx8sfdBkncbCHWUja%2F99yyHQwAyWcB4JcaSBuzoAmaGeAYJ22o2GUd4UCsZCqS74Fi4pnxMtnWJTn15kcNXw5zfKQfgm0H44ROLqZzJHF0WFAN0UMLEb2WitZLxTyNzsDIVpwVKOPvakl9%2BhZOVOTE4FGEKklRnepMcDUmBGYqGV5vkoXBOeqMpGJIazmHhvwi3T9a3e8XBj61RdIDUGnHWt%2BaL&X-Amz-Signature=1ef7e1cf6e9194e8ca65084eed6b70aaee074f1d12040a4cb2d29c82832c5389&X-Amz-SignedHeaders=host&x-id=GetObject)

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
