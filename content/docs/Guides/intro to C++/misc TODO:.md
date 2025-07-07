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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OE7MKX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCenXzph2AEgym67CPu3YI9C2GzEAAJSBw9BbjoIKFiNAIgYqeymM1HHBQQJntj7qV4hnirqUkqPg0WiHztZYaKwSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM%2FkFXjaXH8WvEu99ircA59clqnZTRbsT56X%2BU%2FCId4rYx5cFK1TjwGPGXCTxJ9KPr3uX2xaJo%2FoOU68lVgVRblcgLPfjGn31vvaAEmJ%2FSKAixapxaQUYF8eJYjyK94DcSey6ml%2FrBbTVjsy5cVtroQLGMERGq7xypEQBi7P4yN1AFx5jrRrc9ZPSaFWL9j%2BHP9rJ0AqjwnJj%2F8TXR5yYmrU%2F5OSJopBowZg3GvHZ4SjdBQf%2FtvXd1olasMfaqCkF8P31FtPNX6iv7EEWUbCa3P3%2FeIQQUi2B%2B5v6RjDvXHl5ihzyBpIIv7oBLXsqHUJWRTRWOoyrvGnPNycmfLQDbjCsPObfDfV8liXaDV%2Blj0KdEAIfhDjWpSP3t1Iu%2Fj6RKwdV22hndbxMisMawtznNPr%2BQCRIhcFVCbwLsmrGpk2a6ufTXabPADse%2BCJG42TLJYneb%2BswEye8yB0%2FeYPNzNDeERB5%2Bphc9%2FAc2IEXxkzHeuFyKRqahNKiil%2FlRH9hPoQFwtqftduwD9JEVSz6cQB8tbhRdvURMyR4HIXIJlzerm8WAWS0lNyKWRm2WZ00vye76CzrOiKQyTpehG%2FGsdQhKPbUpiAnIyNS3o7NSwiz0Nfk%2B5%2FNhsS6A1kgkaFADUqcQWnwwnw118XMPWSscMGOqUBUeKDNzdevxeuyetA6aG%2BDNitiFllfZHnCt2qP5w2B%2FmmKuDRU8aI%2BQ0bF1grsMck%2Bz6qvJ1cnGVQS3BnEWlg2lxihx65DFSEiLdikiJO8baTp65drjAVtcuIPn6%2F07dmrpjT1WjlO%2FKAS7T3PcF2ZWyRHP8VtbmyPuL97pZnrkweCkP10Z%2BTDRF7T89zo%2FrTTNchgJ9QRZza3MBSc1kFjM%2B1TNbY&X-Amz-Signature=3bbef87a6da26efdca670bb28554ed7777387017039d2793579f67bb6e2f7e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OE7MKX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCenXzph2AEgym67CPu3YI9C2GzEAAJSBw9BbjoIKFiNAIgYqeymM1HHBQQJntj7qV4hnirqUkqPg0WiHztZYaKwSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM%2FkFXjaXH8WvEu99ircA59clqnZTRbsT56X%2BU%2FCId4rYx5cFK1TjwGPGXCTxJ9KPr3uX2xaJo%2FoOU68lVgVRblcgLPfjGn31vvaAEmJ%2FSKAixapxaQUYF8eJYjyK94DcSey6ml%2FrBbTVjsy5cVtroQLGMERGq7xypEQBi7P4yN1AFx5jrRrc9ZPSaFWL9j%2BHP9rJ0AqjwnJj%2F8TXR5yYmrU%2F5OSJopBowZg3GvHZ4SjdBQf%2FtvXd1olasMfaqCkF8P31FtPNX6iv7EEWUbCa3P3%2FeIQQUi2B%2B5v6RjDvXHl5ihzyBpIIv7oBLXsqHUJWRTRWOoyrvGnPNycmfLQDbjCsPObfDfV8liXaDV%2Blj0KdEAIfhDjWpSP3t1Iu%2Fj6RKwdV22hndbxMisMawtznNPr%2BQCRIhcFVCbwLsmrGpk2a6ufTXabPADse%2BCJG42TLJYneb%2BswEye8yB0%2FeYPNzNDeERB5%2Bphc9%2FAc2IEXxkzHeuFyKRqahNKiil%2FlRH9hPoQFwtqftduwD9JEVSz6cQB8tbhRdvURMyR4HIXIJlzerm8WAWS0lNyKWRm2WZ00vye76CzrOiKQyTpehG%2FGsdQhKPbUpiAnIyNS3o7NSwiz0Nfk%2B5%2FNhsS6A1kgkaFADUqcQWnwwnw118XMPWSscMGOqUBUeKDNzdevxeuyetA6aG%2BDNitiFllfZHnCt2qP5w2B%2FmmKuDRU8aI%2BQ0bF1grsMck%2Bz6qvJ1cnGVQS3BnEWlg2lxihx65DFSEiLdikiJO8baTp65drjAVtcuIPn6%2F07dmrpjT1WjlO%2FKAS7T3PcF2ZWyRHP8VtbmyPuL97pZnrkweCkP10Z%2BTDRF7T89zo%2FrTTNchgJ9QRZza3MBSc1kFjM%2B1TNbY&X-Amz-Signature=4bc40df9eacef7e71b9b9128cd66afa5295f4ce509a51e166fdeb82a6bf3d2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
