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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHHSLOZS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB%2FykCvDH1XV%2BS8A04mtiJrI8chzYVwdO1116jg%2BYdSeAiARkMrUgfvKwRNuXfEGMIBMVI7ZQ1b8%2FWAxyLquIUriHSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMF%2BKyYiNok6x9jTKtwDa1Uc0JWEMkwwJO2OSnhXkW5LPQftECsopYH%2F4uedat9g5DeLkUVf34bRFZ%2F9uJeD4S3RrEePVLzJttZYDg01J8%2FoRlYydnBqQySZKmed2%2FVjb264V3xq7sU4NbX1qidOxmZ3pKdzRDfaTJB2yDpKYMM8r3o02GNVFTHJJ6wLcSbhTM6ZnuG%2FY1LFlYFco7DU%2FGhTaxXC2c3EILAXPjELtpw96UZgG2jPMKtG4IpNzaN8tfEw7jGeZ8FoX4aOw%2BwV091b0v04Y%2BJgC149xLlOK2gpY6Bgv4rtH%2F444wMaXjY3FAcDATVcNk8qEX8K7cBT8%2FBfVnA1pYxpxsiPc4c0MpO09h9bMd%2FQ0iAsSZb8%2Fpv%2BQ5wvYBlbb7hRay1r%2BViDYsFtEM3d5KtDqR1OGLoLwKhOemcow9G9HCEmB20Uzx0CY1EpOGOzguEftuqasY8lJy%2F4QMS2FWtODaIRzYOo%2FNpxkEE2flpHmHPR%2BVyGzySggTvZXVWmV8ULMdUwl0zbgsm7p%2BO4DChvSzvwdpFPXYzKxoRTVfAJg9VhgMeDDymRM0stK8b4C2J%2FzGkT4q7RjGtgre%2BMG%2BdIZRTJj%2FN%2FXKqPe24VJdGnhEIVQlL%2BjH5SJZOw1uH9xwX9BHQwssjQvQY6pgGPbZOGDU0FuaHZFIRfseBUXCYUg5zgfbzOsA2b1M0AKlCtqMP6ET977GIoBbSTUzmE92%2FbJRXQxVgGyYKN5lMxXY%2BDKnYt%2FcMu3YUp%2F6N3SEkvKJM%2FLohYv5kui7ISbJ%2Bo9ZA852jD%2FpY%2FkG1eGqGkpHpuED7D5YuumRu%2B%2B40pa3k%2BbtIS4xfosx2RZvLCJGjPttgM39gKfYibolfzzL03ftMLN8zA&X-Amz-Signature=607b544edccc7fba59bae888beda7ea7bea276923a912f48b09c1241cd2e9a43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHHSLOZS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB%2FykCvDH1XV%2BS8A04mtiJrI8chzYVwdO1116jg%2BYdSeAiARkMrUgfvKwRNuXfEGMIBMVI7ZQ1b8%2FWAxyLquIUriHSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMF%2BKyYiNok6x9jTKtwDa1Uc0JWEMkwwJO2OSnhXkW5LPQftECsopYH%2F4uedat9g5DeLkUVf34bRFZ%2F9uJeD4S3RrEePVLzJttZYDg01J8%2FoRlYydnBqQySZKmed2%2FVjb264V3xq7sU4NbX1qidOxmZ3pKdzRDfaTJB2yDpKYMM8r3o02GNVFTHJJ6wLcSbhTM6ZnuG%2FY1LFlYFco7DU%2FGhTaxXC2c3EILAXPjELtpw96UZgG2jPMKtG4IpNzaN8tfEw7jGeZ8FoX4aOw%2BwV091b0v04Y%2BJgC149xLlOK2gpY6Bgv4rtH%2F444wMaXjY3FAcDATVcNk8qEX8K7cBT8%2FBfVnA1pYxpxsiPc4c0MpO09h9bMd%2FQ0iAsSZb8%2Fpv%2BQ5wvYBlbb7hRay1r%2BViDYsFtEM3d5KtDqR1OGLoLwKhOemcow9G9HCEmB20Uzx0CY1EpOGOzguEftuqasY8lJy%2F4QMS2FWtODaIRzYOo%2FNpxkEE2flpHmHPR%2BVyGzySggTvZXVWmV8ULMdUwl0zbgsm7p%2BO4DChvSzvwdpFPXYzKxoRTVfAJg9VhgMeDDymRM0stK8b4C2J%2FzGkT4q7RjGtgre%2BMG%2BdIZRTJj%2FN%2FXKqPe24VJdGnhEIVQlL%2BjH5SJZOw1uH9xwX9BHQwssjQvQY6pgGPbZOGDU0FuaHZFIRfseBUXCYUg5zgfbzOsA2b1M0AKlCtqMP6ET977GIoBbSTUzmE92%2FbJRXQxVgGyYKN5lMxXY%2BDKnYt%2FcMu3YUp%2F6N3SEkvKJM%2FLohYv5kui7ISbJ%2Bo9ZA852jD%2FpY%2FkG1eGqGkpHpuED7D5YuumRu%2B%2B40pa3k%2BbtIS4xfosx2RZvLCJGjPttgM39gKfYibolfzzL03ftMLN8zA&X-Amz-Signature=4fc429bf3f2c198411fcd09de9bbc608a89100624b704500b25b56937cf5a8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
