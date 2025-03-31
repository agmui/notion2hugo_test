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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVLYFAO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC6DzRciQQ6jetWPkFLqnvje8x%2BotaK9u%2BpkHqE3qfwVAiAEzzq97EfReL2T9CJ1VvyHwZQrj51pCMfJPJPugYXNyyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FD8LUM3Z6FEImqEKtwD1KhOwQk1qC2f00YJK2siPg713dqJpxIaKr%2Bq%2F%2Byn8dxgA%2FMmK0Wb3uu10JOTQP%2Ftr7jZyxGiVihKl4pyjTiU8fEiNZ81p3VWSvaCP%2BOTchJbk3fsJOcvsLwfbXhlgJyTKnmakr35iQcOLppp3gmEu%2B%2FoI4M1p4RoDRS6S3EFWvLvs3IycZUz1FRGvOaUEivl0Mwt1CjmAf7kU%2BT9IEILdgzDgdq8kolT8XuPBmRqVTGpe7wxtFlsT1mf208VS19Tj6ySOn3LqdQd0h0DLJUXHXcTxliFqZkPG0zf0nIx2h%2FWMX2VV8mXHITWRVvVBBMlC%2FZz4A5Q7FeDz3bFQzids0ZvOSCBx5m7dSrYpxUwLMnaa%2BIJgyrQABy3bTXCO5qAuQtSVIDXw6B%2Fj9zsDIyfb7nwktK%2B1N6QeGWeoBxnyQ2I5SEiYYt7uTD2r%2BImkMwK6DUXCzOcmiDNHtP8GezibTQa3tniLoDsBQ2B6RusGZygCvhD5GW8y2H26ggA1a28lW0bdqKUtqgwxAtpjKA8Oqk%2FlMb3r3XHiNL9Q%2B86evKMXK30s%2Be7aq4aEb46Op%2Fl98qZFeUZcJjqxQHwvc8TRtTpPdEh3EXfJ8WBOdynyqgfQE0R3iPtPNt%2FPqgwrueqvwY6pgHDg6z2vjDkqyqClqEt4Oj%2BWyjMG3Ivogr%2F9A89Yu6CPLlTdNXoPSTbDlNPPBpkt%2FbDPO8uuL1l6yGSgKd7EdvDCxbB6b6m2OToh7l4WTGzASJzl8f4PiEkC5HMaRWJcKAZFEMv%2F4DqwKVuCumvMKO%2FqlbwR0krZkBYyDZNZFG7IHqIaCZxdqpG2Q79nbqYKmvIpuRcgjyIslQwdk4wffZl%2Bm99HC23&X-Amz-Signature=106cd1e66b36824a483a106e3ff01da65be5a6d79a52ec471e80c813afe00621&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVLYFAO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC6DzRciQQ6jetWPkFLqnvje8x%2BotaK9u%2BpkHqE3qfwVAiAEzzq97EfReL2T9CJ1VvyHwZQrj51pCMfJPJPugYXNyyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FD8LUM3Z6FEImqEKtwD1KhOwQk1qC2f00YJK2siPg713dqJpxIaKr%2Bq%2F%2Byn8dxgA%2FMmK0Wb3uu10JOTQP%2Ftr7jZyxGiVihKl4pyjTiU8fEiNZ81p3VWSvaCP%2BOTchJbk3fsJOcvsLwfbXhlgJyTKnmakr35iQcOLppp3gmEu%2B%2FoI4M1p4RoDRS6S3EFWvLvs3IycZUz1FRGvOaUEivl0Mwt1CjmAf7kU%2BT9IEILdgzDgdq8kolT8XuPBmRqVTGpe7wxtFlsT1mf208VS19Tj6ySOn3LqdQd0h0DLJUXHXcTxliFqZkPG0zf0nIx2h%2FWMX2VV8mXHITWRVvVBBMlC%2FZz4A5Q7FeDz3bFQzids0ZvOSCBx5m7dSrYpxUwLMnaa%2BIJgyrQABy3bTXCO5qAuQtSVIDXw6B%2Fj9zsDIyfb7nwktK%2B1N6QeGWeoBxnyQ2I5SEiYYt7uTD2r%2BImkMwK6DUXCzOcmiDNHtP8GezibTQa3tniLoDsBQ2B6RusGZygCvhD5GW8y2H26ggA1a28lW0bdqKUtqgwxAtpjKA8Oqk%2FlMb3r3XHiNL9Q%2B86evKMXK30s%2Be7aq4aEb46Op%2Fl98qZFeUZcJjqxQHwvc8TRtTpPdEh3EXfJ8WBOdynyqgfQE0R3iPtPNt%2FPqgwrueqvwY6pgHDg6z2vjDkqyqClqEt4Oj%2BWyjMG3Ivogr%2F9A89Yu6CPLlTdNXoPSTbDlNPPBpkt%2FbDPO8uuL1l6yGSgKd7EdvDCxbB6b6m2OToh7l4WTGzASJzl8f4PiEkC5HMaRWJcKAZFEMv%2F4DqwKVuCumvMKO%2FqlbwR0krZkBYyDZNZFG7IHqIaCZxdqpG2Q79nbqYKmvIpuRcgjyIslQwdk4wffZl%2Bm99HC23&X-Amz-Signature=6647047ee72ac6f0ae0c7a3adcd39ab5e42e6fa1325880927999cf5d781defdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
