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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWXQNAR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8QGvSujWI1xDM9yomQ81TJbrZeCpeX7eYEvttD0x5jAIgSd8DIR830cYwpzTNHoEgBbrnMKTmBaBEGHnxrDUY81MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8sF7IJrdamT3eErSrcA2MOS93F5gjsWH5Bikwtq17aFc3XK7PKf6U%2FACZAZQ2vC5g8NtyIxXoztoUyznQfK2akyyIc%2FFrhl0YHBRbiSqDDNpL6SZzp9l7ZQgge7dKwNzoP%2FT%2BvZHq5YRxtxV7psYiKTSzZJ%2BZYG651mmOfx3MOkjuMccCUPCSuuJD4lLNxKVrThcU23OziSUn8NQBw3YokFDAHCuBJazi6IDJDuxTtSqWyULZm7TxIPZy0Z2B4Zs%2FEWZMy1fczT8V7hpcJfITYOwbf4SPELLs4BTehjjweYUaL1%2BlDu2T0U5qyDRZ6sh0QRbqzhaYhRG4YsJ7usWWq%2BKdb4PFvcwJKHPfmP0UeGOWgvZ3vH%2F8EtE%2BzEDqTCBQhJo5i7soyRKlaQnERQX4qTAJYYD9d6WKEhVu7Z2V9IsBbu8xmcA9%2BRPuhWrKx6WxjguAezGwtMWbEH0g%2FaUHxWcXD1BiN79%2FcEUHNlP0WVeqD4qGENMqWEXE%2Bj5DsjKkSVIX1w5EJdotJXNA90%2BTW%2Bg5bpLJsYuQP69L63xeNlpCRpsLLTiwQj302%2BdTfS9yJ%2FNg%2BEWLLKwz6bkrcDriyyv8LFUZdz7xAjAX6avlisvQRM2rnV5SwjaN9zGY7iM5aJH9Jwotd5AsxMKz5v8MGOqUBtERzeJ1G%2B%2F7a%2FYRK%2Ba00P2dROGJD8NukGYJq8UUgWL7KlcwZlWawDi70B62%2BDCmSVoLkew85DdMqoH8MiFScTDEGp82Orc%2BGIs0QSNrGo9pcJu5yb66w%2FrAbs7RRw4cLCjRY28AqrZSZQ1lNzaZ50FLbg4QT3cZsJwvwvZQaEwtgkrGo%2F1wucLodG8pBR3NAfYA%2By2YehB1dkLXXeVxq%2Fqza2WJ5&X-Amz-Signature=a3724817720f344f8e5ecc0f782df88c9a70b510b5a09d1b3053c781bbe2e3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWXQNAR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8QGvSujWI1xDM9yomQ81TJbrZeCpeX7eYEvttD0x5jAIgSd8DIR830cYwpzTNHoEgBbrnMKTmBaBEGHnxrDUY81MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8sF7IJrdamT3eErSrcA2MOS93F5gjsWH5Bikwtq17aFc3XK7PKf6U%2FACZAZQ2vC5g8NtyIxXoztoUyznQfK2akyyIc%2FFrhl0YHBRbiSqDDNpL6SZzp9l7ZQgge7dKwNzoP%2FT%2BvZHq5YRxtxV7psYiKTSzZJ%2BZYG651mmOfx3MOkjuMccCUPCSuuJD4lLNxKVrThcU23OziSUn8NQBw3YokFDAHCuBJazi6IDJDuxTtSqWyULZm7TxIPZy0Z2B4Zs%2FEWZMy1fczT8V7hpcJfITYOwbf4SPELLs4BTehjjweYUaL1%2BlDu2T0U5qyDRZ6sh0QRbqzhaYhRG4YsJ7usWWq%2BKdb4PFvcwJKHPfmP0UeGOWgvZ3vH%2F8EtE%2BzEDqTCBQhJo5i7soyRKlaQnERQX4qTAJYYD9d6WKEhVu7Z2V9IsBbu8xmcA9%2BRPuhWrKx6WxjguAezGwtMWbEH0g%2FaUHxWcXD1BiN79%2FcEUHNlP0WVeqD4qGENMqWEXE%2Bj5DsjKkSVIX1w5EJdotJXNA90%2BTW%2Bg5bpLJsYuQP69L63xeNlpCRpsLLTiwQj302%2BdTfS9yJ%2FNg%2BEWLLKwz6bkrcDriyyv8LFUZdz7xAjAX6avlisvQRM2rnV5SwjaN9zGY7iM5aJH9Jwotd5AsxMKz5v8MGOqUBtERzeJ1G%2B%2F7a%2FYRK%2Ba00P2dROGJD8NukGYJq8UUgWL7KlcwZlWawDi70B62%2BDCmSVoLkew85DdMqoH8MiFScTDEGp82Orc%2BGIs0QSNrGo9pcJu5yb66w%2FrAbs7RRw4cLCjRY28AqrZSZQ1lNzaZ50FLbg4QT3cZsJwvwvZQaEwtgkrGo%2F1wucLodG8pBR3NAfYA%2By2YehB1dkLXXeVxq%2Fqza2WJ5&X-Amz-Signature=516f7c9ec4d500b02f14e3d5b3a2883ee32899142d1eac9e51a7bea76aec99c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
