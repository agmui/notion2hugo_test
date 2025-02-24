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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3GIUWK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6mANeoygW3WhbNs0mNT0pUl9bF3%2BEt%2FIXMdmTOm7P3AiEA9Zy7h3ilJvmo6m9A3PHTI%2BOqNJeopTZs4oBRvIlmhkIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPB1naa%2FKjn78CVx3SrcA%2Byk7VJ23Tji4MF5Iuq%2BZCx2nFe5NeIOr0E5oq01ov%2FMFPZtaOrDKFqaIrU5J3q7brP4oV9BE%2B1ZhJkHpRIBX6cYy72m7fB%2F7iZPWfbRYpYIZ7gwDzuYwQOyhBKFrzHbon9Yw8qvpgfmaOd%2FuxMhaUHnZQUFQ3ZDHh8de6Bsw4ho57X00ueAs4lOnXWwjwDS0ejVz1ZmyAUGJ%2Ffk8od%2F2SPgocuA2dpCFioD%2BYcrvfVbxki0BQErd%2BKEbdAicD5ihQ3Z8104Y0q9U8kVWKRgjlo1NfJQAe0z3DxqCK8r%2BKz%2FpDSso9%2FDwoWyswces1wKCyP4u7OQQwHXNwnlzEjhfPbkjYnGwzI%2FA48Xb5sCIRmMDsNzcZuci6YTKNGYBTKbb%2FyZxoWGZ4%2FpRlZcMSAizwyD6mSjD6Ug%2FUGAfXkfeDhDtjnWS4JRbIGJWHQxI3ilFH98JaHQf%2BfVVUOEoymMwRZfLgL7U%2Fr%2BX%2BKJ5X4iOpZXsFcMjCU5rFdNUjnKjeI6jWZBCirGqmI5IL%2F8a0GPMgO3JFoTJEa8WReV8A8JSlnNf8CiwQgU5xC%2BYkO%2BAwQy37zMkfOQvL%2BPM7XRy6f4ce7PEuVF0ojD9RIh4NX8JtWH5jfU8hrZS%2BX0A6I6MNXW8b0GOqUBXMTTDQdwhD0%2BeJFey4GQGTR6Y74lz4JAS1HVqBdTIhAzwaA%2BEW6SQpDkz%2F7FH6IWHMsPAM2g2%2FPdYIROoJbeEQ9NauIz83gABv5g0bzZetEKX%2BFzumtzeLm8IDYb1wbEYUInWkNoJSa9lcnmfzNQGZHgB27tFZaLXKYvSfzx%2Fia0GY74My2r65hAhV5oYXJPQHjYzE0m%2B30d2HKmVNNTZC7hy90h&X-Amz-Signature=2d17c70c72c6f9c8e512e05e715636c021b8e7d02fd2cabe0e8436af345b45ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3GIUWK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6mANeoygW3WhbNs0mNT0pUl9bF3%2BEt%2FIXMdmTOm7P3AiEA9Zy7h3ilJvmo6m9A3PHTI%2BOqNJeopTZs4oBRvIlmhkIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPB1naa%2FKjn78CVx3SrcA%2Byk7VJ23Tji4MF5Iuq%2BZCx2nFe5NeIOr0E5oq01ov%2FMFPZtaOrDKFqaIrU5J3q7brP4oV9BE%2B1ZhJkHpRIBX6cYy72m7fB%2F7iZPWfbRYpYIZ7gwDzuYwQOyhBKFrzHbon9Yw8qvpgfmaOd%2FuxMhaUHnZQUFQ3ZDHh8de6Bsw4ho57X00ueAs4lOnXWwjwDS0ejVz1ZmyAUGJ%2Ffk8od%2F2SPgocuA2dpCFioD%2BYcrvfVbxki0BQErd%2BKEbdAicD5ihQ3Z8104Y0q9U8kVWKRgjlo1NfJQAe0z3DxqCK8r%2BKz%2FpDSso9%2FDwoWyswces1wKCyP4u7OQQwHXNwnlzEjhfPbkjYnGwzI%2FA48Xb5sCIRmMDsNzcZuci6YTKNGYBTKbb%2FyZxoWGZ4%2FpRlZcMSAizwyD6mSjD6Ug%2FUGAfXkfeDhDtjnWS4JRbIGJWHQxI3ilFH98JaHQf%2BfVVUOEoymMwRZfLgL7U%2Fr%2BX%2BKJ5X4iOpZXsFcMjCU5rFdNUjnKjeI6jWZBCirGqmI5IL%2F8a0GPMgO3JFoTJEa8WReV8A8JSlnNf8CiwQgU5xC%2BYkO%2BAwQy37zMkfOQvL%2BPM7XRy6f4ce7PEuVF0ojD9RIh4NX8JtWH5jfU8hrZS%2BX0A6I6MNXW8b0GOqUBXMTTDQdwhD0%2BeJFey4GQGTR6Y74lz4JAS1HVqBdTIhAzwaA%2BEW6SQpDkz%2F7FH6IWHMsPAM2g2%2FPdYIROoJbeEQ9NauIz83gABv5g0bzZetEKX%2BFzumtzeLm8IDYb1wbEYUInWkNoJSa9lcnmfzNQGZHgB27tFZaLXKYvSfzx%2Fia0GY74My2r65hAhV5oYXJPQHjYzE0m%2B30d2HKmVNNTZC7hy90h&X-Amz-Signature=ecb4ed70bfb6feaf271a6b16db5789a4da8679a5190e7e3d67ae9acfc39c5d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
