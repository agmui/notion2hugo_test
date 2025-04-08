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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPEVFIW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnsyjifyvQs5Xq1o5gKqJ4tFFGP%2FNyTBx%2Boh99mT2e6AiEAhwaPHTNrybSNbeuZ2YYOmB01mHjDZKDnT%2BOGPhgHJnoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEzdURCOqKC34S1zGCrcA%2B2CTSaLOng8LYg%2FEGbY1ngqSYfZZSf63lY6eE8kX54o5xP%2FMLOVJvGhqJH%2BJwuS29FWyddaGu9NV4APoU0TfW1vU2itlo4I1bNWUCnzWFH6VP5tUKqH0HA%2BUWBYbBLaytrtYMbW4Q0ixuqiEleE1mnKFXownt8z3xbxGy%2Buc6p7gVeAgPQglgZLT1k%2FCZ6b3BiQMxUNqdS0mkNR%2B8aRnTog8ZFjBv5okB8a79TdvC1JVWAHXD1%2BkZFN6J0rGKht%2FXMDEfPfIzz0VpDX%2FhtyJ%2BMe6K3hrY4DoK0ARTC2jU4o%2FPbkFiMePiWJqsbPTwseVIwZjJ86oInLzHAxzIGlbbYvFYam7%2FEv4kunDgg9SDLV1EKQESHOab1S4%2BsdW0sSn3nGFUV0bXBhwpKIsDvFjtCfhZ9RzpkJ33ndoTtLKA9fOz%2BKi7FM3iGORCdBp21qo%2BqXCvHz%2FloC9VvWWm5vGP574LDJ4AsGJoquXMvKC7fupActS4CAsvnG9OsCy7uHA8Ue4JaIMGOEa9ysqCegMQbg10xroY6wWNuEImSqKksqK70IRVIKH%2FnzKTwundDTlEDRUFuwkpg488mg9zYE6KdsS%2BRG0CZaozpT25CSYp4WPrYVSgQf6qKmk5x1MMLt0r8GOqUBs%2FrTNuyP7piCsdBFvzT6Vb8wPELOpCm7BTTaXNz1izry4vkDCldTiksa43zvz0IuKmyCjRUc1p448DJA%2BhH%2FTI97cEH1U6dIB9Qzy8829sPkCTA%2B4ob%2FqewAtTq6hXywLcb%2FVWxxa3NK%2BkJ7nGh5pWXtjePOaDHp1rPSPzrh2SBESV4Jjw6K7rYmIi0GHu0xGG5aqZGhQ0wzXEPXmHp4uod8Sbjm&X-Amz-Signature=bc40c182ceefae1b3c23f068d8e6aa1a1f881a572eac77f75090884f45af7dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPEVFIW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnsyjifyvQs5Xq1o5gKqJ4tFFGP%2FNyTBx%2Boh99mT2e6AiEAhwaPHTNrybSNbeuZ2YYOmB01mHjDZKDnT%2BOGPhgHJnoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEzdURCOqKC34S1zGCrcA%2B2CTSaLOng8LYg%2FEGbY1ngqSYfZZSf63lY6eE8kX54o5xP%2FMLOVJvGhqJH%2BJwuS29FWyddaGu9NV4APoU0TfW1vU2itlo4I1bNWUCnzWFH6VP5tUKqH0HA%2BUWBYbBLaytrtYMbW4Q0ixuqiEleE1mnKFXownt8z3xbxGy%2Buc6p7gVeAgPQglgZLT1k%2FCZ6b3BiQMxUNqdS0mkNR%2B8aRnTog8ZFjBv5okB8a79TdvC1JVWAHXD1%2BkZFN6J0rGKht%2FXMDEfPfIzz0VpDX%2FhtyJ%2BMe6K3hrY4DoK0ARTC2jU4o%2FPbkFiMePiWJqsbPTwseVIwZjJ86oInLzHAxzIGlbbYvFYam7%2FEv4kunDgg9SDLV1EKQESHOab1S4%2BsdW0sSn3nGFUV0bXBhwpKIsDvFjtCfhZ9RzpkJ33ndoTtLKA9fOz%2BKi7FM3iGORCdBp21qo%2BqXCvHz%2FloC9VvWWm5vGP574LDJ4AsGJoquXMvKC7fupActS4CAsvnG9OsCy7uHA8Ue4JaIMGOEa9ysqCegMQbg10xroY6wWNuEImSqKksqK70IRVIKH%2FnzKTwundDTlEDRUFuwkpg488mg9zYE6KdsS%2BRG0CZaozpT25CSYp4WPrYVSgQf6qKmk5x1MMLt0r8GOqUBs%2FrTNuyP7piCsdBFvzT6Vb8wPELOpCm7BTTaXNz1izry4vkDCldTiksa43zvz0IuKmyCjRUc1p448DJA%2BhH%2FTI97cEH1U6dIB9Qzy8829sPkCTA%2B4ob%2FqewAtTq6hXywLcb%2FVWxxa3NK%2BkJ7nGh5pWXtjePOaDHp1rPSPzrh2SBESV4Jjw6K7rYmIi0GHu0xGG5aqZGhQ0wzXEPXmHp4uod8Sbjm&X-Amz-Signature=21e58389a40841dff9d55abfcbf16381bbf7eadd72d6c8be890680299e352a66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
