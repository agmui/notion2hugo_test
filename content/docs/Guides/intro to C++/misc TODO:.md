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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYHDUWB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDNA8t3zvo%2B4LCQjLO%2B9ZNE5G2Jesl9SI1zXr9F8og%2BEAiBzBw1eEDnxLEZGGPQUXFPGCLT0ZIzakeCwt5nti%2BhnhSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6anAKnlMs1lJYt65KtwDaZw72kmf8Tlcd2vGmN5Na8z%2F0AF1MtP0X7JiF4xgUGaP9vHHaCBGMS7iJZClfkUQ4v8x8%2BUPXk%2FGdWtu7lDpTKimrL31D0Il4K6doPkXKSQJQzUwKJVe4hATzf5m3LqKbeQLGmgEHAMHSt8EhI%2B85S1HWMf95yow9kw%2FVd0mwq4ejC8AWjBVyRLX5I7zrqNZq3iPFuoyhSsraz%2FPDOLKXGz56w%2Bo1o6W2C5autkKyHbyG441gpSiADhtPgm%2BrDqlH2lxsIuuKDHlTVsKVrikOQlydhWMEIUWGrU9RlGdWgBA%2BxiuZe91SSAs1V6uj7yHhmpnFYgYVCxBeA7zxABRs0yax7Coz3lOV0BBKjjnZyXZd%2BAw6xwlEn6SUwWJEW4oE2Yg4y7auFxLB8kBjCtJB0a%2BXl%2Bm0t6EZWDWEhmhlNSHnhiBdwdEfJjlAuXhFaTZ0o0AjYU6tdvha%2Ff6nx0Z6zSIhIkgFPD5OtapODQHfkKXy6U%2FrVmKDFL7l0hZSVIGUQhPr0lRYenTsg%2F71DDeQw2hiaB66Ddeg54pRS7LOHyD7MX4xVlnMamrpYp0ORsUID%2Bmr0CN%2BcR7ywoGKQmtYLkaekUa1sJyPjQqpm5bWWnApSO0QknDufjhl9wwyv6YxAY6pgHM75wO4ZLBd7rFt%2Fj455hJjZegFkxoDCZ9HbX%2BtXjO7IbJXG2PR5PSbS6b36AwcClLaZ3l5HF%2BUBbfnNjdrO3iTCUzWjuTHiLL%2BeH%2Bd4FbSPDffYKp%2Byw8FtcaQlxXDoPH9uP3xWI7I3eB%2F8nbi%2Bzq02ZCnxczREEo6CE2uSFHWQVvtjfVXF2M7VcoMFLCvjlk%2BwaC8C%2BWf0YJzJiR70RYYgLWA6WG&X-Amz-Signature=02751418be7be7c6950abc40c5cee207b43fad8976c41b5f09d59868da4d1638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYHDUWB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDNA8t3zvo%2B4LCQjLO%2B9ZNE5G2Jesl9SI1zXr9F8og%2BEAiBzBw1eEDnxLEZGGPQUXFPGCLT0ZIzakeCwt5nti%2BhnhSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6anAKnlMs1lJYt65KtwDaZw72kmf8Tlcd2vGmN5Na8z%2F0AF1MtP0X7JiF4xgUGaP9vHHaCBGMS7iJZClfkUQ4v8x8%2BUPXk%2FGdWtu7lDpTKimrL31D0Il4K6doPkXKSQJQzUwKJVe4hATzf5m3LqKbeQLGmgEHAMHSt8EhI%2B85S1HWMf95yow9kw%2FVd0mwq4ejC8AWjBVyRLX5I7zrqNZq3iPFuoyhSsraz%2FPDOLKXGz56w%2Bo1o6W2C5autkKyHbyG441gpSiADhtPgm%2BrDqlH2lxsIuuKDHlTVsKVrikOQlydhWMEIUWGrU9RlGdWgBA%2BxiuZe91SSAs1V6uj7yHhmpnFYgYVCxBeA7zxABRs0yax7Coz3lOV0BBKjjnZyXZd%2BAw6xwlEn6SUwWJEW4oE2Yg4y7auFxLB8kBjCtJB0a%2BXl%2Bm0t6EZWDWEhmhlNSHnhiBdwdEfJjlAuXhFaTZ0o0AjYU6tdvha%2Ff6nx0Z6zSIhIkgFPD5OtapODQHfkKXy6U%2FrVmKDFL7l0hZSVIGUQhPr0lRYenTsg%2F71DDeQw2hiaB66Ddeg54pRS7LOHyD7MX4xVlnMamrpYp0ORsUID%2Bmr0CN%2BcR7ywoGKQmtYLkaekUa1sJyPjQqpm5bWWnApSO0QknDufjhl9wwyv6YxAY6pgHM75wO4ZLBd7rFt%2Fj455hJjZegFkxoDCZ9HbX%2BtXjO7IbJXG2PR5PSbS6b36AwcClLaZ3l5HF%2BUBbfnNjdrO3iTCUzWjuTHiLL%2BeH%2Bd4FbSPDffYKp%2Byw8FtcaQlxXDoPH9uP3xWI7I3eB%2F8nbi%2Bzq02ZCnxczREEo6CE2uSFHWQVvtjfVXF2M7VcoMFLCvjlk%2BwaC8C%2BWf0YJzJiR70RYYgLWA6WG&X-Amz-Signature=c89a12987a93d0b04c7af0d02ee9cab208e4e81eb431c702bc70c5bff277f039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
