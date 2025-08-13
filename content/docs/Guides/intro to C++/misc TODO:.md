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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXL6UQMX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FfYj8IGzFSXnfgP3D6aiYzL2ZR%2F%2BRXqBLWkPTMwZ%2F7AiASnKO5IAerOezrCb1r4YkpXGN1S4iPQkxo7IiCJwdGNyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyt2qWdPaF%2FwH%2F9myKtwDkQumR8rof9rHLr1NNci%2BR2WYWWcMn7ldpRgKx4EL%2FfdW22bgKR6MfVd8sefVDSeSE%2FU4ddy5Redjr9T5VNTOupBj35xZWK2dGX%2BRILe8QC0KFqczPrlCrhinFUVTryxfdv2nAj7Wn55iAfczOoFF7rbzCQZBZY%2BwIq65b2vp4da9JjhReZ%2B3DaRkR2M2is8x%2FGfUFK4olpRUArJvwEcby28Zv0PhnI4BMetl01sheB1BV8WzZeCpG8n%2FR1T1Uc4uh164X5QHPE7O1%2FLSytncqADEiCdrzQMPnCzJModZBbSogecNo%2FROBQI8D4x6R%2ByMsrxQJ7UvvWeAlLx4JwK6w4d119TSQc2x8LXZiBOVVvPqWzzL8DUBarNEYl9m2jUgpR4KlpIrzsuWICn3TABV%2BXMjkYZJhF3Jq8o8PF%2F7GeAgOoxkV9fICWpopUr5uY0bQjlXX%2BjPyXkMuWy6jIAhnZpe5Cp8q%2FP%2Fh8QbO4N9e7gOwPPKpkRgNAzBQlVUhK9Vbx6KTQ2CQlX58Z9aRlkVFpY4oRnpYW4sHIR2%2FuM7iODWPLvLfcrM2N0t%2Fmd8zb3jmJK5fE8Luc1cJZxRjSoAifXHKNR9%2FKDaAzJPKyjnRWgW9DAlYM%2BVUKbdVLEw1Z7xxAY6pgG3E51W32IUFc1Pl%2F9rZWejMav6TyTNEa%2Bfs8YbHF0B6i8DCvPUj8sMTby6K6kGBtOKS7AbHDJu5JX04z6Af0n8%2BF5QKCVNdO0c4YF43PuoP1W%2FI1DVkLEoq4IMSP7p68fAYw8uU8ZP6Xph9eHhZkAOkVeNp%2Fb2DTVN92TDY6uU5r%2Farei11pxZNi7A9n5X6uLTUl3ggYq%2Bm19FcDdqluOeqrZe4iRG&X-Amz-Signature=2857c49579b8ba6145ee9f76d1b2bb6d5a22ace007233889f3c39cfd42e2017f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXL6UQMX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FfYj8IGzFSXnfgP3D6aiYzL2ZR%2F%2BRXqBLWkPTMwZ%2F7AiASnKO5IAerOezrCb1r4YkpXGN1S4iPQkxo7IiCJwdGNyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyt2qWdPaF%2FwH%2F9myKtwDkQumR8rof9rHLr1NNci%2BR2WYWWcMn7ldpRgKx4EL%2FfdW22bgKR6MfVd8sefVDSeSE%2FU4ddy5Redjr9T5VNTOupBj35xZWK2dGX%2BRILe8QC0KFqczPrlCrhinFUVTryxfdv2nAj7Wn55iAfczOoFF7rbzCQZBZY%2BwIq65b2vp4da9JjhReZ%2B3DaRkR2M2is8x%2FGfUFK4olpRUArJvwEcby28Zv0PhnI4BMetl01sheB1BV8WzZeCpG8n%2FR1T1Uc4uh164X5QHPE7O1%2FLSytncqADEiCdrzQMPnCzJModZBbSogecNo%2FROBQI8D4x6R%2ByMsrxQJ7UvvWeAlLx4JwK6w4d119TSQc2x8LXZiBOVVvPqWzzL8DUBarNEYl9m2jUgpR4KlpIrzsuWICn3TABV%2BXMjkYZJhF3Jq8o8PF%2F7GeAgOoxkV9fICWpopUr5uY0bQjlXX%2BjPyXkMuWy6jIAhnZpe5Cp8q%2FP%2Fh8QbO4N9e7gOwPPKpkRgNAzBQlVUhK9Vbx6KTQ2CQlX58Z9aRlkVFpY4oRnpYW4sHIR2%2FuM7iODWPLvLfcrM2N0t%2Fmd8zb3jmJK5fE8Luc1cJZxRjSoAifXHKNR9%2FKDaAzJPKyjnRWgW9DAlYM%2BVUKbdVLEw1Z7xxAY6pgG3E51W32IUFc1Pl%2F9rZWejMav6TyTNEa%2Bfs8YbHF0B6i8DCvPUj8sMTby6K6kGBtOKS7AbHDJu5JX04z6Af0n8%2BF5QKCVNdO0c4YF43PuoP1W%2FI1DVkLEoq4IMSP7p68fAYw8uU8ZP6Xph9eHhZkAOkVeNp%2Fb2DTVN92TDY6uU5r%2Farei11pxZNi7A9n5X6uLTUl3ggYq%2Bm19FcDdqluOeqrZe4iRG&X-Amz-Signature=fac20e2b6075e957cf87679a271b78cbfffd528a018311030e3cc215d0bc3d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
