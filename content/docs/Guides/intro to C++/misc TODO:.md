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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKAESGJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEzD9EXb4wWYicjpqotSe7IO0h1RtWg6xThFxXrv1UdAiEAyddlxQHcq3l9Z8PZV7HAdK7Js6FWmfahuBACfe%2FYq7kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBiqzWlUyB%2B3QYc58ircAwJY5CKeLbpCMPs2GOitY7NGibrHQJTUu60xbuaWN4kUYcu60%2FFKtC38jzuNYytfAezfwimwgZDopvd4IKPhhoLtyM6ftvakEMiAXQh9E831pCjcS8I992Q02xBgFHSGtPCBb4NWgkU8ia0LkymE9d%2Bxi5yaFsqD559QineO5cI8Zs%2B71okiZ70qdlWtTeExbOi1m2AjHhpJKQFTyKR1THG9ipZyHfi7b3ny8opOZ50ZkgFeDcvhB9j5jI%2FkoboZkODgnBVdHhtiD0zMFXjL7VixkQ%2BErZHK2HThdvfNb4RmT4BJuLWZoUyANhqzh%2FmZhoyNUQsJDM6cCP2GVKAc%2BDUgK1yvtuT0Sfz%2BPgjSmHk03nTE7OMg40IOxAgD1YJRfJRA%2FGIIDdz8E3ZPj%2FILPqYsq%2FIZWYfLfp%2F9dQ6clIL89lH73JMqbXkSI%2F638yywofGRqqPynUeLMwGrf99WkjqQePCxSy%2BBYYKDaq%2FphvRXqxhnlisMHlPCvM0nPIb02sHxoZauuxhdqM2fqGjRU6G4N%2BJK8UCI7K7O5UYrmXxl2ABnWvFhMHKSldlboqLaR%2BS0QZVjqCWXEtx%2BViUckKWBiKqf5SaXv5poKNVDyl3wcy7ZkGCK6CKtMO6yMNn1ncEGOqUBC9rYNGbifL0NzTaBjrVk2pSENbNcPe2nwC1ZuwE5hzWCtYbTK9OlbSqMZe76Ot2v3Bjl2qP7sH6FCALR7T4lg4PTXqTjdJp1e6pVLuouSqbfC84nTDWPLggt2x4bAEWkRxMD5M7LgIUzrrmw%2BzcemGYPcg1JrmrZkfoYq5GisbwHao6gygqJUlfqzigZN3%2FR5EAqhkrGyTAJt56jBrKs4YQK%2BFah&X-Amz-Signature=610b61b870589d053a6fd701e5611a38cc98cd0625dbb6809271ab08cc5f5839&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKAESGJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEzD9EXb4wWYicjpqotSe7IO0h1RtWg6xThFxXrv1UdAiEAyddlxQHcq3l9Z8PZV7HAdK7Js6FWmfahuBACfe%2FYq7kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBiqzWlUyB%2B3QYc58ircAwJY5CKeLbpCMPs2GOitY7NGibrHQJTUu60xbuaWN4kUYcu60%2FFKtC38jzuNYytfAezfwimwgZDopvd4IKPhhoLtyM6ftvakEMiAXQh9E831pCjcS8I992Q02xBgFHSGtPCBb4NWgkU8ia0LkymE9d%2Bxi5yaFsqD559QineO5cI8Zs%2B71okiZ70qdlWtTeExbOi1m2AjHhpJKQFTyKR1THG9ipZyHfi7b3ny8opOZ50ZkgFeDcvhB9j5jI%2FkoboZkODgnBVdHhtiD0zMFXjL7VixkQ%2BErZHK2HThdvfNb4RmT4BJuLWZoUyANhqzh%2FmZhoyNUQsJDM6cCP2GVKAc%2BDUgK1yvtuT0Sfz%2BPgjSmHk03nTE7OMg40IOxAgD1YJRfJRA%2FGIIDdz8E3ZPj%2FILPqYsq%2FIZWYfLfp%2F9dQ6clIL89lH73JMqbXkSI%2F638yywofGRqqPynUeLMwGrf99WkjqQePCxSy%2BBYYKDaq%2FphvRXqxhnlisMHlPCvM0nPIb02sHxoZauuxhdqM2fqGjRU6G4N%2BJK8UCI7K7O5UYrmXxl2ABnWvFhMHKSldlboqLaR%2BS0QZVjqCWXEtx%2BViUckKWBiKqf5SaXv5poKNVDyl3wcy7ZkGCK6CKtMO6yMNn1ncEGOqUBC9rYNGbifL0NzTaBjrVk2pSENbNcPe2nwC1ZuwE5hzWCtYbTK9OlbSqMZe76Ot2v3Bjl2qP7sH6FCALR7T4lg4PTXqTjdJp1e6pVLuouSqbfC84nTDWPLggt2x4bAEWkRxMD5M7LgIUzrrmw%2BzcemGYPcg1JrmrZkfoYq5GisbwHao6gygqJUlfqzigZN3%2FR5EAqhkrGyTAJt56jBrKs4YQK%2BFah&X-Amz-Signature=9e3025b04fe6f38145897dd1494f5932a883b671f2675a9470fe5bec60decb58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
