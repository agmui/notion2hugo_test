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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRPBP5K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCUEfdtSqE%2B5qVE5f%2FLzbrH9ZJ5ElLDT3AtZ%2Bt6kiKKKwIhAIfxPtOIYP%2F0VoDUIuBO6Of1Fqk7wArmM6UNAOLec93TKv8DCC0QABoMNjM3NDIzMTgzODA1IgzpQ6urJYHVDUBDErgq3AMJo6VMDnFuJmsJ3mrnnx6vuVd3Iqp7VjlTz5g%2FeDfv5t1uuSrjv%2FiwC2yghDUSfiJ76lLcyDnVwvHsgyv4NP6GiQL2dJHJgEJEzhOZPvumoLICRGLz3yZQy3959YWIXTXNqyuX%2Ff6G2X0JY8oTovA1GnGBeh2sDlDzGbRJk9B3uGCYSYF71phmwD425aH8aJA3UBZQD0GNe2KhQea59Cc0CgRO4OFBGU991WhtGmtWW0JvyI9w%2FxRd2j0HoOUKWY%2FrpT3WRc4B5hVEPEPxNasK2jJAnQWu9UFJCY5L9nOFq%2Bf2YPDVWEXLcDyrXz9MVKjRvINxv5UZA9%2Fn7ZYp3y17Nn1Jd%2FHRVLg7OfuZZ9t3fyJ%2F8snGqfF%2FQsrtpzO%2BJuuO9%2BL%2BZc3fgwHC%2F1RDxFw6he%2F38ZYoT5tsWtBt4m1FTfimSlI0wZIs2O4J5F3rdsZ1sOuEFVd9IOL%2FNnjWxbT1%2F%2FvaSVuaQoqNj9T3r05vg6%2BgHEmoUKgtZLuoqy5c3%2Baw9aP77geQREYvTdOmBYhDpuNjwKqy0IyjAamvYxiyn96e3KqluvyS54Mom5rkT3n22CWIqpVo3C937SnJPNz0jXE5rdCqFgksqCOPwvfXO%2FPdSmC2vlaenbj85zDhwbXCBjqkAQiYixEZIeXHD%2Bmr%2BnIVYjbDTqKbrO4vpTQiDQ7%2B%2FIdhRFPy3tcuPUKyqD1lUTHS4hhfZZ0kVlXtt1FQbjrHrEH3TDz9jL4arku5yp739hmNTvtGyM7w%2BThY1XlmMYk31NVgXsY7QAKYst8mH%2B5VthKHQZEAS9nJuqfWDRqTm7x4TGAv7u5XmD9NVI9D%2BiURgBHmiDbioXX5%2BL22k3dr0UbkAnwb&X-Amz-Signature=ce4addbbd6d71f8c04a0403eb00605a599288b048070d35b475fa8b85f5506db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRPBP5K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCUEfdtSqE%2B5qVE5f%2FLzbrH9ZJ5ElLDT3AtZ%2Bt6kiKKKwIhAIfxPtOIYP%2F0VoDUIuBO6Of1Fqk7wArmM6UNAOLec93TKv8DCC0QABoMNjM3NDIzMTgzODA1IgzpQ6urJYHVDUBDErgq3AMJo6VMDnFuJmsJ3mrnnx6vuVd3Iqp7VjlTz5g%2FeDfv5t1uuSrjv%2FiwC2yghDUSfiJ76lLcyDnVwvHsgyv4NP6GiQL2dJHJgEJEzhOZPvumoLICRGLz3yZQy3959YWIXTXNqyuX%2Ff6G2X0JY8oTovA1GnGBeh2sDlDzGbRJk9B3uGCYSYF71phmwD425aH8aJA3UBZQD0GNe2KhQea59Cc0CgRO4OFBGU991WhtGmtWW0JvyI9w%2FxRd2j0HoOUKWY%2FrpT3WRc4B5hVEPEPxNasK2jJAnQWu9UFJCY5L9nOFq%2Bf2YPDVWEXLcDyrXz9MVKjRvINxv5UZA9%2Fn7ZYp3y17Nn1Jd%2FHRVLg7OfuZZ9t3fyJ%2F8snGqfF%2FQsrtpzO%2BJuuO9%2BL%2BZc3fgwHC%2F1RDxFw6he%2F38ZYoT5tsWtBt4m1FTfimSlI0wZIs2O4J5F3rdsZ1sOuEFVd9IOL%2FNnjWxbT1%2F%2FvaSVuaQoqNj9T3r05vg6%2BgHEmoUKgtZLuoqy5c3%2Baw9aP77geQREYvTdOmBYhDpuNjwKqy0IyjAamvYxiyn96e3KqluvyS54Mom5rkT3n22CWIqpVo3C937SnJPNz0jXE5rdCqFgksqCOPwvfXO%2FPdSmC2vlaenbj85zDhwbXCBjqkAQiYixEZIeXHD%2Bmr%2BnIVYjbDTqKbrO4vpTQiDQ7%2B%2FIdhRFPy3tcuPUKyqD1lUTHS4hhfZZ0kVlXtt1FQbjrHrEH3TDz9jL4arku5yp739hmNTvtGyM7w%2BThY1XlmMYk31NVgXsY7QAKYst8mH%2B5VthKHQZEAS9nJuqfWDRqTm7x4TGAv7u5XmD9NVI9D%2BiURgBHmiDbioXX5%2BL22k3dr0UbkAnwb&X-Amz-Signature=f1ba5b09c4e31ecfe48bf85d0029b70e849228ce2467cc893216178e2466929e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
