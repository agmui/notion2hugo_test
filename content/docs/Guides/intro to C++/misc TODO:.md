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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2DFE3Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlhnqNJx6ySFiRePLovQ8lBY4uzQX8aiif8fJ0u49DcAiEAw1zbhoHeZRVGvoZ%2B%2B6yBU%2FCW2B6q1nhkXAQhweiUbIoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBfMeqIwrirRIHHFzyrcA%2BvZhJl0ooqSpT2WX3ntyUWbZONn1uT5rgd2V3lHrUybHN3LDyQWRJBhZf1Jj7M5VVRQ6%2F9PW0p389olTwzaq0NFtWxJZ8lpKCJiGayawOqnS7wBWYxNm1hcI8Hxc6%2Fi2BJZ1FfLDZCrWGxIHDCKSmcYBAkEn4DC7eLoXPiPpLUggZX5omQTnu0m%2BW%2FU7fbuUVeUOHMARA%2Bw3LbCobcx1LOY9X6W8CjbkERd4kNazyVwWBqMSt98TERffjxKqQXh2CdOuNDNOV6JtQNVOpN4BK%2Fk7ZBsmP0O7ogIdDRSWKR0t5Ox%2F%2BqQ1YY4R%2Bq8q%2F2eYuP1ilgm%2Bsl6UKtLGnbG0RlBkGK3Pz%2BMxdDKuUu5Tv1uUgXy8A7%2FEU1maiKnNIOcARYF8eTlv49VTEF%2BLf8%2FMEyAUBkciDXtQDi1ykiRljK1qEuhmN3E5RI483Bk6PamkF36q0J48gMfNedTsEiMpS0sIixtafyqEGtkSE00%2B1J60NemOp3aXzLqQFlx4SCy9ASPkNKhOXZVN3CBFd35Qgy%2B0p8mHC1Nhsku02lHA0XlkgLv3MnuExrJFxdXkX0ksrdSEtPUkTvDjrWfrjp5AQTEfQqKj4gUKNd8xjZXAjWfxF8w8KTospSRrympMPeDssAGOqUBiCNyIlBMBi%2B%2BIWlAmvnpT%2B%2Bq8t0gOJBy0ZfqPNBNxfmmeYk5Es3vVmFWwgLxK4dnZxWkOX9L8vuX%2FVaDcECKzsU9m%2BJCjiBK8zBM8Irel3jyLRJb%2BLTTb8m4yov9QmrikxIRZuBKLT3%2Fhgg6%2Bx7qQPcrD97yVFzv2m%2FjC5SjqA9F4%2FghSLjlCWjPG5rf4Fi3Lqfzy%2BJOuvwgea44KB5hRWBEK377&X-Amz-Signature=54a33ea970ab2680047130b6cf15d31d560980477f79509add8fe5a03e3ef998&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2DFE3Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlhnqNJx6ySFiRePLovQ8lBY4uzQX8aiif8fJ0u49DcAiEAw1zbhoHeZRVGvoZ%2B%2B6yBU%2FCW2B6q1nhkXAQhweiUbIoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBfMeqIwrirRIHHFzyrcA%2BvZhJl0ooqSpT2WX3ntyUWbZONn1uT5rgd2V3lHrUybHN3LDyQWRJBhZf1Jj7M5VVRQ6%2F9PW0p389olTwzaq0NFtWxJZ8lpKCJiGayawOqnS7wBWYxNm1hcI8Hxc6%2Fi2BJZ1FfLDZCrWGxIHDCKSmcYBAkEn4DC7eLoXPiPpLUggZX5omQTnu0m%2BW%2FU7fbuUVeUOHMARA%2Bw3LbCobcx1LOY9X6W8CjbkERd4kNazyVwWBqMSt98TERffjxKqQXh2CdOuNDNOV6JtQNVOpN4BK%2Fk7ZBsmP0O7ogIdDRSWKR0t5Ox%2F%2BqQ1YY4R%2Bq8q%2F2eYuP1ilgm%2Bsl6UKtLGnbG0RlBkGK3Pz%2BMxdDKuUu5Tv1uUgXy8A7%2FEU1maiKnNIOcARYF8eTlv49VTEF%2BLf8%2FMEyAUBkciDXtQDi1ykiRljK1qEuhmN3E5RI483Bk6PamkF36q0J48gMfNedTsEiMpS0sIixtafyqEGtkSE00%2B1J60NemOp3aXzLqQFlx4SCy9ASPkNKhOXZVN3CBFd35Qgy%2B0p8mHC1Nhsku02lHA0XlkgLv3MnuExrJFxdXkX0ksrdSEtPUkTvDjrWfrjp5AQTEfQqKj4gUKNd8xjZXAjWfxF8w8KTospSRrympMPeDssAGOqUBiCNyIlBMBi%2B%2BIWlAmvnpT%2B%2Bq8t0gOJBy0ZfqPNBNxfmmeYk5Es3vVmFWwgLxK4dnZxWkOX9L8vuX%2FVaDcECKzsU9m%2BJCjiBK8zBM8Irel3jyLRJb%2BLTTb8m4yov9QmrikxIRZuBKLT3%2Fhgg6%2Bx7qQPcrD97yVFzv2m%2FjC5SjqA9F4%2FghSLjlCWjPG5rf4Fi3Lqfzy%2BJOuvwgea44KB5hRWBEK377&X-Amz-Signature=fae1ba58f60f49814e912f1a87e8a2fbc442b303619aa725b0a8c6cb62414519&X-Amz-SignedHeaders=host&x-id=GetObject)

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
