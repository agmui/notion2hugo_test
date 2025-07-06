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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOKUJKW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDvBqHj8KNKBf6FlXyxKF%2Fy2qGXYBO8AwC1iy6wz5VbYAiEAxgE17tCUvIVv8KQjBn5UwNfAOg99F1mxJ4VaTjs7B3cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDbVkzi8IIiRovLvyircA9t49X4Y20vPnjplEvxXdmce7cZx6dfAyEGbdOsZaHo4Q60BxJJhUZw5EMrrVN7vqXhKosOWUMZ5vPrCKRFpY%2Fe9v7LMSSV5llVa71ZCX6N6mdPSj%2BTnJu%2BJlDK5In3aci5N8uyR0awZqUq0F4fsn62cvKms9sBmC%2BOTY3%2BnxOSR9qY0kyaWhBBo%2BYXRTnasB6rEaMsU8bo3fGIWnHQ%2BbCqRkRQ0iV6GAyEiCjyJhoKYipzNO%2FpzyfwuAoj4M%2FZ8v5NfQZbtzdSszO5J2cvNQrRRJW%2B6GJzWcxkr7xItJXS8rJSAlyItXnHE8vi8tgAUDhVw6gdnQXtFutlE3yAfiMEjX05EQiaQCWY2Es1dvxatBfVoVUm1omwRv9DZmQkiMmN%2BU995BLJQA6MpY2%2BTULlqy6m3PEDTvm1sZmsYfHsDEjQ%2BlD0O2o4kYv0VEeJhYJL39H%2FbcQlF%2FHaBjQNH5uASvqxBqIOtuoi8Gq3QblcF5%2FEu%2B8uzdKVicSjmvNvcYkdD%2FsNzKZODGPXxaN8LVSLOvZwbyRm0At2Kw743lKxMchhV40XXsrPjGXfK%2FewsfzvTgALPk7iencXsFc2Fn8twJ9r4HcT3XMAewEVpjv19lJPm98RvAZxoOiGMML38qsMGOqUBp9qw%2FXuPYrNTqRgmLnsF7nfiX7H93s%2FCQIFdaOYkrXmiJXAMsZTJP1naqV9jevi8FEczfkxr0mwQVtdIS9ibRu4Iud0gwMS9%2F3BRGQsQ0ewA%2Be1zly4oIprklt%2F0psdMGuV8GvYABzH3N9ODEtFFC5oUkumnx8%2BHQRcDPwZz893XD43Ft2uCLb8G9Jz6y9f2GU%2BcoCfDlZGrmQNlJ280X8bYV7CN&X-Amz-Signature=42c917dce08e5c51911bf7644c64acfc41708e0f2c759e3f4e50e60dd60a85e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOKUJKW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDvBqHj8KNKBf6FlXyxKF%2Fy2qGXYBO8AwC1iy6wz5VbYAiEAxgE17tCUvIVv8KQjBn5UwNfAOg99F1mxJ4VaTjs7B3cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDbVkzi8IIiRovLvyircA9t49X4Y20vPnjplEvxXdmce7cZx6dfAyEGbdOsZaHo4Q60BxJJhUZw5EMrrVN7vqXhKosOWUMZ5vPrCKRFpY%2Fe9v7LMSSV5llVa71ZCX6N6mdPSj%2BTnJu%2BJlDK5In3aci5N8uyR0awZqUq0F4fsn62cvKms9sBmC%2BOTY3%2BnxOSR9qY0kyaWhBBo%2BYXRTnasB6rEaMsU8bo3fGIWnHQ%2BbCqRkRQ0iV6GAyEiCjyJhoKYipzNO%2FpzyfwuAoj4M%2FZ8v5NfQZbtzdSszO5J2cvNQrRRJW%2B6GJzWcxkr7xItJXS8rJSAlyItXnHE8vi8tgAUDhVw6gdnQXtFutlE3yAfiMEjX05EQiaQCWY2Es1dvxatBfVoVUm1omwRv9DZmQkiMmN%2BU995BLJQA6MpY2%2BTULlqy6m3PEDTvm1sZmsYfHsDEjQ%2BlD0O2o4kYv0VEeJhYJL39H%2FbcQlF%2FHaBjQNH5uASvqxBqIOtuoi8Gq3QblcF5%2FEu%2B8uzdKVicSjmvNvcYkdD%2FsNzKZODGPXxaN8LVSLOvZwbyRm0At2Kw743lKxMchhV40XXsrPjGXfK%2FewsfzvTgALPk7iencXsFc2Fn8twJ9r4HcT3XMAewEVpjv19lJPm98RvAZxoOiGMML38qsMGOqUBp9qw%2FXuPYrNTqRgmLnsF7nfiX7H93s%2FCQIFdaOYkrXmiJXAMsZTJP1naqV9jevi8FEczfkxr0mwQVtdIS9ibRu4Iud0gwMS9%2F3BRGQsQ0ewA%2Be1zly4oIprklt%2F0psdMGuV8GvYABzH3N9ODEtFFC5oUkumnx8%2BHQRcDPwZz893XD43Ft2uCLb8G9Jz6y9f2GU%2BcoCfDlZGrmQNlJ280X8bYV7CN&X-Amz-Signature=930a67ef01fa7ed72702c2165a6a16ef36501a82071af7b6efdc79f82fb8b416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
