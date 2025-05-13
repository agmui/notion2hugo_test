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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYM74BF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCliU7CUlV5DuQqhua35Yknuo4wLwzJlqZKt7GRHUFJWwIgVdIQFDIYPnP0Qg3RdxV7CqXvI775QCqsPSz4AOKvodAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnpso6hsVjgB8aBXircA3fiK094RwCdrUKc8ZXiW53IVoSxYaNIvMJVUw5x9h786nvwrq%2B7sD7%2BTH5BbI8a3w0%2Fc7Aa9h3eUjaEHQEH6dk%2BX9jo6vupPGJAjaCeX0672VDRL7aKdqrRnS%2BCX6Dt1vVUUIhTRTIQKmvCtN2WUpAJBvxR7VnHxh6ipswwu055EbudBhWQxpb329m907qYGJUrClLb0KGNTrlvzlNM4HOEYf8ygyFEoNkQdK%2BOsGKzX%2FVpVKyR5efEQjQuQE1A3qrR6%2Bh7YI5stg9nMuTOYwEl5ZqWK4Yvv7TjGeDKI1ndqol4IoObMrXCXFzdC7N73dHTAMlIsIsMBTLj1I50%2F4o3L39NiMtrSRaeXC26aiZoPYAO7%2BoXbNWYEpM511hpLOv9AdwBXQLpDALL87E%2F2Wy0FycOLDp2ELww%2FCQ1qQnl%2FZKZJNZVcZ9j3iB5luXaiZ1L5d4U4r734VSiot51LpLKrJ%2F%2BPouLFNknKOQDlxQ2XlYCUFu2BH%2BBrQqKoAqVXZiliZlgImTmmLOeUOnhIVl9bhf1ueyP2LkOM5oGedbczyGGl%2BLfhDrWIO76lqgXPJ9B1%2B8VCMi5AMJxRAx3xGI%2BORL8Q33kx4rzoFIII71f%2BMZtrg2iZWGCKUF3MIrIisEGOqUBbwS5cYj0mCFGBPvC2k2piod5CFSs4lMkre8xHNVPzlhopGErZbfaopIiWqjDbUqVxwqntz%2FfOqhBVibuShIsh7SFvEZDAueMe%2FUHsw9s5Pva4K06gVfaDLQkDIFfnLHE1epDI2KEskP8YUPXgtA3fdt0dUxwosenHbtegzd0vGlZesMc8%2FLqrKVZeW8AQVJCiKIwJz%2FJpuHnOO7yCuNUqCLlKIsH&X-Amz-Signature=582630b7ad3a685344c6e6b6ffde0e8b1fb69e2b52efd4c38d2a8f3ea8a7e742&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYM74BF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCliU7CUlV5DuQqhua35Yknuo4wLwzJlqZKt7GRHUFJWwIgVdIQFDIYPnP0Qg3RdxV7CqXvI775QCqsPSz4AOKvodAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnpso6hsVjgB8aBXircA3fiK094RwCdrUKc8ZXiW53IVoSxYaNIvMJVUw5x9h786nvwrq%2B7sD7%2BTH5BbI8a3w0%2Fc7Aa9h3eUjaEHQEH6dk%2BX9jo6vupPGJAjaCeX0672VDRL7aKdqrRnS%2BCX6Dt1vVUUIhTRTIQKmvCtN2WUpAJBvxR7VnHxh6ipswwu055EbudBhWQxpb329m907qYGJUrClLb0KGNTrlvzlNM4HOEYf8ygyFEoNkQdK%2BOsGKzX%2FVpVKyR5efEQjQuQE1A3qrR6%2Bh7YI5stg9nMuTOYwEl5ZqWK4Yvv7TjGeDKI1ndqol4IoObMrXCXFzdC7N73dHTAMlIsIsMBTLj1I50%2F4o3L39NiMtrSRaeXC26aiZoPYAO7%2BoXbNWYEpM511hpLOv9AdwBXQLpDALL87E%2F2Wy0FycOLDp2ELww%2FCQ1qQnl%2FZKZJNZVcZ9j3iB5luXaiZ1L5d4U4r734VSiot51LpLKrJ%2F%2BPouLFNknKOQDlxQ2XlYCUFu2BH%2BBrQqKoAqVXZiliZlgImTmmLOeUOnhIVl9bhf1ueyP2LkOM5oGedbczyGGl%2BLfhDrWIO76lqgXPJ9B1%2B8VCMi5AMJxRAx3xGI%2BORL8Q33kx4rzoFIII71f%2BMZtrg2iZWGCKUF3MIrIisEGOqUBbwS5cYj0mCFGBPvC2k2piod5CFSs4lMkre8xHNVPzlhopGErZbfaopIiWqjDbUqVxwqntz%2FfOqhBVibuShIsh7SFvEZDAueMe%2FUHsw9s5Pva4K06gVfaDLQkDIFfnLHE1epDI2KEskP8YUPXgtA3fdt0dUxwosenHbtegzd0vGlZesMc8%2FLqrKVZeW8AQVJCiKIwJz%2FJpuHnOO7yCuNUqCLlKIsH&X-Amz-Signature=9e99bb2cede30032a836ebaee92d5df99797ee565974c92a65d5e148ad3a1203&X-Amz-SignedHeaders=host&x-id=GetObject)

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
