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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAE3UDT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkw2be8fFjBUk%2BkH5mv5Qq05zKyZO6hUZ9QZmL95wxTAiEAkr0Hg2HMf%2BZ0LQ7THzJh92XyYYAK8f5XmRpIVwaE8TQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPeRLT3dCp4%2BELkopSrcA2kcRWtREo21IfV5AGSDzAzp0FCojfQS1pFO88Tvy1inpSXgI%2FN3MZk6To18rueE0BQCFfVl1PNUyZ%2Fleu1UqxTx%2BU1ZaHlak%2FwOYeBIbkd35gTIDoc9JjdcRtv4sawNuVIL%2ByVgRc4%2BSx4LQ6jdbuzhEiqkuw3CvR3ppLL%2F%2Ff5QSUlILdZwYUOC8MrHPeEnMMr%2Bqk1BBdYwWfeuOIbUZ9TFHlNZBeiwkbd6LmaE1xUkGX1jqwk6vV7SOOyXnd5Lj1i8xv42%2FoEc4AyM3sgZ5DOMeJ80UvBtIVkpVqHUvdEV6tgJllFqayrxJz14rdAu6FXWaKXS4q3LVg%2Ftj%2B1rO6We2JJVfkwLa0%2FGnQYUG5rtq0Y1oAuYYW%2BWLtEqTimyAKvhlfQPuP3pKquW97xYcLxfMWdOcsPw4F0PGY%2FUY%2BOSigLk%2BV%2FZZgY%2BK9KsCP3W0A5ZLNHFmIb8885j9Jf6dARcbN0%2Fkw%2BTP6aGX1FG2fhyyWWPAKTWskAu1pKQGnQ%2BeYAAN9i8dGhFsj7%2FK59I5%2FQUo5pmeI%2FxgI%2BnJOwhLgD1kv4h9MJbyu4aSP5w5Km9UdTFJ%2FIrREoaNvaEHwXQ15ZSJCnuQ4CkdF0YBKLosneKUg2%2FSeoWmFjcmKlkMNPc9L8GOqUBgpeBKzGgClAeT%2BesVN8e%2BV6V2tAQHgikbz1MII%2F%2FxVgWFBbgd6hu%2F%2BG%2B4jioU9yLFNfaVQ4J8UUAW6CGecBPg2StgyPY9BfZqbtW2BnIx0THaNcEL459Xag8cdFQC8aks2hsgb2OArG458%2BEP6YHLKS66ALlGJ7WK2SV8648RzHT37yU3CzMH8kkFMrfTlq%2FczGdoD2ZXHhMW6frvYOAQ%2Fl6qTTw&X-Amz-Signature=1c8377f7e70153e2f4c5f8500a2bbe885060563553d331eedf447d264b82a2db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAE3UDT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkw2be8fFjBUk%2BkH5mv5Qq05zKyZO6hUZ9QZmL95wxTAiEAkr0Hg2HMf%2BZ0LQ7THzJh92XyYYAK8f5XmRpIVwaE8TQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPeRLT3dCp4%2BELkopSrcA2kcRWtREo21IfV5AGSDzAzp0FCojfQS1pFO88Tvy1inpSXgI%2FN3MZk6To18rueE0BQCFfVl1PNUyZ%2Fleu1UqxTx%2BU1ZaHlak%2FwOYeBIbkd35gTIDoc9JjdcRtv4sawNuVIL%2ByVgRc4%2BSx4LQ6jdbuzhEiqkuw3CvR3ppLL%2F%2Ff5QSUlILdZwYUOC8MrHPeEnMMr%2Bqk1BBdYwWfeuOIbUZ9TFHlNZBeiwkbd6LmaE1xUkGX1jqwk6vV7SOOyXnd5Lj1i8xv42%2FoEc4AyM3sgZ5DOMeJ80UvBtIVkpVqHUvdEV6tgJllFqayrxJz14rdAu6FXWaKXS4q3LVg%2Ftj%2B1rO6We2JJVfkwLa0%2FGnQYUG5rtq0Y1oAuYYW%2BWLtEqTimyAKvhlfQPuP3pKquW97xYcLxfMWdOcsPw4F0PGY%2FUY%2BOSigLk%2BV%2FZZgY%2BK9KsCP3W0A5ZLNHFmIb8885j9Jf6dARcbN0%2Fkw%2BTP6aGX1FG2fhyyWWPAKTWskAu1pKQGnQ%2BeYAAN9i8dGhFsj7%2FK59I5%2FQUo5pmeI%2FxgI%2BnJOwhLgD1kv4h9MJbyu4aSP5w5Km9UdTFJ%2FIrREoaNvaEHwXQ15ZSJCnuQ4CkdF0YBKLosneKUg2%2FSeoWmFjcmKlkMNPc9L8GOqUBgpeBKzGgClAeT%2BesVN8e%2BV6V2tAQHgikbz1MII%2F%2FxVgWFBbgd6hu%2F%2BG%2B4jioU9yLFNfaVQ4J8UUAW6CGecBPg2StgyPY9BfZqbtW2BnIx0THaNcEL459Xag8cdFQC8aks2hsgb2OArG458%2BEP6YHLKS66ALlGJ7WK2SV8648RzHT37yU3CzMH8kkFMrfTlq%2FczGdoD2ZXHhMW6frvYOAQ%2Fl6qTTw&X-Amz-Signature=02b06aee07ccf2f6f5da678ee053079140a57cc24d4a59b619b78845e967d6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
