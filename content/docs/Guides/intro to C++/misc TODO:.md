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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKSF2FD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPq2gg3S6CLwBq4mr7mTRo1c8V0HJUR9%2Fm6sO2IXR2AwIhAJCTTO3XmDoypHTzugN%2Fxr4iurs4KHmZ%2BbnOjJCqzIMpKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj1bulCpq%2BC7MKXcEq3AMz%2Fb%2BQGO5jmVoOaooRkAWIWwf%2FNDnzmxurh%2FKmgpcEdUnrI%2BLk6IIwUQpoEZPjvaIgQpDBTU%2BMG4qJH8OuHMRozaJpEKMOIo6OPnreaKJY294P87OBVA%2ByzJQ4BBwgAKQLf%2FbuJ6oG3VEUYsuFW6jPjOE6zNXuaeZsw7qsEgpY6vEb5CKzPanYKn%2BxvbOSOAbJYgyOsvtWVJwpG%2BrfQQhfnMGh7Tw4lrjUSUvHUGjbwM8xH87GMObEsSR%2BCxlFh0%2BJkTCjQYZuMDfYTZuuHKNf%2BptyuFEPlQypMQuYqMgRshTLyKM6YarJjPbdF4D7fjIZACu%2FCkEb9X4m0nAMw5jfZT%2Fc9TeYAjSQSRmuiarSgEZ9f5SCb3r18Uyu5t0XFdUkjzpxYRpH5IcORpWTsbHdKDnfNeoyHZukzDn4UZ5q%2BLo9wrsQ%2F4CHSQmq4R8MQFfbnl1zeIB6F6YPHlFX71MFlKGjTIFMubWLqNCRyk56ETtJjogzwGiVIik7wwg77ZF3MmKGNVe0yYOpHZX1XXruIkga0MolV5hTGhP3VaXrXbwGjWhlVz%2Bb9ZI5JBemNsZFS0bbCJU4feDGMvxi0kkzH0UuqNtC0Rn433lU2VIgASbOseADCX9Wxls2fTCKxfC%2BBjqkAVnCNNNqhxAFKV4Cy21yTtCiESqUHZMcgZp%2F6Sx%2BBwpSYRWMQVGUuJ3g07cPvMlptknhYOlE2oQ9VUqXnJwIb3W3s014wgu2f59VDN%2BiY9kKpoX6XdaW%2FPt0kplVgyxuAh%2BD%2FWlbzLKHAeuJLkruB8yEAyPu%2FG1MgaxofhU3Yr7412UY%2Fx0DpfKVSo48n7%2FYS3gWPLeaEXqvYOBpKRLX9scJaa2B&X-Amz-Signature=d3c8cb0d1c809c25b20bafdae1a6e89c2a3d79f756db831001708881e6179993&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKSF2FD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPq2gg3S6CLwBq4mr7mTRo1c8V0HJUR9%2Fm6sO2IXR2AwIhAJCTTO3XmDoypHTzugN%2Fxr4iurs4KHmZ%2BbnOjJCqzIMpKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj1bulCpq%2BC7MKXcEq3AMz%2Fb%2BQGO5jmVoOaooRkAWIWwf%2FNDnzmxurh%2FKmgpcEdUnrI%2BLk6IIwUQpoEZPjvaIgQpDBTU%2BMG4qJH8OuHMRozaJpEKMOIo6OPnreaKJY294P87OBVA%2ByzJQ4BBwgAKQLf%2FbuJ6oG3VEUYsuFW6jPjOE6zNXuaeZsw7qsEgpY6vEb5CKzPanYKn%2BxvbOSOAbJYgyOsvtWVJwpG%2BrfQQhfnMGh7Tw4lrjUSUvHUGjbwM8xH87GMObEsSR%2BCxlFh0%2BJkTCjQYZuMDfYTZuuHKNf%2BptyuFEPlQypMQuYqMgRshTLyKM6YarJjPbdF4D7fjIZACu%2FCkEb9X4m0nAMw5jfZT%2Fc9TeYAjSQSRmuiarSgEZ9f5SCb3r18Uyu5t0XFdUkjzpxYRpH5IcORpWTsbHdKDnfNeoyHZukzDn4UZ5q%2BLo9wrsQ%2F4CHSQmq4R8MQFfbnl1zeIB6F6YPHlFX71MFlKGjTIFMubWLqNCRyk56ETtJjogzwGiVIik7wwg77ZF3MmKGNVe0yYOpHZX1XXruIkga0MolV5hTGhP3VaXrXbwGjWhlVz%2Bb9ZI5JBemNsZFS0bbCJU4feDGMvxi0kkzH0UuqNtC0Rn433lU2VIgASbOseADCX9Wxls2fTCKxfC%2BBjqkAVnCNNNqhxAFKV4Cy21yTtCiESqUHZMcgZp%2F6Sx%2BBwpSYRWMQVGUuJ3g07cPvMlptknhYOlE2oQ9VUqXnJwIb3W3s014wgu2f59VDN%2BiY9kKpoX6XdaW%2FPt0kplVgyxuAh%2BD%2FWlbzLKHAeuJLkruB8yEAyPu%2FG1MgaxofhU3Yr7412UY%2Fx0DpfKVSo48n7%2FYS3gWPLeaEXqvYOBpKRLX9scJaa2B&X-Amz-Signature=70b862ce6e39358209aa917aa92b5301b8bd718899b29394d48dafab25e8426b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
