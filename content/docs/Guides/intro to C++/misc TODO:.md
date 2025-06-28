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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAERWVV2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDna%2Fd4u6nHrKgdab1TomyTp5sckz2LDJ1fZjAX8ehIXAiEAtjYsoS5T2MRyUZcfZi614c26HtMbh2bIFMpI47qLB9EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac72V8%2BPwxwKNMHircAzrhcbWT7qwuKzx7av1NWspcvGI%2FZpE9jJ1A5fvjiGiGZn0kIFUc1%2BMTyEu73WxRMrI89pqIgI8d6NkoiFWcheVNWCjBgarKedzvPdy6E6nqjnd7cRRMUoWnOOeHd%2BnUgmEkYJME4q0XR1jaOq02o6US1UKF%2B30IoC8lcIeMlqrTqyHniksQ7csa2fHLUSzyxM5ruIUq%2Bdw8lvP7qT5GTTc1K6wNKucNvqSisfcuvs0cz%2Ft74095pSK5D0ooONSy%2Bnr3y%2FqGvf6IFrivQ3f3dwt4JjqkWNWWEMjEml1au1vtcjvLVs3Sq0E%2FtXYS952A%2BAtwpN7gyau53XKGMOT%2BXJZf4w%2FziLRKxIkgP1YaKEU7lYPt8f2cMWkPQdmViYEzqrVMh7qfoVSo7YcyjzxufCBe8NuULhCzXJRQ7a007MEj%2Be9Ng7Ew1sMChzE8et2NyqjP64J%2Fclyoe9H99BIRxgJvDC0%2FwM6hbpOTO6%2FKAMUQYUeckZTuYRxllfHX1PnyJzVcNLpb9dqpB0yMerYsQRggSZhGgz9iYQR%2BT7qryNrEb10GYmGW9L8ZQR3tNmEj%2BzXP0HX7fy4RsgTJJEbqvgTlil4Fr8juowPygGSnGa68swBCbUE14gZ%2BF5JAMMP5%2FcIGOqUBaCznXNt4X6Ju6XCOSMeQzO1xc8OtGM1wL96qkvjGlSagUZ4UKAuprOfF1g2TxmkQgZegJzWCsQm1QdaAIdtta28un88FYJ2KE%2FS4CqXDAo0gKi5XFVsMSlFeslAvjR3xCZ9h4DmzUbIpVpGPoGWipy1pKEyM9whGru0oQ%2FAOUV5%2BBiRGp2sN0zh7njeH1fUkwCG7ABYvmWLMKgyGQI%2F81oICtWZ4&X-Amz-Signature=ddb20fdca56196142eceb2c34d57f2cd9e94859f8343c39c747b6427bcf3d47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAERWVV2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDna%2Fd4u6nHrKgdab1TomyTp5sckz2LDJ1fZjAX8ehIXAiEAtjYsoS5T2MRyUZcfZi614c26HtMbh2bIFMpI47qLB9EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac72V8%2BPwxwKNMHircAzrhcbWT7qwuKzx7av1NWspcvGI%2FZpE9jJ1A5fvjiGiGZn0kIFUc1%2BMTyEu73WxRMrI89pqIgI8d6NkoiFWcheVNWCjBgarKedzvPdy6E6nqjnd7cRRMUoWnOOeHd%2BnUgmEkYJME4q0XR1jaOq02o6US1UKF%2B30IoC8lcIeMlqrTqyHniksQ7csa2fHLUSzyxM5ruIUq%2Bdw8lvP7qT5GTTc1K6wNKucNvqSisfcuvs0cz%2Ft74095pSK5D0ooONSy%2Bnr3y%2FqGvf6IFrivQ3f3dwt4JjqkWNWWEMjEml1au1vtcjvLVs3Sq0E%2FtXYS952A%2BAtwpN7gyau53XKGMOT%2BXJZf4w%2FziLRKxIkgP1YaKEU7lYPt8f2cMWkPQdmViYEzqrVMh7qfoVSo7YcyjzxufCBe8NuULhCzXJRQ7a007MEj%2Be9Ng7Ew1sMChzE8et2NyqjP64J%2Fclyoe9H99BIRxgJvDC0%2FwM6hbpOTO6%2FKAMUQYUeckZTuYRxllfHX1PnyJzVcNLpb9dqpB0yMerYsQRggSZhGgz9iYQR%2BT7qryNrEb10GYmGW9L8ZQR3tNmEj%2BzXP0HX7fy4RsgTJJEbqvgTlil4Fr8juowPygGSnGa68swBCbUE14gZ%2BF5JAMMP5%2FcIGOqUBaCznXNt4X6Ju6XCOSMeQzO1xc8OtGM1wL96qkvjGlSagUZ4UKAuprOfF1g2TxmkQgZegJzWCsQm1QdaAIdtta28un88FYJ2KE%2FS4CqXDAo0gKi5XFVsMSlFeslAvjR3xCZ9h4DmzUbIpVpGPoGWipy1pKEyM9whGru0oQ%2FAOUV5%2BBiRGp2sN0zh7njeH1fUkwCG7ABYvmWLMKgyGQI%2F81oICtWZ4&X-Amz-Signature=3c37dc7ae1e8283810203ec6a837faa1825e384ac107415b8cbfa11a4a59835f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
