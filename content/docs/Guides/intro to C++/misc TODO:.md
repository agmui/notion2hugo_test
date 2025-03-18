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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLJTY6Y%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQChiIOgvjZIDa7tnJMhZuIuVIZDHsuEda7E3Jfq7YajlAIgTfxgOLj5UkMXE4PWl9Wfa7tWPojhSsOYZSwJjforTUEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPBRypvv84FMIwYaLSrcA7RPrs7ODMCNwe6nxbU6D4M%2FTEfdABnwE3kyDdAlts%2FRwY2KTvH8R4l1Zezek2v05vvElRYJwqf6S2hjxCbZX%2BXJHi0VJztbXTub1sHFx9E8fnGsvwUUhFb9RHJZzyR1%2FK%2FAsPfCgMkpWK54WIPuIRajzC1VJZiwAnSjiXZRG7jdnowLGr5LcS%2BZ4PXvb6HggYlrB3zEi9T0LKScX9FUyPqWNizAz0l1%2BjVQEyUkvcYTzJ9SJYJg6A6u%2FKzzdISvGpnIljDLmy7fIhzoMUC9WYxrUt6VxHQtf1MLN6Pk8MWy%2BzTSe6vte%2B0IR%2FZHaw6Nxe89ahHvoVxtB3IIw1imUGqk500gf40qAR0XPF%2FeBlVT1skWerJ9aDo0ykY5%2ButI1osSsCSbEiBfSA%2BhogtwWrqaGyl29X5L5j0lMQdZO7RGUzelBkofK%2BZo7GtK5eWwXYJPFlYDhHnRDYpx7nng%2FeWblgL%2BxZKfuc0UT92K0xrasyoIlrYVLqR772Qtq7hG0uyiCjnTC0Q5kMOfIaZtuFvs%2BZxBTgKHWtUb9pEL%2BsZ3IJ0jRO%2BRNLPTfT5Rz3J0awt7PYAx43dsqQXjIkjnnpyrJfxmmte4JLo8DqgTA0olOQaQgrfAyPqJaFaUMOaw574GOqUBxYckOWEsWjP6retViStXEejE8hNLCWuEVM2h6jL7zK4xXq6B91l4fraIpYeeY%2FDvPs4P9znWmP1V2cbb1uT6PEf8PzIk8ehusPVFoFBTO%2F9nikjAxoS1ptUZmOJJ3S6ifdpfIMG6oKGhxwkSfETjULpOpEGYT5yosSi%2BKdc%2F3ZyR0Ocn3zMAa4ksSqbOsTzT%2FOI6Hh7EOVwiotjnIUBtem79Lpst&X-Amz-Signature=9a14c89cdae9ed1ce70c7e3c5f02fc217bf6bc029a0fe7bbc473c8ce98781f13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLJTY6Y%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQChiIOgvjZIDa7tnJMhZuIuVIZDHsuEda7E3Jfq7YajlAIgTfxgOLj5UkMXE4PWl9Wfa7tWPojhSsOYZSwJjforTUEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPBRypvv84FMIwYaLSrcA7RPrs7ODMCNwe6nxbU6D4M%2FTEfdABnwE3kyDdAlts%2FRwY2KTvH8R4l1Zezek2v05vvElRYJwqf6S2hjxCbZX%2BXJHi0VJztbXTub1sHFx9E8fnGsvwUUhFb9RHJZzyR1%2FK%2FAsPfCgMkpWK54WIPuIRajzC1VJZiwAnSjiXZRG7jdnowLGr5LcS%2BZ4PXvb6HggYlrB3zEi9T0LKScX9FUyPqWNizAz0l1%2BjVQEyUkvcYTzJ9SJYJg6A6u%2FKzzdISvGpnIljDLmy7fIhzoMUC9WYxrUt6VxHQtf1MLN6Pk8MWy%2BzTSe6vte%2B0IR%2FZHaw6Nxe89ahHvoVxtB3IIw1imUGqk500gf40qAR0XPF%2FeBlVT1skWerJ9aDo0ykY5%2ButI1osSsCSbEiBfSA%2BhogtwWrqaGyl29X5L5j0lMQdZO7RGUzelBkofK%2BZo7GtK5eWwXYJPFlYDhHnRDYpx7nng%2FeWblgL%2BxZKfuc0UT92K0xrasyoIlrYVLqR772Qtq7hG0uyiCjnTC0Q5kMOfIaZtuFvs%2BZxBTgKHWtUb9pEL%2BsZ3IJ0jRO%2BRNLPTfT5Rz3J0awt7PYAx43dsqQXjIkjnnpyrJfxmmte4JLo8DqgTA0olOQaQgrfAyPqJaFaUMOaw574GOqUBxYckOWEsWjP6retViStXEejE8hNLCWuEVM2h6jL7zK4xXq6B91l4fraIpYeeY%2FDvPs4P9znWmP1V2cbb1uT6PEf8PzIk8ehusPVFoFBTO%2F9nikjAxoS1ptUZmOJJ3S6ifdpfIMG6oKGhxwkSfETjULpOpEGYT5yosSi%2BKdc%2F3ZyR0Ocn3zMAa4ksSqbOsTzT%2FOI6Hh7EOVwiotjnIUBtem79Lpst&X-Amz-Signature=0453afbcbeaa8a13425abda6e2f6de693ccd3cbaeb4c784f7cde03beab87c645&X-Amz-SignedHeaders=host&x-id=GetObject)

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
