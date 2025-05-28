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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQDG7CN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6uvaTlX%2Bbs3gV4YxVuduSCGVqU5c8Wj31dkDZQuKMUgIgLPBjBBYOFToImGT7pTjhiG15S9%2F91uNuZzF5bU3NJF4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZxDeN7fzk4Gf%2Fx%2BircA1DiBaLYVEz%2BrUQmys%2BHV%2FvLS5pMLN5lQeKIu1dmbzxJEB6U9scnL99eIKWWRpaIUtveUxlVEHNtPGZs14m9Va0%2F21mLjU6ov11rYXBiqlySVF6%2BDRF%2FPH5XZ3YuMMSESdXxt8fatibMWqZJU6ROW2Btxi%2F2p1%2Fq8ECwP%2Bf2MvzEyBwJ6ScPGvGOvZ6b3Fy33owZRvntsCKns5ovqX7OzQAct8LKv95HaH33j3Jokie34yYxlqjtyVsm1doZwofWgp1li9xXbLvXFy5Zd5fg2vEAfQa0WZ9CSnCcIw6ylqXxy3AoxkxIjBbpAyW6TLsNQpKssnmxvfjlP1Q74IrEkkbiwHnl%2F0M0dC2JxRW%2BW%2FMHO8dz1Jq2pMToScZNVO2HME1qHQDDmAg6UW6D2ruRuvrANRBEk6zAYzgshUIyuRb%2Bpp5c2x7qN%2BMoYQf0RdhqjFSF1y3MpRMA1qbqg0CMTFuGkMVaP3WGeFLdDdOmqKe6Kw0F5qOJ0uAP%2FR4qqW97u65vJOrQGV5auuej2dZIcPuTUKMqUnp4o5%2FGrbsBwLSyeQyZNgSER0re86q2%2BgmE4OK7yje0Z4GD7UOnKuTGFPqjsj2sNhoQnCuPwer8ALcvw4%2Bs3Gb2MzRED%2BXBMIDm3cEGOqUBxLyMg9EKGnTaoPxDDgd9O0ts%2FZcgUElgEndI6Z%2F4fS54Vuo0kMpj62mnjxVUJeuXcOYQprOtufHHa137UDqOyAtydaYIo6z6Yj%2BkXf3XWJ3oEbqVbc7W3Nkm668DEcR3OsREV3U5Qam3jEZUsh1dsuAtPyEFTVJlKvd2WqfU8s5y%2B56Nsp9V7S9lrwJ4n6N5C7rn9uXt4YCU27Z6GFXqX4AVb51w&X-Amz-Signature=2ffbe5d5346fb7f3c5f6cf3e9134b85a11bbc8f33eb36ce53f12a3743f68f914&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQDG7CN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6uvaTlX%2Bbs3gV4YxVuduSCGVqU5c8Wj31dkDZQuKMUgIgLPBjBBYOFToImGT7pTjhiG15S9%2F91uNuZzF5bU3NJF4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZxDeN7fzk4Gf%2Fx%2BircA1DiBaLYVEz%2BrUQmys%2BHV%2FvLS5pMLN5lQeKIu1dmbzxJEB6U9scnL99eIKWWRpaIUtveUxlVEHNtPGZs14m9Va0%2F21mLjU6ov11rYXBiqlySVF6%2BDRF%2FPH5XZ3YuMMSESdXxt8fatibMWqZJU6ROW2Btxi%2F2p1%2Fq8ECwP%2Bf2MvzEyBwJ6ScPGvGOvZ6b3Fy33owZRvntsCKns5ovqX7OzQAct8LKv95HaH33j3Jokie34yYxlqjtyVsm1doZwofWgp1li9xXbLvXFy5Zd5fg2vEAfQa0WZ9CSnCcIw6ylqXxy3AoxkxIjBbpAyW6TLsNQpKssnmxvfjlP1Q74IrEkkbiwHnl%2F0M0dC2JxRW%2BW%2FMHO8dz1Jq2pMToScZNVO2HME1qHQDDmAg6UW6D2ruRuvrANRBEk6zAYzgshUIyuRb%2Bpp5c2x7qN%2BMoYQf0RdhqjFSF1y3MpRMA1qbqg0CMTFuGkMVaP3WGeFLdDdOmqKe6Kw0F5qOJ0uAP%2FR4qqW97u65vJOrQGV5auuej2dZIcPuTUKMqUnp4o5%2FGrbsBwLSyeQyZNgSER0re86q2%2BgmE4OK7yje0Z4GD7UOnKuTGFPqjsj2sNhoQnCuPwer8ALcvw4%2Bs3Gb2MzRED%2BXBMIDm3cEGOqUBxLyMg9EKGnTaoPxDDgd9O0ts%2FZcgUElgEndI6Z%2F4fS54Vuo0kMpj62mnjxVUJeuXcOYQprOtufHHa137UDqOyAtydaYIo6z6Yj%2BkXf3XWJ3oEbqVbc7W3Nkm668DEcR3OsREV3U5Qam3jEZUsh1dsuAtPyEFTVJlKvd2WqfU8s5y%2B56Nsp9V7S9lrwJ4n6N5C7rn9uXt4YCU27Z6GFXqX4AVb51w&X-Amz-Signature=9a9438a251d992b0676426b62e2d27b81c6a9654b5fc5b0d2c33ed195b5500b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
