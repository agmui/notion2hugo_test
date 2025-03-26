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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTJVQF2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICayeRc4%2F%2B4q9jTn9HjXr0xlMuhFUsf2JGXh8tpuvaOsAiBDax3H9EveH5RsIWC4027oCSI73f%2FgQJuA1RLP66Qptyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMCQIB84V0Iyukh2UDKtwDbWW7ZQmbq33OpcLgYBjwf5XEpu2%2BppXi%2B94Jiz4v2tYMFvBWVjzaJwdctmWfArMhEodhUilPtGhHDhAJE9oa5AuxpxmleMy%2B7gnpQ1DEDHwV5d05XOvCRYiZ7q1iAOoB8owYH8CUYjFOyXpIFEBU2kA%2FBHHdYkaOxUHkj%2B2JckMgfjUrEnWNL%2BhTJz7Jcd89mGooJ34dDrPuG5ldJdZPUdVjXB1eK%2F25gad2Dz46tzkj3n6KcSfEXNDv4IIJCgNWDzq67HH7682Z5VMfBIbs8l%2BTRktQWRfWAUMTnSfk3OpMHOuA6kXY78%2FT3LBCsUEEeC95klWCVcwhaRfhO2xTvDkiIt%2BXxzlkxYnbdMyunCecDWd14Dk73cQGoD4VKJR3M6itHwjxL1V38QavOMgiDB0MVvPszlSRQuz6NDX9GNTAcOvHZF1x%2BrzgTW1GCw3V0oIR16C55DIwLOgGynahVNvcXoeZBi9AJs%2Fkd%2BMZAuoCpf16JHutAYx78lEcCVa5Kq88gXIIAMKTcQX6SqS8JteeYLQSpQcdhKdeP9md81fWPyhHYnUdlHZJX%2BEwSiVtQbpscm8N5DnEG5UjZIgw8XBFuZCts9OCbcwzIougUjkSCXI6I33NzcJawuAw6%2ByOvwY6pgEXQL9MVlIljtLZXoXujm%2Fp0g0ZTCbeeSoaRPT7tW0G4BWfLo514qkMBFDj%2BneC6ruUrcGi6TnHfyHfhnyprxSVZo7DBdTd1GL07citcJxOngaOAk3OVBcH6YKLNkKaDgERgLPz3hfhqOBnIylEwG6vmh6zHYYNvj%2BGIBwyHlUEiAueFdDeeckCLqyv1I%2BZ60lzYueAMGGWKZgmTsmV01KqJuORQV5V&X-Amz-Signature=a29b0d7feb0eca7de7ec59b36047592f5c6a42cf3dfa22311d5197222e956301&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTJVQF2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICayeRc4%2F%2B4q9jTn9HjXr0xlMuhFUsf2JGXh8tpuvaOsAiBDax3H9EveH5RsIWC4027oCSI73f%2FgQJuA1RLP66Qptyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMCQIB84V0Iyukh2UDKtwDbWW7ZQmbq33OpcLgYBjwf5XEpu2%2BppXi%2B94Jiz4v2tYMFvBWVjzaJwdctmWfArMhEodhUilPtGhHDhAJE9oa5AuxpxmleMy%2B7gnpQ1DEDHwV5d05XOvCRYiZ7q1iAOoB8owYH8CUYjFOyXpIFEBU2kA%2FBHHdYkaOxUHkj%2B2JckMgfjUrEnWNL%2BhTJz7Jcd89mGooJ34dDrPuG5ldJdZPUdVjXB1eK%2F25gad2Dz46tzkj3n6KcSfEXNDv4IIJCgNWDzq67HH7682Z5VMfBIbs8l%2BTRktQWRfWAUMTnSfk3OpMHOuA6kXY78%2FT3LBCsUEEeC95klWCVcwhaRfhO2xTvDkiIt%2BXxzlkxYnbdMyunCecDWd14Dk73cQGoD4VKJR3M6itHwjxL1V38QavOMgiDB0MVvPszlSRQuz6NDX9GNTAcOvHZF1x%2BrzgTW1GCw3V0oIR16C55DIwLOgGynahVNvcXoeZBi9AJs%2Fkd%2BMZAuoCpf16JHutAYx78lEcCVa5Kq88gXIIAMKTcQX6SqS8JteeYLQSpQcdhKdeP9md81fWPyhHYnUdlHZJX%2BEwSiVtQbpscm8N5DnEG5UjZIgw8XBFuZCts9OCbcwzIougUjkSCXI6I33NzcJawuAw6%2ByOvwY6pgEXQL9MVlIljtLZXoXujm%2Fp0g0ZTCbeeSoaRPT7tW0G4BWfLo514qkMBFDj%2BneC6ruUrcGi6TnHfyHfhnyprxSVZo7DBdTd1GL07citcJxOngaOAk3OVBcH6YKLNkKaDgERgLPz3hfhqOBnIylEwG6vmh6zHYYNvj%2BGIBwyHlUEiAueFdDeeckCLqyv1I%2BZ60lzYueAMGGWKZgmTsmV01KqJuORQV5V&X-Amz-Signature=dd7fb626f452c000261203d4c3a6c240b7ed685068c35c92a0f9282978b3d7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
