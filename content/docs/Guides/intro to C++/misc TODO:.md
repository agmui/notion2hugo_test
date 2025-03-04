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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQVDSQR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuUSADvuNIgqmFwJZZsvCOlqjx5trW7jMMwoe294zMlwIhAKgNA2JLwk7TaVfzbwKR70%2FyQuOy9sSzIxDnFrtOFBkwKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVvn8YCJDW76%2FRbf4q3AOVE73Q1OhAbA614TVW6T1KigZtoCjs7Ly6hnfjUGDI4cULUUABXLqFb55ytR9%2BMnnV3egwBMjCzayoplNKi0zCNGUaN39FWjezZPmRexJDPedTP9dJt1mp5teHZLN1j9NiaOVtI1OuJlHF21fG8umHV6E5KXDEXAVsKUYhwK2MEspsbDhIciNE7LvHf6faWutgp%2BiEflQq19Bz6LPdIgDFN3MSfyVdBAT95wz9j%2B5iKO0vH8pwZbL%2BCoLTGR4wISNtDnx5ww%2B0OMH%2FZ233C747Gx6Fkqch%2FgRcLR4lH7UpdluBr6vBtSSkurxfvcRtMj6avq443bcnG%2B3HStabx%2F5L0UqXkCVKRDW8TClKhsvKq6VwLy5xKewLloUA3nYpmRfw4a8WA0IlqGH7yGhIGb8Pw114VLWySBN%2FxY8bJBgHGXBe7Ryd84jCtK6%2BZuKkwSo9VGUcsJ5XY9FckO9lIugHItDHU%2Bn6TovWYDkTkWC9azlIKktkR9%2BBKQ9Q6GO5Ets28OFbOaF%2BTOMRM6sJTalkC0sbuqnPiKg6y1YNbFx3oz%2FYumEX3Ry3PbYbdNmoPgkNc2Hpcjo0%2BlGyUAHtkbsBbgX%2BPrPUWJkX%2BFAI7qqw2PvFF06BoQt7uyBnqzDknZq%2BBjqkAadkzhoMrMHkoi8iuwiFOTA2bYM3NeTbldrO7F9w6s%2FNrGjlWcpF9xMStArnToIlUvcoTnAl7ZZDppGUTgdhXFMynxhktcDy6xdZLhBdT7OvlL1LrWzPQyioTTaqWJkf24xw7LLQEM5OcLt1e%2Ffwlsz0biokEiQuolbwqARGG6VCfJ%2FFZbLrqiEXWNfBw3Ws7ZmzU1XYA5yT1iNA5f7CXNP1fYjw&X-Amz-Signature=9bffca3e5c8995a16c86e9fc7865f7830590d319636b658e9dce3c77ae43a1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQVDSQR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuUSADvuNIgqmFwJZZsvCOlqjx5trW7jMMwoe294zMlwIhAKgNA2JLwk7TaVfzbwKR70%2FyQuOy9sSzIxDnFrtOFBkwKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVvn8YCJDW76%2FRbf4q3AOVE73Q1OhAbA614TVW6T1KigZtoCjs7Ly6hnfjUGDI4cULUUABXLqFb55ytR9%2BMnnV3egwBMjCzayoplNKi0zCNGUaN39FWjezZPmRexJDPedTP9dJt1mp5teHZLN1j9NiaOVtI1OuJlHF21fG8umHV6E5KXDEXAVsKUYhwK2MEspsbDhIciNE7LvHf6faWutgp%2BiEflQq19Bz6LPdIgDFN3MSfyVdBAT95wz9j%2B5iKO0vH8pwZbL%2BCoLTGR4wISNtDnx5ww%2B0OMH%2FZ233C747Gx6Fkqch%2FgRcLR4lH7UpdluBr6vBtSSkurxfvcRtMj6avq443bcnG%2B3HStabx%2F5L0UqXkCVKRDW8TClKhsvKq6VwLy5xKewLloUA3nYpmRfw4a8WA0IlqGH7yGhIGb8Pw114VLWySBN%2FxY8bJBgHGXBe7Ryd84jCtK6%2BZuKkwSo9VGUcsJ5XY9FckO9lIugHItDHU%2Bn6TovWYDkTkWC9azlIKktkR9%2BBKQ9Q6GO5Ets28OFbOaF%2BTOMRM6sJTalkC0sbuqnPiKg6y1YNbFx3oz%2FYumEX3Ry3PbYbdNmoPgkNc2Hpcjo0%2BlGyUAHtkbsBbgX%2BPrPUWJkX%2BFAI7qqw2PvFF06BoQt7uyBnqzDknZq%2BBjqkAadkzhoMrMHkoi8iuwiFOTA2bYM3NeTbldrO7F9w6s%2FNrGjlWcpF9xMStArnToIlUvcoTnAl7ZZDppGUTgdhXFMynxhktcDy6xdZLhBdT7OvlL1LrWzPQyioTTaqWJkf24xw7LLQEM5OcLt1e%2Ffwlsz0biokEiQuolbwqARGG6VCfJ%2FFZbLrqiEXWNfBw3Ws7ZmzU1XYA5yT1iNA5f7CXNP1fYjw&X-Amz-Signature=b4fe67810802e523cdacd71f52ac3ebf01c0306eb1ccca57d996dac97074677b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
