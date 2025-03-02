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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=5910d090b56461f34d89bfb4939900b46859a43353faadd34ca79467f7273d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=22892d2807ee41c7c5731acbccc60d60195e1070ab1312ebb39aeefc082be82a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
