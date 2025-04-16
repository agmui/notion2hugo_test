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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJZ65YR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmry3C9vvLQ0bIrX9r9RUvA3XqngBJvMhXfhFqMMKnEAiBIG9aAkC6K2fuxG66WJEmwiO3eBHtRAZ85WyVi5MsNVir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMncnoPFrGlDuwclbGKtwDoc%2BS9EGtrsHwtYhtKJY1c5l%2BgO1ouYOzvyukt%2BcsVTTZvpct2I4om4GWl6Xw%2BqqH%2BkPTsk%2F%2FqrIFCSiNmsPxpw%2BtYje0IEB54cfJo1RjpCOQQGroyl%2FeeGSYb7FMt4IfqpyqK5%2Fp1VudhcHTTLoEQ08uire8n98YjTZQJzs3X%2BFGi1nZIncOQtQndRNGOJbPyfHbuvhcflNlmUTToXTe7sanA%2BHod6xvyOIbh5RY6vNVMYeP%2BURudCcu%2FnOtfP%2BVGPodWxoKpNaBVMJcOmsRjaRBvOJVJh7wf8Gc0EJZiWrPDQiMfcMjxdCI5A%2BAtpGZEv99MvKMuXtFcMjXAzLiw0PwzhASonyeEhMpK%2F3lgnijP95S0M%2FVEjXWIU79c3TT3yUEz2nLKGR8qjNany%2Fai1UvH%2FQZEn5IC%2FjHJ78sTZJlL8g%2F0ZGRd%2BtzJJjwOZZFzXbB0oqHyoFbM29wftOP%2FogzBhj3WeGD3v8%2F8g9TwC2TcNMQeFHapByEh%2FptfOvTcDKfY5syHD3LPxzEpZzNA3JamnqMa7VhcKvfARm%2BxGJPzfKRE2nVZe9dfaEbs%2BrKFgxbdhTQA9czYe%2FRxYaDGhhDYMsedrZ%2BvnJyYWhL6V0rVkHY6C1ohd9Yy04wnsb%2BvwY6pgEpgVYRPoApfd%2FJHIForpTiZ2ySZ6gUxegvhEaXESe50ZRu6tQCT8sLFrPVvzhC1yQbAuhpl%2FOi40JlzANhggzb7gSUAAA90sO7Bcjro2nxVOvIrC4FwZpeksdpxG0VeBO%2BZ9Lom6gikHaV4%2FG7yW2xaNw%2FD5LCd2BG4ySYFK3CrrOKRJowE70svZFne5cP6wNjWpStLLfTGx8ri5oH0Y%2BAzQbatNW9&X-Amz-Signature=cd9f3269b02f54e80e712d9eaa0538316b814a647b129f749117f7a983087048&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJZ65YR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmry3C9vvLQ0bIrX9r9RUvA3XqngBJvMhXfhFqMMKnEAiBIG9aAkC6K2fuxG66WJEmwiO3eBHtRAZ85WyVi5MsNVir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMncnoPFrGlDuwclbGKtwDoc%2BS9EGtrsHwtYhtKJY1c5l%2BgO1ouYOzvyukt%2BcsVTTZvpct2I4om4GWl6Xw%2BqqH%2BkPTsk%2F%2FqrIFCSiNmsPxpw%2BtYje0IEB54cfJo1RjpCOQQGroyl%2FeeGSYb7FMt4IfqpyqK5%2Fp1VudhcHTTLoEQ08uire8n98YjTZQJzs3X%2BFGi1nZIncOQtQndRNGOJbPyfHbuvhcflNlmUTToXTe7sanA%2BHod6xvyOIbh5RY6vNVMYeP%2BURudCcu%2FnOtfP%2BVGPodWxoKpNaBVMJcOmsRjaRBvOJVJh7wf8Gc0EJZiWrPDQiMfcMjxdCI5A%2BAtpGZEv99MvKMuXtFcMjXAzLiw0PwzhASonyeEhMpK%2F3lgnijP95S0M%2FVEjXWIU79c3TT3yUEz2nLKGR8qjNany%2Fai1UvH%2FQZEn5IC%2FjHJ78sTZJlL8g%2F0ZGRd%2BtzJJjwOZZFzXbB0oqHyoFbM29wftOP%2FogzBhj3WeGD3v8%2F8g9TwC2TcNMQeFHapByEh%2FptfOvTcDKfY5syHD3LPxzEpZzNA3JamnqMa7VhcKvfARm%2BxGJPzfKRE2nVZe9dfaEbs%2BrKFgxbdhTQA9czYe%2FRxYaDGhhDYMsedrZ%2BvnJyYWhL6V0rVkHY6C1ohd9Yy04wnsb%2BvwY6pgEpgVYRPoApfd%2FJHIForpTiZ2ySZ6gUxegvhEaXESe50ZRu6tQCT8sLFrPVvzhC1yQbAuhpl%2FOi40JlzANhggzb7gSUAAA90sO7Bcjro2nxVOvIrC4FwZpeksdpxG0VeBO%2BZ9Lom6gikHaV4%2FG7yW2xaNw%2FD5LCd2BG4ySYFK3CrrOKRJowE70svZFne5cP6wNjWpStLLfTGx8ri5oH0Y%2BAzQbatNW9&X-Amz-Signature=94d7897752aa1ea9287c03d34e42d656e7c65938e2a8e5ce54b9f4547f262049&X-Amz-SignedHeaders=host&x-id=GetObject)

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
