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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7MJUVG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDsZI3dZ2jR3kwYKzI4P6v%2B4HF9WodIsxM1Y731uZHSvAIhANHiwRC82jIa%2BcZOR4B6Zj2UVk8b8CLk1YH7yIMSFFrGKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Mm0SBSn58cerrgq3AOJkFFxG1xXXsvP0Wotz%2FA%2B0hBx6J4McdQh9Hu9gGtwoSlDTkZ6VDKOMRw5MQftZojas13IBFYFlqE7AzWjRHWQb%2BYYZsQY1OaKcrH5YV35AjraOgLX6H6ZV4ERk3Y49ibyZr8xsy2C6jCAJLUK9oGgrfJL045HGO0tM6Kts%2B%2BVYzkGY4ETfZ1Y4o%2FuaRq5FdgBuuvqcJHx06Qf9zxlN8%2F26Zrbtva9uj4pyRSaQeycO7%2F4P8dDyQKYQWpBQer6kWzmoeu6FDxNrHg5nbAcDsiqIVMH03Wee4CcGcO0rzasFpVY%2FyHYQLw4%2Fd1vFL3cAkd0Qw3PVETTf3OjSPbGZcPeYJV4p4C15Eoa1iq3TdGMFVU6uxg8tIvWXDLMVZCxtsDB9xTCZEx40TkmXeCAFq5Fw7QJxJOOa3zic8oL0maIlf8iOnfsdZVk33uYnoibSav8NHEFoOl1Wg4REX2JqQxsS0bzCMxqhXBj4JabC%2BIlzbhoR6hG3ZUoZ6%2BvrbUVoqhhxgTqbvR%2BMh74KIYz7MTUoLIYpj5qZR7qtut%2Ft%2FpXYl95utqxor5407juDmLR5ZR1ZlLD4WhujsJF%2FjPgDT9NapMwSM%2BjpdVvkYiWMUXDu9okjWkmrW83CI8JsjCsh5vABjqkAYmWFh2VYPnF7Syk%2FxDXCKcGdpN9LzwmcDr%2FNYM0yD%2Bd6Rvy%2FUSvX2RZ79BLy5DToEMHIPJLSx%2BihuIipGK%2FxDoWO%2FDq4p3JsbF4slN9pA2JZK1lS1WJ98snTQXyG%2BsU5a2jY9WFtuN7RsGYWdzeuwigaz2fBFa58m%2Fdzk3wc%2BtjCchZkaZcoiG0uXNMGkeioijcEVSMhh%2Fe8VwsaxiFtNXiTY3W&X-Amz-Signature=74257f7acd87ece56436cff989789faaa48849f484906cf29f9abd647091f99a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7MJUVG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDsZI3dZ2jR3kwYKzI4P6v%2B4HF9WodIsxM1Y731uZHSvAIhANHiwRC82jIa%2BcZOR4B6Zj2UVk8b8CLk1YH7yIMSFFrGKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Mm0SBSn58cerrgq3AOJkFFxG1xXXsvP0Wotz%2FA%2B0hBx6J4McdQh9Hu9gGtwoSlDTkZ6VDKOMRw5MQftZojas13IBFYFlqE7AzWjRHWQb%2BYYZsQY1OaKcrH5YV35AjraOgLX6H6ZV4ERk3Y49ibyZr8xsy2C6jCAJLUK9oGgrfJL045HGO0tM6Kts%2B%2BVYzkGY4ETfZ1Y4o%2FuaRq5FdgBuuvqcJHx06Qf9zxlN8%2F26Zrbtva9uj4pyRSaQeycO7%2F4P8dDyQKYQWpBQer6kWzmoeu6FDxNrHg5nbAcDsiqIVMH03Wee4CcGcO0rzasFpVY%2FyHYQLw4%2Fd1vFL3cAkd0Qw3PVETTf3OjSPbGZcPeYJV4p4C15Eoa1iq3TdGMFVU6uxg8tIvWXDLMVZCxtsDB9xTCZEx40TkmXeCAFq5Fw7QJxJOOa3zic8oL0maIlf8iOnfsdZVk33uYnoibSav8NHEFoOl1Wg4REX2JqQxsS0bzCMxqhXBj4JabC%2BIlzbhoR6hG3ZUoZ6%2BvrbUVoqhhxgTqbvR%2BMh74KIYz7MTUoLIYpj5qZR7qtut%2Ft%2FpXYl95utqxor5407juDmLR5ZR1ZlLD4WhujsJF%2FjPgDT9NapMwSM%2BjpdVvkYiWMUXDu9okjWkmrW83CI8JsjCsh5vABjqkAYmWFh2VYPnF7Syk%2FxDXCKcGdpN9LzwmcDr%2FNYM0yD%2Bd6Rvy%2FUSvX2RZ79BLy5DToEMHIPJLSx%2BihuIipGK%2FxDoWO%2FDq4p3JsbF4slN9pA2JZK1lS1WJ98snTQXyG%2BsU5a2jY9WFtuN7RsGYWdzeuwigaz2fBFa58m%2Fdzk3wc%2BtjCchZkaZcoiG0uXNMGkeioijcEVSMhh%2Fe8VwsaxiFtNXiTY3W&X-Amz-Signature=1e7787c42c97ff8081630e09631a8788945167b687f6b057fb8530b987504b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
