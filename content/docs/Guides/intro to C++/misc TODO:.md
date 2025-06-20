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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3RMGOF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXdkmTjPdmaPUQWe9ozOv3tQNWYpi4BEFkYCpBj%2B3KQwIhAMGHBYBc3Ay2VkrqozOb%2BLNTn6Unx522Xs34o2r1yIvhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa2PSE0ahOhgD8Gnoq3AN7YiqrGaMxD531GhqqqfzXN%2BKZJh6SI1oatrXHHz1c0S8WCu0VLdZqIMpbaF5sd%2BQaI0%2BckZ%2FLzaz2%2FTqgf6KkcVUG8Nyxvz4IU2huDsnsFWhBDERBg4bhpMZhXEBT6HKKw2JQYw3wxXgtAbxQP7mZn6udx2dYwsaJoqxvNnNFJORjB26CnlGM6iweIFgC1NeL5DpICKKUBGoBdxBE4PdZFv6o2Vd2%2F5xqioZv9YrxpDd9ZhQJL4nK3RcHmai3qUnaiPP2WWLONhkJYSxcrsoMeGqPixnLJ6OMAGdlAFJrI09gSnrGrafoFzmERTYniooSe6uBoYD7p5cFAJUO0kpwKaAGfTzADdbVOgKBx6ODPJbOs%2BZjfGCjpcyDJbjlCtckPkoHUP7WkipjIWcxuy4WPfJStvvMHV%2FDw852K%2BvkdgVlM5NSZhFnX3NlQIQtIzC0zSJT8UVXkghxnOmzi1ABhjYUqDl0xydqsXWO%2FKYVfT%2F0ETl1u3hn%2F2HuoYZx9KrNPOcZzveI8H%2FBdhSJkGy831Ochvf6MTTQbbEzel5p46p%2FB0eu%2Fnhi%2B0%2F4avPribv3loDcp0L6%2BucZFKF038fPQ1E2YcicKEtScJVbfkyYLoUozscLaGiAOEtdQDCv8dTCBjqkAXnpVKic5%2BeiVkW9piBZXPkRfKhJdAcy2%2BNPjavD4C62lBsiqgzFf6wOBSUiZTE29TdtkaxxchirfDibTuuUS0J2evOnyahPFwWrY2YK3s2IhNoWle0D1oQrSLqeBJIS8ZzBr95tl%2BIhe6Y22QDaahK4AOovSw1%2F4niChzVdoB4i78e6qdlDoVwrxBcsksfUVAGpYV0bkZAfUSV1t0acU1Pwwla2&X-Amz-Signature=86c4f2f00a23f614b1507c6f4b31f287d379fdb34e5a80db784d6adc13f79148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3RMGOF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXdkmTjPdmaPUQWe9ozOv3tQNWYpi4BEFkYCpBj%2B3KQwIhAMGHBYBc3Ay2VkrqozOb%2BLNTn6Unx522Xs34o2r1yIvhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa2PSE0ahOhgD8Gnoq3AN7YiqrGaMxD531GhqqqfzXN%2BKZJh6SI1oatrXHHz1c0S8WCu0VLdZqIMpbaF5sd%2BQaI0%2BckZ%2FLzaz2%2FTqgf6KkcVUG8Nyxvz4IU2huDsnsFWhBDERBg4bhpMZhXEBT6HKKw2JQYw3wxXgtAbxQP7mZn6udx2dYwsaJoqxvNnNFJORjB26CnlGM6iweIFgC1NeL5DpICKKUBGoBdxBE4PdZFv6o2Vd2%2F5xqioZv9YrxpDd9ZhQJL4nK3RcHmai3qUnaiPP2WWLONhkJYSxcrsoMeGqPixnLJ6OMAGdlAFJrI09gSnrGrafoFzmERTYniooSe6uBoYD7p5cFAJUO0kpwKaAGfTzADdbVOgKBx6ODPJbOs%2BZjfGCjpcyDJbjlCtckPkoHUP7WkipjIWcxuy4WPfJStvvMHV%2FDw852K%2BvkdgVlM5NSZhFnX3NlQIQtIzC0zSJT8UVXkghxnOmzi1ABhjYUqDl0xydqsXWO%2FKYVfT%2F0ETl1u3hn%2F2HuoYZx9KrNPOcZzveI8H%2FBdhSJkGy831Ochvf6MTTQbbEzel5p46p%2FB0eu%2Fnhi%2B0%2F4avPribv3loDcp0L6%2BucZFKF038fPQ1E2YcicKEtScJVbfkyYLoUozscLaGiAOEtdQDCv8dTCBjqkAXnpVKic5%2BeiVkW9piBZXPkRfKhJdAcy2%2BNPjavD4C62lBsiqgzFf6wOBSUiZTE29TdtkaxxchirfDibTuuUS0J2evOnyahPFwWrY2YK3s2IhNoWle0D1oQrSLqeBJIS8ZzBr95tl%2BIhe6Y22QDaahK4AOovSw1%2F4niChzVdoB4i78e6qdlDoVwrxBcsksfUVAGpYV0bkZAfUSV1t0acU1Pwwla2&X-Amz-Signature=4c3dbf9f2e6d4ad345da32bf753ad8683f162bfb904114941b1aba1126de4f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
