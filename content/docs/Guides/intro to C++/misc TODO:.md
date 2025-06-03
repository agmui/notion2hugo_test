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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CXNU6AB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEyX3cZtm9trf222IcDrhDYk%2B0%2Bvbno6XJWEuuHHCtCwAiEAt%2FuDpl%2Bspc00dF8HlJypqBS2sHjfcGSvQDAq3joQyJIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJniBhoVuLZMGrvz%2BCrcA%2FUgGyVoOjJK7lStfu30HNdlxtBjd1aQumNoqmQyKh%2Ba572rJtQj7sXFaD9iwuiK4hKpS2MIMV776Lf875fsPBqItIvwmk4wvUs6aTAJfF9kEBRM%2BxGr%2Fe1PGSQ%2F%2BsIDsMbKH6YM%2FWazqzpfBIZGiLdLzK7acgN9pwYc0tDqsWcjNYAOhWR%2B3UcZu9a2meU4TbwyGTypEaLQvFmo2YQ6ppZQrAeShLwQC6COCWDxptNZKakX2gQDkRa2cfcTDkbnq2s5lW57Q6818QPRuF4LWzRcGjuZM2te0f31RNonBpGkTPuMs%2B3tCf%2F7TnkLVmZYl8LhoHZ8oxWK3MInCUsbYB43lH1lPJDzPgY0hVMesDX8IXcSxIw0rnIoewLuBzmEgCFMKeCzoVh8P3I6bZYZX96YeyF0TH9QoswSSOraiQLcxgSD%2F701o3f%2B3LDk5OQ983sXzF8Ni%2BsJ9ezn8K7vXbyIpP6XY83onRov8jt71EJBSv7eEpSawt7O2aTTLeDel%2B22gOde1bN0i3v4SMsHfRUFuI3NXXvhz%2FMX1GZw6FxN3MN4zOwGgs0TK0QJKtfkBaPDo7cL0%2FcAyvzEfEMPLWIDHHFiPlYmrbEknkWEHfbS4NKj%2B0lSyPeRTdPzMMfS%2FMEGOqUBQpfB9foKKMy2dHdY%2F6rEed0qgnA8%2BHSdzPMK0UlVYTGHm4m5JmbK%2BLIXUgi6PuHQItAs2IuIwdpPXvGsJyw%2B%2B5dVrNL2Mg8urBcIhhYXuBjgI2Fxm5oZD4Fj9bX1m1in11AkqfiyUcQ%2BiG%2FQFPtg5p1UqB1rRMq45COKT3RMH01YB4C0EwHoHWtx%2FEiMTbufCRzFM16i53rLLRldjMWWDChsjDyq&X-Amz-Signature=8a114e4696ca73a69adf2a29e67b98820941dbfff2e5ebb7bf034f02d30b627d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CXNU6AB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEyX3cZtm9trf222IcDrhDYk%2B0%2Bvbno6XJWEuuHHCtCwAiEAt%2FuDpl%2Bspc00dF8HlJypqBS2sHjfcGSvQDAq3joQyJIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJniBhoVuLZMGrvz%2BCrcA%2FUgGyVoOjJK7lStfu30HNdlxtBjd1aQumNoqmQyKh%2Ba572rJtQj7sXFaD9iwuiK4hKpS2MIMV776Lf875fsPBqItIvwmk4wvUs6aTAJfF9kEBRM%2BxGr%2Fe1PGSQ%2F%2BsIDsMbKH6YM%2FWazqzpfBIZGiLdLzK7acgN9pwYc0tDqsWcjNYAOhWR%2B3UcZu9a2meU4TbwyGTypEaLQvFmo2YQ6ppZQrAeShLwQC6COCWDxptNZKakX2gQDkRa2cfcTDkbnq2s5lW57Q6818QPRuF4LWzRcGjuZM2te0f31RNonBpGkTPuMs%2B3tCf%2F7TnkLVmZYl8LhoHZ8oxWK3MInCUsbYB43lH1lPJDzPgY0hVMesDX8IXcSxIw0rnIoewLuBzmEgCFMKeCzoVh8P3I6bZYZX96YeyF0TH9QoswSSOraiQLcxgSD%2F701o3f%2B3LDk5OQ983sXzF8Ni%2BsJ9ezn8K7vXbyIpP6XY83onRov8jt71EJBSv7eEpSawt7O2aTTLeDel%2B22gOde1bN0i3v4SMsHfRUFuI3NXXvhz%2FMX1GZw6FxN3MN4zOwGgs0TK0QJKtfkBaPDo7cL0%2FcAyvzEfEMPLWIDHHFiPlYmrbEknkWEHfbS4NKj%2B0lSyPeRTdPzMMfS%2FMEGOqUBQpfB9foKKMy2dHdY%2F6rEed0qgnA8%2BHSdzPMK0UlVYTGHm4m5JmbK%2BLIXUgi6PuHQItAs2IuIwdpPXvGsJyw%2B%2B5dVrNL2Mg8urBcIhhYXuBjgI2Fxm5oZD4Fj9bX1m1in11AkqfiyUcQ%2BiG%2FQFPtg5p1UqB1rRMq45COKT3RMH01YB4C0EwHoHWtx%2FEiMTbufCRzFM16i53rLLRldjMWWDChsjDyq&X-Amz-Signature=f41b05ff7fd06059502a0bc1a8f66b88c12151dcdb3b687059b05f5b351f9db2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
