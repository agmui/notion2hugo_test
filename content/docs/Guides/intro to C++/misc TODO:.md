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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4NPZAC%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEeroryPHCl1A1gAAuHSKVBAV2rt7lvDKB0Llh%2BAKmJAiEA%2BY7APoWm1qBGoVxy%2F3CnxiZH4q6MHiBFcraJywm%2FGAoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwXBG3IwXS41LXGMSrcA8TvdRTOae0VB3USjqmUaziXBZslzjS%2B%2BIC%2BhHpskvYk1lH5HYm%2B2%2BzHA985SrkHiQFv9mfrS5JNA45PoMB%2F9i5ZUi7wP8ufiP%2FpJrFYSphwLc5EyyiP%2BjWBERBaRLEIoAUhTSkZ1w9VAIP7QZjXufRok3guT7X7RfbsHOm3LBdPuFlOtumi6bNGRzHJqPPUmTVc%2FxPn8IVcEPhgZED3u0c8X5IgZ9lcBTL3pIW9VaQ6XdZhrKYU33WFqi88ci2UUa6eLM9seE6nPO6d5aSRt%2BmIx%2BIYbcqwWTYGjxwC65Xi%2FSvvkacpnwt96OUVvp1QcglTUapQcz%2FqxssfzXzZjClFJssmnCheCk11cGYj62%2BKlHxOR5gzu1vsI7TstFQJdbNwP5Vnq1JepXvxdxljmRaAEvc%2Bxy1ZzYXVm%2FhlpPn%2FpKYcUVfQz9Ip6XdtG2exqZF%2Bpsmog%2FJrGkFYlpX58cOGiB2lwtbr%2B0BHOMI%2Fn9IQylGGnehH9YW2Z8tXdK1novTMe9zi3uLCJFw81UM9nw%2BfuVaqGiwNOa3SYnDrROaA9kkF%2BITuQyEmShvWOFwx0xo3%2BjDsqYRJjDuduQEAtdG3qciialla8K3JQzIeWMI527aDAe6LTErvBiO9MPL5m8cGOqUBY1XQUeuYpsy1ygm4XvaPZxsK9UnNFWT9BvRb2TmInp%2Ft1dVqPYO9dIUtwwLkCppDAJhs5%2BBMr%2FJspTr8zSSXl1votVtZGKKpDwXbND9sEuHXBjl%2BP0jqqWGXuboZ6bY89%2BEvRCsz61Zb9FgtH2OtzM4Yp8cllVKbuB3yIQF%2FHifR7gPMhi0t%2FAEYlh0cpgiIg8kswzSieWgD5mS5VaKx7ziRm7w1&X-Amz-Signature=0f7059c57d27d632b637b46a0bb7850613eb09aa6f2ca57658c26f5ba388eaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4NPZAC%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEeroryPHCl1A1gAAuHSKVBAV2rt7lvDKB0Llh%2BAKmJAiEA%2BY7APoWm1qBGoVxy%2F3CnxiZH4q6MHiBFcraJywm%2FGAoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwXBG3IwXS41LXGMSrcA8TvdRTOae0VB3USjqmUaziXBZslzjS%2B%2BIC%2BhHpskvYk1lH5HYm%2B2%2BzHA985SrkHiQFv9mfrS5JNA45PoMB%2F9i5ZUi7wP8ufiP%2FpJrFYSphwLc5EyyiP%2BjWBERBaRLEIoAUhTSkZ1w9VAIP7QZjXufRok3guT7X7RfbsHOm3LBdPuFlOtumi6bNGRzHJqPPUmTVc%2FxPn8IVcEPhgZED3u0c8X5IgZ9lcBTL3pIW9VaQ6XdZhrKYU33WFqi88ci2UUa6eLM9seE6nPO6d5aSRt%2BmIx%2BIYbcqwWTYGjxwC65Xi%2FSvvkacpnwt96OUVvp1QcglTUapQcz%2FqxssfzXzZjClFJssmnCheCk11cGYj62%2BKlHxOR5gzu1vsI7TstFQJdbNwP5Vnq1JepXvxdxljmRaAEvc%2Bxy1ZzYXVm%2FhlpPn%2FpKYcUVfQz9Ip6XdtG2exqZF%2Bpsmog%2FJrGkFYlpX58cOGiB2lwtbr%2B0BHOMI%2Fn9IQylGGnehH9YW2Z8tXdK1novTMe9zi3uLCJFw81UM9nw%2BfuVaqGiwNOa3SYnDrROaA9kkF%2BITuQyEmShvWOFwx0xo3%2BjDsqYRJjDuduQEAtdG3qciialla8K3JQzIeWMI527aDAe6LTErvBiO9MPL5m8cGOqUBY1XQUeuYpsy1ygm4XvaPZxsK9UnNFWT9BvRb2TmInp%2Ft1dVqPYO9dIUtwwLkCppDAJhs5%2BBMr%2FJspTr8zSSXl1votVtZGKKpDwXbND9sEuHXBjl%2BP0jqqWGXuboZ6bY89%2BEvRCsz61Zb9FgtH2OtzM4Yp8cllVKbuB3yIQF%2FHifR7gPMhi0t%2FAEYlh0cpgiIg8kswzSieWgD5mS5VaKx7ziRm7w1&X-Amz-Signature=25d7a458d3aeb87cee57fd5ccf442e1a95e459f65cc20ff0d791f113f83cf43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
