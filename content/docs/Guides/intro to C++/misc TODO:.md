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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2DIJ6K%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBGUE33DwxDNSEPlKBUFTBMh3JNvuRPVj3CSD8%2BGNSguAiEAljtiN19eMzApMM52hOzUMzPhTHDo8s3UfMY7CKYkxMkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJTzh0OG2TeImslYpyrcAxDN7HLuregfwEqWZb1gnej6xdjbZ%2FJIr33KVfoot33uuP2K8mBknu26j7Cis3ChW7DWpQru7eIvNRLcspKiYIfAaCF8UnO8%2Fd2MFJiZtSo%2FaBZRqiht%2BkjT6%2FwNJoMAeotTPSJaZf7OP40RO%2Buj40ukuHYpyCEz1SHNbJaW%2BdDsSVfwYdqLnUYwLnr1A9UNe7opOhK4HKiN9ZCc1MsI7PE0gYy9bzpjjmAF15y2N8ozFwTUuO3IeswVfgBbpVjTXEvC7QVNrxQyP0Qq72eFLheYSKXJjt4rBpuTnvLGSOujdMdr09YXPbr4C4EkqpZkezybKxmlEstr9BrELQ96xdjMOkofghUCBv6OiKIkMU0I3T6tj7c73jk91RdNQNiU7OlqvA3hVJ%2BiQMGuREzI1gzeJNtWTueUR3oInaP6YNZtyd%2B0wD8hJ4w6wPUQfKqIUsJucYk5%2BFZSa%2FqMFZLaHPaUAsm4%2FiSgIQAH4ja0vC90g5mucOKtztQ1wjmXjCoeCYtCQ1UubKXPAoKPz2ObqYAoYnP2EBL%2F73ZkqJcFytXmLo9juQ9zYL5%2FPE07xe9SxvKt%2FRXTuqFVSXkeqW84ovygLzjPPd%2BzMMXe4UXwdiQBNGvO4o5j1mqRW9hvMJT5mMQGOqUBxux5mpTwnlA3r84AbV0neve%2B9qX6yFDDprPEpyiTNKZDLuR6fx6BiHulo1WDbY21JoTe9%2Byqw2kL68sJrnPc45ZscejcXBzZHG9Ko4HytPtR6e2gXYfoc7RlByunOM0ofbxpwD2rFeofq5Q9cKOEOB76tbFt%2B7%2Fs6UZNkp8shJJGyB9u6f46S045msy9XDvbTpVMXP6RgtPhJwKnEkhy7b2KDFQW&X-Amz-Signature=e5277b2436c6e3fb57d5733d0a2e1b5ee724f08fd10b674da36e718440eb7efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2DIJ6K%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBGUE33DwxDNSEPlKBUFTBMh3JNvuRPVj3CSD8%2BGNSguAiEAljtiN19eMzApMM52hOzUMzPhTHDo8s3UfMY7CKYkxMkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJTzh0OG2TeImslYpyrcAxDN7HLuregfwEqWZb1gnej6xdjbZ%2FJIr33KVfoot33uuP2K8mBknu26j7Cis3ChW7DWpQru7eIvNRLcspKiYIfAaCF8UnO8%2Fd2MFJiZtSo%2FaBZRqiht%2BkjT6%2FwNJoMAeotTPSJaZf7OP40RO%2Buj40ukuHYpyCEz1SHNbJaW%2BdDsSVfwYdqLnUYwLnr1A9UNe7opOhK4HKiN9ZCc1MsI7PE0gYy9bzpjjmAF15y2N8ozFwTUuO3IeswVfgBbpVjTXEvC7QVNrxQyP0Qq72eFLheYSKXJjt4rBpuTnvLGSOujdMdr09YXPbr4C4EkqpZkezybKxmlEstr9BrELQ96xdjMOkofghUCBv6OiKIkMU0I3T6tj7c73jk91RdNQNiU7OlqvA3hVJ%2BiQMGuREzI1gzeJNtWTueUR3oInaP6YNZtyd%2B0wD8hJ4w6wPUQfKqIUsJucYk5%2BFZSa%2FqMFZLaHPaUAsm4%2FiSgIQAH4ja0vC90g5mucOKtztQ1wjmXjCoeCYtCQ1UubKXPAoKPz2ObqYAoYnP2EBL%2F73ZkqJcFytXmLo9juQ9zYL5%2FPE07xe9SxvKt%2FRXTuqFVSXkeqW84ovygLzjPPd%2BzMMXe4UXwdiQBNGvO4o5j1mqRW9hvMJT5mMQGOqUBxux5mpTwnlA3r84AbV0neve%2B9qX6yFDDprPEpyiTNKZDLuR6fx6BiHulo1WDbY21JoTe9%2Byqw2kL68sJrnPc45ZscejcXBzZHG9Ko4HytPtR6e2gXYfoc7RlByunOM0ofbxpwD2rFeofq5Q9cKOEOB76tbFt%2B7%2Fs6UZNkp8shJJGyB9u6f46S045msy9XDvbTpVMXP6RgtPhJwKnEkhy7b2KDFQW&X-Amz-Signature=0325fd70d3c0dd553b32e5cc3e3ef58c73d7861dc736211b35c12807f876be94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
