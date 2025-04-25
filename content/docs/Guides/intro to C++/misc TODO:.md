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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NLYY2F%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDANw8HDC2bCrLSWRz8obfc2sv79SOqLy%2FigrEnjRdlUwIhAKZj5ypyqR3J0OMMa5CBeFPdReUiwxP4XYmIzrfgK%2FKxKv8DCCEQABoMNjM3NDIzMTgzODA1IgwkWYWyehClqUVA9hAq3APLU9MlptKoa4eHcMJEnslwnKFqZFI%2BLqiGna6AZGha2bFMIj8s8vqWPW3xR8yHss19j2Z37SmFR5zLjCD0rWBFkiuV8x4DtnY2uMRgay%2Fk9TzKcJlWZzSSYbpp%2BcjCznr7mEKEarzoyCVRUswP9buKGFT9hAs22fLXZtPotsT2toELZG9hVHpbNGRGcbiMmibfVpSkAYRPNQR%2FksQl1XDnVED34Wx6RnRrxaJhiWoicwHpvW3%2FGwnogZ0BWwT5V9O%2FZkIZ7fDgKjFz2wuLYRk0%2BK4bE3k7Da8JqJryjd%2F483EaBCI66fH6DTHroZ7MRpybqGPqi%2BPr51HaYbGYfsP4Q7UNCPXTvJ5km8GnHEaMRzT8FvJtTv%2F3PcKeHd6C%2FFuVQotaBusp9FAJLJP7RsQjkOGzkQ%2FiDo%2BC8vjP7Qikhya5jM%2F%2BqliNGNuG5ygItSAa5LyV379cH%2BR4bjK5YCEBdvOWEOr9FtE5A3XCTq8ZKkS7gLFJfMbAU%2B4JNTUQH6Emeuw0REg9N7liGk94aeTlKGys0w7CtNiSfIVBQ2Pd63PJemIE8zrxuBeN3DNMsfc4f18GiVeyP681pDfqf8xBedUVqjnnIZiiY4DKXDFuL%2FxI3yGWFeLYoEfhOTDUqqvABjqkAULTZpAIA3KnktkcV%2FUaJqvfXk%2FtiXTxvE%2BhKXW6mlJatJ3o4Bwm%2BRaQ%2F1FkmsQ7w9m%2F5kTzrckDTEesxqqqXvo0YzZPASb6rFoYm04ipHHZeh%2FkuR5A%2BcXyDhnx%2F7c0EYtP179zQL%2Bcmv3Nosw5yijO3gEVhhMyTptSJP2vpX262CCA6rKiWnZdW4x2AAiZ2bysKlQyRZdZGbBiPP%2Bg7C%2FaQCUh&X-Amz-Signature=aa3d68653524c11925332689a26b151990538f9c63b8a7290a1b7c8fc67caec8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NLYY2F%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDANw8HDC2bCrLSWRz8obfc2sv79SOqLy%2FigrEnjRdlUwIhAKZj5ypyqR3J0OMMa5CBeFPdReUiwxP4XYmIzrfgK%2FKxKv8DCCEQABoMNjM3NDIzMTgzODA1IgwkWYWyehClqUVA9hAq3APLU9MlptKoa4eHcMJEnslwnKFqZFI%2BLqiGna6AZGha2bFMIj8s8vqWPW3xR8yHss19j2Z37SmFR5zLjCD0rWBFkiuV8x4DtnY2uMRgay%2Fk9TzKcJlWZzSSYbpp%2BcjCznr7mEKEarzoyCVRUswP9buKGFT9hAs22fLXZtPotsT2toELZG9hVHpbNGRGcbiMmibfVpSkAYRPNQR%2FksQl1XDnVED34Wx6RnRrxaJhiWoicwHpvW3%2FGwnogZ0BWwT5V9O%2FZkIZ7fDgKjFz2wuLYRk0%2BK4bE3k7Da8JqJryjd%2F483EaBCI66fH6DTHroZ7MRpybqGPqi%2BPr51HaYbGYfsP4Q7UNCPXTvJ5km8GnHEaMRzT8FvJtTv%2F3PcKeHd6C%2FFuVQotaBusp9FAJLJP7RsQjkOGzkQ%2FiDo%2BC8vjP7Qikhya5jM%2F%2BqliNGNuG5ygItSAa5LyV379cH%2BR4bjK5YCEBdvOWEOr9FtE5A3XCTq8ZKkS7gLFJfMbAU%2B4JNTUQH6Emeuw0REg9N7liGk94aeTlKGys0w7CtNiSfIVBQ2Pd63PJemIE8zrxuBeN3DNMsfc4f18GiVeyP681pDfqf8xBedUVqjnnIZiiY4DKXDFuL%2FxI3yGWFeLYoEfhOTDUqqvABjqkAULTZpAIA3KnktkcV%2FUaJqvfXk%2FtiXTxvE%2BhKXW6mlJatJ3o4Bwm%2BRaQ%2F1FkmsQ7w9m%2F5kTzrckDTEesxqqqXvo0YzZPASb6rFoYm04ipHHZeh%2FkuR5A%2BcXyDhnx%2F7c0EYtP179zQL%2Bcmv3Nosw5yijO3gEVhhMyTptSJP2vpX262CCA6rKiWnZdW4x2AAiZ2bysKlQyRZdZGbBiPP%2Bg7C%2FaQCUh&X-Amz-Signature=59f1809cc8de3a506d0142ccd2dd7f6dee4aa87c680e2b839aa0a1e982b13e83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
