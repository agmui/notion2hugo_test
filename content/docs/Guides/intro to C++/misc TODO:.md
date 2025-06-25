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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGXK5GZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC800WC3UINNfZtHixaZ%2BK8nzQhIk2kDFZb%2BFkOj6WLUwIgHGOMTHaIxvuF10Aj4bo4cKEJtqExiqma2OkKH1Pp6qMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBCJgYB9poUCe8WJzCrcA%2BaeBYhmRSw47l7J%2Bn%2FrAJZf%2FeItyWs2uGLyPTFwkvo%2FhL7rQXXowOIFWu2D4HiUerRwsM1UBfYsff7bR%2Fq%2Fe4SCxKR7d6hcWrd9QoikiHpDRPzJBqBUzFbqNWu7Tq5W4ZsdK61UgUxP78a%2BGJS0nKWWTLcF1uQ2u48Ha9R2a5MInjBE1gQsUQ16Qspk0tzcogEvipJ2D6cxnAAUKtwS6tJUeS7olPFylf2FS3LIWzewUf7w9yg6uc2hy6vRA%2BE4rFRg7Xyi4qAH8dTobjKXLoa%2FTqKrxXve9oFp8e2yo6TJ%2BMpakKAQ7Sq2gDLf8jqkBquP0B0jOOSWg5ufv4Uc7d04tVQoYhH2NtFWNHyiQQKfBIpO583JBx4dw0CDcrHwToJOLAn3nKnfm7bixhbpJZ8CFdkfxkdFrqYwp2oyParciKoV81ISr7Z7ypr%2FYXdH3FvquFo%2FTX3RiJc6NPcMltbdzFNAzx7D7SbHJtPbep5XkOXdzhEk03DUP8rxgo8oxa%2Fgu0x5IZCkNfZ7vmHHI%2FqpxgniuIPMpXZIsL5VO0bT2bAZMayeLYmbujARsof3lHoEwGrKpL5cNnHSkpwTOG7O2nz73GlTaMBs%2B7RQFXNpe5rpasFVJhMe5XJRMJ268cIGOqUBFfJBsHkzu53c1D2%2BFHVWRLP0%2FFuRsDTAxwOawhKluDw1PZF%2Fm0WfZFVLUmZz2EDUZ2jNxDEQiDq4Z7dz8iL1TudaL3S4Wbpd441mpqUlA8KqrkAdQ1ehkblrQBFItN7QMBTuIvytKNv4IW5%2F3mTKDDlAzVDruDROm18rSigdFwtfuQq0ECBt4rKfGcFBCEAn7vAblXjOEvLLS0v%2F0laf3zDrkWqv&X-Amz-Signature=ade4b6268e8ac2cb8b8554519df2a17a374efe75e0baf32d87987bde52894cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGXK5GZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC800WC3UINNfZtHixaZ%2BK8nzQhIk2kDFZb%2BFkOj6WLUwIgHGOMTHaIxvuF10Aj4bo4cKEJtqExiqma2OkKH1Pp6qMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBCJgYB9poUCe8WJzCrcA%2BaeBYhmRSw47l7J%2Bn%2FrAJZf%2FeItyWs2uGLyPTFwkvo%2FhL7rQXXowOIFWu2D4HiUerRwsM1UBfYsff7bR%2Fq%2Fe4SCxKR7d6hcWrd9QoikiHpDRPzJBqBUzFbqNWu7Tq5W4ZsdK61UgUxP78a%2BGJS0nKWWTLcF1uQ2u48Ha9R2a5MInjBE1gQsUQ16Qspk0tzcogEvipJ2D6cxnAAUKtwS6tJUeS7olPFylf2FS3LIWzewUf7w9yg6uc2hy6vRA%2BE4rFRg7Xyi4qAH8dTobjKXLoa%2FTqKrxXve9oFp8e2yo6TJ%2BMpakKAQ7Sq2gDLf8jqkBquP0B0jOOSWg5ufv4Uc7d04tVQoYhH2NtFWNHyiQQKfBIpO583JBx4dw0CDcrHwToJOLAn3nKnfm7bixhbpJZ8CFdkfxkdFrqYwp2oyParciKoV81ISr7Z7ypr%2FYXdH3FvquFo%2FTX3RiJc6NPcMltbdzFNAzx7D7SbHJtPbep5XkOXdzhEk03DUP8rxgo8oxa%2Fgu0x5IZCkNfZ7vmHHI%2FqpxgniuIPMpXZIsL5VO0bT2bAZMayeLYmbujARsof3lHoEwGrKpL5cNnHSkpwTOG7O2nz73GlTaMBs%2B7RQFXNpe5rpasFVJhMe5XJRMJ268cIGOqUBFfJBsHkzu53c1D2%2BFHVWRLP0%2FFuRsDTAxwOawhKluDw1PZF%2Fm0WfZFVLUmZz2EDUZ2jNxDEQiDq4Z7dz8iL1TudaL3S4Wbpd441mpqUlA8KqrkAdQ1ehkblrQBFItN7QMBTuIvytKNv4IW5%2F3mTKDDlAzVDruDROm18rSigdFwtfuQq0ECBt4rKfGcFBCEAn7vAblXjOEvLLS0v%2F0laf3zDrkWqv&X-Amz-Signature=aa85e5cbcdd7e81d6d6e6cb5a35f004847d24142b6266992f60c21cc6edbf88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
