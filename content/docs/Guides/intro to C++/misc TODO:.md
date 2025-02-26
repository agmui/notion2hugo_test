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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEXBJ5F%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl3gVlfkUlPI72mETNe%2F7eoai44p0WaqhZ%2B46IGtd5VgIhAN%2BstTNqwJP0VP70jHkOXI66M%2FdpeKi72JeCzxLFhF9XKv8DCFgQABoMNjM3NDIzMTgzODA1IgyqTd%2FfLo4PF34rkHMq3APov2j%2BLN8mNnHUqj7FsgFpUjh4dKnIqo%2FrFDg%2BSyGkKdW5oVn8FnL%2BXYeNoZKWN1R38CPD0dVxCUERBor20j0f2DOWGBgpdWRPMHMkJLfrbAqHd2d1NhYHjMZlzwrjLiDun4%2F7DA2tz1ufcjAa9J3%2FTAa3ks%2BPfWceP1HsiTjwxTup1JrM0%2Fu7Ag9re8B96KjECHfDuHZ21Y7uyGaLI4ujEYaRwLf3Qp4xIixk%2B%2FwX1x3n9GrivkWnHw5yHTiZqr1kk2DPi00x9W7kupQ%2BmVscznDfOTwZxfclUh4c53Bi%2BwEpnmk5oN%2FvK0jL3SPydy141Z1cCbdLlAHJntbpOEEWIiiAMTNwQLxJAAwJqgqjkj8NKhT%2F3L9V6m4HfTSDNes3RY0TTvs05F%2FWxAVtNlVEvteTtSJIl4trE1e%2B96L2Aak3ESEYqEIs8G2TBYfWtza9e2Ds3Mu%2BuZSc1nZ0G%2FBN5xbRn738%2BS0M665jKTvLkYlDcmYnYUA71jrc3u62HgSk%2BXntZoj4ieCkJPOwrs0WxC5h39oflvD%2FLHaQZKBpfTgy90Ke%2F%2Fn7QHlzs2LEQNP95PbDT4R79pUqY0kHOtnY4NJ6ZT01K5D7joK%2BRlyUX4eC2C6yVSuOAQd1RzD4gPu9BjqkARqVyv%2F4RTR2GfYx3IAE%2FCrfOYe%2FPnLksdrtGED1QaZ1fPBjEAzVq5VLH2cJNqGoWxnn8fraaiVw50731EnVJn5VgFoydE3z3ymNYnQbDRT%2BjFFjJTOvze5hrNc9bbRcWCxPJRpaoyt8Tv8D%2Fpw0M9fm6XOqYPeOSk2oKYvPNxIstUW9UiwrK15zi2WGn0tcU4f1%2FIXNMxmFg409gW%2FTuK3AtzbD&X-Amz-Signature=9128cf91164f2abd39a1006d4291b6823aea6fc2ef3e76b979ac96f9146b4f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEXBJ5F%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl3gVlfkUlPI72mETNe%2F7eoai44p0WaqhZ%2B46IGtd5VgIhAN%2BstTNqwJP0VP70jHkOXI66M%2FdpeKi72JeCzxLFhF9XKv8DCFgQABoMNjM3NDIzMTgzODA1IgyqTd%2FfLo4PF34rkHMq3APov2j%2BLN8mNnHUqj7FsgFpUjh4dKnIqo%2FrFDg%2BSyGkKdW5oVn8FnL%2BXYeNoZKWN1R38CPD0dVxCUERBor20j0f2DOWGBgpdWRPMHMkJLfrbAqHd2d1NhYHjMZlzwrjLiDun4%2F7DA2tz1ufcjAa9J3%2FTAa3ks%2BPfWceP1HsiTjwxTup1JrM0%2Fu7Ag9re8B96KjECHfDuHZ21Y7uyGaLI4ujEYaRwLf3Qp4xIixk%2B%2FwX1x3n9GrivkWnHw5yHTiZqr1kk2DPi00x9W7kupQ%2BmVscznDfOTwZxfclUh4c53Bi%2BwEpnmk5oN%2FvK0jL3SPydy141Z1cCbdLlAHJntbpOEEWIiiAMTNwQLxJAAwJqgqjkj8NKhT%2F3L9V6m4HfTSDNes3RY0TTvs05F%2FWxAVtNlVEvteTtSJIl4trE1e%2B96L2Aak3ESEYqEIs8G2TBYfWtza9e2Ds3Mu%2BuZSc1nZ0G%2FBN5xbRn738%2BS0M665jKTvLkYlDcmYnYUA71jrc3u62HgSk%2BXntZoj4ieCkJPOwrs0WxC5h39oflvD%2FLHaQZKBpfTgy90Ke%2F%2Fn7QHlzs2LEQNP95PbDT4R79pUqY0kHOtnY4NJ6ZT01K5D7joK%2BRlyUX4eC2C6yVSuOAQd1RzD4gPu9BjqkARqVyv%2F4RTR2GfYx3IAE%2FCrfOYe%2FPnLksdrtGED1QaZ1fPBjEAzVq5VLH2cJNqGoWxnn8fraaiVw50731EnVJn5VgFoydE3z3ymNYnQbDRT%2BjFFjJTOvze5hrNc9bbRcWCxPJRpaoyt8Tv8D%2Fpw0M9fm6XOqYPeOSk2oKYvPNxIstUW9UiwrK15zi2WGn0tcU4f1%2FIXNMxmFg409gW%2FTuK3AtzbD&X-Amz-Signature=08d31d9bd4ab56a76d420bd9b43f9186b4fc44fa0c024b388ced86176d13d012&X-Amz-SignedHeaders=host&x-id=GetObject)

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
