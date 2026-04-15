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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O52KW7%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl%2FnHrEKhDqmulDMIRngSu6wvYa3uldkq0XWOUQpisXAiEA3FShZfVkPM9P%2F0Kl9lbGaDQolHNNIzGeiEcEuUW6RjkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLthe6LTYa1ZooRuwyrcA4kN3sez1ptroeW7vD7vQi4ptZN%2B4oNGCgP1Dk1m%2BM0Ztv6rl%2BzfS%2BiHeWNTmb2hlh%2BxiGMXpOnfYfXTbnU4xhfkD0O164G0WfjVu3Ko%2BWfX%2BYs%2BBJaGig4iq3xFscrGwWCcMhy3sk8rJUikh1ejfNnCUci4GeSWCGhKOc5ps6nkFNwhgRpbH1fj%2F8oZS6gLtEqBOPJYf0TVGTHkupUel3YdUwkzB5JR30kxD3dMHPabfFQszqS8v7Q%2F7sNUlMiU%2BNg02e2fi%2FIwW%2FfyCvryGl3MX%2BZ6SDm3HAYOjbcs%2Bg9hYsct7TsPehYeKrtnSmIq7bWX386QjOG28Fkroe5Vo47zrHREl26mcKJcsMU1G%2BNXhACSkXpBTT7IvIEycU73wvG9Uk1HD91iKXIwdTqI8bx%2Fml3fqSi8IW%2B6V4hGUA6fs683pU9w5gvO%2BQZXqXbegEH5Yax2x9PhdHxMnn8E%2B6yWDGLUKQDfJIcfT4ETMTHQQKj6yswpqE5WbQCOqblkTY8leidTerZj8LuDxR6MxvZm2CLb40EXxju5fjwJktD6W9%2FbEiWtJKp8e1AUaRhfp%2BEvE9tAgpkBE8dq5A4wMvgcs0kfxAQMHUcWUZ2NDn2zYDKjn7%2FwapMyg0VOMPPj%2B84GOqUBan6r692lIyFK5JTdzSWq5YWYc0o%2FRQgO2OsQmlPAnP6be6ZqGsQbD70ubdOzzzWTIjsDvocBslwRlBbbURpY7cN4S8C9ySKz%2ByA75T2sP2uVk67hG2sBTeZB%2BdF93TGlxS%2Fs9h2dfUf572KEENJAi6Cs34Uo5epcfJwTr5KJBR6ONPHcS78uy4XzuZNPxMuTFPl8BFwdSqxyAS9UOAJl%2FgKo0AA0&X-Amz-Signature=bf81d68ac5d268c63f638f48da4b563e873b280fb1c5ab15fd5bbc3ecef18332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O52KW7%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl%2FnHrEKhDqmulDMIRngSu6wvYa3uldkq0XWOUQpisXAiEA3FShZfVkPM9P%2F0Kl9lbGaDQolHNNIzGeiEcEuUW6RjkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLthe6LTYa1ZooRuwyrcA4kN3sez1ptroeW7vD7vQi4ptZN%2B4oNGCgP1Dk1m%2BM0Ztv6rl%2BzfS%2BiHeWNTmb2hlh%2BxiGMXpOnfYfXTbnU4xhfkD0O164G0WfjVu3Ko%2BWfX%2BYs%2BBJaGig4iq3xFscrGwWCcMhy3sk8rJUikh1ejfNnCUci4GeSWCGhKOc5ps6nkFNwhgRpbH1fj%2F8oZS6gLtEqBOPJYf0TVGTHkupUel3YdUwkzB5JR30kxD3dMHPabfFQszqS8v7Q%2F7sNUlMiU%2BNg02e2fi%2FIwW%2FfyCvryGl3MX%2BZ6SDm3HAYOjbcs%2Bg9hYsct7TsPehYeKrtnSmIq7bWX386QjOG28Fkroe5Vo47zrHREl26mcKJcsMU1G%2BNXhACSkXpBTT7IvIEycU73wvG9Uk1HD91iKXIwdTqI8bx%2Fml3fqSi8IW%2B6V4hGUA6fs683pU9w5gvO%2BQZXqXbegEH5Yax2x9PhdHxMnn8E%2B6yWDGLUKQDfJIcfT4ETMTHQQKj6yswpqE5WbQCOqblkTY8leidTerZj8LuDxR6MxvZm2CLb40EXxju5fjwJktD6W9%2FbEiWtJKp8e1AUaRhfp%2BEvE9tAgpkBE8dq5A4wMvgcs0kfxAQMHUcWUZ2NDn2zYDKjn7%2FwapMyg0VOMPPj%2B84GOqUBan6r692lIyFK5JTdzSWq5YWYc0o%2FRQgO2OsQmlPAnP6be6ZqGsQbD70ubdOzzzWTIjsDvocBslwRlBbbURpY7cN4S8C9ySKz%2ByA75T2sP2uVk67hG2sBTeZB%2BdF93TGlxS%2Fs9h2dfUf572KEENJAi6Cs34Uo5epcfJwTr5KJBR6ONPHcS78uy4XzuZNPxMuTFPl8BFwdSqxyAS9UOAJl%2FgKo0AA0&X-Amz-Signature=430a745d290ca7a10e038a8afd54cb745ac745a641616117a05f91def076490e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
