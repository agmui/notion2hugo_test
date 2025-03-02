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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNZYJLQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAlzW0il3GEq8fko%2FOAv2URgx31i11X%2FW0DQhtfvJSJAiEAsHaE0c5NPJD2%2BzGyqVIM5l1KwGJYrB6KI2lw9YPMzDsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fm54O4QzKs5CXvDyrcA5fVttVSemlDx7yEynLqQQte1oQz4YtJ7SKhV8JdFRn9JcgrRRwb%2BE95Xzl72rT3VZdJUmIrkDDV2o01hHITQHDzDd21xF0deT70uGS2KOvfDrjzp3Hbz9yIsrSAlJgqOmJuWu3gxeEPp0KQpKaitqrWsbCU1j1INRxLSqDp1rcZ%2Ft%2BhWJWtKL1Sf2i2uXuAkq877COWF1wYilgvTuW80NzgFRPiCTlU7SjFCnWH8NO8zHPImW8M0R%2F2MEWTmvFV7ZUgS0WmdyWm3cefa9P5TzyRDVdhZ6DD8nBBqPAJPshS3BrMVo3r3X1shEeo%2BkcyZrE1No12gNCbYbHFrSII%2F8UkP2Mu%2FKmLrl2IzJ3eVkpmHJusKYWsqdq8IW3SR1X3qka7kd7CEV%2FcVqryMA9PNqGmm1eFOR3MVopmDyUJ4LKW1KulAblIsoU6NRTrXcKH%2FEjLYtVV910N5VMa7VGVKe3%2F%2Fs3FMBY0FuzPE2NpN6WaijJztBSQHEcPCt%2B1HA5Xrw3wWgTZKGKLnNHRIfV0oS1yKL9ohA8SR42r2r8y5ldj5SNH66ZkFOxB8dpMTY77ONB8dLdNJU745r1pQO6k%2BmG7KfzFfabvh486Qqatxl5avXCvQMaFVEqlI7ZHMKiZkr4GOqUBZGQXloLi3KtS6XuuSPcyYOdPtSgP2pQudscL5f18Le881mz7myjTNoxvOIyHuBbFsEf%2BV18Gm%2Fi34vZXMIzg%2FUbVuGFMekwhVJLtWQkqBeAmqis9tUWxyuslpVc76J5Y36cFRH2jc7OFixenQswqhb5qax9dVfwXlQLjSuIIRpxtF60k6u1cHh8b30ZkCXm%2F%2BH%2BifY%2BYR%2BHCHgHfETcIInOjdK3x&X-Amz-Signature=418c89eb8d92c9be0e50de4ee5cef77e18e7a218bcabfd641b949f06d4371334&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNZYJLQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAlzW0il3GEq8fko%2FOAv2URgx31i11X%2FW0DQhtfvJSJAiEAsHaE0c5NPJD2%2BzGyqVIM5l1KwGJYrB6KI2lw9YPMzDsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fm54O4QzKs5CXvDyrcA5fVttVSemlDx7yEynLqQQte1oQz4YtJ7SKhV8JdFRn9JcgrRRwb%2BE95Xzl72rT3VZdJUmIrkDDV2o01hHITQHDzDd21xF0deT70uGS2KOvfDrjzp3Hbz9yIsrSAlJgqOmJuWu3gxeEPp0KQpKaitqrWsbCU1j1INRxLSqDp1rcZ%2Ft%2BhWJWtKL1Sf2i2uXuAkq877COWF1wYilgvTuW80NzgFRPiCTlU7SjFCnWH8NO8zHPImW8M0R%2F2MEWTmvFV7ZUgS0WmdyWm3cefa9P5TzyRDVdhZ6DD8nBBqPAJPshS3BrMVo3r3X1shEeo%2BkcyZrE1No12gNCbYbHFrSII%2F8UkP2Mu%2FKmLrl2IzJ3eVkpmHJusKYWsqdq8IW3SR1X3qka7kd7CEV%2FcVqryMA9PNqGmm1eFOR3MVopmDyUJ4LKW1KulAblIsoU6NRTrXcKH%2FEjLYtVV910N5VMa7VGVKe3%2F%2Fs3FMBY0FuzPE2NpN6WaijJztBSQHEcPCt%2B1HA5Xrw3wWgTZKGKLnNHRIfV0oS1yKL9ohA8SR42r2r8y5ldj5SNH66ZkFOxB8dpMTY77ONB8dLdNJU745r1pQO6k%2BmG7KfzFfabvh486Qqatxl5avXCvQMaFVEqlI7ZHMKiZkr4GOqUBZGQXloLi3KtS6XuuSPcyYOdPtSgP2pQudscL5f18Le881mz7myjTNoxvOIyHuBbFsEf%2BV18Gm%2Fi34vZXMIzg%2FUbVuGFMekwhVJLtWQkqBeAmqis9tUWxyuslpVc76J5Y36cFRH2jc7OFixenQswqhb5qax9dVfwXlQLjSuIIRpxtF60k6u1cHh8b30ZkCXm%2F%2BH%2BifY%2BYR%2BHCHgHfETcIInOjdK3x&X-Amz-Signature=01ee684ddff9c2166055c1fb8ff01e442c2a1b465c745edca7c1b5f52ff7586a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
