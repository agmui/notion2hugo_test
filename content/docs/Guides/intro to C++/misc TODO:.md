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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YOUBLPT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcGbqFkwHz3vPE7w2bZFC4j9V0U8kkH5rBUMHMtvwrnAiA5brXtySM7wUOdx1kVPqdCTcPWzDLhvkcREu3srL2zNiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnDGVdmNNWHdm1iKZKtwDElSfyEb1nFAQ3A46daDgELtNr7tRXvFSuGcJH9aU%2Fcq4YaWjFSonnBZDoMG08lHTleLjQWRhFpGDksgNYhW%2BgTykuxYw2i%2BO%2F%2FL2Xm4xDVlkdLzmmlkBxz9TD6zvYGOQnfzsQhZ6OPmp3R5AIesZ9bW45Ovn%2FVkjGr3TacmyhMk%2F2BuWkCdREhUNNYb22TLcBfr117alRU6kox2AUW29L3sX4KTPb%2B22k1nXkkIOrUei715TCywHVcj7vW4lHJDFgsWqT4mpCv1kR5vO%2Bjv6AI7oiyZVzPgu9jCGVJSNsBkHhCbKOYNGpHvqNevLzipkvFwAnJCTTdZr7X3IUr2X5nEY54I%2Fj9fswL1dZAbpL56mOqklwpq1u89e5ioqHgkzBM8zjgxycEP9IS2XmbjBLTGURF6ntOiha5CXwkQTAzBYMkuxLDhnkanBOTTrkY6nGDdVSE1D7ynrjbNljwnCYMflTj5%2F3Hlw6tz2wNz5RpQMTCf6%2BGr9cSjXQ1SFBPv4Qn87kpITLn6hWwzY8lc%2FRje472pGkQDTM%2B5lx2w38Ozjj6jKZmf3q9Lli4umdE1rWx1FoFPepqu3DBXcu9VY7Pz6tL4sFZsxvt4OLnjbqabLejR1BKnPqCPzsq8wq8mhwgY6pgGvq7AZ3j69xQX8MkeKaLIlPIo3vk7GcExKMJnjFh1ymzi8hi2QA1yzd34L4yEXYD4LoE79fBQl6t%2BTVUMaOOR5Uw4yggAvtFn7vCZs4cUnIHbddGXzJ2nS9wzltbGr5LT0xYwgKw8qz8EaVedRvQkTZaKow0BHcanvMlKOoPQBTKPVMRDv5hKh0d6PWrZCiBmMKctjsmAg2kzFWIKBUQJLF6fz68Tx&X-Amz-Signature=35ab803b215acc6a1dc86fa1aeaebd0b73f7b4981ac5ac985c24da8e9efe16bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YOUBLPT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcGbqFkwHz3vPE7w2bZFC4j9V0U8kkH5rBUMHMtvwrnAiA5brXtySM7wUOdx1kVPqdCTcPWzDLhvkcREu3srL2zNiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnDGVdmNNWHdm1iKZKtwDElSfyEb1nFAQ3A46daDgELtNr7tRXvFSuGcJH9aU%2Fcq4YaWjFSonnBZDoMG08lHTleLjQWRhFpGDksgNYhW%2BgTykuxYw2i%2BO%2F%2FL2Xm4xDVlkdLzmmlkBxz9TD6zvYGOQnfzsQhZ6OPmp3R5AIesZ9bW45Ovn%2FVkjGr3TacmyhMk%2F2BuWkCdREhUNNYb22TLcBfr117alRU6kox2AUW29L3sX4KTPb%2B22k1nXkkIOrUei715TCywHVcj7vW4lHJDFgsWqT4mpCv1kR5vO%2Bjv6AI7oiyZVzPgu9jCGVJSNsBkHhCbKOYNGpHvqNevLzipkvFwAnJCTTdZr7X3IUr2X5nEY54I%2Fj9fswL1dZAbpL56mOqklwpq1u89e5ioqHgkzBM8zjgxycEP9IS2XmbjBLTGURF6ntOiha5CXwkQTAzBYMkuxLDhnkanBOTTrkY6nGDdVSE1D7ynrjbNljwnCYMflTj5%2F3Hlw6tz2wNz5RpQMTCf6%2BGr9cSjXQ1SFBPv4Qn87kpITLn6hWwzY8lc%2FRje472pGkQDTM%2B5lx2w38Ozjj6jKZmf3q9Lli4umdE1rWx1FoFPepqu3DBXcu9VY7Pz6tL4sFZsxvt4OLnjbqabLejR1BKnPqCPzsq8wq8mhwgY6pgGvq7AZ3j69xQX8MkeKaLIlPIo3vk7GcExKMJnjFh1ymzi8hi2QA1yzd34L4yEXYD4LoE79fBQl6t%2BTVUMaOOR5Uw4yggAvtFn7vCZs4cUnIHbddGXzJ2nS9wzltbGr5LT0xYwgKw8qz8EaVedRvQkTZaKow0BHcanvMlKOoPQBTKPVMRDv5hKh0d6PWrZCiBmMKctjsmAg2kzFWIKBUQJLF6fz68Tx&X-Amz-Signature=1fc05917a881685c6942bb7af72fa658880300fa0cb8d9b43bfbe43db9d62868&X-Amz-SignedHeaders=host&x-id=GetObject)

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
