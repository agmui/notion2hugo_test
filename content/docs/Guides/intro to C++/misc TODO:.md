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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYIK6AO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCeSiSgclaiDuy5bdfu1KSPB%2BcKiUHN0UTMnZp2g65NQIhAJNO4YhSnN%2BuqgzIr1rFwXsKWlRnAIl6QvV01WW3%2F7yOKv8DCEIQABoMNjM3NDIzMTgzODA1IgydV66uH%2FY38%2BRGTB0q3AM2Jn6DGpJXnE%2BeISuGYINKE%2FS5AErVcwA8DwDlk1Q%2FRwoMHAVE5qQN3uFdVF4f4IycjKNtvhAiHfnyHLtn70lNEicQg%2Baqu1zIxZbt3EM7BxGFzH3k6z3tVww%2BK4kwwMx2rp1N5ENlxz%2BWwNWxl7hG%2ByGwjX%2BXm%2B5jRL%2Fhvp63PAX7CgAGD5xFzAvg%2BLkzwJkCKx5jaBBE1K4BocBN8Phk3IFPfZZKmQaGxuEwVpqkDTIW1UgsWb3YWVmAeQk4v4IN%2FeDmb5Qp8N47u43qDsQg4HsaJbgiAk2pdb6%2BrPpxgP4nvyJBA3T9XHxnkTN50uLxhO4m4OSBx8asJpQdzULIXNSxvahO35spGa%2B3OSATv4XeYEn25opFOYT%2B5vFGgWyVtWbww1kdDtXdrePn1vpjcZyfMK6L5PMZqZrMYPVo9XHqVnNPHRAVQN%2BoYbworh5Q9eubfryM%2Bn8QfqDm%2BbNhnR%2FO9HOhW1iC4od3CbMW88JImXdDTVaEuuHm%2FrrTNuYyEGcL1kwvZAzeYTeDu1t8BB%2BOwieYffLWFcqy%2FG2xq%2FIuFuqfx3bFBfwO%2F6X5NaQFMG8CFvOBS9xMRUiB75hSO052fP9URdtwP2O9nwtBXZy%2Bn7cV7OS3NpheDTDz%2Fsi%2FBjqkAbDQvGFR5koM6Rx47y5x74qoOeIvbvF3opuYguNrVGLK0bXU7wDQuRpc65oeXlp87FevauLkybvo2086oA6ovIoVyEVnJ5XQAX%2F1O9OpkMii5VhDQz%2Bp%2FrHbeBCkVCufSqXwlSWs73jfrsrcb2nRu03nVZhno%2BXZw1qWCVciN5UATKy6cijzGcgpBoivEYCpzUTUzOP0sdiZ1eX2bCccyI30RV%2B5&X-Amz-Signature=cf576205ece3000440ac58a0df2778422dc337b59ec20247bec06ad85bdc73fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYIK6AO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCeSiSgclaiDuy5bdfu1KSPB%2BcKiUHN0UTMnZp2g65NQIhAJNO4YhSnN%2BuqgzIr1rFwXsKWlRnAIl6QvV01WW3%2F7yOKv8DCEIQABoMNjM3NDIzMTgzODA1IgydV66uH%2FY38%2BRGTB0q3AM2Jn6DGpJXnE%2BeISuGYINKE%2FS5AErVcwA8DwDlk1Q%2FRwoMHAVE5qQN3uFdVF4f4IycjKNtvhAiHfnyHLtn70lNEicQg%2Baqu1zIxZbt3EM7BxGFzH3k6z3tVww%2BK4kwwMx2rp1N5ENlxz%2BWwNWxl7hG%2ByGwjX%2BXm%2B5jRL%2Fhvp63PAX7CgAGD5xFzAvg%2BLkzwJkCKx5jaBBE1K4BocBN8Phk3IFPfZZKmQaGxuEwVpqkDTIW1UgsWb3YWVmAeQk4v4IN%2FeDmb5Qp8N47u43qDsQg4HsaJbgiAk2pdb6%2BrPpxgP4nvyJBA3T9XHxnkTN50uLxhO4m4OSBx8asJpQdzULIXNSxvahO35spGa%2B3OSATv4XeYEn25opFOYT%2B5vFGgWyVtWbww1kdDtXdrePn1vpjcZyfMK6L5PMZqZrMYPVo9XHqVnNPHRAVQN%2BoYbworh5Q9eubfryM%2Bn8QfqDm%2BbNhnR%2FO9HOhW1iC4od3CbMW88JImXdDTVaEuuHm%2FrrTNuYyEGcL1kwvZAzeYTeDu1t8BB%2BOwieYffLWFcqy%2FG2xq%2FIuFuqfx3bFBfwO%2F6X5NaQFMG8CFvOBS9xMRUiB75hSO052fP9URdtwP2O9nwtBXZy%2Bn7cV7OS3NpheDTDz%2Fsi%2FBjqkAbDQvGFR5koM6Rx47y5x74qoOeIvbvF3opuYguNrVGLK0bXU7wDQuRpc65oeXlp87FevauLkybvo2086oA6ovIoVyEVnJ5XQAX%2F1O9OpkMii5VhDQz%2Bp%2FrHbeBCkVCufSqXwlSWs73jfrsrcb2nRu03nVZhno%2BXZw1qWCVciN5UATKy6cijzGcgpBoivEYCpzUTUzOP0sdiZ1eX2bCccyI30RV%2B5&X-Amz-Signature=f6078d8703a7f053b391c300a7911ceb60b831a75fba470ce3969c9b6c35eb35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
