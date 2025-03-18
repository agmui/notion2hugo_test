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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OKS2EH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFVrSS6bO7xRJt3sVP5ba464zun9CYfE7hiWBbhxNQQLAiEA7PkYmr%2F0u8B11H4zl59Xxqi%2F%2FnmwABkmn2PuQ%2FvZSLsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMRASjgMLmm0MyXzuCrcA5aEcjcyGE2L8iSZkWdLJuFVrtstmrk%2BKSw3rYmGGnigY6uQfGSK9qqeRANuRXaAXQByk%2FRDqK8HUeM7gxscpDZf1XLtRQncB0abr8srGOfOvKGCAzZGQLPmhVAu%2F380vc9ywC3GSP7WFHMVgtwV7w5C5NqroEeqjdGxl7BAKr0G1miIGAW6OXmKKGDYwnm6qJEe7o72CgSDLKvaKHBM0Z91Ral2Or0JfprZSEG2E0Yssolf9zpwtJe9tqY93dslF7twYY4XaV287DaVMyq5%2Bv0jcboJSlGK2FZfN7IJ9sI9MSar7lmEajPFlg9WQb7zTwtiJXMVt6ASTAwo204MbUxJatjBL%2BZnYJefJBSAKJrDRl8wdKa6HQhNbeAV32%2FWmP3q%2FuPkC9%2Bsfw1qzwslBLmYgTUOITcI%2ByOUqf%2BVBby5qONW2UH1c0zUA8pa3WHVr7zsy8VKwNJu7AZFaf17kGakA0iXvP%2BTsNnp4xlty2mhh1zeTmjEd89SpeP14eq9p9rgy9byQwmCY4youPK3xiDrx3Fs5KRk2uLJYcWdzhxcQXZmYG3KuSkn6JZuid5pfx4ni3DgMp9O0gbeIogfO%2BaI9x6pesuXWQxiVFKakdGx%2Bm%2FMWlPQq0TE1dgbMMfX5L4GOqUBlgj%2FdLhBBoY6%2FS1ztNi0mI2cLshfFiCzAMWADPHOoMEvdN7IU34cyuWKSFLuGyQsxh2QiS2JgWEzPU8L3Q7gPWqZnV0qq8OH784vCpzhC9eXCmQtPxvZd3uSA0av%2B5RDQEByZ%2BPFzlQDk1Jmx9RZ6NyoTqmfeXYPxilyvtim61XGqqboUFlaz086H%2B%2F0kq8%2FYVBY18dEgeWO6b6afCPsHwJiVI9o&X-Amz-Signature=47fa7f265aaa9d21ea38a9f986823f823cbf6774330914316c7f7eb42d1eb6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OKS2EH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFVrSS6bO7xRJt3sVP5ba464zun9CYfE7hiWBbhxNQQLAiEA7PkYmr%2F0u8B11H4zl59Xxqi%2F%2FnmwABkmn2PuQ%2FvZSLsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMRASjgMLmm0MyXzuCrcA5aEcjcyGE2L8iSZkWdLJuFVrtstmrk%2BKSw3rYmGGnigY6uQfGSK9qqeRANuRXaAXQByk%2FRDqK8HUeM7gxscpDZf1XLtRQncB0abr8srGOfOvKGCAzZGQLPmhVAu%2F380vc9ywC3GSP7WFHMVgtwV7w5C5NqroEeqjdGxl7BAKr0G1miIGAW6OXmKKGDYwnm6qJEe7o72CgSDLKvaKHBM0Z91Ral2Or0JfprZSEG2E0Yssolf9zpwtJe9tqY93dslF7twYY4XaV287DaVMyq5%2Bv0jcboJSlGK2FZfN7IJ9sI9MSar7lmEajPFlg9WQb7zTwtiJXMVt6ASTAwo204MbUxJatjBL%2BZnYJefJBSAKJrDRl8wdKa6HQhNbeAV32%2FWmP3q%2FuPkC9%2Bsfw1qzwslBLmYgTUOITcI%2ByOUqf%2BVBby5qONW2UH1c0zUA8pa3WHVr7zsy8VKwNJu7AZFaf17kGakA0iXvP%2BTsNnp4xlty2mhh1zeTmjEd89SpeP14eq9p9rgy9byQwmCY4youPK3xiDrx3Fs5KRk2uLJYcWdzhxcQXZmYG3KuSkn6JZuid5pfx4ni3DgMp9O0gbeIogfO%2BaI9x6pesuXWQxiVFKakdGx%2Bm%2FMWlPQq0TE1dgbMMfX5L4GOqUBlgj%2FdLhBBoY6%2FS1ztNi0mI2cLshfFiCzAMWADPHOoMEvdN7IU34cyuWKSFLuGyQsxh2QiS2JgWEzPU8L3Q7gPWqZnV0qq8OH784vCpzhC9eXCmQtPxvZd3uSA0av%2B5RDQEByZ%2BPFzlQDk1Jmx9RZ6NyoTqmfeXYPxilyvtim61XGqqboUFlaz086H%2B%2F0kq8%2FYVBY18dEgeWO6b6afCPsHwJiVI9o&X-Amz-Signature=0ff28487118e814cd751d8d700d6034cf66f69ec1e443e6e21887ca7c39eb600&X-Amz-SignedHeaders=host&x-id=GetObject)

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
