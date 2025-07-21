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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5YBIJB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oJI4fLDAFy%2FQ1N%2FrOodYT0G27RomAPftfeAcVlchBAiEA7SdeTMeXoTjYlOmpiXRf9R%2BB0t%2BhaeAEZ%2BP0q1HibjoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyHsOg7clri6eQ77ircA8Vrtoy%2BYP67vNEHWSbiWd1j1VLW7GvaQ5c2eot6pBYuRPxNgo3Wd5nJtwxOx7MxobWviH8rMSkUwBGKUZHtgwtVSEogfWY1D2Ls9kl5Ta3NS0Cb4w0prkamPqxtclhqEmBGUG3mBZL1gF%2Fb65yudhjKXtTwEYLn9dM4IBiDPE25MR%2Bua5hXyuKEbvv2Q2EJ8nfzfe4vkSpVy927Xkea01DQ0jT6Ul9eZahqmWD6MIySBbYeyuELbvplk130BnkqXsNw9IbcBbStH4Eou2ui%2F77lf6ZIxS1ZnzFl3suHz%2FtfiBQAM2r%2FSgJkgQBA3i7CT%2FIyQEmXa2EE9%2FdpniKuq9e%2B9AGyQ%2BJUqhZP9Dch9sz1CxNVnA8318cgS4zg2cLfrJoBLN0xvOwWy3GVB8z%2FmvHkgjxg4Oww9709a7lGByG8iDXOTnHQicbYTxPXMP6ujtu34rlK5HSC1Zj9XaGs3l2cHEnzX9PunFJ8gAXPgGg8M36rIhVKcUJ8pgeOuaCiKF4R2Y7Z6YyJIIrA1lyXXcHObqlXc%2BGQ2w%2FTu8YNqL%2BiRfS5oag1EUSGKOspeg1503IQAaE5uVuOMxps6TDoqdWalhaUUgouBlKH5yvERWwCcPBP2y2fQ1J4SPIbMJzH9sMGOqUBIb4Yq1rfKSfP05uaYlubQOxKZau2OoeCQcigg8aVf2D0GpWu5hNfyX%2FsllBcpZjsOF57muuiQJKd%2Bk1qUfgzxqsvnctJYh3sM1x4vpKzRhBDYo2MQXzUfqE%2FR7wZDGOeq5UwAujTefitLykYRYwOBn6bDZv3IiaPrYxXKVgnGVRNtxsRC%2FmTbCMs2D4uDBuwP3KCNIDq5gjV2nPLsc4vdwrFzdwQ&X-Amz-Signature=640703834321652be57c7dc6ba030b57308a42d32358d4a56855fb6580229ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5YBIJB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oJI4fLDAFy%2FQ1N%2FrOodYT0G27RomAPftfeAcVlchBAiEA7SdeTMeXoTjYlOmpiXRf9R%2BB0t%2BhaeAEZ%2BP0q1HibjoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyHsOg7clri6eQ77ircA8Vrtoy%2BYP67vNEHWSbiWd1j1VLW7GvaQ5c2eot6pBYuRPxNgo3Wd5nJtwxOx7MxobWviH8rMSkUwBGKUZHtgwtVSEogfWY1D2Ls9kl5Ta3NS0Cb4w0prkamPqxtclhqEmBGUG3mBZL1gF%2Fb65yudhjKXtTwEYLn9dM4IBiDPE25MR%2Bua5hXyuKEbvv2Q2EJ8nfzfe4vkSpVy927Xkea01DQ0jT6Ul9eZahqmWD6MIySBbYeyuELbvplk130BnkqXsNw9IbcBbStH4Eou2ui%2F77lf6ZIxS1ZnzFl3suHz%2FtfiBQAM2r%2FSgJkgQBA3i7CT%2FIyQEmXa2EE9%2FdpniKuq9e%2B9AGyQ%2BJUqhZP9Dch9sz1CxNVnA8318cgS4zg2cLfrJoBLN0xvOwWy3GVB8z%2FmvHkgjxg4Oww9709a7lGByG8iDXOTnHQicbYTxPXMP6ujtu34rlK5HSC1Zj9XaGs3l2cHEnzX9PunFJ8gAXPgGg8M36rIhVKcUJ8pgeOuaCiKF4R2Y7Z6YyJIIrA1lyXXcHObqlXc%2BGQ2w%2FTu8YNqL%2BiRfS5oag1EUSGKOspeg1503IQAaE5uVuOMxps6TDoqdWalhaUUgouBlKH5yvERWwCcPBP2y2fQ1J4SPIbMJzH9sMGOqUBIb4Yq1rfKSfP05uaYlubQOxKZau2OoeCQcigg8aVf2D0GpWu5hNfyX%2FsllBcpZjsOF57muuiQJKd%2Bk1qUfgzxqsvnctJYh3sM1x4vpKzRhBDYo2MQXzUfqE%2FR7wZDGOeq5UwAujTefitLykYRYwOBn6bDZv3IiaPrYxXKVgnGVRNtxsRC%2FmTbCMs2D4uDBuwP3KCNIDq5gjV2nPLsc4vdwrFzdwQ&X-Amz-Signature=4380f18fe4f46cd1fbf08d7394bd63279264975583740c25d51dfe0ea4e0b6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
