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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQKBOFI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA0lEeKTOKMESuhyhRzHA7fM48XL5A5047qMC19hZyE%2FAiEA2Qvf1bzPbitZ0AP75fy%2BI7004i17T4E%2Fn3iDLHmUOuwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzufe1MqLOVM0Vs4yrcA6BbtLRP6mG%2FqFGvibHjU2SPdEtfQb1aB5pqn4SKqusdc0cyuAY6x2hYmvLKPAO8st7NcW%2FJj0qrNRBBVMZCIcsAGkzfN2hJAMgbnpLTuhVtykoBrRaQ1dAokJUHzTdafqYrkbQ%2BDMJkwbElL6nnOIGvFM%2Fy2J25MZRj5mvG58IfmbfaeEg1xLISAX1GGwG4oV1Z1tG2muVV4DefshwZAEe0GDLK8mTiJqLP8tK8%2BMMUrNrHb85tIhH9tTJZpYzTkoiUUywKoi0NwvXU7%2Bw2gxiGigJVlpIc3wIpnEZwoFpiBaBWQyTIo%2Fon5wBbO0e9A0stAR%2BuJrsypgnR90hcu9Usaz9xYH%2BgdP3ORylIjDNoW%2FaAUB%2FjI1q7P5YNkB2xt455BWMM36TAEPgVoCLYT0A1plpHZfArmrgIj4Atg0hDiQb7f6mmYgqF%2F4vcqHfIG%2BqKPyHjueItDVUlkK7DRY3pgpfS0eF5wWsTwTwWz%2FJHlHTA%2FZjocE2aoTKGXsXkNgdDEvO0bZDCGxKRMhDf8oJC9k%2FbyOqvY12P8z5dKKuJKQQ%2FmpGrMUt41NPuKfp0KDYYIYGg6KHSKTQSQ4CTaoc1L8XSwH1PNL6dQgHof66vZzHlHbtiBepwzk5aMJz2%2Br4GOqUB9TRBhQ1u4h2uw6cADepVfXf8Fx85w81p2ocLy5qXwTjx1j8%2BqdhTr9vi8Qsfv7wanwOjpBHcxcnLtewLT8Bb6Coj2SK8efs%2BUwZ8BAkma%2FJErtYTP34auRTNkPLHkNTgVaqGww75VMxPHzMMT1g4vC4MjjsMb1EdbAK67Jh4sYMgBS8UOxgmRrfVKtxCVct2vtufu3Mg7TOgd%2Fslw3V09%2FLH8EIm&X-Amz-Signature=8ddea57c88ed04a8eb2a0e2a5fefe0110ce8cad1b4e2c69edceb39de0d42a13b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQKBOFI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA0lEeKTOKMESuhyhRzHA7fM48XL5A5047qMC19hZyE%2FAiEA2Qvf1bzPbitZ0AP75fy%2BI7004i17T4E%2Fn3iDLHmUOuwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzufe1MqLOVM0Vs4yrcA6BbtLRP6mG%2FqFGvibHjU2SPdEtfQb1aB5pqn4SKqusdc0cyuAY6x2hYmvLKPAO8st7NcW%2FJj0qrNRBBVMZCIcsAGkzfN2hJAMgbnpLTuhVtykoBrRaQ1dAokJUHzTdafqYrkbQ%2BDMJkwbElL6nnOIGvFM%2Fy2J25MZRj5mvG58IfmbfaeEg1xLISAX1GGwG4oV1Z1tG2muVV4DefshwZAEe0GDLK8mTiJqLP8tK8%2BMMUrNrHb85tIhH9tTJZpYzTkoiUUywKoi0NwvXU7%2Bw2gxiGigJVlpIc3wIpnEZwoFpiBaBWQyTIo%2Fon5wBbO0e9A0stAR%2BuJrsypgnR90hcu9Usaz9xYH%2BgdP3ORylIjDNoW%2FaAUB%2FjI1q7P5YNkB2xt455BWMM36TAEPgVoCLYT0A1plpHZfArmrgIj4Atg0hDiQb7f6mmYgqF%2F4vcqHfIG%2BqKPyHjueItDVUlkK7DRY3pgpfS0eF5wWsTwTwWz%2FJHlHTA%2FZjocE2aoTKGXsXkNgdDEvO0bZDCGxKRMhDf8oJC9k%2FbyOqvY12P8z5dKKuJKQQ%2FmpGrMUt41NPuKfp0KDYYIYGg6KHSKTQSQ4CTaoc1L8XSwH1PNL6dQgHof66vZzHlHbtiBepwzk5aMJz2%2Br4GOqUB9TRBhQ1u4h2uw6cADepVfXf8Fx85w81p2ocLy5qXwTjx1j8%2BqdhTr9vi8Qsfv7wanwOjpBHcxcnLtewLT8Bb6Coj2SK8efs%2BUwZ8BAkma%2FJErtYTP34auRTNkPLHkNTgVaqGww75VMxPHzMMT1g4vC4MjjsMb1EdbAK67Jh4sYMgBS8UOxgmRrfVKtxCVct2vtufu3Mg7TOgd%2Fslw3V09%2FLH8EIm&X-Amz-Signature=ba86f0d07366afe4ec72d71239e697650bb6ea19662f5ed39f0bc6a4905184c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
