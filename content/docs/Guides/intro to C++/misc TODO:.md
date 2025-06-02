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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AK5GRW5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICOxGg6jINSwm47z1BRFIo%2Bt9SMNdt4sa7lRaiUQaFUZAiBjyaYBNxznTuICIh%2Fp1JNaf5tzqdCskXktNbB426h8TyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8psR6hBbbFTyOguhKtwD%2FBtAzJClNdwtb0iHoVUVF7T4BxpbLdNVMRU4S50rYYjczLQ1k5qDXYiwq%2BFJuCZqMZysTx8ZaabzQp9RHGU03QiIDV1J1h4sWKj45xNFs6p9UNv0R0elK9tF4loix%2FNyVy0IJlR3da1LAGJuG6YHomNA0VdXjnDb3Yz95rCgmIOgBpi75w61MnhidrQLWp2amyr581pggwmpqqMxQFv8WXfk%2Br0qARxLMbHk11bcqq%2BsBDxyFpxbVFfn1AWweE8X0px5U7RmuDt5dMwdkww37%2Bagnbc4edVj5GFixOw9niN8I8WfP78C4Q8mKnbvLWSi7sRqmRU0dNpZE7TMEDFKd37eAtnvjyBHC6IGnl6ZL%2FnaNN86X5BjShxnEnDD57ogw%2Be5nuIzc8Sr%2FNiRcmH4fBqQvPv61u2i3FeCeUZk0hKkgb1cq0A6KteLQv02OnHzMS2%2Fj3WS6XXF2VociAefEW1NzX%2F9hPWOg1K3sapwLydISBvfSrv2%2FXvi7XTYM6sZLYk%2F3oaym0XMvFWv3Rh9czC5G2KyddZnRpIPodhZksmRRtp5GptuEH21GiK2axBvaRXyJrx8pxXKMR4p8bjYO8P9e6k7QP9OdYHRzK5jrrxtvDMDGK0Kn4RCH8YwsLT2wQY6pgHVI6sk9Y1WOxHiJrn0lmZgKolZJiRWmHh5zqxv6FmFs8IIT9L8Y6XDP16b1nghjcpm5b4rRAgdlMQlHSLRaqMm8rrV3XczQrJP66DlIlitaNK9P7riVf0kEPf4qyvYXitS61GhkHdHBiUSVqFU0rjTdjwqHbE3kvpGpt4qwg0M5JFKm4%2BWsQQrCfdf3KbROxmEgnXtLOjpPMf6lLTGcal4ssNxc5NP&X-Amz-Signature=f9aa5871a2684ec17dc76f2f543f636819b77b5b7c3c5f2ace1d02636005f679&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AK5GRW5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICOxGg6jINSwm47z1BRFIo%2Bt9SMNdt4sa7lRaiUQaFUZAiBjyaYBNxznTuICIh%2Fp1JNaf5tzqdCskXktNbB426h8TyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8psR6hBbbFTyOguhKtwD%2FBtAzJClNdwtb0iHoVUVF7T4BxpbLdNVMRU4S50rYYjczLQ1k5qDXYiwq%2BFJuCZqMZysTx8ZaabzQp9RHGU03QiIDV1J1h4sWKj45xNFs6p9UNv0R0elK9tF4loix%2FNyVy0IJlR3da1LAGJuG6YHomNA0VdXjnDb3Yz95rCgmIOgBpi75w61MnhidrQLWp2amyr581pggwmpqqMxQFv8WXfk%2Br0qARxLMbHk11bcqq%2BsBDxyFpxbVFfn1AWweE8X0px5U7RmuDt5dMwdkww37%2Bagnbc4edVj5GFixOw9niN8I8WfP78C4Q8mKnbvLWSi7sRqmRU0dNpZE7TMEDFKd37eAtnvjyBHC6IGnl6ZL%2FnaNN86X5BjShxnEnDD57ogw%2Be5nuIzc8Sr%2FNiRcmH4fBqQvPv61u2i3FeCeUZk0hKkgb1cq0A6KteLQv02OnHzMS2%2Fj3WS6XXF2VociAefEW1NzX%2F9hPWOg1K3sapwLydISBvfSrv2%2FXvi7XTYM6sZLYk%2F3oaym0XMvFWv3Rh9czC5G2KyddZnRpIPodhZksmRRtp5GptuEH21GiK2axBvaRXyJrx8pxXKMR4p8bjYO8P9e6k7QP9OdYHRzK5jrrxtvDMDGK0Kn4RCH8YwsLT2wQY6pgHVI6sk9Y1WOxHiJrn0lmZgKolZJiRWmHh5zqxv6FmFs8IIT9L8Y6XDP16b1nghjcpm5b4rRAgdlMQlHSLRaqMm8rrV3XczQrJP66DlIlitaNK9P7riVf0kEPf4qyvYXitS61GhkHdHBiUSVqFU0rjTdjwqHbE3kvpGpt4qwg0M5JFKm4%2BWsQQrCfdf3KbROxmEgnXtLOjpPMf6lLTGcal4ssNxc5NP&X-Amz-Signature=69f7c84fd7a2bb7ece26a6eccd27b23dd125e8a961c18af5ea7bdb2eaf275154&X-Amz-SignedHeaders=host&x-id=GetObject)

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
