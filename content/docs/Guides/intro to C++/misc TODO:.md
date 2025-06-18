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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72MPI4Z%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEewUCwGS7Ocjf11CkbL0XvzjBgNR3JgDmWj62eEmoDQIhAPcnup880MKxjV%2BlgZyoepKHo3X5BHktW1qbHoKmIW%2BIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuhn7AdoQ2xmJH%2FG4q3AMl5ZVbi%2F%2FzJUuF5YjdHw7wb9doXmYLYbpc3aoDqKXREEvQ%2BrWz48VtL%2BYuZbQUbZf6NYqpC4YWxQCQTvcnuCxTj3VSsKY1l%2BwyDP%2Bdx6LnjBSzL4PVGsDgtvAd0MGo5JMncw%2FUKTUFz96CAK6t0bgjTDtPTRZs6USy3HBeUk1G5%2FRweA66U2ZQ5n3Gr34iy7x40u3wVxJ7z%2Baazcs862HVm%2FwnttN0cQYvP%2Bfh4PsmBxDi6V%2Bep23%2BinbsGGQ5u8AHEdV0isj%2B2RTbqB6xGO8Q4WxY0F4MvL8GSX39gEqw6RHuESO62auo%2BQlMCLE1OBv0vcJQ7jhizaAPPTzbjt9c0PtKWa2cfARA9OWQknRqOJUmt6aLwUncb4fRix4hu%2Fg5r9TxrK3Fwn2VgSM0KvZlSBHVWxtnGK7QHNl0LyrNFODTkebT4Ffx%2FKFwhcQrY7xrjRGrCcK7XZhe4B6Xo58liviQJtUnZwZKZH3O42YFjJGnHkrMZPbSwI6hENOo%2BgS0BdMS7Q0QXMuRzeWm4ZaiPU8RaUoX%2B6InBAU%2BUmv7TEIbJAw8AJFakie1WYrPC2BDQ0kSlyRhwwEoAJ1LZSsYC6J0B3OgPN3sXxRBbDa3Ldy5XqWMQaRhsegL%2FjDftsrCBjqkAWp6eHQTzXAbnLTMqVkuG5Z4%2BP8Bz5Pi41vCxlOvo%2FI3TePD2EAnTLvT2U0wpngLo%2F1OoQVbNIkQ3mOHugWokEuUvWpWQ8eGVsMaAdygLLsEn2TSj6xcOA%2BMLDYMizPMpWdiE8izETkdGQHFPc%2BoxdsG8jWxwQ%2B98AccI20kVO6La7x7J2jTel7TxGsWQvJYbl8mCEs9kgw20UmvDakQqK%2F7eUC7&X-Amz-Signature=e92c5d7a00a3fbaeaaa27504e571beac354b36c15d94edf855f88860c205a4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72MPI4Z%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEewUCwGS7Ocjf11CkbL0XvzjBgNR3JgDmWj62eEmoDQIhAPcnup880MKxjV%2BlgZyoepKHo3X5BHktW1qbHoKmIW%2BIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuhn7AdoQ2xmJH%2FG4q3AMl5ZVbi%2F%2FzJUuF5YjdHw7wb9doXmYLYbpc3aoDqKXREEvQ%2BrWz48VtL%2BYuZbQUbZf6NYqpC4YWxQCQTvcnuCxTj3VSsKY1l%2BwyDP%2Bdx6LnjBSzL4PVGsDgtvAd0MGo5JMncw%2FUKTUFz96CAK6t0bgjTDtPTRZs6USy3HBeUk1G5%2FRweA66U2ZQ5n3Gr34iy7x40u3wVxJ7z%2Baazcs862HVm%2FwnttN0cQYvP%2Bfh4PsmBxDi6V%2Bep23%2BinbsGGQ5u8AHEdV0isj%2B2RTbqB6xGO8Q4WxY0F4MvL8GSX39gEqw6RHuESO62auo%2BQlMCLE1OBv0vcJQ7jhizaAPPTzbjt9c0PtKWa2cfARA9OWQknRqOJUmt6aLwUncb4fRix4hu%2Fg5r9TxrK3Fwn2VgSM0KvZlSBHVWxtnGK7QHNl0LyrNFODTkebT4Ffx%2FKFwhcQrY7xrjRGrCcK7XZhe4B6Xo58liviQJtUnZwZKZH3O42YFjJGnHkrMZPbSwI6hENOo%2BgS0BdMS7Q0QXMuRzeWm4ZaiPU8RaUoX%2B6InBAU%2BUmv7TEIbJAw8AJFakie1WYrPC2BDQ0kSlyRhwwEoAJ1LZSsYC6J0B3OgPN3sXxRBbDa3Ldy5XqWMQaRhsegL%2FjDftsrCBjqkAWp6eHQTzXAbnLTMqVkuG5Z4%2BP8Bz5Pi41vCxlOvo%2FI3TePD2EAnTLvT2U0wpngLo%2F1OoQVbNIkQ3mOHugWokEuUvWpWQ8eGVsMaAdygLLsEn2TSj6xcOA%2BMLDYMizPMpWdiE8izETkdGQHFPc%2BoxdsG8jWxwQ%2B98AccI20kVO6La7x7J2jTel7TxGsWQvJYbl8mCEs9kgw20UmvDakQqK%2F7eUC7&X-Amz-Signature=e1821eb235e11ad40e1d3328fc555471859d180c6d3b8d206f75dd6a2d6c1a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
