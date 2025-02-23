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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEENMSPG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LwUiLJmL7DxKgKVLgAeCBdMrTUaBnqzmORP%2BA%2B7NlgIhALRnK0xFXGClEc5avHXMD2%2FBgI7PCyaw4Fm6IlQE8J8wKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkTVefPThzGLOjAxMq3APK2mn0ypCQ8n02Oy60EXoUJmTYQ5F5ndhK1ye5ASKvKvDDEC0m%2BylX7WKcAcr1WV%2Byov2HiuvskGEQwWurSn%2BZJvv9sBesBvTpTgKFCZ0EVVi%2BxLgfVckohbMIn%2F3ndShDmy9YhIac53hGbooA6AgIPxTqE3NFxXxObM54w81bk7wTE2lk77QVJSl4rFuyeZWfXaAytO9MD%2FKVyFI0Rlu%2F7M0%2BQ%2B%2BebzmngOxfLHBEl3OVN7uWHrSqUaO7rrE%2Fg0Z9z3Vhne%2FrbU%2FTFJAsXNJwHuIL%2BU16KpFsnQ%2FuACOjVWNUu9blpXAD%2BQiVS9rEo2tveMYLmt2SJlJ9sifaGJmgoUVB3os5%2BIWNo%2Bvq2jNzru1ZLn6P%2FHROffkb%2B%2BlBfNlPFbx3gnHjAXVnXKgQ008xdcrZPfiWpRb95c7wKzckiUNhRLuEv3X6ccAaGYpsR1%2Fju%2F9hmCaYDM22%2BhlVxeIaYYwtD2sDebKV%2BDkzvQTfYEiI5YvLIvzrqf6mACarsbUdy2589sOan6ty3zkzTR6WwHfHgjEioqvunotAScEP0QCRA3Q4OP3w13FVw3WOY10wSjRFwwUJpMVAEmA3AMx6UzBVN8t%2BFaEBlgI%2BdX6mqkjNTWigeSYdG87VZjCapOm9BjqkAY8CRbjQezJbHGL8vhxfWFbE%2FfqayPNfROBg3kp9TXEuWFvHTSerPggH3S2KjR4C3mPLJ8IXjwK3%2BgqpHt9oYZRKcgn%2BsHumUm3Bck2878IzYfRhsC6F%2BYaZWKrxtKj22RbHKfVHxWylCuks8EB8UaC0na2fsUCOr70ALD2EdAKguqO%2FzTUafohfjUxT0eLO4M1egM25XDjzYZvH08qK%2BSvglSj%2F&X-Amz-Signature=b970cca4f72c309a756aefadec6746c74069ee5b8b95f2156b82127981fc0ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEENMSPG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LwUiLJmL7DxKgKVLgAeCBdMrTUaBnqzmORP%2BA%2B7NlgIhALRnK0xFXGClEc5avHXMD2%2FBgI7PCyaw4Fm6IlQE8J8wKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkTVefPThzGLOjAxMq3APK2mn0ypCQ8n02Oy60EXoUJmTYQ5F5ndhK1ye5ASKvKvDDEC0m%2BylX7WKcAcr1WV%2Byov2HiuvskGEQwWurSn%2BZJvv9sBesBvTpTgKFCZ0EVVi%2BxLgfVckohbMIn%2F3ndShDmy9YhIac53hGbooA6AgIPxTqE3NFxXxObM54w81bk7wTE2lk77QVJSl4rFuyeZWfXaAytO9MD%2FKVyFI0Rlu%2F7M0%2BQ%2B%2BebzmngOxfLHBEl3OVN7uWHrSqUaO7rrE%2Fg0Z9z3Vhne%2FrbU%2FTFJAsXNJwHuIL%2BU16KpFsnQ%2FuACOjVWNUu9blpXAD%2BQiVS9rEo2tveMYLmt2SJlJ9sifaGJmgoUVB3os5%2BIWNo%2Bvq2jNzru1ZLn6P%2FHROffkb%2B%2BlBfNlPFbx3gnHjAXVnXKgQ008xdcrZPfiWpRb95c7wKzckiUNhRLuEv3X6ccAaGYpsR1%2Fju%2F9hmCaYDM22%2BhlVxeIaYYwtD2sDebKV%2BDkzvQTfYEiI5YvLIvzrqf6mACarsbUdy2589sOan6ty3zkzTR6WwHfHgjEioqvunotAScEP0QCRA3Q4OP3w13FVw3WOY10wSjRFwwUJpMVAEmA3AMx6UzBVN8t%2BFaEBlgI%2BdX6mqkjNTWigeSYdG87VZjCapOm9BjqkAY8CRbjQezJbHGL8vhxfWFbE%2FfqayPNfROBg3kp9TXEuWFvHTSerPggH3S2KjR4C3mPLJ8IXjwK3%2BgqpHt9oYZRKcgn%2BsHumUm3Bck2878IzYfRhsC6F%2BYaZWKrxtKj22RbHKfVHxWylCuks8EB8UaC0na2fsUCOr70ALD2EdAKguqO%2FzTUafohfjUxT0eLO4M1egM25XDjzYZvH08qK%2BSvglSj%2F&X-Amz-Signature=dd8d5aee5524a2c4703acb04c40e4927490a2f6d0f86f1b287285de225c43a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
