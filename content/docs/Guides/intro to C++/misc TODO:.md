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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD4TBV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAMNbEfkfLUZFuFu%2BMctcnhj%2F2Ka2g%2FTbpKqHDuAfqyAIhAPph5%2B%2FkzEH4MXC6pSFJD6LKvoij3OBCl53VrF8LS6WeKv8DCFgQABoMNjM3NDIzMTgzODA1IgxL0YIuALbEEunQPAMq3AORzw3sax9WNigHUUBAWER711UxYWaZW3EK1vcer1nt%2BNoOsKfsc2Xl9UIFVg0d62jYhke4fwMPrB2jXbcTJUbtT5Xr%2FXV52pnPfvg0SeB7e25avgklq4%2Fm%2BXjBwNH%2F3UeYm%2FOcjjITRvthlSBneeg%2FtbrJTAPg%2BhGIu%2BwqBmDf94zfpuA8n6WkvbUkVZrDTIVpjaPUtq9omIvupZ3Nno5kP02wEdUMA%2Fg%2BNxIPS5Ci9d%2FKzjMhGjAwwxOVCOmz8yTep9xiTPG%2BvId1NfU23x3ekffsk7elW83PzvBi7IZFyk3iFTT9aBn12BwrYsAHnphAG0c2ycPP5tJV%2FOs2ZutxY5gffeInDoKxLjqWgnoJoFoEXsmXxkOyAz9uklOmcFUbTAZIRooH8jvbqGLDRRIDCBMPH3r6XgvRWsZQ0sEmJlNtLT4e%2BcRTe2bv5B7zq%2BgtJHaHEU6F1IGeA6DzBTLxH6hgYo%2FfElpi7hSwr1hS0Ph%2B%2FwlVlchJ%2FN7A7Yuv6BThB4fEmjcJdRmP9xN2YcU71PgCT8O2BQpI7p%2F%2BuxrbBoSA8Zl9ji5JLI5hUpiA185WPiMHhRFkKqKuyY4IxaT8dzsgpe4qhQspDYvh4Jr3Wh%2B%2BmoNwvITkKqrxfjDJ4aDBBjqkASe8YD%2FhRDcauJ3DjNatlSNUC9TjpgdIiKoj%2FM8JkUAfatbsgl0PNKOEjmVhAO9ge9DCzxM%2B0Z5PJBYrNceL%2FRUWWAwS530wCAyNi71J61tv1Hk5mjRUyeIJWRWEBwZYTotsDxq4TG0lLY3w7%2BgtPFG%2BVT9rpevkYbf%2F3TLdFsceCsUMnczqYgG1%2Bua82YAIIG80KIMe25UaK5h747gdFnrYLoJl&X-Amz-Signature=4e00d965afc2a907e96936233fd2aa38dad3694a77566296b1e7b67828821db0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD4TBV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAMNbEfkfLUZFuFu%2BMctcnhj%2F2Ka2g%2FTbpKqHDuAfqyAIhAPph5%2B%2FkzEH4MXC6pSFJD6LKvoij3OBCl53VrF8LS6WeKv8DCFgQABoMNjM3NDIzMTgzODA1IgxL0YIuALbEEunQPAMq3AORzw3sax9WNigHUUBAWER711UxYWaZW3EK1vcer1nt%2BNoOsKfsc2Xl9UIFVg0d62jYhke4fwMPrB2jXbcTJUbtT5Xr%2FXV52pnPfvg0SeB7e25avgklq4%2Fm%2BXjBwNH%2F3UeYm%2FOcjjITRvthlSBneeg%2FtbrJTAPg%2BhGIu%2BwqBmDf94zfpuA8n6WkvbUkVZrDTIVpjaPUtq9omIvupZ3Nno5kP02wEdUMA%2Fg%2BNxIPS5Ci9d%2FKzjMhGjAwwxOVCOmz8yTep9xiTPG%2BvId1NfU23x3ekffsk7elW83PzvBi7IZFyk3iFTT9aBn12BwrYsAHnphAG0c2ycPP5tJV%2FOs2ZutxY5gffeInDoKxLjqWgnoJoFoEXsmXxkOyAz9uklOmcFUbTAZIRooH8jvbqGLDRRIDCBMPH3r6XgvRWsZQ0sEmJlNtLT4e%2BcRTe2bv5B7zq%2BgtJHaHEU6F1IGeA6DzBTLxH6hgYo%2FfElpi7hSwr1hS0Ph%2B%2FwlVlchJ%2FN7A7Yuv6BThB4fEmjcJdRmP9xN2YcU71PgCT8O2BQpI7p%2F%2BuxrbBoSA8Zl9ji5JLI5hUpiA185WPiMHhRFkKqKuyY4IxaT8dzsgpe4qhQspDYvh4Jr3Wh%2B%2BmoNwvITkKqrxfjDJ4aDBBjqkASe8YD%2FhRDcauJ3DjNatlSNUC9TjpgdIiKoj%2FM8JkUAfatbsgl0PNKOEjmVhAO9ge9DCzxM%2B0Z5PJBYrNceL%2FRUWWAwS530wCAyNi71J61tv1Hk5mjRUyeIJWRWEBwZYTotsDxq4TG0lLY3w7%2BgtPFG%2BVT9rpevkYbf%2F3TLdFsceCsUMnczqYgG1%2Bua82YAIIG80KIMe25UaK5h747gdFnrYLoJl&X-Amz-Signature=3be84253184955e8a6836b33d41a76dae702b9ff820ebdf37944bcda9c4cb208&X-Amz-SignedHeaders=host&x-id=GetObject)

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
