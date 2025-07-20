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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWS2OD5C%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxerOMdMc5VE4nFKJeBk3U6d2BCBQ3GX7yv%2Fw%2BIFcRrAiEAr%2BYn1jQnjbsmUspdtpm8GAMCGpUj7gnTEkrrW1xKLS8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApMO0uHakTx29ShYircA1qo7GxalmJ0%2Bg%2FrUX8ibieoL6bsx7u4wJzYyRtlfTIQdbLvt0%2BVo%2FdVZph6R8nUcW6JIK3nbBnLRG7TyChjFZeD8TlGR%2BwsY0NJf4adopRvKywIQguKOiFYM3Jvln9NTxfbrMk04AGtyxm8OxEaoDXvhH0m7QgfpLMxZI7fkWeQqu0H%2Ffuu2EkeNtdRrNc9OdhauyUsgzzeB%2BWnRYncloMRg5W6e1vVgZ%2Fu9yCDmgpZDjmLeUW4MwfT7MqnoebjMRxm%2BmGKz5DQOtzAhVSWn5KbvWjbYMnFlCxzmPehA8oHoDVv%2FEtJuzhV13TDpKy5CiVYMGBlxeGoz%2B7vfrYqeHR%2FQuPYBdCxmL8vQ%2BnFFm2Dr1DPNS0xlJu%2Bh%2F2rQBRDKvBpWtYY2umfj8ng27umkZ3Qpv4symt%2B7Iv%2BK6eNKtnTaXbcW%2Bnso3kAM0Hd4zVaKhyrufYX%2BN9CvKwLyM4qiI2NBHgtb2TQ92031Dmh8oy%2BM20wURR0HxR12XIeC8wRTExvwfCEJyUPUEDx4e89n4T0%2FhiR6fLBczD71UPLs1b8J9CtBA5HP%2FywPJ8eO7CldYkJx7jOn9dJNueLf%2BtVtd8TK3Qf1705KP3xX1PcGl2F6muHg0mIPLVBF9gMMMub8cMGOqUBCWi75Y979jWJ0lrEhvdh2XML9T9FdhIbZL0NQtcdNvdCeC%2Br2UP6HmPZNJxnw%2FRwXALIgZ578P8wpm2T2NZwU6nr4Zf5sA1hjoR6n4B679%2BIEeeSZBHO5MNEH1YvYZ%2BgWxJtDRvMAGTT0qywcnjZ4%2BXwGii6uICGJoqoM9WFrnwmzqm%2FIJ8%2B22C%2BCpeewYZw3Cu%2B7TC26PXndYRy2HC2ax%2BQGJuz&X-Amz-Signature=0604c4807d6a79cf61e85165e342feba814e2dcaba9b0c49d94c51e476bec9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWS2OD5C%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxerOMdMc5VE4nFKJeBk3U6d2BCBQ3GX7yv%2Fw%2BIFcRrAiEAr%2BYn1jQnjbsmUspdtpm8GAMCGpUj7gnTEkrrW1xKLS8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApMO0uHakTx29ShYircA1qo7GxalmJ0%2Bg%2FrUX8ibieoL6bsx7u4wJzYyRtlfTIQdbLvt0%2BVo%2FdVZph6R8nUcW6JIK3nbBnLRG7TyChjFZeD8TlGR%2BwsY0NJf4adopRvKywIQguKOiFYM3Jvln9NTxfbrMk04AGtyxm8OxEaoDXvhH0m7QgfpLMxZI7fkWeQqu0H%2Ffuu2EkeNtdRrNc9OdhauyUsgzzeB%2BWnRYncloMRg5W6e1vVgZ%2Fu9yCDmgpZDjmLeUW4MwfT7MqnoebjMRxm%2BmGKz5DQOtzAhVSWn5KbvWjbYMnFlCxzmPehA8oHoDVv%2FEtJuzhV13TDpKy5CiVYMGBlxeGoz%2B7vfrYqeHR%2FQuPYBdCxmL8vQ%2BnFFm2Dr1DPNS0xlJu%2Bh%2F2rQBRDKvBpWtYY2umfj8ng27umkZ3Qpv4symt%2B7Iv%2BK6eNKtnTaXbcW%2Bnso3kAM0Hd4zVaKhyrufYX%2BN9CvKwLyM4qiI2NBHgtb2TQ92031Dmh8oy%2BM20wURR0HxR12XIeC8wRTExvwfCEJyUPUEDx4e89n4T0%2FhiR6fLBczD71UPLs1b8J9CtBA5HP%2FywPJ8eO7CldYkJx7jOn9dJNueLf%2BtVtd8TK3Qf1705KP3xX1PcGl2F6muHg0mIPLVBF9gMMMub8cMGOqUBCWi75Y979jWJ0lrEhvdh2XML9T9FdhIbZL0NQtcdNvdCeC%2Br2UP6HmPZNJxnw%2FRwXALIgZ578P8wpm2T2NZwU6nr4Zf5sA1hjoR6n4B679%2BIEeeSZBHO5MNEH1YvYZ%2BgWxJtDRvMAGTT0qywcnjZ4%2BXwGii6uICGJoqoM9WFrnwmzqm%2FIJ8%2B22C%2BCpeewYZw3Cu%2B7TC26PXndYRy2HC2ax%2BQGJuz&X-Amz-Signature=3360bf4054f8c63f00c0c7a84d6c83c2782087d9dfdb84ae2308d26106620b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
