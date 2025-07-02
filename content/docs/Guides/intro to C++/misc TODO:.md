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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEPLT2J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl8840%2BJClbY8deWqyza7T%2BQIWACxSunScL3r0U1A2UAiEAwwJolJyYKQiR%2Fh%2BVH0khM01%2BZ2k0U2p7Q5o%2FkCJAJKYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzjZxXZ96SAE4KvpircA83UOeKbo7P9s9eKmURXaDUy8jVahNcwMRP82cfAX0T%2FDvnc1EMHNu18oZm7VCsHNfzbywiCC69NqobHjk%2FV6sSmtqJTd0E5edsjP41wpIaGRkba%2BuOBF5QCQk%2FBU3brzDarHVS7kOFqOt7Tgjhl3GTuxr%2F66E0%2BuhuixplqECZIHJh46jGmY%2BDSmBgsF2IFNsEuIzFxZL8HW5LQ6v6busGIJnzxPs7Bnhv9GSZ3WMu9e2BY1IH4heoITJADdBy%2BZjde%2Bg%2F17spuuBZXP8tdzWIh5LhAVFVk1ozvIoXx7JW3RS%2BMywrVD4ElGSwNiIcem9Cg1CQTU5%2BMGUmFmqslkvbbiunlDs7%2BGMr%2BZm3oMhhwCoKx7zZs0nPwx7osGQWSQ3qtQdX4O74JfAl%2FwXBAmLMdI7dPCBVU3%2FQ5tD4mrwlrTt0l1iWv7t8uJ4eQVPkmtqbxxmlBnU5Zz2H%2FRiZvXQHWAJNJZCMkNcwqj3Psf1NnEnTvDghXsByQRPua2JB4wSpk08xqNZVd3KsaBySk05rXNflc4A91pNXTBBpZ5c%2B8ddOqfprZ3VEUTWFS40dAf5%2F8GuYa90NgHNyfTuq0c9CoSEQqSWUEE9LPNSnZhOX%2FpKSAj7eTSZ6B2JZFMNXplcMGOqUBeBtMzl2g7EekxWftjW9NHCdvxusKgaPQTxzxIF07IdhHNoVuaXfR3DKv1TkTpZrKCZN59OhUxISLwGDMon%2BQH6bmo0dO6xYZfjF84vXkYPlRUhSMPFzy8Eu%2FmcrtreSyG16wVKoT9LNxEkBLSDp28jqUaqrGE7SavGxFiwCeXfmJxyMBkzYxtzyVYp9cj%2FAgRLl4PkgiGvD9TELoSz4aIgPVP4zT&X-Amz-Signature=6ebee507029e13c9e8a3c9a0acbd056e491ea71a9ef85b8a289bee333309744c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEPLT2J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl8840%2BJClbY8deWqyza7T%2BQIWACxSunScL3r0U1A2UAiEAwwJolJyYKQiR%2Fh%2BVH0khM01%2BZ2k0U2p7Q5o%2FkCJAJKYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzjZxXZ96SAE4KvpircA83UOeKbo7P9s9eKmURXaDUy8jVahNcwMRP82cfAX0T%2FDvnc1EMHNu18oZm7VCsHNfzbywiCC69NqobHjk%2FV6sSmtqJTd0E5edsjP41wpIaGRkba%2BuOBF5QCQk%2FBU3brzDarHVS7kOFqOt7Tgjhl3GTuxr%2F66E0%2BuhuixplqECZIHJh46jGmY%2BDSmBgsF2IFNsEuIzFxZL8HW5LQ6v6busGIJnzxPs7Bnhv9GSZ3WMu9e2BY1IH4heoITJADdBy%2BZjde%2Bg%2F17spuuBZXP8tdzWIh5LhAVFVk1ozvIoXx7JW3RS%2BMywrVD4ElGSwNiIcem9Cg1CQTU5%2BMGUmFmqslkvbbiunlDs7%2BGMr%2BZm3oMhhwCoKx7zZs0nPwx7osGQWSQ3qtQdX4O74JfAl%2FwXBAmLMdI7dPCBVU3%2FQ5tD4mrwlrTt0l1iWv7t8uJ4eQVPkmtqbxxmlBnU5Zz2H%2FRiZvXQHWAJNJZCMkNcwqj3Psf1NnEnTvDghXsByQRPua2JB4wSpk08xqNZVd3KsaBySk05rXNflc4A91pNXTBBpZ5c%2B8ddOqfprZ3VEUTWFS40dAf5%2F8GuYa90NgHNyfTuq0c9CoSEQqSWUEE9LPNSnZhOX%2FpKSAj7eTSZ6B2JZFMNXplcMGOqUBeBtMzl2g7EekxWftjW9NHCdvxusKgaPQTxzxIF07IdhHNoVuaXfR3DKv1TkTpZrKCZN59OhUxISLwGDMon%2BQH6bmo0dO6xYZfjF84vXkYPlRUhSMPFzy8Eu%2FmcrtreSyG16wVKoT9LNxEkBLSDp28jqUaqrGE7SavGxFiwCeXfmJxyMBkzYxtzyVYp9cj%2FAgRLl4PkgiGvD9TELoSz4aIgPVP4zT&X-Amz-Signature=854063612a24cabcfebd6dbd3d92298b3987a76ea444129dd0f87edd2f221042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
