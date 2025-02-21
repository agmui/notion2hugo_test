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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIRSAJG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPRcWrIOaozBNZB46Qd6Fef6xkimPTKQO2jL9ErmI9wIgZsSq4flGm70SMvut6SsmbM6dehdxe8OYRoBnf5ww6sYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf16bUadp3vyFThCrcA4bf8H7RQDRXRA%2Byz%2BI4O842cQaN2E%2FwPnqITINAL48S2igVudNWy5oDnp9F6Qcs0sa4xhhV0BA7Elm9OwX%2FBUBFWhnVd0spqVZUtQrvgrO%2BOVUW%2F%2BUdSD4jTT2fzZgoG7zIr5j52fVxB%2BPrFIVl%2BcDCTKbfz1sRe7U2RV3s610lDeHTIqmIPb1SM8Laq11Fxx%2B5KYHJIBpMhi757b3AHLd2C5Vin0zjHJlqJ1o7X1znZ0HHlgM8HqkPkajHFULBYJmlacvOWs9pKbv2%2BrdGGaUx9MkNbuZtlrX7O%2BtQsfgV3V8REE1U9QuIcn8Yw7wi%2BIohfmo6GUhI21Si4YLv4WYl0DSuXJ6MGSgDKc9vOJonqe5DieILGWWSnpgmrciYisumm7GB%2Fi%2F5P7XqUjpQdfor2FYl6%2BYBXvWITA0AjR4v9bEnEpr%2F6fRVSRO%2BSRiMBZ1aC4UmJQsR%2B94PeX98IbZWbRXEfzxh5v%2B3SZ2tF2vyeDv5a6h5GiHfbjgalc8Q7hz1Yv1DzP8KbrSxXFRuU%2B4h5DbArICbqSnT9oVatTHPN8plpxlmtZCjZW6pVT21xC0mcojCwRaEbmoHu%2FDVBs1EOAKLhjsmeQfQmojRLKgyyFPBU3YVJVfIZwT%2BMK2j4L0GOqUBAnWFynr9kdocDA1oKxRJMVgXVtCCkRSKhft47dhkGfl8MeHmXyJfZUbaVv2JTUKVadJuAbr77YpRu%2FA1Ceg%2Fozfk6RsFYSwjW1HOFRvhIumtxx2XsdIe3YTE0jjzIWEHgK%2BJHk4LHBQqW64ixeYi3B3JH1VKU3PMrpS6PN4kRUgXUa94V0aWvdQdEZVB%2BohKG5P5xsqX%2BfjUnJHC4OagKYgBjMUy&X-Amz-Signature=28c53dc72d07fb49ba3a7331f44e5e2500c2e072430c9c502d737852f433b9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIRSAJG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPRcWrIOaozBNZB46Qd6Fef6xkimPTKQO2jL9ErmI9wIgZsSq4flGm70SMvut6SsmbM6dehdxe8OYRoBnf5ww6sYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf16bUadp3vyFThCrcA4bf8H7RQDRXRA%2Byz%2BI4O842cQaN2E%2FwPnqITINAL48S2igVudNWy5oDnp9F6Qcs0sa4xhhV0BA7Elm9OwX%2FBUBFWhnVd0spqVZUtQrvgrO%2BOVUW%2F%2BUdSD4jTT2fzZgoG7zIr5j52fVxB%2BPrFIVl%2BcDCTKbfz1sRe7U2RV3s610lDeHTIqmIPb1SM8Laq11Fxx%2B5KYHJIBpMhi757b3AHLd2C5Vin0zjHJlqJ1o7X1znZ0HHlgM8HqkPkajHFULBYJmlacvOWs9pKbv2%2BrdGGaUx9MkNbuZtlrX7O%2BtQsfgV3V8REE1U9QuIcn8Yw7wi%2BIohfmo6GUhI21Si4YLv4WYl0DSuXJ6MGSgDKc9vOJonqe5DieILGWWSnpgmrciYisumm7GB%2Fi%2F5P7XqUjpQdfor2FYl6%2BYBXvWITA0AjR4v9bEnEpr%2F6fRVSRO%2BSRiMBZ1aC4UmJQsR%2B94PeX98IbZWbRXEfzxh5v%2B3SZ2tF2vyeDv5a6h5GiHfbjgalc8Q7hz1Yv1DzP8KbrSxXFRuU%2B4h5DbArICbqSnT9oVatTHPN8plpxlmtZCjZW6pVT21xC0mcojCwRaEbmoHu%2FDVBs1EOAKLhjsmeQfQmojRLKgyyFPBU3YVJVfIZwT%2BMK2j4L0GOqUBAnWFynr9kdocDA1oKxRJMVgXVtCCkRSKhft47dhkGfl8MeHmXyJfZUbaVv2JTUKVadJuAbr77YpRu%2FA1Ceg%2Fozfk6RsFYSwjW1HOFRvhIumtxx2XsdIe3YTE0jjzIWEHgK%2BJHk4LHBQqW64ixeYi3B3JH1VKU3PMrpS6PN4kRUgXUa94V0aWvdQdEZVB%2BohKG5P5xsqX%2BfjUnJHC4OagKYgBjMUy&X-Amz-Signature=0ffcdfb260605ecd247f4dfdb29f8e1a432b33c22af7bad437f5d3ce9ba25aad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
