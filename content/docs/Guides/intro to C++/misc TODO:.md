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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUTOSWL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpxGDtqI432sGpfuf%2F3JQWYhKLKFRvdFUxgo8%2FCuuCcwIhAIrr8LyuoK6ShTweONb6TdadL%2BFxS7NwKJiBB9o%2BH5ufKv8DCHMQABoMNjM3NDIzMTgzODA1Igwvogxvolye5qqXvDMq3APEC51puehNUHC0xmFP56lLjAxPYfLRIZ%2Brm77E6GF8iclz5XBvvm9NHB66lLr1R0lI%2Byi0D%2FBcrAR%2FYCrOSDmSI6SXl7qFcJRHW9rrbq%2Bk0Ls6yDtgNF1Mhi%2FrDhVEFEY2uzJ31MTq%2Bn7kdOijRTkiJbNvkW6wePZYNvwWA7TsdDk1BsGp%2FVS%2FeGd8Ed7I37bExzRldtYS32YJJFSS5PC7QOI7uCJFI0vhDkl0t7%2Bv%2BC2kM8pNuYkM6oHvm6tq26QwlKiJB8wPWbdv7TQ3l%2FZ9MozCNCU%2BM8SQ8AOS%2FDhUlxphEqfnA8t2att9VpdVl7PD5WpaVHSgGQahmzLpUYaLO1yJ%2FpLVLJrHbmxfPKEMAhoS0lCxGUDUSgwkJjhF2rxbkPlgcO4ZxumiwyMEE01%2Fuhzj6cZPrPY4urFoNbPhmcdbFjkyseFw%2BVk%2Bl%2B35%2BpfMBf%2Bg5fTsW2q7qW3Unqql%2By884UXcoaFajLj9vSDVuG8uxNJ8Lt1tMemoYySlrg%2FjfM6dF7pscw%2B1u1KWxZXKytF%2BEA97MtaNu4eA2VmOfNss%2BzD7t%2BtrUNStKVuTEvHSHlxxuW5nfsxAJgeK3JQOZCyb8ro5lStHHPrJxjjCEVC%2Bi7d7QIhs1BVETDDO0%2FnCBjqkAcQN4xtMgR0dRJ%2FyU56kKki2pxvPejxIWtT%2BaYL%2BYq%2BqAnMNlL%2FtNcbzI0HDEWK%2BytW9EcEv32nWQOBBomGpo3zcN7EkgSh0mYIayEIJF44WdRVLBdXiW6IbzXgZMco5AwYgx9%2FYTjoSRvbKhzS00yJ9KyoC7%2F1o8%2B7FIhrYXKyjjmxeZ7OYanxmpCqqmoufqH%2FfF7EzSvyZ5bCXw1FIUN%2BoUksH&X-Amz-Signature=29b75d08a894eecdf5908225f51790a06d511b80827d7eb44e0e52e6b63691ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUTOSWL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpxGDtqI432sGpfuf%2F3JQWYhKLKFRvdFUxgo8%2FCuuCcwIhAIrr8LyuoK6ShTweONb6TdadL%2BFxS7NwKJiBB9o%2BH5ufKv8DCHMQABoMNjM3NDIzMTgzODA1Igwvogxvolye5qqXvDMq3APEC51puehNUHC0xmFP56lLjAxPYfLRIZ%2Brm77E6GF8iclz5XBvvm9NHB66lLr1R0lI%2Byi0D%2FBcrAR%2FYCrOSDmSI6SXl7qFcJRHW9rrbq%2Bk0Ls6yDtgNF1Mhi%2FrDhVEFEY2uzJ31MTq%2Bn7kdOijRTkiJbNvkW6wePZYNvwWA7TsdDk1BsGp%2FVS%2FeGd8Ed7I37bExzRldtYS32YJJFSS5PC7QOI7uCJFI0vhDkl0t7%2Bv%2BC2kM8pNuYkM6oHvm6tq26QwlKiJB8wPWbdv7TQ3l%2FZ9MozCNCU%2BM8SQ8AOS%2FDhUlxphEqfnA8t2att9VpdVl7PD5WpaVHSgGQahmzLpUYaLO1yJ%2FpLVLJrHbmxfPKEMAhoS0lCxGUDUSgwkJjhF2rxbkPlgcO4ZxumiwyMEE01%2Fuhzj6cZPrPY4urFoNbPhmcdbFjkyseFw%2BVk%2Bl%2B35%2BpfMBf%2Bg5fTsW2q7qW3Unqql%2By884UXcoaFajLj9vSDVuG8uxNJ8Lt1tMemoYySlrg%2FjfM6dF7pscw%2B1u1KWxZXKytF%2BEA97MtaNu4eA2VmOfNss%2BzD7t%2BtrUNStKVuTEvHSHlxxuW5nfsxAJgeK3JQOZCyb8ro5lStHHPrJxjjCEVC%2Bi7d7QIhs1BVETDDO0%2FnCBjqkAcQN4xtMgR0dRJ%2FyU56kKki2pxvPejxIWtT%2BaYL%2BYq%2BqAnMNlL%2FtNcbzI0HDEWK%2BytW9EcEv32nWQOBBomGpo3zcN7EkgSh0mYIayEIJF44WdRVLBdXiW6IbzXgZMco5AwYgx9%2FYTjoSRvbKhzS00yJ9KyoC7%2F1o8%2B7FIhrYXKyjjmxeZ7OYanxmpCqqmoufqH%2FfF7EzSvyZ5bCXw1FIUN%2BoUksH&X-Amz-Signature=933e9e44ac27f601fa1125c10338fb68db8b0bc12a5bb9adf1a1c26e5af9357e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
