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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MEXCUU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2FC0C9J%2FAUZNWc9g8AEvD5Ro2ai3qhvyfW4qJJpHvaYAIhAPdWWbwHQIucl1z%2F24cptP7wLHtUXesctR1ollMoUSpxKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjbRA4LdKEUh4E%2Ff8q3AOMTtqaAMg8pvTUZkFrjXKCpdQ3O3jgNiQP4Kk3BXWt53gmMaZbgi%2FyHzyfSOwXYLJfS1qbfXBL8xSpXLbkh9yJdOR6fXewn2Uil3PcmdXD4%2FvbXtUG46Kv0rSkp5fnH%2BfqZZTLpdvbW7gpSp0FUvZwVAe8lJKg0X1ecnFQzz8kbdPitH6%2BsbG0FFpC84ruWRN7ZkoCYib9XZT%2Fl6a945VtXkcss5n7imMVb2cubGfellr50yxieJTPyjb4%2BXwOXi3wv4Pdw%2FF59IjYrIQOBVXUbQhtPd8F5BScMejuZdnVLC1Jwwz0b0CzoLmL7zVk0zSVzGcBfFCRconknWRKu3U3wFZ0liJuTn%2B5ZPiXGY7YQH19%2FHp42p%2BLMHvRhb7bEFssaYLrc6X0xFw%2BuXn53QQ4Dj1gtiClv7o6BQy3TW6qc0Hti3bGFtIbRgiIMbQeY26NAHc9gbVb%2BffMn5vr8Ayy4MJjoMVNylxegzEX13MGR4sLEdNE0CScgPJ2B7zTH6mjeIPzxy8KSKi4Zd7tKLjXVHHCTjA%2F3%2BLQv50Ce9VXazkEfO4UGLLF1cwXLxtbjVw625FMAuLgQzCIcT6RAIHqeVIloyQvmB3lsBrOPKOjxvABarFpJpEcC5Nc8DCj7qW%2FBjqkAYrMP0R36uwgyprwiIDpiHCZwVDVe43esqgGffwGcT6ViAko7siXTLivHKwh2WR%2BKYOvAfS5bikB1pGmBFr%2FKJRvE8iYybXShUloy7AO3MFh5CDaANAj1YSffDqZUA7uVQYxwVAoi6jTDZtBvZaELqsN1SUOfxq8RB%2BSJImDTNuLcx6LPgetHQTn5hO5Yll1zhBAGZIk%2Bn25Gja8H6j44crNKbsL&X-Amz-Signature=8977817128d29652804daa6c7d6cef214e281a21fe6a74ea14077b707c85285f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MEXCUU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2FC0C9J%2FAUZNWc9g8AEvD5Ro2ai3qhvyfW4qJJpHvaYAIhAPdWWbwHQIucl1z%2F24cptP7wLHtUXesctR1ollMoUSpxKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjbRA4LdKEUh4E%2Ff8q3AOMTtqaAMg8pvTUZkFrjXKCpdQ3O3jgNiQP4Kk3BXWt53gmMaZbgi%2FyHzyfSOwXYLJfS1qbfXBL8xSpXLbkh9yJdOR6fXewn2Uil3PcmdXD4%2FvbXtUG46Kv0rSkp5fnH%2BfqZZTLpdvbW7gpSp0FUvZwVAe8lJKg0X1ecnFQzz8kbdPitH6%2BsbG0FFpC84ruWRN7ZkoCYib9XZT%2Fl6a945VtXkcss5n7imMVb2cubGfellr50yxieJTPyjb4%2BXwOXi3wv4Pdw%2FF59IjYrIQOBVXUbQhtPd8F5BScMejuZdnVLC1Jwwz0b0CzoLmL7zVk0zSVzGcBfFCRconknWRKu3U3wFZ0liJuTn%2B5ZPiXGY7YQH19%2FHp42p%2BLMHvRhb7bEFssaYLrc6X0xFw%2BuXn53QQ4Dj1gtiClv7o6BQy3TW6qc0Hti3bGFtIbRgiIMbQeY26NAHc9gbVb%2BffMn5vr8Ayy4MJjoMVNylxegzEX13MGR4sLEdNE0CScgPJ2B7zTH6mjeIPzxy8KSKi4Zd7tKLjXVHHCTjA%2F3%2BLQv50Ce9VXazkEfO4UGLLF1cwXLxtbjVw625FMAuLgQzCIcT6RAIHqeVIloyQvmB3lsBrOPKOjxvABarFpJpEcC5Nc8DCj7qW%2FBjqkAYrMP0R36uwgyprwiIDpiHCZwVDVe43esqgGffwGcT6ViAko7siXTLivHKwh2WR%2BKYOvAfS5bikB1pGmBFr%2FKJRvE8iYybXShUloy7AO3MFh5CDaANAj1YSffDqZUA7uVQYxwVAoi6jTDZtBvZaELqsN1SUOfxq8RB%2BSJImDTNuLcx6LPgetHQTn5hO5Yll1zhBAGZIk%2Bn25Gja8H6j44crNKbsL&X-Amz-Signature=dc27b93a33225cb0e8065ccd2b165605445393573369948af8db5699523ccd57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
