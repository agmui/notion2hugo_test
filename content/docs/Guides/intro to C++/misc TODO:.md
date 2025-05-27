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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QIG4OY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzJiH5xh%2BtgKTuLKkC33TMHpEzJ88mbhp8xu1v3xwNFAiEA2MNDu6P%2FuU8PSxwDOserdDNwFM4gGQbABVxMFsdqmWQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMithq8v9728cfL5iircAyYilzhiZxCFwNkQgLQVXRAGh1Qg2r9%2B7gGK7HQtHxHY9mm92UvEzwqnVcMV79whGx%2Bt97IDK5jZLZqMjU4WQm2emd8k6vgC5msK0sBIsoiISJOcd%2FooffGOGQJErvmcW9hKNOk2WcqvfHB4CWA5MTHTFKer75tHIzTTUUNX4uP9Qnk%2BFn4SPcwfA8VhkENe89DHGT6%2BwP5owVwvO2YM54x0P2rIKN54WEKSQZhnxn%2Fzz9SSmR6D%2FWZ0pMpRQqmsSfRPd157mkh5KUK7YfkrS2aP0mSTYQXuL79KngBpfpml4v3qDCmqCJ2zesvChYU%2BSfGLRIJYh0GVznZOJg2EiyHOW3MbIamM4v2Uj95kPsjk3gHVL5BAXk5hHgNYOpbqWI%2BvWLvWnG6ZrwnMWlXdnG0orbE0%2FWpvv86xPLRkEKFU8eJkjdqzqq4bpkwJows9bch8JBceFZajoS7rq%2Bhq%2BiBcHUj9Bb0M77%2FEH6x%2Bd7SZmLIMR7f318J%2FuG870zysCTvmx6TeTjwAJLUVDBkRN%2BRMsn5jKxIsWWn%2Flmff5EnLsDDTz%2FKu7SdzgzbZpJQ0glyOd76lo0OsRhG%2F3l4SlKrg6WIUtPV1vpEtnKNUTzipApFcDbWkOQrpqbZWMPqW1MEGOqUBpKiGDZ417xinaU7kGUed0c1pEE81Fpm8NG2AHSrrPUlob3qnzSNw1wTQTBF2DryzVM3XZCqarZ4usZR9RI%2B77FDacXFnbT%2FKnsnZJ5WbAimTZSpkqvjRF%2BSPtBvP56ol%2BPRZcIKtuQF%2B7aCJvROq638GVe%2FMusgxv8o6OyWGMRsfmea43fE%2BmPruefma6axbt%2FUc8UxNrBtQ5nfSg5xASy4Rdwr9&X-Amz-Signature=b6e323dbce118d03c719a77e2fe7f6846481ddefb7bb06ccbfc8ff47c97b8016&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QIG4OY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzJiH5xh%2BtgKTuLKkC33TMHpEzJ88mbhp8xu1v3xwNFAiEA2MNDu6P%2FuU8PSxwDOserdDNwFM4gGQbABVxMFsdqmWQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMithq8v9728cfL5iircAyYilzhiZxCFwNkQgLQVXRAGh1Qg2r9%2B7gGK7HQtHxHY9mm92UvEzwqnVcMV79whGx%2Bt97IDK5jZLZqMjU4WQm2emd8k6vgC5msK0sBIsoiISJOcd%2FooffGOGQJErvmcW9hKNOk2WcqvfHB4CWA5MTHTFKer75tHIzTTUUNX4uP9Qnk%2BFn4SPcwfA8VhkENe89DHGT6%2BwP5owVwvO2YM54x0P2rIKN54WEKSQZhnxn%2Fzz9SSmR6D%2FWZ0pMpRQqmsSfRPd157mkh5KUK7YfkrS2aP0mSTYQXuL79KngBpfpml4v3qDCmqCJ2zesvChYU%2BSfGLRIJYh0GVznZOJg2EiyHOW3MbIamM4v2Uj95kPsjk3gHVL5BAXk5hHgNYOpbqWI%2BvWLvWnG6ZrwnMWlXdnG0orbE0%2FWpvv86xPLRkEKFU8eJkjdqzqq4bpkwJows9bch8JBceFZajoS7rq%2Bhq%2BiBcHUj9Bb0M77%2FEH6x%2Bd7SZmLIMR7f318J%2FuG870zysCTvmx6TeTjwAJLUVDBkRN%2BRMsn5jKxIsWWn%2Flmff5EnLsDDTz%2FKu7SdzgzbZpJQ0glyOd76lo0OsRhG%2F3l4SlKrg6WIUtPV1vpEtnKNUTzipApFcDbWkOQrpqbZWMPqW1MEGOqUBpKiGDZ417xinaU7kGUed0c1pEE81Fpm8NG2AHSrrPUlob3qnzSNw1wTQTBF2DryzVM3XZCqarZ4usZR9RI%2B77FDacXFnbT%2FKnsnZJ5WbAimTZSpkqvjRF%2BSPtBvP56ol%2BPRZcIKtuQF%2B7aCJvROq638GVe%2FMusgxv8o6OyWGMRsfmea43fE%2BmPruefma6axbt%2FUc8UxNrBtQ5nfSg5xASy4Rdwr9&X-Amz-Signature=7dbe9ee038ef4732d70c75cab75426634efdbd464ec05b37c243d8b70b63edf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
