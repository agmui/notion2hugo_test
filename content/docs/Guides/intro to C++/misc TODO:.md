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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDH6XB3R%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYaawH5ffWIiLEzEj0ahr%2FAbkQ7VNRFjGK%2F1IoBB%2Fd%2FAIgX%2BwnMgmY9YOG%2B0lGaFjD99uJvKb4uEhkk7KyQR8iQegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCE87UsDkaX2d%2BcfnSrcA27jQmIQqyuEw%2BYsEvT7EDxH2BqNTnI%2BSZiyX62BMXzR6yJ9cr9adOkFA5Ju4kxbBbAzgNXiF3mf8Rsj2TTGZ56tmZcXx15j5d7bgVmmyGV%2FIRp%2FlvTclI%2B59e%2Fyp%2BSE0oI1%2FLKqLK%2FKE5S3GBKrDQbb2ca3Fo4M3AeKzZTSoqPPAq9BL4lKmYXfuZcaOT8FJAephECe0bu1yNlivZY56GX%2Fa6rK%2BvmN0ySp3a%2Bth50ECoqy9pFzzf9uXNHeAa3cK%2FMT2pR5dCBmmPIbz8q8O326%2BNsBp%2FGu3vVyoJmyYl0akoOLPmQDW6LwuqDhRqnfqmyJ6Bp2GlL9LJkQNekhz2wpOviLHfsYb65RCFclJogwKeK0G45m6IdBM9H4TLvvNTsLOIvT6ELNfsrZh2YVYcSbyJAtuSun4pK1mGfoyMu9dGDBwMoYL7KUIYOqq3a3Nt1dC8GjbYvarq8O1U7QLtldAEnwF3lqkHSSQNQakHVinzREhtLogu6%2FA3Zk%2FLGRoC5i5FLpvjWC4%2FcP1%2BDliIRUARw8qVbSlc%2FcylYZWiy38rmMqlfD4G5nfdtXOHD5%2FeKG5jWVblWPL1zu5y2jBxoG3LrvoMDdyDGup5kIJyzwnrxp%2BojB64op9%2FdbMM2AusQGOqUBuisU8m7jQBL8oJGNH8FYR2kEI922%2FQ7FUqNuCXNdlxp5uUYwCiMpB2XHSzi7oaWJYkO53Ck7zX57XOaDZ7Uy4mUvqbQZpyJ%2FYCpnWmzHNqLKSnsvkPEicd81%2B%2BmjHq0jJZBDDgiMWObhyNww8DgjdGI0Bi6S0k6A%2BcheKYRX3gXhPdh7Hcs%2FMtmZiNxt0Gfe0HxpHvUhHFWc0ZwMqF%2BezgjdwPPT&X-Amz-Signature=b4d7e35debaa65272d71b9ec576047fde5e9aa5feb87c30fe64af4be7c2fd83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDH6XB3R%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYaawH5ffWIiLEzEj0ahr%2FAbkQ7VNRFjGK%2F1IoBB%2Fd%2FAIgX%2BwnMgmY9YOG%2B0lGaFjD99uJvKb4uEhkk7KyQR8iQegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCE87UsDkaX2d%2BcfnSrcA27jQmIQqyuEw%2BYsEvT7EDxH2BqNTnI%2BSZiyX62BMXzR6yJ9cr9adOkFA5Ju4kxbBbAzgNXiF3mf8Rsj2TTGZ56tmZcXx15j5d7bgVmmyGV%2FIRp%2FlvTclI%2B59e%2Fyp%2BSE0oI1%2FLKqLK%2FKE5S3GBKrDQbb2ca3Fo4M3AeKzZTSoqPPAq9BL4lKmYXfuZcaOT8FJAephECe0bu1yNlivZY56GX%2Fa6rK%2BvmN0ySp3a%2Bth50ECoqy9pFzzf9uXNHeAa3cK%2FMT2pR5dCBmmPIbz8q8O326%2BNsBp%2FGu3vVyoJmyYl0akoOLPmQDW6LwuqDhRqnfqmyJ6Bp2GlL9LJkQNekhz2wpOviLHfsYb65RCFclJogwKeK0G45m6IdBM9H4TLvvNTsLOIvT6ELNfsrZh2YVYcSbyJAtuSun4pK1mGfoyMu9dGDBwMoYL7KUIYOqq3a3Nt1dC8GjbYvarq8O1U7QLtldAEnwF3lqkHSSQNQakHVinzREhtLogu6%2FA3Zk%2FLGRoC5i5FLpvjWC4%2FcP1%2BDliIRUARw8qVbSlc%2FcylYZWiy38rmMqlfD4G5nfdtXOHD5%2FeKG5jWVblWPL1zu5y2jBxoG3LrvoMDdyDGup5kIJyzwnrxp%2BojB64op9%2FdbMM2AusQGOqUBuisU8m7jQBL8oJGNH8FYR2kEI922%2FQ7FUqNuCXNdlxp5uUYwCiMpB2XHSzi7oaWJYkO53Ck7zX57XOaDZ7Uy4mUvqbQZpyJ%2FYCpnWmzHNqLKSnsvkPEicd81%2B%2BmjHq0jJZBDDgiMWObhyNww8DgjdGI0Bi6S0k6A%2BcheKYRX3gXhPdh7Hcs%2FMtmZiNxt0Gfe0HxpHvUhHFWc0ZwMqF%2BezgjdwPPT&X-Amz-Signature=e1d4c36cd84271ce8fdf273239fe4e364be608c49215baca8ef606a5bf5e5df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
