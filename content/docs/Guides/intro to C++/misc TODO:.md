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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2HAXFE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDoPYbhMF0%2Bb3fHO5huIm%2BD9hIQ1cj8SuHJebQLAayHdwIgM7TCjmRPyrysgtX67Q7ofk9%2F4CopdMLs16AIYhkirbUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDI3GuE2WfA4KOBUO3CrcA2P5pYWZ1cxwtgQKDK9g5muwMi%2FhSkJtz2n6Uq9bbPJYJZKSjpjbixOPYPYWxt9c9LyDg%2Fv9yEFLNRguQB4wMzykwbNlk1K%2BR0N00Esau1dOV4K%2Fz0LFsgx72aIh0mkFY3kwvxCKsCXVzf8l8TkOue1JMoMs7Usj%2ByQttjBBtzJzzHb6VFZQp%2BYFW3KyNkhIrsnd0RpP12%2Fc3YNFt6YlrZMOw5TNXtKtDCXMNc6TwSNbiQgd3LwA29%2FWRox6bDg5FCsjdBTUHN7n33XxN4DfwQwZedOPTAq1w3wGRTDwcamwINQ7GWvOt9feCTtiohwQdq5JSxxKv13OMfCM2YlB8d4IznJaRsT%2FOhXPpINAFSJrIuTMmUU0RjqtbKtBxRFumG%2Fd0HkuYB7CS222esQ8mBqA5Co0RZ4BzgsokKTaPS0lkLWVHq0XAhu6UUX95IGkZYwhHDfzjssG48i%2BJNHWgiKXkL4wHJhJkRS6yx9r8p2JhIxR8Hw%2BIADxuvyZpeuhWo7Sf%2Bv2VyEb8nlr%2FHVet7xEZHP5jNumwBxEwCAkLvtcUgeqSZwsLGlY3QlIVDIHmue81GlMsXtnkGNM22NqIzEUlscEmdOQLEfsUNAq4a%2Fr8A5w3oXzeDY4zKHuMKGZgsUGOqUBhwTCxARppc4ySXE2EYcuwUfSChgK29NpCox%2FYSBFN1AzlXAnqMWrU42uvbrHqci6XePUtoZyTt9RdQLIpfkn51RZmw7gq2eULA2hqvLs%2FDyCcjhoaw3l80vNfC77K%2B7kvF5foTOx7LhhXzoZxJztjBkuvoQfO776FgdmkcS6vThzFUdrL7CnL375P0F8kkAtFFsl1K0gYGVhBAw0u9ZP9JmP3h49&X-Amz-Signature=2f74f3f3691b9de998069860c5190dce2aa04647c9c7f14cd5056532b034ebd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2HAXFE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDoPYbhMF0%2Bb3fHO5huIm%2BD9hIQ1cj8SuHJebQLAayHdwIgM7TCjmRPyrysgtX67Q7ofk9%2F4CopdMLs16AIYhkirbUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDI3GuE2WfA4KOBUO3CrcA2P5pYWZ1cxwtgQKDK9g5muwMi%2FhSkJtz2n6Uq9bbPJYJZKSjpjbixOPYPYWxt9c9LyDg%2Fv9yEFLNRguQB4wMzykwbNlk1K%2BR0N00Esau1dOV4K%2Fz0LFsgx72aIh0mkFY3kwvxCKsCXVzf8l8TkOue1JMoMs7Usj%2ByQttjBBtzJzzHb6VFZQp%2BYFW3KyNkhIrsnd0RpP12%2Fc3YNFt6YlrZMOw5TNXtKtDCXMNc6TwSNbiQgd3LwA29%2FWRox6bDg5FCsjdBTUHN7n33XxN4DfwQwZedOPTAq1w3wGRTDwcamwINQ7GWvOt9feCTtiohwQdq5JSxxKv13OMfCM2YlB8d4IznJaRsT%2FOhXPpINAFSJrIuTMmUU0RjqtbKtBxRFumG%2Fd0HkuYB7CS222esQ8mBqA5Co0RZ4BzgsokKTaPS0lkLWVHq0XAhu6UUX95IGkZYwhHDfzjssG48i%2BJNHWgiKXkL4wHJhJkRS6yx9r8p2JhIxR8Hw%2BIADxuvyZpeuhWo7Sf%2Bv2VyEb8nlr%2FHVet7xEZHP5jNumwBxEwCAkLvtcUgeqSZwsLGlY3QlIVDIHmue81GlMsXtnkGNM22NqIzEUlscEmdOQLEfsUNAq4a%2Fr8A5w3oXzeDY4zKHuMKGZgsUGOqUBhwTCxARppc4ySXE2EYcuwUfSChgK29NpCox%2FYSBFN1AzlXAnqMWrU42uvbrHqci6XePUtoZyTt9RdQLIpfkn51RZmw7gq2eULA2hqvLs%2FDyCcjhoaw3l80vNfC77K%2B7kvF5foTOx7LhhXzoZxJztjBkuvoQfO776FgdmkcS6vThzFUdrL7CnL375P0F8kkAtFFsl1K0gYGVhBAw0u9ZP9JmP3h49&X-Amz-Signature=7d2f6f9fae5376db1fd845c02ba173b397b7c167ded632d7e85a2987df337798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
