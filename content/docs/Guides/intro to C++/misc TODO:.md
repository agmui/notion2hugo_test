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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVV2ROLG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD7tJysshkurGYOEqNMhM5h0UBN6iNY%2BG5Tgdld9tnYKwIgMjNooQPk3EDLpE9pCLFioRCe95%2B%2B0ZBgiTYMzqgPIzMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqVD%2Bfec0skf%2FE5JCrcAxnA2Z4BhbvptvLFDEte8aiboK4sOeoIZ2KPfcojBCET%2B17DI9MQ5W26tphcoH6JmcEvMDwK7Z7BmVKJLn3TZ%2F3feU2IKKWBdbNT%2BMKypxOX0P%2Fftihe6aQdpJIq0%2FsDiy5dWt5%2BXMD84poCScc07qqzFEe5rgMR1U3CABwmEavzdh47uRSQkIJB5V4MDZpHqn1VGUIS5hVngDJg5Tj4%2Fl3yFPuoetW%2B0QvyAG19tSXt64Fo5dP9cJVvgRirEmZ0OIlIA4w1GIm8G8UJHLs05k68syz4iihzSTX2p3E6pndTFucFSKE4zxpM3c%2FUDOQjFW%2BrADrU6LEYwE%2BvwEkCN3sI184HLL0g3HCRE1P7O7Q7MmjL89LKpYz5jdh5nx%2Bi3wU0TBB%2BmzMe2jorsD30%2BeNRMJykWTy8ylx%2BtEZTwmTj7%2FkgM5gXdNIL8%2BFqAtUqCZKA%2FUlUdi9Yo1nljE2vQ5JEbqeetuZ2upfpvS%2FUa%2FinnXg2rZ9Ii3Uk0vKG94EnoVtf9N1wZ1PhnH3N7idTqvsZ85g2bnvelocu2IdajTq7jNKrxW7OOyrKcxdY2bEpBYeJ7JfL13YJbWahwBWSIwIwBRTTEKpbDpeE7%2FZmW0DviIcthjqk5XfxJBjMMKu09sEGOqUBRHNiCSm0uK6BJlljajfvJAjFp%2Fww9JlAVakfY09zKzvDCQnIJypdqZBwJQ2cIzBaZ%2FQa84jblsALsjQ7R92brnGNc9YKExQwLYDeApYZsnDLojMFx%2FyqsQRO0pQHYjHk09uWLGgUqo7ngZOebIk4iUWPvA7rfOoT4hNajWVTqc35f9ztpe%2FlSO3kUX9%2B%2BME%2FTgQ1551SXX3jo3nmI3fXRD6uDW5u&X-Amz-Signature=eac834980d8b5b2496589b59f7e253d34ccac4c4dcd99fc16bb0a14990bde518&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVV2ROLG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD7tJysshkurGYOEqNMhM5h0UBN6iNY%2BG5Tgdld9tnYKwIgMjNooQPk3EDLpE9pCLFioRCe95%2B%2B0ZBgiTYMzqgPIzMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqVD%2Bfec0skf%2FE5JCrcAxnA2Z4BhbvptvLFDEte8aiboK4sOeoIZ2KPfcojBCET%2B17DI9MQ5W26tphcoH6JmcEvMDwK7Z7BmVKJLn3TZ%2F3feU2IKKWBdbNT%2BMKypxOX0P%2Fftihe6aQdpJIq0%2FsDiy5dWt5%2BXMD84poCScc07qqzFEe5rgMR1U3CABwmEavzdh47uRSQkIJB5V4MDZpHqn1VGUIS5hVngDJg5Tj4%2Fl3yFPuoetW%2B0QvyAG19tSXt64Fo5dP9cJVvgRirEmZ0OIlIA4w1GIm8G8UJHLs05k68syz4iihzSTX2p3E6pndTFucFSKE4zxpM3c%2FUDOQjFW%2BrADrU6LEYwE%2BvwEkCN3sI184HLL0g3HCRE1P7O7Q7MmjL89LKpYz5jdh5nx%2Bi3wU0TBB%2BmzMe2jorsD30%2BeNRMJykWTy8ylx%2BtEZTwmTj7%2FkgM5gXdNIL8%2BFqAtUqCZKA%2FUlUdi9Yo1nljE2vQ5JEbqeetuZ2upfpvS%2FUa%2FinnXg2rZ9Ii3Uk0vKG94EnoVtf9N1wZ1PhnH3N7idTqvsZ85g2bnvelocu2IdajTq7jNKrxW7OOyrKcxdY2bEpBYeJ7JfL13YJbWahwBWSIwIwBRTTEKpbDpeE7%2FZmW0DviIcthjqk5XfxJBjMMKu09sEGOqUBRHNiCSm0uK6BJlljajfvJAjFp%2Fww9JlAVakfY09zKzvDCQnIJypdqZBwJQ2cIzBaZ%2FQa84jblsALsjQ7R92brnGNc9YKExQwLYDeApYZsnDLojMFx%2FyqsQRO0pQHYjHk09uWLGgUqo7ngZOebIk4iUWPvA7rfOoT4hNajWVTqc35f9ztpe%2FlSO3kUX9%2B%2BME%2FTgQ1551SXX3jo3nmI3fXRD6uDW5u&X-Amz-Signature=9d628799fafa2d0bd494a34df9c4e3e6d35569d35d7e18dd6ef6e4894a57f623&X-Amz-SignedHeaders=host&x-id=GetObject)

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
