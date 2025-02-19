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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USQ77JC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG824ECK75tTHeDofwQVB6KfLkqn5JWXYTP%2B%2F8Qu%2BV4xAiEAhbAkbYcRjnN2DRuATMpA1MWB4alLqMuvh9sBAzV8bQsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXEHR9Ro3V2NWIHNSrcA8tr3nhLJEjfvC4B7nb96hzXxW6%2BL9gLBnqKOtAOgRL3niDML36H8j%2F5MSF6745qmxQzTUYhkc4622ehzK4nyzk527H%2B3ETKPbUMojzn6aIrV9V2WsRpCRbjeY8GbU021822moJoClKqIKfk%2BiEa%2BReY5g%2FM42o1Di8D6xi6JZmUBHkdx%2BRyZx5zA%2FEnzevZ3u172u4qQ6%2Bb0wqv6J%2F74j3pNgwve6%2B4vcggSL4YM54xtR6XbGbOAIi0CSQxQyqLksRfjkqq1CVfkLFSIwHa%2F0DR%2FCO14aYgHKuoGAKzbsLsN1puw5CC%2B7IMyckYv4hT0XLJgHPhAuMTTKpCCNNqKIQZlD5UbjjJ0Grgv7dkv4FcG0ViLhFbvcbczqNzT5w1wA%2BKKRKgJHqddmwnRYxwRSzpB5%2FW4zKC9o4e0Y04FOvlisKKoFBpvBlCr7kTCP7dvJNBshzpB7rmknJhFbkpsXsTvZNtFy0UKB8UrdYMgo2pZWdceVBX3bJaLBXROOw3VlpjLVv%2FYHrd89IsHpWPPNE3igQDW3m2e39%2BuQB2lw%2FnUY%2F0Qs%2FYj%2BIvNtNR8icLVw2zKsMHnwIeh1U1%2BiAMVpas%2BfNrH76q9otZj%2B2kugL%2FL5d%2BnC2Y8CowikR4MOSi1b0GOqUBUoiMbOjybGzK3m2CB6mdt2ZTeReuguRTfyYYwQCs8h37uj4qFM9LOyw%2BwfbhByarwCteFrJlVeN3DuIsNWvxPxeKr4brZSa9X7G7yulqIn2eTP7IhJxKLLMqSMH9cHz1WdaKbELw7%2BAsiWKsFZqpjkFLKTPrpU6Qw5EcAJNY7v7Bu05xTFk6SFR1N5SlLpinpg1Y5GxA6QyDR2sz0HFrClll1Apf&X-Amz-Signature=091cb230df19e2a14909d15ce9f17d03736ce2aa0c7c3e0c4b8729907862d121&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USQ77JC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG824ECK75tTHeDofwQVB6KfLkqn5JWXYTP%2B%2F8Qu%2BV4xAiEAhbAkbYcRjnN2DRuATMpA1MWB4alLqMuvh9sBAzV8bQsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXEHR9Ro3V2NWIHNSrcA8tr3nhLJEjfvC4B7nb96hzXxW6%2BL9gLBnqKOtAOgRL3niDML36H8j%2F5MSF6745qmxQzTUYhkc4622ehzK4nyzk527H%2B3ETKPbUMojzn6aIrV9V2WsRpCRbjeY8GbU021822moJoClKqIKfk%2BiEa%2BReY5g%2FM42o1Di8D6xi6JZmUBHkdx%2BRyZx5zA%2FEnzevZ3u172u4qQ6%2Bb0wqv6J%2F74j3pNgwve6%2B4vcggSL4YM54xtR6XbGbOAIi0CSQxQyqLksRfjkqq1CVfkLFSIwHa%2F0DR%2FCO14aYgHKuoGAKzbsLsN1puw5CC%2B7IMyckYv4hT0XLJgHPhAuMTTKpCCNNqKIQZlD5UbjjJ0Grgv7dkv4FcG0ViLhFbvcbczqNzT5w1wA%2BKKRKgJHqddmwnRYxwRSzpB5%2FW4zKC9o4e0Y04FOvlisKKoFBpvBlCr7kTCP7dvJNBshzpB7rmknJhFbkpsXsTvZNtFy0UKB8UrdYMgo2pZWdceVBX3bJaLBXROOw3VlpjLVv%2FYHrd89IsHpWPPNE3igQDW3m2e39%2BuQB2lw%2FnUY%2F0Qs%2FYj%2BIvNtNR8icLVw2zKsMHnwIeh1U1%2BiAMVpas%2BfNrH76q9otZj%2B2kugL%2FL5d%2BnC2Y8CowikR4MOSi1b0GOqUBUoiMbOjybGzK3m2CB6mdt2ZTeReuguRTfyYYwQCs8h37uj4qFM9LOyw%2BwfbhByarwCteFrJlVeN3DuIsNWvxPxeKr4brZSa9X7G7yulqIn2eTP7IhJxKLLMqSMH9cHz1WdaKbELw7%2BAsiWKsFZqpjkFLKTPrpU6Qw5EcAJNY7v7Bu05xTFk6SFR1N5SlLpinpg1Y5GxA6QyDR2sz0HFrClll1Apf&X-Amz-Signature=320700b7a5797adfc85a68beec1a42c9d425def2641255255523606eb4d7b771&X-Amz-SignedHeaders=host&x-id=GetObject)

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
