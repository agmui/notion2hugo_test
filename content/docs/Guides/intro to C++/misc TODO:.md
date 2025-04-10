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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4EP53U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH5YywPtF75kNJzq7LK2MmMVcJvcOkJeajvXZn7oT4fzAiEA6E%2Bo9BLfDHTKqv6GMUf4%2BhQZE1CGgSxZxq3Deni4YmYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb6IbAWQ%2Fr2j%2FqqBSrcAzn6lA9In9VHJaz9fe8EuEucpp7TD7np%2BQvzwTYihOuLVa%2FGEiGmmpj0O3MxZQ1aL4wuzcCx7cs6WUCUGBUQK6YF%2Fu2ZI7x74QFfMeSmohPVngvXSPICy2L1egJih6rYYYL5mpERCx42ofPY0ManZGIqUyIE1urLDoCJj%2Bw4WWTPLsR%2Bb2m6temP2rkm9weBV%2Bq2L9H9Q34F7Np7lPwbqGNZVGsv9R0KPbI9KK4Y1FA1ohbDn%2FPzppzhlmDchAvwxdMIVOPNyl2Bpy6BAApMgEBjMKgMkk0XS%2F1zPreOttg4HUO6pAvibFIzGnxCff%2FaBCwxOzoMYioR0K0X1byObGj%2FHV1N0Q%2Bc5CeV2C2y34gEx%2B8qsQ8IippHQxpOg7FeLkvkkQgZVbCqU8Tw96FH6x7I6aCTh7aABagXvmG%2Fq3nDoYMoluzoizZXDNogiZGfmt7IddjFOsxFX3Z%2FYXjsh4w3whZ%2BsYALV9i93e2jZcG0cIj%2BK1gHL0PnuFVKOox0PzUsHgreMgE0WAgFvx%2Fkq%2B0fpbE7zao2ux4y9Dvk4zoCsb%2BvIIONuTtmcUvRGDAUGnfzzX7BAklDCGwlLAQgfG8XGX8nNUI6%2F2pvbPuAPSI%2FeiKuFCkYW413SrCcMNWH4L8GOqUBGLJSU2TXTREvt0lQotvvpCgc%2FOSJnBTuWo0L9%2FLx70ORpW52j%2Fr%2BGCNLAz5DLBdFv7LwyoAlsX0WjNM2jEK7jwzsWv5PmPzhdPxyiKnzJ1NrTYypW9Dkyi3HBQkm5gMXm5BNQ2CfIN4pqT5sWzf10nUns%2FvWvknjIklzMN1KBkzkVbnKPlnqx6aqcio1tdcF65LMGpBQl%2BYffc7EUSZNQm8ihIKj&X-Amz-Signature=7de9fe6aaa5a4bf29757cfa3369928d49835c52fca2d91db785f0bcd28ff40a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4EP53U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH5YywPtF75kNJzq7LK2MmMVcJvcOkJeajvXZn7oT4fzAiEA6E%2Bo9BLfDHTKqv6GMUf4%2BhQZE1CGgSxZxq3Deni4YmYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb6IbAWQ%2Fr2j%2FqqBSrcAzn6lA9In9VHJaz9fe8EuEucpp7TD7np%2BQvzwTYihOuLVa%2FGEiGmmpj0O3MxZQ1aL4wuzcCx7cs6WUCUGBUQK6YF%2Fu2ZI7x74QFfMeSmohPVngvXSPICy2L1egJih6rYYYL5mpERCx42ofPY0ManZGIqUyIE1urLDoCJj%2Bw4WWTPLsR%2Bb2m6temP2rkm9weBV%2Bq2L9H9Q34F7Np7lPwbqGNZVGsv9R0KPbI9KK4Y1FA1ohbDn%2FPzppzhlmDchAvwxdMIVOPNyl2Bpy6BAApMgEBjMKgMkk0XS%2F1zPreOttg4HUO6pAvibFIzGnxCff%2FaBCwxOzoMYioR0K0X1byObGj%2FHV1N0Q%2Bc5CeV2C2y34gEx%2B8qsQ8IippHQxpOg7FeLkvkkQgZVbCqU8Tw96FH6x7I6aCTh7aABagXvmG%2Fq3nDoYMoluzoizZXDNogiZGfmt7IddjFOsxFX3Z%2FYXjsh4w3whZ%2BsYALV9i93e2jZcG0cIj%2BK1gHL0PnuFVKOox0PzUsHgreMgE0WAgFvx%2Fkq%2B0fpbE7zao2ux4y9Dvk4zoCsb%2BvIIONuTtmcUvRGDAUGnfzzX7BAklDCGwlLAQgfG8XGX8nNUI6%2F2pvbPuAPSI%2FeiKuFCkYW413SrCcMNWH4L8GOqUBGLJSU2TXTREvt0lQotvvpCgc%2FOSJnBTuWo0L9%2FLx70ORpW52j%2Fr%2BGCNLAz5DLBdFv7LwyoAlsX0WjNM2jEK7jwzsWv5PmPzhdPxyiKnzJ1NrTYypW9Dkyi3HBQkm5gMXm5BNQ2CfIN4pqT5sWzf10nUns%2FvWvknjIklzMN1KBkzkVbnKPlnqx6aqcio1tdcF65LMGpBQl%2BYffc7EUSZNQm8ihIKj&X-Amz-Signature=05b7522d9cb5864c8f493b9f349b466bbec74b0ade7b5f342899cf3c6959f609&X-Amz-SignedHeaders=host&x-id=GetObject)

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
