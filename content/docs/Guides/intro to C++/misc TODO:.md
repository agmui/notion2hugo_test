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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHQ562M%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDTs9jUlTrIX%2Frk26saLVME5ThrTOlqX9sXeaRELrOB3gIhAPpgw%2Fam5ILflbnY2105e0eE7zlNbdLnCgJfB4novNKcKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWqE8zHF4wB3a9qagq3AMuH6dL9Xv56d9d9DPd61zN1bkpzZgRJ8n%2F2qteNRZLuwtaVz5W%2BJ3%2BpAtbOs%2BQF%2FnKXdWfBUy9nAfEFOv3NxWqY1ltD52VCd0JXGQa4DFIekGLCDQikTBFAUTEWSNIo3N26S94ws%2B8ollgx1mCACiS7ECNZUSYdPFJ2AZmIlrMTdbWFoT3jQ5nNHrhIG7efwwr40X2sADxmvMkYAcpoPb2ABKNy0PWahkGum8V%2B5Q5vdMMUtQcKHqv%2Bc6sg7ocRBWUQjbIqGTH9h6wU6E8lzVGZjDFJBWVU8mIJEMHWpXBcrxRUo4ROc6A%2F87KzjE1sbcS55Sa65eaWOXTIWGIISBFkGnz2AYgca9KFX490754d4txUQRmYydbbnM4r2UDzwHcEch7YZ3ZjYgOt%2BfQ66UhbGEOQi9FT4%2FsG5nh8nCuwFlMhYFQBut7sgjISKK3dpjQeAWaDEKBCnZcy6A8JUXVzdFebY7hzUpcBhkabE%2FJU6yHBq21s1clAFEhgBLVfUdtupicgDFHKsnD0mKgUChUWdywA5E8NxkXIJwN12wy9wEN14f8Bk42s1KGJwn%2Bim%2B1HfFBKI2NV4wbVnlMogqyJOBxGKoqsNG%2Fp17WuFcAz4Sv%2FlfJQioQxNiuQzCSoI3BBjqkAe%2BCs1sqWiVlqVeimc7OwUnsRa1QDFiL%2FrRDn8nID986r0Wto5R2N1O4%2FnykwBdunYwjjG2UBNzCpKNXCMU50t8KKDecyggeVA%2Fsuzwd5iIJ9fOyXeIjtTZTjaWCZjyta54sFGsagH7OK7f9HAmHjh50T4X7WCHNXySWVGi6Cmumx6KVzpDgJHLcEMaow%2BByGIqFWAosICrQSPzVe3XjOE6WmJzK&X-Amz-Signature=a5a66a6c64fd59c34aa0391ce5a1dcf39b93be0453c89d7d9c1bb791cef5a852&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHQ562M%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDTs9jUlTrIX%2Frk26saLVME5ThrTOlqX9sXeaRELrOB3gIhAPpgw%2Fam5ILflbnY2105e0eE7zlNbdLnCgJfB4novNKcKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWqE8zHF4wB3a9qagq3AMuH6dL9Xv56d9d9DPd61zN1bkpzZgRJ8n%2F2qteNRZLuwtaVz5W%2BJ3%2BpAtbOs%2BQF%2FnKXdWfBUy9nAfEFOv3NxWqY1ltD52VCd0JXGQa4DFIekGLCDQikTBFAUTEWSNIo3N26S94ws%2B8ollgx1mCACiS7ECNZUSYdPFJ2AZmIlrMTdbWFoT3jQ5nNHrhIG7efwwr40X2sADxmvMkYAcpoPb2ABKNy0PWahkGum8V%2B5Q5vdMMUtQcKHqv%2Bc6sg7ocRBWUQjbIqGTH9h6wU6E8lzVGZjDFJBWVU8mIJEMHWpXBcrxRUo4ROc6A%2F87KzjE1sbcS55Sa65eaWOXTIWGIISBFkGnz2AYgca9KFX490754d4txUQRmYydbbnM4r2UDzwHcEch7YZ3ZjYgOt%2BfQ66UhbGEOQi9FT4%2FsG5nh8nCuwFlMhYFQBut7sgjISKK3dpjQeAWaDEKBCnZcy6A8JUXVzdFebY7hzUpcBhkabE%2FJU6yHBq21s1clAFEhgBLVfUdtupicgDFHKsnD0mKgUChUWdywA5E8NxkXIJwN12wy9wEN14f8Bk42s1KGJwn%2Bim%2B1HfFBKI2NV4wbVnlMogqyJOBxGKoqsNG%2Fp17WuFcAz4Sv%2FlfJQioQxNiuQzCSoI3BBjqkAe%2BCs1sqWiVlqVeimc7OwUnsRa1QDFiL%2FrRDn8nID986r0Wto5R2N1O4%2FnykwBdunYwjjG2UBNzCpKNXCMU50t8KKDecyggeVA%2Fsuzwd5iIJ9fOyXeIjtTZTjaWCZjyta54sFGsagH7OK7f9HAmHjh50T4X7WCHNXySWVGi6Cmumx6KVzpDgJHLcEMaow%2BByGIqFWAosICrQSPzVe3XjOE6WmJzK&X-Amz-Signature=4e3f2ecbefb42d0fdc941842c0d84fdedd56cf94fd4c8114a4b06c7704056f57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
