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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLX6GSZR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7Rc%2FP04ohYqlAAR627Z3ooPqrBVQl59Mmb0llzoHgwIhAN3c5P9cn4BdgfhNtHo9Z3Shg53Nres77fBUGV06x6x8KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7fObhnqYUrO2PhMq3ANuUHYu5PTqNinx5cRYVS0SDVEqx3De8u2HjFOE25mITc6qJ77wKg30Gm%2FbskqOv46ZE9BFFw%2FSD7LSm1lq1pjmVVHLQdy7oSaAA6dcF%2Bq5JmXVmre3VTW9D3TcNaGUxlEf89LrA9aFJFDOM%2BI%2FvAWfM1x5CJOOjmwuXAxl7p9LaA0uaMho4qECWlwIMjstKxcYcIUR0ZcSM1K7386PnLWfqTrmcGQqi7VXdJlWHZBtCzHrpAXF7%2F3lUXjCKCAPiRqNMt1ucPmV1gS%2BYkotAJTQ8UTMbRMnbfdCAMK3IPbTmhBkabW%2BUwr0orWdUZ4tkZ%2BOkZA33ib3BDoIBLeX3zuYLLtw%2BkFAc33xxpfvVrkLY0xxCqVyojdk9ZGjSpgd%2F%2F8jKxTZj5jBg4jYsWzh8FEiaowDCq%2Bh8zgdHNeoBSNFbWj8xAWluwoEeqL0uxqSQFIJkAeJfTSyvqC6YIr9dKprQ7RqFlo3ySVfWiQpTggMFYC9fIXQ1JXGbkihBckuC9k4x1qMsKDlatBZGimtLcouhqZYGkTXpx%2BaBRW50PbxGcJuz5g4AVLw1NX3s0Z9I9cEjt7hs0gcMvEe3hm2h8eOLIvu3tyQoOJl2n%2F4bAMXplYLpQyuEg%2Bnj7JzLjDN2PK8BjqkAfygmgCIPSAw%2BsYLfvujnVvm4x9gSBpkpoQb%2FwOS%2FRUAV4JU6ZpxuswgeYQn7UTRf0gxci%2FlcYPKeC2bcfZ8njENikac25EIn6PCPyNYdlGzZRzgmSwWClEnuMlLmID%2FubDSxY04FLezS2dh1pUfnO1mjbufl6r8c10DrfQTSWGM7slubkomKr8ygRB1p4EGSyBGvtDOT0a7BRXne%2Bqqd4QxEymv&X-Amz-Signature=a5c7b0567121c0aef4fbc4011fc9b613f24265d08c0ce353ac1c8ba627a0bab2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLX6GSZR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7Rc%2FP04ohYqlAAR627Z3ooPqrBVQl59Mmb0llzoHgwIhAN3c5P9cn4BdgfhNtHo9Z3Shg53Nres77fBUGV06x6x8KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7fObhnqYUrO2PhMq3ANuUHYu5PTqNinx5cRYVS0SDVEqx3De8u2HjFOE25mITc6qJ77wKg30Gm%2FbskqOv46ZE9BFFw%2FSD7LSm1lq1pjmVVHLQdy7oSaAA6dcF%2Bq5JmXVmre3VTW9D3TcNaGUxlEf89LrA9aFJFDOM%2BI%2FvAWfM1x5CJOOjmwuXAxl7p9LaA0uaMho4qECWlwIMjstKxcYcIUR0ZcSM1K7386PnLWfqTrmcGQqi7VXdJlWHZBtCzHrpAXF7%2F3lUXjCKCAPiRqNMt1ucPmV1gS%2BYkotAJTQ8UTMbRMnbfdCAMK3IPbTmhBkabW%2BUwr0orWdUZ4tkZ%2BOkZA33ib3BDoIBLeX3zuYLLtw%2BkFAc33xxpfvVrkLY0xxCqVyojdk9ZGjSpgd%2F%2F8jKxTZj5jBg4jYsWzh8FEiaowDCq%2Bh8zgdHNeoBSNFbWj8xAWluwoEeqL0uxqSQFIJkAeJfTSyvqC6YIr9dKprQ7RqFlo3ySVfWiQpTggMFYC9fIXQ1JXGbkihBckuC9k4x1qMsKDlatBZGimtLcouhqZYGkTXpx%2BaBRW50PbxGcJuz5g4AVLw1NX3s0Z9I9cEjt7hs0gcMvEe3hm2h8eOLIvu3tyQoOJl2n%2F4bAMXplYLpQyuEg%2Bnj7JzLjDN2PK8BjqkAfygmgCIPSAw%2BsYLfvujnVvm4x9gSBpkpoQb%2FwOS%2FRUAV4JU6ZpxuswgeYQn7UTRf0gxci%2FlcYPKeC2bcfZ8njENikac25EIn6PCPyNYdlGzZRzgmSwWClEnuMlLmID%2FubDSxY04FLezS2dh1pUfnO1mjbufl6r8c10DrfQTSWGM7slubkomKr8ygRB1p4EGSyBGvtDOT0a7BRXne%2Bqqd4QxEymv&X-Amz-Signature=8afa69ef5ae9cf5ca1a2b6841d049d02d8f6e7499ae168e8a632b29c2ad0b58c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
