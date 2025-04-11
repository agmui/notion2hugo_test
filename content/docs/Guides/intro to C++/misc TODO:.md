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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3WWCQ4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCLz0hSNn38a6%2BdGD%2Fhs9YhVLTUe7dq%2FYoG%2BA8Hj%2BRUPAIgbGF4y36KjAtKCwEZRt8d43NTeyehW8J3uMVtLMZcJTMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQeIg%2BXo8HxpZueISrcAwsguPpJC7ffgTOFW0i6ALYdeaXDTaqIBxrAOzn4FzhoZO%2BA3pKvjd1G1UnUTnM94ahUombMhIi3g7C9N%2BG41rzyuZjfCVeUYKjpjNuT5lTGAwNPBxRSYOH28AzuOaBrjVbJNrNTcpmGW5zQgSVxqAnNaDma8HMIMVGfdjTNFWarIbaBmFOZ7dC5stO9RgXuld02MgxX%2F00ZXVDAErvuarUWmHwTUwniBV%2BVJco5kljL1rerGdjmwSq3NB4HkRHZQ8dbvXbziJeMrvfioqY3Qhu4hovE7%2FqeWupNtmzWTiYCS7GGIpO9hrgf71hG7SZKxzD6MtTVmuUMvPi9cO2DuhVhDdpVW8sfDbs7o2vLh%2Be8ceLZBVo4nd6qMjqTJxziPtSZm8lVJd05lNX9lbMt8ge0ZbvpgrLF2fI9HxKCzhoZCYZEzgHISVlz3Gv8lhTOVcSp%2BaOg%2FFbZgzLRCkQgZwfa6if%2B%2FUTMP%2FXwRm2Sys4aygP%2FE%2FhfxZq2sfjewkmi9gxDuu6t91qqdMtYNdPfdmyG9KtAApFbxZvKjL8XRJm6%2B7kCZQSf4Dm4MvgjYZXlB60g%2B4U8GX2ZRN%2BKhEMZVAKOSdEwu5LgSfgPm0l6%2FfP9AOLaSSzcF4DfKLXiMN2M5b8GOqUBdrznFVx64sF512F9soQZmUNgiAKz%2BlhwrRVjtW2qshZGTldx2fx595WFc0rE6FIthMwqrsAj6USIlin4Rm9JA4voio8i6cQvCqpQPCcXln8f%2B%2B3Lrjt4mZ6W5HPuyrg0ZaqY9VcWjP4h2UTLcALdowjYqp%2BQbHRBKKVaduQP%2Bce6fLWbnCm%2FA%2FLNjh%2BqnC4u8VpNrjh%2BjRBgMs5s3xmL877O2V%2Be&X-Amz-Signature=4892959ee8d2a86b01323eab7513234c2c229c16c38558c55df34ad305f10f77&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3WWCQ4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCLz0hSNn38a6%2BdGD%2Fhs9YhVLTUe7dq%2FYoG%2BA8Hj%2BRUPAIgbGF4y36KjAtKCwEZRt8d43NTeyehW8J3uMVtLMZcJTMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQeIg%2BXo8HxpZueISrcAwsguPpJC7ffgTOFW0i6ALYdeaXDTaqIBxrAOzn4FzhoZO%2BA3pKvjd1G1UnUTnM94ahUombMhIi3g7C9N%2BG41rzyuZjfCVeUYKjpjNuT5lTGAwNPBxRSYOH28AzuOaBrjVbJNrNTcpmGW5zQgSVxqAnNaDma8HMIMVGfdjTNFWarIbaBmFOZ7dC5stO9RgXuld02MgxX%2F00ZXVDAErvuarUWmHwTUwniBV%2BVJco5kljL1rerGdjmwSq3NB4HkRHZQ8dbvXbziJeMrvfioqY3Qhu4hovE7%2FqeWupNtmzWTiYCS7GGIpO9hrgf71hG7SZKxzD6MtTVmuUMvPi9cO2DuhVhDdpVW8sfDbs7o2vLh%2Be8ceLZBVo4nd6qMjqTJxziPtSZm8lVJd05lNX9lbMt8ge0ZbvpgrLF2fI9HxKCzhoZCYZEzgHISVlz3Gv8lhTOVcSp%2BaOg%2FFbZgzLRCkQgZwfa6if%2B%2FUTMP%2FXwRm2Sys4aygP%2FE%2FhfxZq2sfjewkmi9gxDuu6t91qqdMtYNdPfdmyG9KtAApFbxZvKjL8XRJm6%2B7kCZQSf4Dm4MvgjYZXlB60g%2B4U8GX2ZRN%2BKhEMZVAKOSdEwu5LgSfgPm0l6%2FfP9AOLaSSzcF4DfKLXiMN2M5b8GOqUBdrznFVx64sF512F9soQZmUNgiAKz%2BlhwrRVjtW2qshZGTldx2fx595WFc0rE6FIthMwqrsAj6USIlin4Rm9JA4voio8i6cQvCqpQPCcXln8f%2B%2B3Lrjt4mZ6W5HPuyrg0ZaqY9VcWjP4h2UTLcALdowjYqp%2BQbHRBKKVaduQP%2Bce6fLWbnCm%2FA%2FLNjh%2BqnC4u8VpNrjh%2BjRBgMs5s3xmL877O2V%2Be&X-Amz-Signature=4294f9ac7c057e1921cf31d69ab568da4a2c549fd8a45e427cb5b2c9a3d5d39b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
