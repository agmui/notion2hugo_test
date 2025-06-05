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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5HR4ZLP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEiZ%2Fa%2FgFZH6VWfUWcT81eAxoijTv1AddYkmid6ichZPAiBGvUnVCfPgYGEX441l%2FFh8TSPXabyGsm6W6WYNBQrgTyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM9PimJAUAO8xT2y8nKtwD8rdwEPmEB%2FEps7PnVoBbIW6bpXiAg8Uv%2Bt%2B8M74EX8N0Mj%2F8iu0%2FiTwyv8qyNSMjdKBD%2Bfr%2Bd0bN2vuzUVM%2B1wOJcpcgEwsZWgw6pg5PLS0krWuQ6weYvAYf85aYuYOno3pj3EahfZth2AsBSMbApNC8q2VugpiFwLB6TlbGZpbBVr1%2FocD%2FfCnepkfG%2FRKTVSPZIpaRt8qwTyGhch%2FVG%2FC8z4gMqKdPGiRMYoaGLUuIxRhQJ8T%2BBNT5n1EvP8WQyzSjx%2BRAWTQQjRnAgqcFoEN6XlaXQnyvQ5mfdg0q6fNrvuB8VYoA4Y6WUuZUhzuNt%2FsG0uX9EmzMf%2FA7o7ZaIv%2FNbB1IrFxce9zt%2FKN4BHd84nYhwLXumq04%2BF92I4ad5%2F%2BY7mp3pdm0f2YNEllFdmpJMMDJBOnj4FIGm20K%2B6%2B0nlwKI2BpB5zt1XZB9hnUXw6BF2ZNR8KkHhtgX9Qtwvpy9eX3rdw%2Fnqb0xxmZ5S%2Fg%2B5FwWBmR71PrQz5K8PM4nwZ7i8woppGUe5rEF5F4o86rhyn5FDd3YDOslsJyudfrYjkTr23VTEpXJ5yr4P9370Su6wdGTixI2NJMpgdHMMlocLoJG35nkb7UHgj47bLj2g8eyWruqZiqjwgwycSGwgY6pgGtsdPaN7kbFjDLF8O4hYTgEYO31eR%2BkCuOpaY9LkdtcpVUP1w2YV14MLJd1y%2BE45o9M%2FbfiIJWo1rKonNZrn0VIqR9QAwxvp9LiG%2FcFWq9Yul4d9rIbhBrJRI6oGQznwYWZ7W8eWXnQb6YIuJXRtOB4pl9pfoJ%2B%2BTS5wbbBWMCn%2BwbfPB4PWHefYNPLPkMUyd%2BXkERfEKyNdym5KZLbdFcpAAic03W&X-Amz-Signature=25aa068bdc01f4759f25dc72989cbc0490c4dc67179a54c8c3b0340b0325c020&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5HR4ZLP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEiZ%2Fa%2FgFZH6VWfUWcT81eAxoijTv1AddYkmid6ichZPAiBGvUnVCfPgYGEX441l%2FFh8TSPXabyGsm6W6WYNBQrgTyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM9PimJAUAO8xT2y8nKtwD8rdwEPmEB%2FEps7PnVoBbIW6bpXiAg8Uv%2Bt%2B8M74EX8N0Mj%2F8iu0%2FiTwyv8qyNSMjdKBD%2Bfr%2Bd0bN2vuzUVM%2B1wOJcpcgEwsZWgw6pg5PLS0krWuQ6weYvAYf85aYuYOno3pj3EahfZth2AsBSMbApNC8q2VugpiFwLB6TlbGZpbBVr1%2FocD%2FfCnepkfG%2FRKTVSPZIpaRt8qwTyGhch%2FVG%2FC8z4gMqKdPGiRMYoaGLUuIxRhQJ8T%2BBNT5n1EvP8WQyzSjx%2BRAWTQQjRnAgqcFoEN6XlaXQnyvQ5mfdg0q6fNrvuB8VYoA4Y6WUuZUhzuNt%2FsG0uX9EmzMf%2FA7o7ZaIv%2FNbB1IrFxce9zt%2FKN4BHd84nYhwLXumq04%2BF92I4ad5%2F%2BY7mp3pdm0f2YNEllFdmpJMMDJBOnj4FIGm20K%2B6%2B0nlwKI2BpB5zt1XZB9hnUXw6BF2ZNR8KkHhtgX9Qtwvpy9eX3rdw%2Fnqb0xxmZ5S%2Fg%2B5FwWBmR71PrQz5K8PM4nwZ7i8woppGUe5rEF5F4o86rhyn5FDd3YDOslsJyudfrYjkTr23VTEpXJ5yr4P9370Su6wdGTixI2NJMpgdHMMlocLoJG35nkb7UHgj47bLj2g8eyWruqZiqjwgwycSGwgY6pgGtsdPaN7kbFjDLF8O4hYTgEYO31eR%2BkCuOpaY9LkdtcpVUP1w2YV14MLJd1y%2BE45o9M%2FbfiIJWo1rKonNZrn0VIqR9QAwxvp9LiG%2FcFWq9Yul4d9rIbhBrJRI6oGQznwYWZ7W8eWXnQb6YIuJXRtOB4pl9pfoJ%2B%2BTS5wbbBWMCn%2BwbfPB4PWHefYNPLPkMUyd%2BXkERfEKyNdym5KZLbdFcpAAic03W&X-Amz-Signature=34bf28f2c2fb93f7455d047a993b0cc2ec21d6f3fd6695f9319efdc2ac242a73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
