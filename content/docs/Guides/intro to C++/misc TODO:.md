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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632I3FBFQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGaEo2J0%2BFnf8rNaD0QklK8H0nq%2Fdh3yJ%2F88hf0E%2FMH0AiEAuZTn3%2BGGfj1NXB%2FYCuI94ePvi8IO%2FPQf41TNZR7kG7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLnISNXCR9SPnnP39yrcA%2B%2Fc91o84QbBm2WtwZnFAF2NgVN6zRfjQioUHVwj75W0jJWIAECr1ga%2B3WUki%2FSlQalrpcHHNKKwt%2BO9oQaELP5WjHZ53i57M%2FIlXGRz0B0WtgRlqfXHbEWoXR8vlf1jY9Mc9JBPMKiHAsF4cdVGVt2SRJKTFCeWYLLSlkyhNr9abJP%2BUOm52a8NVyx%2B6tGZzKqGXMoTzA7DddKigJ4LRIxHEHEzKecnMjamv1BQqdpZCZmBvXBfcSrZ7oVormZgr1QiUHPhC7M3Kbkk7q3HHBinRYNzsHz5biAZ%2FYrRl0jt7KkjgAn8zZ2QU0yogtXjtCG7CJ1LFQBOXqqIpKGhEL2WAOlpUJvrgeOYFz75I5BigRYsVDicLiZ5RK9rrsStt0%2BNh%2FXIeynNLK13MsSuLKajw1qu9m3APjVUDno3Gq95%2BR5I%2FwIAHmCYCnoeb%2FQsQpNgKz26wrk2GMEYgjnQELOyoCVkAMf7BmU5TWn1Se3sUfk9XMcPwe4W3LlepWsmNN7y8j6bjvRV19XK5OTgc8dnO855%2FQ8pC4VYvRke9diwrptDqXUqEhYHUXXtvS43Nc%2BUSkhyJPTvQ%2F0uN%2BVUmS6wCxZ4PFkWkGJ7lJiupnqwZBglWztArUgMqSv5MNSridQGOqUBP%2BFmpitX5qO5D50steEXu1Rr1RGJmy6HC1hPqtmzXS8duS%2BcJwJpEggAVgF6%2FSYcm9qEyIQyGeIzFwp9DXEvAt5akjUnd1q%2BioQ6nUT5ydY9q2JEvcol5fnXBzYawUZg4BdnRa%2FOzCwzEJD3IvZD7%2F2%2B2YDSqRj9sb8%2BVv5YX0V6voUw05UbhMQmo8i5vYWPbAkkEm5GLPWfqaZEKqDiYs9bf70R&X-Amz-Signature=41bf743dcae2149c1a0ee69b625b29afa885df517d1a7e6284c1c3ab901497aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632I3FBFQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGaEo2J0%2BFnf8rNaD0QklK8H0nq%2Fdh3yJ%2F88hf0E%2FMH0AiEAuZTn3%2BGGfj1NXB%2FYCuI94ePvi8IO%2FPQf41TNZR7kG7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLnISNXCR9SPnnP39yrcA%2B%2Fc91o84QbBm2WtwZnFAF2NgVN6zRfjQioUHVwj75W0jJWIAECr1ga%2B3WUki%2FSlQalrpcHHNKKwt%2BO9oQaELP5WjHZ53i57M%2FIlXGRz0B0WtgRlqfXHbEWoXR8vlf1jY9Mc9JBPMKiHAsF4cdVGVt2SRJKTFCeWYLLSlkyhNr9abJP%2BUOm52a8NVyx%2B6tGZzKqGXMoTzA7DddKigJ4LRIxHEHEzKecnMjamv1BQqdpZCZmBvXBfcSrZ7oVormZgr1QiUHPhC7M3Kbkk7q3HHBinRYNzsHz5biAZ%2FYrRl0jt7KkjgAn8zZ2QU0yogtXjtCG7CJ1LFQBOXqqIpKGhEL2WAOlpUJvrgeOYFz75I5BigRYsVDicLiZ5RK9rrsStt0%2BNh%2FXIeynNLK13MsSuLKajw1qu9m3APjVUDno3Gq95%2BR5I%2FwIAHmCYCnoeb%2FQsQpNgKz26wrk2GMEYgjnQELOyoCVkAMf7BmU5TWn1Se3sUfk9XMcPwe4W3LlepWsmNN7y8j6bjvRV19XK5OTgc8dnO855%2FQ8pC4VYvRke9diwrptDqXUqEhYHUXXtvS43Nc%2BUSkhyJPTvQ%2F0uN%2BVUmS6wCxZ4PFkWkGJ7lJiupnqwZBglWztArUgMqSv5MNSridQGOqUBP%2BFmpitX5qO5D50steEXu1Rr1RGJmy6HC1hPqtmzXS8duS%2BcJwJpEggAVgF6%2FSYcm9qEyIQyGeIzFwp9DXEvAt5akjUnd1q%2BioQ6nUT5ydY9q2JEvcol5fnXBzYawUZg4BdnRa%2FOzCwzEJD3IvZD7%2F2%2B2YDSqRj9sb8%2BVv5YX0V6voUw05UbhMQmo8i5vYWPbAkkEm5GLPWfqaZEKqDiYs9bf70R&X-Amz-Signature=0d4bfca9913864c52d13148db13eb1f8b51d45a9e02c390096d177ed4e19dc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
