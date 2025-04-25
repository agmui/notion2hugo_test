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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHZNXZX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPuibihkTDrjer76xTBMPsRMo9WY%2FrvohUy2C8oQpx8QIgHYt1pg5HmPuFp7vC4pMz8%2B3Pqr5VnuTxiBJFGT8nYnwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHI9YoWIGawDbWnaWSrcAzquD5aakhJOqGaBmjOfpjixTGU%2Bvs%2BK1jKLP51HvTDNi9%2F1YAaMS30ip9YMYV631uIxe7qBKJa%2BVx9uGqhGqYoe5YSSu%2FIw%2BQInZICsZHgh09F0LiHJDQQ5WJclxbGIyaHcNFd7Qh%2FpoJct1bUNQuT6xRoHEqfHTIDqj%2BuP2l8KzuxNC1qEUPLR0HRf4wF2FW26VXNcLbxjV1hn%2BPqUnvH9Nvn8Sw0Mqe2uqaKmZWzeCmf824c3yrGMNQC%2FujKXsh%2FmfZ%2FLkTr1Af%2B0%2Bxnhb8Fbjd3yrWuKA84iO93L35wHxVWBRyjBQYGt7SflIgrQHkMSiXMxl1A%2BBE3oDALJtx0Vsl30b6dTdspWBefa%2FLh9xDxxsEDR0VtfXTuos7ninSYNPIrnugrkg%2FqmQjtRUMRy%2Bw1oTHC6fUEQZCS5GO%2B%2BQXYnLYlUQHn8NbqumbzOn3rt%2FZ3O3jE3c1UexKD%2FaT3wCH%2FjNfiXr2HJt1UxhONlhz9Mr%2BhjHvYooqcXfMqKjTlQraYrmBBbB1ZlWNCI8CxJPiAZgRaMpSeZ5SZKDuOqgzNwH9TtpGxPRokyxSmT%2F8TWoZaKQlQljUfnXUpoIUGC1pkTsYnPCN8MwhoKdjJkdwqW%2F02Rf3XH7P7QMN7fq8AGOqUBdRontTs7Hp%2FwLP5TBl%2B%2BP0V5ehOdOZf3%2FUNwJ%2BxyebEjhOOdN9PTncRIIGOwQTAKsCKM9kUiVuHJyAk4wYw%2B%2BC0snMYyZ427hpVcijDtcLEDhkBv%2BfbBP2HGO%2FD1DnIKD0kDZ8E4W9NJqBYEtHBUp1joYG2IyHQ0DX%2BUvPn7kJii5EeQCccBC9UQuNkikiDJTUwUiAQfBwoFqVX831SOrqvkh1xo&X-Amz-Signature=e6c7128960e956b201b57c2448e80e762a90ca42e8d33732f05c9bf9c7adf242&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHZNXZX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPuibihkTDrjer76xTBMPsRMo9WY%2FrvohUy2C8oQpx8QIgHYt1pg5HmPuFp7vC4pMz8%2B3Pqr5VnuTxiBJFGT8nYnwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHI9YoWIGawDbWnaWSrcAzquD5aakhJOqGaBmjOfpjixTGU%2Bvs%2BK1jKLP51HvTDNi9%2F1YAaMS30ip9YMYV631uIxe7qBKJa%2BVx9uGqhGqYoe5YSSu%2FIw%2BQInZICsZHgh09F0LiHJDQQ5WJclxbGIyaHcNFd7Qh%2FpoJct1bUNQuT6xRoHEqfHTIDqj%2BuP2l8KzuxNC1qEUPLR0HRf4wF2FW26VXNcLbxjV1hn%2BPqUnvH9Nvn8Sw0Mqe2uqaKmZWzeCmf824c3yrGMNQC%2FujKXsh%2FmfZ%2FLkTr1Af%2B0%2Bxnhb8Fbjd3yrWuKA84iO93L35wHxVWBRyjBQYGt7SflIgrQHkMSiXMxl1A%2BBE3oDALJtx0Vsl30b6dTdspWBefa%2FLh9xDxxsEDR0VtfXTuos7ninSYNPIrnugrkg%2FqmQjtRUMRy%2Bw1oTHC6fUEQZCS5GO%2B%2BQXYnLYlUQHn8NbqumbzOn3rt%2FZ3O3jE3c1UexKD%2FaT3wCH%2FjNfiXr2HJt1UxhONlhz9Mr%2BhjHvYooqcXfMqKjTlQraYrmBBbB1ZlWNCI8CxJPiAZgRaMpSeZ5SZKDuOqgzNwH9TtpGxPRokyxSmT%2F8TWoZaKQlQljUfnXUpoIUGC1pkTsYnPCN8MwhoKdjJkdwqW%2F02Rf3XH7P7QMN7fq8AGOqUBdRontTs7Hp%2FwLP5TBl%2B%2BP0V5ehOdOZf3%2FUNwJ%2BxyebEjhOOdN9PTncRIIGOwQTAKsCKM9kUiVuHJyAk4wYw%2B%2BC0snMYyZ427hpVcijDtcLEDhkBv%2BfbBP2HGO%2FD1DnIKD0kDZ8E4W9NJqBYEtHBUp1joYG2IyHQ0DX%2BUvPn7kJii5EeQCccBC9UQuNkikiDJTUwUiAQfBwoFqVX831SOrqvkh1xo&X-Amz-Signature=18eed502af048246d73d15a1979a1c62aab9fb7693c421cf0e4c0fc70ad057fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
