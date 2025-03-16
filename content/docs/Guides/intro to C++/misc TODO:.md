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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY6HT6C%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtQeCwCKqOzw4NxurdNwkA6g%2F6lT59v7DCk6ftKgPaqAIgB2jVuY5Z7aaewvT5NjZkgBNvEmxhy5VDoD7dpwSci80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOBLOUVj5pbpgc3hgircA%2FHmkB2by7Hg1inur4G6Gp2UV9pxBZ5faGJrsuCUE7lRaTRm71Q1UvTK%2FIhwilv9qopWpZeWBMAgNH8t0THTA98ZkmLJVCOSR9CzC7FoJOs8Ekn2t6ENShfFq6fajCCF3YIAcqyRMNLC18kyN%2Bh2GtdTj1NcrB4p4fkOrhdDCjVMK0RJ2YSfy7z5nG0sNCHudyBuIwhUGMe5vZDngLifws5YavBerhdKgtGx8EtG%2F%2FsV3XOVG3ppG1DS4Fl1GfumODHwYZgvIolDZwEkUgn7rkc8%2BVgqE2kIWpil96yy2oLOAop4AUyB07Wn4mUcsTSo9A8%2F%2Bz7uCjtBa2zOU5hdJMsoVmLI9FNRC6IniR%2B9CkfAY18dhtPqpUCD%2FLo9DEvR55LwlRhr815heyD0VvEcRuH%2Bqrzwli3J2K2aygJhgCEtdcy%2FeiHKc3N5%2FPnofag9SLDg4nbKCmg197uhoO0V9udhuj6kWnDc7OKLZkmGN5fykMPvDmSgduSBa29yA8RsoDQu5QSa2T%2FjiKHCDlKHBSEjap1YqJ64PnL84Olzv1mlSllLXmoxxuFFPQ1hbmwl3mrFyn2dlaRSZ3s5ZpDxs3%2BlrVBlcML4ZoHo8TmuQDr9C%2Fow%2B9sljch7kbOrMM6g2b4GOqUBO%2BYVT%2BUPABAT8xVpreNa4tlp3s2CaS%2BXntx6VsPQ3CBehUgt%2FdwMt%2F3SQU9ECvIaRBXudazwfQ2wzTPobDt0MUNow3qIoahv%2FIbxI6NDflNlrnTx2TaJJlWrGcnmn2SKCSsKmJF9scC%2Fel6PrNG%2Bl%2Fr1gvDz8cemKXMA1koqTpYlsMPaKW8R2e5TkjPAHuEp1VKqw22YbT6EmzhTTLKd%2FETCG3pb&X-Amz-Signature=99f13226c64ca8cbe82e158879eaa736668ce9014d151e1680499f0ebefd5188&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY6HT6C%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtQeCwCKqOzw4NxurdNwkA6g%2F6lT59v7DCk6ftKgPaqAIgB2jVuY5Z7aaewvT5NjZkgBNvEmxhy5VDoD7dpwSci80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOBLOUVj5pbpgc3hgircA%2FHmkB2by7Hg1inur4G6Gp2UV9pxBZ5faGJrsuCUE7lRaTRm71Q1UvTK%2FIhwilv9qopWpZeWBMAgNH8t0THTA98ZkmLJVCOSR9CzC7FoJOs8Ekn2t6ENShfFq6fajCCF3YIAcqyRMNLC18kyN%2Bh2GtdTj1NcrB4p4fkOrhdDCjVMK0RJ2YSfy7z5nG0sNCHudyBuIwhUGMe5vZDngLifws5YavBerhdKgtGx8EtG%2F%2FsV3XOVG3ppG1DS4Fl1GfumODHwYZgvIolDZwEkUgn7rkc8%2BVgqE2kIWpil96yy2oLOAop4AUyB07Wn4mUcsTSo9A8%2F%2Bz7uCjtBa2zOU5hdJMsoVmLI9FNRC6IniR%2B9CkfAY18dhtPqpUCD%2FLo9DEvR55LwlRhr815heyD0VvEcRuH%2Bqrzwli3J2K2aygJhgCEtdcy%2FeiHKc3N5%2FPnofag9SLDg4nbKCmg197uhoO0V9udhuj6kWnDc7OKLZkmGN5fykMPvDmSgduSBa29yA8RsoDQu5QSa2T%2FjiKHCDlKHBSEjap1YqJ64PnL84Olzv1mlSllLXmoxxuFFPQ1hbmwl3mrFyn2dlaRSZ3s5ZpDxs3%2BlrVBlcML4ZoHo8TmuQDr9C%2Fow%2B9sljch7kbOrMM6g2b4GOqUBO%2BYVT%2BUPABAT8xVpreNa4tlp3s2CaS%2BXntx6VsPQ3CBehUgt%2FdwMt%2F3SQU9ECvIaRBXudazwfQ2wzTPobDt0MUNow3qIoahv%2FIbxI6NDflNlrnTx2TaJJlWrGcnmn2SKCSsKmJF9scC%2Fel6PrNG%2Bl%2Fr1gvDz8cemKXMA1koqTpYlsMPaKW8R2e5TkjPAHuEp1VKqw22YbT6EmzhTTLKd%2FETCG3pb&X-Amz-Signature=d20749dc890813f5e0b258c051837e7677804f248bff8f4df0b1f4b848dd46c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
