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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLF73GB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lS4C97BpGmC1jY8I5UzwoqOLejGQbtZiIdk6k11xxAiEA56uMxYg9fRT3nA7taq%2FFZeRJUKC56g25%2FjUOm6gxg0wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxMngbcWj2BgNJeZircA7TLW0hwiIAv7iGPHM2J7KBIp12MeBwgICiltomxACjnmP8Mx3qYFuautPXJHYqYfUDl%2FeQgMp7S3ODDKt0v0Qz3D5E0YMwQWNuGlKoDyvQMk3KmrPBCR%2BQ0TkfiEVkLVGvSNU6mgCfVFVdlVSYfiTlkIgzfKciW3tigQ9HaROtpZgNdUjD7tWDJfhpl9t%2BimQBdVYhEA%2FdXKSuX7R79M5shclhSnsnGprgdh%2BzWuHO6WAxw22htLgPEjNZz1a2u6rKx4TpnZLIZ%2B3fhIwWY7HJzRQDgU6zuuBWLNrrkTPBwhN%2BSW2I5S09WOrE3CELX4YoTR9Di0gbAjt8qk3OEm4HiW9aH2eGFJPIiUk4XabANqtL9clwhGA5%2FjJeXxxgvNye%2F61Fjclq6ic84%2FBHFLYecGIM0qPsfWbbZmbKsPHQP64SxxxZAM6WIUrCEFswI6kp6tRuTo9eC4YSkfrk0HFySkQXEmyj%2FBzXa6zb2EuLz0VbeKSUTIMpBLDTMkA%2FDa99vk6HPiU9Hnk3DwHhKxCw2ESh4026jOBjl10%2FPmHZmL2t0QZYR%2Fi050h2dCjqOFP6AizyMLhKJC8Ksav28jB8yHRFCQecFW292SG%2Bl1v8h8RuvrmY1C0fBtIoYMJOi6MQGOqUB9bS4yJ0j6xaEOnP%2Bw774OXUU98mofD%2BTqYaYsG2T24yR2tjUWUC6nnurl2wFLXyIJdmuQ6WD2vIoeck8a0xuHKyuV%2BBSahA9vXD9OZ%2BjrIEskOsaxrjnIceS7E1QviqFXsNFsWAEMm7rmyhCW1tYVJafDO1K0p2cRf2%2BnJYvE9UElaE9%2B0sa9x6cg7MtwdE3ZoAZ6qe8w2ql3N6OJaxIjn1X8%2Bzg&X-Amz-Signature=5498580ff1d85fc30640e1bdf19c7ccdf496516facacc1da12b3e745f6448993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLF73GB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lS4C97BpGmC1jY8I5UzwoqOLejGQbtZiIdk6k11xxAiEA56uMxYg9fRT3nA7taq%2FFZeRJUKC56g25%2FjUOm6gxg0wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxMngbcWj2BgNJeZircA7TLW0hwiIAv7iGPHM2J7KBIp12MeBwgICiltomxACjnmP8Mx3qYFuautPXJHYqYfUDl%2FeQgMp7S3ODDKt0v0Qz3D5E0YMwQWNuGlKoDyvQMk3KmrPBCR%2BQ0TkfiEVkLVGvSNU6mgCfVFVdlVSYfiTlkIgzfKciW3tigQ9HaROtpZgNdUjD7tWDJfhpl9t%2BimQBdVYhEA%2FdXKSuX7R79M5shclhSnsnGprgdh%2BzWuHO6WAxw22htLgPEjNZz1a2u6rKx4TpnZLIZ%2B3fhIwWY7HJzRQDgU6zuuBWLNrrkTPBwhN%2BSW2I5S09WOrE3CELX4YoTR9Di0gbAjt8qk3OEm4HiW9aH2eGFJPIiUk4XabANqtL9clwhGA5%2FjJeXxxgvNye%2F61Fjclq6ic84%2FBHFLYecGIM0qPsfWbbZmbKsPHQP64SxxxZAM6WIUrCEFswI6kp6tRuTo9eC4YSkfrk0HFySkQXEmyj%2FBzXa6zb2EuLz0VbeKSUTIMpBLDTMkA%2FDa99vk6HPiU9Hnk3DwHhKxCw2ESh4026jOBjl10%2FPmHZmL2t0QZYR%2Fi050h2dCjqOFP6AizyMLhKJC8Ksav28jB8yHRFCQecFW292SG%2Bl1v8h8RuvrmY1C0fBtIoYMJOi6MQGOqUB9bS4yJ0j6xaEOnP%2Bw774OXUU98mofD%2BTqYaYsG2T24yR2tjUWUC6nnurl2wFLXyIJdmuQ6WD2vIoeck8a0xuHKyuV%2BBSahA9vXD9OZ%2BjrIEskOsaxrjnIceS7E1QviqFXsNFsWAEMm7rmyhCW1tYVJafDO1K0p2cRf2%2BnJYvE9UElaE9%2B0sa9x6cg7MtwdE3ZoAZ6qe8w2ql3N6OJaxIjn1X8%2Bzg&X-Amz-Signature=ae2d8c0203aef001d82887c9a67bcdce0bf59386d950eb0e885327fedfa303b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
