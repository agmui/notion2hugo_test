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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=e97916ae18ba5e3b66e010f118578133ae465a647a0e914aa826d7c5fe2c70c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=27c9e6766d7da12b6ab15f712933233d7bacd12121e3813701af9e1683026d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
