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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRNN4J5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDBIYIJorHc6oFcCP%2BYSzCLWcK%2BSt4FA4SD49jjGuUqvAIhANbUWs3iCqxltZlYt8EKjwH9aepzAfyxY7iKccWsXudaKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJdA8F7PAXnUtr%2B6cq3APUEXNpiMBfaEULgG%2BPlf%2FO0T1pkO5mNABolkNcdyeIpAb9IuDCkp1pEx8dOhPuq8C0yvht1JabqjbE7baPgOJmcVbHWBhncJZUey9ip2IsMo8pE9VtN8sPtNRRWmxViBTDUyZOZGOrKm%2FvwQ54XxtlzkKB6YePzxXiIk%2F%2BhteV%2B4ZcBEGXvzl921ZVLp2DGbWFy3VLw3iCHixcZBP48L1eMr0kdnGsXD%2BgGTFJj3kXE7qwYM%2BYZZakH3QbaYov%2F3wmfWg5i2Lo0RC06c7aRbBjWGUGquIazZgYMq1a%2F7XLFWNdZyeahTAXz3jH1pHu9ssD6MhM%2FUffpcFnx99gb2jpEtvkhcUIB%2FeVgyFxehykk2MfNZVzAt7ZW0toM9dMDdyWoAx6q3W2ZGzxveZXAORxnZEGATDaCDAeh%2B3%2FVDcT5J0QeQO1gZlB2KeqeitujkBt8tYSA4DvNN66pBaBwQYuHjP2YuJ8%2B9N7eplG50ZSac0j2PXOf90%2FFkE6F1YsE2h0uOYTSFQzmzLtNkGDQG7sBwyL%2BAfrUh0IMoz4kc8BxJPq5cbes3oLtF8W7e5OxdcKNxu9mAecW2SsgjDCXZLv%2FOdXhngB4Q%2Bxj8qQlrGdunJJq7Db759lj8Ti4DDf%2FqDLBjqkAcRQkLg4kz8bWG85UblaSfPBIWEeXn291l3oe2YuE60MY%2BVmggcZMLnqkerle3NPALHNwK8BWsRhLa0A1yvGs0Y5QtMz6QdUVefD7P%2B0Boa9iZUhRBP%2FBD912rf5DVfuvSSMHerflBC%2BESyaJokeau6bQXDMdXazJPA09bIqpX7sjKLnBvCSCGZ9oVJKjJ1EmYWt3LEQ%2B%2BTc%2B7LlGkn%2B3L6CkoA9&X-Amz-Signature=49725ab0d3fd8638617be55d05b6ceaa67c0282ea219a2f214e193cd7031fa64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRNN4J5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDBIYIJorHc6oFcCP%2BYSzCLWcK%2BSt4FA4SD49jjGuUqvAIhANbUWs3iCqxltZlYt8EKjwH9aepzAfyxY7iKccWsXudaKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJdA8F7PAXnUtr%2B6cq3APUEXNpiMBfaEULgG%2BPlf%2FO0T1pkO5mNABolkNcdyeIpAb9IuDCkp1pEx8dOhPuq8C0yvht1JabqjbE7baPgOJmcVbHWBhncJZUey9ip2IsMo8pE9VtN8sPtNRRWmxViBTDUyZOZGOrKm%2FvwQ54XxtlzkKB6YePzxXiIk%2F%2BhteV%2B4ZcBEGXvzl921ZVLp2DGbWFy3VLw3iCHixcZBP48L1eMr0kdnGsXD%2BgGTFJj3kXE7qwYM%2BYZZakH3QbaYov%2F3wmfWg5i2Lo0RC06c7aRbBjWGUGquIazZgYMq1a%2F7XLFWNdZyeahTAXz3jH1pHu9ssD6MhM%2FUffpcFnx99gb2jpEtvkhcUIB%2FeVgyFxehykk2MfNZVzAt7ZW0toM9dMDdyWoAx6q3W2ZGzxveZXAORxnZEGATDaCDAeh%2B3%2FVDcT5J0QeQO1gZlB2KeqeitujkBt8tYSA4DvNN66pBaBwQYuHjP2YuJ8%2B9N7eplG50ZSac0j2PXOf90%2FFkE6F1YsE2h0uOYTSFQzmzLtNkGDQG7sBwyL%2BAfrUh0IMoz4kc8BxJPq5cbes3oLtF8W7e5OxdcKNxu9mAecW2SsgjDCXZLv%2FOdXhngB4Q%2Bxj8qQlrGdunJJq7Db759lj8Ti4DDf%2FqDLBjqkAcRQkLg4kz8bWG85UblaSfPBIWEeXn291l3oe2YuE60MY%2BVmggcZMLnqkerle3NPALHNwK8BWsRhLa0A1yvGs0Y5QtMz6QdUVefD7P%2B0Boa9iZUhRBP%2FBD912rf5DVfuvSSMHerflBC%2BESyaJokeau6bQXDMdXazJPA09bIqpX7sjKLnBvCSCGZ9oVJKjJ1EmYWt3LEQ%2B%2BTc%2B7LlGkn%2B3L6CkoA9&X-Amz-Signature=f4055b95419595fd0c3219c8d7eae10e624230c15bce69db7196300d57369247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
