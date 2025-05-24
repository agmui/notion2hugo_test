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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGW3CGEN%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDDGy1Re%2BxmIxyuzqvfvv44tcnpZhk%2FGzDEatyKdoeWWQIgPISjdzNgMcQvYhUj9t8WWxCRT6So%2FRuLHAWfyy5gaucq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLmkliTnKuiuA%2B0%2FuCrcA%2FItLxcIFYknBcENFvRFqWh%2F4YlMOiNzc7qUoCEu0OKtqz%2BL8aYJHHmAM0X%2Bfg1fNVaI8OZzAJLCxRmxN%2B2KnEqeiK44qaRB3nTZrqUzfTfli69xpQ6Vc6KI2KmsNLMuUedUbVt8u%2Fkjs6%2Fk9vaKGbhCRR2CQhcmjfQ%2B8%2FUL9s%2FNJqKOmuYUcg8KAthNSABVIGjTyJWjD7UwaZCHegTUKrV95nooRr4fa7w1PcJ5JY1ONFRN2YjinBx2svJGg5kjCU1eeyoIioQN79rz%2FbRKztTWYAZv7K4UMpewJIYFRzyrRJi56GYTdcD6XPXv6HHQfk0je8uwC7691XIlccb5srpeMgozzIk6isaq8id7Ft7YZSGWIU4%2Bb5hI68iiv8l96kwJNWP07U3W04dTooDiIU4JVAIuyBbtPzValnouQvWe2CDZSczdLf6FWfFqvewHDs1zuMWeavdKSeilGyhKNyfHUFUoBsYgodDjMKhYM8UA7yRibSwyCKhB1qL51n%2Bp8u%2Bg3tSpPm0a0uOrmjyjAGMUzJt%2Bunin5%2FAN9KM%2F1lOgxNB9S7PNT6k1cIZJPUc8CMWg5%2FA54nG%2FUnjO054JONCGOD2RdQETLdifeNYZtuCwzIPlX2oa7Oq51XIpMIOBxsEGOqUBh6p%2F3d6dFK9iZru2KdOLb62U1QDjdcOVMA53asCbRfGsactL258AFEPdqyIBIjCm33Zhz9wMrI0AZy1tv3XF2qSU%2F9JP56QR66d5HDr8BfQzwSZzMkJ9dWiyumnss%2FFayKGc6Bhh3M8OCcoeXP8xWGxatEWcMPDR5ApFByQrqA9w%2B2Di6EQhZpyVA4IQ6b4iXdnIhhnW%2BlArrMkvEc%2BuVpy%2BHgnm&X-Amz-Signature=7fbeea61fe3c823b876466eb1be318d8fa9f18b84767afcbdfe23db0179434f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGW3CGEN%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDDGy1Re%2BxmIxyuzqvfvv44tcnpZhk%2FGzDEatyKdoeWWQIgPISjdzNgMcQvYhUj9t8WWxCRT6So%2FRuLHAWfyy5gaucq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLmkliTnKuiuA%2B0%2FuCrcA%2FItLxcIFYknBcENFvRFqWh%2F4YlMOiNzc7qUoCEu0OKtqz%2BL8aYJHHmAM0X%2Bfg1fNVaI8OZzAJLCxRmxN%2B2KnEqeiK44qaRB3nTZrqUzfTfli69xpQ6Vc6KI2KmsNLMuUedUbVt8u%2Fkjs6%2Fk9vaKGbhCRR2CQhcmjfQ%2B8%2FUL9s%2FNJqKOmuYUcg8KAthNSABVIGjTyJWjD7UwaZCHegTUKrV95nooRr4fa7w1PcJ5JY1ONFRN2YjinBx2svJGg5kjCU1eeyoIioQN79rz%2FbRKztTWYAZv7K4UMpewJIYFRzyrRJi56GYTdcD6XPXv6HHQfk0je8uwC7691XIlccb5srpeMgozzIk6isaq8id7Ft7YZSGWIU4%2Bb5hI68iiv8l96kwJNWP07U3W04dTooDiIU4JVAIuyBbtPzValnouQvWe2CDZSczdLf6FWfFqvewHDs1zuMWeavdKSeilGyhKNyfHUFUoBsYgodDjMKhYM8UA7yRibSwyCKhB1qL51n%2Bp8u%2Bg3tSpPm0a0uOrmjyjAGMUzJt%2Bunin5%2FAN9KM%2F1lOgxNB9S7PNT6k1cIZJPUc8CMWg5%2FA54nG%2FUnjO054JONCGOD2RdQETLdifeNYZtuCwzIPlX2oa7Oq51XIpMIOBxsEGOqUBh6p%2F3d6dFK9iZru2KdOLb62U1QDjdcOVMA53asCbRfGsactL258AFEPdqyIBIjCm33Zhz9wMrI0AZy1tv3XF2qSU%2F9JP56QR66d5HDr8BfQzwSZzMkJ9dWiyumnss%2FFayKGc6Bhh3M8OCcoeXP8xWGxatEWcMPDR5ApFByQrqA9w%2B2Di6EQhZpyVA4IQ6b4iXdnIhhnW%2BlArrMkvEc%2BuVpy%2BHgnm&X-Amz-Signature=ffe625a05a365a6a6999450b2e1b55d65c08008b44fbbc26cb0595b31bafb15d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
