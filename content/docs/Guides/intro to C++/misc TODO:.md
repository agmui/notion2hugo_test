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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ID6YCIX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8nnZ8qxszpChoVmYhKQmrOJIjmJbHy10lvoqzmqwBCAiEAyGvw1r0%2Fgbj84Xyq30KolMzI9BpitPJoVC1P%2Fsr5ZWAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIN8Dk7oWM3KTzVDircA7%2BaTG5fu58ZXwFIQKJSyZ%2F2%2BH0v6dna32OKiEkB21fFGcGKdW%2BHpyTgvB7%2FBThHny%2F45PjUzHBAqZJDepSuNU0vDxmhQ3o3FbzHqRs%2FkoA5T0gZ2UaIIAdcliNxK90MhTbBcg%2BBfkM8CkvbqdLDcyz%2FMJgHNpWEB0yEREX%2BiA2Ccim8VbOInzZ4lTZ%2FMDnrKazrpn33mpjbjEjMIDjEUoyzRyn7mhy9DZ5BsD4m1ObLWUiiM1CYNwqsyCpXBAvym8MluBWKe%2BBjtZwkJMkEYarbf%2FUgT9u1O%2BXQnYhlXO%2BA1ckajnwk8QzIpdBfvcE8AZmWbEsJMSuyFhA3QvjKcrN%2Bp3KzhS7VwwsXWdp6MYk6G952oDoTNb01U11JlW8%2BKDHKKM3bbG%2FZeInEDcg4OvRWDkRQVcQmFukFP6YJm9J06mB6wJIYCKnxUodyhi4brlKzsF4s%2BU5GjKmFp2wvTKa0cm8c%2FczJw4%2BYCxkPqvMSG4hpEaWR%2BmKDPDtbFuwuiKGInBi3qls3I%2BKaTAY%2FVQwnJk23z2jPv03pbP6Becxka3gX0aRsUQtadaE2FfCJyXcbDBZD7ZMab1SllcjFUcuIq1S5IfEmofzqiSCwsSaHRpgLMNKf5p0ttzNpMLaYur8GOqUB79cHDt3hBnhLu6kXD9ZW6ZpvAFVht3fQoZljGmvplFYfNkIkuRCVq2b3CtCmBmy1SJ1XqIY%2Fl8MlxwuLz1GKknteRviKr03zd%2FShUWvEngiDRp%2BzZNWdquD6fbmLDodb6aQ5XRKOjrbOdNJXb6VmjtEFXUeWniWzAYok%2Fvp8CTwHKJb1i%2Bnao0X3oWbH6wZtwFAHWk%2Bq7pMYMpodAx3h5%2FmU6uhM&X-Amz-Signature=2e6049e956c0ae8bb48ec6aa55828be431ba183048cca0df691c04154fd55db9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ID6YCIX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8nnZ8qxszpChoVmYhKQmrOJIjmJbHy10lvoqzmqwBCAiEAyGvw1r0%2Fgbj84Xyq30KolMzI9BpitPJoVC1P%2Fsr5ZWAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIN8Dk7oWM3KTzVDircA7%2BaTG5fu58ZXwFIQKJSyZ%2F2%2BH0v6dna32OKiEkB21fFGcGKdW%2BHpyTgvB7%2FBThHny%2F45PjUzHBAqZJDepSuNU0vDxmhQ3o3FbzHqRs%2FkoA5T0gZ2UaIIAdcliNxK90MhTbBcg%2BBfkM8CkvbqdLDcyz%2FMJgHNpWEB0yEREX%2BiA2Ccim8VbOInzZ4lTZ%2FMDnrKazrpn33mpjbjEjMIDjEUoyzRyn7mhy9DZ5BsD4m1ObLWUiiM1CYNwqsyCpXBAvym8MluBWKe%2BBjtZwkJMkEYarbf%2FUgT9u1O%2BXQnYhlXO%2BA1ckajnwk8QzIpdBfvcE8AZmWbEsJMSuyFhA3QvjKcrN%2Bp3KzhS7VwwsXWdp6MYk6G952oDoTNb01U11JlW8%2BKDHKKM3bbG%2FZeInEDcg4OvRWDkRQVcQmFukFP6YJm9J06mB6wJIYCKnxUodyhi4brlKzsF4s%2BU5GjKmFp2wvTKa0cm8c%2FczJw4%2BYCxkPqvMSG4hpEaWR%2BmKDPDtbFuwuiKGInBi3qls3I%2BKaTAY%2FVQwnJk23z2jPv03pbP6Becxka3gX0aRsUQtadaE2FfCJyXcbDBZD7ZMab1SllcjFUcuIq1S5IfEmofzqiSCwsSaHRpgLMNKf5p0ttzNpMLaYur8GOqUB79cHDt3hBnhLu6kXD9ZW6ZpvAFVht3fQoZljGmvplFYfNkIkuRCVq2b3CtCmBmy1SJ1XqIY%2Fl8MlxwuLz1GKknteRviKr03zd%2FShUWvEngiDRp%2BzZNWdquD6fbmLDodb6aQ5XRKOjrbOdNJXb6VmjtEFXUeWniWzAYok%2Fvp8CTwHKJb1i%2Bnao0X3oWbH6wZtwFAHWk%2Bq7pMYMpodAx3h5%2FmU6uhM&X-Amz-Signature=73a3492c424cab71b9f525815d2e84fee48fe9307a876866e5d52895a85d2b37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
