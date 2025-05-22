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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJOGZ5U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDEkxP4%2BHOhd1IVi8YJD78KUO%2Bs5GgGL4%2FC0jeHUUHqlwIgLr0ssRT4f8Sa2ux2LAzEHaoSZDjCmOLxBYrgdriten4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdsV5NROKouyStxtyrcA%2FF36RKUmLgkteGCuU3uErTrKpPRcuk9kDJxQglBC9bJf386zjcMydQ0UBM2YQNyCgKexsqdMpjNTvHJJbzN7rWoEdfRcB5gotk1yrOR%2FdHkRULJiSydYLstPIyUIju4E%2FPpeoX6%2FqRf7LhTtA0l9rQcxaGoIJpMr0l87wpgxtc%2BognuNs844yOOL8nHrm1RdofEMvWPR%2Br%2BFZwuxFAUjnxeYn%2Bh%2BFI5qJc6jrCl05ogwzRodSTVDe97y5MkCdC2srvizlVQx4l%2BRfP9NT8FgTuLx64cnAynC99Siz5kKpW4CJZUbpK%2FaJVOoIWFDhL4c6iXgpQWHTmBPNrNKQn08x5ks60adRQEjfXbMO152b4axyI7Dnz0CQOjXYfxXIE0LImCDgCz5MxmImH8zn2Widgso%2BopDF4zZ%2FpsEGKORHaBnI%2B7CMWdnzX1WVh1q3URcaGG9ZmXx37wLXmV4v3FVrMiDKWXrGjPCj4t%2B0wvDK%2FajmtZVp60eESQMYFoD%2FSkCoXWV1UiKxpZMbbw2YjoD%2F3Tip3im%2FQsGhpIe9hPR5owFpVsJJYDgJg3xaTq7jud8L%2Ft4Mv1PZ0hh61EsaidYNqhewW7o6zm8kxKb%2FYByNNzbKdAWFsyETHLt7T0MIKUusEGOqUBnS2UTFzNCjyLLrWBzlS%2BdGsiIPtmrJfXqoKfmO8zdwVjhBGc%2B7vbQ5s4ah9ob56qLxEj4QtUUyAS8fhnjLKOEKES8stSKgiJJS3eJKnmq5I%2BHNBY1x2UISKfv1i06TBrRw3hZPnI%2F4%2BN9UC12LM2UuyihN3D%2BNGlNzaPLoyvzdxgDLF0Frbr3DAm34XtiNYceCUZ02kXEgsBl4qdIQH%2BEuviXqIi&X-Amz-Signature=b95003405c59b4d064bf4d77d9c7dc83b3c69bcf14ebe709b4cffe82df020a24&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJOGZ5U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDEkxP4%2BHOhd1IVi8YJD78KUO%2Bs5GgGL4%2FC0jeHUUHqlwIgLr0ssRT4f8Sa2ux2LAzEHaoSZDjCmOLxBYrgdriten4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdsV5NROKouyStxtyrcA%2FF36RKUmLgkteGCuU3uErTrKpPRcuk9kDJxQglBC9bJf386zjcMydQ0UBM2YQNyCgKexsqdMpjNTvHJJbzN7rWoEdfRcB5gotk1yrOR%2FdHkRULJiSydYLstPIyUIju4E%2FPpeoX6%2FqRf7LhTtA0l9rQcxaGoIJpMr0l87wpgxtc%2BognuNs844yOOL8nHrm1RdofEMvWPR%2Br%2BFZwuxFAUjnxeYn%2Bh%2BFI5qJc6jrCl05ogwzRodSTVDe97y5MkCdC2srvizlVQx4l%2BRfP9NT8FgTuLx64cnAynC99Siz5kKpW4CJZUbpK%2FaJVOoIWFDhL4c6iXgpQWHTmBPNrNKQn08x5ks60adRQEjfXbMO152b4axyI7Dnz0CQOjXYfxXIE0LImCDgCz5MxmImH8zn2Widgso%2BopDF4zZ%2FpsEGKORHaBnI%2B7CMWdnzX1WVh1q3URcaGG9ZmXx37wLXmV4v3FVrMiDKWXrGjPCj4t%2B0wvDK%2FajmtZVp60eESQMYFoD%2FSkCoXWV1UiKxpZMbbw2YjoD%2F3Tip3im%2FQsGhpIe9hPR5owFpVsJJYDgJg3xaTq7jud8L%2Ft4Mv1PZ0hh61EsaidYNqhewW7o6zm8kxKb%2FYByNNzbKdAWFsyETHLt7T0MIKUusEGOqUBnS2UTFzNCjyLLrWBzlS%2BdGsiIPtmrJfXqoKfmO8zdwVjhBGc%2B7vbQ5s4ah9ob56qLxEj4QtUUyAS8fhnjLKOEKES8stSKgiJJS3eJKnmq5I%2BHNBY1x2UISKfv1i06TBrRw3hZPnI%2F4%2BN9UC12LM2UuyihN3D%2BNGlNzaPLoyvzdxgDLF0Frbr3DAm34XtiNYceCUZ02kXEgsBl4qdIQH%2BEuviXqIi&X-Amz-Signature=b6102bfca6491ddf52d9e52720b4e4e4fa0891031d56ba83389a223dd8ca7b46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
