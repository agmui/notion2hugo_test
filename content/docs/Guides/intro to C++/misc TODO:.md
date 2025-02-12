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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZ6XQS4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3B0Mzm25Eux8lmvu7xCCt0XzGV%2FBmhcc1iQ43QqFvwAiEA9qOTb5W76HdyId8igkFJhkRRyhzABJmX5ZWAncdClnUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGinfi0qArTF33LQircA1XCEGutfy0TSs%2B7zzrGp4aVyNrNImJT7nyYYKzAEajFSpJfOdGF82aWgigs4emzHrIK7uvh8LnvZKoZJUUxbbXZEMvH1O7pYHoJc75AeGiGFmT8bsQPEpuI7ElEeJjrjvVFdA93S657RH7%2FZTQDYhEXx%2FlgOyQZBjp%2BCrHZWOHvBrt0NdzYCMBmTZ7iMXryvyW1MQUBrckgmcBWRmSX8iK0eS2ylWNEqU0nq9VXzelPQjP4ZDXRcgAB76feYrQSmc5tK%2FShwrCnzXr8XIjGyonhIE4lMiuKvvkvw1NeDbiyGnLzCueOrmUlz0CgM3uW%2FfuF3I5wwIil6OQ1zTFuGSUgMdhf5lc8u%2F65FVb2iZG1ZsYfi2JFe%2FARm5L6HP5Q3EeHuNdpoQPIbbCYjlDjoa3LGG0D3srEWtw9tU8tOu4B5mCADPbSWEgD4C0Xc6Yv6niRl6BrJz9uNzaj9MIrFeOC%2BwzIzlZ9Jo%2BG50qSsWqgbzgHJH9YtzFqqaBlIcxt%2Ftn7tn4gOcZpNrTbsJhC7C41%2BX8uZC%2F6mdEdLmIn9jT6RFNEo%2B7A46eoe5uF9Um7Y%2FsG6a89NAMFXXrpsMLuo78WBLTQ14SyTtSKg7B5wf%2FwiE9XT7bnIlgXh5xnMOTkr70GOqUBq1V50klrz9IPVfEcNMGsm9blxXWzEQ54Bvq%2FiJ36GepLbmREQBhegizfD75stiiYn4Ce5NVzAKMBkwoJayamdu5XIBxlvT1Su1Qtu5mAFqslDsP4r0ugUt4862kgaaeBRI1koVVpRmkr0XyhM3HIBNh0Ay1EvvGhxiNzn%2FR19AJTRsC1pBWXsNyVNG33DVQPF%2BvmIh9vBoeYR39xuZpbD2u3h6rx&X-Amz-Signature=df0a2940fd4f66f1d63759338d5a7d90907419f4801145eff8a6a89bcb50466b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZ6XQS4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3B0Mzm25Eux8lmvu7xCCt0XzGV%2FBmhcc1iQ43QqFvwAiEA9qOTb5W76HdyId8igkFJhkRRyhzABJmX5ZWAncdClnUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGinfi0qArTF33LQircA1XCEGutfy0TSs%2B7zzrGp4aVyNrNImJT7nyYYKzAEajFSpJfOdGF82aWgigs4emzHrIK7uvh8LnvZKoZJUUxbbXZEMvH1O7pYHoJc75AeGiGFmT8bsQPEpuI7ElEeJjrjvVFdA93S657RH7%2FZTQDYhEXx%2FlgOyQZBjp%2BCrHZWOHvBrt0NdzYCMBmTZ7iMXryvyW1MQUBrckgmcBWRmSX8iK0eS2ylWNEqU0nq9VXzelPQjP4ZDXRcgAB76feYrQSmc5tK%2FShwrCnzXr8XIjGyonhIE4lMiuKvvkvw1NeDbiyGnLzCueOrmUlz0CgM3uW%2FfuF3I5wwIil6OQ1zTFuGSUgMdhf5lc8u%2F65FVb2iZG1ZsYfi2JFe%2FARm5L6HP5Q3EeHuNdpoQPIbbCYjlDjoa3LGG0D3srEWtw9tU8tOu4B5mCADPbSWEgD4C0Xc6Yv6niRl6BrJz9uNzaj9MIrFeOC%2BwzIzlZ9Jo%2BG50qSsWqgbzgHJH9YtzFqqaBlIcxt%2Ftn7tn4gOcZpNrTbsJhC7C41%2BX8uZC%2F6mdEdLmIn9jT6RFNEo%2B7A46eoe5uF9Um7Y%2FsG6a89NAMFXXrpsMLuo78WBLTQ14SyTtSKg7B5wf%2FwiE9XT7bnIlgXh5xnMOTkr70GOqUBq1V50klrz9IPVfEcNMGsm9blxXWzEQ54Bvq%2FiJ36GepLbmREQBhegizfD75stiiYn4Ce5NVzAKMBkwoJayamdu5XIBxlvT1Su1Qtu5mAFqslDsP4r0ugUt4862kgaaeBRI1koVVpRmkr0XyhM3HIBNh0Ay1EvvGhxiNzn%2FR19AJTRsC1pBWXsNyVNG33DVQPF%2BvmIh9vBoeYR39xuZpbD2u3h6rx&X-Amz-Signature=c1e3c2ae5be55b5310a069b7ce10a639e3d96024ad5c4d9f73045ae164e5f687&X-Amz-SignedHeaders=host&x-id=GetObject)

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
