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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MS7KX6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIANPIEjxmzzgRS8vdR6Pj19gZqpgFZIGL9Jlz2MTpDqHAiAoAPTA69W5YodnCMyWwWN9CAagIxE5TNHHusEqXpOTMyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBuI7OTuIKLMMMN7yKtwDAULvBV61YzoB9kBjNYIcGg1%2BtNkVIRHSfB%2B8D1Vkh4nOpE29HmqZb8b4dEfZ2gWjK8%2FZh6en7QSnXgLEhJcSv5IgRf7Qbd46Cxasv45BypTPBEpBQJOjpUWt9mhcNUPnlWjwxqTyIC9ouEq55lqDiN4NVxNbqt8ERZ1WlUnoTUEIYVHBv0jPDg00D93F0zecdk7wJHeokU284Q33VPH46R0a5KvJypfD6momqoAIz28yoaU0Evo2jGzcSvGaQTF2JkfHPpED6DErXTCdrbgBykgSjaH%2BH8TxP2otp3RvRVRFW1IJ0cDT1FF77T8lHavJq1vUC4CHo9j1EwppyevkZZtgB55M6SYaIXVRAEATPXhOa04NPArK6x2rAh%2BZ2Xrh5TPT8Pob7OVAndJM1jJK%2Fi9kzHB0mKccceoH6pPyxVRPgQmL3BUdd2%2FMujjEvJBsN8y0I41K5AS6Y8D4lD7h7VcXJRD8bj355VssGi3FeqHpolMx0N77%2FV0yvy4N3wCNFtkSLfaq97j%2BGYVts12rHF6DVEYoYkAL7jkzOCs0bxZf3iwKBAGyhr2Bx9rhpdSsmy5J3dsmaYNBBp6e%2FJFJnWCiEjNmx%2F83YqhRvZZXjZKHFUSnRTnAngMM634wmdOOwAY6pgGJ3UDPotqhBvvQGTUk6QWlGiSCw5emcwhqd6Puw9OW%2F7XYrs1tW3gipz302egAZRVJ16mEVfm%2FgcSLZv1TFFoxbfeg7qfhq2SUfjgF%2FZ06l9W0aFA%2FqQ87%2FEebqy1qXBjvy38Ur%2FZVSJROXfM0ylzUTjRcOZQ1rg2ENquw13treJqsXXqSgvdufxvSZUS9ByWRBXkp0rCUMMFo9glqpyspOq5HZCxH&X-Amz-Signature=d7c408dee039da9986d6b631a92b3c1afe3833332f6523fbfef09d8c565a0b33&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MS7KX6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIANPIEjxmzzgRS8vdR6Pj19gZqpgFZIGL9Jlz2MTpDqHAiAoAPTA69W5YodnCMyWwWN9CAagIxE5TNHHusEqXpOTMyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBuI7OTuIKLMMMN7yKtwDAULvBV61YzoB9kBjNYIcGg1%2BtNkVIRHSfB%2B8D1Vkh4nOpE29HmqZb8b4dEfZ2gWjK8%2FZh6en7QSnXgLEhJcSv5IgRf7Qbd46Cxasv45BypTPBEpBQJOjpUWt9mhcNUPnlWjwxqTyIC9ouEq55lqDiN4NVxNbqt8ERZ1WlUnoTUEIYVHBv0jPDg00D93F0zecdk7wJHeokU284Q33VPH46R0a5KvJypfD6momqoAIz28yoaU0Evo2jGzcSvGaQTF2JkfHPpED6DErXTCdrbgBykgSjaH%2BH8TxP2otp3RvRVRFW1IJ0cDT1FF77T8lHavJq1vUC4CHo9j1EwppyevkZZtgB55M6SYaIXVRAEATPXhOa04NPArK6x2rAh%2BZ2Xrh5TPT8Pob7OVAndJM1jJK%2Fi9kzHB0mKccceoH6pPyxVRPgQmL3BUdd2%2FMujjEvJBsN8y0I41K5AS6Y8D4lD7h7VcXJRD8bj355VssGi3FeqHpolMx0N77%2FV0yvy4N3wCNFtkSLfaq97j%2BGYVts12rHF6DVEYoYkAL7jkzOCs0bxZf3iwKBAGyhr2Bx9rhpdSsmy5J3dsmaYNBBp6e%2FJFJnWCiEjNmx%2F83YqhRvZZXjZKHFUSnRTnAngMM634wmdOOwAY6pgGJ3UDPotqhBvvQGTUk6QWlGiSCw5emcwhqd6Puw9OW%2F7XYrs1tW3gipz302egAZRVJ16mEVfm%2FgcSLZv1TFFoxbfeg7qfhq2SUfjgF%2FZ06l9W0aFA%2FqQ87%2FEebqy1qXBjvy38Ur%2FZVSJROXfM0ylzUTjRcOZQ1rg2ENquw13treJqsXXqSgvdufxvSZUS9ByWRBXkp0rCUMMFo9glqpyspOq5HZCxH&X-Amz-Signature=b2568ebb37d13f64499146cb78e6210b0b24f9a096e064608e5fe00befdb73fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
