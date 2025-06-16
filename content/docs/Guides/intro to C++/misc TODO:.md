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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJG3FON%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGJkaUyLmkgYsdc%2BnEQeuWBZ3thXALLMp%2BDYEYkUu5qiAiBCH%2B8b181I46iLvi4wsvfXVO57acxqKudHwMATvnX4nyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMABIdW4W7l4pvKLjgKtwDu7ggUtauskXQNxRFswgzD7PU5wlw%2FwZGVdTeFWIXCVYVaG0ySoAX9IT9QPeJCYZF3CdrBreXCYRqnl1RvPN8RMHnCLyGeSR8dvgAxBUCq6nrn3RkBzLXVunXi%2FC68MeVkG%2FZb225KtpHFEIM%2BCelsW%2F%2BFS4qHQZb0aMonFc%2FHnL7ezyxkZYQqwiLr5Zd%2B2I1PkFdCjia1F%2Fk3hnng7Jxfgg6TuLRd67b58a0fPr8c56iu0%2BzTQPxtYGy3QLYURcYbbcgONzuPeNkCVYCXJXT2ruGq6I75F5pno8D3jTLYaQNIgziWd9okql6mrcsrPhWSzRuKurEZPDqVknP0UII%2BV6uISZLqjb5bwe6p5xAPh3LBCsRJ9F3z960ZlUqrWLaWwRSoLCUuUeWsByVPVB%2By317mquQTsi3lk1Tt1Vf22K6AUa3RnXE8l08XvPwp6PDIZLGTXewIkHu27qzhT9VEFPHFRHcR8ZvmJG1q%2FhuMZBOwnJhOYgRVa5DKcwohFynVOhDOePOoBrTfIGvV7K5QBb5hFZlIdsL6eoDdkc2%2FgITUxrdkpuVJiCiiJSkzB%2FbvyK01Ehen%2B%2BMrMns36xQw7nvW1nCsXyv1WYb%2B4u9XSkxjwrxiSdOD%2B%2BS3oAwyMnAwgY6pgEEYNPLyva7gHpc4TnDxJCNW0xHmraJ8fW%2Fzw2nFMktezcEvLcMHjE1JahKYh41haGFW4h2FQP4QHst9j8HW4prLtubqRa5UiGyc1f%2F1vpfCSIla8Cq3Yk6wxRrRCI6nj0%2FrXDmILs%2FsV6AFxbmr8%2FKXWnmKyym0MdvyXAfbmRcL619KtlTwHuhl3fGWJubjTVQ03AKQkSLN8IXOLyYkZWIyItOrAj%2F&X-Amz-Signature=7124a8ca308fded1e9e3b945bf0367ba812b05c60d60faa1924bc87a5592f5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJG3FON%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGJkaUyLmkgYsdc%2BnEQeuWBZ3thXALLMp%2BDYEYkUu5qiAiBCH%2B8b181I46iLvi4wsvfXVO57acxqKudHwMATvnX4nyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMABIdW4W7l4pvKLjgKtwDu7ggUtauskXQNxRFswgzD7PU5wlw%2FwZGVdTeFWIXCVYVaG0ySoAX9IT9QPeJCYZF3CdrBreXCYRqnl1RvPN8RMHnCLyGeSR8dvgAxBUCq6nrn3RkBzLXVunXi%2FC68MeVkG%2FZb225KtpHFEIM%2BCelsW%2F%2BFS4qHQZb0aMonFc%2FHnL7ezyxkZYQqwiLr5Zd%2B2I1PkFdCjia1F%2Fk3hnng7Jxfgg6TuLRd67b58a0fPr8c56iu0%2BzTQPxtYGy3QLYURcYbbcgONzuPeNkCVYCXJXT2ruGq6I75F5pno8D3jTLYaQNIgziWd9okql6mrcsrPhWSzRuKurEZPDqVknP0UII%2BV6uISZLqjb5bwe6p5xAPh3LBCsRJ9F3z960ZlUqrWLaWwRSoLCUuUeWsByVPVB%2By317mquQTsi3lk1Tt1Vf22K6AUa3RnXE8l08XvPwp6PDIZLGTXewIkHu27qzhT9VEFPHFRHcR8ZvmJG1q%2FhuMZBOwnJhOYgRVa5DKcwohFynVOhDOePOoBrTfIGvV7K5QBb5hFZlIdsL6eoDdkc2%2FgITUxrdkpuVJiCiiJSkzB%2FbvyK01Ehen%2B%2BMrMns36xQw7nvW1nCsXyv1WYb%2B4u9XSkxjwrxiSdOD%2B%2BS3oAwyMnAwgY6pgEEYNPLyva7gHpc4TnDxJCNW0xHmraJ8fW%2Fzw2nFMktezcEvLcMHjE1JahKYh41haGFW4h2FQP4QHst9j8HW4prLtubqRa5UiGyc1f%2F1vpfCSIla8Cq3Yk6wxRrRCI6nj0%2FrXDmILs%2FsV6AFxbmr8%2FKXWnmKyym0MdvyXAfbmRcL619KtlTwHuhl3fGWJubjTVQ03AKQkSLN8IXOLyYkZWIyItOrAj%2F&X-Amz-Signature=03d2ef18ce6d8332ffde25ab6a0de91e9015f8cfd5ea6294fcbe65f79da0f5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
