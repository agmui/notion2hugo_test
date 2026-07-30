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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDLOBLM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDPwzOFhPR3SWI5ybTKf%2BwSI%2BgoTOo2v0UEdheHN0alAIgRGCdM6PsySrlH2nPmmB2DE%2BK2zJjYpAh%2FAeuxtf5St0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzmcLz7HxAO7yMYircA7TFEcJKqQccg6qLm%2BuEK%2Bb1%2B%2Fsh98RuTMZ%2BA6wwhVHQxV9lwrIAkWEB4Xx0cAt4zzTovuMeFGFqdnRBsyVZk50HgpqZc8KtL8%2F6ubFhjB6qMVrJ2AkR5vww8LKbqnnagHSnMVhTDrfVbCm7eilxK58GL3P0nX3Xdb%2FbMluhqcI6m0vS0DE8LhBdQ3vwVFU%2B%2FZ9P6OS5jsmXSsshe9wBlIiApTDQqf5yXLDGqMNMXUxquBHvsDEF0KxuaohS8KgGtQ2I%2FkxdRuKKLOJh%2FOKFhA%2B%2BIvFJvWWRlMB6A1vI2H80xCZ591LwdwOsZzGnaHFpP9%2Fvy28v9l7p9m3I%2FbQq6R3sGQOOXgaiQrxvd53QA0dcPpA1HVUtMW5k85ewGjlDcz6DUST9Z1j9V8o2xxMfL6KkMsOFN7NUaugtzFLhlSuhCeQdfNJnXh8KQU6xmw%2FZ2wAEMVW00GXkPqM6aQmm1NHvFplVReYh4jNu98pCv8PWzmhdtTE4QgiVR7mgrK6qgTVF2VnDUsq8mB%2BihjXhn83SlFUj9KUySRDOzDR2JKU7PxbWSUHnony9m1BmcT%2F6NlY%2BNiyIq24R3rWV4rI42DbXgjy9WZBh4pErHcvXGz7983iqhYMafnKi6lYeMKvfqtMGOqUBN%2Bk2M%2FnwzN%2Fcv9F%2F0GFQR3xf0W0Ue%2FcnEZnFimbG8e5aVO1q1uNVCiure9CrWyS51QlO038xIlarbWYNGGRXDeu4QRNcW6Vwny%2FAV9KRq9YuPc8yDCfgpey2HkFAZotrvnw3SwtDxVKxS31wMTuF5L1%2FN54MbR9Ic%2F4MqPQcz9oc4g0%2B3OLOgBw2i2WSLySrebFbg2f0eqcp%2FA244J2qFM6ooFXG&X-Amz-Signature=d8555de62869233cf7c8ccff89ae9310ce4f987907149d2088d8301c481c6c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDLOBLM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDPwzOFhPR3SWI5ybTKf%2BwSI%2BgoTOo2v0UEdheHN0alAIgRGCdM6PsySrlH2nPmmB2DE%2BK2zJjYpAh%2FAeuxtf5St0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzmcLz7HxAO7yMYircA7TFEcJKqQccg6qLm%2BuEK%2Bb1%2B%2Fsh98RuTMZ%2BA6wwhVHQxV9lwrIAkWEB4Xx0cAt4zzTovuMeFGFqdnRBsyVZk50HgpqZc8KtL8%2F6ubFhjB6qMVrJ2AkR5vww8LKbqnnagHSnMVhTDrfVbCm7eilxK58GL3P0nX3Xdb%2FbMluhqcI6m0vS0DE8LhBdQ3vwVFU%2B%2FZ9P6OS5jsmXSsshe9wBlIiApTDQqf5yXLDGqMNMXUxquBHvsDEF0KxuaohS8KgGtQ2I%2FkxdRuKKLOJh%2FOKFhA%2B%2BIvFJvWWRlMB6A1vI2H80xCZ591LwdwOsZzGnaHFpP9%2Fvy28v9l7p9m3I%2FbQq6R3sGQOOXgaiQrxvd53QA0dcPpA1HVUtMW5k85ewGjlDcz6DUST9Z1j9V8o2xxMfL6KkMsOFN7NUaugtzFLhlSuhCeQdfNJnXh8KQU6xmw%2FZ2wAEMVW00GXkPqM6aQmm1NHvFplVReYh4jNu98pCv8PWzmhdtTE4QgiVR7mgrK6qgTVF2VnDUsq8mB%2BihjXhn83SlFUj9KUySRDOzDR2JKU7PxbWSUHnony9m1BmcT%2F6NlY%2BNiyIq24R3rWV4rI42DbXgjy9WZBh4pErHcvXGz7983iqhYMafnKi6lYeMKvfqtMGOqUBN%2Bk2M%2FnwzN%2Fcv9F%2F0GFQR3xf0W0Ue%2FcnEZnFimbG8e5aVO1q1uNVCiure9CrWyS51QlO038xIlarbWYNGGRXDeu4QRNcW6Vwny%2FAV9KRq9YuPc8yDCfgpey2HkFAZotrvnw3SwtDxVKxS31wMTuF5L1%2FN54MbR9Ic%2F4MqPQcz9oc4g0%2B3OLOgBw2i2WSLySrebFbg2f0eqcp%2FA244J2qFM6ooFXG&X-Amz-Signature=4da3c5dd338059f4d6e712891bcff6ecba125686ebaa193d137b33e188b9891d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
