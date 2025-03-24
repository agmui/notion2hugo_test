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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRB6AYNU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqESHj42z6eSEARkJ8NmE9JV3UGY077LMnOS84ryjKGQIhAP5iaiNQHHXGOvv8QY4Okpce0V1TYlVvsjWzhn6%2FOZ0MKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xu4ji9DZQ2Pla78q3APTAsU3OIHEGXIYNzyogO5gx1ClTjB2ZlncimxhksZ3go0iJETO2pkbZQXmT%2B5xyl3VRqSETAtbDXeiaEDBKunTooyuhe6jDRpVliXTvbPqSoOML7KxGOIk3G5i1%2F9hakhgcahocjALDSbVLvMIbfmFIwHNOGIXsZe4y%2BVS%2Bk7CTexTRDVHGedvdeXpNpFQ%2FQVfIXcWqsP%2FnpRb%2FxYPh5s5gAukYUp%2B%2FqHcZTzJ96byTbnEN8tzMQtHKGQIak%2BrTb%2Bw6mloFIX99Ro7xiI7dYno6L5c2jspBPdaPBcQNL3FZmr9pwdMN4Sb1dU5tCvdIGr3wz6NMdJTDVyfl07p6tOH8GQx72DVrrjvpIe8M9aQnZxuISX9P%2B9Q%2BXo81rjnS8P%2FnByQK%2FCgMjAvsr%2B8M7e8OR0K07UKzdt9br2cBJIlWGY1415%2BuxRGgSWA7xEyyEs8fB62tTqKo5n6%2FVqWdInVhWVJgiK0%2B69DU%2FhsKDNTZBgLag11G%2BNhj530olKKfdSVRTA9tMeWjKlVeonv6lpxK18JHPX9wyPUK9rN9sbAXixzKIhlDD0DYBIw5ZlqsO3fT%2BPCQUo4CkeFJ1B6ZJiv4wjpkq8%2B5Bev7lLsEUluUKu79LFKmYLfrLAXzDDnn4S%2FBjqkAW%2BS2JdirsN9Fe7iZ9xIYFJkfCoYWGaIh%2Bv1inCsIhAAB72mjfuZEvZMm8qgAh6My1C07nlaL4dfZMRFuDWzMTuKDrESSsdMXI5p29OkCscNF1UIYQup2sDRX%2BQOc53WC1b8v4HcHFA2%2BBR7U699DPgqUbMkd5b6KFRicDUj9AMGmoZvNjKcMjzuytwltnCWhBnpzz0w1ZTbXnd8kBX7RMty1Y1F&X-Amz-Signature=e6c0345f3e50c82ca36c869e0055d5b7ff6f8f28a8a8f4ee411d0c2250fa1a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRB6AYNU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqESHj42z6eSEARkJ8NmE9JV3UGY077LMnOS84ryjKGQIhAP5iaiNQHHXGOvv8QY4Okpce0V1TYlVvsjWzhn6%2FOZ0MKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xu4ji9DZQ2Pla78q3APTAsU3OIHEGXIYNzyogO5gx1ClTjB2ZlncimxhksZ3go0iJETO2pkbZQXmT%2B5xyl3VRqSETAtbDXeiaEDBKunTooyuhe6jDRpVliXTvbPqSoOML7KxGOIk3G5i1%2F9hakhgcahocjALDSbVLvMIbfmFIwHNOGIXsZe4y%2BVS%2Bk7CTexTRDVHGedvdeXpNpFQ%2FQVfIXcWqsP%2FnpRb%2FxYPh5s5gAukYUp%2B%2FqHcZTzJ96byTbnEN8tzMQtHKGQIak%2BrTb%2Bw6mloFIX99Ro7xiI7dYno6L5c2jspBPdaPBcQNL3FZmr9pwdMN4Sb1dU5tCvdIGr3wz6NMdJTDVyfl07p6tOH8GQx72DVrrjvpIe8M9aQnZxuISX9P%2B9Q%2BXo81rjnS8P%2FnByQK%2FCgMjAvsr%2B8M7e8OR0K07UKzdt9br2cBJIlWGY1415%2BuxRGgSWA7xEyyEs8fB62tTqKo5n6%2FVqWdInVhWVJgiK0%2B69DU%2FhsKDNTZBgLag11G%2BNhj530olKKfdSVRTA9tMeWjKlVeonv6lpxK18JHPX9wyPUK9rN9sbAXixzKIhlDD0DYBIw5ZlqsO3fT%2BPCQUo4CkeFJ1B6ZJiv4wjpkq8%2B5Bev7lLsEUluUKu79LFKmYLfrLAXzDDnn4S%2FBjqkAW%2BS2JdirsN9Fe7iZ9xIYFJkfCoYWGaIh%2Bv1inCsIhAAB72mjfuZEvZMm8qgAh6My1C07nlaL4dfZMRFuDWzMTuKDrESSsdMXI5p29OkCscNF1UIYQup2sDRX%2BQOc53WC1b8v4HcHFA2%2BBR7U699DPgqUbMkd5b6KFRicDUj9AMGmoZvNjKcMjzuytwltnCWhBnpzz0w1ZTbXnd8kBX7RMty1Y1F&X-Amz-Signature=902e1c1db9da92ac30e3949e1adc2f7d77be7299af661cdf98d0b525cd7a0bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
