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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZY5N67%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB9eN4VSoXVPBRSdzjB%2BldT21rF5VMXP31YcAfgS5pgIgMkSDTZG0w%2B0YLIqp11CiZ4hk%2BNBlbFLGx%2BiVrgqiOgoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb3qSFpvDB7MysWCSrcA%2FH9tYGNNDW1vTLUCrD6IJqnhRO0TbjkyVI1QrPz9cU2VfyEELSSsRfsAdMaI%2BuZQWUyTc2EI%2B8QBIUOCzPv1F6pKIJIbaQT9kXzpBnSMeaBy%2Fi5dgQ7NMlPk4Rqv0qwvX2%2FGW1tRKJPoLvUbIEJXBToBpoY6IJ%2BLGQ92FMLP7fOH5cOB24b1hKHx8rnSR7Fz8FCIgopywoomWSKtRYx8yfvUS8n%2BweAY5JMdLxjnLRhExUXz%2B%2BYf1xj04kHxrJAHjYHbARmkG2bjEOaVd3HIWtWBGo7YgmdRFnkNRVT92dSa4k61Wk2fmQtAmW64UaXtjkq70BCkEAYgAlJSKtShxIZ8uHjzSxYus%2BV5G0J4FKZGy5guGNk4z%2F4oVUJE8fwVOYFFy%2BrPoPaC4c2fe74E%2Brv2eeDFVqkqiZZ4l%2F9SxlYDclBIIGvAqQG88KNLbWIWsTLb%2B%2BzoNaj%2FZ0HLHVsUF3mEe2rrz1JT2QJFqZrDepkgwrp30dkOuSEmYo%2F5aqF9qbNnpUeO2ap00W2KYQc0HH0XCp%2FMS48WAq%2FIL6Pz1y93UZ7jihmAdQGz4eRrPaXsbJ47DJ6uUcN2K%2BFZrhb9i%2FtJlIgdrLDyxVb3oPmD4E0icehCQdyiWD1iZdFMOiI0MIGOqUB8NTzgafnIDpxnvvG791ZfvKa2bEZtHOFWupKFlrmovxOO1ZDDFar52UfPeyl%2Bz6UjPx5W9oe9xMTJBBbU%2FLD41tDY9AlnqaDM9d%2BPRF6X1GByaHZVQkTcS6X7YcKlZFXy1Y%2FhWRnM3fRvmfoRO%2BMHKawOUzWm%2Fpq38D63Su8%2F9WgyIxuWE1LW%2B1h3PPhC0OLaSbf5KHJ9MpV%2BwMgRHtGuEfSXfZR&X-Amz-Signature=12c2425dab09ff4e601fb33913086f7714f5f8f5855a0b8fafdfd7728a166d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZY5N67%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChB9eN4VSoXVPBRSdzjB%2BldT21rF5VMXP31YcAfgS5pgIgMkSDTZG0w%2B0YLIqp11CiZ4hk%2BNBlbFLGx%2BiVrgqiOgoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb3qSFpvDB7MysWCSrcA%2FH9tYGNNDW1vTLUCrD6IJqnhRO0TbjkyVI1QrPz9cU2VfyEELSSsRfsAdMaI%2BuZQWUyTc2EI%2B8QBIUOCzPv1F6pKIJIbaQT9kXzpBnSMeaBy%2Fi5dgQ7NMlPk4Rqv0qwvX2%2FGW1tRKJPoLvUbIEJXBToBpoY6IJ%2BLGQ92FMLP7fOH5cOB24b1hKHx8rnSR7Fz8FCIgopywoomWSKtRYx8yfvUS8n%2BweAY5JMdLxjnLRhExUXz%2B%2BYf1xj04kHxrJAHjYHbARmkG2bjEOaVd3HIWtWBGo7YgmdRFnkNRVT92dSa4k61Wk2fmQtAmW64UaXtjkq70BCkEAYgAlJSKtShxIZ8uHjzSxYus%2BV5G0J4FKZGy5guGNk4z%2F4oVUJE8fwVOYFFy%2BrPoPaC4c2fe74E%2Brv2eeDFVqkqiZZ4l%2F9SxlYDclBIIGvAqQG88KNLbWIWsTLb%2B%2BzoNaj%2FZ0HLHVsUF3mEe2rrz1JT2QJFqZrDepkgwrp30dkOuSEmYo%2F5aqF9qbNnpUeO2ap00W2KYQc0HH0XCp%2FMS48WAq%2FIL6Pz1y93UZ7jihmAdQGz4eRrPaXsbJ47DJ6uUcN2K%2BFZrhb9i%2FtJlIgdrLDyxVb3oPmD4E0icehCQdyiWD1iZdFMOiI0MIGOqUB8NTzgafnIDpxnvvG791ZfvKa2bEZtHOFWupKFlrmovxOO1ZDDFar52UfPeyl%2Bz6UjPx5W9oe9xMTJBBbU%2FLD41tDY9AlnqaDM9d%2BPRF6X1GByaHZVQkTcS6X7YcKlZFXy1Y%2FhWRnM3fRvmfoRO%2BMHKawOUzWm%2Fpq38D63Su8%2F9WgyIxuWE1LW%2B1h3PPhC0OLaSbf5KHJ9MpV%2BwMgRHtGuEfSXfZR&X-Amz-Signature=cfdeb53a56434ce2bee01540b3f05071149fb86c8ba7a04a53e08d2e02042030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
