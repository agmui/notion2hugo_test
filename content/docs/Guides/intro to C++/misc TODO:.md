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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OSKR7M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID0cjkZm3mK8wnGfs%2FL5cyXRLXf10fTcIzIe%2B%2BAiSnsKAiEAu6IU3%2FCtb41ltJI27debAD1SUBkxDrZq4w5Q%2FBBvYukq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGv9CM%2BIhr4o%2FultzyrcAx4PbqZ4iUTSdkyCw7MWpmOz6IkgA%2BFhz%2BP9FMNYwXbsB5hGFyPiWU00ZErNWvf%2Fw%2BoqXyrYyB%2Bz3bQ3hu45PGzYl04%2FqjRxqItE5mx52dqylWoO1xO6hAHQVQZ1nNb3MYB4fMf%2Boyik0wYBZoLKpMenf0J%2FlnKySFTd2xf8cQ%2BL5JqtARG%2FfWWIdvl4CTPnigUOIFR5Dsy01MJWLOU8IlH%2Fbil%2BdqTJ1Plu7QMiKKykFV9w%2BwZnyqHr0ZqW9iiZ8nQJVa3Ni2EWhsGqZVg4lwthdeNeGz3EMUyAmrycdXO%2F2HchZW7e7sxyVyHP2UOiNmUPd1CJ5u0sptHVBz75ZWIakB3ir4gJbzvs2aiexkO9KI5SoznjOGhmVwo3BkuwHM3JaxsCQiWZviOiKS8aweeDBRd7x6mSyUUeJYWjaOvPgYeoq0mEP0fgDNQJ04NYKz1wRjOihC73250JQ2bdydUgJqpc97VmqxdGWS8OFhaMprRR1UeCLUsHARIvwJpnrA%2B8WnU2LpztUBza9E5JR3VEmdUb4gc8Kyt8woAoVqbv3bYvRqGA8riVeevgNjoru6g591W5R9HtKUvOCmA0KY%2FiMFrbG0O4a5%2BrfcWMHlZ%2BOTWqYixL4noMjS9RMLWqnr8GOqUB0bYKvAev76H3RKf%2Fzio9pEJVIV6bpms7ZRd0LBIe8CmEuu8D1MKcJakuNKLtwZISn2pMemzOUUntMmHiEE95L%2B8Ptgmr0Jbce3PXNv5jbYSFydCOYj2KnNgv8deEdR7W8H3FBdzrAukfclRyrj3t6Z6eRJdYkgbvE9XOebQYw7NqX1tWFdP4mD9EM3eLy21WZtT64eb9yNVmeugCFK2A0vQWegm6&X-Amz-Signature=172626eb8573c13bf08991bb18ab2718db8551e2d9f851dbe73ff1153f282c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OSKR7M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID0cjkZm3mK8wnGfs%2FL5cyXRLXf10fTcIzIe%2B%2BAiSnsKAiEAu6IU3%2FCtb41ltJI27debAD1SUBkxDrZq4w5Q%2FBBvYukq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGv9CM%2BIhr4o%2FultzyrcAx4PbqZ4iUTSdkyCw7MWpmOz6IkgA%2BFhz%2BP9FMNYwXbsB5hGFyPiWU00ZErNWvf%2Fw%2BoqXyrYyB%2Bz3bQ3hu45PGzYl04%2FqjRxqItE5mx52dqylWoO1xO6hAHQVQZ1nNb3MYB4fMf%2Boyik0wYBZoLKpMenf0J%2FlnKySFTd2xf8cQ%2BL5JqtARG%2FfWWIdvl4CTPnigUOIFR5Dsy01MJWLOU8IlH%2Fbil%2BdqTJ1Plu7QMiKKykFV9w%2BwZnyqHr0ZqW9iiZ8nQJVa3Ni2EWhsGqZVg4lwthdeNeGz3EMUyAmrycdXO%2F2HchZW7e7sxyVyHP2UOiNmUPd1CJ5u0sptHVBz75ZWIakB3ir4gJbzvs2aiexkO9KI5SoznjOGhmVwo3BkuwHM3JaxsCQiWZviOiKS8aweeDBRd7x6mSyUUeJYWjaOvPgYeoq0mEP0fgDNQJ04NYKz1wRjOihC73250JQ2bdydUgJqpc97VmqxdGWS8OFhaMprRR1UeCLUsHARIvwJpnrA%2B8WnU2LpztUBza9E5JR3VEmdUb4gc8Kyt8woAoVqbv3bYvRqGA8riVeevgNjoru6g591W5R9HtKUvOCmA0KY%2FiMFrbG0O4a5%2BrfcWMHlZ%2BOTWqYixL4noMjS9RMLWqnr8GOqUB0bYKvAev76H3RKf%2Fzio9pEJVIV6bpms7ZRd0LBIe8CmEuu8D1MKcJakuNKLtwZISn2pMemzOUUntMmHiEE95L%2B8Ptgmr0Jbce3PXNv5jbYSFydCOYj2KnNgv8deEdR7W8H3FBdzrAukfclRyrj3t6Z6eRJdYkgbvE9XOebQYw7NqX1tWFdP4mD9EM3eLy21WZtT64eb9yNVmeugCFK2A0vQWegm6&X-Amz-Signature=0680acc62ce92f3b521a3ab4ccd31e03682007b24074ab7a43d2fee2403a8c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
