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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY62NSTX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Foi%2FBSCpGvVuYK2EGfPaXC8yy1OgmmUpXxBmrpxCSLwIhALl6xDFvv3Ff8v1DVw5A0CBcRP%2F4ZQZjVH8J%2F9XPNlMDKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw6N1pNjNybeYZ0NYq3AOva0Zc2S4%2Fu2UnK7gehRNv6jSg27aOb5bTEK6sFFopxH2EGD2%2BYc6c90kxaAoS4lIMXUU3q6MijOX%2BziI6l%2BQR3uCh57wfLqoXYq6iNYU8NCLpzR5qtHJ9I%2BsJ3lEzYxA2%2BsufcZD9UeWygblZ5Ecygdjnsp%2BrlLBL2dnDluSSyho5EljIQtVa4OAkpFhvidyoT%2Fd3UInHp%2FSW12ke4i5HNy%2BAw%2FWebJxFTKjCJAAROZkXM7vYVby%2BVRF88IhrIMi61IgcYxrFmjjE48yFDGn6p8X9SkrZ3rZbWjQDY0DxATWaR8qqLhnHzIp7MW2b4TYjIY1TVeIFKkWF%2FdnZQTY3Hwl3SEs2HhjwI45VtPRPjhVmYxDOU1IZg2e%2FuYA04JwKXfqH%2BTpisAfo686DX4qamGytFnja6humZXQpFM65BqG8%2B6zxb8jCRROiXBYitLrO3ryQ%2BUqTAhv4BDWzdb68Vw4BUXVQfE9cAzjyPf6z79Lj4isFtMKlvrVwXYcmGQoToYOB7Prq9aYfcF0S%2BOsQD6iiB9639gIbowr4btNVvll2EzEHnpUTnaJlhZ9gX1o0EJqANPiJTHvkZLavyTOq4lTyj4cUZArOqbG1p5CZQ28p6126u4lHRGCKbjC3yZ%2B%2BBjqkAeQafiOTFIAnbiXnR2gE49xB6OaunYpjGpiTrxwqC05KgAAkrJEoAnkCEf2jMgvNyNAc1sLAZaJdHa3IAEIU0Cc%2BzIiwZ6qA4Dmf80ESUpNQCGe1mAFQv5%2BvvB611kvzv%2FXP7YbhwhH9V3OPkLRXLY9Qa%2FkYoduzTxFtktlNumOT4%2FKUAZqYInnKW%2F8H28itjqqnFX6TMOZ%2BZz7pJp7t2FYJFTZK&X-Amz-Signature=f89de2d350e544492f2bd6d32b2012b1863b5832123dba91973ccebf71af96d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY62NSTX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Foi%2FBSCpGvVuYK2EGfPaXC8yy1OgmmUpXxBmrpxCSLwIhALl6xDFvv3Ff8v1DVw5A0CBcRP%2F4ZQZjVH8J%2F9XPNlMDKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw6N1pNjNybeYZ0NYq3AOva0Zc2S4%2Fu2UnK7gehRNv6jSg27aOb5bTEK6sFFopxH2EGD2%2BYc6c90kxaAoS4lIMXUU3q6MijOX%2BziI6l%2BQR3uCh57wfLqoXYq6iNYU8NCLpzR5qtHJ9I%2BsJ3lEzYxA2%2BsufcZD9UeWygblZ5Ecygdjnsp%2BrlLBL2dnDluSSyho5EljIQtVa4OAkpFhvidyoT%2Fd3UInHp%2FSW12ke4i5HNy%2BAw%2FWebJxFTKjCJAAROZkXM7vYVby%2BVRF88IhrIMi61IgcYxrFmjjE48yFDGn6p8X9SkrZ3rZbWjQDY0DxATWaR8qqLhnHzIp7MW2b4TYjIY1TVeIFKkWF%2FdnZQTY3Hwl3SEs2HhjwI45VtPRPjhVmYxDOU1IZg2e%2FuYA04JwKXfqH%2BTpisAfo686DX4qamGytFnja6humZXQpFM65BqG8%2B6zxb8jCRROiXBYitLrO3ryQ%2BUqTAhv4BDWzdb68Vw4BUXVQfE9cAzjyPf6z79Lj4isFtMKlvrVwXYcmGQoToYOB7Prq9aYfcF0S%2BOsQD6iiB9639gIbowr4btNVvll2EzEHnpUTnaJlhZ9gX1o0EJqANPiJTHvkZLavyTOq4lTyj4cUZArOqbG1p5CZQ28p6126u4lHRGCKbjC3yZ%2B%2BBjqkAeQafiOTFIAnbiXnR2gE49xB6OaunYpjGpiTrxwqC05KgAAkrJEoAnkCEf2jMgvNyNAc1sLAZaJdHa3IAEIU0Cc%2BzIiwZ6qA4Dmf80ESUpNQCGe1mAFQv5%2BvvB611kvzv%2FXP7YbhwhH9V3OPkLRXLY9Qa%2FkYoduzTxFtktlNumOT4%2FKUAZqYInnKW%2F8H28itjqqnFX6TMOZ%2BZz7pJp7t2FYJFTZK&X-Amz-Signature=773f9bd7145df361b924f7ac8efbec8e6f5e5c49a7fd70d4861f73c94c57fe61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
