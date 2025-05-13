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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP7PWJT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDqXDq1b5nukSV10OnAGJeSaXxmSqsHRHAmp5kC14dooAiEAisl0avoCmpnYQDTqatpzsKkRBWsQu6wdzu2e46L%2BE3gqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyvZ1zqBMmDrH1C%2BCrcA8fznndzTbQv6dZe2Mf9qy2JIxgjOq2Kve%2F2VfFEUaQdBupbZcfM20Mv%2BO6gCfWd6PFP2woSMdZU0epf%2Fv018Thtf0W3zCvKnswhxDvcT0Qzw8mKzNc8vhYHcBCce4X0algw27ywnrwGRB5suW81EHb9vgyvCXIEhg3fCXx7qVGAg9vcC45SaWfQbSA44zrB5eqsAjjgZ8LSpeDs9JyeoNNgiB5K%2BBsw0%2BQUaoJcLHqMqBiTlFfHjXuolq34khwf9Utv97MhN40n2KWtojCNJajjA%2FanS1uRHwhmdfKo%2BtfJ7ara9oO1x%2F56WdimsT315l4FcR0QAwMwGXfUCAganRYjzBHA%2BgNiUKhMOuf3%2FOO5RUDJZBB%2BhItDcEDn8E9%2B5vdV9%2BerGhqxpCZDLPtIgKaxGICxOyvm0V7zULl3532JI4Y8Zn%2Ffm3xBhrlk8PgQliTWhHVCDc6ZWZXgFMWoZIo3%2BGwlrPqTWsbatzxZ17gPjHx%2B%2FUKogCX2V6HljuJPG4fOdZKT0lxZHVnapLXqqTiHLzUVPYAb%2BjtLW8izYmmzDWUIqj78uRB5nDkOCD6ac7ynONEdEagVguZxLz6e4spgFEKvkI3RHwNiJGWGWlzyCDzZYspKUau7S5KMML6KjMEGOqUBtE2tTTTlfpQrSefxJkZvKZkOKDe6zCavuO34%2F7mUddThW9FRHt8gALeV2cAjioO%2BV%2F4oOGL7aqRUB6%2F9GGeWlvGc5miGEmQUR%2Bw7ES84LzOKsRJpCkvzlOh63TWP%2BE8LQIsgeY0MwJN28ejZbLbYmi41zOpT6dt2H1sCHvTXE6dGgbRy6GmJb6oYnJOdgzZzxzEw0JJb0x%2FFEOO%2FYYMsLbYZ9CSC&X-Amz-Signature=342494a350bd00fcccc90f9385d4397ce9cae4e37cdcd52ad9565cca530dda4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP7PWJT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDqXDq1b5nukSV10OnAGJeSaXxmSqsHRHAmp5kC14dooAiEAisl0avoCmpnYQDTqatpzsKkRBWsQu6wdzu2e46L%2BE3gqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyvZ1zqBMmDrH1C%2BCrcA8fznndzTbQv6dZe2Mf9qy2JIxgjOq2Kve%2F2VfFEUaQdBupbZcfM20Mv%2BO6gCfWd6PFP2woSMdZU0epf%2Fv018Thtf0W3zCvKnswhxDvcT0Qzw8mKzNc8vhYHcBCce4X0algw27ywnrwGRB5suW81EHb9vgyvCXIEhg3fCXx7qVGAg9vcC45SaWfQbSA44zrB5eqsAjjgZ8LSpeDs9JyeoNNgiB5K%2BBsw0%2BQUaoJcLHqMqBiTlFfHjXuolq34khwf9Utv97MhN40n2KWtojCNJajjA%2FanS1uRHwhmdfKo%2BtfJ7ara9oO1x%2F56WdimsT315l4FcR0QAwMwGXfUCAganRYjzBHA%2BgNiUKhMOuf3%2FOO5RUDJZBB%2BhItDcEDn8E9%2B5vdV9%2BerGhqxpCZDLPtIgKaxGICxOyvm0V7zULl3532JI4Y8Zn%2Ffm3xBhrlk8PgQliTWhHVCDc6ZWZXgFMWoZIo3%2BGwlrPqTWsbatzxZ17gPjHx%2B%2FUKogCX2V6HljuJPG4fOdZKT0lxZHVnapLXqqTiHLzUVPYAb%2BjtLW8izYmmzDWUIqj78uRB5nDkOCD6ac7ynONEdEagVguZxLz6e4spgFEKvkI3RHwNiJGWGWlzyCDzZYspKUau7S5KMML6KjMEGOqUBtE2tTTTlfpQrSefxJkZvKZkOKDe6zCavuO34%2F7mUddThW9FRHt8gALeV2cAjioO%2BV%2F4oOGL7aqRUB6%2F9GGeWlvGc5miGEmQUR%2Bw7ES84LzOKsRJpCkvzlOh63TWP%2BE8LQIsgeY0MwJN28ejZbLbYmi41zOpT6dt2H1sCHvTXE6dGgbRy6GmJb6oYnJOdgzZzxzEw0JJb0x%2FFEOO%2FYYMsLbYZ9CSC&X-Amz-Signature=cd98e2a289f453b75ea3e24bad20b6d2e299e486e22edff25b34184ee614af3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
