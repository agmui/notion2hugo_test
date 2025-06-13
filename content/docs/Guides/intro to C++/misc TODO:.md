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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5UXVJB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCqtCvlNCp6MelnbhCYpL%2BPq0Hs8yl5D47SBHzx9mpMzgIhAKLvAGjqaPw%2FLXJHuTD0eqx8X1kiT%2F9UkVmfCIFiX%2BbKKv8DCBUQABoMNjM3NDIzMTgzODA1IgxzjwkRiJgVuM6Bjf8q3AO15TtdBqcR3eECuZoa9nku49gg9ukkNp2KWqXI3ScoKAoctXziD8g2OkteBnUfFGB3EKtz7oXPP0ZQSP1hx6%2FiLbwGzZ%2BL%2FROKkwIl6S0d%2FZfFiUuzjcMzoKCNB0k923Cw9GU%2F5Enw2hbn1ongtLLQ3AX8jlWClgtnp%2FqB%2Fptt0wMbFZniocs%2BGW2OCxOcPyJOZsqw7F0aHocgX3hO78tW5GRDgSMu4hN9cTxYVxaLqZrtMuoR%2B2ylD1U9bl%2FipY6uUm4a5ixERZEJlMhlL12dQ%2B7xSpBvDD1yBftDv5H6hdjStIe9yFg7k74aKuJezYqzD6Katx7CkH56mokIdSewACWLAsNl%2FcWBs1KPziucZ1VFHOGknD8IAzDhiNkjExzFmTbxQFYe6Pxy80Pwlj%2F6Gh35lMztrXwujN97iWEyq6H2Jry%2FgQyGSN4trQKNjDmw2wIRcZJYbYXufy2iF0lqLyNq8IlJz6eFOik1sVo1rLgdQrERFCGIDJ0R2l9yR1K4abMFu5gRXVM%2Bd4kIUoQI7bvIcAgsIcC79J4i0jE%2BCuFhK1EIVWFWUSOvIOKQ5jiYggJMrTAjcnp%2F5IwvYBRXA03UIJmsI2FlV%2Bx70EGEF51Z7qzi6A9ThQumbjCaqbDCBjqkATfljThhQ1Vb%2BBCnpePvGerd%2FWDINO5W4UWDwh%2Bm7%2FG8ocwsQhXkqOX%2Bxo%2BYLGjaBXExZTkQR6iRi3m9W6Kod6tl3qcD8c81X0BLHi3d%2BEpQqWwKEKWkeOKxO3NMOnZEGHrid5aR5JdeSRSjia%2Bmkr5eRVzc1FVoHL%2FNsfbfJKCeBVQtDfMLQDB9GnkIwv71gvCA5phMLoCJvb5iiXgVl8BUGrTV&X-Amz-Signature=f30814255cffac6f63ee88867041d043747b8259bf2d7ff088ee6f56abbc6638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5UXVJB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCqtCvlNCp6MelnbhCYpL%2BPq0Hs8yl5D47SBHzx9mpMzgIhAKLvAGjqaPw%2FLXJHuTD0eqx8X1kiT%2F9UkVmfCIFiX%2BbKKv8DCBUQABoMNjM3NDIzMTgzODA1IgxzjwkRiJgVuM6Bjf8q3AO15TtdBqcR3eECuZoa9nku49gg9ukkNp2KWqXI3ScoKAoctXziD8g2OkteBnUfFGB3EKtz7oXPP0ZQSP1hx6%2FiLbwGzZ%2BL%2FROKkwIl6S0d%2FZfFiUuzjcMzoKCNB0k923Cw9GU%2F5Enw2hbn1ongtLLQ3AX8jlWClgtnp%2FqB%2Fptt0wMbFZniocs%2BGW2OCxOcPyJOZsqw7F0aHocgX3hO78tW5GRDgSMu4hN9cTxYVxaLqZrtMuoR%2B2ylD1U9bl%2FipY6uUm4a5ixERZEJlMhlL12dQ%2B7xSpBvDD1yBftDv5H6hdjStIe9yFg7k74aKuJezYqzD6Katx7CkH56mokIdSewACWLAsNl%2FcWBs1KPziucZ1VFHOGknD8IAzDhiNkjExzFmTbxQFYe6Pxy80Pwlj%2F6Gh35lMztrXwujN97iWEyq6H2Jry%2FgQyGSN4trQKNjDmw2wIRcZJYbYXufy2iF0lqLyNq8IlJz6eFOik1sVo1rLgdQrERFCGIDJ0R2l9yR1K4abMFu5gRXVM%2Bd4kIUoQI7bvIcAgsIcC79J4i0jE%2BCuFhK1EIVWFWUSOvIOKQ5jiYggJMrTAjcnp%2F5IwvYBRXA03UIJmsI2FlV%2Bx70EGEF51Z7qzi6A9ThQumbjCaqbDCBjqkATfljThhQ1Vb%2BBCnpePvGerd%2FWDINO5W4UWDwh%2Bm7%2FG8ocwsQhXkqOX%2Bxo%2BYLGjaBXExZTkQR6iRi3m9W6Kod6tl3qcD8c81X0BLHi3d%2BEpQqWwKEKWkeOKxO3NMOnZEGHrid5aR5JdeSRSjia%2Bmkr5eRVzc1FVoHL%2FNsfbfJKCeBVQtDfMLQDB9GnkIwv71gvCA5phMLoCJvb5iiXgVl8BUGrTV&X-Amz-Signature=0478aeef5a4f3f5e31b049d497f5c24d197c97362753867d25b50356cb09c7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
