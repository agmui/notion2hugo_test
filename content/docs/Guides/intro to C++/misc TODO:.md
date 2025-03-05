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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTG7CJN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rUYxQmypfW4fxfwmlDUDPneZj0d%2BsAIddUSyUGnc1wIhAKe7%2BDIlxUbOj8%2FwlZ28NOb3Cd3Tnon94%2B0kWZ5WidsBKv8DCBUQABoMNjM3NDIzMTgzODA1IgzmAh3iAuVNMHByb2wq3AN3UfniHOmqwfuKEtRbDD8dD1RqFnDmY7DZ4awfUN7awLepZRaNXYDp%2Bf71Ivgm5BTlXauQ5bGZPKDGBU9hqff%2FHoKgZlsqo%2FXW5vvDpz7vzLd4i7TxuOLL%2Bh%2Fwqyrr3ma7UO%2BasEy1fDB43m33pHMfcnaiObfXmg9mSez2TBof668ouhvXp3HZO%2BvqfGkFGxzrg4WuI2e5Vr%2BweB6tOv2qncmdnBZrYrqsv6gfMsQTQGZKTsppxi7LuUm%2FcMX6zbe67GkwRKKMYY9sZ2%2BsC9OiKZ7OdoPhmL30gw%2Fjz1sp7MswnkDi2Mw9%2BdBUpvjh03SCiqdi1bNQUNdLok9gRRssTRQhHpSoADx2nhRrNeU6xtoez9PAC5fWrfdJHf6W%2BsLGLO56jPcvV7KizMbjJo5Z4M10SMawFhSTuNDutU3aFqPa1UPmqXY8hLVnYaSZj9nGgShQHWm%2B69fQJm%2BUhPsAgs1TLgUkI8FLHFh%2BSufm2e24mjwX0NR83ZLEnpWTcmcdh%2BPazy%2FjVHZYj7%2Bq4tNSnmOTNE%2FZqDU1s1d%2BUbsVa1pJ5wqA%2BvkMei0X0lfPAQu69MS0kqOc3jtChG4%2FnzUJw1iwPW23cI%2BdCT3jNU5p93BeWToaIMt%2Btq20DTCM9KC%2BBjqkATawJB%2FwhexQgIAdGbB%2B9%2BICDzZx1y7n7cYPoLt1y0YiFpynrXQHWhwZBp2Ihd8f3GyCa3SP4CvEEWx1xYKYoAvkBusQcssQxHJeW4cGQh2WvgQuxST8AT3F0bbGal7vF2bcNJ0Ncg4FjHMldger%2BHbamqao%2B%2BgRv8xQRquE4Y3dJjUJ6DTbaAc9TgGl%2FLKRP%2BUA3RIS7zBFTPLDYb6%2F1jTwnlxJ&X-Amz-Signature=2357e96d9ea2917f71c480a4d463690b9af78e128ea3065b4ecea2036258578a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTG7CJN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rUYxQmypfW4fxfwmlDUDPneZj0d%2BsAIddUSyUGnc1wIhAKe7%2BDIlxUbOj8%2FwlZ28NOb3Cd3Tnon94%2B0kWZ5WidsBKv8DCBUQABoMNjM3NDIzMTgzODA1IgzmAh3iAuVNMHByb2wq3AN3UfniHOmqwfuKEtRbDD8dD1RqFnDmY7DZ4awfUN7awLepZRaNXYDp%2Bf71Ivgm5BTlXauQ5bGZPKDGBU9hqff%2FHoKgZlsqo%2FXW5vvDpz7vzLd4i7TxuOLL%2Bh%2Fwqyrr3ma7UO%2BasEy1fDB43m33pHMfcnaiObfXmg9mSez2TBof668ouhvXp3HZO%2BvqfGkFGxzrg4WuI2e5Vr%2BweB6tOv2qncmdnBZrYrqsv6gfMsQTQGZKTsppxi7LuUm%2FcMX6zbe67GkwRKKMYY9sZ2%2BsC9OiKZ7OdoPhmL30gw%2Fjz1sp7MswnkDi2Mw9%2BdBUpvjh03SCiqdi1bNQUNdLok9gRRssTRQhHpSoADx2nhRrNeU6xtoez9PAC5fWrfdJHf6W%2BsLGLO56jPcvV7KizMbjJo5Z4M10SMawFhSTuNDutU3aFqPa1UPmqXY8hLVnYaSZj9nGgShQHWm%2B69fQJm%2BUhPsAgs1TLgUkI8FLHFh%2BSufm2e24mjwX0NR83ZLEnpWTcmcdh%2BPazy%2FjVHZYj7%2Bq4tNSnmOTNE%2FZqDU1s1d%2BUbsVa1pJ5wqA%2BvkMei0X0lfPAQu69MS0kqOc3jtChG4%2FnzUJw1iwPW23cI%2BdCT3jNU5p93BeWToaIMt%2Btq20DTCM9KC%2BBjqkATawJB%2FwhexQgIAdGbB%2B9%2BICDzZx1y7n7cYPoLt1y0YiFpynrXQHWhwZBp2Ihd8f3GyCa3SP4CvEEWx1xYKYoAvkBusQcssQxHJeW4cGQh2WvgQuxST8AT3F0bbGal7vF2bcNJ0Ncg4FjHMldger%2BHbamqao%2B%2BgRv8xQRquE4Y3dJjUJ6DTbaAc9TgGl%2FLKRP%2BUA3RIS7zBFTPLDYb6%2F1jTwnlxJ&X-Amz-Signature=550553253523aa31bbf059baa4d868996d8c4a689794096460ec2a71b5d9790a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
