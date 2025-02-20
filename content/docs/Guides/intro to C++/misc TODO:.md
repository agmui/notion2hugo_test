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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VMV7QZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXK7RW1BIyOrxAupcTi6wOYZFvCm9HD1U8zZjxzvLPiAiBvsHJvYBlXIqnSyytZCeTdI65af3hcsXxGzwh6W17oOSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMin8Xl02QgIjwa8BKtwDkcQkh0gxoGNs%2FWVEmvLD9NHUBwXHGeC47xNaTjXkR4ZtxgQAvXsJ4vuolCTMJUY4gCSnvVTlYA0QNo3KCmXyzaywu%2FLiNW%2Bf%2BMICaSU0hMlNAaFueEqy0zzyN64BKFY3W0%2BrFWUmEqU%2FMfDc%2F1tAEb9D2S3U5bV6zF3FIcI8e5gYnhcqXETs0UN%2BH8YN1zXRdSwyHxR8e%2F%2F1A2gcUV2q8HLOVO45g9VDaUA5DtdksWyzKISjK847pyUot6kXEdksJJItAZMZ79UmzaBBN7lthxiqvq4CDIC3yPWnF%2FvnYsPis3Oho%2B56CcSfSR7DpCjUP7l8APDrBTEdNf6ZhNWrN7qLtNdCErlK1lXGzON%2BoYqUU7dOwHXDIWyfEPhfpq%2BCPdYwOmjfefoTiXKmkBN2u8q84mj2lM%2BDV2E01VUXCkKnMqPKFD%2BoSmEhIeboWm13OK4x1U0t6VDZBhtX6VNnKuCN5YzWMFETW05w2uH013ma6WeN%2FPzrmqBdvIYBxywuh07PyzGUbtWIpnQeABtH5SxshmRe99vPpmszfxW9JNj05h07zAXVaivyW7DOMwjqkYGt77ZXn4WO2aM9hVIgr2TyPZNCx9yjSPYF4LJp3hehy2qWhTwTSrh80Rgw69HdvQY6pgGG%2Be922Uw66Q2x2gyOQe6I2LGCdxp9%2Bk2T7gjjbQqsY8G6aLBnOzKj9XrJPYNDIfRqn71oduoxZFLoZiLIBkyUZX2bxXpFJ9NsNa9rTAnkwAIAi50Q035uK0KVWh7KkKuKzOAJn1e50y1gW%2FRx%2BdAw6jTyRl8K5Ku5e03oKXRHCsedmcOk4O91erY7LS4kJmf%2B%2B6yzO%2BGSG9qtebBBHfLASqKvwf21&X-Amz-Signature=8775a1d38e1e426ca997520109e5431b9ef3a28fb332a5daf92b6a9e46eb91ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VMV7QZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXK7RW1BIyOrxAupcTi6wOYZFvCm9HD1U8zZjxzvLPiAiBvsHJvYBlXIqnSyytZCeTdI65af3hcsXxGzwh6W17oOSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMin8Xl02QgIjwa8BKtwDkcQkh0gxoGNs%2FWVEmvLD9NHUBwXHGeC47xNaTjXkR4ZtxgQAvXsJ4vuolCTMJUY4gCSnvVTlYA0QNo3KCmXyzaywu%2FLiNW%2Bf%2BMICaSU0hMlNAaFueEqy0zzyN64BKFY3W0%2BrFWUmEqU%2FMfDc%2F1tAEb9D2S3U5bV6zF3FIcI8e5gYnhcqXETs0UN%2BH8YN1zXRdSwyHxR8e%2F%2F1A2gcUV2q8HLOVO45g9VDaUA5DtdksWyzKISjK847pyUot6kXEdksJJItAZMZ79UmzaBBN7lthxiqvq4CDIC3yPWnF%2FvnYsPis3Oho%2B56CcSfSR7DpCjUP7l8APDrBTEdNf6ZhNWrN7qLtNdCErlK1lXGzON%2BoYqUU7dOwHXDIWyfEPhfpq%2BCPdYwOmjfefoTiXKmkBN2u8q84mj2lM%2BDV2E01VUXCkKnMqPKFD%2BoSmEhIeboWm13OK4x1U0t6VDZBhtX6VNnKuCN5YzWMFETW05w2uH013ma6WeN%2FPzrmqBdvIYBxywuh07PyzGUbtWIpnQeABtH5SxshmRe99vPpmszfxW9JNj05h07zAXVaivyW7DOMwjqkYGt77ZXn4WO2aM9hVIgr2TyPZNCx9yjSPYF4LJp3hehy2qWhTwTSrh80Rgw69HdvQY6pgGG%2Be922Uw66Q2x2gyOQe6I2LGCdxp9%2Bk2T7gjjbQqsY8G6aLBnOzKj9XrJPYNDIfRqn71oduoxZFLoZiLIBkyUZX2bxXpFJ9NsNa9rTAnkwAIAi50Q035uK0KVWh7KkKuKzOAJn1e50y1gW%2FRx%2BdAw6jTyRl8K5Ku5e03oKXRHCsedmcOk4O91erY7LS4kJmf%2B%2B6yzO%2BGSG9qtebBBHfLASqKvwf21&X-Amz-Signature=be6251c3dff8527d635182823b3c80d110fba9d7e6de06ee378de388db88630d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
