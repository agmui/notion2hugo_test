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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA26G75%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd1FuYF2PFFGGQTFXfqk7mYL8Gr7HpzqAD6yGOtoKY7AiEA1%2Fjh8kaoPquMr3k%2FO%2Fx9wYk4GLPKCfh79qPgqwPrtaAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbdjU16GRTsiaNbRCrcA8cMtOjQ2cwz8RTqgeQDcH7q0HVQwjSCUcwzamMs3Fd0iXFILOsyYzIInSSKhqsq9pgLQV25wFW06vPfn4BKkOwsecxe0xvFShNCVmkDxQWR20t%2Bl6m2cSJI1SmV8uVAZ0CIqqY0PQTkMxTkY2WlcQ%2BfjQI1J%2FMsvg2QyWdMqgbs7FqVF5wT5Lh%2BQ1Gyk0JXQev2SVw%2Bu3GpmFyfMRsOUjZ%2FyVHch5CzFX5CKyDaFNuQUXUZbewrpYWUAtCg%2BZv3avZsgV8JAwoWUNsDA9U9MrgOAFfaiBNIkvtTPmhEkg%2F%2B4odKDImXaq9O1lmBD6JnkFOX9Y6TxMOLJ%2F4GXzQZAFPdNIE27mTagsT3zXYzDhIK3Hje%2F84oJXftx2%2BFTZHCOuUqfxSI4fLv%2FLW3ZCPqTsLqHeGwS6NtOF%2BAud8umIpIpiE7glcW8FbgOKvlfmFXsNZjebGjWCn63ITd96uf9FpOUABWWenCzRIDc6gllYt7mhjp%2By6sOWIz8rbBnI1LoMlfqzFl002zfOny5dND0104%2Fhep%2FaE8tsH2GkX1WEc%2BNo8XKYCARzlnj9RVTF0Yj0%2Bl239Q1I428T5O1qZajLzcRuUxFW%2FlcYQ6z6Msn%2BPjO54yx0z96OwfUs8jMJCYncIGOqUBwDNXtu1G8TifJFCHF1%2F9zf1lCZ%2FDWgbZ6QeIv7hUDZfZDILxo7%2FK4Pe5lmEMX9GvaY5%2FdIsUEDus3mNYkBSbnRxcAZjv2k%2F6v%2B%2Bzsy9T9vW7Eotl8DGZPnjPrJKlyeUkhrGYOZxPo2dViTOAzm5qTUBdvn8l%2Fx3y0HPUsjs3vjZcJnx8gLCNbmjyb2CFoO160oQlPGL53EBAWiciDJabpprHbFYQ&X-Amz-Signature=721c13b5283a1cd2a0634b5be552672fd84e1fb3ca3c625fc7f5f6fa18128cda&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA26G75%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd1FuYF2PFFGGQTFXfqk7mYL8Gr7HpzqAD6yGOtoKY7AiEA1%2Fjh8kaoPquMr3k%2FO%2Fx9wYk4GLPKCfh79qPgqwPrtaAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbdjU16GRTsiaNbRCrcA8cMtOjQ2cwz8RTqgeQDcH7q0HVQwjSCUcwzamMs3Fd0iXFILOsyYzIInSSKhqsq9pgLQV25wFW06vPfn4BKkOwsecxe0xvFShNCVmkDxQWR20t%2Bl6m2cSJI1SmV8uVAZ0CIqqY0PQTkMxTkY2WlcQ%2BfjQI1J%2FMsvg2QyWdMqgbs7FqVF5wT5Lh%2BQ1Gyk0JXQev2SVw%2Bu3GpmFyfMRsOUjZ%2FyVHch5CzFX5CKyDaFNuQUXUZbewrpYWUAtCg%2BZv3avZsgV8JAwoWUNsDA9U9MrgOAFfaiBNIkvtTPmhEkg%2F%2B4odKDImXaq9O1lmBD6JnkFOX9Y6TxMOLJ%2F4GXzQZAFPdNIE27mTagsT3zXYzDhIK3Hje%2F84oJXftx2%2BFTZHCOuUqfxSI4fLv%2FLW3ZCPqTsLqHeGwS6NtOF%2BAud8umIpIpiE7glcW8FbgOKvlfmFXsNZjebGjWCn63ITd96uf9FpOUABWWenCzRIDc6gllYt7mhjp%2By6sOWIz8rbBnI1LoMlfqzFl002zfOny5dND0104%2Fhep%2FaE8tsH2GkX1WEc%2BNo8XKYCARzlnj9RVTF0Yj0%2Bl239Q1I428T5O1qZajLzcRuUxFW%2FlcYQ6z6Msn%2BPjO54yx0z96OwfUs8jMJCYncIGOqUBwDNXtu1G8TifJFCHF1%2F9zf1lCZ%2FDWgbZ6QeIv7hUDZfZDILxo7%2FK4Pe5lmEMX9GvaY5%2FdIsUEDus3mNYkBSbnRxcAZjv2k%2F6v%2B%2Bzsy9T9vW7Eotl8DGZPnjPrJKlyeUkhrGYOZxPo2dViTOAzm5qTUBdvn8l%2Fx3y0HPUsjs3vjZcJnx8gLCNbmjyb2CFoO160oQlPGL53EBAWiciDJabpprHbFYQ&X-Amz-Signature=cdfcdc61336805970c3befa25dd23d6c7e22cff18ef2c9771f04f03fa042b28c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
