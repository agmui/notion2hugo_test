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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZIJY7X%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDZjgxHkHMAhmbxSHJ1JgVzbev9ykmZAycNIbBlkWHWlAIgRxH99XX6FhGczSGyX2p95D7z4eya4G6%2Fc9xTNaaUQhEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLedKKqRPubuM31AEyrcA5MbIOwX4HHLVg%2FwLooaz74f7mO4WkpW3%2B1z%2BGFaqeLVCzfNq3JaI37wDNcpZhTpt01Byg5rqjKUhCwMnC2iBmZ8EGW8HiXvHu%2F2LPOPM9LoZTslGbV%2FMel8YqWtnAYGQNO5W1vMYkQoEv2wx%2BaMc4%2BwHwlNTMCD%2FNJqL2BMEMQrLJF2h8OpprGEHTNih9H1SAzbNG96oM3HF%2BjGMmZnK0ayGunVfxRM%2BjinY9wh9I0meFlk2Isucl7K1wWeUWYmP1ZFcR7SZIRRb5CJ5Xn1wr6NHc3lo%2FKpEnNmb%2FH6Jsw4%2FGe0T1tzoxTeqlNnhp1s3u%2BqSqwuHBnaCDQjniuR16syzdGjvb3zgZ8Dn7rHhk%2Fv%2F1E61sOx%2FfXdKwGfPSyZc3%2F%2B5nBzNZ%2FaGL63%2BN4qRzaAkQ2UnyIMIBK5cWO412TrX%2FSAz47aPfYb2H6HA%2B%2BoACdVMD8Xv4vD0VPfbFdWD2M4N5CaAfcSRQRl4nJvfNBi5Q%2BuCihv2EgTgUI%2F3gidn%2BYldpfqMmGyqCSsshMLpE3unf7luO4xhZpEDIFNQfvyKqcaZunPLHqyXAW720Mrw6uJetFFOGCgBf2nlYuDyZCSBdh9xWS4go3E9UDnfDMixxFLnf%2B4ScDKK7YJMJydvr0GOqUBIgvJVS6dBweJVZuJwlPqj8GvAA8nUZMZhfSqsJDGQxVIG%2Fqyf3uHZ%2BklLgt45ztPtyU7EokA%2FBbjL3CdEJ%2B3ap66LkQH5lEX0u8E%2FooCX07O8177OZgQYKL9gI%2FtMW2BM%2BKtmIysfB8FWKdoPFtQmcas5DAFBF4GGV1DHmwKSlEBsUSGZb177138p8Q3lyAoQWvJznqY2wjDkN6YN%2F%2FsRiL0GcFH&X-Amz-Signature=0449a789f5b9c5d105c0767172591268a9034ecd70fde5fe2bc2f83e0ff448fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZIJY7X%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDZjgxHkHMAhmbxSHJ1JgVzbev9ykmZAycNIbBlkWHWlAIgRxH99XX6FhGczSGyX2p95D7z4eya4G6%2Fc9xTNaaUQhEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLedKKqRPubuM31AEyrcA5MbIOwX4HHLVg%2FwLooaz74f7mO4WkpW3%2B1z%2BGFaqeLVCzfNq3JaI37wDNcpZhTpt01Byg5rqjKUhCwMnC2iBmZ8EGW8HiXvHu%2F2LPOPM9LoZTslGbV%2FMel8YqWtnAYGQNO5W1vMYkQoEv2wx%2BaMc4%2BwHwlNTMCD%2FNJqL2BMEMQrLJF2h8OpprGEHTNih9H1SAzbNG96oM3HF%2BjGMmZnK0ayGunVfxRM%2BjinY9wh9I0meFlk2Isucl7K1wWeUWYmP1ZFcR7SZIRRb5CJ5Xn1wr6NHc3lo%2FKpEnNmb%2FH6Jsw4%2FGe0T1tzoxTeqlNnhp1s3u%2BqSqwuHBnaCDQjniuR16syzdGjvb3zgZ8Dn7rHhk%2Fv%2F1E61sOx%2FfXdKwGfPSyZc3%2F%2B5nBzNZ%2FaGL63%2BN4qRzaAkQ2UnyIMIBK5cWO412TrX%2FSAz47aPfYb2H6HA%2B%2BoACdVMD8Xv4vD0VPfbFdWD2M4N5CaAfcSRQRl4nJvfNBi5Q%2BuCihv2EgTgUI%2F3gidn%2BYldpfqMmGyqCSsshMLpE3unf7luO4xhZpEDIFNQfvyKqcaZunPLHqyXAW720Mrw6uJetFFOGCgBf2nlYuDyZCSBdh9xWS4go3E9UDnfDMixxFLnf%2B4ScDKK7YJMJydvr0GOqUBIgvJVS6dBweJVZuJwlPqj8GvAA8nUZMZhfSqsJDGQxVIG%2Fqyf3uHZ%2BklLgt45ztPtyU7EokA%2FBbjL3CdEJ%2B3ap66LkQH5lEX0u8E%2FooCX07O8177OZgQYKL9gI%2FtMW2BM%2BKtmIysfB8FWKdoPFtQmcas5DAFBF4GGV1DHmwKSlEBsUSGZb177138p8Q3lyAoQWvJznqY2wjDkN6YN%2F%2FsRiL0GcFH&X-Amz-Signature=84ac8553ad84b8a2cea637953aae3feb36d1cf9c08444d0460ff0a8d7070390c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
