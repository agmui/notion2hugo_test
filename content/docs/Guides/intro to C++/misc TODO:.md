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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNV4ELI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDgiCWRI271X1pEEgrYIgA6fPnN2ByEUAFhBEn77S3cDgIgK%2FKfoaQh8iTeCSCvYZ8%2FLv8RyKQ6faeogjxb6flzYOgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCTB1vpRgZv3VjeOtCrcA0Aiy8zS%2F1EVLe50jcUlXu%2BArBMFB9jqOrVR9%2F%2F5i%2BiCBp8BDbAHqGzV0gORZu41cOOsac6TGxYQy5Oo%2FIJahM1oneMvk6PF9HdOvVApzuhzO7kDiGZTiVeAS2kIl1fIp%2BwvXF7abcvJbeRZXVAwavX9i5hHMjkBW9on0SCbXvM70ret7e3abUcnB4SGaXP3uUCohgTsbE0laNoVB3PL1QoQSyYLQ%2FVKPEgS3rP12kUjfdqw4jDGQTeaZRZ0J00pPmU3xC9pA%2BTodBVCdWxrLOWmEidbi0b%2BmvH20D%2FgoU1uNEWn6cZbbMplzGGxr7ruin1UfEFkDBNqI5Jo2vdwPbeXOyHSH3Fs11CkuvYhtAMPMJlp6Cte2EkEm8aDJKJeLFpfLyjRWoyOlCTunJcbxhOlwCTTwW%2BpIFs8KCb3Tfo22GbV994UHiC%2BN8%2FrKOpDDTM4h1FscY4RpsOGTgToqhwDDNNi7Xr8AkIU%2B5jwUZQOGN01mbj7kE%2F0cngAOJk%2B38coajB3Nt6rgJJdi23cOVn%2F%2FvK9JKS7zO3MjI4lJ%2BnouFt%2BFPgUEEGKMauPZZn32d66x7FK76zVsatC2ctCNZKWEKOFOoKbvTSKcpepE9OHumWyulY2MfLO1DGsMKyIysQGOqUB%2BgFzcGPpfJBbF8zzkwknnTDJM5FRRQ3hhKjht15PmqI83jmgYZbUmoHCxfRJm9S%2FP7kBPBrYz4J8ipE9X%2BevcwIuukRQVPZqwQBBS2L5RDw%2BdDB%2Fh%2BFjYmwseJMC9mFaz1dWj5KZRzHG2UDA9GLpYsYZElzyLkSTAHufrq4yXBg%2BF2zWvPXcY7D%2BK3Ta%2B%2B9PAxegFf7yvxlAEbkBoXn%2FbVn7HCjM&X-Amz-Signature=22f763de2cb332f71077a096463334313332c8511dd6c8dee18f0cbc028804d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNV4ELI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDgiCWRI271X1pEEgrYIgA6fPnN2ByEUAFhBEn77S3cDgIgK%2FKfoaQh8iTeCSCvYZ8%2FLv8RyKQ6faeogjxb6flzYOgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCTB1vpRgZv3VjeOtCrcA0Aiy8zS%2F1EVLe50jcUlXu%2BArBMFB9jqOrVR9%2F%2F5i%2BiCBp8BDbAHqGzV0gORZu41cOOsac6TGxYQy5Oo%2FIJahM1oneMvk6PF9HdOvVApzuhzO7kDiGZTiVeAS2kIl1fIp%2BwvXF7abcvJbeRZXVAwavX9i5hHMjkBW9on0SCbXvM70ret7e3abUcnB4SGaXP3uUCohgTsbE0laNoVB3PL1QoQSyYLQ%2FVKPEgS3rP12kUjfdqw4jDGQTeaZRZ0J00pPmU3xC9pA%2BTodBVCdWxrLOWmEidbi0b%2BmvH20D%2FgoU1uNEWn6cZbbMplzGGxr7ruin1UfEFkDBNqI5Jo2vdwPbeXOyHSH3Fs11CkuvYhtAMPMJlp6Cte2EkEm8aDJKJeLFpfLyjRWoyOlCTunJcbxhOlwCTTwW%2BpIFs8KCb3Tfo22GbV994UHiC%2BN8%2FrKOpDDTM4h1FscY4RpsOGTgToqhwDDNNi7Xr8AkIU%2B5jwUZQOGN01mbj7kE%2F0cngAOJk%2B38coajB3Nt6rgJJdi23cOVn%2F%2FvK9JKS7zO3MjI4lJ%2BnouFt%2BFPgUEEGKMauPZZn32d66x7FK76zVsatC2ctCNZKWEKOFOoKbvTSKcpepE9OHumWyulY2MfLO1DGsMKyIysQGOqUB%2BgFzcGPpfJBbF8zzkwknnTDJM5FRRQ3hhKjht15PmqI83jmgYZbUmoHCxfRJm9S%2FP7kBPBrYz4J8ipE9X%2BevcwIuukRQVPZqwQBBS2L5RDw%2BdDB%2Fh%2BFjYmwseJMC9mFaz1dWj5KZRzHG2UDA9GLpYsYZElzyLkSTAHufrq4yXBg%2BF2zWvPXcY7D%2BK3Ta%2B%2B9PAxegFf7yvxlAEbkBoXn%2FbVn7HCjM&X-Amz-Signature=fa6f5738fec34af42de98fc418617805703f8334ad929d665f2c7356268229dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
