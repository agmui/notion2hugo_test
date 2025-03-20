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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIB7NXP4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9k50CVfZmJf6nidBTWBOAsJAAOS7zvG2jknizM9O8qQIgVlUWRP7LrHzZLnAB4AvHKXZdrJlRp06BTZvJmmJ%2FQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9M%2Be1aYvgUC4j2sSrcAzFtETX%2FGOcivCFVJHFbe8DNf6pYmZxmVnU5j4EAEOTdr4aDeom7IvebvU3pwsr%2B8dUeVOud4toNz7hGbGveVTRiuxRX%2FoPdOH%2BUL4o9Iilv8g2txKvFUX83%2B8oWWhHKXfdsAz8b8lD1kUcEXS2GSz%2FtT%2BIDkUKqiAJuG17DSGuJG4Mk52j%2B21h0aNVMqjckCEaBRwWmPEe%2F5ZF1G9G%2F%2FrH%2FVMjfcVGfLSDhkV4e%2BbnaBKKkRAlVufdpL1PX35chsEouLs9qWI3V1BIeNRI9GNPzVNNjzNmImDIABDd3bKs7BHVy4FFA%2Fd8VtKz5mt%2FLdjKxTQnYQ8z8LPHwfBs49xwPcTek80Kmu0q9Ni3uj7TEG%2FezCy%2Fkwr9nP6YNoTF%2BHhceJ407DAG4mCx5ddiNNJjmHMLTdiq4%2BaQiIFsd%2FjJaVLeF%2FkBFrc09Kgs2e0Ti6X76y%2BLr%2BMN3U6lmkJ9qw8kURsMHrCXN86xgq1pb610EAA8kIJk9pfYqCp6DSXm3cYfRIztrWNPV%2FC0guHJnqqeusv0Pwj10Wgq7kKe4Kh6FOEUdqCFJGfoCQnV2K%2BUH6Mt5hTZW7fEMomgUhdQbLsh3NM9tT%2FcDFp0dd%2FHame7vurMoPuNp4xZRSN%2F7MJ3l8b4GOqUBE9RkqDzfAdFbeijwzJhPyAijr0vhVWS%2BQi6bhGcvMuvJbfPYI%2FyL%2Fy5HM340G2buXtLlEBjUpZrYLwghrYLGfxq537O6VNNY4Lk4aG52rSNdjzvwCY1jtnrPA%2B3TVrInE7ElK8FUhgxcMaY9l509IsSA4DRhibrwxeAAyWYHgeWR7KaPzvSnR1JTlkrk%2FeZV767DGsz%2FNU%2FcSDH%2FfOU2oHWoGlfu&X-Amz-Signature=f152347f9348d7cfbec744adadfbeda4082bbb44aa67888a7c2a17f4658210a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIB7NXP4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9k50CVfZmJf6nidBTWBOAsJAAOS7zvG2jknizM9O8qQIgVlUWRP7LrHzZLnAB4AvHKXZdrJlRp06BTZvJmmJ%2FQIcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9M%2Be1aYvgUC4j2sSrcAzFtETX%2FGOcivCFVJHFbe8DNf6pYmZxmVnU5j4EAEOTdr4aDeom7IvebvU3pwsr%2B8dUeVOud4toNz7hGbGveVTRiuxRX%2FoPdOH%2BUL4o9Iilv8g2txKvFUX83%2B8oWWhHKXfdsAz8b8lD1kUcEXS2GSz%2FtT%2BIDkUKqiAJuG17DSGuJG4Mk52j%2B21h0aNVMqjckCEaBRwWmPEe%2F5ZF1G9G%2F%2FrH%2FVMjfcVGfLSDhkV4e%2BbnaBKKkRAlVufdpL1PX35chsEouLs9qWI3V1BIeNRI9GNPzVNNjzNmImDIABDd3bKs7BHVy4FFA%2Fd8VtKz5mt%2FLdjKxTQnYQ8z8LPHwfBs49xwPcTek80Kmu0q9Ni3uj7TEG%2FezCy%2Fkwr9nP6YNoTF%2BHhceJ407DAG4mCx5ddiNNJjmHMLTdiq4%2BaQiIFsd%2FjJaVLeF%2FkBFrc09Kgs2e0Ti6X76y%2BLr%2BMN3U6lmkJ9qw8kURsMHrCXN86xgq1pb610EAA8kIJk9pfYqCp6DSXm3cYfRIztrWNPV%2FC0guHJnqqeusv0Pwj10Wgq7kKe4Kh6FOEUdqCFJGfoCQnV2K%2BUH6Mt5hTZW7fEMomgUhdQbLsh3NM9tT%2FcDFp0dd%2FHame7vurMoPuNp4xZRSN%2F7MJ3l8b4GOqUBE9RkqDzfAdFbeijwzJhPyAijr0vhVWS%2BQi6bhGcvMuvJbfPYI%2FyL%2Fy5HM340G2buXtLlEBjUpZrYLwghrYLGfxq537O6VNNY4Lk4aG52rSNdjzvwCY1jtnrPA%2B3TVrInE7ElK8FUhgxcMaY9l509IsSA4DRhibrwxeAAyWYHgeWR7KaPzvSnR1JTlkrk%2FeZV767DGsz%2FNU%2FcSDH%2FfOU2oHWoGlfu&X-Amz-Signature=6777c014699470737cbe2ec7e2e68e34fcb376c902ff4be84db6e5c787e70829&X-Amz-SignedHeaders=host&x-id=GetObject)

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
