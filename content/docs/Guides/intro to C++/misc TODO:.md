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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRZ7N3K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFLMrnQ5orSyj2k2MOpEFSZRCre5JGtES3sZRINu61AiAOaXw%2Fj%2Bk2z%2B%2B9fzu916yJv8MYwf5uBtozWujuWzA5DyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkcJHGYzNelWUSQc%2FKtwDRQqXQyqEC6ySC3wGYBFRaBJL8SRIVmHphT3pMlMFI7j3tmStD26EycYNokm2Ji7EkI9O2PnYaFBtAbQzG5aUePCCTeKvKzvqT%2Bt6XeQZiFN%2FtUNw68o8XZDbudy%2Bt4gSwFffT%2B5GnKBjMpAPovSv3FetBEQbsd3Ze9m99Lsiu2CJY2uM8y5%2FXI4Fs6r0aw4v%2Fsw72gV%2BAxyjNu01AFQjpFufqOBT1qzjPEb%2BO0T0jBeXQyM3k1xIZ1MTnbw%2BjZJLO6eToIeWQN64GOwNPFbE%2FxiYTJZ6roPB1H1oXBwLqixFQ7TcozEdRPgK8Ip27VIvqzeN7dyukb4euO9sL8KneSJuUFkgk%2F9XVhbqDpDb7iNGt8g59JHdhX0G0OJUzCB23DzaZZ4la2CydC5RD2dGkuvHrJDMwlyGzOelOypMmAAzvCqwcQLN1MkriDQwwsHwh4O6p3rMZR0hkw1Uc0%2FRIxaVL09zUK8uh3OgCrXLPDu9KKm9%2FAizdCAlo7cs92mWLkTbim341CiB0fSE3WSqTWX8pb%2FiLEMNYXhl7MOPMrpDxa7jaTKfaYw7HSr0d17fUTvB8q3Cf0xvgqRd%2BaoeViso57GKH8ITH5ZaacwUlq0sKPuUAd5A7JLeJx8wjL3pwQY6pgFcZuq54qfWICQVfyCJzfsCGgi77ESdsISEl13W3zMREqAYaXIXLO0K%2B530QGG23G%2FldkSVW1cnOp%2F8slQL%2FlRVMEQaDvvlXTEDQ8By9gtQiQ%2FZsB9S4d%2BZmaagoUgjR%2FPa3ZXR1OxHhPSmDvGAywwF692Gu%2BPlqnWm3JG2gAecFY8pxwPkGflQPWKJnUrUYdWa0PuvMMJ20QP6KZjST6H8Dfzt8cwZ&X-Amz-Signature=395f4585ee13876fea6315d299b003709d48762dfec1ad29273df7addf83197a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRZ7N3K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFLMrnQ5orSyj2k2MOpEFSZRCre5JGtES3sZRINu61AiAOaXw%2Fj%2Bk2z%2B%2B9fzu916yJv8MYwf5uBtozWujuWzA5DyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkcJHGYzNelWUSQc%2FKtwDRQqXQyqEC6ySC3wGYBFRaBJL8SRIVmHphT3pMlMFI7j3tmStD26EycYNokm2Ji7EkI9O2PnYaFBtAbQzG5aUePCCTeKvKzvqT%2Bt6XeQZiFN%2FtUNw68o8XZDbudy%2Bt4gSwFffT%2B5GnKBjMpAPovSv3FetBEQbsd3Ze9m99Lsiu2CJY2uM8y5%2FXI4Fs6r0aw4v%2Fsw72gV%2BAxyjNu01AFQjpFufqOBT1qzjPEb%2BO0T0jBeXQyM3k1xIZ1MTnbw%2BjZJLO6eToIeWQN64GOwNPFbE%2FxiYTJZ6roPB1H1oXBwLqixFQ7TcozEdRPgK8Ip27VIvqzeN7dyukb4euO9sL8KneSJuUFkgk%2F9XVhbqDpDb7iNGt8g59JHdhX0G0OJUzCB23DzaZZ4la2CydC5RD2dGkuvHrJDMwlyGzOelOypMmAAzvCqwcQLN1MkriDQwwsHwh4O6p3rMZR0hkw1Uc0%2FRIxaVL09zUK8uh3OgCrXLPDu9KKm9%2FAizdCAlo7cs92mWLkTbim341CiB0fSE3WSqTWX8pb%2FiLEMNYXhl7MOPMrpDxa7jaTKfaYw7HSr0d17fUTvB8q3Cf0xvgqRd%2BaoeViso57GKH8ITH5ZaacwUlq0sKPuUAd5A7JLeJx8wjL3pwQY6pgFcZuq54qfWICQVfyCJzfsCGgi77ESdsISEl13W3zMREqAYaXIXLO0K%2B530QGG23G%2FldkSVW1cnOp%2F8slQL%2FlRVMEQaDvvlXTEDQ8By9gtQiQ%2FZsB9S4d%2BZmaagoUgjR%2FPa3ZXR1OxHhPSmDvGAywwF692Gu%2BPlqnWm3JG2gAecFY8pxwPkGflQPWKJnUrUYdWa0PuvMMJ20QP6KZjST6H8Dfzt8cwZ&X-Amz-Signature=da628d867ac95cbecf923b94a9bb7beb29eda2b94fb8c3f91bd1d3efca3d0c39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
