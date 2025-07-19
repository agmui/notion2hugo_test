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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7A7ZEXV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDujh5T3qq8FREiPWJBE1F%2BSUgj2KDg1mtbYh1ADvFJKwIhAJtQ7TzGLhlRBkXCCzL5HdhW7tB1uCuNN6mlBSBsu2S%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzODKqg9nyoEvR%2FMBgq3ANFgX6M%2FREp6077%2FwFjSsaJiWAm7wLh4VdGKVhwSHgSIPlqgccfw%2BcRsbJp%2FNGbx0MJ0evMCPs00nwwEKxNZlL1QVfEKaxdkQQblHE5hP3OvuYuxK%2Fp82I%2Fmqe%2BQagiqS3uYNJASu2IC41YG6xd09WCRVaYysna8FZ1ceulKmj0HqaLWmRz5TxI8Q3sUNyyH3wZE%2Ff%2B612mv%2BG%2B6SYex1xxHeme3Pg463zT6Ix9qxSQULyIWeNl52Nv%2BrIKM10tNjwq0vbM%2B4vhcrt0mby99YHc2YF2RSx3DqwEVhE%2BrllwSEoTrSGx7DzvbMk8%2BwTwHD3RR2%2Bsjf6rb9w9ciVvaak8qtBaQOj2ibnng%2FG3ksTsbGoBjb9Vrb2NaqPghMF7JMtfLdNnBUMo%2Bxrwp2gzJO4BtS5%2Bf6%2Fqd7z7qhy4ZqqE53H6pe8R6Zb%2BMeE78vkfcTNqIdTmDBNyEXSKQ1QtbW2wIXCc3Xola52mJc1yasnVMBLXQdryOGcncX6VwET3yRytebVNB69R3Cbu450Lzltezoamjr6SGAc9pEyIq9wN8DyfAx6wif47s4kvsuW5BVAMSjRr%2Bj2kpaLOgJ3hod5MAEHb3gPVJPvAd2B4gR4YcizOmJ2meR%2Fv2HqOYjDVoOzDBjqkAYcA0w5PIyVplzV2DhuKBEQysjySxHm2uVXPLfRaJv%2BzCyPIpamMkXfsvnqSIwYQQHA6I6pGrFUZRKlLxHxCzVy6APSDWv9JT3g0xSovjUXkYvl2gSX6GAukUbw9Th%2BWAcbOao8rqJeU%2F3L78SWjVlFazqrwBBKIgNEjAYGdgt03BSkePFStMHs6vE8GV5DfBBnqDlb%2FMp%2B2OqAHnanSzKqGqtgF&X-Amz-Signature=027d06808281e9c03a78a4bfec9bbfb39ab43f0108bc1fcc715f2d9f1b74c6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7A7ZEXV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDujh5T3qq8FREiPWJBE1F%2BSUgj2KDg1mtbYh1ADvFJKwIhAJtQ7TzGLhlRBkXCCzL5HdhW7tB1uCuNN6mlBSBsu2S%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzODKqg9nyoEvR%2FMBgq3ANFgX6M%2FREp6077%2FwFjSsaJiWAm7wLh4VdGKVhwSHgSIPlqgccfw%2BcRsbJp%2FNGbx0MJ0evMCPs00nwwEKxNZlL1QVfEKaxdkQQblHE5hP3OvuYuxK%2Fp82I%2Fmqe%2BQagiqS3uYNJASu2IC41YG6xd09WCRVaYysna8FZ1ceulKmj0HqaLWmRz5TxI8Q3sUNyyH3wZE%2Ff%2B612mv%2BG%2B6SYex1xxHeme3Pg463zT6Ix9qxSQULyIWeNl52Nv%2BrIKM10tNjwq0vbM%2B4vhcrt0mby99YHc2YF2RSx3DqwEVhE%2BrllwSEoTrSGx7DzvbMk8%2BwTwHD3RR2%2Bsjf6rb9w9ciVvaak8qtBaQOj2ibnng%2FG3ksTsbGoBjb9Vrb2NaqPghMF7JMtfLdNnBUMo%2Bxrwp2gzJO4BtS5%2Bf6%2Fqd7z7qhy4ZqqE53H6pe8R6Zb%2BMeE78vkfcTNqIdTmDBNyEXSKQ1QtbW2wIXCc3Xola52mJc1yasnVMBLXQdryOGcncX6VwET3yRytebVNB69R3Cbu450Lzltezoamjr6SGAc9pEyIq9wN8DyfAx6wif47s4kvsuW5BVAMSjRr%2Bj2kpaLOgJ3hod5MAEHb3gPVJPvAd2B4gR4YcizOmJ2meR%2Fv2HqOYjDVoOzDBjqkAYcA0w5PIyVplzV2DhuKBEQysjySxHm2uVXPLfRaJv%2BzCyPIpamMkXfsvnqSIwYQQHA6I6pGrFUZRKlLxHxCzVy6APSDWv9JT3g0xSovjUXkYvl2gSX6GAukUbw9Th%2BWAcbOao8rqJeU%2F3L78SWjVlFazqrwBBKIgNEjAYGdgt03BSkePFStMHs6vE8GV5DfBBnqDlb%2FMp%2B2OqAHnanSzKqGqtgF&X-Amz-Signature=77ec54f672054e70edbba1cd7788e42ec74e1292db8f534a64bf958845265275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
