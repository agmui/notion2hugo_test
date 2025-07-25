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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6PZ3O7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICuVvqKjHVz5A%2ByowABU60YyBPy1BfNPjnHzYGSsDG7vAiAubak7vL0IKSIVHOy1RI7ixJdmFuUjyr17YZ8kSqOQWCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMINOgH31jTsCbgAXPKtwD44xxghMpberIFeH37TIvKuouWO%2BMS%2BbRS%2BPcDvNih%2FJU0AD7Bp3dhFhkN26oVONFaXpROeM5EGGQ0cMfBhTQyLqEonVdcWyhb08FlfZn78m3Sfhf58tSK92RUPfuMb7ctroQayJ006cAaKVLkFSBLfiQCJoh0hmzVLdI7lPN6pdVrouwE%2BTlu93RbP4ft%2FCqoitJAXtSb3D2sOMmPN0yJMfRyEdulQGI3hAwxq6COq0ltzzpeEyoj5S2V9PkBlRWk4bRLtkv4m3WFExTihBJaJk8I87bFPUUlRNGeU%2FN8GUBW4EGM%2BpoKLNhjIGXNFIAC2nZ0LXD3ERikF4NtaDMYJ4shN3DHFjyXKwzks6ePn9xb0te7JUJ3yt%2FtHR%2Bvj1yIzVUgS34sHWoW%2Fm3HNKXdxG0ZjDM6iumq5pk7mwecjSdMSOXy%2BSaMpnljVuMBLBqNHg3WJjRp6hSZmnaWlNKKYaxWmcbnoaDKdF5yQQcQI%2FGzXg%2FkiyB3BPdLIUJ0aChrRJ9o6FQTMSD%2FWNDnSohJYSaA6cUQU4bKah1m96PNYBun3Ub%2FvYvact52XaXad0P%2BecMC6%2BtoebZ9gGJug3AcJva%2FwEvOvUgYKo3wKv5oJQOzNaNIsCgkHCpQpQwwLyNxAY6pgGfc0eJFued81JZ7T8COBa0dMElL5%2FOHTF7Q88oibsHTm1CqVbBp%2FH%2BUsLKASz7tsSslnoBXBQjXaFrWNtoxYjpU%2FNNAEubkCpVKgrBxyn6m8gip83qsp2RjuuDV03lp5aF8mxAOeeu%2FZorzUcEtAQrIUV9kWnlFyxmUx1xp%2Blh5LlA6Y7WpTtDVz4V6VZ%2F4r3B40UmLLu6iJwtEjbBDIXwgFPXPlip&X-Amz-Signature=8f2aa07deb941eb0f1009a54eb51718d858089c22e509aa8334b4523d2435780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6PZ3O7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICuVvqKjHVz5A%2ByowABU60YyBPy1BfNPjnHzYGSsDG7vAiAubak7vL0IKSIVHOy1RI7ixJdmFuUjyr17YZ8kSqOQWCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMINOgH31jTsCbgAXPKtwD44xxghMpberIFeH37TIvKuouWO%2BMS%2BbRS%2BPcDvNih%2FJU0AD7Bp3dhFhkN26oVONFaXpROeM5EGGQ0cMfBhTQyLqEonVdcWyhb08FlfZn78m3Sfhf58tSK92RUPfuMb7ctroQayJ006cAaKVLkFSBLfiQCJoh0hmzVLdI7lPN6pdVrouwE%2BTlu93RbP4ft%2FCqoitJAXtSb3D2sOMmPN0yJMfRyEdulQGI3hAwxq6COq0ltzzpeEyoj5S2V9PkBlRWk4bRLtkv4m3WFExTihBJaJk8I87bFPUUlRNGeU%2FN8GUBW4EGM%2BpoKLNhjIGXNFIAC2nZ0LXD3ERikF4NtaDMYJ4shN3DHFjyXKwzks6ePn9xb0te7JUJ3yt%2FtHR%2Bvj1yIzVUgS34sHWoW%2Fm3HNKXdxG0ZjDM6iumq5pk7mwecjSdMSOXy%2BSaMpnljVuMBLBqNHg3WJjRp6hSZmnaWlNKKYaxWmcbnoaDKdF5yQQcQI%2FGzXg%2FkiyB3BPdLIUJ0aChrRJ9o6FQTMSD%2FWNDnSohJYSaA6cUQU4bKah1m96PNYBun3Ub%2FvYvact52XaXad0P%2BecMC6%2BtoebZ9gGJug3AcJva%2FwEvOvUgYKo3wKv5oJQOzNaNIsCgkHCpQpQwwLyNxAY6pgGfc0eJFued81JZ7T8COBa0dMElL5%2FOHTF7Q88oibsHTm1CqVbBp%2FH%2BUsLKASz7tsSslnoBXBQjXaFrWNtoxYjpU%2FNNAEubkCpVKgrBxyn6m8gip83qsp2RjuuDV03lp5aF8mxAOeeu%2FZorzUcEtAQrIUV9kWnlFyxmUx1xp%2Blh5LlA6Y7WpTtDVz4V6VZ%2F4r3B40UmLLu6iJwtEjbBDIXwgFPXPlip&X-Amz-Signature=cfe07cf735f1bd1375e74d19dda0de18e8bc65baa21b190f3c6739354f4c8fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
