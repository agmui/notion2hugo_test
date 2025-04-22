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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6J4CKOJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBIXheF808Q36FZQTMDxMr6egtuxCjxal%2BjNY2g62%2FJpAiEAkgzE5KzNoD3gd1bdRJyiG82gKLsOiGIxS59Pa9Yki6IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR53xAUmTgidThewSrcA87zhwrf21PqV8SZbGI%2FLfBIGPcvAIr6IK7XVjsT7CtMJifssetdWNCUdbThtHwsieCIf5Q4kI9sWo28615ETIpWmR7zbqDL%2FjMcoGLlTkg3jbXO%2BszMhntz%2FnH%2FEdN1oSNUhwYOj1UEWRtcDzZYqmrmZmoNWdIn3KN%2BXLNyqQb%2FnU%2FaAxV4JWuHyYdPQv0rJxeAi6FjBUzdtUuODiEYM0FuSo9gqUvr9ERthyq8oAYbOJaU%2FBImXE9mHGz4Qsne6PKdDpE8TrNYj5dlCqmYA5yCII7%2FBqpXSasyRMsLE3BAshjk0129WKSVRNxsaYt%2Ba8yC8%2B5B2bMEabBgE39r41TgnSYTKxIh80u6KylndTLEP8Fqr56cYVt7gIzvPmAju%2BrtxFk1D%2F27rT9R67Kj7JNPgfcvcfcN8tiFk6YUydV15W1TN%2FYFhc9ekxF0bzC9MnejPcfmKoqKvcUIEoclaa0kK9yYcq3x3GPZMQXRKsnSZkx2iz%2FcrEGsqwLmgfoQ6UwDtc6jgGvh6o9H%2BurPjRjlvqZDBhWLW%2Bm7PgaZv%2FkAa3ubYLKqdOmj2Uxl%2FqUG3sqgmsqXVqS2VH%2BAGurwWXiSBpw49dM2hGsfUavszTonTVJcLKSNP2YYGsDpMJKLncAGOqUBIArzwWwPdd6wQXuUQ897y%2FnQlhoLvcOK1k7pzpZTDRCviZjrhlZphxsC0%2FwnbmgxRcnM03gRXot071EYRfB5vLCxlkZzTk57qXP9vV0XrKqAePnX8G7s7SYcJMCpNIMA6CKPiqu%2F6mygHW0TZo1dMPQiCn6Ex5d7RqNJ3XZkqbYqjbAE87sE2a3n8nFOqtY5RBeydjBgG9r6s1gD0Iq5cz%2BzDtxl&X-Amz-Signature=af4cd6e0fb8da97c5471725827644dd81e86bbd75a1d0f49b8f012cc25ac2f99&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6J4CKOJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBIXheF808Q36FZQTMDxMr6egtuxCjxal%2BjNY2g62%2FJpAiEAkgzE5KzNoD3gd1bdRJyiG82gKLsOiGIxS59Pa9Yki6IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR53xAUmTgidThewSrcA87zhwrf21PqV8SZbGI%2FLfBIGPcvAIr6IK7XVjsT7CtMJifssetdWNCUdbThtHwsieCIf5Q4kI9sWo28615ETIpWmR7zbqDL%2FjMcoGLlTkg3jbXO%2BszMhntz%2FnH%2FEdN1oSNUhwYOj1UEWRtcDzZYqmrmZmoNWdIn3KN%2BXLNyqQb%2FnU%2FaAxV4JWuHyYdPQv0rJxeAi6FjBUzdtUuODiEYM0FuSo9gqUvr9ERthyq8oAYbOJaU%2FBImXE9mHGz4Qsne6PKdDpE8TrNYj5dlCqmYA5yCII7%2FBqpXSasyRMsLE3BAshjk0129WKSVRNxsaYt%2Ba8yC8%2B5B2bMEabBgE39r41TgnSYTKxIh80u6KylndTLEP8Fqr56cYVt7gIzvPmAju%2BrtxFk1D%2F27rT9R67Kj7JNPgfcvcfcN8tiFk6YUydV15W1TN%2FYFhc9ekxF0bzC9MnejPcfmKoqKvcUIEoclaa0kK9yYcq3x3GPZMQXRKsnSZkx2iz%2FcrEGsqwLmgfoQ6UwDtc6jgGvh6o9H%2BurPjRjlvqZDBhWLW%2Bm7PgaZv%2FkAa3ubYLKqdOmj2Uxl%2FqUG3sqgmsqXVqS2VH%2BAGurwWXiSBpw49dM2hGsfUavszTonTVJcLKSNP2YYGsDpMJKLncAGOqUBIArzwWwPdd6wQXuUQ897y%2FnQlhoLvcOK1k7pzpZTDRCviZjrhlZphxsC0%2FwnbmgxRcnM03gRXot071EYRfB5vLCxlkZzTk57qXP9vV0XrKqAePnX8G7s7SYcJMCpNIMA6CKPiqu%2F6mygHW0TZo1dMPQiCn6Ex5d7RqNJ3XZkqbYqjbAE87sE2a3n8nFOqtY5RBeydjBgG9r6s1gD0Iq5cz%2BzDtxl&X-Amz-Signature=c83df72e12f57f387005df52496118ed248aa1824376206d2cb7c578372c0665&X-Amz-SignedHeaders=host&x-id=GetObject)

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
