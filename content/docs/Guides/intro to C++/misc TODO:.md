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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EBYTMJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2BauxyKo62hXgZmJsyjOhjAHMI29TNM%2FOzoQezvNZoAiBM975WsJ%2FkVMXEPAbhJXMEGbAUFx%2FSmk8vq3ykMEq6byr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2FvsLXo0FMQcMEGjrKtwDyNuv4E0hjseAFC0qaXWxQFkt5JJ%2BW%2BVh2YbBXBiGDLXTd8xlXYRfRL53pAiMW9A%2BRo0LJCzWvS3RfGgQn0Ob6ptGIBDp3IrIhww0N5EWzTcRgsAQQzlngzhkWp3ezJkUlEStimWI%2Ft%2F4YfHg8y1Ub9cioe0BvfOjfZhf5b4PHTtCkGR%2BHCnnb59crePACRnIQTC4JUhL35UDkeyH0fNiorIlu1WtjxLYnVlufdL7%2BPVyXjapaVdCBiGsj3UjxRsmxYonrCmxoQdn6xYXe%2B%2BZn7Aj%2BdGHGUc5XQfYKuvnvtz0jDTF5b9QYzf7q14JNgdBm55DFTZ2pM9oyqzcCcXr%2B7Sd%2F84hFLoN7kn0rzuRyI9JMg0iI9vnVjpReHtMEfusil3qglkrYaghvOE%2Fl79wzphvkEqbzHp5eliqJfB7pP88kRR07QV2eRKpbNkxAns5eSsQ5WAe0rrNTTV4IWJG61Xbhetiqt1OsW1CPnZLnGBHVB3yKvnoTOb5PRk3EMW%2FAIBHQJ0rkHTwiBWUev7U88XnxTQgFp4n4HttqokZVZxHw4FHToH06S1XRyWP1GOXIqjCwoUHnDEX9LO%2FgsilhF9JbLBrkcMQjIXeT5qbUtL8lqiySayIauaWQfIwxr6LwgY6pgELHghhQMqOKOXKyDscmpZZFa9ZIIyXsqbSWwW22uNqCXB0GiVblq3gJuTKWF4%2BfuVHO8249n5yLGyuk1oDicrDYSoglMhKsFAwwhwsjkdnUJASukdXvLMfLfC6SfgI8Fj1onqsxKGKIG%2FiHaUh%2FNfM9nSDKWCPmO%2Fa7%2B7%2F5nINFGvb70RJAf%2FDfF2TFokdw3AhQjD7B1f%2BFS4nrg8XCba9ZwdVNa4v&X-Amz-Signature=33d557269598060e80b742a814dd3a0e4781fa98f6549ad2cf330ae3e66424d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EBYTMJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2BauxyKo62hXgZmJsyjOhjAHMI29TNM%2FOzoQezvNZoAiBM975WsJ%2FkVMXEPAbhJXMEGbAUFx%2FSmk8vq3ykMEq6byr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2FvsLXo0FMQcMEGjrKtwDyNuv4E0hjseAFC0qaXWxQFkt5JJ%2BW%2BVh2YbBXBiGDLXTd8xlXYRfRL53pAiMW9A%2BRo0LJCzWvS3RfGgQn0Ob6ptGIBDp3IrIhww0N5EWzTcRgsAQQzlngzhkWp3ezJkUlEStimWI%2Ft%2F4YfHg8y1Ub9cioe0BvfOjfZhf5b4PHTtCkGR%2BHCnnb59crePACRnIQTC4JUhL35UDkeyH0fNiorIlu1WtjxLYnVlufdL7%2BPVyXjapaVdCBiGsj3UjxRsmxYonrCmxoQdn6xYXe%2B%2BZn7Aj%2BdGHGUc5XQfYKuvnvtz0jDTF5b9QYzf7q14JNgdBm55DFTZ2pM9oyqzcCcXr%2B7Sd%2F84hFLoN7kn0rzuRyI9JMg0iI9vnVjpReHtMEfusil3qglkrYaghvOE%2Fl79wzphvkEqbzHp5eliqJfB7pP88kRR07QV2eRKpbNkxAns5eSsQ5WAe0rrNTTV4IWJG61Xbhetiqt1OsW1CPnZLnGBHVB3yKvnoTOb5PRk3EMW%2FAIBHQJ0rkHTwiBWUev7U88XnxTQgFp4n4HttqokZVZxHw4FHToH06S1XRyWP1GOXIqjCwoUHnDEX9LO%2FgsilhF9JbLBrkcMQjIXeT5qbUtL8lqiySayIauaWQfIwxr6LwgY6pgELHghhQMqOKOXKyDscmpZZFa9ZIIyXsqbSWwW22uNqCXB0GiVblq3gJuTKWF4%2BfuVHO8249n5yLGyuk1oDicrDYSoglMhKsFAwwhwsjkdnUJASukdXvLMfLfC6SfgI8Fj1onqsxKGKIG%2FiHaUh%2FNfM9nSDKWCPmO%2Fa7%2B7%2F5nINFGvb70RJAf%2FDfF2TFokdw3AhQjD7B1f%2BFS4nrg8XCba9ZwdVNa4v&X-Amz-Signature=204cb9c8d750c1180f33e93d6ab774fef26158eda2cd7f3aac3bb4bc3036e8af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
