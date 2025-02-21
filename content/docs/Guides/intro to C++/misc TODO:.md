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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVHGN7E%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkW146LlaM8rSb3YfbrpxKUjbfVfuQeoxO7MD8ejnyeAiAJZ217zoaJU0mjytu27MLJovZUXWmuxz3tYFdKbablbiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnmlLdxv1%2FbTWalSKtwDh2X5RZQ9IgOoudB3Apva1lOIWd%2BeAPJMrPKdu%2BYVS18dH1YqErEz5aSbzi8tixyfU4%2B4aPIKjPEF4xfygJhsQZxC%2BIdFymy3qHwe40dt48bqCAAUdwx3DlVRkmiA6j9%2BW1nOcDRDNcm9ub5opi4rV9EqHfvKwnKL4fLPZnQLJCmk%2FxJ47Gf%2BWXSLNhNRddi3oanwmRWBsauWfj1O1CvfqdZe0xnScd5MFBxqYO0pcM0WRukQ2oZ19yGIDEGecZeM61O0GFsZmtBVrqZ8Gro2iKa7WaaqSwyPwV8TqMSBYQtYjATcdORQIlL0Ixrk9THv2MHYDSBs2KL2Phc4I8SomxG8QLYboE%2Bf4swyz6uYkdaGYZInQ8toyjDDB8dUTakivm3Y5p1YvG6hHysv81epr%2F%2FGtsmf9Bws%2FeNGGTldGg6f2pk5XIeES8c2lQaOX1qd2xauxP59qH6ggUuOJSPyswofPZN0UtKot%2Fo2wYt0YB27l13Lo8x2aCYH8vL1krFijW4uScKoaIkC8zyRnPp3LKOg2HiNCIdl8mDi8w2iOO7e0DLnxvqN6zv0qxduxh41tgFarphv7RPo6rmnAmsOcsHhQMYBcqQ1slX%2FHCYouhYBNb32eHFTBlIsMBgwqL7ivQY6pgHPGasC2p69jUzJQy4WhtU8QBtyoURmt46Jzmm5a%2BNrEu6%2BVzcFr0xfmhe%2B0j700FhnT%2BzrD%2Few2GTPlLwGjr0yaXepXVgefDMe5VDe43CjDwEFTiamQ1wQEbzh8DphEbAHj6UAu7IVJMBOG9xXu%2BdHysstwn%2Bb8a3W4qV8bL%2F6IhgMBuMKY2xfeFAOZCjf31RItDq1bDkv75qVKBlHl%2BBHDy%2F5w05r&X-Amz-Signature=f7e1bf0940552ed346d4d98d5590af0a7f66d9ffd83d5911ed881208c389f247&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVHGN7E%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkW146LlaM8rSb3YfbrpxKUjbfVfuQeoxO7MD8ejnyeAiAJZ217zoaJU0mjytu27MLJovZUXWmuxz3tYFdKbablbiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnmlLdxv1%2FbTWalSKtwDh2X5RZQ9IgOoudB3Apva1lOIWd%2BeAPJMrPKdu%2BYVS18dH1YqErEz5aSbzi8tixyfU4%2B4aPIKjPEF4xfygJhsQZxC%2BIdFymy3qHwe40dt48bqCAAUdwx3DlVRkmiA6j9%2BW1nOcDRDNcm9ub5opi4rV9EqHfvKwnKL4fLPZnQLJCmk%2FxJ47Gf%2BWXSLNhNRddi3oanwmRWBsauWfj1O1CvfqdZe0xnScd5MFBxqYO0pcM0WRukQ2oZ19yGIDEGecZeM61O0GFsZmtBVrqZ8Gro2iKa7WaaqSwyPwV8TqMSBYQtYjATcdORQIlL0Ixrk9THv2MHYDSBs2KL2Phc4I8SomxG8QLYboE%2Bf4swyz6uYkdaGYZInQ8toyjDDB8dUTakivm3Y5p1YvG6hHysv81epr%2F%2FGtsmf9Bws%2FeNGGTldGg6f2pk5XIeES8c2lQaOX1qd2xauxP59qH6ggUuOJSPyswofPZN0UtKot%2Fo2wYt0YB27l13Lo8x2aCYH8vL1krFijW4uScKoaIkC8zyRnPp3LKOg2HiNCIdl8mDi8w2iOO7e0DLnxvqN6zv0qxduxh41tgFarphv7RPo6rmnAmsOcsHhQMYBcqQ1slX%2FHCYouhYBNb32eHFTBlIsMBgwqL7ivQY6pgHPGasC2p69jUzJQy4WhtU8QBtyoURmt46Jzmm5a%2BNrEu6%2BVzcFr0xfmhe%2B0j700FhnT%2BzrD%2Few2GTPlLwGjr0yaXepXVgefDMe5VDe43CjDwEFTiamQ1wQEbzh8DphEbAHj6UAu7IVJMBOG9xXu%2BdHysstwn%2Bb8a3W4qV8bL%2F6IhgMBuMKY2xfeFAOZCjf31RItDq1bDkv75qVKBlHl%2BBHDy%2F5w05r&X-Amz-Signature=7925b2ea8704dcab95af1cccc73c1820c165c7f72a99e9e34cb722e2aa3d1cba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
