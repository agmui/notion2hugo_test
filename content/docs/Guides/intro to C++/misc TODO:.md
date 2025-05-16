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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAXWP4O%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJzNCZEuifvKsjjvbfTRa53QBap3RkHq13A6zrKnDoAIgQH%2BbpNfR9T6oD7MScMAYa4Kex9p%2B2zImq1RsEyCUjv0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHrIVDDgjmTpEIWmOyrcA2Be6nflwb6YBQ6WM3RP24wYSGSoVzt%2FqHAyZ%2FQQkupWblOrdMCIY8Ni5MxeJMBscw9j0fDAYutFQqrCDc7lMrAnfLn%2Bd3s1zImxWUsaiS0oRVp9OI6xooTrzqKIz4qT%2Fv0hZo%2B6Y0%2F1A0Sjk0e%2FYYpGKr68GXjulVEVLSbYlPNhp9QpvlK%2BGM3h3O0%2FtDjsarnAA0Xmw4zq9V1q0IHAAgyA8IYcNnhxk51Khb%2FSZwzE6mEGaaqnXsf4Wrp0ylQM%2Fy5Z3uI%2FgZ9DnJ41C63%2FEWiidrQ%2B99IvVwA1H%2BDDnFijC0cOwUNHis0ILXxnMOqF7dWT6C1AktbF9oRuF6RwrjPzIIq2nX27AHL2e2vwB0QR9IlnGaHX3RWjIgg4Hfc5ONwyEvF4D2Cjd3MDe7a8g2Vqsql%2FWDVnnQnI86hHqqS89oVcLWTC3CvBRqbzWso9Z3iJhsQt2JVZ5xkeualKjCXuwoOdJiLvd0deqUQ0pKPPOvy2PExW9LfkBAJ0el3X%2BpLqtTeFvTJNOdMtaQWD9mugQJ0SQGftK9ouwEtE5Xn9Lo6Rt4EryHqAho%2FEADStywrs98XFD4ZtGA2VYh1LS6jXHzQaMWolQofVK6lmlVJpxQQVC4itCz9Y3Jw0MPjvmsEGOqUBQvKUNcFTA4MUG2LJrh8M%2B3qY%2Be9FXj4HmOAcXronG4SWGqM2UdLxVlRQihVDsv54T5dHYct9DrYXgr7ZmP5zciTNN%2BKmMl3VUZ7vQZf6HQ3ZIrKzk6XRJ2BH72EZObkDoOYvMENX9RvU3Y%2B8LeyVTMGJrM%2Fn%2F%2F3k7Uw4f42TTGc1OE24ea%2BsaZun9gVQHpYATyDQCYFum%2Fq9aPtl1TuuxM38T%2Blb&X-Amz-Signature=d57ffa8f41bab00779116f8582b48941ca19543e85b94105c370f55d5240e869&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAXWP4O%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJzNCZEuifvKsjjvbfTRa53QBap3RkHq13A6zrKnDoAIgQH%2BbpNfR9T6oD7MScMAYa4Kex9p%2B2zImq1RsEyCUjv0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHrIVDDgjmTpEIWmOyrcA2Be6nflwb6YBQ6WM3RP24wYSGSoVzt%2FqHAyZ%2FQQkupWblOrdMCIY8Ni5MxeJMBscw9j0fDAYutFQqrCDc7lMrAnfLn%2Bd3s1zImxWUsaiS0oRVp9OI6xooTrzqKIz4qT%2Fv0hZo%2B6Y0%2F1A0Sjk0e%2FYYpGKr68GXjulVEVLSbYlPNhp9QpvlK%2BGM3h3O0%2FtDjsarnAA0Xmw4zq9V1q0IHAAgyA8IYcNnhxk51Khb%2FSZwzE6mEGaaqnXsf4Wrp0ylQM%2Fy5Z3uI%2FgZ9DnJ41C63%2FEWiidrQ%2B99IvVwA1H%2BDDnFijC0cOwUNHis0ILXxnMOqF7dWT6C1AktbF9oRuF6RwrjPzIIq2nX27AHL2e2vwB0QR9IlnGaHX3RWjIgg4Hfc5ONwyEvF4D2Cjd3MDe7a8g2Vqsql%2FWDVnnQnI86hHqqS89oVcLWTC3CvBRqbzWso9Z3iJhsQt2JVZ5xkeualKjCXuwoOdJiLvd0deqUQ0pKPPOvy2PExW9LfkBAJ0el3X%2BpLqtTeFvTJNOdMtaQWD9mugQJ0SQGftK9ouwEtE5Xn9Lo6Rt4EryHqAho%2FEADStywrs98XFD4ZtGA2VYh1LS6jXHzQaMWolQofVK6lmlVJpxQQVC4itCz9Y3Jw0MPjvmsEGOqUBQvKUNcFTA4MUG2LJrh8M%2B3qY%2Be9FXj4HmOAcXronG4SWGqM2UdLxVlRQihVDsv54T5dHYct9DrYXgr7ZmP5zciTNN%2BKmMl3VUZ7vQZf6HQ3ZIrKzk6XRJ2BH72EZObkDoOYvMENX9RvU3Y%2B8LeyVTMGJrM%2Fn%2F%2F3k7Uw4f42TTGc1OE24ea%2BsaZun9gVQHpYATyDQCYFum%2Fq9aPtl1TuuxM38T%2Blb&X-Amz-Signature=a2d97d6fd4969a4439b2900f242d669ae19f41f7ef3b87dd4393a0a54257da3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
