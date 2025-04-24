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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R57AFC34%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEoiocs97Rf6Y%2BZaWJb0PIPSeeEfU2F0dAXMs2md7M5oAiABOz0wKPbLu%2FIxdH39iarl3L%2FRoI0nW%2F1Hmu8qiGeJ2CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuRgI5aICZTwCQkeXKtwDN5K9yai%2FWkzM%2BAUDAo4yO4gwcWJDUJIQAkMwNDDY9Ace%2FDrZBMwz3SmhBU%2BeP0q%2BM2Nqlq%2FQvEsjW92cRMOBPzUBVr0HA1mG3yjqsXy2SZ5eIrrUPW4FdtU1TWYUFTN%2FmvDzAPmoTOyrzyba1Stk7UWPC2MZ4ejbHLYaQ0v9xaTcHeqkwqXnmX5JUNV%2BAb%2BWBVBjTLsn8lp7gG971dPO0D9TkwLWkT3yYis%2BG7YC%2BOBjXfStFfj6nJFG88wogPRVbdxw8pNV7sIb%2BNNgASjm07crQLMmB%2BgjkgulsWzxvH78uW0dgPGCsTauoQJCTFEju8GCsXM7BKuIbjjHGmzh9Vf6DkyDTE8qCbM3%2FdqZFbFa9JRcEZyeeayQqJKDYGgH2ttPA151dPymVHDLT%2B1AHd1Yo0taUEj4fOv2umsgIYxEeMAwf0S7gLifgF9%2F08XqSWH%2Fgo7zI24VKSXd0soxvpkbKoJMbztCOhTUZBMuO8kbY%2BEClSzWnGmnMPr2QMwZpS1GG5vitgCXpXhQT0OgSKuHTPOgWLW5wxydTmsohCt3yT6XmaNwWQNdNQze5aWJLMk3ZBIA1DT0HLR9JWw2sGfEdrOP%2Fs9q0CwRNcnze2G29UgYlcm7nA3yLh8wq%2FylwAY6pgEjGJ44h0Q2gH6mkXQMMWBh7twHdpgaJ1MhCnP8ETn1BeZh9GfBNNhefgnBxLUl3SlRL5KSzJltmknjHr0n5uXPx6rCEarvI%2FIwfWb3TOQRxa40URdfejvrC%2BXGjMhxUzaik82492Xj9rf7rsPnVyc9bs1vcY%2BhKnUaAqM49cDErY3Lo3FhkfXm2sXABSJ6%2B2xLvNtR2r%2F9l%2FgFVE%2BILciTKlGxf7p3&X-Amz-Signature=cde24ee3950980e19f1a71eff781c32bc51249d7281110177ffe24dc595c62af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R57AFC34%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEoiocs97Rf6Y%2BZaWJb0PIPSeeEfU2F0dAXMs2md7M5oAiABOz0wKPbLu%2FIxdH39iarl3L%2FRoI0nW%2F1Hmu8qiGeJ2CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuRgI5aICZTwCQkeXKtwDN5K9yai%2FWkzM%2BAUDAo4yO4gwcWJDUJIQAkMwNDDY9Ace%2FDrZBMwz3SmhBU%2BeP0q%2BM2Nqlq%2FQvEsjW92cRMOBPzUBVr0HA1mG3yjqsXy2SZ5eIrrUPW4FdtU1TWYUFTN%2FmvDzAPmoTOyrzyba1Stk7UWPC2MZ4ejbHLYaQ0v9xaTcHeqkwqXnmX5JUNV%2BAb%2BWBVBjTLsn8lp7gG971dPO0D9TkwLWkT3yYis%2BG7YC%2BOBjXfStFfj6nJFG88wogPRVbdxw8pNV7sIb%2BNNgASjm07crQLMmB%2BgjkgulsWzxvH78uW0dgPGCsTauoQJCTFEju8GCsXM7BKuIbjjHGmzh9Vf6DkyDTE8qCbM3%2FdqZFbFa9JRcEZyeeayQqJKDYGgH2ttPA151dPymVHDLT%2B1AHd1Yo0taUEj4fOv2umsgIYxEeMAwf0S7gLifgF9%2F08XqSWH%2Fgo7zI24VKSXd0soxvpkbKoJMbztCOhTUZBMuO8kbY%2BEClSzWnGmnMPr2QMwZpS1GG5vitgCXpXhQT0OgSKuHTPOgWLW5wxydTmsohCt3yT6XmaNwWQNdNQze5aWJLMk3ZBIA1DT0HLR9JWw2sGfEdrOP%2Fs9q0CwRNcnze2G29UgYlcm7nA3yLh8wq%2FylwAY6pgEjGJ44h0Q2gH6mkXQMMWBh7twHdpgaJ1MhCnP8ETn1BeZh9GfBNNhefgnBxLUl3SlRL5KSzJltmknjHr0n5uXPx6rCEarvI%2FIwfWb3TOQRxa40URdfejvrC%2BXGjMhxUzaik82492Xj9rf7rsPnVyc9bs1vcY%2BhKnUaAqM49cDErY3Lo3FhkfXm2sXABSJ6%2B2xLvNtR2r%2F9l%2FgFVE%2BILciTKlGxf7p3&X-Amz-Signature=50c907f84b2178cbd2ec9a240011805bd291b8ffa06be24395bd43d60604e8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
