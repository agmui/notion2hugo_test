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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOG7JMP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDY1w%2Bv%2FOqtmMZjnK3rOhtKWw0X6cf2e3fhNLMdmVI37gIgdcDQBQ14DmNz5qe6lBQyyxnY2vR68iNA6x1FSji1kqwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ84zDUmy4n5idOE7CrcA2EoUh1zK5l8lCAf12uKQEulVz06KWjzE%2BG5bGAX5eo4baXNCfPHN6Qsceh72DFAoBvlJk3KLZGoaa7E%2BMOC31%2BUvEyfNTQyOqo42gjvWfld36dN2%2FNxxo2WH14k5KGQM9e2apNyKxDtTlXyJu5RgO6a3%2BjdyU8s6%2FOENqdLVArWBDRMlXvN4v58lP2p%2FNmM3GjpW%2FRVPCuy38hmK1uZMTDRmFFNyAPLgM1C2%2FQSRvs2jMNbKsbSZPWUEws4rMWRqWDGDdTGBLYOJ%2FaO6%2FZgeCvVa9Eg0eaC9AaC4HQinFAO64XNo4kxLMQzjSIFmyuUeiqOOh%2BVzjDDv1bSZZ4au5QxNrKwHM11AbNOrjosTSduEEpgSJrIJreZ5XfLW7acP5Blq3H6sDw7E4KF6Jp1BzIUBwGfpQ%2FwWtpVkjJCSftKdb3EQwFxlDTr622e8b70bk3SPfHBPB83WYYiqYm7au0b9te%2BO%2BezanWiMQj3z15b2FOrTHqAleWLx8P9QNALT5JwkzCf115ZMXop%2BBf20Vyqxgu1iRLqSRaJVbKOfcnirBZFkU3%2FlERiQSlGZPXGB3arZpbYuQQUHxknbTolcjYP1hrUaHzF1jnv%2FQAdKuUIrkbr6mh8aCHw6jNTMIO6ksEGOqUB0JQToMW5vsUUzNPMIMPLokSO7Am1Ey%2FDylDkX4e0uC7zsZ6VChXqiuub7ics6TAa43Ic8IFv3Nse1L%2F4XI084%2B%2FTWLmW%2BPgNcF85r%2F0UIe3IZK8dvdL5ET%2FRVbEGKWkf6CEPmi7tqu%2BGiG3aHiufFUbYSUTT2NSRx64pvc6Uqf5HChUm9twBaSI1MPnC3GIIZzI2jASMs23zPDL%2BqdJjWZgUvrlI&X-Amz-Signature=45dfd43c8e0497cd14679504b523864f5f4b70cd5d9d94c67895313ed3c09245&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOG7JMP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDY1w%2Bv%2FOqtmMZjnK3rOhtKWw0X6cf2e3fhNLMdmVI37gIgdcDQBQ14DmNz5qe6lBQyyxnY2vR68iNA6x1FSji1kqwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ84zDUmy4n5idOE7CrcA2EoUh1zK5l8lCAf12uKQEulVz06KWjzE%2BG5bGAX5eo4baXNCfPHN6Qsceh72DFAoBvlJk3KLZGoaa7E%2BMOC31%2BUvEyfNTQyOqo42gjvWfld36dN2%2FNxxo2WH14k5KGQM9e2apNyKxDtTlXyJu5RgO6a3%2BjdyU8s6%2FOENqdLVArWBDRMlXvN4v58lP2p%2FNmM3GjpW%2FRVPCuy38hmK1uZMTDRmFFNyAPLgM1C2%2FQSRvs2jMNbKsbSZPWUEws4rMWRqWDGDdTGBLYOJ%2FaO6%2FZgeCvVa9Eg0eaC9AaC4HQinFAO64XNo4kxLMQzjSIFmyuUeiqOOh%2BVzjDDv1bSZZ4au5QxNrKwHM11AbNOrjosTSduEEpgSJrIJreZ5XfLW7acP5Blq3H6sDw7E4KF6Jp1BzIUBwGfpQ%2FwWtpVkjJCSftKdb3EQwFxlDTr622e8b70bk3SPfHBPB83WYYiqYm7au0b9te%2BO%2BezanWiMQj3z15b2FOrTHqAleWLx8P9QNALT5JwkzCf115ZMXop%2BBf20Vyqxgu1iRLqSRaJVbKOfcnirBZFkU3%2FlERiQSlGZPXGB3arZpbYuQQUHxknbTolcjYP1hrUaHzF1jnv%2FQAdKuUIrkbr6mh8aCHw6jNTMIO6ksEGOqUB0JQToMW5vsUUzNPMIMPLokSO7Am1Ey%2FDylDkX4e0uC7zsZ6VChXqiuub7ics6TAa43Ic8IFv3Nse1L%2F4XI084%2B%2FTWLmW%2BPgNcF85r%2F0UIe3IZK8dvdL5ET%2FRVbEGKWkf6CEPmi7tqu%2BGiG3aHiufFUbYSUTT2NSRx64pvc6Uqf5HChUm9twBaSI1MPnC3GIIZzI2jASMs23zPDL%2BqdJjWZgUvrlI&X-Amz-Signature=bd09492c617b3fbe21ae8ed616991a5732494615adede5ca1f3d00ed2545dc13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
