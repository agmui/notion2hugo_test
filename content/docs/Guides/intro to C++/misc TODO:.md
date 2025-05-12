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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3TONCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDbZAXNLYyPojoHzjc2J37j2eluRr1rFm8fqie%2F3iYQowIgBpYuXyHxunm3piD8KVCFc4ekE9BYNqcnG8znS%2BriZ30qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW3y6yDdy%2Fkzwh40ircA46mJ7GxiAXCcJ78XxG6wiDNfHPH%2FSH1AFQAlzcu07KY8JZJrFotnKrzI7hJDxJ%2BLPp%2F47STHc9%2Fr3znI6873fGvmYyckTXKtlbOpXKB%2FCE4wuR%2BYZVM8e7gkzhWf9d338wCRYMuPkC5KkGmaCwuZjxnUojKBTT7Ba46NrGiJmZMglcxyulN5mvAFdIS4Ik1HTp%2FjPgpQxyaeKrGV3xT8RbNE9t%2BEeNglBJ%2F7GkKQrui9ljD7QF%2FwlJb25rewjC5RrsiEg1TEgkx4jJG17VqakYQDKA%2Fe22B9G7yBce%2BV6qWrbFXdjYh3ht8pP9Wq%2BdAi4Zf6rP1a4X98sirkJ8%2FhogECYMu7UweH8bZNbO23jkjazonbTY%2Fbs57tS4CDwcjZ2XyBy%2F2%2B4yLgDglAt%2Fn4fm523c%2BgJ2cB2HsjrcDEZO8pDgvno9SoYaK9nx4qnO6Qa5r1fQqYSv4YWBCnubNq3XicTCuVkHbyZlWnrt1T1GS4mUjtDXJd8oSKCkP0108JYuCH4hrChVJc756ybac7QRGfQxMzD1XUyN3M4cocgmGs6VRNNdL0DpUErgewBtFWRug0L4fwzXT1yYviqp7oUrw9YyPn7zspKkKFrHrngO%2F2R80M081jRV91yuMMInQhsEGOqUB%2BPWY7XEP9%2FGJ9oR%2FYjJ8R9YtI9l1yqy0rOsni%2FwJOiLGQ5d22093hvuI7lXFk82Sn94P%2FqWnb7iTcTxWQ%2FPi0o35JRD1gn8B16DJGUXDyL8xe4Tv%2BxCkHTG%2FwifZFIz50HjGWB8lQO0C73XlUBfkoYXKhNJQ%2BoaCP70eElWSk1jW3JdaF7grRhvnqS27mOEkkdWJIyRkUwJtlDnQAXqJqx7bBSQs&X-Amz-Signature=da0ede55249a3efe059a1e4e2856b8ab7b1193010ac8adf761c4d45f9b8e46a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3TONCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDbZAXNLYyPojoHzjc2J37j2eluRr1rFm8fqie%2F3iYQowIgBpYuXyHxunm3piD8KVCFc4ekE9BYNqcnG8znS%2BriZ30qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW3y6yDdy%2Fkzwh40ircA46mJ7GxiAXCcJ78XxG6wiDNfHPH%2FSH1AFQAlzcu07KY8JZJrFotnKrzI7hJDxJ%2BLPp%2F47STHc9%2Fr3znI6873fGvmYyckTXKtlbOpXKB%2FCE4wuR%2BYZVM8e7gkzhWf9d338wCRYMuPkC5KkGmaCwuZjxnUojKBTT7Ba46NrGiJmZMglcxyulN5mvAFdIS4Ik1HTp%2FjPgpQxyaeKrGV3xT8RbNE9t%2BEeNglBJ%2F7GkKQrui9ljD7QF%2FwlJb25rewjC5RrsiEg1TEgkx4jJG17VqakYQDKA%2Fe22B9G7yBce%2BV6qWrbFXdjYh3ht8pP9Wq%2BdAi4Zf6rP1a4X98sirkJ8%2FhogECYMu7UweH8bZNbO23jkjazonbTY%2Fbs57tS4CDwcjZ2XyBy%2F2%2B4yLgDglAt%2Fn4fm523c%2BgJ2cB2HsjrcDEZO8pDgvno9SoYaK9nx4qnO6Qa5r1fQqYSv4YWBCnubNq3XicTCuVkHbyZlWnrt1T1GS4mUjtDXJd8oSKCkP0108JYuCH4hrChVJc756ybac7QRGfQxMzD1XUyN3M4cocgmGs6VRNNdL0DpUErgewBtFWRug0L4fwzXT1yYviqp7oUrw9YyPn7zspKkKFrHrngO%2F2R80M081jRV91yuMMInQhsEGOqUB%2BPWY7XEP9%2FGJ9oR%2FYjJ8R9YtI9l1yqy0rOsni%2FwJOiLGQ5d22093hvuI7lXFk82Sn94P%2FqWnb7iTcTxWQ%2FPi0o35JRD1gn8B16DJGUXDyL8xe4Tv%2BxCkHTG%2FwifZFIz50HjGWB8lQO0C73XlUBfkoYXKhNJQ%2BoaCP70eElWSk1jW3JdaF7grRhvnqS27mOEkkdWJIyRkUwJtlDnQAXqJqx7bBSQs&X-Amz-Signature=de1b3c370038c07014f21359309d7522f2fe3506bdc22d2a38a5f6cc93894e70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
