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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FN5M6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDghGtBrdEIC%2BbKw88j7p5kiIRaTdASM4yNzxyu%2BATjKgIgFmeuMNk8EPhYNMG5qhU75USaBAcJhxQ8Lwf36YIzfvMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCErrkgrgG8UVjautircA961RqwLwhVa0OAM4e0qS4Hyr9U7H2tga6MOgN1Bhq3PRfcjQnkOh9NzfcYeSTCL4kBuZ45r8Btw2muJbqip4a4%2BJqiihA77LDn9SI9QPG%2Bakd3NOUgJMCwRAtBoBFhbYJj8MeHo0AD36NrbseoICSQLOGF3%2B%2BcHgVXStmfWbONb14mon%2FwtAyBkmgK5Bns68m%2B10N7LCt3nk0ytARTukftsvfZ636y93RUcNnJG%2FGVD5j%2Bnw25a8jxtq%2BnBiTX1blSxp8dwHmHtTW7N0ehsWbBcqhFzzsUDN85WRY%2BDZz%2F%2F9agVQySzzJW5LF7qlzdTYzfzrV%2B6axVH3owvrBqHIQJdkJ955%2B7fTv39C525lloNysBQEEWDl0pkzOrYQMjTcVQ62HchpraQ3iAJ8paV1Am2LY3ir6%2BG3mUZgskZ1obGkGl5iyEYO0J%2F0WCp80PdZFIV0vaPlXu6tKPpZ%2FYbMvYUtmEJIrFiiB4kWDJWUNgkVFE3RLTUTZuitgD9eAf2E0Woe9gCLZ12ho28Vy7N80ltI43mGGGtIyb2UtW2ZcHDtaYgM8eKfH3%2BLXIEUOsrxVmvarwLM1fbzKZxs6W%2F3jJ0%2B5F%2BRW8kD3b%2FjQnv5dd3We%2Bt9ySeHfphhNreMKSv48IGOqUBFHAl1CJ256%2FPRWj7Daflpg7EvN6GPcHrF6sIUUPCBFAzobA24jrecRadFQrWKTCv8XfpUrNJXxyDqxucxv9XDBZrH4TuLgitaBW8bH27FoHp8220sL8oGHvZk1y8URKElxtv6KfZZIRq7%2BE2RdS7I9oABQuBe5jkOBDq7xzF8W9n2K4tBBVDQgJNwL0ZhXtDh%2FaZfOxx9Dl4xIX6Zc4NnhBv5IuV&X-Amz-Signature=6de826c95952f93bc7ea4a1b83e0600568ceb648e9a1c504e6ad07ef4e6c47a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FN5M6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDghGtBrdEIC%2BbKw88j7p5kiIRaTdASM4yNzxyu%2BATjKgIgFmeuMNk8EPhYNMG5qhU75USaBAcJhxQ8Lwf36YIzfvMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCErrkgrgG8UVjautircA961RqwLwhVa0OAM4e0qS4Hyr9U7H2tga6MOgN1Bhq3PRfcjQnkOh9NzfcYeSTCL4kBuZ45r8Btw2muJbqip4a4%2BJqiihA77LDn9SI9QPG%2Bakd3NOUgJMCwRAtBoBFhbYJj8MeHo0AD36NrbseoICSQLOGF3%2B%2BcHgVXStmfWbONb14mon%2FwtAyBkmgK5Bns68m%2B10N7LCt3nk0ytARTukftsvfZ636y93RUcNnJG%2FGVD5j%2Bnw25a8jxtq%2BnBiTX1blSxp8dwHmHtTW7N0ehsWbBcqhFzzsUDN85WRY%2BDZz%2F%2F9agVQySzzJW5LF7qlzdTYzfzrV%2B6axVH3owvrBqHIQJdkJ955%2B7fTv39C525lloNysBQEEWDl0pkzOrYQMjTcVQ62HchpraQ3iAJ8paV1Am2LY3ir6%2BG3mUZgskZ1obGkGl5iyEYO0J%2F0WCp80PdZFIV0vaPlXu6tKPpZ%2FYbMvYUtmEJIrFiiB4kWDJWUNgkVFE3RLTUTZuitgD9eAf2E0Woe9gCLZ12ho28Vy7N80ltI43mGGGtIyb2UtW2ZcHDtaYgM8eKfH3%2BLXIEUOsrxVmvarwLM1fbzKZxs6W%2F3jJ0%2B5F%2BRW8kD3b%2FjQnv5dd3We%2Bt9ySeHfphhNreMKSv48IGOqUBFHAl1CJ256%2FPRWj7Daflpg7EvN6GPcHrF6sIUUPCBFAzobA24jrecRadFQrWKTCv8XfpUrNJXxyDqxucxv9XDBZrH4TuLgitaBW8bH27FoHp8220sL8oGHvZk1y8URKElxtv6KfZZIRq7%2BE2RdS7I9oABQuBe5jkOBDq7xzF8W9n2K4tBBVDQgJNwL0ZhXtDh%2FaZfOxx9Dl4xIX6Zc4NnhBv5IuV&X-Amz-Signature=158e15ae99488ee5fc0008042d756345cb945edcc81e30156abf89f1c4478950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
