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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGNCJUK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBoQJrqFg8YTEIhqHTfvDohDQDI7eh1ZBQdJDm9qSNeeAiBSfDJTPQCu6VldkSy2Hr2gwaKWG4tV76losuWEjnjatSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMNQ0pIKsXVFH791NZKtwDWhXGa9hviY32a7nsc9aqvdZFnYzoj3qS252I6zGWqP9B2gKmk1o6C%2FIpqvyv%2BFtjTnkcWB9etMvf0Tf1obtFLVTJ1T9pSDOe6s2eKD50I4AgIpTNzom7iZ0lfGE7Y4q%2BSDglZEYoUVEu46A72Xywot2zIENNVNS26NXmI6NAVHnw%2BZOZJIg1ZCAtxz%2BeQFJdW%2Fas6k55t9hWObqqMx%2Fg5oDJE7YaMNo8TtxW7NIt2lmCfZK88IoN%2FnFo4JdJpQgrpfYuUBRoHVKFwwTze9Mi%2BmHVuAgCJJP2vN2Fcv2caYQt2tMFVISlrkOi%2FE3HCTt2Kv11DvZNOM8zElTjNmGaQHUlU7qSL4JIKZwDiqyPJis%2FiIccCpDUPdpw%2BGM7e2pbOXI8KwkXnht4cPmPB0THJWU4ARe9tXqYOm2C9YxAjJ0OsCla%2BX%2FBZI%2Bh9S54cPfJIaIJWLyCXwpie8mU4dvmBAWqspQoNzLS9jYxkkkZuFKtQlBN0TmghxCHvUTitnhmKh1s68CQqjlMzijXY%2FuCg%2FeuNolPMAbD4XFd%2BQi5XnL0fEKJhsAd%2BGaYskN2T%2B3mIHsU7YPAo9pNAjS9p3mkSmrRFAGL5mU00S0lgwxrfkqwWz6qh60S%2BWvhB3owh5jKwQY6pgGgowAh%2BCc0lFAc%2FovvmgfWB1iJT5DSOL%2FeqGg%2Fw07SE3DhrafNfpKHsDC3Yf5NG6zHPXXsIVqCamewLWfv7Ba%2BBlDAHQu01QpCFCpToLS%2FaOF4rCR94m0NyU6HYspBh65GVfVzcyq%2FdGaCYyabyig5VVysn7R2TFGv%2BYWovNjw8QDBARrfhV3WIdsMDJzNLNnvpt4bdPZJUUDd%2FKY5qOeMWilIFiT%2B&X-Amz-Signature=6cfe7aba4f482798ed76d7f229ee7e15108c5b8a6bd26c61f0b8457edf30527c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGNCJUK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBoQJrqFg8YTEIhqHTfvDohDQDI7eh1ZBQdJDm9qSNeeAiBSfDJTPQCu6VldkSy2Hr2gwaKWG4tV76losuWEjnjatSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMNQ0pIKsXVFH791NZKtwDWhXGa9hviY32a7nsc9aqvdZFnYzoj3qS252I6zGWqP9B2gKmk1o6C%2FIpqvyv%2BFtjTnkcWB9etMvf0Tf1obtFLVTJ1T9pSDOe6s2eKD50I4AgIpTNzom7iZ0lfGE7Y4q%2BSDglZEYoUVEu46A72Xywot2zIENNVNS26NXmI6NAVHnw%2BZOZJIg1ZCAtxz%2BeQFJdW%2Fas6k55t9hWObqqMx%2Fg5oDJE7YaMNo8TtxW7NIt2lmCfZK88IoN%2FnFo4JdJpQgrpfYuUBRoHVKFwwTze9Mi%2BmHVuAgCJJP2vN2Fcv2caYQt2tMFVISlrkOi%2FE3HCTt2Kv11DvZNOM8zElTjNmGaQHUlU7qSL4JIKZwDiqyPJis%2FiIccCpDUPdpw%2BGM7e2pbOXI8KwkXnht4cPmPB0THJWU4ARe9tXqYOm2C9YxAjJ0OsCla%2BX%2FBZI%2Bh9S54cPfJIaIJWLyCXwpie8mU4dvmBAWqspQoNzLS9jYxkkkZuFKtQlBN0TmghxCHvUTitnhmKh1s68CQqjlMzijXY%2FuCg%2FeuNolPMAbD4XFd%2BQi5XnL0fEKJhsAd%2BGaYskN2T%2B3mIHsU7YPAo9pNAjS9p3mkSmrRFAGL5mU00S0lgwxrfkqwWz6qh60S%2BWvhB3owh5jKwQY6pgGgowAh%2BCc0lFAc%2FovvmgfWB1iJT5DSOL%2FeqGg%2Fw07SE3DhrafNfpKHsDC3Yf5NG6zHPXXsIVqCamewLWfv7Ba%2BBlDAHQu01QpCFCpToLS%2FaOF4rCR94m0NyU6HYspBh65GVfVzcyq%2FdGaCYyabyig5VVysn7R2TFGv%2BYWovNjw8QDBARrfhV3WIdsMDJzNLNnvpt4bdPZJUUDd%2FKY5qOeMWilIFiT%2B&X-Amz-Signature=5b2335266cbd41cea6289a7acbd145f9978c42a9b78a40ff4b107471853fe84d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
