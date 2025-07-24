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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLIKYGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCID1xgWBVb6WqMzaJWQlHpCBZG8s7jEgDooPqXcEyiO9aAiAzLsy2xD9GJ2%2FA4t%2BPQ%2F0x%2BmtwPKS%2FCFcReD4jNruLNyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMd9lED%2BsgpIA4Y%2BB%2BKtwD2pHnLW9GD6HQz07h7dzFZ6QyOWTQOhEyKEEB15PGiUOi%2BGD7lnBsqlaSNVXQ%2F%2FETcdsuM%2F7nGERPIPuU5UTkVcNbO7WWXEpAjTfGZdLl%2FENzqAl2aQRIn1CaI37jStETCAtHkNQIEuaQhWAaqaumAS1WVrtWmpOIjaRup7qnSufAfXaAXsbXGf8QzVQzIjoQXyVEZudR7KIEJa4jqz291Bnl3Z2aruzWpfr%2FbbT9r0rWHgiY01SLB2TFujFUBM7O5d1masnCjr3xlpSmC%2FlZSkQEA3%2B9PUjmvTYrrlhya8WsWingRZvN5WpjRUxKmSVWiYM%2FDKyoTgxRFQuD6ekeJIeaPI6c8aokntUbTNxUAeNrOZAaofTipFHiruHVRcxaeGClnJXFUowlVgzjR69DcBtOyTCO9T8RuHd1cts1ZLVMupLqXQQkETOXQPFfsICHI2WBDIT2qMbAXDQdz4VZghNfMXD5lTS%2B5viGPKR8m1Lx8Qpnmde8L6SLTHsRFQZLooyQUJLpvd%2Fy2oSmsPkJBn76V%2Fj7JnOur64ZxQdne1Z8xXZPp47LBNaMsO3hGM%2B27dc2%2F5s%2FX0gR2YHNdTLWbi%2BBaxqgwOwAJINC18tr8EBGQZyTRSxyxYysVaQw99mIxAY6pgHuE2dK%2FGICWTD1ZR2q3SYKtonEeu6gb6oTGrJWjvSq%2BQO%2F8EGNLKN9jjoRl1sija6o0hVGmSHsupb6uNCqCOG4NW%2BuygTs8i3UCIDawxBQ9HtOSmY28TjwoppV4jnwZ1OSCheFPyY1KnXMYJutpYg5pArC%2BCRUo6S49ZL1iG9ybxWwJ4Ad0h%2FNiCRR82SU5qDV0U4OL5ki0JWRgL4xhepiW9oFYgdR&X-Amz-Signature=6edde1d9eadd975fd7c33f8a39b78a368032391ab3b87222490c88b4472a2a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLIKYGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCID1xgWBVb6WqMzaJWQlHpCBZG8s7jEgDooPqXcEyiO9aAiAzLsy2xD9GJ2%2FA4t%2BPQ%2F0x%2BmtwPKS%2FCFcReD4jNruLNyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMd9lED%2BsgpIA4Y%2BB%2BKtwD2pHnLW9GD6HQz07h7dzFZ6QyOWTQOhEyKEEB15PGiUOi%2BGD7lnBsqlaSNVXQ%2F%2FETcdsuM%2F7nGERPIPuU5UTkVcNbO7WWXEpAjTfGZdLl%2FENzqAl2aQRIn1CaI37jStETCAtHkNQIEuaQhWAaqaumAS1WVrtWmpOIjaRup7qnSufAfXaAXsbXGf8QzVQzIjoQXyVEZudR7KIEJa4jqz291Bnl3Z2aruzWpfr%2FbbT9r0rWHgiY01SLB2TFujFUBM7O5d1masnCjr3xlpSmC%2FlZSkQEA3%2B9PUjmvTYrrlhya8WsWingRZvN5WpjRUxKmSVWiYM%2FDKyoTgxRFQuD6ekeJIeaPI6c8aokntUbTNxUAeNrOZAaofTipFHiruHVRcxaeGClnJXFUowlVgzjR69DcBtOyTCO9T8RuHd1cts1ZLVMupLqXQQkETOXQPFfsICHI2WBDIT2qMbAXDQdz4VZghNfMXD5lTS%2B5viGPKR8m1Lx8Qpnmde8L6SLTHsRFQZLooyQUJLpvd%2Fy2oSmsPkJBn76V%2Fj7JnOur64ZxQdne1Z8xXZPp47LBNaMsO3hGM%2B27dc2%2F5s%2FX0gR2YHNdTLWbi%2BBaxqgwOwAJINC18tr8EBGQZyTRSxyxYysVaQw99mIxAY6pgHuE2dK%2FGICWTD1ZR2q3SYKtonEeu6gb6oTGrJWjvSq%2BQO%2F8EGNLKN9jjoRl1sija6o0hVGmSHsupb6uNCqCOG4NW%2BuygTs8i3UCIDawxBQ9HtOSmY28TjwoppV4jnwZ1OSCheFPyY1KnXMYJutpYg5pArC%2BCRUo6S49ZL1iG9ybxWwJ4Ad0h%2FNiCRR82SU5qDV0U4OL5ki0JWRgL4xhepiW9oFYgdR&X-Amz-Signature=04f4aa2b9f7f1f6990377771a8d6e788e5c335ef57292be3877d32a70a89efb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
