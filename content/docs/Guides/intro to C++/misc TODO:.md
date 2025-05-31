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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QKKMRL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WyQWRLerOU0JUp6wyOxZHh9MihqPPiDE6sNhufFt8AiAJ6yerLypYSyD6ZHz56rX2PIKJg2TpqBY5bdDa3YIHwiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc2Z6ZEfPxfZeNLnKtwDmRkhtxcBP3YyhGOqH6HEcvk%2Fmr46BPm9CO9CuioFyKkPmoJNJs1BYzeAqRUWVAjukdBkZ%2FpkXB1Q2w7FF8tDafyQVf33j675m7hhOBLvJ1m6K6H%2BafRkPsWFUwtQntML11oO1opRThLlkDWjFFFoIhMO1ALam2KLBm%2FWqfC1MeUoqnLKHblgaqMu6s04e6MimcKu7WIo7loRvOfBUAKFc2cURV6pJOv87PJUWKwN7qC138YCoKpzxZ41bjGIKlgFCud4Fa9cvWBT8i0T21aNXBIKyv%2FcIHOz9lI0VN%2BDQdDsl7hXWL1ZcvqRYqIAXOB0%2FDMFsG1GgreaHeYfJGlkuSNfXfH1PYBUmQsyY8Z6ao%2BgC0D4j8%2FI4fm5Pc0782Vm4cjgqw%2B8dMop6SZ2z6ND0hMbFkZ6kb8zflk7fH%2BzNlgwK296a7VFRsaUAt6GwoXMv3eJ8%2B8lqcmK4M1bTuJVR1SDPg9NHKBy3DY0xrrgdzzdWcz6AiXhmG0Wc0qpamjs4I8GxzpmW85TwOqE1kN3543r65PdjWL6joecMG3wwqZ5uiKDvP70vwsZLbK0cI6G2QK2IfPn5XoMXN6WZ%2BvQbW2aBviNfSCHpPdvit%2FNrRZEhMaCvbp62eqi%2BD8wvdrrwQY6pgHBW1Kd2G4QVhNqWK85hwaPoMTWRNmrmkkEJu%2FOYgD3FPzfBenYPyqEHJWG4cVsCZAeE6jtHz9daZeMLJGRXrgG3pbASkGRQHg%2Fs6ZKS769cC8KOonLVRFxFP2nehLIxqkVRlCRWCUMgVPmHoJj7jfhKfmupLx35sl4eHHhwKtLBA%2BSBEC3v2C3XhbTSqzos1dHIWxjEBqbcGaGO9neuZj57pHeonJW&X-Amz-Signature=69d470c56fcfb33defbe4effdbada7566dacc817810eaf7f98e5536bc18a7681&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QKKMRL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WyQWRLerOU0JUp6wyOxZHh9MihqPPiDE6sNhufFt8AiAJ6yerLypYSyD6ZHz56rX2PIKJg2TpqBY5bdDa3YIHwiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc2Z6ZEfPxfZeNLnKtwDmRkhtxcBP3YyhGOqH6HEcvk%2Fmr46BPm9CO9CuioFyKkPmoJNJs1BYzeAqRUWVAjukdBkZ%2FpkXB1Q2w7FF8tDafyQVf33j675m7hhOBLvJ1m6K6H%2BafRkPsWFUwtQntML11oO1opRThLlkDWjFFFoIhMO1ALam2KLBm%2FWqfC1MeUoqnLKHblgaqMu6s04e6MimcKu7WIo7loRvOfBUAKFc2cURV6pJOv87PJUWKwN7qC138YCoKpzxZ41bjGIKlgFCud4Fa9cvWBT8i0T21aNXBIKyv%2FcIHOz9lI0VN%2BDQdDsl7hXWL1ZcvqRYqIAXOB0%2FDMFsG1GgreaHeYfJGlkuSNfXfH1PYBUmQsyY8Z6ao%2BgC0D4j8%2FI4fm5Pc0782Vm4cjgqw%2B8dMop6SZ2z6ND0hMbFkZ6kb8zflk7fH%2BzNlgwK296a7VFRsaUAt6GwoXMv3eJ8%2B8lqcmK4M1bTuJVR1SDPg9NHKBy3DY0xrrgdzzdWcz6AiXhmG0Wc0qpamjs4I8GxzpmW85TwOqE1kN3543r65PdjWL6joecMG3wwqZ5uiKDvP70vwsZLbK0cI6G2QK2IfPn5XoMXN6WZ%2BvQbW2aBviNfSCHpPdvit%2FNrRZEhMaCvbp62eqi%2BD8wvdrrwQY6pgHBW1Kd2G4QVhNqWK85hwaPoMTWRNmrmkkEJu%2FOYgD3FPzfBenYPyqEHJWG4cVsCZAeE6jtHz9daZeMLJGRXrgG3pbASkGRQHg%2Fs6ZKS769cC8KOonLVRFxFP2nehLIxqkVRlCRWCUMgVPmHoJj7jfhKfmupLx35sl4eHHhwKtLBA%2BSBEC3v2C3XhbTSqzos1dHIWxjEBqbcGaGO9neuZj57pHeonJW&X-Amz-Signature=031c52ca67a74206085aae21d8c34844330cc8401dc8249b29edcb038ba6dd06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
