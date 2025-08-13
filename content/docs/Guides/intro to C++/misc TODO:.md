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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AZKX7J%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYuAdB0BF9ZEqcrc%2FDj%2Fpbja5xrlTiT5vUcJTc0sp%2BSAiBRjqe58StaKeA42R1mEedrWmqVgrdOfAbw%2FZ3nS%2F3waSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMY1iJSaRLOO6GX0iwKtwD25ELONMA46KOrDzOEcnScl%2BGO7hL7lzp5bktJ%2Fk3EH7rHnSnjb7ehKp0%2BTQh%2B0Srj1QTwkNa1l8mWfZvV5x6Iyt%2FofBiMgFyMXJpvyTbJRJP5CGYDf3ubSOsjN%2Fv2zZy7dhFHAfV%2FkgoS1NPv8diElvkKyN1t%2B4VbWQ9vMACD0%2FkKVaKgR2jN8h5OBN%2F63EaGyhSOi8tdDTJ7zBtpwWOZN2YDkw2ZnzDyPVW1nDMWc3LdImuzZH8FKx46FIJBx1v%2FiKIeKzPFX6voFYSt7VPNo9J5KWqlF9%2BEJ37iYrC%2Bzwc%2F5i%2BHOdLcpJ%2FqywuEwe2aBbs6gWEcze%2BZtioBmfAdolDfIZERyE06bPlwM2YCcStDjdURcwEQ%2F37VO1sABO9ZEOP2SekJl3whCqQtJITHlnlO%2Fk1KcBbY1F2vEJ8xf%2FrXuP77nyz%2FlomsnE0u5USc7vC15pL3W7QO0l0UVZfYF%2FngwIOGpGXDdxTS0qidMkx3jB6k0hRIlJ9iZNk9rYLpNGZbhLcNBlUS7PM77a2KXYsMFZzroSdHcZkIEMhfyStTQ%2BAMrsGgl2WD5n8%2FLtdHdC3bL5l6gt0HTrBE%2FmgmAQItZXWYqLm%2B43wTtX7MABunSOigE5GvecLn2kw3fnwxAY6pgF6C0bG7amdCOc47l9ebd4KlKXpL5DhfrSn9Tbt7M6gsjw3KpfMbcM8rBIU7rkYJiR7aqj9IkAeuNLMMLFbOCa9yfQLAZLxNnNljFuIAZX48nnpyp8TQ5BB95CsWTL%2BtKPvE11637gU7sz%2BvMkGuCCfFPA%2B9oCtZXXwwYa3cHevMSOdN%2F9xboCAE%2BTvZLphJ1kl%2BwSFIRo%2FYBZoykatqzr0dtYuOv68&X-Amz-Signature=c81d5bc98450e1b0638971c331bda614d2740250ca228340af68e5ed78edb6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AZKX7J%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYuAdB0BF9ZEqcrc%2FDj%2Fpbja5xrlTiT5vUcJTc0sp%2BSAiBRjqe58StaKeA42R1mEedrWmqVgrdOfAbw%2FZ3nS%2F3waSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMY1iJSaRLOO6GX0iwKtwD25ELONMA46KOrDzOEcnScl%2BGO7hL7lzp5bktJ%2Fk3EH7rHnSnjb7ehKp0%2BTQh%2B0Srj1QTwkNa1l8mWfZvV5x6Iyt%2FofBiMgFyMXJpvyTbJRJP5CGYDf3ubSOsjN%2Fv2zZy7dhFHAfV%2FkgoS1NPv8diElvkKyN1t%2B4VbWQ9vMACD0%2FkKVaKgR2jN8h5OBN%2F63EaGyhSOi8tdDTJ7zBtpwWOZN2YDkw2ZnzDyPVW1nDMWc3LdImuzZH8FKx46FIJBx1v%2FiKIeKzPFX6voFYSt7VPNo9J5KWqlF9%2BEJ37iYrC%2Bzwc%2F5i%2BHOdLcpJ%2FqywuEwe2aBbs6gWEcze%2BZtioBmfAdolDfIZERyE06bPlwM2YCcStDjdURcwEQ%2F37VO1sABO9ZEOP2SekJl3whCqQtJITHlnlO%2Fk1KcBbY1F2vEJ8xf%2FrXuP77nyz%2FlomsnE0u5USc7vC15pL3W7QO0l0UVZfYF%2FngwIOGpGXDdxTS0qidMkx3jB6k0hRIlJ9iZNk9rYLpNGZbhLcNBlUS7PM77a2KXYsMFZzroSdHcZkIEMhfyStTQ%2BAMrsGgl2WD5n8%2FLtdHdC3bL5l6gt0HTrBE%2FmgmAQItZXWYqLm%2B43wTtX7MABunSOigE5GvecLn2kw3fnwxAY6pgF6C0bG7amdCOc47l9ebd4KlKXpL5DhfrSn9Tbt7M6gsjw3KpfMbcM8rBIU7rkYJiR7aqj9IkAeuNLMMLFbOCa9yfQLAZLxNnNljFuIAZX48nnpyp8TQ5BB95CsWTL%2BtKPvE11637gU7sz%2BvMkGuCCfFPA%2B9oCtZXXwwYa3cHevMSOdN%2F9xboCAE%2BTvZLphJ1kl%2BwSFIRo%2FYBZoykatqzr0dtYuOv68&X-Amz-Signature=15eafedfbec6d4a5d8efafbba7d190a03c692263542903f45496f1e01563da9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
