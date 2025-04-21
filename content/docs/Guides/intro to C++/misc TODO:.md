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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHKMBSI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCkLiwC4OIpoHJMlVcuxSMsUpu3mXBst1vB7nzvq1M1hwIgbAMgMWJkQAP%2FQAQ2cki4lWCXIws0GhZx%2FTqSxinxUQ0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJID2UHKo3BR3T2WGCrcA6PQAqOBs%2BethfG%2BPfJiHIG%2FQiTAemYwF%2FyQoeixR0fJ6dECcxjkbkVU0hm6yJoo1fGI2%2FuOutGSXE7Hx3CG2151c24dpkNdQaqyVflvW2nju5Gi16GbHS4QoByno1TzGcnmbQfpxAwGMDmpKacoZe5k2Ay9gONdw2Nu8GBVy8puWRvw%2FAbkxkTzeY10X%2BWJHte6YcqXbC0MJa5l2VQNEp2tTipiq9XwZGSJh7ne0DazdGE5izXfOoDdLmZNDg74qySNnq6phpbofP9GCS2K%2F9HmcH4KUuc3R%2B1TdEjig3Mw%2FaM2f2xJeGuMMnYCkKazIqYA1978SP8XfSL23MFqJqAjMlDWKkfvMcp0xlIntOOLkRIJ0sERVyRLiC4UdaRAfYgl7%2FJ2xjAym4fE8Z2WoBjCSkW1sycm5ZQwkosnGW%2Fyys71O0N8rZ87qm8kXys%2FKjLeFpy3KSF8k1Y5YC%2BJtZec5dne4owN%2FTjk3XsVxz3mOJ3oPrXo2TYNtnpnqePuGfIcN9u9dI6gQPpLjEuL44An9OIRRlsQvVXm6hQ4drZr5rhhY2%2F15Y1A%2Fwyl6%2BKRcBWl32ZOl6ynbW3OD1JHEkLhdbMWOi4Zpw1W8s%2BIvXcyX7O7pCuzJK6tt3JZMOXtmsAGOqUBXL3oLpI%2FkdDrKogyrVxYBSHBjLmzjb0ILvKn8GBroCZY77HPcwFIYZzXAMRlDPtuNkyErEUywl9E6KHSkhsMjSDuYhKaCzlTrBdRRJbyZZTfv0kmLFzzOyoUEWbFSCA%2BqBpPDJTSeSFhZYT6Mh%2FmJYzNvDYJw2%2BIYQPydErKN6Pp4Kc3kMmnVctcadoFhL1NItRzHMuoPWnCK4nKrQUgZsN8zNB4&X-Amz-Signature=e8be85f044dd6ddb66ceb6831ab43608172c4579df04bbc4d67e234e9d69a88c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHKMBSI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCkLiwC4OIpoHJMlVcuxSMsUpu3mXBst1vB7nzvq1M1hwIgbAMgMWJkQAP%2FQAQ2cki4lWCXIws0GhZx%2FTqSxinxUQ0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJID2UHKo3BR3T2WGCrcA6PQAqOBs%2BethfG%2BPfJiHIG%2FQiTAemYwF%2FyQoeixR0fJ6dECcxjkbkVU0hm6yJoo1fGI2%2FuOutGSXE7Hx3CG2151c24dpkNdQaqyVflvW2nju5Gi16GbHS4QoByno1TzGcnmbQfpxAwGMDmpKacoZe5k2Ay9gONdw2Nu8GBVy8puWRvw%2FAbkxkTzeY10X%2BWJHte6YcqXbC0MJa5l2VQNEp2tTipiq9XwZGSJh7ne0DazdGE5izXfOoDdLmZNDg74qySNnq6phpbofP9GCS2K%2F9HmcH4KUuc3R%2B1TdEjig3Mw%2FaM2f2xJeGuMMnYCkKazIqYA1978SP8XfSL23MFqJqAjMlDWKkfvMcp0xlIntOOLkRIJ0sERVyRLiC4UdaRAfYgl7%2FJ2xjAym4fE8Z2WoBjCSkW1sycm5ZQwkosnGW%2Fyys71O0N8rZ87qm8kXys%2FKjLeFpy3KSF8k1Y5YC%2BJtZec5dne4owN%2FTjk3XsVxz3mOJ3oPrXo2TYNtnpnqePuGfIcN9u9dI6gQPpLjEuL44An9OIRRlsQvVXm6hQ4drZr5rhhY2%2F15Y1A%2Fwyl6%2BKRcBWl32ZOl6ynbW3OD1JHEkLhdbMWOi4Zpw1W8s%2BIvXcyX7O7pCuzJK6tt3JZMOXtmsAGOqUBXL3oLpI%2FkdDrKogyrVxYBSHBjLmzjb0ILvKn8GBroCZY77HPcwFIYZzXAMRlDPtuNkyErEUywl9E6KHSkhsMjSDuYhKaCzlTrBdRRJbyZZTfv0kmLFzzOyoUEWbFSCA%2BqBpPDJTSeSFhZYT6Mh%2FmJYzNvDYJw2%2BIYQPydErKN6Pp4Kc3kMmnVctcadoFhL1NItRzHMuoPWnCK4nKrQUgZsN8zNB4&X-Amz-Signature=9d997cd5c003b35f3866a15ac63e520b6145becf93716f946748d42ab75424de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
