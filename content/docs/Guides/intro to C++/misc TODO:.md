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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDA7BIM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAuxkxaIaJa0RWHgvDW%2BWU0hIrl8sikooHgWmPSHR%2BUiAiEAzYOzo46OjcCXEQuDu5gaaHrpmVfTY151YdhquypemmwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB4S6Ys6iG7gN0AcyrcA6hBhaNRT42rq8rNNpHokF1f9rweSi8e4Hh%2BPqA5TcIYN%2FoeuJPqNwTOUgpPZRhzOZo6J4WLK0PcaWtcrPszKvzSRvAqqxL8CMt5kOWfWlx931BIaWv0um3YXAnNm5VhKE0GtaAcvVMxvXmGNiHREwlB2LwmAN9fEJSjz8AbspDb5qzk214LanUmOx3sIF%2FB7Wudaxg6tJs38NhJoHgCek3JdOk5jLD5%2FWbGFHmfwVPDuyUgzdbspxdo87%2Fj5piapiAXa%2F%2FXE5tyCOzvT1b3W%2FgxzXrBL7N1%2BlDkwkBUjJkACNhscQOeaz8zytLC%2FKSZUSqAT1YIcnPlDJ7DBYNJ4rnjOUW741Yz7Kpze%2BZ50Gj7dDQAyt1TOvEZsZzTC%2Fh%2FEgF8Ull344tGg25Noy381MiiiDrP%2BA7im8LhJwLLs4%2FQkR81wfm0Je1UbuEpvHljQMZEzwcdDZKjy146Wqt1fCoqBEajan1LbdvF%2FST6G5qcUFfJmTUHCIWJAvLa7FwprdVrQAnVRKfX%2FeKqu28oVWBJ32ScGpth4B00dxAtvaiGXmgmtpuzaGtrIz%2BX82D4tY4Ftp7bpmYnCtFJEf9Kg%2B7yccaaDkVYt9up%2F6CDUfrr452EyVQC093pQU1KMLv92b8GOqUBRWRAudAJYhoPOSpzRGEO6TkcCUGmj1ZA1s3K%2BUslTxWyg3P3t71Om5nm73B7GmIiwf8H5Qu%2BbPysv1%2BF9l5Oe7BB5QcDVGArrR7jG3u6yHvyU6W7IBWoQu3TgMNmN%2BvMxyvVbNwYyeLIOy2C1Ojfsl5GQdx6leXBELJTHl8pCq8o44gBVHr9DGi3k%2FN3IBd475o58t4WLckeAm%2BaL%2FblxPMWSYE4&X-Amz-Signature=8a3f891b2dfe8e5c702a47e8023263e2cbb59c10f2faa9170f8fd798b312e2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDA7BIM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAuxkxaIaJa0RWHgvDW%2BWU0hIrl8sikooHgWmPSHR%2BUiAiEAzYOzo46OjcCXEQuDu5gaaHrpmVfTY151YdhquypemmwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB4S6Ys6iG7gN0AcyrcA6hBhaNRT42rq8rNNpHokF1f9rweSi8e4Hh%2BPqA5TcIYN%2FoeuJPqNwTOUgpPZRhzOZo6J4WLK0PcaWtcrPszKvzSRvAqqxL8CMt5kOWfWlx931BIaWv0um3YXAnNm5VhKE0GtaAcvVMxvXmGNiHREwlB2LwmAN9fEJSjz8AbspDb5qzk214LanUmOx3sIF%2FB7Wudaxg6tJs38NhJoHgCek3JdOk5jLD5%2FWbGFHmfwVPDuyUgzdbspxdo87%2Fj5piapiAXa%2F%2FXE5tyCOzvT1b3W%2FgxzXrBL7N1%2BlDkwkBUjJkACNhscQOeaz8zytLC%2FKSZUSqAT1YIcnPlDJ7DBYNJ4rnjOUW741Yz7Kpze%2BZ50Gj7dDQAyt1TOvEZsZzTC%2Fh%2FEgF8Ull344tGg25Noy381MiiiDrP%2BA7im8LhJwLLs4%2FQkR81wfm0Je1UbuEpvHljQMZEzwcdDZKjy146Wqt1fCoqBEajan1LbdvF%2FST6G5qcUFfJmTUHCIWJAvLa7FwprdVrQAnVRKfX%2FeKqu28oVWBJ32ScGpth4B00dxAtvaiGXmgmtpuzaGtrIz%2BX82D4tY4Ftp7bpmYnCtFJEf9Kg%2B7yccaaDkVYt9up%2F6CDUfrr452EyVQC093pQU1KMLv92b8GOqUBRWRAudAJYhoPOSpzRGEO6TkcCUGmj1ZA1s3K%2BUslTxWyg3P3t71Om5nm73B7GmIiwf8H5Qu%2BbPysv1%2BF9l5Oe7BB5QcDVGArrR7jG3u6yHvyU6W7IBWoQu3TgMNmN%2BvMxyvVbNwYyeLIOy2C1Ojfsl5GQdx6leXBELJTHl8pCq8o44gBVHr9DGi3k%2FN3IBd475o58t4WLckeAm%2BaL%2FblxPMWSYE4&X-Amz-Signature=4fb78eb12cd7d4b2ad7dfb32a7352c9e5cddcffa9d2f5891ce2b19fbe8806e34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
