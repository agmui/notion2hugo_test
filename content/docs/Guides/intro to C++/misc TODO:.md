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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQWP5EC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkb7JMNIc6DVHjYu9OrZj%2FfxrbvAthrsGa5y41Nr%2FyMQIgaJzdmOtcltZXVi%2B%2Fe6AlbNWkqZ9Sk5DUbtboASXKB%2FIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8SCNeBcI1H1HxSACrcA2Ivjs8gS4u9eqMvcSn4p42WUb6v7er6VuYSgIP9VAJs8WYcnWG7%2Fg2OeBZFq4iFmCwrvZiof99ed57pmvibRzQNdT4xWa3nM23bvK9gIckbRuoGPB1sJLOaOEX9QkLtGXhqmXtMvbNu6h3KXy%2BR5xW%2Bua1CMaM3E8EtcrAuSDbNATG%2Fd9TRHGlGuEID%2BRXvyDGchDfvKJqAI5DVMFxKgMSyZhcA40hoUl1772SvqUyNzEVqbQgoEIFwqCl7Rc7mNzkFMNjbYtR6UXI4XEf5%2BFKJITxhWOBfSwpezf1txBNUcDDMu0%2B3rJZDbJzmQ7x2PCbdhFVYox%2FSaGHXOTBUIvEAps9mPngqHYlZcXnxNhcDCyWaK4z%2BhU6rqM4QWf0hKXMgTetDFEJmnRIxh3O2TzvWuE9qhAb%2BXwUIy1yztv6KUH18wBikBUpYhtLWBDf%2FO%2FQRSBFhpwEK2pgI8yVq7VodY6La5r1JhkFO3ClzpXde018DtKgZpI9dn15UBi8Qq0YTw%2BPV1gQ9z69eLa6gtJZz7wvsz5dlA7n9HEfpgd3Jiu%2FtOPgMdTB9QdMuDRaue%2FQsmbbaKIkhWwmFblNndoDdHKf0Rt%2BmR7i2jFUzYJZ2MjKKWmp89VmuCUpNMPj7%2BsMGOqUBopXNFFgKDq66LjEabnJPmIXZV0L%2FSFkPS0uI9AcXCE5I94a8SO04YVXdottE1OdbdaguQ71RSmO1oX%2Fi%2B1yY2ZInKYMj%2B2kNebhllE4SJlVHjyu1%2BxuB9jJoge86WOte7DrfPqLp%2BDuGUbpWWB0%2FxWGl2e6Hxbc48%2Fe%2BFe6tezBJntoFJuCiCRLwwktZ8xEpqfRFBySerS%2BkOy%2B8cFI2t5jp6jP9&X-Amz-Signature=4c425ab84954c6beb30515bd5f2576950b8dca0d7de1c0d5ebec923405988a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQWP5EC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkb7JMNIc6DVHjYu9OrZj%2FfxrbvAthrsGa5y41Nr%2FyMQIgaJzdmOtcltZXVi%2B%2Fe6AlbNWkqZ9Sk5DUbtboASXKB%2FIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8SCNeBcI1H1HxSACrcA2Ivjs8gS4u9eqMvcSn4p42WUb6v7er6VuYSgIP9VAJs8WYcnWG7%2Fg2OeBZFq4iFmCwrvZiof99ed57pmvibRzQNdT4xWa3nM23bvK9gIckbRuoGPB1sJLOaOEX9QkLtGXhqmXtMvbNu6h3KXy%2BR5xW%2Bua1CMaM3E8EtcrAuSDbNATG%2Fd9TRHGlGuEID%2BRXvyDGchDfvKJqAI5DVMFxKgMSyZhcA40hoUl1772SvqUyNzEVqbQgoEIFwqCl7Rc7mNzkFMNjbYtR6UXI4XEf5%2BFKJITxhWOBfSwpezf1txBNUcDDMu0%2B3rJZDbJzmQ7x2PCbdhFVYox%2FSaGHXOTBUIvEAps9mPngqHYlZcXnxNhcDCyWaK4z%2BhU6rqM4QWf0hKXMgTetDFEJmnRIxh3O2TzvWuE9qhAb%2BXwUIy1yztv6KUH18wBikBUpYhtLWBDf%2FO%2FQRSBFhpwEK2pgI8yVq7VodY6La5r1JhkFO3ClzpXde018DtKgZpI9dn15UBi8Qq0YTw%2BPV1gQ9z69eLa6gtJZz7wvsz5dlA7n9HEfpgd3Jiu%2FtOPgMdTB9QdMuDRaue%2FQsmbbaKIkhWwmFblNndoDdHKf0Rt%2BmR7i2jFUzYJZ2MjKKWmp89VmuCUpNMPj7%2BsMGOqUBopXNFFgKDq66LjEabnJPmIXZV0L%2FSFkPS0uI9AcXCE5I94a8SO04YVXdottE1OdbdaguQ71RSmO1oX%2Fi%2B1yY2ZInKYMj%2B2kNebhllE4SJlVHjyu1%2BxuB9jJoge86WOte7DrfPqLp%2BDuGUbpWWB0%2FxWGl2e6Hxbc48%2Fe%2BFe6tezBJntoFJuCiCRLwwktZ8xEpqfRFBySerS%2BkOy%2B8cFI2t5jp6jP9&X-Amz-Signature=a2cf3103981785fcc2d6422c23d478717a1b4f8e993364ce1dd1595626824bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
