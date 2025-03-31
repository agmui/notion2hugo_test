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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKJFDPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICtRGcrvrBof0T0pQ70gU9yPPbgOCrhoio%2BiUHJR4%2F%2BwAiBDbGlVa2MMkZnzDQfrfJvjAbo05XWMxkawkeRW%2Fb0W5SqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRYtrPtyhOABr0EoKtwDIRR20qWWPMseGrTtB%2FOMYXSJNECzOQCgKY7ao%2BTnX%2BfTArpZNZOJ%2BP9Kj6oiDKWEUXWm6TIJ3z7ZrVAO8T5r4hza90w4rhsxzupsKyhtNvuyx7GEjKovzyMJpPZYp0w1JG3CzwoMjnDPGa2NoTqnFi39BtshLCq47k%2BdqbVfrGLu9H78bqOaHOsoUbjBhk5%2BzfdIf%2FND0trnQgdVlFIgb2qAeOhjGLF3IxZg%2F%2BZ2yUGCNaQsjuGxU2uZX2QfrCVSy2vQqjiyAaE82qTcakTCEoAeM9vII%2BMuj9D%2FNTwiyQCGk9JiHeSuU%2F6WZCEVpUqJy2ZhENFsbSO9%2FTpzfEW1jG2oNNuKlrYx487YrdMXNtqpuW4l0Rm%2FBCHjQ1oluvkgD1kuighfolW0%2BKZxwKgvn9V6MUvBk7Ly8wARvPeDa2Ej6IgBl8j%2Flw2ZjBZHAPbTnL1QXDE4cq3ExWQAoa9%2Bnn3G3IL72u6g%2FX3C8jgMQqJa6iO%2F0NNklK2cz961N8tj0J4ajVWr9VT2dpyd0F2Md0if360KcW%2B1sURoWlz2RqAIux547%2FLY1ynMekHAGVCiOXgyQuP86UiffUUaw5wQwbmn7c6trjfbiPRRu3rWqF%2BkGnC5PKGlDgM2dTcwmeapvwY6pgGNQGSolkUCIzOtzO9aWzQ0BD4ZZrLpKhrHVPLqMF2NKpF21rpIaCzmArfJh2Y%2B6B%2Bp5pWgRPrFplwAoiqavgedzajCmYTBTXX%2BE1Cfx%2FAVJZoyHF%2FFB%2FHePdKMnGIXrg2hEjNh6y1wavJekRUn7XvnunRFa1O9%2FNrzYFbU%2FrHq%2BSRwZVj2W%2Fcb322xHHmkonoSUgK%2FKbP8mfF6cYN79og07rWq8CFg&X-Amz-Signature=1598920062dbd13215ccd3aa02617fef95d638e98b89786ab8249a7db9321eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKJFDPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICtRGcrvrBof0T0pQ70gU9yPPbgOCrhoio%2BiUHJR4%2F%2BwAiBDbGlVa2MMkZnzDQfrfJvjAbo05XWMxkawkeRW%2Fb0W5SqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRYtrPtyhOABr0EoKtwDIRR20qWWPMseGrTtB%2FOMYXSJNECzOQCgKY7ao%2BTnX%2BfTArpZNZOJ%2BP9Kj6oiDKWEUXWm6TIJ3z7ZrVAO8T5r4hza90w4rhsxzupsKyhtNvuyx7GEjKovzyMJpPZYp0w1JG3CzwoMjnDPGa2NoTqnFi39BtshLCq47k%2BdqbVfrGLu9H78bqOaHOsoUbjBhk5%2BzfdIf%2FND0trnQgdVlFIgb2qAeOhjGLF3IxZg%2F%2BZ2yUGCNaQsjuGxU2uZX2QfrCVSy2vQqjiyAaE82qTcakTCEoAeM9vII%2BMuj9D%2FNTwiyQCGk9JiHeSuU%2F6WZCEVpUqJy2ZhENFsbSO9%2FTpzfEW1jG2oNNuKlrYx487YrdMXNtqpuW4l0Rm%2FBCHjQ1oluvkgD1kuighfolW0%2BKZxwKgvn9V6MUvBk7Ly8wARvPeDa2Ej6IgBl8j%2Flw2ZjBZHAPbTnL1QXDE4cq3ExWQAoa9%2Bnn3G3IL72u6g%2FX3C8jgMQqJa6iO%2F0NNklK2cz961N8tj0J4ajVWr9VT2dpyd0F2Md0if360KcW%2B1sURoWlz2RqAIux547%2FLY1ynMekHAGVCiOXgyQuP86UiffUUaw5wQwbmn7c6trjfbiPRRu3rWqF%2BkGnC5PKGlDgM2dTcwmeapvwY6pgGNQGSolkUCIzOtzO9aWzQ0BD4ZZrLpKhrHVPLqMF2NKpF21rpIaCzmArfJh2Y%2B6B%2Bp5pWgRPrFplwAoiqavgedzajCmYTBTXX%2BE1Cfx%2FAVJZoyHF%2FFB%2FHePdKMnGIXrg2hEjNh6y1wavJekRUn7XvnunRFa1O9%2FNrzYFbU%2FrHq%2BSRwZVj2W%2Fcb322xHHmkonoSUgK%2FKbP8mfF6cYN79og07rWq8CFg&X-Amz-Signature=4bac5a9c19823389eda57507f2ed55a011e21aa755dfe12e1dbb3776dffd8b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
