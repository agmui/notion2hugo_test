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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQEP64CD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZv5w9rDrCO6IMpsg3jVHhA64ebH2Wr%2FIijRV3akAmdAiEAnD7gkuOtojCRX%2FjP1mqnB%2FRo9488GL3ypjpSONlkGvUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FeMobiWLinAd%2FUGCrcAyfVV0w9z5OMS411BeiIouJT8GcVzIoQgFOKTyENyhyzSC%2BhothHwCUM8VM272Se0ITMRoCrOfiYIRE%2Fo5mCHD3d8Hirg12XMjkEkQVffo7TUpHfI24bUBRpfPRxhEhKaK3feb64Gal2QC4z%2FUWyOwu%2BwySdWsfjzfe27NyBRZ%2FXgDRhlLxYOUnv55AVJiXgNxm2ajHuY7TzJz%2BxZ0KSdAZoNjkznxTHeLLXenHu6Ao%2FcnL4kBPsgkbDbY9vXsa%2BWVNtYobxYBocP5kL4ALmSbByloddxhI9zFrI8fXerug8wgxHMttn3xHGDEdb6IgF8m2I9PJsWf%2FtT3SGZdrUZfS0vVp7bZDW%2FN4Y7Y4SYh7QOjmpUszjwRuL1qdXbhvU6nMyO7C1sk14qqLRskK%2BOvCXCJjRyDicdxN7iMVcDwpaWIfKdPh3qw40rlxOV4Xe6GoT%2FWkneA7RY6qg7UaK6UlsvSjoshgWeKSqdT7smf52QgUrdKyEqSBxIVKj8pRZZqFoATY51Ead1%2FgaSgp%2FAvnfikCkkNVF%2FdUaWs%2B2m4S2O3opc2XdG8yDVlWUU61acdgere9ma4L6usYLS9GMYDPwC4TWQEJyWW0v4DwR1udAEgHJHfUBsaCVmp2oMJ7apsQGOqUB2eRGztuy6XSrnmUxD8qiArtyqAkYXev4CPoHljgrW9v6vGzmsfaB33midg%2F%2BQODURJJrQhqs20shor%2F1QmY9w6Lkl9rCDjhzbz52g%2Fzh7BvbZSNXnmdfWSm9aqLVGHZ8W6FJVhZymQo0fnCwXJ4Oc8vIzhJo1FZ5IWb3fSf97%2BriBs23ZZJOvfbTMUCmsAzzLs3kNmcYuh11FGYd9T1BWMD3Dv2s&X-Amz-Signature=0d19fe1ea63518a1527fa8e3dfe6a50cd32de470703a76d83566468add9045a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQEP64CD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZv5w9rDrCO6IMpsg3jVHhA64ebH2Wr%2FIijRV3akAmdAiEAnD7gkuOtojCRX%2FjP1mqnB%2FRo9488GL3ypjpSONlkGvUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FeMobiWLinAd%2FUGCrcAyfVV0w9z5OMS411BeiIouJT8GcVzIoQgFOKTyENyhyzSC%2BhothHwCUM8VM272Se0ITMRoCrOfiYIRE%2Fo5mCHD3d8Hirg12XMjkEkQVffo7TUpHfI24bUBRpfPRxhEhKaK3feb64Gal2QC4z%2FUWyOwu%2BwySdWsfjzfe27NyBRZ%2FXgDRhlLxYOUnv55AVJiXgNxm2ajHuY7TzJz%2BxZ0KSdAZoNjkznxTHeLLXenHu6Ao%2FcnL4kBPsgkbDbY9vXsa%2BWVNtYobxYBocP5kL4ALmSbByloddxhI9zFrI8fXerug8wgxHMttn3xHGDEdb6IgF8m2I9PJsWf%2FtT3SGZdrUZfS0vVp7bZDW%2FN4Y7Y4SYh7QOjmpUszjwRuL1qdXbhvU6nMyO7C1sk14qqLRskK%2BOvCXCJjRyDicdxN7iMVcDwpaWIfKdPh3qw40rlxOV4Xe6GoT%2FWkneA7RY6qg7UaK6UlsvSjoshgWeKSqdT7smf52QgUrdKyEqSBxIVKj8pRZZqFoATY51Ead1%2FgaSgp%2FAvnfikCkkNVF%2FdUaWs%2B2m4S2O3opc2XdG8yDVlWUU61acdgere9ma4L6usYLS9GMYDPwC4TWQEJyWW0v4DwR1udAEgHJHfUBsaCVmp2oMJ7apsQGOqUB2eRGztuy6XSrnmUxD8qiArtyqAkYXev4CPoHljgrW9v6vGzmsfaB33midg%2F%2BQODURJJrQhqs20shor%2F1QmY9w6Lkl9rCDjhzbz52g%2Fzh7BvbZSNXnmdfWSm9aqLVGHZ8W6FJVhZymQo0fnCwXJ4Oc8vIzhJo1FZ5IWb3fSf97%2BriBs23ZZJOvfbTMUCmsAzzLs3kNmcYuh11FGYd9T1BWMD3Dv2s&X-Amz-Signature=d3f57ceca84b1bc1e34cc9fa5e4353489d594a67ea20d629e36847a00b3d4e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
