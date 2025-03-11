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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNYLW6A%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDiOyB%2FeGeUQ%2BudMnklPvYFv29DMbGqHaEpND17hlGYYgIhAMZ1SJmLy2Egi%2FKbiYB2xbs7VPKTO7nWvJPbdrGR04MbKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzmQ63KYDI25uSdEQq3AMsGRQ06c06t0btrGpofFHFK9qUuKAZrSUestyFKQKEcfVh6VcuLXq7WzRPz4jy6yggUoRSzZ9jDHQgPyu9CC1NcgghMZqWxNNVPJ7e2Jwk3sxzcmbobRE7oGrMXHsBhP125JgUR%2FrmlFdRx6BA%2FE8b%2FnoqcRjdt49xMGXbttWAC9EDoLAkDCA3G%2F3ZXojKAFJec9f2yurP8%2B51RTZ%2B%2FV9ij4Wr5hnVfRiWKKb2kil858v7xrkrqfZtwtqFE2aetCJLIiZjILoRIspA6QBgKvy99MDoJsIut7U77%2BBHDiRse2%2Bykmg1UlUtFWTfeOW%2F%2FfiKdVmC%2F1tXVd%2BqYL9ypwGWU3p4HT5RctXS%2B72Sg0z4Yff2wHMS8UKDYWS%2B7NCz8yDdQXAzMAmU3Z4zSWIIZ1ulpX2jZf%2B9FGQMP1OplXE7xg3fDHsBWuJhb8yZWDod68X3KgA5hmXiORVt%2FVYgDYYJ2W1TwBNJ%2FaXpDZ4ABCWT%2BtVA7MHv2rkvgXckRNQHN%2Br6L2ZQZVEAjKnfEyTNW5ZA66HjXMXwTlLHcV56wHTd2IPy6A9HFW%2B9fHbfTC7e523xY2b2WFuBmPF9z4iJADb5VXVMq64m8GqZpUMYHwY%2BG4bgUPUY4Sx0PYFPlzDKscK%2BBjqkARpNu64dAwBeR%2FW2D3lWbhlxU%2BytJqIKsA0Ko0fhafHfqtmlUpzR5tv1bVTEL%2FsE2QqvNFJ2I36aN%2FT3gz0OFI1LqF1XCiwaqiGpzntEtwpuaqkUmRiONJM69SP8YhlmUkoV7ipLycXff4pknsqqqWq82NHRe7EISub%2FtN6NB1WpgYORHCcJde3z%2Bj5Z9%2FXPph5JQLOrkbozfjoej52ZS4W7OHF3&X-Amz-Signature=bfd00ffbff5dc321fc5d67dbe2a03fce4d8a195e91e4791b7800c16e08ed48a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNYLW6A%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDiOyB%2FeGeUQ%2BudMnklPvYFv29DMbGqHaEpND17hlGYYgIhAMZ1SJmLy2Egi%2FKbiYB2xbs7VPKTO7nWvJPbdrGR04MbKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzmQ63KYDI25uSdEQq3AMsGRQ06c06t0btrGpofFHFK9qUuKAZrSUestyFKQKEcfVh6VcuLXq7WzRPz4jy6yggUoRSzZ9jDHQgPyu9CC1NcgghMZqWxNNVPJ7e2Jwk3sxzcmbobRE7oGrMXHsBhP125JgUR%2FrmlFdRx6BA%2FE8b%2FnoqcRjdt49xMGXbttWAC9EDoLAkDCA3G%2F3ZXojKAFJec9f2yurP8%2B51RTZ%2B%2FV9ij4Wr5hnVfRiWKKb2kil858v7xrkrqfZtwtqFE2aetCJLIiZjILoRIspA6QBgKvy99MDoJsIut7U77%2BBHDiRse2%2Bykmg1UlUtFWTfeOW%2F%2FfiKdVmC%2F1tXVd%2BqYL9ypwGWU3p4HT5RctXS%2B72Sg0z4Yff2wHMS8UKDYWS%2B7NCz8yDdQXAzMAmU3Z4zSWIIZ1ulpX2jZf%2B9FGQMP1OplXE7xg3fDHsBWuJhb8yZWDod68X3KgA5hmXiORVt%2FVYgDYYJ2W1TwBNJ%2FaXpDZ4ABCWT%2BtVA7MHv2rkvgXckRNQHN%2Br6L2ZQZVEAjKnfEyTNW5ZA66HjXMXwTlLHcV56wHTd2IPy6A9HFW%2B9fHbfTC7e523xY2b2WFuBmPF9z4iJADb5VXVMq64m8GqZpUMYHwY%2BG4bgUPUY4Sx0PYFPlzDKscK%2BBjqkARpNu64dAwBeR%2FW2D3lWbhlxU%2BytJqIKsA0Ko0fhafHfqtmlUpzR5tv1bVTEL%2FsE2QqvNFJ2I36aN%2FT3gz0OFI1LqF1XCiwaqiGpzntEtwpuaqkUmRiONJM69SP8YhlmUkoV7ipLycXff4pknsqqqWq82NHRe7EISub%2FtN6NB1WpgYORHCcJde3z%2Bj5Z9%2FXPph5JQLOrkbozfjoej52ZS4W7OHF3&X-Amz-Signature=74ea95fe848de18bd4fd888588534c54cc5c9e887c3c48c3c91aa60e38a7606e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
