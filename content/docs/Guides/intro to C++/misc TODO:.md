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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLKX43R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC06ZRLikGqSTY7J7Llm9fSuaz%2BW8%2Fljy1RQfsmJjpBGAIhALc3hvX6DefYpUcP80z0jMDPiFnDmJiMGzkFPz4qFxZVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwJCLq1WNIAsRdX%2BvAq3APMY%2Fw1%2FffQRi3ZUYmAZ50N9QsI7tzwI0Ow0ycQMbFjqhaXSt7sY1d2KEeQ1jOj4SbBxZLNDVhDwyx5xbEFy%2FAD27D1XKTnR7nyaHVpOP2glvOhuVqNrEJapULMcdAQIoWyJCcbDtIl2t3jMopKF0fdvDUIDSvg4n%2BBNFUfq4KsS9HEdLkZUJWOalG0EKW4401mcaZ0cmCzfBw0zqLWwOlQ0mQ1ctzKjBGk7TefUIbYumcg73AUFQ1kaPqfONML41B0rKGVnbLZTa86H9mD1Tprsk9vkH4hVpySfol7WjIwoJqxQeq6NpyZwlY6Xbo%2B1jqyM3RKWZc%2Fxqj2wdLwF6SN1%2FLM1wqHUWqG51pm4pCJfI2aa8M0i78dNFSYNeJhOgYdMiFO0OZEFJ44jAguCknKlcfVL9Bs47UBjzfdhuS%2FTYLBF72oiTEkXjOQqvUpKJLKTALeWoqdX52OBY%2BZUg5JOzBQjfz2UZC%2F%2B4UqdkigLUkTsbe4hOxWuDwNICZWjnmrMBm6KbLBP%2BSUeNl2lBlg2FbaoLHPumuaYHT1OC%2FPV%2BQr%2Fywq1FLt6ojn0BfCMjU%2FFqSHrQue3zpMxIeTpyWohICp%2BPsNyvvEn7YYOGgu26baufufri2VkrAgJzCm8arDBjqkAUFHUgsJZkRBtgl%2BahuWl4S3x6AOuSNugeN83QYvNPpJBNJ6%2FwWpxN%2FLRylxaZOb9cg%2BFta3SbPl89aYwLzPLHurGN63oMscyvPrG9vDM3kicZd3%2Ff26sS2HirQfwTHUP98V%2FevClPKAau9bYFjeXceg4QE7vhUhOgQkyLu5m6NcfRt6DEjMoccYUF2W1fPN7xtiw%2BwTukQF9btaxCP1QcFFYfsL&X-Amz-Signature=9c5a72a32ed660cfa12541443794e2532a307d662f9417ff90d76fb2b572e99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLKX43R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC06ZRLikGqSTY7J7Llm9fSuaz%2BW8%2Fljy1RQfsmJjpBGAIhALc3hvX6DefYpUcP80z0jMDPiFnDmJiMGzkFPz4qFxZVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwJCLq1WNIAsRdX%2BvAq3APMY%2Fw1%2FffQRi3ZUYmAZ50N9QsI7tzwI0Ow0ycQMbFjqhaXSt7sY1d2KEeQ1jOj4SbBxZLNDVhDwyx5xbEFy%2FAD27D1XKTnR7nyaHVpOP2glvOhuVqNrEJapULMcdAQIoWyJCcbDtIl2t3jMopKF0fdvDUIDSvg4n%2BBNFUfq4KsS9HEdLkZUJWOalG0EKW4401mcaZ0cmCzfBw0zqLWwOlQ0mQ1ctzKjBGk7TefUIbYumcg73AUFQ1kaPqfONML41B0rKGVnbLZTa86H9mD1Tprsk9vkH4hVpySfol7WjIwoJqxQeq6NpyZwlY6Xbo%2B1jqyM3RKWZc%2Fxqj2wdLwF6SN1%2FLM1wqHUWqG51pm4pCJfI2aa8M0i78dNFSYNeJhOgYdMiFO0OZEFJ44jAguCknKlcfVL9Bs47UBjzfdhuS%2FTYLBF72oiTEkXjOQqvUpKJLKTALeWoqdX52OBY%2BZUg5JOzBQjfz2UZC%2F%2B4UqdkigLUkTsbe4hOxWuDwNICZWjnmrMBm6KbLBP%2BSUeNl2lBlg2FbaoLHPumuaYHT1OC%2FPV%2BQr%2Fywq1FLt6ojn0BfCMjU%2FFqSHrQue3zpMxIeTpyWohICp%2BPsNyvvEn7YYOGgu26baufufri2VkrAgJzCm8arDBjqkAUFHUgsJZkRBtgl%2BahuWl4S3x6AOuSNugeN83QYvNPpJBNJ6%2FwWpxN%2FLRylxaZOb9cg%2BFta3SbPl89aYwLzPLHurGN63oMscyvPrG9vDM3kicZd3%2Ff26sS2HirQfwTHUP98V%2FevClPKAau9bYFjeXceg4QE7vhUhOgQkyLu5m6NcfRt6DEjMoccYUF2W1fPN7xtiw%2BwTukQF9btaxCP1QcFFYfsL&X-Amz-Signature=27361c08755dfc384d64ffda54e3adcaa792ae2dc3f084e1ffd24a297eafdd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
