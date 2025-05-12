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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XC6KF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCWw1QfoqAywj4T1I4%2FzZPHpMHcVFOp2YPdydzHEmfHigIhAJDJVZtfY33pqvnPByxglrCJ6LkPUg1Hz5CZKtk8ezKXKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS5JGeQ4D3TSUoLa8q3APzoqVV2HWgamyT8Z9ETJfuwJSguyZ49cPzvVEAOrVtfVuVS5buWzpUtf%2BxEhEm7FrPKBLI0v7URm7wPIzZ902%2BSEBEcLMdXHKE5%2FLyiSpct86WiNvf8ipLJRmf7bkNhpGaMuBg9pn7CSZMQfqrqZmeNA8pqOlPxfrsXKblpIm3pheHeX4%2BbJx1gIVW2e43hQm%2BPaqbc0Sn2QRdw5g2iNNi%2FRD6HT35a5OHk8ntNnTvjxSfOI29hwNWMkW5HEE4LOWMtDv5VDerC8wDSqtrK2NCOvK9vh85XVaUtGtV6GMTqjlI6lfckx7OqX2lY67zw7s9BEaykmm4vGIvfdN0%2BNgCN7XK452%2BXY3G7BMnDc02JJJFTv%2B%2BdHMWFRXS%2BY1E%2BeH%2FCYyyBP9c5rob1k1UEWSrxa2SvgRbJ%2BfBfVnl5BseEkbs%2BADndsPm2jwmbkT3ucweMMhxIcjLOREXjUR2jhWT06EFhyK0BZQoto3Xl%2BzgkaKemPGIO7VvFX0kFnNYfc0iDxDlmjxtIfxYIvrNvAyvCot2U%2BV3QqFBO36ZnoK%2FNhmXdmClf%2Fw2T7ah6msnZ%2F0BQTGPvNc8iR0Ryj911xcVJE82pdNVTrsq0aEEyqL3JkmSHu8CULObwV0CczD7hIXBBjqkAU3V0D6G7S1x9f7L%2BS1YyFTK54h0EeNoRV33aq32Gl2dOr0Mcf368RAsrjj49aHtAOB%2Bruc3YbA5hxU5sG5sVxpMpgNbanSMltu%2F5tTXQ1pcU8Au9Vo4DFV2FsqlxxmrX6a9q6sM9Kfcg4yIAEIwKb3NB5Z3i7DxqxxLWm8djSyFaVCsahcYKFsTPKnTbGKr1%2BUdRwtYuUZAyUcnRfiIurLUFaNR&X-Amz-Signature=4442d991e4d1acbe07497abae5d563ace0191cafd64e71c24ce801da5fd58853&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XC6KF4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCWw1QfoqAywj4T1I4%2FzZPHpMHcVFOp2YPdydzHEmfHigIhAJDJVZtfY33pqvnPByxglrCJ6LkPUg1Hz5CZKtk8ezKXKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS5JGeQ4D3TSUoLa8q3APzoqVV2HWgamyT8Z9ETJfuwJSguyZ49cPzvVEAOrVtfVuVS5buWzpUtf%2BxEhEm7FrPKBLI0v7URm7wPIzZ902%2BSEBEcLMdXHKE5%2FLyiSpct86WiNvf8ipLJRmf7bkNhpGaMuBg9pn7CSZMQfqrqZmeNA8pqOlPxfrsXKblpIm3pheHeX4%2BbJx1gIVW2e43hQm%2BPaqbc0Sn2QRdw5g2iNNi%2FRD6HT35a5OHk8ntNnTvjxSfOI29hwNWMkW5HEE4LOWMtDv5VDerC8wDSqtrK2NCOvK9vh85XVaUtGtV6GMTqjlI6lfckx7OqX2lY67zw7s9BEaykmm4vGIvfdN0%2BNgCN7XK452%2BXY3G7BMnDc02JJJFTv%2B%2BdHMWFRXS%2BY1E%2BeH%2FCYyyBP9c5rob1k1UEWSrxa2SvgRbJ%2BfBfVnl5BseEkbs%2BADndsPm2jwmbkT3ucweMMhxIcjLOREXjUR2jhWT06EFhyK0BZQoto3Xl%2BzgkaKemPGIO7VvFX0kFnNYfc0iDxDlmjxtIfxYIvrNvAyvCot2U%2BV3QqFBO36ZnoK%2FNhmXdmClf%2Fw2T7ah6msnZ%2F0BQTGPvNc8iR0Ryj911xcVJE82pdNVTrsq0aEEyqL3JkmSHu8CULObwV0CczD7hIXBBjqkAU3V0D6G7S1x9f7L%2BS1YyFTK54h0EeNoRV33aq32Gl2dOr0Mcf368RAsrjj49aHtAOB%2Bruc3YbA5hxU5sG5sVxpMpgNbanSMltu%2F5tTXQ1pcU8Au9Vo4DFV2FsqlxxmrX6a9q6sM9Kfcg4yIAEIwKb3NB5Z3i7DxqxxLWm8djSyFaVCsahcYKFsTPKnTbGKr1%2BUdRwtYuUZAyUcnRfiIurLUFaNR&X-Amz-Signature=35f691a0038e359505c5dbb4014143c0e1db4fb0446e3cc68ce94a6d9b35bcdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
