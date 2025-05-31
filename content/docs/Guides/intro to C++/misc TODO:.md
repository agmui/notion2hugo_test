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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKNUIS4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTPFd%2BgoK3qeHDj7hzSkBaJ3xmlswwrcBB1nm4rK9T%2BAIhAP4kuBhVs6T1yK4ZJ%2BjXPYoRkn6ORDG%2FK%2FHARDHGkbhGKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy%2Fk%2B1WRRRB8dlz5oq3AP3VdFLE57hip0Ra9LZkHoYQXY8ORBFF8gul%2BRQJSPlVZqkBEiqouefSLnpkMvMG9e5ePSWWCjxqD47aAsU07Pkh5h7yBQE1dIBl1pZmj8btIwHKnUfToYB5nrgxZJP56HbNcAJRv2aZpVltrVVG8uiVlc1gkawM4jLyVsvmXUr%2BVGdfh8N8dMMDTtB2xTiXJ0M%2F%2FYDkz%2F%2BBFUKt2fpAAP7mnm2KpNSXgR%2F0J3Bz5%2FMVoecKhr3ObkfqnI99UZPyHGFwD4q0PIEqhxf4YEAQ%2BFbWd9Fl%2FOu5Z0l0vY9j1%2FW5xga6aR2IfD8Yb51lX15sqlQa%2FfDHx%2BxtR0WJSyMRNN31TbwzY3i4NWr%2B%2B6dnsqhGkDqs1UYhbk6NuTgovLGlZz93%2Fnw1AiLYwDMQqimnZ6TOXAFSV672RBiZec97Le26vM4fclh1CR2YrStvT2w2gDV7BoH7Cia6Z6jeKA03g19Ra%2B1tYCn%2BfTn9R0%2B7TKV73DYvut%2Bo%2FseEGbyiYnKzpawDFFVSzJibcKmWV7CMEmdbKkf4szllRHn59Ub%2F%2FqgIh3Ry4cAZzalaMnwSxwp8S0%2BsBsQXgS1YfBCBND0Rz0cg4w6okIaxABkC3qsJCMSFUC1SGDOjLxOdpq4AjDJ3OrBBjqkAbVsWS2xwfAVzNP7eKll8rlVJCGCEzhwwn5esMx124QAkYhVkrntSNRwErrKiODVLkbq9QOcyT%2FKmaCrZcWTqm7EyD1nD7QAj1Ve0DCXcwLpLSUi%2FAXMC3VQZVwY%2Fwr5DArH0ItR6Ybud3XV%2F2NMYaWtavqGHMvSkz9S7n0S0X7WOCow9qjn6FeNH198oK6mSXAj%2FTfsJEfY8tFF5SguRLjTZ69W&X-Amz-Signature=a3db417323f4ed16dadfbab6bb241a45d5a61edca2c5188edd87fdc0a8490715&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKNUIS4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTPFd%2BgoK3qeHDj7hzSkBaJ3xmlswwrcBB1nm4rK9T%2BAIhAP4kuBhVs6T1yK4ZJ%2BjXPYoRkn6ORDG%2FK%2FHARDHGkbhGKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy%2Fk%2B1WRRRB8dlz5oq3AP3VdFLE57hip0Ra9LZkHoYQXY8ORBFF8gul%2BRQJSPlVZqkBEiqouefSLnpkMvMG9e5ePSWWCjxqD47aAsU07Pkh5h7yBQE1dIBl1pZmj8btIwHKnUfToYB5nrgxZJP56HbNcAJRv2aZpVltrVVG8uiVlc1gkawM4jLyVsvmXUr%2BVGdfh8N8dMMDTtB2xTiXJ0M%2F%2FYDkz%2F%2BBFUKt2fpAAP7mnm2KpNSXgR%2F0J3Bz5%2FMVoecKhr3ObkfqnI99UZPyHGFwD4q0PIEqhxf4YEAQ%2BFbWd9Fl%2FOu5Z0l0vY9j1%2FW5xga6aR2IfD8Yb51lX15sqlQa%2FfDHx%2BxtR0WJSyMRNN31TbwzY3i4NWr%2B%2B6dnsqhGkDqs1UYhbk6NuTgovLGlZz93%2Fnw1AiLYwDMQqimnZ6TOXAFSV672RBiZec97Le26vM4fclh1CR2YrStvT2w2gDV7BoH7Cia6Z6jeKA03g19Ra%2B1tYCn%2BfTn9R0%2B7TKV73DYvut%2Bo%2FseEGbyiYnKzpawDFFVSzJibcKmWV7CMEmdbKkf4szllRHn59Ub%2F%2FqgIh3Ry4cAZzalaMnwSxwp8S0%2BsBsQXgS1YfBCBND0Rz0cg4w6okIaxABkC3qsJCMSFUC1SGDOjLxOdpq4AjDJ3OrBBjqkAbVsWS2xwfAVzNP7eKll8rlVJCGCEzhwwn5esMx124QAkYhVkrntSNRwErrKiODVLkbq9QOcyT%2FKmaCrZcWTqm7EyD1nD7QAj1Ve0DCXcwLpLSUi%2FAXMC3VQZVwY%2Fwr5DArH0ItR6Ybud3XV%2F2NMYaWtavqGHMvSkz9S7n0S0X7WOCow9qjn6FeNH198oK6mSXAj%2FTfsJEfY8tFF5SguRLjTZ69W&X-Amz-Signature=5f1baaf95584174939ffa9284948c5613cde83e42bfa9206eb4369880f980837&X-Amz-SignedHeaders=host&x-id=GetObject)

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
