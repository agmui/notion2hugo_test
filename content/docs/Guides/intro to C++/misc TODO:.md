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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457DTLAD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLqFZrLJoria1zsSdT4pfGE%2FKaOM4zu6GqU%2Bme8Uv%2FhwIhAMHF15f0H4WPjku36FqV6Mj%2B7bAZp6bBEKOmcjo8R%2FnJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF1d87HMjEWMARRSwq3AORPTwRTz3LWTQYPqoxviKtWJUgtPoIN%2F0QEKqzDcqZfPnyhUwOuDUm%2BFHdihQefh08PTHp%2FALXBCngStzPCG9RC7GKcMxHUpBA%2BubHnTNRR0IcPngqXjLH%2Bup0XtiJbhuJeKI5zNBPjriuKoSo%2BDHKXXLmEcKSr8KM5ZVIpUNBST2%2BmiTbhMz7OtWVApgIVEXbhl3VLxMVcF0VUCZX3dg071P0Mkm%2BnV%2B%2BKD4ANlYVN4tOW2E8OsI5GE8kVbs%2BGqEoUehkUPqhuPc4siugLA2X0aAqP4Pi0ppMjzh6w5tCCkRD%2FdXsd8Y%2F9BCRpZCv7YGO0ldNp%2B%2BZoD5akvoLaxoJ06VS%2F%2FaOtVmw4HS%2BWn%2BlWt81NMPyl9ymQZ6yTjre6F14btKVXit7F2Ox%2FIR0wc31aWMjiDUfnuVMyYGfJLOGXJngbmxvLT%2BdhZQpRzj%2Fi%2FCdA1alzgvZDKCxayNthBrPUQ6XgKKBp7d4G4Kn7ZOzqnYdjgTdIpE2lOVlD%2BEr2qFvnqI4T0yR4rUsZLN%2FCKiScZ7aUZaqDK8x74nh0Uay68MrJewjyvWIOgebgIFlRItH4CSjQ%2FXAqqIYERFDcaW3icqVLgmpuUMYMnsm9SXL8bFq3%2Ff0wrPLQFVejDDt%2BN7CBjqkAfDAiCfT6i83%2Bye4ai%2BpV9NVCueTyCAi8AcS%2B061XaA%2FQpSHrXnhLAKLGSFw8LioB%2Fp%2Fvkkzk%2BOpgm2XjW0rzFPG7Tt8gb%2F0yxJVfPVr2id2BTj6RQ8of3nuDg4oxX3yHxkxJpWG1eNFZJ13d6RXwYJWfal6ysk5rCgMp3lYowsa3iyMNXy%2BPg%2Fra1w1OF0MM8SmvfHSu2DonUhqe0sjW4SqE8vW&X-Amz-Signature=041ba6b61a43c776c39f327e14e2b150f65c6eb89cae3852e3f87bf23aed7a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457DTLAD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLqFZrLJoria1zsSdT4pfGE%2FKaOM4zu6GqU%2Bme8Uv%2FhwIhAMHF15f0H4WPjku36FqV6Mj%2B7bAZp6bBEKOmcjo8R%2FnJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF1d87HMjEWMARRSwq3AORPTwRTz3LWTQYPqoxviKtWJUgtPoIN%2F0QEKqzDcqZfPnyhUwOuDUm%2BFHdihQefh08PTHp%2FALXBCngStzPCG9RC7GKcMxHUpBA%2BubHnTNRR0IcPngqXjLH%2Bup0XtiJbhuJeKI5zNBPjriuKoSo%2BDHKXXLmEcKSr8KM5ZVIpUNBST2%2BmiTbhMz7OtWVApgIVEXbhl3VLxMVcF0VUCZX3dg071P0Mkm%2BnV%2B%2BKD4ANlYVN4tOW2E8OsI5GE8kVbs%2BGqEoUehkUPqhuPc4siugLA2X0aAqP4Pi0ppMjzh6w5tCCkRD%2FdXsd8Y%2F9BCRpZCv7YGO0ldNp%2B%2BZoD5akvoLaxoJ06VS%2F%2FaOtVmw4HS%2BWn%2BlWt81NMPyl9ymQZ6yTjre6F14btKVXit7F2Ox%2FIR0wc31aWMjiDUfnuVMyYGfJLOGXJngbmxvLT%2BdhZQpRzj%2Fi%2FCdA1alzgvZDKCxayNthBrPUQ6XgKKBp7d4G4Kn7ZOzqnYdjgTdIpE2lOVlD%2BEr2qFvnqI4T0yR4rUsZLN%2FCKiScZ7aUZaqDK8x74nh0Uay68MrJewjyvWIOgebgIFlRItH4CSjQ%2FXAqqIYERFDcaW3icqVLgmpuUMYMnsm9SXL8bFq3%2Ff0wrPLQFVejDDt%2BN7CBjqkAfDAiCfT6i83%2Bye4ai%2BpV9NVCueTyCAi8AcS%2B061XaA%2FQpSHrXnhLAKLGSFw8LioB%2Fp%2Fvkkzk%2BOpgm2XjW0rzFPG7Tt8gb%2F0yxJVfPVr2id2BTj6RQ8of3nuDg4oxX3yHxkxJpWG1eNFZJ13d6RXwYJWfal6ysk5rCgMp3lYowsa3iyMNXy%2BPg%2Fra1w1OF0MM8SmvfHSu2DonUhqe0sjW4SqE8vW&X-Amz-Signature=75b3a44763c9286927eec3d9784c7dd37dbbcee3bf9c3d28434489e256e88fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
