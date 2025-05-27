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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENXSREX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfmoNTYu%2BZnIzeyJbHIzhXU3G0w80EHwBppxr28XOrDAiEA0bBgpeDsM9LYnJTFUij0OgTgM3Uf9E3uevLIkbIKdswq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCe7tF0OiU5nM1fOqyrcA%2BZkDCTQVDH4kAW2KDocO%2BM%2F9hsYYfkuOZCUsadif3WpCfppWklzKMyTdXH0URThMqmvgmuEnUuK8W4%2BfNCtSoPgYcDXbrkodnM05mzZwcJTQwwXK%2BEUlXLEcs5DC0%2BloF7XcKFjAXUOcmjdQTk02RwFuPx5A701vB1h1yL%2FawemDCprqofyOKs6o6s7Z6f5btWfD4zonswo5UdzaJq7Rn8Rccfl%2FMqe%2BPsI2nJKSUzSEY%2B4sy%2BamMq4JLRJuUggfC2XNt8XmRZf%2BF%2Bw5yIVn3UJyBeWbvWCCBXeKk99nBW%2BRsWQDKE6L%2F2HH5nuUbWGQDdTJ%2F2aJFF3W76xgRUwlMAm7l%2BmU4d8Wg5SlXP8DZytq4NUPZJZC8xzRs6GGdxsru%2FZUTiMmwoLSFAkJdG3cj3wdFZ8KujkMMGIw1qIsxpL6%2FhZ95Si4WY3GycY1DqgAJWUp7Rl4sq5RH9T2Q7pkQL3tSDFQWHTwJVcUzaD%2BfBXk%2BDIh9dybJucJER%2FEfQUFjcJHUN1cwONedtaLyjnlq2gnS8IVZiks2qK1F2hXgAj8IGogYJLIPoHBSok%2BhQ04CSEy7aNJt8Giq8hOZloLmKbOypaMobvfDrchp6w8CADQeY5P6wgqSxqGDoIMPuB1sEGOqUBa9sS3S0i0JT1cgTLGls1NnjhbK70D9dFzvuiA4aTIz6GehH47M%2FZxX%2FSOUqtpz6v9j88%2BPBNE7Pkm%2BMVr%2BAKFIHclcRraRUhH2pAq%2FSvak4Tvh%2B%2B01Ke0VmHsst1FVEFGzZ94HAPvRQ%2BFAVXqYuH%2FSkk0HccRy0vHI9KSupLwqHRVCGb3u1CPL8pQpW6q78XXVrbCIvSRqB9ZEyS%2Be8BjZgPWm9m&X-Amz-Signature=5be3827c8dcff13d801aad18d4f8628eb0d87ac26ea83d298720794d96f77b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENXSREX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfmoNTYu%2BZnIzeyJbHIzhXU3G0w80EHwBppxr28XOrDAiEA0bBgpeDsM9LYnJTFUij0OgTgM3Uf9E3uevLIkbIKdswq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCe7tF0OiU5nM1fOqyrcA%2BZkDCTQVDH4kAW2KDocO%2BM%2F9hsYYfkuOZCUsadif3WpCfppWklzKMyTdXH0URThMqmvgmuEnUuK8W4%2BfNCtSoPgYcDXbrkodnM05mzZwcJTQwwXK%2BEUlXLEcs5DC0%2BloF7XcKFjAXUOcmjdQTk02RwFuPx5A701vB1h1yL%2FawemDCprqofyOKs6o6s7Z6f5btWfD4zonswo5UdzaJq7Rn8Rccfl%2FMqe%2BPsI2nJKSUzSEY%2B4sy%2BamMq4JLRJuUggfC2XNt8XmRZf%2BF%2Bw5yIVn3UJyBeWbvWCCBXeKk99nBW%2BRsWQDKE6L%2F2HH5nuUbWGQDdTJ%2F2aJFF3W76xgRUwlMAm7l%2BmU4d8Wg5SlXP8DZytq4NUPZJZC8xzRs6GGdxsru%2FZUTiMmwoLSFAkJdG3cj3wdFZ8KujkMMGIw1qIsxpL6%2FhZ95Si4WY3GycY1DqgAJWUp7Rl4sq5RH9T2Q7pkQL3tSDFQWHTwJVcUzaD%2BfBXk%2BDIh9dybJucJER%2FEfQUFjcJHUN1cwONedtaLyjnlq2gnS8IVZiks2qK1F2hXgAj8IGogYJLIPoHBSok%2BhQ04CSEy7aNJt8Giq8hOZloLmKbOypaMobvfDrchp6w8CADQeY5P6wgqSxqGDoIMPuB1sEGOqUBa9sS3S0i0JT1cgTLGls1NnjhbK70D9dFzvuiA4aTIz6GehH47M%2FZxX%2FSOUqtpz6v9j88%2BPBNE7Pkm%2BMVr%2BAKFIHclcRraRUhH2pAq%2FSvak4Tvh%2B%2B01Ke0VmHsst1FVEFGzZ94HAPvRQ%2BFAVXqYuH%2FSkk0HccRy0vHI9KSupLwqHRVCGb3u1CPL8pQpW6q78XXVrbCIvSRqB9ZEyS%2Be8BjZgPWm9m&X-Amz-Signature=54b1b768623edd1381bc06f253d497b3820ac3e76379e3df43355ac6c3056bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
