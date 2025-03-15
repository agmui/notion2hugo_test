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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6LUK46%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwOu8iwNHW6Hv8vcGaUu9Xe5sINGzEQhmdc8SdM3RrhgIhAPaJk8W4Y0CdtMxBq4u73Xfyq3KZCzQ62GiZC9NKqf7iKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSQXHy%2BJIzjgSQe7Qq3AMWwi7SnBzS3anWD9y3mLm0dcvg%2FrWoFanjAss3E4fc9gu6TAaZixRwm1qrsGnaU%2FtsdNIGDcFYNgDVHolCdxbu2Fkg15fGxV8%2B8V1fAY3AJuezppmCJqDKT2Zqk91QcTcPBjYouWq53QBhsG8QzFoFfv8%2BrhPYd1NVukOxrquUTR%2FtJkWJA4P7FVd%2FRVFSU8%2BwDlQrENMR6gPY29UFcwnnAIV%2ByQSrdG1vg1gIp4PDQLWubWDjZ%2Fjj%2FxJBehMkvPUQfWEz6kbxr24UCannwvyj0T%2FBTauBGw9SM0pnokWEZAlubE6r5R0XcSjfEifQFdOZtHLSGEF%2FFOiQUIvqXLwW6LC0xeg%2BxOIN7Wf1gBBcuLIlb8lVPIZx%2BfjoPNVfJiTH0JLvwzdx2MrlGbGkW45CCRtKdOctRY%2BLfJmUEfKPJr%2FAb%2Fa1yiomvI0YNZtFOKQZar%2BUQfkYgLab50zh3%2B21VlmsIgYj1ZqKzfqrrIjSnRl2cgFLh8H%2BKMJh%2FxnjZfzTALknPqCwInMKB05D%2FpQXNXdPsjUw4QRV3ernZw4UR07C9lOyJj9be0oXyuL35VpN9NK3qPRdv9DzWgW5osaMIqzrbwCzKVFf3XS2Yc%2BSb2ROFt2p1BU856oRpDCeq9O%2BBjqkAWtfLwwyg4HXh4u%2BsilFrefhdPPOLDIAzCGC6uIHbUOfKR77kOg8lDGiEWmYCiPRS3E%2B2qtW%2BppYRLp9I8sCEpzHsKsXTStjcYCjkByS9%2F8hVMJi7boZBYrb53jM4p8mGAN2H5QsZMHAXx9ovleU64XNTc%2FW3rtCdcc59dZ%2BKzE1FTbv57bq9cHLwqq%2BtvaUj1aq2l7efdWZE3WLcFYYUbav1Fv1&X-Amz-Signature=5faf536374c0bb3eb2184fd9b1a494a335f6ce32233489988959e55dda01b49a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6LUK46%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwOu8iwNHW6Hv8vcGaUu9Xe5sINGzEQhmdc8SdM3RrhgIhAPaJk8W4Y0CdtMxBq4u73Xfyq3KZCzQ62GiZC9NKqf7iKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSQXHy%2BJIzjgSQe7Qq3AMWwi7SnBzS3anWD9y3mLm0dcvg%2FrWoFanjAss3E4fc9gu6TAaZixRwm1qrsGnaU%2FtsdNIGDcFYNgDVHolCdxbu2Fkg15fGxV8%2B8V1fAY3AJuezppmCJqDKT2Zqk91QcTcPBjYouWq53QBhsG8QzFoFfv8%2BrhPYd1NVukOxrquUTR%2FtJkWJA4P7FVd%2FRVFSU8%2BwDlQrENMR6gPY29UFcwnnAIV%2ByQSrdG1vg1gIp4PDQLWubWDjZ%2Fjj%2FxJBehMkvPUQfWEz6kbxr24UCannwvyj0T%2FBTauBGw9SM0pnokWEZAlubE6r5R0XcSjfEifQFdOZtHLSGEF%2FFOiQUIvqXLwW6LC0xeg%2BxOIN7Wf1gBBcuLIlb8lVPIZx%2BfjoPNVfJiTH0JLvwzdx2MrlGbGkW45CCRtKdOctRY%2BLfJmUEfKPJr%2FAb%2Fa1yiomvI0YNZtFOKQZar%2BUQfkYgLab50zh3%2B21VlmsIgYj1ZqKzfqrrIjSnRl2cgFLh8H%2BKMJh%2FxnjZfzTALknPqCwInMKB05D%2FpQXNXdPsjUw4QRV3ernZw4UR07C9lOyJj9be0oXyuL35VpN9NK3qPRdv9DzWgW5osaMIqzrbwCzKVFf3XS2Yc%2BSb2ROFt2p1BU856oRpDCeq9O%2BBjqkAWtfLwwyg4HXh4u%2BsilFrefhdPPOLDIAzCGC6uIHbUOfKR77kOg8lDGiEWmYCiPRS3E%2B2qtW%2BppYRLp9I8sCEpzHsKsXTStjcYCjkByS9%2F8hVMJi7boZBYrb53jM4p8mGAN2H5QsZMHAXx9ovleU64XNTc%2FW3rtCdcc59dZ%2BKzE1FTbv57bq9cHLwqq%2BtvaUj1aq2l7efdWZE3WLcFYYUbav1Fv1&X-Amz-Signature=a5f6e4fd987c7519bf9743b7839b6f3801761a0be2ae4483b4b53201e0334c05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
