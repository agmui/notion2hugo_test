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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=a4005cdb1794fc06e2a280b5026a5fc0a6127ab6b2dd019aaaace9bd77eaea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=95ae58e7c13aa92e8a9d9a8dd70093b52ccf0e2404a3248583c1ac1812f66832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
