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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLIFCMU%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDIpq2CKWSjCV%2Bc7CgBkYqkQ9mxl92WB9ZV5c7zjABs3gIhAJGiwIVJQlceL7Gvv54iGpNXrOuiyEoalpcZcjmMAgQ3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzPl9Uj%2FOnPaJEFgpMq3AMNjAjXTmbgTPqEADEkdXotCF8HHf4APfGaRCnsUPK3jiRn4McYz5EizSAowUpt4GdHeXepoZtYmFVhpdzgLEWP6wPjA1oAN91UmC3hxsJgmT0YAQcD0Hql6RJRSgoJTfiJEoDOa421f%2BRHWj4ResLXkT9z7GYymMwiwDyaDsqi4DBRMOgkYhK2jI8dKvTBuRVg7b6HYrkjLYS6S3p5Kwmb5bU8LGQxd259w4sdEaM1qWX24xaSjqfqA71w6HuFmJtH1cdApFO1Mz9qnQ7CEfd4Vj5NVOUkOUzgM0oi8fQsqqwhO4YYVNAmMZeG23ApkPKejnxUOdEOF8LhOL056MAKSs8TWFzoVFPYUoKwIRfOrTyEeFo39IpKLsaieLW1Qa1xdBdCt2tumy5xwIDxyNrLSbtzIMPmwPWvbkEl6oHcM0gayJx2OFuayRgRC7U3VBDTZWacoXYEHrjrygP%2BGNoQDVTNLnhjfz%2BTv%2FFb784MvmPZvX5e%2F5Cl3wrj0ejp9tVEbv7i3z4LFs20Hu8pZy8GPFLGS0aBx4z0OqzM1Dq9p%2B%2F0bblQWwZK2gOHxOsv1%2BHGEnJjvuvMzJ1z7Il0kHLjBdF8bCsGgW%2BQvKzG8LLJFpO362TS4%2F8vRNoeDTDr2qbSBjqkAbExkbrKXqupXGkhYgP4nYGqfq%2F%2B1oS%2F%2FVmAj7yNVWvd2rbTq%2F5WF9POaYi1WzgYsSm0criGoNGKdu5MF4Z8SHQ9FDLjs2yWV7CyOBxxyajekkSAIiD%2FIf5vCHVFHhmMa5RTFTbwoPO8imuKdUVgqi8PIiEimQ7XOaQyLx%2FNlMb4qQQNxEFcBO3OKa3l%2BsQVVRnSyhuuI0pUM6J1LIDRGvdhwdwa&X-Amz-Signature=d3ff1389ad68e0f245cb2b384e93200b254875002d3684e00a91635f703716b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLIFCMU%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDIpq2CKWSjCV%2Bc7CgBkYqkQ9mxl92WB9ZV5c7zjABs3gIhAJGiwIVJQlceL7Gvv54iGpNXrOuiyEoalpcZcjmMAgQ3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzPl9Uj%2FOnPaJEFgpMq3AMNjAjXTmbgTPqEADEkdXotCF8HHf4APfGaRCnsUPK3jiRn4McYz5EizSAowUpt4GdHeXepoZtYmFVhpdzgLEWP6wPjA1oAN91UmC3hxsJgmT0YAQcD0Hql6RJRSgoJTfiJEoDOa421f%2BRHWj4ResLXkT9z7GYymMwiwDyaDsqi4DBRMOgkYhK2jI8dKvTBuRVg7b6HYrkjLYS6S3p5Kwmb5bU8LGQxd259w4sdEaM1qWX24xaSjqfqA71w6HuFmJtH1cdApFO1Mz9qnQ7CEfd4Vj5NVOUkOUzgM0oi8fQsqqwhO4YYVNAmMZeG23ApkPKejnxUOdEOF8LhOL056MAKSs8TWFzoVFPYUoKwIRfOrTyEeFo39IpKLsaieLW1Qa1xdBdCt2tumy5xwIDxyNrLSbtzIMPmwPWvbkEl6oHcM0gayJx2OFuayRgRC7U3VBDTZWacoXYEHrjrygP%2BGNoQDVTNLnhjfz%2BTv%2FFb784MvmPZvX5e%2F5Cl3wrj0ejp9tVEbv7i3z4LFs20Hu8pZy8GPFLGS0aBx4z0OqzM1Dq9p%2B%2F0bblQWwZK2gOHxOsv1%2BHGEnJjvuvMzJ1z7Il0kHLjBdF8bCsGgW%2BQvKzG8LLJFpO362TS4%2F8vRNoeDTDr2qbSBjqkAbExkbrKXqupXGkhYgP4nYGqfq%2F%2B1oS%2F%2FVmAj7yNVWvd2rbTq%2F5WF9POaYi1WzgYsSm0criGoNGKdu5MF4Z8SHQ9FDLjs2yWV7CyOBxxyajekkSAIiD%2FIf5vCHVFHhmMa5RTFTbwoPO8imuKdUVgqi8PIiEimQ7XOaQyLx%2FNlMb4qQQNxEFcBO3OKa3l%2BsQVVRnSyhuuI0pUM6J1LIDRGvdhwdwa&X-Amz-Signature=029fe6c4168c72f52c6d925f5faa58e11d9a4d63e6adf7c2935fd764a988b46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
