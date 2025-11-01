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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORGPEZM%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC58qwPWO5gITkZxHyfFcBPkuZAqaE3w%2BGMn0aoBGeRygIgFXoDYcax60f6oTUNYdNR66GVlbet5UjFLgnqqNLEuBYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLP2CAOr37mrj251%2BCrcAw65ogwaDFy%2FT0VaPd8ps9Y%2Fhi9bI9JkFXt88Pjb7Elobaw4x6PR19DaCZufqFMDy%2F3%2FrTNwzYbcps2fqHhwkeZpz3ezYbOTF4K%2FrCpYDEztX3KqNDJeRT1x1dtFjS7ZYakieRCmlGfzlVyDpP%2Ftf6Pi%2FiFDNiQXcOgl4zuIwzQOga8xHtZFqvj1kRG%2FXsW1%2Fm3%2FuDkzsmXoElais0P3mRsX2i8%2B2GoB5qD%2BoD58aNQskiW%2BrFVZlZhmxduXx5%2BPUNvCD6WuuQVYiTvYbg6Uu0ZO9tKApm2zF19TL8tGEzo%2BQO2qhGQpfYqcUho3LKvxODdI2989EBavspMfeZCZFn%2FMEKnkOjNV1th7QZ0UPvwPgKmV71%2BhNBNJd1uT7SB3mMsMJGpUt6F1VZ5ptabqGJiKs4vllXMFjCcj%2FiBBA9Vx2r2H%2B6NUmuw12dtfULQN6M0varN8utkh3Xq779oanYcp5ys4yHsEAtpi9bx%2FdqULEu5Ko7aSTrKAr3Qr5ReI%2F3PSzRAVn5bEb%2BHOhnAu2X43UNpzvmZeEo%2BVp6wwjvCUumG0xkt%2Bn98%2BXiebYMVXYLDEG2BmrDiwseP4z6s5a6BdPwYL5fIodVlBHMPaWHy%2FoqJthfK9SRPgAA2kMOj6lMgGOqUBu6HWcW%2BtxmfCCLEyExyZUYQQZP8dpVqqgxga%2FBxlI4zx1d0CQ0sKEmKRvkbowX7o0XkkSp69ZZix%2BjJ44%2FFnVs4xV8dVvhNUzVDJTdYJiQ%2BDSM2W0UlJL5%2BNe4PNXbk3vy%2B8RMb8ifB3Md%2BphWXwNILbpNGzH9tSdpisculaM99bm1GyOB5uIGPmbXRhABYLg%2FQj4lFCAMgnwVXYaqAxrye6e%2BfH&X-Amz-Signature=539e88618e1bcaec2eba79fc9af36384ddc46ad4f085568cde8ea768d7eb9d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORGPEZM%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC58qwPWO5gITkZxHyfFcBPkuZAqaE3w%2BGMn0aoBGeRygIgFXoDYcax60f6oTUNYdNR66GVlbet5UjFLgnqqNLEuBYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLP2CAOr37mrj251%2BCrcAw65ogwaDFy%2FT0VaPd8ps9Y%2Fhi9bI9JkFXt88Pjb7Elobaw4x6PR19DaCZufqFMDy%2F3%2FrTNwzYbcps2fqHhwkeZpz3ezYbOTF4K%2FrCpYDEztX3KqNDJeRT1x1dtFjS7ZYakieRCmlGfzlVyDpP%2Ftf6Pi%2FiFDNiQXcOgl4zuIwzQOga8xHtZFqvj1kRG%2FXsW1%2Fm3%2FuDkzsmXoElais0P3mRsX2i8%2B2GoB5qD%2BoD58aNQskiW%2BrFVZlZhmxduXx5%2BPUNvCD6WuuQVYiTvYbg6Uu0ZO9tKApm2zF19TL8tGEzo%2BQO2qhGQpfYqcUho3LKvxODdI2989EBavspMfeZCZFn%2FMEKnkOjNV1th7QZ0UPvwPgKmV71%2BhNBNJd1uT7SB3mMsMJGpUt6F1VZ5ptabqGJiKs4vllXMFjCcj%2FiBBA9Vx2r2H%2B6NUmuw12dtfULQN6M0varN8utkh3Xq779oanYcp5ys4yHsEAtpi9bx%2FdqULEu5Ko7aSTrKAr3Qr5ReI%2F3PSzRAVn5bEb%2BHOhnAu2X43UNpzvmZeEo%2BVp6wwjvCUumG0xkt%2Bn98%2BXiebYMVXYLDEG2BmrDiwseP4z6s5a6BdPwYL5fIodVlBHMPaWHy%2FoqJthfK9SRPgAA2kMOj6lMgGOqUBu6HWcW%2BtxmfCCLEyExyZUYQQZP8dpVqqgxga%2FBxlI4zx1d0CQ0sKEmKRvkbowX7o0XkkSp69ZZix%2BjJ44%2FFnVs4xV8dVvhNUzVDJTdYJiQ%2BDSM2W0UlJL5%2BNe4PNXbk3vy%2B8RMb8ifB3Md%2BphWXwNILbpNGzH9tSdpisculaM99bm1GyOB5uIGPmbXRhABYLg%2FQj4lFCAMgnwVXYaqAxrye6e%2BfH&X-Amz-Signature=d98b936a9f4a2aa3d7a767f5723d932ea2fd2d64cea8cfd35c0d1a37540c8290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
