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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYXIOH2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIH8icN5YZ1%2B2XalhUTeHCMOtXlGsjeLD0abHAN76Y6voAiBzbjmy6MUQMMlDosgQ2Cz8J%2BMsMfnbt5qhOjQeO8fKVyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMUdedUEE7A7yLyOzCKtwDO4sV8jHp6iMQad34RYOWmyQxsb4QQ%2BwabEvjKyu%2BLP9ZlWjbLXyHcq%2F4bBarz3xOqzJj37pE4hHspXHvSNxu2iArV8HyIHKJcKHbQF%2FG4QYm3XMNopNMAMX6SjUaGxy0KGdybcGPrJqZ9sihmGd4rXSDGRjvrqvf6%2BJoBY4GJRRI7s0OQEI0F2rNAA9UpX%2F7lGqNisaW9eRpjfSRrWAorVotAjjilLXssimmBpTBYnYsIQ9QpScAitTb%2BospOd3AJZx5tAuWEeeVU3GgHpG8USZueVzx48EBS4UrUHlKv%2F1bHiO4FocgM3R%2FiBZMu42MwZMH2IbtBsXL3HBHb13igGRV8EmHHxEy3W6%2BzLl0%2Fk%2BsPtOpZGaVsEn%2FIeKQ3Qk7JKlbwiUEHEg%2F26nnJpNPUWlInnM1eFpnV9lngOn8uwA44NsdsISr2RSna1Y0tMBPytitdI2ujgIHshI9bhaeOeyEOiaUJzj7zIpD9mUBKkB4Umae%2BspLgVq7E%2B%2FwkAwIvVYLMBiEoU5IxWRO6lmpF%2Bg2uN6Z2jLls9In67TT%2BR1DC6iLNlmRcl%2FSQ8kUcdYgeWgPakBQFgx0O0mRPstoz2yri4xut5d0pHh1yg%2BJdsV8qk7nThzuhmswBdgwoK37wQY6pgHju9d90mlAmrD5%2F3vurgSRtO8mZ9S6IlHc4Gw26LokYjreLx%2F0CzGM9rI8u6viSTalYa7qdppaVCnrv3RIlPHulnoMyPFWC4qZNkuIPn6NhBYHI2bqLyUsaHBVPs0sV5PKLlGyQXVgKW8kInc3bWZ5r6EXOEQB57CDd%2BRpXhJOu5VyzLMWkhT0W6TeAhjijZe5E78ZM1DK9KBD%2FYaT6Z22TfEqti7Q&X-Amz-Signature=2b23a735b2f7827683e607337d46bf97cd7fab862c6e01f1faf0c7d24319b07e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYXIOH2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIH8icN5YZ1%2B2XalhUTeHCMOtXlGsjeLD0abHAN76Y6voAiBzbjmy6MUQMMlDosgQ2Cz8J%2BMsMfnbt5qhOjQeO8fKVyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMUdedUEE7A7yLyOzCKtwDO4sV8jHp6iMQad34RYOWmyQxsb4QQ%2BwabEvjKyu%2BLP9ZlWjbLXyHcq%2F4bBarz3xOqzJj37pE4hHspXHvSNxu2iArV8HyIHKJcKHbQF%2FG4QYm3XMNopNMAMX6SjUaGxy0KGdybcGPrJqZ9sihmGd4rXSDGRjvrqvf6%2BJoBY4GJRRI7s0OQEI0F2rNAA9UpX%2F7lGqNisaW9eRpjfSRrWAorVotAjjilLXssimmBpTBYnYsIQ9QpScAitTb%2BospOd3AJZx5tAuWEeeVU3GgHpG8USZueVzx48EBS4UrUHlKv%2F1bHiO4FocgM3R%2FiBZMu42MwZMH2IbtBsXL3HBHb13igGRV8EmHHxEy3W6%2BzLl0%2Fk%2BsPtOpZGaVsEn%2FIeKQ3Qk7JKlbwiUEHEg%2F26nnJpNPUWlInnM1eFpnV9lngOn8uwA44NsdsISr2RSna1Y0tMBPytitdI2ujgIHshI9bhaeOeyEOiaUJzj7zIpD9mUBKkB4Umae%2BspLgVq7E%2B%2FwkAwIvVYLMBiEoU5IxWRO6lmpF%2Bg2uN6Z2jLls9In67TT%2BR1DC6iLNlmRcl%2FSQ8kUcdYgeWgPakBQFgx0O0mRPstoz2yri4xut5d0pHh1yg%2BJdsV8qk7nThzuhmswBdgwoK37wQY6pgHju9d90mlAmrD5%2F3vurgSRtO8mZ9S6IlHc4Gw26LokYjreLx%2F0CzGM9rI8u6viSTalYa7qdppaVCnrv3RIlPHulnoMyPFWC4qZNkuIPn6NhBYHI2bqLyUsaHBVPs0sV5PKLlGyQXVgKW8kInc3bWZ5r6EXOEQB57CDd%2BRpXhJOu5VyzLMWkhT0W6TeAhjijZe5E78ZM1DK9KBD%2FYaT6Z22TfEqti7Q&X-Amz-Signature=e5fb418de9afac7cb0383286c55ba63db44724e7eff5afbeedbccea8d00f4758&X-Amz-SignedHeaders=host&x-id=GetObject)

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
