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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZ2EAW5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA1UXnAYQS1JhZ9v2e7sEWTOx8sfY%2FPPy8oMQp9suBwAiEAmoDMOIcXWuCbwC%2FqCgiX%2F5CTfAO6jd1NftD0rm9dSwIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHL%2FkrDH2bp6232GfircA0VP2asvZsMGxIooKlvPCLpublNY1ZloQEzoQT%2FYaTq%2FFxFDe%2Fi5DUuFBp1YRBd4tleClsk5Rrt96AP%2BdWWlD1xcOjf5ycorAzD7kJo3fAqKYnuIKWGhnAzI8nLcctgCATXpf9IXiqLkzeCASuZMBODm13Es2mkUsfUpmVf6%2B%2Fwq1tMfaZcjQThjQ6X8QBPqRWs6NDQYYP0dJfKm6s7e0D1NbBkDhuGHnauwXerxDoz04kJLq24n0jEa6PJznJoQhlqqSWAnnSumsF07wgJJxwv1n3q1bsvfUAH66eoerYJnHR7T67uqta0wr%2FJoDkIJ7fRO%2FT9VpmWnV7TgUZvqdJVoU72dd%2BamgF5E%2BXYwdhylgkDsN8f7UKNrmZD8hZeEvq0%2B4b7EwjaCur23TdXPlG8MdyFOhCfU3vMxb1b5NXssXVLWlr%2Br7DI%2B7xCsczoe0JLJ05prorcQXCkjwP7ucWWLjOh7%2FW89fVsvLXFZovkYhM%2Fe7Q60CMP5WzLl%2FDfomaHX%2BC5rTnApuThj%2BDATsVPSd3Jr6ASeDvfAcO3WORaK%2F7MUuEqxbfuQjjOr3ASXrtS39zFhKPKCrxvZR%2BQV7yEZU0FaA3nXDks8hJNUJ%2BB5uD%2FvpqvoigfjLC3jMJmM58AGOqUBXU0DkgE3AJrco%2FUEkLZgjriEsphNWzlwnTbEMBnBUKmU9wJL9PmMOhPqyC1CtiQtib19v1eGJcwwExj%2B8J5D3UMfQVeAgIYgwqWCQHbQGlMjTWUuUv6Ei1Pcz1BrK2CMExQvGvlg4Kl3t7nIDhN1gG317z%2FthwOJL0Xj1efQcs8Mb7wAHuKJY7wzSyXLeaMCFciSZQKwYvw1xsHfkuMokyqtMEht&X-Amz-Signature=c9c0afba54cfb4635f258cec4f53bc522cc61641c4ab8b238df9ceefd2b14ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZ2EAW5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA1UXnAYQS1JhZ9v2e7sEWTOx8sfY%2FPPy8oMQp9suBwAiEAmoDMOIcXWuCbwC%2FqCgiX%2F5CTfAO6jd1NftD0rm9dSwIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHL%2FkrDH2bp6232GfircA0VP2asvZsMGxIooKlvPCLpublNY1ZloQEzoQT%2FYaTq%2FFxFDe%2Fi5DUuFBp1YRBd4tleClsk5Rrt96AP%2BdWWlD1xcOjf5ycorAzD7kJo3fAqKYnuIKWGhnAzI8nLcctgCATXpf9IXiqLkzeCASuZMBODm13Es2mkUsfUpmVf6%2B%2Fwq1tMfaZcjQThjQ6X8QBPqRWs6NDQYYP0dJfKm6s7e0D1NbBkDhuGHnauwXerxDoz04kJLq24n0jEa6PJznJoQhlqqSWAnnSumsF07wgJJxwv1n3q1bsvfUAH66eoerYJnHR7T67uqta0wr%2FJoDkIJ7fRO%2FT9VpmWnV7TgUZvqdJVoU72dd%2BamgF5E%2BXYwdhylgkDsN8f7UKNrmZD8hZeEvq0%2B4b7EwjaCur23TdXPlG8MdyFOhCfU3vMxb1b5NXssXVLWlr%2Br7DI%2B7xCsczoe0JLJ05prorcQXCkjwP7ucWWLjOh7%2FW89fVsvLXFZovkYhM%2Fe7Q60CMP5WzLl%2FDfomaHX%2BC5rTnApuThj%2BDATsVPSd3Jr6ASeDvfAcO3WORaK%2F7MUuEqxbfuQjjOr3ASXrtS39zFhKPKCrxvZR%2BQV7yEZU0FaA3nXDks8hJNUJ%2BB5uD%2FvpqvoigfjLC3jMJmM58AGOqUBXU0DkgE3AJrco%2FUEkLZgjriEsphNWzlwnTbEMBnBUKmU9wJL9PmMOhPqyC1CtiQtib19v1eGJcwwExj%2B8J5D3UMfQVeAgIYgwqWCQHbQGlMjTWUuUv6Ei1Pcz1BrK2CMExQvGvlg4Kl3t7nIDhN1gG317z%2FthwOJL0Xj1efQcs8Mb7wAHuKJY7wzSyXLeaMCFciSZQKwYvw1xsHfkuMokyqtMEht&X-Amz-Signature=bcaa2df4e4663c0c583504d62e2ab409cb9fc7d93539b57fb35a840ee5a1ef70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
