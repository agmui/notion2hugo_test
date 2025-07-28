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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFA2KHME%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCbGK4yQ4HHrhG2fYtPk2fyZ8ZKHOiy6PVLZoVHwNUlxgIhAIIxXmRPUdZvh16XbpjrVKPXsG7lj0tObn5kH6XZ7hmHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOMyrGN9cr%2Fi49%2BMwq3ANy441fb9SYmcAakdHbkBAatg%2F1eYmWFuRht2JLdiwW346Bmw3yIRIglQvS6gQaD1odLIyfScjL1P9r6A0dxmynp7gCCTFPVXwel24qpE8L5QfwPxFjbo5ZDenC6J8d6vJbdgvwVCYQyMlQlC6BClRgP%2B%2FJjb7g0OGbly5Z%2FBd0VmWLwhR%2FCFMJlYIyfZbOepfvmP9xK6fBDmqouO%2F%2Fi1v6K%2BZ6ZXEiYZpsEvsOIFZc5yctVjrTlmjvYjUj99XUeSzxOaxGLLSSMUqeujwMHTY5oXDB84Ww0dk6k0eO33zfQWK0%2F0BGcYT4Q36EqWVemX80Ut%2Bc2IDsj7JsoC7zM2kyYYJdEn9zL6k4vr3BQ%2FaLr%2B8BLejcXiB0quEgUkhwo66AOFzEglrGhzeVTX95CRya0A7PjqphbOvFyUxxI%2BmEGYJFBoA6QnGC1tC6NPsNDj2BVJ%2FPgs9oH3ii2CB%2B6UJiaLV69RgZ%2FMp5X1nJwOw97iupvSj64V5RamXJshv%2FbzoTO0CVh5gr7Oq1Yh%2B69c%2BJeToRFmYCmjj%2F4ubL9lDiQGudtSt6IQ0N7ZClm%2FVBcmOm405bupz8ILJy4Cn1WsqY3MLh2iOnrwL8rSU0dGxUqTD1R8PH9HkUg5nH0DCI6pzEBjqkAWHwOIOrS2VYxmL9Ygr%2FDRO5Tc6JStmwli%2FyQ6xX9biVojU1tZmTuV5sh4koG1EIOdBLEs696kDu1pVhMo7CvIqb2wcBJ%2BxIrfy93tOQLEpeHF2dElIyHITVn6aHG7N%2B6%2FNtfE67HchCdlO3FpWKwGyM1Mns%2BkmUr9RwVuq0HVStU9bEmKV6flwLELHg9NyzcAEOmuAArdwkq3nqdYYzocutkXcY&X-Amz-Signature=374c3ab3e389906baafcfa5b6b87bbc19b04913dbcdd1d95b7002e9f40762151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFA2KHME%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCbGK4yQ4HHrhG2fYtPk2fyZ8ZKHOiy6PVLZoVHwNUlxgIhAIIxXmRPUdZvh16XbpjrVKPXsG7lj0tObn5kH6XZ7hmHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOMyrGN9cr%2Fi49%2BMwq3ANy441fb9SYmcAakdHbkBAatg%2F1eYmWFuRht2JLdiwW346Bmw3yIRIglQvS6gQaD1odLIyfScjL1P9r6A0dxmynp7gCCTFPVXwel24qpE8L5QfwPxFjbo5ZDenC6J8d6vJbdgvwVCYQyMlQlC6BClRgP%2B%2FJjb7g0OGbly5Z%2FBd0VmWLwhR%2FCFMJlYIyfZbOepfvmP9xK6fBDmqouO%2F%2Fi1v6K%2BZ6ZXEiYZpsEvsOIFZc5yctVjrTlmjvYjUj99XUeSzxOaxGLLSSMUqeujwMHTY5oXDB84Ww0dk6k0eO33zfQWK0%2F0BGcYT4Q36EqWVemX80Ut%2Bc2IDsj7JsoC7zM2kyYYJdEn9zL6k4vr3BQ%2FaLr%2B8BLejcXiB0quEgUkhwo66AOFzEglrGhzeVTX95CRya0A7PjqphbOvFyUxxI%2BmEGYJFBoA6QnGC1tC6NPsNDj2BVJ%2FPgs9oH3ii2CB%2B6UJiaLV69RgZ%2FMp5X1nJwOw97iupvSj64V5RamXJshv%2FbzoTO0CVh5gr7Oq1Yh%2B69c%2BJeToRFmYCmjj%2F4ubL9lDiQGudtSt6IQ0N7ZClm%2FVBcmOm405bupz8ILJy4Cn1WsqY3MLh2iOnrwL8rSU0dGxUqTD1R8PH9HkUg5nH0DCI6pzEBjqkAWHwOIOrS2VYxmL9Ygr%2FDRO5Tc6JStmwli%2FyQ6xX9biVojU1tZmTuV5sh4koG1EIOdBLEs696kDu1pVhMo7CvIqb2wcBJ%2BxIrfy93tOQLEpeHF2dElIyHITVn6aHG7N%2B6%2FNtfE67HchCdlO3FpWKwGyM1Mns%2BkmUr9RwVuq0HVStU9bEmKV6flwLELHg9NyzcAEOmuAArdwkq3nqdYYzocutkXcY&X-Amz-Signature=494d0b5b33e540471cfa0f662b0d7b7a112c45560db0ac8793a47f7ff3ba9002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
