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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNWOC6O%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILBVBMhjL%2BPuhxPHJM5tYIa3hJVUSbx%2BHnKqPvHlwVQIhAMcKcuAV0s%2FxhfFK1emu0B2NCsbGWO%2Fz%2BleBF5NtqUyRKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbqF%2BdKDlqFVUg0Wwq3AOC1CFf95EWQWxXJi6oJxpuwvoVziTGpKnky59ZZs73LptdOlQICpinwHbMR%2FWYO0BoCGTWsN%2FtIEuwe6c5PTfh4h%2B9RLFwT7kk9qEUW2JZkZAdulym6pGhNVt3jxRSJsOhPuCDmJ%2B874vvq9C2IdtpvCSn9qBzPhbMaHvF0trSI7HvIWtIR6ZGHPNn4%2BaFYpG5Ue4V8KPUA3DYQNGsiqnTeCNPRXgRtsfTmJTc3vBmy4B3nK5pIsh8tmmsgFhMfirhCSRUkxGiDGnfPPpKZ19rfSkNtXsrxfm8evsRIjD0%2BOjuoq9Wr4jdKY1g7pxRXYu5pkcjktxvRC9uhCLT7wvW6BHGzQfhhH9OJBhFMiqkrOknF7uxkm57RjpaLJQm84J7de5k190vvMdSKR%2FbghDOswMBdsBM27buV0nZc92LWtwilw5RPQa6oqlUHuRnImDoaVY9esxSEu3Y%2BnOUOfjAe1%2Fn5DlRQ3LsMAKfoCeEPCI124AgfuH0UNo9YX2yRyirX81ZHmOPrABJQ61UkTjuyHVZEwHzVByudm9nOauSAL1Er6NW9lXmCetHjX7XkMX09vppuT4WTXhBxW1H2m%2FFuKCAKqwxqhLYKF0AcetgsXP3PL9deTVJbyNl%2FTDY%2Fd%2FBBjqkAeWk6sEk5iMHnHx1jmwsej3teLIZZx7amU3BE7YcDLy0PrlvDDTxDYntHk61a8YPF7o1O1nySw5sPXLN4HXIQlTIuSDhJK%2FbbQNqAwTUdFE0xCW4V%2B6QWuHjsb8CnD1%2BTIyZMcrjUtujD9eYAp%2BWtzF%2Fn1dBvQfFNYFZI2OVEuYu6ktR%2BRuxtbaC6i5jJ%2FuOJFQAXO0a0F8%2Bz%2Fozc%2FOIZ8jY313i&X-Amz-Signature=2cb53540099e40ae285c91b4dc8eed659dfba8d90d64788abf3803f86858047b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNWOC6O%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILBVBMhjL%2BPuhxPHJM5tYIa3hJVUSbx%2BHnKqPvHlwVQIhAMcKcuAV0s%2FxhfFK1emu0B2NCsbGWO%2Fz%2BleBF5NtqUyRKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbqF%2BdKDlqFVUg0Wwq3AOC1CFf95EWQWxXJi6oJxpuwvoVziTGpKnky59ZZs73LptdOlQICpinwHbMR%2FWYO0BoCGTWsN%2FtIEuwe6c5PTfh4h%2B9RLFwT7kk9qEUW2JZkZAdulym6pGhNVt3jxRSJsOhPuCDmJ%2B874vvq9C2IdtpvCSn9qBzPhbMaHvF0trSI7HvIWtIR6ZGHPNn4%2BaFYpG5Ue4V8KPUA3DYQNGsiqnTeCNPRXgRtsfTmJTc3vBmy4B3nK5pIsh8tmmsgFhMfirhCSRUkxGiDGnfPPpKZ19rfSkNtXsrxfm8evsRIjD0%2BOjuoq9Wr4jdKY1g7pxRXYu5pkcjktxvRC9uhCLT7wvW6BHGzQfhhH9OJBhFMiqkrOknF7uxkm57RjpaLJQm84J7de5k190vvMdSKR%2FbghDOswMBdsBM27buV0nZc92LWtwilw5RPQa6oqlUHuRnImDoaVY9esxSEu3Y%2BnOUOfjAe1%2Fn5DlRQ3LsMAKfoCeEPCI124AgfuH0UNo9YX2yRyirX81ZHmOPrABJQ61UkTjuyHVZEwHzVByudm9nOauSAL1Er6NW9lXmCetHjX7XkMX09vppuT4WTXhBxW1H2m%2FFuKCAKqwxqhLYKF0AcetgsXP3PL9deTVJbyNl%2FTDY%2Fd%2FBBjqkAeWk6sEk5iMHnHx1jmwsej3teLIZZx7amU3BE7YcDLy0PrlvDDTxDYntHk61a8YPF7o1O1nySw5sPXLN4HXIQlTIuSDhJK%2FbbQNqAwTUdFE0xCW4V%2B6QWuHjsb8CnD1%2BTIyZMcrjUtujD9eYAp%2BWtzF%2Fn1dBvQfFNYFZI2OVEuYu6ktR%2BRuxtbaC6i5jJ%2FuOJFQAXO0a0F8%2Bz%2Fozc%2FOIZ8jY313i&X-Amz-Signature=2a5b8c07a4274c059ee5784b5a9709a38ade0c3a2936adc8a337770d85341ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
