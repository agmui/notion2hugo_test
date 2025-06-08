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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFJC34P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAx2FAlDdpqV7OeAO%2BcEt0ewxolJ%2BkHlw%2BsgNyZDVoyAIhAJknKmLUg2Zd4tXGLDGncnVtz%2BENLXXNuciTrjDEb7f0KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCd9lhgAWnxCKUfmAq3AN0jQtgnTuimzkfO8Bz50sxPF%2FcOz6WzdJFTaUzEiO6MG7lAD8Z8cxBSY4P2XQTMNwhLk%2FGOdJLAEoLBqH6c7fajgeOslSlUfyXH5vRjq8wPiNt2Q7%2FTU2XIo8J1TXAQ%2BjaU56QW720y1DCVv40SWeUq7R4J54hroljJn20urE8LkawnYN30jCBYZ42%2BqiZ1qJhHIH3L0C6PjTg3Pr0NrRvhuK0gpaWPCRRSZKfxh0wAWxvkuKeA5a5T2dcWv87KKX5ZrnOEq84x58rEnTkaW8X1fXeuxJoQLebch6n%2Fk%2FqG11oxTlo49H6juEqX5kAUx4t9c2Ftz54yazIFc97x6q%2BfR25fQ6YUkdaqUDTGtB69eruwPdYoAPMhhPwdQyFG8Ykfkw2S33%2F0kJtNNETu9fZsVrumywYgMBYzr%2BZLj7HQOsNKOzfMPoHjKWWidFU9AIFpW%2F7YCtfcnQd4jiv7k%2BDWpXoM%2F29m4N3E0z%2B3ArU1aipj50xZVpf081bug7hMd%2FRIHLd7NtCOv%2BSijpS7D9no0P8HMab70gWErlnw25Iu7yNJBHAWoFqbNVS9tVMPQDbnICEchVka2Qz%2FOmSs6cpYYgM48WuJQOiKtf6cUKlJ%2Fcsdbxe1j2DZbKAjTC78pTCBjqkAb0B91EQOj0RUHadefzuPNsRHeTqzu1zI7%2FojZX0hAGgmz8r5aEm9i0tUyOWyZdguQsjz%2BI4XyEi6IYYTxri37lnPrAZ67%2BESKcfBEf9AqdDLavQ80cR2HN9JGABdxbmTIlQi2W4RRV%2FAojaOqm12ix5Kho4vmYHDIO1bkeXdhiuoixEvNE%2BK2AnINvyswCdHPnGMlJqfixcs1%2BM0fEhDVXdrsAc&X-Amz-Signature=46ca82f1ae75dd849388fc27ced81bb4643811f4bd9218d322dddb50cd867d78&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFJC34P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAx2FAlDdpqV7OeAO%2BcEt0ewxolJ%2BkHlw%2BsgNyZDVoyAIhAJknKmLUg2Zd4tXGLDGncnVtz%2BENLXXNuciTrjDEb7f0KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCd9lhgAWnxCKUfmAq3AN0jQtgnTuimzkfO8Bz50sxPF%2FcOz6WzdJFTaUzEiO6MG7lAD8Z8cxBSY4P2XQTMNwhLk%2FGOdJLAEoLBqH6c7fajgeOslSlUfyXH5vRjq8wPiNt2Q7%2FTU2XIo8J1TXAQ%2BjaU56QW720y1DCVv40SWeUq7R4J54hroljJn20urE8LkawnYN30jCBYZ42%2BqiZ1qJhHIH3L0C6PjTg3Pr0NrRvhuK0gpaWPCRRSZKfxh0wAWxvkuKeA5a5T2dcWv87KKX5ZrnOEq84x58rEnTkaW8X1fXeuxJoQLebch6n%2Fk%2FqG11oxTlo49H6juEqX5kAUx4t9c2Ftz54yazIFc97x6q%2BfR25fQ6YUkdaqUDTGtB69eruwPdYoAPMhhPwdQyFG8Ykfkw2S33%2F0kJtNNETu9fZsVrumywYgMBYzr%2BZLj7HQOsNKOzfMPoHjKWWidFU9AIFpW%2F7YCtfcnQd4jiv7k%2BDWpXoM%2F29m4N3E0z%2B3ArU1aipj50xZVpf081bug7hMd%2FRIHLd7NtCOv%2BSijpS7D9no0P8HMab70gWErlnw25Iu7yNJBHAWoFqbNVS9tVMPQDbnICEchVka2Qz%2FOmSs6cpYYgM48WuJQOiKtf6cUKlJ%2Fcsdbxe1j2DZbKAjTC78pTCBjqkAb0B91EQOj0RUHadefzuPNsRHeTqzu1zI7%2FojZX0hAGgmz8r5aEm9i0tUyOWyZdguQsjz%2BI4XyEi6IYYTxri37lnPrAZ67%2BESKcfBEf9AqdDLavQ80cR2HN9JGABdxbmTIlQi2W4RRV%2FAojaOqm12ix5Kho4vmYHDIO1bkeXdhiuoixEvNE%2BK2AnINvyswCdHPnGMlJqfixcs1%2BM0fEhDVXdrsAc&X-Amz-Signature=02c9aa6d72d5a5ae32c3ee4d73d9b7c209696496dfc5b52ff4b82463838deddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
