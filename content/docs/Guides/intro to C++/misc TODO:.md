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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APYWVMU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9sIbq9bN6VV7vUzkMbeXiaMNGd3I5RZz34AbUYOyG4AIgf9%2BYlrGQEmdEgnjms7DTbUQzLhpRgi5hohM87gwaTL4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvq9ftYMBh5u%2FuxGyrcA1qSy7wpcO0RrQ6zwathdy70RCi96w%2BRCc1mGwCILw8gomFzm3pm%2FIV%2FUvzO%2B%2B5Cyxf1Gzw7MjBOuzPXdGucCXh0QphlQXDXaQVKMlT7%2B0Ya0aZYEE2erSkqcOuykY%2Fr90riSotwl0Ost%2FVZ%2Brg19VQNJut2plkT65IcT%2Bqf%2Fh9KADjHkvwvLK04V2PnYkKSMrTHgonyd689FEj%2BJMwfrCzqll0KHv2Gx8SeWVuvEkNFqSDjMgsHie33g53Sj6Wh2LeHa80GjQ2DniX1dNQb2c0552vIky6pYqyHS9TCCNS1a2HS20stOLV3iOzO3iJHHI4xtIynKNS3%2B3Ew6bDdVCM5bS4KmWlsniNrimU7mszoqgeHbIYLbM382FXbIy2TGPjKX2FDlsdiRbs9y1SS2NsBghVu5Fvoc1UlZYZaoKkYxE2sVvEbVk8ISwsF0hfw1y1U%2BGuNNR7Dy%2F%2FBCu8Bc8wJ8rwbyv1aBHgI7kvmCIVfdLH%2BbPZKxkoCrVu4NDadMYwyC%2FZ8tv%2Bd%2Bgp%2FZENxJUcFAWoHUrzz95CijhwZTQBiZUX7kpvxDofaxauQU01lCcVO0zg0pRvYZjkQF9jfXOZSQR8RE%2BjLnAD7tMq5U2Ur7raavNoWXeglNDORMMTCrb0GOqUB91JIKmt%2BCLrXGXDhIW%2FuCuUEtD48PAOXqUaOVUoSDD1650RbmEDV0Y5x4GtqcFvXQJO%2BnonydQm8%2BuTaYSnrqSOIGWMSQM0KyhhY7NbOL3b%2B7A9Gr1RlWOJBVUYwVgvQitF26TBnK%2FzHVjKENmRyiMKcjbOelAJN1ASnojQpDpyKNn7ub3ploVJwFGU%2FpvJJGW82ISGjfMTtoVTMSsM5nPd1IWSC&X-Amz-Signature=c9c340740212e7f3a6de82208ee013aaae3f3ccadc83c200178065088faa7296&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APYWVMU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9sIbq9bN6VV7vUzkMbeXiaMNGd3I5RZz34AbUYOyG4AIgf9%2BYlrGQEmdEgnjms7DTbUQzLhpRgi5hohM87gwaTL4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvq9ftYMBh5u%2FuxGyrcA1qSy7wpcO0RrQ6zwathdy70RCi96w%2BRCc1mGwCILw8gomFzm3pm%2FIV%2FUvzO%2B%2B5Cyxf1Gzw7MjBOuzPXdGucCXh0QphlQXDXaQVKMlT7%2B0Ya0aZYEE2erSkqcOuykY%2Fr90riSotwl0Ost%2FVZ%2Brg19VQNJut2plkT65IcT%2Bqf%2Fh9KADjHkvwvLK04V2PnYkKSMrTHgonyd689FEj%2BJMwfrCzqll0KHv2Gx8SeWVuvEkNFqSDjMgsHie33g53Sj6Wh2LeHa80GjQ2DniX1dNQb2c0552vIky6pYqyHS9TCCNS1a2HS20stOLV3iOzO3iJHHI4xtIynKNS3%2B3Ew6bDdVCM5bS4KmWlsniNrimU7mszoqgeHbIYLbM382FXbIy2TGPjKX2FDlsdiRbs9y1SS2NsBghVu5Fvoc1UlZYZaoKkYxE2sVvEbVk8ISwsF0hfw1y1U%2BGuNNR7Dy%2F%2FBCu8Bc8wJ8rwbyv1aBHgI7kvmCIVfdLH%2BbPZKxkoCrVu4NDadMYwyC%2FZ8tv%2Bd%2Bgp%2FZENxJUcFAWoHUrzz95CijhwZTQBiZUX7kpvxDofaxauQU01lCcVO0zg0pRvYZjkQF9jfXOZSQR8RE%2BjLnAD7tMq5U2Ur7raavNoWXeglNDORMMTCrb0GOqUB91JIKmt%2BCLrXGXDhIW%2FuCuUEtD48PAOXqUaOVUoSDD1650RbmEDV0Y5x4GtqcFvXQJO%2BnonydQm8%2BuTaYSnrqSOIGWMSQM0KyhhY7NbOL3b%2B7A9Gr1RlWOJBVUYwVgvQitF26TBnK%2FzHVjKENmRyiMKcjbOelAJN1ASnojQpDpyKNn7ub3ploVJwFGU%2FpvJJGW82ISGjfMTtoVTMSsM5nPd1IWSC&X-Amz-Signature=e5107c2f2ed0b6e7b73a16bfb1e8ef4a9a839bafd337940739b93c30de9e525f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
