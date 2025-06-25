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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQJUE7O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC9Ox3o4NaSSZolo6Ihwj3IddT4tqIjJtV1pbKcmQNmEQIgF7wvR%2BqdgcPYfe023o1ryY4nx1lBFOkaf4Rg2IAj75Iq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKaWktgcoEFenPoxQyrcA8GZF5bAiI5%2F1Wv7Vvobe3OppJ3Ot9M3%2Fhxq0V8Sw1X2B7l3TIWJXn0N2wCqN8NSMqlbWwTs%2F5LI1NCa6CXjgF2GSsVzjfHm%2BbMqgRboOB3VwYNlZW2sDozdDNhxw0chCZgYa0YpEGyq4141Pmi6D9B8CHuql%2BJRn%2BdBlbAfJBU7XX7tRBtUAEaUv6%2BOG%2F3KNI9aQ8hWPBKWoNbtlkpPaie1Amde754v8hY%2B1DCwYdWpp2Z0zvjvcUcCNV2bII6Ji8IHOh0yyFUlQ5A9UgpfNUierrtHqCKPs%2B54XIzfp0hMVGcsd2O6bTL%2FosL%2FdOWw80nU45RTFHSFI7bsbRsu39wlsbd3cO%2FBr9U3U9hb2ol6qlFr3eh9mTbVU7Vr0A1hUh61BPemEb4xuzd2Gzb55AtZSo17qN41WjTOQo0KIxez6Tzv%2B1KeObQ5Ft4H2tjAXyl%2BFbedvu6NmH8SMS9zlk8Bq3oDLoXGtXcb%2B9wzs4Lqy8j8h3fzovPMVFCbuKyCwKDhnh9ca%2F1cmJICjdiigVS6urXpnEicnHvc8FI9vFb78no648dBo6x95HrjXBEvsBvTqgDIt8T7QXkhNjEsLuTmvYA18pB33ZTuql1FiTNh9IrFkQbzrKN32ToxMMi58cIGOqUBNsYrcsbEbCDhHlkCqcZ%2BqikwX%2Fo3AfnWvNE4xjvJ420ByGHTPp%2BdBSXyw5wdkTWRtI8TK0%2BkU4tZhm7vpFOfwMaBkTysWV%2FtkWAbtbRM6IZz3pS%2F5A7kzJP1fUhIBtlYm4JjP7KGHj35IKYjnk1I%2Frv04kVxal9d3IXe5n2WrAaDp9%2FT7874D2PmCWbkGbm6fLQA2jSjw76ltY9A5AWPCM%2Fcm1YD&X-Amz-Signature=903ad9b3e15ad458d5d642ffae57ef72eac44c789494f793d8c463e1c6a4a95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQJUE7O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC9Ox3o4NaSSZolo6Ihwj3IddT4tqIjJtV1pbKcmQNmEQIgF7wvR%2BqdgcPYfe023o1ryY4nx1lBFOkaf4Rg2IAj75Iq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKaWktgcoEFenPoxQyrcA8GZF5bAiI5%2F1Wv7Vvobe3OppJ3Ot9M3%2Fhxq0V8Sw1X2B7l3TIWJXn0N2wCqN8NSMqlbWwTs%2F5LI1NCa6CXjgF2GSsVzjfHm%2BbMqgRboOB3VwYNlZW2sDozdDNhxw0chCZgYa0YpEGyq4141Pmi6D9B8CHuql%2BJRn%2BdBlbAfJBU7XX7tRBtUAEaUv6%2BOG%2F3KNI9aQ8hWPBKWoNbtlkpPaie1Amde754v8hY%2B1DCwYdWpp2Z0zvjvcUcCNV2bII6Ji8IHOh0yyFUlQ5A9UgpfNUierrtHqCKPs%2B54XIzfp0hMVGcsd2O6bTL%2FosL%2FdOWw80nU45RTFHSFI7bsbRsu39wlsbd3cO%2FBr9U3U9hb2ol6qlFr3eh9mTbVU7Vr0A1hUh61BPemEb4xuzd2Gzb55AtZSo17qN41WjTOQo0KIxez6Tzv%2B1KeObQ5Ft4H2tjAXyl%2BFbedvu6NmH8SMS9zlk8Bq3oDLoXGtXcb%2B9wzs4Lqy8j8h3fzovPMVFCbuKyCwKDhnh9ca%2F1cmJICjdiigVS6urXpnEicnHvc8FI9vFb78no648dBo6x95HrjXBEvsBvTqgDIt8T7QXkhNjEsLuTmvYA18pB33ZTuql1FiTNh9IrFkQbzrKN32ToxMMi58cIGOqUBNsYrcsbEbCDhHlkCqcZ%2BqikwX%2Fo3AfnWvNE4xjvJ420ByGHTPp%2BdBSXyw5wdkTWRtI8TK0%2BkU4tZhm7vpFOfwMaBkTysWV%2FtkWAbtbRM6IZz3pS%2F5A7kzJP1fUhIBtlYm4JjP7KGHj35IKYjnk1I%2Frv04kVxal9d3IXe5n2WrAaDp9%2FT7874D2PmCWbkGbm6fLQA2jSjw76ltY9A5AWPCM%2Fcm1YD&X-Amz-Signature=c0df9e992e91a802ceaa99b529b838efeb017db56f8bd1b8292ee61308cb04bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
