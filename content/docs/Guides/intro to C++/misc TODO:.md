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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA6MZTG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2BScHO9RzFtON58rHLlHTrwXkPFuxE4F1lySLIcmoHAIhAJk%2FydW%2BNjXPxnhCUG4iN2Qjt%2FYMSMq9xWz5B%2B8MQQZiKv8DCCoQABoMNjM3NDIzMTgzODA1IgyzYQYwgpB5d7BO6U4q3AOU40JX7E0Zvvg0IlWXnVgoHjoaOsKsQZo5yJhy%2F7uZA9jScyRe6fc4kMouv9HaAxnkFL%2B7pLQ5cK3YerwRuh1VhTS0qhyJnDqunhCEPxxCh%2BQgyBo9osQOjMyZdj5wNh9fIYGupwrin3CHv9UP71gww5vHAo6qtTBpc9GQg2EXQ341T6al1rMFtpj%2Bdnh%2FDhEcGsxRWDxh6ie6jIN194%2F1IdgOdFbpHVfAuAkzqWTckA4ARy7Ys3HWLY%2FJZY5jQiirSay5g%2BBdu1TVvDKzBGvOv%2Bl2mxFJL%2F52Qvrvnm6NxemeM8vWlbOFmWqy2W2ORc8r8GmG5rUGfhZFVSrFiTzEn%2FKO%2FnQQTziLIWhno4Qim9MD8YR002jFaVQtl06uIO5DlILcyvK%2FSPO4QpyQKCtjzqWgLwE539IHclWYBc5iZxh%2BPI0hLI9%2FYsAGymVxMC81wXav75Lde8XUt%2BrrAei8kVJ1vNW8gROFNugJp7Q4xAk0Hgqi4SLcMqz0BNep%2F9FRC1J2fSb9f7YV%2FvWXih8OJIk9V0AzulzoRlYnA0raPeH3MglVBz9XrJZBBRl0xUmK6dCAnZBWjiavLqiPm229u8LF4ET2fvYuFhVBCVvyhWOF55lnGOhsSLDXGjC1wbzEBjqkAR%2BcOsNYo0atlKm7yEjTKTc7lgNkst3X%2BsxunJZtrvxvm%2B%2Bd%2BJ0n4F7KMeFQRjogLTxQpiAPyVziOE%2Fn%2BaTPXlmmUjVs%2B8yAUcOfpM%2F0j6ozHtOpXaxg8juEynKc83Zg2in8SQwjU9TTmKxtIxb32L6ikClVmIRKpFo9dxV8yMsW7aHYfJZg2CphoX%2FrSRybazd4IDGgr4qpGY6atoFnCi4yY86l&X-Amz-Signature=71f6d551430998d05302e3447f589a610801e3bd4ac2abeff4152fd24d0cb257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA6MZTG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2BScHO9RzFtON58rHLlHTrwXkPFuxE4F1lySLIcmoHAIhAJk%2FydW%2BNjXPxnhCUG4iN2Qjt%2FYMSMq9xWz5B%2B8MQQZiKv8DCCoQABoMNjM3NDIzMTgzODA1IgyzYQYwgpB5d7BO6U4q3AOU40JX7E0Zvvg0IlWXnVgoHjoaOsKsQZo5yJhy%2F7uZA9jScyRe6fc4kMouv9HaAxnkFL%2B7pLQ5cK3YerwRuh1VhTS0qhyJnDqunhCEPxxCh%2BQgyBo9osQOjMyZdj5wNh9fIYGupwrin3CHv9UP71gww5vHAo6qtTBpc9GQg2EXQ341T6al1rMFtpj%2Bdnh%2FDhEcGsxRWDxh6ie6jIN194%2F1IdgOdFbpHVfAuAkzqWTckA4ARy7Ys3HWLY%2FJZY5jQiirSay5g%2BBdu1TVvDKzBGvOv%2Bl2mxFJL%2F52Qvrvnm6NxemeM8vWlbOFmWqy2W2ORc8r8GmG5rUGfhZFVSrFiTzEn%2FKO%2FnQQTziLIWhno4Qim9MD8YR002jFaVQtl06uIO5DlILcyvK%2FSPO4QpyQKCtjzqWgLwE539IHclWYBc5iZxh%2BPI0hLI9%2FYsAGymVxMC81wXav75Lde8XUt%2BrrAei8kVJ1vNW8gROFNugJp7Q4xAk0Hgqi4SLcMqz0BNep%2F9FRC1J2fSb9f7YV%2FvWXih8OJIk9V0AzulzoRlYnA0raPeH3MglVBz9XrJZBBRl0xUmK6dCAnZBWjiavLqiPm229u8LF4ET2fvYuFhVBCVvyhWOF55lnGOhsSLDXGjC1wbzEBjqkAR%2BcOsNYo0atlKm7yEjTKTc7lgNkst3X%2BsxunJZtrvxvm%2B%2Bd%2BJ0n4F7KMeFQRjogLTxQpiAPyVziOE%2Fn%2BaTPXlmmUjVs%2B8yAUcOfpM%2F0j6ozHtOpXaxg8juEynKc83Zg2in8SQwjU9TTmKxtIxb32L6ikClVmIRKpFo9dxV8yMsW7aHYfJZg2CphoX%2FrSRybazd4IDGgr4qpGY6atoFnCi4yY86l&X-Amz-Signature=0b34e802d6df62441fbc93758c3efb4b70b07f9e978491b8da2e4a4d3b38f449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
