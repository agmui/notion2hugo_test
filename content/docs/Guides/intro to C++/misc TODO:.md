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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZARDPP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfpHBjIpT5HpCJ0j%2BDwnbEAt%2F8RTohiIA9%2Biw5mT2MgIgWU7IDV%2FPDhsPAuPfiWdyOKi0S%2BXkfbYHdA35J3Hi%2BM0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKAsxU5P%2B3lH5neFDircA5HjN2hZX6X0c7%2FPCUCmCqYBcxbxVyWwrFH0nSewXPyR745OF1HBweG95m0gBsnoH6E6lrwNsWgrQLXNqVjI14EkMHpRw5zwmCPOKCAEsbVOy1GQf3w7nYxu0QvhtIcTEXie07vczXore4u%2F8BEmotqQukSgNcq4X14sM7gZLkJvtYdnauueXKisUlbB0TTvBPBBLvuw6M0VwP8w%2BxLve3ZpMKLrw6vpACy79r7P7Fdu0txEZrQuAUoS5pttkw6zqCRd%2F5C%2By0VO%2BMeuqa4jGXuJu92m42svwUflBONL8cem3wDa2jLfIrOKxJzVZBuza4LZ4OYb90E8UwjY3jmLttZ5sTtmhX7X2o7En7%2BtRzzN6eJlZIyM34%2FgX%2FlXDe0EyA2pLeM1ZBz8Kn8ar2pS9U20Hv8eo2ZwxCb0vrhcJ5EZk8sV5zEskms4EUFu%2Fg%2F807NCudXv5OW05gRd%2BHI1wkCAzAZOKufc7vmMdqtZ6L1h53ow%2B48I0mmZycIkj5iaHEO6FjpfXK7sdSYeCfxx5BtW85yGsUAKmJ3tOh9GpleW%2Fa3U%2Bax7EcnvC0y1PBm5wdU0vXipm1uXnzWq%2B02fU6VS8JgtBv2MFAN2oDYPv3GnNPOMGMxuttj%2BMTPxMIaiu8AGOqUBeIUIMyjv%2B7909EVd4v%2BpuVJiLNutIokb0q6HJVUzuxBmW0RcRP5sIEwPXWD1WOGoUoCaJs0%2BDifu5KfX1bZOcwj7%2BZJ%2FiZKcK%2Fnj6kDmlpqtVo9rcSuvJf%2BTigIT%2BTQ45oRKX4pXhm4Ur9wIH94gGqme9KS4LolZDmwLC7f8s2oH5VKGEj2TrU75XcRg0jflrTVkvxs1DmTJwXki6ei5sfC7I0vg&X-Amz-Signature=2b17c2449932dec2d3f9066066508a5df8867514d8a98e157d63ebe983df7ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZARDPP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfpHBjIpT5HpCJ0j%2BDwnbEAt%2F8RTohiIA9%2Biw5mT2MgIgWU7IDV%2FPDhsPAuPfiWdyOKi0S%2BXkfbYHdA35J3Hi%2BM0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKAsxU5P%2B3lH5neFDircA5HjN2hZX6X0c7%2FPCUCmCqYBcxbxVyWwrFH0nSewXPyR745OF1HBweG95m0gBsnoH6E6lrwNsWgrQLXNqVjI14EkMHpRw5zwmCPOKCAEsbVOy1GQf3w7nYxu0QvhtIcTEXie07vczXore4u%2F8BEmotqQukSgNcq4X14sM7gZLkJvtYdnauueXKisUlbB0TTvBPBBLvuw6M0VwP8w%2BxLve3ZpMKLrw6vpACy79r7P7Fdu0txEZrQuAUoS5pttkw6zqCRd%2F5C%2By0VO%2BMeuqa4jGXuJu92m42svwUflBONL8cem3wDa2jLfIrOKxJzVZBuza4LZ4OYb90E8UwjY3jmLttZ5sTtmhX7X2o7En7%2BtRzzN6eJlZIyM34%2FgX%2FlXDe0EyA2pLeM1ZBz8Kn8ar2pS9U20Hv8eo2ZwxCb0vrhcJ5EZk8sV5zEskms4EUFu%2Fg%2F807NCudXv5OW05gRd%2BHI1wkCAzAZOKufc7vmMdqtZ6L1h53ow%2B48I0mmZycIkj5iaHEO6FjpfXK7sdSYeCfxx5BtW85yGsUAKmJ3tOh9GpleW%2Fa3U%2Bax7EcnvC0y1PBm5wdU0vXipm1uXnzWq%2B02fU6VS8JgtBv2MFAN2oDYPv3GnNPOMGMxuttj%2BMTPxMIaiu8AGOqUBeIUIMyjv%2B7909EVd4v%2BpuVJiLNutIokb0q6HJVUzuxBmW0RcRP5sIEwPXWD1WOGoUoCaJs0%2BDifu5KfX1bZOcwj7%2BZJ%2FiZKcK%2Fnj6kDmlpqtVo9rcSuvJf%2BTigIT%2BTQ45oRKX4pXhm4Ur9wIH94gGqme9KS4LolZDmwLC7f8s2oH5VKGEj2TrU75XcRg0jflrTVkvxs1DmTJwXki6ei5sfC7I0vg&X-Amz-Signature=bd56bbf1cd02989147b232c1d390af8fe487918dafae3b90c8abf3b4f1ae9073&X-Amz-SignedHeaders=host&x-id=GetObject)

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
