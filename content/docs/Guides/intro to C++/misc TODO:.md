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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VNTU5N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCFmJJfSnCu3QhtwD5btXampZgMmzhNOLvoQ%2F5u8n0%2BzQIgDsOFqVIeOBx7R%2BGHrpdORjdIACuTGTjDkHCEAs%2FM5pEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8eSIyVHLBI0pwR1yrcA%2B3XazuBxwAUEbQk3m1vkdub4kDYxVVczyeMhG12yNPjD%2FYqghY%2F39xv%2BrBckjNZn%2FUjzz%2B6RRuam1zztja4ATcn13sNh34X3aZc19dCFBkWOmsg66Ne4t1SDDWm0MSGB8ZWMRN02RG7eU6vOEBTOiqPV4t8xZGiSwJBIW0lCTLnPiaIP7mEf6b8hzKCdCgGNoyWAEg8f3EK9vMnt3oBL9wIQqgfHXXefa8pIhoUVjt8k2vgce%2F0dGfJnvaId9N%2BlHaBNv1OZRmg7tzlE2htBq2FwRdTeu90%2Bj1GmKXc2OKsgFrvRzfyq9tn1EAn%2BDpLp0YSuC2L94E23TfQnXo9G5HmkmU0s4gatzjihSarsURT6rUDa0iGXE9Ea2rP9LAn9cm1L%2FOT4CdBbsWn1kV00Xtj2%2FW%2BJ0p2KMev%2FH75pkwvz1JM71bPqTyqcKua%2B2UaPfZDuaM%2BjQlKY8a6fa%2FVx4W4Bauw9%2Fg9l%2BbHSK3Q9MdtMbX%2BeqPbICHSgNP4KdNixCvk%2BLC0jvYUciXmS6yJkplN%2B3G6RQRRWTNqrndV9AoM%2BcBgO5LhKcVcUzeTJGprJaHhlmA6UPHGutATycYdS7vMqnRInSSS53ZHabchHwyc8RH7z3XxrjPwAk22MJ%2BWrr8GOqUBvw4mRWbZDt5Tm4JXo0VI7414IraM5sIG%2FpvkWUxK45qcj%2BfV7uaI1jtca6ieMqWSK%2BpJfu%2FfZQj4dMSRKlLpPiiFVxciBGbgPN%2F4FGabFuZlfcgoc4cT1h587YYcaykEDrcIII%2B5djx9vl9OpDxM%2FcHIYq2OLRkDhgLMUlx6AYGwDfE0tqAd6R8Gi0A5C5W%2FGr9OiPrIix7s5%2FTXzZ2oW4C%2FQcgQ&X-Amz-Signature=2571cc8936cb402e93a79b708c937d9d66f1de8cbd444f393950cb6cff179fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VNTU5N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCFmJJfSnCu3QhtwD5btXampZgMmzhNOLvoQ%2F5u8n0%2BzQIgDsOFqVIeOBx7R%2BGHrpdORjdIACuTGTjDkHCEAs%2FM5pEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8eSIyVHLBI0pwR1yrcA%2B3XazuBxwAUEbQk3m1vkdub4kDYxVVczyeMhG12yNPjD%2FYqghY%2F39xv%2BrBckjNZn%2FUjzz%2B6RRuam1zztja4ATcn13sNh34X3aZc19dCFBkWOmsg66Ne4t1SDDWm0MSGB8ZWMRN02RG7eU6vOEBTOiqPV4t8xZGiSwJBIW0lCTLnPiaIP7mEf6b8hzKCdCgGNoyWAEg8f3EK9vMnt3oBL9wIQqgfHXXefa8pIhoUVjt8k2vgce%2F0dGfJnvaId9N%2BlHaBNv1OZRmg7tzlE2htBq2FwRdTeu90%2Bj1GmKXc2OKsgFrvRzfyq9tn1EAn%2BDpLp0YSuC2L94E23TfQnXo9G5HmkmU0s4gatzjihSarsURT6rUDa0iGXE9Ea2rP9LAn9cm1L%2FOT4CdBbsWn1kV00Xtj2%2FW%2BJ0p2KMev%2FH75pkwvz1JM71bPqTyqcKua%2B2UaPfZDuaM%2BjQlKY8a6fa%2FVx4W4Bauw9%2Fg9l%2BbHSK3Q9MdtMbX%2BeqPbICHSgNP4KdNixCvk%2BLC0jvYUciXmS6yJkplN%2B3G6RQRRWTNqrndV9AoM%2BcBgO5LhKcVcUzeTJGprJaHhlmA6UPHGutATycYdS7vMqnRInSSS53ZHabchHwyc8RH7z3XxrjPwAk22MJ%2BWrr8GOqUBvw4mRWbZDt5Tm4JXo0VI7414IraM5sIG%2FpvkWUxK45qcj%2BfV7uaI1jtca6ieMqWSK%2BpJfu%2FfZQj4dMSRKlLpPiiFVxciBGbgPN%2F4FGabFuZlfcgoc4cT1h587YYcaykEDrcIII%2B5djx9vl9OpDxM%2FcHIYq2OLRkDhgLMUlx6AYGwDfE0tqAd6R8Gi0A5C5W%2FGr9OiPrIix7s5%2FTXzZ2oW4C%2FQcgQ&X-Amz-Signature=4eae04b39e14afee3a39b5febf57a3e6ea8125c6ff0af3d37f53ec0aff5c91ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
