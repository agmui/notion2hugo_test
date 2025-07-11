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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRQ4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpjqOwR9LFsW1BrXuhjrWRwCd1YCOG1JuJAS%2FBZ67ueAiEA2liol4HijJuc01hcBIW5VtVWkd2dFG79rK7xaZ5OrHgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMLAcnioWuHOp3tPyrcA3My9zwwbqUk4woHLGMUHrbN70NHtwZ%2BoXCp4qvuD5SJajv%2BxDcblohYHomUc%2FDDOCx29ZnBLzmwiLQmjxqNlcS2S2YjFmod5R0Q%2F5B7w5AaETP16HZGWklyogXg3rEJHGxgslvYt38naZqFmpGjP%2BuOu3Mj%2FPXmG2myv1kBbtmaOAfqO7SMmRe9qjuKzrmNhHQVdliRZSzaa4gY6hLgByl4kTLWsawevtu3Cgf8Fi%2F0Z%2BJ2fvCAsipNeXenq1PpICeVazEWC80tLtq2KNaOc4e8iEQgBhla8G%2FUGeKS1mwJipTxt3El7oCUH6Z8xW3sAKwzG3dgDXRYl4gD3gMQzAWWeHW15PKEomKO7qp8Iz18prnfpGIk%2BayIN2Qw8%2B%2FHlC%2FREcr5XP4ZGvmSOAcdfOCCXQtTjSeyKv53Jc5PG7kOda1nToV4RnSK%2BHkvRG8fugixwf2ydr7Qw9NJTAN9neGSYZPnXMpOKyeWiEGrQnHg0pxGnOdytoldOyl%2BD4f2iF9lXXGokg5qjcK%2B5Dur2ubPyJ8WkNo7N0QO6zmru0bu2Et5VyYJb057xG4iSeX2lbs53bATjA7%2Bqe5lFznISNc30Ax7OiGf3qWvZNXT6m0TbF4cSiT97G6wzkXqMKvVxcMGOqUBGJymQ6UW0sar2SkM8lsKNDCJT0GDu81HJcQrrhGEa1isByefFRYCC2jE1J8OwiBSmtVmVWIryj0e4fHmcC9LfWzPbY1SOiQNuSy8X%2BU0xkMt1jCo56lnx0FE1o%2BnGC3gI1ucKD%2B7KREKj%2FeV4MlvtPs3I6u%2FuYC%2FqivBJcbMpxEo2JJ1MPgfEffvzWo6ipg370qiR9wq%2FPPOgrVbEdR2hM6cCYir&X-Amz-Signature=cdae726e98bb29ff34222cee8cb9db1257ee0b1d57d974017b0195e75861adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRQ4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpjqOwR9LFsW1BrXuhjrWRwCd1YCOG1JuJAS%2FBZ67ueAiEA2liol4HijJuc01hcBIW5VtVWkd2dFG79rK7xaZ5OrHgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMLAcnioWuHOp3tPyrcA3My9zwwbqUk4woHLGMUHrbN70NHtwZ%2BoXCp4qvuD5SJajv%2BxDcblohYHomUc%2FDDOCx29ZnBLzmwiLQmjxqNlcS2S2YjFmod5R0Q%2F5B7w5AaETP16HZGWklyogXg3rEJHGxgslvYt38naZqFmpGjP%2BuOu3Mj%2FPXmG2myv1kBbtmaOAfqO7SMmRe9qjuKzrmNhHQVdliRZSzaa4gY6hLgByl4kTLWsawevtu3Cgf8Fi%2F0Z%2BJ2fvCAsipNeXenq1PpICeVazEWC80tLtq2KNaOc4e8iEQgBhla8G%2FUGeKS1mwJipTxt3El7oCUH6Z8xW3sAKwzG3dgDXRYl4gD3gMQzAWWeHW15PKEomKO7qp8Iz18prnfpGIk%2BayIN2Qw8%2B%2FHlC%2FREcr5XP4ZGvmSOAcdfOCCXQtTjSeyKv53Jc5PG7kOda1nToV4RnSK%2BHkvRG8fugixwf2ydr7Qw9NJTAN9neGSYZPnXMpOKyeWiEGrQnHg0pxGnOdytoldOyl%2BD4f2iF9lXXGokg5qjcK%2B5Dur2ubPyJ8WkNo7N0QO6zmru0bu2Et5VyYJb057xG4iSeX2lbs53bATjA7%2Bqe5lFznISNc30Ax7OiGf3qWvZNXT6m0TbF4cSiT97G6wzkXqMKvVxcMGOqUBGJymQ6UW0sar2SkM8lsKNDCJT0GDu81HJcQrrhGEa1isByefFRYCC2jE1J8OwiBSmtVmVWIryj0e4fHmcC9LfWzPbY1SOiQNuSy8X%2BU0xkMt1jCo56lnx0FE1o%2BnGC3gI1ucKD%2B7KREKj%2FeV4MlvtPs3I6u%2FuYC%2FqivBJcbMpxEo2JJ1MPgfEffvzWo6ipg370qiR9wq%2FPPOgrVbEdR2hM6cCYir&X-Amz-Signature=4a8e14a4c5df671836558c457bdca3f3b7c8748c39f6ab75592ba164e5dfb21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
