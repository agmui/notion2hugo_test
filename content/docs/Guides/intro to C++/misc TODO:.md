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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25ZRSZS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFtYNXulmJ7HOP2cPudT4IpBymnSnBKgoAu6ZlTkuS9xAiEAizH%2FC6stmvZz0RTw78UOgYCDhc8i4CWE75UHawQfzpwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEslobR3jGetdG2%2FyrcA%2FvPXAdfdbKK1yTHKzdA87eSurQDG275PpRqOcr1lpsdARdhSbGWVgK4rEHI8NKOAG3hCaEMCQdDVngTKbqEI2faUlywNCXrWzzEqRz4tjJbJKTM2D7kZ%2FL9QsjqSQg9balJaUsTgDsxctTja30%2BCy4DeyvA7oj%2BMbEelICbpx%2BwXvK1lP8hU2rD%2BqdsLgIRYaqwnUAUOL0%2BaFcn8nP95SWZ4r92N1EIqDM6XxMxVSHtqeERMh8gXINobwv0I6IlVGVqHyWZtTEXC38jPWWE8PD6xaOshIAzRzCdWL9RZ31QHJuORUkK3k1ZUfocxolopWCIsviMy4ebMPKJpBMnnXFRWtOihH7l49G%2Fs8xGUPwNirjM5Yt9QBesnGhXIJQ3%2F5a1QLQVtmKGrJjOEQhrElxncVNArR86iu3Ymzw72PU66Cgckgz4uVgAvcm9rudidqfJAU3XLJwO%2BjF%2F0rliAYrKnkavfXmwa6imBcMAXiQbk7LjRZUlwbFDR7aSwA3lpDDJO0cfhtPiPoutzn23YULPlDWwKkeIFj%2BiDW1DwlYAEYwbzzSuNlyT3AZOxvunckJy1LS%2FJp%2F2cSVVKP09A%2BUGQMBx%2BRk%2Fgd50FD1rp9%2BPYYuK5xuW5xPydV3BMPmEg8IGOqUBUvj4psFg2LsPLY1whis4kVakACwkRDJDWfsd%2BIfGw1yiRCsgmWaj7e6M6Jwjj%2FLyqAR0514bF4mPQ5ZdVV7yUVctnbUwOOrCFV5l0fn0Ln6mWlfsvKA2ZkYAVX7Cad0yx8IfMCeBt2DPHUW%2FR5jB1G8VyQQX%2BHeHkAvYesqV68P9rjKdaD6hl9q89FzLHkq%2BLzzSGJQa2w%2BjTtvvOc8hil7Iw9Ra&X-Amz-Signature=1d3127e8d7509c8d3ffb39b29317b83201e41b296a45fa3dc3558b3fb2c212d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25ZRSZS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFtYNXulmJ7HOP2cPudT4IpBymnSnBKgoAu6ZlTkuS9xAiEAizH%2FC6stmvZz0RTw78UOgYCDhc8i4CWE75UHawQfzpwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGEslobR3jGetdG2%2FyrcA%2FvPXAdfdbKK1yTHKzdA87eSurQDG275PpRqOcr1lpsdARdhSbGWVgK4rEHI8NKOAG3hCaEMCQdDVngTKbqEI2faUlywNCXrWzzEqRz4tjJbJKTM2D7kZ%2FL9QsjqSQg9balJaUsTgDsxctTja30%2BCy4DeyvA7oj%2BMbEelICbpx%2BwXvK1lP8hU2rD%2BqdsLgIRYaqwnUAUOL0%2BaFcn8nP95SWZ4r92N1EIqDM6XxMxVSHtqeERMh8gXINobwv0I6IlVGVqHyWZtTEXC38jPWWE8PD6xaOshIAzRzCdWL9RZ31QHJuORUkK3k1ZUfocxolopWCIsviMy4ebMPKJpBMnnXFRWtOihH7l49G%2Fs8xGUPwNirjM5Yt9QBesnGhXIJQ3%2F5a1QLQVtmKGrJjOEQhrElxncVNArR86iu3Ymzw72PU66Cgckgz4uVgAvcm9rudidqfJAU3XLJwO%2BjF%2F0rliAYrKnkavfXmwa6imBcMAXiQbk7LjRZUlwbFDR7aSwA3lpDDJO0cfhtPiPoutzn23YULPlDWwKkeIFj%2BiDW1DwlYAEYwbzzSuNlyT3AZOxvunckJy1LS%2FJp%2F2cSVVKP09A%2BUGQMBx%2BRk%2Fgd50FD1rp9%2BPYYuK5xuW5xPydV3BMPmEg8IGOqUBUvj4psFg2LsPLY1whis4kVakACwkRDJDWfsd%2BIfGw1yiRCsgmWaj7e6M6Jwjj%2FLyqAR0514bF4mPQ5ZdVV7yUVctnbUwOOrCFV5l0fn0Ln6mWlfsvKA2ZkYAVX7Cad0yx8IfMCeBt2DPHUW%2FR5jB1G8VyQQX%2BHeHkAvYesqV68P9rjKdaD6hl9q89FzLHkq%2BLzzSGJQa2w%2BjTtvvOc8hil7Iw9Ra&X-Amz-Signature=3e8ff6cb2366011e6199e081d27a36d07755b677dcde778390c0387bb1e12505&X-Amz-SignedHeaders=host&x-id=GetObject)

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
