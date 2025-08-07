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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENIGMDC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCZyBV0VgPdLuJUQPslgTWV7POku1uvGbpOrJqJ1e7pIgIgLF0l69g1IWzlH5f6onYG%2F9mTlo10H3QYXypBQ668%2BKoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDDdgnEXi0ne%2B%2FD%2BircA4vj3L4XGkYZMl2DPlgOTAXEz5BFO2v9n2DeZfoclNIyzAK8h7DchiEVbLyFRd0TM5QCBnkv8ISP9NrNTcIbaDUF7WHI3RaHr5O5hlqmSd8ggEDIQDaCgjTIFS1mRh70umDEof14R3%2F8dolw6ScIwfL366L9vpijc9AlmglwIFYj8z25ebZVeq4Haj%2FeJzMuTTQSsOEX7%2F4ksrsRVx2%2BFQRIu%2FA19R4FAORam96EMmPCvbKOqvbUwfORoMEUUWfsUUXCc7WHAWeV4X14IY%2BeJr95i4%2FFomWMcIuK%2Bk%2FxayoPt7KKlHV%2Bhm2vL%2B9Qxz0sQr2kVzRgzDuc%2BZX3nkjt%2FLfy7o91%2Bi1mm%2F7Guv4xgIhLPhi%2BrMwdFb86URwTv8xkomxV5zvUK39Tm7iQj4ePTm1lZjtbimnREBqfKlj1ljisFga%2BxCKK%2Fc%2FEte%2FdpQ4dYRLC4h6uD2WXVviNYoxv5cpQJdefUUT11Ai6BHDDQO%2B6tjsP6aFQ0dzA86AFJ5Z8sQbyQTyKZc0VZ93C2%2Bcm2u7UQuYuWPI4QrCVljYaFYqdXC8AgaVpAfNya6rjZM4bxoAe5pLm6FMCc8DD10V%2BZWdbESUbN3%2FkSCiJNed9MZkWCqpwdN7AWXv9tRtkMP7j0cQGOqUB%2BnnVFxr1advCleyEF3yUgFDl246yPuX5GSjxF4XfIc8tTDrarFdSu4DO83J3Fe6vAP6nppAhRF6vRT49IE0s4LPw7fIzn94N7HkfuOHvnV4cLzoal0sLbXJJuEbJCkldlgufJg6vKO0NhbTo5mICncw2HcWoMZyqtLvLSYJFFtRC6da1y0Ht0WXD10EoOMQyvJuScxdGan3imvHIOyH2xyY0ddhv&X-Amz-Signature=7674c4ca09c34d2c14d4b117038ab6806aa2e5ac95e52d42b958240cdf7cae64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENIGMDC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCZyBV0VgPdLuJUQPslgTWV7POku1uvGbpOrJqJ1e7pIgIgLF0l69g1IWzlH5f6onYG%2F9mTlo10H3QYXypBQ668%2BKoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDDdgnEXi0ne%2B%2FD%2BircA4vj3L4XGkYZMl2DPlgOTAXEz5BFO2v9n2DeZfoclNIyzAK8h7DchiEVbLyFRd0TM5QCBnkv8ISP9NrNTcIbaDUF7WHI3RaHr5O5hlqmSd8ggEDIQDaCgjTIFS1mRh70umDEof14R3%2F8dolw6ScIwfL366L9vpijc9AlmglwIFYj8z25ebZVeq4Haj%2FeJzMuTTQSsOEX7%2F4ksrsRVx2%2BFQRIu%2FA19R4FAORam96EMmPCvbKOqvbUwfORoMEUUWfsUUXCc7WHAWeV4X14IY%2BeJr95i4%2FFomWMcIuK%2Bk%2FxayoPt7KKlHV%2Bhm2vL%2B9Qxz0sQr2kVzRgzDuc%2BZX3nkjt%2FLfy7o91%2Bi1mm%2F7Guv4xgIhLPhi%2BrMwdFb86URwTv8xkomxV5zvUK39Tm7iQj4ePTm1lZjtbimnREBqfKlj1ljisFga%2BxCKK%2Fc%2FEte%2FdpQ4dYRLC4h6uD2WXVviNYoxv5cpQJdefUUT11Ai6BHDDQO%2B6tjsP6aFQ0dzA86AFJ5Z8sQbyQTyKZc0VZ93C2%2Bcm2u7UQuYuWPI4QrCVljYaFYqdXC8AgaVpAfNya6rjZM4bxoAe5pLm6FMCc8DD10V%2BZWdbESUbN3%2FkSCiJNed9MZkWCqpwdN7AWXv9tRtkMP7j0cQGOqUB%2BnnVFxr1advCleyEF3yUgFDl246yPuX5GSjxF4XfIc8tTDrarFdSu4DO83J3Fe6vAP6nppAhRF6vRT49IE0s4LPw7fIzn94N7HkfuOHvnV4cLzoal0sLbXJJuEbJCkldlgufJg6vKO0NhbTo5mICncw2HcWoMZyqtLvLSYJFFtRC6da1y0Ht0WXD10EoOMQyvJuScxdGan3imvHIOyH2xyY0ddhv&X-Amz-Signature=4c9bd953a16fc2afd229f8f6e2d1919e2912c1e751ce54060748a865e67e6c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
