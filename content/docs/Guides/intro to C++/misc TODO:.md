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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3BR6JGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEHDCZIQ1TBMHTIvJCQ8M3oFUHHS9MSgWZNoWGj7NqOhAiAK9cW%2BKFx2YkVMIHAN4eJ50mg1JajVxHmUe%2BjV7p8uFCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMSjfTT515tUF6xG14KtwDjiJxqb%2BjVsXwWO4W2W0TgXg%2FaAWhazdRVgVWAC7FzrrmiK4i432qkK85GSDLLyoQsmYIKpAOzNCre2L%2FWT9bJgP4dbrFZNt9y2oeJwSn1vO7IvFr9b%2BVOkUV9ZnJ0HYAcrztSIPfJRf68rJwOf6zOqgGFEMaoODwpFIbvn%2BtnvLDhdBf%2F9jyHYJZ5%2B%2FkClLX%2BdGhmAikP16eXnHmQ9IxJSp%2FJWaNQZYvVncoFxt1hYV2ewg%2FI3vei%2BLCCUu7nbTAgL%2BRaaUACR8dDM7VY%2FDYGfOl29dK5txrAgqj1%2FEEDg8muc8apaoT%2BZySt7zv9q%2FTwFWn21MtVnFS4XSEczS%2BUkrlxaqAcE3h2ae5avyvwONkEQGMcniSt3J8QQVEU50V2rm1ob9iEJdWpdp9NU7e20C1w0Y6i8gbdEDIaHYlcIwJSZ%2Fn5NoQRmWeC2T2NFR6QD4zE3xL%2F6nczETUzpk1sHzRL05EFQ0X%2BQIoB4BGTaIyNEcuAUiDBqIr6KplPbuYpWn1CeRJfOHGgtHEXkwZu3O0gcKBx0bZ%2Bf%2BdFEp9F97WigJJ3jC%2BBeWHiJvCzr1tDmbuCQ%2Bym64%2BR3iIMBJgjT0GfP040iiACXoI3OubTlECw9o%2BHsCW%2B7MKPaAw%2Bp%2BowAY6pgEk3f45f2NL9q%2FHZeMIScKS%2BXtnj%2B7vrjBGQwj2v3RKpYznO0TJdqcpsEuQe7L3eY7yI%2FO4fsEsyXIV02NUNTmZBk%2BAlGitAa%2Fx3PFujznCgc21ThUpcragRXPzgCjkUCMReDWBQJdZBcffYIknXQEYAC%2BcCMEFLMqRkqsbYPTybsI8FiZYlTlCDiUoyGf7aoY3TC4uf6f7UYuBDbDDxwhLcdUEa0Yr&X-Amz-Signature=358941f273a19c353ef71e324778b3e17fd86f7d8a8b05af7b1b4e1edc3af056&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3BR6JGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEHDCZIQ1TBMHTIvJCQ8M3oFUHHS9MSgWZNoWGj7NqOhAiAK9cW%2BKFx2YkVMIHAN4eJ50mg1JajVxHmUe%2BjV7p8uFCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMSjfTT515tUF6xG14KtwDjiJxqb%2BjVsXwWO4W2W0TgXg%2FaAWhazdRVgVWAC7FzrrmiK4i432qkK85GSDLLyoQsmYIKpAOzNCre2L%2FWT9bJgP4dbrFZNt9y2oeJwSn1vO7IvFr9b%2BVOkUV9ZnJ0HYAcrztSIPfJRf68rJwOf6zOqgGFEMaoODwpFIbvn%2BtnvLDhdBf%2F9jyHYJZ5%2B%2FkClLX%2BdGhmAikP16eXnHmQ9IxJSp%2FJWaNQZYvVncoFxt1hYV2ewg%2FI3vei%2BLCCUu7nbTAgL%2BRaaUACR8dDM7VY%2FDYGfOl29dK5txrAgqj1%2FEEDg8muc8apaoT%2BZySt7zv9q%2FTwFWn21MtVnFS4XSEczS%2BUkrlxaqAcE3h2ae5avyvwONkEQGMcniSt3J8QQVEU50V2rm1ob9iEJdWpdp9NU7e20C1w0Y6i8gbdEDIaHYlcIwJSZ%2Fn5NoQRmWeC2T2NFR6QD4zE3xL%2F6nczETUzpk1sHzRL05EFQ0X%2BQIoB4BGTaIyNEcuAUiDBqIr6KplPbuYpWn1CeRJfOHGgtHEXkwZu3O0gcKBx0bZ%2Bf%2BdFEp9F97WigJJ3jC%2BBeWHiJvCzr1tDmbuCQ%2Bym64%2BR3iIMBJgjT0GfP040iiACXoI3OubTlECw9o%2BHsCW%2B7MKPaAw%2Bp%2BowAY6pgEk3f45f2NL9q%2FHZeMIScKS%2BXtnj%2B7vrjBGQwj2v3RKpYznO0TJdqcpsEuQe7L3eY7yI%2FO4fsEsyXIV02NUNTmZBk%2BAlGitAa%2Fx3PFujznCgc21ThUpcragRXPzgCjkUCMReDWBQJdZBcffYIknXQEYAC%2BcCMEFLMqRkqsbYPTybsI8FiZYlTlCDiUoyGf7aoY3TC4uf6f7UYuBDbDDxwhLcdUEa0Yr&X-Amz-Signature=19311616e9e522672c357012b20cccd00ac4bf07291a5da28f6f8a0593891201&X-Amz-SignedHeaders=host&x-id=GetObject)

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
