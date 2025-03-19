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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOMAVXB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAPdij6cFSlQjkQICrIZ6rGxDbe8Xx1ASjYp%2BkZZGq8tAiAzkcmfR%2FoRhV8nPyVyGuGyZILIq%2FNDwM3bKYG0FIEJ%2Fyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMcLzKfXKFGlfAS7wTKtwDDNDlL0TUtJULG4IF6DOhaYjb8rjtm%2FDsjZZLHqWXGP4w6LNHqtGtOl%2F7VNEXPGB5OO6%2FP%2BOgK0DSf4dx64GxUfjJJVjgypBSthJggj50GgMe29LNg4ibSzNQ%2B%2BYEiiF3FV%2FRC4WV92cDAx4XXQQC%2Br7JenMmbyOtvyTxHbLXYE%2FT5wiZZFGHpOorCljGTg8LhnCLLTytKU9K38f2X5Y5MXu9zwjgv62CRTn2bq8Uz8wT%2BzKSKj41GbZ0js%2FSqyx8x7caJ4tRj6XAX9YaVEvsxvS9PI1%2BvMlfC4RHDMrREU%2B837EVUptOSaWfaMM%2Bxy1%2B1foy8BiOU%2BGQyKImg1E49cbJ83iUSrFwIdw97hCLKpm4f3T2wUIKbb1ZO2gb7REyxJtl3%2FlzDkBdQKuYD8STwxrbSupkDb1CW9Zk2jDNE0226wzHTqBkUr4k8pNuETzGfTyI9vmk6Fd1ZJH4NwvZNvnVQkh4M3aKCDTXRZ4phsQmalBGqyrg9OvgnCCvzOofVJbsKiLcg3aFs44MsyWqT9xCJ9b2y1uJ%2BqE8KHQbXjtILVUoETYtBak43U7o1GVostvirRNMU9lMFZKtIxU%2Fm6fjKVuqOyEyKWDdFLctylB7APqvxPVWCCYg%2F6Yw6tjsvgY6pgHEcIe808%2BmKOUe4h1lOYlkhtncHP80IZIg7pY9dTT4Az2%2F52ucTpgVacocj3gW2PAo2v89FYqDw%2BASr%2B6IKcFcOeS0ceLgwlhdw4e5aype%2B2Rnr3%2FnJGTR8yDza4SprfYyffEM4ofOXzInG%2FLsomb6RKchIdhflHaw%2BOCyR51VCqh8I6kzoBxrwehqEoKQuJuhujFEJOvQMPUHlv356Dp%2BcebcmEdz&X-Amz-Signature=e5986460915aafcf0f17e7802c0edbf334361370746114db4e0d8065757a4801&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOMAVXB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAPdij6cFSlQjkQICrIZ6rGxDbe8Xx1ASjYp%2BkZZGq8tAiAzkcmfR%2FoRhV8nPyVyGuGyZILIq%2FNDwM3bKYG0FIEJ%2Fyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMcLzKfXKFGlfAS7wTKtwDDNDlL0TUtJULG4IF6DOhaYjb8rjtm%2FDsjZZLHqWXGP4w6LNHqtGtOl%2F7VNEXPGB5OO6%2FP%2BOgK0DSf4dx64GxUfjJJVjgypBSthJggj50GgMe29LNg4ibSzNQ%2B%2BYEiiF3FV%2FRC4WV92cDAx4XXQQC%2Br7JenMmbyOtvyTxHbLXYE%2FT5wiZZFGHpOorCljGTg8LhnCLLTytKU9K38f2X5Y5MXu9zwjgv62CRTn2bq8Uz8wT%2BzKSKj41GbZ0js%2FSqyx8x7caJ4tRj6XAX9YaVEvsxvS9PI1%2BvMlfC4RHDMrREU%2B837EVUptOSaWfaMM%2Bxy1%2B1foy8BiOU%2BGQyKImg1E49cbJ83iUSrFwIdw97hCLKpm4f3T2wUIKbb1ZO2gb7REyxJtl3%2FlzDkBdQKuYD8STwxrbSupkDb1CW9Zk2jDNE0226wzHTqBkUr4k8pNuETzGfTyI9vmk6Fd1ZJH4NwvZNvnVQkh4M3aKCDTXRZ4phsQmalBGqyrg9OvgnCCvzOofVJbsKiLcg3aFs44MsyWqT9xCJ9b2y1uJ%2BqE8KHQbXjtILVUoETYtBak43U7o1GVostvirRNMU9lMFZKtIxU%2Fm6fjKVuqOyEyKWDdFLctylB7APqvxPVWCCYg%2F6Yw6tjsvgY6pgHEcIe808%2BmKOUe4h1lOYlkhtncHP80IZIg7pY9dTT4Az2%2F52ucTpgVacocj3gW2PAo2v89FYqDw%2BASr%2B6IKcFcOeS0ceLgwlhdw4e5aype%2B2Rnr3%2FnJGTR8yDza4SprfYyffEM4ofOXzInG%2FLsomb6RKchIdhflHaw%2BOCyR51VCqh8I6kzoBxrwehqEoKQuJuhujFEJOvQMPUHlv356Dp%2BcebcmEdz&X-Amz-Signature=fe1ff1efff29cab81f13bdd18f8783904b290f8b7f00c99078fcd4287606bb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
