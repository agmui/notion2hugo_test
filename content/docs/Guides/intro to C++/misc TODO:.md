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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDNSNXAW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNvCAi%2B5bdxgeChwgC6q%2BmXbomF7oUn6Y%2BQt567JVWwIgFRxNx3ntZJXLXEeK1jIE1xLodFnTx5xaYFxf7UEr6x4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM86O7Q01LXY1%2FsU1yrcAzSerg7eLPSwFYRRe0CyPPw%2FDIepZrV0nzwVGdxGYswgBNeO2gN%2FgK7U260sVy1hoT%2F4I2zMg%2FBKbCJpM599JHQoO8TbYFlmLK2zX5yQYh7yZIZvwmxDsKFSO6VLw84D1V4FyMOQxcHq7ioAcN4CdUwU0aXRbo3HHeCGHW96NpXIIhDo1hIuDy8qX1pN3CRxk81wChLxBT%2B1YPmy7vitPBnb4CxUYnxK%2FoXCf%2Fv4oJudof%2FDq578g5g07xmt9v0j1Cuyu8YD8NevTiqVNDxMW2OldcYgdZth7CVLe%2FfT44GBPFuxfUC%2BIQMfetIUiTMzib23zkizf0c2q9H%2BKSAgWf6JuRnq1BJG7b1BvLq1ggKrlTX2GDCIHU3CmgEp9e2w%2BIggo%2FQcPFL6r05xZy1DKuj0DXaEmkzg0pptBzUfQOG55SJYVJXbkHdvO7B%2FKd%2Blot5ezTZVJ5CPttRk7eHuskyrNdztGDGuLoj83uM5NzWpceGGSr7EPt6fIolgg5mMcETwwwLbi69Tj2N5T7P%2FdeY6yKwVIGeU3NTUgtkzdBvLE3r8Fqb4vjBFxB4q4q3CIJ4mL2LdQTyag7jc8QnvgXFnCkrT0EJyJtTasf8HG9u%2Frz0%2FRfxSLRCyMv1tMIOV8cMGOqUBMI%2BPR%2BMP9ILlT5u85tMePec%2BJ5NaMgYlbfsZbbgS%2Bp6zC3s3ZnvSLihtsroI%2FMob54oI41yBJCrFDJ0xykZjq9409lQjMZUN0WH7HWzrA6iw4DZj%2BZm5dK6N0OiXlqld1E%2FZOY47wmySGZUqMf50BJxx2McFL%2F4Fzf36sYB2Y8tYWP3qXvluR1JxSjmbcWyw%2B96gQ9GE6pfAOhD6Qjo2VjC4pX6D&X-Amz-Signature=5563fe94edce973a1f33a27a8acdb9fddb7574accbe035d741f3b73b7916d1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDNSNXAW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNvCAi%2B5bdxgeChwgC6q%2BmXbomF7oUn6Y%2BQt567JVWwIgFRxNx3ntZJXLXEeK1jIE1xLodFnTx5xaYFxf7UEr6x4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM86O7Q01LXY1%2FsU1yrcAzSerg7eLPSwFYRRe0CyPPw%2FDIepZrV0nzwVGdxGYswgBNeO2gN%2FgK7U260sVy1hoT%2F4I2zMg%2FBKbCJpM599JHQoO8TbYFlmLK2zX5yQYh7yZIZvwmxDsKFSO6VLw84D1V4FyMOQxcHq7ioAcN4CdUwU0aXRbo3HHeCGHW96NpXIIhDo1hIuDy8qX1pN3CRxk81wChLxBT%2B1YPmy7vitPBnb4CxUYnxK%2FoXCf%2Fv4oJudof%2FDq578g5g07xmt9v0j1Cuyu8YD8NevTiqVNDxMW2OldcYgdZth7CVLe%2FfT44GBPFuxfUC%2BIQMfetIUiTMzib23zkizf0c2q9H%2BKSAgWf6JuRnq1BJG7b1BvLq1ggKrlTX2GDCIHU3CmgEp9e2w%2BIggo%2FQcPFL6r05xZy1DKuj0DXaEmkzg0pptBzUfQOG55SJYVJXbkHdvO7B%2FKd%2Blot5ezTZVJ5CPttRk7eHuskyrNdztGDGuLoj83uM5NzWpceGGSr7EPt6fIolgg5mMcETwwwLbi69Tj2N5T7P%2FdeY6yKwVIGeU3NTUgtkzdBvLE3r8Fqb4vjBFxB4q4q3CIJ4mL2LdQTyag7jc8QnvgXFnCkrT0EJyJtTasf8HG9u%2Frz0%2FRfxSLRCyMv1tMIOV8cMGOqUBMI%2BPR%2BMP9ILlT5u85tMePec%2BJ5NaMgYlbfsZbbgS%2Bp6zC3s3ZnvSLihtsroI%2FMob54oI41yBJCrFDJ0xykZjq9409lQjMZUN0WH7HWzrA6iw4DZj%2BZm5dK6N0OiXlqld1E%2FZOY47wmySGZUqMf50BJxx2McFL%2F4Fzf36sYB2Y8tYWP3qXvluR1JxSjmbcWyw%2B96gQ9GE6pfAOhD6Qjo2VjC4pX6D&X-Amz-Signature=1a5e17a26475c2e55565ce05f245c0e52632a9202f3586f78427ba2d8341967b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
