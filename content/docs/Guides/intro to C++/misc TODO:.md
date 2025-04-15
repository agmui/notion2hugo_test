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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBFZ7VW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATIqUSNAbgZFvHTJB0pJC58fTCtQjyBSQby1jVBsvouAiEAon%2FVgqhH%2FLm4J6UaHhmAo7V9BMlreYYDkiVTsXFAYDAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC%2Bo3DXNQvO%2F0TUU4CrcA7Rs%2FeqcWKW9sCtw8Q5ikYIjupqu2LXiCxCXIFDAG45hyc%2FxQNa9rPrO%2F%2BTsSNnMXB%2FpH%2BI6MO%2BdqOyBg1mJ2ZV7NJXi8Lm%2B2QrKUpQoDzTsg3Q1kLkq9pvDHaRWFqhqerzSu6JT9VRHKluPySUWLGJg3nSQh0EWnjxJ0av8jUWfYQiWFJ27SeIWmZYFeWs2rGjpmKGhfIGZhEQNkRfxqzsuoY%2FDAC%2BlTE091c%2FVDhstKRIfpZNMeCPoE%2F4JZvHB2se29pwBi8uwJPdN0WOEhb5ShCTNQHkFtRqnPcWa61Re9mtywQufpB3sET7x4%2Fpdt%2FDCKBhd8Wa%2BxwAA%2FdJ6Pi8LNvqoPjKuz%2FGzhuwMkdZULdMw12dFuiQlGB9LDv0HhRH01zCxG9dKFysq%2Fk%2BolhZ6CaK9uZfM3TUMjvaygjiMNz7N4p3rxAGuZfqijITTDgo3j6hmc1orVP8IedcF5CBe4CF8Czr6yi9CVAfsstNit%2BAS%2FevS8VY%2FFk1iwmEgMlvdmsr5%2Bbm%2F2qJ8s7jEwarHNxI6aDm8WAHjJrfHrYFTqHrhtnClErl0420bL%2Fo%2BbECquNzvUL03c%2FmRGRhnaJQghNwIKLoAkS32H0Lr78ezB%2FcVsj30TTM3rMJWMLrq978GOqUBzMepn%2Bnt6wo4GM23JfBRWTZqog3r1n7xkCnAF0tmQ3AWo%2F7W3XCXKMjqC3dbnzRrbXcWnwtdgxdSJRpdKlCSIbvcz7oyVi36ZoUty9gG8tvhMbsmLp00a11wn67WrsPaETK46WB5jYBCNm%2BbkRtkSr4AkTeiTzoFL6K3CsYYAnJnqb2J0NaG7NrsJlUHWxG1ZZOwNvF1Usu7xc3Jhi%2BJd%2BcPyoKP&X-Amz-Signature=f7c4f0eb913b2245018b43318e89480ef4724202ab1b0b381b6dd1e8aea01078&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBFZ7VW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATIqUSNAbgZFvHTJB0pJC58fTCtQjyBSQby1jVBsvouAiEAon%2FVgqhH%2FLm4J6UaHhmAo7V9BMlreYYDkiVTsXFAYDAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC%2Bo3DXNQvO%2F0TUU4CrcA7Rs%2FeqcWKW9sCtw8Q5ikYIjupqu2LXiCxCXIFDAG45hyc%2FxQNa9rPrO%2F%2BTsSNnMXB%2FpH%2BI6MO%2BdqOyBg1mJ2ZV7NJXi8Lm%2B2QrKUpQoDzTsg3Q1kLkq9pvDHaRWFqhqerzSu6JT9VRHKluPySUWLGJg3nSQh0EWnjxJ0av8jUWfYQiWFJ27SeIWmZYFeWs2rGjpmKGhfIGZhEQNkRfxqzsuoY%2FDAC%2BlTE091c%2FVDhstKRIfpZNMeCPoE%2F4JZvHB2se29pwBi8uwJPdN0WOEhb5ShCTNQHkFtRqnPcWa61Re9mtywQufpB3sET7x4%2Fpdt%2FDCKBhd8Wa%2BxwAA%2FdJ6Pi8LNvqoPjKuz%2FGzhuwMkdZULdMw12dFuiQlGB9LDv0HhRH01zCxG9dKFysq%2Fk%2BolhZ6CaK9uZfM3TUMjvaygjiMNz7N4p3rxAGuZfqijITTDgo3j6hmc1orVP8IedcF5CBe4CF8Czr6yi9CVAfsstNit%2BAS%2FevS8VY%2FFk1iwmEgMlvdmsr5%2Bbm%2F2qJ8s7jEwarHNxI6aDm8WAHjJrfHrYFTqHrhtnClErl0420bL%2Fo%2BbECquNzvUL03c%2FmRGRhnaJQghNwIKLoAkS32H0Lr78ezB%2FcVsj30TTM3rMJWMLrq978GOqUBzMepn%2Bnt6wo4GM23JfBRWTZqog3r1n7xkCnAF0tmQ3AWo%2F7W3XCXKMjqC3dbnzRrbXcWnwtdgxdSJRpdKlCSIbvcz7oyVi36ZoUty9gG8tvhMbsmLp00a11wn67WrsPaETK46WB5jYBCNm%2BbkRtkSr4AkTeiTzoFL6K3CsYYAnJnqb2J0NaG7NrsJlUHWxG1ZZOwNvF1Usu7xc3Jhi%2BJd%2BcPyoKP&X-Amz-Signature=a5700fb109203022ab20146d2f16dc394ac78dba58f4d810da284a35135e8fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
