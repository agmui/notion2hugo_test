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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T22R4IZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC2cUs4p%2BuVd49RsaVPAVbgqb2qR2LNthp0NHh6VZJvgIgUNJ7%2FjndT4wqUYzD0BCD%2Fb0YmS3eFuGIOkXcUz8LlkoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BKV62EVhAbpq6AACrcAxaGUbH8hk5xIjiJdjnpLr6z3NcNX8KnTwuZOk5Vr%2B9xJN1iL0FHABwz3EQefvhQsoLv0NbTCzfWNp0tYJfYcA6e2ZitKr%2FOITTv1LnK0S4khuitYjM%2FxK%2FBcRywSNCXpzHidHIKilbZ%2FM%2FRa7MlQvvshDHe%2BXQ3Gk2ebhAb2L8xJOY7Na6SSursi%2FEldKdS4o4ZWr7gK53a%2F4fLaY%2BtK9lkdNlkkdK8dIoR6%2F5k%2FDgoyOEX91ZtY%2F%2BsUasvsNN44Vi0DdP%2B9%2B3V%2FEgT7GkStI2n%2B1rgB6qVtsDQFC7vHtEOg%2FmjsDwtc5e7DbFadf9UeyhCT%2BS1cE1OpKqon8YFevyp1Hl1igP2Mu3Yu%2F4Z3y799AW8gbnl%2Fx2r%2BYJIfwIBKcCGzfPAQjwhaYCdOQTxBXUaxR0hPfPuJNv5HpUoeMmpSlJX2GfhYKkrX4Oxt0phG2FypYecG6c7I1mS%2BXaY5GE4gg6TDPw418fUcoivLtTdSDroj3A6B3Etp96%2BbO9X19drOFk8AL9Ao10OjMTca%2FrRvKga4VZpDBNcyWXclSLBsU7eYh6CNC0XPrLM8wjrRRoYyQ5%2F4SVHYQU%2BlHvLW9j97AMG9HIZQNJ%2F%2FNpJaE%2Bt6bvkx6C83IeoLfkTMPzZysMGOqUBVHokNSlcu0YYZact0u43ZdoltbZyhhFNo7SVJ5vW63v5wmo1%2BuW%2FG0qkONXwIpN9U3xYJD8%2FEZ6ssULc1v4d4b%2BY5L1W7o3vYPofvNwAX1iStJmXqXiYyZnf34vxjCQivYXJlZ88nrEHsPi5HgAsdTfmBHqBeQR23hGcBEWm%2BWQ4locFFXmCSvFgR1WZ%2BkIHBaqQ%2BxQ8Pnk%2BRSUBlgjfA2VlIHzW&X-Amz-Signature=a839c11a9a1e7325bdd1f314ae13f7fd4db7ec997618323944b93afdf26a18ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T22R4IZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC2cUs4p%2BuVd49RsaVPAVbgqb2qR2LNthp0NHh6VZJvgIgUNJ7%2FjndT4wqUYzD0BCD%2Fb0YmS3eFuGIOkXcUz8LlkoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BKV62EVhAbpq6AACrcAxaGUbH8hk5xIjiJdjnpLr6z3NcNX8KnTwuZOk5Vr%2B9xJN1iL0FHABwz3EQefvhQsoLv0NbTCzfWNp0tYJfYcA6e2ZitKr%2FOITTv1LnK0S4khuitYjM%2FxK%2FBcRywSNCXpzHidHIKilbZ%2FM%2FRa7MlQvvshDHe%2BXQ3Gk2ebhAb2L8xJOY7Na6SSursi%2FEldKdS4o4ZWr7gK53a%2F4fLaY%2BtK9lkdNlkkdK8dIoR6%2F5k%2FDgoyOEX91ZtY%2F%2BsUasvsNN44Vi0DdP%2B9%2B3V%2FEgT7GkStI2n%2B1rgB6qVtsDQFC7vHtEOg%2FmjsDwtc5e7DbFadf9UeyhCT%2BS1cE1OpKqon8YFevyp1Hl1igP2Mu3Yu%2F4Z3y799AW8gbnl%2Fx2r%2BYJIfwIBKcCGzfPAQjwhaYCdOQTxBXUaxR0hPfPuJNv5HpUoeMmpSlJX2GfhYKkrX4Oxt0phG2FypYecG6c7I1mS%2BXaY5GE4gg6TDPw418fUcoivLtTdSDroj3A6B3Etp96%2BbO9X19drOFk8AL9Ao10OjMTca%2FrRvKga4VZpDBNcyWXclSLBsU7eYh6CNC0XPrLM8wjrRRoYyQ5%2F4SVHYQU%2BlHvLW9j97AMG9HIZQNJ%2F%2FNpJaE%2Bt6bvkx6C83IeoLfkTMPzZysMGOqUBVHokNSlcu0YYZact0u43ZdoltbZyhhFNo7SVJ5vW63v5wmo1%2BuW%2FG0qkONXwIpN9U3xYJD8%2FEZ6ssULc1v4d4b%2BY5L1W7o3vYPofvNwAX1iStJmXqXiYyZnf34vxjCQivYXJlZ88nrEHsPi5HgAsdTfmBHqBeQR23hGcBEWm%2BWQ4locFFXmCSvFgR1WZ%2BkIHBaqQ%2BxQ8Pnk%2BRSUBlgjfA2VlIHzW&X-Amz-Signature=4b9b4d30f4622116a821128fd9c60eb391aa10c61ae2ebdbbcb91258e00a6346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
