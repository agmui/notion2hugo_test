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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ42GJIN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoDJv9pA062v3aGjRUZsKx%2B%2FXN22JyGcLhRjQXVd0KCAiA9i4nF9%2Fn1h%2FGxZrpk502J7lr0XvirWYmkp7AaCpfKNyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBbN5B8F4k%2FljVA4EKtwD9pzgx3NVEuCuFL3p1%2FpZY9n%2Bs9K16mc0KFBMxPjVXfLLLpA7OlyLnIKXCu18LIbcJWPd3qwCE1%2BXvL2wq0GNS22ps46%2BaWUdXMMxuzqE5tEdnTwOJusyLVZvrxYn9xBbR2re781bxzmx3QOCKkoI%2B3Uyje0Y3MMTtRb8FwHWFJcNSRXTfC4ue%2BRCNrbjlp%2FofdXopshmHnomUAKNomiDSyaJ%2BWRS121QWNbRQzgKZFKbZNMk2tJBrtAZTygu858Oxi1H4S8LNKOSjvA5hWQzbpteP%2BarFEKfGG8JUZ91nPWbE6joZesMtHoWqpsM%2BqcA%2FeTCYwKpwd3wvAT3beVIwBWkcF0FqOxqCIzgmUciDAAwHcShnmY3Hmc8aRkE%2BfxVO4derM2BcWEiu36TUjHKFXQ%2F9zIbI2FERtVnMOUuGWnWiWev9G2WHMZiLMkzDBa8JAtoT3a4BYQPfhCUqsC3HNCgmEW2GxUIY58mHafwiCG31tv8zuyIn06kc8OvA%2BbESWdJV5L5j2EFtheYbK8NkBaaGa%2Fabw11NKPk9J6%2FGhwr7KoUT9pnLH6L%2FdrwDuFJxyiePJRpvp7lcJyBQZMHaQTCNLOLowqZ0MVg0YMyPzoKgd5b82bGhi%2FgBkMw%2FrCUwgY6pgE6z%2FnYrfI%2FpPVqYi260Lgdmx2ak1x5mQGe%2BvlIKPAXx4sWj6CYClePNQOsurv8JtbfcmXg9pzi%2BwDgldQ9S9gDkHYtDmOlO%2BmGATd4Lo89snq76MmWBcbkjn1K9UqAdaIdmf2vMj0VJ3mqbbPpf6vdlgmh7HcPVHIMggB1P2JdU5TKY3c1wb6Ibq2%2BXaNuk9SkvctgWYI4ogwqS3ig3gdtYym3J7N2&X-Amz-Signature=2f3399ec3c85a5287fc0a930dcf72e33d074ed61e2ff49dbd859c979f07272f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ42GJIN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoDJv9pA062v3aGjRUZsKx%2B%2FXN22JyGcLhRjQXVd0KCAiA9i4nF9%2Fn1h%2FGxZrpk502J7lr0XvirWYmkp7AaCpfKNyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBbN5B8F4k%2FljVA4EKtwD9pzgx3NVEuCuFL3p1%2FpZY9n%2Bs9K16mc0KFBMxPjVXfLLLpA7OlyLnIKXCu18LIbcJWPd3qwCE1%2BXvL2wq0GNS22ps46%2BaWUdXMMxuzqE5tEdnTwOJusyLVZvrxYn9xBbR2re781bxzmx3QOCKkoI%2B3Uyje0Y3MMTtRb8FwHWFJcNSRXTfC4ue%2BRCNrbjlp%2FofdXopshmHnomUAKNomiDSyaJ%2BWRS121QWNbRQzgKZFKbZNMk2tJBrtAZTygu858Oxi1H4S8LNKOSjvA5hWQzbpteP%2BarFEKfGG8JUZ91nPWbE6joZesMtHoWqpsM%2BqcA%2FeTCYwKpwd3wvAT3beVIwBWkcF0FqOxqCIzgmUciDAAwHcShnmY3Hmc8aRkE%2BfxVO4derM2BcWEiu36TUjHKFXQ%2F9zIbI2FERtVnMOUuGWnWiWev9G2WHMZiLMkzDBa8JAtoT3a4BYQPfhCUqsC3HNCgmEW2GxUIY58mHafwiCG31tv8zuyIn06kc8OvA%2BbESWdJV5L5j2EFtheYbK8NkBaaGa%2Fabw11NKPk9J6%2FGhwr7KoUT9pnLH6L%2FdrwDuFJxyiePJRpvp7lcJyBQZMHaQTCNLOLowqZ0MVg0YMyPzoKgd5b82bGhi%2FgBkMw%2FrCUwgY6pgE6z%2FnYrfI%2FpPVqYi260Lgdmx2ak1x5mQGe%2BvlIKPAXx4sWj6CYClePNQOsurv8JtbfcmXg9pzi%2BwDgldQ9S9gDkHYtDmOlO%2BmGATd4Lo89snq76MmWBcbkjn1K9UqAdaIdmf2vMj0VJ3mqbbPpf6vdlgmh7HcPVHIMggB1P2JdU5TKY3c1wb6Ibq2%2BXaNuk9SkvctgWYI4ogwqS3ig3gdtYym3J7N2&X-Amz-Signature=aabc2739949f05a1281429461853e02acc2187787df48e889f09d72b36ee3416&X-Amz-SignedHeaders=host&x-id=GetObject)

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
