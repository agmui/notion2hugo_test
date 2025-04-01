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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXC2VO6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAyNUxCc7ZoM2cseqSZwkI%2BrH%2FNf1ZllN9zE2BbDFNLMAiBEVQDYHKGS1jPZnf3gLyRhMbVLgVkMl7gdJrvvM8WCNCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JFr7Y7gkzt3jewfKtwDq4dRfFdd7JE7xMGnoz93iTyrtuDGr%2BIswcCFZKzQZqsXYQSHIV1lYJJ0l2d08ETe7VwFYKsZfmtqX4zOKCrP4CNZqZ4%2BsNlR08CPAAGn5m1U30tL4DaUaFNotDo6hg7KX8%2BM2Rae%2FIIf11dnGiXMd8V7M4zlkXm%2FmGqMTlYGHCs8JIFgX7HjUAF3ol7vgp3OmDJNRXQKzChRIDldzyoadZ3DqYipnOTPNHesuNk8mtUFbUfYhqLt0qnMJmFr94ivVAQdwiBQZKG0dDpVeHSSPhmKcGEEZc6A6Jhe3ZrsIclXT%2BSqK95CwMQ4WgnGBE90CFq8kg2UDJY7hh%2B7F67h4hybvUcHRKmXyFVk%2F5JumNXOZ2Cw%2FxuQ4Jp8djNNiuAuCTJklxHZtcaIsrQPu0DlRbpxebm%2BuwSkcyVCfoQ4LsPIlNH%2BecnfPoC2H5zmh6p7hdvHYwhwSrLkl7wSslEWZcSiGXPqwj%2BLg%2Bleqy8ZczAqDTZUYMFbfdPN0rvYYgVxpjdFuSEvxqBdMTRZ4vLZ0%2F%2Bg9WMsKaKx%2F04zY5RUfJDeJS1tPmC61Rwnep9IX0%2BbUBeNTfL1%2Fe%2FuYyhVslh7xlPQCLxxRlzUxFSa562HttNgYZeWWmdZBkDUSfQwg4qtvwY6pgG%2FX6H7cCSnNfhB4ZV1aFXZdDmGS%2Bk2VWOiexYO5wv8HtzWr49ku6rEsPY4lgk2Zkr82EEzaLiny3GGD4bg3R2q%2BR0bPBXd7w8zY8TtU6PMTrnOebRxIDihgxa24QRb%2Bp7bUw6YWVaPbGwbkv3jpj%2B1Mf2e5wXrtjFeWMkmbZ%2FUabbUnBjmQuvaGgpDZG9Z%2BuXK9vOQHpgL%2Fao5G%2FmTDsCSkfQyKfy0&X-Amz-Signature=12ceebb9e067a854f01e00149460a2087b7c52fd68c469585e7eb34cad03bd96&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXC2VO6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAyNUxCc7ZoM2cseqSZwkI%2BrH%2FNf1ZllN9zE2BbDFNLMAiBEVQDYHKGS1jPZnf3gLyRhMbVLgVkMl7gdJrvvM8WCNCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JFr7Y7gkzt3jewfKtwDq4dRfFdd7JE7xMGnoz93iTyrtuDGr%2BIswcCFZKzQZqsXYQSHIV1lYJJ0l2d08ETe7VwFYKsZfmtqX4zOKCrP4CNZqZ4%2BsNlR08CPAAGn5m1U30tL4DaUaFNotDo6hg7KX8%2BM2Rae%2FIIf11dnGiXMd8V7M4zlkXm%2FmGqMTlYGHCs8JIFgX7HjUAF3ol7vgp3OmDJNRXQKzChRIDldzyoadZ3DqYipnOTPNHesuNk8mtUFbUfYhqLt0qnMJmFr94ivVAQdwiBQZKG0dDpVeHSSPhmKcGEEZc6A6Jhe3ZrsIclXT%2BSqK95CwMQ4WgnGBE90CFq8kg2UDJY7hh%2B7F67h4hybvUcHRKmXyFVk%2F5JumNXOZ2Cw%2FxuQ4Jp8djNNiuAuCTJklxHZtcaIsrQPu0DlRbpxebm%2BuwSkcyVCfoQ4LsPIlNH%2BecnfPoC2H5zmh6p7hdvHYwhwSrLkl7wSslEWZcSiGXPqwj%2BLg%2Bleqy8ZczAqDTZUYMFbfdPN0rvYYgVxpjdFuSEvxqBdMTRZ4vLZ0%2F%2Bg9WMsKaKx%2F04zY5RUfJDeJS1tPmC61Rwnep9IX0%2BbUBeNTfL1%2Fe%2FuYyhVslh7xlPQCLxxRlzUxFSa562HttNgYZeWWmdZBkDUSfQwg4qtvwY6pgG%2FX6H7cCSnNfhB4ZV1aFXZdDmGS%2Bk2VWOiexYO5wv8HtzWr49ku6rEsPY4lgk2Zkr82EEzaLiny3GGD4bg3R2q%2BR0bPBXd7w8zY8TtU6PMTrnOebRxIDihgxa24QRb%2Bp7bUw6YWVaPbGwbkv3jpj%2B1Mf2e5wXrtjFeWMkmbZ%2FUabbUnBjmQuvaGgpDZG9Z%2BuXK9vOQHpgL%2Fao5G%2FmTDsCSkfQyKfy0&X-Amz-Signature=00fdf1f9d0cfd1c61814c7e5b50fc6311432602b2a0ed3c76873777f23b0c314&X-Amz-SignedHeaders=host&x-id=GetObject)

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
