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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOQB6TF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDI3%2FjCAkj%2BQajOns2ykzYtVI11bSqNPSP3MQCXItpV4gIhAM0aNKrRSshwI0PsOJ0xXruPqRuwf0xJHD1OXYr0mFGCKv8DCBwQABoMNjM3NDIzMTgzODA1IgyNQ9o9Nbl35eLq1pkq3AM7E%2BS74iNCo8ou2ah0kswEHbKFgcZ9gXLOUbY%2FSSe0ph0z366uCcMn%2FFma%2FMBMgGMG2LiwbjL5NRqyHs8qOoxDItI229A4k3hWExt%2Fdinks1mk356D9sPQ0KYxF1hNrixkt3OMhTVVqiMrJcc66eeGMPtfk88g%2BlLoS0d%2BSI%2BSWn0AICcsoU8a5rm99C7%2FpStTKWspIEsxxvv33hvRwPtWssDrE9KYkuJJbBnSs2wRn1C%2B89ciXWLkkrcZJXitgb9MDD%2BfvSg%2FWsuyTC2dj%2FKcqTOZOEoYd7yKYaU2UDEnLi0pQ%2F%2F1A9yuiwssTvbxW852Z5nA4vTo%2BFfuBJslAy5wfrbtG4oHWOcQlnfhx8pfI%2BHL9rRacOKQnrc1E8fG7z%2FeAmA2w1CsoylT9ZkloACIX3M8VOcKBT7H3k4Nx1Qr7vR4XWccT%2FITjm4Y0YFx4GJ4zWdo7%2FL1WWUe92ZOWHWrAzBgbgxzuYbpZmOsWFMTi1mi5r9q7itRHZ7oIuOcpI5xLg8nQR1tKUoWQ6uSDeZEa%2F3gBadcOTxU5DztXFAv7awG1KbUZMNkxiuL6gvBfYCkjS3x69ovGToLZ0TACHJhiHS0dUEl9KblJJeKMXlJjqUoYYZkazxXUjhSJzCwz5PBBjqkAQoTA4bLuyRXdk8byGFxiIlXg62KiZavnElBIngzPq3FhksYPPFYDwZwWn4c%2BWep2Vm6YrJShtIy5UW9AiRQQkhmPWmegiSZzeLliNz4ZFC69MvM4zy5SXMQvlqZGFXelHTOP2hoE%2BqTlo8ubUYT0dknLrxoHrtQsrBPbIF8fcfHAwwOSSuoMoTjT4PHP1%2FKwu3gCiC5hv%2FCdo463vQBZCHPJ0Np&X-Amz-Signature=95568a633f5e3f323998880ff2af1bb87b272b79a4cf4d21276f4b0cf8d297a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOQB6TF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDI3%2FjCAkj%2BQajOns2ykzYtVI11bSqNPSP3MQCXItpV4gIhAM0aNKrRSshwI0PsOJ0xXruPqRuwf0xJHD1OXYr0mFGCKv8DCBwQABoMNjM3NDIzMTgzODA1IgyNQ9o9Nbl35eLq1pkq3AM7E%2BS74iNCo8ou2ah0kswEHbKFgcZ9gXLOUbY%2FSSe0ph0z366uCcMn%2FFma%2FMBMgGMG2LiwbjL5NRqyHs8qOoxDItI229A4k3hWExt%2Fdinks1mk356D9sPQ0KYxF1hNrixkt3OMhTVVqiMrJcc66eeGMPtfk88g%2BlLoS0d%2BSI%2BSWn0AICcsoU8a5rm99C7%2FpStTKWspIEsxxvv33hvRwPtWssDrE9KYkuJJbBnSs2wRn1C%2B89ciXWLkkrcZJXitgb9MDD%2BfvSg%2FWsuyTC2dj%2FKcqTOZOEoYd7yKYaU2UDEnLi0pQ%2F%2F1A9yuiwssTvbxW852Z5nA4vTo%2BFfuBJslAy5wfrbtG4oHWOcQlnfhx8pfI%2BHL9rRacOKQnrc1E8fG7z%2FeAmA2w1CsoylT9ZkloACIX3M8VOcKBT7H3k4Nx1Qr7vR4XWccT%2FITjm4Y0YFx4GJ4zWdo7%2FL1WWUe92ZOWHWrAzBgbgxzuYbpZmOsWFMTi1mi5r9q7itRHZ7oIuOcpI5xLg8nQR1tKUoWQ6uSDeZEa%2F3gBadcOTxU5DztXFAv7awG1KbUZMNkxiuL6gvBfYCkjS3x69ovGToLZ0TACHJhiHS0dUEl9KblJJeKMXlJjqUoYYZkazxXUjhSJzCwz5PBBjqkAQoTA4bLuyRXdk8byGFxiIlXg62KiZavnElBIngzPq3FhksYPPFYDwZwWn4c%2BWep2Vm6YrJShtIy5UW9AiRQQkhmPWmegiSZzeLliNz4ZFC69MvM4zy5SXMQvlqZGFXelHTOP2hoE%2BqTlo8ubUYT0dknLrxoHrtQsrBPbIF8fcfHAwwOSSuoMoTjT4PHP1%2FKwu3gCiC5hv%2FCdo463vQBZCHPJ0Np&X-Amz-Signature=b91605fd054adb700cf03f1c8257644ee2fad8512a28e7fa056b2dcfb9accf55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
