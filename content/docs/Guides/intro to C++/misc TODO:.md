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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZIBTHM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FzvfKTaCxy3yTBr4WsJH8HwJPLWTrgM%2F2n2KTRJFmoAiAxWGSzRHtx164bJKCSbHqDqMLPXheuVISuYAv5Rbl5cSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTImGoYbFl7vA6YHYKtwDsOIoenO7mtZ7ES8rCTcBbZtgVoJaVXf4v6tXGy6Dl8GeNn2mMdoLXai3PPtNLtxku%2BYpwE1qC%2F0XMUgUN3Pye0MmUfB0HUBRo2ufyXZ804R7FidnwogBk6ZrsS5%2Bw3P79Ll7KzpK3u8DEqg9EWLl72Mqg9URRRyvKYxLR%2BTVABChZ89OOb9hleg%2FkHAzai%2BVkdKcnYA558rd9klv9rU7woGyA7rdBVCfxkaDXwt0%2BnHeD%2FI1J0oGAT%2BYvNhr5JZcu2qYkdAuf1OoxCqzlX%2FqvKPuMM%2BkimQ6nDo1XSZqv6HX%2BawOJJHtN83udSe%2Fj5NF3wcPwRoTd%2BlZhfAWS%2FW4bZI81WnsMpojy%2Fk4e5ZvbEPbr1gIGTTrTBmS6%2F7QjBH%2BO0Pu0p0hH6fm5rewkozEH3xDxbb2L9Z9FbrH5nlVPGYb%2BQvS91xsbpP9NTXn%2BrRwL6YV%2FOFRxayITal6AaPNEg4AwSeF2biclb8LZmKj1qfRkvQvPyw1VzatZRQEdJHWSW74jgHViYVhZU1CO%2B0wKimh1jlR9vn8iTbj2lh%2F19dpDXS%2FRAGR%2B7cys43OPlUhcAaDjUztKfi%2Fr%2Fabom78sA0LBrBbhNNAgNE1fFc0xt95HqRmQ3cgarJf8eIw8dW9wwY6pgHHToWB%2FXPxopIofUz6oaF%2BPDJBq3Xqr%2BeP6%2FU7k0r%2FM2Z9ehSgwzu6QnkT%2BUDBPkSBbjFWGy06jPwdHj%2Bq1CDWhfV7vEaUdaoxkbCVYDQDO%2BLi3y%2Bnid7Omevx9G9yjT3wB2VyRhziBFfDBFYNhHKFPDneUuyxFlPYS2Qsmrjnk%2BzR9FfBiJQrJcM5Q6B8B%2Bz9fLfeIqaOrgaV%2F3d5HXW%2FsJfs6i5o&X-Amz-Signature=8b322ae6debd45a669b27802ad6181e72340bba747c1dd64d730c25f8e665e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZIBTHM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FzvfKTaCxy3yTBr4WsJH8HwJPLWTrgM%2F2n2KTRJFmoAiAxWGSzRHtx164bJKCSbHqDqMLPXheuVISuYAv5Rbl5cSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTImGoYbFl7vA6YHYKtwDsOIoenO7mtZ7ES8rCTcBbZtgVoJaVXf4v6tXGy6Dl8GeNn2mMdoLXai3PPtNLtxku%2BYpwE1qC%2F0XMUgUN3Pye0MmUfB0HUBRo2ufyXZ804R7FidnwogBk6ZrsS5%2Bw3P79Ll7KzpK3u8DEqg9EWLl72Mqg9URRRyvKYxLR%2BTVABChZ89OOb9hleg%2FkHAzai%2BVkdKcnYA558rd9klv9rU7woGyA7rdBVCfxkaDXwt0%2BnHeD%2FI1J0oGAT%2BYvNhr5JZcu2qYkdAuf1OoxCqzlX%2FqvKPuMM%2BkimQ6nDo1XSZqv6HX%2BawOJJHtN83udSe%2Fj5NF3wcPwRoTd%2BlZhfAWS%2FW4bZI81WnsMpojy%2Fk4e5ZvbEPbr1gIGTTrTBmS6%2F7QjBH%2BO0Pu0p0hH6fm5rewkozEH3xDxbb2L9Z9FbrH5nlVPGYb%2BQvS91xsbpP9NTXn%2BrRwL6YV%2FOFRxayITal6AaPNEg4AwSeF2biclb8LZmKj1qfRkvQvPyw1VzatZRQEdJHWSW74jgHViYVhZU1CO%2B0wKimh1jlR9vn8iTbj2lh%2F19dpDXS%2FRAGR%2B7cys43OPlUhcAaDjUztKfi%2Fr%2Fabom78sA0LBrBbhNNAgNE1fFc0xt95HqRmQ3cgarJf8eIw8dW9wwY6pgHHToWB%2FXPxopIofUz6oaF%2BPDJBq3Xqr%2BeP6%2FU7k0r%2FM2Z9ehSgwzu6QnkT%2BUDBPkSBbjFWGy06jPwdHj%2Bq1CDWhfV7vEaUdaoxkbCVYDQDO%2BLi3y%2Bnid7Omevx9G9yjT3wB2VyRhziBFfDBFYNhHKFPDneUuyxFlPYS2Qsmrjnk%2BzR9FfBiJQrJcM5Q6B8B%2Bz9fLfeIqaOrgaV%2F3d5HXW%2FsJfs6i5o&X-Amz-Signature=6d2ec1cc772728c5d556dca06c0026a653ea64254d206d3a54a1ec26aa2662b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
