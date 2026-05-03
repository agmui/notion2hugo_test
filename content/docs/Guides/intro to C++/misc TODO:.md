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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5YH7J5%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ92aHeyE5WT21%2FhF2xBxYCfQO0llrsNqvqYhJLLY%2FDAiEA0dgRj%2Fo22VpXGVRtLGtGEfKx3hawRrhnyrm2U7J%2F6Ooq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPVrktjH5Q%2FYF0eeLyrcA4Qr%2Fugw5dngkGkVLRp3XImRPMSt%2BHUnC%2FfJgfCRdXzQPgQyMJydpbv%2FqNrp1teWZ42i%2BiNBbWJo2YEBx3x3QoYFkhcpjy%2Bg198s87%2Bdvd%2BmWzxq%2B9v1AL0P9IidZSmwgMJkxqcGRkwQequ4l14CjBuibB9i%2B2CSzAibGIfuWoIbwbdOc3axlDqhR27P8BwSKtoyiPviUrk%2FGFNHWSk0T%2FTfS5qfZC6UGrQ5bE0XGSWfWBhD8evbpvDtm931D0q%2BPcdtMPNn1oXEe46ZWSJjUiyXR%2BrEsp5COGWQ3OCqwYAzAOretUH7IBnUfharb39GELEbmUkgvm%2FAkCnhryUvdP5smZFhZQVBFDepo9omICh3iIWxTv2mO%2Fknuj5Ndrgave6x5ERLqcmXUTx%2BkGuxqxjKg1hjCpyjIPxFZm%2BL6bIrCwtYv5DFLQcncoSEy7vW1cILITrRaUalXiZIW5ZKOgf2uS8prV1%2F5zhOIvizWvbvsNdQO%2FL9mYQda72Lglo0y6QmzULyb7kMd1ZA77HgcXMTQlCy5O1WhF9QNeyhVxhh%2BpC8lqJm61RgRySBS96QZVfdTd6aETyyy9%2FK9ojK0H6iD3tKOV2h7XZPd0s30fkjmGqG6Oia9wWzSEjOMO3W2s8GOqUBibjX%2BCQY5diXlG%2Fm1%2FPWfWfBwpiRilQOE3Io051Mnzw6os9TFad%2BH%2BGUiTqu7DHz081W6eRP3RsMsuCZx7I7eLN1jxzJ%2FzpUU7qe1%2F0Er4DVcz7fCVHTY3%2Fbm3Qp61UH26TR7vN1MNV2flc0bfWp7MnjKAmx2ObAto5L4NIpzoBV%2FOqsjJecql3s%2BoWXaKPsqw8P7qZDpq85cteJYH9aW8uCvdMI&X-Amz-Signature=61af344f4370175ae2fd1e127a0b68b891f952a9d02c95a9113d7cd7a757ab8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5YH7J5%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ92aHeyE5WT21%2FhF2xBxYCfQO0llrsNqvqYhJLLY%2FDAiEA0dgRj%2Fo22VpXGVRtLGtGEfKx3hawRrhnyrm2U7J%2F6Ooq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPVrktjH5Q%2FYF0eeLyrcA4Qr%2Fugw5dngkGkVLRp3XImRPMSt%2BHUnC%2FfJgfCRdXzQPgQyMJydpbv%2FqNrp1teWZ42i%2BiNBbWJo2YEBx3x3QoYFkhcpjy%2Bg198s87%2Bdvd%2BmWzxq%2B9v1AL0P9IidZSmwgMJkxqcGRkwQequ4l14CjBuibB9i%2B2CSzAibGIfuWoIbwbdOc3axlDqhR27P8BwSKtoyiPviUrk%2FGFNHWSk0T%2FTfS5qfZC6UGrQ5bE0XGSWfWBhD8evbpvDtm931D0q%2BPcdtMPNn1oXEe46ZWSJjUiyXR%2BrEsp5COGWQ3OCqwYAzAOretUH7IBnUfharb39GELEbmUkgvm%2FAkCnhryUvdP5smZFhZQVBFDepo9omICh3iIWxTv2mO%2Fknuj5Ndrgave6x5ERLqcmXUTx%2BkGuxqxjKg1hjCpyjIPxFZm%2BL6bIrCwtYv5DFLQcncoSEy7vW1cILITrRaUalXiZIW5ZKOgf2uS8prV1%2F5zhOIvizWvbvsNdQO%2FL9mYQda72Lglo0y6QmzULyb7kMd1ZA77HgcXMTQlCy5O1WhF9QNeyhVxhh%2BpC8lqJm61RgRySBS96QZVfdTd6aETyyy9%2FK9ojK0H6iD3tKOV2h7XZPd0s30fkjmGqG6Oia9wWzSEjOMO3W2s8GOqUBibjX%2BCQY5diXlG%2Fm1%2FPWfWfBwpiRilQOE3Io051Mnzw6os9TFad%2BH%2BGUiTqu7DHz081W6eRP3RsMsuCZx7I7eLN1jxzJ%2FzpUU7qe1%2F0Er4DVcz7fCVHTY3%2Fbm3Qp61UH26TR7vN1MNV2flc0bfWp7MnjKAmx2ObAto5L4NIpzoBV%2FOqsjJecql3s%2BoWXaKPsqw8P7qZDpq85cteJYH9aW8uCvdMI&X-Amz-Signature=653d5da2245bed6b346f5eae84fa320ea173112d1e52280d6a168278248a1fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
