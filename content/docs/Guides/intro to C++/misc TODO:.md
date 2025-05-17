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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVXXWPD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F2SSELifdvzk2OtnNZmkICJKZUEYBblagpW9gqPJbFwIhAMJAOeeSkmKSXz41iekZcZVX5dqRrbXZhFSirVb0%2BnVsKv8DCGYQABoMNjM3NDIzMTgzODA1IgwIeHzQkxzTvdSCKsAq3ANY8gESccrfELQVMQmQi7T6lZbOLRTvg6Ycm%2B4RRdFo020k%2But0kC2jfTtq1qdvwxv4Xq4EC3BJrPZyVYyTUNHAZIlN7jE0SLztoEZuMnwRN7p3dNIWRVEE81vzSGEvr2GOHdBxDiESkdxSI1V60GkYQbPFpzlLGxomTaBGlVmdssqHRu526WIRzHb6E9nWyAKybxJxfYa4Trv9E7rPfQVwxgY4Pkd9ktsUMB177D2W3Ux4ki4gce6oSFaJW5HFksb9%2FD7%2B1aG76zHilfuZAyhIxqgZ2WWLMkIaB1TfKb0YsM%2B9kXkoGq5tPGm%2BpoUAm7ULLXSmDM5xAH1t%2BTotYaD3uCAu3a41%2FMQe%2BMj9t6TowdEdoHOeCvVRwSrzpbz8aH38DrtRSThtNULkRBpi3rCFAqIv6LC%2Bd%2FDk3OUz11o71nK4FFJAxAFdiO7fQkiWx1R4hUOjf8gdp9UwR1mgJWbKaRY%2BmNZ1ca0ASrOTqoENqXqE7K1xXqCZIQSHeqAxUtrhoq8BR7ua6Chre%2FPnMZwzTCAIN81JWE6t9EUJXsosqdAN2Auz0M0Z9Xg%2F0vOeg5aO9RYfnIq9VwyArc6vylvqzMCzgvEhDb%2BY0oQkyzDSo9nth8VDh3tflJ7rWzC896PBBjqkAXzW2OOZ7MvELWTOR%2ByKZRv7SKRsbh%2FEtEJIRJ2m2E2j9XS1lqshkS8qZiyDrEXBcY0UNg8VtdwerVcOmUe%2FCBGiA2HuOjkCNAEvhl%2BZyocJ8LhJJhNSpoIQd%2BcAoUdVHWtQj%2BhzojZj4O%2FE0uBsM4MlpKYmrX4t5dyOz8D15mxbIzt5faDeTB%2FjeqVYtQZ6viztyQcxAZZFjZRCGK8Mu2opdsJz&X-Amz-Signature=b6f7f62bba69e05f633132a93be744cb87f3a2c1c5771d162161b43507397b04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVXXWPD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F2SSELifdvzk2OtnNZmkICJKZUEYBblagpW9gqPJbFwIhAMJAOeeSkmKSXz41iekZcZVX5dqRrbXZhFSirVb0%2BnVsKv8DCGYQABoMNjM3NDIzMTgzODA1IgwIeHzQkxzTvdSCKsAq3ANY8gESccrfELQVMQmQi7T6lZbOLRTvg6Ycm%2B4RRdFo020k%2But0kC2jfTtq1qdvwxv4Xq4EC3BJrPZyVYyTUNHAZIlN7jE0SLztoEZuMnwRN7p3dNIWRVEE81vzSGEvr2GOHdBxDiESkdxSI1V60GkYQbPFpzlLGxomTaBGlVmdssqHRu526WIRzHb6E9nWyAKybxJxfYa4Trv9E7rPfQVwxgY4Pkd9ktsUMB177D2W3Ux4ki4gce6oSFaJW5HFksb9%2FD7%2B1aG76zHilfuZAyhIxqgZ2WWLMkIaB1TfKb0YsM%2B9kXkoGq5tPGm%2BpoUAm7ULLXSmDM5xAH1t%2BTotYaD3uCAu3a41%2FMQe%2BMj9t6TowdEdoHOeCvVRwSrzpbz8aH38DrtRSThtNULkRBpi3rCFAqIv6LC%2Bd%2FDk3OUz11o71nK4FFJAxAFdiO7fQkiWx1R4hUOjf8gdp9UwR1mgJWbKaRY%2BmNZ1ca0ASrOTqoENqXqE7K1xXqCZIQSHeqAxUtrhoq8BR7ua6Chre%2FPnMZwzTCAIN81JWE6t9EUJXsosqdAN2Auz0M0Z9Xg%2F0vOeg5aO9RYfnIq9VwyArc6vylvqzMCzgvEhDb%2BY0oQkyzDSo9nth8VDh3tflJ7rWzC896PBBjqkAXzW2OOZ7MvELWTOR%2ByKZRv7SKRsbh%2FEtEJIRJ2m2E2j9XS1lqshkS8qZiyDrEXBcY0UNg8VtdwerVcOmUe%2FCBGiA2HuOjkCNAEvhl%2BZyocJ8LhJJhNSpoIQd%2BcAoUdVHWtQj%2BhzojZj4O%2FE0uBsM4MlpKYmrX4t5dyOz8D15mxbIzt5faDeTB%2FjeqVYtQZ6viztyQcxAZZFjZRCGK8Mu2opdsJz&X-Amz-Signature=f9f7afe95e8bf726f21434f4c148ed419af01d15984f3d23e7f7cf03916cf887&X-Amz-SignedHeaders=host&x-id=GetObject)

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
