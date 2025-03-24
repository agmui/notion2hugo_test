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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HRSTOU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKN5pPLIQ%2FHjrWFhyV8hq6Asm9OaNfb9OsoD4QEdhhLQIgW4r5FgD4sc3lMdpbOP2JMGB3fOQJirwDPef5E1gHApwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9LQql9odfTfqn1cyrcA8RkFrbfXRIVz00s5xHUlZnJoN2zPFPhL4qjy%2FVc1EAnQJPzZhpNg8XmYJnhS7jY3FVxrv50kW8k4z5Fo6V7S65nzfWrlagqMM%2B9A5njbcBPDFz5Gdz3UdDz0cpO%2BVTO3Pauj6iW%2F6MW2YSfXgO0j5SKiHifHuw0FIKJXThwEodzN6SChT5bcMR%2F4IK5lvc6WdciYlr2vKDun%2FUos3%2Bb9vW%2BhWVX0YuFTdWjSf9g3VUusaJPPi5ybm7fANxM0%2Fn82zr4jZ2VyPXuEQVQFeiosKJ1KUeCEmMOPScocWQxdMTSznrD8q2FMTLDprl9On3K2vQtiYP8spVkSbZY6IZyTsJYXIFn5NWNw8IPHRaE1lfFZlVaaxnPPsOtebjgDFL4NLGSVQ4BYSjNpWRU1uukCECG3aijUoxy8ncU79Tpiz4RFPCxcFPYteudKxcRTtI7R4PG38CMenXIn4mSkaKTWsWqkR4tZLCg3eLKqujV%2BLadISARPVnMADEoOsVkWfExl0DP7r3BIEA%2BU82PBmCU4MxINLi0m%2BBDuYpYQXLu9gMzOhp3W5J3bHYBYTg7dmuGcH3ARAxYMfrRmhGqaYm092vxBQmH9XfB9%2FpaXgVEj8B79rfHN%2FHigD%2FZZbY6MNfig78GOqUBVKLjpUagKp7I%2BGCIZUkZrDl7r2r7nytJ0gNf3FHbmmL7xMqu0mwifVaufWdTon6P1eE1n3%2FBz3dgbxjc3W0YmSe0jGUKphP9L3NN52y3cc25dLAzZ23hj%2Bgb8N9ucCAdegHzkIH%2F9gF182Z0iPp1fZSM5%2FmyJtK5ETxw2fsX03MXK%2BJyw5X7W8mBWKc8pXD%2BI5blagn6tFTgERobLTrMBpWPneiN&X-Amz-Signature=dcb0992ae1b859d7139616dfe02a1730cc4dbb26e0849502676b3963dd923fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HRSTOU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKN5pPLIQ%2FHjrWFhyV8hq6Asm9OaNfb9OsoD4QEdhhLQIgW4r5FgD4sc3lMdpbOP2JMGB3fOQJirwDPef5E1gHApwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9LQql9odfTfqn1cyrcA8RkFrbfXRIVz00s5xHUlZnJoN2zPFPhL4qjy%2FVc1EAnQJPzZhpNg8XmYJnhS7jY3FVxrv50kW8k4z5Fo6V7S65nzfWrlagqMM%2B9A5njbcBPDFz5Gdz3UdDz0cpO%2BVTO3Pauj6iW%2F6MW2YSfXgO0j5SKiHifHuw0FIKJXThwEodzN6SChT5bcMR%2F4IK5lvc6WdciYlr2vKDun%2FUos3%2Bb9vW%2BhWVX0YuFTdWjSf9g3VUusaJPPi5ybm7fANxM0%2Fn82zr4jZ2VyPXuEQVQFeiosKJ1KUeCEmMOPScocWQxdMTSznrD8q2FMTLDprl9On3K2vQtiYP8spVkSbZY6IZyTsJYXIFn5NWNw8IPHRaE1lfFZlVaaxnPPsOtebjgDFL4NLGSVQ4BYSjNpWRU1uukCECG3aijUoxy8ncU79Tpiz4RFPCxcFPYteudKxcRTtI7R4PG38CMenXIn4mSkaKTWsWqkR4tZLCg3eLKqujV%2BLadISARPVnMADEoOsVkWfExl0DP7r3BIEA%2BU82PBmCU4MxINLi0m%2BBDuYpYQXLu9gMzOhp3W5J3bHYBYTg7dmuGcH3ARAxYMfrRmhGqaYm092vxBQmH9XfB9%2FpaXgVEj8B79rfHN%2FHigD%2FZZbY6MNfig78GOqUBVKLjpUagKp7I%2BGCIZUkZrDl7r2r7nytJ0gNf3FHbmmL7xMqu0mwifVaufWdTon6P1eE1n3%2FBz3dgbxjc3W0YmSe0jGUKphP9L3NN52y3cc25dLAzZ23hj%2Bgb8N9ucCAdegHzkIH%2F9gF182Z0iPp1fZSM5%2FmyJtK5ETxw2fsX03MXK%2BJyw5X7W8mBWKc8pXD%2BI5blagn6tFTgERobLTrMBpWPneiN&X-Amz-Signature=0f414763cbcdbc6eec5a1424f450c4df409287cb13502a3cd0fcf1e7b53e5ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
