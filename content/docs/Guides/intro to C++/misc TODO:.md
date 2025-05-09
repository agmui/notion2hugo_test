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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULNKUB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcOskIujOV44FVM50%2BNAubEG%2F6Fy7XR6CAlyznS%2B8rLwIhANbZUfPE6e0j54557H45mVGrIu2K1gZuqrviokp0vwVMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8PlO53%2Bm3W9N75S4q3AODRcz8T%2BZ%2FFOzCW8%2BH32IpbgzjCzEj6SZUDxL%2FoSLxlT10FJ1ShQnJlXJ%2BNl3MEgMhz8kRsncMGmobKGUHJTxhE66dm0hNcgunr%2BqwZTpRjPB0%2FxN3JoypwGhRbPHswzhrJH02KNvrB0wz7ukf%2B3PAjDX9tP2Dp99zLIASSK4nymddScxo4Kfq2ESVZdIv2B0FX3ysrECwuv%2FaSRovgFWzFny2a%2F3vyp%2FTMoncJ7684iVZdukDGXlmlZg6F1xgwY2Bte%2FLdBVtTM7kP9ubXkFCBbORykSXF5Z2UUhM%2FR%2BNSIfE%2FA1llBtb54Xtg5C%2FZPgr8%2BSbI33773N0IN7eskwc9KNJ0sntegQaELQro2lFKWL1gYKeIHODXxqAyg69Hv46Ww1G9UbdFnM1M6eWuT0J5m2%2BGb2Wud1PSwWLz%2BiQ9MxqImqnPMAYxb%2F2S0WY2PnvvvxYr%2FxpYRglOxZFuoZwjh1ni293olmYrnMJFPeE7Mj%2FYd46tEcTM27%2FSUT5Lm7TY8iD9nGead8b9gbJkPFAwE37ZwP5U3G1lcjd2pnHeFvEitDhwhuiLsmswPUJyq06ldMb3gPFQkmYT6Kcld6cnkvU5BugYJJwJLYhAPQ8Vv00UO1Ozg9GluQKBzCIrPnABjqkASTePEKsFMHScsTHdHxyoTabI6xLlrZfIXc5sVcNNWFLZaXpyTbR56wH9ztchnK9JxsPnia16HDWSXTm9AXv5rRtPB4R3w%2Fg%2FuWN7zkFyn29O9aK5124Y%2FJMwe%2BB3iKOWwIiU13V%2FPrXm7xkH4YbQyFiZCVRbIs8CHCLqhqKR%2BYBUZGAn3TNRJegR4%2BpKFbjPx%2FgO7kE1Fal30%2BZ%2FVpNM4cRSCgU&X-Amz-Signature=be1e77f8d779b5f6f4c9ff908fd75544642caf4d78c7ef449c4de97f1c8987b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULNKUB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcOskIujOV44FVM50%2BNAubEG%2F6Fy7XR6CAlyznS%2B8rLwIhANbZUfPE6e0j54557H45mVGrIu2K1gZuqrviokp0vwVMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8PlO53%2Bm3W9N75S4q3AODRcz8T%2BZ%2FFOzCW8%2BH32IpbgzjCzEj6SZUDxL%2FoSLxlT10FJ1ShQnJlXJ%2BNl3MEgMhz8kRsncMGmobKGUHJTxhE66dm0hNcgunr%2BqwZTpRjPB0%2FxN3JoypwGhRbPHswzhrJH02KNvrB0wz7ukf%2B3PAjDX9tP2Dp99zLIASSK4nymddScxo4Kfq2ESVZdIv2B0FX3ysrECwuv%2FaSRovgFWzFny2a%2F3vyp%2FTMoncJ7684iVZdukDGXlmlZg6F1xgwY2Bte%2FLdBVtTM7kP9ubXkFCBbORykSXF5Z2UUhM%2FR%2BNSIfE%2FA1llBtb54Xtg5C%2FZPgr8%2BSbI33773N0IN7eskwc9KNJ0sntegQaELQro2lFKWL1gYKeIHODXxqAyg69Hv46Ww1G9UbdFnM1M6eWuT0J5m2%2BGb2Wud1PSwWLz%2BiQ9MxqImqnPMAYxb%2F2S0WY2PnvvvxYr%2FxpYRglOxZFuoZwjh1ni293olmYrnMJFPeE7Mj%2FYd46tEcTM27%2FSUT5Lm7TY8iD9nGead8b9gbJkPFAwE37ZwP5U3G1lcjd2pnHeFvEitDhwhuiLsmswPUJyq06ldMb3gPFQkmYT6Kcld6cnkvU5BugYJJwJLYhAPQ8Vv00UO1Ozg9GluQKBzCIrPnABjqkASTePEKsFMHScsTHdHxyoTabI6xLlrZfIXc5sVcNNWFLZaXpyTbR56wH9ztchnK9JxsPnia16HDWSXTm9AXv5rRtPB4R3w%2Fg%2FuWN7zkFyn29O9aK5124Y%2FJMwe%2BB3iKOWwIiU13V%2FPrXm7xkH4YbQyFiZCVRbIs8CHCLqhqKR%2BYBUZGAn3TNRJegR4%2BpKFbjPx%2FgO7kE1Fal30%2BZ%2FVpNM4cRSCgU&X-Amz-Signature=193e66684ae88a393eb77643c43390c78f140e067a989edc187050a803010adb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
