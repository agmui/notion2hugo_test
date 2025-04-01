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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSRLC2I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH4zhuMb3rmkCV6d5ugo76n8R0KXIOCKBmxxeClgPYqUAiApsyW9PKr3p2G6qXCdpMHUjOidjMJe2OP1P%2B1w4LI%2BOyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEBF5MPA249WQbi6rKtwDgiD0djIP7gD4AXOtL76EB6jN2yNAtc0Y%2FDcXjshrIJ5ylPOjgemDOFdNPzzujZX8tPj%2F%2F92o7qmf%2FZJJdhq4%2FzaPhDZ5p0zoCFxn0t8CRfevNix%2B52K7K7P8wOzjwnqe6uylV6P%2F1De9qGuloPrOz02N9Kj5qvrXM%2FqbZgtiZ%2Bu9uaGCYY24rS6N81GkPvvM22eS28kDCQxDJrU6sWgM52BOqeJSOKgkoGhhKTMiWbcbFG0qIq4Y4U2pxmbj04xdZnvFF%2FE2NLEFmayiPCnflkime6asTkQFfnaH5DCC8NhNTDIYAvp6edjlPTgZ3WALj9EObExXNPLQOa%2BqgEontOCiU0O6NDUwL%2Byq6ZTbqJOi1YLxx38p9pRITiNoZPeoLnwXqUElGV1f4wfamK1oII8SZgOgXz%2F%2FmzFloKPDXGSOO24SyyNbaxNC0rYuoQ1z468oVr%2FGIBl46CHypYfoYA4EEBrcoipyVvrw%2F%2FN9d3vgpvDoOD2xxOrjcXxMTEM3feAgPCejyieHYHVqjQivUc%2FJd6Chk5gdUEiVc7ptVyP5pZZcPdMJ31m5Ratu46QEV9q%2BdOgMMMk4qtNy232%2BivQmEe0YgtaRe%2BBKoLVtLntSxG9uQLD7NDS7JJYwxaCwvwY6pgEpQs9HBDUG1OxuXoLEFsWa6dxyfPD2RnkF1pwf5xWWragKWtpw%2Bzqp4aGyGkFQAl%2BxXg5orDv%2F9DCDCmcYcSReZgd1snKu0rqPmkVw2MumgQH%2FQnKjeeNkAJOoXb22zQYSQtHbhKqp5q%2Bp2YW9BaBuy%2BYO92q7XTFB88pgcDQOEWwxHf2dlIjkM0%2F%2FoXI2Oc5EWpMAMqmJyDeEfALvyu7U06Shxcj%2F&X-Amz-Signature=bd753556c8682379acfd5eb0262a47da43ae296b7c82df0ea745d7a63f9fcd71&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSRLC2I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH4zhuMb3rmkCV6d5ugo76n8R0KXIOCKBmxxeClgPYqUAiApsyW9PKr3p2G6qXCdpMHUjOidjMJe2OP1P%2B1w4LI%2BOyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEBF5MPA249WQbi6rKtwDgiD0djIP7gD4AXOtL76EB6jN2yNAtc0Y%2FDcXjshrIJ5ylPOjgemDOFdNPzzujZX8tPj%2F%2F92o7qmf%2FZJJdhq4%2FzaPhDZ5p0zoCFxn0t8CRfevNix%2B52K7K7P8wOzjwnqe6uylV6P%2F1De9qGuloPrOz02N9Kj5qvrXM%2FqbZgtiZ%2Bu9uaGCYY24rS6N81GkPvvM22eS28kDCQxDJrU6sWgM52BOqeJSOKgkoGhhKTMiWbcbFG0qIq4Y4U2pxmbj04xdZnvFF%2FE2NLEFmayiPCnflkime6asTkQFfnaH5DCC8NhNTDIYAvp6edjlPTgZ3WALj9EObExXNPLQOa%2BqgEontOCiU0O6NDUwL%2Byq6ZTbqJOi1YLxx38p9pRITiNoZPeoLnwXqUElGV1f4wfamK1oII8SZgOgXz%2F%2FmzFloKPDXGSOO24SyyNbaxNC0rYuoQ1z468oVr%2FGIBl46CHypYfoYA4EEBrcoipyVvrw%2F%2FN9d3vgpvDoOD2xxOrjcXxMTEM3feAgPCejyieHYHVqjQivUc%2FJd6Chk5gdUEiVc7ptVyP5pZZcPdMJ31m5Ratu46QEV9q%2BdOgMMMk4qtNy232%2BivQmEe0YgtaRe%2BBKoLVtLntSxG9uQLD7NDS7JJYwxaCwvwY6pgEpQs9HBDUG1OxuXoLEFsWa6dxyfPD2RnkF1pwf5xWWragKWtpw%2Bzqp4aGyGkFQAl%2BxXg5orDv%2F9DCDCmcYcSReZgd1snKu0rqPmkVw2MumgQH%2FQnKjeeNkAJOoXb22zQYSQtHbhKqp5q%2Bp2YW9BaBuy%2BYO92q7XTFB88pgcDQOEWwxHf2dlIjkM0%2F%2FoXI2Oc5EWpMAMqmJyDeEfALvyu7U06Shxcj%2F&X-Amz-Signature=02be7a07a8daa8fe62d1de2f57c7e94edabb09ddf7cad4154bdfa88d43cdd1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
