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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTW7SWE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHn11fwdXhVt0Js1OTWvpdqeMVpprJhPLqUrJeLq91B%2BAiAvYrjHOHotaB9DrayO%2FLXvTBwAia8I2JXuvOxjkHP%2BJyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMiwJp2cSceCwVtptUKtwDIRsByn4MGGM0VB%2FbsPQJNTWgBnut8NYAfxviDJMvQYPiF%2FuanI50ix%2Frd3z8WwDrWIbJnYhDRAeCPsPJzwRNwBO1lnAk%2FH0az5le6kzSVKhNhF0I4A3UQMoGzPETwBP81BUUkFWbONP3Md8a26Fsq%2BDFmXdPIqQGwQL0IwucDXPH9azfelhypRuKMnXQ9WHO5RicgJPC8dP2FaPMcDxRb9yz290DYyDEHBTfjMmJynvrPRe6dMOEjnuqy55l3sNJJeEMtirXNGqyDsX3YasCtsH%2BLih35HmU8MY6D0EMwMkP5L7WM1eHq2SYNliC4JKCyMoiNecaAmYHJafHvBhV4%2F5aWHq7bM%2FmZ8J1tWSsFkACabq9R6f%2BuyzlYQdTnbYqFHDBb9R1KoxpgDj1d2bxuaCEl7EW7ovvWZDKRRkxcEuRINk5QsbBDOm8BtKpgS3u8tCdxYE0R91iIwEH1qV5raHfq0NVffY4MuC5uOq%2BJNULeMOIT6BSN5o%2BCHFmAgbdMfILzxlzj17O5VrEoiN1bZh3ocKYEMX%2FHsb14jANCisUZXjyeKAQkmRsuf2upMeAaJARkC7iZZ0i26HveJseqUDPpmHycVHFlk7m%2BhOJr84p8qTcGtojP6WcwSkwjMjAwgY6pgEjH9yeFgFrHcNXir%2FyMKPn46E%2BwfYUWTT9azon0%2B%2Fz4tWc7AkGZkC9Yc43pFQUMpyYgUmpGtFlye6qFaYpnISOtAe1gRGlj7iltHJNkPWAVGcKP%2Bz4oMhOQBnQwGlA7lRafBe2d7XQ7hGTyDYzfLBgGZFD5tzrdQeHwrGgGoQAXz63GYc11O%2B2iqa9caBCOfmdcrOLe6ifcNBKt07RNlV9W1AcoEtg&X-Amz-Signature=577d56ed99f08e04a8c15ba4ccef0a847010c9250ea769664262e231834408dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTW7SWE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHn11fwdXhVt0Js1OTWvpdqeMVpprJhPLqUrJeLq91B%2BAiAvYrjHOHotaB9DrayO%2FLXvTBwAia8I2JXuvOxjkHP%2BJyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMiwJp2cSceCwVtptUKtwDIRsByn4MGGM0VB%2FbsPQJNTWgBnut8NYAfxviDJMvQYPiF%2FuanI50ix%2Frd3z8WwDrWIbJnYhDRAeCPsPJzwRNwBO1lnAk%2FH0az5le6kzSVKhNhF0I4A3UQMoGzPETwBP81BUUkFWbONP3Md8a26Fsq%2BDFmXdPIqQGwQL0IwucDXPH9azfelhypRuKMnXQ9WHO5RicgJPC8dP2FaPMcDxRb9yz290DYyDEHBTfjMmJynvrPRe6dMOEjnuqy55l3sNJJeEMtirXNGqyDsX3YasCtsH%2BLih35HmU8MY6D0EMwMkP5L7WM1eHq2SYNliC4JKCyMoiNecaAmYHJafHvBhV4%2F5aWHq7bM%2FmZ8J1tWSsFkACabq9R6f%2BuyzlYQdTnbYqFHDBb9R1KoxpgDj1d2bxuaCEl7EW7ovvWZDKRRkxcEuRINk5QsbBDOm8BtKpgS3u8tCdxYE0R91iIwEH1qV5raHfq0NVffY4MuC5uOq%2BJNULeMOIT6BSN5o%2BCHFmAgbdMfILzxlzj17O5VrEoiN1bZh3ocKYEMX%2FHsb14jANCisUZXjyeKAQkmRsuf2upMeAaJARkC7iZZ0i26HveJseqUDPpmHycVHFlk7m%2BhOJr84p8qTcGtojP6WcwSkwjMjAwgY6pgEjH9yeFgFrHcNXir%2FyMKPn46E%2BwfYUWTT9azon0%2B%2Fz4tWc7AkGZkC9Yc43pFQUMpyYgUmpGtFlye6qFaYpnISOtAe1gRGlj7iltHJNkPWAVGcKP%2Bz4oMhOQBnQwGlA7lRafBe2d7XQ7hGTyDYzfLBgGZFD5tzrdQeHwrGgGoQAXz63GYc11O%2B2iqa9caBCOfmdcrOLe6ifcNBKt07RNlV9W1AcoEtg&X-Amz-Signature=1bb0ba89fb9e83b6f5c0dec265b2c804a2897825740b5e2707d92b73b563eb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
