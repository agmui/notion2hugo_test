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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5K72MS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDQi3Y013joP2PUB1eOZXi5ljF6Xj2xJkZg7YbHX4IMDAIgIddbZFyVoceaHZBGy9mbZYN60tNQJVwwNfXNPUKFDgkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmixaNKMCIUpTC4xSrcA0utPTxQAsmos2pH%2F7a5U3xMZl92Le5KqkkGDRMNxnoCCSRehVXqUqjbY3lcFIP%2B8aXPI6woAsxsZTcQ7wLuwcrev0B51rnXEI2QUQps9n%2BqEyf%2FWlVav6mms8IJb8RNUuNr4KKvCo0i8kVIqJN8rXD0TTcnqmMMq3GZLqVIHmZpfpg%2BiBbAe6qRtqCKnq5xVmFTvt88yLeC%2Bd60Oe9gM5p2AxEdiPybTn0qEdpW9nrxmboyhMeKoh2Nz%2B4mmTvRB5mRLaeEGyp2pBsumWfeLuBe%2Bkp6Uifc2LwqIVArAXQYlz0849lPkQrCZKvSXXLDfqlDldhSH0cbR775yhkEfH31ml68nhLHqCSFBatGGqh54XfWsAboYuAKAglkACK2vU11imR39BWFOrlS5a0DC8DEHvBO0GYAY1xTSxaSJR9UsxOS29Mh%2BPlXRVBzikvVLgFoRScg1R%2Bpd8GgPuaWthfcT16DvV22K9ehLL7inn1%2BtSj%2BRpM7BYoEFYHOAVcB9V6m%2Fwq9zjChXfC3IfecVM32Dx0JqcgI4vcrtgVC102FDd96U%2BMvdqts1%2BQMbFd7TB78hvD%2F42sUOQtujb1epgNjWoRFiGmFCLQ1MVRer%2F5pcrO5YBEpHAN9nsQtMJHb18QGOqUBliok6YqxMhMyTEmk6TF296oc%2B0LmyJTeEPVWPPd2wvNgi1GanGutFJxnrLU7rqNkwR1ZL1XWIx5OPiJyQI%2Bs8ypv5Fu6IGOsn4GhexRQ%2Fs9vyf%2FgyUtlRmz2cmC3n%2FS34S7nKxfeb%2FpJLl5%2ForWOSwwS7LfyKXy46rxlWU18ROOtxHY2ZdJ%2Bag%2Fa9xBuNrztA0p1JOcnMPm%2BIv5IHtEiqNwhLXt8&X-Amz-Signature=4876203d36a32d1820290274767e4f5bcb24824ca67ea87ea5e0cb447671fd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5K72MS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDQi3Y013joP2PUB1eOZXi5ljF6Xj2xJkZg7YbHX4IMDAIgIddbZFyVoceaHZBGy9mbZYN60tNQJVwwNfXNPUKFDgkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmixaNKMCIUpTC4xSrcA0utPTxQAsmos2pH%2F7a5U3xMZl92Le5KqkkGDRMNxnoCCSRehVXqUqjbY3lcFIP%2B8aXPI6woAsxsZTcQ7wLuwcrev0B51rnXEI2QUQps9n%2BqEyf%2FWlVav6mms8IJb8RNUuNr4KKvCo0i8kVIqJN8rXD0TTcnqmMMq3GZLqVIHmZpfpg%2BiBbAe6qRtqCKnq5xVmFTvt88yLeC%2Bd60Oe9gM5p2AxEdiPybTn0qEdpW9nrxmboyhMeKoh2Nz%2B4mmTvRB5mRLaeEGyp2pBsumWfeLuBe%2Bkp6Uifc2LwqIVArAXQYlz0849lPkQrCZKvSXXLDfqlDldhSH0cbR775yhkEfH31ml68nhLHqCSFBatGGqh54XfWsAboYuAKAglkACK2vU11imR39BWFOrlS5a0DC8DEHvBO0GYAY1xTSxaSJR9UsxOS29Mh%2BPlXRVBzikvVLgFoRScg1R%2Bpd8GgPuaWthfcT16DvV22K9ehLL7inn1%2BtSj%2BRpM7BYoEFYHOAVcB9V6m%2Fwq9zjChXfC3IfecVM32Dx0JqcgI4vcrtgVC102FDd96U%2BMvdqts1%2BQMbFd7TB78hvD%2F42sUOQtujb1epgNjWoRFiGmFCLQ1MVRer%2F5pcrO5YBEpHAN9nsQtMJHb18QGOqUBliok6YqxMhMyTEmk6TF296oc%2B0LmyJTeEPVWPPd2wvNgi1GanGutFJxnrLU7rqNkwR1ZL1XWIx5OPiJyQI%2Bs8ypv5Fu6IGOsn4GhexRQ%2Fs9vyf%2FgyUtlRmz2cmC3n%2FS34S7nKxfeb%2FpJLl5%2ForWOSwwS7LfyKXy46rxlWU18ROOtxHY2ZdJ%2Bag%2Fa9xBuNrztA0p1JOcnMPm%2BIv5IHtEiqNwhLXt8&X-Amz-Signature=6a6b3a3fda40a96b3814c837ca698d1343d176870752058d31b30d2b87f8ab0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
