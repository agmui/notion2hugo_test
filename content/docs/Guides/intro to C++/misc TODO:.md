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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUEE2U2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWCghdNs5gv5kSir4vuD34nJxH%2BN8%2BW0cQCJF6w2ozOAiEA82%2B5UrMBMUddt4e7jGWC%2FzSYrtBpdKPopuMq0UxF5t8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSTLc81JdMULogegircA6aFYzrprIBj%2Fz%2F2XWxOkAP%2BvXj%2F5L5UYI49mhwE%2B9XYw1p5UmgFWW9OO%2FsNtf6WKWoWl9ZmvOy426dKB%2F2XrNfm8Cy2qOdz%2F5SzTi84d2ytixHcS%2BFhHWjwchOtQlFdUfzUXuWrPDaXt5ts8i9HMLU93rWFq8qy2HjvoFuJgYRiahinH81zhYWH1WFg%2BKhVRe5bTE4PaTSu3TkioWwOLehQr%2BGmx3sbduU4%2Fj%2FowLa2unQc%2Fkamzy%2FQfw1NtkfJ%2BzdyqDXFOlX%2FeSW4jIUbG91sPuZfAK6ZnWP7%2B2ZH2L%2FnMyh6mccfvKKEdD1XfA3t6M7zW%2FQtdhFDCAYTcEUjFJe2fIJNwHMWuQdLk2fUoILMpC0f%2Fq8s4nyXneHkp6l7elGn9aSr%2FRackEZH%2BDHH4JLWFoD%2Fk8dIExUWPblDv92s5%2Bj0UBO4wZFlOyIbssPT2mscL4CKqtEoUZg%2BVBeC8JUmPH3TaPmrrAiVbny1ftNP8FBf8hYAPLM2QHjYR4W843Edb403dDpkDKoU7CLom2SvzEF5SNX97nPe8I7LoYAoClo7twlN6QfV%2Bu9%2BcxogLFJocVrtEts1G2H6rH4FrGdGhpjB%2FTPT1OWG%2FUI7lbPBpw3LVZEwKTvbaptFMLuixcAGOqUB7sadDEgc6ElXqs5STVFHG1oo68ZEQo7%2Fg%2BG0PJOT3shiVxeDjynODaV7dTZ3012PoasKIG6Cj2RC5pCEvzWM9HHBj%2F4q2Up%2FV5FpfbCkfGjn5vVDGuOo1S6YqYUEGZz8WVYwaTEsuUwjbvQDx76uWTUux%2BYzMczG1MghWZp7abmM7x7cNBsDv60FYiU3sWG8Xr%2BM%2BfSJf%2BMfWGqNXs8N1Sq2GotM&X-Amz-Signature=6ec904db1a266defa2343f46cd4da33578f0dd6d5523788b4ae7aba17dba37a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUEE2U2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWCghdNs5gv5kSir4vuD34nJxH%2BN8%2BW0cQCJF6w2ozOAiEA82%2B5UrMBMUddt4e7jGWC%2FzSYrtBpdKPopuMq0UxF5t8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSTLc81JdMULogegircA6aFYzrprIBj%2Fz%2F2XWxOkAP%2BvXj%2F5L5UYI49mhwE%2B9XYw1p5UmgFWW9OO%2FsNtf6WKWoWl9ZmvOy426dKB%2F2XrNfm8Cy2qOdz%2F5SzTi84d2ytixHcS%2BFhHWjwchOtQlFdUfzUXuWrPDaXt5ts8i9HMLU93rWFq8qy2HjvoFuJgYRiahinH81zhYWH1WFg%2BKhVRe5bTE4PaTSu3TkioWwOLehQr%2BGmx3sbduU4%2Fj%2FowLa2unQc%2Fkamzy%2FQfw1NtkfJ%2BzdyqDXFOlX%2FeSW4jIUbG91sPuZfAK6ZnWP7%2B2ZH2L%2FnMyh6mccfvKKEdD1XfA3t6M7zW%2FQtdhFDCAYTcEUjFJe2fIJNwHMWuQdLk2fUoILMpC0f%2Fq8s4nyXneHkp6l7elGn9aSr%2FRackEZH%2BDHH4JLWFoD%2Fk8dIExUWPblDv92s5%2Bj0UBO4wZFlOyIbssPT2mscL4CKqtEoUZg%2BVBeC8JUmPH3TaPmrrAiVbny1ftNP8FBf8hYAPLM2QHjYR4W843Edb403dDpkDKoU7CLom2SvzEF5SNX97nPe8I7LoYAoClo7twlN6QfV%2Bu9%2BcxogLFJocVrtEts1G2H6rH4FrGdGhpjB%2FTPT1OWG%2FUI7lbPBpw3LVZEwKTvbaptFMLuixcAGOqUB7sadDEgc6ElXqs5STVFHG1oo68ZEQo7%2Fg%2BG0PJOT3shiVxeDjynODaV7dTZ3012PoasKIG6Cj2RC5pCEvzWM9HHBj%2F4q2Up%2FV5FpfbCkfGjn5vVDGuOo1S6YqYUEGZz8WVYwaTEsuUwjbvQDx76uWTUux%2BYzMczG1MghWZp7abmM7x7cNBsDv60FYiU3sWG8Xr%2BM%2BfSJf%2BMfWGqNXs8N1Sq2GotM&X-Amz-Signature=d815df76e6109ffb749e45e1e92843a58a4efe65fb966a7a08f9f9487309b1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
