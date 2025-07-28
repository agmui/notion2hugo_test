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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=fed1ae60c7ebb06cc76ec0af8ff089b0dbfa5eab05911b6838688dca3fad04bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=f08768d36594a6487fe5c21846251cd1282c29bcd4c106fadf75003b9d1c87b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
