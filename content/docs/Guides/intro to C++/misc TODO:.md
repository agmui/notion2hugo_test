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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NH2TXVW%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAE1fo8rwR4wPC3mZcZfgvs%2BA7FQWylpzOZrphCTeAR8AiEAkhy5WyLWmd2u9wJVeXfVYFiwoSV85vMCxDKyXveKAdEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHJCZ4OcVfZ%2BZJz9yrcAzKN%2BEXvGEOrfvyMcD8pAi9hJxybH6YRw%2B4AX32Fg8QypsFUqP5Uc6B%2BgLKCg2lI43c0o0AwLC0egeaY%2FX0TUY3iIycj2ZlGKmJQ48OH%2FM2BekpX%2FGxfZkvIaVeMwZbxvlyRrtp8PJldMnf99JAjs0lKrnPXuEkNX%2B6sqD%2FQXCYq1ci0mry5BlTbELpx7t88dQh4RZVaLEI8cqkEg1C2OeKkjVeuJkVOJNA6vclbOu6hxxQvPI%2B9POeX%2BUtjlGyLVwDDgbA0l2Os8eh60UbO303uANSff9yuICfsi4Ijj4sxC2p79biktVNWHlhTUt9oDAydhuCs0Ph1lqzYqqYp4Y2tbVz0YVALeafmW0%2F26aqiMHfXgzBjOf9QTRVEXxlpHY0ZxIyXYihcvED6oc8LdsDQtfr1%2BbEe%2BGEcmcykHZ8lzy%2Fx4DjdniOb6WYqAFs%2F%2BPXaLIcQO3O39ker%2FfwKqWqiHDdkksnAaLZTl04L%2FA74pKAXAxB0AbUs3CAgU6d2lbPtz2yMzrlc6IxmM%2FODh0SqFohUsHWy8kR0CGH4DkYlRdaywX8rXslOKLlmL%2BF3z%2BlGujgrsHWhLjcGL2nq8xP%2F9jfkwvUBTDWMkHNGKD458lt1Tx7wHYSOBvmBMJrs7swGOqUB3u%2BZ%2FYZzhC0XlVlqDfxQPKddkgBO7gjI0n1ypwUqaKLFPh%2Be906WtDj%2B2lSys6xzI2ZW7paUQrHD36opLIBaXml%2BfPLDGyhLa%2BIfu4%2FXkuOuj3C2g%2FCHmSYvU%2BDlo7Nfdg4LAPg%2B9%2BG%2BXObgN2aisAw4p7rrrJ95WowtEmcKSd%2F6QQmqHsdhYOxOixrq0qfiu4%2F%2BnJMff4LA5eKecQZ6%2F1PZWHui&X-Amz-Signature=e56485302d993997bb9f4e1b2bfb262e50538edefe595586cb5edb3c2eac132d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NH2TXVW%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAE1fo8rwR4wPC3mZcZfgvs%2BA7FQWylpzOZrphCTeAR8AiEAkhy5WyLWmd2u9wJVeXfVYFiwoSV85vMCxDKyXveKAdEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHJCZ4OcVfZ%2BZJz9yrcAzKN%2BEXvGEOrfvyMcD8pAi9hJxybH6YRw%2B4AX32Fg8QypsFUqP5Uc6B%2BgLKCg2lI43c0o0AwLC0egeaY%2FX0TUY3iIycj2ZlGKmJQ48OH%2FM2BekpX%2FGxfZkvIaVeMwZbxvlyRrtp8PJldMnf99JAjs0lKrnPXuEkNX%2B6sqD%2FQXCYq1ci0mry5BlTbELpx7t88dQh4RZVaLEI8cqkEg1C2OeKkjVeuJkVOJNA6vclbOu6hxxQvPI%2B9POeX%2BUtjlGyLVwDDgbA0l2Os8eh60UbO303uANSff9yuICfsi4Ijj4sxC2p79biktVNWHlhTUt9oDAydhuCs0Ph1lqzYqqYp4Y2tbVz0YVALeafmW0%2F26aqiMHfXgzBjOf9QTRVEXxlpHY0ZxIyXYihcvED6oc8LdsDQtfr1%2BbEe%2BGEcmcykHZ8lzy%2Fx4DjdniOb6WYqAFs%2F%2BPXaLIcQO3O39ker%2FfwKqWqiHDdkksnAaLZTl04L%2FA74pKAXAxB0AbUs3CAgU6d2lbPtz2yMzrlc6IxmM%2FODh0SqFohUsHWy8kR0CGH4DkYlRdaywX8rXslOKLlmL%2BF3z%2BlGujgrsHWhLjcGL2nq8xP%2F9jfkwvUBTDWMkHNGKD458lt1Tx7wHYSOBvmBMJrs7swGOqUB3u%2BZ%2FYZzhC0XlVlqDfxQPKddkgBO7gjI0n1ypwUqaKLFPh%2Be906WtDj%2B2lSys6xzI2ZW7paUQrHD36opLIBaXml%2BfPLDGyhLa%2BIfu4%2FXkuOuj3C2g%2FCHmSYvU%2BDlo7Nfdg4LAPg%2B9%2BG%2BXObgN2aisAw4p7rrrJ95WowtEmcKSd%2F6QQmqHsdhYOxOixrq0qfiu4%2F%2BnJMff4LA5eKecQZ6%2F1PZWHui&X-Amz-Signature=540f3a6a3b5232d8ed60678b797794d5bd4118e4b1da2339b2dd10f6edc9a26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
