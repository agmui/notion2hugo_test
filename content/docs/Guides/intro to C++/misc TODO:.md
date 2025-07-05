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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAH7IOSF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH0Ehd8sk10wxCKZsZM355CxS2a4zl3V1ixMLo4gWXgEAiEA67IDekG8Wuokqqaky6E%2FL5F4tIAXwrpI1v3iwNhBsocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDA6jmzk1h5sYKuqF0SrcAzQBZopZxAz%2BMFYJYAHsCXf0%2F7Yjmwk%2BvQzXrAatFllaZpIcVQ5cyIVrIatUJbo9PgRgThxC9ZGcWkbhy32bW61IWE8Q7dei2W9SfkiZGbquu0KWU4EcioGU%2B1DRKVUksNDYFg5U4w%2F1XIXbYH69yJmh5urTXjP%2F8vzygpClWt0NVhVdv%2BnVQ9GsCOmzQGE1QH67JCSFRy5vcMqmqGO5gUk%2BOKWZ08W4F41nK4kY2bjSThJxXC2JEokcC1uCBBuNfCJRIEiYokyRvwtoEyGimmZy8jT0AmmQjfgHSXARzcx0x5izjM4xWrj3QPhm7Uon6YUqE7fo4H%2BTKp2Px5Xwd5vgCVKSIOBoZeF1snXPusTMJMisxnc%2Fts4EYktntR1a5A2SeHWzCDUJli6zAGYHQh6geq2X%2FMq%2BWUx7jprMXrJe4xK1iN0iF2UFmKWlMssHssoo9RTXoPhCg%2FoxLvuguZ3cg8GsEvDoxWktyS%2FcGyCmrLqZSmz4tEbUSE6Hpv69nXwMQJ2z80Pg%2B4m0OFa5lWn319YV2otbjKSuyt0rb6aWdyVwGPubzoN5widTaH67U50xXAOQjS2cg4DAddTveaIHNUUsS17eynz3y89i1e01R2GTmCy0Hp8C5OhdMIeOosMGOqUB7oOn62DbL9hc0WuGDGBrPENYCtICkD2nDmCAGm4H2w3NU7Sz%2FG%2FLb%2BcujpIr27AVu%2BF8cdeNnQgFKZGBQGfEx%2FeOfy1BiRD3jSPA2NY5%2BpCRKRkb7yzvl0rmu8WJXWwLqCjLGgPdu09vIBBw7mNny5vtXCEz22l2B9aFuiircVgzY1VeJdeQyKquSo8aSilunIYlKn8Syirg0RhCFcAEf%2FdLa0t2&X-Amz-Signature=703c1af5e177600736bc8b9348eb11be20dbcce3d7ee68f3b64fef336b6ad3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAH7IOSF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH0Ehd8sk10wxCKZsZM355CxS2a4zl3V1ixMLo4gWXgEAiEA67IDekG8Wuokqqaky6E%2FL5F4tIAXwrpI1v3iwNhBsocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDA6jmzk1h5sYKuqF0SrcAzQBZopZxAz%2BMFYJYAHsCXf0%2F7Yjmwk%2BvQzXrAatFllaZpIcVQ5cyIVrIatUJbo9PgRgThxC9ZGcWkbhy32bW61IWE8Q7dei2W9SfkiZGbquu0KWU4EcioGU%2B1DRKVUksNDYFg5U4w%2F1XIXbYH69yJmh5urTXjP%2F8vzygpClWt0NVhVdv%2BnVQ9GsCOmzQGE1QH67JCSFRy5vcMqmqGO5gUk%2BOKWZ08W4F41nK4kY2bjSThJxXC2JEokcC1uCBBuNfCJRIEiYokyRvwtoEyGimmZy8jT0AmmQjfgHSXARzcx0x5izjM4xWrj3QPhm7Uon6YUqE7fo4H%2BTKp2Px5Xwd5vgCVKSIOBoZeF1snXPusTMJMisxnc%2Fts4EYktntR1a5A2SeHWzCDUJli6zAGYHQh6geq2X%2FMq%2BWUx7jprMXrJe4xK1iN0iF2UFmKWlMssHssoo9RTXoPhCg%2FoxLvuguZ3cg8GsEvDoxWktyS%2FcGyCmrLqZSmz4tEbUSE6Hpv69nXwMQJ2z80Pg%2B4m0OFa5lWn319YV2otbjKSuyt0rb6aWdyVwGPubzoN5widTaH67U50xXAOQjS2cg4DAddTveaIHNUUsS17eynz3y89i1e01R2GTmCy0Hp8C5OhdMIeOosMGOqUB7oOn62DbL9hc0WuGDGBrPENYCtICkD2nDmCAGm4H2w3NU7Sz%2FG%2FLb%2BcujpIr27AVu%2BF8cdeNnQgFKZGBQGfEx%2FeOfy1BiRD3jSPA2NY5%2BpCRKRkb7yzvl0rmu8WJXWwLqCjLGgPdu09vIBBw7mNny5vtXCEz22l2B9aFuiircVgzY1VeJdeQyKquSo8aSilunIYlKn8Syirg0RhCFcAEf%2FdLa0t2&X-Amz-Signature=31057c1a0167818a6157dea5a816b34378c3a473cdd4e7765b9eca75b359a527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
