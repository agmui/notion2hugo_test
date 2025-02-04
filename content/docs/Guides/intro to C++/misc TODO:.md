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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIVFQSS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID4aVVuJPUYSMnEGxGZhyPdO6kxl0mb0bI4P8VrZlfICAiEAqp5Nn%2F73EO8hPp5QntBjJ4ZxgF%2Bo5U7LoclgVG425skq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIRl2YLRmKgvD5YHRircA7DKd8YpsW8YvTqC8nYk%2FGBocCPfi9N1BGrKRjz6FLsBNn1oJj%2BKaDA7bE7RcamSt%2BPhxD61H%2FJbdufC1ZF4dzNf46iH5SAPoefOpIgq9U%2BXOmIvZDLQnQLx1KsRFdis5jxyPVkDZV33wEkh0RYDmDifUChgPs1aLokKaHBWjhhUpw9qVGi2segLSwU27JYGc8wND%2FXLnPXzc56EXNBYZ4MsHeettNk%2FfuG1a9rRS6%2FOT7PsIkWQtXjXAGA0J4b4xyfndcLiInlPwBpMLJi2o9xBk0EClfLz6CKrzWQZHtcCat8bn37Fxyw%2BCJCmdMJJuTdg5Geeic%2BosVjWezr6EwWJTvqEbnKz%2BOD6QovXNb5fE8DTomMqtHttfdUsWwsq6%2BnUidb2DCobWfLmGyrBe4z5dvLiFMg%2FVp%2FyO0kQOwryX3pXB2qnwYSQ%2FPjt3M7l8PaUXGP%2FE4blGbwCoKE4xQZ8EG48p968c7XBbVAk9cW4DMuFBmLVtUYRs8lW6K771QXpmxRj8NLMoXbsAX%2FKUgbSxU4ndOLhI2DwOzs7JdG0j6onfF%2BWLfwv8nFU0lQCquH6HuvbgLW549%2FExatcSGxz37ENEg5Gn%2B9WKBcAkYK7DOvwCVdiZRqLBdzwMKmVhb0GOqUB6esX9kPMXZ%2FYnP3fg%2BeZws2VQCmHRBWhkljh%2BhP%2BTUKApk8aUf557lHEoa6DyMWLCY5rtxYLdOjZx8xpVBXLTZCbZ0SP523EMgvdqm4ly75RjceAz2XnMklRSQymYyaJtHNQas%2F%2F6Qbe%2BiVA0PJKBCwv4WlJH%2BJTUvxGFZLTQzFt%2BbMUZ8lSTOZAZ%2FNeyyEeWHmkssuXC8T1uqa0OSZ6jW1xA56v&X-Amz-Signature=398dcd66e4132309bc2663a7fe7b3ea446e1ef84dfb5975b629ac0eefa98380f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIVFQSS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID4aVVuJPUYSMnEGxGZhyPdO6kxl0mb0bI4P8VrZlfICAiEAqp5Nn%2F73EO8hPp5QntBjJ4ZxgF%2Bo5U7LoclgVG425skq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIRl2YLRmKgvD5YHRircA7DKd8YpsW8YvTqC8nYk%2FGBocCPfi9N1BGrKRjz6FLsBNn1oJj%2BKaDA7bE7RcamSt%2BPhxD61H%2FJbdufC1ZF4dzNf46iH5SAPoefOpIgq9U%2BXOmIvZDLQnQLx1KsRFdis5jxyPVkDZV33wEkh0RYDmDifUChgPs1aLokKaHBWjhhUpw9qVGi2segLSwU27JYGc8wND%2FXLnPXzc56EXNBYZ4MsHeettNk%2FfuG1a9rRS6%2FOT7PsIkWQtXjXAGA0J4b4xyfndcLiInlPwBpMLJi2o9xBk0EClfLz6CKrzWQZHtcCat8bn37Fxyw%2BCJCmdMJJuTdg5Geeic%2BosVjWezr6EwWJTvqEbnKz%2BOD6QovXNb5fE8DTomMqtHttfdUsWwsq6%2BnUidb2DCobWfLmGyrBe4z5dvLiFMg%2FVp%2FyO0kQOwryX3pXB2qnwYSQ%2FPjt3M7l8PaUXGP%2FE4blGbwCoKE4xQZ8EG48p968c7XBbVAk9cW4DMuFBmLVtUYRs8lW6K771QXpmxRj8NLMoXbsAX%2FKUgbSxU4ndOLhI2DwOzs7JdG0j6onfF%2BWLfwv8nFU0lQCquH6HuvbgLW549%2FExatcSGxz37ENEg5Gn%2B9WKBcAkYK7DOvwCVdiZRqLBdzwMKmVhb0GOqUB6esX9kPMXZ%2FYnP3fg%2BeZws2VQCmHRBWhkljh%2BhP%2BTUKApk8aUf557lHEoa6DyMWLCY5rtxYLdOjZx8xpVBXLTZCbZ0SP523EMgvdqm4ly75RjceAz2XnMklRSQymYyaJtHNQas%2F%2F6Qbe%2BiVA0PJKBCwv4WlJH%2BJTUvxGFZLTQzFt%2BbMUZ8lSTOZAZ%2FNeyyEeWHmkssuXC8T1uqa0OSZ6jW1xA56v&X-Amz-Signature=654bab1d6ce6f01a67762e6c05bedfb9d95883967b3669e76b8ad333ada12d50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
