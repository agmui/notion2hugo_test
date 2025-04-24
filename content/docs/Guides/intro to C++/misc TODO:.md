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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG27Y7LR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFzh%2BRHXfmJDt6ZK%2F2kxDhMbar%2FvTJ77arQ0cznES1G2AiB7yyHGkFGTzA%2BqgIlpSV65K%2FN7fjPcpc7%2BK0c2Vf5JQSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLmVw1sV1sd1Cggc%2BKtwDp96YLXpCRHaFsIyLtwgqy78b%2BljZAvBQSCRseRanIyGahXOoNGXYBBH81D8PU0PO4hfKirGYHFpwQ96BqdTFH2uqoS%2Fa1G3eFLf2w73UwcsALkjnPnHeVCmtugn6Y%2B8F7eUNNzzbvQby9A36Zlwr1hB3Bv39FIdcLNxNJLKck4tHbTIisRDqzOSMJubY1fUxTVpwSDK1eyn9DRqFXx%2BwXFrMzcF2wEX5Bk4bbXDGbbwq%2FyjUOjuSxRxs9T7IERWj0kPUJYKeMLesThDWbATvngIH5TiqTRsaxlgGCx383OwMQ2OU18GVCo8ztMxqf3y7qm2Wqq1R1JWwuZG3bFpQzmLhI3ChZEUvS%2BxoQ1T0BUHbLMy3tEo4170oKRQaZ%2Bm4P2Id5r6Zc2NEEEyUVQqMbPV7JvODr4uPQZRzg8lLjY4uwgNuP8AB9T7hvjDFYpqP37P9JMhVnF%2BUyErOEgpd9iPVv14SJ04jNzPbGn7FgtgUQ3gLGinS%2FbPMPzTfCv6RbYI6Cm34nsFeZaKlq%2B7U%2BZLqyEDm5GJ8GuA2LD0avf0rpSFNisNjErZLw%2FE%2F1luXgcJnwhmwXLQy9PinSQfgEORlV%2FJmkH7vbqy2P6U%2B6swymdKOyBFr8vcZ6xEw74SowAY6pgGv7UM7%2Bv768hZlTfIDsTeJCmDKBrmx668tGIxwbwPnWCjUuWbFIcK8kjPOqihfN%2FLTD1gqAamrYHTS9fl8L3OsM%2BPetCk21C4gWA5Xr9sT0C17ibG4nCPirH9XQy%2B8O%2B8CafDOwbhCPpbwogt7eJqqCyL7XAIxXRQv%2F1VpktgM2Ytdrh8jzTip5FJkenuB1PHR8prTxidDE%2BNJQ4dWkEHruWNvuauJ&X-Amz-Signature=426937bb51165f895fd905c809b858010148e187ff73c8f6a57213cefafdcb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG27Y7LR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFzh%2BRHXfmJDt6ZK%2F2kxDhMbar%2FvTJ77arQ0cznES1G2AiB7yyHGkFGTzA%2BqgIlpSV65K%2FN7fjPcpc7%2BK0c2Vf5JQSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLmVw1sV1sd1Cggc%2BKtwDp96YLXpCRHaFsIyLtwgqy78b%2BljZAvBQSCRseRanIyGahXOoNGXYBBH81D8PU0PO4hfKirGYHFpwQ96BqdTFH2uqoS%2Fa1G3eFLf2w73UwcsALkjnPnHeVCmtugn6Y%2B8F7eUNNzzbvQby9A36Zlwr1hB3Bv39FIdcLNxNJLKck4tHbTIisRDqzOSMJubY1fUxTVpwSDK1eyn9DRqFXx%2BwXFrMzcF2wEX5Bk4bbXDGbbwq%2FyjUOjuSxRxs9T7IERWj0kPUJYKeMLesThDWbATvngIH5TiqTRsaxlgGCx383OwMQ2OU18GVCo8ztMxqf3y7qm2Wqq1R1JWwuZG3bFpQzmLhI3ChZEUvS%2BxoQ1T0BUHbLMy3tEo4170oKRQaZ%2Bm4P2Id5r6Zc2NEEEyUVQqMbPV7JvODr4uPQZRzg8lLjY4uwgNuP8AB9T7hvjDFYpqP37P9JMhVnF%2BUyErOEgpd9iPVv14SJ04jNzPbGn7FgtgUQ3gLGinS%2FbPMPzTfCv6RbYI6Cm34nsFeZaKlq%2B7U%2BZLqyEDm5GJ8GuA2LD0avf0rpSFNisNjErZLw%2FE%2F1luXgcJnwhmwXLQy9PinSQfgEORlV%2FJmkH7vbqy2P6U%2B6swymdKOyBFr8vcZ6xEw74SowAY6pgGv7UM7%2Bv768hZlTfIDsTeJCmDKBrmx668tGIxwbwPnWCjUuWbFIcK8kjPOqihfN%2FLTD1gqAamrYHTS9fl8L3OsM%2BPetCk21C4gWA5Xr9sT0C17ibG4nCPirH9XQy%2B8O%2B8CafDOwbhCPpbwogt7eJqqCyL7XAIxXRQv%2F1VpktgM2Ytdrh8jzTip5FJkenuB1PHR8prTxidDE%2BNJQ4dWkEHruWNvuauJ&X-Amz-Signature=733eb3d0177551744e2643a0fcbd6d52bf511d01db095ebe883b640b455f9d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
