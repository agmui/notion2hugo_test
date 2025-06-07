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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUCTEHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYVK4NT%2Bac2Bn6rgi%2Byvgu27s9fGe1K%2BlhpilKrRnSaAiEAs1EGKF7SI4Ex77gYmzzt9Ki1R2mUfNCUZ4oEHHBiGYEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEokmJ%2FViQK4NwbdyircAy634ZAoLLeVX%2FT8DJhs7CgF46%2FGBpp4nDs6Ea%2FGJFYzv3NNzaQ%2BBJ%2BC8ETwdGJ%2FdMWj97ARw2N6SR51FLq0sI3VLmSirqXYiR%2Fsw1lPTPjhYcLCR1teDwO6BQziPGZG4S8QSTzKQ4GbIwTQBkXeXbWvoMjlmcZoVcrNH0bzRk0CqYBqyKbJjSkKtuFy%2B05aWycge4Rk2A83LbyYH1J9JJg20CGHg348rJ6Re1UpiOyfPOm8EsbiOGKRXwCfNw72TzFucWFpMWy0lELoOx%2BhFc8AWq3y%2BwWPHELEfRPsXTsTrOAFp323lpdq0TO5h6sUw32YajN5b7DVRKtE4ayQHcD5KjRlRKQkPN6NaEbaTZqQ7l5mj2Lx%2FWDUycS1fV%2Fx3UB0hBXdUKGIwxIq1IpP9ZhRyLYGgYlfxggGPjTDixq7TPiopzZGPvA%2B7ef4RH74KxIc38vljwDQtxHyXe7Y4jG4TjXsGhZTxXR15nDhJ0h8HGqdIw90H93UcEnbk6Jk9%2BPiwjZqpxTa7gTiJzRc8CTqVH08zJ%2BhPuEPtbf1qpQiLhQ10oxKwUCxKFCQNtS%2FPtgNXzKvGY4iaXgDqCKN8Y1M1Q4unsqcayPz0psJSjBiiOZzTrX2qYwj4VQGMPSVksIGOqUBz0TfAjoxo5XPygZTvWcqU3RC8HdD76LzUY%2BMcn0f7QBb2%2BOpPOVDhsjxN8Hp%2Ba%2Bswf5ENACP3QhZMjmGFghIeD4%2FNRM5JnApWms84eWNJbdJUPBVAGSCNJoaFs58Hs9AJ3zFTJuvNxTTQMch7WlYtIYbAiYDA3hG%2BRWFshzdWjLv59IF54%2BU%2BZmQrIdEf8yLRtuWdBBfrZ%2BG8WGorrYbhw0kcMYj&X-Amz-Signature=00c1a546b438811b99d71dc51470eaf97db62aaf231aaf7d142bc3d29cf8f5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUCTEHW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYVK4NT%2Bac2Bn6rgi%2Byvgu27s9fGe1K%2BlhpilKrRnSaAiEAs1EGKF7SI4Ex77gYmzzt9Ki1R2mUfNCUZ4oEHHBiGYEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEokmJ%2FViQK4NwbdyircAy634ZAoLLeVX%2FT8DJhs7CgF46%2FGBpp4nDs6Ea%2FGJFYzv3NNzaQ%2BBJ%2BC8ETwdGJ%2FdMWj97ARw2N6SR51FLq0sI3VLmSirqXYiR%2Fsw1lPTPjhYcLCR1teDwO6BQziPGZG4S8QSTzKQ4GbIwTQBkXeXbWvoMjlmcZoVcrNH0bzRk0CqYBqyKbJjSkKtuFy%2B05aWycge4Rk2A83LbyYH1J9JJg20CGHg348rJ6Re1UpiOyfPOm8EsbiOGKRXwCfNw72TzFucWFpMWy0lELoOx%2BhFc8AWq3y%2BwWPHELEfRPsXTsTrOAFp323lpdq0TO5h6sUw32YajN5b7DVRKtE4ayQHcD5KjRlRKQkPN6NaEbaTZqQ7l5mj2Lx%2FWDUycS1fV%2Fx3UB0hBXdUKGIwxIq1IpP9ZhRyLYGgYlfxggGPjTDixq7TPiopzZGPvA%2B7ef4RH74KxIc38vljwDQtxHyXe7Y4jG4TjXsGhZTxXR15nDhJ0h8HGqdIw90H93UcEnbk6Jk9%2BPiwjZqpxTa7gTiJzRc8CTqVH08zJ%2BhPuEPtbf1qpQiLhQ10oxKwUCxKFCQNtS%2FPtgNXzKvGY4iaXgDqCKN8Y1M1Q4unsqcayPz0psJSjBiiOZzTrX2qYwj4VQGMPSVksIGOqUBz0TfAjoxo5XPygZTvWcqU3RC8HdD76LzUY%2BMcn0f7QBb2%2BOpPOVDhsjxN8Hp%2Ba%2Bswf5ENACP3QhZMjmGFghIeD4%2FNRM5JnApWms84eWNJbdJUPBVAGSCNJoaFs58Hs9AJ3zFTJuvNxTTQMch7WlYtIYbAiYDA3hG%2BRWFshzdWjLv59IF54%2BU%2BZmQrIdEf8yLRtuWdBBfrZ%2BG8WGorrYbhw0kcMYj&X-Amz-Signature=0c099f60a9374e1100b5c209c9106971e03d42be7a029d3979b68c63d22d18d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
