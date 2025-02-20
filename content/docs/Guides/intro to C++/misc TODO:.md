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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3W3QQL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh2BBqAk0iFYtJl8SrxSa2ss1qlsuqDNGjpnXmQhhXEAiEAurQLqklPrLZQuLDoZPCemChEkNTIvGzDwRkE1bXJRMEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwNXzsQ0d6cePNEkCrcA%2Bce0Lkh0S0hrkFocv0KkzCoSTP9RFauM2gsiIBbF%2B%2Bl1hW4eZTZ%2BLsAJuf8wNORnWaXppHL2B4RYKRnQ4Cyugr6U1f7p2DDto0PpmIek2WS%2BqV%2FXcUx7FTe0XfIDjFlT0CdoxDIqtd72VL6nW2YwcngQmvgBmuKiuZdYKhgf%2FpJWNT4FBQHemM8Z5yM4QlihUy1VibL5Tx%2BdNtvPZ4DFfjk57vOnelSNAoR5I%2Fgn6gnzP1QaW3XSdm42DRaLJ6YHFHiBnmdM%2F1yqZVINMA03wyDWf6kDeN8I8iYUz2PQgDyCiiOVSkXh1GrEtGNVTPqwCADrp9QZVW48QoMQVYj%2BZVZnlLhSkSaGULxekCtFO4tON7WxK2haH%2B7CEybisd8uPGuBe88%2FO%2BMmtx3f7I3EgHrqfJ%2Fbc3pj3gZ6zR1cOTcpE4NKXfTP0ZxO08%2BzG01eEow2JHwAGYA%2FXrDFBL4JLCqT4K3DVbWAacZG63eI5%2FjZnimmh0Nb%2FBipC6Ntno2N%2BsrTS3NZUhmsOXOge7Ba2twqlWZ%2B7NWZgaoHtGIWZyFFGOfhnLh9NkLyDMP2h%2BfmOvKVzTjmotgVzCrD1cL%2F11MEH%2F5TF317i0EIZY9z%2FVWrbjExPOBRwofeC%2BSMICO3r0GOqUBqHJUGplAXpaDbhRfrPkBiqsOkTWHVuQyVigOiyzZTstDqxG2WmCK01IQLoMFDuwCUIDcj%2B4JJjmq21aE6dFmTgTDDfEEFZiHwfwbaOaWZAJLY7257t8d%2Buj4r%2BNmtfoGsoHfa1ZlX%2BIf9PTqBvcQ1Z9DTEmuYNDBHByekjUhZ4CuCU2X6StB6GM1ChLBupU4BUlPkFBEQ0coYmZJ%2B9kHnNePgjxP&X-Amz-Signature=6622d82d4b513747d015edab8ab7d925077e130e701cd4a72f24a9a902243628&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3W3QQL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh2BBqAk0iFYtJl8SrxSa2ss1qlsuqDNGjpnXmQhhXEAiEAurQLqklPrLZQuLDoZPCemChEkNTIvGzDwRkE1bXJRMEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwNXzsQ0d6cePNEkCrcA%2Bce0Lkh0S0hrkFocv0KkzCoSTP9RFauM2gsiIBbF%2B%2Bl1hW4eZTZ%2BLsAJuf8wNORnWaXppHL2B4RYKRnQ4Cyugr6U1f7p2DDto0PpmIek2WS%2BqV%2FXcUx7FTe0XfIDjFlT0CdoxDIqtd72VL6nW2YwcngQmvgBmuKiuZdYKhgf%2FpJWNT4FBQHemM8Z5yM4QlihUy1VibL5Tx%2BdNtvPZ4DFfjk57vOnelSNAoR5I%2Fgn6gnzP1QaW3XSdm42DRaLJ6YHFHiBnmdM%2F1yqZVINMA03wyDWf6kDeN8I8iYUz2PQgDyCiiOVSkXh1GrEtGNVTPqwCADrp9QZVW48QoMQVYj%2BZVZnlLhSkSaGULxekCtFO4tON7WxK2haH%2B7CEybisd8uPGuBe88%2FO%2BMmtx3f7I3EgHrqfJ%2Fbc3pj3gZ6zR1cOTcpE4NKXfTP0ZxO08%2BzG01eEow2JHwAGYA%2FXrDFBL4JLCqT4K3DVbWAacZG63eI5%2FjZnimmh0Nb%2FBipC6Ntno2N%2BsrTS3NZUhmsOXOge7Ba2twqlWZ%2B7NWZgaoHtGIWZyFFGOfhnLh9NkLyDMP2h%2BfmOvKVzTjmotgVzCrD1cL%2F11MEH%2F5TF317i0EIZY9z%2FVWrbjExPOBRwofeC%2BSMICO3r0GOqUBqHJUGplAXpaDbhRfrPkBiqsOkTWHVuQyVigOiyzZTstDqxG2WmCK01IQLoMFDuwCUIDcj%2B4JJjmq21aE6dFmTgTDDfEEFZiHwfwbaOaWZAJLY7257t8d%2Buj4r%2BNmtfoGsoHfa1ZlX%2BIf9PTqBvcQ1Z9DTEmuYNDBHByekjUhZ4CuCU2X6StB6GM1ChLBupU4BUlPkFBEQ0coYmZJ%2B9kHnNePgjxP&X-Amz-Signature=7d4c45ae5cff9e9f4b79506cd81720c03f444d253bb966838aae13685a41c36c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
