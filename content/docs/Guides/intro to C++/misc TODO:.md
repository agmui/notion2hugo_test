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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OEUH2IW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD6KKo%2FZ6x6DvPgKM1wyjkcS11JvBNrKNw%2Frzk3ehysyQIhAJoS%2FaE03dxIhiUozRr3Z98cIeYxxruDbPDRAwe%2FORZTKv8DCEsQABoMNjM3NDIzMTgzODA1IgzxiSyqBUG7kQHoickq3APugVV6l%2By6CASp%2FSTMgWCMCcc2n%2BARZ6kXk%2BRmdmLOFXwVuXNA7hm%2FmnZKDoqplr4Si8Wc1TF3Lnx0F%2B5Dv2ET84Zj5zPHL3hzBxVWRn3Cg4%2BPWTa%2BvC0jqRne9NZ6J3V%2BMr0dXHkuyotqdGg4cUPJ4SnoPRk3qOwjNJmrNaAi5ziTKmFTGAvNy7%2FRgP6S73cobbGarPj9Y8GZn3jJI%2BScjE%2BtuiP%2BT8Mx%2BRjOpgqrpdxKlmfrAmbpaWf6eGc8FIWw1%2BDMs0YZz7nEHOhq1y6TkZgmeHagxAcdLaQwqIWttZYX4RPZEpq0S6BN7xPPw7i9A3pdQN%2BbwTuBcT3eyyowkYubZXQ0ayE7aKVdkytTgbPIATZvqFdgffd82FkZgph4tdUoQkpaSlmmgzk0U73cfGWPVds0c4WekFzTuGfbqYri7dUXHVyajQXijKs8eFVJ6yzZhRo8UzLzVshtvhsm4DKXLTQJln8%2FT%2BnzYQOZ0r0Q7S6dkioh1MtMnMHFWrDsiSDjhR7IJ35JcGTlm%2FEzIty6r6mNed2MFra2x38Nudwuie8jtWcR%2Bgd7L81T%2BfnZps8f8cm2XTv9b0AW8jmGQNEee7vLJ3zndCUpxeAx51n8NX574l7bfojufTCPqYfCBjqkAdw1A6G3qxMbX1ph98e0YE9xgOpPH%2F8qx5bULUnXzhnTXGX9zE4FVIpjhXcJ9dySTZWvtvYnc1gaWwT1IhOp6aUBDrWVq868tC7%2FISsbK2HGlJRMo%2FoEKLigIs5WwocJENvpU%2FdUqg%2FNnRVgg96dcepQL99jXFHcyBNQquNiPTIgbUdxYA1rloCMmXn9qf1B7cC2Rw2MfCkaCnIJy68WN8wVdQ1Z&X-Amz-Signature=7665229b26a79de162e2b2604df7228597eac3e92e139154686281233cdba20a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OEUH2IW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD6KKo%2FZ6x6DvPgKM1wyjkcS11JvBNrKNw%2Frzk3ehysyQIhAJoS%2FaE03dxIhiUozRr3Z98cIeYxxruDbPDRAwe%2FORZTKv8DCEsQABoMNjM3NDIzMTgzODA1IgzxiSyqBUG7kQHoickq3APugVV6l%2By6CASp%2FSTMgWCMCcc2n%2BARZ6kXk%2BRmdmLOFXwVuXNA7hm%2FmnZKDoqplr4Si8Wc1TF3Lnx0F%2B5Dv2ET84Zj5zPHL3hzBxVWRn3Cg4%2BPWTa%2BvC0jqRne9NZ6J3V%2BMr0dXHkuyotqdGg4cUPJ4SnoPRk3qOwjNJmrNaAi5ziTKmFTGAvNy7%2FRgP6S73cobbGarPj9Y8GZn3jJI%2BScjE%2BtuiP%2BT8Mx%2BRjOpgqrpdxKlmfrAmbpaWf6eGc8FIWw1%2BDMs0YZz7nEHOhq1y6TkZgmeHagxAcdLaQwqIWttZYX4RPZEpq0S6BN7xPPw7i9A3pdQN%2BbwTuBcT3eyyowkYubZXQ0ayE7aKVdkytTgbPIATZvqFdgffd82FkZgph4tdUoQkpaSlmmgzk0U73cfGWPVds0c4WekFzTuGfbqYri7dUXHVyajQXijKs8eFVJ6yzZhRo8UzLzVshtvhsm4DKXLTQJln8%2FT%2BnzYQOZ0r0Q7S6dkioh1MtMnMHFWrDsiSDjhR7IJ35JcGTlm%2FEzIty6r6mNed2MFra2x38Nudwuie8jtWcR%2Bgd7L81T%2BfnZps8f8cm2XTv9b0AW8jmGQNEee7vLJ3zndCUpxeAx51n8NX574l7bfojufTCPqYfCBjqkAdw1A6G3qxMbX1ph98e0YE9xgOpPH%2F8qx5bULUnXzhnTXGX9zE4FVIpjhXcJ9dySTZWvtvYnc1gaWwT1IhOp6aUBDrWVq868tC7%2FISsbK2HGlJRMo%2FoEKLigIs5WwocJENvpU%2FdUqg%2FNnRVgg96dcepQL99jXFHcyBNQquNiPTIgbUdxYA1rloCMmXn9qf1B7cC2Rw2MfCkaCnIJy68WN8wVdQ1Z&X-Amz-Signature=b79e8e4df95166c4d1a152ca6ff180fca9b64b063f681003d41cf05e0b9a3948&X-Amz-SignedHeaders=host&x-id=GetObject)

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
