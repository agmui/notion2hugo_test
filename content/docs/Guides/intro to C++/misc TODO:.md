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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADCUXAS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIB30%2BTL4id5YXABLvGvPqq2FWk8L9Kbe4mIdm00PPtQeAiEAnAqPiPxCkMR4e7%2BtlrP5%2BB%2BF%2Bazfr7ptexfURSbsB5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN53lT56PGRYoDYgFircA%2BTBxy6k9SkK0n%2B6XgFkMtzAvN%2FWYYR4gDZlSMKadaDC0JM%2F4UggFg8DRJhnw0J%2FbksDbAga5GHzpW1HdQhVGIQM7lG%2B0RLfpr0xFsVtz%2FvBZGjIboMdxts7vkdkjuHCX0HYubaBQSnqcD8ckBIMo9HMqfGkIgrCwodldImF9seBztiZXjYhn5RtxWZAdfV7a9Vzm1fpBOCz%2B%2BZBRdNfqTfaRVUIZ4eBhyLOtU84pc0cPYnpTzPcjiwsDyOH62F8llptrQTS%2FME7sXk68P0T1TI%2B7jIz6xqfv6s0S5LrVoYEgzIuJO%2F46NYUdRoxuCl%2FQ7w9oYUHv7CzkOFYrX7eDh8YAjH7FX3r69Dup8sBrHj%2Fz6U%2FvLEmxW3QYrrwKb7gbKyQJcWgIIkrjmSqITRMu%2B8b2lo105%2FXSr3irIxJGoP6nOJ7o0zIfllUmwsKXKVQy4LAcjfstM0lUt25uB8ra44I47hTtI3kkDm3tcFcOxV3ivuDrRoTfFcXOvoI2hutErKsDYpXeLGne8I6tpgqH9H7f6G%2FTiK3mJVZVeDMrsnlJGwEGKyhaSCctWYKbcr72CNjR9%2Fmugm8cbaAxAe%2F4AdR2%2B7l7SmiVnaR5PH3oDyBKMF%2BRsllIzlHz%2FX%2FMJD15b4GOqUBa7fILIrXZSclKQ7CE1OeIrdkjVO3UN50Ntkf0GcVNUEvHdH%2F1eiZSIoXISKANXa4BZYXj92vaclWcwXNnP8uJhHKnWgMDpXvzEKJFeSL2q3a%2BUCd1rxSHmHpjQQRT%2FNvyDT%2FYmfRpP3HJL%2FIviC61F9nbtOkVDDp4LN%2FCEJe7PI4cJgcI%2BtX0u9SCcLnxrGYbBtR%2Bu0O1WtgV6OCd8tWiFrdJTQi&X-Amz-Signature=e8fbc4a6db322d81ae8564144f833981e68ab69a8d00235817692192e2c4bc68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADCUXAS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIB30%2BTL4id5YXABLvGvPqq2FWk8L9Kbe4mIdm00PPtQeAiEAnAqPiPxCkMR4e7%2BtlrP5%2BB%2BF%2Bazfr7ptexfURSbsB5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN53lT56PGRYoDYgFircA%2BTBxy6k9SkK0n%2B6XgFkMtzAvN%2FWYYR4gDZlSMKadaDC0JM%2F4UggFg8DRJhnw0J%2FbksDbAga5GHzpW1HdQhVGIQM7lG%2B0RLfpr0xFsVtz%2FvBZGjIboMdxts7vkdkjuHCX0HYubaBQSnqcD8ckBIMo9HMqfGkIgrCwodldImF9seBztiZXjYhn5RtxWZAdfV7a9Vzm1fpBOCz%2B%2BZBRdNfqTfaRVUIZ4eBhyLOtU84pc0cPYnpTzPcjiwsDyOH62F8llptrQTS%2FME7sXk68P0T1TI%2B7jIz6xqfv6s0S5LrVoYEgzIuJO%2F46NYUdRoxuCl%2FQ7w9oYUHv7CzkOFYrX7eDh8YAjH7FX3r69Dup8sBrHj%2Fz6U%2FvLEmxW3QYrrwKb7gbKyQJcWgIIkrjmSqITRMu%2B8b2lo105%2FXSr3irIxJGoP6nOJ7o0zIfllUmwsKXKVQy4LAcjfstM0lUt25uB8ra44I47hTtI3kkDm3tcFcOxV3ivuDrRoTfFcXOvoI2hutErKsDYpXeLGne8I6tpgqH9H7f6G%2FTiK3mJVZVeDMrsnlJGwEGKyhaSCctWYKbcr72CNjR9%2Fmugm8cbaAxAe%2F4AdR2%2B7l7SmiVnaR5PH3oDyBKMF%2BRsllIzlHz%2FX%2FMJD15b4GOqUBa7fILIrXZSclKQ7CE1OeIrdkjVO3UN50Ntkf0GcVNUEvHdH%2F1eiZSIoXISKANXa4BZYXj92vaclWcwXNnP8uJhHKnWgMDpXvzEKJFeSL2q3a%2BUCd1rxSHmHpjQQRT%2FNvyDT%2FYmfRpP3HJL%2FIviC61F9nbtOkVDDp4LN%2FCEJe7PI4cJgcI%2BtX0u9SCcLnxrGYbBtR%2Bu0O1WtgV6OCd8tWiFrdJTQi&X-Amz-Signature=8f3976636fe393c696f24f66ee85857aa1df2e5d58aef6dc4a5cfed2d5af6a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
