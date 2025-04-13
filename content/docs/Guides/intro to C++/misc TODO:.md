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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425GXIC7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYF1xT9Ydutq4kbU3nQgUyrGyNR72jfiL5e4RHK7erYwIgZ4FzL2cEqprJf3P6AdIw7aQNslPt19Tf9V%2FG7Hc7T8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAft70X2MiBDjRyyOCrcA7lijPwmu0yh3%2Fm0fem6L65NNE7TqA26JMFLYFjGXyQZjJJ%2FzaGpzVgn5%2FAOs1AFwG9HugQkE9rZ84McVzZEXFFzb17%2FvWcUkM%2FZ%2FWNCEMlDwSm5uHbmA9oVIp4lCBPFf52s%2BwMfSAZgJzPmQI6Dv%2BPcUPLkYd998BOsBOuqjzGKWNkH8ZAHKriFJE8HLwyTXpkMaEYoL9rIxOkfFtTXTyB3f%2Fzu%2BI32wrtfzyGJm9DuwKmObBX0fB%2BOx4oOtoewbWgL6LTBTQQQCpEgoyepA97q1u5036cZ0bDQmTzIsJ8kAkD6CpZsOI4W9blMbdvfmkPYUE7WVra%2Fj7mC7iC7seIrpmKgIcUCybw8R7qvGG3wORu3%2BWbnR5VFXHlRdJmxrctVOdOUwsGSVa%2FiebqInGrz%2Bmq9OnSJ%2BzOzqG8qatxq%2FK6%2BNucGCQDRKrYy76wA%2FesmOQ%2BmCkIh9mRsDafr8DuolWOGza60511F%2FF9fsh9zajUjikCXHHBqvxWetNVFZNEwCqhdzmKqQIiEGMZ16ymxzThflxcNT1Uh39DV3FWWunnkwFKmzNQFYx4Cz6r0j9QIojwBepyktNvmfsSrr9jzyn4xFun0mEasIvPWpELrvah4ZJxbcVGemHTqMIOw8L8GOqUBEC%2B3MI7kMCcJYjK%2FriRg%2BvJodpT7UsZglKo4TKoxc82UwLX6dsRWu5L5%2FLChMmFhpKhHUbPZsi4qJT0KNM6wO3D1u%2Fg58X3P2S63F8qwvalj1ztPyPfzwkfhTfGUZ2uYy8yNyKPBqGkOEaFG%2F1djLn7l6QoRYLkdPWDcV0xcncwxnRS2c31MNfv0MKoRj9hLUrz0K2%2F5CvOgRVFY8x9nj6Y3jmWS&X-Amz-Signature=69756ab42cd3faf63e0f294f54fa60e5694a74f0fa3bd120c1ecc5cf11591ead&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425GXIC7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYF1xT9Ydutq4kbU3nQgUyrGyNR72jfiL5e4RHK7erYwIgZ4FzL2cEqprJf3P6AdIw7aQNslPt19Tf9V%2FG7Hc7T8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAft70X2MiBDjRyyOCrcA7lijPwmu0yh3%2Fm0fem6L65NNE7TqA26JMFLYFjGXyQZjJJ%2FzaGpzVgn5%2FAOs1AFwG9HugQkE9rZ84McVzZEXFFzb17%2FvWcUkM%2FZ%2FWNCEMlDwSm5uHbmA9oVIp4lCBPFf52s%2BwMfSAZgJzPmQI6Dv%2BPcUPLkYd998BOsBOuqjzGKWNkH8ZAHKriFJE8HLwyTXpkMaEYoL9rIxOkfFtTXTyB3f%2Fzu%2BI32wrtfzyGJm9DuwKmObBX0fB%2BOx4oOtoewbWgL6LTBTQQQCpEgoyepA97q1u5036cZ0bDQmTzIsJ8kAkD6CpZsOI4W9blMbdvfmkPYUE7WVra%2Fj7mC7iC7seIrpmKgIcUCybw8R7qvGG3wORu3%2BWbnR5VFXHlRdJmxrctVOdOUwsGSVa%2FiebqInGrz%2Bmq9OnSJ%2BzOzqG8qatxq%2FK6%2BNucGCQDRKrYy76wA%2FesmOQ%2BmCkIh9mRsDafr8DuolWOGza60511F%2FF9fsh9zajUjikCXHHBqvxWetNVFZNEwCqhdzmKqQIiEGMZ16ymxzThflxcNT1Uh39DV3FWWunnkwFKmzNQFYx4Cz6r0j9QIojwBepyktNvmfsSrr9jzyn4xFun0mEasIvPWpELrvah4ZJxbcVGemHTqMIOw8L8GOqUBEC%2B3MI7kMCcJYjK%2FriRg%2BvJodpT7UsZglKo4TKoxc82UwLX6dsRWu5L5%2FLChMmFhpKhHUbPZsi4qJT0KNM6wO3D1u%2Fg58X3P2S63F8qwvalj1ztPyPfzwkfhTfGUZ2uYy8yNyKPBqGkOEaFG%2F1djLn7l6QoRYLkdPWDcV0xcncwxnRS2c31MNfv0MKoRj9hLUrz0K2%2F5CvOgRVFY8x9nj6Y3jmWS&X-Amz-Signature=0a13ad0c1657e9d0dc0589efe9cfd973cc89bcb53a23ee4762fe15e65d3397de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
