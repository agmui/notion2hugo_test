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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEDRKVO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGN8R2ETdokP1c5QoomGr5%2FKBy3O%2FoxxaOPk2iwnLQ4RAiB64zNDi6RiVJaVliahyJUxfcR6U8SKnldH6pRK4SKpZyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMleF3Yq5EURjdNQ07KtwDbjQTgYME%2FPARN1rAbAI7cOSmz52abg%2FFJbAPf3yxfq%2B2HXHDjmzuhClK62JkGQvPifbUCmRz%2BIOs5ulzT08DSSbHFZPjFXqW87B0eR3f4ufLq%2BuMTtgpnFXO0Bv%2FVlVWS2CiaP3fweWJNsOLiNzpUFhdBXIwqIw09Bl918wlfLOOfxt1seeXxRAPJfayxrXqEjdWzUsPGJQQLT9eBX0lDIuQyIgOt4ErmXuu1vNx5gZat0dj753wIw9i%2FIciciDhVCJXUk1YlQVqp2cknq3HSXm4XxCywHCo%2F%2FUVUsnGkc5aWZ7gP%2BtrEgSUABK5KX2WIpe8Y3apOwldivC8%2FTQLhyA%2B1T3iI6wPGehOOBVhHKxVhRz5NKnOf4CHiJa6r4Ircoli5wO%2FcnL%2F8EwNcdMtMg6ypX3WgBGyikwYv2oFBuHuErPRoICu87KKI5iKEN4EMwcn8NPm%2FbfnoXvhLoP5o9FZfLW0eaYv0y711WcVnsEBz1b%2F807de2uh7kzuvKzxjPRKIfg%2BpHJhHnjm0LqckgUacZ9XHPVD528eX4400LuCy40JOWTtvjgK%2FcYsJdL0W9I37NVqCZ44jJwy7juanJfMrPx9y1IO8xxramjUzMzjx%2BZnj89qNyfZnFMwkaOWvQY6pgHoMCm13mVLuU7ze2lsvrDejMYFlRkk4hax2FCOeYazhEf3Mdbyw81BfTdZSbSLRfi899WGZxZMvQ9oV7L8qHJGW9RWbZiyknEDv3WuZQCo70PyaoNG%2FyzsmMRxnIZEmrKRVQEqqPIoJ42uyDFBHWQxYKDLDE7esc0LHmnoLJZfNIzFj6pw3tS8zeGzsivSMIkwLTlaxbPijvdgCR%2FID8HbWxXt9BFw&X-Amz-Signature=c2a14e99709e375907c2c09b0b88a6910a3c081dff1a99bef06c41ad51b9f0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEDRKVO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGN8R2ETdokP1c5QoomGr5%2FKBy3O%2FoxxaOPk2iwnLQ4RAiB64zNDi6RiVJaVliahyJUxfcR6U8SKnldH6pRK4SKpZyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMleF3Yq5EURjdNQ07KtwDbjQTgYME%2FPARN1rAbAI7cOSmz52abg%2FFJbAPf3yxfq%2B2HXHDjmzuhClK62JkGQvPifbUCmRz%2BIOs5ulzT08DSSbHFZPjFXqW87B0eR3f4ufLq%2BuMTtgpnFXO0Bv%2FVlVWS2CiaP3fweWJNsOLiNzpUFhdBXIwqIw09Bl918wlfLOOfxt1seeXxRAPJfayxrXqEjdWzUsPGJQQLT9eBX0lDIuQyIgOt4ErmXuu1vNx5gZat0dj753wIw9i%2FIciciDhVCJXUk1YlQVqp2cknq3HSXm4XxCywHCo%2F%2FUVUsnGkc5aWZ7gP%2BtrEgSUABK5KX2WIpe8Y3apOwldivC8%2FTQLhyA%2B1T3iI6wPGehOOBVhHKxVhRz5NKnOf4CHiJa6r4Ircoli5wO%2FcnL%2F8EwNcdMtMg6ypX3WgBGyikwYv2oFBuHuErPRoICu87KKI5iKEN4EMwcn8NPm%2FbfnoXvhLoP5o9FZfLW0eaYv0y711WcVnsEBz1b%2F807de2uh7kzuvKzxjPRKIfg%2BpHJhHnjm0LqckgUacZ9XHPVD528eX4400LuCy40JOWTtvjgK%2FcYsJdL0W9I37NVqCZ44jJwy7juanJfMrPx9y1IO8xxramjUzMzjx%2BZnj89qNyfZnFMwkaOWvQY6pgHoMCm13mVLuU7ze2lsvrDejMYFlRkk4hax2FCOeYazhEf3Mdbyw81BfTdZSbSLRfi899WGZxZMvQ9oV7L8qHJGW9RWbZiyknEDv3WuZQCo70PyaoNG%2FyzsmMRxnIZEmrKRVQEqqPIoJ42uyDFBHWQxYKDLDE7esc0LHmnoLJZfNIzFj6pw3tS8zeGzsivSMIkwLTlaxbPijvdgCR%2FID8HbWxXt9BFw&X-Amz-Signature=5104764b670bde2283a36836a76f11887511175a00ea3eef7e75d65270d86c83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
