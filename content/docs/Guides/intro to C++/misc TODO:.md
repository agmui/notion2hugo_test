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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWSYMQD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIExTKHcAxEOu1wNZf%2Bx5OMRCcSPM1Gm%2B80Ee%2BuHvBcrUAiEA3E8L88gw2e9mwUFjClKKY%2Bri0KaHpTg0LUrAlMdF%2FJAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg6pkTO%2BJ2p4%2Bc67ircA%2Brz2iZ1A95AKVA401sJhy9xfiGsu27x%2BjTl4J1fKC%2FHbcl%2FklyC4wkL9ANQTjM3W8kK8M3cKAD72D2ZrigOU%2BdntSQtNR%2BJnZfz7OVdpiaj89sNakTZZyLwHYq3SH96F2Qj%2FNZkLPd8dYeSKG7qvwRLUA4qr1WOS%2FPyiCPRIpFa8myzdJRP26Gih8bDCc88hVKWlNCiqtHNgDcHG80C60RTWqU4YRoe1VNR91Di7DNhV%2FYB6ew9uoP4a%2FhkZoNCO%2BMdncW8uNwHy6n2b2HtkE8fs1CJVmHVk%2FkzguqhbX33BRNSDRq9tdN3RoVAh5Ka8ECdYHpQJiDH3f9jfzqARFwt%2B0LI%2F9GQQPtdc8hJWP8%2FMxaGUEXyt3WNkNk1H9J4kKU8T3qjEBv1Dmh%2BShAmTz6yN4MH%2BuuP4dq34YIIyVjiH0i671SApFPfS4XDVv3NbdxBXbW3POcUDYh9XnPysj%2FyZT03X05w7878YsUDJeDKXBfhwQjKHyifRXgpBlWa2aqv%2FsTQ8WcGOXbsja5vphB1Hv8ShZKaFxhPeOAbi0t4fsqk19yiTBQj8J6LE3y96fn7Jy7%2FBaTnPPUU0tXMV%2BZwvwFPLZBBw9MNp5%2BWC%2BdRO%2BaAy7nVUQ9%2BSbvtMMmQh74GOqUBrWagjR%2FPUJT%2BJM6ccZS8vEwUUVc43xJ1%2Fxd6QDyHnNae6RAypcC6HaC1WdNbmqQ04BOkTxmkcMrAzoodBji%2FYDzyjCZe5BMqGK3FlsISzcTXqM5WYsdr%2BHD72BJiO7fL%2BZd8CfIW3essiDjWmDlmH3mmIWhj9EM1f0603%2Fh0vrwsBtCY3MGluMwVmmyWiWaBm%2Bx4W41p72%2FFXaUDlM3qdHekYN%2F8&X-Amz-Signature=6ee380cd8e66e5b51cb7f4732422bcfa9785a7075b1cac95b4aa9094a5607fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWSYMQD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIExTKHcAxEOu1wNZf%2Bx5OMRCcSPM1Gm%2B80Ee%2BuHvBcrUAiEA3E8L88gw2e9mwUFjClKKY%2Bri0KaHpTg0LUrAlMdF%2FJAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg6pkTO%2BJ2p4%2Bc67ircA%2Brz2iZ1A95AKVA401sJhy9xfiGsu27x%2BjTl4J1fKC%2FHbcl%2FklyC4wkL9ANQTjM3W8kK8M3cKAD72D2ZrigOU%2BdntSQtNR%2BJnZfz7OVdpiaj89sNakTZZyLwHYq3SH96F2Qj%2FNZkLPd8dYeSKG7qvwRLUA4qr1WOS%2FPyiCPRIpFa8myzdJRP26Gih8bDCc88hVKWlNCiqtHNgDcHG80C60RTWqU4YRoe1VNR91Di7DNhV%2FYB6ew9uoP4a%2FhkZoNCO%2BMdncW8uNwHy6n2b2HtkE8fs1CJVmHVk%2FkzguqhbX33BRNSDRq9tdN3RoVAh5Ka8ECdYHpQJiDH3f9jfzqARFwt%2B0LI%2F9GQQPtdc8hJWP8%2FMxaGUEXyt3WNkNk1H9J4kKU8T3qjEBv1Dmh%2BShAmTz6yN4MH%2BuuP4dq34YIIyVjiH0i671SApFPfS4XDVv3NbdxBXbW3POcUDYh9XnPysj%2FyZT03X05w7878YsUDJeDKXBfhwQjKHyifRXgpBlWa2aqv%2FsTQ8WcGOXbsja5vphB1Hv8ShZKaFxhPeOAbi0t4fsqk19yiTBQj8J6LE3y96fn7Jy7%2FBaTnPPUU0tXMV%2BZwvwFPLZBBw9MNp5%2BWC%2BdRO%2BaAy7nVUQ9%2BSbvtMMmQh74GOqUBrWagjR%2FPUJT%2BJM6ccZS8vEwUUVc43xJ1%2Fxd6QDyHnNae6RAypcC6HaC1WdNbmqQ04BOkTxmkcMrAzoodBji%2FYDzyjCZe5BMqGK3FlsISzcTXqM5WYsdr%2BHD72BJiO7fL%2BZd8CfIW3essiDjWmDlmH3mmIWhj9EM1f0603%2Fh0vrwsBtCY3MGluMwVmmyWiWaBm%2Bx4W41p72%2FFXaUDlM3qdHekYN%2F8&X-Amz-Signature=301bcd7e7b582811b6293608baa023c74c04f545b0459b5d89c17d858862dd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
