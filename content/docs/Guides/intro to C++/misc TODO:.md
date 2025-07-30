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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSCQM6P%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2FMxhY7BRF1ebi6ytqEC3Xxtqxuzr%2BUBXiPB1ev0qFQIgNiPkiQ%2BJsdVnafKC7ZezJ%2BJYSRvluOlqkQqI2sf88h8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FF3q6Gmv%2BkPsq6wyrcA9SFmEJsx7xeYKKjF8yx%2F1JxX7Wp2MMGJzN56cbiZriIT3N2Nxj13b%2BhIFUVlLxuYnWikuAZFZ9TxY4zyq99yhkHsn9%2BLmNrERNFIU6dDavebh9Kk9biNQRuT%2FZdfyFGFG87C%2Bi%2Fd4u3YENWElPNK5Lsc545JslsV7aAcLZjBaJDbZSVczi%2F5aU%2BPfl5ETe9YtK4auuV8dLtudkhHIVrlgYvssaV6t5Oxk%2FfxTWhi8HJjsOuODtN9eXD3KYFNMu4LohkRjf1cPweF80lZ%2BTgmkaAk%2Bxn1ZUnZd4ItRYhFPxEOwkuyXULwjuFkIa3Y4sljsHipcLwxIUvf3Wm2uqNliQNW4ztXJo9Q2lJG9ihHw8ID1p10M0siIV9uS0%2F3nMeJ%2FIJj6Ydv0YJIsPbecMZ2HteRBD90Fybyq2xGiMl7pWSc1xwQlKmd0wASt6S3HJQnLEuAkMD4V7oQBJROeQsFuMtpe%2BjJR%2BX0FgyuDTcISCSIdIv%2BKG9tUA%2BYMmPMrVr6p%2FUbcqv%2BdjeQ3S%2BNffzDgJA8rM3le7lqzb1G654ouC01ZVCd8df%2BIUzXoih0hjNn267BkmN5PW3E%2B0cLqfGFGUDxUjmV0JQSttvsEIPmJg6MDNSAPcznKsyCr30MPahqMQGOqUB3kXQjDyDAL9QXikfoXV4sxaqPFuMel8SpjE%2FQbxIoG8gLnqqceuGAup8j3dibsZvW8cFK%2BZsH%2BfVj%2BCWlc7CKfYXKueNtU55aku8CVQFhyQmh%2F227hLjj1BE%2BOUKQ6Q18ZLDu%2Felu75DNauNxwStiFeUmnpkazZtFP2DKu6Jun1A50ht0EkEWrVAZ0f%2FtMPqrKO8vRh1eiwsCHG%2BBMXaOWPIzNKZ&X-Amz-Signature=70f3781bcd9c40a67b7c0bbbc08ae2eb0c86f19471d3c688649a4781daf071d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSCQM6P%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2FMxhY7BRF1ebi6ytqEC3Xxtqxuzr%2BUBXiPB1ev0qFQIgNiPkiQ%2BJsdVnafKC7ZezJ%2BJYSRvluOlqkQqI2sf88h8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FF3q6Gmv%2BkPsq6wyrcA9SFmEJsx7xeYKKjF8yx%2F1JxX7Wp2MMGJzN56cbiZriIT3N2Nxj13b%2BhIFUVlLxuYnWikuAZFZ9TxY4zyq99yhkHsn9%2BLmNrERNFIU6dDavebh9Kk9biNQRuT%2FZdfyFGFG87C%2Bi%2Fd4u3YENWElPNK5Lsc545JslsV7aAcLZjBaJDbZSVczi%2F5aU%2BPfl5ETe9YtK4auuV8dLtudkhHIVrlgYvssaV6t5Oxk%2FfxTWhi8HJjsOuODtN9eXD3KYFNMu4LohkRjf1cPweF80lZ%2BTgmkaAk%2Bxn1ZUnZd4ItRYhFPxEOwkuyXULwjuFkIa3Y4sljsHipcLwxIUvf3Wm2uqNliQNW4ztXJo9Q2lJG9ihHw8ID1p10M0siIV9uS0%2F3nMeJ%2FIJj6Ydv0YJIsPbecMZ2HteRBD90Fybyq2xGiMl7pWSc1xwQlKmd0wASt6S3HJQnLEuAkMD4V7oQBJROeQsFuMtpe%2BjJR%2BX0FgyuDTcISCSIdIv%2BKG9tUA%2BYMmPMrVr6p%2FUbcqv%2BdjeQ3S%2BNffzDgJA8rM3le7lqzb1G654ouC01ZVCd8df%2BIUzXoih0hjNn267BkmN5PW3E%2B0cLqfGFGUDxUjmV0JQSttvsEIPmJg6MDNSAPcznKsyCr30MPahqMQGOqUB3kXQjDyDAL9QXikfoXV4sxaqPFuMel8SpjE%2FQbxIoG8gLnqqceuGAup8j3dibsZvW8cFK%2BZsH%2BfVj%2BCWlc7CKfYXKueNtU55aku8CVQFhyQmh%2F227hLjj1BE%2BOUKQ6Q18ZLDu%2Felu75DNauNxwStiFeUmnpkazZtFP2DKu6Jun1A50ht0EkEWrVAZ0f%2FtMPqrKO8vRh1eiwsCHG%2BBMXaOWPIzNKZ&X-Amz-Signature=3a1acf0b12d09136566fe02112aee8ee9e75431c08366009df4eb5157d904ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
