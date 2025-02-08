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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZKU6A3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID3napXFpvDhugJvtXATHSvfLJwUxd0vvaieZGdRfYcVAiBMK19f3v7qPb8vBXRxslLXNIGPoB0DvLLzQYLBsbMYgSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnR9RCG4D%2BZw5iHeQKtwD8X%2FnuJ%2F5W5rdyfjPc6WSB8%2FVVeXzaMzzFZLBzy8f0VJ8RChGVaJezB4BtHMfDGyYzQ71Anh5Z6Dw%2BMe%2FF57XcOJSYsWShSJmamtnZNI3w7qWur2CO8YhzNTJypC3va6ZYg2NRshAhJtZj2ff%2BN%2F7fPPpIFwYpW8bATHeOInLzYQu4pgJq73FeGVYIGvNURuuk%2BDDQG4jO8Poe%2FG7L%2B9LDZCrTSfU1mwM%2Fpsel1HPzLiWFCxxFdgOjeEJQxNVArG5ji1Pqm1Q2sdIrfDXLbfgFjM1IQaJhizkdDRKLzXzAVOOd8iFZA15W3vGtdawRvjcHPBrNpSZuQz7kBwW2BUKnidaucIqLIxbZZc2O%2FOMxuXTLcj5UxukIoTG3Wjo9%2B1sfXMAXa9%2Fhn4EMlDEWOik0nkEj53lw7tkRfLTtkd4aZfzBYd%2FpKbU%2BJIqr6NfQmALckb6J8qUw%2BWYOwxYQV6FbM20pXUGFxE9SYs1MWT3gXUB8puaJozwRr3OyHJbHh1ZfDq3hDHnVbkCrnyqS6Z8NmpRwe1wqxjEXlkc%2BVhGYd7AMAbF2PuQMAiAFVlCCQdGXbg8rZpMKiN1AHQIhk5HRqUCDhk0af2qxPjbj8LSH4mmrcr5ATR3FaaipIswuIadvQY6pgHoKJmAh7myjmsEemN1ADHNR2rETVjBwv7zo5r6WJNjLnIb2JzpneORsbmWs29HleSDoPfHfUjct4RAPdmhqg%2FJmquFbCHUpRFcHWvvWoXDBoLOOHrhNymfxEw1PJWXOew0qheGwdBvjX0rET6NvtfNyzeRKLIISKz8uVCOQT9%2FbEQsBE%2F1DZTu0YfYVa%2BuXmS6%2FVbRIniQZJ3Z7EO0VepKVCCHDW%2B9&X-Amz-Signature=80af089989be5e388bc1cff7c654e6fb6b81c17447f00f1c84901e98eeae6ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZKU6A3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID3napXFpvDhugJvtXATHSvfLJwUxd0vvaieZGdRfYcVAiBMK19f3v7qPb8vBXRxslLXNIGPoB0DvLLzQYLBsbMYgSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnR9RCG4D%2BZw5iHeQKtwD8X%2FnuJ%2F5W5rdyfjPc6WSB8%2FVVeXzaMzzFZLBzy8f0VJ8RChGVaJezB4BtHMfDGyYzQ71Anh5Z6Dw%2BMe%2FF57XcOJSYsWShSJmamtnZNI3w7qWur2CO8YhzNTJypC3va6ZYg2NRshAhJtZj2ff%2BN%2F7fPPpIFwYpW8bATHeOInLzYQu4pgJq73FeGVYIGvNURuuk%2BDDQG4jO8Poe%2FG7L%2B9LDZCrTSfU1mwM%2Fpsel1HPzLiWFCxxFdgOjeEJQxNVArG5ji1Pqm1Q2sdIrfDXLbfgFjM1IQaJhizkdDRKLzXzAVOOd8iFZA15W3vGtdawRvjcHPBrNpSZuQz7kBwW2BUKnidaucIqLIxbZZc2O%2FOMxuXTLcj5UxukIoTG3Wjo9%2B1sfXMAXa9%2Fhn4EMlDEWOik0nkEj53lw7tkRfLTtkd4aZfzBYd%2FpKbU%2BJIqr6NfQmALckb6J8qUw%2BWYOwxYQV6FbM20pXUGFxE9SYs1MWT3gXUB8puaJozwRr3OyHJbHh1ZfDq3hDHnVbkCrnyqS6Z8NmpRwe1wqxjEXlkc%2BVhGYd7AMAbF2PuQMAiAFVlCCQdGXbg8rZpMKiN1AHQIhk5HRqUCDhk0af2qxPjbj8LSH4mmrcr5ATR3FaaipIswuIadvQY6pgHoKJmAh7myjmsEemN1ADHNR2rETVjBwv7zo5r6WJNjLnIb2JzpneORsbmWs29HleSDoPfHfUjct4RAPdmhqg%2FJmquFbCHUpRFcHWvvWoXDBoLOOHrhNymfxEw1PJWXOew0qheGwdBvjX0rET6NvtfNyzeRKLIISKz8uVCOQT9%2FbEQsBE%2F1DZTu0YfYVa%2BuXmS6%2FVbRIniQZJ3Z7EO0VepKVCCHDW%2B9&X-Amz-Signature=72116c02e53aea3c72a08f2faf82e67a221ec296f7125981894952a910bada82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
