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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LREEXPC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCaAKvHf%2BXjSTEshfrf7U8ZZ1S2CDJ1lpW3YUhDLPv0DAIhAJIemRZk1hOdoowEh%2BE3CncZG6QxnEY1zLuqiLu9S59BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAT87fPLQyoHA0Osq3AOF3nAhuf6x8mh1mcQ4yZmSfhWISfWCq4WiEKr5oBzkZ7WG3UzRQxiKZ7LnXbwQryVbtypMk96st291%2FMbbpqFyaTJXnYmrXJg%2BEnVvfm%2Fnds9H%2BTw1TkMw33jPa7YT%2FESjP70ioxPjGuarCqHm2j0jYaiWjeCa5RwWFhs%2BLy4PMtKtlg834awbY0f22jXVcMuCH7AD8CLiKjltxywoeU1xYfFa3hCWyagZcEfLMPfKyTaCzWQeONypPEAPKJoCaTEH64YA4YSxVcjNYGXkkU4BScrEzupfiqtzKuqTZRkDjA4aiJrjt7AFGPm3vKRnEGaUZZOnZEdMFJsJDOpn%2FY6qLMEpDaGDmub5eiSGme8HUTiFuNwJwDO4hRqYnbrhSdXXl%2FBwC9PS0j7ggCvAH97q4J4Hl0zZKDZt8uSUmpKt22Z%2FNL7%2B%2FHW0ICtujLv7Tau%2FntHbmUmku9seEjckEwnX0ZfAJNTCQHMbpirFGiBivOGtPe9pE4mG0ia2MhB%2FYAe9pc6fV7w8sTVjsyUoy6Mr%2FrFZ5jBnSrqhgvsItTtG7C1b7cqxd5y4gh5W8FPPhw%2FmLaEjeKVBw3hVAqwOv%2BUPb5oUr4ss2tTr%2BQzOQ1EnE7%2BTVdYrHR59AEzaMjCTqdLABjqkASKjRuw6ZkuDcy%2Fo2cOUKICIwE6%2FQfDw0A7aDaLRJVzOAXO8bxc8hyeBgUL1jafHDc3jRkdFGqFxTf6LdWC%2F4UtTMSA30tLdPET4z3EKz8OYdzyEqbBCFfGHeNyTDWmcBh2bOjX0Q956H7cx2UAwg6JRFZjhhUj6LwHcyXd5Ap%2FlwbN8ZYWzKDG01w4hG1WTEEHSjMeSLVuq6sgDw%2F%2F69W%2Fu0DZd&X-Amz-Signature=6f30d12a14b4a3492c3a9ae344cb75b0edb56ecedb35030b7609a8a6894e039b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LREEXPC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCaAKvHf%2BXjSTEshfrf7U8ZZ1S2CDJ1lpW3YUhDLPv0DAIhAJIemRZk1hOdoowEh%2BE3CncZG6QxnEY1zLuqiLu9S59BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAT87fPLQyoHA0Osq3AOF3nAhuf6x8mh1mcQ4yZmSfhWISfWCq4WiEKr5oBzkZ7WG3UzRQxiKZ7LnXbwQryVbtypMk96st291%2FMbbpqFyaTJXnYmrXJg%2BEnVvfm%2Fnds9H%2BTw1TkMw33jPa7YT%2FESjP70ioxPjGuarCqHm2j0jYaiWjeCa5RwWFhs%2BLy4PMtKtlg834awbY0f22jXVcMuCH7AD8CLiKjltxywoeU1xYfFa3hCWyagZcEfLMPfKyTaCzWQeONypPEAPKJoCaTEH64YA4YSxVcjNYGXkkU4BScrEzupfiqtzKuqTZRkDjA4aiJrjt7AFGPm3vKRnEGaUZZOnZEdMFJsJDOpn%2FY6qLMEpDaGDmub5eiSGme8HUTiFuNwJwDO4hRqYnbrhSdXXl%2FBwC9PS0j7ggCvAH97q4J4Hl0zZKDZt8uSUmpKt22Z%2FNL7%2B%2FHW0ICtujLv7Tau%2FntHbmUmku9seEjckEwnX0ZfAJNTCQHMbpirFGiBivOGtPe9pE4mG0ia2MhB%2FYAe9pc6fV7w8sTVjsyUoy6Mr%2FrFZ5jBnSrqhgvsItTtG7C1b7cqxd5y4gh5W8FPPhw%2FmLaEjeKVBw3hVAqwOv%2BUPb5oUr4ss2tTr%2BQzOQ1EnE7%2BTVdYrHR59AEzaMjCTqdLABjqkASKjRuw6ZkuDcy%2Fo2cOUKICIwE6%2FQfDw0A7aDaLRJVzOAXO8bxc8hyeBgUL1jafHDc3jRkdFGqFxTf6LdWC%2F4UtTMSA30tLdPET4z3EKz8OYdzyEqbBCFfGHeNyTDWmcBh2bOjX0Q956H7cx2UAwg6JRFZjhhUj6LwHcyXd5Ap%2FlwbN8ZYWzKDG01w4hG1WTEEHSjMeSLVuq6sgDw%2F%2F69W%2Fu0DZd&X-Amz-Signature=6182a85cbd168e6c88d9d2dbd1a460a38d7684b8a48149ee1aada4567fcf5006&X-Amz-SignedHeaders=host&x-id=GetObject)

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
