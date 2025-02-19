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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4QYO4K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQClQc%2Bq8bEs6LmO24XznnNvFoU2WepBBkAcabqYhlijRgIgViJ6o6L10NN8xGb6DH984aD0s9Be5wtuYlTotLuZeHUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGe490puwEvvNc9YyrcA67dBw0E34ePeRkKnSrdS6QWB2Oe5Sv3Dxy5HAdp2pUMESJgliVp3UdcO9BRz1CfB17l2619BaNKGEKEJtMav1Ji3cm5HUi9aqO7zUJlnE9cwOsClC1wFfCiqA9DaItdWr84nJUlPGL8CI5seMBHdfGnBtsqXcI2qlsqwoepZxvjqf2QBzU8A1ALb6W83NAZEAuPj9lQTmICH7w5xo3FG63KcjDlkB9rGRNoYAS0ORymbhKpl6DGJXMNwTxgqSnKaEQrcmmk7iXG4Ea01O75OrpiU7vxhDzA9S61uVaCcz4ToQn9cMIr3eev1kFna%2BYeXP3jd4X9PjIkfOUbVsCAf4lyw7e9oPV35sJL%2FfKoZ0CG7G0FfJL2RKrdeRKs3G2mwNlo5x6dSbiR0ay52apG6%2FjU7jC4%2B%2BdzqDUzl6zIEF%2FhBsaQBdMRLq3wTda6aYX4A2qAyNZs1Dn9YMT0O0Js1BLSGcvSPgJcPmSls2lw6Kcamm9W1Ak4FpauDvIUCtckWDW8uifJSVjycAAVe517a4cVeMGHSNkLgMxUjgmN%2F7FDa4htojlyjKkkWDrcXZjMsjwQPujmztEypa5nh4NqR07xNm5wifEf8eEuGEKbkct6Vytuxjdzh1KYnTEsMPvo1L0GOqUBz9SbrvteQdlWgWEGAD%2Bnl8y1KeqzFePZkVPqb8PSwZviGNq2gWFMfW%2FMyZ7T2Ra5KGVj5HrYL%2BdjWoaDZRjNcjET9swA5fQf2y90CSmJPgjxlexFc7jUt3bB6JI9WT%2Fbw4GvJFS8ckEt9zQrelwacebQ1jMmk%2FYHRRhcjug8L0jp4eYnPxx2iQ%2FO0QiVwg3%2BUPp3xF4CnojhRyoe3ekREKDdBY9c&X-Amz-Signature=f9d345bd737354eef32a4fc5d6ce4c69c3ae40369255ccee3168339c7dd519fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4QYO4K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQClQc%2Bq8bEs6LmO24XznnNvFoU2WepBBkAcabqYhlijRgIgViJ6o6L10NN8xGb6DH984aD0s9Be5wtuYlTotLuZeHUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGe490puwEvvNc9YyrcA67dBw0E34ePeRkKnSrdS6QWB2Oe5Sv3Dxy5HAdp2pUMESJgliVp3UdcO9BRz1CfB17l2619BaNKGEKEJtMav1Ji3cm5HUi9aqO7zUJlnE9cwOsClC1wFfCiqA9DaItdWr84nJUlPGL8CI5seMBHdfGnBtsqXcI2qlsqwoepZxvjqf2QBzU8A1ALb6W83NAZEAuPj9lQTmICH7w5xo3FG63KcjDlkB9rGRNoYAS0ORymbhKpl6DGJXMNwTxgqSnKaEQrcmmk7iXG4Ea01O75OrpiU7vxhDzA9S61uVaCcz4ToQn9cMIr3eev1kFna%2BYeXP3jd4X9PjIkfOUbVsCAf4lyw7e9oPV35sJL%2FfKoZ0CG7G0FfJL2RKrdeRKs3G2mwNlo5x6dSbiR0ay52apG6%2FjU7jC4%2B%2BdzqDUzl6zIEF%2FhBsaQBdMRLq3wTda6aYX4A2qAyNZs1Dn9YMT0O0Js1BLSGcvSPgJcPmSls2lw6Kcamm9W1Ak4FpauDvIUCtckWDW8uifJSVjycAAVe517a4cVeMGHSNkLgMxUjgmN%2F7FDa4htojlyjKkkWDrcXZjMsjwQPujmztEypa5nh4NqR07xNm5wifEf8eEuGEKbkct6Vytuxjdzh1KYnTEsMPvo1L0GOqUBz9SbrvteQdlWgWEGAD%2Bnl8y1KeqzFePZkVPqb8PSwZviGNq2gWFMfW%2FMyZ7T2Ra5KGVj5HrYL%2BdjWoaDZRjNcjET9swA5fQf2y90CSmJPgjxlexFc7jUt3bB6JI9WT%2Fbw4GvJFS8ckEt9zQrelwacebQ1jMmk%2FYHRRhcjug8L0jp4eYnPxx2iQ%2FO0QiVwg3%2BUPp3xF4CnojhRyoe3ekREKDdBY9c&X-Amz-Signature=01d8376fa42acff00b537ad73b1fb21626ae0bd3f042a2e29991750814be32dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
