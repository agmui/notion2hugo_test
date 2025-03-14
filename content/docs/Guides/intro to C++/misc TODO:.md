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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGZAHMU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAi6MMlWyl2cNyRdn6%2BtE0Ck5EMHQqpOc7rEZpExHXQIgdyx1md8gN9Bu2EhHAeTHbn8%2F3%2FxtgTCJ%2FAtzpLOIIxUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZ1S2nXFxRWA10oaircAwTMIoqokgQaofLXpfk3ES3vUqhd4uOWvasepb2cBCuyl8qZjS1jaqZo4BiQzULnA2KIFmnYcoIMvD9mi5Yr89YOOIxUNuEYIWVAWh2GYthtnA8ykpt9EL9TWYyF0KV3ufdO0sOBnthaMLjLJOmQnEmg3gXmoJ1ciJKxmSCnjL0RWmfy0j9YDHlHiB5kTyyw1Shw%2FlpLl9mAQ4TNT8BDLOFiZke7%2FvzxDlejAG5EUXtfmhIax3u0P8j6W64ve4EfzCq6e%2FEqxT1RDFf%2FSYw9Z3cniBYH1zMNie4zH8%2FquyeAzCdbx9L7%2FrXwNmecRLhugVAY9XooZiyIUfbV93%2BtHhIzYxtvWdUvwgrRV6JVM%2FEm1pazvSMiPYkmLfjyOuADOkL%2B6XQRHgBv6W61tmzNtNDpg24DHs4hbGjLWcjjSt7lttB6iwLtRwFsIT2XV3mUDx%2FnDX7J%2FlP1tQTk8ynQfMQ7X%2Bh8e6mbpXBbnkWU%2Fj4WVGoR%2B%2FYiDOOuwe7KabhARjQigPItszacTPZkJCjkOzX0s3PaWD4XAl7RLmOunXQ1nQUt0MUSHvefAstIZyfIbBBElnGL4kMFi40AIjL6FhFQvizEiKVjx5OrWHT9Qfq06EWHkkRxTU6HP0evMOTA0b4GOqUB7vLZIURpHr3QIM5W%2B4siDVxuTn08owf4j0B616SlxwqIVf53fEbsXDYSWUOaUDaKLe6yHwH7ftL6SP7CbCbC%2F9D5sIhiHNY%2BjqeNto6SRd44P3YsBGhZj%2F59%2B9%2F7ywXR71DLAdxrqJxKEvYd9KPRW8rKSt1SWl00QxCfbY4Uf7cFHXGsNov2NFYgzgDXfZYIU14tHvROTRcKbzVo98jbhuBguBPb&X-Amz-Signature=75974a7fe1cfdac2cc6320c789e64e2ed6834d178de350576367a4194d9b5387&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSGZAHMU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAi6MMlWyl2cNyRdn6%2BtE0Ck5EMHQqpOc7rEZpExHXQIgdyx1md8gN9Bu2EhHAeTHbn8%2F3%2FxtgTCJ%2FAtzpLOIIxUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZ1S2nXFxRWA10oaircAwTMIoqokgQaofLXpfk3ES3vUqhd4uOWvasepb2cBCuyl8qZjS1jaqZo4BiQzULnA2KIFmnYcoIMvD9mi5Yr89YOOIxUNuEYIWVAWh2GYthtnA8ykpt9EL9TWYyF0KV3ufdO0sOBnthaMLjLJOmQnEmg3gXmoJ1ciJKxmSCnjL0RWmfy0j9YDHlHiB5kTyyw1Shw%2FlpLl9mAQ4TNT8BDLOFiZke7%2FvzxDlejAG5EUXtfmhIax3u0P8j6W64ve4EfzCq6e%2FEqxT1RDFf%2FSYw9Z3cniBYH1zMNie4zH8%2FquyeAzCdbx9L7%2FrXwNmecRLhugVAY9XooZiyIUfbV93%2BtHhIzYxtvWdUvwgrRV6JVM%2FEm1pazvSMiPYkmLfjyOuADOkL%2B6XQRHgBv6W61tmzNtNDpg24DHs4hbGjLWcjjSt7lttB6iwLtRwFsIT2XV3mUDx%2FnDX7J%2FlP1tQTk8ynQfMQ7X%2Bh8e6mbpXBbnkWU%2Fj4WVGoR%2B%2FYiDOOuwe7KabhARjQigPItszacTPZkJCjkOzX0s3PaWD4XAl7RLmOunXQ1nQUt0MUSHvefAstIZyfIbBBElnGL4kMFi40AIjL6FhFQvizEiKVjx5OrWHT9Qfq06EWHkkRxTU6HP0evMOTA0b4GOqUB7vLZIURpHr3QIM5W%2B4siDVxuTn08owf4j0B616SlxwqIVf53fEbsXDYSWUOaUDaKLe6yHwH7ftL6SP7CbCbC%2F9D5sIhiHNY%2BjqeNto6SRd44P3YsBGhZj%2F59%2B9%2F7ywXR71DLAdxrqJxKEvYd9KPRW8rKSt1SWl00QxCfbY4Uf7cFHXGsNov2NFYgzgDXfZYIU14tHvROTRcKbzVo98jbhuBguBPb&X-Amz-Signature=1c96c5540c363d9ccd8fdf14960006eaf8fe689184d62fb9a2b3845de90347b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
