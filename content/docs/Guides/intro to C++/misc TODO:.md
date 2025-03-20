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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNTKHIR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDP8zI1XuowqrYG95v6DENqiWTjBMddlDKl9USmqc506gIhAPxwjCdTFWRqXUoU45WelzqFtJK%2BnpAPYcvf5bOmmFSoKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH4p6AQofyqD2i848q3AMgQVviH7gcoQVOZXJvCWDq9LmMijbY6IbS5n3Uew46s1h1wGi9gdTqiWkIu2aiMBBnv4j8g51iBpJgifRCqZ%2BXf3SQV5o%2FIOMuJ8j9xUS%2B5H1fOPiEoniKZSxn5sxH38yjJVLRI2ESvE92Kq1OEIV6vaFXuSStRKz3KSznyfJkLV0ElH7fnDvfTlAd6HbvWHcI9OpNNZkdg2kgsO6XdSxehJgn0YfnNj0doFBW87Bxe8SE9zcl%2B0DrIQX81OEBYC1flQ82ULg7X%2BV7nSAVvjc0aoMhu%2BujdL%2B5UaLkLLXLwRLWofiz4iH2WbbDj8Tc6AW7C4pNoVg4CmRIo8XQxLxF5DIfW9J1xS9Q6Meq3dHt%2BpOhovZxCy6ATvGOZXkWBqO82dbsmOWlyAMJiUK2tOSODOxPUOu0fG5lhQ7jb%2F6Zm6v5sLguQqNbaKA3umrV7%2B7%2BfGn9Sksq9r2tn4s1xGT6RlRAaxcMAv5UwiDt2f%2FT7c7uAL8IJ7iyF9BG3XGDNaVAoQ1gLX%2FFOflYLebtMJMFChGvrYaZoXXehavMdc98hjP4kj%2B3Ru0ZuHrjvNhjt3eHf5gQcuXA%2B81E2YfBzOP51dbe%2F1w1cAUDow50lq33eAAS8eP2X%2BLpnjqXNTC4pvC%2BBjqkAebLrnV20ddBDMPjr3SG3yN1XvYOHnXmIuS9XbAw%2FuYfXAF0qj2DxyLbTvH6qOGlVbjbEECp5%2BP4pebfW5X8cYcoo0q5tJ4WvUxOutZBaPkOqJoYlJFVSMvy3gmcKkzv9WKmMqLlB%2FVZYNMCl6LVtDpsbQ8TS6PQL%2BtOSX3XaEU7uRSHf5iPO3NU0RqXZ2YHzktw6b6xgCNivsWLYOD47HKgJNDz&X-Amz-Signature=027afa0821bf8686f12d600b424a947d0dc385d8ae9c5be4341a14f010005b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNTKHIR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDP8zI1XuowqrYG95v6DENqiWTjBMddlDKl9USmqc506gIhAPxwjCdTFWRqXUoU45WelzqFtJK%2BnpAPYcvf5bOmmFSoKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH4p6AQofyqD2i848q3AMgQVviH7gcoQVOZXJvCWDq9LmMijbY6IbS5n3Uew46s1h1wGi9gdTqiWkIu2aiMBBnv4j8g51iBpJgifRCqZ%2BXf3SQV5o%2FIOMuJ8j9xUS%2B5H1fOPiEoniKZSxn5sxH38yjJVLRI2ESvE92Kq1OEIV6vaFXuSStRKz3KSznyfJkLV0ElH7fnDvfTlAd6HbvWHcI9OpNNZkdg2kgsO6XdSxehJgn0YfnNj0doFBW87Bxe8SE9zcl%2B0DrIQX81OEBYC1flQ82ULg7X%2BV7nSAVvjc0aoMhu%2BujdL%2B5UaLkLLXLwRLWofiz4iH2WbbDj8Tc6AW7C4pNoVg4CmRIo8XQxLxF5DIfW9J1xS9Q6Meq3dHt%2BpOhovZxCy6ATvGOZXkWBqO82dbsmOWlyAMJiUK2tOSODOxPUOu0fG5lhQ7jb%2F6Zm6v5sLguQqNbaKA3umrV7%2B7%2BfGn9Sksq9r2tn4s1xGT6RlRAaxcMAv5UwiDt2f%2FT7c7uAL8IJ7iyF9BG3XGDNaVAoQ1gLX%2FFOflYLebtMJMFChGvrYaZoXXehavMdc98hjP4kj%2B3Ru0ZuHrjvNhjt3eHf5gQcuXA%2B81E2YfBzOP51dbe%2F1w1cAUDow50lq33eAAS8eP2X%2BLpnjqXNTC4pvC%2BBjqkAebLrnV20ddBDMPjr3SG3yN1XvYOHnXmIuS9XbAw%2FuYfXAF0qj2DxyLbTvH6qOGlVbjbEECp5%2BP4pebfW5X8cYcoo0q5tJ4WvUxOutZBaPkOqJoYlJFVSMvy3gmcKkzv9WKmMqLlB%2FVZYNMCl6LVtDpsbQ8TS6PQL%2BtOSX3XaEU7uRSHf5iPO3NU0RqXZ2YHzktw6b6xgCNivsWLYOD47HKgJNDz&X-Amz-Signature=3b66db92438705bfd5845cf6a88628db80f410892873c2014e32eba6a43f3b45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
