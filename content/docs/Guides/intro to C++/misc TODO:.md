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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCJHKS3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2F%2FVZ1shQ6K5syPPe7n6abTQOcp%2BGqu%2Bgix7uQUb2MwIgPWeGR8L9ju3o%2FztZwZe53ZQWg07DC%2FadUVhHSEXLoPAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxdckViH8%2Bk7yOr%2BircA%2FtQcO7MB8WDMJP8McFgutKwgtxpB97A0rScaKYjhShRlpVsKBrkrybGAUa2U9YmrdqwbNwpzlFrOJdvDcf6hkLmFZ6jbeIEED8MGcaBv4mB3UxBfac7Oh%2BGhBOsLLCstxKfyBFFcrmPeF5szZbPTgQM7lOOn2Prq1pvc38OwhwNxbq6pBBAKzjLJ%2B8H3Y4oW3%2BnXi3ixK9eBgzHX1eJxZZo3rIIFPDCADoKGHD31Ohj4TcZKeR83pR%2FhI6t7JlXIktsf6FDRo6L6NJd18tEW0hTJX%2BpGlN%2FPoNvoF27KEbF8p4%2FOcqmiBJCCsuutA21xztn5i4lWXa49HFWqPpws7C6njr4HPPnJ3CMdxCttG4lyW18tks%2Bm6AGhyx%2FOGmJ8DkIpwi5qp4vgp7vmnZLtwu3cMt18yowUpotxADFndm7tPMf3uBF1Qy4lqRLW%2Bv2QojwpmbWdjDNQdlnwyTMaTboOA2n0%2BT2eJ%2F%2Fv1MndnXNW9dxgi3Yw5hXetGuz7Nye2oAka7zi58NwrVlPBjdAW9%2BL6NOaa%2BVzFoNp7yKoh8ojZJeCldEb8gVLRfFcmzG%2Fx8NotNFYN48AFO7gfKpNvv2TnMBUgYfl79ZhQCxSagUP56pvCUdvcJzAJ6gMKTdqsEGOqUBNsHy0Go%2FjA%2B8wAOaJSZuVrqKsLdTL%2BXPYwkoTxGEyUJg0gsqjBfniW2aSzitPAb1EHHnyDFHEYUvxtoyIFQGpxOUG85%2F80WZqq2B9HoROr1YLXdMaceRdDzF420W%2Bj7L2k15zaRGyAQScg66381k9JuN9qNkvzNN7aZbGf9IomqfSQpeaNpTz0kFYA8IXSJQ06%2FyL%2FGpeRzExAjBDu2yruhy7agP&X-Amz-Signature=ae990390e6086ebb1e07fe31f860cf45a821c45cafa0fbaff5dca21efb50acf3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCJHKS3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2F%2FVZ1shQ6K5syPPe7n6abTQOcp%2BGqu%2Bgix7uQUb2MwIgPWeGR8L9ju3o%2FztZwZe53ZQWg07DC%2FadUVhHSEXLoPAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxdckViH8%2Bk7yOr%2BircA%2FtQcO7MB8WDMJP8McFgutKwgtxpB97A0rScaKYjhShRlpVsKBrkrybGAUa2U9YmrdqwbNwpzlFrOJdvDcf6hkLmFZ6jbeIEED8MGcaBv4mB3UxBfac7Oh%2BGhBOsLLCstxKfyBFFcrmPeF5szZbPTgQM7lOOn2Prq1pvc38OwhwNxbq6pBBAKzjLJ%2B8H3Y4oW3%2BnXi3ixK9eBgzHX1eJxZZo3rIIFPDCADoKGHD31Ohj4TcZKeR83pR%2FhI6t7JlXIktsf6FDRo6L6NJd18tEW0hTJX%2BpGlN%2FPoNvoF27KEbF8p4%2FOcqmiBJCCsuutA21xztn5i4lWXa49HFWqPpws7C6njr4HPPnJ3CMdxCttG4lyW18tks%2Bm6AGhyx%2FOGmJ8DkIpwi5qp4vgp7vmnZLtwu3cMt18yowUpotxADFndm7tPMf3uBF1Qy4lqRLW%2Bv2QojwpmbWdjDNQdlnwyTMaTboOA2n0%2BT2eJ%2F%2Fv1MndnXNW9dxgi3Yw5hXetGuz7Nye2oAka7zi58NwrVlPBjdAW9%2BL6NOaa%2BVzFoNp7yKoh8ojZJeCldEb8gVLRfFcmzG%2Fx8NotNFYN48AFO7gfKpNvv2TnMBUgYfl79ZhQCxSagUP56pvCUdvcJzAJ6gMKTdqsEGOqUBNsHy0Go%2FjA%2B8wAOaJSZuVrqKsLdTL%2BXPYwkoTxGEyUJg0gsqjBfniW2aSzitPAb1EHHnyDFHEYUvxtoyIFQGpxOUG85%2F80WZqq2B9HoROr1YLXdMaceRdDzF420W%2Bj7L2k15zaRGyAQScg66381k9JuN9qNkvzNN7aZbGf9IomqfSQpeaNpTz0kFYA8IXSJQ06%2FyL%2FGpeRzExAjBDu2yruhy7agP&X-Amz-Signature=0601e3fc7f28bf6b63e748564c56bc44af9d4a9599e7afce6cf45b0426aa137e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
