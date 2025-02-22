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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQY74CEP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES5M%2BcL5jZqqoQw3JJ0YKYaf2a9an59teYlN8JSwPx6AiEA2gNP32W4O0q3%2BILfhAbvP1gZMtlg8FVMQO9F05Pfky0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOJ%2F92wp%2FyjLPurjCrcAx9pLBuWIt1BCcCC4j2cmPLf7uODBs2ffE%2BtmBjYjFs5iq4r6zqC8Vk9v1BXoLxXmlUzE4ZIAhrW4JTZARqc%2BxuQWt5K1aSq7atxnmuIW%2FEzhhWc4Ax61aj64UyIPQKbFsvEuqp7JJt5xDQ4ah4dk7%2BD9XPzswj6b1QBb2Sy4%2F4gcT6Vq979Mw4%2FuvAFrMzKDtIAdUfyBmlUMMrp2bf05EONELWq%2B7pgVIOHdq0IPKyGIOneIQje2LlmVmiRiQBmu5fZTZfm3mW%2BfL78iqBh7g%2BuRmHki%2FN7v7upkKb72%2BDeYFWvHnflztpKci%2BGaW4nPDH6HnGIKrMCGWpk4MJcYUTPNi1r5DKvlZlNcK7wd1BIO0CCXTbCGWiJ5iTEj4tdeVH8wji5qE%2BQ3qx%2FmS1st9OVUgslItDlSCs%2F2SDn%2Baz%2F4G7rY9sYqIHXmXw8qHRJSsAXjkWKq2FO1p%2B2MsVoM5T1vUoLN18TPlvA7ztFOLUcQc%2BfylRZC1im9HLSRro7rci2poD6DE4xguXRciFU6aKQ4pViXWR6RD%2BP%2F42fJWx63L7KlQkBjoGWW3JJ5jNbq3YgfbfWnWvG3EQbqkUjOy52i6uIUloXSJSMLPkdTLvwBl4EfYKFgXz3easKMO7V6L0GOqUBwCkjkz0B8oWz%2F14cBsN02gcfi3isZ%2B4fQmrdA46ix3JQ9NcbT%2B1nw3f%2BoxfS6HkvsLDPgTS5%2FLJHM37F4qlQb7ODokZFwZBpzJ6WZ3wVXFGqi2efaay%2BPOHEmzn%2B86nCRhEWom54x8tUcaGx8gufF%2F7WYGMzWDzLG2hS0iOQiCEl3WFnIXC%2B9nIZOhWof9FWwW9edVyUEmI1%2FwxoJIXXyk%2BROIkE&X-Amz-Signature=14784b81fdc8bb5f1bbc726ad0322973bb8bad712dbf794e39b2b51f3198fc68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQY74CEP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES5M%2BcL5jZqqoQw3JJ0YKYaf2a9an59teYlN8JSwPx6AiEA2gNP32W4O0q3%2BILfhAbvP1gZMtlg8FVMQO9F05Pfky0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOJ%2F92wp%2FyjLPurjCrcAx9pLBuWIt1BCcCC4j2cmPLf7uODBs2ffE%2BtmBjYjFs5iq4r6zqC8Vk9v1BXoLxXmlUzE4ZIAhrW4JTZARqc%2BxuQWt5K1aSq7atxnmuIW%2FEzhhWc4Ax61aj64UyIPQKbFsvEuqp7JJt5xDQ4ah4dk7%2BD9XPzswj6b1QBb2Sy4%2F4gcT6Vq979Mw4%2FuvAFrMzKDtIAdUfyBmlUMMrp2bf05EONELWq%2B7pgVIOHdq0IPKyGIOneIQje2LlmVmiRiQBmu5fZTZfm3mW%2BfL78iqBh7g%2BuRmHki%2FN7v7upkKb72%2BDeYFWvHnflztpKci%2BGaW4nPDH6HnGIKrMCGWpk4MJcYUTPNi1r5DKvlZlNcK7wd1BIO0CCXTbCGWiJ5iTEj4tdeVH8wji5qE%2BQ3qx%2FmS1st9OVUgslItDlSCs%2F2SDn%2Baz%2F4G7rY9sYqIHXmXw8qHRJSsAXjkWKq2FO1p%2B2MsVoM5T1vUoLN18TPlvA7ztFOLUcQc%2BfylRZC1im9HLSRro7rci2poD6DE4xguXRciFU6aKQ4pViXWR6RD%2BP%2F42fJWx63L7KlQkBjoGWW3JJ5jNbq3YgfbfWnWvG3EQbqkUjOy52i6uIUloXSJSMLPkdTLvwBl4EfYKFgXz3easKMO7V6L0GOqUBwCkjkz0B8oWz%2F14cBsN02gcfi3isZ%2B4fQmrdA46ix3JQ9NcbT%2B1nw3f%2BoxfS6HkvsLDPgTS5%2FLJHM37F4qlQb7ODokZFwZBpzJ6WZ3wVXFGqi2efaay%2BPOHEmzn%2B86nCRhEWom54x8tUcaGx8gufF%2F7WYGMzWDzLG2hS0iOQiCEl3WFnIXC%2B9nIZOhWof9FWwW9edVyUEmI1%2FwxoJIXXyk%2BROIkE&X-Amz-Signature=6c63ff43a86c4e4fa4411a7909b576553c63cc60ba70e69c7aee91ebaf155187&X-Amz-SignedHeaders=host&x-id=GetObject)

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
