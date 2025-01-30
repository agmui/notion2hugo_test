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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3I6LZN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolKVbEryCBzNmIsUdzgro8A0Yxx0nkaellE9GXI8mTAIgfTSmdX4Hn%2BYgsSPoxS5KAIeuI9uzGoi9UJwakxC1mYoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtpdnXavXYSI1nSNSrcA0mz06KFeuqBZjvCjOc45JqPkx4KYSBgEa9NmLkBVsIh6jBcLZHI1HvOBwTGuwk%2BqqeOS8N8S5f7wCsg9slje9VnlbMQF7cBONzvq9A5OsVCZqgfqGbTHsSabfBinPupOsHNX9e47rqHsAV4bEyzTAklCCNQQyd3J0zAxlY54FkaeokReEGlsS3BmnfMv1Cn%2BOO3%2FYqQ5KtBhnEDZ05IBHD9lXMFrNo6ZYmibbw0%2FvahhWYGnaMATFcvMBqj0DZzy2fTovLzc3twjb50MLOO6ZsEMFAYsOp5mTROTlY5IVzXSNBRvAetefvTnn4GCVjaF%2Bjrtsc0J2wSneIRzRKeDh02swPGnLEN5%2Fs4wWxmyyPMTLgHNvSc8DdLd74oJRqoryxBBOGo%2BbqQw%2BqMhYSP74JDCSvH9qIBrBh2YwmfunDUatmxRmuL2MDyYyEQ7t91jhIs2VNA%2BlK8%2F9tNxhK9Q%2Bi7mkB5GbTvck0uxA6CbFwuyinYqco4Owk7NjhgFdmYNqx0uTPPMXMDSRQu1NkEjJwgn4jPN4maBh7DMXk3yxQN5N28gPXPs6eCi9ZjPEA6GKjnDMWvjqq99jrjjV0R9VUcBs1a5q6yCOmWnUWByl8%2FtKqHS1YZWmLC90YBMO%2Bz67wGOqUBE1zyyCUotap3iF86GIq8QNYxu01htQzeuJs5FDPWzv74rZ0jtK7LNkz72QVUuyDub%2ByXDDFifH9ZLj0EDisqXLx8TbOKLqWYi%2Foz6W1l%2BeGEZbpOdOutCRrT5DpmG5bkeME1Z6hjS4KrzHvPK8Pe%2Fl5c2%2BTCtxo6pI1OB%2BEMuJ5mYZohLrOBdcF8WoBqAeDRFZD9zw1%2F8BFEmUWzZgqg54YDfMkP&X-Amz-Signature=28f652d2774bbb7bc6f9b519a5b45a2ad79ca4225b6c38b7e4346d20d0c3b9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3I6LZN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolKVbEryCBzNmIsUdzgro8A0Yxx0nkaellE9GXI8mTAIgfTSmdX4Hn%2BYgsSPoxS5KAIeuI9uzGoi9UJwakxC1mYoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtpdnXavXYSI1nSNSrcA0mz06KFeuqBZjvCjOc45JqPkx4KYSBgEa9NmLkBVsIh6jBcLZHI1HvOBwTGuwk%2BqqeOS8N8S5f7wCsg9slje9VnlbMQF7cBONzvq9A5OsVCZqgfqGbTHsSabfBinPupOsHNX9e47rqHsAV4bEyzTAklCCNQQyd3J0zAxlY54FkaeokReEGlsS3BmnfMv1Cn%2BOO3%2FYqQ5KtBhnEDZ05IBHD9lXMFrNo6ZYmibbw0%2FvahhWYGnaMATFcvMBqj0DZzy2fTovLzc3twjb50MLOO6ZsEMFAYsOp5mTROTlY5IVzXSNBRvAetefvTnn4GCVjaF%2Bjrtsc0J2wSneIRzRKeDh02swPGnLEN5%2Fs4wWxmyyPMTLgHNvSc8DdLd74oJRqoryxBBOGo%2BbqQw%2BqMhYSP74JDCSvH9qIBrBh2YwmfunDUatmxRmuL2MDyYyEQ7t91jhIs2VNA%2BlK8%2F9tNxhK9Q%2Bi7mkB5GbTvck0uxA6CbFwuyinYqco4Owk7NjhgFdmYNqx0uTPPMXMDSRQu1NkEjJwgn4jPN4maBh7DMXk3yxQN5N28gPXPs6eCi9ZjPEA6GKjnDMWvjqq99jrjjV0R9VUcBs1a5q6yCOmWnUWByl8%2FtKqHS1YZWmLC90YBMO%2Bz67wGOqUBE1zyyCUotap3iF86GIq8QNYxu01htQzeuJs5FDPWzv74rZ0jtK7LNkz72QVUuyDub%2ByXDDFifH9ZLj0EDisqXLx8TbOKLqWYi%2Foz6W1l%2BeGEZbpOdOutCRrT5DpmG5bkeME1Z6hjS4KrzHvPK8Pe%2Fl5c2%2BTCtxo6pI1OB%2BEMuJ5mYZohLrOBdcF8WoBqAeDRFZD9zw1%2F8BFEmUWzZgqg54YDfMkP&X-Amz-Signature=9fdd40f22f0a3892e08cfb15e2025a2ec2ec6edfe1963da4ba1128106029eafc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
