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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVG3ZY2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDo6%2FFBxfQUCvr0qEGPwLc%2BPXoUHSBrX0vrn%2FZ094HkTgIgdsTtdyJPadKwdg1XCPqfLseAUnu4DLwcHIFAOidzWi4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNejghTiUyPnoHhg6yrcAxZy6kfcTdeTgpA7r%2B5xMEUZZ50XTwf2PTP36vYm83rTWcXIIC3qmhH3gadEuzZcnsvPR%2FstzXzj7ZVrBXrLtOwehroMRiE38K6dVm%2FAI5j9qq62ygy5SyfnjD7ZEkCrEcrE7uORt3M72TBp9sIJHy3PViZtSnShsWBbob%2B69X%2BtNjomXSWSK313bvaL3VBkfu1f0FMnC7RqL3txCYnoLkh5YZGQirw0p2zbXnE5NQGqBF6hm52zj%2Be09%2FJMfOAu6i4tADb0lzLrQu1Wo19CAPqBeLfbqp%2FOR36esYe7NpYHtFso7dWdfHwz4Kuq1HBZG9Oce5oHccF27oVPQbFkHnazXdmUsZD4tF9VkJ%2FTD735J1xeY1p8x95rlM1c7DEDUB0G4nbaiuup7JMb9hDcsISmaPcIoHIGjE%2Fg1S67fqpmRs%2FLmeezwWiikYhoR%2BTkLDdC7vkUEj%2BL8G7%2BBHcylbqACxV9rDbRaPKPqTx%2FWqIAJ2gx%2BIQWKht0%2BU6OVdLGW54K9g4EZKi5OS1M1W7FsQndpd4jyxDy4I0qUn7J4tiR5Eprj9%2FlwSoNTPCUCI3vhaI3s46BjYvJ%2BUOfd1OF%2BcXQTA07cdVJqk94SuVrIrcl9UU0gAUEGcY%2BKD%2B4MPCcxMQGOqUB6xvlkTZfEu1g%2FI2dBwSZj0hCZoA%2BBqeOJPT8zIqH1f2wnGN7UTs0W0O6WPpgINblFWRDPwOud8bRBGfueKYmiJYdRJ34D3LEsBQoY1PRbyysDItzZq5InaKV3g5wyDPTzbton4yF0DXJghRmzd5aorS8bcQW%2BGmDnhS65xx5gfZJTb%2FBjCnIzfRjLFyUg0TmOh4cXafevST%2FI%2FweEWZWPeuyBvPG&X-Amz-Signature=ebac2c6bedc781d1096ee110ea7f76b22d696b3b614496d465487960672b8a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVG3ZY2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDo6%2FFBxfQUCvr0qEGPwLc%2BPXoUHSBrX0vrn%2FZ094HkTgIgdsTtdyJPadKwdg1XCPqfLseAUnu4DLwcHIFAOidzWi4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNejghTiUyPnoHhg6yrcAxZy6kfcTdeTgpA7r%2B5xMEUZZ50XTwf2PTP36vYm83rTWcXIIC3qmhH3gadEuzZcnsvPR%2FstzXzj7ZVrBXrLtOwehroMRiE38K6dVm%2FAI5j9qq62ygy5SyfnjD7ZEkCrEcrE7uORt3M72TBp9sIJHy3PViZtSnShsWBbob%2B69X%2BtNjomXSWSK313bvaL3VBkfu1f0FMnC7RqL3txCYnoLkh5YZGQirw0p2zbXnE5NQGqBF6hm52zj%2Be09%2FJMfOAu6i4tADb0lzLrQu1Wo19CAPqBeLfbqp%2FOR36esYe7NpYHtFso7dWdfHwz4Kuq1HBZG9Oce5oHccF27oVPQbFkHnazXdmUsZD4tF9VkJ%2FTD735J1xeY1p8x95rlM1c7DEDUB0G4nbaiuup7JMb9hDcsISmaPcIoHIGjE%2Fg1S67fqpmRs%2FLmeezwWiikYhoR%2BTkLDdC7vkUEj%2BL8G7%2BBHcylbqACxV9rDbRaPKPqTx%2FWqIAJ2gx%2BIQWKht0%2BU6OVdLGW54K9g4EZKi5OS1M1W7FsQndpd4jyxDy4I0qUn7J4tiR5Eprj9%2FlwSoNTPCUCI3vhaI3s46BjYvJ%2BUOfd1OF%2BcXQTA07cdVJqk94SuVrIrcl9UU0gAUEGcY%2BKD%2B4MPCcxMQGOqUB6xvlkTZfEu1g%2FI2dBwSZj0hCZoA%2BBqeOJPT8zIqH1f2wnGN7UTs0W0O6WPpgINblFWRDPwOud8bRBGfueKYmiJYdRJ34D3LEsBQoY1PRbyysDItzZq5InaKV3g5wyDPTzbton4yF0DXJghRmzd5aorS8bcQW%2BGmDnhS65xx5gfZJTb%2FBjCnIzfRjLFyUg0TmOh4cXafevST%2FI%2FweEWZWPeuyBvPG&X-Amz-Signature=5dd29ad04fb2af79434c46f7cbb8c126cac6ffa4379c02b777c4841d33e3aa7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
