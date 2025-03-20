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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMZE7VI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDbaxE1xupt1Wv7bDkfBzqXfTibyecZbrCcQEe%2BxunNaAIgIxgEOO42Z%2BF4mVW20lrGUrVyrOBptkgAXV%2Baanedas4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKRIHYEIt5C1uEUfSrcAx%2FtTEAe6gXblW5G0go9fRYPuL8AaaFneQmGBda%2ByBTNEUFJRnVntqrdui7Pz0N1thuUbh69nXZCSlxu950nab5SlH0TmeMNnmjUrSyZ1SQGjm%2BAOjTthNQ9b09RBlBofERiejjC7pwV4klOJFnJiNSGT4rE77eUI6V%2FRiz7T4DXGIQnxNwh7vD350Dtk4FjlqKWvrk9cWxDzwmKA4vJtjd17U%2Fe9a%2FvroNWZc6uR1oA9qxo78qOdtVcYqBMHhhO6D5ZehYoeNevuu3zl4W4dkQEf3Jek9d2xDrPlw%2B3hiDhd6GCK3nNcCnWlKi8iS8x34lf307CBbyHWb%2BB0KNFW19kwq8smVHV%2FHCpGex3gz2gKKK7bv2trx%2FywJcVCWIdzuGKJ%2FUc6HqSGzxGN%2FElh5onM21bkmmO%2B2y9IE%2FqF7USyLV1pg0CT5KVJLesjInC7fADvFS0XaPtJu40Wvz%2BgS2fLBPLmltwDHAEjebCgnqKazHv4rjqyU8L61omz4eBRoh0qplgyKBEc0dI3iSNtudR%2B1GopppQQ6wLjbhWIC8gAKTjOfk1Y5ArFq1td4xz1mJfE2AuRblaOVu%2Flw%2BoMModI%2FjqBgyELmmpNTuyOmbeAuKLJoyHrUHrtU2eMJmH8r4GOqUBryDpva7bXfSFvzk6d4BxpAHTv5Xswogu4KjsLnxF9iIwUHP5s3U0oa%2BzglLw5D%2B%2F%2F8D%2BxVMua8T4DdY7Mz3NA6w37Oitrpk%2Fzd45Kux%2FxmMCGtc9jEqgHcRz2lC2IBLdn9NT4PQy7deSDNRCBKaMsEOWiSWY0rI1DzzMWpSAjfb9Bwjn1Cvvh5QPNlDbzeCD65UU6PqKJZkZpNl58aAOMsbDIQTr&X-Amz-Signature=feb823ea7f752d4660a1293c6874caa0f88cb24234a66976058658edba4baefc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMZE7VI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDbaxE1xupt1Wv7bDkfBzqXfTibyecZbrCcQEe%2BxunNaAIgIxgEOO42Z%2BF4mVW20lrGUrVyrOBptkgAXV%2Baanedas4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKRIHYEIt5C1uEUfSrcAx%2FtTEAe6gXblW5G0go9fRYPuL8AaaFneQmGBda%2ByBTNEUFJRnVntqrdui7Pz0N1thuUbh69nXZCSlxu950nab5SlH0TmeMNnmjUrSyZ1SQGjm%2BAOjTthNQ9b09RBlBofERiejjC7pwV4klOJFnJiNSGT4rE77eUI6V%2FRiz7T4DXGIQnxNwh7vD350Dtk4FjlqKWvrk9cWxDzwmKA4vJtjd17U%2Fe9a%2FvroNWZc6uR1oA9qxo78qOdtVcYqBMHhhO6D5ZehYoeNevuu3zl4W4dkQEf3Jek9d2xDrPlw%2B3hiDhd6GCK3nNcCnWlKi8iS8x34lf307CBbyHWb%2BB0KNFW19kwq8smVHV%2FHCpGex3gz2gKKK7bv2trx%2FywJcVCWIdzuGKJ%2FUc6HqSGzxGN%2FElh5onM21bkmmO%2B2y9IE%2FqF7USyLV1pg0CT5KVJLesjInC7fADvFS0XaPtJu40Wvz%2BgS2fLBPLmltwDHAEjebCgnqKazHv4rjqyU8L61omz4eBRoh0qplgyKBEc0dI3iSNtudR%2B1GopppQQ6wLjbhWIC8gAKTjOfk1Y5ArFq1td4xz1mJfE2AuRblaOVu%2Flw%2BoMModI%2FjqBgyELmmpNTuyOmbeAuKLJoyHrUHrtU2eMJmH8r4GOqUBryDpva7bXfSFvzk6d4BxpAHTv5Xswogu4KjsLnxF9iIwUHP5s3U0oa%2BzglLw5D%2B%2F%2F8D%2BxVMua8T4DdY7Mz3NA6w37Oitrpk%2Fzd45Kux%2FxmMCGtc9jEqgHcRz2lC2IBLdn9NT4PQy7deSDNRCBKaMsEOWiSWY0rI1DzzMWpSAjfb9Bwjn1Cvvh5QPNlDbzeCD65UU6PqKJZkZpNl58aAOMsbDIQTr&X-Amz-Signature=79271b4973bf2159d90e7478d7c390ea21d8a47d3479d9a3a5a207ad07064e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
