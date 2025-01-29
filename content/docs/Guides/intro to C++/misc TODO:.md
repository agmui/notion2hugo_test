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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCCCY64%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPNC%2BMBMPXJztBBxfD6Px3g6QhAR5PpPSsdbUgY2jvpAIgFfx3fscThB5MRPxnso9SbEl5FoMt9T6mWX6w%2FDAbo0UqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKJMFr0M1h0NEDZEircA7lYMX1GQTxTAC8vMGsbcLrB2uGoTTBeCxSeR295jHZWFbVCKrvc9aItg5OcYSVU2ijHJw9YRLdNJQeV73NtX1I%2Fdxu4KH1OXas2%2Bh0%2Bt7a5y55HJKJt0kBccnscoB2vs5q2fK%2F7FfIZRw%2FnrRZPQUZKKnH2Sys2iHbTvOWOaGlLouDUSVjRf%2BaGTc2VOMlJsfiz81%2BPj3qI8RGKqx3FrBxfMT4xVM4Uus2OsOWiDc%2F5kuyJHCa3aObqON9ckslIIQV0b2gowRtkfELvEdQPaY78KNusF6oqL%2BBwGQ%2FrESvYSzlUGKhhWd13uAw2Yfi%2FidHf3vyFT4E5ETD4OD7kO347NWiKu4m37e6vMFxyPzjj3jHBk0pfwQwI3TJAxXo89gbnN6Tl%2Bsa843m3NDgMPbG6MpwYl60jeo%2BLQUat4hz93BieNDNcYBQxee2Q4294JwEb6IXfBjgBVA6gbvy%2F3hbD9pymOyhLe8gBtXrqF2N%2BA12dyDB6QsFC3YK3H8ygPsz2SOgxS4DDdTpeZYb6PduTv4HookBbqaenj2Za5HWHRdUkcVWDvSI4LqrWrgbEa4YuLpgtWu6A0G7brRmmwK6yE9UNkH3FC86jRZda6E%2F%2FTUlk9ido%2B5iXtvFVMJGx6LwGOqUBIUw0mh9nplqwpAlmCyD4WK%2FZKFCNetYOuFtVbpsFkD2%2BbVdI71yl8xZ0A6jVCUlF3KrUlrcCieyFnXdqyDS%2BxNJ6UewV1ldqc9g%2BVM6spEPtOaxH2Ha5WHmGLSLdYsVUo49EPccHLndpKJvV67AjOGkW6caje6R%2FkwA2g37FB6nbwxP%2FRK%2Foq05gXIIWgzHtCoITBKTrCMdz9dTAqGefH6IxRg4e&X-Amz-Signature=086a4cb6fb5176446e2047eeff56336cbec0baf60cc98beaaa79dcbcfd6bf5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCCCY64%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPNC%2BMBMPXJztBBxfD6Px3g6QhAR5PpPSsdbUgY2jvpAIgFfx3fscThB5MRPxnso9SbEl5FoMt9T6mWX6w%2FDAbo0UqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKJMFr0M1h0NEDZEircA7lYMX1GQTxTAC8vMGsbcLrB2uGoTTBeCxSeR295jHZWFbVCKrvc9aItg5OcYSVU2ijHJw9YRLdNJQeV73NtX1I%2Fdxu4KH1OXas2%2Bh0%2Bt7a5y55HJKJt0kBccnscoB2vs5q2fK%2F7FfIZRw%2FnrRZPQUZKKnH2Sys2iHbTvOWOaGlLouDUSVjRf%2BaGTc2VOMlJsfiz81%2BPj3qI8RGKqx3FrBxfMT4xVM4Uus2OsOWiDc%2F5kuyJHCa3aObqON9ckslIIQV0b2gowRtkfELvEdQPaY78KNusF6oqL%2BBwGQ%2FrESvYSzlUGKhhWd13uAw2Yfi%2FidHf3vyFT4E5ETD4OD7kO347NWiKu4m37e6vMFxyPzjj3jHBk0pfwQwI3TJAxXo89gbnN6Tl%2Bsa843m3NDgMPbG6MpwYl60jeo%2BLQUat4hz93BieNDNcYBQxee2Q4294JwEb6IXfBjgBVA6gbvy%2F3hbD9pymOyhLe8gBtXrqF2N%2BA12dyDB6QsFC3YK3H8ygPsz2SOgxS4DDdTpeZYb6PduTv4HookBbqaenj2Za5HWHRdUkcVWDvSI4LqrWrgbEa4YuLpgtWu6A0G7brRmmwK6yE9UNkH3FC86jRZda6E%2F%2FTUlk9ido%2B5iXtvFVMJGx6LwGOqUBIUw0mh9nplqwpAlmCyD4WK%2FZKFCNetYOuFtVbpsFkD2%2BbVdI71yl8xZ0A6jVCUlF3KrUlrcCieyFnXdqyDS%2BxNJ6UewV1ldqc9g%2BVM6spEPtOaxH2Ha5WHmGLSLdYsVUo49EPccHLndpKJvV67AjOGkW6caje6R%2FkwA2g37FB6nbwxP%2FRK%2Foq05gXIIWgzHtCoITBKTrCMdz9dTAqGefH6IxRg4e&X-Amz-Signature=dcd52cafc66951441a0c3e80b1015c53194ad091e0700ac6a1b0072761033d47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
