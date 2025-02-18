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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQAOX7B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEMCu0hh0LELvG1wCRKrKpfizeBSMBf5sHF1GnMX%2Bxx6AiEA%2FAnh6Qhx3XOLAq72QcR2KrtSKdFjOtEEEghRHwRfCGcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVMq1AQxZfDf95duircA2rmUpHX%2BVDB3%2BqmgkBO2lEmi6966w8y%2Foy%2FzKhOz7GDBQrTp5x%2F0GPKjkctRyxSp68oyOjr%2B2G%2FHIdwuurlpEG5yJKidL%2B3J%2BgS%2FHOqpnQQvqkqvC%2BEsmKQcU%2FFHIFR3%2F%2BdUzJlTn611um13zbEUXVH%2Bp5TjJSmrEzXP96BnBG%2BBi8SoWDKhLQy3uzBrAbh%2BSw9eOZBivdetWVQXH7ZeneOn3NuuLT8sGqKplAOvioc1ZT5YxXIhw5R6lXc%2BWm%2BIS%2FZKR8gnU67CaIOdsHUOWgVfGB%2B2ArGlruHskT8ZpHvIKpBN4DH91Pa3u1%2FBZAop3uzgKwKQ3%2BikEp6RbmtOFcGhGJnlyTJJU3hC4qLS8knPwDI2cnN4heMsgAyi6KnN6B%2F4ZPAumv3whOiuuk%2B7rePnVgdL4ZcProGAuimcPEYgX6C9uBTMGxpH%2FW6FmXRd15SsV7ZnEUIdTFq7ceky7Ojsi0EZ90I%2BISaUrmO%2FD6ZM%2BNutrqW%2B0m87NpFV4JmIIm9Wkgt%2FsuqDK9dyAd1tzY%2BKSflq7YKRC%2BpnOCRiAcXF%2BkDPYorUOO8neQLruD4132lmOW0ZB2Gac8QxAY3Ie59Iep130gtN4EL0NUJkxaqQxKkX%2FBBMUWaZd9lMIr3070GOqUBTsc5k96Ld%2BBDGvcE4FjZedcl6inDqGux5vUjcLGVnhmZhTNFJl3jKRhiUjiZfzOc3SnqEi4Dog%2FyYzSsfauPCTv8NAOM%2BGfqIYyJaD%2BXfxJTIKQzP3%2BepqoUqh2pG7F3IpITpEGVIupt1zD8ZwRrwquz95qfryiR34pke2hq3IPY3k%2FooslzJo0A0HLNWFp97uZxhCglNcPH7vWTc3m9d8w9Pesx&X-Amz-Signature=ebd080876737387441a95c3f3a54c4820eed5bedb3624a4f95cfe4372b6c9cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQAOX7B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEMCu0hh0LELvG1wCRKrKpfizeBSMBf5sHF1GnMX%2Bxx6AiEA%2FAnh6Qhx3XOLAq72QcR2KrtSKdFjOtEEEghRHwRfCGcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVMq1AQxZfDf95duircA2rmUpHX%2BVDB3%2BqmgkBO2lEmi6966w8y%2Foy%2FzKhOz7GDBQrTp5x%2F0GPKjkctRyxSp68oyOjr%2B2G%2FHIdwuurlpEG5yJKidL%2B3J%2BgS%2FHOqpnQQvqkqvC%2BEsmKQcU%2FFHIFR3%2F%2BdUzJlTn611um13zbEUXVH%2Bp5TjJSmrEzXP96BnBG%2BBi8SoWDKhLQy3uzBrAbh%2BSw9eOZBivdetWVQXH7ZeneOn3NuuLT8sGqKplAOvioc1ZT5YxXIhw5R6lXc%2BWm%2BIS%2FZKR8gnU67CaIOdsHUOWgVfGB%2B2ArGlruHskT8ZpHvIKpBN4DH91Pa3u1%2FBZAop3uzgKwKQ3%2BikEp6RbmtOFcGhGJnlyTJJU3hC4qLS8knPwDI2cnN4heMsgAyi6KnN6B%2F4ZPAumv3whOiuuk%2B7rePnVgdL4ZcProGAuimcPEYgX6C9uBTMGxpH%2FW6FmXRd15SsV7ZnEUIdTFq7ceky7Ojsi0EZ90I%2BISaUrmO%2FD6ZM%2BNutrqW%2B0m87NpFV4JmIIm9Wkgt%2FsuqDK9dyAd1tzY%2BKSflq7YKRC%2BpnOCRiAcXF%2BkDPYorUOO8neQLruD4132lmOW0ZB2Gac8QxAY3Ie59Iep130gtN4EL0NUJkxaqQxKkX%2FBBMUWaZd9lMIr3070GOqUBTsc5k96Ld%2BBDGvcE4FjZedcl6inDqGux5vUjcLGVnhmZhTNFJl3jKRhiUjiZfzOc3SnqEi4Dog%2FyYzSsfauPCTv8NAOM%2BGfqIYyJaD%2BXfxJTIKQzP3%2BepqoUqh2pG7F3IpITpEGVIupt1zD8ZwRrwquz95qfryiR34pke2hq3IPY3k%2FooslzJo0A0HLNWFp97uZxhCglNcPH7vWTc3m9d8w9Pesx&X-Amz-Signature=770fecb24b63334f3a5391bab05658649325ad5600e22405c3be729da9cae1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
