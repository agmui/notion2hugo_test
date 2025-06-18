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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZFOKSQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGcRmj4Zto2yGFrA5ZPwnelmsaSQUKYYMD2%2B3h9887BAiEA66Wk2fBthGZ8cXX5L%2FSX8XE62afv5m0rz%2BhFOoc2h2kqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIssQ2RoPlVjmmpwlSrcA4luyadHqFOxFk5rQkAcY%2BfBqQUIipBnR7DoeC%2B0b0nbUts%2FPe%2FTLyrCYnHHaXzTqKqd4t1Z2o812tR7JaET3SjUHvOSmStUcZ8NX9AbpsHsZoakAeNdN78%2Ft%2BlbHKgVAlYK78iYejPqZ2ScxEcaLQ5Fqqz00fgfTix7ZamykTbqg0GYa7ngwOzTQhHoizYOcU029nq6jIVDz1xbKkotezuVMkucvqatqolUUv54Upw5y9%2FCsnPf0AmoxXdIY29k%2B1%2BW6pCEEqEP2F7mMJy86ofD4A3sPwieBk%2B19ktgKRPt0bvqHQ5uiUve6LkbCgmt%2Fqre4UqXoJOXrYbZQnjAfy5ybDzmeWYbXVe81A3zkQQvsts6%2BQRaj2gO5RO1UKQ7Qw7OGPE%2FarEZyBOTgto1yCh8Jk7tlk9RMkTa6JOontXXQEjoz41NzGUd9tZC4%2BR1J7JKT0hmq4fQ4L8m%2B2nf093k%2BsxV4WwVEW8ava9j7j%2Fy0bRGeEqBQEfhyEJAFyC5vVpEZMzVUXtOHU87IIXM32u4RKwWREGxAi955ZH7p90GdtSsRCSjkkOYEWe1irxbw8lBecp%2BSju%2FuPg5XerD4H2%2FS8b7nC7H7Gny0w4%2F2TLisCkGSoCLYExjsPa0MMX0ysIGOqUBB6QpTvNZG5OVhWNLp%2FtWp%2BrE2SorVut7P4QKg3VFVfPQOiuNIjInxZ6yjcCCbnxnUNGMKob1TatV9%2B2mHXigMoH8MpQddk6%2BKn3u1geoghWWQKtWJ0lvIIzWzovwKiuGJuB5ZEHtORZYCtA64klgcZUUU9yU2R0PqMJfDBnOqMys8l6FC0x%2B4ynh3o%2Fg5nc5mbkshk1ImHoFL2%2Bb4tWpNhnPIkKd&X-Amz-Signature=b4efdf91eb8eecf535db03b8a08d9f5aebcedcb32609cd64303405aba2bb64b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZFOKSQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGcRmj4Zto2yGFrA5ZPwnelmsaSQUKYYMD2%2B3h9887BAiEA66Wk2fBthGZ8cXX5L%2FSX8XE62afv5m0rz%2BhFOoc2h2kqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIssQ2RoPlVjmmpwlSrcA4luyadHqFOxFk5rQkAcY%2BfBqQUIipBnR7DoeC%2B0b0nbUts%2FPe%2FTLyrCYnHHaXzTqKqd4t1Z2o812tR7JaET3SjUHvOSmStUcZ8NX9AbpsHsZoakAeNdN78%2Ft%2BlbHKgVAlYK78iYejPqZ2ScxEcaLQ5Fqqz00fgfTix7ZamykTbqg0GYa7ngwOzTQhHoizYOcU029nq6jIVDz1xbKkotezuVMkucvqatqolUUv54Upw5y9%2FCsnPf0AmoxXdIY29k%2B1%2BW6pCEEqEP2F7mMJy86ofD4A3sPwieBk%2B19ktgKRPt0bvqHQ5uiUve6LkbCgmt%2Fqre4UqXoJOXrYbZQnjAfy5ybDzmeWYbXVe81A3zkQQvsts6%2BQRaj2gO5RO1UKQ7Qw7OGPE%2FarEZyBOTgto1yCh8Jk7tlk9RMkTa6JOontXXQEjoz41NzGUd9tZC4%2BR1J7JKT0hmq4fQ4L8m%2B2nf093k%2BsxV4WwVEW8ava9j7j%2Fy0bRGeEqBQEfhyEJAFyC5vVpEZMzVUXtOHU87IIXM32u4RKwWREGxAi955ZH7p90GdtSsRCSjkkOYEWe1irxbw8lBecp%2BSju%2FuPg5XerD4H2%2FS8b7nC7H7Gny0w4%2F2TLisCkGSoCLYExjsPa0MMX0ysIGOqUBB6QpTvNZG5OVhWNLp%2FtWp%2BrE2SorVut7P4QKg3VFVfPQOiuNIjInxZ6yjcCCbnxnUNGMKob1TatV9%2B2mHXigMoH8MpQddk6%2BKn3u1geoghWWQKtWJ0lvIIzWzovwKiuGJuB5ZEHtORZYCtA64klgcZUUU9yU2R0PqMJfDBnOqMys8l6FC0x%2B4ynh3o%2Fg5nc5mbkshk1ImHoFL2%2Bb4tWpNhnPIkKd&X-Amz-Signature=5ed207a13af3d8afdd27fe3d0713b03d7035eb7340edd2e8a927ec3af117682a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
