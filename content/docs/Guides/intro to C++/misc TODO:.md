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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOTNRT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2E8OlAZOhH%2BmFjX4qHEmgsindWSansHp%2Bj0KUQY%2BIwIhALAr%2F6Wb5wzsbSHZf%2F8HRohOj4NUByIBBno%2BzIzS4TjJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk33a9r1g4Evmvn3gq3AMwCEBezhQwOrUQruViqOlsYBeGWjjtQvmiwopSJuqMlW%2B8ntc76ADe32pfnHMAOigF999ujOKtx3nJ4VktjZ3WTFVy5OciCyYSroXgartF7DRWPNgoZ3pWkZOtRs%2FREOYyUsefmbyLI8HaAksuoGhVeJayis8oqJIOCxfFIuH3MacZ%2FLYBjtCMV7TUicAIhcZYOnOsh5%2Bu5nL%2BAoq7l2sdPniwph0x1VQbga1fxlovdtmn30FdNy1eKYFdmHKg4anmvDG2l2tlQ58SCoIXKoOhTSKn289oLG90G69SHW2zQweuun%2BVEae1bJ70zzPVJLys%2FJxoXBwZAnb9UKNQL9c0%2Bg4v8cWhCOFYniA5qeQ2SSBtuoiUZKl1cqXymi6sbb%2BuXIsbwGKzgGVUibg3TC2MWcX2YMVn2tVx24O9BL%2BrchPH0pSzev9YcRp61zXGCcsJffqvHmNgzNP2WhyWtwUwOkEQrrWt4R4nOoGlNSHdYdpWm8uNviNB3LbsIwAlm4SOWlYa4hnSDfLzUcLcQWgJHWwK5p7sz%2Ffxc6rS3iM6mGl6PglOhHcARFI9n4TywrVwcyX9C5aYJFCSfFk%2BRURHZSY28nE9QDbjf%2F7yo6aQYU65is1qlPb0k0BhkTCUpOy8BjqkAWWmnPSQPpcxx6iQD%2BiuQZM7AWDLhuylTQUNlzo9udB7W%2F1A8V%2FthPapplCROKN5h9RMY6YLTCw5V49vU3BtDE5LjDNAq4QIZxLBNSurhQidX2EftYkvrFoBCHzUQI6botIOfuXJfuINEaE0XogMti1hDvNWo9UNAeX8T4YEcs14cNiVRwDseJS2ApULm1OGSfXsGtgHZwEmO1HGwxoqAEI%2B5dj1&X-Amz-Signature=841d169d913aa54e4b9db33e8e274c2f5960e1b30f1685deddbc058150816cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOTNRT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2E8OlAZOhH%2BmFjX4qHEmgsindWSansHp%2Bj0KUQY%2BIwIhALAr%2F6Wb5wzsbSHZf%2F8HRohOj4NUByIBBno%2BzIzS4TjJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk33a9r1g4Evmvn3gq3AMwCEBezhQwOrUQruViqOlsYBeGWjjtQvmiwopSJuqMlW%2B8ntc76ADe32pfnHMAOigF999ujOKtx3nJ4VktjZ3WTFVy5OciCyYSroXgartF7DRWPNgoZ3pWkZOtRs%2FREOYyUsefmbyLI8HaAksuoGhVeJayis8oqJIOCxfFIuH3MacZ%2FLYBjtCMV7TUicAIhcZYOnOsh5%2Bu5nL%2BAoq7l2sdPniwph0x1VQbga1fxlovdtmn30FdNy1eKYFdmHKg4anmvDG2l2tlQ58SCoIXKoOhTSKn289oLG90G69SHW2zQweuun%2BVEae1bJ70zzPVJLys%2FJxoXBwZAnb9UKNQL9c0%2Bg4v8cWhCOFYniA5qeQ2SSBtuoiUZKl1cqXymi6sbb%2BuXIsbwGKzgGVUibg3TC2MWcX2YMVn2tVx24O9BL%2BrchPH0pSzev9YcRp61zXGCcsJffqvHmNgzNP2WhyWtwUwOkEQrrWt4R4nOoGlNSHdYdpWm8uNviNB3LbsIwAlm4SOWlYa4hnSDfLzUcLcQWgJHWwK5p7sz%2Ffxc6rS3iM6mGl6PglOhHcARFI9n4TywrVwcyX9C5aYJFCSfFk%2BRURHZSY28nE9QDbjf%2F7yo6aQYU65is1qlPb0k0BhkTCUpOy8BjqkAWWmnPSQPpcxx6iQD%2BiuQZM7AWDLhuylTQUNlzo9udB7W%2F1A8V%2FthPapplCROKN5h9RMY6YLTCw5V49vU3BtDE5LjDNAq4QIZxLBNSurhQidX2EftYkvrFoBCHzUQI6botIOfuXJfuINEaE0XogMti1hDvNWo9UNAeX8T4YEcs14cNiVRwDseJS2ApULm1OGSfXsGtgHZwEmO1HGwxoqAEI%2B5dj1&X-Amz-Signature=59fe281d7c85f947e19b906e19cd598b746236cecf44503f843b888c6c16df48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
