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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TGKAGI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAVtHmuEutPwjustb7J4vgd96fG1eS%2BLBmHSQy0TgpDyAiAz5%2BTugRg1NZmYmKqeY%2FSMpQM%2B54H2eL7PEbcbjF%2Bo0yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdsjjte%2FukW9cSPz1KtwDuNLExwLIUtEqhyREsKG0QRKeSdp0ylGlFq7nn%2F4OqbdtjM8KX9q6r0%2FlKVZ%2BUk0AreukafLJMEO9B2iQIXTdL0rqWoKfr4A8zwB4PwWrvXH5UyA45e%2Bq8iDLZQyk0iUSsj5sLx1JiANGxK%2BzGoJr3nR8HllBw5w2vPtQb%2BeGtAYZT8l%2FcG3JE2H9HKthoaq3bePW2c6mm%2FOYC0gOpn9JkANFsIKrBkC321b9Gxd5zX995ZA%2BzesHu0%2F%2FFNBKNxwP2CulK9yyKXsp4UF4a3pHV1iJvECAIqzquTBaOVP1Min2pbKalcmmZd7Te3AXheYJR1gdpPGoN%2BdlFsKImuXRdpumhBJ9Wv37V3arlr6dIHl9QGZSbFJf1HfAJWYJ5u%2BFcaJAmOinhJvcMwHOHvE%2Blgs%2FYsah5V0la5YRLEloQhnfk39FQg4ksCBfz1a1CJTfwR6Wc%2B1JqVQR2b%2FyeuTACQmY2Ky97KE1fjNHC%2F5pVnMwV8vfokrR8keqqqpSs3zRLtf2ut5PhXoXMiKO0DHo0OBYeg9118yGEPSeX8xhrRNtBilmq%2BycjKE%2BxYfFxruLkZDQevT8h0uAbkfjRKhxljqF3n3d81WilzzO6Fkn7uAxbd3nDNlpUINbZMcwl5v2vgY6pgGv63ajyMbXgBL9mkkyKnOXD17oQGuBCPOWSy9Pve8PpwGS7mJP6g8%2F0Cf%2BweNoVG3ojhnv%2FiDGPUxFmgl41GDr9Vh%2FMXLEItfW6xj6W5bVYLBcTHG0iq5Aro7t%2BIcnny1Bk0%2FEHzIk4zmYTzBcUNlTXzzGApyQpTcu%2BifNIkFGFl5K31uVj4tA0xYJ0VnIEJsBATsCoiW4FxyRKNG73EIb0%2FAC%2BPPl&X-Amz-Signature=0e3ea8364385d6384955c5e4c7db70ad43026ded7d257b8fba4932731360c30a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TGKAGI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAVtHmuEutPwjustb7J4vgd96fG1eS%2BLBmHSQy0TgpDyAiAz5%2BTugRg1NZmYmKqeY%2FSMpQM%2B54H2eL7PEbcbjF%2Bo0yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdsjjte%2FukW9cSPz1KtwDuNLExwLIUtEqhyREsKG0QRKeSdp0ylGlFq7nn%2F4OqbdtjM8KX9q6r0%2FlKVZ%2BUk0AreukafLJMEO9B2iQIXTdL0rqWoKfr4A8zwB4PwWrvXH5UyA45e%2Bq8iDLZQyk0iUSsj5sLx1JiANGxK%2BzGoJr3nR8HllBw5w2vPtQb%2BeGtAYZT8l%2FcG3JE2H9HKthoaq3bePW2c6mm%2FOYC0gOpn9JkANFsIKrBkC321b9Gxd5zX995ZA%2BzesHu0%2F%2FFNBKNxwP2CulK9yyKXsp4UF4a3pHV1iJvECAIqzquTBaOVP1Min2pbKalcmmZd7Te3AXheYJR1gdpPGoN%2BdlFsKImuXRdpumhBJ9Wv37V3arlr6dIHl9QGZSbFJf1HfAJWYJ5u%2BFcaJAmOinhJvcMwHOHvE%2Blgs%2FYsah5V0la5YRLEloQhnfk39FQg4ksCBfz1a1CJTfwR6Wc%2B1JqVQR2b%2FyeuTACQmY2Ky97KE1fjNHC%2F5pVnMwV8vfokrR8keqqqpSs3zRLtf2ut5PhXoXMiKO0DHo0OBYeg9118yGEPSeX8xhrRNtBilmq%2BycjKE%2BxYfFxruLkZDQevT8h0uAbkfjRKhxljqF3n3d81WilzzO6Fkn7uAxbd3nDNlpUINbZMcwl5v2vgY6pgGv63ajyMbXgBL9mkkyKnOXD17oQGuBCPOWSy9Pve8PpwGS7mJP6g8%2F0Cf%2BweNoVG3ojhnv%2FiDGPUxFmgl41GDr9Vh%2FMXLEItfW6xj6W5bVYLBcTHG0iq5Aro7t%2BIcnny1Bk0%2FEHzIk4zmYTzBcUNlTXzzGApyQpTcu%2BifNIkFGFl5K31uVj4tA0xYJ0VnIEJsBATsCoiW4FxyRKNG73EIb0%2FAC%2BPPl&X-Amz-Signature=e4875214b6512a570cf0e0c05020f1f421edc740578bfb1de98518598ec74b17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
