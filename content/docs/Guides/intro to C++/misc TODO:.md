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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW4YCBNW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDuzrJFHt8HUvm0YOfxUXjbchTlx%2B2NtzuDCOGlTfYcJQIgCq0l8nRbQ8EPGZSICogDH%2Bncrdj85qHel9tCNqlNPhsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAMt5FmHvaw2SGdJByrcA%2BNFtD%2F1nWWft6XmYDxctDD3qh%2FkrTNRkyvlDacZboCpOm1KXLj%2BrMaTCcjJRAapCtyvysvs%2BncdNb6DmpGATYjv1nTtyFF3LVfFUdKmaHYGVVKwQZVmrRO2rHZ8uzxoHk%2Ft0CD5oK4sprenoXxs5JHKreEeDSksnoVHwH6lXNlNK5kvNyArSDTEiFRjPcpkF6Qfqu9REiFiZXZFVl44iYbJWkMh0dGTGwS%2FBUELznZTZJo25mGJsZP3oszz1lQbUciEC970RMj9Hoa5CVKcDveQjvPNheCqqVZzS2xVlHDPV%2By%2FZIjtXdo90uOacgXbKWUwFIi70an4fHFTF7lAl0uPjC2F%2BFhQBSzLsnDOlWAMDpCKEmEyzskbxpRDCu8x5ZN%2B2G8UJsmEf%2FUeg9U3AAhnBgvW89kQbFHDfDqRzxmtqhutg0TRPlBlUTif3KU%2FMKPbMMtC0XMPT%2FT%2B%2BX0b0nPa4JrEkDSFIuGiXQfcezmGCMtmq3%2F7xNYJj0UwyI%2BOOeY7gnChKVvwS%2Bb04vJQxnBcsdOaHq90dBhoeSotklbHTnPTO39k%2BJoS4KDgJHhoB2xxNtemVScioUTRezMDDkpgLL9mSjKBBp3yrtSzg9vHk4%2FQq3LazNSwdu11MJjX5b4GOqUBs3yxooK%2Fp5u8H75hes3kOuFGAeYS0DYfDDXfUIMJaxTNVXuFDrgo%2FDbgVaqKN8K1WbxAdOiCIJAuNprr%2F8obpyjUCXIgX%2B0mMaRUTkj213HjXznDijvC95pijMM4RgppEYskFJEqI7x3iaf19j8SC9cJVd1Y3Pd15vgpj%2BfKB5JFWivoSPLmxAn2IkNqURm%2FgROC7aQagq0IyKkFPWXlrTwFOaOB&X-Amz-Signature=26669b84e9bb7c7b5ec3215889fd998d734a09a09dee0bb3537c37829b94e974&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW4YCBNW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDuzrJFHt8HUvm0YOfxUXjbchTlx%2B2NtzuDCOGlTfYcJQIgCq0l8nRbQ8EPGZSICogDH%2Bncrdj85qHel9tCNqlNPhsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAMt5FmHvaw2SGdJByrcA%2BNFtD%2F1nWWft6XmYDxctDD3qh%2FkrTNRkyvlDacZboCpOm1KXLj%2BrMaTCcjJRAapCtyvysvs%2BncdNb6DmpGATYjv1nTtyFF3LVfFUdKmaHYGVVKwQZVmrRO2rHZ8uzxoHk%2Ft0CD5oK4sprenoXxs5JHKreEeDSksnoVHwH6lXNlNK5kvNyArSDTEiFRjPcpkF6Qfqu9REiFiZXZFVl44iYbJWkMh0dGTGwS%2FBUELznZTZJo25mGJsZP3oszz1lQbUciEC970RMj9Hoa5CVKcDveQjvPNheCqqVZzS2xVlHDPV%2By%2FZIjtXdo90uOacgXbKWUwFIi70an4fHFTF7lAl0uPjC2F%2BFhQBSzLsnDOlWAMDpCKEmEyzskbxpRDCu8x5ZN%2B2G8UJsmEf%2FUeg9U3AAhnBgvW89kQbFHDfDqRzxmtqhutg0TRPlBlUTif3KU%2FMKPbMMtC0XMPT%2FT%2B%2BX0b0nPa4JrEkDSFIuGiXQfcezmGCMtmq3%2F7xNYJj0UwyI%2BOOeY7gnChKVvwS%2Bb04vJQxnBcsdOaHq90dBhoeSotklbHTnPTO39k%2BJoS4KDgJHhoB2xxNtemVScioUTRezMDDkpgLL9mSjKBBp3yrtSzg9vHk4%2FQq3LazNSwdu11MJjX5b4GOqUBs3yxooK%2Fp5u8H75hes3kOuFGAeYS0DYfDDXfUIMJaxTNVXuFDrgo%2FDbgVaqKN8K1WbxAdOiCIJAuNprr%2F8obpyjUCXIgX%2B0mMaRUTkj213HjXznDijvC95pijMM4RgppEYskFJEqI7x3iaf19j8SC9cJVd1Y3Pd15vgpj%2BfKB5JFWivoSPLmxAn2IkNqURm%2FgROC7aQagq0IyKkFPWXlrTwFOaOB&X-Amz-Signature=3d48f1d1d83d2e16b31b75b0d40ce0e4753f05d5eef250c6b7222231f9d51633&X-Amz-SignedHeaders=host&x-id=GetObject)

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
