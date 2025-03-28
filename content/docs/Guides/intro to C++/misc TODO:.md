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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ECJB7G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVU3kG3HpgA3DHXfvhQIziTNiNNFLhcDLgMAioUFzraQIhALzbIzGU91oy6XXuuVXVQuRKlBuIwqZK1tbygL470iAhKv8DCFoQABoMNjM3NDIzMTgzODA1Igz7VeFBnVsxyo6u2PEq3ANGDyFy9OCgn2ypcTCeZviWOr9%2BEJT5jXBGKVAToT5y00piOcRMtEeNRI1u42ZBEg0bo6EPCanPwwPCnNx7H0bWBjTLdI2Z7IUAhEm0e4aPsMOiGJi8R5ztzB6OddLIRd2cIsFWI8ukf0w8ecB%2BE8OrBAYzH8e9f98sSMFp7Rk5zpuQBcnghRjB92xyhp2LwEuPtcJQVVoSPXUAIEP8w01xYiLbpheQcGXNjkFMrreArm62aLFwPEbejbi9hDj%2BOQ91HDotYVCSdc2cXePgxjqwN9kXibKbCL6nhPydnCT15bUirIn5pISNAbv3HK8%2F%2B77OVtXu5EKI30GlPYBOJMLaSme%2F56XhjyOHUT49JNj1VmwyA%2F8GFNTpBpIi2SUnIcE9%2BxhJJfURoZH9%2FXCzJZMB%2FhoCdJvUZUnMpkwY0NnjQpVz1rU4oMyS4i6Us8Z7DYPrll%2BAwI9vbeD1s%2BJb%2F4wO%2FrtQatII9%2B6NnCgEJ0%2FatnijEF8qnc2x796u9kviqaITThde0v8FlY%2BlmHa1GwT2lc5wF1T9oN1hdX3yJcQWRhkaq1XsYOv1UNaKiFjlBh36IdF%2FZdS6BbzSnA%2F6EfU1xX7HzHOhkd8wGAgo8cqkdWXztba0piTRIuteTzDGv5m%2FBjqkAdrpgb6ChAO0eYYh%2FmufCjfr2J6DQbXY2u2Bj30hbPsXMkxdTjn6EPfjvsPmHPXN45dxWFwZJ4oQxeV1PcF1MBc1eymeUwvVRm0MH%2FdO1qfEOPajWpw9aowe83PT0ol20YCt4BP2gCiDZtxqCMpnIGG7wie4RX4r20z8YXVBL%2BlJ4ajmP6DtxUNiEVxzQcrcILuLepAW2%2Bm0WBqCoGVB5l8NigJy&X-Amz-Signature=c86d984e645a94e0a130bb7169c44cb7dc182c0f2b26ca6b006eab7d91818922&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ECJB7G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVU3kG3HpgA3DHXfvhQIziTNiNNFLhcDLgMAioUFzraQIhALzbIzGU91oy6XXuuVXVQuRKlBuIwqZK1tbygL470iAhKv8DCFoQABoMNjM3NDIzMTgzODA1Igz7VeFBnVsxyo6u2PEq3ANGDyFy9OCgn2ypcTCeZviWOr9%2BEJT5jXBGKVAToT5y00piOcRMtEeNRI1u42ZBEg0bo6EPCanPwwPCnNx7H0bWBjTLdI2Z7IUAhEm0e4aPsMOiGJi8R5ztzB6OddLIRd2cIsFWI8ukf0w8ecB%2BE8OrBAYzH8e9f98sSMFp7Rk5zpuQBcnghRjB92xyhp2LwEuPtcJQVVoSPXUAIEP8w01xYiLbpheQcGXNjkFMrreArm62aLFwPEbejbi9hDj%2BOQ91HDotYVCSdc2cXePgxjqwN9kXibKbCL6nhPydnCT15bUirIn5pISNAbv3HK8%2F%2B77OVtXu5EKI30GlPYBOJMLaSme%2F56XhjyOHUT49JNj1VmwyA%2F8GFNTpBpIi2SUnIcE9%2BxhJJfURoZH9%2FXCzJZMB%2FhoCdJvUZUnMpkwY0NnjQpVz1rU4oMyS4i6Us8Z7DYPrll%2BAwI9vbeD1s%2BJb%2F4wO%2FrtQatII9%2B6NnCgEJ0%2FatnijEF8qnc2x796u9kviqaITThde0v8FlY%2BlmHa1GwT2lc5wF1T9oN1hdX3yJcQWRhkaq1XsYOv1UNaKiFjlBh36IdF%2FZdS6BbzSnA%2F6EfU1xX7HzHOhkd8wGAgo8cqkdWXztba0piTRIuteTzDGv5m%2FBjqkAdrpgb6ChAO0eYYh%2FmufCjfr2J6DQbXY2u2Bj30hbPsXMkxdTjn6EPfjvsPmHPXN45dxWFwZJ4oQxeV1PcF1MBc1eymeUwvVRm0MH%2FdO1qfEOPajWpw9aowe83PT0ol20YCt4BP2gCiDZtxqCMpnIGG7wie4RX4r20z8YXVBL%2BlJ4ajmP6DtxUNiEVxzQcrcILuLepAW2%2Bm0WBqCoGVB5l8NigJy&X-Amz-Signature=88d279960231cda21eecac93318730403ac79cb9d4e759b3cf13f70d298df408&X-Amz-SignedHeaders=host&x-id=GetObject)

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
