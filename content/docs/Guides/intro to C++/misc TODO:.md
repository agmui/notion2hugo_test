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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NL4XS7Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCxPzK%2BmLhTYLxJchUUPq7mFa1Jxp65Q93Tz79qPjTrbQIhALkpKYyOHybuXwAc6G3IF9gzg5blPHLoQOG6qzMOocRiKv8DCHgQABoMNjM3NDIzMTgzODA1IgxcDWUHLnbjC6XBemAq3ANHCSMmv2I%2Bf6BQvmZ%2FUQKGwLyk3KHPCwM0kB6YbHxHFcwnhNR%2FMWLcuqSgjaGh5dP0mVZ8VT7V49wVZaeLdTGpqlFglABAXFCMeAfTj134IEKj4G3%2B%2FP5ZVjBmW2x06n8xGQtucr1leHAS0u1RqFuKe1liep7fmxyS5ZBe4HDvk4nkYJJ9DEu%2FJKJ6kb0Tlp%2FfXkmj%2BlvXzVwRzqIvZZaAdx5j6vwgT70S%2BrO8yZgQWkSlVlCA0wOXUJECJJCBkRPdJFWWTcudXPt9noY6mQkz7LVjVZT5Z%2FzLYehZjtoeOBl7XF6cpGPIrJbvA3%2ByPdX%2FrP96wH7nJgcgouU4EILert4PgRi6%2BV7Tmar%2FhY%2BDE3Wpo8OCaIBbN0RyVHXdxb7Nd%2F0%2B7FfU7%2FP5i6bAihXOk32qBZtAcuzAfu8yeY9FKL6%2Bmt%2BuUnwbo6ZvFi%2F3BRBwGV0zGMbmAcS8JV7mnKfznvri5k%2FzEOGYIOkpO3axvMmwN3n%2FjdAZBXi2iHvK52ecKWzvTThniz4juaOSrWjT0%2FZCqVM1%2FYYbw1rF5TOqDXsMw3apbKpTMa%2FDM477MJciIHAIP8LsNhZ2MthEOcSlEqeT7x4avYCco%2FcQ%2BKzedSSixP7NL0gKOyY4EjD0n6C%2FBjqkAXWyIKI1DAFJ32TpQNgZ4LPLmTP%2BHrd1w0o9Z4mHaos7R0Fa9hMfTT42F7YeilCu48sigtksvBq7RXCzoxuGY2RIxqstkyUaGPLiQ9qwzKw7Fyei90qluhFflVVSFciRdJXLMYSOgKzA7t0oho%2Bs%2F3MROPLf%2BOoJxHirGp4Q7T0APn9VgpYFCTRwNDHzTimBrOA9YDEZMrZ7wAl5%2BuV%2FPebEYlFe&X-Amz-Signature=b9a4fda6ea9eeecc0b42e76589f2909b14cb699f2eef7c37fe788b8a22553c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NL4XS7Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCxPzK%2BmLhTYLxJchUUPq7mFa1Jxp65Q93Tz79qPjTrbQIhALkpKYyOHybuXwAc6G3IF9gzg5blPHLoQOG6qzMOocRiKv8DCHgQABoMNjM3NDIzMTgzODA1IgxcDWUHLnbjC6XBemAq3ANHCSMmv2I%2Bf6BQvmZ%2FUQKGwLyk3KHPCwM0kB6YbHxHFcwnhNR%2FMWLcuqSgjaGh5dP0mVZ8VT7V49wVZaeLdTGpqlFglABAXFCMeAfTj134IEKj4G3%2B%2FP5ZVjBmW2x06n8xGQtucr1leHAS0u1RqFuKe1liep7fmxyS5ZBe4HDvk4nkYJJ9DEu%2FJKJ6kb0Tlp%2FfXkmj%2BlvXzVwRzqIvZZaAdx5j6vwgT70S%2BrO8yZgQWkSlVlCA0wOXUJECJJCBkRPdJFWWTcudXPt9noY6mQkz7LVjVZT5Z%2FzLYehZjtoeOBl7XF6cpGPIrJbvA3%2ByPdX%2FrP96wH7nJgcgouU4EILert4PgRi6%2BV7Tmar%2FhY%2BDE3Wpo8OCaIBbN0RyVHXdxb7Nd%2F0%2B7FfU7%2FP5i6bAihXOk32qBZtAcuzAfu8yeY9FKL6%2Bmt%2BuUnwbo6ZvFi%2F3BRBwGV0zGMbmAcS8JV7mnKfznvri5k%2FzEOGYIOkpO3axvMmwN3n%2FjdAZBXi2iHvK52ecKWzvTThniz4juaOSrWjT0%2FZCqVM1%2FYYbw1rF5TOqDXsMw3apbKpTMa%2FDM477MJciIHAIP8LsNhZ2MthEOcSlEqeT7x4avYCco%2FcQ%2BKzedSSixP7NL0gKOyY4EjD0n6C%2FBjqkAXWyIKI1DAFJ32TpQNgZ4LPLmTP%2BHrd1w0o9Z4mHaos7R0Fa9hMfTT42F7YeilCu48sigtksvBq7RXCzoxuGY2RIxqstkyUaGPLiQ9qwzKw7Fyei90qluhFflVVSFciRdJXLMYSOgKzA7t0oho%2Bs%2F3MROPLf%2BOoJxHirGp4Q7T0APn9VgpYFCTRwNDHzTimBrOA9YDEZMrZ7wAl5%2BuV%2FPebEYlFe&X-Amz-Signature=2da2a9aa94fbc9de5a1cbb04edb4aef9ba953ad8316dd35a505edd827728a777&X-Amz-SignedHeaders=host&x-id=GetObject)

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
