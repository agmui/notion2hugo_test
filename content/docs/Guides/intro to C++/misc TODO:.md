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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IFQ47L%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYcpijal%2FomD2AXXR4CFTMq0YDjuotOO8J%2FHPPMhDwaQIgA2J4iy3hwaGHtNhu%2BYaemq9dRj20nZZ%2F%2B9FlCFRPMVMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWDGsC7ehChcK2W5yrcA0Dq7h7nATtLTULmJ8hO4mSQXS3Ve41qLor%2FqryxzbLjiu30w3kY3%2FELIxmz52UJmjfitNoMJPlqGM5ytB6lJfy56kmYM%2FeUUhQysroc9rOkZb5IoMdZYAic%2F6dcU5TrA%2BuHKOh%2FU3hvEAp2AMB0k7usZwU2iKNckbJ%2BI%2FISC0bNDMtJRjvouzAdO4q72qjYKmGW3Aq98x1h3rBaf7ZT%2FT1N8s6tqJw4%2BT%2BzGHjFX5Ta7mVPgq2ddCd%2BZ3utuP78YxRrUw0MLZZqjyEjBEr9WNGK%2FI50B2vMPUuTG8wNGdMcokwsq15wW9wrm6%2FJtJ4LLUMDM4ZLqO9N8N097noBI9XSqyPC6By8e%2FzL%2FIPuen%2FJatNwToKZEzcON1MZTnXiWHlaZ9CzEnVVyl%2F%2BXWFR8fb5BsBOfhGwFyCWSKYpnpiU5g0MDmjAm2n3NtIm25PCwkYh3aDqNfJ9IAb8LuY%2FxHg5ueHP9jt36HTcAPyU9iDQdjm25SvMLB1T5y5eTR%2BHouP1oDlbSt9SwU024K4BFUGEwtOBunXPUV7qwAOkmCF5BPszlDxTa%2BW%2F6%2B7vAbhcXedaGvyj2O8WAfEpWtj796tmB9pwIkFqk2nFOJ3Db1iTMOddgLZjHw%2BBKIhWMJ3Qv8MGOqUBwqxhUNO4KXUFOf3ytzd4SYoDbyWfUNLZGsYKlDgpMwn9HeoV3%2FuNQh699%2FuUyJkkl0528wDvn5%2BuLWGKzKcsiYWYQv5QX2vgYbTqiVJcPptTtFUQn9ipRuioKy%2FJkhSGnIL%2BuTObGt%2Bp4K5Pj3QiLzIf1NbB9Oc32uy4svW5p%2Bhh15n7pv3LVM7wD%2Bi%2BO1LbiJ4YkXDRhF99r5D8MQT22HI0DGzt&X-Amz-Signature=9d825be0c96e5c3be5cc5b9dd9f17f3e8267c5322bc224b937ed708b09a4918b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IFQ47L%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYcpijal%2FomD2AXXR4CFTMq0YDjuotOO8J%2FHPPMhDwaQIgA2J4iy3hwaGHtNhu%2BYaemq9dRj20nZZ%2F%2B9FlCFRPMVMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWDGsC7ehChcK2W5yrcA0Dq7h7nATtLTULmJ8hO4mSQXS3Ve41qLor%2FqryxzbLjiu30w3kY3%2FELIxmz52UJmjfitNoMJPlqGM5ytB6lJfy56kmYM%2FeUUhQysroc9rOkZb5IoMdZYAic%2F6dcU5TrA%2BuHKOh%2FU3hvEAp2AMB0k7usZwU2iKNckbJ%2BI%2FISC0bNDMtJRjvouzAdO4q72qjYKmGW3Aq98x1h3rBaf7ZT%2FT1N8s6tqJw4%2BT%2BzGHjFX5Ta7mVPgq2ddCd%2BZ3utuP78YxRrUw0MLZZqjyEjBEr9WNGK%2FI50B2vMPUuTG8wNGdMcokwsq15wW9wrm6%2FJtJ4LLUMDM4ZLqO9N8N097noBI9XSqyPC6By8e%2FzL%2FIPuen%2FJatNwToKZEzcON1MZTnXiWHlaZ9CzEnVVyl%2F%2BXWFR8fb5BsBOfhGwFyCWSKYpnpiU5g0MDmjAm2n3NtIm25PCwkYh3aDqNfJ9IAb8LuY%2FxHg5ueHP9jt36HTcAPyU9iDQdjm25SvMLB1T5y5eTR%2BHouP1oDlbSt9SwU024K4BFUGEwtOBunXPUV7qwAOkmCF5BPszlDxTa%2BW%2F6%2B7vAbhcXedaGvyj2O8WAfEpWtj796tmB9pwIkFqk2nFOJ3Db1iTMOddgLZjHw%2BBKIhWMJ3Qv8MGOqUBwqxhUNO4KXUFOf3ytzd4SYoDbyWfUNLZGsYKlDgpMwn9HeoV3%2FuNQh699%2FuUyJkkl0528wDvn5%2BuLWGKzKcsiYWYQv5QX2vgYbTqiVJcPptTtFUQn9ipRuioKy%2FJkhSGnIL%2BuTObGt%2Bp4K5Pj3QiLzIf1NbB9Oc32uy4svW5p%2Bhh15n7pv3LVM7wD%2Bi%2BO1LbiJ4YkXDRhF99r5D8MQT22HI0DGzt&X-Amz-Signature=45c7be86f27a507cd28857a244d14d17de23f250984e9c5fd3c9167ab21eb084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
