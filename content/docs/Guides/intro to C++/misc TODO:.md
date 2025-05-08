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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZRND7D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPF8tFT4bBBTH4Iu1RUtma5lLWlNJp%2FPvbRwE5XsZaAAIgBwy6hUHCOSCUTQNgfueItwIL9FuDeAX9cpTY98aE7WQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNN1ovJhio3TrhQ1UyrcA8eavapl2B5uzXMfsvI5XBPmensiSyYYsmgLYMAMySmAK3Th49ScCNIPB0rMsEY20LBhso0ZNwE0B%2BJsP6UqheBYiPXYJNeUjAY1Fe%2BeQ9DJpymWccXy%2BDXoAhYocjfjkOHdQBWhsXZT5qe6VKgW%2FtGvyZzkvSWfY2VGOAH%2BrJXemxG2tTXZH20v6GfHxc9rty98RMAYYUUefgqCBNdVn%2B6jNWLiBRxvRfurTwKlL7EzvX0LbF90JTGzMo%2FyZI6V%2FqG8fVWXH0wsbRrKde8ba0npT9faM%2Fw%2B1VXDPcHHborqo6iBQCjsLJzOMKcXRIj4pMVUAifFb%2FD7lunTgmCzj4zlA%2F1kBm12rFnayFaZM1Wr9QGGVrO0yJ8mffHyrWY6JVXmNbaT2brFgmRlUIy803PjngA6fk%2Bopy4dEtOf2yAjnmJEZKXC%2BlctFA%2FjP%2FzoFwSqhP2bnONjFArsZ3cwiywSMBFN7Eigkzfo%2BzYpt8T4uHe%2FgZHOU0hcFnlzOGUdBiavT2%2BdyqdNSk1GK40Lh2lm3F%2BZvHdL%2FxXPS9gGuHaNSBCng9%2FEjZuHlIZuryevHgo84lAS7XQLBWlUXbtvRRv4eJFqRIhNOVeWX8BRNLWdWtZlT2L09xi1jYXZMNGo8MAGOqUBqkec%2Bch4PXAwX2eBWE%2FhhBFJbierU%2Bc5TgK3lkfC8sm%2B2IXNYRou6OyG5VmMI%2Fd%2Fqmx0uN0J1nCmUXdkBJ%2B9eZPVME%2F%2Bam1rAFRBxceKnmcrZ4Rr3DHbTwngF14Ftv0xjOhyBLsdAPvdp1zc02KrInMY3MoZqFJg4Oj2%2Bg74uDNtcWqZTS1DZk%2FwMRQPTCKNZx3%2FHvc4fzno8keEBULP1PH%2BmRCw&X-Amz-Signature=f9c49b8e8ea76473f4318817066614437bb82e867b2d5f11ec19a3742f4df226&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZRND7D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPF8tFT4bBBTH4Iu1RUtma5lLWlNJp%2FPvbRwE5XsZaAAIgBwy6hUHCOSCUTQNgfueItwIL9FuDeAX9cpTY98aE7WQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNN1ovJhio3TrhQ1UyrcA8eavapl2B5uzXMfsvI5XBPmensiSyYYsmgLYMAMySmAK3Th49ScCNIPB0rMsEY20LBhso0ZNwE0B%2BJsP6UqheBYiPXYJNeUjAY1Fe%2BeQ9DJpymWccXy%2BDXoAhYocjfjkOHdQBWhsXZT5qe6VKgW%2FtGvyZzkvSWfY2VGOAH%2BrJXemxG2tTXZH20v6GfHxc9rty98RMAYYUUefgqCBNdVn%2B6jNWLiBRxvRfurTwKlL7EzvX0LbF90JTGzMo%2FyZI6V%2FqG8fVWXH0wsbRrKde8ba0npT9faM%2Fw%2B1VXDPcHHborqo6iBQCjsLJzOMKcXRIj4pMVUAifFb%2FD7lunTgmCzj4zlA%2F1kBm12rFnayFaZM1Wr9QGGVrO0yJ8mffHyrWY6JVXmNbaT2brFgmRlUIy803PjngA6fk%2Bopy4dEtOf2yAjnmJEZKXC%2BlctFA%2FjP%2FzoFwSqhP2bnONjFArsZ3cwiywSMBFN7Eigkzfo%2BzYpt8T4uHe%2FgZHOU0hcFnlzOGUdBiavT2%2BdyqdNSk1GK40Lh2lm3F%2BZvHdL%2FxXPS9gGuHaNSBCng9%2FEjZuHlIZuryevHgo84lAS7XQLBWlUXbtvRRv4eJFqRIhNOVeWX8BRNLWdWtZlT2L09xi1jYXZMNGo8MAGOqUBqkec%2Bch4PXAwX2eBWE%2FhhBFJbierU%2Bc5TgK3lkfC8sm%2B2IXNYRou6OyG5VmMI%2Fd%2Fqmx0uN0J1nCmUXdkBJ%2B9eZPVME%2F%2Bam1rAFRBxceKnmcrZ4Rr3DHbTwngF14Ftv0xjOhyBLsdAPvdp1zc02KrInMY3MoZqFJg4Oj2%2Bg74uDNtcWqZTS1DZk%2FwMRQPTCKNZx3%2FHvc4fzno8keEBULP1PH%2BmRCw&X-Amz-Signature=aaa834a23846b7fd95594cd6084c69501fa42de87cc1031cdd5d86db4522f85d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
