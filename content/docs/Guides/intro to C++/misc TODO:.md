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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWYVXMN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDV36zGRHVznZq9EluTu5y29LZePOZLN4WC4YI5KhoFAiAD9FiHwHNefUHsIE%2FvOLh7p6p%2BpNYX590rXU8fvb6O3CqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQGnOYpT6eaDLJRNiKtwDbiggBvW1gEg2CYBbGwyl4NkX43ISz037GwQgeukb%2Bo7OajgmCQRcRNzVZhL%2BabljSpOyCSPQIYu7dnn9hoQ53wFsrKE8H6Tnom7u2wyTOGsQO2L3%2FXNnC2KKglInAvQzzjHxggOP30l%2BcKdIJi8QigkFJEh3F%2FlPVzHF%2BvQNSfpDL1GXaQqg7zsf3FPpSdOSpjoVj9wB2Vv%2BFT98%2Bm%2B6GZEYbPi9mIx%2BHHiuV1iddWhfPNBMqlYNP36U5FoOiyUajQV0tDVGPsoqXu8VKgpjHSmnrJGljOicptcCkZrFhKzcSru1HSwducqNNc9IKX%2FzNjXiiClYXadt1%2Fx3EwcSMf1vU5uyRC9up17%2FEKxOjmNza0UH7M8dJyNsf3iiW8v416nKwGQhUCLoN8H3x%2BaL6Qcpm1ANm61vV4V5yvS8OwY2YXJTLVxWRpMtJaY0txz4ft7AjCoNmdCBhBturDS0IkjE7E%2BrFRntTUTrTCP%2BHk0ehdzKDY891agJicHKlJT1VgYoft0qOMVV0F0NwmpBj3hpMq6cPd8FDON6NBxdvd4OMOX%2BTAYtE%2FXzFWmqS8YwR81ndmPyS%2BZgBwl4add7FFQ%2FE2bjTbbN2U8gdLOWpLi0bRyz6u6iBULCxAMwuMCAvQY6pgEujxJA7WK49EZ9ktoTAhTtdP0kohWq%2BtKnrLsGoHzsu1D21ub3LmhgEnnOw%2BRGTwZmFQvSmu3MVg3u7W1CkgiPn0S3LkI9B%2B14ZOIb9ex5Yg%2FqKmoBFz01IGk6OULdnaLd%2FjY0BLhS19mMRLY272wOSsJrHAV3xvdyPyUnw9pxuIGBG8IObhGGiu4CrM37xEIDS6Tkk%2FqWXk9irh%2BexciI9kniDALU&X-Amz-Signature=63216d57fa68d41bd4944f0d01051b1a440058dac0847441620ef2781fe42a95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWYVXMN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDV36zGRHVznZq9EluTu5y29LZePOZLN4WC4YI5KhoFAiAD9FiHwHNefUHsIE%2FvOLh7p6p%2BpNYX590rXU8fvb6O3CqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQGnOYpT6eaDLJRNiKtwDbiggBvW1gEg2CYBbGwyl4NkX43ISz037GwQgeukb%2Bo7OajgmCQRcRNzVZhL%2BabljSpOyCSPQIYu7dnn9hoQ53wFsrKE8H6Tnom7u2wyTOGsQO2L3%2FXNnC2KKglInAvQzzjHxggOP30l%2BcKdIJi8QigkFJEh3F%2FlPVzHF%2BvQNSfpDL1GXaQqg7zsf3FPpSdOSpjoVj9wB2Vv%2BFT98%2Bm%2B6GZEYbPi9mIx%2BHHiuV1iddWhfPNBMqlYNP36U5FoOiyUajQV0tDVGPsoqXu8VKgpjHSmnrJGljOicptcCkZrFhKzcSru1HSwducqNNc9IKX%2FzNjXiiClYXadt1%2Fx3EwcSMf1vU5uyRC9up17%2FEKxOjmNza0UH7M8dJyNsf3iiW8v416nKwGQhUCLoN8H3x%2BaL6Qcpm1ANm61vV4V5yvS8OwY2YXJTLVxWRpMtJaY0txz4ft7AjCoNmdCBhBturDS0IkjE7E%2BrFRntTUTrTCP%2BHk0ehdzKDY891agJicHKlJT1VgYoft0qOMVV0F0NwmpBj3hpMq6cPd8FDON6NBxdvd4OMOX%2BTAYtE%2FXzFWmqS8YwR81ndmPyS%2BZgBwl4add7FFQ%2FE2bjTbbN2U8gdLOWpLi0bRyz6u6iBULCxAMwuMCAvQY6pgEujxJA7WK49EZ9ktoTAhTtdP0kohWq%2BtKnrLsGoHzsu1D21ub3LmhgEnnOw%2BRGTwZmFQvSmu3MVg3u7W1CkgiPn0S3LkI9B%2B14ZOIb9ex5Yg%2FqKmoBFz01IGk6OULdnaLd%2FjY0BLhS19mMRLY272wOSsJrHAV3xvdyPyUnw9pxuIGBG8IObhGGiu4CrM37xEIDS6Tkk%2FqWXk9irh%2BexciI9kniDALU&X-Amz-Signature=393d2934dab376ea574cf0f7ae579b48b5487162b856225163d55c4d88c21e97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
