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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIHYKZU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaM0U3kd51qBP6oy43Qm9p0O8fiEGhVrROcS3stWC5%2FgIhAOysGZH6wV8jcUxpD9WhwCnNF%2F%2B5pPlrtZit3miAjfQ%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJJN7WEukKRqePaIcq3AOp9NpIYZfjLFz0PST7mV9xgbgfaPj8wuuq2chBr80DZ1mSh1AH3gWYsms1GxjO9eXrzeclgvVQiRGWEJFSHiTNvQw3gGpuVCEHWG2iIjF5QGUrGOthAEXL6Fhz58mBMzKW8KlExsnrLJoKR6aLq086u38z5lOHqslPWhnYC%2FoE8KEl8DpsxW5lUpd9AdqmvvaW5zvmmElgeApJdKEgZuZSXtqqQFf8NT3JnIBHOYFsN0RMPlogRS58MXnMCUsSO47dII7CnTXHI1LGrXJGG4Brh7ORqmAgDt%2FBGRi78IgXjla5jQbkYqhE5SHX%2ByB7Zs3VTsrHae1zVGkTUKdUYZ%2B3kdwcnYOSDZ6CBQwxuMmmjbZrOHjA7ZGO4bFEh3qI4XxekdMj5dm2UJ8%2FUxUQ6%2FSa%2Fmft0ZgheI6QQJoGWbNmhzl2x5CmnIP9qT5CmveZqedrIImUKREO7nNNnchgA7Bb5H%2BkzRHsso52cQIywy2HdUR4%2BbqDbGcRqM05pZMMLcEfzQQJmnuLU57wHp3LrYkWLRBP%2FhqW3O41OH8HXkm0K6FV0I9ti%2FCIeTxbNlVT5Oux1r9rMQURz84Ignr2VMXxcOzwjC1uTEAx%2Bf%2Bz0al9GBTTvN6LoxxFeMdn%2FzCm4pPDBjqkAXcvRPj6kNImz8Ol8cN0vjPjrpqSigOONALfJo2e2oBPXjqd7viPzWusyj1zUo9cFgNybf70ibdwDNZ5vmQiTwJ%2BShG5onbTV%2FmzQ2%2FSAJNodEgzrg5xcPXdH2hNNedgMpU2cVJzQcECS2aqWQmvQFzbaO6hIB4OxnhWYCDYoVMURVANOadudEZ8Fsv2rQu7hawZ6BEpTOpdpKUnE1WZxggQzn%2Fm&X-Amz-Signature=2a379ee371212f693e162c48bf35b391d2592ce48d3565907744e82c9c686d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIHYKZU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaM0U3kd51qBP6oy43Qm9p0O8fiEGhVrROcS3stWC5%2FgIhAOysGZH6wV8jcUxpD9WhwCnNF%2F%2B5pPlrtZit3miAjfQ%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJJN7WEukKRqePaIcq3AOp9NpIYZfjLFz0PST7mV9xgbgfaPj8wuuq2chBr80DZ1mSh1AH3gWYsms1GxjO9eXrzeclgvVQiRGWEJFSHiTNvQw3gGpuVCEHWG2iIjF5QGUrGOthAEXL6Fhz58mBMzKW8KlExsnrLJoKR6aLq086u38z5lOHqslPWhnYC%2FoE8KEl8DpsxW5lUpd9AdqmvvaW5zvmmElgeApJdKEgZuZSXtqqQFf8NT3JnIBHOYFsN0RMPlogRS58MXnMCUsSO47dII7CnTXHI1LGrXJGG4Brh7ORqmAgDt%2FBGRi78IgXjla5jQbkYqhE5SHX%2ByB7Zs3VTsrHae1zVGkTUKdUYZ%2B3kdwcnYOSDZ6CBQwxuMmmjbZrOHjA7ZGO4bFEh3qI4XxekdMj5dm2UJ8%2FUxUQ6%2FSa%2Fmft0ZgheI6QQJoGWbNmhzl2x5CmnIP9qT5CmveZqedrIImUKREO7nNNnchgA7Bb5H%2BkzRHsso52cQIywy2HdUR4%2BbqDbGcRqM05pZMMLcEfzQQJmnuLU57wHp3LrYkWLRBP%2FhqW3O41OH8HXkm0K6FV0I9ti%2FCIeTxbNlVT5Oux1r9rMQURz84Ignr2VMXxcOzwjC1uTEAx%2Bf%2Bz0al9GBTTvN6LoxxFeMdn%2FzCm4pPDBjqkAXcvRPj6kNImz8Ol8cN0vjPjrpqSigOONALfJo2e2oBPXjqd7viPzWusyj1zUo9cFgNybf70ibdwDNZ5vmQiTwJ%2BShG5onbTV%2FmzQ2%2FSAJNodEgzrg5xcPXdH2hNNedgMpU2cVJzQcECS2aqWQmvQFzbaO6hIB4OxnhWYCDYoVMURVANOadudEZ8Fsv2rQu7hawZ6BEpTOpdpKUnE1WZxggQzn%2Fm&X-Amz-Signature=6bf080d2acf187a5ae4438628bc59a72ef268b662580831999407037f76fd389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
