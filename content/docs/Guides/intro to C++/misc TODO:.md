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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MO25GFH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP2dFJ%2BqlT2%2FJcQ2uSIrIaj8bYI0eRS9Gnu%2F40aMYCmAIhANiehg4QUPwaePBilf5DLtrDODWpygjeWKBT9%2BZcxu7kKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbsJwDZqHRX%2B4%2FIq3ANZBn2umLw4WBK6yxmqZNDwZSAEJwoGhlbkrH0r5c0Mh8GATB8FXztqIXlBPMZDcHzxhZAv%2BEdalBx9A3NTy1EsXS8H7lRUgS%2Bq7DMmT5e4oAtL%2FHdSpqtL72m%2FGzhBoJwZAsw97BaGDHEp26nWjwaXkntFI8kcKAXdL3ln6F1WX4K1QlciSxYoLbNfznKFA1cpvS8rjzsI6ZN7MisRigNjUuVQyfO4SAvC7lzvkSgXr5cAKlA9a7CfctWCVB6keMprwhcyEkLG%2FF9uCVAdwxWZkUnZBl2rJGI8akDgfJtnbTbzNXyb7Jig6fLImNUk2dLdjmD1481Ry53R5NLC2MbL7LlPJAeLlyX4BjSBSVNBJAk3JGmz0RwlMA49iomeZVKyHYPwmRP0UQM%2Fp4T4CB%2BqyRWyVFfLnni3BlsFHBpIQOdlgVgSnJ71tJAxPNi2zgkJEF8sSHNt3nbTJ1nk2D59YIN%2BcrFZsqRBcFjfxyLUaEpKmIY2EnQwOKmyoTElYLgTija8J%2Bb4GbbflPSWzO2%2BMK%2BiFQ46Sn4jB4Ep8aCDVH4cu9Vn6QQAcgjo5AX1Oro0tiSD6FQOyKIZTzAWk8v8BxciRSDRpN6x4r3cJHvBu%2FhRm%2Be6c%2Bw2QnnWLzC4i7nDBjqkAdz2fvlcQKMsF%2F7mO7aDhnG2bnzlMb6V8xArPmOZvujx7fLbfd3nT8h0WS7uAh%2FD6p0sWAjmtO3LBT%2BmuOTHTZcClW4STLpOZfOhHhAICaxa8boNa7hCX4iuE8hDXjxvO6fdDttv2A3hqBwF%2BSmT%2BIAJO%2Bjd7XrflV0TOmO8gMtdvXuEgVLFcqI6lRtoAno3c%2BXiraa%2FgMQwDQHRwGad9pQG0p%2FL&X-Amz-Signature=f8375a8c63c0ba03980178bf81c316b8dd48a5a35ddd937cd9ac6761475208b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MO25GFH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP2dFJ%2BqlT2%2FJcQ2uSIrIaj8bYI0eRS9Gnu%2F40aMYCmAIhANiehg4QUPwaePBilf5DLtrDODWpygjeWKBT9%2BZcxu7kKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbsJwDZqHRX%2B4%2FIq3ANZBn2umLw4WBK6yxmqZNDwZSAEJwoGhlbkrH0r5c0Mh8GATB8FXztqIXlBPMZDcHzxhZAv%2BEdalBx9A3NTy1EsXS8H7lRUgS%2Bq7DMmT5e4oAtL%2FHdSpqtL72m%2FGzhBoJwZAsw97BaGDHEp26nWjwaXkntFI8kcKAXdL3ln6F1WX4K1QlciSxYoLbNfznKFA1cpvS8rjzsI6ZN7MisRigNjUuVQyfO4SAvC7lzvkSgXr5cAKlA9a7CfctWCVB6keMprwhcyEkLG%2FF9uCVAdwxWZkUnZBl2rJGI8akDgfJtnbTbzNXyb7Jig6fLImNUk2dLdjmD1481Ry53R5NLC2MbL7LlPJAeLlyX4BjSBSVNBJAk3JGmz0RwlMA49iomeZVKyHYPwmRP0UQM%2Fp4T4CB%2BqyRWyVFfLnni3BlsFHBpIQOdlgVgSnJ71tJAxPNi2zgkJEF8sSHNt3nbTJ1nk2D59YIN%2BcrFZsqRBcFjfxyLUaEpKmIY2EnQwOKmyoTElYLgTija8J%2Bb4GbbflPSWzO2%2BMK%2BiFQ46Sn4jB4Ep8aCDVH4cu9Vn6QQAcgjo5AX1Oro0tiSD6FQOyKIZTzAWk8v8BxciRSDRpN6x4r3cJHvBu%2FhRm%2Be6c%2Bw2QnnWLzC4i7nDBjqkAdz2fvlcQKMsF%2F7mO7aDhnG2bnzlMb6V8xArPmOZvujx7fLbfd3nT8h0WS7uAh%2FD6p0sWAjmtO3LBT%2BmuOTHTZcClW4STLpOZfOhHhAICaxa8boNa7hCX4iuE8hDXjxvO6fdDttv2A3hqBwF%2BSmT%2BIAJO%2Bjd7XrflV0TOmO8gMtdvXuEgVLFcqI6lRtoAno3c%2BXiraa%2FgMQwDQHRwGad9pQG0p%2FL&X-Amz-Signature=34720088f3bc5e51c8567bb8ce451f004832c0378044771a870e04b7e5d886a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
