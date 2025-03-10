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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZNKB45%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDYeixKmDznRDHO5rkSkkOCarEPy3bpSDMNVSfqL0Ix%2FAiB%2BCz9BR3JW%2Ff%2B1P4htXD3W840BlPCCuOXLQ%2BnaK%2FIM9iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSNTfBwoIV%2BcFy54KtwDq7Z7v91ZS0ykth5JCsmOKDUTfyncPyefS4FCUwnIkIrVjzYFV76eKla7TaBQOVjNEl%2BJUX48hVMndnoniVpKkb%2FV1GCVNSKxoyIYJIL0n26mpVBqSff0JwUtselPObiURJygKJ6JwEGm2nSVHr531H6ib0C6qHOdJnDQz1zZhBcevanGmMqNkxqmDVgPNAP%2Fk24ONvsnd6FpDVMYXpjIvzm6QWX2%2BNtkek6yWxMlbAZcBW8Iqo2CR3zYzKccxGg9Rlqr08X6moHLvPfOVe93Y%2BkjrXO7EQrlOl%2FBHa4XkKnmOSk1pqWim4ZHNpPsq1266NDlVa8r9LPH9LKSb%2BrCl4YmDoBylK1rUHHfMA0DRWijh6Qywp1zsXhu9bhBIAoo79S4vwpR9xcZl%2FVtHofRvRFVijKqrewyt2taBkZdvQvlnAJBkqOX3Y5SE24t9WWObfrOo2WdhO%2BEn9fBOT5FB9oyr881Xtca7XMJEAJYYZCZ0VQ7Lw3r5zuWNQVqS3SKFam0dGeG9eZy9rxHsL6ug%2FsTzddIXQNsw3lrdgz%2BHlexU01QhZ1JFT4o1UYyo25QLeGbvseSMzbYN5EQZOPlDFa%2Bm66Yxq%2Bzyu8%2BlagT0oVqaJ0o%2BACXGIkd79gwh%2Fq4vgY6pgF121xHwMC2Rrd%2FbW9PRreu6h9Jmd6Md0X2JuhDnB0yucmkUPB5aclkVKYB13eHK%2FZsAA6kDfs7OtQgV6fCcJiTHRIii771s0xTXE5J2FaowGvDbUOp9r2jNgoPbikM71f5jtL6v%2B3GJsrIu3VSHil1EVvYsIpB09TqiDN1yvZmTDyfqHXFfWE%2F7sTDCfK3Jn0MkmoVvcyF9DMMoYOcYAeocl%2BE4ghP&X-Amz-Signature=881cb5d4841d8655030e3855a82112e45085f77b53efadd4a269ae6bfef4f9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZNKB45%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDYeixKmDznRDHO5rkSkkOCarEPy3bpSDMNVSfqL0Ix%2FAiB%2BCz9BR3JW%2Ff%2B1P4htXD3W840BlPCCuOXLQ%2BnaK%2FIM9iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSNTfBwoIV%2BcFy54KtwDq7Z7v91ZS0ykth5JCsmOKDUTfyncPyefS4FCUwnIkIrVjzYFV76eKla7TaBQOVjNEl%2BJUX48hVMndnoniVpKkb%2FV1GCVNSKxoyIYJIL0n26mpVBqSff0JwUtselPObiURJygKJ6JwEGm2nSVHr531H6ib0C6qHOdJnDQz1zZhBcevanGmMqNkxqmDVgPNAP%2Fk24ONvsnd6FpDVMYXpjIvzm6QWX2%2BNtkek6yWxMlbAZcBW8Iqo2CR3zYzKccxGg9Rlqr08X6moHLvPfOVe93Y%2BkjrXO7EQrlOl%2FBHa4XkKnmOSk1pqWim4ZHNpPsq1266NDlVa8r9LPH9LKSb%2BrCl4YmDoBylK1rUHHfMA0DRWijh6Qywp1zsXhu9bhBIAoo79S4vwpR9xcZl%2FVtHofRvRFVijKqrewyt2taBkZdvQvlnAJBkqOX3Y5SE24t9WWObfrOo2WdhO%2BEn9fBOT5FB9oyr881Xtca7XMJEAJYYZCZ0VQ7Lw3r5zuWNQVqS3SKFam0dGeG9eZy9rxHsL6ug%2FsTzddIXQNsw3lrdgz%2BHlexU01QhZ1JFT4o1UYyo25QLeGbvseSMzbYN5EQZOPlDFa%2Bm66Yxq%2Bzyu8%2BlagT0oVqaJ0o%2BACXGIkd79gwh%2Fq4vgY6pgF121xHwMC2Rrd%2FbW9PRreu6h9Jmd6Md0X2JuhDnB0yucmkUPB5aclkVKYB13eHK%2FZsAA6kDfs7OtQgV6fCcJiTHRIii771s0xTXE5J2FaowGvDbUOp9r2jNgoPbikM71f5jtL6v%2B3GJsrIu3VSHil1EVvYsIpB09TqiDN1yvZmTDyfqHXFfWE%2F7sTDCfK3Jn0MkmoVvcyF9DMMoYOcYAeocl%2BE4ghP&X-Amz-Signature=f476b2e7a562e31fa067833c5f8857234c692a8b57eccf794e80d4257be951e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
