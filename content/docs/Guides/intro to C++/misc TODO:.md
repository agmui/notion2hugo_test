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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHIW7RQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH4cFbc%2BcJeT4Ec8CMN1vuJq6z7Zq9jItPLDLBX4jTxLAiEA99yLHpRSKrzaLW40y3P2b74K7eLAqrdZrtjUW7%2BV%2FVsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHlKaqEzMYXz1DaOhCrcAyOfoUckYOc42mETfuOKvexDxLrbnCFtOQd%2Fxk0vgbBPF0PalsaKbGJCTfBkjBcWXTXNkhHYAJeNrz%2Bt%2BEq6zp2Xa%2F9jrNfIVv01GPkfQp9Hi9CHwpJwah9Bjbo5%2BwmFIHxnvX1iPiTyN%2BPrqGBig70TPbfsKMY5Pphihx49J2wc13eeAPD1MA4YymAEPMg%2BjXumBVPtgruafZZ96jv1%2FvIIPz5gY%2BcoKdoiOPCHRW0uI49MFsVey8JSgsQBT8a3u9IhCGIQlgWJTaBcpWldpXWGfY95vwLNhIPJZEpUu4hFsuKwT4Lwnd%2BRXyw83pyrVGyc%2BfHQiSXvtIlxzmT9t1fHP1LQLs0G12fy3d4MnjgyTUw3kC6Sd8%2FDzeI%2BJG0Aahpt2iMcdOVr7KrxwX9yAmgVGJujkqGPhkBkZsyQ7877UeedmLO7y7gdQq5Sr%2Bna3svuVCrvT2FIJb%2B2vyXSaK7GNwnKQcDAlJ7C%2FPup7AHeiPQO5UIPfJ13Rbgs2%2FxpUGrSFRMgXG0FYZD%2Bh0vk0Gwg%2BY%2BygSUrHrYBJ7tVXrkwz22k86ejJMchlWSI10ad5yWoTVvQNIkPkfG41I88%2FqkFfZPHrkHUWTxC5m90dakTd%2BGjBrLS5KYlSuwJMNO8jsQGOqUBHpRzxfVbCFRMRxpwZN0Yd8Zdqvwgx%2FBz71Hty3iktEGuwIqx6y499zOWuHfU7zn5LLUsIVC8Y%2FNz%2FBb1MBlR9CMcEq%2FeL2%2BGSiC%2BNFmP44qY8wSCTty7qNLxa1ekbwUmXBybYVUf%2FaurLAjm8W9esOULMwaRZQRdTK%2B2PUpMryscQV4m0ZFvFmaD9mll8xRNWy2xngQHnzClaFYfQFmMjgvkyqoo&X-Amz-Signature=8170f0901e9d5bdbff1107979467f812dd413d3830efafd976b22c2ae114dfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHIW7RQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH4cFbc%2BcJeT4Ec8CMN1vuJq6z7Zq9jItPLDLBX4jTxLAiEA99yLHpRSKrzaLW40y3P2b74K7eLAqrdZrtjUW7%2BV%2FVsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHlKaqEzMYXz1DaOhCrcAyOfoUckYOc42mETfuOKvexDxLrbnCFtOQd%2Fxk0vgbBPF0PalsaKbGJCTfBkjBcWXTXNkhHYAJeNrz%2Bt%2BEq6zp2Xa%2F9jrNfIVv01GPkfQp9Hi9CHwpJwah9Bjbo5%2BwmFIHxnvX1iPiTyN%2BPrqGBig70TPbfsKMY5Pphihx49J2wc13eeAPD1MA4YymAEPMg%2BjXumBVPtgruafZZ96jv1%2FvIIPz5gY%2BcoKdoiOPCHRW0uI49MFsVey8JSgsQBT8a3u9IhCGIQlgWJTaBcpWldpXWGfY95vwLNhIPJZEpUu4hFsuKwT4Lwnd%2BRXyw83pyrVGyc%2BfHQiSXvtIlxzmT9t1fHP1LQLs0G12fy3d4MnjgyTUw3kC6Sd8%2FDzeI%2BJG0Aahpt2iMcdOVr7KrxwX9yAmgVGJujkqGPhkBkZsyQ7877UeedmLO7y7gdQq5Sr%2Bna3svuVCrvT2FIJb%2B2vyXSaK7GNwnKQcDAlJ7C%2FPup7AHeiPQO5UIPfJ13Rbgs2%2FxpUGrSFRMgXG0FYZD%2Bh0vk0Gwg%2BY%2BygSUrHrYBJ7tVXrkwz22k86ejJMchlWSI10ad5yWoTVvQNIkPkfG41I88%2FqkFfZPHrkHUWTxC5m90dakTd%2BGjBrLS5KYlSuwJMNO8jsQGOqUBHpRzxfVbCFRMRxpwZN0Yd8Zdqvwgx%2FBz71Hty3iktEGuwIqx6y499zOWuHfU7zn5LLUsIVC8Y%2FNz%2FBb1MBlR9CMcEq%2FeL2%2BGSiC%2BNFmP44qY8wSCTty7qNLxa1ekbwUmXBybYVUf%2FaurLAjm8W9esOULMwaRZQRdTK%2B2PUpMryscQV4m0ZFvFmaD9mll8xRNWy2xngQHnzClaFYfQFmMjgvkyqoo&X-Amz-Signature=04f19284937cccb8aeef48fbb0d997a30071e15bc5e03246e2c4e0f0826cde2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
