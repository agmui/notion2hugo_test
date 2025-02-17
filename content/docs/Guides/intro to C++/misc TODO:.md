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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQL3XCRA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD0fRj%2Fbky%2FogytMGv%2FPzrzKB4xI4MzCaOiXY72WYbL%2BAIgVqu6SHNf0nFRCJmXIKzO70Te6rvXwbBe0pEL8gWsRgYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMAWkiQsEbQqRh7tzSrcA4zbd1rliVnoGKgR8KHHqC599ikB%2B5EXqKyS5lWCTo3tC2g3wAA5ekrOT07s5EEhc447UCrNvBsMyHnOIu3QjhPGM1qkTmUpX7IUztR%2BnoLRYosFmMUTnsilCKNY3NCf4nVGrP0s1uqo8XOO1E%2BTumZwLcWIk%2B51eTjvOKsnfSXqL0cdKQm%2BzTuiO7JPeN%2B43xFzcGf3yzrgCC0aDAtCDb5LW%2BGUDBXvSST2yx8cxPEahyDGneeIoFWLRpLI5gFi%2B%2FwIRbQJI4gaCso2Pn%2FLjTfzeOyCHP0ZS8xqE16zPSG9%2FpHiexHsIjiA7xoY3TJxeYLQoOspMwfU0kB8sIU3M1%2BncQJCDJgHq3dcpciR85qOD4jQ%2FxA1XImI1%2F6WWmEMau1lb7rgOBkX8MjMOegYaNPPDawsFtyotfD%2FbdbCrSgKZe8yVD9APe6gNube2htbhUbwDX9T3BCy8yYISu%2F7%2BgKZpSco2zb7z5nBmylPYQGZAJJHfc92K%2FmmXQw4nPcEJ%2B7mG9hicCo%2F7ZxE4usy5v54U8Zd%2BiNAqL8M5%2Bzj9HjG%2Fe3tIWLVcJCv3VD6FmEtXItxO%2FNbQhytA%2Bs1YNrb9v6wl6RF6dgpumjKtWNg4MTZVF30vX9ZCjUeP7ToMPaVzb0GOqUB8oQtCSLd9VviBJe7lSLVGMTdB7wtCt602vEUZA0%2FkEsFcRjUzxhkH8Pq2vsOeGGrYM9DFd9cS2TZRh745J7kGx4gfraXfgQe%2FJGC583KCq2jlbTR3SBGPNIrql6cf5gUXohxCOaahUQdZ%2BLApwSGtMrKGjRRDyA8rijD550%2BDfpGdT8rI9qfeHt44Rg5tN%2BInNJTlHmpB8HPRGQL3KPq%2BFvci8w%2B&X-Amz-Signature=ec6be201fbf499f658ff46ceda889e5c03b8bf67311d710e922667cf4c5b759b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQL3XCRA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD0fRj%2Fbky%2FogytMGv%2FPzrzKB4xI4MzCaOiXY72WYbL%2BAIgVqu6SHNf0nFRCJmXIKzO70Te6rvXwbBe0pEL8gWsRgYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMAWkiQsEbQqRh7tzSrcA4zbd1rliVnoGKgR8KHHqC599ikB%2B5EXqKyS5lWCTo3tC2g3wAA5ekrOT07s5EEhc447UCrNvBsMyHnOIu3QjhPGM1qkTmUpX7IUztR%2BnoLRYosFmMUTnsilCKNY3NCf4nVGrP0s1uqo8XOO1E%2BTumZwLcWIk%2B51eTjvOKsnfSXqL0cdKQm%2BzTuiO7JPeN%2B43xFzcGf3yzrgCC0aDAtCDb5LW%2BGUDBXvSST2yx8cxPEahyDGneeIoFWLRpLI5gFi%2B%2FwIRbQJI4gaCso2Pn%2FLjTfzeOyCHP0ZS8xqE16zPSG9%2FpHiexHsIjiA7xoY3TJxeYLQoOspMwfU0kB8sIU3M1%2BncQJCDJgHq3dcpciR85qOD4jQ%2FxA1XImI1%2F6WWmEMau1lb7rgOBkX8MjMOegYaNPPDawsFtyotfD%2FbdbCrSgKZe8yVD9APe6gNube2htbhUbwDX9T3BCy8yYISu%2F7%2BgKZpSco2zb7z5nBmylPYQGZAJJHfc92K%2FmmXQw4nPcEJ%2B7mG9hicCo%2F7ZxE4usy5v54U8Zd%2BiNAqL8M5%2Bzj9HjG%2Fe3tIWLVcJCv3VD6FmEtXItxO%2FNbQhytA%2Bs1YNrb9v6wl6RF6dgpumjKtWNg4MTZVF30vX9ZCjUeP7ToMPaVzb0GOqUB8oQtCSLd9VviBJe7lSLVGMTdB7wtCt602vEUZA0%2FkEsFcRjUzxhkH8Pq2vsOeGGrYM9DFd9cS2TZRh745J7kGx4gfraXfgQe%2FJGC583KCq2jlbTR3SBGPNIrql6cf5gUXohxCOaahUQdZ%2BLApwSGtMrKGjRRDyA8rijD550%2BDfpGdT8rI9qfeHt44Rg5tN%2BInNJTlHmpB8HPRGQL3KPq%2BFvci8w%2B&X-Amz-Signature=c318831534633dbe6bb729397790d684fb0eb8c5665927187bdcf5f790dc052c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
