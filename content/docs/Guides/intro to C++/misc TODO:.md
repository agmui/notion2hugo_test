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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DKNDM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNvn7bE2jtyU56aIuL5U5406VPQD6RlcGUa%2FkQVOXjbAiBk3u5dW%2B5Vxv9uPtqeMKGkq6VNlEoTfuIplkJbWmIGwyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvHsmJ94hxiUG%2F1QKtwDVF4PKywzVwVxLhTP2ly%2FA0WD9wRfh9YvLK2X3aeULRcG0g5xsWOq%2Fn6HS1%2ByRu7ivbTuuJAxR5fbQXCCAJqBYXBpvJj8IhBSP94mNCaYzDvTFBJDk%2BCpWkuZ4oIRahp8fARpKMOZiTm2PdWDhGi9tvGKzUi%2BfU%2FeG8lGvufG1G34NVIdCf4DTrefE70Z29maXVAMU85JY4BhzpHMFsR0NrZDPzlow6wfIssrjzvBF6tt2%2FUeLXI%2BmabD%2FZLnY9o%2ByTZd69i94kED%2Fmy99QobHty3n6GyVjyGmOb97gfvakFv%2BUpq5eqKd8q16cJyfTqmN4O18mprMkMvPjvJ%2BRa26wPC2iB%2Bahgc1M1DXVtd2pDV443ilk5f0t%2B3Hj9ayzNrfo32KvV2DICqTl6ZAQiPjqOQpI8qQun%2BmI9fPinDYr46OXIz%2B1IUz7M4r%2Fy1j25NaZHRxtweLqlyqbpXu2jWb%2FDUhutjGdl2a6xdrGQlZ9KwowbknCXAnkKCBhC%2FMfy6WqYB9NsIcyI3heEgd0GHOJ48yWonMnTNhETweFOhdGYiU2lsV5GBC18mgi3qsUSKcly5JIECjzTGiE1pYrAb6RsE3vdknoAUnJo2QrkfQiXd0r3MXYVTC6D4GkkwxvjrwwY6pgHg8VWtMVjCrxvb9itSxHwmfnRWINe3S6S6OKfsDwOWqswzuVSPTKB6P%2FTc%2BLmV8%2FArxLsQokbZETKTlDylfHHMs7co88onVjd%2FP3%2B8zOBf5NVp5H5Z9wYX6OQ8ESVydCucvtNGsM1aeSEtFPCILlI3i08F0YRIAK0uQLVd3B7hqj9aBQDxJbYXT7p7ww9%2BUJIK18UdbI%2FP2u%2FsX2f5YR9u9GRtrFI8&X-Amz-Signature=4af349648ea6dfebe1ff321a7813940397632ebdbaaa8ffb48e447d6774f89e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DKNDM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNvn7bE2jtyU56aIuL5U5406VPQD6RlcGUa%2FkQVOXjbAiBk3u5dW%2B5Vxv9uPtqeMKGkq6VNlEoTfuIplkJbWmIGwyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvHsmJ94hxiUG%2F1QKtwDVF4PKywzVwVxLhTP2ly%2FA0WD9wRfh9YvLK2X3aeULRcG0g5xsWOq%2Fn6HS1%2ByRu7ivbTuuJAxR5fbQXCCAJqBYXBpvJj8IhBSP94mNCaYzDvTFBJDk%2BCpWkuZ4oIRahp8fARpKMOZiTm2PdWDhGi9tvGKzUi%2BfU%2FeG8lGvufG1G34NVIdCf4DTrefE70Z29maXVAMU85JY4BhzpHMFsR0NrZDPzlow6wfIssrjzvBF6tt2%2FUeLXI%2BmabD%2FZLnY9o%2ByTZd69i94kED%2Fmy99QobHty3n6GyVjyGmOb97gfvakFv%2BUpq5eqKd8q16cJyfTqmN4O18mprMkMvPjvJ%2BRa26wPC2iB%2Bahgc1M1DXVtd2pDV443ilk5f0t%2B3Hj9ayzNrfo32KvV2DICqTl6ZAQiPjqOQpI8qQun%2BmI9fPinDYr46OXIz%2B1IUz7M4r%2Fy1j25NaZHRxtweLqlyqbpXu2jWb%2FDUhutjGdl2a6xdrGQlZ9KwowbknCXAnkKCBhC%2FMfy6WqYB9NsIcyI3heEgd0GHOJ48yWonMnTNhETweFOhdGYiU2lsV5GBC18mgi3qsUSKcly5JIECjzTGiE1pYrAb6RsE3vdknoAUnJo2QrkfQiXd0r3MXYVTC6D4GkkwxvjrwwY6pgHg8VWtMVjCrxvb9itSxHwmfnRWINe3S6S6OKfsDwOWqswzuVSPTKB6P%2FTc%2BLmV8%2FArxLsQokbZETKTlDylfHHMs7co88onVjd%2FP3%2B8zOBf5NVp5H5Z9wYX6OQ8ESVydCucvtNGsM1aeSEtFPCILlI3i08F0YRIAK0uQLVd3B7hqj9aBQDxJbYXT7p7ww9%2BUJIK18UdbI%2FP2u%2FsX2f5YR9u9GRtrFI8&X-Amz-Signature=c6479314596c05f5b3c5b1ad6842df5f60f5ed1f404787e395b4fd5a21995222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
