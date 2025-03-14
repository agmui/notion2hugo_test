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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N2ADNC7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz95ZyBUgN2dSb%2BWGOR5WTRJKToCNp5fiMtO9YpEnFLAiAOng0Ng4c%2FMFoRw67yL0%2FZk%2F3VqcbHovxD94w2AEPkXyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2F%2Fw7lWXv2CRCkshKtwDu5MjSmhifsk6aHL9GVvbjdZZKAz4ROG5tsui66%2B2Sq3F%2FalDcF%2FoGDo%2FJ8NPpFmn%2BBJi7OstsZbrwt9ouvIp2rFLWN02Ik1pSloZKCl7HCx9bi1oj2iNaMyhxH0uabEyzDW3HiP4ckzQRKnhMS1cOe70Bq2wIGo81NfQgr2rY2eiXCXoREhLzmGCSP13pg2gUkM%2Bb6h4mhZL5NZGChGd43KCiJOfjKDn7z1979lKWwhZ4lPOPgyX8d1TCNopW17S28lgQasFvS5%2FdpBz8LAAPyBOQvdonGwAUITizjBvmZgZV4Rq77xTV0f72RJnkEL3pYj2CPYlZnGvqFE3PCyDglECBleh4JdDN0OhmVSesL47%2FWOliQiioFOp%2FT%2Bqu1Z2DyWe9lgDpfF8JKgmbQXSYZmyRJ9Ai%2FyaiDiOYgns%2FTWlfhnERKdgmU7r5%2FnqoQ6dA3hzWXc0isKd20gG5N46PIn7zozSQZlRE8un9mhbysmOUB0xOhF4tEVJbF8IeIDzPl%2B5DSip7NitvXlOcCt6lCIh8l0ijdt1Zd%2FzMpBAQKROM9o8UsdAV9qE%2BfAffbrttiTYoClRVgQfyiC5As0%2FosEHMMin7uW2zE%2FsVYJIoUI8SVlLAl4wzVBxN8swvejPvgY6pgGDzoT4fAVurA24x5vLmUMSvwKrC9T8th7H41YnHzMOuG8s3Q7t2o5NBaJCSRiMk%2BJYvcLBKNOTxUeyg7UNTGLENQeMYwD4Vp%2BKooTSqjuIU%2BSExBcGaeTLCPc6MLWvklxGzpQ%2B%2FLmG8eTbqHLgckJe5%2FFJMQvbKrXd0nJi%2F8HYJHiff74RNttxlB6k6xY%2BqYBMzvnoUqDajscO38of4uHZkxqVi6%2FI&X-Amz-Signature=61c7d8c423741442cae1384010b4780ec15456f9cef2639824aa0b217d53b464&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N2ADNC7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz95ZyBUgN2dSb%2BWGOR5WTRJKToCNp5fiMtO9YpEnFLAiAOng0Ng4c%2FMFoRw67yL0%2FZk%2F3VqcbHovxD94w2AEPkXyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2F%2Fw7lWXv2CRCkshKtwDu5MjSmhifsk6aHL9GVvbjdZZKAz4ROG5tsui66%2B2Sq3F%2FalDcF%2FoGDo%2FJ8NPpFmn%2BBJi7OstsZbrwt9ouvIp2rFLWN02Ik1pSloZKCl7HCx9bi1oj2iNaMyhxH0uabEyzDW3HiP4ckzQRKnhMS1cOe70Bq2wIGo81NfQgr2rY2eiXCXoREhLzmGCSP13pg2gUkM%2Bb6h4mhZL5NZGChGd43KCiJOfjKDn7z1979lKWwhZ4lPOPgyX8d1TCNopW17S28lgQasFvS5%2FdpBz8LAAPyBOQvdonGwAUITizjBvmZgZV4Rq77xTV0f72RJnkEL3pYj2CPYlZnGvqFE3PCyDglECBleh4JdDN0OhmVSesL47%2FWOliQiioFOp%2FT%2Bqu1Z2DyWe9lgDpfF8JKgmbQXSYZmyRJ9Ai%2FyaiDiOYgns%2FTWlfhnERKdgmU7r5%2FnqoQ6dA3hzWXc0isKd20gG5N46PIn7zozSQZlRE8un9mhbysmOUB0xOhF4tEVJbF8IeIDzPl%2B5DSip7NitvXlOcCt6lCIh8l0ijdt1Zd%2FzMpBAQKROM9o8UsdAV9qE%2BfAffbrttiTYoClRVgQfyiC5As0%2FosEHMMin7uW2zE%2FsVYJIoUI8SVlLAl4wzVBxN8swvejPvgY6pgGDzoT4fAVurA24x5vLmUMSvwKrC9T8th7H41YnHzMOuG8s3Q7t2o5NBaJCSRiMk%2BJYvcLBKNOTxUeyg7UNTGLENQeMYwD4Vp%2BKooTSqjuIU%2BSExBcGaeTLCPc6MLWvklxGzpQ%2B%2FLmG8eTbqHLgckJe5%2FFJMQvbKrXd0nJi%2F8HYJHiff74RNttxlB6k6xY%2BqYBMzvnoUqDajscO38of4uHZkxqVi6%2FI&X-Amz-Signature=c25b605ee8f2180cb1e644dcd770dcd4d9128b7e9015f8bf17ebc0d1e6b72150&X-Amz-SignedHeaders=host&x-id=GetObject)

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
