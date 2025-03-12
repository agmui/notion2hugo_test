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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4K54TB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCC01Q4q5Yg9mDlv8maUeUD3QeLMe9vC5ZYbn0rHpLgawIgBOzr2rOe%2Bho2Y1knKEl%2FVYni9CE9FOO78poD9MOPuA8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIwlKfh%2BAqD69r%2BircA5LKmnmrgAivzYBSfEtChcr6SKf2ZF%2Fafto14YYLobnFgTS3fjkiFyVZqhx3klpJPle2%2Fh64oBn9getXmxUoRoc4BmokEJo949tIXvZlsduLY2VMmq5TGy14fv5bFl7Uma4lck4ovBUdgxB7iCW%2FAuvXCV7fVK0ENlCo%2FFFgubhYO0nu4Y8wXsfHqYH2SIUqrRTPX7RdAmJawsxeZSGthUJYSpB7d%2FFr4rUadyRGrxMQbz7MZMTvjVzHsaxSmu4AaU2ZwIvyyP3FNW2mTccZofT7e49WwPkWCCImTMORLSphY83Tmyc3Yr9IfZLOzxB8cLavIKcaknCb0keVDgWPULsSgytr8PVDZqjSuxaUPj8gJfAt5dFzRVGbCFTrHC6rrbPHUfUqMv6MS0%2BYi1fd%2BMfDYIUisNqfTrmjWqQ%2BFAjvlmuZ4olvZqj8MOWBirKFTISiP2jzagYkRJJ6hGYTXlClv9N7IPAtT%2BQS2n%2BN21%2BXSU4D8hLzKNCwWomwsGDx44Fl0deLZNsq9l9oFsScYzDmQUv8iBlmkQS36ZPz3XG8bFtYzLjLgIGSJdVlwDNJVm3yazeTjKx03Y1mkdn8QpagyPwlhzridgJdk%2Bdly7qbFVj4dfM3S7FdTE%2FDMPeNw74GOqUBjKJoetnQe47O2RyN5hT8tarIBb9ysDxyqWg78noT0%2FgMd%2F6g6Ctuvp1Mm8wFqFiFlnEd2MKv7brAZaVlvPm7CCwYa5d0oca35LMgqdTfpIZyK1UTTf3lRhKvD59QfwogNCSG1Zbtwqp2BmSYXp1spUal3mV6t1Y3gQ1o3c8lNi7ITeA0fzgMBLiAKpq2uAmZFXt2kSk8LpUlbSWe0IMROn4Ho%2FmD&X-Amz-Signature=ea9348cd3281fc83f298ca6f2b17b21bb02f81520320f72ee14070d9eb97ac27&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4K54TB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCC01Q4q5Yg9mDlv8maUeUD3QeLMe9vC5ZYbn0rHpLgawIgBOzr2rOe%2Bho2Y1knKEl%2FVYni9CE9FOO78poD9MOPuA8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIwlKfh%2BAqD69r%2BircA5LKmnmrgAivzYBSfEtChcr6SKf2ZF%2Fafto14YYLobnFgTS3fjkiFyVZqhx3klpJPle2%2Fh64oBn9getXmxUoRoc4BmokEJo949tIXvZlsduLY2VMmq5TGy14fv5bFl7Uma4lck4ovBUdgxB7iCW%2FAuvXCV7fVK0ENlCo%2FFFgubhYO0nu4Y8wXsfHqYH2SIUqrRTPX7RdAmJawsxeZSGthUJYSpB7d%2FFr4rUadyRGrxMQbz7MZMTvjVzHsaxSmu4AaU2ZwIvyyP3FNW2mTccZofT7e49WwPkWCCImTMORLSphY83Tmyc3Yr9IfZLOzxB8cLavIKcaknCb0keVDgWPULsSgytr8PVDZqjSuxaUPj8gJfAt5dFzRVGbCFTrHC6rrbPHUfUqMv6MS0%2BYi1fd%2BMfDYIUisNqfTrmjWqQ%2BFAjvlmuZ4olvZqj8MOWBirKFTISiP2jzagYkRJJ6hGYTXlClv9N7IPAtT%2BQS2n%2BN21%2BXSU4D8hLzKNCwWomwsGDx44Fl0deLZNsq9l9oFsScYzDmQUv8iBlmkQS36ZPz3XG8bFtYzLjLgIGSJdVlwDNJVm3yazeTjKx03Y1mkdn8QpagyPwlhzridgJdk%2Bdly7qbFVj4dfM3S7FdTE%2FDMPeNw74GOqUBjKJoetnQe47O2RyN5hT8tarIBb9ysDxyqWg78noT0%2FgMd%2F6g6Ctuvp1Mm8wFqFiFlnEd2MKv7brAZaVlvPm7CCwYa5d0oca35LMgqdTfpIZyK1UTTf3lRhKvD59QfwogNCSG1Zbtwqp2BmSYXp1spUal3mV6t1Y3gQ1o3c8lNi7ITeA0fzgMBLiAKpq2uAmZFXt2kSk8LpUlbSWe0IMROn4Ho%2FmD&X-Amz-Signature=7f018903619d67ff7587edf905520307ac1be2be3a5401e52883a93c13a952ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
