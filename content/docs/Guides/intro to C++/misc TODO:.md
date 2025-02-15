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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXI6RYYI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICK9J3rZKPblaKBLIPY9mxKfuun%2Bc0zdN%2BGRy2%2FzQlwBAiEA62mUHW%2BALhWX2jYMBBcKfxXou1b3Z9HIJSt47BYd1KAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPT2k9P3lQ%2BNAjgr6CrcA45hkG5hbbvf5rz1%2BzcWzaikVZYioe01HddVEwRdlt5ETsPXC1pD71oeAdgjgAr6CNx%2BFq6ikc0me9toE7V2BzeYwX7wPXeIhdHuc3rqi6SOjOn4h%2FPJX4Jaeaug1Y2cFjsTCsVURQN7b9i6lUrMXtYafl3%2FUFC0ndqODibaVbjUdDiddZvN0kf3sgFFvOe5iOpdTaNZF6Rc3IlWVLa0ROI2RE8yN02HCWHWuK7lvaZCcXyrggM7lOU26iQMDV2nZPPeezfifAXs1Wm8rtA8Ty3FXSlaU%2BeLE8fxWfbDBf1boi%2FtVDRjgzDGnphZ2VYQ3WRFL4K8thdRiI3GGjgTPLtVlBR5JR3KlXGnJxACaNZN6%2FbnNTic2EIxqCDqO2G%2BfVhoDmsnA1HeAzHOx6EwQKiphUfHb7mdhUDgGuJB%2BP7axO1bzK9X7WiwLsXFQhpBK5j5iXPTplTwmwoWtYNjpVB0odPEGO6JdLrvcpfSeJ7xyCS0u33OdkC76OojK5zqqmo4BIe%2Fc9F6DvUuLyVaI6OisqPn%2FFnE1v7EFzecXDdqkKLo5k%2FXtxCN2PGwqXchEjP1%2BojdGjO0SsgYaozFJcO5Momsx5y9AgLEt4q%2FATBDiKgRuHMVch0QPVsgMKDpwL0GOqUBTeeW6svlfijPYdEz4I4hv8%2F3cg4SevARqsbqdO%2BnsAWh7Xl0Qe%2BrAwkdJrn7wLYcq%2BE%2BhbQjGR8W4qBcA1JcuyHLE2U8Ye7hte%2BG54jy8jA1BtCa%2BDYcQPoXlVf4aaktolY1g7lmZ4a0aHqKxGo3ZkMqPdNubnKTH0oFGAt%2B0VaB5wo%2BbvHwbJSBpch4Rz%2Fy%2B2G0rtj%2FNVcm11t7nYSj%2BMV9qq5i&X-Amz-Signature=b3cc15c1a81fcbadc5fcba4a2e26e45a6578303eb67694add1f2f95b96c9f0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXI6RYYI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICK9J3rZKPblaKBLIPY9mxKfuun%2Bc0zdN%2BGRy2%2FzQlwBAiEA62mUHW%2BALhWX2jYMBBcKfxXou1b3Z9HIJSt47BYd1KAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPT2k9P3lQ%2BNAjgr6CrcA45hkG5hbbvf5rz1%2BzcWzaikVZYioe01HddVEwRdlt5ETsPXC1pD71oeAdgjgAr6CNx%2BFq6ikc0me9toE7V2BzeYwX7wPXeIhdHuc3rqi6SOjOn4h%2FPJX4Jaeaug1Y2cFjsTCsVURQN7b9i6lUrMXtYafl3%2FUFC0ndqODibaVbjUdDiddZvN0kf3sgFFvOe5iOpdTaNZF6Rc3IlWVLa0ROI2RE8yN02HCWHWuK7lvaZCcXyrggM7lOU26iQMDV2nZPPeezfifAXs1Wm8rtA8Ty3FXSlaU%2BeLE8fxWfbDBf1boi%2FtVDRjgzDGnphZ2VYQ3WRFL4K8thdRiI3GGjgTPLtVlBR5JR3KlXGnJxACaNZN6%2FbnNTic2EIxqCDqO2G%2BfVhoDmsnA1HeAzHOx6EwQKiphUfHb7mdhUDgGuJB%2BP7axO1bzK9X7WiwLsXFQhpBK5j5iXPTplTwmwoWtYNjpVB0odPEGO6JdLrvcpfSeJ7xyCS0u33OdkC76OojK5zqqmo4BIe%2Fc9F6DvUuLyVaI6OisqPn%2FFnE1v7EFzecXDdqkKLo5k%2FXtxCN2PGwqXchEjP1%2BojdGjO0SsgYaozFJcO5Momsx5y9AgLEt4q%2FATBDiKgRuHMVch0QPVsgMKDpwL0GOqUBTeeW6svlfijPYdEz4I4hv8%2F3cg4SevARqsbqdO%2BnsAWh7Xl0Qe%2BrAwkdJrn7wLYcq%2BE%2BhbQjGR8W4qBcA1JcuyHLE2U8Ye7hte%2BG54jy8jA1BtCa%2BDYcQPoXlVf4aaktolY1g7lmZ4a0aHqKxGo3ZkMqPdNubnKTH0oFGAt%2B0VaB5wo%2BbvHwbJSBpch4Rz%2Fy%2B2G0rtj%2FNVcm11t7nYSj%2BMV9qq5i&X-Amz-Signature=1597551571c2771ba3da377df871dcf780e2e5d8114b4178cabe9f84e11b051a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
