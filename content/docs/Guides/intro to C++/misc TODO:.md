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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7RWHLK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtSh%2BPAGPSF8NGo2g6VJxdF07wZzqhJw1UBWn02484gwIhAO7pj3FECyMVJ3dqqgOvs%2FJ1CQTVdxSKf%2FCWyl1FiTXeKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykBDuvjKjCdcdBrwkq3AMYG%2BsFIFtL5OM29RFlxM%2B%2FxkW%2B5OSamWxwFlgi8G39D8SECoXz18dxbn7Tp4l9D4oRHUENw0eV%2BrnVtS8V8%2FORxUjIFLC9YkOXg1qA6KSgWvkUZdDkNcg%2BzTHVs8fQ8PuML2BhiYpBzumSp89n5GbX6jVyhd%2BnaCeLrNvpYpSR4Gn4WBBnTBhBFSb5dtEyI3aqO6HT9lX%2FzARK%2Bj1LfoVMO0%2FG3%2F8ZOLC%2F94ENLaUUz6ocSgLhDMOdtl7rF5nBbx9zGycSR%2BVm3rRMkhmndQR5iosMKpJDVjcCaY59tGc%2FrcQBhHO9lf7h%2FwxGqYa13v73qn5jakjQraqrrZyk7Ea05IHNUfrgwhbiC00OlxynYPV5KYaq0Jn2d93Ipme6zB%2Bxmuhz3spuz5dFLRK8OEDO2RB6m1leBLjtDkwcwHh1%2FoReTxrJslBzcxJbqRfBhdeha6RAtAxnJ9L1k0Xw39KUci8aR%2BMrO2%2Fshb9ubrvXYpX3msghls8jwIYSok6SzXw6wLXwzyKyDVDLBe4uzHlWUxtkdduyIi2IC1fWrKmp99ffm%2F2DC%2BWsgd8Fw0LK97A8iv1MGjIWcGnSnD9FUexPRL3%2Bx3k9UGenIyzT0kF%2FPXSir%2F9%2FMBUDD%2B%2BHMjDM3K29BjqkAeoyHhhvqaxQjo1iKup67JGNG7hGn9eSzzGcXTibMtB84zctHuGsmdE9cqD2my5s61H%2BWstS8%2BG8LGlS63m6V4qot3wQXK8hvasosIrjCR0p6hsgRAtqj2Fl6wolFCek1Eql2oKg3olXFgN9oT%2Bsc8wMPwp1hCjYqRP0tXmGJhT2%2F4IYcsIiNonTZ%2BORY1EC6NDOwwzlw9fz2gJsT6CLq1Z4jDT7&X-Amz-Signature=52f141bc0fb419084955204c46207e1d2e1a74e1c6b068ab4d51b6c0fa872048&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7RWHLK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtSh%2BPAGPSF8NGo2g6VJxdF07wZzqhJw1UBWn02484gwIhAO7pj3FECyMVJ3dqqgOvs%2FJ1CQTVdxSKf%2FCWyl1FiTXeKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykBDuvjKjCdcdBrwkq3AMYG%2BsFIFtL5OM29RFlxM%2B%2FxkW%2B5OSamWxwFlgi8G39D8SECoXz18dxbn7Tp4l9D4oRHUENw0eV%2BrnVtS8V8%2FORxUjIFLC9YkOXg1qA6KSgWvkUZdDkNcg%2BzTHVs8fQ8PuML2BhiYpBzumSp89n5GbX6jVyhd%2BnaCeLrNvpYpSR4Gn4WBBnTBhBFSb5dtEyI3aqO6HT9lX%2FzARK%2Bj1LfoVMO0%2FG3%2F8ZOLC%2F94ENLaUUz6ocSgLhDMOdtl7rF5nBbx9zGycSR%2BVm3rRMkhmndQR5iosMKpJDVjcCaY59tGc%2FrcQBhHO9lf7h%2FwxGqYa13v73qn5jakjQraqrrZyk7Ea05IHNUfrgwhbiC00OlxynYPV5KYaq0Jn2d93Ipme6zB%2Bxmuhz3spuz5dFLRK8OEDO2RB6m1leBLjtDkwcwHh1%2FoReTxrJslBzcxJbqRfBhdeha6RAtAxnJ9L1k0Xw39KUci8aR%2BMrO2%2Fshb9ubrvXYpX3msghls8jwIYSok6SzXw6wLXwzyKyDVDLBe4uzHlWUxtkdduyIi2IC1fWrKmp99ffm%2F2DC%2BWsgd8Fw0LK97A8iv1MGjIWcGnSnD9FUexPRL3%2Bx3k9UGenIyzT0kF%2FPXSir%2F9%2FMBUDD%2B%2BHMjDM3K29BjqkAeoyHhhvqaxQjo1iKup67JGNG7hGn9eSzzGcXTibMtB84zctHuGsmdE9cqD2my5s61H%2BWstS8%2BG8LGlS63m6V4qot3wQXK8hvasosIrjCR0p6hsgRAtqj2Fl6wolFCek1Eql2oKg3olXFgN9oT%2Bsc8wMPwp1hCjYqRP0tXmGJhT2%2F4IYcsIiNonTZ%2BORY1EC6NDOwwzlw9fz2gJsT6CLq1Z4jDT7&X-Amz-Signature=d7513d0920d92a450d670f82ae217a57b02ef16fb7808b9b2c72a0b294153d47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
