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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VM4O6M%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFUshK5wCCXwuZ7SRwbFj4iHG0h8W4%2BWP0G8pgflabktAiEAmukvcKvEEhiGnOtoWcE8zRx8zjMCgksSjpn2lWPL%2B8MqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpfMiYki7r7ZQOycCrcA6DzC1QOEX0TOn9DwICzyahjdHigJPBGz8qVxCo9JD9%2Bp371UwAN6u1F8%2Fevh3EFYfktuEI2lazxqmpTvmveWP0CnBjLfODWmfoQ%2B40nxjWKfSZjMgpfzloj94f5NAwToIzAHQXWsr%2BzstlPRmTB7BMoP5mvvlcjtGpKE8fLNgm1WQ5tHca0%2FEgzXAePvJpoYrXjw7MaF2z5tP5KwRUnDgO%2BrLQKElxSdYh7%2BwD9EeGfeafWDU4lIaYSxUNFgWBatfU3zb06ImuPzv0Wmx%2FQt9ZMbCC95MXdClJ8CCty%2BItR8wwRIt3EoFozvN9QGhMeNmAWb%2Fyz4n%2F40XS59kkUHrVok13HRejLDFVr7uZbbnKYqx29hD82pRhWC9wDI3%2FhJKa%2B%2FFOPlp4BblZ%2FjfFljKHx1QQ8CvLb51FpavgpBgT%2BSci76gQhFb3z4nNddj8FnULj2TGfxZ%2Fp3%2FkbZ%2B9nKT4ApbF0HCBqgNTKIzV3QnTkJC1gRALAOkQcD9akZV21Gy88V8oG1QtTE%2BcSOwy62KC0vrsaG9RQ%2BvF2AnwCp2nKyZXMo%2F%2BA2e9vlGozHTFbvkZNSz3coSvGOxVjhfrg4v0xi7hsnjGp5Ij8HnbWoLokFWK0mYllI%2BHtjzGmMLHsh74GOqUBnAWKSV4HLHbuR7YeAguk7J0%2B3ewFfXCGgcXRuYo40esnlcze2GKCczpbFUYJIBAEFPzxIpk1qreuvmfgU%2BZ5ERMqDF6QpdZQ1TwF0X%2FMGqimH444Qzfd7CHdN3vb4gEdY0836w3WvgNetidC3gEB2IyG49ssNU37tj2GX1TzSm81fNUkxjYRp9ewAdC9hYHmeHw4x2ZWoIj4qHqBomsuHZ0LM0Ko&X-Amz-Signature=5f839e8b5c7bf47a797a22d571fd290f7ac69550ccc156d338567282b23e64b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VM4O6M%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFUshK5wCCXwuZ7SRwbFj4iHG0h8W4%2BWP0G8pgflabktAiEAmukvcKvEEhiGnOtoWcE8zRx8zjMCgksSjpn2lWPL%2B8MqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpfMiYki7r7ZQOycCrcA6DzC1QOEX0TOn9DwICzyahjdHigJPBGz8qVxCo9JD9%2Bp371UwAN6u1F8%2Fevh3EFYfktuEI2lazxqmpTvmveWP0CnBjLfODWmfoQ%2B40nxjWKfSZjMgpfzloj94f5NAwToIzAHQXWsr%2BzstlPRmTB7BMoP5mvvlcjtGpKE8fLNgm1WQ5tHca0%2FEgzXAePvJpoYrXjw7MaF2z5tP5KwRUnDgO%2BrLQKElxSdYh7%2BwD9EeGfeafWDU4lIaYSxUNFgWBatfU3zb06ImuPzv0Wmx%2FQt9ZMbCC95MXdClJ8CCty%2BItR8wwRIt3EoFozvN9QGhMeNmAWb%2Fyz4n%2F40XS59kkUHrVok13HRejLDFVr7uZbbnKYqx29hD82pRhWC9wDI3%2FhJKa%2B%2FFOPlp4BblZ%2FjfFljKHx1QQ8CvLb51FpavgpBgT%2BSci76gQhFb3z4nNddj8FnULj2TGfxZ%2Fp3%2FkbZ%2B9nKT4ApbF0HCBqgNTKIzV3QnTkJC1gRALAOkQcD9akZV21Gy88V8oG1QtTE%2BcSOwy62KC0vrsaG9RQ%2BvF2AnwCp2nKyZXMo%2F%2BA2e9vlGozHTFbvkZNSz3coSvGOxVjhfrg4v0xi7hsnjGp5Ij8HnbWoLokFWK0mYllI%2BHtjzGmMLHsh74GOqUBnAWKSV4HLHbuR7YeAguk7J0%2B3ewFfXCGgcXRuYo40esnlcze2GKCczpbFUYJIBAEFPzxIpk1qreuvmfgU%2BZ5ERMqDF6QpdZQ1TwF0X%2FMGqimH444Qzfd7CHdN3vb4gEdY0836w3WvgNetidC3gEB2IyG49ssNU37tj2GX1TzSm81fNUkxjYRp9ewAdC9hYHmeHw4x2ZWoIj4qHqBomsuHZ0LM0Ko&X-Amz-Signature=43b5cb8f07f5d6a7fcb85c8500afe3d52f0b7bee4f4cbbd609b5a834469f9ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
