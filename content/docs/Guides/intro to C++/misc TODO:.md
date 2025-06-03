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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVQTK3S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDDFsu%2BYqVZSDXnhg%2BJ6mTvFAQaWKcNiyEW%2BbY%2FNM5NqwIgbEEdbX%2B9LgcjrRkBFFYoEPLjO6juOzK3yWa%2FCbDtkaQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDuE5hObIQvqJQhZ4CrcAznAa0%2FHrdyEvZDWG%2FvpyysJNdUNCGQLn4fLM2oD7nMqLsTLLd8v%2FIFWqu%2FG5asiUtb8fFFv0wWACsKkGAIBZXg6AMUffrLDo4cUEUQRYIXR6byX0BUI0E9Ol1Z2fcdIWOzH2q0U81PzKvTuyu2a%2F9p0vSkEPeyRBF%2FItzZAv4%2F1VJkN48SD3pSUJiQmNql%2Bs7R9CDijdhlNov28NJmy8DruoafdHcw%2FbgA3jjZKF0BHUk5FNs9nuB2pqCPJpxsV7Sff5kxiyps4XsjJKCN9qeUyAS4LNfH5HkpXf2eglbv4S%2BFZ7jxQqUkSQVrXu8QaPAGG75KB9j2m0qpbxVlJhEuksWltH9KpIKsJUZ%2FKVbnA3VJEOMFXH4xQYEOd9vI%2FItNE9XZWkwfm4r%2BnAWkNId1n9USQKds5BLG1BO0oUJfm43f1XFC4NQib17DdAKrQPNSGpCheRe%2BS5IOVn2DDXNeM8B2Co%2FCg5nOT8PJwPKcyPkfo1faeNOg3v8eRdhUdaNUHOV3ftAXAYqH11rl%2B9IFhLE6mptPqpsOW0u2Y%2BqYxaRhJWaoAKLnipi4wlWzscrXPk3%2BweTyJTb6KZNQgcUx5kygSM6N31gnKj2nizhe8IED3eA9DFuPMshv2MLLS%2FMEGOqUBi0AhQdztcEg5qSTphgr64jCzCEgGzad%2Fol4kLHV%2BuamcSxq6FWlTVhqt2%2B9sHI7AVZStNqdkCdI5Yn3ZB0WEt9ZNii8tKsnEZZPdzQ7AALYJfEaDHUcLmBVw%2B7wQ%2FMdnn4gueMXOAuTpjp97hz8IR1EQeadb4q4rK%2B%2F8M1sh3X%2BLtGaGW9%2F4Gcpgt8SRBu4BklvNQYXyitR3Mz7NIxaplA0%2BNsOS&X-Amz-Signature=5172ad3a2ab3497bb610cdb94b0ff9b1421308f6ee45cd911fa22fc278b05564&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVQTK3S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDDFsu%2BYqVZSDXnhg%2BJ6mTvFAQaWKcNiyEW%2BbY%2FNM5NqwIgbEEdbX%2B9LgcjrRkBFFYoEPLjO6juOzK3yWa%2FCbDtkaQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDuE5hObIQvqJQhZ4CrcAznAa0%2FHrdyEvZDWG%2FvpyysJNdUNCGQLn4fLM2oD7nMqLsTLLd8v%2FIFWqu%2FG5asiUtb8fFFv0wWACsKkGAIBZXg6AMUffrLDo4cUEUQRYIXR6byX0BUI0E9Ol1Z2fcdIWOzH2q0U81PzKvTuyu2a%2F9p0vSkEPeyRBF%2FItzZAv4%2F1VJkN48SD3pSUJiQmNql%2Bs7R9CDijdhlNov28NJmy8DruoafdHcw%2FbgA3jjZKF0BHUk5FNs9nuB2pqCPJpxsV7Sff5kxiyps4XsjJKCN9qeUyAS4LNfH5HkpXf2eglbv4S%2BFZ7jxQqUkSQVrXu8QaPAGG75KB9j2m0qpbxVlJhEuksWltH9KpIKsJUZ%2FKVbnA3VJEOMFXH4xQYEOd9vI%2FItNE9XZWkwfm4r%2BnAWkNId1n9USQKds5BLG1BO0oUJfm43f1XFC4NQib17DdAKrQPNSGpCheRe%2BS5IOVn2DDXNeM8B2Co%2FCg5nOT8PJwPKcyPkfo1faeNOg3v8eRdhUdaNUHOV3ftAXAYqH11rl%2B9IFhLE6mptPqpsOW0u2Y%2BqYxaRhJWaoAKLnipi4wlWzscrXPk3%2BweTyJTb6KZNQgcUx5kygSM6N31gnKj2nizhe8IED3eA9DFuPMshv2MLLS%2FMEGOqUBi0AhQdztcEg5qSTphgr64jCzCEgGzad%2Fol4kLHV%2BuamcSxq6FWlTVhqt2%2B9sHI7AVZStNqdkCdI5Yn3ZB0WEt9ZNii8tKsnEZZPdzQ7AALYJfEaDHUcLmBVw%2B7wQ%2FMdnn4gueMXOAuTpjp97hz8IR1EQeadb4q4rK%2B%2F8M1sh3X%2BLtGaGW9%2F4Gcpgt8SRBu4BklvNQYXyitR3Mz7NIxaplA0%2BNsOS&X-Amz-Signature=20eb4189b2904ffd6dcbfb15cbf2e56f07a50e076b97db03e7f8068f31ccb715&X-Amz-SignedHeaders=host&x-id=GetObject)

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
