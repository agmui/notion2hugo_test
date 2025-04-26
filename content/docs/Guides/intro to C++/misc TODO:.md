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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LRQ7LN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjBhBDnD6QlR4gmUtSEDe7FdLc0j0JB71D%2BPaFZVPogIhAJ4qem6pRKM0wHTk3xSKY4RCqIoYifjucDH5xGtJ0uhbKv8DCDkQABoMNjM3NDIzMTgzODA1IgzO7dCrwFXPb7DA6qUq3ANtMtrvFj9coi78eidav1I2H9Qigv9StusVtrnpMDWnBD%2BfpQlor9Cd06qwtSEWPqE794p8RyGrrm1lJYkcy8yVovLPuAeHKOyJ4HtENZRtgi7PxZQJ4oCaiU%2FWzdobRxT%2F0xaQAW3qu8Ef7kMwllX9dRi4OVmM1tie5TN6aC2x%2FI%2FruO758A93Caqj3l9di9mN7N1fr1L8zFIF4dLOzflpB%2Few1WkDZsflsVdrHVDwDJBcsv2TENVQbD3T8O2W171cegtkeY82kYtfKFTJ2PBMx0%2FCQwyJQeDX51rTT9oTTC8SYOzOxFvUWArrV724IfSViwvmYpyjicOUjNlfC63WoYMmB1qG3m7Itk1NYdCO0OfEVjsOPtnyWx7vbv9LcgikA8OaAeqlFCZv4KfJGOB1ipruZ%2FuxZkOy0s8fk6mFgbRMIhEl8%2Fu0g4vKvWjD537mUlhhvXI3%2BXQduyVG38LDqyyyxtKWb4mNqtY%2BBZxzzoX4hUtbncovW%2BwLVJSOcG86BGfS%2BFvzd8TOSXjs%2BoNti%2FZHRACBBAj4L9sH8esrCS2Ytx%2FOgcsIju3DxN%2FWHMigXRnNA8CtSR31eXyZnn335AWJkP6jwLyJLbE5DEJyESt5XYFdqTv1Mt9XgzC7vLDABjqkAdpXR2fww3IO0DKBcg%2B7p4m5cjHeEJQvSyNjY95Lw879zRJWnxmW6ngtiOx68buQueeiz%2FWcFdGJAUfDtBeIdK%2Bq8PK7Niu6k%2F%2BPnxh0nANAWnP6Wk%2FyUt36Hr81Yn1y4loQn7W%2FlkD%2BWRN6beMt1B9D46ZllbaXxElvHjBKiSzmZa%2B8WMJY68PLw94lb1AVnhNWt9etalUMaKqbrebGLpUpLysH&X-Amz-Signature=55b7a946a55df3d5dcd4cb084916742428702606e3fcda9799b103c431ca5099&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LRQ7LN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjBhBDnD6QlR4gmUtSEDe7FdLc0j0JB71D%2BPaFZVPogIhAJ4qem6pRKM0wHTk3xSKY4RCqIoYifjucDH5xGtJ0uhbKv8DCDkQABoMNjM3NDIzMTgzODA1IgzO7dCrwFXPb7DA6qUq3ANtMtrvFj9coi78eidav1I2H9Qigv9StusVtrnpMDWnBD%2BfpQlor9Cd06qwtSEWPqE794p8RyGrrm1lJYkcy8yVovLPuAeHKOyJ4HtENZRtgi7PxZQJ4oCaiU%2FWzdobRxT%2F0xaQAW3qu8Ef7kMwllX9dRi4OVmM1tie5TN6aC2x%2FI%2FruO758A93Caqj3l9di9mN7N1fr1L8zFIF4dLOzflpB%2Few1WkDZsflsVdrHVDwDJBcsv2TENVQbD3T8O2W171cegtkeY82kYtfKFTJ2PBMx0%2FCQwyJQeDX51rTT9oTTC8SYOzOxFvUWArrV724IfSViwvmYpyjicOUjNlfC63WoYMmB1qG3m7Itk1NYdCO0OfEVjsOPtnyWx7vbv9LcgikA8OaAeqlFCZv4KfJGOB1ipruZ%2FuxZkOy0s8fk6mFgbRMIhEl8%2Fu0g4vKvWjD537mUlhhvXI3%2BXQduyVG38LDqyyyxtKWb4mNqtY%2BBZxzzoX4hUtbncovW%2BwLVJSOcG86BGfS%2BFvzd8TOSXjs%2BoNti%2FZHRACBBAj4L9sH8esrCS2Ytx%2FOgcsIju3DxN%2FWHMigXRnNA8CtSR31eXyZnn335AWJkP6jwLyJLbE5DEJyESt5XYFdqTv1Mt9XgzC7vLDABjqkAdpXR2fww3IO0DKBcg%2B7p4m5cjHeEJQvSyNjY95Lw879zRJWnxmW6ngtiOx68buQueeiz%2FWcFdGJAUfDtBeIdK%2Bq8PK7Niu6k%2F%2BPnxh0nANAWnP6Wk%2FyUt36Hr81Yn1y4loQn7W%2FlkD%2BWRN6beMt1B9D46ZllbaXxElvHjBKiSzmZa%2B8WMJY68PLw94lb1AVnhNWt9etalUMaKqbrebGLpUpLysH&X-Amz-Signature=93934562f171c2b3349567d9e866807e8e9a79f3ac139ed0bc770463b14bfe55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
