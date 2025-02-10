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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6VN7YP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHxwa6PlDG27UsmdxxrS86gtTX1kGBdXSy%2FrgR3HkBCAiEAtb8Xk7SWbRwgZ5we%2BXfgCw6Tb1nywYBui1AO7grHqaQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrHufLSuOCQY%2FBQCrcAxv5D3GfsuyuEdIIViX%2FmX7M%2Fg66eHsgljaVIetdcJGXUw78I%2BHvsh4rn%2F2XUvBIRNZT8cNjXjXGGDv%2F00P05rGDGSTV%2Bdvx1riZaXBqRvpDLSGbXjh4WLbzTp9shQKS8Pa80oD%2FVLPc2qkWzvYb0JAv%2FYxJy7s9LfqxGRS65KRRo3qdwzbB1GxZD6YzmForVQy4J4kFue9YrX%2B3fVpjleo3zEfPorvoLpovMwYScOM531WWun2VIsE3WJU9zxhB3RIQYl7GNnX8dUnzrx0f0WQ06TjGDmoHn5ral%2FG%2FSNP7am%2F5gPXObLTqe5jiGdEOY4HRlYBkz2hbFoFL7q6oYnzUZesWPy3xXALpRu2pN8qA6Ys%2FGb1VmRN20ZkgmtG%2FCo5HCg%2FD12CUFlesGdmYQ3S7OT4LKgEJ5n%2BZcJhNV1%2FkffrLADeyO1l%2FK2MTon4AMaMQjMRlj5XV%2BjzZEd2ybLRvAF%2Brd6iShxSK2OLSpuegVwV4%2FzbtDdF5OldkekYZswpFFhk4%2BsWEZclDrmsexQJXhcNYdNEjuEFDAvs1TQdGdJdpMH7nMUOnVrUm4Ze4nUmlOYR237C8XDIvF%2FF7qC9ra86Ho1gm4y2P1e%2F5p5T9wik7BypFrf8s6T%2FNMN2DqL0GOqUBSM47C4QEnC73YgtT4ougCrCkJ4LyG77hcnbQhZGbzd8GzqHvwBTGYIHPcic1%2BnKKi7nGzEOqB5LzpGZD8LiwHRtk59so8TT5hKFOIsvFacQ1WfegYp0obcSjaHjNv5sPLZ%2BTyJx%2FGC11BkxwkVpzd7FBPOO%2Btxu1%2Fu2I9OY8ltC7m25%2BFUyb8D4njiAPuumYhnQLVhZcwGi%2FE%2B2VZc10FEFSoeVj&X-Amz-Signature=bc9330a0e98fee9792a282ae0101b80e2abe37e53e633307146311cc47133183&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6VN7YP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHxwa6PlDG27UsmdxxrS86gtTX1kGBdXSy%2FrgR3HkBCAiEAtb8Xk7SWbRwgZ5we%2BXfgCw6Tb1nywYBui1AO7grHqaQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrHufLSuOCQY%2FBQCrcAxv5D3GfsuyuEdIIViX%2FmX7M%2Fg66eHsgljaVIetdcJGXUw78I%2BHvsh4rn%2F2XUvBIRNZT8cNjXjXGGDv%2F00P05rGDGSTV%2Bdvx1riZaXBqRvpDLSGbXjh4WLbzTp9shQKS8Pa80oD%2FVLPc2qkWzvYb0JAv%2FYxJy7s9LfqxGRS65KRRo3qdwzbB1GxZD6YzmForVQy4J4kFue9YrX%2B3fVpjleo3zEfPorvoLpovMwYScOM531WWun2VIsE3WJU9zxhB3RIQYl7GNnX8dUnzrx0f0WQ06TjGDmoHn5ral%2FG%2FSNP7am%2F5gPXObLTqe5jiGdEOY4HRlYBkz2hbFoFL7q6oYnzUZesWPy3xXALpRu2pN8qA6Ys%2FGb1VmRN20ZkgmtG%2FCo5HCg%2FD12CUFlesGdmYQ3S7OT4LKgEJ5n%2BZcJhNV1%2FkffrLADeyO1l%2FK2MTon4AMaMQjMRlj5XV%2BjzZEd2ybLRvAF%2Brd6iShxSK2OLSpuegVwV4%2FzbtDdF5OldkekYZswpFFhk4%2BsWEZclDrmsexQJXhcNYdNEjuEFDAvs1TQdGdJdpMH7nMUOnVrUm4Ze4nUmlOYR237C8XDIvF%2FF7qC9ra86Ho1gm4y2P1e%2F5p5T9wik7BypFrf8s6T%2FNMN2DqL0GOqUBSM47C4QEnC73YgtT4ougCrCkJ4LyG77hcnbQhZGbzd8GzqHvwBTGYIHPcic1%2BnKKi7nGzEOqB5LzpGZD8LiwHRtk59so8TT5hKFOIsvFacQ1WfegYp0obcSjaHjNv5sPLZ%2BTyJx%2FGC11BkxwkVpzd7FBPOO%2Btxu1%2Fu2I9OY8ltC7m25%2BFUyb8D4njiAPuumYhnQLVhZcwGi%2FE%2B2VZc10FEFSoeVj&X-Amz-Signature=21492fddda78f212630f15fe5b352b371a78b5b64cb469f4dd7bf798bcb8aa4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
