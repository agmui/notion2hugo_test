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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBVXTYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsp1ChLLht7mv8H8pqxdF9A38BXlp5PuPkhV9yaQKE6AIgBzpL%2Bd22cJ1BrdflP1a8EQXmjNEUw1jYDlCFHFIi9e8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGrbvqtXxapXIkTG5yrcA66EQipzxJcxGmo5OjLJQ2YcIPZ8m5%2FA2h5BQDT2phxC0WEuDxaV1h1gO4EoWlHLNS9qCoaoa5iYzrkbVYUkaGX2oG%2BFfs87UtK94mqLkdBhMgxvhN5v7ePI%2FyjNrZ7ujFOYqYMLfqsyj2nRHTGrf1alZkyC7iSu2OEbwGaKu0OxOr4iR4i80%2BvViVUS1f%2BMVr6hJzfWv2JBhG%2Fj8Tv6h399n7iedxt29%2FZjBz33gEhsaU5OEFon3oxwG5fCWnTVD86JZtb%2FG537D1sb%2Fv%2B4WR%2FQl28uaCZQPmUKGWbkGAj4i%2B8fL82jqcZ5xA6wTefACbKu9vdp3K0fvouRLA7o3XF16G2RrZsoIPDwj1ohxStO7ykLZWfn3GfgeZ2gRQD0bnAGn0JiwcRk3%2BTldUvMdA2I4YP5%2B8gLoLRWSo345UIMK7r%2FnpdX1uGoKU2LFDxIa8V8torsZoS0%2BTclGol7cMe9%2BrQoyY934Y25tHhLn7uZk8qPfqmN5HtLZmMV237kMGQlGFxcrz2owMpRgBbV8qdg0ictpjZXKCTsw7%2BBG8g66RvJwApCBjgwrP6K5TSNZbSU39p4CBdZDhEPfbU05Gk1EScLRqwhrb8L54oJzh6V6kBwSwYYbd4Z6wrNMJudz78GOqUBvNeNBNcfiEmAeOM2zJw5heBKNCAJdipLbkEY06hzIc%2FG3QjHyO%2B%2Bom1bjHYSDP14E0LlA%2Fnq0RramxxkC%2FcvIVjSPvZrmML%2FILC6PV0kTCo2w1UhFuq7%2FY9%2Fe%2B4tDjZ7yW17W6YPHfXWYVGnadoJrHF%2BUAvz1wj5EAVvJRg9GhKrm1mQCUo8lR27R52wfjaEHS6fdRFwrtGJgMN6amsmEsGW99H3&X-Amz-Signature=92d5b136addecdf3f14ef0ad431bbf58677c17866d1518c82c97ead553a4d49d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBVXTYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsp1ChLLht7mv8H8pqxdF9A38BXlp5PuPkhV9yaQKE6AIgBzpL%2Bd22cJ1BrdflP1a8EQXmjNEUw1jYDlCFHFIi9e8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGrbvqtXxapXIkTG5yrcA66EQipzxJcxGmo5OjLJQ2YcIPZ8m5%2FA2h5BQDT2phxC0WEuDxaV1h1gO4EoWlHLNS9qCoaoa5iYzrkbVYUkaGX2oG%2BFfs87UtK94mqLkdBhMgxvhN5v7ePI%2FyjNrZ7ujFOYqYMLfqsyj2nRHTGrf1alZkyC7iSu2OEbwGaKu0OxOr4iR4i80%2BvViVUS1f%2BMVr6hJzfWv2JBhG%2Fj8Tv6h399n7iedxt29%2FZjBz33gEhsaU5OEFon3oxwG5fCWnTVD86JZtb%2FG537D1sb%2Fv%2B4WR%2FQl28uaCZQPmUKGWbkGAj4i%2B8fL82jqcZ5xA6wTefACbKu9vdp3K0fvouRLA7o3XF16G2RrZsoIPDwj1ohxStO7ykLZWfn3GfgeZ2gRQD0bnAGn0JiwcRk3%2BTldUvMdA2I4YP5%2B8gLoLRWSo345UIMK7r%2FnpdX1uGoKU2LFDxIa8V8torsZoS0%2BTclGol7cMe9%2BrQoyY934Y25tHhLn7uZk8qPfqmN5HtLZmMV237kMGQlGFxcrz2owMpRgBbV8qdg0ictpjZXKCTsw7%2BBG8g66RvJwApCBjgwrP6K5TSNZbSU39p4CBdZDhEPfbU05Gk1EScLRqwhrb8L54oJzh6V6kBwSwYYbd4Z6wrNMJudz78GOqUBvNeNBNcfiEmAeOM2zJw5heBKNCAJdipLbkEY06hzIc%2FG3QjHyO%2B%2Bom1bjHYSDP14E0LlA%2Fnq0RramxxkC%2FcvIVjSPvZrmML%2FILC6PV0kTCo2w1UhFuq7%2FY9%2Fe%2B4tDjZ7yW17W6YPHfXWYVGnadoJrHF%2BUAvz1wj5EAVvJRg9GhKrm1mQCUo8lR27R52wfjaEHS6fdRFwrtGJgMN6amsmEsGW99H3&X-Amz-Signature=871c312aa3bf1ff232530f93bd0e7b86e84f15f74bc91688191b7c8a86ac13ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
