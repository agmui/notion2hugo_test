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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMYLYXR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJVkSb%2B6yn6q8pPKqcBI07kulDHCyEpMFX4uiY9rZ0qwIhANmGXVMgDl0XqDeaEclz1q%2FulbogAcwircAPGhNz4etsKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybWw8E48Pild3bQrUq3AM5VkUJCCprlXyVmB08wSlZN7%2BckFE8D5ObZdtZy%2BZmCAdxXus48RBlxza26BLE%2BItS994Yn7zAkmLNBNY7e3HU8KWPrBMd3v7nswj7tLD7%2FwaVVZe1hrkQrk%2B6745D6Y%2BeqX7U3v09%2Fbkdio9wmjkArhcfN0P%2BrYPGKHyQ4WbuoLBEAHzfakJbYw%2BPQuKDeUZksv9S7CKtsKwook2E1eeJ2hJFs3nwM1yq0FQaP2ZEXLlRZq%2F%2BUFq%2Blv%2FmKihFiGF0H%2FXTSSIqdKzdvq60vMuiSh6IAA6L2uMT1lp4jsDpD4JgyIy0Wlg0pMaLSvraEIWjuXg7hgFffzDiMaD4WiORezzbErKps9UIyUzApQeItm1lXMN6tIJ4xrCTvCE%2BTBG%2BwIm4k%2BVVdjeglLbOhBad94ultZn1yGuEJvc7QIUIJBMrVpnYWG%2BsfjaA2%2FqqlDLDD1gwPg5ef6lKOrbh8hWDUmJ6b9u6jA7KyuAPg0wC1vRjw3GvjaxLSdxIzUHI15pQXQXu%2F4X7arrBIdLuMU5NHCM0qZfhGMT3RRzEOsLceQZRzKRpW8tEonbdia8Jzix9%2B6OU9kf%2FKvP19J5UadeMIrH9WG5LxmunJqo4AC5ZuXB7MPtEcVseDg02YDC0zK%2FEBjqkAQSvbMwU0MjU9%2BQEMrvyvKRaBjA74E9dROvPU1BcJpOd5Vr1o7NbUh2STzk%2B5R4LmmETR7S1sQRY3nY4WnxifEIm6y6Ofwg0g4P%2B1q%2FX%2BZDxhTugZTwRPNiGpWPBl21%2F9kF7883axEB92rDjH5E4nkSavjgZRUSUk5UDZcJ74dt391fNv8q7ce%2Fu8Tx2NsB%2F%2BVrByY%2B3VuP4VVQHWfLN%2FNhTA5Pd&X-Amz-Signature=e16c8331b06111318cc13026cb41db1512757e028c438e7e9ca97764941d6439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMYLYXR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJVkSb%2B6yn6q8pPKqcBI07kulDHCyEpMFX4uiY9rZ0qwIhANmGXVMgDl0XqDeaEclz1q%2FulbogAcwircAPGhNz4etsKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybWw8E48Pild3bQrUq3AM5VkUJCCprlXyVmB08wSlZN7%2BckFE8D5ObZdtZy%2BZmCAdxXus48RBlxza26BLE%2BItS994Yn7zAkmLNBNY7e3HU8KWPrBMd3v7nswj7tLD7%2FwaVVZe1hrkQrk%2B6745D6Y%2BeqX7U3v09%2Fbkdio9wmjkArhcfN0P%2BrYPGKHyQ4WbuoLBEAHzfakJbYw%2BPQuKDeUZksv9S7CKtsKwook2E1eeJ2hJFs3nwM1yq0FQaP2ZEXLlRZq%2F%2BUFq%2Blv%2FmKihFiGF0H%2FXTSSIqdKzdvq60vMuiSh6IAA6L2uMT1lp4jsDpD4JgyIy0Wlg0pMaLSvraEIWjuXg7hgFffzDiMaD4WiORezzbErKps9UIyUzApQeItm1lXMN6tIJ4xrCTvCE%2BTBG%2BwIm4k%2BVVdjeglLbOhBad94ultZn1yGuEJvc7QIUIJBMrVpnYWG%2BsfjaA2%2FqqlDLDD1gwPg5ef6lKOrbh8hWDUmJ6b9u6jA7KyuAPg0wC1vRjw3GvjaxLSdxIzUHI15pQXQXu%2F4X7arrBIdLuMU5NHCM0qZfhGMT3RRzEOsLceQZRzKRpW8tEonbdia8Jzix9%2B6OU9kf%2FKvP19J5UadeMIrH9WG5LxmunJqo4AC5ZuXB7MPtEcVseDg02YDC0zK%2FEBjqkAQSvbMwU0MjU9%2BQEMrvyvKRaBjA74E9dROvPU1BcJpOd5Vr1o7NbUh2STzk%2B5R4LmmETR7S1sQRY3nY4WnxifEIm6y6Ofwg0g4P%2B1q%2FX%2BZDxhTugZTwRPNiGpWPBl21%2F9kF7883axEB92rDjH5E4nkSavjgZRUSUk5UDZcJ74dt391fNv8q7ce%2Fu8Tx2NsB%2F%2BVrByY%2B3VuP4VVQHWfLN%2FNhTA5Pd&X-Amz-Signature=8fc8ea653ac48f766a911c0c0ec9992c383a6ed34fda2a06b1e195215f4fa014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
