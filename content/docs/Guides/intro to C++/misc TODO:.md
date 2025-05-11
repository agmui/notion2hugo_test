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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPFDMG2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCsKh18mpxvqa%2FNVaeO6A%2FvmNJGwPGlgy7hgxeJkTZIsAIgfKArIMCiH9FHjeNSrJc9BWsO2hmfABSV%2FIMithC3daAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5bSXlnAErQknScjCrcA%2F8tSzUb6YZcgn3pdScIq%2F8FD5VKVOJi1uSewdnrR22xcIrHvF%2FI1gYl6E1ya9j5ErB0jYgYfQ6qsdwoW0vXdnvMYA0v07Debd%2BIx8VKvmE27JjkZ%2F5SC7w5dDXKqVDojFhlDRtgA7MPyFio%2FfEwGFgRUeegLsBAWRCOigtA5SPd6RHkyllVllRlQwSvckFjwyU69UBAzdbdgTAiQ4SNSWuOuldWi7qYQisHW3SyuM3aPPbkPjv8r5iDX%2F3YQ0y8f9eS4mEQyV17ajZ9nDTNQWO2Ad8QOhOgp87XwHrIs%2FhQffTaUlpdIMkfEe4LGex1y64Aob%2BYMJtFbtgCUKsSy8vTIU%2FnLqVAmRCI73QMUlbQLFrxX8aXlTL%2BL9QF52BLWltf6jm1Qwbj%2Fbmu%2F8BDK8RUlcxS6kVh7ZnjOL4TQrO9Hq9og19qoXm%2F5vfltnpC3p8cFRlVUARmsVr0Wh1NJw01t0S7y3XioQ7XfBs4bl%2BMa7RLb6xUMVp3%2BeHmqHP3dzfSjFdgXcK2i7HpFg2omApA7v5pTXVSh5bsSfrDr3QihnYfqVeYAVYrmy0h%2BqM1UTTj6Sy%2Be6C6sNdV7RhUjZZ%2F%2F%2F12LbjynWi18CT3k3My2kZYFgLPBleCAtdqMPq4gcEGOqUBU6vCHauGzuNG0DztanH%2FODsLUYwFLsceOAujn2Is9RZd6%2Fb8OLrDCfGI0PzmMU8LnIHJqoQJHbOHKk2xaAUEWVQtiPXeTLcA47z942hOiYkkDpUAdxEpESygO%2BKzuzuj6S70tIBCBBAx%2Fuehs1hJAg0dznauIM4novSHFZDGAolOlppMRy8xFL7jFyL8QvCZXwVzLGSRlRKC2IhdbOjc37xZvB0C&X-Amz-Signature=e0d42cefdfdeb75c05fd93a969e0a29998c60cbbc00790a57ff8d8ac1b1f9f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPFDMG2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCsKh18mpxvqa%2FNVaeO6A%2FvmNJGwPGlgy7hgxeJkTZIsAIgfKArIMCiH9FHjeNSrJc9BWsO2hmfABSV%2FIMithC3daAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5bSXlnAErQknScjCrcA%2F8tSzUb6YZcgn3pdScIq%2F8FD5VKVOJi1uSewdnrR22xcIrHvF%2FI1gYl6E1ya9j5ErB0jYgYfQ6qsdwoW0vXdnvMYA0v07Debd%2BIx8VKvmE27JjkZ%2F5SC7w5dDXKqVDojFhlDRtgA7MPyFio%2FfEwGFgRUeegLsBAWRCOigtA5SPd6RHkyllVllRlQwSvckFjwyU69UBAzdbdgTAiQ4SNSWuOuldWi7qYQisHW3SyuM3aPPbkPjv8r5iDX%2F3YQ0y8f9eS4mEQyV17ajZ9nDTNQWO2Ad8QOhOgp87XwHrIs%2FhQffTaUlpdIMkfEe4LGex1y64Aob%2BYMJtFbtgCUKsSy8vTIU%2FnLqVAmRCI73QMUlbQLFrxX8aXlTL%2BL9QF52BLWltf6jm1Qwbj%2Fbmu%2F8BDK8RUlcxS6kVh7ZnjOL4TQrO9Hq9og19qoXm%2F5vfltnpC3p8cFRlVUARmsVr0Wh1NJw01t0S7y3XioQ7XfBs4bl%2BMa7RLb6xUMVp3%2BeHmqHP3dzfSjFdgXcK2i7HpFg2omApA7v5pTXVSh5bsSfrDr3QihnYfqVeYAVYrmy0h%2BqM1UTTj6Sy%2Be6C6sNdV7RhUjZZ%2F%2F%2F12LbjynWi18CT3k3My2kZYFgLPBleCAtdqMPq4gcEGOqUBU6vCHauGzuNG0DztanH%2FODsLUYwFLsceOAujn2Is9RZd6%2Fb8OLrDCfGI0PzmMU8LnIHJqoQJHbOHKk2xaAUEWVQtiPXeTLcA47z942hOiYkkDpUAdxEpESygO%2BKzuzuj6S70tIBCBBAx%2Fuehs1hJAg0dznauIM4novSHFZDGAolOlppMRy8xFL7jFyL8QvCZXwVzLGSRlRKC2IhdbOjc37xZvB0C&X-Amz-Signature=99b650c03a681eb2193790a141ec11028873aff5b87f430d280c438b73fca1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
