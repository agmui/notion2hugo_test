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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZJ7LV5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR%2ByT9sIQjX6ak5cAGBlFa2Obp4sGdoulasnvegR2fMAiA4DIDTxzpHx6z1tUbyH668FCFHtrJpwHEzVdPIQuBlTiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzkkrxScJ4uxKjAqTKtwD%2FkdFlvI%2ByBGhLa6hw1U5Tk28R3PqF5ycy3Vew1xVyBM4ue1smxsO9cW4NNxgKKfGri9ZFFl7V2Vhel972qwvV7tYSXxqOxnRP1%2Ff%2FqhossMORr6%2BrWKz79DpCpgEWapXB%2FJhmo9YTeajocGa%2FybBGj8y%2BRmn0EluSVKlzXmmKuT681dab9weVprrMcoIQ3G1J8NrjsvpaJ5azw3JfsRgTMTpiXEhypSAGOkahonOK9I5UmbJQz1zehAsxXmZGJQnNjqN%2FjO2lVB95F%2BFTgXqY2eN5FKRRW7yFtmZGkOb60IJomDyRkngNDiTDvx3G8nnVUZaRFFjPSNK%2FPPjLfYm8bDNZ44iysY4%2B3cnR14cxTfAlNurJnDLL1vFV%2B3w%2BlaX2hv0NC8z0fpbeq%2BWOjsugoX1SQC0m46Dv1CeCrLZNr9RVytGOyCpf2M80G7HuGvZIVvJlhqnOJ%2FIQwaGhU9IfvI5L6rq3Sy6FrLD1DfsRiBHR8CxtJ6sgugUsZm46lTTmMwHtirJP%2FfirsAdIV7T6g07NSGnj%2F%2FyLbRrmbg4Fzib%2FggKtJzh0%2FA8n92rx4A37zLzv3eJWEqBrGxYYz2HNpWdTlLb1kFW8OymBmfeELrlGBLW1%2F168TyFd5Ew4cyAwwY6pgGIgJM9RRV9W6Fh4lgo4u2%2BabI%2BDaL6YR8FTrtctl3lTY3WOfDoaTjsFwnIdJtXiWa%2F0E%2FUpoxg2MEQWkSlSLqevEGyP%2Fm0TwFmqTnrgxtLu6OBGQHMXAblI5O8Qz4h%2BSCNceRNb0hxrH4t5UgjCPe8ZhY9Se%2FGo4Rj7tZJoI09jSnYPghsKeCP3Mf1N52wPvAFFmWU8xxDH4NQVvyIK3cREbUcSrgX&X-Amz-Signature=63e76db5890d2ba83e0754975e0ad5a09aca7453d0357e96895b7625771c2fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZJ7LV5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR%2ByT9sIQjX6ak5cAGBlFa2Obp4sGdoulasnvegR2fMAiA4DIDTxzpHx6z1tUbyH668FCFHtrJpwHEzVdPIQuBlTiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzkkrxScJ4uxKjAqTKtwD%2FkdFlvI%2ByBGhLa6hw1U5Tk28R3PqF5ycy3Vew1xVyBM4ue1smxsO9cW4NNxgKKfGri9ZFFl7V2Vhel972qwvV7tYSXxqOxnRP1%2Ff%2FqhossMORr6%2BrWKz79DpCpgEWapXB%2FJhmo9YTeajocGa%2FybBGj8y%2BRmn0EluSVKlzXmmKuT681dab9weVprrMcoIQ3G1J8NrjsvpaJ5azw3JfsRgTMTpiXEhypSAGOkahonOK9I5UmbJQz1zehAsxXmZGJQnNjqN%2FjO2lVB95F%2BFTgXqY2eN5FKRRW7yFtmZGkOb60IJomDyRkngNDiTDvx3G8nnVUZaRFFjPSNK%2FPPjLfYm8bDNZ44iysY4%2B3cnR14cxTfAlNurJnDLL1vFV%2B3w%2BlaX2hv0NC8z0fpbeq%2BWOjsugoX1SQC0m46Dv1CeCrLZNr9RVytGOyCpf2M80G7HuGvZIVvJlhqnOJ%2FIQwaGhU9IfvI5L6rq3Sy6FrLD1DfsRiBHR8CxtJ6sgugUsZm46lTTmMwHtirJP%2FfirsAdIV7T6g07NSGnj%2F%2FyLbRrmbg4Fzib%2FggKtJzh0%2FA8n92rx4A37zLzv3eJWEqBrGxYYz2HNpWdTlLb1kFW8OymBmfeELrlGBLW1%2F168TyFd5Ew4cyAwwY6pgGIgJM9RRV9W6Fh4lgo4u2%2BabI%2BDaL6YR8FTrtctl3lTY3WOfDoaTjsFwnIdJtXiWa%2F0E%2FUpoxg2MEQWkSlSLqevEGyP%2Fm0TwFmqTnrgxtLu6OBGQHMXAblI5O8Qz4h%2BSCNceRNb0hxrH4t5UgjCPe8ZhY9Se%2FGo4Rj7tZJoI09jSnYPghsKeCP3Mf1N52wPvAFFmWU8xxDH4NQVvyIK3cREbUcSrgX&X-Amz-Signature=5fcd15929e2fcbe6e56eec3284a242460bc78d564a91b366f1f48c6c900f919f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
