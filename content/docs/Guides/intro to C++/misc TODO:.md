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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQUNZ35%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCHXU6oA8y1LyRlG3WpK6mZJOwETKATXoxS1kq0YG2qAiEA8VN6fCUtV6eMC2vWDMeHIYlAD%2FgRTYW6tcaBt4ygA%2F0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIqMaaDOSUlgLWclSrcA9vG84otciGxaGr57PXMUgPamlqbFmOCaGXWLxtcMsK9WX8JK5PIlM4cYhgStMewIp5LplGWtUv8QZpDo1vMrkyRSKORWAZnQSvVaechie4jUFZ8O1YE8x5Nv1%2Fei7aJexxL2wBT3VHhswOw2o3w2PEjR8lC6HZMCqikpDPTAWIrDiKgprFjlZQfl78%2BZYLlNRV8NcB1SRt3Pia%2FizOtrVas1VFcmxL8JMYhLo3dS7iv0oL4WLv%2B%2FUPes%2FDiXJQn8gWZKGLIoO%2FIn84Qy0XYM4dEcDUUzMK4HSTmsuJwD7JCCj5mZ%2FdsZPAR1D57H96qeEPhNk7ik%2FSLMonnyc8Zshlmp4rjs1BPgIrzs6RPsJlDk6alTFSvgJ9YIHceDA3sTvlfMiAfbhKWhJB2wXjkzYvozNHzpoZaBzBUnNQNmwa1mHakh2ux55wAHIVdYU5WHvbDC8y9MzjiPF4eIYgLNR3eYcKxd1i4c2G6y%2FsBzvek85sQdxl1rq1%2FBb3IxjuXX6DXQqk9jFWRyxMd1byjRfFtsGdDqP33gaPuZP567Z2M342H4QWVrQFm5vO6xrd2WgwCbeQMQd2RMbiAZxbFMCkIACCnelGniOoDLwdA6jvGqx0waHjJctZFSPnOMOWVjMcGOqUBIxeB1O5WbeWzz4q4ZC9sw%2FkgnfjnuEe3W3tWwrR8LkNf8ehxu6yCHIWoHWQmSc0OerBRmbQeOLsFkWApt5UZVDvOwcMnr3vrQ7cnM2%2FEVYd%2Bz8rlZLoZi%2FkMd4DT04hs4SAEHy9l0aL07c1YK8dpy%2BUsPHXkTzb2mM1ToOf3NR%2FuxUbfdJlfwm3VIgTg9GJwr9rBLzwV%2Fu7NJaj2n6CgvR82A%2Ffu&X-Amz-Signature=8eaa58ac8eaf6e095850d05099acd35bebc0ed896dd01b4641390e8d5f30915c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQUNZ35%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCHXU6oA8y1LyRlG3WpK6mZJOwETKATXoxS1kq0YG2qAiEA8VN6fCUtV6eMC2vWDMeHIYlAD%2FgRTYW6tcaBt4ygA%2F0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIqMaaDOSUlgLWclSrcA9vG84otciGxaGr57PXMUgPamlqbFmOCaGXWLxtcMsK9WX8JK5PIlM4cYhgStMewIp5LplGWtUv8QZpDo1vMrkyRSKORWAZnQSvVaechie4jUFZ8O1YE8x5Nv1%2Fei7aJexxL2wBT3VHhswOw2o3w2PEjR8lC6HZMCqikpDPTAWIrDiKgprFjlZQfl78%2BZYLlNRV8NcB1SRt3Pia%2FizOtrVas1VFcmxL8JMYhLo3dS7iv0oL4WLv%2B%2FUPes%2FDiXJQn8gWZKGLIoO%2FIn84Qy0XYM4dEcDUUzMK4HSTmsuJwD7JCCj5mZ%2FdsZPAR1D57H96qeEPhNk7ik%2FSLMonnyc8Zshlmp4rjs1BPgIrzs6RPsJlDk6alTFSvgJ9YIHceDA3sTvlfMiAfbhKWhJB2wXjkzYvozNHzpoZaBzBUnNQNmwa1mHakh2ux55wAHIVdYU5WHvbDC8y9MzjiPF4eIYgLNR3eYcKxd1i4c2G6y%2FsBzvek85sQdxl1rq1%2FBb3IxjuXX6DXQqk9jFWRyxMd1byjRfFtsGdDqP33gaPuZP567Z2M342H4QWVrQFm5vO6xrd2WgwCbeQMQd2RMbiAZxbFMCkIACCnelGniOoDLwdA6jvGqx0waHjJctZFSPnOMOWVjMcGOqUBIxeB1O5WbeWzz4q4ZC9sw%2FkgnfjnuEe3W3tWwrR8LkNf8ehxu6yCHIWoHWQmSc0OerBRmbQeOLsFkWApt5UZVDvOwcMnr3vrQ7cnM2%2FEVYd%2Bz8rlZLoZi%2FkMd4DT04hs4SAEHy9l0aL07c1YK8dpy%2BUsPHXkTzb2mM1ToOf3NR%2FuxUbfdJlfwm3VIgTg9GJwr9rBLzwV%2Fu7NJaj2n6CgvR82A%2Ffu&X-Amz-Signature=b6a7b98007f39295ad47717d675d6c180892523beb1b29687e7b17ca8ca323e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
