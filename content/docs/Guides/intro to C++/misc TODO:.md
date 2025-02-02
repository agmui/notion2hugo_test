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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGN3SY4B%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXoO0P8NWZ0iMABvsvegDOcj1%2B2BWDF1J6Mejr129eQIhAPxk4CJnYDoU%2BWb6C%2FfFK0%2B0kk3tnoqbgWZRDdzsBrAqKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5T7QUG0OpqpDIxeUq3AOVkJ9RCHSB7WS3iTEA7S4uUFaKrwRJ4WFFdhXkPt74SuR04P%2FykrjQezYK3wgjC8o9Gu%2BJ2OXqxFSX0r%2FI%2F%2B0cspVht0wwFrbVTAvJ2mW2u5ThfMV13LP97cb4NmYGud3U9BotQ21oZbOHsqhc6pi9Go11LloqHHmB7CXCeVeRMwDeGBnt5LvJQ7GmQ6wbJKfGGZ9sFgPUoB8UBdUiJquyrHCopnCfVdMyR9VHWVUkiME8fJJ94FBxd0N2pOtAv1WdIVU9WtoXAkVp3c7FTCVS4weUa04W2W%2BDE3NlFqMXmrwar%2FGt5BmHxQ0Oh1RLCf292K2j82FwB7lw6pMknZ8wmzgSHRfMfmBuMzUW2gela2RzGrXDdH7reiIJwQBkDCQjXRNeb48HTB5xDlTXBDJ7LKTUyNckvoJ9m0AtYFRMuMwjyNGdqi3V9xZUlcubgoxIaeN%2FvGMTOzXyMvkTLHqlYbvtU9PyKwsE1EDYOgPS1gAY0idpi0jTd9MuUp%2FFNc2ixUt15xbGV4t0fe6cb0Ei1JEjCDGeZt2WwfNnqIJfd2W9EASfI8CbQquQ32KImlEBlhaV8w%2BXmU2IVV4hgOv3sHIegckUhwQ1v9dezdD0gbFJAvrFR%2B87dR99zzConfy8BjqkAcP7%2Fr78YTNJDru8jB%2B0fqeot4na4dIeXiLL%2BZ06yqk%2BH4Y1K37%2F5MczqTQICf1BlTlbERaGKDqxMpw1vKk%2FahwQ3WkeRKjUQ95HJWjcNijObJHd5fYKfoSVOp4KzGgxhVk5wXIZijXPaUHDHl64ad70rnvjgkKUTygkIM6PpCTv%2BCTHZer4XRlWsMUSEDducJe9EAtGOuB%2F5PuAPKN7ihPOegSI&X-Amz-Signature=c5779fa564e4adbc659824e4f93b88f88b448a5acf7f285c1cf42ec96895abca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGN3SY4B%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXoO0P8NWZ0iMABvsvegDOcj1%2B2BWDF1J6Mejr129eQIhAPxk4CJnYDoU%2BWb6C%2FfFK0%2B0kk3tnoqbgWZRDdzsBrAqKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5T7QUG0OpqpDIxeUq3AOVkJ9RCHSB7WS3iTEA7S4uUFaKrwRJ4WFFdhXkPt74SuR04P%2FykrjQezYK3wgjC8o9Gu%2BJ2OXqxFSX0r%2FI%2F%2B0cspVht0wwFrbVTAvJ2mW2u5ThfMV13LP97cb4NmYGud3U9BotQ21oZbOHsqhc6pi9Go11LloqHHmB7CXCeVeRMwDeGBnt5LvJQ7GmQ6wbJKfGGZ9sFgPUoB8UBdUiJquyrHCopnCfVdMyR9VHWVUkiME8fJJ94FBxd0N2pOtAv1WdIVU9WtoXAkVp3c7FTCVS4weUa04W2W%2BDE3NlFqMXmrwar%2FGt5BmHxQ0Oh1RLCf292K2j82FwB7lw6pMknZ8wmzgSHRfMfmBuMzUW2gela2RzGrXDdH7reiIJwQBkDCQjXRNeb48HTB5xDlTXBDJ7LKTUyNckvoJ9m0AtYFRMuMwjyNGdqi3V9xZUlcubgoxIaeN%2FvGMTOzXyMvkTLHqlYbvtU9PyKwsE1EDYOgPS1gAY0idpi0jTd9MuUp%2FFNc2ixUt15xbGV4t0fe6cb0Ei1JEjCDGeZt2WwfNnqIJfd2W9EASfI8CbQquQ32KImlEBlhaV8w%2BXmU2IVV4hgOv3sHIegckUhwQ1v9dezdD0gbFJAvrFR%2B87dR99zzConfy8BjqkAcP7%2Fr78YTNJDru8jB%2B0fqeot4na4dIeXiLL%2BZ06yqk%2BH4Y1K37%2F5MczqTQICf1BlTlbERaGKDqxMpw1vKk%2FahwQ3WkeRKjUQ95HJWjcNijObJHd5fYKfoSVOp4KzGgxhVk5wXIZijXPaUHDHl64ad70rnvjgkKUTygkIM6PpCTv%2BCTHZer4XRlWsMUSEDducJe9EAtGOuB%2F5PuAPKN7ihPOegSI&X-Amz-Signature=a42b3f172c5e9d416ac53c15a5d2c4c6009ff0506eef53c2dcf78a742e73ea39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
