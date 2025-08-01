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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLRPJA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF3%2BWN%2BdGhSvb%2FSCFqAzClK44c0QWOl8FI1sGh3gNBTAiACWlz46wpXdWXJxi%2B2kGG%2FgaPMjQZW6Vq7LrK6MRQCKiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2lk97CmxjaS9Yu%2FKtwDu3omZbwdk%2BpelFQm6gksH2j3b8OYj43kgX7ldHtIK04yAghXKjmaPRKkYNN1oyTocvCks5rCj0ybwR4mh1Y%2B8BkGKcPU4TjJ6euE2Nda7%2FTER0%2BVbZzGZbsn6q8MW1udPoEOIoMZ2EjpGAxX%2BXZ9GFPTWP6pVr6wgsAflmiwEk8aihPaD%2F4S9SxX8DeroMGGS3p7DIC4g6lGCRdn3v6D5sc4vO34mGJyY9UvOHt0tIdzfvP4acuvTgeONHqCJvqCx4PJMCuQMDbnmXt%2Bq%2BAw2K3mZ9k%2BEVwdLkXoCeGw292N3vyRFKrndnbe3hfgXBtw0g7FgpuxhOmhrRhdFPy%2FsrH7dBtLb4ro3Q1Hu2j1ux4TH6syMq%2BSjXwRojSO90nAWhfx0Je8gwM%2FTz9mcsxgtSSThctPfvU3RonI4jdKZMw4n5Lopd6lKuqlqT%2BRqWksKYIgdGd11cnS4lmnUftjQZsP6iNVZEzHkDOPABV0p9KfIrz9Kke3eaF8bFqi4WLUwwaDZcxZnLEHHseBwjIrWhFTU68bbsoYFg%2Bi1sxqa7zH7ltYqnxkB1JQFyBXTHr7n94eVxP5X%2BTle9%2FgFk3rKOMcSkNt%2FgfnXX2eufgMvPFZ08Ty40wCteOc1tIw3%2BOyxAY6pgF%2BWTupYwqi6w7rnKxptauDH2rekHIzyk1v2nEM0gu0wIliFOwj4xdEMtt%2Bo6PKHD%2FkK1U4zLkMpC5iR0tBW8XAAgVHMrMtvIvKYinzpsE5QxIQ0VU5ic1BSKZMmUrH4CUe6Kih68RXmt7Ea%2BHBkrvXfZ4EJpsPkvaD96%2FWxR28FN4qhZkL9tPUTO%2BKDBv%2Bws0q41o89DkVWWmX5LnYb4zFyEjf87pw&X-Amz-Signature=c70d57b13fbb8408cfb1f23a9ea69a194db1ec2a2bb6e0bcc5cfb8cba668eb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLRPJA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF3%2BWN%2BdGhSvb%2FSCFqAzClK44c0QWOl8FI1sGh3gNBTAiACWlz46wpXdWXJxi%2B2kGG%2FgaPMjQZW6Vq7LrK6MRQCKiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2lk97CmxjaS9Yu%2FKtwDu3omZbwdk%2BpelFQm6gksH2j3b8OYj43kgX7ldHtIK04yAghXKjmaPRKkYNN1oyTocvCks5rCj0ybwR4mh1Y%2B8BkGKcPU4TjJ6euE2Nda7%2FTER0%2BVbZzGZbsn6q8MW1udPoEOIoMZ2EjpGAxX%2BXZ9GFPTWP6pVr6wgsAflmiwEk8aihPaD%2F4S9SxX8DeroMGGS3p7DIC4g6lGCRdn3v6D5sc4vO34mGJyY9UvOHt0tIdzfvP4acuvTgeONHqCJvqCx4PJMCuQMDbnmXt%2Bq%2BAw2K3mZ9k%2BEVwdLkXoCeGw292N3vyRFKrndnbe3hfgXBtw0g7FgpuxhOmhrRhdFPy%2FsrH7dBtLb4ro3Q1Hu2j1ux4TH6syMq%2BSjXwRojSO90nAWhfx0Je8gwM%2FTz9mcsxgtSSThctPfvU3RonI4jdKZMw4n5Lopd6lKuqlqT%2BRqWksKYIgdGd11cnS4lmnUftjQZsP6iNVZEzHkDOPABV0p9KfIrz9Kke3eaF8bFqi4WLUwwaDZcxZnLEHHseBwjIrWhFTU68bbsoYFg%2Bi1sxqa7zH7ltYqnxkB1JQFyBXTHr7n94eVxP5X%2BTle9%2FgFk3rKOMcSkNt%2FgfnXX2eufgMvPFZ08Ty40wCteOc1tIw3%2BOyxAY6pgF%2BWTupYwqi6w7rnKxptauDH2rekHIzyk1v2nEM0gu0wIliFOwj4xdEMtt%2Bo6PKHD%2FkK1U4zLkMpC5iR0tBW8XAAgVHMrMtvIvKYinzpsE5QxIQ0VU5ic1BSKZMmUrH4CUe6Kih68RXmt7Ea%2BHBkrvXfZ4EJpsPkvaD96%2FWxR28FN4qhZkL9tPUTO%2BKDBv%2Bws0q41o89DkVWWmX5LnYb4zFyEjf87pw&X-Amz-Signature=bc88bcc0d44b5b6357fd2b4644fa75b49084b3e957e44b85d7e0472320ac9a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
