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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQHBNOS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDkaZTFfo5zpR5AqL%2F1O3KK0rfnPqmcsW9X1ddsfjFFOAIgU4ITBhoyngIJ1ef9EM6eMdK0cEHofVJZ6Botbb5Cppgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP2cKKofO6H9%2F833oyrcAzqZucB0yujaeivkwDXn2xXvwWQDweRDhI7x%2F3qLw4GFscZw8PXnQMy%2FbmQwezkDbBRB5LB4ZfJH%2FwreU6TUG4TiV%2BO8EVW%2Bwho%2B6q674%2BdoDBElWKUcDgRF%2B40aq74d%2FOwMIDEOsxGpCaryVPTNlSC6Iy7HQ4rhLV73hUts3nhLF2e%2Fv37txSimzH8Y4o6kU8fpgP3qf7vFGBwHbSEg5Dsk1RLJ22yjgbgLRkNbdhrDeFG3%2BXxnHfYEdOv%2B0yMjhiMHqzHKQEweGknGzE5O6lXckY0isuor6ng2kRRdJq%2FnF8BAUyO555ifUYn348Mhr9NdekssKP0vNSFrk5yL6b6Hjw0TamQI0O2433EuI5d31s9cIfDcUDW5yvll1e6Kp6Bu7UJvWrqTGI9PQoLCTOpUB%2Bw%2FXoui6S4q63AM8vXouCL%2B%2Fhs5B7gK1C33NFIJ4OFq9tcQv6jQZtay1qFJ%2FqatSq9NsuMt%2FrbVUltDnAiV4L73CTBOOwkPxX1rFmgQrgeTsMi0aZvxvMr4BD%2BKITv7gKAmuNQgph9HbCMmp2jIw%2BYCChr29s%2Fts%2F3zWQWWZV%2F2cy%2BTtsX7HNO15jWLi0C3S2U5NwULDwn15D980J%2BnR8MVKmlx%2B9ce%2FEwdMJaXsMMGOqUB%2F%2FxmFiI89MrlEe84SzlNpO4KgzSut4tpwznrGBv6325c41JrQYJ8H6p1LnhM7iPuR%2FcYTNR7LrnlUBeJOGANYtTKsI5XD8oi1MTe13TFm4SMkdGO6PZ1rmggW%2Bls1GqZNwkgICJLcTKPUrLLQ8MpIANfUQI%2BDfVHvFzl4hGSvtFfF%2Fh%2BeTDLjCrVBlPpV5Uiu7Ao092X0MfAYWJFqRCrHs%2FlebBT&X-Amz-Signature=5756ec2f1433b0a4980a7e7ee842e7c09b10faf7e402e6098723eee9d1ab87d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQHBNOS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDkaZTFfo5zpR5AqL%2F1O3KK0rfnPqmcsW9X1ddsfjFFOAIgU4ITBhoyngIJ1ef9EM6eMdK0cEHofVJZ6Botbb5Cppgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP2cKKofO6H9%2F833oyrcAzqZucB0yujaeivkwDXn2xXvwWQDweRDhI7x%2F3qLw4GFscZw8PXnQMy%2FbmQwezkDbBRB5LB4ZfJH%2FwreU6TUG4TiV%2BO8EVW%2Bwho%2B6q674%2BdoDBElWKUcDgRF%2B40aq74d%2FOwMIDEOsxGpCaryVPTNlSC6Iy7HQ4rhLV73hUts3nhLF2e%2Fv37txSimzH8Y4o6kU8fpgP3qf7vFGBwHbSEg5Dsk1RLJ22yjgbgLRkNbdhrDeFG3%2BXxnHfYEdOv%2B0yMjhiMHqzHKQEweGknGzE5O6lXckY0isuor6ng2kRRdJq%2FnF8BAUyO555ifUYn348Mhr9NdekssKP0vNSFrk5yL6b6Hjw0TamQI0O2433EuI5d31s9cIfDcUDW5yvll1e6Kp6Bu7UJvWrqTGI9PQoLCTOpUB%2Bw%2FXoui6S4q63AM8vXouCL%2B%2Fhs5B7gK1C33NFIJ4OFq9tcQv6jQZtay1qFJ%2FqatSq9NsuMt%2FrbVUltDnAiV4L73CTBOOwkPxX1rFmgQrgeTsMi0aZvxvMr4BD%2BKITv7gKAmuNQgph9HbCMmp2jIw%2BYCChr29s%2Fts%2F3zWQWWZV%2F2cy%2BTtsX7HNO15jWLi0C3S2U5NwULDwn15D980J%2BnR8MVKmlx%2B9ce%2FEwdMJaXsMMGOqUB%2F%2FxmFiI89MrlEe84SzlNpO4KgzSut4tpwznrGBv6325c41JrQYJ8H6p1LnhM7iPuR%2FcYTNR7LrnlUBeJOGANYtTKsI5XD8oi1MTe13TFm4SMkdGO6PZ1rmggW%2Bls1GqZNwkgICJLcTKPUrLLQ8MpIANfUQI%2BDfVHvFzl4hGSvtFfF%2Fh%2BeTDLjCrVBlPpV5Uiu7Ao092X0MfAYWJFqRCrHs%2FlebBT&X-Amz-Signature=6e326a4bc275d0e0f292b61d11a38960e2d6450c9c3d5bf55ea397a1afc8223d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
