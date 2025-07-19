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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAIJVZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1bhGMr12W7F1jNpKF6uUsdwsYW7yn6HUWmfHKanQdmAiA2DBR6zmb%2FE5xjZSfuSxsclONGrr4gaaCu0huF5C0h%2FiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv25aH%2BtIBnqkUfNWKtwDNqDr0XkckIZnCz2xURAoDl5u4ybxDdbXwcn8PovH7aQXg5zuTlmjSJqtq9aOifzvCFhcyoISIH7y03oiDaOBOqU%2FECGgB%2BqT1K0b%2BPfSUIxNVZ6wJnT4ZNM8m87aGgM9OpPaZKrhLMYmXysMZYTmTBm2sza7sR3DX4BsPhuwyLSjU4FE6zDZHPkSGrrIC%2B2wXaAwiFtPqijbcehbzCGS%2BrLOxZbZDx6Iuf22y5%2FOOUDjjAtmI7E0tpnDyuSReq3fIK%2FY2X8fFQgATQ0HIgqW9sDrTbyEeICmJAB9v1cjFDN%2BzZhqUV0geRZFv9MO9LY8MlDnywvgOEDE2N2o4iFirWYBMPyXfBTThHfx3GMNv1SfOkfBZ0DFvfgFAkyFVA%2FTQrJIO%2FU%2FcsxJELcJOgJbxfk35nxuNfFrAKsDwue4xOhh1vzHV6aP94OphRxvH7blgXnvJ3OX%2BKA53UXqZwjijfc8WJzTdQhVdnDjihKwwoRA0j%2ByLPJ%2BAA5fwwx0MgVbFlaBzdg8UPdrVm9O3xMrbK3BhAe9hKinohGChrVwk9by8ruygr2Z1FFcRPvESm%2FBz1HM%2FiBGFt0xQRBM8vtkVRUAyuK%2FbBwkVt8wzdOj4p2A8CaI1N7Oze7CrA4wnLDrwwY6pgHzYCLpJWv9yIADRPO%2FgOCngKdAXWcW8UBHeYXfzNroDhfWQ3h1p59McQnuxC9qppJjqwXUEhO2MOOzpE1GMNpcDLtuFVFN0FVRWNy3Gyl%2FLBGZRO1DhOKDUbg7r5DtRxks%2BSUbXLPEVAxq2n8pArXIoWXyBYnzOTM82z2Y04YvU3D9sRzHPWzzTVuqUc5h5Tn3SSXbfuAvivZQKGGkuJE6NCLNwEts&X-Amz-Signature=2639525d44b4bb56b864bf62db0703bc561ffd8b62da3f55c17e7a35e5ca2e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAIJVZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1bhGMr12W7F1jNpKF6uUsdwsYW7yn6HUWmfHKanQdmAiA2DBR6zmb%2FE5xjZSfuSxsclONGrr4gaaCu0huF5C0h%2FiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv25aH%2BtIBnqkUfNWKtwDNqDr0XkckIZnCz2xURAoDl5u4ybxDdbXwcn8PovH7aQXg5zuTlmjSJqtq9aOifzvCFhcyoISIH7y03oiDaOBOqU%2FECGgB%2BqT1K0b%2BPfSUIxNVZ6wJnT4ZNM8m87aGgM9OpPaZKrhLMYmXysMZYTmTBm2sza7sR3DX4BsPhuwyLSjU4FE6zDZHPkSGrrIC%2B2wXaAwiFtPqijbcehbzCGS%2BrLOxZbZDx6Iuf22y5%2FOOUDjjAtmI7E0tpnDyuSReq3fIK%2FY2X8fFQgATQ0HIgqW9sDrTbyEeICmJAB9v1cjFDN%2BzZhqUV0geRZFv9MO9LY8MlDnywvgOEDE2N2o4iFirWYBMPyXfBTThHfx3GMNv1SfOkfBZ0DFvfgFAkyFVA%2FTQrJIO%2FU%2FcsxJELcJOgJbxfk35nxuNfFrAKsDwue4xOhh1vzHV6aP94OphRxvH7blgXnvJ3OX%2BKA53UXqZwjijfc8WJzTdQhVdnDjihKwwoRA0j%2ByLPJ%2BAA5fwwx0MgVbFlaBzdg8UPdrVm9O3xMrbK3BhAe9hKinohGChrVwk9by8ruygr2Z1FFcRPvESm%2FBz1HM%2FiBGFt0xQRBM8vtkVRUAyuK%2FbBwkVt8wzdOj4p2A8CaI1N7Oze7CrA4wnLDrwwY6pgHzYCLpJWv9yIADRPO%2FgOCngKdAXWcW8UBHeYXfzNroDhfWQ3h1p59McQnuxC9qppJjqwXUEhO2MOOzpE1GMNpcDLtuFVFN0FVRWNy3Gyl%2FLBGZRO1DhOKDUbg7r5DtRxks%2BSUbXLPEVAxq2n8pArXIoWXyBYnzOTM82z2Y04YvU3D9sRzHPWzzTVuqUc5h5Tn3SSXbfuAvivZQKGGkuJE6NCLNwEts&X-Amz-Signature=f7d531025bfa38ff414157b83a14e0cd35724565dbcf10e334c2b1e56efae01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
