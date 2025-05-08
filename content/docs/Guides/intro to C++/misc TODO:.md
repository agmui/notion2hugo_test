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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6BYQFD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIaD4uVwiQ0TpvG2oMbnp65V5ZkYUv11UaKcvpJFLfPAiEAz%2BAPzsoys2Tj%2FOw2H6V1mG5gm5GAchUXxg87OMjncTYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDz4lGTo%2FWjQlEzrlCrcAy8oXsBW0NnDffaN9MAq8bbfIKoDAKEEXK5yUoce4yEzcbGAHZjAiQ%2F%2BQS3a8F2wmH72snVl%2FMd%2B9gZB9hVXfMT755p2AIjRcRQMv9dAI5PT58cMIHHYDwJjKhwmYQR0ZsiB8zKTIc54aAod%2FEJMApxpxwEZdyF3eQnPfYfWJvWqbYiNaVINYEmujFWOPomnBmZA50cQoruYaqRE6GLuIqQ9bHVqCmtyoiMiZU9bieobAF7Rkv7UbL3f4Xeo9oNuqIddo3HyEporJ%2BXZmSj8kVfGDOutI5B%2BnCWWwLL3Qgu7j9v1Q5L5nFTSBMw2wBrgkGZEcfYwH%2BumXvdT5G6kkK0hIBBZqx2IYpVUg2vnOzvYhy0EXwDUr0pJGasSbCNJFl1%2BkkwWbJPE0EV7J%2FOTRJdHZXMwB%2FrgpvVFIlGkbGBQTu0u%2FxXj7ynUHH7hZuZe%2BQCf962NI3nkIqomEEakuJA3LTLSxz8Tgcma%2F02PyYxfBhFT%2B2dKnOzib6imaCzSPxEosYD2pQVxpLQKeGhcn7VytBHhwoLm7zMwLQ0vn5xoX99urBPCixhyaH7IzNQkC9JmLq8jcSOgsQGk9wEApXd1wkhtRRQ4s49qrl3HPDZLg0VY8vw4LjuwU03MMJOs8cAGOqUBNZIG%2F5fPx4xKXKgF4fzt7g5tgtKW9RxvJ4HoishAH%2BM1YfFd5KOGJzOK1d4hWmufXlK7QtYZaVgdobu9OoTYlr%2Fk%2FLXxiC6bZVr73KaGDotGUIzvIjiMQrzXv%2FBILyF04k6Eq6HrkKsiLPRhgh5lmnX2zRsubRhAktq4OZ%2Fj5ebNwhwHc3bDmyg%2FcfYFwsxqhaw5lb26VzgJP5HYBnGhE4CXaARM&X-Amz-Signature=39c8a582ce9fd47876553464bdc8f288a1151f14dca3a49f49fbe2ed6496a57f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6BYQFD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIaD4uVwiQ0TpvG2oMbnp65V5ZkYUv11UaKcvpJFLfPAiEAz%2BAPzsoys2Tj%2FOw2H6V1mG5gm5GAchUXxg87OMjncTYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDz4lGTo%2FWjQlEzrlCrcAy8oXsBW0NnDffaN9MAq8bbfIKoDAKEEXK5yUoce4yEzcbGAHZjAiQ%2F%2BQS3a8F2wmH72snVl%2FMd%2B9gZB9hVXfMT755p2AIjRcRQMv9dAI5PT58cMIHHYDwJjKhwmYQR0ZsiB8zKTIc54aAod%2FEJMApxpxwEZdyF3eQnPfYfWJvWqbYiNaVINYEmujFWOPomnBmZA50cQoruYaqRE6GLuIqQ9bHVqCmtyoiMiZU9bieobAF7Rkv7UbL3f4Xeo9oNuqIddo3HyEporJ%2BXZmSj8kVfGDOutI5B%2BnCWWwLL3Qgu7j9v1Q5L5nFTSBMw2wBrgkGZEcfYwH%2BumXvdT5G6kkK0hIBBZqx2IYpVUg2vnOzvYhy0EXwDUr0pJGasSbCNJFl1%2BkkwWbJPE0EV7J%2FOTRJdHZXMwB%2FrgpvVFIlGkbGBQTu0u%2FxXj7ynUHH7hZuZe%2BQCf962NI3nkIqomEEakuJA3LTLSxz8Tgcma%2F02PyYxfBhFT%2B2dKnOzib6imaCzSPxEosYD2pQVxpLQKeGhcn7VytBHhwoLm7zMwLQ0vn5xoX99urBPCixhyaH7IzNQkC9JmLq8jcSOgsQGk9wEApXd1wkhtRRQ4s49qrl3HPDZLg0VY8vw4LjuwU03MMJOs8cAGOqUBNZIG%2F5fPx4xKXKgF4fzt7g5tgtKW9RxvJ4HoishAH%2BM1YfFd5KOGJzOK1d4hWmufXlK7QtYZaVgdobu9OoTYlr%2Fk%2FLXxiC6bZVr73KaGDotGUIzvIjiMQrzXv%2FBILyF04k6Eq6HrkKsiLPRhgh5lmnX2zRsubRhAktq4OZ%2Fj5ebNwhwHc3bDmyg%2FcfYFwsxqhaw5lb26VzgJP5HYBnGhE4CXaARM&X-Amz-Signature=42ca70c5b2b9b9ce75425bb5a144662c3b6bc7be30c6a69799eacded4e5796e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
