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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BEWXAD3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDRpnEJe%2FNHSEbQ%2Bg8cvQlWx%2BqE5wCzUQDMA2EQl17%2FzAIgCjjB2Zg%2FIAmclOiNeaXBMgGLbfeZWana%2BXE%2BQbwrHYMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKglgvPKrnSU2YVojCrcA%2BYj%2F9yzZEBZVhvQUEQwSi2VR6lCX7kQtCuNxmJqDxv2s88X%2FrMjnneB8QwuYTeHt1SHGLRoHT%2Bt0AYLGfFC5%2FfQhR7kvhej51ce8eYENC2SD44nGLFAIwNe1TQHH2N4X2Znro3SzjRrrmB6XQbIt%2BXdK9eB8P2pbu2b7277WVQlK4dx6a5NDanQN5BW5YeIxVo8525QqJLb1O6qdG%2BVC26k2tYvks04LbZ%2BS8XXJ0oCJRJl6OCMTvleCVjoLxZkQXqmVYDRco80AQgPCfigkK6Kmwr1sFx4bYxPjdm2W4SWxy2yFAGy2o0iSUN0vK0%2BEMs6y3ExoCC8e1O1%2BIwjDeW00ab2gOSpzNPMO2ywJDfdgo3G8DcjumvOyDCtUheUXf9VBwUALHnqIdKs1qXDfgIm66WsEiXrfjIYH%2Fr2NaMxh%2Bo6exbPA6iyyObXDrW10U2x67h0Syt9DzDq2m%2FTfwej%2FswIejU9fK3hx8bsYXGXGG0DKvMwIWXTcVMkr8A2%2BEU9kqqCdUrtZXnxTeD9T8Ib03lufgnTDxloIIWmB1rrnVcS%2FuWLWH3Tz59ShLwhNa1W61Q%2BollgVyAfHxK7M38CQTMozqMboi0WbDPKjzi73biyfMBl6kK3k%2FGzMPSRkcAGOqUBoXjPsN2WWL5XSJ8niFMzp6c%2FWlrELyjXt%2FfFK2ZQ%2FPU4HBWzsvHJEPGv%2BSQaBK9ODIcSme8sgSJYQQEhTiH8SZspxCab6we7bPEpzFWET%2Bi7OSye71KQayY7tUPBr8HCDMAc4picEAn5z5gFsuLY3Ld1%2B1xsOo8oVk2UDZO5b2C49NaGQTzneRGzuOUuEtKrrFy11EuVIyUKKmHY58Y05ze6oJa5&X-Amz-Signature=69c05890a1cc4047b99e4362febadf8d9a73756b9bb37f1c2ff73341a29519d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BEWXAD3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDRpnEJe%2FNHSEbQ%2Bg8cvQlWx%2BqE5wCzUQDMA2EQl17%2FzAIgCjjB2Zg%2FIAmclOiNeaXBMgGLbfeZWana%2BXE%2BQbwrHYMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKglgvPKrnSU2YVojCrcA%2BYj%2F9yzZEBZVhvQUEQwSi2VR6lCX7kQtCuNxmJqDxv2s88X%2FrMjnneB8QwuYTeHt1SHGLRoHT%2Bt0AYLGfFC5%2FfQhR7kvhej51ce8eYENC2SD44nGLFAIwNe1TQHH2N4X2Znro3SzjRrrmB6XQbIt%2BXdK9eB8P2pbu2b7277WVQlK4dx6a5NDanQN5BW5YeIxVo8525QqJLb1O6qdG%2BVC26k2tYvks04LbZ%2BS8XXJ0oCJRJl6OCMTvleCVjoLxZkQXqmVYDRco80AQgPCfigkK6Kmwr1sFx4bYxPjdm2W4SWxy2yFAGy2o0iSUN0vK0%2BEMs6y3ExoCC8e1O1%2BIwjDeW00ab2gOSpzNPMO2ywJDfdgo3G8DcjumvOyDCtUheUXf9VBwUALHnqIdKs1qXDfgIm66WsEiXrfjIYH%2Fr2NaMxh%2Bo6exbPA6iyyObXDrW10U2x67h0Syt9DzDq2m%2FTfwej%2FswIejU9fK3hx8bsYXGXGG0DKvMwIWXTcVMkr8A2%2BEU9kqqCdUrtZXnxTeD9T8Ib03lufgnTDxloIIWmB1rrnVcS%2FuWLWH3Tz59ShLwhNa1W61Q%2BollgVyAfHxK7M38CQTMozqMboi0WbDPKjzi73biyfMBl6kK3k%2FGzMPSRkcAGOqUBoXjPsN2WWL5XSJ8niFMzp6c%2FWlrELyjXt%2FfFK2ZQ%2FPU4HBWzsvHJEPGv%2BSQaBK9ODIcSme8sgSJYQQEhTiH8SZspxCab6we7bPEpzFWET%2Bi7OSye71KQayY7tUPBr8HCDMAc4picEAn5z5gFsuLY3Ld1%2B1xsOo8oVk2UDZO5b2C49NaGQTzneRGzuOUuEtKrrFy11EuVIyUKKmHY58Y05ze6oJa5&X-Amz-Signature=df8b30a05e3915f7732c11c554b95144456f14202a73152980ed686ec4101fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
