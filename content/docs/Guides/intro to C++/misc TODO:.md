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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A6CTVO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCXoKqyVc3Avk81vsUckKqVYttVTeeLmCpc1%2BagIFjlGgIgT6662AI2A1GiickuGe51DFp7dPMlqSfcjRTqL%2FM8ifsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPJziL4GcGrfSab18ircA5LAxtVfGOgkBPRHYEtw95GciMDH%2FYxqt9gm2s3old2ZZDSHuJeZOsNRSaHmNDNDh9oIXeUtoah18qhCyDvLcTPoSsln5o6WbLSN%2Fwmx6IJP6Cj4nyXT9shtVSJUG4YHuPBZKXovv6XmrKBM2yVWnX1Y47h8rc%2FLJAYj5qlz5jxJLpL%2BV%2BkkXw%2FgunZuWmNYYeH5FNZRhZ5SJHd8Bxu3jxDAVVio6x3ILRMqoqxm3G3woYUTXlAaavl6fBQniNFB06jMwwzbf%2Fge%2BsO5ZmR0cop%2FZ%2B84KKJ4E2UuI1BssvZSoO%2FfRcj3LewVbjpjXKWdKj5QViJ7Sl3lTVdSs3lKlT2XjQi%2FfdmnTUc31VsHsEK5aZ5lo2b2%2BlvRZjE09EWzlg0lDDP2sn5AVV4TPBdAiA5xXPB6iBWv2o7AtE4vV0VUzVFjzYt7TekM5oEXt40b7RDZ85BwbZUm0yRqimG0y93kBBimSAcsWTNwhswWtarrsR7WmtdzTst9H6ziZ4Px7SGChjYob8EeJwNZ%2FBrYly5xj1VtpQsRo42Nzf5RKTjXeaDFFu93YYB7MGzdF%2FrdR0FKkmhIK0r2AnxU5G7pdWaIMaOk2NbRM1vRD2NlcIAv6A1A19sYDtL6cIOGMJjp%2BMQGOqUBzKB7U5Np0bZqrd%2BGnF5XhI%2BkUSUDZW%2BbQeEpple9hFXEpJiWZZ1dJHrOaWtBevikeeFAA%2FByyS8VRBsN%2BJe4%2BdoVdNizL3JdlFvsGT%2FxaaKMYhCyqoTbtUIwq56SsyiHYbHtrkAgSTC3MDZFPhbpwjGLtXs%2BG59qBL5gu7iBnMjI9P7zz9cYIAbu%2F%2FsWYw0NkpLoWXec1oFSunL%2BUq%2F1H9yTIucu&X-Amz-Signature=a6079f93e788e9d851664b59eeae8203a0dc467720509965ee7d04952b703043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A6CTVO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCXoKqyVc3Avk81vsUckKqVYttVTeeLmCpc1%2BagIFjlGgIgT6662AI2A1GiickuGe51DFp7dPMlqSfcjRTqL%2FM8ifsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPJziL4GcGrfSab18ircA5LAxtVfGOgkBPRHYEtw95GciMDH%2FYxqt9gm2s3old2ZZDSHuJeZOsNRSaHmNDNDh9oIXeUtoah18qhCyDvLcTPoSsln5o6WbLSN%2Fwmx6IJP6Cj4nyXT9shtVSJUG4YHuPBZKXovv6XmrKBM2yVWnX1Y47h8rc%2FLJAYj5qlz5jxJLpL%2BV%2BkkXw%2FgunZuWmNYYeH5FNZRhZ5SJHd8Bxu3jxDAVVio6x3ILRMqoqxm3G3woYUTXlAaavl6fBQniNFB06jMwwzbf%2Fge%2BsO5ZmR0cop%2FZ%2B84KKJ4E2UuI1BssvZSoO%2FfRcj3LewVbjpjXKWdKj5QViJ7Sl3lTVdSs3lKlT2XjQi%2FfdmnTUc31VsHsEK5aZ5lo2b2%2BlvRZjE09EWzlg0lDDP2sn5AVV4TPBdAiA5xXPB6iBWv2o7AtE4vV0VUzVFjzYt7TekM5oEXt40b7RDZ85BwbZUm0yRqimG0y93kBBimSAcsWTNwhswWtarrsR7WmtdzTst9H6ziZ4Px7SGChjYob8EeJwNZ%2FBrYly5xj1VtpQsRo42Nzf5RKTjXeaDFFu93YYB7MGzdF%2FrdR0FKkmhIK0r2AnxU5G7pdWaIMaOk2NbRM1vRD2NlcIAv6A1A19sYDtL6cIOGMJjp%2BMQGOqUBzKB7U5Np0bZqrd%2BGnF5XhI%2BkUSUDZW%2BbQeEpple9hFXEpJiWZZ1dJHrOaWtBevikeeFAA%2FByyS8VRBsN%2BJe4%2BdoVdNizL3JdlFvsGT%2FxaaKMYhCyqoTbtUIwq56SsyiHYbHtrkAgSTC3MDZFPhbpwjGLtXs%2BG59qBL5gu7iBnMjI9P7zz9cYIAbu%2F%2FsWYw0NkpLoWXec1oFSunL%2BUq%2F1H9yTIucu&X-Amz-Signature=f64b4d62b8d3343de6abd7394fa9bd56b732e4a47e892cd928063c66a575c935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
