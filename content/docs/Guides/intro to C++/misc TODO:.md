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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQPFNQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA5X73f8xf8t202M4VfjrGAJnTK%2FMo2mHA2y%2BFFNUsQuAiEAzPVBAKf%2FPPEkTf4cHyOydUjBwyIAfsqHN5XsjkDZL1cqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa7%2BARXGYKMxd3UIircAyuhCNult9j%2FvdcgBvCogCoTLK2d0ZclcUhstcXtoNmxxMh%2FfdITqerONcb8zxRwfJ3C46opZDiQdQUCnSvRTUdnvIPtTZeobFVmi9yERZyWVoYe5ZeuMKc9uG%2BhV1PzEOa%2FkIYQlrLNiWj2cWfggyR%2B1r4575TqohXP3PtaEgd90lHPIcuiJlxSGxOQxbOZ7hADc7l9Vj9mNs7TMoX98c9NfHi2zWpU8mtFfIyUB%2FcgjFdpx31aWinbvtvAuob7sxPjsu2yrbPaQ96kVMm8%2FNRWaUIs9wlyH5JJlCM9ulgsQTQIoE1ZVynVkEisunakcRSHpRYeSnYuhuo5qzAE%2FWnVGbXFfuHcDbKZz65FRbIqAAfvFXURALxYvMaAL7klH8qZqBpkkYLPyvzW%2BpqEXwlPpUisKMtyvZmwoPQwJvg%2Fcc%2FhcqzmtERvFc28tG8brZCa2118VOLEg6jy3xekBLVvhVK2faHarvOu3u9cxvGyLVI9ejKT2noAr2MXyrbXp5QwG%2FNcQoEL8zYShghFcXpRmLUDB46kpwGOmROMN98MrquAKjtpOYeGszEy7SvNUk%2F5nWEu%2BJ3WlEwMLECAW56Toe1akltWcMIRAksEYYwGKmPIJX%2BP4LwtIERrMI3VrsIGOqUBHr8KyVMTXvEGvJKCLTlEZyczujA4LPEu52qkcRTDpTUxRCyL465wfmr%2BcFpYhPrTz56pt0a%2B1lyuDLqFKWRzPn6EC9MV6VFJoeEOvW37hbXhn%2BAJzE5%2BdHRbiKftxJa%2FFKcW4BF8%2BjgHEwyeyAUuoENytXL%2F044FAE33CAAD4qhyjLUj%2B3WdoBvek29ZG9GL45ft1pfdpVjOaVN%2BrbuIziXzfaRi&X-Amz-Signature=f2ce728d82691ec0395ba3461283bf2ad8c51e0879e65ac9bb99e5ee48437912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQPFNQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA5X73f8xf8t202M4VfjrGAJnTK%2FMo2mHA2y%2BFFNUsQuAiEAzPVBAKf%2FPPEkTf4cHyOydUjBwyIAfsqHN5XsjkDZL1cqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa7%2BARXGYKMxd3UIircAyuhCNult9j%2FvdcgBvCogCoTLK2d0ZclcUhstcXtoNmxxMh%2FfdITqerONcb8zxRwfJ3C46opZDiQdQUCnSvRTUdnvIPtTZeobFVmi9yERZyWVoYe5ZeuMKc9uG%2BhV1PzEOa%2FkIYQlrLNiWj2cWfggyR%2B1r4575TqohXP3PtaEgd90lHPIcuiJlxSGxOQxbOZ7hADc7l9Vj9mNs7TMoX98c9NfHi2zWpU8mtFfIyUB%2FcgjFdpx31aWinbvtvAuob7sxPjsu2yrbPaQ96kVMm8%2FNRWaUIs9wlyH5JJlCM9ulgsQTQIoE1ZVynVkEisunakcRSHpRYeSnYuhuo5qzAE%2FWnVGbXFfuHcDbKZz65FRbIqAAfvFXURALxYvMaAL7klH8qZqBpkkYLPyvzW%2BpqEXwlPpUisKMtyvZmwoPQwJvg%2Fcc%2FhcqzmtERvFc28tG8brZCa2118VOLEg6jy3xekBLVvhVK2faHarvOu3u9cxvGyLVI9ejKT2noAr2MXyrbXp5QwG%2FNcQoEL8zYShghFcXpRmLUDB46kpwGOmROMN98MrquAKjtpOYeGszEy7SvNUk%2F5nWEu%2BJ3WlEwMLECAW56Toe1akltWcMIRAksEYYwGKmPIJX%2BP4LwtIERrMI3VrsIGOqUBHr8KyVMTXvEGvJKCLTlEZyczujA4LPEu52qkcRTDpTUxRCyL465wfmr%2BcFpYhPrTz56pt0a%2B1lyuDLqFKWRzPn6EC9MV6VFJoeEOvW37hbXhn%2BAJzE5%2BdHRbiKftxJa%2FFKcW4BF8%2BjgHEwyeyAUuoENytXL%2F044FAE33CAAD4qhyjLUj%2B3WdoBvek29ZG9GL45ft1pfdpVjOaVN%2BrbuIziXzfaRi&X-Amz-Signature=8405aa12af748dc4a0e6f4e7a3051b63c2544c0751c4c02c8f3f84d379b541ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
