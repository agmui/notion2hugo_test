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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLT2SB5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr7gKnY0rKwi0mGZ%2BJOM9uqMpXpmVJFrifnhCh174iiQIgB0%2BvD6xBULmmN0q07wIgvqLoB9RMjPqi0uuqQ72v62AqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmHxfm9x4bsES8B5SrcA0pEkDRA2JlF3ZDnRWSC%2FOvTPdX4gmxtMBq5iwlCLAgqN60uqN68bufcgp1xKGz9iHi5BWDPfvq%2BIsWAQMSv9U1hWh8pxbiKXcO%2Fe7dutg5g%2B2juLseDjEPpTlU8kACwq%2B9EwuSCUnDmIFz6h%2FscYDjCs4%2BJbh43g%2FN3YlVnXWUSdVA6alL9L6bi0ExVOg2vx9Duuz3V2iMCFYgBjgL2UlKe3QIcwa9F3Te2oPaTxu%2FHpl2WTksGaWwm0hbnUNyd5PIVd33ciYVxIb0OjgCGX6%2BvaKztey7AlEXUJ5i9UDmzQO33K2wJuZPN8orcfh8Pbnb8vg3%2FmNkwVAz2J0Vz9TARAZxpZZcfi9Ays8C0JP2z7PmPcEsc6SDGFYvuzFvYIo0dMiqJEwNWXt1o4lgfhpEx0j2El5aq336bwiTnkMXqupSeE9UUQ%2B5jQ8EE4i9cPNZlQ8wYS6SAdWQ4ZxI5a7JL8sGjFftCIaWqZRDy5kmKRbRhe2h5rrlV9xSptBKPTwUKQB2JUkqH4l8x9bNj4Qy9sF8M5ZWIxZXv0HIak%2BwL9crqz1K8NxqgXvQs2HqiF%2FE3Nv6whWXpEe3aJM%2Fiv2dqLpneovDYiYC%2F3ZT7C0%2F646pZAAjZc6N8WbM%2BMJDFu8MGOqUBKiJkZElyEZJc%2FFkRE3p8mi7pD3DZhkIvU0t8rCINgFu8i92hm8n2xgl4hLp%2B88La4lWiLOTXhayVp6MylM8yxobFp9tJvJHPCtv6kIyI1fI26VPJTRSbxmn2f0PG9PiDpUcGhQd1ZJu7MtNzCnxykBqnkdeALjpD7Tor%2FLCIYEmTUgBEYKcknbf8F2D0aMGj3AHfmlbyppBGoO8AVUNoVy23YakH&X-Amz-Signature=a02f75d07eeecc99b300563167978e6c93c69bd9e63acf51aeeadce6abe3e09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLT2SB5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr7gKnY0rKwi0mGZ%2BJOM9uqMpXpmVJFrifnhCh174iiQIgB0%2BvD6xBULmmN0q07wIgvqLoB9RMjPqi0uuqQ72v62AqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmHxfm9x4bsES8B5SrcA0pEkDRA2JlF3ZDnRWSC%2FOvTPdX4gmxtMBq5iwlCLAgqN60uqN68bufcgp1xKGz9iHi5BWDPfvq%2BIsWAQMSv9U1hWh8pxbiKXcO%2Fe7dutg5g%2B2juLseDjEPpTlU8kACwq%2B9EwuSCUnDmIFz6h%2FscYDjCs4%2BJbh43g%2FN3YlVnXWUSdVA6alL9L6bi0ExVOg2vx9Duuz3V2iMCFYgBjgL2UlKe3QIcwa9F3Te2oPaTxu%2FHpl2WTksGaWwm0hbnUNyd5PIVd33ciYVxIb0OjgCGX6%2BvaKztey7AlEXUJ5i9UDmzQO33K2wJuZPN8orcfh8Pbnb8vg3%2FmNkwVAz2J0Vz9TARAZxpZZcfi9Ays8C0JP2z7PmPcEsc6SDGFYvuzFvYIo0dMiqJEwNWXt1o4lgfhpEx0j2El5aq336bwiTnkMXqupSeE9UUQ%2B5jQ8EE4i9cPNZlQ8wYS6SAdWQ4ZxI5a7JL8sGjFftCIaWqZRDy5kmKRbRhe2h5rrlV9xSptBKPTwUKQB2JUkqH4l8x9bNj4Qy9sF8M5ZWIxZXv0HIak%2BwL9crqz1K8NxqgXvQs2HqiF%2FE3Nv6whWXpEe3aJM%2Fiv2dqLpneovDYiYC%2F3ZT7C0%2F646pZAAjZc6N8WbM%2BMJDFu8MGOqUBKiJkZElyEZJc%2FFkRE3p8mi7pD3DZhkIvU0t8rCINgFu8i92hm8n2xgl4hLp%2B88La4lWiLOTXhayVp6MylM8yxobFp9tJvJHPCtv6kIyI1fI26VPJTRSbxmn2f0PG9PiDpUcGhQd1ZJu7MtNzCnxykBqnkdeALjpD7Tor%2FLCIYEmTUgBEYKcknbf8F2D0aMGj3AHfmlbyppBGoO8AVUNoVy23YakH&X-Amz-Signature=79d3366a698bc8e1a740049a1f68e936550885b9ba07d03bf3f479d64f520581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
