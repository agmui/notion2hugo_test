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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBUFUK4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFoyEcU%2FUI9t2kAMJCNoAdFb9ydfvPfqDnk1avRmwKE%2BAiBFh%2FSlvjeK2A1qE3WQPVCXsuCHg4XLoDca%2BLBxhW8Bsyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMreQbDTJGtgxwXbX%2FKtwDw0VQW1H1aZZS39pUw6mNgG6BoO%2FZ5M59kkwllsYNeoFjfAwlZex9ODBGI0GXtuV8DpZ5WL6ZdZmEpSB9RkhPUfQEK42VAKpZt97wAW%2BQe43JwvCfzjmZdIOjK%2FRxO%2FIArhQccPpwFtqVQVDG0mm5YxDI8BAvcjW0oO2SC2XP6uZEhE7Kqxkgs7U5s5YMrKelDV8N7tjKGBPB1eUzq0y2e33Ma1e14Wkkl3MDHn1d7OuFCHZnHSGeq3v7C7nZBUkrwo6hwQCHIvOw8Xa8vdopv8u1EHDt6mujzr2vYTp6ByQV5Nr%2FUMRbS5OsA1h00sRVxrI7E65RuaBiClpWsTBykp4l5pz9UTau4APN9BZ7%2FBskGfnCO4kUqHhbZ%2B%2BK67VQNWMWuXVHMJ89Dk4492UdEetYQK9W0VzRZoGbxPQr4X4loYKAUdLBkU0Gy5D%2BZpr0lS%2FPMd5DxYPa1mSwtJorqJXbtVhn5jdRTzu37ewOw88iJPHb%2BTfvrdQbpcKo4RhaHcS1L2SiOPOgT5huuNduFY2HUmK1SYzV9uPFujm109mV89Jy4eIGCJMqwt1ItYPQfW6CGrAxubQ09E22fqEfMMjYz5XsNrwCCK8Y5iBas47YrYXYLe0%2B3Uq85lwwj8yDvQY6pgERtv1AC5sRttQzr8DGPFa7b7ehtzKOhhPRcPaiS4wKoWQ4i%2FxYhKJ8FrrFm6zSmLNW%2BMSAr0au33AJ7Sl89ptkckaIT%2B%2Bdib6PFn9qTaz4O6lBzchQ1pq87N1fcF1Ihb6%2F5YTxIvG8MktU7LT49kOhft1kogBB47Iii8XeRj2l7qTfs%2Bqh%2BERysA%2BrOhjCUTNd8yWBJrTeuTkrl0o9c3f0nOXqd1NB&X-Amz-Signature=65fdfc3fe3ab2426c74a0d09f569dce6cb74ba934f80972d9f77b03a2d0f6b01&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBUFUK4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFoyEcU%2FUI9t2kAMJCNoAdFb9ydfvPfqDnk1avRmwKE%2BAiBFh%2FSlvjeK2A1qE3WQPVCXsuCHg4XLoDca%2BLBxhW8Bsyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMreQbDTJGtgxwXbX%2FKtwDw0VQW1H1aZZS39pUw6mNgG6BoO%2FZ5M59kkwllsYNeoFjfAwlZex9ODBGI0GXtuV8DpZ5WL6ZdZmEpSB9RkhPUfQEK42VAKpZt97wAW%2BQe43JwvCfzjmZdIOjK%2FRxO%2FIArhQccPpwFtqVQVDG0mm5YxDI8BAvcjW0oO2SC2XP6uZEhE7Kqxkgs7U5s5YMrKelDV8N7tjKGBPB1eUzq0y2e33Ma1e14Wkkl3MDHn1d7OuFCHZnHSGeq3v7C7nZBUkrwo6hwQCHIvOw8Xa8vdopv8u1EHDt6mujzr2vYTp6ByQV5Nr%2FUMRbS5OsA1h00sRVxrI7E65RuaBiClpWsTBykp4l5pz9UTau4APN9BZ7%2FBskGfnCO4kUqHhbZ%2B%2BK67VQNWMWuXVHMJ89Dk4492UdEetYQK9W0VzRZoGbxPQr4X4loYKAUdLBkU0Gy5D%2BZpr0lS%2FPMd5DxYPa1mSwtJorqJXbtVhn5jdRTzu37ewOw88iJPHb%2BTfvrdQbpcKo4RhaHcS1L2SiOPOgT5huuNduFY2HUmK1SYzV9uPFujm109mV89Jy4eIGCJMqwt1ItYPQfW6CGrAxubQ09E22fqEfMMjYz5XsNrwCCK8Y5iBas47YrYXYLe0%2B3Uq85lwwj8yDvQY6pgERtv1AC5sRttQzr8DGPFa7b7ehtzKOhhPRcPaiS4wKoWQ4i%2FxYhKJ8FrrFm6zSmLNW%2BMSAr0au33AJ7Sl89ptkckaIT%2B%2Bdib6PFn9qTaz4O6lBzchQ1pq87N1fcF1Ihb6%2F5YTxIvG8MktU7LT49kOhft1kogBB47Iii8XeRj2l7qTfs%2Bqh%2BERysA%2BrOhjCUTNd8yWBJrTeuTkrl0o9c3f0nOXqd1NB&X-Amz-Signature=063080da803a857b03f6625f21bef72f7588619fb899193dcdbe2248a3e2c4de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
