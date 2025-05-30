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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNK6IUI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvvlfrr2QlwsZuSCZ2a0tTOqi%2ByXSEk%2FLtifsnBc%2FYdAiBpgAvuuGypNOrjffk%2BpmyAEESR4lSWD4iTH1QIGelqjiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRx8h%2ByzzGK3bE2crKtwDXi%2F7NK1BcdkcZXSq58gSMtXGEntT1QUxAvCEEuWWfXFQIas2vlr7g%2BDJNHGkplmF8WwdJQbS3MWMUQQwiUNcL1qC9T05sAjqg2zFRLAPK4LcZOewJ0hZZMU1%2B8kYEyw8ZPp4fHF61xLTmKdD%2BC%2BJWboP%2BbOrXQCD8dkEdxiSYb%2B0jhklkjxpM3DqqjcqoR4cW5KsyeVHy8OVHsJVfIdUzi4WVDQdRl9Als%2FZNpDnjUEbsE9cFZXoaQPF22ydIfIaySDITu6pbbt2GtsCGL%2Fk1j3qtFPhmO6jMtMpYrzi%2BOQ54hssTvW3kCQzk0IHiphM1ngN5SYP9U088rEy0wfjmLXZ2c4U1XnXvVqs4LB14FNmWSdBcLl3RSfT1gcMZcWStylg8Hzx3PNrHOU0eAK78Xtetnt1N0z1jnveRRRM344Sa6Xr511P3jR2p1vv%2BlaPw84Q8t8nx7Q7NzEjAqFJIOcITZHLV4NytORczPYlIsrzuwXet50aZ4VI3bMoz7Cv%2FJUIC2gQlDFQzc5a2M4zrCCTXSxzUHiFe%2BCO2Js6TZ7CUK9sPvMezBQqv6GOtfU3Hc27IjcYT%2BaI2SGQ2O4pmdomza9MaqfLas1X6e2c7cC8v01yTrCLh9CpgUwwwMvowQY6pgEKGwIoO0ozA6vCSu9YObqvMfvLdlHFZ1GIqrzcMUIpAZloCGojNXzK4%2B2qJDgZk%2FFg3jyHt0WBjSlkVaaGuhIflVSMYdq7AaRwzgoQEyfkKXOOhiE4sMhq3E41kdhcq9pnFJY9A9APEf9WjFvWfHGHhhKQsQI8eHEcYzCDzHbUtXUcEq5DhBd4DrQSg%2Bde0scT3ejEiM9LUN2%2FGq%2Bw9yNIkOknCC3q&X-Amz-Signature=d9e74f4fdb619a0a9628311bc02495fa919df8f173e68396452020a9ff170610&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNK6IUI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvvlfrr2QlwsZuSCZ2a0tTOqi%2ByXSEk%2FLtifsnBc%2FYdAiBpgAvuuGypNOrjffk%2BpmyAEESR4lSWD4iTH1QIGelqjiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRx8h%2ByzzGK3bE2crKtwDXi%2F7NK1BcdkcZXSq58gSMtXGEntT1QUxAvCEEuWWfXFQIas2vlr7g%2BDJNHGkplmF8WwdJQbS3MWMUQQwiUNcL1qC9T05sAjqg2zFRLAPK4LcZOewJ0hZZMU1%2B8kYEyw8ZPp4fHF61xLTmKdD%2BC%2BJWboP%2BbOrXQCD8dkEdxiSYb%2B0jhklkjxpM3DqqjcqoR4cW5KsyeVHy8OVHsJVfIdUzi4WVDQdRl9Als%2FZNpDnjUEbsE9cFZXoaQPF22ydIfIaySDITu6pbbt2GtsCGL%2Fk1j3qtFPhmO6jMtMpYrzi%2BOQ54hssTvW3kCQzk0IHiphM1ngN5SYP9U088rEy0wfjmLXZ2c4U1XnXvVqs4LB14FNmWSdBcLl3RSfT1gcMZcWStylg8Hzx3PNrHOU0eAK78Xtetnt1N0z1jnveRRRM344Sa6Xr511P3jR2p1vv%2BlaPw84Q8t8nx7Q7NzEjAqFJIOcITZHLV4NytORczPYlIsrzuwXet50aZ4VI3bMoz7Cv%2FJUIC2gQlDFQzc5a2M4zrCCTXSxzUHiFe%2BCO2Js6TZ7CUK9sPvMezBQqv6GOtfU3Hc27IjcYT%2BaI2SGQ2O4pmdomza9MaqfLas1X6e2c7cC8v01yTrCLh9CpgUwwwMvowQY6pgEKGwIoO0ozA6vCSu9YObqvMfvLdlHFZ1GIqrzcMUIpAZloCGojNXzK4%2B2qJDgZk%2FFg3jyHt0WBjSlkVaaGuhIflVSMYdq7AaRwzgoQEyfkKXOOhiE4sMhq3E41kdhcq9pnFJY9A9APEf9WjFvWfHGHhhKQsQI8eHEcYzCDzHbUtXUcEq5DhBd4DrQSg%2Bde0scT3ejEiM9LUN2%2FGq%2Bw9yNIkOknCC3q&X-Amz-Signature=c61f5b88c3bb81fb0472cbde5878483532b31bf420a2763522618ef61e3de487&X-Amz-SignedHeaders=host&x-id=GetObject)

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
