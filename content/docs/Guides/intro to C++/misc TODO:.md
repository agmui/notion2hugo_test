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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQV5EYS6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrqRrRajak8I0GtDu3BS8pZL4E1J%2BJQcs0nnt5cpUvfAiEAtM3lioZKdNTAkpO4l0%2BW%2BCwO58mc5ITVh6ZdASl00IQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnH6Ww%2Fai3IUYhNWyrcA5LZ3u36IsCSnTbGLfw67z%2Fv76PLGxpE9Ic4AfYCSWxwLwvqEGCbSmxZGlAHmtF84dudRzh3x9UWCnWUYqolbX14XdygNzvmAW%2BsOgV%2B7V%2FUqFsyw9qkcu0WCEGgad6pjWDVn%2FTYVJgJLzgwvW6YfmVibqWIHiAvDeqaSEp2S5A%2FIAXqMZjvulUhVAUHIlzuSx2y7SIwY38qnzMNXpdgRdTspygJo3yMasEw5DrutmavUkIC2Zj6LcLaY8lr3urLa7QR%2FmP1pkXSU04POunOQ8itid3%2BX8p1hokCUMBo2StLf2dFcY8z%2BayVrZWwUQqN4%2BED7FjZnFSUjKDLz2M7FA3ToDLYE8klSHneYLxfPRt2sHM2HmLIw1b%2BO%2F6r61O%2Bp4EBqiN58ELX46ggMkU11uvKY7TwoMgEFfht49uAX5Fh3TI25nLs1JBCG6XDd%2Fpm%2FvRvfK%2BYyV%2BbYR2rjNa%2FGqNQaRwGfrvOaqZflCyzXo2Ej0grCR%2FWNFbxSoZiIJHXwWu%2FEshLInzTSvCk8LyEXNhxRQHMbMr%2B21sezjoympgj7EY7FeQHUNo%2B7YsX%2BYXwKsxwnDqyoWgZGTSt4q6UAe5yp58wINmQTxXrK%2Bc8sH7gQqyS6MW%2FdEf2a8qCMNHGyMIGOqUB52UDu4%2FUfEAk8v8Rj%2BmwnlM0YI08vt05c9QEYV0i5aI%2Fbg8F4xq1RNisqB6hkf3%2Bh%2Ff6uozV1MJj%2FMQOs9MXpYVHX%2BH4zwr2q%2FcLSWKifFNCArLroJEU%2Bx2CfpfVQGfb9O1fuWj3B9jA8lfMboWCm%2FIzVPzmzsHtjr0ya7c7ZX%2BNjbWL%2BskyPb8aqO1r2opP%2BjDNDaywH9CEvOGKDOyhbiksz%2FOJ&X-Amz-Signature=9044b8af950358f36a016eb9c5e75c92ed5a1fd62256faccfde656e2409339e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQV5EYS6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrqRrRajak8I0GtDu3BS8pZL4E1J%2BJQcs0nnt5cpUvfAiEAtM3lioZKdNTAkpO4l0%2BW%2BCwO58mc5ITVh6ZdASl00IQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnH6Ww%2Fai3IUYhNWyrcA5LZ3u36IsCSnTbGLfw67z%2Fv76PLGxpE9Ic4AfYCSWxwLwvqEGCbSmxZGlAHmtF84dudRzh3x9UWCnWUYqolbX14XdygNzvmAW%2BsOgV%2B7V%2FUqFsyw9qkcu0WCEGgad6pjWDVn%2FTYVJgJLzgwvW6YfmVibqWIHiAvDeqaSEp2S5A%2FIAXqMZjvulUhVAUHIlzuSx2y7SIwY38qnzMNXpdgRdTspygJo3yMasEw5DrutmavUkIC2Zj6LcLaY8lr3urLa7QR%2FmP1pkXSU04POunOQ8itid3%2BX8p1hokCUMBo2StLf2dFcY8z%2BayVrZWwUQqN4%2BED7FjZnFSUjKDLz2M7FA3ToDLYE8klSHneYLxfPRt2sHM2HmLIw1b%2BO%2F6r61O%2Bp4EBqiN58ELX46ggMkU11uvKY7TwoMgEFfht49uAX5Fh3TI25nLs1JBCG6XDd%2Fpm%2FvRvfK%2BYyV%2BbYR2rjNa%2FGqNQaRwGfrvOaqZflCyzXo2Ej0grCR%2FWNFbxSoZiIJHXwWu%2FEshLInzTSvCk8LyEXNhxRQHMbMr%2B21sezjoympgj7EY7FeQHUNo%2B7YsX%2BYXwKsxwnDqyoWgZGTSt4q6UAe5yp58wINmQTxXrK%2Bc8sH7gQqyS6MW%2FdEf2a8qCMNHGyMIGOqUB52UDu4%2FUfEAk8v8Rj%2BmwnlM0YI08vt05c9QEYV0i5aI%2Fbg8F4xq1RNisqB6hkf3%2Bh%2Ff6uozV1MJj%2FMQOs9MXpYVHX%2BH4zwr2q%2FcLSWKifFNCArLroJEU%2Bx2CfpfVQGfb9O1fuWj3B9jA8lfMboWCm%2FIzVPzmzsHtjr0ya7c7ZX%2BNjbWL%2BskyPb8aqO1r2opP%2BjDNDaywH9CEvOGKDOyhbiksz%2FOJ&X-Amz-Signature=b993a4cb9f2e110bc560f00cb8dff6f5f88e65ff2d98dae76746f61f196e2985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
