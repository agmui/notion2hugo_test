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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LSZ45G%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx45GHLtG0AVgk%2FOGWFhRWBDEUsbCxHZVA7Sh%2Feda0gAiEA5qfZ0MHbk%2FlPweHikbboGxRhbYZ%2BjYPRQRZZiBHTxFUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3tQNzUe2I0eqTsSrcA0V8eWuxXapCU5Fsy%2FdMWc15dtgYMfZnqT4re5R6YY8EC0%2BM1PxiSBvblgEzew%2F6Stv%2FV8RLuIvYG8MvcCEnKEiBhIhb3k%2B7dAFNtEjvaCifT9OdW7sLdQVxoQxj%2BxN9jgieBUr2TzHKMuG9HrMq2dxtnG4OI1FAiazIDss1EBykB%2F7la9%2Bxz%2FSzsVcMHTEwZARrixBNJa379GrQjARHjhNyslkKXvHDO5FYWvn5Vzq7tdnW5upZkw8ZsI6qcK7iASHawR6cTLhZinxf0tZie%2BIVyWXk253dZVSkcArOq4l3smoPq3cBt2VpUgq4IJIf3%2F%2B4kSetjp5iw94Qzu3YxqnFkf2xFfKs7LMH%2Bh7899D5o6VV1Si2lafXTN3ohIu57KVmlSxecEmUUDyjuWbMbqdSO57mUEYuA5XaPyjxn9VhJ%2BAyLqFgsoM%2BRFykHhXr4qibpMLrAzJJ7AQRooatWXZd7YEo4Qb9wCEUdl%2FbMkXMd1lvjeOjlOEx%2BYno%2FRAFZj7Zw4436BHLp3cCLYGvAVe8ZymcQTuota1xVb89YVOSF0bFlj%2Fy1PWhmudBUHMY7S99Sng8e2R9pYSTy6fOULQoRSqSJe3Rc3W6jo61kYCTxiDVST1CycUQtBQ5MNi5g78GOqUB8Lxr680kjn7mi0OApKyda76k4%2F4tnJ8yIdQiWqgqp0FN76RnV5y%2FJCKTN5PckpfmWw3BoVtQc9DBCmwJ2mftq5mjnx%2Fh9pN1lnK8jJo5A4dfU365pWa9Aoyrvb3%2B4ypugFCrufz1BxCCjul9G7mftp1kjAxxixxcNCFyOZjlmbW9Wa%2FZIipNW5B4B0cAZ3ytQNVz94cUEPtF1VA5VigN6HJoetYZ&X-Amz-Signature=9ead24fef6e537ec7a3ee38e26cc39d6d7244d09f27e32d92386aa9c271970c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LSZ45G%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx45GHLtG0AVgk%2FOGWFhRWBDEUsbCxHZVA7Sh%2Feda0gAiEA5qfZ0MHbk%2FlPweHikbboGxRhbYZ%2BjYPRQRZZiBHTxFUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3tQNzUe2I0eqTsSrcA0V8eWuxXapCU5Fsy%2FdMWc15dtgYMfZnqT4re5R6YY8EC0%2BM1PxiSBvblgEzew%2F6Stv%2FV8RLuIvYG8MvcCEnKEiBhIhb3k%2B7dAFNtEjvaCifT9OdW7sLdQVxoQxj%2BxN9jgieBUr2TzHKMuG9HrMq2dxtnG4OI1FAiazIDss1EBykB%2F7la9%2Bxz%2FSzsVcMHTEwZARrixBNJa379GrQjARHjhNyslkKXvHDO5FYWvn5Vzq7tdnW5upZkw8ZsI6qcK7iASHawR6cTLhZinxf0tZie%2BIVyWXk253dZVSkcArOq4l3smoPq3cBt2VpUgq4IJIf3%2F%2B4kSetjp5iw94Qzu3YxqnFkf2xFfKs7LMH%2Bh7899D5o6VV1Si2lafXTN3ohIu57KVmlSxecEmUUDyjuWbMbqdSO57mUEYuA5XaPyjxn9VhJ%2BAyLqFgsoM%2BRFykHhXr4qibpMLrAzJJ7AQRooatWXZd7YEo4Qb9wCEUdl%2FbMkXMd1lvjeOjlOEx%2BYno%2FRAFZj7Zw4436BHLp3cCLYGvAVe8ZymcQTuota1xVb89YVOSF0bFlj%2Fy1PWhmudBUHMY7S99Sng8e2R9pYSTy6fOULQoRSqSJe3Rc3W6jo61kYCTxiDVST1CycUQtBQ5MNi5g78GOqUB8Lxr680kjn7mi0OApKyda76k4%2F4tnJ8yIdQiWqgqp0FN76RnV5y%2FJCKTN5PckpfmWw3BoVtQc9DBCmwJ2mftq5mjnx%2Fh9pN1lnK8jJo5A4dfU365pWa9Aoyrvb3%2B4ypugFCrufz1BxCCjul9G7mftp1kjAxxixxcNCFyOZjlmbW9Wa%2FZIipNW5B4B0cAZ3ytQNVz94cUEPtF1VA5VigN6HJoetYZ&X-Amz-Signature=91f42e1db7d5043bd189779d131839392c5e98168466e2ccb6a688f7be7ce312&X-Amz-SignedHeaders=host&x-id=GetObject)

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
