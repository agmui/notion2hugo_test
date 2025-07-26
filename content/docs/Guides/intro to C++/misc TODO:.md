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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS76OWA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQChQna6q5sTZ1e01wSlKuDyZ9joEaX%2B0C1LVDGpQtXjdgIgZOqCbhOIUh5QQT6eSgeH92UNkkqEp2l4Gxe7x2IoVMYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKCOW0orfBzbddNZLSrcA1IqahPKUGMijzTQ0M1BP0sYQrxMtMva5SNAs3q9VbwH8XFJz332VNdfM%2FsoptqiLWivzFyFQErc0jdizgk5SPpV4wSvj8%2BRCitZYbdNfWmMPeUtoCwUExbdokNVy%2Buz5QrslxI7pCFByTEdc%2FZDvsuoG6H2rkbax7hB51dnxZWDgIGZbsijfHWx93%2FpFYI0WUqPisRbroIcSX0DMNiTx4GTMNQ3PJ4nWyYP%2FXEl%2BtIM%2Be%2FU2kSBDYp8u4GDd%2FTPcRMGljbBcrmh3sFgsLC648yzgnL5WpDUzzHi0Q18ABEwgucOP8S%2FWGRzJsAsu9e8aqAxo8%2BRWhzIRc8lgbBIkufnz4QymprlgZxwmIn%2BQaklHyiU%2Fd%2Bl3rVUErhFsP7XEjVfzjSWhi717%2BpbtldNhSU%2FZtKi1orvy85cSuvpuO2L%2B%2BRTsZZE%2BGxZ%2BptzutqcsgQJw3UaZ0RV%2B%2BRKuhTNO2t6Pn%2FUCNUp5Eg2%2B7hhjBQPa0zEMRZ75ZOa5ccD28Lt12dpeW60ozpLIWTauGBeuLrQAuZM5hUfcFhx%2FrTDA9K31DvEhUeutWGSdIpWUfooOpFwi4pi6jGN2MmXegRJfbADQ%2BfwK4gpLC4MBpj%2BxpI3A4DXREAGZFGnPXuCMIvCk8QGOqUBdkM2qU%2B9q80SEKCT5tOe4Z%2FB73kHMsjM9p0z%2BqprbeDD4qe%2FyDBNs4DMZujdMC9zQDCzARXsNl0lL%2Bnr5KRmoUDUxGu9NkwNAHMd9EKldPM4YKp1sfdKywUOb95AIbN0l71BIbvY5i7qPyNqS6J8ohqZe%2BoomY2YhC6aEQUvNXZxgbBqPzkO5HLJ7Pc2McGKitscEM0hYdfI98uFs%2BzuFbfugVrY&X-Amz-Signature=768e3de855766066acb27ad2a8b2c9927b2d42f276ea66e46dc4ab8fc5366cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS76OWA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQChQna6q5sTZ1e01wSlKuDyZ9joEaX%2B0C1LVDGpQtXjdgIgZOqCbhOIUh5QQT6eSgeH92UNkkqEp2l4Gxe7x2IoVMYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKCOW0orfBzbddNZLSrcA1IqahPKUGMijzTQ0M1BP0sYQrxMtMva5SNAs3q9VbwH8XFJz332VNdfM%2FsoptqiLWivzFyFQErc0jdizgk5SPpV4wSvj8%2BRCitZYbdNfWmMPeUtoCwUExbdokNVy%2Buz5QrslxI7pCFByTEdc%2FZDvsuoG6H2rkbax7hB51dnxZWDgIGZbsijfHWx93%2FpFYI0WUqPisRbroIcSX0DMNiTx4GTMNQ3PJ4nWyYP%2FXEl%2BtIM%2Be%2FU2kSBDYp8u4GDd%2FTPcRMGljbBcrmh3sFgsLC648yzgnL5WpDUzzHi0Q18ABEwgucOP8S%2FWGRzJsAsu9e8aqAxo8%2BRWhzIRc8lgbBIkufnz4QymprlgZxwmIn%2BQaklHyiU%2Fd%2Bl3rVUErhFsP7XEjVfzjSWhi717%2BpbtldNhSU%2FZtKi1orvy85cSuvpuO2L%2B%2BRTsZZE%2BGxZ%2BptzutqcsgQJw3UaZ0RV%2B%2BRKuhTNO2t6Pn%2FUCNUp5Eg2%2B7hhjBQPa0zEMRZ75ZOa5ccD28Lt12dpeW60ozpLIWTauGBeuLrQAuZM5hUfcFhx%2FrTDA9K31DvEhUeutWGSdIpWUfooOpFwi4pi6jGN2MmXegRJfbADQ%2BfwK4gpLC4MBpj%2BxpI3A4DXREAGZFGnPXuCMIvCk8QGOqUBdkM2qU%2B9q80SEKCT5tOe4Z%2FB73kHMsjM9p0z%2BqprbeDD4qe%2FyDBNs4DMZujdMC9zQDCzARXsNl0lL%2Bnr5KRmoUDUxGu9NkwNAHMd9EKldPM4YKp1sfdKywUOb95AIbN0l71BIbvY5i7qPyNqS6J8ohqZe%2BoomY2YhC6aEQUvNXZxgbBqPzkO5HLJ7Pc2McGKitscEM0hYdfI98uFs%2BzuFbfugVrY&X-Amz-Signature=df312080a540ad437c7d864d6e7425dd40dc9e999262c454db702c08fea06303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
