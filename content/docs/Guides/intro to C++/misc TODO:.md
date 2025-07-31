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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYT23FTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F8ikjtUi8%2BkH4tFo%2B0%2BQSHH6wEQW19vM4vOXsrjsIfAIhAKpCQ%2BJYk0MrQYgEzb%2FTVgV6p%2FU0ljDVnf4bHigBYYcuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXU%2F6WYGq5LE9DSNQq3APcVWbysCaGkvCVzoHuqe8nxx3EHPRnYNSTLYre7W1KuOldGYIU8GtXMgUdXCnaLtE58VIqe82hwh1TWYkHGV1SImcoov8KlKsxJLm9ZZQMVJra7YcBYI5dP5goq%2Bo%2Fy1E3P3ilOe2CeBe5v7ncWG4Wpv%2FTZIIs6YZWfxAP2%2FilTQ5HpYs2FzLHq%2FotALOg655xk94uGAfTfkt9h4IXaPyUATh5FqHxIHA9qyg1JOFkafoUzZYUOAPKygB7hZyXVuece0G%2FOIaT51FnHchYvbZTYElyz26XrmfOiQhF7EsCLmu7R%2FnAqHMm3IlXIVDulLgjdnoGX3UQNuh7Kf2W1ayW%2FhuwTHyIia8yw8tykxXdkam0oENDqfp%2B7XtOf89s1B8DH%2FdRvyh6nfQPcniUvyUDuGY9d2cIlafqPknwPUA6g9RHYJ600e0iJ%2FKDeIBkQOa5yvReEd57hPL8KaFdtHdC7n3DGD1%2FVWmAIIs9MjRa9d8blZE%2FWWeAyHD6Fki2x1ehTeffihaKKRweHjHwRuuAHvUZI%2Bs2mDSfDSeYY1%2B8WlCa0iWEckaxMUngpBXPDpv0ox9i8OaDPxL%2BsUNJ1eGSxnrSlVEbBLMNrkz%2FZDPpjINzL6URYKSa0DOWYjCly6vEBjqkASjpyi7ofkXBOGPN5WaIKH1qwidB2PnOTzeoHFmPRIuHuVyYJCeUztP0sA3DpbVMVa0613nkqIjsIq0TYYvATcK7HS%2FpbqydFk%2F62J4b5VSugf28qkL2As50jtMMXa4vPoFygwmx%2B03TYB2aXS4D92VscsBvG2wMcR4MMMalP%2BYJMNUwwV1XFszwYkElqWac3ozCKrY8E7zJioDcYJrFC2bl5%2BBf&X-Amz-Signature=12e24b729df067730d50ce7f48a778d30b906e26283ea38ce2c17d0d1f6697c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYT23FTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F8ikjtUi8%2BkH4tFo%2B0%2BQSHH6wEQW19vM4vOXsrjsIfAIhAKpCQ%2BJYk0MrQYgEzb%2FTVgV6p%2FU0ljDVnf4bHigBYYcuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXU%2F6WYGq5LE9DSNQq3APcVWbysCaGkvCVzoHuqe8nxx3EHPRnYNSTLYre7W1KuOldGYIU8GtXMgUdXCnaLtE58VIqe82hwh1TWYkHGV1SImcoov8KlKsxJLm9ZZQMVJra7YcBYI5dP5goq%2Bo%2Fy1E3P3ilOe2CeBe5v7ncWG4Wpv%2FTZIIs6YZWfxAP2%2FilTQ5HpYs2FzLHq%2FotALOg655xk94uGAfTfkt9h4IXaPyUATh5FqHxIHA9qyg1JOFkafoUzZYUOAPKygB7hZyXVuece0G%2FOIaT51FnHchYvbZTYElyz26XrmfOiQhF7EsCLmu7R%2FnAqHMm3IlXIVDulLgjdnoGX3UQNuh7Kf2W1ayW%2FhuwTHyIia8yw8tykxXdkam0oENDqfp%2B7XtOf89s1B8DH%2FdRvyh6nfQPcniUvyUDuGY9d2cIlafqPknwPUA6g9RHYJ600e0iJ%2FKDeIBkQOa5yvReEd57hPL8KaFdtHdC7n3DGD1%2FVWmAIIs9MjRa9d8blZE%2FWWeAyHD6Fki2x1ehTeffihaKKRweHjHwRuuAHvUZI%2Bs2mDSfDSeYY1%2B8WlCa0iWEckaxMUngpBXPDpv0ox9i8OaDPxL%2BsUNJ1eGSxnrSlVEbBLMNrkz%2FZDPpjINzL6URYKSa0DOWYjCly6vEBjqkASjpyi7ofkXBOGPN5WaIKH1qwidB2PnOTzeoHFmPRIuHuVyYJCeUztP0sA3DpbVMVa0613nkqIjsIq0TYYvATcK7HS%2FpbqydFk%2F62J4b5VSugf28qkL2As50jtMMXa4vPoFygwmx%2B03TYB2aXS4D92VscsBvG2wMcR4MMMalP%2BYJMNUwwV1XFszwYkElqWac3ozCKrY8E7zJioDcYJrFC2bl5%2BBf&X-Amz-Signature=9bdfd6278b69abf2e79d8cff9e540bbe3b9514c3001b2a8875c5838abdd3c59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
