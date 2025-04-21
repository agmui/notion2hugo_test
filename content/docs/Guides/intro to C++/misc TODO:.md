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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226T2KJA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCMtn6kp3gMScbplsYw%2B8h6lY6FibksfQWSu5Su04aI%2FwIgfBul5v%2FrEq38KL1a%2BxInb193vgXNXzrcG%2Fl4%2B%2FBuTP0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPnpbDMJWdhbOsUCrcAy0sldJW13OgQvuh6KKMN6m81ZyrNsJTa0r4QYO3o%2FGW%2F0oEH6A7qnhbCrBdc3D3Jm03APXZVu8F5NyL9diVOptWoMRf3Ql%2FMMMpGM6LWyXiPuZxp%2FYYooHYHhdTsp09YKnZPfOwgEVqAcy78Lyt2Wsc03DZ%2FrbZ4cQ5jv6ELuD6acuarwNAHZsEr831BT6k7Ut75IkLfCUdy8ywZY5CDueY214mog%2BEyB%2Ft7BurcQzXw7iZf9kTyQM6YFOu0VtE6DDKlgLAbKjoQz115yrJcDJNz6t5JHUHMLa%2BfSzQ1phJtW2b6kWodaAXisdBjt5bEi5RyfWR1gedGVRFK6wQ1DRPy15Fowwe91Dr2T92MC3IIrVqDvTQJbIClFLIv11eVez5uSL%2FT08PpIN7abjjrhvS3m3ekrXr9%2FG7IK8STsLR%2FxdUH9r6OuFLRufv86IRLquX11kZ%2Bamzd3mpAQFiT0ZCRsO9t%2F8XV0kfQrGCpI72qY6QlWYw%2BJ1CDKGZghZaKL3KTL73pd6b4D0S26YO6JWQl1zWQmwthFXxZNqt2JqCw9Oeg9qLuF9dtEnmtrR7EhjdAW25Cp4K1J2iByfQKlMQmd3atsVPLWZRBrjE5jy43vAHJV55Ow9yVL%2FBMPO7mMAGOqUBsA%2FLtFdqgF6LMRidTpX53yNqINuT4m%2BHBkzp4yt6aHf8WC2if3R85YPn8l88RdHYsuTmzTZobciu3a0X9Z4uon7gmdBlvCC34jlf%2FlRZ5YRgbZU97Pk%2BO94mO%2FaFFj7%2FG48WtO35JDXOpWxMNLN1WeYrqbsmS6sjhR9HKlScrBXtoS7p0r3%2FqWhKf%2BPRYuTkA5mJHuzO4jhY025qUgMNvuPNO1ob&X-Amz-Signature=9e26ec634c8855db42451a2c6784f188be3167af88c8cecce25c5415cde2d4af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226T2KJA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCMtn6kp3gMScbplsYw%2B8h6lY6FibksfQWSu5Su04aI%2FwIgfBul5v%2FrEq38KL1a%2BxInb193vgXNXzrcG%2Fl4%2B%2FBuTP0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPnpbDMJWdhbOsUCrcAy0sldJW13OgQvuh6KKMN6m81ZyrNsJTa0r4QYO3o%2FGW%2F0oEH6A7qnhbCrBdc3D3Jm03APXZVu8F5NyL9diVOptWoMRf3Ql%2FMMMpGM6LWyXiPuZxp%2FYYooHYHhdTsp09YKnZPfOwgEVqAcy78Lyt2Wsc03DZ%2FrbZ4cQ5jv6ELuD6acuarwNAHZsEr831BT6k7Ut75IkLfCUdy8ywZY5CDueY214mog%2BEyB%2Ft7BurcQzXw7iZf9kTyQM6YFOu0VtE6DDKlgLAbKjoQz115yrJcDJNz6t5JHUHMLa%2BfSzQ1phJtW2b6kWodaAXisdBjt5bEi5RyfWR1gedGVRFK6wQ1DRPy15Fowwe91Dr2T92MC3IIrVqDvTQJbIClFLIv11eVez5uSL%2FT08PpIN7abjjrhvS3m3ekrXr9%2FG7IK8STsLR%2FxdUH9r6OuFLRufv86IRLquX11kZ%2Bamzd3mpAQFiT0ZCRsO9t%2F8XV0kfQrGCpI72qY6QlWYw%2BJ1CDKGZghZaKL3KTL73pd6b4D0S26YO6JWQl1zWQmwthFXxZNqt2JqCw9Oeg9qLuF9dtEnmtrR7EhjdAW25Cp4K1J2iByfQKlMQmd3atsVPLWZRBrjE5jy43vAHJV55Ow9yVL%2FBMPO7mMAGOqUBsA%2FLtFdqgF6LMRidTpX53yNqINuT4m%2BHBkzp4yt6aHf8WC2if3R85YPn8l88RdHYsuTmzTZobciu3a0X9Z4uon7gmdBlvCC34jlf%2FlRZ5YRgbZU97Pk%2BO94mO%2FaFFj7%2FG48WtO35JDXOpWxMNLN1WeYrqbsmS6sjhR9HKlScrBXtoS7p0r3%2FqWhKf%2BPRYuTkA5mJHuzO4jhY025qUgMNvuPNO1ob&X-Amz-Signature=67e5050c9af79ab0f22dabf94fbc7e9abddaa6fef62cd3c10b1cefed37733e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
