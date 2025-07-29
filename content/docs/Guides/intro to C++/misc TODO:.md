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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCMB7W3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUUe7BVfcVtWNcV93EGZ56Epaiu78C%2FgDqrccrEmVirwIhAJCGFCZj7G7nOWSjIvOsOwubgBvl8pemZnkl2NYgm0EMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzheSKmxOcdeacHvS4q3APaXIIjABXbX%2FKtntW0FhldfH5slUN0EZupqfTYtTcsxLe4pQ9zYK1m86DBN%2FvJib20%2F%2FOG71pHdfnVBuqqyDow3zdOG1g%2FOq7hajXW%2FS35X8qhoS5oA3ap11sKkm0%2FsYcaLeXQVPeoXJrupQBFyqoeZ%2BS2t%2FzIsaWykZ7TRqiAvu6C935J5gPLz%2BVlKBIDJ%2BDJZcvpeNzFBhwthEwRT1b4TTZea0QwL3vYWUIXm1StLlZMz2WYPuI3n%2FMkoU66etI3mhxOpKTatGDh4akqUflGN6CjHaOeh3fB0h6Cf8OmdDUkQUHJRzIadYJLM%2BbK%2BdRuyRzxCY%2BNjcSRg2lKXRJxwklF900fl5Tt%2BssIvbqK%2BxzWsAUlLxGeZ2D63bUOnqdcW7weN2kkp474ZHjHjBq7PEP7QGtHYs8eHSlsH4LmtUk0hNYTEInOOFNlvLZLDFN%2FlynzBSIhGV9SiqdNUyvIiv%2Fifx2iBX2GWFOsR3xXaxhZn3rJCv%2FrQGHFNB1G29mxL3w2uXgRUh%2BrWqfQmkKwdwSQ3UHi3g106VzVgCBhuoIkQ4DPVgkFnibyR%2BFAW5v5jXLrmsCZnw2zuDMjFgKCwgBo0qL1B%2BjVQDhF9MqXka74W8OYr1NKg5JcOjDr%2FqPEBjqkAYQ1RqdtemllIqNwv2zUEZJFHpqS5kUxApdi6T4mFnlgBnQdLsQ2D3WfG1V2r8OMlbJo%2BOKF58ACeHLPsu2%2BN%2BDNc%2BWM2ts0Zg6TMm4SPT6DMcR8Hm%2FRYO92IyTgukQiRaKXVnX%2F4QaqxU8gXVHtbjDt9JP5RhpQHGRCZx7XQpKZ09T%2FA%2Ff9olBbJih%2F%2FBo9UiqFlSkW37IQGmMl5eb0wuBQ%2BgU%2B&X-Amz-Signature=35488f0d4830b22553da0e3850f9f992941db0cf929f352c83f0d5e2b9ab0a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCMB7W3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUUe7BVfcVtWNcV93EGZ56Epaiu78C%2FgDqrccrEmVirwIhAJCGFCZj7G7nOWSjIvOsOwubgBvl8pemZnkl2NYgm0EMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzheSKmxOcdeacHvS4q3APaXIIjABXbX%2FKtntW0FhldfH5slUN0EZupqfTYtTcsxLe4pQ9zYK1m86DBN%2FvJib20%2F%2FOG71pHdfnVBuqqyDow3zdOG1g%2FOq7hajXW%2FS35X8qhoS5oA3ap11sKkm0%2FsYcaLeXQVPeoXJrupQBFyqoeZ%2BS2t%2FzIsaWykZ7TRqiAvu6C935J5gPLz%2BVlKBIDJ%2BDJZcvpeNzFBhwthEwRT1b4TTZea0QwL3vYWUIXm1StLlZMz2WYPuI3n%2FMkoU66etI3mhxOpKTatGDh4akqUflGN6CjHaOeh3fB0h6Cf8OmdDUkQUHJRzIadYJLM%2BbK%2BdRuyRzxCY%2BNjcSRg2lKXRJxwklF900fl5Tt%2BssIvbqK%2BxzWsAUlLxGeZ2D63bUOnqdcW7weN2kkp474ZHjHjBq7PEP7QGtHYs8eHSlsH4LmtUk0hNYTEInOOFNlvLZLDFN%2FlynzBSIhGV9SiqdNUyvIiv%2Fifx2iBX2GWFOsR3xXaxhZn3rJCv%2FrQGHFNB1G29mxL3w2uXgRUh%2BrWqfQmkKwdwSQ3UHi3g106VzVgCBhuoIkQ4DPVgkFnibyR%2BFAW5v5jXLrmsCZnw2zuDMjFgKCwgBo0qL1B%2BjVQDhF9MqXka74W8OYr1NKg5JcOjDr%2FqPEBjqkAYQ1RqdtemllIqNwv2zUEZJFHpqS5kUxApdi6T4mFnlgBnQdLsQ2D3WfG1V2r8OMlbJo%2BOKF58ACeHLPsu2%2BN%2BDNc%2BWM2ts0Zg6TMm4SPT6DMcR8Hm%2FRYO92IyTgukQiRaKXVnX%2F4QaqxU8gXVHtbjDt9JP5RhpQHGRCZx7XQpKZ09T%2FA%2Ff9olBbJih%2F%2FBo9UiqFlSkW37IQGmMl5eb0wuBQ%2BgU%2B&X-Amz-Signature=e8ff2ef4916a0f5b60b5f79750ae327568bb8a065f2416c13b4cd89a5b2dd545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
