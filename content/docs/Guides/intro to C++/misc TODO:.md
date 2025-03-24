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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYCXGVV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWJfiX31y%2BXcLx5Uy02Z0smb3JAdOs9buCD5UEc9xDoAiEA2TkXjs%2BvZ5Fx3PfzymtWLEf0koICSx7xT53g6JGUOuIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbVUscCJPjp%2F1rrxSrcA6lkSj0hPkpyMRQeJI6bpOxcxEuTLPojf52bCqE%2FGqZbdqsi23fuQ445QRVZ6jzFJU%2B76IiANIWdkXeQfUHd%2FFFNAjPXaC0H3Xg26YBJ2L7UG4Damqpi88QpM9yRti3%2FgWrhYF0%2BclCCTnsV4uC%2BFbRPNJH2IIGx7nFc7j07N4MN8WpKxKvfdBuPLeIU83%2Br%2FiuL0YlSavDdGMY4iMGal52WzqtCC6PGSkI6PALZDfWUUnrDng6p2XS%2BP9lh%2BPqjomZ4dVhDgnz2dDXJkrQof8nSqlgJzidWODTZueo4326dLPOU%2BiITwDPRb1Rbv6X3QkFZam%2Bgel5ec3bt7ondrvGQv6oIU2BQaS0aL111e%2Fhvb7oOUgYzebSyDs1sXzlvcwB9CGBN43Tz4ZWtvqz%2Bd8XK1KaaEQ9NLiE6xGdW4FZ9A5QttmkxnDWhxo17qbHLIZRSOFFoFGkxJ7gTprUsUJwRNRCx6OdmU9YsWZi7dDuhsOT4yAxZTRWm%2FedY0T3fxeMyvWCQ2wZqqfXGluD1pLDFZMUglfP5pjLoIWWlDv5KWrMKwI7I6Ve6EX03Kgzx9KL3bQe0BRZRbAS9uy5%2FCBXfM9i6Tc1XFRCv%2B5HozVLF8z%2B3xJi4sgWkRr50MKCPhb8GOqUB5dxr60TrJFVPU1Sk58KXpF3T5pNBe1Z9%2BLBaCj%2FEqOkP5yG88dgIjHvHLI93HypygWx7QoP1DjEhmNQTae0AzUM7l%2FT1%2Fy1VseylStZ7UDJxS8H88s4ByWcQJU7KT1IVosfEB0yqty%2B3vvcYV%2FZJ7tIo6X1BxoaZWSVXWn3cVRkxhm%2BJokohYYMQVjruBp7zD%2FOIhc%2Bwa2w%2BFi38KCVUNB8nKJRj&X-Amz-Signature=7f341654337e1762570d8061093dce6d04332dcbe5b40c892343f5fd918e1f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYCXGVV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWJfiX31y%2BXcLx5Uy02Z0smb3JAdOs9buCD5UEc9xDoAiEA2TkXjs%2BvZ5Fx3PfzymtWLEf0koICSx7xT53g6JGUOuIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbVUscCJPjp%2F1rrxSrcA6lkSj0hPkpyMRQeJI6bpOxcxEuTLPojf52bCqE%2FGqZbdqsi23fuQ445QRVZ6jzFJU%2B76IiANIWdkXeQfUHd%2FFFNAjPXaC0H3Xg26YBJ2L7UG4Damqpi88QpM9yRti3%2FgWrhYF0%2BclCCTnsV4uC%2BFbRPNJH2IIGx7nFc7j07N4MN8WpKxKvfdBuPLeIU83%2Br%2FiuL0YlSavDdGMY4iMGal52WzqtCC6PGSkI6PALZDfWUUnrDng6p2XS%2BP9lh%2BPqjomZ4dVhDgnz2dDXJkrQof8nSqlgJzidWODTZueo4326dLPOU%2BiITwDPRb1Rbv6X3QkFZam%2Bgel5ec3bt7ondrvGQv6oIU2BQaS0aL111e%2Fhvb7oOUgYzebSyDs1sXzlvcwB9CGBN43Tz4ZWtvqz%2Bd8XK1KaaEQ9NLiE6xGdW4FZ9A5QttmkxnDWhxo17qbHLIZRSOFFoFGkxJ7gTprUsUJwRNRCx6OdmU9YsWZi7dDuhsOT4yAxZTRWm%2FedY0T3fxeMyvWCQ2wZqqfXGluD1pLDFZMUglfP5pjLoIWWlDv5KWrMKwI7I6Ve6EX03Kgzx9KL3bQe0BRZRbAS9uy5%2FCBXfM9i6Tc1XFRCv%2B5HozVLF8z%2B3xJi4sgWkRr50MKCPhb8GOqUB5dxr60TrJFVPU1Sk58KXpF3T5pNBe1Z9%2BLBaCj%2FEqOkP5yG88dgIjHvHLI93HypygWx7QoP1DjEhmNQTae0AzUM7l%2FT1%2Fy1VseylStZ7UDJxS8H88s4ByWcQJU7KT1IVosfEB0yqty%2B3vvcYV%2FZJ7tIo6X1BxoaZWSVXWn3cVRkxhm%2BJokohYYMQVjruBp7zD%2FOIhc%2Bwa2w%2BFi38KCVUNB8nKJRj&X-Amz-Signature=982ebb387343a761b30fbcf977b78c8bbc5adc625b0d7858c730e8960a4baba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
