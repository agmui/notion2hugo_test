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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCIS3V6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEjdUruSwXZi9yqZ0IwEI%2BccAKKwYwknQM2Y%2FVkaYfWAAiEAlvQWs2C6i8qbGMr0e36Dde3Yx4GVk%2FXsovbLTb7uwiEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGeUznF8JZURnytKSSrcA3R2qC%2BJ2zaKXVGJ%2Bs%2FpjAJQQwxmtNBubtrmkeVENxXVE2foVJ01LRyTxMPvuSHGE6NaGc5nDUBeDTLrJvjwRmxTGVfu7r5h21BIDjByLOIqteMOJaT6zd1rIYnukrFqjdBX%2BTQTHXjA9LGGXJoNWtmmITPhc54k87NNjY29YaAgZNVRBqULgDg5G0JKpFXt6cJuROzDap1TUn2PCtEJzfQn7vbISP41oOjuLNtUa%2BHpTVWCfDMWkb4VnyUkx%2FtV1%2B0ivylBy9EUP5X3qTcu8Q97puPjxttoNT6g8p9rcIblTuLeGe9gMuEk%2FzeqO5VbizpoErVSPZ79nRGq78laBqzSjKtKPDj5xOgCcWmYwnb0M%2BxU0bYSWQT%2BfQfNHVqzkMHWbnLTexJbqbR%2FIae7aJFXWd1uJ07BAnooDCZ3RxM9jdJHmMRq2F8VKTEjGIL8qBnmvfzSet%2BcX73dDfVHUOUtK%2F1hINC%2BAqBurw6TQqMEo3BLYsALjGT7y25gXk3PDwbyA6CRBiiW3Sjme4qfs2MhmMitJ60mUA%2F63AMHlPSUg7%2F346WUFsjne4NvcBKkUHVuZ9Vpu1kxX2Xx7hsFaPObZ2PeGKcDJjlxkcbRWPHg2tbMFcxa5L5S1SZgMI%2Bqo8MGOqUBdr2zxnrcZpn5ipwDHisdje%2FUGWvYGh4lHJfBdbMBBfm%2B7Y%2FlrI31a6JUwHZQ4OufDKoX5HmM7%2BxjfhA6cn6Uv1gpuLdflS4iVfeYq9%2FZV4a3PLKeNCM8Yg7%2FhkGNZOh5RJSPNPLCmdxzbFdbdh9rfkBXS6wZ7oL4GdsHETg7pgfhE7F%2BeAvB96UHyVbjh0WnvMtVp38ko0sRp044pbt5Wf206%2Bch&X-Amz-Signature=12531065bcd8362ad3c2fa2c40f3a548b4d14bf2426a4214805a6266c6d801da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCIS3V6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEjdUruSwXZi9yqZ0IwEI%2BccAKKwYwknQM2Y%2FVkaYfWAAiEAlvQWs2C6i8qbGMr0e36Dde3Yx4GVk%2FXsovbLTb7uwiEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGeUznF8JZURnytKSSrcA3R2qC%2BJ2zaKXVGJ%2Bs%2FpjAJQQwxmtNBubtrmkeVENxXVE2foVJ01LRyTxMPvuSHGE6NaGc5nDUBeDTLrJvjwRmxTGVfu7r5h21BIDjByLOIqteMOJaT6zd1rIYnukrFqjdBX%2BTQTHXjA9LGGXJoNWtmmITPhc54k87NNjY29YaAgZNVRBqULgDg5G0JKpFXt6cJuROzDap1TUn2PCtEJzfQn7vbISP41oOjuLNtUa%2BHpTVWCfDMWkb4VnyUkx%2FtV1%2B0ivylBy9EUP5X3qTcu8Q97puPjxttoNT6g8p9rcIblTuLeGe9gMuEk%2FzeqO5VbizpoErVSPZ79nRGq78laBqzSjKtKPDj5xOgCcWmYwnb0M%2BxU0bYSWQT%2BfQfNHVqzkMHWbnLTexJbqbR%2FIae7aJFXWd1uJ07BAnooDCZ3RxM9jdJHmMRq2F8VKTEjGIL8qBnmvfzSet%2BcX73dDfVHUOUtK%2F1hINC%2BAqBurw6TQqMEo3BLYsALjGT7y25gXk3PDwbyA6CRBiiW3Sjme4qfs2MhmMitJ60mUA%2F63AMHlPSUg7%2F346WUFsjne4NvcBKkUHVuZ9Vpu1kxX2Xx7hsFaPObZ2PeGKcDJjlxkcbRWPHg2tbMFcxa5L5S1SZgMI%2Bqo8MGOqUBdr2zxnrcZpn5ipwDHisdje%2FUGWvYGh4lHJfBdbMBBfm%2B7Y%2FlrI31a6JUwHZQ4OufDKoX5HmM7%2BxjfhA6cn6Uv1gpuLdflS4iVfeYq9%2FZV4a3PLKeNCM8Yg7%2FhkGNZOh5RJSPNPLCmdxzbFdbdh9rfkBXS6wZ7oL4GdsHETg7pgfhE7F%2BeAvB96UHyVbjh0WnvMtVp38ko0sRp044pbt5Wf206%2Bch&X-Amz-Signature=17c61f7d9dc34e945eec21c3bbc40691577e35902918bf3a064df46950713b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
