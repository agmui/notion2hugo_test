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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMY366SB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDvmXq3sERe4K%2FFLGTwBPnABA%2Fs1wp1N41BEjEIBmIPbQIhAJoR0tzDMnbhcdjsEx2yOOYkQRACw%2FyFSNr511QB80w2KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWGCUpUgHwTuHUmIq3AMBkVBW%2FxaH8tvgcSKEBeBYg7mtSv0k6pVUXFQOGBnFzXB8pojCBIdy8qe0Krw9wY73jiqh29vvWg2p2gzim9Q0evZCbiuwSS5XzC08rAZ5l50uA8ZMFQ3FlvLw6RfjQBH3g1uH0VRshooGj1wk8b6vmioHZMtI9OgeL4iqMvhYYfjeooH9llYNTk8ZjebLALJXwY6es9LtIfo4CBYMisUbwnPXUbxQbh%2BnG2%2Bfs6ssze0qzeYFcrDkGp33TcDuQmtFGBANXqSciYX558yUZ0NXg%2F0Q9EFH5Fh0D%2B07er6uKF2jbYnO6qbCvmH63Vt98Dt9BeDxEZf7QQuAm9JqpqKUYx3YfzRMryNc5wjQLB0mnwn6HUQ%2Frb4Vchzc5qumZseUOIuTalH1qZnbVv8Zve0rdRP3iLi0a3rFZLwH7iGrDD8cvgwkG3s%2B4UAJ6jk8Kn0VegC8kLx1TWrHvOgVVL6fX6c%2FTBxBD51TuP2MUu3xj4HOf9KvOIyx1TTUbz639hr2%2FQ5CG6ntVg3nNBkFYXwEgxG83wwipahfBh%2FmJxg68BAnpOKzzgYKktjQE879c6Vmz9l2ao04v5N2vGxOVbUqv2%2FggGXpT6xs%2BD1hnCZBYAXJvYcwMRnUGMz6mjD4pe%2B%2BBjqkAYmUT5IOqg7ziQpeiqKD4VWAisCEMfjZF9WlsY89j6JlHaBITKyHj%2BVWhdpUqVl3vQ0tjxJ7Q1GILGwmj08GiHP8uHE%2FslTlp8uqeaXB%2BQnAtVx9emlbeiDGRNogT1ucawo7wpMpoumP6toMF6XQ1maBylVhHVEIcM1vL534tw1OfobtdLcDHgFbjnFLwCa9lo%2Fm%2BMZdO1bjz6WP8%2BwPxJdVH22n&X-Amz-Signature=529d634eb51911ffb9a784f654ccbb0bb2bea61900dcb233069e8c12247951f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMY366SB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDvmXq3sERe4K%2FFLGTwBPnABA%2Fs1wp1N41BEjEIBmIPbQIhAJoR0tzDMnbhcdjsEx2yOOYkQRACw%2FyFSNr511QB80w2KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWGCUpUgHwTuHUmIq3AMBkVBW%2FxaH8tvgcSKEBeBYg7mtSv0k6pVUXFQOGBnFzXB8pojCBIdy8qe0Krw9wY73jiqh29vvWg2p2gzim9Q0evZCbiuwSS5XzC08rAZ5l50uA8ZMFQ3FlvLw6RfjQBH3g1uH0VRshooGj1wk8b6vmioHZMtI9OgeL4iqMvhYYfjeooH9llYNTk8ZjebLALJXwY6es9LtIfo4CBYMisUbwnPXUbxQbh%2BnG2%2Bfs6ssze0qzeYFcrDkGp33TcDuQmtFGBANXqSciYX558yUZ0NXg%2F0Q9EFH5Fh0D%2B07er6uKF2jbYnO6qbCvmH63Vt98Dt9BeDxEZf7QQuAm9JqpqKUYx3YfzRMryNc5wjQLB0mnwn6HUQ%2Frb4Vchzc5qumZseUOIuTalH1qZnbVv8Zve0rdRP3iLi0a3rFZLwH7iGrDD8cvgwkG3s%2B4UAJ6jk8Kn0VegC8kLx1TWrHvOgVVL6fX6c%2FTBxBD51TuP2MUu3xj4HOf9KvOIyx1TTUbz639hr2%2FQ5CG6ntVg3nNBkFYXwEgxG83wwipahfBh%2FmJxg68BAnpOKzzgYKktjQE879c6Vmz9l2ao04v5N2vGxOVbUqv2%2FggGXpT6xs%2BD1hnCZBYAXJvYcwMRnUGMz6mjD4pe%2B%2BBjqkAYmUT5IOqg7ziQpeiqKD4VWAisCEMfjZF9WlsY89j6JlHaBITKyHj%2BVWhdpUqVl3vQ0tjxJ7Q1GILGwmj08GiHP8uHE%2FslTlp8uqeaXB%2BQnAtVx9emlbeiDGRNogT1ucawo7wpMpoumP6toMF6XQ1maBylVhHVEIcM1vL534tw1OfobtdLcDHgFbjnFLwCa9lo%2Fm%2BMZdO1bjz6WP8%2BwPxJdVH22n&X-Amz-Signature=adcc89671d5a10b5e62250c836286d1139184f3d5780329e379422e3fed03322&X-Amz-SignedHeaders=host&x-id=GetObject)

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
