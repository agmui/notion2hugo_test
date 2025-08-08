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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZBLJX2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDR0mmfjiCghu4YvuJIOF%2BBRSOGwG2dVeDBvQTB6B6etAiA%2FFjDXdb7xUwdzsc6cXBzW9Km%2FJhWn0HiQjXTQ5UPJiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeZnQRt2ttlPP4lQKtwDZh%2BKbk3uZQNWkOflvbyWAryVqkEYKppqMmF5EKT3LNVEHxnZAoolmKe36jf7SsJiXX%2BtJSM7J8MJRI649URtE%2B%2Fo8dYhRJEYU%2BHkBEjLcwN%2B0Y%2BTBkVQ4iJBnDeb9YCXX2QTG6x88VPYHQXDGBWINp0dE8AACmbxD398O34m%2FVfRpyFsGi37X9dGVww4J5fTwsMdXFK45hPoqEpJ3LpDTAnjxFIp4MriUa33Io72oiys0oaoTb9mtaicSZC1p9XXF2GuC%2FKdl4UPVG98xdnUwr2XIS%2FlGlozwbOT7xR0JxDq1672TJifMyeprNseZXVAVc7FFZJ0bP6GoNIm2RoRejfDEm0nos4xrYtiV35Qtc15SUpDyDqKT9VFSf5NBzenEJJRfe4gInh4jnTGGMRzRKKoxRXhKdlhqEo6jwNghobyxkI8skIVwR26HvWQro0anKEyFnbfeKZbtKuova4ReKCFzdpOe%2BCmZ%2FIg3hHJJMuTR9bEaDuk7W7FSKAFjRoDdkaoHdrlIQhkQa10dhWsbkqU%2Bea9u2diwA8K7Vw1TrXHgQ9b4MczNFQsEN6tnj11v792FXW%2F0yfoDCn6oDyu5DeE6t4rFMxkvnPA6S3zbiwmOEmUd35EYl5dEVUwl6fYxAY6pgGdLEC1RjaLRy%2BoNTCMD7E2WnkoY1GByM2dro0uhIxZvSnkSfJT%2F%2B%2Bo1NgQ4fMbDhgXwvsQeSKwAc8ReucxwXBYhnsB9CLavfj7o0epuW%2BfGRa%2BA0UqATEW16IEtSf2aMMfLHmhy8S8LHpitZIrGwJSqs8vCosvbc2jYWihsHK26AJy529indcvtgCvXjvWKwf%2BJrEA%2BmFwnPvzF0jKMHWn3ie%2Bz1R1&X-Amz-Signature=1d73acd183c1ba5b6c237eb3358b58fbc87c1993abed56aa7f4399b7123974d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZBLJX2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDR0mmfjiCghu4YvuJIOF%2BBRSOGwG2dVeDBvQTB6B6etAiA%2FFjDXdb7xUwdzsc6cXBzW9Km%2FJhWn0HiQjXTQ5UPJiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeZnQRt2ttlPP4lQKtwDZh%2BKbk3uZQNWkOflvbyWAryVqkEYKppqMmF5EKT3LNVEHxnZAoolmKe36jf7SsJiXX%2BtJSM7J8MJRI649URtE%2B%2Fo8dYhRJEYU%2BHkBEjLcwN%2B0Y%2BTBkVQ4iJBnDeb9YCXX2QTG6x88VPYHQXDGBWINp0dE8AACmbxD398O34m%2FVfRpyFsGi37X9dGVww4J5fTwsMdXFK45hPoqEpJ3LpDTAnjxFIp4MriUa33Io72oiys0oaoTb9mtaicSZC1p9XXF2GuC%2FKdl4UPVG98xdnUwr2XIS%2FlGlozwbOT7xR0JxDq1672TJifMyeprNseZXVAVc7FFZJ0bP6GoNIm2RoRejfDEm0nos4xrYtiV35Qtc15SUpDyDqKT9VFSf5NBzenEJJRfe4gInh4jnTGGMRzRKKoxRXhKdlhqEo6jwNghobyxkI8skIVwR26HvWQro0anKEyFnbfeKZbtKuova4ReKCFzdpOe%2BCmZ%2FIg3hHJJMuTR9bEaDuk7W7FSKAFjRoDdkaoHdrlIQhkQa10dhWsbkqU%2Bea9u2diwA8K7Vw1TrXHgQ9b4MczNFQsEN6tnj11v792FXW%2F0yfoDCn6oDyu5DeE6t4rFMxkvnPA6S3zbiwmOEmUd35EYl5dEVUwl6fYxAY6pgGdLEC1RjaLRy%2BoNTCMD7E2WnkoY1GByM2dro0uhIxZvSnkSfJT%2F%2B%2Bo1NgQ4fMbDhgXwvsQeSKwAc8ReucxwXBYhnsB9CLavfj7o0epuW%2BfGRa%2BA0UqATEW16IEtSf2aMMfLHmhy8S8LHpitZIrGwJSqs8vCosvbc2jYWihsHK26AJy529indcvtgCvXjvWKwf%2BJrEA%2BmFwnPvzF0jKMHWn3ie%2Bz1R1&X-Amz-Signature=1490296209193171b89033731d0fe3e551145feab171b79553b2adf8d853dd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
