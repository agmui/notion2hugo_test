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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHW23SS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDsuB9CBJJKLJzyWNcPVXFPOxcCB3G3It6tLBkat6kyuAIhAJeLJuImZSzFA%2BRuU8wIy6Z8V6ChZURLbkVaoLVqxHVeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEcZ0ZBYpJ8RyFhyYq3ANGyMEdaTZqcMfTut4Px9%2BcfRz4CDXWsLUrmMwW2iEu1PNTvyB0vUkGa6DT5cGjgFaeGcn%2BVcQQcDanWJmNp449jNYZPl7yJ0x2r3QRJFX0LvPCP0YZRuv%2BYHXEwptSJW2FEuCewsonjdOEXrjUKPSNgxquk0yq2srSkFUAshXAMMW%2BUtsZTYwewqNNXq1HNID3OtpsAdahtqilw1kU77iGsxGfbesAuh6RY3r7CmrWSvTYTk75EduNZ%2FLKl64rXlQvK1AodazVNSlLh5juU1Q9TKKOHqYbdaRJuhweuNzT%2Bg6NCby%2BFJ7cU98OtyYavt1TIpeuRDGZsdXMNLfK0kjJwfYm3fijG%2FQNwLQHgy%2F6sv9sIjB%2FP7sUkViPHO8aPWAmzVVQpob8MYr5iGWCP2UbF3UHgwUfEhZg0hoBf4O6rVF48T%2FqrRzr9ZDCamRF2WeH5Nt4PpMK1KgqltpSqteEjo9zJxeFl1eTzC7cDtnYA1zFwLSzuKA9GiPT7tzHPkpndDHx3Q5KCEMf7%2FuimV0zTKx%2BUP6jC%2BQXbHEgIue6aevpg%2BmjzgNXvScOIOQLDdGBMQfrEZobRu6FOerj0mQxe7Bw24P4LKhoF9WSAPjgsQd%2FI3lwWPrk5mqVYTDeg8vABjqkAcus32wCtA4b2Qq8kTumQE3OkSuwr%2FIiqPA2IyjglIVjner0VTHvnqdRhz4ewwyGghbQx%2FRf4CwcN8OMaSoeFKecfi0AIQVEMRPBYcE4ucpc6HCBU8S3%2BQgPpz1DIMTGVNYmMegYrKCoJTew34eOJ20rVZEmrlaBW3h8YMQpyQrcpKuHim5hoqdEkoe%2B5B6BSytf2yit7faVrDGMOXes%2BpQYQToJ&X-Amz-Signature=725bb10797bc8d56c7450ce2f5379bf790e712a9a311a356dc9376a0d9138000&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHW23SS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDsuB9CBJJKLJzyWNcPVXFPOxcCB3G3It6tLBkat6kyuAIhAJeLJuImZSzFA%2BRuU8wIy6Z8V6ChZURLbkVaoLVqxHVeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEcZ0ZBYpJ8RyFhyYq3ANGyMEdaTZqcMfTut4Px9%2BcfRz4CDXWsLUrmMwW2iEu1PNTvyB0vUkGa6DT5cGjgFaeGcn%2BVcQQcDanWJmNp449jNYZPl7yJ0x2r3QRJFX0LvPCP0YZRuv%2BYHXEwptSJW2FEuCewsonjdOEXrjUKPSNgxquk0yq2srSkFUAshXAMMW%2BUtsZTYwewqNNXq1HNID3OtpsAdahtqilw1kU77iGsxGfbesAuh6RY3r7CmrWSvTYTk75EduNZ%2FLKl64rXlQvK1AodazVNSlLh5juU1Q9TKKOHqYbdaRJuhweuNzT%2Bg6NCby%2BFJ7cU98OtyYavt1TIpeuRDGZsdXMNLfK0kjJwfYm3fijG%2FQNwLQHgy%2F6sv9sIjB%2FP7sUkViPHO8aPWAmzVVQpob8MYr5iGWCP2UbF3UHgwUfEhZg0hoBf4O6rVF48T%2FqrRzr9ZDCamRF2WeH5Nt4PpMK1KgqltpSqteEjo9zJxeFl1eTzC7cDtnYA1zFwLSzuKA9GiPT7tzHPkpndDHx3Q5KCEMf7%2FuimV0zTKx%2BUP6jC%2BQXbHEgIue6aevpg%2BmjzgNXvScOIOQLDdGBMQfrEZobRu6FOerj0mQxe7Bw24P4LKhoF9WSAPjgsQd%2FI3lwWPrk5mqVYTDeg8vABjqkAcus32wCtA4b2Qq8kTumQE3OkSuwr%2FIiqPA2IyjglIVjner0VTHvnqdRhz4ewwyGghbQx%2FRf4CwcN8OMaSoeFKecfi0AIQVEMRPBYcE4ucpc6HCBU8S3%2BQgPpz1DIMTGVNYmMegYrKCoJTew34eOJ20rVZEmrlaBW3h8YMQpyQrcpKuHim5hoqdEkoe%2B5B6BSytf2yit7faVrDGMOXes%2BpQYQToJ&X-Amz-Signature=1d6bbf3cf5ba25aa58c82cee302dffaf3074f605e450334b9cf76882b796978e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
