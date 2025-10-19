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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLYRRCP%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCqHwClB7%2FwvBrtkX6DhgpffLKsfnLNhNPXnPVua%2FiCgwIgdkctrprMS0psBX4XnxSzuxO7neBBdw2MQNaPVtjWnTAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKaOC6R2KIaMS%2BNOSrcA6ijyeXgJXan1XXkAx4faDZuoYXleb%2Bb%2FF7tkiem5NUfzD44JlocNKuSsrG7jW8O53O83Ed94Y7YT5GQ%2BGNcrrqh%2B3MFmsraFR4NyrmncNpo8jptqlF0zXlxIo3heetrlUbiRu8BQiSZ%2FkmOwl04vZl%2Bgttv9mSn2cxLc9hs4M5l%2FONol0oDO6o%2BYi31%2FUXIAmomwExp2goEtgsYT3rYv4yP9jyIm79FOXISu3uiwFWQf%2Fcop40TURaw6j4AFr0iGPSaWrE6NyuG0Jw1VDruMPa3cmoGoHVAirmgyYTnmau863rzA%2BP6PyQPJnv%2BbAcdxFiCLi3qjJm9hvnWvek414TcCkywSkH6QDe7G3lJoTxHiijqmJviemv0b2RA5whbgeLeKxupo%2FcLCUBAQRTPl8FRiopmVnw0q%2FRsi9s4MGJABlWwinDDWeunqLpLDKLYmoLGdQbXWdTgvR1SH815wrIlzbYCeKLWyYeld1e%2FwVxWGqpuEeBqZMH2d5o3FC7zyBhDdiviWo0VNC%2B98LNygy9t4I64uGFpOg%2FNwhEZyzHzTnGoiuHWeNABjKL4%2FLMUHYGy%2Bm%2FwlKWq%2FZvp9a%2FuvvSvhLI4boxsc3MUhpPwKXVD40aGfTVC3nbvaCHPMP3%2B0McGOqUBRUHO6TgAHw8Ga5AwHHDsiS4g%2BxYlzAOatZmv0UjXSWcU8v7EwaS4Y76Tf97cI58FRv9eOje%2Fm5IbOzqQYnOKHQ0aoi4nQLNey1duqtSIcczEh9IWFy%2BFJj8LKS41zEE%2FAaEgjOgaGJJZEHiFtiP2QG%2F%2BXV%2F01u7f2s6pHWkcS4rzG6L%2FhZB%2BG5CKG%2FN9J3ucmGKyYuQeUlUB%2FA%2FrLnZFZzzNzUX5&X-Amz-Signature=64da3bd6eff68ec697487e7782b9b8c9aa45b717bd0181873935e61a7503fffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLYRRCP%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCqHwClB7%2FwvBrtkX6DhgpffLKsfnLNhNPXnPVua%2FiCgwIgdkctrprMS0psBX4XnxSzuxO7neBBdw2MQNaPVtjWnTAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKaOC6R2KIaMS%2BNOSrcA6ijyeXgJXan1XXkAx4faDZuoYXleb%2Bb%2FF7tkiem5NUfzD44JlocNKuSsrG7jW8O53O83Ed94Y7YT5GQ%2BGNcrrqh%2B3MFmsraFR4NyrmncNpo8jptqlF0zXlxIo3heetrlUbiRu8BQiSZ%2FkmOwl04vZl%2Bgttv9mSn2cxLc9hs4M5l%2FONol0oDO6o%2BYi31%2FUXIAmomwExp2goEtgsYT3rYv4yP9jyIm79FOXISu3uiwFWQf%2Fcop40TURaw6j4AFr0iGPSaWrE6NyuG0Jw1VDruMPa3cmoGoHVAirmgyYTnmau863rzA%2BP6PyQPJnv%2BbAcdxFiCLi3qjJm9hvnWvek414TcCkywSkH6QDe7G3lJoTxHiijqmJviemv0b2RA5whbgeLeKxupo%2FcLCUBAQRTPl8FRiopmVnw0q%2FRsi9s4MGJABlWwinDDWeunqLpLDKLYmoLGdQbXWdTgvR1SH815wrIlzbYCeKLWyYeld1e%2FwVxWGqpuEeBqZMH2d5o3FC7zyBhDdiviWo0VNC%2B98LNygy9t4I64uGFpOg%2FNwhEZyzHzTnGoiuHWeNABjKL4%2FLMUHYGy%2Bm%2FwlKWq%2FZvp9a%2FuvvSvhLI4boxsc3MUhpPwKXVD40aGfTVC3nbvaCHPMP3%2B0McGOqUBRUHO6TgAHw8Ga5AwHHDsiS4g%2BxYlzAOatZmv0UjXSWcU8v7EwaS4Y76Tf97cI58FRv9eOje%2Fm5IbOzqQYnOKHQ0aoi4nQLNey1duqtSIcczEh9IWFy%2BFJj8LKS41zEE%2FAaEgjOgaGJJZEHiFtiP2QG%2F%2BXV%2F01u7f2s6pHWkcS4rzG6L%2FhZB%2BG5CKG%2FN9J3ucmGKyYuQeUlUB%2FA%2FrLnZFZzzNzUX5&X-Amz-Signature=9f82dd41feda06321befc46ea7acac85b7e64522188dee1511cbd22bfb465767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
