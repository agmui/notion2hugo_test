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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AA6LHI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDUO5qYy%2ByDIA1uo29H%2BRQUlMJMnjsl4%2FkL3V5bxboVowIhAPdn3mung3n6PXv3aXh9SeOhwTeZiJlrxQHUX%2FJ%2FyqckKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BP636XKUCIFhoFoQq3APi1vhb3u1u2G48%2FULkHR2U5hY%2FNYkvjIINkLyD9qUSDexJ68%2BnajsVo5IXnMugbYFwQ12Gh7OwX8Ud9qhgfhTpVqy1bddNTRkYr%2BMHBsEmx6YP0RSCeXrLfWVZ8AOu8ediJRMEfMQIrjirSlOgNswvzExCGB0qc7O5E%2B3myhJ6DcT85laxBPDBra8AeOFvOUigFqEAhdD1o0NK%2BYah99EQPqYbBQ4NeummhCHcde4wpDVNYnoY9oRTEHV50SIWjS2tnZ3pickRQzlxPIQQB8pvsvhiKnBseniTATzkVAZ08qlH1tqlVnCGiT7dOkQsF1PEW1SEjbIcmT%2BoTL3lBSOTTgT2POXrMeSESCz4u9xCv9dm%2Fqyk2yTkWO2ne8KuSXgn8sWaHguHcMnQNFMTCW%2BYWFHIg6ikNAZeRIiYbjNEB22r6%2Fk2BWzqeHZyJZop8ED06DO3SV6t3YNHorFqE%2FTJydX0d77oJg2rJaSweQVM8u6bdwAHuAqsAcnAMy2G%2FVHEEBjdm5q5j9ZQTmBAtu1vmqjAlA6ak1YovaPbuUdZVlYjjLEo5xeYitnX1xrLmlB1WtFKXWgZwjGhl3ZdJ8fMpGTnPx8NwGELvPK6PAvvGeNvEJkErw88s9DCDDCv4Ma%2BBjqkAXZEurt4xdhC8%2B9haNBp2t5N6QNhrlfvMKRJluP36exA8uFaYvdEVKGlnOCA7C3T5QvVsxVEtYv5Pp4G7KJtdg6XBMJDu2K7zY5CqOuFIrl74M9Bc1Ag4o6gW0UoiJD0tapw3J5nbco5NwVCe4bO6K6LtNL2NG83WG84KdtNRm6pBu9GM4uQ5IAgk9Y972M3r9Il4WMQPLwg%2BPbaEcWgKTjv9dmb&X-Amz-Signature=523433047bd06222b619bcda6ef25ae87836979cf3bea3f8b6b4a37c41e1c3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AA6LHI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDUO5qYy%2ByDIA1uo29H%2BRQUlMJMnjsl4%2FkL3V5bxboVowIhAPdn3mung3n6PXv3aXh9SeOhwTeZiJlrxQHUX%2FJ%2FyqckKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BP636XKUCIFhoFoQq3APi1vhb3u1u2G48%2FULkHR2U5hY%2FNYkvjIINkLyD9qUSDexJ68%2BnajsVo5IXnMugbYFwQ12Gh7OwX8Ud9qhgfhTpVqy1bddNTRkYr%2BMHBsEmx6YP0RSCeXrLfWVZ8AOu8ediJRMEfMQIrjirSlOgNswvzExCGB0qc7O5E%2B3myhJ6DcT85laxBPDBra8AeOFvOUigFqEAhdD1o0NK%2BYah99EQPqYbBQ4NeummhCHcde4wpDVNYnoY9oRTEHV50SIWjS2tnZ3pickRQzlxPIQQB8pvsvhiKnBseniTATzkVAZ08qlH1tqlVnCGiT7dOkQsF1PEW1SEjbIcmT%2BoTL3lBSOTTgT2POXrMeSESCz4u9xCv9dm%2Fqyk2yTkWO2ne8KuSXgn8sWaHguHcMnQNFMTCW%2BYWFHIg6ikNAZeRIiYbjNEB22r6%2Fk2BWzqeHZyJZop8ED06DO3SV6t3YNHorFqE%2FTJydX0d77oJg2rJaSweQVM8u6bdwAHuAqsAcnAMy2G%2FVHEEBjdm5q5j9ZQTmBAtu1vmqjAlA6ak1YovaPbuUdZVlYjjLEo5xeYitnX1xrLmlB1WtFKXWgZwjGhl3ZdJ8fMpGTnPx8NwGELvPK6PAvvGeNvEJkErw88s9DCDDCv4Ma%2BBjqkAXZEurt4xdhC8%2B9haNBp2t5N6QNhrlfvMKRJluP36exA8uFaYvdEVKGlnOCA7C3T5QvVsxVEtYv5Pp4G7KJtdg6XBMJDu2K7zY5CqOuFIrl74M9Bc1Ag4o6gW0UoiJD0tapw3J5nbco5NwVCe4bO6K6LtNL2NG83WG84KdtNRm6pBu9GM4uQ5IAgk9Y972M3r9Il4WMQPLwg%2BPbaEcWgKTjv9dmb&X-Amz-Signature=90ebf3e19bf1c54d4f72cb99d2e41e1f9f97e9fa17a17215f2e774b7c6d13924&X-Amz-SignedHeaders=host&x-id=GetObject)

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
