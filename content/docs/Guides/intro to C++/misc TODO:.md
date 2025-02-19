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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJGWWG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJr8Q8VhGR1s7AuquENi0kuInWh58whPE9eI6%2BdyG2FAIgeu257pAIdQUrRwX5fF2pYIdE0D3OK4zYGqVCOLNHRRYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcakUno%2BGMMn9DYCyrcAxKg%2FoRf5qCVZ69d01cEuZXUhCIczxQrxupkevTGnnMXdgpAEqAeyp%2F0VZkEQuovcVlRB%2BRA1eFhfARQLcuAIYNvvjQ9qMriMD5HaRVai7RSErLO4WyH%2FhmsBRNuHKn%2BGHV8blYK84DjJXV%2FMmq8sxbeYgcspNsU34WLCzZ%2BhQtcvlh6ZkResc4PKqxiLQhYqGbFdNbEwDLzGViYstN7u%2B%2BPgK7mdaXv76egLSwWrKZflD5n%2FyceklfFcvRcQvOiU0qgi59V9D0r2PpDgqz6rPpyZ87lA6IKvaZUqe3mghfU4LwySMPr9w%2By%2BWCSqaEBTn2YNg9AnHVU16%2FcUI8uQIZ%2BT4dWdEVLtN9bLl7VNHYmQNI%2Fz6H2u5IH05KqlqP4YtaWNyA6XyVdDJ8c9zfFz%2Bss%2BefkilNJvagfovBST4PzG8CDoTZaW8oq6cKmekPosQpMadT6slzUOHdV0XzPwdtmUO0AdPVvXcB1B299E5o6Pp5A986YAx9PEDmb3RtdQ9YRErKW84sy4iM1pmqNhXUReW6uOLon0AsPICAazADkcUGC%2BlYRhsHNAHv1UstjTuIsmxljOycKBBkrkJnvt1JsbtyaOR1tJidwqLWr45NnTW6sWfsmfbpFAB6nMND91r0GOqUBTzJEWz7SUgBt%2BgzkuT%2Ft356QrjI5DdbmOYLFw5v7lXb65vqZhX1qSfFMb1%2BPh7dvQizGW8n%2Bat2wQ2jAeWd6fT3XHryYhnRN1OfiyJiEAXskNYcAv1z8%2BvotNmbLHHTjFnYI6dW8lc0RthopLqgUsJu%2FPKsnYaY2Og55ngzhcOuSYAJgULHZ8nxrHEYZ6tWlU9VzmPdXw1OtajuuivBK2XJp59MF&X-Amz-Signature=92445a3cf24187e480a3ba8731bf97750e69becd2e3228b0f368600ee449b1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJGWWG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJr8Q8VhGR1s7AuquENi0kuInWh58whPE9eI6%2BdyG2FAIgeu257pAIdQUrRwX5fF2pYIdE0D3OK4zYGqVCOLNHRRYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcakUno%2BGMMn9DYCyrcAxKg%2FoRf5qCVZ69d01cEuZXUhCIczxQrxupkevTGnnMXdgpAEqAeyp%2F0VZkEQuovcVlRB%2BRA1eFhfARQLcuAIYNvvjQ9qMriMD5HaRVai7RSErLO4WyH%2FhmsBRNuHKn%2BGHV8blYK84DjJXV%2FMmq8sxbeYgcspNsU34WLCzZ%2BhQtcvlh6ZkResc4PKqxiLQhYqGbFdNbEwDLzGViYstN7u%2B%2BPgK7mdaXv76egLSwWrKZflD5n%2FyceklfFcvRcQvOiU0qgi59V9D0r2PpDgqz6rPpyZ87lA6IKvaZUqe3mghfU4LwySMPr9w%2By%2BWCSqaEBTn2YNg9AnHVU16%2FcUI8uQIZ%2BT4dWdEVLtN9bLl7VNHYmQNI%2Fz6H2u5IH05KqlqP4YtaWNyA6XyVdDJ8c9zfFz%2Bss%2BefkilNJvagfovBST4PzG8CDoTZaW8oq6cKmekPosQpMadT6slzUOHdV0XzPwdtmUO0AdPVvXcB1B299E5o6Pp5A986YAx9PEDmb3RtdQ9YRErKW84sy4iM1pmqNhXUReW6uOLon0AsPICAazADkcUGC%2BlYRhsHNAHv1UstjTuIsmxljOycKBBkrkJnvt1JsbtyaOR1tJidwqLWr45NnTW6sWfsmfbpFAB6nMND91r0GOqUBTzJEWz7SUgBt%2BgzkuT%2Ft356QrjI5DdbmOYLFw5v7lXb65vqZhX1qSfFMb1%2BPh7dvQizGW8n%2Bat2wQ2jAeWd6fT3XHryYhnRN1OfiyJiEAXskNYcAv1z8%2BvotNmbLHHTjFnYI6dW8lc0RthopLqgUsJu%2FPKsnYaY2Og55ngzhcOuSYAJgULHZ8nxrHEYZ6tWlU9VzmPdXw1OtajuuivBK2XJp59MF&X-Amz-Signature=af24e5b776bdf0a191fbdd8be40b62a156c5d29149a9e9fa6a0017021ee8b26d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
