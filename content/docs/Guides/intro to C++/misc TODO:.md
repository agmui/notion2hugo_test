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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZRX77H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIA8o4zQ4nG14A%2F2JECXvZxAlZY6CZr02HMmbcQHK5w%2BRAiEAw3SOyGPBtK00h5wqmXHiGl59b28vqgqYnXq1Uv4XIdoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKoZD1Ez%2BN2j8NT9JircA%2FlLUGOORDb188w%2FSt7%2FNhzszIw7moGl5Nz1XKn7au1I%2BHh%2BhHq7MDtiT3v1nFqougoaEncBek9CfSPzK4ZofHTwHQ%2FvoYGudJm0OEi0t%2BTstbJas%2B5gsyZ8guaJ4etGnpO7C28aZxl4bcKpgEvVbDjyUnS7F6CWDWho1HApHivI%2FH8WdaqEqSXV8onw3wyGSs8BzD2q%2BCTzV2Zs5u5u0AcyqZDRjRZ5w5lo6pLsa3R%2FNz5J2FbneG8FlvOkYalWBrzlbk5HLBmGRwLFT8YmLykD6Oq43beHmo%2BHuGwVWAkOZjc8DwEzMEAlMMJCLc4LX5FEVe2FPvDioteadfW9e3DMC8XrupGNrHft0txwTObB%2BGOIHyJwY%2Fbxvbv1B%2B%2FdmO9UBSZnPnQRY07N5EAsAcYghK5A3fyjcZoZpKvnZ1GWCEWTVOHGtkQi2k3Cg0OgJtrwA3Cki13%2FZvLGUG0hroMYwiX7i4CXJAXqr2kayVEL0HfuirkDnTKCaMnKvsegpO8FZiziqtgbcHOOxXW64btIgN2rkUjQxHM82Ywh2pvj5E2Tu0WjbUEjSXvoXLzOyNljWhKGCUsEITufH0MGVK3ZkSc73dKxXt%2Bpei2k5X3TdrIeltEAzLi8SksqMLrPk8EGOqUB7xMHIiDvF3TpSG5CSnXTnXpWWKVtCbGbPViJBzmxnJbbUSnz0%2BK8018TCjvmFlz8U7e4BE4VYj2pkccpHP8NzgD46wOIHBNlz9PwAXM8YXkr0eNgXKpe05QkJ%2B6%2BMjsSd0ZJOm3%2BHSPb8w946ZiSBinEkNm9RrHi%2FEQCFUEemGYfArvN7DprNtlCk87aEf7aixASOrDwGHws4iHrWQeRnG7miPIi&X-Amz-Signature=4497fb2c8d5124fa907ec05b2ed7be92f4854ca418d8737d2de25aeb3f31ec67&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZRX77H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIA8o4zQ4nG14A%2F2JECXvZxAlZY6CZr02HMmbcQHK5w%2BRAiEAw3SOyGPBtK00h5wqmXHiGl59b28vqgqYnXq1Uv4XIdoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKoZD1Ez%2BN2j8NT9JircA%2FlLUGOORDb188w%2FSt7%2FNhzszIw7moGl5Nz1XKn7au1I%2BHh%2BhHq7MDtiT3v1nFqougoaEncBek9CfSPzK4ZofHTwHQ%2FvoYGudJm0OEi0t%2BTstbJas%2B5gsyZ8guaJ4etGnpO7C28aZxl4bcKpgEvVbDjyUnS7F6CWDWho1HApHivI%2FH8WdaqEqSXV8onw3wyGSs8BzD2q%2BCTzV2Zs5u5u0AcyqZDRjRZ5w5lo6pLsa3R%2FNz5J2FbneG8FlvOkYalWBrzlbk5HLBmGRwLFT8YmLykD6Oq43beHmo%2BHuGwVWAkOZjc8DwEzMEAlMMJCLc4LX5FEVe2FPvDioteadfW9e3DMC8XrupGNrHft0txwTObB%2BGOIHyJwY%2Fbxvbv1B%2B%2FdmO9UBSZnPnQRY07N5EAsAcYghK5A3fyjcZoZpKvnZ1GWCEWTVOHGtkQi2k3Cg0OgJtrwA3Cki13%2FZvLGUG0hroMYwiX7i4CXJAXqr2kayVEL0HfuirkDnTKCaMnKvsegpO8FZiziqtgbcHOOxXW64btIgN2rkUjQxHM82Ywh2pvj5E2Tu0WjbUEjSXvoXLzOyNljWhKGCUsEITufH0MGVK3ZkSc73dKxXt%2Bpei2k5X3TdrIeltEAzLi8SksqMLrPk8EGOqUB7xMHIiDvF3TpSG5CSnXTnXpWWKVtCbGbPViJBzmxnJbbUSnz0%2BK8018TCjvmFlz8U7e4BE4VYj2pkccpHP8NzgD46wOIHBNlz9PwAXM8YXkr0eNgXKpe05QkJ%2B6%2BMjsSd0ZJOm3%2BHSPb8w946ZiSBinEkNm9RrHi%2FEQCFUEemGYfArvN7DprNtlCk87aEf7aixASOrDwGHws4iHrWQeRnG7miPIi&X-Amz-Signature=103d5357829b96cd96839ca8383aa71c7b6a7b14f45818defe517b79fe2d1b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
