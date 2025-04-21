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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXN4A3L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7V1ZDULLriP83lr5wNrYLnbYbaK7ABQ5jzk3ZLjfMQgIgAUTjzOKOuytnbRBKz4nhaRGCmTwy%2Bsn2wfX4WOLxoIkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FaqiBRWJc%2B0RfLASrcAz5L%2B%2FDDvzf%2FuRO9XwhSTNK%2B%2BhOfj%2BjaEPrmqms756cBMD0N2rZQor%2BOEhWvS8Tjobkw17yCdBe2gbUwL54Ssjzeq8C85cG%2FLOeqdtwcsqDuBU1BCtxTGL7uVcdCykRq0iMlBTu%2BmtpzIB7j4gXL8hIVAn4TouZkGNJt0%2FLFWhM3%2FVI0ykxcrCb7574%2BzFvlboBmgjFoGvcTBx%2F%2FOpJg12sGWTqqPkJAi0tMBDlSASlYLRITvmg%2BXlWs2vjOFw4Vyujt%2FDx1LuOa1mEvQwQ0jGG9skntayvDXbeE%2B4m1JajF2cPuhWxmzKTBgsRNO5aAUqNpn4eLXSjJMoRfWsqn1CxXnWRKMKYLHHpA5wFCDK%2Bua2stmsH7tmab671Kq%2BjHdtbD%2FnhUzxWKqLKQmDOPNRstq06YDxJo0VSm7ysvGxBydVVkuzW4KbmBOV9kEBt6DhgvHK4Jqg6YxyDImYkBKG3w8urc2e4ZWuhb%2Bu9Lsr%2BgaVn77g%2FDBx5G0tAKnP%2FBRkRhgRdHUZNAi12u2gxHyl3FcZ9r4YRMnDx7%2B%2BMJm68T00XH1FvyKAnMtrkFNtaztK1MX%2FpLN%2FH0HsIheOrjzbcs2ztO%2BseV%2BkEir52otaZLCO2ttuc%2By3vY3ekLMIWHmcAGOqUBXsRHBbP4z%2B8MznXdDoprsQn1KSoPMpyUHZ6B8aWFZsqexsr%2FpbTv%2B3mzbVN%2FqdCRiEf7OGisPto1DPd0hDOANC9FuC0kUgAfJ%2Ft2sj17hJh%2BtRW8m%2BtvkJeBGvpkNW%2F9cEZ8CgF4rcny1YLJegn1aGgAZ3%2B2PnJbWg72AEHVkKwh30QPrl0vonf%2FBFX9M5xv6vhAe2%2FhG2x9Cozg9%2B2%2BLQdpVwvq&X-Amz-Signature=0254b6fb699fa1de20d86d988c5a7342ca5b866aab84597f685c4b3f3ce4ed54&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXN4A3L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7V1ZDULLriP83lr5wNrYLnbYbaK7ABQ5jzk3ZLjfMQgIgAUTjzOKOuytnbRBKz4nhaRGCmTwy%2Bsn2wfX4WOLxoIkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FaqiBRWJc%2B0RfLASrcAz5L%2B%2FDDvzf%2FuRO9XwhSTNK%2B%2BhOfj%2BjaEPrmqms756cBMD0N2rZQor%2BOEhWvS8Tjobkw17yCdBe2gbUwL54Ssjzeq8C85cG%2FLOeqdtwcsqDuBU1BCtxTGL7uVcdCykRq0iMlBTu%2BmtpzIB7j4gXL8hIVAn4TouZkGNJt0%2FLFWhM3%2FVI0ykxcrCb7574%2BzFvlboBmgjFoGvcTBx%2F%2FOpJg12sGWTqqPkJAi0tMBDlSASlYLRITvmg%2BXlWs2vjOFw4Vyujt%2FDx1LuOa1mEvQwQ0jGG9skntayvDXbeE%2B4m1JajF2cPuhWxmzKTBgsRNO5aAUqNpn4eLXSjJMoRfWsqn1CxXnWRKMKYLHHpA5wFCDK%2Bua2stmsH7tmab671Kq%2BjHdtbD%2FnhUzxWKqLKQmDOPNRstq06YDxJo0VSm7ysvGxBydVVkuzW4KbmBOV9kEBt6DhgvHK4Jqg6YxyDImYkBKG3w8urc2e4ZWuhb%2Bu9Lsr%2BgaVn77g%2FDBx5G0tAKnP%2FBRkRhgRdHUZNAi12u2gxHyl3FcZ9r4YRMnDx7%2B%2BMJm68T00XH1FvyKAnMtrkFNtaztK1MX%2FpLN%2FH0HsIheOrjzbcs2ztO%2BseV%2BkEir52otaZLCO2ttuc%2By3vY3ekLMIWHmcAGOqUBXsRHBbP4z%2B8MznXdDoprsQn1KSoPMpyUHZ6B8aWFZsqexsr%2FpbTv%2B3mzbVN%2FqdCRiEf7OGisPto1DPd0hDOANC9FuC0kUgAfJ%2Ft2sj17hJh%2BtRW8m%2BtvkJeBGvpkNW%2F9cEZ8CgF4rcny1YLJegn1aGgAZ3%2B2PnJbWg72AEHVkKwh30QPrl0vonf%2FBFX9M5xv6vhAe2%2FhG2x9Cozg9%2B2%2BLQdpVwvq&X-Amz-Signature=228049da10423a292b6267c0fa1efdf9f348db76c1583341a8e2e068b46b9879&X-Amz-SignedHeaders=host&x-id=GetObject)

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
