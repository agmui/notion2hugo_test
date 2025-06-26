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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJLCR23%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDQLY%2FqMHbP9JJ2ulogmwjhUw8e4HUU29bmHMRjDUCB6AiB1RImH1NMuSK1nUC1phg%2B2wRwTOWJ5KUldRtGE0GGQXir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTRPl67XKPyxTSCiAKtwD6k5%2BN2%2FWWg9q%2FKpblc16fEXe6h0jAKUc3tLARgkR9ppHii3cKEdDk%2B1%2B3TuKPxpt4wZn7oT%2F0iRf1x%2BMP2BA0Gcc37mpgzkwW8%2BZWVGORZ8MEMgUPn3zwj7BB6YSzZKds16H1tyy82eDUjIdqPqX09guv7fjFjqSFwnkaZO29XtjfPkxQh%2BClMCKqbYFeP6gNzZ9%2FGzUK39WO8%2FaehyR7DZa6RAedsC%2BeHMlHwkz9MnAfkGBi8gaWQyDnm5%2BkxJV0GTM8IjrzT98is1S9tYVo0IESUs2s4zItMEvBVaDJjs6xPMgbmnukgj0PzBdrZxPnbqwl0WutZ7X53CVwFRnipb43snjkXYbIRbaRQqAn71v%2F9zTc1wa9I6trPKMfNlnJt%2B6LtgCjgr2UWimpwDETqHsWJHivWDBVCi1Crf0wPzNM4kyGSI5UTV87re2KF7TJYnd1XCKnivY6vBn8rl2FUKU6HFGBVuFYCPhWBu%2BahygJ7AnUXrAAKyEkqlWmpeIJMSm1ZodNmQmoKgYBHkw4RbjFs73N4iGPx116jK0mfBUu3sm5P9SgzPMBHf3SSzvAAoXbokpK4a6tVkDf5NgbK%2FFkbYfB4aLR7nMz1ZYnhOnZwkJWJpNY%2Fxci0Ew4KnywgY6pgH%2B%2B4V51m9%2B5g%2BxnZhfZufg29oUEg5Z7pVjcfpsFr%2Bi5vAw09gG2Nxhn7wnH%2Fgy7gY7A9Rf%2BZudMj0XlWyEfqRoEY66eCwrxVdhpID7tXrMqMpZumCBIrOodgIYpBCvLi11IUdXrKxA7KDZi%2BmHK2gveLnNIRo08P7pit7oiIjOpqvDr49I645u53iqgoAlwRozGFND2iCQbfQ2RjQ1dYH%2BFlwlygQ4&X-Amz-Signature=77ff14161a25cd3d809412734adccfefbd8f6c423cdde5791334623910836399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJLCR23%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDQLY%2FqMHbP9JJ2ulogmwjhUw8e4HUU29bmHMRjDUCB6AiB1RImH1NMuSK1nUC1phg%2B2wRwTOWJ5KUldRtGE0GGQXir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTRPl67XKPyxTSCiAKtwD6k5%2BN2%2FWWg9q%2FKpblc16fEXe6h0jAKUc3tLARgkR9ppHii3cKEdDk%2B1%2B3TuKPxpt4wZn7oT%2F0iRf1x%2BMP2BA0Gcc37mpgzkwW8%2BZWVGORZ8MEMgUPn3zwj7BB6YSzZKds16H1tyy82eDUjIdqPqX09guv7fjFjqSFwnkaZO29XtjfPkxQh%2BClMCKqbYFeP6gNzZ9%2FGzUK39WO8%2FaehyR7DZa6RAedsC%2BeHMlHwkz9MnAfkGBi8gaWQyDnm5%2BkxJV0GTM8IjrzT98is1S9tYVo0IESUs2s4zItMEvBVaDJjs6xPMgbmnukgj0PzBdrZxPnbqwl0WutZ7X53CVwFRnipb43snjkXYbIRbaRQqAn71v%2F9zTc1wa9I6trPKMfNlnJt%2B6LtgCjgr2UWimpwDETqHsWJHivWDBVCi1Crf0wPzNM4kyGSI5UTV87re2KF7TJYnd1XCKnivY6vBn8rl2FUKU6HFGBVuFYCPhWBu%2BahygJ7AnUXrAAKyEkqlWmpeIJMSm1ZodNmQmoKgYBHkw4RbjFs73N4iGPx116jK0mfBUu3sm5P9SgzPMBHf3SSzvAAoXbokpK4a6tVkDf5NgbK%2FFkbYfB4aLR7nMz1ZYnhOnZwkJWJpNY%2Fxci0Ew4KnywgY6pgH%2B%2B4V51m9%2B5g%2BxnZhfZufg29oUEg5Z7pVjcfpsFr%2Bi5vAw09gG2Nxhn7wnH%2Fgy7gY7A9Rf%2BZudMj0XlWyEfqRoEY66eCwrxVdhpID7tXrMqMpZumCBIrOodgIYpBCvLi11IUdXrKxA7KDZi%2BmHK2gveLnNIRo08P7pit7oiIjOpqvDr49I645u53iqgoAlwRozGFND2iCQbfQ2RjQ1dYH%2BFlwlygQ4&X-Amz-Signature=b9127125cf47c7b2ad3a71c70ce9e0bbbf87177150d1648af3cea9b9a5ebb757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
