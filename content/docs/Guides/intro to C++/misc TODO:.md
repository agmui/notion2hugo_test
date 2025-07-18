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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRI6NYF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCJfVpX7h2k7f50yg1mW4W%2FNd%2FKL7Zun%2FQSIGQtlGKJUAIgawWNq%2B%2F1BKdalXGI%2BbogBMzd2Yir2SP6lVxc6UmN%2F9AqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPObV64Dq6%2BHhu46yrcA3owxEiYc901%2BhQwnqCQcv9RRn1fYuuzJQLwGjFLclP7tG%2BTKeH72m61ehdb1xHHfg2BcMylysNJsVrGKHxnApmRiwBaxkLN%2BmOOluuwYfxUDVB%2BTv%2B%2BHqLzoIdkaKFYBw%2BPZFb58bacniA5ZRKkVApxtjEIZGOQqrliCEcBeiT6Mjnu%2BxzCiF1BbzWq4gT4AHFkIJJ4nY3xL6eEvq%2F8zxqI6Mb7IxpuuZqo%2FfsRcqn7XpXWfwnTHjfjjmnkKHmlRdqX3W6fIeWaxChyp7hXP8zF2vLbYm4simfwS4TBwATxo4KLi4oXuEb2nTZmAseli%2ByNQy1COyPN%2BjVwMPkUP2WOOSKLQfOmMmSEU9N0wNH1Q3z5x%2FY%2BqIa6FhvZ0%2BEAW1q%2BCsvZj3Dsxdol3SoA5ZUkv1DGVvI4WohJ1zBQ26xQSARGdySCoEPSIziMOimT4ZTWqlgy2uFEpwgCC1poezUffPKm%2FyhNpocS08TzmY9u5sdHpHHfPbegs5gzun8ScP5aNcMQJTrXBXKd1s4qT5Dk5CA5FWAcC6GbpfxNtNW256ylxSDX5%2F%2BKxLzZCCS2dPXAHCVjzk2Ap0zIOwcrUHWJ1eqtg64K7L8DO8mKHBorkp1Iw1%2FzK7JWHBm7MK%2BK68MGOqUBhzKS0ckougfGPzaQMzgQr2P%2FiNioBRM4jWE342EB5xATb69wqQw8G4N9VTiZ3pkDzDtSm5TTUHyhgCEQXKigu31lJQrdFBYG%2FBsnjlDwuStw3iSKf5nKc1aehLvYcKPLjcjAWDjQD%2BVFLA04WWsn3whYInT%2Fh3DPgq%2F2JFTwwJ6JsmJNZmHbxLjPCKoFYMQ9ahmXrg58BecCsHGS%2FuS%2FOKHcLqTO&X-Amz-Signature=3250064ae96277374eaccdb5806db6b9d1197fd1b3bcc77b661d8368f663b256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRI6NYF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCJfVpX7h2k7f50yg1mW4W%2FNd%2FKL7Zun%2FQSIGQtlGKJUAIgawWNq%2B%2F1BKdalXGI%2BbogBMzd2Yir2SP6lVxc6UmN%2F9AqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPObV64Dq6%2BHhu46yrcA3owxEiYc901%2BhQwnqCQcv9RRn1fYuuzJQLwGjFLclP7tG%2BTKeH72m61ehdb1xHHfg2BcMylysNJsVrGKHxnApmRiwBaxkLN%2BmOOluuwYfxUDVB%2BTv%2B%2BHqLzoIdkaKFYBw%2BPZFb58bacniA5ZRKkVApxtjEIZGOQqrliCEcBeiT6Mjnu%2BxzCiF1BbzWq4gT4AHFkIJJ4nY3xL6eEvq%2F8zxqI6Mb7IxpuuZqo%2FfsRcqn7XpXWfwnTHjfjjmnkKHmlRdqX3W6fIeWaxChyp7hXP8zF2vLbYm4simfwS4TBwATxo4KLi4oXuEb2nTZmAseli%2ByNQy1COyPN%2BjVwMPkUP2WOOSKLQfOmMmSEU9N0wNH1Q3z5x%2FY%2BqIa6FhvZ0%2BEAW1q%2BCsvZj3Dsxdol3SoA5ZUkv1DGVvI4WohJ1zBQ26xQSARGdySCoEPSIziMOimT4ZTWqlgy2uFEpwgCC1poezUffPKm%2FyhNpocS08TzmY9u5sdHpHHfPbegs5gzun8ScP5aNcMQJTrXBXKd1s4qT5Dk5CA5FWAcC6GbpfxNtNW256ylxSDX5%2F%2BKxLzZCCS2dPXAHCVjzk2Ap0zIOwcrUHWJ1eqtg64K7L8DO8mKHBorkp1Iw1%2FzK7JWHBm7MK%2BK68MGOqUBhzKS0ckougfGPzaQMzgQr2P%2FiNioBRM4jWE342EB5xATb69wqQw8G4N9VTiZ3pkDzDtSm5TTUHyhgCEQXKigu31lJQrdFBYG%2FBsnjlDwuStw3iSKf5nKc1aehLvYcKPLjcjAWDjQD%2BVFLA04WWsn3whYInT%2Fh3DPgq%2F2JFTwwJ6JsmJNZmHbxLjPCKoFYMQ9ahmXrg58BecCsHGS%2FuS%2FOKHcLqTO&X-Amz-Signature=5df37f981796562d460926ab9847f3fd6ee04e61661eb3a2630e7a2d3c78c584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
