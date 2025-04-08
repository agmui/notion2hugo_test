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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4P3CZ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQClFe%2F9o7wH5MNWM4%2BhIVaYnSDqXstnKCWu1Q5HjmnwygIgIfEchkBohmSeqytlU%2F0Uqn6212zwOFAFN6CskaDnVYMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNdtePJXjfulgfN9CSrcAxI5aJAKYqHQHnDojSdzP5U6%2BhfDLawCk0xoAchrHA4a4Fb8UMypYeT4qw76Dx0UfWkcD7ClWXQo6%2BYcBQh8OoLzYKumQgZYdHxCkCP3aG%2B3pPqkKJ3bCywfkwJcxtBsj303mf49%2BlY92gDeBlcA7oCoaCUIsUYGdOKtZ51ujiI5WYSXOiVG2YAH167CsArhfsoZ2IpqHE4UkRWAFGr07%2BpBExMtnUT9ZQDg2%2F%2BhjImsqSXOK3I764iNb%2BtkY17oIhxQRL1bUJMXXy3ahzWNGY%2BWlxEZJQXY8RKZckFepxAXJUuhy8XTat9%2BxUUVDSCk2A58xM4zR1Yh1DGmnNR2bc4hRr3sCq60J%2FZvrdw3tu%2FMGsxfuMq5hY0ZY3CY5VZCnQquMHpif1d6BJ%2FWS8Tl82lyU5PqqtP37Mzmlsh2j68MgQnxkSneSFS1UjTdotH2UZ4hzfoj2bUcW%2BZU75VHBkTXk0gin0ciWUtMCfZj30a%2FHrlfcoTZhzScdTZm3ISRLcn%2BrmTu6C3svmX64aSVD%2FWWX8gCSj6evK72jlqTYW2BzgQS0QuYGD1DAdXBnP4hNRCi5DpPBY9Wet3Akilk34aS3gbxBmpXjtRvIpCb9h8T%2FNjWi7KN1TyRQIDZMJXV1b8GOqUBDHOZy7wnOHAZA6J%2BtZKirpxYeQVv4A89MoXpjcRW1m0kKh55DrlLDFOYrLnFiulqGO5E8ldp9Hmygt8np%2FWyHk14a79a5dQKs%2BcCUTpmQqkPgQgI7v6MeVsMyWOiuD3nou%2Fzs6SRdsjVyJhDWJxgik9y%2BTT9mpofOTsXi4fvZJfM2h3H4iK%2FvNMrvC%2FjRW49%2BNW1ZF6BarqatYbjh%2BxlvL%2FXSTTQ&X-Amz-Signature=2ef5517b618cce8ebcf16b2940161acbca17707ee3d9c2a70e53679d35fcfd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4P3CZ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQClFe%2F9o7wH5MNWM4%2BhIVaYnSDqXstnKCWu1Q5HjmnwygIgIfEchkBohmSeqytlU%2F0Uqn6212zwOFAFN6CskaDnVYMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNdtePJXjfulgfN9CSrcAxI5aJAKYqHQHnDojSdzP5U6%2BhfDLawCk0xoAchrHA4a4Fb8UMypYeT4qw76Dx0UfWkcD7ClWXQo6%2BYcBQh8OoLzYKumQgZYdHxCkCP3aG%2B3pPqkKJ3bCywfkwJcxtBsj303mf49%2BlY92gDeBlcA7oCoaCUIsUYGdOKtZ51ujiI5WYSXOiVG2YAH167CsArhfsoZ2IpqHE4UkRWAFGr07%2BpBExMtnUT9ZQDg2%2F%2BhjImsqSXOK3I764iNb%2BtkY17oIhxQRL1bUJMXXy3ahzWNGY%2BWlxEZJQXY8RKZckFepxAXJUuhy8XTat9%2BxUUVDSCk2A58xM4zR1Yh1DGmnNR2bc4hRr3sCq60J%2FZvrdw3tu%2FMGsxfuMq5hY0ZY3CY5VZCnQquMHpif1d6BJ%2FWS8Tl82lyU5PqqtP37Mzmlsh2j68MgQnxkSneSFS1UjTdotH2UZ4hzfoj2bUcW%2BZU75VHBkTXk0gin0ciWUtMCfZj30a%2FHrlfcoTZhzScdTZm3ISRLcn%2BrmTu6C3svmX64aSVD%2FWWX8gCSj6evK72jlqTYW2BzgQS0QuYGD1DAdXBnP4hNRCi5DpPBY9Wet3Akilk34aS3gbxBmpXjtRvIpCb9h8T%2FNjWi7KN1TyRQIDZMJXV1b8GOqUBDHOZy7wnOHAZA6J%2BtZKirpxYeQVv4A89MoXpjcRW1m0kKh55DrlLDFOYrLnFiulqGO5E8ldp9Hmygt8np%2FWyHk14a79a5dQKs%2BcCUTpmQqkPgQgI7v6MeVsMyWOiuD3nou%2Fzs6SRdsjVyJhDWJxgik9y%2BTT9mpofOTsXi4fvZJfM2h3H4iK%2FvNMrvC%2FjRW49%2BNW1ZF6BarqatYbjh%2BxlvL%2FXSTTQ&X-Amz-Signature=f23e87c65483169e73e5e0499dc50bebfbaa18a1ed45cd897a53d9e4a8868f36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
