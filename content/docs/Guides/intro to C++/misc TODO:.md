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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBFAQ2BQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICx4oVXo%2FQDHfh0tqOxGCIHWhdCtZvwmI6gJ0WokAtKdAiAx2sl3vZ0CiwOPeFD%2B0gucEOz3VnIWCPamngNTSaddiyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMWod9dDlZ6dThTUr0KtwDQzylHLVtyUXjy%2Bea%2Fk8IP0le2QdL15o4uUWuu%2BgOACjKfjHuwbecLvnU9s29JwH71VERgRr3lObIorEhDf9GMUkpm9mAwavuXUeOqh2n9ZvmyggBmpZ3k6GcgZrroC4NDzY4Wz8zqLZZP7nSx1Lwsf5ABT3ixMK10O%2B5uarXaVLep0RKTte7rIghjSWwH8LlWfcD1VkuvefdGE%2BntkT547FSon1KL2PlEufkwH9pvlC8SvlJuzuwDQnRVUtUgk%2FrCtNstTNZf74gaR3e2DOjw46wdtU8E7FijtXcnPUyTJkfn7eScQEEo2wAGJ392bzhEP2RHH73nYO%2Fg0bKujgSishQ86FLtoG1VtYKn0MUVcVGdlkb9BZ3gXx66W%2FOQxVaDhhghJ2s9DVBfJKiZ4YjHSVsikzECsT6zeMzPFHjFAmb86N9Y7OJmxmB0DVKw1kRpuXR0KTKafMWwEKIWPRb%2F1hatbjmPIRUauVSeigHNlxzWLmUBdH0AV9Zf5UBiYXIZO2kbGY8iPQJOdMtv4MQ%2FsmcnVNIzYU2l9yS1iw%2BtXU1N4OU4fBnmem2ZYmr0h7KDw%2FMR1RcPfUp9xzhE5fJNm%2BFOYQFqvl%2F5R4bRJsajlmcExJDVymL6HdmWXcwitz2vQY6pgH%2BYF0RBQbgSHAyKYXU9q41MzeCeVrz%2BbuY6ZsOQtdtBEOZ109ms46hm9jx1kxUf2olNpfIj8EZutpIvJdUMpLlbyargynIurqbjHW%2F1raL%2B9w8Aouyg3LLnve5NmorZcFUSzn%2BChRGUD8aRzKy6o0g%2FlWkovuHRe0sLDixdmelX2iam9dtV%2F8GbqV9nAJspO2XNjzt5Rx1%2FTJvLVmJ%2BRAfx3%2BrMZcU&X-Amz-Signature=cc8f8f369b4afe641bcd4abf9b071bdb8f50008815e1a33a35b150827fa5423d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBFAQ2BQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICx4oVXo%2FQDHfh0tqOxGCIHWhdCtZvwmI6gJ0WokAtKdAiAx2sl3vZ0CiwOPeFD%2B0gucEOz3VnIWCPamngNTSaddiyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMWod9dDlZ6dThTUr0KtwDQzylHLVtyUXjy%2Bea%2Fk8IP0le2QdL15o4uUWuu%2BgOACjKfjHuwbecLvnU9s29JwH71VERgRr3lObIorEhDf9GMUkpm9mAwavuXUeOqh2n9ZvmyggBmpZ3k6GcgZrroC4NDzY4Wz8zqLZZP7nSx1Lwsf5ABT3ixMK10O%2B5uarXaVLep0RKTte7rIghjSWwH8LlWfcD1VkuvefdGE%2BntkT547FSon1KL2PlEufkwH9pvlC8SvlJuzuwDQnRVUtUgk%2FrCtNstTNZf74gaR3e2DOjw46wdtU8E7FijtXcnPUyTJkfn7eScQEEo2wAGJ392bzhEP2RHH73nYO%2Fg0bKujgSishQ86FLtoG1VtYKn0MUVcVGdlkb9BZ3gXx66W%2FOQxVaDhhghJ2s9DVBfJKiZ4YjHSVsikzECsT6zeMzPFHjFAmb86N9Y7OJmxmB0DVKw1kRpuXR0KTKafMWwEKIWPRb%2F1hatbjmPIRUauVSeigHNlxzWLmUBdH0AV9Zf5UBiYXIZO2kbGY8iPQJOdMtv4MQ%2FsmcnVNIzYU2l9yS1iw%2BtXU1N4OU4fBnmem2ZYmr0h7KDw%2FMR1RcPfUp9xzhE5fJNm%2BFOYQFqvl%2F5R4bRJsajlmcExJDVymL6HdmWXcwitz2vQY6pgH%2BYF0RBQbgSHAyKYXU9q41MzeCeVrz%2BbuY6ZsOQtdtBEOZ109ms46hm9jx1kxUf2olNpfIj8EZutpIvJdUMpLlbyargynIurqbjHW%2F1raL%2B9w8Aouyg3LLnve5NmorZcFUSzn%2BChRGUD8aRzKy6o0g%2FlWkovuHRe0sLDixdmelX2iam9dtV%2F8GbqV9nAJspO2XNjzt5Rx1%2FTJvLVmJ%2BRAfx3%2BrMZcU&X-Amz-Signature=6ddf916b57e7a54f76a40c49df608814e1c9a76470935dbf8839bd6d7fbd498f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
