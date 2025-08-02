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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSJ6JDA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpuja38r6IWUKT%2Ff44W8gd2iIbfdUsXkb3ZMgeTCA8wIhAMk2RAWPt9VYp66%2BgabJq31J5uOEGEeOpR6xe99tuDYpKv8DCBwQABoMNjM3NDIzMTgzODA1IgyimGY3Xz94wPrbB2Yq3AMLEhcnhbljGBXstLtSj%2BahprZBvNc7Pm0P%2BUy342jbkmkRKrLE14CAR8pimbixR1QNvDTpDBN6fOlXKsKKI2kzU6qUwMSoRXN5PjiYOQkofn6QWgf%2BJQ3UOACfZGjfyTWtrblxe%2B1hrhRSM7%2BEYfFOb6ygu7YOkK%2FYaa72bdRFCHLWQhPFcAiOrSnLm3Ibx%2FzDt096jW9k%2FX8Me%2FNR7a1P4abGD6bbgL6hMd22LtG0H6Ty6N4YyvenHYmgJnCg%2BShZ3DdNCuhU48CIoCy%2Bq6m0KyHPk2ng7YvfDabYYn9HcyjwWNUM5z%2Fv9Ww5SRv7hoRo3oOSo31y863Q6%2BzN9kcDyDTcMJrZOfJHGhqOxK7faYBB3LPzsagXIT1ELVg9n2iQ1aSco9LW49omV5SJRNHFBvoSMbYAXuB049CggJUqn2sKDkkJSiaErOCm2sh8Dt65kFsAddhIchvrwsLqEpBoPHp4mUqMKC76X6J0r3HtljIPMj6JtxZBeLVorRBFGwsleUj2pEov0NSyl8Hm1mUqqKjdAn6hV22miJDVJUL6UWI%2Bq5RvsGgwIdAqSp1ZVVhQ0cD%2Fjo24KuPQ0RR65qrZtDmZklWd5mvDlj%2BnrqWjGNH5mxMHl1vXBzsQ3TDJw7nEBjqkAU1erhbYSwtsK7cr5o%2FCYWkgDpaJHzMVqP3BP48eChvdnicX72CboQb1X1CP9MQTa4GeQrxzSiXcO9S9hWQ1HkIgEcqF1isUXTyM9gUve1UrQ2jfBv19S%2Fm38%2B1UWF7iqcRC7WnnSU7bwlj5nzcrjHV4Pg%2BAW3tACmCcnMZ5GiQF%2B%2FYQ1lj%2FP0P0jFS5%2BHDchTBitrE0KkRaiKCRiJAFK1mP63VF&X-Amz-Signature=b791f65c090871ebfbebc8452bd820ac2182ca1ec09f8ded37873e4a5d8d893b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSJ6JDA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpuja38r6IWUKT%2Ff44W8gd2iIbfdUsXkb3ZMgeTCA8wIhAMk2RAWPt9VYp66%2BgabJq31J5uOEGEeOpR6xe99tuDYpKv8DCBwQABoMNjM3NDIzMTgzODA1IgyimGY3Xz94wPrbB2Yq3AMLEhcnhbljGBXstLtSj%2BahprZBvNc7Pm0P%2BUy342jbkmkRKrLE14CAR8pimbixR1QNvDTpDBN6fOlXKsKKI2kzU6qUwMSoRXN5PjiYOQkofn6QWgf%2BJQ3UOACfZGjfyTWtrblxe%2B1hrhRSM7%2BEYfFOb6ygu7YOkK%2FYaa72bdRFCHLWQhPFcAiOrSnLm3Ibx%2FzDt096jW9k%2FX8Me%2FNR7a1P4abGD6bbgL6hMd22LtG0H6Ty6N4YyvenHYmgJnCg%2BShZ3DdNCuhU48CIoCy%2Bq6m0KyHPk2ng7YvfDabYYn9HcyjwWNUM5z%2Fv9Ww5SRv7hoRo3oOSo31y863Q6%2BzN9kcDyDTcMJrZOfJHGhqOxK7faYBB3LPzsagXIT1ELVg9n2iQ1aSco9LW49omV5SJRNHFBvoSMbYAXuB049CggJUqn2sKDkkJSiaErOCm2sh8Dt65kFsAddhIchvrwsLqEpBoPHp4mUqMKC76X6J0r3HtljIPMj6JtxZBeLVorRBFGwsleUj2pEov0NSyl8Hm1mUqqKjdAn6hV22miJDVJUL6UWI%2Bq5RvsGgwIdAqSp1ZVVhQ0cD%2Fjo24KuPQ0RR65qrZtDmZklWd5mvDlj%2BnrqWjGNH5mxMHl1vXBzsQ3TDJw7nEBjqkAU1erhbYSwtsK7cr5o%2FCYWkgDpaJHzMVqP3BP48eChvdnicX72CboQb1X1CP9MQTa4GeQrxzSiXcO9S9hWQ1HkIgEcqF1isUXTyM9gUve1UrQ2jfBv19S%2Fm38%2B1UWF7iqcRC7WnnSU7bwlj5nzcrjHV4Pg%2BAW3tACmCcnMZ5GiQF%2B%2FYQ1lj%2FP0P0jFS5%2BHDchTBitrE0KkRaiKCRiJAFK1mP63VF&X-Amz-Signature=0e9d41ef14f43eeac421cf7069005e209556591f73168fccdd47af8e957abf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
