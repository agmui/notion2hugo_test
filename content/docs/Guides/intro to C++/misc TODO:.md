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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX5777I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBnDa9kOALRZXExLNj851DG5MPOxmo6dwj2BYZBvMndSAiEAmKxmknnT3mYIOiZo1IgOZuOyr4G5AA9HYhREKENs4%2Bsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDog66AjIrCDUou%2BmircA%2BrlFpez0vWanJ0d87BeQSDvVq%2FWG6%2BbAS59o4ZHrsNK4OqWLFoSbGt8kJxh3sdXX73mAxZ1iRIrf7%2FHhZ1lwIvgZG9m5LqBuGlxeZYcafl9oMSG9TVEoXEw3kawJ4zDqecmNMzdCgiyqu3Z4DNaJDwNtd2R05btbe9NrYWy9covwA9t0yIvri93b%2BIH%2BK8EY%2FJYNfwZ1RjgpLyrauWRgpztN52Uwnjkq3DZEQ%2FI8l%2F16sZ3XORnycLWJO4zL%2FOwJlLKlxeqA0HgnFGtRK41ouztngnJzPAdKWtVQIdNbsZBl%2B0BuzCrps%2FZ32zVLSZJhticbvnD%2FpPNvP8Ii%2FRrbRbjYdm7aFJk8Bq5cWa85pHZ09Y75MFsZnHxxMn1RZzOkwusuPz%2Bdej0rbWB02hWjOZo3xyfM6o0B%2FmChv99TZiuWKfNnzQ4tQXK8MF3kItzRbzf8aydBOnOnrp1jwL1nGMDWuQknrJV1FWn1YPwowtmhrs8ylZLZ5tOIfwjc0RHfqtjzoGlXge%2Bz2mr7bwCmQ3whBkUek5sh6nC3%2BN8TxzZ%2F%2FU0iSd40UeHBLu2xShgW1ob%2BXQJvjdyAuUG9t3vS0337CH3VB8rGcqurmrgQmkT5NcY2gDtPqPekaVlMIa%2Fwb0GOqUBPE5%2BHYaDrPpPdo08BLvn5XWCjwh9RgjNPsxAGN2Qhj8o1jF%2F5p174joX908kx75Y%2BLE4EFeMOYw%2BDQziObqqav43QfHIZsL7X2aK%2FZ5pfvEDtBZamry8Hecb7ICMnfkEwTTdhKef76SfKhgO9kkaUeNy2tV%2FzukrUwcw2TsWA4lh2fA4OxwFuyMaddHYUXIBvZWbS9xDdOdhefm7sp7pHZzp2qrb&X-Amz-Signature=8a82e03566e0da31413fb1b48d60d5dd7dc1b0a208a87e53fb8f28d8e058ffdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX5777I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBnDa9kOALRZXExLNj851DG5MPOxmo6dwj2BYZBvMndSAiEAmKxmknnT3mYIOiZo1IgOZuOyr4G5AA9HYhREKENs4%2Bsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDog66AjIrCDUou%2BmircA%2BrlFpez0vWanJ0d87BeQSDvVq%2FWG6%2BbAS59o4ZHrsNK4OqWLFoSbGt8kJxh3sdXX73mAxZ1iRIrf7%2FHhZ1lwIvgZG9m5LqBuGlxeZYcafl9oMSG9TVEoXEw3kawJ4zDqecmNMzdCgiyqu3Z4DNaJDwNtd2R05btbe9NrYWy9covwA9t0yIvri93b%2BIH%2BK8EY%2FJYNfwZ1RjgpLyrauWRgpztN52Uwnjkq3DZEQ%2FI8l%2F16sZ3XORnycLWJO4zL%2FOwJlLKlxeqA0HgnFGtRK41ouztngnJzPAdKWtVQIdNbsZBl%2B0BuzCrps%2FZ32zVLSZJhticbvnD%2FpPNvP8Ii%2FRrbRbjYdm7aFJk8Bq5cWa85pHZ09Y75MFsZnHxxMn1RZzOkwusuPz%2Bdej0rbWB02hWjOZo3xyfM6o0B%2FmChv99TZiuWKfNnzQ4tQXK8MF3kItzRbzf8aydBOnOnrp1jwL1nGMDWuQknrJV1FWn1YPwowtmhrs8ylZLZ5tOIfwjc0RHfqtjzoGlXge%2Bz2mr7bwCmQ3whBkUek5sh6nC3%2BN8TxzZ%2F%2FU0iSd40UeHBLu2xShgW1ob%2BXQJvjdyAuUG9t3vS0337CH3VB8rGcqurmrgQmkT5NcY2gDtPqPekaVlMIa%2Fwb0GOqUBPE5%2BHYaDrPpPdo08BLvn5XWCjwh9RgjNPsxAGN2Qhj8o1jF%2F5p174joX908kx75Y%2BLE4EFeMOYw%2BDQziObqqav43QfHIZsL7X2aK%2FZ5pfvEDtBZamry8Hecb7ICMnfkEwTTdhKef76SfKhgO9kkaUeNy2tV%2FzukrUwcw2TsWA4lh2fA4OxwFuyMaddHYUXIBvZWbS9xDdOdhefm7sp7pHZzp2qrb&X-Amz-Signature=be9ef7b065bb3904cc575b4dc38ae884ab7a7ea2388178520bf8038a37b84be1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
