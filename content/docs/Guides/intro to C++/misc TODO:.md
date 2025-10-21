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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AT74D75%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDnrBDqV%2B2j7PcGJ7aciv4qclwZPO88zY6l16pWkHtMJAiB0Oflmzp9YuM5P65hVTKBvDdrQ9laqoUW2VGm2nggGTSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhgb%2F6U8EW9r4dICZKtwDBHYHzQlG%2BRMTZlDOBqOsbNOzepx6grzxD35PW7w%2B%2BMOIoGUaIsgZjO%2BG%2BHszyZDX9VXidhnmYAY2KbHgv3jiefeZ8HuK%2BMTG7q56exLOGTEwPRHkLapLgQqThIJt8hVOyIqmcQDTzwI3DlClWqpc%2BPqZm0Xcww%2BynLIv1Or5jBkHrfyYo4egjbw7trAHLPqwoB%2Bi24xj5RTx6aZOL9oP7uc5MXOxcJ40CWMMeiJjUmrMMV5QTQvXGyvsqGLDl9C1XjBDveanXbnit9bm0gfOKltCZR6Bq356RgDLg4HzAxoVjGwdwfIsH9RLj5OHRp0T3jlpoXSFlQq0K5SUu7KvR7JD0BQooCSZpttgWGdCsiAriwc3BrMssRpbcXRCN4G6T6Ldy5sB2whHNGKorcPT2kdztfgYIzc3m47nBG9a4EFO9oubUcDxdkBg1iTqP%2ByP%2FC%2Feeh8m%2BFKC4H%2ByF2ro8eYdFLWy3vjf%2BpNIsq575u1uYn3IPdJwYQy4IFl%2FMo4WJyhlNtu%2FgnOUimSY1FT7JYFWrDYF7I8r%2Bqz730aryDP3zQKVrkH5a4uJpGNi%2BBop04Sb2zlIOoScntW6PXQERmYpG6RmY0gKu%2FuQfuIj39APJL6I5wgzgPj9ePQw3a3bxwY6pgFvnMlSetcuk8ch4a%2BLCy647VtCrd4kCp6YNlVUXFfFJoAteHaxzGSnhNx3TgkbOFTSDIkqv1Mfh2VxwRbUDZFlYBz7V7agwSJ2HQOnju2JlwrbNJNlArNSL1%2B0moOJLrid3y%2FFDz6PMLLX2cfQNPi%2FW1abi75Dg007p%2ByqrPoXGwCURG2f5wZ2Z%2FLB6T8IURrJRpylMD1ZoSoCgxBUS6jt0jB6rYYF&X-Amz-Signature=326862777189c7a0a1d39d21aa944bb7fd41445f9ef945ad420a165236a4122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AT74D75%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDnrBDqV%2B2j7PcGJ7aciv4qclwZPO88zY6l16pWkHtMJAiB0Oflmzp9YuM5P65hVTKBvDdrQ9laqoUW2VGm2nggGTSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhgb%2F6U8EW9r4dICZKtwDBHYHzQlG%2BRMTZlDOBqOsbNOzepx6grzxD35PW7w%2B%2BMOIoGUaIsgZjO%2BG%2BHszyZDX9VXidhnmYAY2KbHgv3jiefeZ8HuK%2BMTG7q56exLOGTEwPRHkLapLgQqThIJt8hVOyIqmcQDTzwI3DlClWqpc%2BPqZm0Xcww%2BynLIv1Or5jBkHrfyYo4egjbw7trAHLPqwoB%2Bi24xj5RTx6aZOL9oP7uc5MXOxcJ40CWMMeiJjUmrMMV5QTQvXGyvsqGLDl9C1XjBDveanXbnit9bm0gfOKltCZR6Bq356RgDLg4HzAxoVjGwdwfIsH9RLj5OHRp0T3jlpoXSFlQq0K5SUu7KvR7JD0BQooCSZpttgWGdCsiAriwc3BrMssRpbcXRCN4G6T6Ldy5sB2whHNGKorcPT2kdztfgYIzc3m47nBG9a4EFO9oubUcDxdkBg1iTqP%2ByP%2FC%2Feeh8m%2BFKC4H%2ByF2ro8eYdFLWy3vjf%2BpNIsq575u1uYn3IPdJwYQy4IFl%2FMo4WJyhlNtu%2FgnOUimSY1FT7JYFWrDYF7I8r%2Bqz730aryDP3zQKVrkH5a4uJpGNi%2BBop04Sb2zlIOoScntW6PXQERmYpG6RmY0gKu%2FuQfuIj39APJL6I5wgzgPj9ePQw3a3bxwY6pgFvnMlSetcuk8ch4a%2BLCy647VtCrd4kCp6YNlVUXFfFJoAteHaxzGSnhNx3TgkbOFTSDIkqv1Mfh2VxwRbUDZFlYBz7V7agwSJ2HQOnju2JlwrbNJNlArNSL1%2B0moOJLrid3y%2FFDz6PMLLX2cfQNPi%2FW1abi75Dg007p%2ByqrPoXGwCURG2f5wZ2Z%2FLB6T8IURrJRpylMD1ZoSoCgxBUS6jt0jB6rYYF&X-Amz-Signature=23aa82b828c9a1a2b78760ee69b706ca831e192b46df88e1a1eb40fb90da7315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
