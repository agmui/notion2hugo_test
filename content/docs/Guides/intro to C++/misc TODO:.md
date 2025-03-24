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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZY5Z4A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq9xrSULCcpv8RsSjPKqyUPS2Ry0VPtDxormS2j1wtEAIgI6%2B0jGezuzEJZJQC%2FNg5sor8OC9f2GuRCFF48litckIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxn%2BiNSkrvdQnv7vyrcA6KB2dWJOIT6DjFGqe5EC7PhM%2BEt27RZds9Uj6se6xVcPso%2FHBLpcNTZaHYrL4ph2QCpmlIpTbeMzVBLscSrPkcfa1IahKuIRhGTWaWBXky3pjU%2BUgzrBPEXBS6Kur5t%2BIR486UFmf2Ba200yzZtIfp3h1pjQxOTLefnYQ5PMXBjDsDdkkBLuZjJiNUH%2FgiZMjjQ8WiROgGCWCxaoUJBE9NEYPsEmFvQENlanEfsC2N61J1DqjH2kbS5BTvujE0SYvEEaQHGfjCsbMqCWgomuVZkeR%2B9q4CCfJCjEw0moxsv5RVDFiQy1j9jeTztQ5%2Fw0npuB7%2BxSlC6VlPdXfabT3ynEn7a2GqkF1lh02Eu4Aj6LEaJJTijmp%2B16wQyozn0OhxwH78jUu1yT%2FnjpyeWiWpNNNi6AUugfYtv3ZMCHzZx18kUAdWet7hk3gzqyeeiR%2B%2FfXyXR7maEGPd9j%2Fu8Xkc35xEUX%2B7iew4S7q%2FDPbWNexqmozUFuQpjpLNvD%2B%2BmouCjbL%2B689mBP%2BilPOXluiFlqBQ0d48zwDCDseDMHjbuPLUyaIDLwGZXMqmEdDZdXvy2rTKxX9BQ2RHHs4%2BZ%2B1UYjRENZu0tCDxUfkoOe8Q%2FrpDKXuj9OKdGN9OJMKCwgr8GOqUBeg56i3bpIi5xRUa9o52EcuOJnjKN%2BifktWhpUMpXy5jQUsKls3gq97iREiBGU1lgDpPzk%2F4tY81xj%2Ffx%2B8LADUa97%2B3LH444iMlJscHGCVTr%2BV2slm5dGxrCUCfNb0tt9cYVJjMpjSSC8UDsL6Rbo2xOW48vxL3JdfyXdDJrpq5qeZxt1unL%2F9ULzJbSosM9zUC9dDJ6ef%2FXKfB5XgtW%2FlD4aD7F&X-Amz-Signature=bfab211dad502505a55371c82da09879080d6de007c9c00a5312e1e87db557ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZY5Z4A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq9xrSULCcpv8RsSjPKqyUPS2Ry0VPtDxormS2j1wtEAIgI6%2B0jGezuzEJZJQC%2FNg5sor8OC9f2GuRCFF48litckIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxn%2BiNSkrvdQnv7vyrcA6KB2dWJOIT6DjFGqe5EC7PhM%2BEt27RZds9Uj6se6xVcPso%2FHBLpcNTZaHYrL4ph2QCpmlIpTbeMzVBLscSrPkcfa1IahKuIRhGTWaWBXky3pjU%2BUgzrBPEXBS6Kur5t%2BIR486UFmf2Ba200yzZtIfp3h1pjQxOTLefnYQ5PMXBjDsDdkkBLuZjJiNUH%2FgiZMjjQ8WiROgGCWCxaoUJBE9NEYPsEmFvQENlanEfsC2N61J1DqjH2kbS5BTvujE0SYvEEaQHGfjCsbMqCWgomuVZkeR%2B9q4CCfJCjEw0moxsv5RVDFiQy1j9jeTztQ5%2Fw0npuB7%2BxSlC6VlPdXfabT3ynEn7a2GqkF1lh02Eu4Aj6LEaJJTijmp%2B16wQyozn0OhxwH78jUu1yT%2FnjpyeWiWpNNNi6AUugfYtv3ZMCHzZx18kUAdWet7hk3gzqyeeiR%2B%2FfXyXR7maEGPd9j%2Fu8Xkc35xEUX%2B7iew4S7q%2FDPbWNexqmozUFuQpjpLNvD%2B%2BmouCjbL%2B689mBP%2BilPOXluiFlqBQ0d48zwDCDseDMHjbuPLUyaIDLwGZXMqmEdDZdXvy2rTKxX9BQ2RHHs4%2BZ%2B1UYjRENZu0tCDxUfkoOe8Q%2FrpDKXuj9OKdGN9OJMKCwgr8GOqUBeg56i3bpIi5xRUa9o52EcuOJnjKN%2BifktWhpUMpXy5jQUsKls3gq97iREiBGU1lgDpPzk%2F4tY81xj%2Ffx%2B8LADUa97%2B3LH444iMlJscHGCVTr%2BV2slm5dGxrCUCfNb0tt9cYVJjMpjSSC8UDsL6Rbo2xOW48vxL3JdfyXdDJrpq5qeZxt1unL%2F9ULzJbSosM9zUC9dDJ6ef%2FXKfB5XgtW%2FlD4aD7F&X-Amz-Signature=cddce03f491531e9be6a10998ddfc68b22eb4fce2190c808b32f445c5615fd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
