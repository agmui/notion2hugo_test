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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLRGIRU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICXRG8eEEDpIKLF1xI22Jk3CC61JOEKAH5V4oScISpB3AiEAjkMDX5V2gOB8xRe3kHqwjvW6vvU2e7zJJ9DzQ%2FgyZ%2FMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2Svl41bz1Mlfuy3SrcAwMIiOEEhR52Ts3488pdCdZFRQxkEY%2FHijH8ZknkxeHSpCis0omg3bzccommkutGf1Mrr%2BXWwvO2Ek5v08sa43CV1LbxIURL6OaAogWU5b4Qgga1v1Xa6RQJsO0INu%2BbtZe3VjPWLFwOLtORFj26Gp9pfU1TzJPn3dw3OPlaq%2FliBfAiMqnDv4WQjrtCm%2BOhCYG2cBTujURtNCnLS%2FEkQAR4%2Bg5DsmZBj5lewjKu5rTa0Y9H2%2FexPR7bLKoKYDgH%2FOckARduHba%2Bo2ahWa3cRVihRc6Gg6Wqbqp0OvOnpld7H2i73U%2ByerUaXTeA2cDmwSpW7JUoOPe0VaNvES2QZlv43Ip7mdGVW7wAYgK0OQDH5dMBoJJzt9zYDwDvdWVAi%2B8jbE2aMrwZZmd26B5RtoTfCSwafQ3smbQyo2Jqeh4wBWz6iiitzMIkNWo8pjJxnHNSQckdpczfwS%2BS8DaEqE1uUFiGcs90T4FcKnYwVbvypE2fhE8llreS0slWa5fi%2B%2BgaYIRt6ENEBH2IFtdu%2BvE6TSeEJtVDC0jtd7wsCg63DWQRZQbSHbVNMgd0xKvw3H3D7JTOlxPSZqPsiTajPzA3%2F5F90bNNTcXx4kc63jsEbEsRfhUjw8lHNgiAMISPxMEGOqUB5StZ8J8ekSDFpiso7xlBQ0zkaDBJPtpIk2v9Gu36Lvcfs%2FvIIEM3s52AiCgIkD21qQ%2Bz843PbeLBhqy9%2BZpmEvMntfeZt9v9fz5%2BkFrOLGxTcnBpKf2gZcdIVI5aQvLmJnaq3Q%2B3PYwVN5VrroOpZSwSHpUK4TyXcKWJ%2F%2BsESsfEDRYzCVJ8bSz1qucL919Hyqtp0ZsWJ4XEKBuicLUSX7oebjnG&X-Amz-Signature=8c27efbdef7d05154beb59b64ed44505d3a780241b0053793caa074965caaea4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLRGIRU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICXRG8eEEDpIKLF1xI22Jk3CC61JOEKAH5V4oScISpB3AiEAjkMDX5V2gOB8xRe3kHqwjvW6vvU2e7zJJ9DzQ%2FgyZ%2FMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2Svl41bz1Mlfuy3SrcAwMIiOEEhR52Ts3488pdCdZFRQxkEY%2FHijH8ZknkxeHSpCis0omg3bzccommkutGf1Mrr%2BXWwvO2Ek5v08sa43CV1LbxIURL6OaAogWU5b4Qgga1v1Xa6RQJsO0INu%2BbtZe3VjPWLFwOLtORFj26Gp9pfU1TzJPn3dw3OPlaq%2FliBfAiMqnDv4WQjrtCm%2BOhCYG2cBTujURtNCnLS%2FEkQAR4%2Bg5DsmZBj5lewjKu5rTa0Y9H2%2FexPR7bLKoKYDgH%2FOckARduHba%2Bo2ahWa3cRVihRc6Gg6Wqbqp0OvOnpld7H2i73U%2ByerUaXTeA2cDmwSpW7JUoOPe0VaNvES2QZlv43Ip7mdGVW7wAYgK0OQDH5dMBoJJzt9zYDwDvdWVAi%2B8jbE2aMrwZZmd26B5RtoTfCSwafQ3smbQyo2Jqeh4wBWz6iiitzMIkNWo8pjJxnHNSQckdpczfwS%2BS8DaEqE1uUFiGcs90T4FcKnYwVbvypE2fhE8llreS0slWa5fi%2B%2BgaYIRt6ENEBH2IFtdu%2BvE6TSeEJtVDC0jtd7wsCg63DWQRZQbSHbVNMgd0xKvw3H3D7JTOlxPSZqPsiTajPzA3%2F5F90bNNTcXx4kc63jsEbEsRfhUjw8lHNgiAMISPxMEGOqUB5StZ8J8ekSDFpiso7xlBQ0zkaDBJPtpIk2v9Gu36Lvcfs%2FvIIEM3s52AiCgIkD21qQ%2Bz843PbeLBhqy9%2BZpmEvMntfeZt9v9fz5%2BkFrOLGxTcnBpKf2gZcdIVI5aQvLmJnaq3Q%2B3PYwVN5VrroOpZSwSHpUK4TyXcKWJ%2F%2BsESsfEDRYzCVJ8bSz1qucL919Hyqtp0ZsWJ4XEKBuicLUSX7oebjnG&X-Amz-Signature=59575b16f47dc001d9053292756d5de4bd75897e397bf3077c65b4988931ba32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
