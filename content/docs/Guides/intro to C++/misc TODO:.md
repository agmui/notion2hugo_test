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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2DW32T%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDhQlF%2FczbFoV7VD7Lgm6gQSinF12e5ZnG%2BKyIgIKCPgIhAN4GneTtUUmlg5woUf2wBaoWFkdnyyTE%2FMk0Jruq835tKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsbuPlXWAw2h6d6aEq3APqHSpoMd2UkNHruuEZfdS3GTA2d4QI873k8SFnWRwuMcn1LiStkzIlrJi8GS8Q6ugcfl0IoNnV0Ft3gvFTnyRmdONXaqJpjI%2FJhvFSEUbpiIyP2XRAhtPS7oTbu3Y2r4WM93q0r43r%2BLIq%2FPgDnNHtCwxgxIS3qrkU%2FTSaVt%2BShL05HF8AHYUkClYD7%2BI%2BC1ApaIzeF3IL4wFKs1sqkWq%2BIBUNCRXQQ3HNNx%2F%2FP49RYMxA5ouHiiwjr%2FRQCz%2BZ%2BNh3EFnF5fTNjCT1lJYtK%2FmE9%2F1IxalZxWCjtsTKhbsDtmwHGqAlKcNO7tZhze0ogGeBhClyC68gqXJbaGLnI68Om8Gj5GTWwvMvwhL5zz285XxtlZ%2FibLbHnyzqPMhyzc76I30l5X%2BdN7ofpAvUJ7lLM4vJYw3bcmT2GldIuMT1%2F2vO5XvD5IM4EWfbhK2JAO6noKMSwNtASN0jFOH2fdLPc3zNZt8feAfOSvgHpLadaLwqt5RXW6slMknWJvmUxt1adbAd0hlQh1HO%2F0pu0MKwQE6EF%2FVNySUWODwJbQFYFKpsn7KqIEk5%2FpnEoftc35fk4ES7S%2BgM32iOjmCL8Lt4eK%2FGMeU3I%2FvqVZUYOgksdpw2cbf8H%2BUA9wPDkDDkqMXDBjqkARzSMerv%2B3ktS3r%2F%2FZE%2FIzzLZJkNzYDhYKcZ0TFaPD9jrfntio3byGMZiPSV8lNn2bRUPiAwQ0kxzbQuW9lH9CIxeGDReYj7b1uIWdyYvKiICVlSNS6e4SO6szT%2BOOtF8Pnvbu6IExttvgGMHY99%2FgGE38lbm5aYOoWqautBwtLs9AuQdMNS89tZjo6PYpJi%2BWY1YzV0p2RYOmq2WhPHIUdDE813&X-Amz-Signature=51b85d18e35f743612eae345194cc0f9c5dc4ea33b896fe8c4b52fd01bb21f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2DW32T%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDhQlF%2FczbFoV7VD7Lgm6gQSinF12e5ZnG%2BKyIgIKCPgIhAN4GneTtUUmlg5woUf2wBaoWFkdnyyTE%2FMk0Jruq835tKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsbuPlXWAw2h6d6aEq3APqHSpoMd2UkNHruuEZfdS3GTA2d4QI873k8SFnWRwuMcn1LiStkzIlrJi8GS8Q6ugcfl0IoNnV0Ft3gvFTnyRmdONXaqJpjI%2FJhvFSEUbpiIyP2XRAhtPS7oTbu3Y2r4WM93q0r43r%2BLIq%2FPgDnNHtCwxgxIS3qrkU%2FTSaVt%2BShL05HF8AHYUkClYD7%2BI%2BC1ApaIzeF3IL4wFKs1sqkWq%2BIBUNCRXQQ3HNNx%2F%2FP49RYMxA5ouHiiwjr%2FRQCz%2BZ%2BNh3EFnF5fTNjCT1lJYtK%2FmE9%2F1IxalZxWCjtsTKhbsDtmwHGqAlKcNO7tZhze0ogGeBhClyC68gqXJbaGLnI68Om8Gj5GTWwvMvwhL5zz285XxtlZ%2FibLbHnyzqPMhyzc76I30l5X%2BdN7ofpAvUJ7lLM4vJYw3bcmT2GldIuMT1%2F2vO5XvD5IM4EWfbhK2JAO6noKMSwNtASN0jFOH2fdLPc3zNZt8feAfOSvgHpLadaLwqt5RXW6slMknWJvmUxt1adbAd0hlQh1HO%2F0pu0MKwQE6EF%2FVNySUWODwJbQFYFKpsn7KqIEk5%2FpnEoftc35fk4ES7S%2BgM32iOjmCL8Lt4eK%2FGMeU3I%2FvqVZUYOgksdpw2cbf8H%2BUA9wPDkDDkqMXDBjqkARzSMerv%2B3ktS3r%2F%2FZE%2FIzzLZJkNzYDhYKcZ0TFaPD9jrfntio3byGMZiPSV8lNn2bRUPiAwQ0kxzbQuW9lH9CIxeGDReYj7b1uIWdyYvKiICVlSNS6e4SO6szT%2BOOtF8Pnvbu6IExttvgGMHY99%2FgGE38lbm5aYOoWqautBwtLs9AuQdMNS89tZjo6PYpJi%2BWY1YzV0p2RYOmq2WhPHIUdDE813&X-Amz-Signature=15c47510c2cb152a03dfe9ad90b2a6e40b6154187c78186d86fa8ba27ac07e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
