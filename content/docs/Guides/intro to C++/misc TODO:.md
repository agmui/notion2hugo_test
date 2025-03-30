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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ANYBWS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFfd0MYJVPbufW94mRh5L%2FQR6MdjkN%2F0s0YUJPLYuxZcAiEApOT7xSEQMaDJxGDc1X7X%2BPx5GBJ4jGJbGkI34wiAepgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQri2hm3e85ERkqoCrcA%2FgrG4zEKonPiYD3oz5FNs%2Fb9WuuPQlvTq1%2BspfktU20CbK6Alr6gNZlq3Pnx7lBVHzSGD%2FTzzMuHynYvHykKK32Q6aSwiaYS95EkCD1n3WTKGlCHXy9eCN53%2BQCTXLm18OjyYQPSoppmz5QenFhTA7fbl%2BNdM6lydpLYqRLjKr6B77kSq6OoEeG08zWFe7Rk4oGk4xGSgi222illRN8S8UM%2Fszbn%2FgMzc23kk2R4LV068aDSw6NI1oK83K0xdJ4Furpgvim2dj20wSPf1%2FoIh5JVmNpX5n8jJze751jXO9b30qB4P6ZmojR0%2FKb9DeFO8dfZ%2BcISpUp6e8%2F4MNDHiGytjHj0ryqSz0f6UU2%2Bxw0%2Fyn9RKgWTyKpwEkfe3pUZghuhRKH3LFSNoSK6rRpUMAIcgdd1lLT3UUen%2Fyen9DdxztPFKwgMqMY%2Bw%2FgudNOHqXLfDs4b%2FGXGnY9VQNfWnFQZZnD%2Bn5Yxdg9pCcyqEhAgIAZBuakrwPm%2BZiaEBzb%2F6okR8v8aelrknX3xG7mWQ2lz3KrId8VDzbgub%2FfNxL6eUZTwxUEyUwu890pJ5ULOYjj7gkYbJUNKcqSplpapnfrA7KP3Jv1Ss%2FNGGSsGli1hYsj3jPLbdqO2twtMO%2BLpb8GOqUBbGj49G%2FpLwTkFkemuVopeX%2FCEQxYrUrWoT7JENz861ZNY3lbvqCTTXdZmzOsGwOLW7FVMIYkvDN1C9W6PjVpYMSOJBoSDGOc19EVghPSH3YblQPaWcHl02pupmpg2etg9Kjp74KRjIPqWCtvPvU%2BjP2zwFhvsXghhY%2BwhYEIbmUA39iGYlOY2Ml5GHSEWtiNxSczd1PEMmsgecZ4zCkEfLFPE8Y6&X-Amz-Signature=8ae0041c342e7fef9de34824164ae52e9a012619add9c73ec9b920600edef754&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ANYBWS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFfd0MYJVPbufW94mRh5L%2FQR6MdjkN%2F0s0YUJPLYuxZcAiEApOT7xSEQMaDJxGDc1X7X%2BPx5GBJ4jGJbGkI34wiAepgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQri2hm3e85ERkqoCrcA%2FgrG4zEKonPiYD3oz5FNs%2Fb9WuuPQlvTq1%2BspfktU20CbK6Alr6gNZlq3Pnx7lBVHzSGD%2FTzzMuHynYvHykKK32Q6aSwiaYS95EkCD1n3WTKGlCHXy9eCN53%2BQCTXLm18OjyYQPSoppmz5QenFhTA7fbl%2BNdM6lydpLYqRLjKr6B77kSq6OoEeG08zWFe7Rk4oGk4xGSgi222illRN8S8UM%2Fszbn%2FgMzc23kk2R4LV068aDSw6NI1oK83K0xdJ4Furpgvim2dj20wSPf1%2FoIh5JVmNpX5n8jJze751jXO9b30qB4P6ZmojR0%2FKb9DeFO8dfZ%2BcISpUp6e8%2F4MNDHiGytjHj0ryqSz0f6UU2%2Bxw0%2Fyn9RKgWTyKpwEkfe3pUZghuhRKH3LFSNoSK6rRpUMAIcgdd1lLT3UUen%2Fyen9DdxztPFKwgMqMY%2Bw%2FgudNOHqXLfDs4b%2FGXGnY9VQNfWnFQZZnD%2Bn5Yxdg9pCcyqEhAgIAZBuakrwPm%2BZiaEBzb%2F6okR8v8aelrknX3xG7mWQ2lz3KrId8VDzbgub%2FfNxL6eUZTwxUEyUwu890pJ5ULOYjj7gkYbJUNKcqSplpapnfrA7KP3Jv1Ss%2FNGGSsGli1hYsj3jPLbdqO2twtMO%2BLpb8GOqUBbGj49G%2FpLwTkFkemuVopeX%2FCEQxYrUrWoT7JENz861ZNY3lbvqCTTXdZmzOsGwOLW7FVMIYkvDN1C9W6PjVpYMSOJBoSDGOc19EVghPSH3YblQPaWcHl02pupmpg2etg9Kjp74KRjIPqWCtvPvU%2BjP2zwFhvsXghhY%2BwhYEIbmUA39iGYlOY2Ml5GHSEWtiNxSczd1PEMmsgecZ4zCkEfLFPE8Y6&X-Amz-Signature=45337542a7b74d00cec5b7a9a9361361d4c905a5fde85fe3ff0533340530a22e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
