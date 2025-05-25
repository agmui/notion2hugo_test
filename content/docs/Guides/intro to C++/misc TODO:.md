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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ETLGPP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCpFtl7LLqm8UHuG2KVYv5Dnf9iMx7VThic8QLFpxlBKwIga4LCpULvjhGtmShvFqxxGEjx0y9mvaoM7rxLTR3hUjQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAIFutp1sNpZKbXdjCrcAwTEuOBeHLusXlClJK43GFoWlbpXX%2BK20gm2AKOmqplKWLT4TQUCssUmV%2BJtkArS3Zwmynbg%2FZLZ83ny2hODwquNxRNQUghhf31MOzbCsRh8VuNLK7YuueFJO1od4Zgr1X7gN%2FhfqMzjYR3qlfBm00nznuDVJEWJ85SbtGA4AhY%2FaMogBPdoIOn26I%2B7N3mi8kkWB%2FeMWwARpRwhTWLktFS1pjX3cwbEDFORJFYDZSCJvx%2BRb7l6mSyGDEyIs4X%2B74kmeMafgswqPW3%2FraIvkJAWX6WTpZ5orhxNzlEPt2aq5hJ0c0jUt1V85LdnfMsPjD%2BcuZu52iJy%2BXwTg7%2FizXS8f7IqWcnhwZAi6M5cwyyDLzhexO2k%2Fl7DefnP86C0joMs4jM76fgvid8BOyPDuAKwtb12WNnpYcMlmEPNMipyFTM%2Fb6qr1bhNLC8YkwiVWG%2Fj13lbv1jtgu5LmFcucJKNxsFnpOh55NOFCuze7wSXWHkbSVcq5z97aP4VbbS%2BosUquNsPjoxgLU1XSe1gMxWvcnlCh6SaPWjIR9FaxLv3BbXHvxc86yBbrq0Vd2PTWRgc9XYCtBbiUG8Qb1KrMlBcs98L42I5Ba%2B43sWYfVUATu5SPfEO0ASakcYmMJ%2F%2FzMEGOqUBSj2%2Fm269uGo%2ByRdWuM0DnSLQwY0Ok0pYDycvbK2w7xd%2BvVkqJ28alO23417Tty2Zjw61F1pMO7nHpM6fS3iSlLyPc9EpxIoiQDrkQzVP1y4zykVg6AcLzNlb62VgAnfdKDKALcPBan0hmPzu%2F94HtDy1h0EGSP4EbhGB%2B5ZkPw%2BFMKwlQ55dqjBajvpHAdyHAqq4zk1CFWsonCyj2PcjfAtofsjY&X-Amz-Signature=7f3f9d19afe10a6f168e166e7730dbce7f85eadb9f1a1564ef8597046554b636&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ETLGPP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCpFtl7LLqm8UHuG2KVYv5Dnf9iMx7VThic8QLFpxlBKwIga4LCpULvjhGtmShvFqxxGEjx0y9mvaoM7rxLTR3hUjQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAIFutp1sNpZKbXdjCrcAwTEuOBeHLusXlClJK43GFoWlbpXX%2BK20gm2AKOmqplKWLT4TQUCssUmV%2BJtkArS3Zwmynbg%2FZLZ83ny2hODwquNxRNQUghhf31MOzbCsRh8VuNLK7YuueFJO1od4Zgr1X7gN%2FhfqMzjYR3qlfBm00nznuDVJEWJ85SbtGA4AhY%2FaMogBPdoIOn26I%2B7N3mi8kkWB%2FeMWwARpRwhTWLktFS1pjX3cwbEDFORJFYDZSCJvx%2BRb7l6mSyGDEyIs4X%2B74kmeMafgswqPW3%2FraIvkJAWX6WTpZ5orhxNzlEPt2aq5hJ0c0jUt1V85LdnfMsPjD%2BcuZu52iJy%2BXwTg7%2FizXS8f7IqWcnhwZAi6M5cwyyDLzhexO2k%2Fl7DefnP86C0joMs4jM76fgvid8BOyPDuAKwtb12WNnpYcMlmEPNMipyFTM%2Fb6qr1bhNLC8YkwiVWG%2Fj13lbv1jtgu5LmFcucJKNxsFnpOh55NOFCuze7wSXWHkbSVcq5z97aP4VbbS%2BosUquNsPjoxgLU1XSe1gMxWvcnlCh6SaPWjIR9FaxLv3BbXHvxc86yBbrq0Vd2PTWRgc9XYCtBbiUG8Qb1KrMlBcs98L42I5Ba%2B43sWYfVUATu5SPfEO0ASakcYmMJ%2F%2FzMEGOqUBSj2%2Fm269uGo%2ByRdWuM0DnSLQwY0Ok0pYDycvbK2w7xd%2BvVkqJ28alO23417Tty2Zjw61F1pMO7nHpM6fS3iSlLyPc9EpxIoiQDrkQzVP1y4zykVg6AcLzNlb62VgAnfdKDKALcPBan0hmPzu%2F94HtDy1h0EGSP4EbhGB%2B5ZkPw%2BFMKwlQ55dqjBajvpHAdyHAqq4zk1CFWsonCyj2PcjfAtofsjY&X-Amz-Signature=3eeb09256aaa3608b2f73fdfa5c4aa2120cc53ecda51cef55189eb735f43405d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
