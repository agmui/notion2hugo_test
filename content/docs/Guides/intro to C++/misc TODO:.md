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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBICWJD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIElDfIK9n4LWDi1JaIcZnRDnssL0YhjpnnkZcv%2BeRfDAAiB5ixpVMpIhosRYv%2FzhCrqXw4CEx7YbsfswO7vDuF%2Bedyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPKUIZjkoeB6vEueEKtwDKpzHXUvIPTgNmdXlld1A%2FZQIJbtNJ2j6sKr1WSs4FvbSbqomPPITwlTt2qOExJJUTvIpSF4OaGS70yJek%2Fga6WRrdTFK3uJIo0i3qgHwjhSC%2B8pYsVxh4Ho9FpN7LrWXGRfbhbtL6YkuIrX%2FJNMUtPdD5TmlLBoTcrjf7Vmj7J8%2BO7aCFkQ0r2ju4TdS%2BtVYyTxTlzsreZ4uge0mPmDu%2F1JCNqhfcrKXgnAGEbzUeWkN%2BMT2Y63i5guD1RnxyNfNKUGl2Ol8ppBaZmuHolF5X%2F8szOa5LBiYGGpR%2B86oKJsl%2BWuzYFhGoB19hL12wQ9FjOaDZGQdabOr3RBa3JWRdyyBnGih8bjUYmDOGrkBo9g3ZrNWFbIXca8%2FXIAIblp%2FCNvs%2FdmEq50NSb0Qf2C3xqrl3DFuGhruu9fwz7Yx5NV3dh1R1o7gN8WfNRdcdG5HwNI5hqQpieqg%2FbaGjDWKwreOZ4c34WTjpjqUOW6EoR%2FfpFRDMrSln88f3JGsMNuaNangtQNI9EiYfD093aM%2BxodsxBx57ojyJNwbPIEOP79oleoiMdxVpBrILcEglm4nW%2Bdh5dR3PnRgJnp49p6BO4aGamVYd5PR1t6n6glev1pbtxtA3qwfKG%2FrQoAwiu3BvQY6pgF5tnQC56G2xRBDCNw9dKI48v2OzGjzpQKBFVZVlB1JhL4IL3wM7pg2pTW9FLGvnfWSpyP1JhWIPoZAy%2BWRHR8EeXctuXD9CXH2fKFUGhX7Sl1twWBn3mm96oLNoerFXfcWKTfdTJ1c6Vmjbp61rrVgkr3RCOMOaHPQMRm4D8Pl5mSGs8CR0ZMo3Qk6%2BpVbnpy5PuaICAriQrMZ%2FxdbNnQm3bh2ZuZB&X-Amz-Signature=f31c2f9df5afe2567e61f27a5a055c2846c1e775105abee6de7bb1b63ddb2c20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBICWJD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIElDfIK9n4LWDi1JaIcZnRDnssL0YhjpnnkZcv%2BeRfDAAiB5ixpVMpIhosRYv%2FzhCrqXw4CEx7YbsfswO7vDuF%2Bedyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPKUIZjkoeB6vEueEKtwDKpzHXUvIPTgNmdXlld1A%2FZQIJbtNJ2j6sKr1WSs4FvbSbqomPPITwlTt2qOExJJUTvIpSF4OaGS70yJek%2Fga6WRrdTFK3uJIo0i3qgHwjhSC%2B8pYsVxh4Ho9FpN7LrWXGRfbhbtL6YkuIrX%2FJNMUtPdD5TmlLBoTcrjf7Vmj7J8%2BO7aCFkQ0r2ju4TdS%2BtVYyTxTlzsreZ4uge0mPmDu%2F1JCNqhfcrKXgnAGEbzUeWkN%2BMT2Y63i5guD1RnxyNfNKUGl2Ol8ppBaZmuHolF5X%2F8szOa5LBiYGGpR%2B86oKJsl%2BWuzYFhGoB19hL12wQ9FjOaDZGQdabOr3RBa3JWRdyyBnGih8bjUYmDOGrkBo9g3ZrNWFbIXca8%2FXIAIblp%2FCNvs%2FdmEq50NSb0Qf2C3xqrl3DFuGhruu9fwz7Yx5NV3dh1R1o7gN8WfNRdcdG5HwNI5hqQpieqg%2FbaGjDWKwreOZ4c34WTjpjqUOW6EoR%2FfpFRDMrSln88f3JGsMNuaNangtQNI9EiYfD093aM%2BxodsxBx57ojyJNwbPIEOP79oleoiMdxVpBrILcEglm4nW%2Bdh5dR3PnRgJnp49p6BO4aGamVYd5PR1t6n6glev1pbtxtA3qwfKG%2FrQoAwiu3BvQY6pgF5tnQC56G2xRBDCNw9dKI48v2OzGjzpQKBFVZVlB1JhL4IL3wM7pg2pTW9FLGvnfWSpyP1JhWIPoZAy%2BWRHR8EeXctuXD9CXH2fKFUGhX7Sl1twWBn3mm96oLNoerFXfcWKTfdTJ1c6Vmjbp61rrVgkr3RCOMOaHPQMRm4D8Pl5mSGs8CR0ZMo3Qk6%2BpVbnpy5PuaICAriQrMZ%2FxdbNnQm3bh2ZuZB&X-Amz-Signature=8db9c14448da76b987e0e3ffdef7c2643f5b1c8a923657662ca9dd2c1e0d6be8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
