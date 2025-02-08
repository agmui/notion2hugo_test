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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQL545I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA5DDUR43dlnVNJRauD05hDfGvTosdundXAbJSrUC8EaAiA2rHLv%2BJaeKanIMCfXJtuzyEirxnDInwLeOihXTJNHyCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLk4y3HkcQ3eAsxnKtwDHnk97CMd2aeVKzmGjc%2FsIsYwyiqLEZsgi0Vx8h8cT%2FE3j2VasRv93%2BpBkqitoqEeLGfbzXwZDZbYUcQ0jV1W%2FMCS2WWlcXx3xvB0C4dUUpRy65YQ3K1P6ntdgj4ueRXtmDrlpQ8uysieTbbUEUkpNTjELDGD5zS8qb9Pl1%2BhEqB4tSc%2Bgkc8u3r3fAyWeelW%2BxlfRWETGDfmni%2BYZulcmVqPIuOkxbprfYwX7VipU3RukbgDW%2F42LzbmzpLt49dcDqCM8tbLS94u5RtfBIIPUR34%2FWgtMgMyQ4Ipi7jf12z42NmudEMxM5eZjj0E%2FoC3xTFqCr1IjhIC4iq5%2BAaEgr8V8Os9OFCopBVDxtun3HKpHBU%2BRoG%2Fw9YWnm3d%2B%2FP0GE5SwYHf5yQKQ8LJigLqBRLB8gVhpZ3YIwGMIguVCpqzd5vZwiyTaNyj7aiLuJ7S7eujb%2FeBRQvznWBKTz4SjS9o%2F5oTI2R8WWdLOJTRVCqMMo%2Bt8zezP6v3Vw26v0cBlk%2F6AUX9tt63aBpuRROSDGvIAO6HnUlyoNbUVsz7TL1sf76b%2BVVARgJVePAo47iChdxXfL8Mvv2fDfVfwsSzF8ugHCV%2FD71LPgiY%2F81niZiMNnZk1LgA%2F9OCOHUw2rObvQY6pgEFLG%2Btp3dsV1aoXpepd6JSdEOaQQLsyyryvT4lSXDkn9Lok3fUrKkdHRiyzSbEe7V2Rmf40oDFgrg5lgevtUOYneLiOnOpIQAF9QoEJo37yWfj5y90pqSIKK2XciseKF%2B2dLDfQA6nIZUIhXjOqaXSJ63jtHv0pNqCgf5lWMwzBKak5oYYhjsXGuQ5fJ7hX%2B1p2oKJ5ASfPWLqhcXYM%2BPN4aeEmlFp&X-Amz-Signature=8c8c7bcb52ec1105db1a4f411b519c1240b26773e3c468798b1a51670f438b74&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQL545I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA5DDUR43dlnVNJRauD05hDfGvTosdundXAbJSrUC8EaAiA2rHLv%2BJaeKanIMCfXJtuzyEirxnDInwLeOihXTJNHyCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLk4y3HkcQ3eAsxnKtwDHnk97CMd2aeVKzmGjc%2FsIsYwyiqLEZsgi0Vx8h8cT%2FE3j2VasRv93%2BpBkqitoqEeLGfbzXwZDZbYUcQ0jV1W%2FMCS2WWlcXx3xvB0C4dUUpRy65YQ3K1P6ntdgj4ueRXtmDrlpQ8uysieTbbUEUkpNTjELDGD5zS8qb9Pl1%2BhEqB4tSc%2Bgkc8u3r3fAyWeelW%2BxlfRWETGDfmni%2BYZulcmVqPIuOkxbprfYwX7VipU3RukbgDW%2F42LzbmzpLt49dcDqCM8tbLS94u5RtfBIIPUR34%2FWgtMgMyQ4Ipi7jf12z42NmudEMxM5eZjj0E%2FoC3xTFqCr1IjhIC4iq5%2BAaEgr8V8Os9OFCopBVDxtun3HKpHBU%2BRoG%2Fw9YWnm3d%2B%2FP0GE5SwYHf5yQKQ8LJigLqBRLB8gVhpZ3YIwGMIguVCpqzd5vZwiyTaNyj7aiLuJ7S7eujb%2FeBRQvznWBKTz4SjS9o%2F5oTI2R8WWdLOJTRVCqMMo%2Bt8zezP6v3Vw26v0cBlk%2F6AUX9tt63aBpuRROSDGvIAO6HnUlyoNbUVsz7TL1sf76b%2BVVARgJVePAo47iChdxXfL8Mvv2fDfVfwsSzF8ugHCV%2FD71LPgiY%2F81niZiMNnZk1LgA%2F9OCOHUw2rObvQY6pgEFLG%2Btp3dsV1aoXpepd6JSdEOaQQLsyyryvT4lSXDkn9Lok3fUrKkdHRiyzSbEe7V2Rmf40oDFgrg5lgevtUOYneLiOnOpIQAF9QoEJo37yWfj5y90pqSIKK2XciseKF%2B2dLDfQA6nIZUIhXjOqaXSJ63jtHv0pNqCgf5lWMwzBKak5oYYhjsXGuQ5fJ7hX%2B1p2oKJ5ASfPWLqhcXYM%2BPN4aeEmlFp&X-Amz-Signature=5daeb0a80e40ce11aa93ffc653cf8dff22fa9d4012699576c6ae13a88647d335&X-Amz-SignedHeaders=host&x-id=GetObject)

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
