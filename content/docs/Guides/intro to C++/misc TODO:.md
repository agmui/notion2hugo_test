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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFRRP6I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRdaY9WbWtg2Xp5KcqTFZgQV8ZQ5CiYg7%2BTH6%2FBdpOZAiAT6WnypTbOroSYShxdyo%2B%2FiNCQ88qXN%2BQydpkIbGPZkSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuZxjEh5HC8OZuzBKtwDxlVVGKX2TcDJfvP04FgvPLnyr%2BM%2Fx%2FmfhKAZohd9LIrm8HDW23ypxvaZqpxdbIL%2FgjPKtpWOmjQbINunyjJq7tB%2F5PK0dOy7GDosPZedREeaN67qwTN2fV2P5kLjT16l59B1PO%2BpY4jWR3OK0ieeaUPAQRt6f01m6k%2BQ2o7kKfVEpsRdPr9I45IY2z5sh%2FjGrm0eQOTwnojvAJ3CHXGHO8EjE1BPp64cLyqyfmaJ3cNdOCGCbd3u12gzbF9OJiDcE2EgorxPqNJD1sunmQ%2BykbOkglivYRtu3FEiVfMtt6%2BbIWPvNMEHkIlHnGP05jHhlDKAt6jV9uRDfTzTTpnKZ0OS%2Fh7s9HIhTJYZiXbWwCV0FFcnY09vA8Lnsxbpf4QpsH%2BLiwe%2BAmdvJE1tTJgSeAQJZKhtjVsbhL2%2BhLIiajk56ar8LXJ4no6ZRVq8pQ45j1xxgCwA%2BT5bejkIads6t5gqTxl%2BIwK%2Fa52X7Oq3fapeSznXcg7UrwP1MxS5Vx05lz%2B9BaEJ6rP7h107Bva9YCxQu%2FQ5psSq8tNULceCZma4Ork1dNA6XFacppIYzPSuBNg0Lo82%2FU04kaFJoCvbKQv5LFeWAuSkMHmA%2BeXpvzETotn44gTuuASBTRcwpcW6wwY6pgHj0y5CRYhGp2KCe2reSvp4JrI2AvnR7uUk8TfZ%2FNVN2MfuF3xROn4IuEK91Xjv%2FQdt%2BhILyebh%2B8wogBsMmpUKFRItRT%2B5eRoXji%2Ftc2noFCs70GI1TiopzlyqramDQwqixu975MISzxl0HMnY4w73PkZrpC%2Fi3L4mw2Cwd6vUtDg1pscbFOZr%2FxtF6SzzeGi5cwbjCRUk%2F%2Bd4gNt%2F7HUi2trVPP0M&X-Amz-Signature=c0f9c840f1db9572fa26b2adaa32733ef446f758e8848a55fd50f0ce233a2fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFRRP6I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRdaY9WbWtg2Xp5KcqTFZgQV8ZQ5CiYg7%2BTH6%2FBdpOZAiAT6WnypTbOroSYShxdyo%2B%2FiNCQ88qXN%2BQydpkIbGPZkSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuZxjEh5HC8OZuzBKtwDxlVVGKX2TcDJfvP04FgvPLnyr%2BM%2Fx%2FmfhKAZohd9LIrm8HDW23ypxvaZqpxdbIL%2FgjPKtpWOmjQbINunyjJq7tB%2F5PK0dOy7GDosPZedREeaN67qwTN2fV2P5kLjT16l59B1PO%2BpY4jWR3OK0ieeaUPAQRt6f01m6k%2BQ2o7kKfVEpsRdPr9I45IY2z5sh%2FjGrm0eQOTwnojvAJ3CHXGHO8EjE1BPp64cLyqyfmaJ3cNdOCGCbd3u12gzbF9OJiDcE2EgorxPqNJD1sunmQ%2BykbOkglivYRtu3FEiVfMtt6%2BbIWPvNMEHkIlHnGP05jHhlDKAt6jV9uRDfTzTTpnKZ0OS%2Fh7s9HIhTJYZiXbWwCV0FFcnY09vA8Lnsxbpf4QpsH%2BLiwe%2BAmdvJE1tTJgSeAQJZKhtjVsbhL2%2BhLIiajk56ar8LXJ4no6ZRVq8pQ45j1xxgCwA%2BT5bejkIads6t5gqTxl%2BIwK%2Fa52X7Oq3fapeSznXcg7UrwP1MxS5Vx05lz%2B9BaEJ6rP7h107Bva9YCxQu%2FQ5psSq8tNULceCZma4Ork1dNA6XFacppIYzPSuBNg0Lo82%2FU04kaFJoCvbKQv5LFeWAuSkMHmA%2BeXpvzETotn44gTuuASBTRcwpcW6wwY6pgHj0y5CRYhGp2KCe2reSvp4JrI2AvnR7uUk8TfZ%2FNVN2MfuF3xROn4IuEK91Xjv%2FQdt%2BhILyebh%2B8wogBsMmpUKFRItRT%2B5eRoXji%2Ftc2noFCs70GI1TiopzlyqramDQwqixu975MISzxl0HMnY4w73PkZrpC%2Fi3L4mw2Cwd6vUtDg1pscbFOZr%2FxtF6SzzeGi5cwbjCRUk%2F%2Bd4gNt%2F7HUi2trVPP0M&X-Amz-Signature=a229b5385acab6687d73bb11b9c21f6c4a4798fe166ca409cca9e21cd69f0755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
