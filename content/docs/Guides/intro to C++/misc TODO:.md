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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLTPQLM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCsLVMCir3wf7EvOaZoy9kobqDTYqdsU%2FGcJTcZ8xYMMAIhALg8Kw5Q%2BTnpXKniIQ4Q4JwcyuP2KYszub9YQSzjBnFuKv8DCB0QABoMNjM3NDIzMTgzODA1IgySg91y9Y0H5bvkGhcq3APRC1c0zGMhyzq%2B36SIw2RntWvnyfFY5uD4QZkmVQ06jBnJdzsUMIOd7X9ZIMXmU0YD40KX8QEM2so6qBujmJdkwuJE6wS48Yo%2Ffzb%2FcFAxivL56%2FAMaPi%2BB7nmU7cMpokc9LuLzqQzqKVqtMXM%2FanIbH5CYi25eX%2F%2FNORd7a5DUTBNTmb6CSS7YuZLKkpSpotoJrQA5p8C8QBFs9Mn8GH060PiY%2FUvqW9OFlac9rQ29iRG8VkVAJ7javD2t3cAZOdAT9O5LeDA8s1oRdNk%2Fbn6SEkPvIyzCe1EU0ClrGHuzlLl7yn%2Bz2Hr0xTfyxx3Q8B87EriBCs9VtDr8DWF1vULUHvRd0U8sTemgiOfRp72rSWFMG8VcKoimmR5qTJzzR0VYysHU%2Fhh4D%2FPW8T0zvhiZprdKaASrSdOb%2BCHIQSBmVIlx7MdwXu7pBhv0nq1ajdzUsYEN%2FAJxlAgAyYu3tUKZHzzbqibSbj4cbTMVYUfHeu9jzA2NI8NEGM5F5J58SUko%2BTiKqg0g6ykQsjWHczoHA2vculf8dPUlify5BA6bjb516Czm0lk2SjuxxirTuUL76V8jCuPekTZije%2FQHMMDckLIh4JkX1eG9RLnt5eudx%2FoFhdKfAlJO3zCjDmkrLCBjqkASoeFlbFMbdLNfxeegZQvmENUl5XTC%2F9HhvjxAfrqH8mL1hLu4w3nbSRPrhIUsyyjBv1mwbI%2FIeD1OMx6wtvTzs6EK8yXX0h4Rr1F9gstWiWPRIoR5t95obG0G4PWniW7%2FzTbIqfTdH4GSI8Hd%2F7B2IdxnhE%2BKpGgQtgr9qEvDmN%2BOM8PSJU9xdc0LHS6qDkgiB50GbR1x6Ps%2BV9uwpNZQWQ5T43&X-Amz-Signature=30452cc6bef2e923314cf51b093acbed75c8d60ad49deb56db10d4780d19734f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLTPQLM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCsLVMCir3wf7EvOaZoy9kobqDTYqdsU%2FGcJTcZ8xYMMAIhALg8Kw5Q%2BTnpXKniIQ4Q4JwcyuP2KYszub9YQSzjBnFuKv8DCB0QABoMNjM3NDIzMTgzODA1IgySg91y9Y0H5bvkGhcq3APRC1c0zGMhyzq%2B36SIw2RntWvnyfFY5uD4QZkmVQ06jBnJdzsUMIOd7X9ZIMXmU0YD40KX8QEM2so6qBujmJdkwuJE6wS48Yo%2Ffzb%2FcFAxivL56%2FAMaPi%2BB7nmU7cMpokc9LuLzqQzqKVqtMXM%2FanIbH5CYi25eX%2F%2FNORd7a5DUTBNTmb6CSS7YuZLKkpSpotoJrQA5p8C8QBFs9Mn8GH060PiY%2FUvqW9OFlac9rQ29iRG8VkVAJ7javD2t3cAZOdAT9O5LeDA8s1oRdNk%2Fbn6SEkPvIyzCe1EU0ClrGHuzlLl7yn%2Bz2Hr0xTfyxx3Q8B87EriBCs9VtDr8DWF1vULUHvRd0U8sTemgiOfRp72rSWFMG8VcKoimmR5qTJzzR0VYysHU%2Fhh4D%2FPW8T0zvhiZprdKaASrSdOb%2BCHIQSBmVIlx7MdwXu7pBhv0nq1ajdzUsYEN%2FAJxlAgAyYu3tUKZHzzbqibSbj4cbTMVYUfHeu9jzA2NI8NEGM5F5J58SUko%2BTiKqg0g6ykQsjWHczoHA2vculf8dPUlify5BA6bjb516Czm0lk2SjuxxirTuUL76V8jCuPekTZije%2FQHMMDckLIh4JkX1eG9RLnt5eudx%2FoFhdKfAlJO3zCjDmkrLCBjqkASoeFlbFMbdLNfxeegZQvmENUl5XTC%2F9HhvjxAfrqH8mL1hLu4w3nbSRPrhIUsyyjBv1mwbI%2FIeD1OMx6wtvTzs6EK8yXX0h4Rr1F9gstWiWPRIoR5t95obG0G4PWniW7%2FzTbIqfTdH4GSI8Hd%2F7B2IdxnhE%2BKpGgQtgr9qEvDmN%2BOM8PSJU9xdc0LHS6qDkgiB50GbR1x6Ps%2BV9uwpNZQWQ5T43&X-Amz-Signature=adddeacb43ca29d3b3b2e0ed522f2b7b66674597e14bb1090180987ac388a4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
