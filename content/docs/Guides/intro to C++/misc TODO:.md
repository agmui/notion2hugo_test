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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7VTQZ5T%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRz9TcpDIvHw7s9Q2vSOCi9EnhK7fPvU37KG8wXSnNfAiBMRachPMKAR40aaB3dQrT%2BxVHCQlZqi22oJR5iUZR6MiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMotw204Ob4jrklk3vKtwDIwO9udq3P27IzJwqXJQyEOQ16j3YLVsTVVEFLyxrCwjecvRMtSfz2lA9BHh7MWXGnF1bNl4BFlG9nho74Lo4xwKR8eeLEX5cYN9S2k%2F85OL49bhf45HvsAN4w6bwywuFXss1uYyTfUtGpkljXvcDLEMFSMYCHVEPZKkptC2GqDKQxc%2BtY4Hiqbz7L7ahRrj9FL0iT%2FsFYUHH%2FgzupgtetjYt2fw2NELq89FKjAglrpr61IJf%2B9MjhlNB8IaeeAQwpni7rPqcbliA240MI1hLnbSebuo%2BpCXHVoTbufquW9KJ2e%2BMxAY1Rvp4g4BPS8nmS%2F0YCThD9hXUmUWtrByJ8wyxu7D31MEeIpmH1eS6woH1QDXE12Sy3IeNzmWGKgXXPlbuRjJa8coQRshz2qWntSQ0qWHruxShD0rfEl%2F%2FgCu5I5lqLQwUDbS53MVq%2FcxEZgBJbUp1aK%2BwjrRm3A7aCzA0d%2FO%2BDEYAWbDSYDWFK11uBDd1w5XYT8wmibWOucEzjND5YYFuZxMGKr9iNDn41sZw25fg9O0Gs9Y%2FY2VmU8jEHUC7Kr4SqWeWUBflu9XXqvKC%2FT%2FpY98vp3yIHJs2cq9IENT7XfWcO5Z34InGSSUQM7oFB9hFqq2w98owxpnhvQY6pgEs80PpS6x0wvyuwAMhIFmbyt5i4BabfeRu2I2wqhUaLGQWOR%2B6yCNsBjPU%2F%2Faa6K%2BpXDF2TTt2N9enEKZ7KgR7YGsiqGdrmd3StjgBLYyVDCSS7rES%2BGpg%2BGPZSd7rHr2HG6a9F8O6fZhDtximHALgw5aelwp9kJjwtc7KAsgddx02TVhS24mgbOembqRYSG5kI0rTJNn2AejceyqBz5%2BU6AFT6PRV&X-Amz-Signature=288d89aec96b2b377df650cdff14ef84590b6ec2b4169c14e9f271644f218c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7VTQZ5T%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRz9TcpDIvHw7s9Q2vSOCi9EnhK7fPvU37KG8wXSnNfAiBMRachPMKAR40aaB3dQrT%2BxVHCQlZqi22oJR5iUZR6MiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMotw204Ob4jrklk3vKtwDIwO9udq3P27IzJwqXJQyEOQ16j3YLVsTVVEFLyxrCwjecvRMtSfz2lA9BHh7MWXGnF1bNl4BFlG9nho74Lo4xwKR8eeLEX5cYN9S2k%2F85OL49bhf45HvsAN4w6bwywuFXss1uYyTfUtGpkljXvcDLEMFSMYCHVEPZKkptC2GqDKQxc%2BtY4Hiqbz7L7ahRrj9FL0iT%2FsFYUHH%2FgzupgtetjYt2fw2NELq89FKjAglrpr61IJf%2B9MjhlNB8IaeeAQwpni7rPqcbliA240MI1hLnbSebuo%2BpCXHVoTbufquW9KJ2e%2BMxAY1Rvp4g4BPS8nmS%2F0YCThD9hXUmUWtrByJ8wyxu7D31MEeIpmH1eS6woH1QDXE12Sy3IeNzmWGKgXXPlbuRjJa8coQRshz2qWntSQ0qWHruxShD0rfEl%2F%2FgCu5I5lqLQwUDbS53MVq%2FcxEZgBJbUp1aK%2BwjrRm3A7aCzA0d%2FO%2BDEYAWbDSYDWFK11uBDd1w5XYT8wmibWOucEzjND5YYFuZxMGKr9iNDn41sZw25fg9O0Gs9Y%2FY2VmU8jEHUC7Kr4SqWeWUBflu9XXqvKC%2FT%2FpY98vp3yIHJs2cq9IENT7XfWcO5Z34InGSSUQM7oFB9hFqq2w98owxpnhvQY6pgEs80PpS6x0wvyuwAMhIFmbyt5i4BabfeRu2I2wqhUaLGQWOR%2B6yCNsBjPU%2F%2Faa6K%2BpXDF2TTt2N9enEKZ7KgR7YGsiqGdrmd3StjgBLYyVDCSS7rES%2BGpg%2BGPZSd7rHr2HG6a9F8O6fZhDtximHALgw5aelwp9kJjwtc7KAsgddx02TVhS24mgbOembqRYSG5kI0rTJNn2AejceyqBz5%2BU6AFT6PRV&X-Amz-Signature=7682a95ee34dbc5b295cba078a844d66e921f369622ee9b30f9abe36b2b2757e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
