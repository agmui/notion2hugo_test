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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6O7XW6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDjeKIXiFht%2FQEKQYeVO04ayG%2BGxoTFH38aZAsJ9rjssAiBLhekSWUTzzGzXZcm%2BdZnpdPmdMn326j4%2FDNv2nA4ahSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaiggWZG7sfgJuJZSKtwDb4u00OmCORzCm1Z2X%2F%2FQYblmU5hLNrAzG1is5tDzgzXk7QUERGcFPsTfgYicADtb3%2FEnYFt1kABXEHan6bMeSb%2F1qXnd46SpvKXzwnMk%2FJ%2B18LVNZPDDEzCN7sm%2FkjtTtot9WUg5mfLBw96%2Fyt4twoG%2ByGjz25KdheWRhOB8%2B8VmAtzNj6r3vhwopZV4%2BBpO9ife3ODkVjKoTKNj0mwFfUTVa5RAYOFDqPdLfVnyuHxN8IpnVHTHrlxK0ny%2FtzrLCqH0llT%2Bw5URKz9sP9fZv%2BTNtwNYtPq36DbtPWekol9metcVfCAgNp8voJyWkfIkAMHHLRU5iOL8Fk%2Feg9AysWxxF2nNSI1Z18SmPXdbJPjtq901rS15XyJcrmloO6FmSyN1PH%2BGgzriC3W5HuEuGbI9APYqickfIpEl2u8wVCdBuuGKqtQ6XA8l0vJDswVyPyjmle0IjCZihw3pEtO1mX0pHCLF0s4JFJHnsFSU827hrmr8jwFvI2lyfIdLjJdv1If5MJ%2FDQmgBcEO4m6m0B2vCOpTwEVrwq%2BOxYtGJDO4GTr%2BKoUI805pMFNJsWbenGvVTfAoa7EnxgwiuqC%2BdoieBQtJgP9Mc3uEuj9zfOFnN9NsdEJCg7xFQmKIw%2Fu62wQY6pgEbggGnBPAupZSOxvuhzozjNGxW%2B%2BT0k0qqYiwvwnS%2BcgSzlLP1QASrnBgL61OP0fMQ6bFm%2BeH06rEkDKjx2GG36R6ZL4fiK9YeMlDq2KSHO6uWZXnF6Ij0jhgcmATdlbWDfW6%2B9MOZ1x9qBH5qZAfNqgSjctRZyyTnr5%2B67XRSXNgs6L8SvmBFn2nSTbEPK%2F1TFq3UbTmuFC9J0%2FjMSl5xz5eaC7go&X-Amz-Signature=3e9b811de4f88330e39f378df3363a1ff1768474014b19222a44a689da7cee7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6O7XW6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDjeKIXiFht%2FQEKQYeVO04ayG%2BGxoTFH38aZAsJ9rjssAiBLhekSWUTzzGzXZcm%2BdZnpdPmdMn326j4%2FDNv2nA4ahSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaiggWZG7sfgJuJZSKtwDb4u00OmCORzCm1Z2X%2F%2FQYblmU5hLNrAzG1is5tDzgzXk7QUERGcFPsTfgYicADtb3%2FEnYFt1kABXEHan6bMeSb%2F1qXnd46SpvKXzwnMk%2FJ%2B18LVNZPDDEzCN7sm%2FkjtTtot9WUg5mfLBw96%2Fyt4twoG%2ByGjz25KdheWRhOB8%2B8VmAtzNj6r3vhwopZV4%2BBpO9ife3ODkVjKoTKNj0mwFfUTVa5RAYOFDqPdLfVnyuHxN8IpnVHTHrlxK0ny%2FtzrLCqH0llT%2Bw5URKz9sP9fZv%2BTNtwNYtPq36DbtPWekol9metcVfCAgNp8voJyWkfIkAMHHLRU5iOL8Fk%2Feg9AysWxxF2nNSI1Z18SmPXdbJPjtq901rS15XyJcrmloO6FmSyN1PH%2BGgzriC3W5HuEuGbI9APYqickfIpEl2u8wVCdBuuGKqtQ6XA8l0vJDswVyPyjmle0IjCZihw3pEtO1mX0pHCLF0s4JFJHnsFSU827hrmr8jwFvI2lyfIdLjJdv1If5MJ%2FDQmgBcEO4m6m0B2vCOpTwEVrwq%2BOxYtGJDO4GTr%2BKoUI805pMFNJsWbenGvVTfAoa7EnxgwiuqC%2BdoieBQtJgP9Mc3uEuj9zfOFnN9NsdEJCg7xFQmKIw%2Fu62wQY6pgEbggGnBPAupZSOxvuhzozjNGxW%2B%2BT0k0qqYiwvwnS%2BcgSzlLP1QASrnBgL61OP0fMQ6bFm%2BeH06rEkDKjx2GG36R6ZL4fiK9YeMlDq2KSHO6uWZXnF6Ij0jhgcmATdlbWDfW6%2B9MOZ1x9qBH5qZAfNqgSjctRZyyTnr5%2B67XRSXNgs6L8SvmBFn2nSTbEPK%2F1TFq3UbTmuFC9J0%2FjMSl5xz5eaC7go&X-Amz-Signature=3bc8b98fc377c0c36d993511d11dd56fc13f62234515c7ed899248219b39ff67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
