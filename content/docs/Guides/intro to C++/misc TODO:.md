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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6CRSZO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBMq54P%2Fuxy%2FZQ6XPCzT4CXoLAHzPdEtoZ2UDOHH4SXWAiB2rigQARgKiIlP2id1I%2Fmy1N%2FH510Bq%2B%2FAX1%2Fx%2FfS6nSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7GfMy2%2F9pTPUsdpKtwDjGBy2X9sYp7vGSkZjjrce4Hd1Sd%2B6d8tGRvdB7o9B1bKn%2FEqI2pMqlgDsZFBUkXI%2Bdt47pvgy34zOAT9B85XQBMr0qobzftTrTZiW64GApIU65%2BB1iQHfqVfXBJUpA98pDbQ58qVUEMWAet1xunXz9dUSB6apSSiFC1vo0eDbmEnBBe319j3kU1pW6CqosC8rRW%2BpV1kZ%2B7jx3iSYEGGw6UimfPocxMvfbrpmGPtjGDAYRJambLFuovnBu8n02qgLQ6HZeK9eiYV296KvbGmy46KJNehy1BqujVQ4HQyJWRMFlNZAXe1tQzXJWaVJLUmC3V4OmYjJo61GQLyw4q%2Fx2D64Up4c3W9gmDXRsr4aFaTQdrcBxbc%2B3WZETY9Fga62osNmNJe1LGAW%2BaVY4s8%2BnDhexn8%2BgUd4Ex%2Fqn0KU4rCNX%2B9cWY%2BLyybx8EuJWwyiU6UyufY5wGTg6Lmr59dZ3TrsDsheYxln9yzE%2Bc7q%2BKUv97Hcmpw6wzvSPha0tWbItuBAtjxlP5Wta3dfU%2BR9c9AQyHt%2FWhknKOXjgE522L0qizweVCittf%2BUNviTKgWRTKnBJbwAQgiMgwmukZ%2Fnk4kT5rErq5Cyyu%2FuX0OmUBMB%2FJaYe0Y5H6laKQwvduXwwY6pgE%2FIu0lHa2lfmeOMzjfatLyFmKiHM%2FWNet3klPvx1GRNUk6Hg%2BwykonBYNZAdKpiuklC%2F8PIPYD8sULKMadg4mVc1ju8iTxVJJeygLfZuvqKF8IC%2BKDIObXnFRYw1gYyXttowNeB%2FLd2R64xntuDh1G%2B1yBIuiOVonjJjDVmsGTFdt7VdRLRw0wBfAugbqbKeMzlW1EMiYCM4ImSqW4gtYZSEzpsoCp&X-Amz-Signature=2518c636b11c3b41b625b86e1a933fdcdc3e673fb33834abad6f84b52946b9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q6CRSZO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBMq54P%2Fuxy%2FZQ6XPCzT4CXoLAHzPdEtoZ2UDOHH4SXWAiB2rigQARgKiIlP2id1I%2Fmy1N%2FH510Bq%2B%2FAX1%2Fx%2FfS6nSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7GfMy2%2F9pTPUsdpKtwDjGBy2X9sYp7vGSkZjjrce4Hd1Sd%2B6d8tGRvdB7o9B1bKn%2FEqI2pMqlgDsZFBUkXI%2Bdt47pvgy34zOAT9B85XQBMr0qobzftTrTZiW64GApIU65%2BB1iQHfqVfXBJUpA98pDbQ58qVUEMWAet1xunXz9dUSB6apSSiFC1vo0eDbmEnBBe319j3kU1pW6CqosC8rRW%2BpV1kZ%2B7jx3iSYEGGw6UimfPocxMvfbrpmGPtjGDAYRJambLFuovnBu8n02qgLQ6HZeK9eiYV296KvbGmy46KJNehy1BqujVQ4HQyJWRMFlNZAXe1tQzXJWaVJLUmC3V4OmYjJo61GQLyw4q%2Fx2D64Up4c3W9gmDXRsr4aFaTQdrcBxbc%2B3WZETY9Fga62osNmNJe1LGAW%2BaVY4s8%2BnDhexn8%2BgUd4Ex%2Fqn0KU4rCNX%2B9cWY%2BLyybx8EuJWwyiU6UyufY5wGTg6Lmr59dZ3TrsDsheYxln9yzE%2Bc7q%2BKUv97Hcmpw6wzvSPha0tWbItuBAtjxlP5Wta3dfU%2BR9c9AQyHt%2FWhknKOXjgE522L0qizweVCittf%2BUNviTKgWRTKnBJbwAQgiMgwmukZ%2Fnk4kT5rErq5Cyyu%2FuX0OmUBMB%2FJaYe0Y5H6laKQwvduXwwY6pgE%2FIu0lHa2lfmeOMzjfatLyFmKiHM%2FWNet3klPvx1GRNUk6Hg%2BwykonBYNZAdKpiuklC%2F8PIPYD8sULKMadg4mVc1ju8iTxVJJeygLfZuvqKF8IC%2BKDIObXnFRYw1gYyXttowNeB%2FLd2R64xntuDh1G%2B1yBIuiOVonjJjDVmsGTFdt7VdRLRw0wBfAugbqbKeMzlW1EMiYCM4ImSqW4gtYZSEzpsoCp&X-Amz-Signature=e31f1d3f5dc2608b240473215f089488bf336af9c25ea2cda5563301f9145dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
