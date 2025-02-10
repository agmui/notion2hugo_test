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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAT2UX5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClo0o89ab24bcMLsehE3FpUFJOOcNsdyqGkegHPFBbxwIgAcJ0ks9tXwJo6Ga4ghsFdbcIByjJw0lZOg1V7UhdozIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIurINcBfXaclgyuUCrcA3D4NiwKeiypjKDu21bCu22Nci8e%2FEEv2%2FW05PxE3rH3B0FFFst4TGbIGOJZHQGYig9v9EQIi9kRxAso673q3znrQx18odh1%2FpmQW%2FiMZ9ZmhHXZlzpWvc5Y6Mx2nkmlVHuS58QDam1hlI18V2CqSD5eidgZC30SEGZ1tlOLmMkKqOIXhA8thSSdFSo4gF8t9pcCJpsCOkLWgiWyNQchSaI9i%2F1Lr6W8Xp1eZkCANcHa%2FEiEZrL1GpsfbBpqtqgYKdoHBpHklhEqoNemEAiSN3UEWMcX27qXWUX7M5VZeauFm5fb2aTkl0dJESmgFE6919mkJAWoTTxHxBxMQjQpzD8DE6BM1Murdpn9rKb1mAvsaSYYyPXDKOu2DIp%2F7gwXtVYi4tV9qPJDINDUPMxnFTlbSt6ulEWFtjC4U1dWNt9GF9aAcBT2UY9P8EtLKcIgG%2FynWQMkMs%2F0h2Ksr8ylTOhY6QlU8%2BqoCQxslCSJYxFBbCqCdJu1UFsbTg3JMZQcnGKiyyoXGbi2bvcZkcMxvTZfSDhcGJLnxvaiXJVRe3Ah5TVOoOZ%2B4M92Af0MYlpU8ixMA%2B2OayHphweihVnWoSGwrXD%2FojAIq6G4qfQbU8YYSWr1Q2j4omIt6dFIMOCtp70GOqUBdBY7OZgjrMGOSqqi2%2BlY%2B6SvZzyFcXrVuC8e%2Fpg8CvQoEoUSRSWY0eft9i0mBQWSzyMHwAHwxg1CrU1sjHdMfuwwIPDzB%2B1zfC7CfxEgEefPYZwIyLfJpjEvR8qY0frvBa8Kkvbe21v3wtPdD4P%2BjkQ%2FeB%2BrYJigJPkjRCPGk%2FqKpnUR7vVYmf4EjVe51rVFGP%2FUF1g59bOmLSdH0ZnMmYBesHmr&X-Amz-Signature=d694367321d15d90f741b61aaf7f7ef1cf2aca09ee4abc9901f6a8ed1fe75847&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAT2UX5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClo0o89ab24bcMLsehE3FpUFJOOcNsdyqGkegHPFBbxwIgAcJ0ks9tXwJo6Ga4ghsFdbcIByjJw0lZOg1V7UhdozIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIurINcBfXaclgyuUCrcA3D4NiwKeiypjKDu21bCu22Nci8e%2FEEv2%2FW05PxE3rH3B0FFFst4TGbIGOJZHQGYig9v9EQIi9kRxAso673q3znrQx18odh1%2FpmQW%2FiMZ9ZmhHXZlzpWvc5Y6Mx2nkmlVHuS58QDam1hlI18V2CqSD5eidgZC30SEGZ1tlOLmMkKqOIXhA8thSSdFSo4gF8t9pcCJpsCOkLWgiWyNQchSaI9i%2F1Lr6W8Xp1eZkCANcHa%2FEiEZrL1GpsfbBpqtqgYKdoHBpHklhEqoNemEAiSN3UEWMcX27qXWUX7M5VZeauFm5fb2aTkl0dJESmgFE6919mkJAWoTTxHxBxMQjQpzD8DE6BM1Murdpn9rKb1mAvsaSYYyPXDKOu2DIp%2F7gwXtVYi4tV9qPJDINDUPMxnFTlbSt6ulEWFtjC4U1dWNt9GF9aAcBT2UY9P8EtLKcIgG%2FynWQMkMs%2F0h2Ksr8ylTOhY6QlU8%2BqoCQxslCSJYxFBbCqCdJu1UFsbTg3JMZQcnGKiyyoXGbi2bvcZkcMxvTZfSDhcGJLnxvaiXJVRe3Ah5TVOoOZ%2B4M92Af0MYlpU8ixMA%2B2OayHphweihVnWoSGwrXD%2FojAIq6G4qfQbU8YYSWr1Q2j4omIt6dFIMOCtp70GOqUBdBY7OZgjrMGOSqqi2%2BlY%2B6SvZzyFcXrVuC8e%2Fpg8CvQoEoUSRSWY0eft9i0mBQWSzyMHwAHwxg1CrU1sjHdMfuwwIPDzB%2B1zfC7CfxEgEefPYZwIyLfJpjEvR8qY0frvBa8Kkvbe21v3wtPdD4P%2BjkQ%2FeB%2BrYJigJPkjRCPGk%2FqKpnUR7vVYmf4EjVe51rVFGP%2FUF1g59bOmLSdH0ZnMmYBesHmr&X-Amz-Signature=c4a210a682f6d106265968f8a849fdf4a56d541927e0d269dfc572d8808ccbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
