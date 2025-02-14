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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IACGOGA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCsFA5Nw6HC51%2BB%2BVZ4tE6Q462UmYfJG5eTG8KMD2FH3gIgWZVR1f0gfGXvfJ03lUn8N5WPAVS15KR2%2FXrEiXb2jzUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKTn%2B1k5NkqlQOBCWSrcA%2BEJhlqmPI8wnmO9B%2B8iuLQbaqwl7NTC9ZxZjlSxkSPVtp3JzGgC8wQP4D1c6%2Bxa3B2Ik5GJxmqZhFjfAnRNQqOtKR5YmsgXgwGYNYT%2FQIsKIpuAYqAxrb5KYBuxODZCQHeD7wAnYOeRXHbKjza%2BVAdDHrgiumeI43A3tpobxjXGOdDj5tWQ5ytovInjW%2BJL36JvVmMJ1CRaksBUYvjCf1%2FsDB%2FW57wG7IH%2BTEzeaASn6F8PX0tVfL8PpfxnDBJMBDDU0gj162rpYSdlL%2Bokk%2BfsUPEr%2Fs%2BPXkrCLjZpXAcoMlQZeQ25OKYCI4EfcKVb5lpVDmGK0yQd%2BuP37vNtc5gm3wQEo1JW3%2B2Gqnm1A7UH17rs7KjsS6qhy24kG6jIagfe3jiPSrrE27TyoWEPFAE2%2F82sRjTCV0kCp0R3%2B2tbIkU4kYF9lKqLCf8juqpBLLixt71lYF54MLirQdRgSqjIaezOFDOQWImTLLOhgddl3iDPhXTqRzaf%2BZh2ML56BK%2Bj9klG9PJJ1Ojf0ZHjjSdIpiK71sRihOciPUR9DGoTp2ptusMOjTLscWOhvBqBv%2BwXsmIso36hMsDfU0USAStZJoneZKAKrF9erMjE0XxbZacrOUH%2FnXJNDQGvMJTqvL0GOqUBu6IkWeiJF4hNeeWNGH0H2mJdJ6pKHn0K6MEsAwgVYWGEqbNt1Fufqj9xWgN%2FofQdtC5EPBu9QnXU9l%2BOB%2BOigUyWLLaS7JKhKjr0%2BacLPb0tR33j%2BgHZ0Y0g9giLRxZ0bkekaaU4pKvuHuutPkWGgdTJd%2Feoxr9c9VO%2FBjrbzqOCIG3Dd2kZQGfWLPoDUWy8OvKfehItsjcOUEvjO0hEbZzE6a2j&X-Amz-Signature=0f783c475662532238e235bca96380d5d77a004579088ef3eee5e5569b619546&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IACGOGA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCsFA5Nw6HC51%2BB%2BVZ4tE6Q462UmYfJG5eTG8KMD2FH3gIgWZVR1f0gfGXvfJ03lUn8N5WPAVS15KR2%2FXrEiXb2jzUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKTn%2B1k5NkqlQOBCWSrcA%2BEJhlqmPI8wnmO9B%2B8iuLQbaqwl7NTC9ZxZjlSxkSPVtp3JzGgC8wQP4D1c6%2Bxa3B2Ik5GJxmqZhFjfAnRNQqOtKR5YmsgXgwGYNYT%2FQIsKIpuAYqAxrb5KYBuxODZCQHeD7wAnYOeRXHbKjza%2BVAdDHrgiumeI43A3tpobxjXGOdDj5tWQ5ytovInjW%2BJL36JvVmMJ1CRaksBUYvjCf1%2FsDB%2FW57wG7IH%2BTEzeaASn6F8PX0tVfL8PpfxnDBJMBDDU0gj162rpYSdlL%2Bokk%2BfsUPEr%2Fs%2BPXkrCLjZpXAcoMlQZeQ25OKYCI4EfcKVb5lpVDmGK0yQd%2BuP37vNtc5gm3wQEo1JW3%2B2Gqnm1A7UH17rs7KjsS6qhy24kG6jIagfe3jiPSrrE27TyoWEPFAE2%2F82sRjTCV0kCp0R3%2B2tbIkU4kYF9lKqLCf8juqpBLLixt71lYF54MLirQdRgSqjIaezOFDOQWImTLLOhgddl3iDPhXTqRzaf%2BZh2ML56BK%2Bj9klG9PJJ1Ojf0ZHjjSdIpiK71sRihOciPUR9DGoTp2ptusMOjTLscWOhvBqBv%2BwXsmIso36hMsDfU0USAStZJoneZKAKrF9erMjE0XxbZacrOUH%2FnXJNDQGvMJTqvL0GOqUBu6IkWeiJF4hNeeWNGH0H2mJdJ6pKHn0K6MEsAwgVYWGEqbNt1Fufqj9xWgN%2FofQdtC5EPBu9QnXU9l%2BOB%2BOigUyWLLaS7JKhKjr0%2BacLPb0tR33j%2BgHZ0Y0g9giLRxZ0bkekaaU4pKvuHuutPkWGgdTJd%2Feoxr9c9VO%2FBjrbzqOCIG3Dd2kZQGfWLPoDUWy8OvKfehItsjcOUEvjO0hEbZzE6a2j&X-Amz-Signature=ef88ff0ac03886a1bcc9d8ed20d6ff6594b07e46ee8e55dd21114ea4df644d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
