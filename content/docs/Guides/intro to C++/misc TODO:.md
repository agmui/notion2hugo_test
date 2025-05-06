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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOKQLV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDe16gMB7VrHm6AOV2ZZFOqE2%2Fi5qsGwT2AmREqZvFmAiAE0ov2IDYS2sRjWF0fF6tXHpSoKOmo3R8f6SV1cJSHhyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZVnVN3TDpLR9A2hBKtwDEXPw7FlEzyQEKmaEDVY1K9rl5smXNimtF3Tk%2BPv2ezTxDdTqa%2BHQk%2FGY%2FdUPwSWYQCcEwV0SEz61VHbOP0JnoAnsKkol27lqyX2jInsWEMACIZBHJs%2F190V91v771WyL%2BCvS8O659S6paFcBhcEn1IMSXADxfvF5S2amD%2F%2F7k5mLUKORglg%2FEbQqa9lEafzepXEwzqtHbBSSOIlWnDGi98lYocGCFMyil3P%2BKo%2B983Fe0p55%2FSM5L9Be%2BEOgiQe0VRzedDSA3RCzWc1yfDWNtFvExPiiYEEf76CxQE5n4MBId9lBkbxx7rKrLDP2vOzPr0b%2FdxWWXLjXmf9Pdi996xN0u3LO4oEi4GzHuSAuYOu3LrjVoZP0nDbKdHFO9IhA8oGyVGfmwm7hRHI4VwIn%2FB3X4B7TKJwhwXmSWT7F1UnNpA4B%2B72mveR8%2FRVrOyvPPU6et6J1Da%2B%2FKA03xS7EwCVgEf6%2F4nDyN%2FvePWelRUeiy69mQ3xeZVVv0FUN1v28VRdyQSmeKqILF%2BvzW0rOFgxwBLl552KcR5zLycJsp0vvvvhdMI%2BoR%2FxIu3D9nJ8FppukOIKPNWflhCx%2Be30hsrRjcvme2HNv%2BBFk2ul9MgmgtoajfKrOwWMLk64w9rDmwAY6pgG6v0OP8xtEGhYFc%2FphUWelRKVYvCEcX8k3Cro%2BHlbuS30yaSO%2FlELueFTDAgHiMPmsrWzb0SW%2FgeMS%2FJxo38UiHSDjDZq7bbG9MWGpBTijbG0Zljd8iBTpuddGimAltdighZAjGZy4LuyeXWo3UruMfV3SmxhrdTlR8KCRNvvwBrE2dA64KLh8KxnRX1Xod4dpTI2Q8BdzS%2BqgaytZC%2FCpp%2Fy1S1LO&X-Amz-Signature=be6c2d8b7fe15c6d79576a118442441d41f4e3598534620c96928001faad87a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOKQLV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDe16gMB7VrHm6AOV2ZZFOqE2%2Fi5qsGwT2AmREqZvFmAiAE0ov2IDYS2sRjWF0fF6tXHpSoKOmo3R8f6SV1cJSHhyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZVnVN3TDpLR9A2hBKtwDEXPw7FlEzyQEKmaEDVY1K9rl5smXNimtF3Tk%2BPv2ezTxDdTqa%2BHQk%2FGY%2FdUPwSWYQCcEwV0SEz61VHbOP0JnoAnsKkol27lqyX2jInsWEMACIZBHJs%2F190V91v771WyL%2BCvS8O659S6paFcBhcEn1IMSXADxfvF5S2amD%2F%2F7k5mLUKORglg%2FEbQqa9lEafzepXEwzqtHbBSSOIlWnDGi98lYocGCFMyil3P%2BKo%2B983Fe0p55%2FSM5L9Be%2BEOgiQe0VRzedDSA3RCzWc1yfDWNtFvExPiiYEEf76CxQE5n4MBId9lBkbxx7rKrLDP2vOzPr0b%2FdxWWXLjXmf9Pdi996xN0u3LO4oEi4GzHuSAuYOu3LrjVoZP0nDbKdHFO9IhA8oGyVGfmwm7hRHI4VwIn%2FB3X4B7TKJwhwXmSWT7F1UnNpA4B%2B72mveR8%2FRVrOyvPPU6et6J1Da%2B%2FKA03xS7EwCVgEf6%2F4nDyN%2FvePWelRUeiy69mQ3xeZVVv0FUN1v28VRdyQSmeKqILF%2BvzW0rOFgxwBLl552KcR5zLycJsp0vvvvhdMI%2BoR%2FxIu3D9nJ8FppukOIKPNWflhCx%2Be30hsrRjcvme2HNv%2BBFk2ul9MgmgtoajfKrOwWMLk64w9rDmwAY6pgG6v0OP8xtEGhYFc%2FphUWelRKVYvCEcX8k3Cro%2BHlbuS30yaSO%2FlELueFTDAgHiMPmsrWzb0SW%2FgeMS%2FJxo38UiHSDjDZq7bbG9MWGpBTijbG0Zljd8iBTpuddGimAltdighZAjGZy4LuyeXWo3UruMfV3SmxhrdTlR8KCRNvvwBrE2dA64KLh8KxnRX1Xod4dpTI2Q8BdzS%2BqgaytZC%2FCpp%2Fy1S1LO&X-Amz-Signature=82089fcaddcf0629352fc41aaa2b974d6fd368cbb7b83b2f84bbd27d40053883&X-Amz-SignedHeaders=host&x-id=GetObject)

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
