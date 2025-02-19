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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKQHZXG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoSlhNHvImqt9Jqt%2Fug0%2BY86KkZqJHPGuZI24Aq2L%2F5AiAy%2F2HM6pmozu2NLELTyXa7jCsc5YlAKebmaqUnqsM7syqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvfAWYSZ0tCKqNZQKtwDuuv1Nhw6ia2i9OsH7X0qZlPa2LZRfC%2BfETtNWozEMYMbWdKP%2FjYBW9AhwT8n47h5XZ%2FASCp7FxyDudy3lsnrPJYmnDZfmBGmzB%2Fr20YYBEzvJVFb0ItZfH%2BOwJ1N0KpnXsx%2By9J%2Bbq45VgFyNoOH8iuSW0RvI9MhveHXQyLFocqY%2FICxZbVJ6Woh3zbdtb9LqleHv7VDeG9R3iXGEvSx4M49XyVqCOXtTTma48OaQkkMirpG52ycV06Y771v1ik8H%2FmjvPeZx2iv%2BX8yHjvS3VmDi17pafQijx%2BO5W%2FoOMkNE1CbAodcC1IG9wiL8OtVZmZhAOe0buosv50XOssN9oUkv1%2FQXhTwOda9CrDYbaxKkPa8kcK3CwjBg44xGvpodEQbJtCi4DwfJExsOcIguCO00oDJXg41mpIaCe0CyinpLNBWBUlP58FR51mdlb57UON1gMRN0d9KH0q5KiFqRj65jjAi%2Fl%2BbkRwuuMKBK1fFD5zmnLcsAzmdwA1EXfBhMn0i4%2BwlYybyZWEPz0ibsLHr4k3UexQT8SxrnvToqBHyFLixlP%2BpSEKpadzrtuL1zbVWSc%2BOVpORq2TGvBIGwx9o%2B%2BCaxUDjGC7g3h5BB7QHg3vgGAMPYUIDrhMw8O%2FYvQY6pgE%2F1viPAv4zps06HkNe5jcibbpGjZiHJ7dM4Q1Hoc1JJpfMOnCDDarxFqGKeUo8PgUKSe%2FvsqA0Vg8tctUJXNaWpHcI2%2BVVJVVDHrgp1DPnzdvFNM47CUf0OKV3cmOUi5ZQujP8Rax4qNSxHaSpXwQ6ovz8Lrh3DYYW%2BG14YHGoUo3BeJwcQQdWSBGPE9D56Wn2vkJZPHwojirgmCrZXjUfnIM%2BLcYy&X-Amz-Signature=65e3599e4e061d6c0696645f10da9d4554b5373813c3c44faeb1f82f1e9ea5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKQHZXG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoSlhNHvImqt9Jqt%2Fug0%2BY86KkZqJHPGuZI24Aq2L%2F5AiAy%2F2HM6pmozu2NLELTyXa7jCsc5YlAKebmaqUnqsM7syqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvfAWYSZ0tCKqNZQKtwDuuv1Nhw6ia2i9OsH7X0qZlPa2LZRfC%2BfETtNWozEMYMbWdKP%2FjYBW9AhwT8n47h5XZ%2FASCp7FxyDudy3lsnrPJYmnDZfmBGmzB%2Fr20YYBEzvJVFb0ItZfH%2BOwJ1N0KpnXsx%2By9J%2Bbq45VgFyNoOH8iuSW0RvI9MhveHXQyLFocqY%2FICxZbVJ6Woh3zbdtb9LqleHv7VDeG9R3iXGEvSx4M49XyVqCOXtTTma48OaQkkMirpG52ycV06Y771v1ik8H%2FmjvPeZx2iv%2BX8yHjvS3VmDi17pafQijx%2BO5W%2FoOMkNE1CbAodcC1IG9wiL8OtVZmZhAOe0buosv50XOssN9oUkv1%2FQXhTwOda9CrDYbaxKkPa8kcK3CwjBg44xGvpodEQbJtCi4DwfJExsOcIguCO00oDJXg41mpIaCe0CyinpLNBWBUlP58FR51mdlb57UON1gMRN0d9KH0q5KiFqRj65jjAi%2Fl%2BbkRwuuMKBK1fFD5zmnLcsAzmdwA1EXfBhMn0i4%2BwlYybyZWEPz0ibsLHr4k3UexQT8SxrnvToqBHyFLixlP%2BpSEKpadzrtuL1zbVWSc%2BOVpORq2TGvBIGwx9o%2B%2BCaxUDjGC7g3h5BB7QHg3vgGAMPYUIDrhMw8O%2FYvQY6pgE%2F1viPAv4zps06HkNe5jcibbpGjZiHJ7dM4Q1Hoc1JJpfMOnCDDarxFqGKeUo8PgUKSe%2FvsqA0Vg8tctUJXNaWpHcI2%2BVVJVVDHrgp1DPnzdvFNM47CUf0OKV3cmOUi5ZQujP8Rax4qNSxHaSpXwQ6ovz8Lrh3DYYW%2BG14YHGoUo3BeJwcQQdWSBGPE9D56Wn2vkJZPHwojirgmCrZXjUfnIM%2BLcYy&X-Amz-Signature=c6deda73c795ed66a7da21ac5f2e072a468915cef444fe7c0774d3f5c0bbf741&X-Amz-SignedHeaders=host&x-id=GetObject)

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
