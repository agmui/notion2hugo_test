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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJANUHF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDWuT0LHexNS0HOLUdkGEW3nyKXMNPNlcDC8LW0jdty9gIgLzvNfqwnXl7S6CBuzkyEvEpPE5oQ%2BnkM15%2FryZNfrQ4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDElw1iTF86bQ9FYhEyrcAw5KOewBwYxBKRN7UgKzBg9MHUpb56WlZEenPxkjEJy6WZon3Gv5CzfZCHWbw%2F659H4GXtJVTNa8gOAqcIku3lhOWY2MNas7MuULSId9qIzVaSyL8PR9PbIfaAzFKyr5hDLPeAZlII%2BMUeOh%2FvPqhwmEwAzYRXK8bGrUpAAfw6DBd%2BX%2BufFc3SrorRrH1lDQMrgV%2ByjXZxyqLmjAsf3yYiHUu6ymJ8rTk16z5q0ajHBOrED7ZkJ3BCeF7fQKrtWkBnh7fw9gctqGI4%2Bht9cePajNf0fAOFKJm1DW4%2BDF0FvDvbsbC2WcI1Vylo%2FpkIj9mFLRsFkw0WayFuqovrhBnapzLszUKDWrO7q%2Fl90%2BL%2FrBudcqBg6CFhDTHNWZ0IiYVX2FoLIIfJTTWRUpFLqY2gqpdn%2FNY05Hl7BD3kfJY8fwOSDqohD2iNdCtP%2FE%2Fgi%2FNRgQ9Uiw4kvgykyudRekpDYOHd5xT4njOqVtDlxuVhMSv7OvmViyI4Cfp%2FwpspjbtYglyzj4g1EVjt6nIB6TPXek8qSlYgnBALbsY%2FGymbK53GjSAPOQbTaw6%2BYqVEzAiD2liU%2FRc6I1H8d2Bya%2BZDg1CQHOp9y%2FlVjvLFiANC1VE0bJ%2Bn9ssiUkjovMMNTXl8QGOqUBU%2FUjcyF2NQcFJjdQvUySSZISICRFacwCIPdhViluwI%2FQzanWry1B4x%2FnzfRL2f1pA%2FWVmiQEdieiBPPruz9%2BkwngYFmzZJQWNg5xWufWdtup6pS9a%2B8QlBFmxqiTm8qcRgvkqbAZ6Yoei8vSiU29c0auaeRW0%2BvOuBUonaTaA0wVEprC5cBie9LM0ARruuOIrHoLZVEG8xl64kE7tVoNRtsol09V&X-Amz-Signature=2b4aab1a461281a7f5274a8b6567be92bc10b407c60bd675ee4f22a1f0a399b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJANUHF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDWuT0LHexNS0HOLUdkGEW3nyKXMNPNlcDC8LW0jdty9gIgLzvNfqwnXl7S6CBuzkyEvEpPE5oQ%2BnkM15%2FryZNfrQ4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDElw1iTF86bQ9FYhEyrcAw5KOewBwYxBKRN7UgKzBg9MHUpb56WlZEenPxkjEJy6WZon3Gv5CzfZCHWbw%2F659H4GXtJVTNa8gOAqcIku3lhOWY2MNas7MuULSId9qIzVaSyL8PR9PbIfaAzFKyr5hDLPeAZlII%2BMUeOh%2FvPqhwmEwAzYRXK8bGrUpAAfw6DBd%2BX%2BufFc3SrorRrH1lDQMrgV%2ByjXZxyqLmjAsf3yYiHUu6ymJ8rTk16z5q0ajHBOrED7ZkJ3BCeF7fQKrtWkBnh7fw9gctqGI4%2Bht9cePajNf0fAOFKJm1DW4%2BDF0FvDvbsbC2WcI1Vylo%2FpkIj9mFLRsFkw0WayFuqovrhBnapzLszUKDWrO7q%2Fl90%2BL%2FrBudcqBg6CFhDTHNWZ0IiYVX2FoLIIfJTTWRUpFLqY2gqpdn%2FNY05Hl7BD3kfJY8fwOSDqohD2iNdCtP%2FE%2Fgi%2FNRgQ9Uiw4kvgykyudRekpDYOHd5xT4njOqVtDlxuVhMSv7OvmViyI4Cfp%2FwpspjbtYglyzj4g1EVjt6nIB6TPXek8qSlYgnBALbsY%2FGymbK53GjSAPOQbTaw6%2BYqVEzAiD2liU%2FRc6I1H8d2Bya%2BZDg1CQHOp9y%2FlVjvLFiANC1VE0bJ%2Bn9ssiUkjovMMNTXl8QGOqUBU%2FUjcyF2NQcFJjdQvUySSZISICRFacwCIPdhViluwI%2FQzanWry1B4x%2FnzfRL2f1pA%2FWVmiQEdieiBPPruz9%2BkwngYFmzZJQWNg5xWufWdtup6pS9a%2B8QlBFmxqiTm8qcRgvkqbAZ6Yoei8vSiU29c0auaeRW0%2BvOuBUonaTaA0wVEprC5cBie9LM0ARruuOIrHoLZVEG8xl64kE7tVoNRtsol09V&X-Amz-Signature=6172dd52799acb51b216b04fbf24647b3dcadaf19ad3929be8fd8dbdbb306ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
