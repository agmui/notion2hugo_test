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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLS2IPM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZT%2F4EmTlCSddfAyeQgci8w73ycs5MyRM6%2BTmn0wo%2FpAiEAjs5NG2DE%2BqCXecRTQ6R7znH4UBU%2B4us8NwFMXxfYA5wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7qlHG2kgEjfw9dnyrcAz4OM9qz78dqChu1ax%2B7E28wfaJMWa%2FDPZZNoKar0p0BUuQXPNA2Sdtba8lubtmRjR%2F%2F%2Fagab0nvaafjRymO1M0npCenOJL7Y2cDBC568PyXeloMEzynVW3sMOUTPQNk5PecR2PCrtsFrPb45PLI8N8g%2FrwrGv9l%2Bo%2Ff%2BdTvoYJRTDwErTxVNBLFYxXqMv8I%2BsPF0gxQpKPWlLtTGx4wwrhXlp0o8N3cF8KQ%2FTqJF2LGlYeTStlC1wNId%2FkWIRGJPxOaECwWAH1Y4FrKYuU6h2AUuZMpMVNqC%2FEJ0Wz2uIVNP%2FFmH%2FvOm%2F4L%2FGO5%2BKN7XRtXCVKC4GAWOUbZb%2BN1HWQOG9YOWbYZEBSrxmE%2FnEZXkMbWo7PgwiH0b0UxYpbedwaEHaUtqDoFEfk9%2F12UFEy4AHHlqj9XtFGK8tZK914AMeNSaLbPrzIgd%2BMrXFPA6Zcmk%2FlMkv%2Bf5GNMVQMzjxrCVU1A5kA3cbuZ9zF3NwPtkhWRFp%2BWuycFNIh%2BMDu6qUsh%2Fs1kWKAv2sZiyDnF7pU4fXyFkl%2BBSdaGP5OaXaNyeWMzYD1sT0vpwP5D3zY9ZJrrLdsannWkTrrVbMGm0IwinEv%2B5U9NDn4XKzOuxy2WcekARnYrBEH%2B3mUJMKvaksMGOqUBQ8doJwyx5QhG9n1tVlG7oHHPDQugZQ2H36s7efqVp%2BwkyhwZ8x8EDcE5YLRn0HFzKDB5CrL09g1Pn3cROPw5YpLzH2S%2FuVnvod7xB8kGfksvDnleylgv0W4iTDIdS60TQGCr%2BTNJQV7lWHoj7EHBpN7XWiPvAKgTmDkPpb1QGHY6gF3uIYipZGeAzROjFv%2FDBJekKd7GXAXXQs7uMgm5MD2TDH%2BD&X-Amz-Signature=2adf726938dc3e0320a75448e1c7a3b1affee48278b2d5ae54b2b01db83da9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLS2IPM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZT%2F4EmTlCSddfAyeQgci8w73ycs5MyRM6%2BTmn0wo%2FpAiEAjs5NG2DE%2BqCXecRTQ6R7znH4UBU%2B4us8NwFMXxfYA5wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7qlHG2kgEjfw9dnyrcAz4OM9qz78dqChu1ax%2B7E28wfaJMWa%2FDPZZNoKar0p0BUuQXPNA2Sdtba8lubtmRjR%2F%2F%2Fagab0nvaafjRymO1M0npCenOJL7Y2cDBC568PyXeloMEzynVW3sMOUTPQNk5PecR2PCrtsFrPb45PLI8N8g%2FrwrGv9l%2Bo%2Ff%2BdTvoYJRTDwErTxVNBLFYxXqMv8I%2BsPF0gxQpKPWlLtTGx4wwrhXlp0o8N3cF8KQ%2FTqJF2LGlYeTStlC1wNId%2FkWIRGJPxOaECwWAH1Y4FrKYuU6h2AUuZMpMVNqC%2FEJ0Wz2uIVNP%2FFmH%2FvOm%2F4L%2FGO5%2BKN7XRtXCVKC4GAWOUbZb%2BN1HWQOG9YOWbYZEBSrxmE%2FnEZXkMbWo7PgwiH0b0UxYpbedwaEHaUtqDoFEfk9%2F12UFEy4AHHlqj9XtFGK8tZK914AMeNSaLbPrzIgd%2BMrXFPA6Zcmk%2FlMkv%2Bf5GNMVQMzjxrCVU1A5kA3cbuZ9zF3NwPtkhWRFp%2BWuycFNIh%2BMDu6qUsh%2Fs1kWKAv2sZiyDnF7pU4fXyFkl%2BBSdaGP5OaXaNyeWMzYD1sT0vpwP5D3zY9ZJrrLdsannWkTrrVbMGm0IwinEv%2B5U9NDn4XKzOuxy2WcekARnYrBEH%2B3mUJMKvaksMGOqUBQ8doJwyx5QhG9n1tVlG7oHHPDQugZQ2H36s7efqVp%2BwkyhwZ8x8EDcE5YLRn0HFzKDB5CrL09g1Pn3cROPw5YpLzH2S%2FuVnvod7xB8kGfksvDnleylgv0W4iTDIdS60TQGCr%2BTNJQV7lWHoj7EHBpN7XWiPvAKgTmDkPpb1QGHY6gF3uIYipZGeAzROjFv%2FDBJekKd7GXAXXQs7uMgm5MD2TDH%2BD&X-Amz-Signature=44942270fce8bcb93fb440c893d076657a7f43b677b3012cba8b56647c9a99b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
