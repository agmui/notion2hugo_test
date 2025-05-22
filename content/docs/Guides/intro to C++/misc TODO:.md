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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WNTYH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF6moxxtgDtHdB4EZZt15l43OkjYn6kvPmaCP3XWhVWWAiBk%2FhKItYn3OXah3DUDU1lp7SJgU1eyk4STuy2r%2Fk5FEyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7WA4OKgtPkozOK8QKtwDPQMz9GeIH3ly%2FkwSfOrIbebon0F1wPQDvzOfyJkiOrpGW8spSoKdzYFbqNyAJSaFUomvk4JO%2Bo1yqnSS56Vqt43rj046Un0IiyoqOSQYkvZQzLNzbqnouebMLirFbpGsksrXZ0FHenAsluPQwIuVscRtBTGeWMwR41%2B5yzwUpEaYQUzhot875Kc0FfH7VJGPTj9PfUq8is%2BexGaBdYAJpc0YMM2IYBGWmO9Db2WZfFq6IPNNiif3Tx%2BwjGWBHJa3fPbQjLQ88qxYOZPteuklx2uy8zBrYAXONm4pKNhqbZcPhPZsqBtqlF8UTiIurHVCZCLuhjcp6%2FntpWcJq7p3%2FDuzanGwv6V8VErQWWrEs040XCL5EDN%2BoqLuBzjnm2rs0pHws26TQtVimUXYPfY2M4w8%2BizHUyu1STDmSX1jN94B1ei4lZVXdOlGvCWo%2BN%2Bv2kkT%2FG5oHKvBZFJZX9VbCrayvsGhGaDLKxZKCSYGNAATudc8YjHWWpEwjuqYA6cIo9P4lPMfPcGj3EBdRceaEtPeo9iCidlld7dP9kWcRX9wrLrDmhCNi6w11I%2BxbOpaOa2j3R4T2wp0EHxi35yDjBz4xW0aXCfBUx6UKjhVx2n4a79i2nsEdb5%2B0Cwwn%2Fe6wQY6pgER0fkGOBfa1DA3yCbjvnogpu8XvQIVl3ENSi%2FYopQy5lydXeZtqkPul4ACaDOm2%2F8CBTRgVLWlwK4KEheVL6G9xWCWDi0xchCi14wFrRDoX2yIhfzTwiban8RShLJjAn2TE9rqCJlB%2B1VnbwZbnwl3nVN8nIaYpNQ5dsWR017MiZqXP1hP2SMTlKyTDQB1Kt1hPwQq9q6f5v9n%2FYNhFRTWB%2BkriP6p&X-Amz-Signature=0c6f598b72155ea8f6130ccb0a5ee07413c7ab04b03fb38fbb9e8235f3b7a0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6WNTYH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF6moxxtgDtHdB4EZZt15l43OkjYn6kvPmaCP3XWhVWWAiBk%2FhKItYn3OXah3DUDU1lp7SJgU1eyk4STuy2r%2Fk5FEyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7WA4OKgtPkozOK8QKtwDPQMz9GeIH3ly%2FkwSfOrIbebon0F1wPQDvzOfyJkiOrpGW8spSoKdzYFbqNyAJSaFUomvk4JO%2Bo1yqnSS56Vqt43rj046Un0IiyoqOSQYkvZQzLNzbqnouebMLirFbpGsksrXZ0FHenAsluPQwIuVscRtBTGeWMwR41%2B5yzwUpEaYQUzhot875Kc0FfH7VJGPTj9PfUq8is%2BexGaBdYAJpc0YMM2IYBGWmO9Db2WZfFq6IPNNiif3Tx%2BwjGWBHJa3fPbQjLQ88qxYOZPteuklx2uy8zBrYAXONm4pKNhqbZcPhPZsqBtqlF8UTiIurHVCZCLuhjcp6%2FntpWcJq7p3%2FDuzanGwv6V8VErQWWrEs040XCL5EDN%2BoqLuBzjnm2rs0pHws26TQtVimUXYPfY2M4w8%2BizHUyu1STDmSX1jN94B1ei4lZVXdOlGvCWo%2BN%2Bv2kkT%2FG5oHKvBZFJZX9VbCrayvsGhGaDLKxZKCSYGNAATudc8YjHWWpEwjuqYA6cIo9P4lPMfPcGj3EBdRceaEtPeo9iCidlld7dP9kWcRX9wrLrDmhCNi6w11I%2BxbOpaOa2j3R4T2wp0EHxi35yDjBz4xW0aXCfBUx6UKjhVx2n4a79i2nsEdb5%2B0Cwwn%2Fe6wQY6pgER0fkGOBfa1DA3yCbjvnogpu8XvQIVl3ENSi%2FYopQy5lydXeZtqkPul4ACaDOm2%2F8CBTRgVLWlwK4KEheVL6G9xWCWDi0xchCi14wFrRDoX2yIhfzTwiban8RShLJjAn2TE9rqCJlB%2B1VnbwZbnwl3nVN8nIaYpNQ5dsWR017MiZqXP1hP2SMTlKyTDQB1Kt1hPwQq9q6f5v9n%2FYNhFRTWB%2BkriP6p&X-Amz-Signature=26f4597af75f0ba028fd3dc799abd7b861dafbce8198611dd3e0cd6c3f1b7ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
