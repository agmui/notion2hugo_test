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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ2A23X%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD4MZbxdEhOtUeYXrp13i%2BhdVXvcfZXc6E%2F96ohnwGO8QIgTeB9P4DF%2Fe1BkKCugXFPAu4JTe0yUPlLlYAyno8a%2BcUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM0ZwpiogiUyf0rqOircA%2FSpnTpY2EPT4c0AaDZJRxfTcX1fnsdHbZPe0aO1X4YqJz03bIs43Q%2BWlXvLYW97qBkHokPyFnS6Z%2BCflmLuOMmQCT8d3rC30KRviVH1jpyEmVt1nr1%2FyCJoK1AacBmyMJwzN48wdwPO7vDt3pgtw1NnUBCYYoQyyyH%2F3CT2zUSmbaNqSbqk7GCt%2FralrKndrgFgHE%2FoXlbJ1JWyVBX9sgjEYca9%2BriBC0ahEtuYHBzwmzn3WO%2FqElsgvPHy1IBvRnP2TpfLk96dC1zyrGJwPH%2BATeByN%2FIgPtRAPUmavd8hoBmBBF7r2sxWWzkJvMrTgsIkVucT4tC6AuyuyL9pBRhjAKN%2F%2FSoW4mGzQAEUUOBI0115b79QUQrCedzXr5h2dhxPXKFMpMz29Z5GTPmM62WooQseNywdorkjjKgcPvjnfbNgnH8fXN0S1h62YqJSVsFMlJyEFLNk7UHxPw3zSqo%2FRRh7X9656q7amaEbf6LjCQkNVePU0dCEy%2FAbO8dF3fEKbScErPRvfWlvIa6ZFxn%2BzKonJj3PxqOdSRg1%2FljpXHeZUqlwjTWJ49wzZ4Z3Y53byPWPmwhHFmwjGVSw2%2Fu4fwkcGIVqPnuJD3Dv%2FmNljeg8CeYHymp5QLsHMPOEwb0GOqUBxQCWJTSToleNBG7XDQ8tpseLkub1Lznw%2FZF3marz0gxECmw54VQDnZaGbUEOFbzj9lacbtsqePWsbNRvIyyEt4ZCB%2FHbEowRWn61H0%2BKIUt9Ke0UQaRm%2FzilRO9OZv3NFHaJFUNv04xyaajs5545EPAuxyt0nDaOFKRS11wrkgXTGHDXW1zDwEmDaSBZqunxhz0eUiz73DNdJ0kcPvj7VJHwhYLy&X-Amz-Signature=8bb5c1a31d67471f98a31a2c1f1452e39c90432674d1f7072a87d6739518a058&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ2A23X%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD4MZbxdEhOtUeYXrp13i%2BhdVXvcfZXc6E%2F96ohnwGO8QIgTeB9P4DF%2Fe1BkKCugXFPAu4JTe0yUPlLlYAyno8a%2BcUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM0ZwpiogiUyf0rqOircA%2FSpnTpY2EPT4c0AaDZJRxfTcX1fnsdHbZPe0aO1X4YqJz03bIs43Q%2BWlXvLYW97qBkHokPyFnS6Z%2BCflmLuOMmQCT8d3rC30KRviVH1jpyEmVt1nr1%2FyCJoK1AacBmyMJwzN48wdwPO7vDt3pgtw1NnUBCYYoQyyyH%2F3CT2zUSmbaNqSbqk7GCt%2FralrKndrgFgHE%2FoXlbJ1JWyVBX9sgjEYca9%2BriBC0ahEtuYHBzwmzn3WO%2FqElsgvPHy1IBvRnP2TpfLk96dC1zyrGJwPH%2BATeByN%2FIgPtRAPUmavd8hoBmBBF7r2sxWWzkJvMrTgsIkVucT4tC6AuyuyL9pBRhjAKN%2F%2FSoW4mGzQAEUUOBI0115b79QUQrCedzXr5h2dhxPXKFMpMz29Z5GTPmM62WooQseNywdorkjjKgcPvjnfbNgnH8fXN0S1h62YqJSVsFMlJyEFLNk7UHxPw3zSqo%2FRRh7X9656q7amaEbf6LjCQkNVePU0dCEy%2FAbO8dF3fEKbScErPRvfWlvIa6ZFxn%2BzKonJj3PxqOdSRg1%2FljpXHeZUqlwjTWJ49wzZ4Z3Y53byPWPmwhHFmwjGVSw2%2Fu4fwkcGIVqPnuJD3Dv%2FmNljeg8CeYHymp5QLsHMPOEwb0GOqUBxQCWJTSToleNBG7XDQ8tpseLkub1Lznw%2FZF3marz0gxECmw54VQDnZaGbUEOFbzj9lacbtsqePWsbNRvIyyEt4ZCB%2FHbEowRWn61H0%2BKIUt9Ke0UQaRm%2FzilRO9OZv3NFHaJFUNv04xyaajs5545EPAuxyt0nDaOFKRS11wrkgXTGHDXW1zDwEmDaSBZqunxhz0eUiz73DNdJ0kcPvj7VJHwhYLy&X-Amz-Signature=e994f6413d6ab3125649ac205377596e24de063ab0dc7adab0c11c0ea14c41cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
