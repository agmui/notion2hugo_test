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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24VOF5G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC5%2FHT5q3j%2BQGeU8keWbEdRJLyXEl0XuFeulPOADWyW0AIgaQUZi4g1fjrUhdzkJy4HswA9x6JEYLk34noVzl66zQoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKpaRm6W44xw4DVmFSrcA75dPYz1PsK4Z5%2BLygy5hJgnC36FhaMZEyKZQVCagWqN7vvqap8u3ecbFRDZdJLwxEyVahwWQriS8eUNTgA8FzGxjzz6265H86N17cd2PBdXMojTnMl5De%2B7MHR2ZQeXFr7fyw98fWnPpT9cY5%2FokfhHW27Rq1JAMH2%2BKRj5Ffn8bNu1PEkHD8vJPhXbRzMOFp8C0G2s4AMvmJtyjQV3WWacG7F3PBfJ7lWv2u3tX82xfRRjsJVh7Lamszw%2B1QZAgtqcWdDHR0BE8yFxztgeAmRy2lakSc%2BBxkwgiatLngm5IrSduNbRQpMaKBAUmOyENsw4YKYCXke3cnzVohDmOsBOOELdSmeS48ftGDt%2FLwJdBLiFh4HJSrnNYJGSh8ONWL0w4KnRplOWL1JeSmTF48dl7%2BjBtdtJW60feacvG73jub1spMOb8loQiG7B9jE%2FtMSOssU9jvo1MJ%2Bxybr1QDhH8E5tavQ6o%2F%2F8M8T2Ao%2B2zg3NZCjQvHLzsGG%2BkS6ps6I7PTIEZWc2neKOjcohlLkrD4cY%2F7bkoa04MjE7IHryR%2FAxgrVMJ8jG14F1b%2F0LYK568PxoBKW83jUK3vfd%2FZwChlUCExcPbzPOLzSNMT20vJScI5PIWkvaRrDDMO6blb0GOqUB1hHPuiBZR%2FCjYFJLS4MZV7kFXT0qrAJWteOC%2ByybOi0Op7zrUE1fVfxUf9FvQb8580nAnTIzfrPgBVLYsOMlK5M2Keirv9jqvX8Ql97ZZl9PQIPmtbJSHu9etdPWyU0nqSMD6g77LwUldtQav529X0kGXwT1j5xpl%2Fmu34KuJ1FDxP9%2B3ZPAvNL61kT61oe1ay2yqMOXwfO4LpmZjemQPjhcz4AB&X-Amz-Signature=51253d3a5326ea3cf241c506eaa577c11bd156b751d430b91fd8f1d8c73953ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24VOF5G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC5%2FHT5q3j%2BQGeU8keWbEdRJLyXEl0XuFeulPOADWyW0AIgaQUZi4g1fjrUhdzkJy4HswA9x6JEYLk34noVzl66zQoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKpaRm6W44xw4DVmFSrcA75dPYz1PsK4Z5%2BLygy5hJgnC36FhaMZEyKZQVCagWqN7vvqap8u3ecbFRDZdJLwxEyVahwWQriS8eUNTgA8FzGxjzz6265H86N17cd2PBdXMojTnMl5De%2B7MHR2ZQeXFr7fyw98fWnPpT9cY5%2FokfhHW27Rq1JAMH2%2BKRj5Ffn8bNu1PEkHD8vJPhXbRzMOFp8C0G2s4AMvmJtyjQV3WWacG7F3PBfJ7lWv2u3tX82xfRRjsJVh7Lamszw%2B1QZAgtqcWdDHR0BE8yFxztgeAmRy2lakSc%2BBxkwgiatLngm5IrSduNbRQpMaKBAUmOyENsw4YKYCXke3cnzVohDmOsBOOELdSmeS48ftGDt%2FLwJdBLiFh4HJSrnNYJGSh8ONWL0w4KnRplOWL1JeSmTF48dl7%2BjBtdtJW60feacvG73jub1spMOb8loQiG7B9jE%2FtMSOssU9jvo1MJ%2Bxybr1QDhH8E5tavQ6o%2F%2F8M8T2Ao%2B2zg3NZCjQvHLzsGG%2BkS6ps6I7PTIEZWc2neKOjcohlLkrD4cY%2F7bkoa04MjE7IHryR%2FAxgrVMJ8jG14F1b%2F0LYK568PxoBKW83jUK3vfd%2FZwChlUCExcPbzPOLzSNMT20vJScI5PIWkvaRrDDMO6blb0GOqUB1hHPuiBZR%2FCjYFJLS4MZV7kFXT0qrAJWteOC%2ByybOi0Op7zrUE1fVfxUf9FvQb8580nAnTIzfrPgBVLYsOMlK5M2Keirv9jqvX8Ql97ZZl9PQIPmtbJSHu9etdPWyU0nqSMD6g77LwUldtQav529X0kGXwT1j5xpl%2Fmu34KuJ1FDxP9%2B3ZPAvNL61kT61oe1ay2yqMOXwfO4LpmZjemQPjhcz4AB&X-Amz-Signature=9cddbfafc4eff10bef530dc362a5467eab8479e67f62ac834c990c160ab2198f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
