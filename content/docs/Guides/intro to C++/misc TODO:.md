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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMJVZBY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDsKNFNfDzwT9eA7%2Bfv%2FPOpBgRR6QZEAxXCExzfFkICFAiAWhZ0Kz%2BojPUXxCRMWeHUX8ydy15fos1x6ppPMRMfPwyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMvvuG18J8Ocqt%2Fn27KtwDwP2KTzGSzvpvQNhkbcC0lrx8ioOcY2i74vo%2BFVza%2BQOCSJIEn8OtAW0%2FiU6NnbFmSYRb9BN6xgOUF9kn7XyY7dauyBMme7JOuFNFqBiNIGOCymVAkNlnXERqLtivUpfEWwhcvgCKW4PcJFu%2FNYostSJcBiQieoOLzw%2FDiMRuQ6vBEiJ4KOcYAl6v4FLjpuexT%2F2UGTiTggh38LFUzXa6BruOvlxBQT0JZ1mDjDtDenRvhg4a1BY6oCtUjaSxpEqxj%2FH%2FHwnZDGSnAHGSOL9SlZMpXku8VfEBgIbrFxEQFZV4sVtsRsebPmo94E9jvZuUbKhoVALgufxXzwVD2%2BTJFQOQvh2WKl%2BCP7VuIRImwNw%2BdYZoHT230yP4BjieZOw8mxAp8Vsaaq98BOwjXucBYd0QXwAHP32lkoNycrWHYxNxZjCXUeNoCU5Pmj4TUU0Oe3yEaVSEK5v9gw06CoYrLIRxAjrRIFPOATios6IEGjn9mv22tmC67mtLMeOxLVUCy6t7FOQjCDYojkkcImMFBOY6a1BuChFUyV%2BffGl4ageZGfsOFFWbHLPrtiTqda7kTRbbjE%2FWRKiQ6npWl1yGFJIR%2ByfQ0quiruSguA1I%2FVEEcfLv2uKWlUGiPnwwpff9wQY6pgHabCyfKdWpJQZ3k2anfRcC6euWQRR%2BsUjWRdJxZKFuyIgHyLVESVdSiw69WkTI%2B3I1AW0P13U6QMre18EEEJNzwDazKuIfyDsk%2Bq9P3%2BbRag1U50UgxSfVTljskycYZlUFyfCex430A7pnX6JN9Kxleh96Sntq7WNHiOXsbsnIHaXQWJgP%2F%2BiU0LVLhN%2FWZsujXYF2tNV0a2HGTrWrSyfWdzZ9Q0y3&X-Amz-Signature=884d8101c707a584942c1586751c09c2f227e7c491067132e22c49bcb9fbd667&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMJVZBY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDsKNFNfDzwT9eA7%2Bfv%2FPOpBgRR6QZEAxXCExzfFkICFAiAWhZ0Kz%2BojPUXxCRMWeHUX8ydy15fos1x6ppPMRMfPwyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMvvuG18J8Ocqt%2Fn27KtwDwP2KTzGSzvpvQNhkbcC0lrx8ioOcY2i74vo%2BFVza%2BQOCSJIEn8OtAW0%2FiU6NnbFmSYRb9BN6xgOUF9kn7XyY7dauyBMme7JOuFNFqBiNIGOCymVAkNlnXERqLtivUpfEWwhcvgCKW4PcJFu%2FNYostSJcBiQieoOLzw%2FDiMRuQ6vBEiJ4KOcYAl6v4FLjpuexT%2F2UGTiTggh38LFUzXa6BruOvlxBQT0JZ1mDjDtDenRvhg4a1BY6oCtUjaSxpEqxj%2FH%2FHwnZDGSnAHGSOL9SlZMpXku8VfEBgIbrFxEQFZV4sVtsRsebPmo94E9jvZuUbKhoVALgufxXzwVD2%2BTJFQOQvh2WKl%2BCP7VuIRImwNw%2BdYZoHT230yP4BjieZOw8mxAp8Vsaaq98BOwjXucBYd0QXwAHP32lkoNycrWHYxNxZjCXUeNoCU5Pmj4TUU0Oe3yEaVSEK5v9gw06CoYrLIRxAjrRIFPOATios6IEGjn9mv22tmC67mtLMeOxLVUCy6t7FOQjCDYojkkcImMFBOY6a1BuChFUyV%2BffGl4ageZGfsOFFWbHLPrtiTqda7kTRbbjE%2FWRKiQ6npWl1yGFJIR%2ByfQ0quiruSguA1I%2FVEEcfLv2uKWlUGiPnwwpff9wQY6pgHabCyfKdWpJQZ3k2anfRcC6euWQRR%2BsUjWRdJxZKFuyIgHyLVESVdSiw69WkTI%2B3I1AW0P13U6QMre18EEEJNzwDazKuIfyDsk%2Bq9P3%2BbRag1U50UgxSfVTljskycYZlUFyfCex430A7pnX6JN9Kxleh96Sntq7WNHiOXsbsnIHaXQWJgP%2F%2BiU0LVLhN%2FWZsujXYF2tNV0a2HGTrWrSyfWdzZ9Q0y3&X-Amz-Signature=d4f5bfcdfc3bb9af478769b45341c547fa59634e8d9e6a863885cd955bf42975&X-Amz-SignedHeaders=host&x-id=GetObject)

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
