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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=69ea7ebc5a7cd80f5ad3185f49aa485d0a2ac0a9430c69ab026396a325ee939a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQC3XEF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGsCrfbk8AE0lvrc6cUD9EX1cgtH7COuoQ99UHN%2Fi0wIgaD%2BdEi%2FucOFV%2FVYUO5ETLdmgzahQvU95t5%2BJehMOlHYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2PLcworh4fV6UV3ircA2l5jBAyAz3jUd8D73lHHKqS4VVQDRx4Zlfjy9spXtwLiEaooqjf4Rm8l2L9i71le%2FRyOASiAmlCDQhlSdyR0y5Gs17ILiuMKvKQ715k46dnmGFaBmhOdsGuzN7UzpUQ6OJmFJhfRZkGNgtXIaLbqHcx71u2Xmcu95QGc04D8YbDl3iOBQhj%2BLu%2BSjWUhkmDMJDBdyLZr6NV7boXPS4n4idZGQQ%2B%2FOHA96qbzOZnxzkMQBtxvAKmB%2FjtiRxFIa8d3%2F%2Fiwb%2FYJy9LYm105ClZ2vKXW%2Fn8icHIHgbdnI%2FhsvoKAUsThr%2FdqSpgfgtbaqWEAsgDBaXBf5Ftf1s%2BcgpuYkZIdqhyOYzcesI0GBwiZlGqTKi2%2FAec1SLrMxxmy%2Brraqz4XZIiHEhcKyE6X%2FCx9EXd6UOyTaKGGjoT0ajgtarYQdCcwoRb28zdjlDg%2BPnz4%2BgIAT6Msf1JU8MmM69BOjOWGzsez5DbXfjqdARwk6wicPA5C9Ewn7kvvYBbE71EFAnOEaFbmc%2BZYzqutHcwZfT2ZIhyzyH9u%2FW%2Fpyjh%2Bz38a9xNgAouz%2B1L1nxXLYS94FL17A%2FP9dAwNL7ACnZPAc96JrKuNNPxoT1ZwgN9QdGW7NyjGmq4%2Fy%2F%2BCU8ZMJj8y8IGOqUB%2BwKdmVjLyKyOcxnTr8TrfxeCn80kodvvMqZto%2Fyaqy5unlB7qqYJ%2FQbTnJ7bIQnUVABerd38OaijOuU43O27rvoFwsVPE8NXMclsFcUatTldFqacBVf%2F2uiYyfAxJlh8Late2iteDokeveaxutSBCqKPA67uKG8P3btGgsRzAXIzXzgCP76CCNcrM417ldOJ0r2PgaPx75KDYLcak15i0HodFq6X&X-Amz-Signature=7ed3c13956d658dd4931b33d21778beeaab376adf3ecf54523e5fa133e5be292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
