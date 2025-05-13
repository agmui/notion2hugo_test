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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMOVVKD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCcVGXJkjlWUqyNbZA7BftrrFZ2zfDDbZHO8acIPbOUMQIhAOjioJ6f61aG2yukGT39U0qYygwG64q5mSwr6%2BmnK72FKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5fR8Z11yP5pS5kncq3AMXeu4GR%2BVY1KGvDBzjr1A14M4t7F6nm2PGGtQjdgNQ1PWhAz3UKVb3YoVCyUngpM0V3lr6V1FwqfurRiLw9gEK8VUmaOOP5ubMEQPCZPvVWvti8WWC5GEWoiy4qz5vCfr7ZFwIC6T0P9RVb2ubeA64w7%2Bs7uTq0eZOPJhEWytHY%2BmQGxz00ujC4NnvFgo777C70v3IODX0pVk45Aeswq3T4MRVAArVZlYE1ka6YqH914YEg4VqgmZAsjKSGyRsaIVW4SaWt%2B6Ggl2ZGEQBb3G1FybJQsBDGJvS7WXQdILLjq8Pvr3ZdbYzgN4sS4K03%2B%2Bfc3l0I%2FLLq6ATqHYpiK4SvaoZGtR1%2FFozrDwsDAXRr4N2jT521SDu86JZ64iOmQASOfZGAB6YhkUR%2BMZ9gQhClo20U8YhjbsYLbr1jTsi3mgCBL6vYnwX51FR%2FVTTG%2Fqy8ZMJprgO4%2BMgtAjmONJJYp30IiGcX92AhDzTEzLTK8JOkiLVfREx9dzzBdzSkUQOB8isloqLvs2l0Y%2FzBDoFEFSRiQ5NrrgDVVEgbYCgmdNJ0atINFWhOFSE7GeE1iwGCRaqLETu0pDbYoXYwPZIIL1m01re7YqOjEnJgarCPZcD4G%2FKn30yVZxDBjC5kYrBBjqkAYCemT2NWKLdMPc27apWsJACBIhC337zqPPG6W7lBBvNBL%2Bh7ZhiL0bDuA4vfdMW0lb7xa96REiJolUaJaTLgsrercu339pMyGwVnoW6139LOqLxofeDPZj1WpJYOu0IwArIATcj8SAVNBl10T08PGOOzwQuZSPiAJExu6Qr1BAHXl0s%2BggR7kg9WTNPmq2H022XLqOWvUJoXz1N8XbG82QTj8lh&X-Amz-Signature=297b9ce69f6d0972cd37d430a92d2ba133f1ede5a6ee52e93351b5796bb8ff80&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMOVVKD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCcVGXJkjlWUqyNbZA7BftrrFZ2zfDDbZHO8acIPbOUMQIhAOjioJ6f61aG2yukGT39U0qYygwG64q5mSwr6%2BmnK72FKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5fR8Z11yP5pS5kncq3AMXeu4GR%2BVY1KGvDBzjr1A14M4t7F6nm2PGGtQjdgNQ1PWhAz3UKVb3YoVCyUngpM0V3lr6V1FwqfurRiLw9gEK8VUmaOOP5ubMEQPCZPvVWvti8WWC5GEWoiy4qz5vCfr7ZFwIC6T0P9RVb2ubeA64w7%2Bs7uTq0eZOPJhEWytHY%2BmQGxz00ujC4NnvFgo777C70v3IODX0pVk45Aeswq3T4MRVAArVZlYE1ka6YqH914YEg4VqgmZAsjKSGyRsaIVW4SaWt%2B6Ggl2ZGEQBb3G1FybJQsBDGJvS7WXQdILLjq8Pvr3ZdbYzgN4sS4K03%2B%2Bfc3l0I%2FLLq6ATqHYpiK4SvaoZGtR1%2FFozrDwsDAXRr4N2jT521SDu86JZ64iOmQASOfZGAB6YhkUR%2BMZ9gQhClo20U8YhjbsYLbr1jTsi3mgCBL6vYnwX51FR%2FVTTG%2Fqy8ZMJprgO4%2BMgtAjmONJJYp30IiGcX92AhDzTEzLTK8JOkiLVfREx9dzzBdzSkUQOB8isloqLvs2l0Y%2FzBDoFEFSRiQ5NrrgDVVEgbYCgmdNJ0atINFWhOFSE7GeE1iwGCRaqLETu0pDbYoXYwPZIIL1m01re7YqOjEnJgarCPZcD4G%2FKn30yVZxDBjC5kYrBBjqkAYCemT2NWKLdMPc27apWsJACBIhC337zqPPG6W7lBBvNBL%2Bh7ZhiL0bDuA4vfdMW0lb7xa96REiJolUaJaTLgsrercu339pMyGwVnoW6139LOqLxofeDPZj1WpJYOu0IwArIATcj8SAVNBl10T08PGOOzwQuZSPiAJExu6Qr1BAHXl0s%2BggR7kg9WTNPmq2H022XLqOWvUJoXz1N8XbG82QTj8lh&X-Amz-Signature=bc9501ebb051d40aa0dd6c08db51f1d9f6cca3e6f5e6efb0bb2f89655ab59de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
