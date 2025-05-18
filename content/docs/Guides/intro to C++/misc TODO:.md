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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFHI75V%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWGf3bMXDDnuPT6K0792W8%2B70soQu2ROQNf0D1IUpG3AiEA8SJr%2FbjvAx2PBL0RRQURSE3PhXOyfqxPsfB7G%2Ba8ayoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDE%2BOt7HD1AUUN6BI4SrcA1Q1lwbP6b5jbvkERnxBTwgsJ4b3AZZagA5bRGcyciknDUP5Z6iROLgUKVA%2BuQ3K85XJUlBh39VEaGZOlbSRYY8DSxeEiIGcMzWBUsjY5xT5G0ENr2RyaKqQy%2BPAgwXbJDgyE7hhnO01OI8QzvegvktF1Q0PhAzuxTPPM9UamhmJiiS5goCIrzci9ZTij9U9oYWRRPTNXwn54vHlR%2FtDee2QiJ1wt%2B43Y%2FVgBOq%2B6WrUdadca1bUFejsxkN26ER6UEnyQ5uIvQbPSwiCW9GEL3cIe9zpVCCwJemcZN53i75nJ%2B0DNrnGettklTZaOUwgmNLCZUzIk%2BqR31%2BNr7nRkjad9HtzAx8Y36VRyMsafDRrabzEJomuyPqkIBzrioT1KwADGi3Iemxa9JfkRsx6BkXD0uZgTdWkwDhXIvxW7IJ7zwbYJln7Dw%2F%2FnzPGx1AyxIDDAGVvMmGVhqHs9nSBVjUImmNIUv3MZpBmcCKs99JHg4FrbzjzMhlXpUt8mEKLVJv8CMC4uIVa%2BpW4rMxYyT4kPcWLTTrVuJQ1YRu%2Fm4%2FySrjlV4yi3cReSfu6uVOhLEtcPVYa8Dyt6MysZxqqD11RpLOHco2CmaM1MvWIDiakfWeuJNwLg6MsJgXxMO%2Bvp8EGOqUBuD7EU0nTGIn123pHZrE%2FC6LaAUewJUCn724QvFn8kvOMGCJD4RtSBu%2FQ02Pw4gUL7MoQ2rjIVV%2BLc8zEe0Q3tfsgslio5NVV9EiNoReujnGPQHRmbRpL5Q5WZXw09TXfAY%2F5SkiZUNQYm7xDRrmneiaqfVIt9IP7gch4qo1%2F5PvvoEm921Iy6VMhgRlTJg7Vah%2BL01klN%2FtZCV%2Bflnigk2moKXYF&X-Amz-Signature=8990ee7891156a95a9fbbdf37575951f4f85c70de3a0acc3b1bd05c1901183b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFHI75V%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWGf3bMXDDnuPT6K0792W8%2B70soQu2ROQNf0D1IUpG3AiEA8SJr%2FbjvAx2PBL0RRQURSE3PhXOyfqxPsfB7G%2Ba8ayoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDE%2BOt7HD1AUUN6BI4SrcA1Q1lwbP6b5jbvkERnxBTwgsJ4b3AZZagA5bRGcyciknDUP5Z6iROLgUKVA%2BuQ3K85XJUlBh39VEaGZOlbSRYY8DSxeEiIGcMzWBUsjY5xT5G0ENr2RyaKqQy%2BPAgwXbJDgyE7hhnO01OI8QzvegvktF1Q0PhAzuxTPPM9UamhmJiiS5goCIrzci9ZTij9U9oYWRRPTNXwn54vHlR%2FtDee2QiJ1wt%2B43Y%2FVgBOq%2B6WrUdadca1bUFejsxkN26ER6UEnyQ5uIvQbPSwiCW9GEL3cIe9zpVCCwJemcZN53i75nJ%2B0DNrnGettklTZaOUwgmNLCZUzIk%2BqR31%2BNr7nRkjad9HtzAx8Y36VRyMsafDRrabzEJomuyPqkIBzrioT1KwADGi3Iemxa9JfkRsx6BkXD0uZgTdWkwDhXIvxW7IJ7zwbYJln7Dw%2F%2FnzPGx1AyxIDDAGVvMmGVhqHs9nSBVjUImmNIUv3MZpBmcCKs99JHg4FrbzjzMhlXpUt8mEKLVJv8CMC4uIVa%2BpW4rMxYyT4kPcWLTTrVuJQ1YRu%2Fm4%2FySrjlV4yi3cReSfu6uVOhLEtcPVYa8Dyt6MysZxqqD11RpLOHco2CmaM1MvWIDiakfWeuJNwLg6MsJgXxMO%2Bvp8EGOqUBuD7EU0nTGIn123pHZrE%2FC6LaAUewJUCn724QvFn8kvOMGCJD4RtSBu%2FQ02Pw4gUL7MoQ2rjIVV%2BLc8zEe0Q3tfsgslio5NVV9EiNoReujnGPQHRmbRpL5Q5WZXw09TXfAY%2F5SkiZUNQYm7xDRrmneiaqfVIt9IP7gch4qo1%2F5PvvoEm921Iy6VMhgRlTJg7Vah%2BL01klN%2FtZCV%2Bflnigk2moKXYF&X-Amz-Signature=e85bccf3d03911fb9054f9f2d3a70b69a9a66bf94dcef7554615b3de59404eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
