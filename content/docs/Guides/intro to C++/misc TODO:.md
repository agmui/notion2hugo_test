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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WP43Z4X%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH9bUzc6sF93Jn%2BsGTpxMHgHW66besFXtMsYZD%2BOCeAAiAAznEnvZBKJyGkY0aqrANxTEBXJTg7vynv6DWOvW7nUSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ThpEp0QC%2BRI1r%2BmKtwDCgLocrHsnXi7dxYzY1zf68ebVyVKZzxnSdZKN7e3FI6CLk%2FzYcayx7UijR7FVrst9gRmcvwkImZfXZuKBMAKVx%2BWg3yBVUgXyOzyEK81QmrFzBWEkTxrYQO8ignYey4R8giCOVyofGXUEpE6%2Fl%2FngqiNsILBvkB4m3WuLZnksv3n0fi1dIlQNWkG5QZsJbrp%2FdzG1osBxqUc1UhbrSRtSNsF1GPcLVbC3jvUcHkOc65M1aYDM0S7um7oaUDqNRmSTWik9uv%2FqSFPuXP76fKnBr1d65QdYHYWfD8NBuDRkpZIDYgP2kYad3cuwAx1rAFU%2BJs0qnl58wP2%2FWNsLy31uRLXseqAjpnOPqdqGAfZXgjkTButDQuMyhwUTSsm34WknIHm%2BrUgl%2B1YJFp4PMlQGtDnbhvqLaW%2FtxoQYGG5iwJ2u7ieoiUKn%2FSnhHxO8%2FCzblY9neNH%2FLjgTcINo%2FJelobIEX14NC6PLMgNGc1DxHZ8RCTNPNbZ5yb%2B9eMccU8alxguwyiWB9ubgSaj8S1s7QIlvmWEM6EPl9gmO3ntRAZKmD%2F9PxW3OzOcroiQjSgucwhMakhLTpvWEkWRs8c%2BdbhosH%2Blkf5U2OPjVk1PdzIpHW%2F1YhL4XcjGPkowp%2FzCwAY6pgFwirlFDBAe22UvOpcMAK0567ybuYrftzubNfhR5HJa4AnTI41fJfEjBLQG3g8bXLAeV6X5jX7gXrDT7C7ArF2v0q77KjkGaA8Rbpp6gordtL5tpdIW7dl3MhGq0xJZ7bF8qecFdNrpQhVuKO8Jr%2F0%2FvQwpGPPPd3tZEzvAwq2YgzZHtdBx6CHnxzU9mzn948piDPF1HL195O%2Bzc5dLXrcrmv4Lnhqv&X-Amz-Signature=930103c911e2dcea96dad0678db9ec07c53cbb9ac51367a30605a82056fdb25e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WP43Z4X%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH9bUzc6sF93Jn%2BsGTpxMHgHW66besFXtMsYZD%2BOCeAAiAAznEnvZBKJyGkY0aqrANxTEBXJTg7vynv6DWOvW7nUSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ThpEp0QC%2BRI1r%2BmKtwDCgLocrHsnXi7dxYzY1zf68ebVyVKZzxnSdZKN7e3FI6CLk%2FzYcayx7UijR7FVrst9gRmcvwkImZfXZuKBMAKVx%2BWg3yBVUgXyOzyEK81QmrFzBWEkTxrYQO8ignYey4R8giCOVyofGXUEpE6%2Fl%2FngqiNsILBvkB4m3WuLZnksv3n0fi1dIlQNWkG5QZsJbrp%2FdzG1osBxqUc1UhbrSRtSNsF1GPcLVbC3jvUcHkOc65M1aYDM0S7um7oaUDqNRmSTWik9uv%2FqSFPuXP76fKnBr1d65QdYHYWfD8NBuDRkpZIDYgP2kYad3cuwAx1rAFU%2BJs0qnl58wP2%2FWNsLy31uRLXseqAjpnOPqdqGAfZXgjkTButDQuMyhwUTSsm34WknIHm%2BrUgl%2B1YJFp4PMlQGtDnbhvqLaW%2FtxoQYGG5iwJ2u7ieoiUKn%2FSnhHxO8%2FCzblY9neNH%2FLjgTcINo%2FJelobIEX14NC6PLMgNGc1DxHZ8RCTNPNbZ5yb%2B9eMccU8alxguwyiWB9ubgSaj8S1s7QIlvmWEM6EPl9gmO3ntRAZKmD%2F9PxW3OzOcroiQjSgucwhMakhLTpvWEkWRs8c%2BdbhosH%2Blkf5U2OPjVk1PdzIpHW%2F1YhL4XcjGPkowp%2FzCwAY6pgFwirlFDBAe22UvOpcMAK0567ybuYrftzubNfhR5HJa4AnTI41fJfEjBLQG3g8bXLAeV6X5jX7gXrDT7C7ArF2v0q77KjkGaA8Rbpp6gordtL5tpdIW7dl3MhGq0xJZ7bF8qecFdNrpQhVuKO8Jr%2F0%2FvQwpGPPPd3tZEzvAwq2YgzZHtdBx6CHnxzU9mzn948piDPF1HL195O%2Bzc5dLXrcrmv4Lnhqv&X-Amz-Signature=c7050ad33ba2ff06401d5a23562d658f04c3aea3fed48ed2e6bffa82a0fc43a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
