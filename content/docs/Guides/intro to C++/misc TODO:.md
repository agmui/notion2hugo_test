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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUOG5YDY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIAiCEGvEVKVT1WmjIXwfJR3FjnK4lrdoI95Oti97Pd8kAiEA%2BcQ58%2FLYvjlQmPnaDqr09D%2BGk925qQvkzXSaujv5gVYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBsUK90vOxSSC%2F%2BDuCrcA%2BIFRusoGIloB%2FV%2BPl%2FpgEjh1BK3VwREeE2Nkzt2ZRQj58Jh2sg%2B8m9%2F638MZgIEqDzzQHKXF6CGDTcsE40s9M38pXOtYXLoC8o0ROuPIGYhgvnIBCOeFlvu8CpyYf27x5acka%2B44Aj4C1s87I2OAUxA945f%2BTdepXoLwjpvUDjYTqccHMRjOnG0BtOyhWfD6aecavEFRLni539H0Hc0i3eH9OzoY2T5geRy8XvZXTxUNr%2BuxXQZmTTTtuPP0ZvPdTjJD1QUXlTGT9Ml0opRpe3KpsapdkDfiFHO4PriAH5KHjBGHyBd7%2B3RWdT40h5bXWECKBCkp8S1LQL%2Bnqk7ePWql3jZK2RD5%2FJRlfAur7lclFRk5Xl%2B6QhD2QNtHQ61cucLV%2F9yw6NlBbzEwx65qK%2FPMNdYygmZfvcjfT3QNrtPvv346T0F6YZpLg3jjxyPHz1XMfXCy%2BbCHwzIpANVppHyq5mPQvT%2BYp5zSPjKJ4EOcNgMEYTkaYrol5rBwDghn%2FpR9ThWjK4khO3JGw%2FfVdVupOGIHSM8fnsuPgQ3YAnaMn3kF0tZtmXaHsV0pHb002QrBF1QcU9Jd1GOkK189riqR46buEvs3BGnY6NElMAYlDzmZKbOqLArNPkMMLXqzr0GOqUB7xrBtAlcT6kVNeyJsV1yYJFURHUJk0NToT0HFxDK0LRvWrXIsYuqs%2ButnDDFAeU9eEeox4ToCGBn4uJcKNxoui%2F3anX%2F250c%2B7IKZ80C1KJYzQQ3Zznt8lKM%2F5OptC8m7ydDTlJhMR%2BImLIW%2FjCy3ZJNAv87PQEvY%2F%2ByEct5rJ0g84IzzSk12kWbJItfC5sI5BbXzgEdezVuulhqjRImXbmbOhpu&X-Amz-Signature=7b958c131bbda77f66b0179ca516753d8b50dabb7962a319108ec93608cfbfad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUOG5YDY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIAiCEGvEVKVT1WmjIXwfJR3FjnK4lrdoI95Oti97Pd8kAiEA%2BcQ58%2FLYvjlQmPnaDqr09D%2BGk925qQvkzXSaujv5gVYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBsUK90vOxSSC%2F%2BDuCrcA%2BIFRusoGIloB%2FV%2BPl%2FpgEjh1BK3VwREeE2Nkzt2ZRQj58Jh2sg%2B8m9%2F638MZgIEqDzzQHKXF6CGDTcsE40s9M38pXOtYXLoC8o0ROuPIGYhgvnIBCOeFlvu8CpyYf27x5acka%2B44Aj4C1s87I2OAUxA945f%2BTdepXoLwjpvUDjYTqccHMRjOnG0BtOyhWfD6aecavEFRLni539H0Hc0i3eH9OzoY2T5geRy8XvZXTxUNr%2BuxXQZmTTTtuPP0ZvPdTjJD1QUXlTGT9Ml0opRpe3KpsapdkDfiFHO4PriAH5KHjBGHyBd7%2B3RWdT40h5bXWECKBCkp8S1LQL%2Bnqk7ePWql3jZK2RD5%2FJRlfAur7lclFRk5Xl%2B6QhD2QNtHQ61cucLV%2F9yw6NlBbzEwx65qK%2FPMNdYygmZfvcjfT3QNrtPvv346T0F6YZpLg3jjxyPHz1XMfXCy%2BbCHwzIpANVppHyq5mPQvT%2BYp5zSPjKJ4EOcNgMEYTkaYrol5rBwDghn%2FpR9ThWjK4khO3JGw%2FfVdVupOGIHSM8fnsuPgQ3YAnaMn3kF0tZtmXaHsV0pHb002QrBF1QcU9Jd1GOkK189riqR46buEvs3BGnY6NElMAYlDzmZKbOqLArNPkMMLXqzr0GOqUB7xrBtAlcT6kVNeyJsV1yYJFURHUJk0NToT0HFxDK0LRvWrXIsYuqs%2ButnDDFAeU9eEeox4ToCGBn4uJcKNxoui%2F3anX%2F250c%2B7IKZ80C1KJYzQQ3Zznt8lKM%2F5OptC8m7ydDTlJhMR%2BImLIW%2FjCy3ZJNAv87PQEvY%2F%2ByEct5rJ0g84IzzSk12kWbJItfC5sI5BbXzgEdezVuulhqjRImXbmbOhpu&X-Amz-Signature=ea5bb32e4c0e6c5b3cdfb6b8ef21c88db4619585fd9b373304b99425872c672e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
