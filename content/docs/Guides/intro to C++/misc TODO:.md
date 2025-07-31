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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOTLGCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVXm%2F%2BHbCIRbHCaTX6n%2FTlOdE2CSpHMnCg148Eo2w0GAIgKAMO4g8QoFa9qKHnrWnXDB4CFGogg7LHag780QEQz8cqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI668IZ%2BYxgk5f8VgircA10IT2cVf3ZJs6NhkUzYP9A1VhjJ0N5F0UY%2FRgWlEYrwfjhSlObGgZT40LvoRobHNUSpKBMXMfYBtbu%2B61YRk5FCtt4oAUMzjdO5JAt%2BkYaV7XLu8ygOiXYVg2aPoTSy1XpRKrp2mtn6jgJ6er1y%2F%2B0VfBh6QFykL1y42Og01XKmBQDcx6ZOKp7nqb%2BQ2CrVyGLZZe9R%2FjPmsewzUhUtN2i5mb8FeDzV5CDEM7YW0TD4ai%2FwylzMYx7ycYgsntq9hxnpNVfh2nRWncAuiuKIFIgFx1wp8m9vHuRq9JKKeB4ZXCQsOZx9vr3M%2F6yKWa5k3SJF%2F8vCmY%2Bi3yXHqvwOYK%2B7c8WiDCMeqkOGTsTLxmwvyK7JX%2BDL9VKgXrHBaTAoik6hHbPheUMVXrkrFTRUMbtfomCZdfWyPXNBTl2c5KEsRdv4rT9FUqkMPcOBWTJrtirxGscTSjkx%2BUECX3izBj287j%2F9N%2FLDTM6tYUcTyiudg3je8Tox6cbFsusrgK%2FkV8yvgzvQKOna25fMxuDA9XmflN1VPDVL0CyQIeTzDfmYzXkAJ%2F%2BYzOy6563OST2M8GXHBDRs7Jo6VSfdodEgO%2FkZakiN%2FEgJqCcioi%2F2TsjArpCW6EBFIE4pQguHMKSZrMQGOqUBymMhr3%2FIHGeG5H3dyhF6x5p5yImcsNrYET2JbMf8w979kScBlrnK9RephwustVkF2cCB7QgvDspBuWWTaAOWPzOal357714oJM9EsdNLQth%2Bg6w%2BhzX3wahXW4dXzEgfTKsjHWhHvvEPmacDBtcNrznYQGCvnsv5Jpu2oRV7brSKViwUSHsebiAJfpHLxC626P%2BBTZLmQjF0q0Sm%2B8d5C9J2IoD6&X-Amz-Signature=a97c7b22fe5ada2af6b20ec530d90a66370deef4b2c676352e95fb9dba58bc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOTLGCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVXm%2F%2BHbCIRbHCaTX6n%2FTlOdE2CSpHMnCg148Eo2w0GAIgKAMO4g8QoFa9qKHnrWnXDB4CFGogg7LHag780QEQz8cqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI668IZ%2BYxgk5f8VgircA10IT2cVf3ZJs6NhkUzYP9A1VhjJ0N5F0UY%2FRgWlEYrwfjhSlObGgZT40LvoRobHNUSpKBMXMfYBtbu%2B61YRk5FCtt4oAUMzjdO5JAt%2BkYaV7XLu8ygOiXYVg2aPoTSy1XpRKrp2mtn6jgJ6er1y%2F%2B0VfBh6QFykL1y42Og01XKmBQDcx6ZOKp7nqb%2BQ2CrVyGLZZe9R%2FjPmsewzUhUtN2i5mb8FeDzV5CDEM7YW0TD4ai%2FwylzMYx7ycYgsntq9hxnpNVfh2nRWncAuiuKIFIgFx1wp8m9vHuRq9JKKeB4ZXCQsOZx9vr3M%2F6yKWa5k3SJF%2F8vCmY%2Bi3yXHqvwOYK%2B7c8WiDCMeqkOGTsTLxmwvyK7JX%2BDL9VKgXrHBaTAoik6hHbPheUMVXrkrFTRUMbtfomCZdfWyPXNBTl2c5KEsRdv4rT9FUqkMPcOBWTJrtirxGscTSjkx%2BUECX3izBj287j%2F9N%2FLDTM6tYUcTyiudg3je8Tox6cbFsusrgK%2FkV8yvgzvQKOna25fMxuDA9XmflN1VPDVL0CyQIeTzDfmYzXkAJ%2F%2BYzOy6563OST2M8GXHBDRs7Jo6VSfdodEgO%2FkZakiN%2FEgJqCcioi%2F2TsjArpCW6EBFIE4pQguHMKSZrMQGOqUBymMhr3%2FIHGeG5H3dyhF6x5p5yImcsNrYET2JbMf8w979kScBlrnK9RephwustVkF2cCB7QgvDspBuWWTaAOWPzOal357714oJM9EsdNLQth%2Bg6w%2BhzX3wahXW4dXzEgfTKsjHWhHvvEPmacDBtcNrznYQGCvnsv5Jpu2oRV7brSKViwUSHsebiAJfpHLxC626P%2BBTZLmQjF0q0Sm%2B8d5C9J2IoD6&X-Amz-Signature=1f7e71747d8959627b3e4bd3700579a08c03be7bf68877946b54036d95ac979a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
