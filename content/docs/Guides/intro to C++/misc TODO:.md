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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RVX2QD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiB7S3mQbBt8d4tigo608iW3Qt68VYI85ce6e33vPuAIgAsYverfQS75g1HeBhjpmHQsuL%2F3l8rOIfesUWT%2FYvMQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvrCZrBHRK1DJB%2BfSrcA55FCRrnADnBofFsFXYz3ThBqpKRZ5JUgm8NmQO7yw1ERQ6%2FiGzQJif1YRDBe%2BYAewA9TKMhmTMGjH2F1S2b5d7zYXmuVoWF0OCqYTDXkjLo5D9%2Bwdmm7vVhAEwfSZPZxIcku8fbeQIqTNhg9QbNAAFuziERPmLm4Coq%2Fmngh32%2F3xY3BWt0BK53ZYdiMNdn3IC9dE8bOSCwfqDmaj8GQ37U3VJ6PBCPyPUn9PzAncKKOtflfz1G8wqMMjkAlXXEVUITp5CndMGzAspyRX1eRPcaOlHHYAr4d7QOOEhff96dbho5bVsgSrBi2MjronT1xwlLRyGyjCr1CciGayub%2BRe%2F%2Fsu41%2BhKCk88TbblRl8BBQghWxga3g7BnxOU5d7neaDXMIRgkfBVxqdEkswbJj3143zz4dy5HjVk6Dxpgwkd44ZYXCZ2RPOBknaM%2BME%2Bv7SbGwUfIcJTvz9XVckg8tmFP0mflzQ4iyg0HCjM2xMf9vgmMez01WZUE3WB8R826kGZ07MCjd%2BCdHnXszTztOxYf3GsUfY2C6lOyNrwui75mvV89iHS1NGz2yLD8IfUnR9YhDj0%2FBAKfX0ic2NGB669jK2bj0y30hZ3GPnLXUYFMeIWXMT8u9WR9fQ4MJbf88MGOqUBs1JQS0f0eY0vlc9rREQvSV%2FXiHqty3QeY1jmaa3rf9OGcb6D2Yq3nQ0pJWgw0EIdrqhVpyt4R%2BuLdUPL6VlbFjEbuuXmN7DvpHHrGrIOgnG3kpRbBVji1Av3em5SZ%2ByyMusEopRA2H4v%2BDrbUv10k1dleTTgeJL6J9G6NTsJCmhPm34MNLCf868A5uphXfhK2HUpu2ndjEPQBILxel179YfdcwLW&X-Amz-Signature=9be6af092bcb38607d419931914fe7333592ac29dfbb30d1dd665d6d67f05cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RVX2QD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiB7S3mQbBt8d4tigo608iW3Qt68VYI85ce6e33vPuAIgAsYverfQS75g1HeBhjpmHQsuL%2F3l8rOIfesUWT%2FYvMQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvrCZrBHRK1DJB%2BfSrcA55FCRrnADnBofFsFXYz3ThBqpKRZ5JUgm8NmQO7yw1ERQ6%2FiGzQJif1YRDBe%2BYAewA9TKMhmTMGjH2F1S2b5d7zYXmuVoWF0OCqYTDXkjLo5D9%2Bwdmm7vVhAEwfSZPZxIcku8fbeQIqTNhg9QbNAAFuziERPmLm4Coq%2Fmngh32%2F3xY3BWt0BK53ZYdiMNdn3IC9dE8bOSCwfqDmaj8GQ37U3VJ6PBCPyPUn9PzAncKKOtflfz1G8wqMMjkAlXXEVUITp5CndMGzAspyRX1eRPcaOlHHYAr4d7QOOEhff96dbho5bVsgSrBi2MjronT1xwlLRyGyjCr1CciGayub%2BRe%2F%2Fsu41%2BhKCk88TbblRl8BBQghWxga3g7BnxOU5d7neaDXMIRgkfBVxqdEkswbJj3143zz4dy5HjVk6Dxpgwkd44ZYXCZ2RPOBknaM%2BME%2Bv7SbGwUfIcJTvz9XVckg8tmFP0mflzQ4iyg0HCjM2xMf9vgmMez01WZUE3WB8R826kGZ07MCjd%2BCdHnXszTztOxYf3GsUfY2C6lOyNrwui75mvV89iHS1NGz2yLD8IfUnR9YhDj0%2FBAKfX0ic2NGB669jK2bj0y30hZ3GPnLXUYFMeIWXMT8u9WR9fQ4MJbf88MGOqUBs1JQS0f0eY0vlc9rREQvSV%2FXiHqty3QeY1jmaa3rf9OGcb6D2Yq3nQ0pJWgw0EIdrqhVpyt4R%2BuLdUPL6VlbFjEbuuXmN7DvpHHrGrIOgnG3kpRbBVji1Av3em5SZ%2ByyMusEopRA2H4v%2BDrbUv10k1dleTTgeJL6J9G6NTsJCmhPm34MNLCf868A5uphXfhK2HUpu2ndjEPQBILxel179YfdcwLW&X-Amz-Signature=236074c008d2a8ff64dd55e26e96c38a51d7a557644bd00a7ed281931f0c6163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
