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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSWS4V5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPHl0venr3%2Bo6Z0OYNFHXmOq2qyy%2Bu6dGz4zM2hqNJIAIgHYkqTMvmk%2FKnJW71PenbeUMSvb%2FY3jpUJB7BSiDC7sgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAi14zkffT%2Bg3rKpyrcA%2B%2FtY5%2BLT%2FwlIL5AoPmgudO%2Bx0sTEwpP99bZUBfBzLID77kYwcybpGcizxgTpL6eD4nJ0Vv%2FzNJ4k0bH74b3DRUZgSbZH1rkFkhWTE68xvNu8uDUaZW6exL1buZfeh0wfIRMT%2FYsfgic4CIwaLGwvFUncM9lX51uUjyR7wNWb5M3vxUc0iZ%2FJGcaf3Ppslm%2B2YLcir1kTOhQqZtf6J4OIpACqiS0K%2FRRR8C7VUBVEqdXl5yedHmkoPXxSkPi4uupjKGZP6lz3AuK6ivWOlGY5RI0SDzarpBOMRuax126EUQRME1MqZ0e56GR0DwIkkaEJh96vkjne7Ik%2BB2ou4Jhqq2R7yQuh9nopmG5%2FlXPBgKdWfuYRvLI8xTH5llDTV5na1ymwhjbcQUhiHsg3n8d6HpkRvIYVEnmLnu%2F0tFaigVxc67OYyno9zYhq0%2BbNQ3RQ890PdT8%2BA3hdTf9iIq8vcbHgUab3atWuEdkdc5GuV8U6Unt99XKM9sgfYgUv1bmo4B9MHigxUU4G6Wj8LyAEBO0VlwocWhxwMz1ERbUoC9hv83NKsDOFe7MM5N7AiLT8J81XmkpFh6Y%2B6AwCyNh1AlPrXdX8753k3tslaEXQn1gX3ixYnQsroCx3fHcMPHv%2BMAGOqUBbhcWLRsoBVIfjHFtKDH%2B%2FXnwuGsl8jhbleDaRUebG2E6Dacx8CHu1EGGa41vGB3GU9r%2FY8ssYu7Rtcje1%2F7EEy9oZGiKgPazSagGnysguPqHDm0C2K0QEx3LxSZEaJ4TqXa6y%2FR6M3ozeigLh%2Br%2FVKi6SZGUYMbVY3oxRaWtjVXpGJdGD%2FtBDTfzbnvDTWaRVTDPJhG0%2F40n%2BOndy43ByZmgSrCd&X-Amz-Signature=7f541b8a9d6a08a599f34451b4922edf5e60a53fa4c918a960397fd3b3a54f66&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSWS4V5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPHl0venr3%2Bo6Z0OYNFHXmOq2qyy%2Bu6dGz4zM2hqNJIAIgHYkqTMvmk%2FKnJW71PenbeUMSvb%2FY3jpUJB7BSiDC7sgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAi14zkffT%2Bg3rKpyrcA%2B%2FtY5%2BLT%2FwlIL5AoPmgudO%2Bx0sTEwpP99bZUBfBzLID77kYwcybpGcizxgTpL6eD4nJ0Vv%2FzNJ4k0bH74b3DRUZgSbZH1rkFkhWTE68xvNu8uDUaZW6exL1buZfeh0wfIRMT%2FYsfgic4CIwaLGwvFUncM9lX51uUjyR7wNWb5M3vxUc0iZ%2FJGcaf3Ppslm%2B2YLcir1kTOhQqZtf6J4OIpACqiS0K%2FRRR8C7VUBVEqdXl5yedHmkoPXxSkPi4uupjKGZP6lz3AuK6ivWOlGY5RI0SDzarpBOMRuax126EUQRME1MqZ0e56GR0DwIkkaEJh96vkjne7Ik%2BB2ou4Jhqq2R7yQuh9nopmG5%2FlXPBgKdWfuYRvLI8xTH5llDTV5na1ymwhjbcQUhiHsg3n8d6HpkRvIYVEnmLnu%2F0tFaigVxc67OYyno9zYhq0%2BbNQ3RQ890PdT8%2BA3hdTf9iIq8vcbHgUab3atWuEdkdc5GuV8U6Unt99XKM9sgfYgUv1bmo4B9MHigxUU4G6Wj8LyAEBO0VlwocWhxwMz1ERbUoC9hv83NKsDOFe7MM5N7AiLT8J81XmkpFh6Y%2B6AwCyNh1AlPrXdX8753k3tslaEXQn1gX3ixYnQsroCx3fHcMPHv%2BMAGOqUBbhcWLRsoBVIfjHFtKDH%2B%2FXnwuGsl8jhbleDaRUebG2E6Dacx8CHu1EGGa41vGB3GU9r%2FY8ssYu7Rtcje1%2F7EEy9oZGiKgPazSagGnysguPqHDm0C2K0QEx3LxSZEaJ4TqXa6y%2FR6M3ozeigLh%2Br%2FVKi6SZGUYMbVY3oxRaWtjVXpGJdGD%2FtBDTfzbnvDTWaRVTDPJhG0%2F40n%2BOndy43ByZmgSrCd&X-Amz-Signature=008f857accb845a80d7cc44d83a7a5f559498f4d70451f4a5bd4cbb75d404c60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
