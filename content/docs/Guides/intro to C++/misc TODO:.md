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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CWSDDE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5RXMY43CB3jxs1OfSnABtpE%2FzVgAvrGqyJShgGac8lwIgNDN0Bd52XIRn3K3vBiPirmbcJnfCMPfKhSNdDLkkAVcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFwi2oh4GG2Bdu4wuircA%2FAvzRw12Tx5qdh9YYOx35wIpM9PACdopGh%2B2oUSL4CxUyZHmadMmpYfZzVGKBapgbpZI2Gyhz1Eu1p35%2BREEYe6Oi7ZQNOYMxwWNEuuF8Kyznxqnv2%2BU0JBWWzCmNvX3DA1cTnpxOVClPtuCdyoZwYcXc%2FJkt4gUhj4JQFmTPF3g8sZxloFJJfUaweersEtAVpLoI0IR79GKezoBFdxEEz1CWDdeoLNUHMEr9Wjhi%2BP%2F83hI2Oxln8Ja%2FcKdow%2FMuKM4EkmO6q4ScbBTFZIv8WnL9F1mGHNUXK1haX7eDsDa%2BKndTffRMnr7guhuKl8N5t7A3KPdCmB10d6P8d1mxnf6Kat%2F%2BlQh0mPW%2F37K%2FotEgTAWF1hrDPK%2FWm59M9mS8L6qNY4HE4XvfP5SSoXRDzDmnJ7349OXJx7caY0dUeoX9on2ICVqf5bV49alo3ekRLf%2FPD6nbsXQfbZD8zTQSBNdcmVPs37AMKZpzR24hhgN8mef9b6JoXlgDJCONqIZORlqSxQ9KGg0fbm%2BJHx0X7E4ijgzoF%2F36x%2B4pY%2BVzPRDAN5TQuOGG9ISsyz27FkguVRXk1TjcxdVlwRYXDD7vQgc0eIWilYnx93EdGu0vi8wRWcmt%2FOArsjGZw0MLTF4b4GOqUBYHE2XQlmWTBkBi6rkbepdiNnx7guf3ei28zRbVMdFdik9yG3Gc0qnLUg3%2BuqIMFHHYkETbSJ%2FpIpCXfwLGJ%2FXglOtsE7YrLmlOgzJTdM0eDs4RsBRfsooM4UxCITmhi4iHWsSU8BuA%2BXyMF5z6NpDOaLABACKZpszkjiKGnmJvAZ5lAIfFKPnYZEskO2%2BbzESBYFzlAGoSTDQCpxGi7Fu%2BUjbVzg&X-Amz-Signature=dc2979be0f3efec7d372f82f9c6d646eb003dc50b89fca9d7cf379624692e4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CWSDDE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5RXMY43CB3jxs1OfSnABtpE%2FzVgAvrGqyJShgGac8lwIgNDN0Bd52XIRn3K3vBiPirmbcJnfCMPfKhSNdDLkkAVcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFwi2oh4GG2Bdu4wuircA%2FAvzRw12Tx5qdh9YYOx35wIpM9PACdopGh%2B2oUSL4CxUyZHmadMmpYfZzVGKBapgbpZI2Gyhz1Eu1p35%2BREEYe6Oi7ZQNOYMxwWNEuuF8Kyznxqnv2%2BU0JBWWzCmNvX3DA1cTnpxOVClPtuCdyoZwYcXc%2FJkt4gUhj4JQFmTPF3g8sZxloFJJfUaweersEtAVpLoI0IR79GKezoBFdxEEz1CWDdeoLNUHMEr9Wjhi%2BP%2F83hI2Oxln8Ja%2FcKdow%2FMuKM4EkmO6q4ScbBTFZIv8WnL9F1mGHNUXK1haX7eDsDa%2BKndTffRMnr7guhuKl8N5t7A3KPdCmB10d6P8d1mxnf6Kat%2F%2BlQh0mPW%2F37K%2FotEgTAWF1hrDPK%2FWm59M9mS8L6qNY4HE4XvfP5SSoXRDzDmnJ7349OXJx7caY0dUeoX9on2ICVqf5bV49alo3ekRLf%2FPD6nbsXQfbZD8zTQSBNdcmVPs37AMKZpzR24hhgN8mef9b6JoXlgDJCONqIZORlqSxQ9KGg0fbm%2BJHx0X7E4ijgzoF%2F36x%2B4pY%2BVzPRDAN5TQuOGG9ISsyz27FkguVRXk1TjcxdVlwRYXDD7vQgc0eIWilYnx93EdGu0vi8wRWcmt%2FOArsjGZw0MLTF4b4GOqUBYHE2XQlmWTBkBi6rkbepdiNnx7guf3ei28zRbVMdFdik9yG3Gc0qnLUg3%2BuqIMFHHYkETbSJ%2FpIpCXfwLGJ%2FXglOtsE7YrLmlOgzJTdM0eDs4RsBRfsooM4UxCITmhi4iHWsSU8BuA%2BXyMF5z6NpDOaLABACKZpszkjiKGnmJvAZ5lAIfFKPnYZEskO2%2BbzESBYFzlAGoSTDQCpxGi7Fu%2BUjbVzg&X-Amz-Signature=3cb5a88981052568602f9409016789d8a6514a94b00cae0d3c87d1d469c532b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
