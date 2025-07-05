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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFUPQCH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGQidrh8yRIZX9ccqGBymrvrX3B%2Bl6fWbGYDkC7h8doIAiEA6fafazJRaqLRDFS%2Bw050GubklL0bEyztMvI05ogHnFUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA9WK8mPnxwGWcFHbircA1vIA3QlJcZC9GCZ2BYTDsHFvUhsfye86nnMgVmCGkrNDs3YqkpGSeu2YqDZ7V7KjfBRruj9Al3jcUt91ndRr8SvVgMciy6FJnRe9o7u9Ltzizxq3Wp1%2BdqOqWb%2FXbxdZcRbjMJP9nuBjvecvIZGgklCkedAa0o1%2B1fMay6GviY94DxqcVOOgY75kPi%2FbsfNmgtt1ZdE9cCaVkwdmNaHvXJJ%2BOJEgyBvljEa27T%2BAYQ2HlEewOmFE9eTe371DcGGG63jcDnJ7vCI89rEreLzVOqWaveeeSftJiMMi4JlxfqLCBbmrrIMbmlz0G1irWM3tbUKTm36dREu0i4hnx29V6AusCERWSFG2QkRcdRQf8dRmn2vWn5Gv7agOC80XFDOpGBo4%2FqTM5Wci1d8s7seCZTqq9HbTM5XHo0vkqF5S5JoJ35mqzo6UbJdFponaImMXGaeaEv%2BlKvoXzJktsZ%2BCoBOPDhJTYg8tdjRkT2jXMJs1Pd7IRrZmpdsuSGt1MRG8SEdZTgD%2BMZyhd03VMMdokLAXvovny7Jm8kS6QXYZ1Bu27QT9lnWJS3wVdjTE3oidkEROiRCOtXU3RKbosQYj%2BDF3h%2B0vylIpvE31uoRIXKrB0f2ALgSPwOu%2FXvQMITooMMGOqUBQjWXrNZgbP9y4Rs0lLzb1l69GVIAr60wGYFADbqK0jIpk1Mw9pozrjliwXmxHVbuZ5O6lHC86%2FzvpNhUlHjDBVacK%2FbeNXSK8VJVy%2FvNwQm1RYgYC4%2FcXt8EkGSqifhXi9ojHo4aAPpSw6VwzygU2FJV69XVrHpuZnJwePWJHYDH1WUw1D6N%2BNzfYdvzIqTaBpwVR8HSYAdL94mm9nBoiFcLgD6q&X-Amz-Signature=fad863b048f5ea95488fe79e49de158c06ef84394d0f2bff1b08323502871578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFUPQCH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGQidrh8yRIZX9ccqGBymrvrX3B%2Bl6fWbGYDkC7h8doIAiEA6fafazJRaqLRDFS%2Bw050GubklL0bEyztMvI05ogHnFUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA9WK8mPnxwGWcFHbircA1vIA3QlJcZC9GCZ2BYTDsHFvUhsfye86nnMgVmCGkrNDs3YqkpGSeu2YqDZ7V7KjfBRruj9Al3jcUt91ndRr8SvVgMciy6FJnRe9o7u9Ltzizxq3Wp1%2BdqOqWb%2FXbxdZcRbjMJP9nuBjvecvIZGgklCkedAa0o1%2B1fMay6GviY94DxqcVOOgY75kPi%2FbsfNmgtt1ZdE9cCaVkwdmNaHvXJJ%2BOJEgyBvljEa27T%2BAYQ2HlEewOmFE9eTe371DcGGG63jcDnJ7vCI89rEreLzVOqWaveeeSftJiMMi4JlxfqLCBbmrrIMbmlz0G1irWM3tbUKTm36dREu0i4hnx29V6AusCERWSFG2QkRcdRQf8dRmn2vWn5Gv7agOC80XFDOpGBo4%2FqTM5Wci1d8s7seCZTqq9HbTM5XHo0vkqF5S5JoJ35mqzo6UbJdFponaImMXGaeaEv%2BlKvoXzJktsZ%2BCoBOPDhJTYg8tdjRkT2jXMJs1Pd7IRrZmpdsuSGt1MRG8SEdZTgD%2BMZyhd03VMMdokLAXvovny7Jm8kS6QXYZ1Bu27QT9lnWJS3wVdjTE3oidkEROiRCOtXU3RKbosQYj%2BDF3h%2B0vylIpvE31uoRIXKrB0f2ALgSPwOu%2FXvQMITooMMGOqUBQjWXrNZgbP9y4Rs0lLzb1l69GVIAr60wGYFADbqK0jIpk1Mw9pozrjliwXmxHVbuZ5O6lHC86%2FzvpNhUlHjDBVacK%2FbeNXSK8VJVy%2FvNwQm1RYgYC4%2FcXt8EkGSqifhXi9ojHo4aAPpSw6VwzygU2FJV69XVrHpuZnJwePWJHYDH1WUw1D6N%2BNzfYdvzIqTaBpwVR8HSYAdL94mm9nBoiFcLgD6q&X-Amz-Signature=169892b14cb110b86949b27d51e0cadd43eb849ac9ccfd63bade88e1eaf6bcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
