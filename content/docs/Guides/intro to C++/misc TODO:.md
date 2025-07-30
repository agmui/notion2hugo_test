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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT3PQBNZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUi2T0qRe4RmQ6WBdzIcEap52NfIyq4yEfQNgEsgBlFAIhAKTQhdG6eTLcX63opYcfs%2B%2F5VgcPd%2BV1mtjy%2BAjtz411KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzph3kY3q6kST7Hsvoq3AMSde0QLFsQo%2BGeFP6vtgpeswrYC8zVojHR2X6DNaDxFPV2utUzMLgyo9HBO6he78SuEfCgLKBezcHlVKHD9V%2FV0QqMeAhF5P2iGlpTVpAsv8AxyvR%2FeRSZoqLuJB71bxQiYkmcwY%2BaIs9uSjxAhz5Ivv26z9rFD51giRaSuwHdlCZWdjNY2JpFYk0Q%2BYajdMG%2BwtatDhNseZkP9gMVnTY8SjYDF8aTKRiVFrb96aDjpupc5q1r31fTChmsk6ASSMkYhrKEvd5s79RD4UzVu8x6bdZMBpGTNao%2BbWZCUqNC56Mr%2FUAcjd%2BvrmuD4IbkdU7LcX%2FioxWwhQEU33IF5ivybVJeYBQudLcZ%2FBEX%2Fi4xHThvDLKuyWiBk17ENt6D4ifY7imPveX5XGpF41sRp0W3ky%2FxQJXnmUJ7%2Fp0PwsLpJf8bE2kqPuS3ON0J17%2FAdYd8Pne4fZeQOuYOOfJlZwXmq2YNeYAyjhnSlw4wyxuqEzsZVyrsVln0nx%2FRMZqUQDm2WzkLM2sVtluTpljDJKcClOEWHP%2BA6ybEoqS7fbyRlcGg4DDMbaSAz7N7ukK9l7fpuON3crtNJs7Awp1eTZOZytdyJpbzAyxaLv73ZALajPAVnKW74dpqRPnKZjDPwafEBjqkAVKQZ0xcFnNHfUmcPgKKH8XCoyS86XPBbNL3pIAz7lRarh1tLxFXtdtcjdCPwM18qfHdiMD2h8evcTfeHxKOFJiDVJBbBZopJUv0CdeRbPxc1%2FSY9SyFBEWjOH7rHG6aleTy3gI6S5OnfO8nN%2BcIKJLqSlhlCo%2BrfihQrWBc%2FO7eMIbsV4j3HrW1WyTRHhAYqfG2gWNX5ss3PXQ8%2F4sc%2BML1gZ5t&X-Amz-Signature=16236656c1991a6dcb8ec070499438e728009a2548ef3e57a019960c253acb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT3PQBNZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUi2T0qRe4RmQ6WBdzIcEap52NfIyq4yEfQNgEsgBlFAIhAKTQhdG6eTLcX63opYcfs%2B%2F5VgcPd%2BV1mtjy%2BAjtz411KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzph3kY3q6kST7Hsvoq3AMSde0QLFsQo%2BGeFP6vtgpeswrYC8zVojHR2X6DNaDxFPV2utUzMLgyo9HBO6he78SuEfCgLKBezcHlVKHD9V%2FV0QqMeAhF5P2iGlpTVpAsv8AxyvR%2FeRSZoqLuJB71bxQiYkmcwY%2BaIs9uSjxAhz5Ivv26z9rFD51giRaSuwHdlCZWdjNY2JpFYk0Q%2BYajdMG%2BwtatDhNseZkP9gMVnTY8SjYDF8aTKRiVFrb96aDjpupc5q1r31fTChmsk6ASSMkYhrKEvd5s79RD4UzVu8x6bdZMBpGTNao%2BbWZCUqNC56Mr%2FUAcjd%2BvrmuD4IbkdU7LcX%2FioxWwhQEU33IF5ivybVJeYBQudLcZ%2FBEX%2Fi4xHThvDLKuyWiBk17ENt6D4ifY7imPveX5XGpF41sRp0W3ky%2FxQJXnmUJ7%2Fp0PwsLpJf8bE2kqPuS3ON0J17%2FAdYd8Pne4fZeQOuYOOfJlZwXmq2YNeYAyjhnSlw4wyxuqEzsZVyrsVln0nx%2FRMZqUQDm2WzkLM2sVtluTpljDJKcClOEWHP%2BA6ybEoqS7fbyRlcGg4DDMbaSAz7N7ukK9l7fpuON3crtNJs7Awp1eTZOZytdyJpbzAyxaLv73ZALajPAVnKW74dpqRPnKZjDPwafEBjqkAVKQZ0xcFnNHfUmcPgKKH8XCoyS86XPBbNL3pIAz7lRarh1tLxFXtdtcjdCPwM18qfHdiMD2h8evcTfeHxKOFJiDVJBbBZopJUv0CdeRbPxc1%2FSY9SyFBEWjOH7rHG6aleTy3gI6S5OnfO8nN%2BcIKJLqSlhlCo%2BrfihQrWBc%2FO7eMIbsV4j3HrW1WyTRHhAYqfG2gWNX5ss3PXQ8%2F4sc%2BML1gZ5t&X-Amz-Signature=3b32388141dfa820c680f878a8a989c62e3921136f7ddc92b7e944adb9c295f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
