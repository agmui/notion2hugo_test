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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFD7GDM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPKVMeh%2B5E6FYXmxegEL24GJCasTV9KH9RLFadzI2RMAiEArW%2FYTT33tHx5kj8wmzACkmJTfRS%2FmNNhbkeoDwUHJEMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKEowqlMriGgVOU8KyrcAxPjTvavrt3paQWec1J%2F7IbrvuOYaYiEvw6RK4Bp%2F39uyqmLfWyX%2FT7TQHA8agWgT482E1htkWdEbBfb0GaBTBcZ7%2F3%2BsXDyfH6Ebkc9ByVDCVj1PFOLjKCfFpUNhdTRz2K0gFl9M3rsXCYdtIBfEjx8CSb4BopOs3uycrkWEMaRsx8wia0ZsApcnoWYXIlyogCj9euvT13T2hGs4%2Fw8gdTMGm35kLs0%2FFzCYFK0ruoQ0miE%2BsIENYfCjVNa%2BOey93s7LRmlMxwFkIec5O56ojcvX8BUSK0bph9Pd28INKMS8NiBlu9AO7CHnMfcLWHMECLz4gwUP82EJ6rpCl55ODM%2Bv%2BiYYdz%2BUizuZ5KXxWviSgPY%2BWMpRay%2BPxmjDn98kMoLn9hvDQjBlEJ76Ygxc0nQVQ0GorcE8KVNAaPt%2FmWylgrvc%2B7kV8GQ9Pi5IQ%2F3a3bpf%2BomKUj0XjtpnbTZgT0QIEqb5183F%2BrO9gXkrDYnyyVF9PG%2FBNzzr4EGvPIqnBz%2FEXhzhAAj4ReO9zsLoYivIWTuJLHOzc2NJcude2LPDOe8XTmGURvpUOB7oVf9yVEJ%2FOC3LX81LaCCAVKTVIe74UUyMx%2FOwEH3afeclLQ5WhteLf0s9%2FHhT9LbMLb2pL4GOqUBYnWb8%2BbeZvage2Lm4FDzTqcqNSRdOPJ6d7b7X2X4vAW%2FM6byrqR3Txf1MlbzM2NJMv16Qi2Pe476SL8sMmozBqXIF7c3eKrpmlp9omHYAoWyi1zE1XbmVu0%2FiRW6UP4c7CTUbkQYv9lnC8MCdJOgjwPdybKDwFp7PvOuhFUcnvMrkc9ey4dcdIqA1SRXYoyHy6COJsj%2FvY9cWQIbOMpIgO%2FLgU4p&X-Amz-Signature=f389fc6574de68098b176d3589560550fddecd8c55e88d540896e85d5a999b84&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFD7GDM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPKVMeh%2B5E6FYXmxegEL24GJCasTV9KH9RLFadzI2RMAiEArW%2FYTT33tHx5kj8wmzACkmJTfRS%2FmNNhbkeoDwUHJEMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKEowqlMriGgVOU8KyrcAxPjTvavrt3paQWec1J%2F7IbrvuOYaYiEvw6RK4Bp%2F39uyqmLfWyX%2FT7TQHA8agWgT482E1htkWdEbBfb0GaBTBcZ7%2F3%2BsXDyfH6Ebkc9ByVDCVj1PFOLjKCfFpUNhdTRz2K0gFl9M3rsXCYdtIBfEjx8CSb4BopOs3uycrkWEMaRsx8wia0ZsApcnoWYXIlyogCj9euvT13T2hGs4%2Fw8gdTMGm35kLs0%2FFzCYFK0ruoQ0miE%2BsIENYfCjVNa%2BOey93s7LRmlMxwFkIec5O56ojcvX8BUSK0bph9Pd28INKMS8NiBlu9AO7CHnMfcLWHMECLz4gwUP82EJ6rpCl55ODM%2Bv%2BiYYdz%2BUizuZ5KXxWviSgPY%2BWMpRay%2BPxmjDn98kMoLn9hvDQjBlEJ76Ygxc0nQVQ0GorcE8KVNAaPt%2FmWylgrvc%2B7kV8GQ9Pi5IQ%2F3a3bpf%2BomKUj0XjtpnbTZgT0QIEqb5183F%2BrO9gXkrDYnyyVF9PG%2FBNzzr4EGvPIqnBz%2FEXhzhAAj4ReO9zsLoYivIWTuJLHOzc2NJcude2LPDOe8XTmGURvpUOB7oVf9yVEJ%2FOC3LX81LaCCAVKTVIe74UUyMx%2FOwEH3afeclLQ5WhteLf0s9%2FHhT9LbMLb2pL4GOqUBYnWb8%2BbeZvage2Lm4FDzTqcqNSRdOPJ6d7b7X2X4vAW%2FM6byrqR3Txf1MlbzM2NJMv16Qi2Pe476SL8sMmozBqXIF7c3eKrpmlp9omHYAoWyi1zE1XbmVu0%2FiRW6UP4c7CTUbkQYv9lnC8MCdJOgjwPdybKDwFp7PvOuhFUcnvMrkc9ey4dcdIqA1SRXYoyHy6COJsj%2FvY9cWQIbOMpIgO%2FLgU4p&X-Amz-Signature=131ae21e7a922f650c2499c245ea753ea5bdf3e3a5e7551bf1d71fcc741fdbce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
