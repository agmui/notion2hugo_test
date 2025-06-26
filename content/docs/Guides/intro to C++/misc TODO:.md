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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Y6WN66%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCh%2BCKN%2B1tFw8cP5V%2F4KdqmPyX4kpBJC%2BFRMW5UCh74uwIgLI%2BpdNQ9EUBmnifu0KJZM0GRZK20BQKCqwJy%2F8wsytsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJpMS3gzXX9ekxaHkCrcA0ZJy7vTtePqedQjO1HESEmM0bVh2A%2FujN%2Bldnx9OxZXic8Z%2FTUgSVqpmNz8QmdchmVPkOj3lbis2cs3H6jtHYQdO8gcoXJsfF3dEq14ljoGIz6P9s%2BtOKtYwwA8oYsPjRfW7LyCZ7hwdQQBxynuTjPFokSj78QAkUvGgZZ1MKiLYOh8EV%2Ftn2gLf38m7OFgMeXF7nhQG05fWEFJ8jtMlfaFKa64yeIvyRZSbrSAmPRayTpNokiPhCX%2BFjcI0w1yUsNWY6LHNDMkTZjftayYr7BzW5ycnMXrzjF8G37WNyNrP5HNtIKdHQMIkdofVxXHi7vcCpQlWiu%2FyhGSVWgsYxd70jxZtzghUos5Z2didYVQwLGTGT8VHAd7lMGL%2FsnykhLCSAfh%2FR7BWbBIx0OKnTo9DXU4JfbeOnqLxya%2F31vDuhVO5R9LxHJw2CNLgc0dNbygmNi9Bu7VoulxJs7omQjFrbuVmCUQvPPgeJx%2FUzfaNClSGYhgvQ3XV93dVVwkcHQy9U0gNxl8XLrgJIs30Pqai2Jp3aXbaZS9hi6oQWJ%2FH%2BXsoPIF%2FHGSYj1jb4x3LaPL9MPoFgU880fBxbhhbaDrLAKVYonAI99HTClR%2Bia5IWewXPV4gWv1Mol8MPOe9cIGOqUBUSu5U56pG3am8KvYdz19ECcr15%2BJy5uIuniYRVXv86cNC7uBxEhAf5lWx%2BNtTmNZdlfLUomlakZTDSbKWvS3XrQnEKn5wqc7kPXo4a3YKIBfbzWEtiR97sivPvYJqM5tcFDly%2BmOdfvkZ2A8uRE%2B1sWmPelKjWXiLIWcsp%2Brnq3UvLdKBsfof7Suzhrh0RytxKQtKvJpPn6oSElGtGyZs8AOrjmV&X-Amz-Signature=8930f0a05fd3784c463d1a9e234dd108d1e71944087c1cd8bb12a5f9e97a8349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Y6WN66%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCh%2BCKN%2B1tFw8cP5V%2F4KdqmPyX4kpBJC%2BFRMW5UCh74uwIgLI%2BpdNQ9EUBmnifu0KJZM0GRZK20BQKCqwJy%2F8wsytsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJpMS3gzXX9ekxaHkCrcA0ZJy7vTtePqedQjO1HESEmM0bVh2A%2FujN%2Bldnx9OxZXic8Z%2FTUgSVqpmNz8QmdchmVPkOj3lbis2cs3H6jtHYQdO8gcoXJsfF3dEq14ljoGIz6P9s%2BtOKtYwwA8oYsPjRfW7LyCZ7hwdQQBxynuTjPFokSj78QAkUvGgZZ1MKiLYOh8EV%2Ftn2gLf38m7OFgMeXF7nhQG05fWEFJ8jtMlfaFKa64yeIvyRZSbrSAmPRayTpNokiPhCX%2BFjcI0w1yUsNWY6LHNDMkTZjftayYr7BzW5ycnMXrzjF8G37WNyNrP5HNtIKdHQMIkdofVxXHi7vcCpQlWiu%2FyhGSVWgsYxd70jxZtzghUos5Z2didYVQwLGTGT8VHAd7lMGL%2FsnykhLCSAfh%2FR7BWbBIx0OKnTo9DXU4JfbeOnqLxya%2F31vDuhVO5R9LxHJw2CNLgc0dNbygmNi9Bu7VoulxJs7omQjFrbuVmCUQvPPgeJx%2FUzfaNClSGYhgvQ3XV93dVVwkcHQy9U0gNxl8XLrgJIs30Pqai2Jp3aXbaZS9hi6oQWJ%2FH%2BXsoPIF%2FHGSYj1jb4x3LaPL9MPoFgU880fBxbhhbaDrLAKVYonAI99HTClR%2Bia5IWewXPV4gWv1Mol8MPOe9cIGOqUBUSu5U56pG3am8KvYdz19ECcr15%2BJy5uIuniYRVXv86cNC7uBxEhAf5lWx%2BNtTmNZdlfLUomlakZTDSbKWvS3XrQnEKn5wqc7kPXo4a3YKIBfbzWEtiR97sivPvYJqM5tcFDly%2BmOdfvkZ2A8uRE%2B1sWmPelKjWXiLIWcsp%2Brnq3UvLdKBsfof7Suzhrh0RytxKQtKvJpPn6oSElGtGyZs8AOrjmV&X-Amz-Signature=9703846de14751efd16ad5ce295eafaa3d5322def8f2ad9ac5f7c02924e64808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
