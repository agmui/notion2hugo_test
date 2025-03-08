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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA54M6T%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDblcoO69ajHjfuNjjhZPLZSNg7OOnjZVxvCUIY2odJ5QIgLWmg2qFQWg39hHr9n7iUHGyZuLZxi8KnktvHNcXvm04q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDDcGFbjRwZhrMmIzSrcA7lnG8lE%2BTKbHbujQ1wEu4nfpYze71pyE0w5pXJ6KR6b%2FM%2BygvrARrQYucjXNptwEBN6A%2F2AvoVlTWjg5CaqJNljRQXHNV%2BOh1CRllm%2BEV9WrFm35nFuOLgiiDB43FnMp%2BFdMF4hTKp372x766ZRn4%2F59GXlIR7opXPNZb%2Fowrlaj%2F%2F4PxL3vwSldzx2Edi47IrDJQ4gIhkXsVP77pbMLshnYy9TBAH3pjxpXz96DM60Co%2FhKv0dB%2BAhkudTemBA8uizAFn7WNlGDMjDaz5abzzj10EZv0jwRdjSC6H5L%2BT7tCXW%2B8CfgD44A%2FOAwS0kid%2BSQq66F6sztS0JBfq2zvQbFZWJdrfRbJi%2BykkimnSpZhAvJq7DDUMVkrIpG0f8JF4xjv4kYcwELHxYkLPojknCI%2FyMJaubhrqjTk%2FBZdVt9X9KVLklh0R050SLoxTo6n4ayyrWJ9uuzGRQULViG8JDtpHn%2BJEpsqvoWbj4xtyuwZL%2BJOBWWux4DB093KN7PMIZ%2FYDo5Ne0eat12gAtPREi6kIu2dKYSTNz4yEFL3a6h9MTjQrnmgEp2aJIRT8trz5gW%2BL53MkGO8l%2FG0brt%2F18c795i7ZnbIDK4uV4FrJreZmCKcmkW6G5cNp8MPSCsr4GOqUBXVB6UzQ1o6rJH3YU8CUfZMgfVTp4U9Pj2NQmZOxH5GkHIvYizyJQrky7VXedTlkfq7YGPP6QoBZLe2m5NTLH2l9FKF7VL5jwRBibHCtolMP8yOmIDcbUNq5TB2CMXdXiY4UVwxCYt4iUSbaBn2OLl2NIKbfWF1eFZDim7egQXJNhPwD8N1ajkf0hijNM3Y9pTCRerKQJcwFgdfh5e5sih73INKFY&X-Amz-Signature=050569bcc3ee7d184f7625af5783d835b1c52c21a3a6c5cd35f4a839e9d8858d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA54M6T%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDblcoO69ajHjfuNjjhZPLZSNg7OOnjZVxvCUIY2odJ5QIgLWmg2qFQWg39hHr9n7iUHGyZuLZxi8KnktvHNcXvm04q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDDcGFbjRwZhrMmIzSrcA7lnG8lE%2BTKbHbujQ1wEu4nfpYze71pyE0w5pXJ6KR6b%2FM%2BygvrARrQYucjXNptwEBN6A%2F2AvoVlTWjg5CaqJNljRQXHNV%2BOh1CRllm%2BEV9WrFm35nFuOLgiiDB43FnMp%2BFdMF4hTKp372x766ZRn4%2F59GXlIR7opXPNZb%2Fowrlaj%2F%2F4PxL3vwSldzx2Edi47IrDJQ4gIhkXsVP77pbMLshnYy9TBAH3pjxpXz96DM60Co%2FhKv0dB%2BAhkudTemBA8uizAFn7WNlGDMjDaz5abzzj10EZv0jwRdjSC6H5L%2BT7tCXW%2B8CfgD44A%2FOAwS0kid%2BSQq66F6sztS0JBfq2zvQbFZWJdrfRbJi%2BykkimnSpZhAvJq7DDUMVkrIpG0f8JF4xjv4kYcwELHxYkLPojknCI%2FyMJaubhrqjTk%2FBZdVt9X9KVLklh0R050SLoxTo6n4ayyrWJ9uuzGRQULViG8JDtpHn%2BJEpsqvoWbj4xtyuwZL%2BJOBWWux4DB093KN7PMIZ%2FYDo5Ne0eat12gAtPREi6kIu2dKYSTNz4yEFL3a6h9MTjQrnmgEp2aJIRT8trz5gW%2BL53MkGO8l%2FG0brt%2F18c795i7ZnbIDK4uV4FrJreZmCKcmkW6G5cNp8MPSCsr4GOqUBXVB6UzQ1o6rJH3YU8CUfZMgfVTp4U9Pj2NQmZOxH5GkHIvYizyJQrky7VXedTlkfq7YGPP6QoBZLe2m5NTLH2l9FKF7VL5jwRBibHCtolMP8yOmIDcbUNq5TB2CMXdXiY4UVwxCYt4iUSbaBn2OLl2NIKbfWF1eFZDim7egQXJNhPwD8N1ajkf0hijNM3Y9pTCRerKQJcwFgdfh5e5sih73INKFY&X-Amz-Signature=4b4c6d5c187a2cb02bdcd25b3996783eaa06304706f1a20622032770f04ee098&X-Amz-SignedHeaders=host&x-id=GetObject)

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
